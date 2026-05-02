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
  '@keyframes pulse { from { transform: scale(1); } to { transform: scale(1.05); } }',
  '.pulse { animation: pulse 1s infinite alternate; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>@keyframes pulse{from{transform:scale(1)}to{transform:scale(1.05)}}.pulse{display:inline-block;padding:10px 14px;border-radius:8px;background:#facc15;animation:pulse 1s infinite alternate}</style><div class="pulse">Animated</div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
