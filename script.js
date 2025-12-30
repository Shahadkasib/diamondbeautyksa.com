const content = {
  en: {
    title: "Luxury, Redefined",
    desc: "Once a small neighborhood salon in Ar Rawdah, Diamond Beauty grew with love, trust, and dedication. With over 20 years of experience, we are proud to open our doors today, bringing refined beauty, care, and expertise to every woman who walks in.",
    services: "View Services",
    book: "Book Now",
    location: "View Location"
  },
  ar: {
    title: "الفخامة كما يجب أن تكون",
    desc: "بدأنا كصالون صغير في حي الروضة، ونمونا بالحب والثقة والشغف. بخبرة تتجاوز 20 عاماً، نفتخر اليوم بفتح أبوابنا لنقدم الجمال والعناية والخبرة لكل امرأة تزورنا.",
    services: "عرض الخدمات",
    book: "احجزي الآن",
    location: "عرض الموقع"
  }
};

function setLang(lang) {
  // Set page language + direction
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  // Text elements
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const servicesBtn = document.getElementById("servicesBtn");
  const bookBtn = document.getElementById("bookBtn");
  const locationBtn = document.getElementById("locationBtn");

  if (title) title.innerText = content[lang].title;
  if (desc) desc.innerText = content[lang].desc;
  if (servicesBtn) servicesBtn.innerText = content[lang].services;
  if (bookBtn) bookBtn.innerText = content[lang].book;
  if (locationBtn) locationBtn.innerText = content[lang].location;

  // Store preference
  localStorage.setItem("lang", lang);
}

// Load saved language on refresh
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});
