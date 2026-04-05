const syntaxLines = [
  '@media (max-width: 600px) {',
  '  .card { background: #fde68a; }',
  '}'
];

const demoHtml = '<style>.card{padding:12px;border-radius:8px;background:#c7d2fe}@media (max-width:600px){.card{background:#fde68a}}</style><div class="card">Resize the browser window</div>';

MarkupLesson.init({ syntaxLines, demoHtml });

