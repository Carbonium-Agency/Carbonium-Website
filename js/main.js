/* ============================================================
   CARBONIUM — main.js
   Particle canvas · Count-up · Scroll reveal · Nav · Cookie
============================================================ */

/* ── Particle Canvas ── */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildParticles(); }, { passive: true });

  const COUNT = window.innerWidth < 640 ? 45 : 80;
  const DIST  = 140;

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.45;
    this.vy = (Math.random() - 0.5) * 0.45;
    this.r  = Math.random() * 1.8 + 0.8;
    this.o  = Math.random() * 0.45 + 0.15;
  }

  function buildParticles() {
    particles = [];
    for (let i = 0; i < COUNT; i++) particles.push(new Particle());
  }
  buildParticles();

  function frame() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,180,255,${p.o})`;
      ctx.fill();

      // connections
      for (let j = i + 1; j < particles.length; j++) {
        const q  = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          const alpha = (1 - d / DIST) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,180,255,${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }
  frame();
}

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

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initScrollAnimations();
  initNav();
  initCookieBanner();
  initContactForm();
  initBlogFilter();
});
