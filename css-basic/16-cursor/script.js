// Syntax
const syntaxCode = `/* Cursor Property */
button {
  cursor: pointer;
}

/* Other values */
div {
  cursor: move;      /* move object */
  cursor: not-allowed; /* disabled */
  cursor: grab;      /* draggable */
  cursor: crosshair; /* precision */
}`;

// Example
const exampleCode = `<div style="display:flex; gap:15px; flex-wrap:wrap;">

  <button style="padding:10px; cursor:pointer;">Pointer 👆</button>

  <button style="padding:10px; cursor:not-allowed;">Not Allowed 🚫</button>

  <button style="padding:10px; cursor:move;">Move ✋</button>

  <button style="padding:10px; cursor:grab;">Grab 🤏</button>

  <button style="padding:10px; cursor:crosshair;">Crosshair 🎯</button>

</div>`;

// Set values
document.getElementById("syntax").textContent = syntaxCode;
document.getElementById("editor").value = exampleCode;

// Run button
document.getElementById("run").addEventListener("click", function () {
  document.getElementById("demo").innerHTML =
    document.getElementById("editor").value;
});