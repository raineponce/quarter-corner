// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');

function getStorage(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function setStorage(key, val) {
  try { localStorage.setItem(key, val); } catch { /* silently fail in private/blocked contexts */ }
}

function setTheme(isDark, save = true) {
  document.body.classList.toggle('dark-mode', isDark);
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
    if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', String(isDark));
  }
  if (save) setStorage('theme', isDark ? 'dark' : 'light');
}

// Load saved preference without triggering the CSS transition
const savedTheme = getStorage('theme');
if (savedTheme) {
  document.body.classList.add('preload');
  setTheme(savedTheme === 'dark', false);
  // Two rAFs: outer fires before paint, inner fires after — ensuring .preload
  // is only removed once the browser has actually committed the first frame.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.body.classList.remove('preload'));
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
  });
}
