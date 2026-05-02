// Syntax show
const syntaxCode = `/* Overflow Property */
div {
  width: 200px;
  height: 100px;
  overflow: hidden; /* hidden | scroll | auto | visible */
}`;

// Example code
const exampleCode = `<div style="
  width:200px;
  height:100px;
  border:2px solid black;
  overflow:auto;
">
  This is a long content that will overflow the box.
  Keep writing more text to see scroll effect.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</div>`;

// Set default values
document.getElementById("syntax").textContent = syntaxCode;
document.getElementById("editor").value = exampleCode;

// Run button
document.getElementById("run").addEventListener("click", function () {
  document.getElementById("demo").innerHTML =
    document.getElementById("editor").value;
});