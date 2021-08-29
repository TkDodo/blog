import { jsx } from 'theme-ui'

const noFlashDark = `(function () {
  try {
    var hasLocalStorage = localStorage.getItem('theme-ui-color-mode');

    if (
      !hasLocalStorage &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('theme-ui-dark')
      setTimeout(() => {
        document.documentElement.classList.remove('theme-ui-dark')
      }, 2000);
    }
  } catch (err) {}
})();`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    jsx('script', {
      key: 'theme-ui-no-flash-dark',
      dangerouslySetInnerHTML: {
        __html: noFlashDark,
      },
    }),
  ])
}
