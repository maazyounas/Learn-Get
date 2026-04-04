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
  '<input type="email" placeholder="name@example.com" />',
  '<input type="number" min="1" max="10" />'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<div class="demo-sample"><input type="email" placeholder="name@example.com" /> <input type="number" min="1" max="10" /></div>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
