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
  'class MessageSender {',
  '  constructor(prefix) {',
  '    this.prefix = prefix;',
  '  }',
  '',
  '  send(message) {',
  '    const payload = this._format(message);',
  '    this._dispatch(payload);',
  '  }',
  '',
  '  _format(message) {',
  '    return `${this.prefix}: ${message}`;',
  '  }',
  '',
  '  _dispatch(payload) {',
  '    console.log(payload);',
  '  }',
  '}'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  'class MessageSender {',
  '  constructor(prefix) {',
  '    this.prefix = prefix;',
  '  }',
  '',
  '  send(message) {',
  '    const payload = this._format(message);',
  '    this._dispatch(payload);',
  '  }',
  '',
  '  _format(message) {',
  '    return `${this.prefix}: ${message}`;',
  '  }',
  '',
  '  _dispatch(payload) {',
  '    print(payload);',
  '  }',
  '}',
  '',
  'const notifier = new MessageSender("Notice");',
  'notifier.send("Your order is ready");',
  'notifier.send("Delivery arrives tomorrow");'
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

