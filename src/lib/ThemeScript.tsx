export function ThemeScript() {
    const themeScript = `
    (function() {
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('theme');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';

        if (hasPersistedPreference) {
          return persistedColorPreference;
        }

        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';

        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }

        return 'light';
      }

      const colorMode = getInitialColorMode();
      const root = document.documentElement;
      root.style.setProperty('--initial-color-mode', colorMode);

      // add class to html root element
      if (colorMode === 'dark')
        document.documentElement.classList.add('dark');
    })()
  `;

    return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}