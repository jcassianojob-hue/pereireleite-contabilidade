// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Active nav link
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    item.classList.toggle('open');
  });
});

// Contact form submit (placeholder)
const form = document.querySelector('.contact-form-el');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Mensagem enviada! ✓';
    btn.style.background = '#1B5E20';
    btn.disabled = true;
  });
}
