// DOM elements
const editor = document.getElementById("htmlEditor");
const previewFrame = document.getElementById("previewFrame");
const resetBtn = document.getElementById("resetBtn");

const starterHtml = `<header class="page-header">
  <nav class="site-nav">
    <div class="logo">BrightLearn</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Courses</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <section class="hero">
    <h1>Learn by Building Layouts</h1>
    <p>Create your first complete webpage using semantic HTML: header, navigation, hero section, and footer.</p>
    <a class="hero-btn" href="#">Start Exploring</a>
  </section>
</header>

<footer class="page-footer">
  <p>© 2026 BrightLearn - master the fundamentals of web structure.</p>
</footer>`;

const basePreviewStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: system-ui, "Segoe UI", Arial, sans-serif;
    background: #f9f7f2;
    padding: 1.5rem;
    color: #1e2a36;
    line-height: 1.5;
  }
  .page-header {
    background: white;
    border-radius: 28px;
    padding: 1.2rem 1.8rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.03);
    border: 1px solid #ede6db;
    margin-bottom: 1.2rem;
  }
  .site-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .logo {
    font-weight: 800;
    font-size: 1.6rem;
    background: linear-gradient(135deg, #1f6db1, #0f4f73);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .nav-links {
    display: flex;
    gap: 1.6rem;
    list-style: none;
    flex-wrap: wrap;
  }
  .nav-links a {
    text-decoration: none;
    font-weight: 500;
    color: #2c4b66;
    transition: 0.2s;
  }
  .nav-links a:hover {
    color: #1f6db1;
  }
  .hero {
    background: #fefaf0;
    margin-top: 1.4rem;
    padding: 2rem 1.8rem;
    border-radius: 24px;
    text-align: center;
    border: 1px solid #ece2d3;
  }
  .hero h1 {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    color: #1a445b;
  }
  .hero p {
    font-size: 1.05rem;
    color: #3a5a6e;
    max-width: 550px;
    margin: 0 auto 1.2rem;
  }
  .hero-btn {
    display: inline-block;
    background: #1f6db1;
    color: white;
    padding: 0.7rem 1.6rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s;
  }
  .hero-btn:hover {
    background: #155a96;
  }
  .page-footer {
    margin-top: 1.6rem;
    text-align: center;
    background: #e8e0d4;
    padding: 1rem;
    border-radius: 24px;
    color: #2c4f66;
    font-size: 0.85rem;
    border: 1px solid #ddd2c2;
  }
  @media (max-width: 600px) {
    body { padding: 1rem; }
    .site-nav { flex-direction: column; align-items: stretch; text-align: center; }
    .nav-links { justify-content: center; }
    .hero h1 { font-size: 1.6rem; }
  }
`;

function buildPreviewDocument(userHtml) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Preview - Navbar + Hero + Footer</title>
    <style>${basePreviewStyles}</style>
  </head>
  <body>
    ${userHtml}
  </body>
  </html>`;
}

function updatePreview() {
  const userCode = editor.value;
  previewFrame.srcdoc = buildPreviewDocument(userCode);
}

function resetToStarter() {
  editor.value = starterHtml.trim();
  updatePreview();
}

function init() {
  if (editor) {
    editor.value = starterHtml.trim();
    updatePreview();
    editor.addEventListener("input", updatePreview);
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", resetToStarter);
  }
}

document.addEventListener("DOMContentLoaded", init);
