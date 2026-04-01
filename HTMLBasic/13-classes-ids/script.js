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
  '<div class="card" id="hero">Content</div>',
  '<p class="note">Note text</p>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<div class="demo-sample" id="hero">Hero section</div><p class="demo-sample note">Note text</p>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
