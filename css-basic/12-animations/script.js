const syntaxLines = [
  '@keyframes pulse { from { transform: scale(1); } to { transform: scale(1.05); } }',
  '.pulse { animation: pulse 1s infinite alternate; }'
];

const demoHtml = '<style>@keyframes pulse{from{transform:scale(1)}to{transform:scale(1.05)}}.pulse{display:inline-block;padding:10px 14px;border-radius:8px;background:#facc15;animation:pulse 1s infinite alternate}</style><div class="pulse">Animated</div>';

MarkupLesson.init({ syntaxLines, demoHtml });

