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
  '.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.cell{padding:10px;background:#bbf7d0;border-radius:8px;text-align:center}</style><div class="grid"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div></div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
