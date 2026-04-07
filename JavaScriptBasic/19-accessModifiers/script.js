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
  'class Counter {',
  '  #count = 0;',
  '  constructor(start = 0) {',
  '    this.#count = start;',
  '  }',
  '',
  '  increment() {',
  '    this.#count += 1;',
  '  }',
  '',
  '  getCount() {',
  '    return this.#count;',
  '  }',
  '}'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  'class Counter {',
  '  #count = 0;',
  '  constructor(start = 0) {',
  '    this.#count = start;',
  '  }',
  '',
  '  increment() {',
  '    this.#count += 1;',
  '  }',
  '',
  '  getCount() {',
  '    return this.#count;',
  '  }',
  '}',
  '',
  'const counter = new Counter(5);',
  'counter.increment();',
  'counter.increment();',
  'print(`Count: ${counter.getCount()}`);',
  'try {',
  '  print(counter.#count);',
  '} catch (err) {',
  '  print("Private field cannot be accessed from outside.");',
  '}'
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

