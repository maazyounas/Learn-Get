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
  '<a href="https://example.com">Visit Example</a>',
  '<a href="#section">Jump to a section</a>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<a class="demo-sample" href="https://example.com" target="_blank">Visit Example</a>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
