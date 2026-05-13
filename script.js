document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // SIDEBAR ACTIVE LINK ON SCROLL
  // =============================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section[id]');

  const activateLink = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === id);
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
      sidebarNav.classList.toggle('open');
    });

    // Close on nav link click
    sidebarNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => sidebarNav.classList.remove('open'));
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

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(panel => {
        if (panel.dataset.audiencePanel === target) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });


});
