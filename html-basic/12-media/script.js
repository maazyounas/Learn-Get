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
  '<audio controls>',
  '  <source src="song.mp3" type="audio/mpeg" />',
  '</audio>'
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = '<audio class="demo-sample" controls><source src="song.mp3" type="audio/mpeg" /></audio>';

editorEl.value = demoHtml.trim();

runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});
