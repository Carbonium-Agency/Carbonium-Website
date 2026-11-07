/* "More case studies": two random other cases on every visit, with animated thumbnails (case-fx.js). */
(function () {
  var grid = document.querySelector('.more-grid');
  var CASES = [
 {
  "h": "case-study-tigerwit.html",
  "t": "<div class=\"thumb fx-tw\" style=\"background:#000\"><img src=\"assets/cases/tigerwit/tigerwit-thumb.webp\" alt=\"TigerWit Indonesia\" loading=\"lazy\"><canvas aria-hidden=\"true\"></canvas><span class=\"shine\" aria-hidden=\"true\"></span></div>",
  "m": "Fintech · Market launch",
  "n": "TigerWit Indonesia",
  "d": "Localising and launching TigerWit in Indonesia: local research, a digital-first team, Bahasa social content, education events and the E-Trader Arena concept."
 },
 {
  "h": "case-study-startrader.html",
  "t": "<div class=\"thumb fx-st\" style=\"background:#262433\"><img src=\"assets/cases/startrader/startrader-thumb.webp\" alt=\"STARTRADER Indonesia\" loading=\"lazy\"><canvas aria-hidden=\"true\"></canvas></div>",
  "m": "Fintech · Market entry",
  "n": "STARTRADER Indonesia",
  "d": "Market-entry strategy, an 11-city roadshow across Java and an always-on education content system."
 },
 {
  "h": "case-study-iic.html",
  "t": "<div class=\"thumb logo fx-logo fx-iic\" data-fx=\"iic\"><img src=\"assets/cases/iic/iic-logo-v2.webp\" alt=\"International Investor Club\" loading=\"lazy\"></div>",
  "m": "Indonesia · Financial news",
  "n": "International Investor Club",
  "d": "Brand identity, campus events and education content, plus a financial news website with live prices, charts and an economic calendar that we built, ran and grew."
 },
 {
  "h": "case-study-ilimits.html",
  "t": "<div class=\"thumb logo fx-logo fx-ilimits\" data-fx=\"ilimits\"><img src=\"assets/cases/ilimits/ilimits-logo.webp\" alt=\"iLimits\" loading=\"lazy\"></div>",
  "m": "Fintech · Global brand",
  "n": "iLimits",
  "d": "Brand guidelines with six regional lock-ups, a global marketing plan, Malaysia roll-out, merchandise and a new website."
 },
 {
  "h": "case-study-greenwavex.html",
  "t": "<div class=\"thumb fx-gwx\"><img src=\"assets/cases/greenwavex/greenwavex-thumb.webp\" alt=\"GreenWaveX Indonesia\" loading=\"lazy\"><canvas aria-hidden=\"true\"></canvas></div>",
  "m": "Fintech · Brand launch",
  "n": "GreenWaveX Indonesia",
  "d": "Launching a new multi-asset trading app in Indonesia: launch event, collateral, channel strategy and content system."
 },
 {
  "h": "case-study-vida.html",
  "t": "<div class=\"thumb logo fx-logo fx-vida\" data-fx=\"vida\"><img src=\"assets/cases/vida/vida-logo.webp\" alt=\"Vida Markets\" loading=\"lazy\"></div>",
  "m": "Fintech · Digital strategy",
  "n": "Vida Markets",
  "d": "Global marketing and the Indonesia entry strategy: #TradeWithConfidence positioning, full-funnel paid plan, social channels and SEO."
 },
 {
  "h": "case-study-profitlink.html",
  "t": "<div class=\"thumb logo fx-logo fx-profitlink\" data-fx=\"profitlink\"><img src=\"assets/cases/profitlink/profitlink-logo-primary.webp\" alt=\"Profit Link\" loading=\"lazy\"></div>",
  "m": "Investment consulting · Rebrand",
  "n": "Profit Link",
  "d": "A Dubai investment consultancy: a private-bank identity redesign, full asset system and a referral-first brand platform."
 },
 {
  "h": "case-study-alphawolves.html",
  "t": "<div class=\"thumb logo fx-logo fx-alphawolves\" data-fx=\"alphawolves\"><img src=\"assets/cases/alphawolves/alphawolves.webp\" alt=\"AlphaWolves\" loading=\"lazy\"></div>",
  "m": "Trading community · Go-to-market",
  "n": "AlphaWolves",
  "d": "A five-logo brand family plus the full go-to-market plan: funnel, channel strategy, content system and launch roadmap."
 },
 {
  "h": "case-study-gizinezia.html",
  "t": "<div class=\"thumb logo fx-logo fx-gizinezia\" data-fx=\"gizinezia\"><img src=\"assets/cases/alphawolves/gizinezia.webp\" alt=\"GiziNezia\" loading=\"lazy\"></div>",
  "m": "Healthy food · Brand concept",
  "n": "GiziNezia",
  "d": "Name, logo and colour system for a nutrition-led healthy meal-plan brand for Indonesia, plus the ingredient framework behind the menu."
 }
];
  var here = location.pathname.split('/').pop() || '';

  // Hero visual: same animated treatment as this case's thumbnail
  var me = CASES.filter(function (c) { return c.h === here; })[0], hero = document.querySelector('.cs-visual');
  if (me && hero && !/fx-/.test(hero.className)) {
    var hs = document.createElement('style'); hs.textContent = '.cs-visual.logo.fx-logo{background:#FFFFFF!important}'; document.head.appendChild(hs);
    var tmp = document.createElement('div'); tmp.innerHTML = me.t;
    var src = tmp.firstChild, timg = src.querySelector('img'), himg = hero.querySelector('img');
    src.className.split(' ').forEach(function (c) { if (c && c !== 'logo') hero.classList.add(c); });
    if (src.dataset.fx) hero.dataset.fx = src.dataset.fx;
    if (src.style.background) hero.style.background = src.style.background;
    if (himg && timg) himg.src = timg.getAttribute('src');
    Array.prototype.forEach.call(src.querySelectorAll('canvas, .shine'), function (n) { hero.appendChild(n); });
  }
  if (!grid) return;
  var pool = CASES.filter(function (c) { return c.h !== here; });
  for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = pool[i]; pool[i] = pool[j]; pool[j] = t; }
  grid.innerHTML = pool.slice(0, 2).map(function (c) {
    return '<a class="more-card" href="' + c.h + '">' + c.t + '<span class="case-eyebrow">' + c.m + '</span><h3>' + c.n + '</h3><p class="d">' + c.d + '</p><span class="rm">Read case study \u2192</span></a>';
  }).join('');
})();
