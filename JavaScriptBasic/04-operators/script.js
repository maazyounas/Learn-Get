const syntaxEl = document.getElementById("syntax");
const demoEl = document.getElementById("demo");
const editorEl = document.getElementById("editor");
const runBtn = document.getElementById("run");

function setSyntax(text) {
  syntaxEl.textContent = text.trim();
}

function showDemo(text) {
  demoEl.textContent = text;
}

function print(...args) {
  const line = args.join(" ");
  demoEl.textContent = demoEl.textContent ? `${demoEl.textContent}\n${line}` : line;
}

const syntaxLines = [
  'let sum = 5 + 3;',
  'let product = 4 * 2;',
  'let isEqual = 10 === "10"; // false'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  "let sum = 5 + 3;",
  "let product = 4 * 2;",
  'let isEqual = 10 === "10";',
  'print(`sum=${sum}, product=${product}, 10 === \"10\" -> ${isEqual}`);'
].join("\n");

editorEl.value = demoCode.trim();

runBtn.addEventListener("click", () => {
  demoEl.textContent = "";
  try {
    const runner = new Function("print", "demoEl", editorEl.value);
    runner(print, demoEl);
  } catch (err) {
    demoEl.textContent = `Error: ${err.message}`;
  }
});

