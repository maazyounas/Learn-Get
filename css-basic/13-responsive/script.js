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
  '@media (max-width: 600px) {',
  '  .card { background: #fde68a; }',
  '}'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.card{padding:12px;border-radius:8px;background:#c7d2fe}@media (max-width:600px){.card{background:#fde68a}}</style><div class="card">Resize the browser window</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
