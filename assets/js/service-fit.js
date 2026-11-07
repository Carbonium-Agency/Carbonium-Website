/* Service pages: keep every block inside the screen (added 2026-11-08).
   Fixed-width visuals (hero animation, tool pipeline, orbit, small diagrams)
   are scaled down to fit their column instead of pushing the page sideways. */
(function () {
  var st = document.createElement('style');
  st.textContent =
    '.hero-grid>*{min-width:0}' +
    '.hero-grid>div:last-child{display:flex;justify-content:center}' +
    '.agents,.agent{min-width:0}.dark{overflow-x:clip}' +
    '@media (max-width:1366px){.hero .chips{flex-wrap:wrap!important}}' +
    '@media (max-width:1199px){.hero-grid{grid-template-columns:1fr!important;gap:28px!important}}' +
    '.hero .sub{max-width:100%!important}' +
    '@media (max-width:1366px){main.content .h-sec,main.content .lede,main.content .res-sub{white-space:normal!important}}' +
    '.case-stats>*{min-width:0}' +
    '@media (min-width:701px) and (max-width:940px){#ai-stack .pipe-stage{overflow-x:visible!important}#ai-stack .pipe-flow{justify-content:center!important}}' +
    'html,body{overflow-x:clip}';
  document.head.appendChild(st);

  function targets() {
    var list = [];
    document.querySelectorAll('.hero-grid > div:last-child > *').forEach(function (e) { list.push(e); });
    ['#pipe-flow', '.orbit-stage', '.src-panel', '.me-flow'].forEach(function (s) {
      document.querySelectorAll(s).forEach(function (e) { list.push(e); });
    });
    return list;
  }
  // full horizontal span of the element and everything inside it
  function naturalWidth(el) {
    var r = el.getBoundingClientRect(), lo = r.left, hi = r.left + Math.max(r.width, el.scrollWidth);
    el.querySelectorAll('*').forEach(function (c) {
      var b = c.getBoundingClientRect();
      if (b.width) { lo = Math.min(lo, b.left); hi = Math.max(hi, b.right); }
    });
    return hi - lo;
  }
  function fit() {
    targets().forEach(function (el) {
      el.style.zoom = '';
      // phones: the tool pipeline scrolls sideways inside its own box instead
      if (el.id === 'pipe-flow' && innerWidth <= 700) return;
      var parent = el.parentElement;
      if (!parent) return;
      var cs = getComputedStyle(parent);
      var avail = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      var room = Math.min(avail, document.documentElement.clientWidth - Math.max(0, parent.getBoundingClientRect().left) - 8);
      var need = naturalWidth(el);
      if (need > room + 1 && room > 0) el.style.zoom = Math.max(0.5, room / need).toFixed(3);
    });
  }
  var t;
  function later() { clearTimeout(t); t = setTimeout(fit, 120); }
  if (document.readyState === 'complete') fit(); else addEventListener('load', fit);
  setTimeout(fit, 1500);
  addEventListener('resize', later);
})();
