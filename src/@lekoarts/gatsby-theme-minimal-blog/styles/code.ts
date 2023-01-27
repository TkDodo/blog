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
    backgroundColor: tint(`primary`, 0.7),
    color: `black`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: 'ml, monospace',
    mx: [0, 0, 0, -3],
  },
  'p > code, li > code': {
    bg: `codebg`,
    color: `text`,
    padding: '0.2rem 0.3rem',
    borderRadius: `6px`,
    fontSize: `90%`,
  },
}
