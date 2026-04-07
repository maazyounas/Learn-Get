(function () {
  const courseLessons = {
    "css-basic": [
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
      "13-responsive"
    ],
    "html-basic": [
      "01-structure",
      "02-headings",
      "03-paragraphs-text",
      "04-links",
      "05-images",
      "06-lists",
      "07-tables",
      "08-forms",
      "09-input-types",
      "10-buttons",
      "11-semantic",
      "12-media",
      "13-classes-ids"
    ],
    "javascript-basic": [
      "01-variables",
      "02-functions",
      "03-input",
      "04-operators",
      "05-conditionals",
      "06-loops",
      "07-arrays",
      "08-objects",
      "09-strings",
      "10-numbers",
      "11-booleans",
      "12-dom",
      "13-events"
    ]
  };

  const normalizePath = (path) => path.replace(/\\/g, "/");

  const getCourseAndLesson = (path) => {
    const normalized = normalizePath(path);
    const match = normalized.match(/\/(css-basic|html-basic|javascript-basic)\/([^\/]+)(?:\/|$)/);
    if (!match) return null;
    return { course: match[1], lesson: match[2] };
  };

  const createNav = (course, lesson) => {
    const lessons = courseLessons[course];
    if (!lessons) return null;
    const index = lessons.indexOf(lesson);
    if (index === -1) return null;

    const prevLesson = index > 0 ? lessons[index - 1] : null;
    const nextLesson = index < lessons.length - 1 ? lessons[index + 1] : null;

    if (!prevLesson && !nextLesson) return null;

    const nav = document.createElement("nav");
    nav.className = "lesson-nav";

    if (prevLesson) {
      const prev = document.createElement("a");
      prev.className = "btn nav-btn prev";
      prev.href = `/${course}/${prevLesson}/index.html`;
      prev.textContent = "Previous";
      nav.appendChild(prev);
    }

    if (nextLesson) {
      const next = document.createElement("a");
      next.className = "btn nav-btn next";
      next.href = `/${course}/${nextLesson}/index.html`;
      next.textContent = "Next";
      nav.appendChild(next);
    }

    return nav;
  };

  const init = () => {
    const result = getCourseAndLesson(window.location.pathname || "");
    if (!result) return;

    const main = document.querySelector("main.page");
    if (!main) return;

    const nav = createNav(result.course, result.lesson);
    if (!nav) return;

    main.appendChild(nav);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
