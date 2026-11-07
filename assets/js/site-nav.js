/* Shared phone menu (added 2026-11-04).
   Pages that already have their own hamburger (#hamb) are left alone.
   One list of links, so the menu is the same on every page. */
(function () {
  if (document.getElementById('hamb')) return;
  var LINKS = [
    ['Home', 'index.html'],
    ['Services', 'services.html'],
    ['Case Studies', 'case-studies.html'],
    ['Lab', 'lab.html'],
    ['Insights', 'insights.html'],
    ['About', 'about.html']
  ];
  var nav = document.querySelector('nav.site') || document.querySelector('nav');
  if (!nav) return;
  var list = nav.querySelector('ul');
  var inner = list ? list.parentElement : nav;

  var css = document.createElement('style');
  css.textContent =
    'html,body{overflow-x:clip!important}' +
    '.snav-btn{display:none;background:none;border:0;cursor:pointer;padding:8px;margin-left:8px}' +
    '.snav-btn span{display:block;width:22px;height:2px;background:#1A1A1A;margin:4px 0;transition:transform .25s,opacity .25s}' +
    '.snav-btn[aria-expanded="true"] span:nth-child(1){transform:translateY(6px) rotate(45deg)}' +
    '.snav-btn[aria-expanded="true"] span:nth-child(2){opacity:0}' +
    '.snav-btn[aria-expanded="true"] span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}' +
    '.snav-panel{display:none}' +
    '@media (max-width:760px){' +
      'nav .snav-hide{display:none!important}' +
      '.snav-btn{display:block}' +
      'nav .snav-cta{margin-left:auto}' +
      '.snav-panel.open{display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;z-index:1001;' +
        'background:rgba(241,241,241,.97);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
        'padding:12px 28px 24px;border-bottom:1px solid rgba(0,0,0,.08)}' +
      '.snav-panel a{font-family:"DM Sans",sans-serif;font-size:17px;font-weight:500;color:#1A1A1A;text-decoration:none;padding:12px 0;border-bottom:1px solid rgba(0,0,0,.06)}' +
      '.snav-panel a:last-child{border-bottom:0}' +
    '}';
  document.head.appendChild(css);

  if (list) list.classList.add('snav-hide');

  var here = location.pathname.split('/').pop() || 'index.html';
  var panel = document.createElement('div');
  panel.className = 'snav-panel';
  panel.id = 'snavPanel';
  LINKS.forEach(function (l) {
    var a = document.createElement('a');
    a.href = l[1];
    a.textContent = l[0];
    if (here === l[1] || (l[1] === 'services.html' && here.indexOf('service-') === 0) ||
        (l[1] === 'case-studies.html' && here.indexOf('case-study-') === 0)) a.style.fontWeight = '700';
    panel.appendChild(a);
  });

  var btn = document.createElement('button');
  btn.className = 'snav-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'snavPanel');
  btn.innerHTML = '<span></span><span></span><span></span>';
  btn.addEventListener('click', function () {
    var open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  inner.appendChild(btn);
  if (btn.previousElementSibling && btn.previousElementSibling !== list) btn.previousElementSibling.classList.add('snav-cta');
  document.body.appendChild(panel);
})();

/* WhatsApp chat bubble on every page (added 2026-11-07). Pages that already
   have one (.wa-fab) keep theirs. */
(function () {
  if (document.querySelector('.wa-fab')) return;
  var st = document.createElement('style');
  st.textContent = '.wa-fab{position:fixed;bottom:28px;right:28px;z-index:900;width:52px;height:52px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,211,102,.35)}';
  document.head.appendChild(st);
  var a = document.createElement('a');
  a.className = 'wa-fab';
  a.href = 'https://wa.me/971567985386';
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Chat on WhatsApp');
  a.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"#fff\"><path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z\"/></svg>";
  document.body.appendChild(a);
})();
