// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav.style.display = open ? 'none' : 'flex';
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Contact form mailto fallback
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const message = data.get('message') || '';
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
    const mailto = `mailto:QUOTE_EMAIL@EXAMPLE.COM?subject=${encodeURIComponent('Quote request from ' + name)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    if (statusEl) {
      statusEl.textContent = 'Opening your email app… if nothing happens, email QUOTE_EMAIL@EXAMPLE.COM';
    }
  });
}
