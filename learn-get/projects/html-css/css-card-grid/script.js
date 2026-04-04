const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const preview = document.getElementById("preview-frame");
const resetBtn = document.getElementById("reset-btn");

const starterHtml = `
<section class="grid">
  <article class="card">
    <h3>Starter</h3>
    <p>Card with title and short text.</p>
    <span class="tag">New</span>
  </article>
  <article class="card">
    <h3>Practice</h3>
    <p>Adjust spacing and font sizes.</p>
    <span class="tag">Hot</span>
  </article>
  <article class="card">
    <h3>Polish</h3>
    <p>Add hover effects for fun.</p>
    <span class="tag">Pro</span>
  </article>
</section>
`;

const starterCss = `
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f8fafc;
  color: #0f172a;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.08);
}
.card h3 { margin: 0 0 8px; }
.card p { margin: 0 0 10px; color: #475569; }
.tag {
  display: inline-block;
  background: #e0ecff;
  color: #1f6db1;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}
.card:hover {
  transform: translateY(-3px);
  transition: transform 0.25s ease;
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
