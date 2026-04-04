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
  '<header>Header</header>',
  '<main>Main content</main>',
  '<footer>Footer</footer>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<header class="demo-sample">Header</header><main class="demo-sample">Main content</main><footer class="demo-sample">Footer</footer>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
