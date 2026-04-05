const syntaxLines = [
  '.row { display: flex; gap: 8px; }',
  '.box { flex: 1; }'
];

const demoHtml = '<style>.row{display:flex;gap:8px}.box{flex:1;padding:10px;background:#c7d2fe;border-radius:8px;text-align:center}</style><div class="row"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>';

MarkupLesson.init({ syntaxLines, demoHtml });

