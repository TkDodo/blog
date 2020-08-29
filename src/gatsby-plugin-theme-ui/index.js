import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

export default {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        primary: '#a10f15',
        modes: {
            ...baseTheme.colors.modes,
            dark: {
                ...baseTheme.colors.modes.dark,
                primary: '#D44248',
            },
        },
    },
}
