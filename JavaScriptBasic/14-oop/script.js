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
  'class Person {',
  '  constructor(name, role) {',
  '    this.name = name;',
  '    this.role = role;',
  '  }',
  '',
  '  describe() {',
  '    return `${this.name} is a ${this.role}.`;',
  '  }',
  '}'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  'class Person {',
  '  constructor(name, role) {',
  '    this.name = name;',
  '    this.role = role;',
  '  }',
  '',
  '  describe() {',
  '    return `${this.name} is a ${this.role}.`;',
  '  }',
  '}',
  '',
  'const student = new Person("Ava", "student");',
  'print(student.describe());',
  'print("Created object:", student.name, student.role);'
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

