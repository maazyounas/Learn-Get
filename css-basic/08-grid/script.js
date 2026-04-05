const syntaxLines = [
  '.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }'
];

const demoHtml = '<style>.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.cell{padding:10px;background:#bbf7d0;border-radius:8px;text-align:center}</style><div class="grid"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div></div>';

MarkupLesson.init({ syntaxLines, demoHtml });

