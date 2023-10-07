import baseCode from '@lekoarts/gatsby-theme-minimal-blog/src/styles/code'
import { tint } from '@theme-ui/color'

export default {
  pre: {
    fontFamily: 'ml, monospace',
  },
  '.react-live-wrapper > *': {
    fontFamily: 'ml, monospace !important',
  },
  code: {
    fontFamily: 'ml, monospace',
  },
  'pre[class~="language-java"]:before': {
    content: `"scala"`,
    background: `#dc322f !important`,
    color: `white !important`,
  },
  'pre[class~="language-kt"]:before': {
    content: `"KT"`,

    background: `#806EE3 !important`,
  },
  'pre[class~="language-groovy"]:before': {
    content: `"GROOVY"`,
    background: `#629CBC !important`,
  },
  ...baseCode,
  '.code-title': {
    // @ts-expect-error this is an object
    ...baseCode['.code-title'],
    fontSize: [0, 1],
    fontFamily: 'ml, monospace',
  },
  '.prism-code': {
    // @ts-expect-error this is an object
    ...baseCode['.prism-code'],
    fontSize: [0, 1, 2],
  },
  'p > code, li > code': {
    bg: `backgroundSecondary`,
    color: `text`,
    padding: ['0.18rem 0.3rem', '0.18rem 0.3rem', '0.2rem 0.3rem'],
    borderRadius: `6px`,
    fontSize: `90%`,
  },
}
