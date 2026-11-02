const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

function closeNavigation() {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Buka menu navigasi');
  siteNav.classList.remove('open');
  document.body.classList.remove('nav-open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Buka menu navigasi' : 'Tutup menu navigasi');
  siteNav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeNavigation();
    navToggle.focus();
  }
});

document.addEventListener('click', (event) => {
  if (siteNav.classList.contains('open') && !event.target.closest('.header-inner')) {
    closeNavigation();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) closeNavigation();
});

document.getElementById('current-year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  sections.forEach((section) => sectionObserver.observe(section));
}
