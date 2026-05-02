const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");

const topics = [
  "01-selectors",
  "02-colors",
  "03-typography",
  "04-box-model",
  "05-spacing",
  "06-borders-shadows",
  "07-flexbox",
  "08-grid",
  "09-position",
  "10-backgrounds",
  "11-transitions",
  "12-animations",
  "13-responsive",
  "14-overflow",
  "15-z-index",
  "16-cursor",
  "17-variables",
  "complete-css"
];

const path = window.location.pathname;
let currentIndex = topics.findIndex(topic => path.includes(topic));

if (currentIndex === -1) currentIndex = 0;

function goToPage(url) {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 400); 
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentIndex < topics.length - 1) {
      goToPage(`../${topics[currentIndex + 1]}/index.html`);
    }
  });
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      goToPage(`../${topics[currentIndex - 1]}/index.html`);
    }
  });
}