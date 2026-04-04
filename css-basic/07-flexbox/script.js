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
  '.row { display: flex; gap: 8px; }',
  '.box { flex: 1; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.row{display:flex;gap:8px}.box{flex:1;padding:10px;background:#c7d2fe;border-radius:8px;text-align:center}</style><div class="row"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
