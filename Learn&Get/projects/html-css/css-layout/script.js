const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const preview = document.getElementById("preview-frame");
const resetBtn = document.getElementById("reset-btn");

const starterHtml = `
<section class="layout">
  <div class="card">
    <h2>Welcome</h2>
    <p>Use CSS grid to align cards.</p>
  </div>
  <div class="card">
    <h2>Build</h2>
    <p>Experiment with spacing and padding.</p>
  </div>
  <div class="card">
    <h2>Share</h2>
    <p>Preview your layout instantly.</p>
  </div>
</section>
`;

const starterCss = `
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f8fafc;
  color: #0f172a;
}
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
}
.card h2 {
  margin: 0 0 8px;
  font-size: 18px;
}
.card p {
  margin: 0;
  color: #475569;
}
`;

const buildPreview = (html, css) => `<!doctype html><html><head><style>${css}</style></head><body>${html}</body></html>`;

const updatePreview = () => {
  preview.srcdoc = buildPreview(htmlEditor.value, cssEditor.value);
};

if (htmlEditor && cssEditor) {
  htmlEditor.value = starterHtml.trim();
  cssEditor.value = starterCss.trim();
  updatePreview();
  htmlEditor.addEventListener("input", updatePreview);
  cssEditor.addEventListener("input", updatePreview);
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    htmlEditor.value = starterHtml.trim();
    cssEditor.value = starterCss.trim();
    updatePreview();
  });
}
