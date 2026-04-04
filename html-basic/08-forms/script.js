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
  '<form>',
  '  <label>Name <input type="text" /></label>',
  '  <button>Submit</button>',
  '</form>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<form class="demo-sample"><label>Name <input type="text" /></label> <button type="button">Submit</button></form>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
