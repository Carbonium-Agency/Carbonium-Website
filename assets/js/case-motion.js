/* Case study pages: scroll reveals, stat count-ups, reading progress.
   Content stays fully visible if this script fails or the visitor prefers reduced motion. */
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;

  var css =
    '.cm-on .cm{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1);transition-delay:var(--cm-d,0s)}' +
    '.cm-on .cm.cm-l{transform:translateX(-26px)}' +
    '.cm-on .cm.cm-z{transform:scale(.94)}' +
    '.cm-on .cm.in{opacity:1;transform:none}' +
    '.cm-on .cs-visual{overflow:hidden}' +
    '.cm-on .cs-visual:not([class*="fx-"]) img{animation:cmKen 18s ease-in-out infinite alternate}' +
    '@keyframes cmKen{from{transform:scale(1)}to{transform:scale(1.06)}}' +
    '.cm-on .ch-label{position:relative}' +
    '.cm-on .cblock h2.cm{clip-path:inset(0 100% 0 0);transform:none;transition:clip-path 1s cubic-bezier(.2,.7,.2,1),opacity .4s;transition-delay:var(--cm-d,0s)}' +
    '.cm-on .cblock h2.cm.in{clip-path:inset(0 0 0 0)}' +
    '.cm-frame{position:relative;overflow:hidden;border-radius:14px;background:#F1F1F1}' +
    '.cm-frame img{border-radius:0!important;display:block;transform-origin:var(--ox,50%) var(--oy,50%);animation:cmDrift var(--du,16s) ease-in-out infinite alternate;animation-play-state:paused}' +
    '.cm-frame.live img{animation-play-state:running}' +
    '@keyframes cmDrift{from{transform:scale(1)}to{transform:scale(1.045) translate(var(--dx,0),var(--dy,0))}}' +
    '.cm-frame:after{content:"";position:absolute;top:0;bottom:0;left:-60%;width:45%;pointer-events:none;background:linear-gradient(100deg,transparent,rgba(255,255,255,.28) 50%,transparent);animation:cmShine var(--sh,9s) ease-in-out var(--sd,0s) infinite;animation-play-state:paused}' +
    '.cm-frame.live:after{animation-play-state:running}' +
    '@keyframes cmShine{0%,70%{left:-60%}100%{left:130%}}' +
    'figure:hover .cm-frame img{animation-duration:6s}' +
    '.cm-on .ccard,.cm-on .stat,.cm-on .more-card{will-change:transform}' +
    '.cm-on .ccard.in,.cm-on .stat.in{transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .35s ease-out}' +
    '.cm-on .ccard.in:hover,.cm-on .stat.in:hover{transform:translateY(-4px)}' +
    '.cm-on .stat .n{display:block}' +
    '.cm-bar{position:fixed;left:0;top:0;height:3px;width:100%;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,#1A1A1A,#5B6CFF);z-index:2000;pointer-events:none}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
  root.classList.add('cm-on');

  function tag(el, cls, delay) {
    if (!el || el.classList.contains('cm')) return;
    el.classList.add('cm');
    if (cls) el.classList.add(cls);
    if (delay) el.style.setProperty('--cm-d', delay + 's');
  }
  function group(sel, step, cls) {
    document.querySelectorAll(sel).forEach(function (parent) {
      Array.prototype.forEach.call(parent.children, function (c, i) { tag(c, cls, Math.min(i, 8) * step); });
    });
  }

  // Hero
  var left = document.querySelector('.cs-head-left');
  if (left) Array.prototype.forEach.call(left.children, function (c, i) { tag(c, null, 0.08 + i * 0.1); });
  tag(document.querySelector('.cs-visual'), 'cm-z', 0.25);

  // Meta strip + scope chips
  group('.meta-strip', 0.08);
  group('.scope-row', 0.05, 'cm-z');

  // Content blocks
  document.querySelectorAll('.cblock').forEach(function (b) {
    Array.prototype.forEach.call(b.children, function (c, i) {
      if (/fig-grid|stat-grid|card-grid/.test(c.className)) return;
      tag(c, null, Math.min(i, 3) * 0.08);
    });
  });
  group('.stat-grid', 0.1);
  group('.card-grid', 0.07);
  group('.fig-grid', 0.09);

  // Delivered, CTA, more cases
  var del = document.querySelector('.delivered');
  if (del) {
    Array.prototype.forEach.call(del.children, function (c, i) { if (c.tagName !== 'UL') tag(c, null, i * 0.08); });
    group('.delivered ul', 0.06, 'cm-l');
  }
  tag(document.querySelector('.cta-card'), 'cm-z');
  group('.more-grid', 0.1);

  // Content images: slow drift + light sweep while on screen
  var live = new IntersectionObserver(function (es) {
    es.forEach(function (e) { e.target.classList.toggle('live', e.isIntersecting); });
  }, { threshold: 0.05 });
  document.querySelectorAll('.cbody figure > img').forEach(function (img, i) {
    var fr = document.createElement('div');
    fr.className = 'cm-frame';
    var r = function (a, b) { return (a + Math.random() * (b - a)).toFixed(2); };
    fr.style.cssText = '--du:' + r(14, 22) + 's;--dx:' + r(-1.6, 1.6) + '%;--dy:' + r(-1.2, 1.2) + '%;--ox:' + r(30, 70) + '%;--oy:' + r(30, 70) + '%;--sh:' + r(8, 12) + 's;--sd:' + r(0, 6) + 's';
    img.parentNode.insertBefore(fr, img);
    fr.appendChild(img);
    live.observe(fr);
  });

  // Count-up for single-number stats ("106,208", "$10,000,000+", "5.8×", "11 cities")
  function countUp(el) {
    var txt = el.textContent, m = txt.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(\D*)$/);
    if (!m) return;
    var raw = m[2], target = parseFloat(raw.replace(/,/g, '')), dec = (raw.split('.')[1] || '').length, comma = raw.indexOf(',') > -1;
    if (!isFinite(target) || target === 0) return;
    var dur = 1400, t0 = null;
    el.style.minWidth = el.offsetWidth + 'px';
    function fmt(v) {
      var s = v.toFixed(dec);
      if (comma) { var p = s.split('.'); p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); s = p.join('.'); }
      return m[1] + s + m[3];
    }
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = k < 1 ? fmt(target * e) : txt;
      if (k < 1) requestAnimationFrame(step);
    }
    el.textContent = fmt(0);
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('.stat .n, .cs-head-stat .n');
  counters.forEach(function (n) { n.dataset.cmCount = '1'; });

  function reveal(el) {
      if (el.classList.contains('in')) return;
      el.classList.add('in');
      io.unobserve(el);
      var blk = el.closest && el.closest('.cblock'), h2 = blk && blk.querySelector(':scope > h2.cm');
      if (h2) h2.classList.add('in');
      el.querySelectorAll && el.querySelectorAll('[data-cm-count]').forEach(function (n) {
        delete n.dataset.cmCount;
        setTimeout(function () { countUp(n); }, (parseFloat(getComputedStyle(el).getPropertyValue('--cm-d')) || 0) * 1000 + 150);
      });
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) reveal(e.target); });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  var pending = [];
  document.querySelectorAll('.cm').forEach(function (el) { if (!el.matches('.cblock > h2')) { io.observe(el); pending.push(el); } });

  // Reading progress bar
  var bar = document.createElement('div');
  bar.className = 'cm-bar';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var ticking = false;
  function prog() {
    ticking = false;
    pending.forEach(function (el) { if (!el.classList.contains('in') && el.getBoundingClientRect().top < innerHeight) reveal(el); });
    var h = root.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(prog); } }, { passive: true });
  prog();
})();
