import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

export default {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        primary: '#a10f15',
        modes: {
            ...baseTheme.colors.modes,
            light: {
                ...baseTheme.colors.modes.light,
                background: '#F5F5F5',
            },
            dark: {
                ...baseTheme.colors.modes.dark,
                primary: '#f0666b',
            },
        },
    },
}
