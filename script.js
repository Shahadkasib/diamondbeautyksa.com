function setLang(lang) {
  const elements = document.querySelectorAll('[data-en]');
  document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
