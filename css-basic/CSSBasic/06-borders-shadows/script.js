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
  '.card { border: 2px solid #111827; box-shadow: 0 10px 20px rgba(0,0,0,0.15); }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.card{border:2px solid #111827;box-shadow:0 10px 20px rgba(0,0,0,0.15);padding:12px;border-radius:10px;background:#fff}</style><div class="card">Borders and shadows</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
