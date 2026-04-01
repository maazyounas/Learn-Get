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
  '<button type="button">Click me</button>',
  '<button type="submit">Submit</button>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<div class="demo-sample"><button type="button">Click me</button></div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
