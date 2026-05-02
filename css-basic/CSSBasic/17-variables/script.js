// Syntax
const syntaxCode = `/* Define variables */
:root {
  --main-color: blue;
  --padding: 10px;
}

/* Use variables */
div {
  color: var(--main-color);
  padding: var(--padding);
}`;

// Example
const exampleCode = `<!-- HTML -->
<div class="box">Hello World</div>

<style>
  :root {
    --primary: #1b6ef3;
    --bg: #f4f4f4;
  }

  .box {
    background: var(--primary);
    color: white;
    padding: 20px;
    border-radius: 10px;
  }

  body {
    background: var(--bg);
  }
</style>`;

// Set values
document.getElementById("syntax").textContent = syntaxCode;
document.getElementById("editor").value = exampleCode;

// Run button
document.getElementById("run").addEventListener("click", function () {
  document.getElementById("demo").innerHTML =
    document.getElementById("editor").value;
});