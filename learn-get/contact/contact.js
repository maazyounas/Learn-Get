document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".contact-hero");
  if (!hero) return;
  hero.style.opacity = "0";
  hero.style.transform = "translateY(10px)";
  requestAnimationFrame(() => {
    hero.style.transition = "0.35s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  });
});
