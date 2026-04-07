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
  'class BankAccount {',
  '  constructor(owner, initialBalance = 0) {',
  '    this.owner = owner;',
  '    this._balance = initialBalance;',
  '  }',
  '',
  '  deposit(amount) {',
  '    if (amount > 0) this._balance += amount;',
  '  }',
  '',
  '  withdraw(amount) {',
  '    if (amount > 0 && amount <= this._balance) {',
  '      this._balance -= amount;',
  '    }',
  '  }',
  '',
  '  getBalance() {',
  '    return this._balance;',
  '  }',
  '}'
];

setSyntax(syntaxLines.join("\n"));

const demoCode = [
  'class BankAccount {',
  '  constructor(owner, initialBalance = 0) {',
  '    this.owner = owner;',
  '    this._balance = initialBalance;',
  '  }',
  '',
  '  deposit(amount) {',
  '    if (amount > 0) this._balance += amount;',
  '  }',
  '',
  '  withdraw(amount) {',
  '    if (amount > 0 && amount <= this._balance) {',
  '      this._balance -= amount;',
  '    } else {',
  '      print("Not enough balance.");',
  '    }',
  '  }',
  '',
  '  getBalance() {',
  '    return this._balance;',
  '  }',
  '}',
  '',
  'const account = new BankAccount("Ava", 100);',
  'account.deposit(50);',
  'account.withdraw(30);',
  'print(`Balance: $${account.getBalance()}`);'
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

