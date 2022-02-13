import { jsx } from 'theme-ui'
import * as React from 'react'
import { withPrefix } from 'gatsby'

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

const fontUrl = `${withPrefix('fonts/Inter.woff2')}`
const font = `@font-face{font-family:'Inter';font-style:normal;font-weight:100;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:200;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(${fontUrl}) format('woff2');}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(${fontUrl}) format('woff2');}`

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const components = [
    React.createElement('link', {
      key: 'font-inter',
      rel: 'preload',
      href: fontUrl,
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    }),
    React.createElement('style', {
      key: 'font-face.inter',
      dangerouslySetInnerHTML: {
        __html: font,
      },
    }),
    ...getHeadComponents(),
  ]

  replaceHeadComponents(components)
}
