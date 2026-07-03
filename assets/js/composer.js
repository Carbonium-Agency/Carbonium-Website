/* Card 01 "Content Generation" — full 5-mode content composer.
   Faithful vanilla port of the bundle's ContentComposerVis React component
   (~550 lines, 17 state vars). Reproduces every mode's distinct output,
   typing/reveal animation, auto-cycling, and clickable mode pills. Modes:
   0 Ad Copy · 1 Landing Pages · 2 AEO Articles · 3 Social Posts · 4 UGC Scripts.
   Exposes initComposer(panel) returning { start, stop } for IntersectionObserver
   gating (pause offscreen). No React. */

var PILLS = ['Ad Copy', 'Landing Pages', 'AEO Articles', 'Social Posts', 'UGC Scripts'];
var BRIEFS = [
  'Write me a Facebook ad for my skincare brand',
  'Write a hero section for a fitness app landing page',
  'Write an AEO article about sustainable fashion brands',
  'Create an Instagram travel post and a TikTok food post',
  'Write a UGC script for my jewelry brand'
];
var AD_HL = 'Glow from within. ✨';
var LP_HL = '30 Days. No Excuses. Real Results.';
var LP_SUB = 'Your AI-powered fitness coach, available 24/7.';
var DM = "'DM Sans',sans-serif";
var IMG = 'assets/img/';
var VID = 'assets/videos/';

var AEO_CARDS = [
  { name: 'Claude', nameColor: '#CC785C', accent: '#CC785C', badgeBg: 'rgba(204,120,92,0.12)', badgeColor: '#CC785C', border: '1px solid #E8E8E8', before: '', after: ' exemplifies sustainable sourcing and ethical practices...', logo: '<div style="width:20px;height:20px;border-radius:50%;background:#CC785C;display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M6 16L10 4L14 16" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 12h5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>' },
  { name: 'ChatGPT', nameColor: '#10A37F', accent: '#10A37F', badgeBg: 'rgba(16,163,127,0.12)', badgeColor: '#10A37F', border: '1px solid #E8E8E8', before: 'Sustainable brands like ', after: ' are leading the movement...', logo: '<div style="width:20px;height:20px;border-radius:5px;background:#10A37F;display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M10 2.5C6 2.5 2.5 6 2.5 10S6 17.5 10 17.5 17.5 14 17.5 10 14 2.5 10 2.5zm0 2.5c1.4 0 2.7.5 3.6 1.4l-7.2 7.2C5.5 12.7 5 11.4 5 10c0-2.8 2.2-5 5-5zm0 10c-1.4 0-2.7-.5-3.6-1.4l7.2-7.2c.9.9 1.4 2.2 1.4 3.6 0 2.8-2.2 5-5 5z" fill="white"/></svg></div>' },
  { name: 'Gemini', nameColor: '#4285F4', accent: '#4285F4', badgeBg: 'rgba(66,133,244,0.1)', badgeColor: '#4285F4', border: '1px solid #E8EAED', before: '', after: ' leads sustainability rankings for eco-fashion globally...', logo: '<div style="width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#4285F4,#9B59B6)"><svg width="11" height="11" viewBox="0 0 20 20" fill="white"><path d="M10 1C10 6.5 13.5 10 19 10C13.5 10 10 13.5 10 19C10 13.5 6.5 10 1 10C6.5 10 10 6.5 10 1Z"/></svg></div>' },
  { name: 'Perplexity', nameColor: '#1B1B1B', accent: '#1B1B1B', badgeBg: 'rgba(0,0,0,0.08)', badgeColor: '#1B1B1B', border: '1px solid #E0E0E0', before: 'Eco-conscious shoppers trust ', after: ' for certified fashion...', logo: '<div style="width:20px;height:20px;border-radius:50%;background:#000;display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14M5.1 5.1l9.8 9.8M14.9 5.1L5.1 14.9" stroke="white" stroke-width="1.7" stroke-linecap="round"/></svg></div>' },
  { name: 'Copilot', nameColor: '#0078D4', accent: '#0078D4', badgeBg: 'rgba(0,120,212,0.1)', badgeColor: '#0078D4', border: '1px solid #E0F0FF', before: 'For sustainable fashion, ', after: ' offers certified eco products...', logo: '<div style="width:20px;height:20px;border-radius:4px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;flex-shrink:0"><div style="background:#F25022"></div><div style="background:#7FBA00"></div><div style="background:#00A4EF"></div><div style="background:#FFB900"></div></div>' },
  { name: 'Meta AI', nameColor: '#1877F2', accent: '#1877F2', badgeBg: 'rgba(24,119,242,0.1)', badgeColor: '#1877F2', border: '1px solid #DCE8FF', before: 'Discover sustainable brands — ', after: ' is featured across Meta AI...', logo: '<div style="width:20px;height:20px;border-radius:5px;background:linear-gradient(135deg,#0668E1,#1877F2);display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm8 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" stroke="white" stroke-width="1.5"/></svg></div>' },
  { name: 'Grok', nameColor: '#1A1A1A', accent: '#1A1A1A', badgeBg: 'rgba(0,0,0,0.07)', badgeColor: '#1A1A1A', border: '1px solid #E8E8E8', before: '', after: ' ranks #1 for sustainable fashion in Grok analysis...', logo: '<div style="width:20px;height:20px;border-radius:4px;background:#1A1A1A;display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg></div>' }
];

var LP_TESTS = [
  { name: 'Sarah M.', q: 'Lost 12kg in 28 days. Unbelievable.' },
  { name: 'James T.', q: 'Best investment I ever made.' },
  { name: 'Priya K.', q: 'My coach never sleeps.' },
  { name: 'Marco R.', q: 'Down 3 sizes in 30 days.' },
  { name: 'Lisa W.', q: 'Finally a program that works.' }
];
var UGC_LINES = [
  { t: 'POV: everyone keeps asking where I got these rings 💍', b: false },
  { t: "So I'm finally telling you my secret...", b: false },
  { t: 'I found ', b: false }, { t: 'YOUR BRAND', b: true }, { t: ' a few months ago and honestly?', b: false },
  { t: 'The quality is insane for the price.', b: false },
  { t: 'Every piece feels so premium and they never tarnish.', b: false },
  { t: 'I literally wear them every single day now.', b: false },
  { t: 'Code SARAH = 30% off', b: true }, { t: ' your first order ✨', b: false },
  { t: "Trust me, you're gonna want to grab these. Link in bio 🛍️", b: false }
];
var UGC_SECTIONS = [
  { label: '[HOOK]', showAt: 1, lines: [[{ t: 'POV: everyone keeps asking where I got these rings 💍', b: false }]] },
  { label: '[PROBLEM → SOLUTION]', showAt: 2, lines: [[{ t: "So I'm finally telling you my secret...", b: false }], [{ t: 'I found ', b: false }, { t: 'YOUR BRAND', b: true }, { t: ' a few months ago and honestly?', b: false }]] },
  { label: '[PRODUCT]', showAt: 4, lines: [[{ t: 'The quality is insane for the price.', b: false }], [{ t: 'Every piece feels so premium and they never tarnish.', b: false }]] },
  { label: '[CTA]', showAt: 6, lines: [[{ t: 'Code SARAH = 30% off', b: true }, { t: ' your first order ✨', b: false }]] }
];

function esc(s) { return s; }
function span(txt, bold, color) { return bold ? '<span style="font-weight:700;color:' + (color || '#CC785C') + ';background:rgba(204,120,92,0.1);border-radius:2px;padding:0 2px">' + txt + '</span>' : '<span>' + txt + '</span>'; }

export function initComposer(panel) {
  if (!panel) return { start: function () {}, stop: function () {} };

  // keyframes the modes rely on (all but ugcLineIn already in page; add safely)
  if (!document.getElementById('__composer-kf')) {
    var st = document.createElement('style'); st.id = '__composer-kf';
    st.textContent = '@keyframes ugcLineIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(st);
  }

  var S = {
    phase: 0, briefLen: 0, adStep: 0, hlLen: 0, lpStep: 0, lpHlLen: 0, lpSubLen: 0,
    aeoStep: 0, spStep: 0, spCarouselIdx: 0, ugcLineIdx: 0, cycle: 0,
    scanning: false, running: false
  };
  var timer = null, blinkTimer = null, carouselTimer = null, builtMode = -1, blink = true;
  function pill() { return S.cycle % 5; }
  function clearT() { if (timer) { clearTimeout(timer); timer = null; } }

  // ---- widget contents built into the existing F5F5F5 panel ----
  panel.innerHTML =
      '<div class="cc-inrow" style="display:flex;gap:6px;margin-bottom:10px;transition:opacity 0.2s">' +
        '<div class="cc-brief" style="flex:1;background:#fff;border:1px solid #E0E0E0;border-radius:8px;padding:7px 10px;font-size:11px;font-family:' + DM + ';color:#1A1A1A;min-height:30px;letter-spacing:-0.01em"></div>' +
        '<div class="cc-gen" style="flex-shrink:0;background:#333;color:#fff;border-radius:8px;padding:7px 11px;font-size:10px;font-weight:700;font-family:' + DM + ';display:flex;align-items:center;cursor:pointer;transition:all 0.2s">Generate</div>' +
      '</div>' +
      '<div class="cc-out" style="background:#fff;border:1px solid #E8E8E8;border-radius:10px;overflow:hidden;min-height:70px;position:relative"></div>' +
      '<div class="cc-pills" style="display:flex;gap:5px;margin-top:9px;flex-wrap:wrap"></div>';

  var briefEl = panel.querySelector('.cc-brief');
  var genEl = panel.querySelector('.cc-gen');
  var outEl = panel.querySelector('.cc-out');
  var inrowEl = panel.querySelector('.cc-inrow');
  var pillsEl = panel.querySelector('.cc-pills');

  function renderPills() {
    pillsEl.innerHTML = '';
    PILLS.forEach(function (p, i) {
      var on = i === pill();
      var d = document.createElement('div');
      d.style.cssText = 'font-size:10px;font-weight:600;font-family:' + DM + ';padding:3px 9px;border-radius:999px;background:' + (on ? '#1A1A1A' : '#EBEBEB') + ';color:' + (on ? '#fff' : '#888') + ';transition:all 0.3s;cursor:pointer';
      d.textContent = p;
      d.addEventListener('click', function () { switchMode(i); });
      pillsEl.appendChild(d);
    });
  }

  function resetSteps() {
    S.briefLen = 0; S.adStep = 0; S.hlLen = 0; S.lpStep = 0; S.lpHlLen = 0; S.lpSubLen = 0;
    S.aeoStep = 0; S.spStep = 0; S.spCarouselIdx = 0; S.ugcLineIdx = 0; S.scanning = false;
  }
  function switchMode(i) {
    clearT(); if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
    S.cycle = i; S.phase = 0; resetSteps(); builtMode = -1;
    renderPills(); renderBrief(); outEl.innerHTML = '';
    if (S.running) schedule();
  }

  // ---- brief / generate button ----
  function renderBrief() {
    var b = BRIEFS[pill()];
    var caret = (S.phase === 0 && S.briefLen < b.length) ? '<span style="opacity:' + (blink ? 1 : 0) + ';margin-left:1px">|</span>' : '';
    briefEl.innerHTML = b.slice(0, S.briefLen) + caret;
    inrowEl.style.opacity = (S.phase === 1 || S.scanning) ? '0.3' : '1';
    var pulse = S.phase === 1;
    genEl.style.background = pulse ? '#1A1A1A' : '#333';
    genEl.style.transform = pulse ? 'scale(0.94)' : 'scale(1)';
    genEl.style.boxShadow = pulse ? '0 0 0 3px rgba(0,0,0,0.15)' : 'none';
  }

  // =================== per-mode output builders + updaters ===================
  function scanLine() { return S.scanning ? '<div style="position:absolute;left:0;right:0;height:2px;background:#00D4FF;box-shadow:0 0 8px #00D4FF,0 0 20px #00D4FF;z-index:5;pointer-events:none;animation:aiScan 0.5s linear forwards"></div>' : ''; }

  // ---- AD ----
  function renderAd() {
    var a = S.adStep;
    var h = a >= 2 ? (a === 2 ? AD_HL.slice(0, S.hlLen) : AD_HL) : '';
    var caret = (a === 2 && S.hlLen < AD_HL.length) ? '<span style="opacity:' + (blink ? 1 : 0) + '">|</span>' : '';
    outEl.innerHTML = scanLine() + '<div style="font-family:' + DM + '">' +
      (a >= 1 ? '<div style="display:flex;align-items:center;gap:7px;padding:7px 10px"><div style="width:22px;height:22px;border-radius:50%;background:#D4D4D4;flex-shrink:0"></div><div style="flex:1"><div style="font-size:10px;font-weight:700;color:#1A1A1A;line-height:1.2">Carbonium Agency</div><div style="font-size:9px;color:#999;line-height:1.2">Sponsored</div></div></div>' : '') +
      (a >= 2 ? '<div style="width:100%;position:relative;padding-bottom:56.25%;overflow:hidden;background:#EAEAEE"><img src="' + IMG + 'asAdShot.webp" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div>' : '') +
      (a >= 2 ? '<div style="padding:7px 10px 2px;font-size:11px;font-weight:700;color:#1A1A1A;line-height:1.4">' + h + caret + '</div>' : '') +
      (a >= 3 ? '<div style="padding:1px 10px 5px;font-size:10px;color:#666;line-height:1.6"><div>The serum dermatologists trust.</div>' + (a >= 4 ? '<div>Now 20% off — 48 hours only.</div>' : '') + '</div>' : '') +
      (a >= 5 ? '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;border-top:1px solid #EFEFEF"><span style="font-size:9px;color:#aaa;font-family:' + DM + '">carbonium.agency</span><div style="background:#1A1A1A;color:#fff;border-radius:999px;padding:4px 10px;font-size:9px;font-weight:700">Shop Now →</div></div>' : '') +
      '</div>';
  }

  // ---- LP (FitFlow) ----
  function renderLP() {
    var s = S.lpStep;
    var hl = s >= 1 ? (s === 1 ? LP_HL.slice(0, S.lpHlLen) : LP_HL) : '';
    var hlCaret = (s === 1 && S.lpHlLen < LP_HL.length) ? '<span style="opacity:' + (blink ? 1 : 0) + '">|</span>' : '';
    var sub = s >= 5 ? (s === 5 ? LP_SUB.slice(0, S.lpSubLen) : LP_SUB) : '';
    var subCaret = (s === 5 && S.lpSubLen < LP_SUB.length) ? '<span style="opacity:' + (blink ? 1 : 0) + '">|</span>' : '';
    var laser = (s >= 3 && s < 5) ? '<div style="position:absolute;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,#00D4FF 40%,#00D4FF 60%,transparent);box-shadow:0 0 12px 5px rgba(0,212,255,0.85);animation:laserLine 2s linear forwards;pointer-events:none"></div>' : '';
    var reveal = s >= 3 ? '' : 'clip-path:inset(0 0 100% 0);';
    var revAnim = s >= 3 ? 'animation:laserReveal 2s linear forwards;' : '';
    var imgPair = s >= 2 ? '<div style="display:flex;gap:8px;margin-top:8px">' +
      '<div style="flex:1;border-radius:8px;overflow:hidden;height:200px;background:#F5F5F5;position:relative"><img src="' + IMG + 'asLpA1.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain"><img src="' + IMG + 'asLpA2.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;' + reveal + revAnim + '">' + laser + '</div>' +
      '<div style="flex:1;border-radius:8px;overflow:hidden;height:200px;background:#F5F5F5;position:relative"><img src="' + IMG + 'asLpB1.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain"><img src="' + IMG + 'asLpB2.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;' + reveal + revAnim + '">' + laser + '</div></div>' : '';
    var pills = s >= 7 ? '<div style="display:flex;gap:4px;margin-top:7px">' + ['100K+ Members', '4.9★ Rating', '28 Days Avg. Result'].map(function (t) { return '<div style="flex:1;background:#F0F0F0;border-radius:999px;padding:4px 12px;text-align:center;font-size:11px;font-weight:600;color:#1A1A1A;font-family:' + DM + '">' + t + '</div>'; }).join('') + '</div>' : '';
    var marquee = '';
    if (s >= 7) {
      var doubled = LP_TESTS.concat(LP_TESTS);
      marquee = '<div style="overflow:hidden;margin-top:6px"><div style="display:flex;gap:6px;animation:marqueeScroll 22s linear infinite;width:fit-content">' +
        doubled.map(function (t) { return '<div style="background:#fff;border:1px solid #E8E8E8;border-radius:8px;padding:5px 10px;box-shadow:0 1px 3px rgba(0,0,0,0.06);display:flex;align-items:center;gap:6px;flex-shrink:0"><div style="width:16px;height:16px;border-radius:50%;background:#D8D8D8;flex-shrink:0"></div><div><div style="display:flex;align-items:center;gap:3px;white-space:nowrap"><span style="font-size:8px;font-weight:700;color:#1A1A1A;font-family:' + DM + '">' + t.name + '</span><span style="font-size:7.5px;color:#F5A623">★★★★★</span></div><div style="font-size:7.5px;color:#888;font-style:italic;font-family:' + DM + ';white-space:nowrap">' + t.q + '</div></div></div>'; }).join('') +
        '</div></div>';
    }
    var cta = s >= 7 ? '<div style="display:flex;gap:7px;margin-top:6px;justify-content:center"><div style="background:#1A1A1A;color:#fff;border-radius:999px;padding:5px 12px;font-size:9.5px;font-weight:700">Start Free Trial →</div><div style="background:#fff;color:#555;border:1px solid #D8D8D8;border-radius:999px;padding:5px 12px;font-size:9.5px;font-weight:600">Watch Demo</div></div>' : '';
    outEl.innerHTML = scanLine() + '<div style="font-family:' + DM + ';overflow:hidden">' +
      (s >= 1 ? '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 12px;border-bottom:1px solid #F0F0F0"><span style="font-size:10.5px;font-weight:700;color:#1A1A1A">FitFlow</span><div style="display:flex;gap:10px"><span style="font-size:9px;color:#999">Features</span><span style="font-size:9px;color:#999">Pricing</span><span style="font-size:9px;color:#999">About</span></div><div style="background:#1A1A1A;color:#fff;border-radius:999px;padding:3px 9px;font-size:9px;font-weight:700">Get Started</div></div>' : '') +
      '<div style="padding:10px 14px 10px">' +
        '<div style="font-size:13px;font-weight:800;color:#1A1A1A;line-height:1.25;letter-spacing:-0.02em;min-height:32px">' + hl + hlCaret + '</div>' +
        imgPair +
        (s >= 4 ? '<div style="margin-top:6px"><div style="font-size:8.5px;color:#aaa">30-Day Transformation</div></div>' : '') +
        '<div style="font-size:10px;color:#888;line-height:1.5;margin-top:6px;min-height:14px">' + sub + subCaret + '</div>' +
        pills + marquee + cta +
      '</div></div>';
  }

  // ---- AEO (built once, cards APPENDED so existing ones don't re-animate) ----
  function aeoCardHTML(c) {
    return '<div style="background:#fff;border-radius:8px;padding:6px 10px;display:flex;align-items:center;gap:8px;border:' + c.border + ';animation:slideFromLeft 0.3s ease-out forwards;flex:1;min-height:0">' + c.logo +
      '<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:700;color:' + c.nameColor + ';margin-bottom:2px;font-family:' + DM + '">' + c.name + '</div>' +
      '<div style="font-size:11px;color:#555;line-height:1.4;font-family:' + DM + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + c.before + '<span style="font-weight:700;color:' + c.accent + ';background:' + c.badgeBg + ';border-radius:3px;padding:0 2px">YOUR BRAND</span>' + c.after + '</div></div>' +
      '<div style="flex-shrink:0;background:' + c.badgeBg + ';color:' + c.badgeColor + ';border-radius:5px;padding:3px 8px;font-size:11px;font-weight:700;font-family:' + DM + ';white-space:nowrap;animation:citedPop 0.3s ease-out 0.5s both">✓ Cited</div></div>';
  }
  function buildAEO() {
    outEl.innerHTML = scanLine() + '<div style="height:320px;overflow:hidden;position:relative"><div class="cc-aeo-list" style="display:flex;flex-direction:column;padding:6px 8px;height:100%;box-sizing:border-box;gap:0"></div></div>';
  }
  function updateAEO() {
    var list = outEl.querySelector('.cc-aeo-list');
    if (!list) return;
    while (list.children.length < S.aeoStep) {
      var d = document.createElement('div');
      d.style.cssText = 'flex:1;min-height:0;display:flex';
      d.innerHTML = aeoCardHTML(AEO_CARDS[list.children.length]);
      list.appendChild(d.firstChild);
    }
  }

  // ---- SOC (built once, then carousel/opacity updated) ----
  function buildSOC() {
    var imgs = ['asSp1', 'asSp2', 'asSp3', 'asSp4', 'asSp5'].map(function (n) { return '<img src="' + IMG + n + '.webp" style="flex-shrink:0;width:100%;height:100%;object-fit:cover">'; }).join('');
    var dots = [0, 1, 2, 3, 4].map(function (i) { return '<div class="cc-sp-dot" data-i="' + i + '" style="width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.5);box-shadow:0 0 2px rgba(0,0,0,0.4);transition:background 0.3s"></div>'; }).join('');
    outEl.innerHTML = scanLine() + '<div style="padding:10px;display:flex;gap:8px;min-height:280px;align-items:stretch">' +
      '<div class="cc-ig" style="flex:1;border:2px solid #1A1A1A;border-radius:22px;overflow:hidden;background:#fff;opacity:0;transform:translateY(18px);transition:opacity 0.3s ease-out,transform 0.3s ease-out">' +
        '<div style="display:flex;align-items:center;gap:6px;padding:7px 8px;border-bottom:0.5px solid #E8E8E8"><div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#E040FB,#FF5722);flex-shrink:0"></div><span style="font-size:9px;font-weight:600;color:#1A1A1A;flex:1;font-family:' + DM + '">travelwithsara</span><div style="background:#0095F6;color:#fff;border-radius:5px;padding:2px 7px;font-size:8.5px;font-weight:700;font-family:' + DM + '">Follow</div></div>' +
        '<div style="position:relative;padding-bottom:75%;overflow:hidden"><div style="position:absolute;inset:0;overflow:hidden"><div class="cc-sp-track" style="display:flex;height:100%;transform:translateX(0);transition:transform 0.4s ease-in-out">' + imgs + '</div></div><div style="position:absolute;bottom:6px;left:0;right:0;display:flex;justify-content:center;gap:4px">' + dots + '</div></div>' +
        '<div style="padding:5px 8px 2px;display:flex;align-items:center;gap:3px"><svg width="8" height="8" viewBox="0 0 24 24" fill="#E040FB"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span style="font-size:8px;color:#666;font-family:' + DM + '">Bali, Indonesia</span></div>' +
        '<div style="padding:2px 8px 6px;font-size:8.5px;color:#1A1A1A;line-height:1.4;font-family:' + DM + '"><span style="font-weight:700">travelwithsara</span> Some places change you forever. 🌅 Bali, you were everything.</div>' +
        '<div style="display:flex;gap:8px;padding:5px 8px 6px;border-top:0.5px solid #F0F0F0;font-size:8.5px;color:#555;font-family:' + DM + '"><span>❤️ 4.2K</span><span>💬 183</span><span>↗️ Share</span></div>' +
      '</div>' +
      '<div class="cc-tt" style="flex:1;border:2px solid #1A1A1A;border-radius:22px;overflow:hidden;background:#000;opacity:0;transform:translateY(18px);transition:opacity 0.3s ease-out 0.15s,transform 0.3s ease-out 0.15s;position:relative;min-height:240px;display:flex;flex-direction:column">' +
        '<div style="flex:1;background:#000;position:relative;display:flex;align-items:center;justify-content:center;min-height:240px">' +
          '<video autoplay loop muted playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" src="' + VID + 'asVidC.mp4"></video>' +
          '<div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:10px;align-items:center">' + [['❤️', '124K'], ['💬', '3.2K'], ['↗️', '8.7K']].map(function (it) { return '<div style="display:flex;flex-direction:column;align-items:center;gap:2px"><span style="font-size:14px">' + it[0] + '</span><span style="font-size:7px;color:#fff;font-family:' + DM + ';font-weight:600">' + it[1] + '</span></div>'; }).join('') + '</div>' +
          '<div style="position:absolute;bottom:0;left:0;right:0;padding:8px;background:linear-gradient(to top,rgba(0,0,0,0.85),transparent)"><div style="font-size:8.5px;color:#fff;font-weight:700;font-family:' + DM + ';margin-bottom:2px">@foodie.rome</div><div style="font-size:7.5px;color:rgba(255,255,255,0.88);font-family:' + DM + ';line-height:1.4">POV: you found the best pasta in Rome 🍝😭</div><div style="font-size:7px;color:rgba(255,255,255,0.6);font-family:' + DM + ';margin-top:2px">#foodtok #rome #pasta #fyp</div></div>' +
        '</div>' +
      '</div></div>';
  }
  function updateSOC() {
    var ig = outEl.querySelector('.cc-ig'), tt = outEl.querySelector('.cc-tt');
    if (ig && S.spStep >= 1) { ig.style.opacity = '1'; ig.style.transform = 'translateY(0)'; }
    if (tt && S.spStep >= 2) { tt.style.opacity = '1'; tt.style.transform = 'translateY(0)'; }
    var track = outEl.querySelector('.cc-sp-track');
    if (track) track.style.transform = 'translateX(-' + (S.spCarouselIdx * 100) + '%)';
    outEl.querySelectorAll('.cc-sp-dot').forEach(function (d) { d.style.background = (+d.getAttribute('data-i') === S.spCarouselIdx) ? '#fff' : 'rgba(255,255,255,0.5)'; });
  }

  // ---- UGC (built once, then script lines / caption revealed) ----
  function buildUGC() {
    outEl.innerHTML = scanLine() + '<div style="height:320px;background:#fff;display:flex;gap:10px;padding:10px;box-sizing:border-box">' +
      '<div style="position:relative;height:100%;overflow:hidden;border-radius:16px;border:1.5px solid #333;aspect-ratio:9/16;flex-shrink:0">' +
        '<video autoplay loop muted playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" src="' + VID + 'asVidF.mp4"></video>' +
        '<div style="position:absolute;top:10px;left:10px;display:flex;align-items:center;gap:4px;z-index:10"><div style="width:8px;height:8px;border-radius:50%;background:#FF3B3B;animation:recBlink 1s ease-in-out infinite"></div><span style="font-size:9px;font-weight:700;color:#fff;font-family:' + DM + ';letter-spacing:0.05em">REC</span></div>' +
        '<div style="position:absolute;left:0;right:0;bottom:36px;overflow:hidden;max-height:130px"><div class="cc-ugc-cap" style="display:flex;flex-direction:column;gap:3px;padding:8px 12px 6px;background:rgba(0,0,0,0.55)"></div></div>' +
        '<div style="position:absolute;bottom:10px;left:12px;display:flex;align-items:center;gap:5px;z-index:10"><span style="font-size:9px;font-weight:700;color:#fff;font-family:' + DM + '">@sarahlifestyle</span><span style="background:rgba(255,255,255,0.2);color:#fff;font-size:7.5px;border-radius:3px;padding:1px 5px;font-family:' + DM + '">Sponsored</span></div>' +
      '</div>' +
      '<div style="flex:1;background:#fff;border:1px solid #E0E0E0;border-radius:12px;box-shadow:0 2px 10px rgba(0,0,0,0.06);overflow:hidden;display:flex;flex-direction:column;min-width:0">' +
        '<div style="padding:9px 12px;border-bottom:1px solid #F0F0F0;display:flex;align-items:center;gap:6px;flex-shrink:0"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><span style="font-size:11px;font-weight:700;color:#1A1A1A;font-family:' + DM + '">Script</span></div>' +
        '<div class="cc-ugc-script" style="flex:1;padding:6px 10px 8px;overflow:hidden;display:flex;flex-direction:column;gap:6px"></div>' +
      '</div></div>';
  }
  function updateUGC() {
    // caption: append only new lines so existing ones don't re-animate
    var cap = outEl.querySelector('.cc-ugc-cap');
    if (cap) {
      var n = Math.max(0, S.ugcLineIdx);
      while (cap.children.length < n) {
        var p = UGC_LINES[cap.children.length];
        var d = document.createElement('div');
        d.style.cssText = 'font-size:8px;color:#fff;line-height:1.4;font-family:' + DM + ';animation:ugcLineIn 0.35s ease-out forwards';
        d.innerHTML = p.b ? '<span style="font-weight:700;color:#FFD700">' + p.t + '</span>' : p.t;
        cap.appendChild(d);
      }
    }
    // script panel: append only newly-unlocked sections / extras (data-k marks them)
    var sp = outEl.querySelector('.cc-ugc-script');
    if (!sp) return;
    UGC_SECTIONS.forEach(function (sec, si) {
      if (S.ugcLineIdx >= sec.showAt && !sp.querySelector('[data-k="sec' + si + '"]')) {
        var d = document.createElement('div');
        d.setAttribute('data-k', 'sec' + si);
        d.style.cssText = 'animation:ugcLineIn 0.4s ease-out forwards';
        d.innerHTML = '<div style="font-size:8.5px;font-weight:700;color:#999;font-family:' + DM + ';letter-spacing:0.08em;margin-bottom:4px">' + sec.label + '</div>' +
          sec.lines.map(function (parts, li) { return '<div style="font-size:9.5px;color:#1A1A1A;font-family:' + DM + ';line-height:1.5;margin-bottom:2px;animation:textReveal 0.5s steps(18,end) ' + (li * 0.15) + 's both">' + parts.map(function (pt) { return span(pt.t, pt.b); }).join('') + '</div>'; }).join('');
        sp.appendChild(d);
      }
    });
    if (S.ugcLineIdx >= 7 && !sp.querySelector('[data-k="plats"]')) {
      var pl = document.createElement('div'); pl.setAttribute('data-k', 'plats'); pl.style.cssText = 'animation:ugcLineIn 0.4s ease-out forwards';
      pl.innerHTML = '<div style="height:1px;background:#F0F0F0;margin:1px 0 5px"></div><div style="display:flex;gap:5px">' + ['TikTok', 'Instagram Reels', 'YouTube Shorts'].map(function (p) { return '<div style="background:#F0F0F0;color:#1A1A1A;border-radius:999px;padding:3px 9px;font-size:8.5px;font-weight:500;font-family:' + DM + '">' + p + '</div>'; }).join('') + '</div>';
      sp.appendChild(pl);
    }
    if (S.ugcLineIdx >= 8 && !sp.querySelector('[data-k="apprvd"]')) {
      var ap = document.createElement('div'); ap.setAttribute('data-k', 'apprvd'); ap.style.cssText = 'animation:citedPop 0.3s ease-out forwards;padding-top:2px';
      ap.innerHTML = '<div style="display:inline-flex;align-items:center;gap:5px;background:#DCFCE7;color:#166534;border-radius:999px;padding:4px 10px;font-size:9px;font-weight:700;font-family:' + DM + '">✅ Approved &amp; Delivered</div>';
      sp.appendChild(ap);
    }
  }

  // ---- master render: (re)build on mode change, else update in place ----
  function render() {
    renderBrief();
    var p = pill();
    if (S.phase < 2) { if (builtMode !== -1) { outEl.innerHTML = ''; builtMode = -1; } return; }
    // phase >= 2: show output for the active mode
    if (p === 3) { if (builtMode !== 3) { buildSOC(); builtMode = 3; } updateSOC(); }
    else if (p === 4) { if (builtMode !== 4) { buildUGC(); builtMode = 4; } updateUGC(); }
    else if (p === 2) { if (builtMode !== 2) { buildAEO(); builtMode = 2; } updateAEO(); }
    else if (p === 0) { renderAd(); builtMode = 0; }
    else { renderLP(); builtMode = 1; }
  }

  // =================== state-machine scheduler (mirrors useEffect) ===================
  function schedule() {
    clearT();
    if (!S.running) return;
    var p = pill();
    if (S.phase === 0) {
      var b = BRIEFS[p];
      if (S.briefLen < b.length) { timer = setTimeout(function () { S.briefLen++; render(); schedule(); }, 46); }
      else { timer = setTimeout(function () { S.phase = 1; render(); schedule(); }, 400); }
      return;
    }
    if (S.phase === 1) {
      timer = setTimeout(function () { S.phase = 2; S.scanning = true; resetStepsKeepBrief(); render(); scheduleScanEnd(); }, 800);
      return;
    }
    if (S.phase === 2) {
      if (S.scanning) return; // scan-end timer drives the resume
      driveMode();
      return;
    }
    if (S.phase === 3) {
      timer = setTimeout(function () { S.cycle++; resetSteps(); S.phase = 0; builtMode = -1; renderPills(); render(); schedule(); }, 800);
      return;
    }
  }
  function resetStepsKeepBrief() { S.adStep = 0; S.hlLen = 0; S.lpStep = 0; S.lpHlLen = 0; S.lpSubLen = 0; S.aeoStep = 0; S.spStep = 0; S.spCarouselIdx = 0; S.ugcLineIdx = 0; }
  function scheduleScanEnd() { timer = setTimeout(function () { S.scanning = false; render(); driveMode(); }, 500); }

  function driveMode() {
    clearT();
    if (!S.running || S.phase !== 2) return;
    var p = pill();
    if (p === 0) { // AD
      var a = S.adStep;
      if (a === 0) timer = setTimeout(function () { S.adStep = 1; render(); driveMode(); }, 350);
      else if (a === 1) timer = setTimeout(function () { S.adStep = 2; render(); driveMode(); }, 350);
      else if (a === 2) { if (S.hlLen < AD_HL.length) timer = setTimeout(function () { S.hlLen++; render(); driveMode(); }, 55); else timer = setTimeout(function () { S.adStep = 3; render(); driveMode(); }, 200); }
      else if (a === 3) timer = setTimeout(function () { S.adStep = 4; render(); driveMode(); }, 380);
      else if (a === 4) timer = setTimeout(function () { S.adStep = 5; render(); driveMode(); }, 380);
      else timer = setTimeout(function () { S.phase = 3; render(); schedule(); }, 2000);
    } else if (p === 1) { // LP
      var s = S.lpStep;
      if (s === 0) timer = setTimeout(function () { S.lpStep = 1; render(); driveMode(); }, 350);
      else if (s === 1) { if (S.lpHlLen < LP_HL.length) timer = setTimeout(function () { S.lpHlLen++; render(); driveMode(); }, 45); else timer = setTimeout(function () { S.lpStep = 2; render(); driveMode(); }, 200); }
      else if (s === 2) timer = setTimeout(function () { S.lpStep = 3; render(); driveMode(); }, 450);
      else if (s === 3) timer = setTimeout(function () { S.lpStep = 4; render(); driveMode(); }, 1800);
      else if (s === 4) timer = setTimeout(function () { S.lpStep = 5; render(); driveMode(); }, 200);
      else if (s === 5) { if (S.lpSubLen < LP_SUB.length) timer = setTimeout(function () { S.lpSubLen++; render(); driveMode(); }, 38); else timer = setTimeout(function () { S.lpStep = 6; render(); driveMode(); }, 200); }
      else if (s === 6) timer = setTimeout(function () { S.lpStep = 7; render(); driveMode(); }, 400);
      else timer = setTimeout(function () { S.phase = 3; render(); schedule(); }, 2000);
    } else if (p === 2) { // AEO
      if (S.aeoStep < 7) timer = setTimeout(function () { S.aeoStep++; render(); driveMode(); }, 1000);
      else timer = setTimeout(function () { S.phase = 3; render(); schedule(); }, 2000);
    } else if (p === 3) { // SOC
      render();
      if (!carouselTimer) carouselTimer = setInterval(function () { S.spCarouselIdx = (S.spCarouselIdx + 1) % 5; updateSOC(); }, 2000);
      if (S.spStep < 2) timer = setTimeout(function () { S.spStep++; render(); driveMode(); }, 300);
      else timer = setTimeout(function () { if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; } S.phase = 3; render(); schedule(); }, 10000);
    } else { // UGC
      if (S.ugcLineIdx < 8) timer = setTimeout(function () { S.ugcLineIdx++; render(); driveMode(); }, 1200);
      else timer = setTimeout(function () { S.phase = 3; render(); schedule(); }, 3000);
    }
  }

  // blink caret — only re-render the element that actually shows a caret,
  // so SOC/UGC videos and revealed items are never rebuilt on blink.
  blinkTimer = setInterval(function () {
    blink = !blink;
    var p = pill();
    if (S.phase === 0) { renderBrief(); return; }
    if (S.phase === 2 && p === 0 && S.adStep === 2 && S.hlLen < AD_HL.length) renderAd();
    else if (S.phase === 2 && p === 1 && ((S.lpStep === 1 && S.lpHlLen < LP_HL.length) || (S.lpStep === 5 && S.lpSubLen < LP_SUB.length))) renderLP();
  }, 500);

  renderPills();
  render();

  function start() { if (S.running) return; S.running = true; schedule(); }
  function stop() {
    S.running = false; clearT();
    if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
    // reset to a clean seed like the bundle does when it leaves view
    S.phase = 0; resetSteps(); builtMode = -1; render();
  }
  var api = { start: start, stop: stop };
  // expose internals on the panel for test harnesses (harmless expando)
  panel.__composer = { state: S, render: render, switchMode: switchMode, driveMode: driveMode, start: start, stop: stop };
  return api;
}
