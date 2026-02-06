/* ======================================
   script.js — cleaned & production ready
   ====================================== */

/* Detect touch devices and disable custom cursor */
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.body.classList.add('is-touch');
}

(() => {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const magneticEls = document.querySelectorAll('.magnetic');
  const tiltCards = document.querySelectorAll('.tilt-card');
  const reveals = document.querySelectorAll('.reveal');
  const movers = document.querySelectorAll('.scroll-move');
  const glow = document.querySelector('.glow-stars');
  const heroRotate = document.getElementById('heroRotate');

  /* =========================
     CUSTOM CURSOR (DESKTOP)
     ========================= */

  if (!document.body.classList.contains('is-touch')) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let ringScale = 1;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        cursorDot.style.transform = 'translate(-50%, -50%)';
      }
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRing) {
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        cursorRing.style.transform =
          `translate(-50%, -50%) scale(${ringScale})`;
      }

      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets =
      'a, button, input, textarea, .tilt-card, .btn, .magnetic';

    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(hoverTargets)) {
        ringScale = 1.45;
        if (cursorRing)
          cursorRing.style.borderColor = 'rgba(255,255,255,0.85)';
      }
    });

    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(hoverTargets)) {
        ringScale = 1;
        if (cursorRing)
          cursorRing.style.borderColor = 'rgba(255,255,255,0.45)';
      }
    });

    window.addEventListener('resize', () => {
      mouseX = Math.min(window.innerWidth, mouseX);
      mouseY = Math.min(window.innerHeight, mouseY);
    }, { passive: true });
  }

  /* =========================
     MAGNETIC ELEMENTS
     ========================= */

  magneticEls.forEach(el => {
    el.addEventListener('pointermove', (ev) => {
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left - rect.width / 2;
      const y = ev.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = 'translate(0,0)';
    });
  });

  /* =========================
     REVEAL ANIMATIONS
     ========================= */

  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    reveals.forEach(el => revealObs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  if ('IntersectionObserver' in window) {
    const moveObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    movers.forEach(el => moveObs.observe(el));
  } else {
    movers.forEach(el => el.classList.add('in-view'));
  }

  /* =========================
     TILT CARDS (DESKTOP ONLY)
     ========================= */

  if (!document.body.classList.contains('is-touch')) {
    tiltCards.forEach(card => {
      const img = card.querySelector('.tilt-img');
      const overlay = card.querySelector('.tilt-overlay');
      const scale = parseFloat(card.dataset.scale || 1.04);
      const strength = parseFloat(card.dataset.rotate || 12);

      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        card.style.transform =
          `perspective(800px) rotateX(${-dy * strength}deg) rotateY(${dx * strength}deg)`;

        if (img) img.style.transform =
          `translate(${dx * 6}px, ${dy * 6}px) scale(${scale})`;

        if (overlay) overlay.style.transform =
          `translate(${dx * -6}px, ${dy * -6}px)`;
      });

      card.addEventListener('pointerleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
        if (img) img.style.transform = 'translate(0,0) scale(1)';
        if (overlay) overlay.style.transform = 'translate(0,0)';
      });
    });
  }

  /* =========================
     MAGIC BENTO GLOW
     ========================= */

  document.querySelectorAll('.magic-bento-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--glow-x', '50%');
      card.style.setProperty('--glow-y', '50%');
    });
  });

  /* =========================
     HERO ROTATING TEXT
     ========================= */

  const rotateTexts = [
    'Flutter Developer',
    'Android Developer',
    'REST API Developer',
    'Frontend UI'
  ];

  if (heroRotate) {
    let index = 0;
    heroRotate.textContent = rotateTexts[0];

    setInterval(() => {
      heroRotate.style.opacity = '0';
      setTimeout(() => {
        index = (index + 1) % rotateTexts.length;
        heroRotate.textContent = rotateTexts[index];
        heroRotate.style.opacity = '1';
      }, 220);
    }, 2600);
  }

  /* =========================
     GLOW PARALLAX
     ========================= */

  if (glow && !document.body.classList.contains('is-touch')) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
  }

})();
