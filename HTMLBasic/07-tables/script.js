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
  '<table>',
  '  <tr><th>Item</th><th>Price</th></tr>',
  '  <tr><td>Pen</td><td>$2</td></tr>',
  '</table>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<table class="demo-sample"><tr><th>Item</th><th>Price</th></tr><tr><td>Pen</td><td>$2</td></tr><tr><td>Book</td><td>$5</td></tr></table>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
