const syntaxLines = [
  'h1 { font-size: 32px; }',
  'p { line-height: 1.6; }'
];

const demoHtml = '<style>.type-title{font-size:28px;font-weight:700}.type-text{line-height:1.6}</style><div class="type-title">Typography</div><p class="type-text">Readable text uses good size and line-height.</p>';

MarkupLesson.init({ syntaxLines, demoHtml });

