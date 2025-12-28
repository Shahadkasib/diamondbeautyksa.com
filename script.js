// Accordion toggle
const accBtns = document.querySelectorAll('.accordion-btn');

accBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    this.classList.toggle('active');
  });
});

// Language Toggle (Simple visibility toggle - you can expand with translations)
document.getElementById('en-btn').addEventListener('click', () => {
  document.body.dir = 'ltr';
});

document.getElementById('ar-btn').addEventListener('click', () => {
  document.body.dir = 'rtl';
});
