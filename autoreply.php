<?php
/* Carbonium contact auto-reply + enquiry copy (2026-11-05).
   The site's forms still send every enquiry to Formspree (-> Gmail). After
   Formspree accepts a submission, assets/js/autoreply.js posts the same fields
   here. This script then:
     1. emails the visitor a fixed confirmation from info@carboniumagency.com
     2. emails a copy of the enquiry to info@carboniumagency.com
   Mail goes through the info@ mailbox (Hostinger SMTP, DKIM-signed) when the
   private config file exists; otherwise it falls back to PHP mail().

   Private config, OUTSIDE the website folder (never in GitHub):
     /home/<hosting user>/carbonium-mail.php
       <?php return ['user' => 'info@carboniumagency.com', 'pass' => 'MAILBOX PASSWORD'];

   Abuse guards: POST only, same-site origin, honeypot, strict email check,
   visitor text never goes to the visitor, rate limits. */

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function done($code, $msg) { http_response_code($code); echo json_encode(['ok' => $code === 200, 'msg' => $msg]); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') done(405, 'POST only');

$site = 'carboniumagency.com';
$box  = 'info@' . $site;
$src  = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
$host = strtolower(parse_url($src, PHP_URL_HOST) ?: '');
if ($host !== $site && $host !== 'www.' . $site) done(403, 'origin');

if (!empty($_POST['website'])) done(200, 'ok');              // honeypot: pretend success

$email = trim((string)($_POST['email'] ?? ''));
if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email)) done(400, 'email');

function field($k, $max) { $v = trim(str_replace("\0", '', (string)($_POST[$k] ?? ''))); return mb_substr($v, 0, $max); }
$nameRaw = field('name', 120);
$name = preg_replace('/[\r\n\t]+/', ' ', strip_tags($nameRaw));
$name = preg_replace('~(https?://|www\.)\S*~i', '', $name);
$name = trim(preg_replace('/[^\p{L}\p{M}\s\'\.-]/u', '', $name));
$first = $name === '' ? '' : preg_split('/\s+/', $name)[0];
if (mb_strlen($first) > 30) $first = '';

/* ---------- rate limits (server temp folder) ---------- */
$dir = rtrim(sys_get_temp_dir(), '/') . '/carbonium-autoreply';
if (!is_dir($dir)) @mkdir($dir, 0700, true);
$now = time();
function hits($file, $window, $now) {
  $t = is_file($file) ? array_filter(array_map('intval', explode("\n", (string)@file_get_contents($file))), function ($x) use ($now, $window) { return $x > $now - $window; }) : [];
  return array_values($t);
}
function bump($file, $list, $now) { $list[] = $now; @file_put_contents($file, implode("\n", $list), LOCK_EX); }
$fIp  = "$dir/ip-" . sha1($_SERVER['REMOTE_ADDR'] ?? 'x');
$fEm  = "$dir/em-" . sha1(strtolower($email));
$fAll = "$dir/all";
$hIp = hits($fIp, 3600, $now); $hEm = hits($fEm, 86400, $now); $hAll = hits($fAll, 86400, $now);
if (count($hIp) >= 5 || count($hAll) >= 60) done(200, 'ok');            // silently skip everything

/* ---------- mail transport ---------- */
$docRoot = rtrim($_SERVER['DOCUMENT_ROOT'] ?? __DIR__, '/');      // /home/<user>/domains/<site>/public_html
$cfg = null;
foreach ([dirname($docRoot, 3), dirname($docRoot)] as $d) {          // home folder first, then the site folder
  if (is_file($d . '/carbonium-mail.php')) { $cfg = @include $d . '/carbonium-mail.php'; break; }
}

function smtp_send($cfg, $from, $to, $raw) {
  $fp = @stream_socket_client('ssl://smtp.hostinger.com:465', $errno, $errstr, 15);
  if (!$fp) return false;
  stream_set_timeout($fp, 15);
  $read = function () use ($fp) { $out = ''; while (($l = fgets($fp, 1024)) !== false) { $out .= $l; if (isset($l[3]) && $l[3] === ' ') break; } return $out; };
  $cmd  = function ($c, $ok) use ($fp, $read) { if ($c !== null) fwrite($fp, $c . "\r\n"); $r = $read(); return strpos($r, (string)$ok) === 0; };
  $okAll = $cmd(null, 220) && $cmd('EHLO carboniumagency.com', 250)
    && $cmd('AUTH LOGIN', 334) && $cmd(base64_encode($cfg['user']), 334) && $cmd(base64_encode($cfg['pass']), 235)
    && $cmd('MAIL FROM:<' . $from . '>', 250) && $cmd('RCPT TO:<' . $to . '>', 250) && $cmd('DATA', 354);
  if ($okAll) { $data = preg_replace('/^\./m', '..', $raw); $okAll = $cmd($data . "\r\n.", 250); }
  @fwrite($fp, "QUIT\r\n"); fclose($fp);
  return $okAll;
}

function send_mail($cfg, $box, $to, $subject, $body, $replyTo, $extra = []) {
  $encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
  $h = array_merge([
    'From: Carbonium <' . $box . '>',
    'Reply-To: ' . $replyTo,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
  ], $extra);
  if (is_array($cfg) && !empty($cfg['user']) && !empty($cfg['pass'])) {
    $raw = 'Date: ' . date('r') . "\r\n" . 'To: <' . $to . ">\r\n" . 'Subject: ' . $encSubject . "\r\n"
         . 'Message-ID: <' . bin2hex(random_bytes(12)) . '@carboniumagency.com>' . "\r\n"
         . implode("\r\n", $h) . "\r\n\r\n" . $body;
    if (smtp_send($cfg, $box, $to, $raw)) return 'smtp';
  }
  return @mail($to, $encSubject, $body, implode("\r\n", $h), '-f' . $box) ? 'mail' : false;
}

$result = [];

/* ---------- 1. copy of the enquiry to info@ ---------- */
$lines = [
  'Name'    => $nameRaw,
  'Email'   => $email,
  'Company' => field('company', 200),
  'Budget'  => trim(field('budget_min', 40) . (field('budget_max', 40) !== '' ? ' – ' . field('budget_max', 40) : ''), ' –'),
  'Page'    => field('page', 200),
];
$copy = "New enquiry from carboniumagency.com\r\n\r\n";
foreach ($lines as $k => $v) if ($v !== '') $copy .= str_pad($k . ':', 10) . preg_replace('/[\r\n]+/', ' ', $v) . "\r\n";
$copy .= "\r\nMessage:\r\n" . str_replace(["\r\n", "\r"], "\n", field('message', 5000));
$copy = str_replace("\n", "\r\n", str_replace("\r\n", "\n", $copy)) . "\r\n\r\n(Also delivered to Gmail via Formspree. Reply to this email to answer the sender.)\r\n";
$who = $name !== '' ? $name : $email;
$result['copy'] = send_mail($cfg, $box, $box, 'New enquiry — ' . mb_substr($who, 0, 60), $copy, $email);

/* ---------- 2. confirmation to the visitor (max 1 per address per day) ---------- */
if (count($hEm) < 1) {
  $hi = $first !== '' ? "Hi $first," : "Hi,";
  $body = $hi . "\r\n\r\n"
    . "Thanks for reaching out to Carbonium. Your message has arrived, and a member of our team will review it and get back to you shortly.\r\n\r\n"
    . "If it's urgent, reply to this email or message us on WhatsApp: +971 56 798 5386 (https://wa.me/971567985386).\r\n\r\n"
    . "Carbonium\r\n"
    . "Global AI marketing agency\r\n"
    . "https://carboniumagency.com\r\n\r\n"
    . "You're receiving this one-time confirmation because this address was entered in the contact form on carboniumagency.com.\r\n";
  $result['reply'] = send_mail($cfg, $box, $email, "We've received your brief — Carbonium", $body, $box,
    ['Auto-Submitted: auto-replied', 'X-Auto-Response-Suppress: All']);
  if ($result['reply']) bump($fEm, $hEm, $now);
}

bump($fIp, $hIp, $now); bump($fAll, $hAll, $now);
done(($result['copy'] || !empty($result['reply'])) ? 200 : 500, json_encode($result));
