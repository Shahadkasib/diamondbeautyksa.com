const langToggle = document.getElementById("langToggle");
const html = document.documentElement;

langToggle.addEventListener("click", () => {
  if (html.lang === "en") {
    html.lang = "ar";
    html.dir = "rtl";
    langToggle.textContent = "EN";
  } else {
    html.lang = "en";
    html.dir = "ltr";
    langToggle.textContent = "AR";
  }
});