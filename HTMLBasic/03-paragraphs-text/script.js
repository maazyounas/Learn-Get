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
  '<p>This is a paragraph of text.</p>',
  '<strong>Bold text</strong>',
  '<em>Italic text</em>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<p class="demo-sample">Write short, readable paragraphs that explain ideas clearly.</p>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
