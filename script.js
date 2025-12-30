// Language Toggle
function setLang(lang) {
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

document.getElementById("en").onclick = () => setLang("en");
document.getElementById("ar").onclick = () => setLang("ar");

// Services Accordion
document.querySelectorAll(".service-title").forEach(btn => {
  btn.onclick = () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  };
});
