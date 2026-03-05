/**
 * 动态注入 Google Fonts（在 iframe 中不能用 @import，需要 JS 注入）
 */
export function injectGoogleFonts() {
    if (document.querySelector('link[data-danmachi-fonts]')) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Noto+Sans+SC:wght@300;400;500;700&display=swap';
    link.setAttribute('data-danmachi-fonts', 'true');
    document.head.appendChild(link);
}

// 自动执行
injectGoogleFonts();
