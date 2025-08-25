const menuBtn   = document.getElementById('menu-btn');
const navbar    = document.getElementById('navbar');
const links     = navbar.querySelectorAll('a');
const sections  = document.querySelectorAll('section.section');
const yearEl    = document.getElementById('year');
const typingEl  = document.querySelector('.typing-target');

if (yearEl) yearEl.textContent = new Date().getFullYear();
