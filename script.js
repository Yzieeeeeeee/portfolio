/* ======================================
   script.js — High End Interaction Layer
   ====================================== */

// Disable custom cursor on touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.body.classList.add('is-touch');
}

(() => {
  /* =========================
     CUSTOM PREMIUM FASHION CURSOR
     ========================= */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const cursorText = document.querySelector('.cursor-text');

  if (!document.body.classList.contains('is-touch') && cursorDot && cursorRing) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot moves instantly
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    const animateCursor = () => {
      ringX += (mouseX - ringX) * 0.15; // Smooth trailing for ring
      ringY += (mouseY - ringY) * 0.15;

      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const hoverItems = document.querySelectorAll('.project-link, .magnetic, .btn, a, button, input, textarea');

    hoverItems.forEach(el => {
      el.addEventListener('mouseenter', () => {
        // Clear previous states
        cursorRing.classList.remove('hover-state', 'hover-nav', 'hover-btn');
        cursorRing.classList.add('hover-state');

        // Custom text or styling based on element
        if (el.closest('.project-link')) {
          cursorText.textContent = 'View';
        } else if (el.closest('.nav-links a') || el.closest('.logo')) {
          cursorText.textContent = '';
          cursorRing.classList.add('hover-nav');
        } else if (el.closest('.btn') || el.closest('button')) {
          cursorText.textContent = '';
          cursorRing.classList.add('hover-btn');
        } else if (el.closest('input, textarea')) {
          cursorText.textContent = 'Type';
        } else {
          cursorText.textContent = '';
        }
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hover-state', 'hover-nav', 'hover-btn');
      });
    });
  }

  /* =========================
     MAGNETIC ELEMENTS
     ========================= */
  const magneticEls = document.querySelectorAll('.magnetic');

  magneticEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const strength = el.dataset.strength || 0.2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
    });
  });

  /* =========================
     3D TILT EFFECT (PROJECTS)
     ========================= */
  const tiltCards = document.querySelectorAll('.tilt-effect');

  if (!document.body.classList.contains('is-touch')) {
    tiltCards.forEach(card => {
      let inner = card.querySelector('.card-image-inner');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        // 3D rotation logic mapping
        const rotateX = dy * -15; // Max 15 degrees
        const rotateY = dx * 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        if (inner) {
          inner.style.transform = `translateX(${dx * 10}px) translateY(${dy * 10}px) scale(1.1)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        if (inner) {
          inner.style.transform = `translateX(0px) translateY(0px) scale(1)`;
        }
      });
    });
  }

  /* =========================
     PARALLAX IMAGES ON SCROLL
     ========================= */
  const parallaxImgs = document.querySelectorAll('.parallax-img');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxImgs.forEach(img => {
      const parent = img.parentElement;
      const parentTop = parent.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (parentTop < windowHeight && parentTop > -parent.offsetHeight) {
        const offset = (parentTop - windowHeight / 2) * -0.15;
        img.style.transform = `translateY(${offset}px) scale(1.15)`;
      }
    });

    // Scrolled header background
    const header = document.querySelector('header');
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  /* =========================
     REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================= */
  if ('IntersectionObserver' in window) {
    const revealOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Reveal only once
        }
      });
    }, revealOptions);

    const revealEls = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-fade, .reveal-up-stagger, .reveal-slide-right');
    revealEls.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-fade, .reveal-up-stagger, .reveal-slide-right');
    revealEls.forEach(el => {
      el.classList.add('is-visible');
    });
  }

})();
