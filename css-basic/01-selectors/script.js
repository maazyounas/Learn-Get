const syntaxLines = [
  "p { color: blue; }",
  ".card { padding: 10px; }",
  "#title { font-weight: bold; }",
];

const demoHtml = `
<style>
p{color:#1d4ed8}
.card{padding:10px;border-radius:6px;background:#dbeafe}
#title{font-weight:700}
</style>

<h3 id="title">Selectors</h3>
<p>Style by tag, class, or id.</p>
<div class="card">Card box</div>
`;

MarkupLesson.init({ syntaxLines, demoHtml, autoRun: true });

