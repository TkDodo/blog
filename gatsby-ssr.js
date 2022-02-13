import { jsx } from 'theme-ui'
import * as React from 'react'

const noFlashDark = `(function () {
  try {
    var hasLocalStorage = localStorage.getItem('theme-ui-color-mode');

    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.querySelector('html').setAttribute('data-theme', 'dark')
      if (!hasLocalStorage) {
        document.documentElement.classList.add('theme-ui-dark')
        window.addEventListener('load', () => {
          document.documentElement.classList.remove('theme-ui-dark')
        });
      }
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

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const components = [
    React.createElement('link', {
      key: 'font-inter',
      rel: 'preload',
      href: '/fonts/Inter.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    }),
    ...getHeadComponents(),
  ]

  replaceHeadComponents(components)
}
