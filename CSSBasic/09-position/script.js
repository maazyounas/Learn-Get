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
  '.badge { position: absolute; top: 8px; right: 8px; }'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<style>.box{position:relative;padding:20px;background:#fee2e2;border-radius:8px}.badge{position:absolute;top:8px;right:8px;background:#ef4444;color:white;padding:4px 6px;border-radius:6px;font-size:12px}</style><div class="box">Relative parent<span class="badge">New</span></div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
