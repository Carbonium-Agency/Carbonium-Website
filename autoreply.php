<?php
/* Carbonium contact auto-reply (added 2026-11-05).
   The site's forms still send every enquiry to Formspree. After Formspree
   accepts a submission, assets/js/autoreply.js posts the visitor's name and
   email here, and this script sends them one fixed confirmation email from
   info@carboniumagency.com.

   Abuse guards: POST only, same-site origin, honeypot, strict email check,
   name cleaned and capped, no visitor text other than the first name in the
   email, and rate limits (per IP, per email, and a daily total). */

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function done($code, $msg) { http_response_code($code); echo json_encode(['ok' => $code === 200, 'msg' => $msg]); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') done(405, 'POST only');

$site = 'carboniumagency.com';
$src = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
$host = strtolower(parse_url($src, PHP_URL_HOST) ?: '');
if ($host !== $site && $host !== 'www.' . $site) done(403, 'origin');

if (!empty($_POST['website'])) done(200, 'ok');              // honeypot: pretend success

$email = trim((string)($_POST['email'] ?? ''));
if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email)) done(400, 'email');

$name = (string)($_POST['name'] ?? '');
$name = preg_replace('/[\r\n\t]+/', ' ', strip_tags($name));
$name = preg_replace('~(https?://|www\.)\S*~i', '', $name);    // no links in the greeting
$name = trim(preg_replace('/[^\p{L}\p{M}\s\'\.-]/u', '', $name));
$first = $name === '' ? '' : preg_split('/\s+/', $name)[0];
if (mb_strlen($first) > 30) $first = '';

/* rate limits, stored in the server temp folder */
$dir = rtrim(sys_get_temp_dir(), '/') . '/carbonium-autoreply';
if (!is_dir($dir)) @mkdir($dir, 0700, true);
$now = time();
function hits($file, $window, $now) {
  $t = is_file($file) ? array_filter(array_map('intval', explode("\n", (string)@file_get_contents($file))), function ($x) use ($now, $window) { return $x > $now - $window; }) : [];
  return array_values($t);
}
$ip = $_SERVER['REMOTE_ADDR'] ?? 'x';
$fIp = "$dir/ip-" . sha1($ip);
$fEm = "$dir/em-" . sha1(strtolower($email));
$fAll = "$dir/all";
$hIp = hits($fIp, 3600, $now); $hEm = hits($fEm, 86400, $now); $hAll = hits($fAll, 86400, $now);
if (count($hIp) >= 3 || count($hEm) >= 1 || count($hAll) >= 30) done(200, 'ok');   // silently skip

$subject = "We've received your brief — Carbonium";
$hi = $first !== '' ? "Hi $first," : "Hi,";
$body = $hi . "\r\n\r\n"
  . "Thanks for reaching out to Carbonium. Your message has arrived, and a member of our team will review it and get back to you shortly.\r\n\r\n"
  . "If it's urgent, reply to this email or message us on WhatsApp: +971 56 798 5386 (https://wa.me/971567985386).\r\n\r\n"
  . "Carbonium\r\n"
  . "Global AI marketing agency\r\n"
  . "https://carboniumagency.com\r\n\r\n"
  . "You're receiving this one-time confirmation because this address was entered in the contact form on carboniumagency.com.\r\n";

$from = 'info@' . $site;
$headers = [
  'From: Carbonium <' . $from . '>',
  'Reply-To: ' . $from,
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
  'Auto-Submitted: auto-replied',
  'X-Auto-Response-Suppress: All',
];
$encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$sent = @mail($email, $encSubject, $body, implode("\r\n", $headers), '-f' . $from);

if ($sent) {
  $hIp[] = $now; $hEm[] = $now; $hAll[] = $now;
  @file_put_contents($fIp, implode("\n", $hIp), LOCK_EX);
  @file_put_contents($fEm, implode("\n", $hEm), LOCK_EX);
  @file_put_contents($fAll, implode("\n", $hAll), LOCK_EX);
  done(200, 'sent');
}
done(500, 'mail');
