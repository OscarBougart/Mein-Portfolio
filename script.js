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
  };

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


});
