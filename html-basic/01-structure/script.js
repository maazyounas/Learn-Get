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
  '<!doctype html>',
  '<html>',
  '  <head>',
  '    <title>Page</title>',
  '  </head>',
  '  <body>',
  '    <h1>Hello</h1>',
  '  </body>',
  '</html>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<div class="demo-sample"><h3>Hello HTML</h3><p>This is a simple page body.</p></div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
