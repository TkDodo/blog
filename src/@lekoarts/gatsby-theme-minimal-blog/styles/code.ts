import baseCode from '@lekoarts/gatsby-theme-minimal-blog/src/styles/code'

export default {
    'pre[class~="language-java"]:before': {
        content: `"scala"`,
        background: `#dc322f !important`,
        color: `white !important`,
    },
    ...baseCode,
}
