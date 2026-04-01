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

function ensureOutput() {
  let output = demoEl.querySelector(".output");
  if (!output) {
    output = document.createElement("div");
    output.className = "output";
    demoEl.appendChild(output);
  }
  return output;
}

function print(...args) {
  const output = ensureOutput();
  const line = args.join(" ");
  output.textContent = output.textContent ? `${output.textContent}\n${line}` : line;
}

const syntaxLines = [
  'button.addEventListener("click", () => {',
  '  console.log("Clicked!");',
  '});'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  'demoEl.innerHTML = `<button id="clicker" class="btn">Click me</button><div class="output"></div>`;',
  "let count = 0;",
  'const button = document.getElementById("clicker");',
  'const output = demoEl.querySelector(".output");',
  "button.addEventListener(\"click\", () => {",
  "  count++;",
  "  output.textContent = `Button clicked ${count} times`;",
  "});",
  'output.textContent = "Click the button above.";'
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
