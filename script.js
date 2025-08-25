const menuBtn   = document.getElementById('menu-btn');
const navbar    = document.getElementById('navbar');
const links     = navbar.querySelectorAll('a');
const sections  = document.querySelectorAll('section.section');
const yearEl    = document.getElementById('year');
const typingEl  = document.querySelector('.typing-target');

if (yearEl) yearEl.textContent = new Date().getFullYear();


menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
  const icon = menuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

links.forEach(a => a.addEventListener('click', () => navbar.classList.remove('show')));

function setActiveLink(id){
  links.forEach(a => a.classList.remove('active'));
  const active = navbar.querySelector(`a[href="#${id}"]`);
  if (active) active.classList.add('active');
}


const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      setActiveLink(entry.target.id);
    }
  });
}, { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 });

sections.forEach(sec => io.observe(sec));

const words = [
  "Web Developer",
  "Software Developer",
  "Frontend Developer",
  "UI Designer",
  "Problem Solver"
];
let w = 0, i = 0, del = false;

function type() {
  const word = words[w];
  typingEl.textContent = word.slice(0, i);
  if (!del && i < word.length) { i++; setTimeout(type, 90); }
  else if (!del && i === word.length) { del = true; setTimeout(type, 1200); }
  else if (del && i > 0) { i--; setTimeout(type, 45); }
  else { del = false; w = (w + 1) % words.length; setTimeout(type, 300); }
}
document.addEventListener('DOMContentLoaded', () => type());
