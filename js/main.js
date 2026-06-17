/* ============================================================
   CARBONIUM — main.js
   Count-up · Scroll reveal · Nav · Cookie
============================================================ */

/* ── Count-up ── */
function countUp(el, target, duration) {
  duration = duration || 1800;
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const start  = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);       // ease-out cubic
    el.textContent = prefix + Math.round(e * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── Scroll animations ── */
function initScrollAnimations() {
  // reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => ro.observe(el));
  }

  // count-up stats
  const stats = document.querySelectorAll('.stat-number');
  if (stats.length) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          countUp(e.target, parseInt(e.target.dataset.target, 10));
          so.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(el => so.observe(el));
  }
}

/* ── Sticky nav ── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const hamburger = document.querySelector('.nav__hamburger');
  const mobile    = document.querySelector('.nav__mobile');
  const closeBtn  = document.querySelector('.nav__mobile-close');

  if (hamburger && mobile) {
    hamburger.addEventListener('click', () => {
      mobile.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    const close = () => {
      mobile.classList.remove('open');
      document.body.style.overflow = '';
    };
    closeBtn && closeBtn.addEventListener('click', close);
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  // active link highlight
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    if (a.getAttribute('href') === path || a.getAttribute('href') === './' + path) {
      a.classList.add('active');
    }
  });
}

/* ── Cookie banner ── */
function initCookieBanner() {
  if (localStorage.getItem('cb-accepted')) return;
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.style.display = 'flex';
  document.getElementById('cookie-accept') &&
    document.getElementById('cookie-accept').addEventListener('click', () => {
      localStorage.setItem('cb-accepted', '1');
      banner.style.display = 'none';
    });
  document.getElementById('cookie-manage') &&
    document.getElementById('cookie-manage').addEventListener('click', () => {
      banner.style.display = 'none';
    });
}

/* ── Contact form (Formspree AJAX) ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn     = form.querySelector('[type="submit"]');
    const success = document.getElementById('form-success');
    btn.textContent = 'Submitting…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        if (success) success.style.display = 'block';
      } else {
        btn.textContent = 'Error — try again';
        btn.disabled = false;
      }
    } catch (_) {
      btn.textContent = 'Error — try again';
      btn.disabled = false;
    }
  });
}

/* ── Blog category filter ── */
function initBlogFilter() {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards   = document.querySelectorAll('[data-category]');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ── Hero button touch tap (lift → squish → rest, mirrors desktop hover+click) ── */
function initButtonTouch() {
  document.querySelectorAll('.hero__btns .btn').forEach(btn => {
    btn.addEventListener('touchstart', () => {
      btn.classList.remove('is-tapped');
      void btn.offsetWidth; // force reflow to restart animation
      btn.classList.add('is-tapped');
      if (navigator.vibrate) navigator.vibrate(15);
    }, { passive: true });
    btn.addEventListener('touchend',    () => setTimeout(() => btn.classList.remove('is-tapped'), 450), { passive: true });
    btn.addEventListener('touchcancel', () => btn.classList.remove('is-tapped'), { passive: true });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initButtonTouch();
  initScrollAnimations();
  initNav();
  initCookieBanner();
  initContactForm();
  initBlogFilter();
});
