'use strict';

const menuToggle = document.querySelector('#openup');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ================= RESPONSIVE NAVIGATION =================
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');

  menuToggle.setAttribute('aria-expanded', String(isOpen));

  menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// ================= CLOSE MENU ON NAVIGATION =================
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');

    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ================= CLOSE MENU ON RESIZE =================

window.addEventListener('resize', () => {
  if (window.innerWidth > 650) {
    navMenu.classList.remove('active');

    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// ================= COPYRIGHT YEAR =================
const currentYear = document.querySelector('#current-year');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
