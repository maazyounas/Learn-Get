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
  'function greet(name) {',
  '  return "Hello, " + name + "!";',
  '}',
  '',
  'const add = (a, b) => a + b;'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  "function greet(name) {",
  '  return "Hello, " + name + "!";',
  "}",
  "const add = (a, b) => a + b;",
  'print(`${greet("Sara")} 2 + 3 = ${add(2, 3)}`);'
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

