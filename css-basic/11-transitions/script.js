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
  '.btn { transition: transform 0.2s ease; }',
  '.btn:hover { transform: translateY(-2px); }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.btn{display:inline-block;padding:10px 14px;border-radius:8px;background:#1d4ed8;color:white;transition:transform .2s ease}.btn:hover{transform:translateY(-2px)}</style><div class="btn">Hover me</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
