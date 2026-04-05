const syntaxLines = [
  '.btn { transition: transform 0.2s ease; }',
  '.btn:hover { transform: translateY(-2px); }'
];

const demoHtml = '<style>.btn{display:inline-block;padding:10px 14px;border-radius:8px;background:#1d4ed8;color:white;transition:transform .2s ease}.btn:hover{transform:translateY(-2px)}</style><div class="btn">Hover me</div>';

MarkupLesson.init({ syntaxLines, demoHtml });

