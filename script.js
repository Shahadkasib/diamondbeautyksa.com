function setLang(lang) {
  const elements = document.querySelectorAll('[data-en]');
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

document.getElementById('en-btn').addEventListener('click', () => setLang('en'));
document.getElementById('ar-btn').addEventListener('click', () => setLang('ar'));
