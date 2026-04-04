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
  '.box { width: 200px; padding: 16px; border: 2px solid #333; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.box{width:200px;padding:16px;border:2px solid #111827;background:#fef3c7}</style><div class="box">Box model</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
