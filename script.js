const menuBtn   = document.getElementById('menu-btn');
const navbar    = document.getElementById('navbar');
const links     = navbar.querySelectorAll('a');
const sections  = document.querySelectorAll('section.section');
const yearEl    = document.getElementById('year');
const typingEl  = document.querySelector('.typing-target');


// ===== Year in footer =====
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Mobile Menu =====
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
  const icon = menuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// Close menu on link click (mobile)
links.forEach(a => a.addEventListener('click', () => navbar.classList.remove('show')));

// ===== Scroll Spy (active link highlight) =====
function setActiveLink(id){
  links.forEach(a => a.classList.remove('active'));
  const active = navbar.querySelector(`a[href="#${id}"]`);
  if (active) active.classList.add('active');
}

