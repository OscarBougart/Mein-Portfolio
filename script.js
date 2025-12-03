console.log("Portfolio JS is working!");
// script.js
document.addEventListener('DOMContentLoaded', () => {
  let lastScroll = 0;
  const header = document.querySelector('.header'); // target the whole header

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
      // scrolling down
      header.classList.add('hidden');
    } else if (currentScroll < lastScroll) {
      // scrolling up
      header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  });
});

const projectsTitle = document.querySelector('.projects h2');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            projectsTitle.classList.add('active-line');
            observer.unobserve(projectsTitle); // optional: trigger only once
        }
    });
}, { threshold: 0.5 }); // trigger when 50% visible

observer.observe(projectsTitle);

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});