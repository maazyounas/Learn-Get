const editor = document.getElementById("html-editor");
const preview = document.getElementById("preview-frame");
const resetBtn = document.getElementById("reset-btn");

const starterHtml = `
<nav class="site-nav">
  <div class="logo">MySite</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
`;

const baseStyles = `
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f8fafc;
}

.site-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  background: white;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.logo {
  font-weight: bold;
  color: #1f6db1;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: #0f172a;
  font-weight: 600;
}

@media(max-width:600px){
  .site-nav{
    flex-direction: column;
    align-items: flex-start;
    gap:10px;
  }
}
`;

const buildPreview = (html) => `
<!doctype html>
<html>
<head>
<style>${baseStyles}</style>
</head>
<body>
${html}
</body>
</html>
`;

const updatePreview = () => {
  preview.srcdoc = buildPreview(editor.value);
};

editor.value = starterHtml.trim();
updatePreview();

editor.addEventListener("input", updatePreview);

resetBtn.addEventListener("click", () => {
  editor.value = starterHtml.trim();
  updatePreview();
});