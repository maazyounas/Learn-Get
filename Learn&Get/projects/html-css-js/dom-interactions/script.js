const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const preview = document.getElementById("preview-frame");
const resetBtn = document.getElementById("reset-btn");

const starterHtml = `
<div class="panel">
  <h3>Click the button</h3>
  <button id="toggle-btn">Toggle Highlight</button>
  <div class="box" id="box">Watch me change</div>
</div>
`;

const starterCss = `
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f8fafc;
  color: #0f172a;
}
.panel {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  max-width: 380px;
}
.box {
  margin-top: 12px;
  padding: 14px;
  border-radius: 10px;
  border: 2px dashed #94a3b8;
  transition: 0.2s ease;
}
.box.active {
  background: #e0f2fe;
  border-color: #1f6db1;
  color: #0f172a;
}
button {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #1f6db1;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
`;

const starterJs = `
const btn = document.getElementById("toggle-btn");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  box.classList.toggle("active");
});
`;

const buildPreview = (html, css, js) =>
  `<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;

const updatePreview = () => {
  preview.srcdoc = buildPreview(htmlEditor.value, cssEditor.value, jsEditor.value);
};

if (htmlEditor && cssEditor && jsEditor) {
  htmlEditor.value = starterHtml.trim();
  cssEditor.value = starterCss.trim();
  jsEditor.value = starterJs.trim();
  updatePreview();
  htmlEditor.addEventListener("input", updatePreview);
  cssEditor.addEventListener("input", updatePreview);
  jsEditor.addEventListener("input", updatePreview);
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    htmlEditor.value = starterHtml.trim();
    cssEditor.value = starterCss.trim();
    jsEditor.value = starterJs.trim();
    updatePreview();
  });
}
