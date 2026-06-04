document.addEventListener('DOMContentLoaded', () => {

  // Enable reveal-on-scroll only when JS runs, so content is never gated
  // behind it (no-JS and headless renders show everything by default).
  document.documentElement.classList.add('js-reveal');

  // =============================================
  // SIDEBAR ACTIVE LINK ON SCROLL
  // =============================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section[id]');

  const activateLink = (id) => {
    navLinks.forEach(link => {
      const isActive = link.dataset.section === id;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    moveDot(id);
  };

  // =============================================
  // FLYING DOT
  // The logo's blue period glides down the sidebar to the active nav link, and
  // home to the logo when the Intro section is active. The dot is a single
  // reused element; we animate its transform so it physically travels.
  // Desktop/tablet only — on the mobile top bar there's no vertical rail to fly.
  // =============================================
  const sidebar = document.querySelector('.sidebar');
  const flyingDot = document.querySelector('.flying-dot');
  const logo = document.querySelector('.sidebar-logo');
  const desktopRail = window.matchMedia('(min-width: 901px)');
  const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  let currentSectionId = 'startseite';

  // Anchor at the top: the last visible letter of "Oscar" (the "r"), not the
  // whole wordmark box — the hidden "." placeholder still occupies width, which
  // would otherwise push the period too far right. The "r" is the char right
  // before .logo-dot, i.e. the second-to-last logo char.
  const logoLetter = document.querySelector('.sidebar-logo .logo-char:nth-last-child(2)');
  const anchorFor = (id) => {
    if (id === 'startseite' || !id) return logoLetter || logo;
    const link = document.querySelector(`.nav-link[data-section="${id}"]`);
    return link || logo;
  };

  // Measure the actual rendered glyph bounds of an element's text, not its box.
  // The nav links are full-width flex items, so their box right-edge is the
  // column edge (identical for every link) — measuring the text instead lets the
  // dot land at the true end of each word, however short. Falls back to the
  // element box if there's no text node.
  const textRect = (el) => {
    const node = el.firstChild;
    if (node && node.nodeType === Node.TEXT_NODE) {
      const range = document.createRange();
      range.selectNodeContents(node);
      const r = range.getBoundingClientRect();
      if (r.width || r.height) return r;
    }
    return el.getBoundingClientRect();
  };

  // Place the dot like a period: tucked just past the last letter and sitting
  // low on the text baseline (not centred on the line), so it reads as
  // punctuation. Coordinates are relative to the sidebar (the dot's offset
  // parent), so we subtract the sidebar's own box.
  const positionDot = (target, animate) => {
    if (!sidebar || !flyingDot || !target) return;
    const railBox = sidebar.getBoundingClientRect();
    const box = textRect(target);
    const dotSize = flyingDot.offsetWidth;
    const gap = dotSize * 0.28; // a period nearly touches the last letter

    const x = box.right - railBox.left + gap;
    // Sit the dot on the text baseline: align its bottom with the glyph bottom.
    // The text rect bottom is the descender line; nudge up a hair so the square
    // rests on the baseline like a period rather than dropping below it.
    const y = box.bottom - railBox.top - dotSize - box.height * 0.2;

    if (!animate) {
      // Snap without the glide (initial placement or reduced-motion).
      const prev = flyingDot.style.transition;
      flyingDot.style.transition = 'none';
      flyingDot.style.transform = `translate(${x}px, ${y}px)`;
      // Force a reflow so the no-transition snap is committed before we restore.
      void flyingDot.offsetWidth;
      flyingDot.style.transition = prev;
      return;
    }
    flyingDot.style.transform = `translate(${x}px, ${y}px)`;
  };

  const moveDot = (id) => {
    if (id) currentSectionId = id;
    if (!flyingDot || !desktopRail.matches) return;
    positionDot(anchorFor(currentSectionId), !motionReduced.matches);
  };

  // Enable the flier only on the desktop/tablet rail. When off, the static
  // .logo-dot shows instead (see .flying-dot-active in CSS).
  const syncDotMode = () => {
    if (!flyingDot) return;
    if (desktopRail.matches) {
      document.documentElement.classList.add('flying-dot-active');
      // No animation on (re)entry — snap straight to the current target.
      positionDot(anchorFor(currentSectionId), false);
    } else {
      document.documentElement.classList.remove('flying-dot-active');
    }
  };

  syncDotMode();

  // First placement happens at DOMContentLoaded, before the Geist web font has
  // loaded — so the dot is measured against the fallback font's "Oscar" width
  // and ends up offset once the real font swaps in (most visible on a hard
  // reload). Re-snap after the next paint and again once fonts are ready, so the
  // resting dot lands exactly at the end of "Oscar" from the very first view.
  const resnap = () => { if (flyingDot && desktopRail.matches) positionDot(anchorFor(currentSectionId), false); };
  requestAnimationFrame(resnap);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(resnap);
  }

  // Recompute on resize (rAF-throttled) so the dot stays glued through layout
  // changes, and flips behaviour when crossing the 900px breakpoint.
  let dotRaf = null;
  window.addEventListener('resize', () => {
    if (dotRaf) return;
    dotRaf = requestAnimationFrame(() => {
      dotRaf = null;
      syncDotMode();
    });
  }, { passive: true });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateLink(entry.target.id);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  // =============================================
  // HAMBURGER MENU (mobile)
  // =============================================
  const hamburger = document.getElementById('hamburger');
  const sidebarNav = document.querySelector('.sidebar-nav');

  if (hamburger && sidebarNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = sidebarNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on nav link click
    sidebarNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        sidebarNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =============================================
  // KONTAKT: SCROLL SO THE FORM (Senden) IS FULLY IN VIEW
  // The contact section is the last one; native anchor scrolling aligns its
  // top to the viewport top, which can leave the Senden button below the fold
  // on shorter screens. Align its bottom edge instead so the whole card shows.
  // =============================================
  const kontaktLink = document.querySelector('.nav-link[data-section="kontakt"]');
  const kontaktSection = document.getElementById('kontakt');

  if (kontaktLink && kontaktSection) {
    kontaktLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Always anchor the section's top to the viewport top: the "Kontakt"
      // title stays visible no matter the screen height. The CSS keeps the
      // card compact enough that the Senden button usually shows too — but if
      // it can't, the title is never sacrificed for it.
      kontaktSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#kontakt');
    });
  }

  // =============================================
  // AUDIENCE TABS
  // =============================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('[data-audience-panel]');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.audience;
      document.body.dataset.audience = target;

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      panels.forEach(panel => {
        if (panel.dataset.audiencePanel === target) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });

  // =============================================
  // PROJECT FILTERS (skim layer)
  // =============================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const projectItems = document.querySelectorAll('.project-item');
  const filterCount = document.querySelector('.filter-count');

  if (filterChips.length && projectItems.length) {
    const applyFilter = (filter) => {
      let visible = 0;
      projectItems.forEach(item => {
        const match = filter === 'alle' || item.dataset.category === filter;
        item.hidden = !match;
        // Filtering is an explicit browse action: reveal matching items
        // at once so the scroll-reveal can never leave one hidden.
        if (match) {
          item.classList.add('is-visible');
          visible++;
        }
      });
      if (filterCount) {
        filterCount.textContent = visible === 1 ? '1 Projekt' : visible + ' Projekte';
      }
    };

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
        applyFilter(chip.dataset.filter);
      });
    });
  }

  // =============================================
  // REVEAL PROJECTS ON SCROLL (staggered bento tiles)
  // =============================================
  const revealItems = document.querySelectorAll('.project-item');

  // Pre-set a stagger index on each bento cell for the CSS transition-delay.
  revealItems.forEach(item => {
    item.querySelectorAll('.bento-cell').forEach((cell, i) => {
      cell.style.setProperty('--i', i);
    });
  });

  if ('IntersectionObserver' in window && revealItems.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    // No observer support: reveal everything immediately.
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // =============================================
  // HERO ENLARGER LIGHT (cursor-tracked light pool)
  // =============================================
  const hero = document.getElementById('startseite');

  // The cursor-tracked light is a pointer enhancement: only run it on devices
  // that hover with a fine pointer and haven't asked to reduce motion. Touch
  // devices keep the calm static glow (no cursor to track, and it saves battery).
  const lightPointerOk = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const lightMotionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  if (hero && lightPointerOk && lightMotionOk) {
    let rect = hero.getBoundingClientRect();
    let targetX = rect.width * 0.5;
    let targetY = rect.height * 0.4;
    let currentX = targetX;
    let currentY = targetY;
    let pointerActive = false;
    let lastMove = 0;
    let raf = null;
    let inView = true;

    const apply = () => {
      hero.style.setProperty('--lx', currentX.toFixed(1) + 'px');
      hero.style.setProperty('--ly', currentY.toFixed(1) + 'px');
    };

    const frame = (now) => {
      // Drift on a slow path when the cursor is idle or absent (e.g. touch).
      if (!pointerActive || now - lastMove > 2500) {
        const s = now / 5000;
        targetX = rect.width * 0.5 + Math.cos(s) * rect.width * 0.22;
        targetY = rect.height * 0.4 + Math.sin(s * 0.8) * rect.height * 0.16;
      }
      // Ease toward the target for a weighted "heavy light" feel.
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;
      apply();
      raf = inView ? requestAnimationFrame(frame) : null;
    };

    hero.addEventListener('pointermove', (e) => {
      rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      pointerActive = true;
      lastMove = performance.now();
    }, { passive: true });

    window.addEventListener('resize', () => {
      rect = hero.getBoundingClientRect();
    }, { passive: true });

    // Pause the loop while the hero is off-screen.
    const heroObserver = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      if (inView && !raf) raf = requestAnimationFrame(frame);
    }, { threshold: 0 });
    heroObserver.observe(hero);

    apply();
    raf = requestAnimationFrame(frame);
  }


});
