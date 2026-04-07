// Home page behavior
function setupHomeToggles() {
  const learningSection = document.getElementById("learning-section");
  const projectsSection = document.getElementById("projects-section");
  const startBtn = document.getElementById("start-learning-btn");
  const projectsBtn = document.getElementById("view-projects-btn");

  if (!learningSection || !projectsSection || !startBtn || !projectsBtn) return;

  const showSection = (target) => {
    const showLearning = target === "learning";
    const targetSection = showLearning ? learningSection : projectsSection;
    learningSection.classList.toggle("hidden", !showLearning);
    learningSection.setAttribute("aria-hidden", String(!showLearning));
    projectsSection.classList.toggle("hidden", showLearning);
    projectsSection.setAttribute("aria-hidden", String(showLearning));

    const top = targetSection.offsetTop - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showSection("learning");
  });

  projectsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showSection("projects");
  });
}

document.addEventListener("includes:loaded", setupHomeToggles);

