import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

const primary = '#a10f15'

export default {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        primary,
        modes: {
            ...baseTheme.colors.modes,
            dark: {
                ...baseTheme.colors.modes.dark,
                primary,
            },
        },
    },
}
