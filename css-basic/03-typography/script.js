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
  'h1 { font-size: 32px; }',
  'p { line-height: 1.6; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.type-title{font-size:28px;font-weight:700}.type-text{line-height:1.6}</style><div class="type-title">Typography</div><p class="type-text">Readable text uses good size and line-height.</p>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
