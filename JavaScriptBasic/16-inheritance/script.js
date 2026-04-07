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
  'class Animal {',
  '  constructor(name) {',
  '    this.name = name;',
  '  }',
  '',
  '  speak() {',
  '    return `${this.name} makes a sound.`;',
  '  }',
  '}',
  '',
  'class Dog extends Animal {',
  '  speak() {',
  '    return `${this.name} barks.`;',
  '  }',
  '}'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  'class Animal {',
  '  constructor(name) {',
  '    this.name = name;',
  '  }',
  '',
  '  speak() {',
  '    return `${this.name} makes a sound.`;',
  '  }',
  '}',
  '',
  'class Dog extends Animal {',
  '  speak() {',
  '    return `${this.name} barks.`;',
  '  }',
  '}',
  '',
  'const pet = new Dog("Rex");',
  'print(pet.speak());',
  'print(`Is pet an Animal? ${pet instanceof Animal}`);'
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

