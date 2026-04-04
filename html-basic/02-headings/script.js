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
  '<h1>Main Title</h1>',
  '<h2>Section Title</h2>',
  '<h3>Subsection</h3>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<div class="demo-sample"><h1>Big Title</h1><h3>Smaller Title</h3></div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
