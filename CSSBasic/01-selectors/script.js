const syntaxEl = document.getElementById("syntax");
const demoEl = document.getElementById("demo");
const editorEl = document.getElementById("editor");
const runBtn = document.getElementById("run");
const resetBtn = document.getElementById("reset");

function setSyntax(text) {
  syntaxEl.textContent = text.trim();
}

function showDemo(html) {
  demoEl.innerHTML = html;
}

const syntaxLines = [
  "p { color: blue; }",
  ".card { padding: 10px; }",
  "#title { font-weight: bold; }",
];

setSyntax(syntaxLines.join("\n"));

const demoHtml = `
<style>
p{color:#1d4ed8}
.card{padding:10px;border-radius:6px;background:#dbeafe}
#title{font-weight:700}
</style>

<h3 id="title">Selectors</h3>
<p>Style by tag, class, or id.</p>
<div class="card">Card box</div>
`;

editorEl.value = demoHtml.trim();

// run
runBtn.addEventListener("click", () => {
  showDemo(editorEl.value);
});

// reset
resetBtn.addEventListener("click", () => {
  editorEl.value = demoHtml.trim();
  showDemo(demoHtml);
});

// auto run on load
showDemo(demoHtml);