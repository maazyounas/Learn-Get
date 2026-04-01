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
  '<ul>',
  '  <li>Milk</li>',
  '  <li>Bread</li>',
  '</ul>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<ul class="demo-sample"><li>Apples</li><li>Oranges</li><li>Bananas</li></ul>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
