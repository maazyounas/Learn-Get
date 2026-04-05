
let heroInitialized = false;

const loadComponent = async (slot, path) => {
  if (!slot || slot.dataset.loaded === "true") return;
  try {
    const res = await fetch(path);
    if (!res.ok) return;
    const html = await res.text();
    slot.innerHTML = html;
    slot.dataset.loaded = "true";
  } catch (error) {
    // Fails silently if the component cannot be loaded.
  }
};

const initHero = async () => {
  if (heroInitialized) return;
  const heroContent = document.querySelector(".hero-content");
  const heroFeatures = document.getElementById("hero-features");
  const learningSlot = document.getElementById("learning-details-slot");
  const projectSlot = document.getElementById("project-details-slot");

  if (!heroContent || !learningSlot || !projectSlot) return;

  await Promise.all([
    loadComponent(learningSlot, "/learn-get/learningBtnDetail/index.html"),
    loadComponent(projectSlot, "/learn-get/projectBtnDetail/index.html"),
  ]);

  const startLearningBtn = document.getElementById("start-learning-btn");
  const viewProjectsBtn = document.getElementById("view-projects-btn");
  const backToHeroBtn = document.getElementById("back-to-hero-btn");
  const backToHeroFromProjectsBtn = document.getElementById(
    "back-to-hero-from-projects-btn"
  );
  const learningDetails = document.getElementById("learning-details");
  const projectDetails = document.getElementById("project-details");

  const pushHeroState = (view) => {
    if (!window.history || !window.history.pushState) return;
    const currentView = window.history.state?.heroView;
    if (currentView === view) return;
    window.history.pushState({ heroView: view }, "");
  };

  const showLearningDetails = (shouldPush = true) => {
    if (!learningDetails || !projectDetails) return;
    heroContent.classList.add("is-hidden");
    heroFeatures?.classList.add("is-hidden");
    learningDetails.classList.add("is-visible");
    learningDetails.setAttribute("aria-hidden", "false");
    projectDetails.classList.remove("is-visible");
    projectDetails.setAttribute("aria-hidden", "true");
    if (shouldPush) pushHeroState("learning");
  };

  const showHero = () => {
    if (!learningDetails || !projectDetails) return;
    heroContent.classList.remove("is-hidden");
    heroFeatures?.classList.remove("is-hidden");
    learningDetails.classList.remove("is-visible");
    learningDetails.setAttribute("aria-hidden", "true");
    projectDetails.classList.remove("is-visible");
    projectDetails.setAttribute("aria-hidden", "true");
  };

  const showProjectDetails = (shouldPush = true) => {
    if (!learningDetails || !projectDetails) return;
    heroContent.classList.add("is-hidden");
    heroFeatures?.classList.add("is-hidden");
    learningDetails.classList.remove("is-visible");
    learningDetails.setAttribute("aria-hidden", "true");
    projectDetails.classList.add("is-visible");
    projectDetails.setAttribute("aria-hidden", "false");
    if (shouldPush) pushHeroState("projects");
  };

  if (startLearningBtn && !startLearningBtn.dataset.bound) {
    startLearningBtn.dataset.bound = "true";
    startLearningBtn.addEventListener("click", (event) => {
      event.preventDefault();
      showLearningDetails();
    });
  }

  if (viewProjectsBtn && !viewProjectsBtn.dataset.bound) {
    viewProjectsBtn.dataset.bound = "true";
    viewProjectsBtn.addEventListener("click", (event) => {
      event.preventDefault();
      showProjectDetails();
    });
  }

  if (backToHeroBtn && !backToHeroBtn.dataset.bound) {
    backToHeroBtn.dataset.bound = "true";
    backToHeroBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.history?.state?.heroView) {
        window.history.back();
        return;
      }
      showHero();
    });
  }

  if (backToHeroFromProjectsBtn && !backToHeroFromProjectsBtn.dataset.bound) {
    backToHeroFromProjectsBtn.dataset.bound = "true";
    backToHeroFromProjectsBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.history?.state?.heroView) {
        window.history.back();
        return;
      }
      showHero();
    });
  }

  const applyHistoryState = (state) => {
    if (state?.heroView === "learning") {
      showLearningDetails(false);
      return;
    }
    if (state?.heroView === "projects") {
      showProjectDetails(false);
      return;
    }
    showHero();
  };

  window.addEventListener("popstate", (event) => {
    applyHistoryState(event.state);
  });

  applyHistoryState(window.history?.state);
  heroInitialized = true;
};

document.addEventListener("includes:loaded", initHero);
initHero();
