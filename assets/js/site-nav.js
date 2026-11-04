/* Shared phone menu (added 2026-11-04).
   Pages that already have their own hamburger (#hamb) are left alone.
   One list of links, so the menu is the same on every page. */
(function () {
  if (document.getElementById('hamb')) return;
  var LINKS = [
    ['Services', 'services.html'],
    ['Case Studies', 'case-studies.html'],
    ['About', 'about.html'],
    ['Blog', 'blog.html'],
    ['Contact', 'contact.html']
  ];
  var nav = document.querySelector('nav.site') || document.querySelector('nav');
  if (!nav) return;
  var list = nav.querySelector('ul');
  var inner = list ? list.parentElement : nav;

  var css = document.createElement('style');
  css.textContent =
    'html{overflow-x:clip}' +
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
