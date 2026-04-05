const syntaxLines = [
  '.badge { position: absolute; top: 8px; right: 8px; }'
];

const demoHtml = '<style>.box{position:relative;padding:20px;background:#fee2e2;border-radius:8px}.badge{position:absolute;top:8px;right:8px;background:#ef4444;color:white;padding:4px 6px;border-radius:6px;font-size:12px}</style><div class="box">Relative parent<span class="badge">New</span></div>';

MarkupLesson.init({ syntaxLines, demoHtml });

