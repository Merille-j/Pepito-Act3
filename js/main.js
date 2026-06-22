/* NAV — scroll shadow + active link */
(function () {
  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(22, 9, 32, 0.97)'
      : 'linear-gradient(to bottom, rgba(22, 9, 32, 0.97) 0%, transparent 100%)';
  }, { passive: true });

  // Highlight active nav link based on current page
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-drawer a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* MOBILE DRAWER */
(function () {
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close drawer on link click
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/*  SCROLL REVEAL */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const style = document.createElement('style');
  style.textContent = `
    [data-reveal] {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.65s ease, transform 0.65s ease;
    }
    [data-reveal].revealed {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('revealed'), Number(delay));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
})();

/* SKILL BARS */
(function () {
  const bars = document.querySelectorAll('.bar-fill');
  if (!bars.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const fill = entry.target;
      const target = fill.dataset.width;
      if (prefersReduced) {
        fill.style.width = target;
      } else {
        setTimeout(() => {
          fill.style.setProperty('--target-width', target);
          fill.classList.add('filled');
        }, 200);
      }
      io.unobserve(fill);
    });
  }, { threshold: 0.3 });

  bars.forEach(b => io.observe(b));
})();

/*  PROJECT FILTER */
(function () {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project-card');
  const empty = document.getElementById('empty-state');
  if (!pills.length || !cards.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;
      let visible = 0;

      cards.forEach(card => {
        const cats = (card.dataset.category || '').split(',').map(s => s.trim());
        const show = filter === 'all' || cats.includes(filter);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
    });
  });
})();

/* CONTACT FORM — success state */
(function () {
  const form = document.getElementById('contact-form');
  const confirm = document.getElementById('sent-confirm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.transition = 'opacity 0.4s ease';
    form.style.opacity = '0';
    setTimeout(() => {
      form.style.display = 'none';
      if (confirm) {
        confirm.style.display = 'block';
        confirm.style.opacity = '0';
        confirm.style.transition = 'opacity 0.4s ease';
        requestAnimationFrame(() => { confirm.style.opacity = '1'; });
      }
    }, 400);
  });
})();

/* Main Hero — random orbs + stars */
(function () {
  document.querySelectorAll('.hero-orb').forEach(orb => {
    const x = 10 + Math.random() * 80;
    const y = 10 + Math.random() * 80;
    const size = 200 + Math.random() * 300;
    orb.style.left = x + '%';
    orb.style.top = y + '%';
    orb.style.width = size + 'px';
    orb.style.height = size + 'px';
    orb.style.animationDelay = (Math.random() * 4) + 's';
    orb.style.animationDuration = (6 + Math.random() * 5) + 's';
  });

  document.querySelectorAll('.hero-star').forEach(star => {
    star.style.left = (Math.random() * 100) + '%';
    star.style.top = (Math.random() * 100) + '%';
    const s = 1 + Math.random() * 2;
    star.style.width = s + 'px';
    star.style.height = s + 'px';
    star.style.animationDelay = (Math.random() * 4) + 's';
    star.style.animationDuration = (3 + Math.random() * 4) + 's';
  });
})();
