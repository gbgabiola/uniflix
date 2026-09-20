'use strict';

const menuToggle = document.querySelector('#openup');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const currentYear = document.querySelector('#current-year');

const MOBILE_BREAKPOINT = 650;

// ================= NAVIGATION =================
const setMenuState = isOpen => {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));

  menuToggle.innerHTML = isOpen
    ? '<i class="fas fa-times" aria-hidden="true"></i>'
    : '<i class="fas fa-bars" aria-hidden="true"></i>';
};

const closeMenu = () => {
  setMenuState(false);
};

menuToggle?.addEventListener('click', () => {
  if (!navMenu) return;

  const isOpen = navMenu.classList.contains('active');
  setMenuState(!isOpen);
});

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

const handleResize = () => {
  if (window.innerWidth > MOBILE_BREAKPOINT) {
    closeMenu();
  }
};

window.addEventListener('resize', handleResize);

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
