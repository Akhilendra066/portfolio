// Typing Animation
const roles = ['Android Developer', 'IoT Enthusiast', 'ML Explorer', 'Tech Mentor'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const currentRole = roles[roleIndex];
  typingEl.textContent = isDeleting 
    ? currentRole.substring(0, charIndex--) 
    : currentRole.substring(0, charIndex++);
  
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('navMenu').classList.remove('active');
    }
  });
});
