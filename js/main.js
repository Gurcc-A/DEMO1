// Мобільне меню
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Рік у футері
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Статус «відкрито / зачинено» (11:00–22:00 щодня)
const status = document.getElementById('open-status');
if (status) {
  const h = new Date().getHours();
  const open = h >= 11 && h < 22;
  status.textContent = open ? 'Зараз відкрито — до 22:00' : 'Зараз зачинено — відкриємось о 11:00';
  status.classList.toggle('open', open);
}

// Фільтр меню
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.item');
function applyFilter(cat) {
  filters.forEach(f => f.classList.toggle('active', f.dataset.filter === cat));
  items.forEach(i => { i.hidden = cat !== 'all' && i.dataset.cat !== cat; });
}
filters.forEach(f => f.addEventListener('click', () => applyFilter(f.dataset.filter)));
// Відкриття з посиланням menu.html#pizza
if (filters.length) {
  const hash = location.hash.slice(1);
  if (['pizza', 'rolls', 'burgers', 'sides'].includes(hash)) applyFilter(hash);
}
