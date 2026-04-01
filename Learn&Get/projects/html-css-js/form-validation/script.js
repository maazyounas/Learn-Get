const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const preview = document.getElementById("preview-frame");
const resetBtn = document.getElementById("reset-btn");

const starterHtml = `
<form id="signup-form" class="form">
  <label for="name">Name</label>
  <input id="name" type="text" placeholder="Enter your name" />
  <span class="error" id="name-error"></span>

  <label for="email">Email</label>
  <input id="email" type="email" placeholder="you@example.com" />
  <span class="error" id="email-error"></span>

  <button type="submit">Submit</button>
</form>
`;

const starterCss = `
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f8fafc;
  color: #0f172a;
}
.form {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  max-width: 380px;
  display: grid;
  gap: 8px;
}
label { font-weight: 600; }
input {
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #cbd5f5;
}
button {
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  background: #1f6db1;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.error {
  min-height: 16px;
  color: #b91c1c;
  font-size: 12px;
}
`;

const starterJs = `
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;

  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (valid) {
    alert("Great job! Form is valid.");
  }
});
`;

const buildPreview = (html, css, js) =>
  `<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;

const updatePreview = () => {
  preview.srcdoc = buildPreview(htmlEditor.value, cssEditor.value, jsEditor.value);
};

if (htmlEditor && cssEditor && jsEditor) {
  htmlEditor.value = starterHtml.trim();
  cssEditor.value = starterCss.trim();
  jsEditor.value = starterJs.trim();
  updatePreview();
  htmlEditor.addEventListener("input", updatePreview);
  cssEditor.addEventListener("input", updatePreview);
  jsEditor.addEventListener("input", updatePreview);
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    htmlEditor.value = starterHtml.trim();
    cssEditor.value = starterCss.trim();
    jsEditor.value = starterJs.trim();
    updatePreview();
  });
}
