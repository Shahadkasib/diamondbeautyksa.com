// Accordion toggle
document.querySelectorAll(".accordion-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Language toggle
function setLang(lang) {
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

document.getElementById("en-btn").addEventListener("click", () => setLang("en"));
document.getElementById("ar-btn").addEventListener("click", () => setLang("ar"));
