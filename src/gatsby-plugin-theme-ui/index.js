import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: 'Inter, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
  text: {
    ...baseTheme.text,
    default: {
      color: 'text',
      fontSize: [1, 1, 2],
    },
  },
  useColorSchemeMediaQuery: true,
  alerts: {
    ...baseTheme.alerts,
    highlight: {
      color: 'background',
      bg: 'primary',
    },
  },
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

export default theme
