const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
const setMenu = (open) => {
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav.classList.toggle('open', open);
  document.body.classList.toggle('lock', open);
};
btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
matchMedia('(min-width:1024px)').addEventListener('change', (e) => e.matches && setMenu(false));

document.querySelectorAll('[data-case]').forEach((b) =>
  b.addEventListener('click', () => document.getElementById(b.dataset.case).showModal()));
document.querySelectorAll('dialog').forEach((d) => {
  d.querySelector('[data-close]').addEventListener('click', () => d.close());
  d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
});
