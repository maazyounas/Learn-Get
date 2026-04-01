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
  '<img src="https://placehold.co/200x120" alt="Sample" />',
  '<img src="hero.jpg" alt="Hero image" />'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<img class="demo-sample" src="https://placehold.co/220x140" alt="Sample image" />';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
