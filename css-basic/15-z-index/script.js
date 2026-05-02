// Syntax
const syntaxCode = `/* z-index works with positioned elements */
.box {
  position: relative; /* or absolute/fixed */
  z-index: 1;
}`;

// Example
const exampleCode = `<div style="position: relative; height: 200px;">

  <div style="
    position: absolute;
    width: 120px;
    height: 120px;
    background: red;
    top: 20px;
    left: 20px;
    z-index: 1;
  ">
  </div>

  <div style="
    position: absolute;
    width: 120px;
    height: 120px;
    background: blue;
    top: 60px;
    left: 60px;
    z-index: 2;
  ">
  </div>

  <div style="
    position: absolute;
    width: 120px;
    height: 120px;
    background: green;
    top: 100px;
    left: 100px;
    z-index: 3;
  ">
  </div>

</div>`;

// Set values
document.getElementById("syntax").textContent = syntaxCode;
document.getElementById("editor").value = exampleCode;

// Run button
document.getElementById("run").addEventListener("click", function () {
  document.getElementById("demo").innerHTML =
    document.getElementById("editor").value;
});