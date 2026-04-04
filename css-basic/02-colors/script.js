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
  '.box { background: #f97316; color: white; }',
  'body { color: #111827; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.box{background:#f97316;color:white;padding:12px;border-radius:8px}</style><div class="box">Colorful box</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
