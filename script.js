const content = {
  en: {
    title: "Luxury, Redefined",
    desc: "Once a small neighborhood salon in Ar Rawdah, Diamond Beauty grew with love, trust, and dedication. With over 20 years of experience, we are proud to open our doors today, bringing refined beauty, care, and expertise to every woman who walks in.",
    services: "View Services",
    book: "Book Now"
  },
  ar: {
    title: "الفخامة كما يجب أن تكون",
    desc: "بدأنا كصالون صغير في حي الروضة، ونمونا بالحب والثقة والشغف. بخبرة تتجاوز 20 عاماً، نفتخر اليوم بفتح أبوابنا لنقدم الجمال والعناية والخبرة لكل امرأة تزورنا.",
    services: "عرض الخدمات",
    book: "احجزي الآن"
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("title").innerText = content[lang].title;
  document.getElementById("desc").innerText = content[lang].desc;
  document.getElementById("servicesBtn").innerText = content[lang].services;
  document.getElementById("bookBtn").innerText = content[lang].book;
}
