function setLang(lang) {
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  localStorage.setItem("lang", lang);
}

window.onload = () => {
  setLang(localStorage.getItem("lang") || "en");
};
