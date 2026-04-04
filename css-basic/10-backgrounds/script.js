const syntaxEl = document.getElementById("syntax");
const demoEl = document.getElementById("demo");
const editorEl = document.getElementById("editor");
const runBtn = document.getElementById("run");

function setSyntax(text) {
  syntaxEl.textContent = text.trim();
}

function showDemo(html) {
  demoEl.innerHTML = html;
}

const syntaxLines = [
  '.hero { background: linear-gradient(120deg, #f97316, #fb7185); }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.hero{padding:16px;border-radius:10px;color:white;background:linear-gradient(120deg,#f97316,#fb7185)}</style><div class="hero">Gradient background</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
