type BrowserType = 'ie' | 'chrome' | 'firefox' | 'safari';

export const checkBrowser = (isBrowsers: BrowserType[] = []) => {
  const ua = window.navigator.userAgent;
  let matched = false;

  for (const browser of isBrowsers) {
    switch (browser) {
      case 'ie':
        matched = ua.indexOf('MSIE ') > -1;
        break;
      case 'safari':
        matched = ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1;
        break;
      case 'chrome':
        matched = ua.indexOf('Chrome') > -1;
    }
  }

  return matched;
}
