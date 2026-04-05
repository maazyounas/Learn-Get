const MarkupLesson = (() => {
  const getElements = () => ({
    syntaxEl: document.getElementById("syntax"),
    demoEl: document.getElementById("demo"),
    editorEl: document.getElementById("editor"),
    runBtn: document.getElementById("run"),
    resetBtn: document.getElementById("reset"),
  });

  const setSyntax = (syntaxEl, lines) => {
    if (!syntaxEl || !lines) return;
    syntaxEl.textContent = lines.join("\n").trim();
  };

  const showDemo = (demoEl, html) => {
    if (!demoEl) return;
    demoEl.innerHTML = html;
  };

  const init = ({ syntaxLines, demoHtml, autoRun = false }) => {
    const { syntaxEl, demoEl, editorEl, runBtn, resetBtn } = getElements();

    setSyntax(syntaxEl, syntaxLines);

    if (editorEl && typeof demoHtml === "string") {
      editorEl.value = demoHtml.trim();
    }

    if (runBtn) {
      runBtn.addEventListener("click", () => {
        if (!editorEl) return;
        showDemo(demoEl, editorEl.value);
      });
    }

    if (resetBtn && typeof demoHtml === "string") {
      resetBtn.addEventListener("click", () => {
        if (!editorEl) return;
        editorEl.value = demoHtml.trim();
        showDemo(demoEl, demoHtml);
      });
    }

    if (autoRun && typeof demoHtml === "string") {
      showDemo(demoEl, demoHtml);
    }
  };

  return { init };
})();
