import { jsx } from 'theme-ui'

const noflash = `(function () {
  try {
    const hasLocalStorage = localStorage.getItem('theme-ui-color-mode')

    if (
      !hasLocalStorage &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('theme-ui-dark')
    }
  } catch (err) {}
});`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    jsx('script', {
      key: 'theme-ui-no-flash',
      dangerouslySetInnerHTML: {
        __html: noflash,
      },
    }),
  ])
}
