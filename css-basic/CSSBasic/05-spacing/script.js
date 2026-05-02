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
  '.item { margin: 12px; padding: 8px; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.item{margin:12px;padding:8px;background:#e0f2fe;border-radius:6px}</style><div class="item">Spacing sample</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
