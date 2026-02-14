import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
	themes: ['github-light', 'github-dark'],
	plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
	defaultProps: {
		showLineNumbers: false,
		collapseStyle: 'collapsible-auto',
	},
	styleOverrides: {
		frames: {
			shadowColor: 'none',
		},
	},
	themeCssSelector: (theme, { styleVariants }) => {
		/**
		 * This Astro starter uses data-theme="light" and data-theme="dark" on its <html> element. It gets changed by a script and the theme switcher.
		 * Expressive Code should follow this if a light and dark theme are available.
		 * If only one theme is available, it will return the default selector.
		 */
		if (styleVariants.length === 2) {
			// Light theme
			const baseTheme = styleVariants[0]?.theme
			// Dark theme
			const altTheme = styleVariants.find(v => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme)
				return `[data-theme='${theme.type}']`
		}

		// Return the default selector
		return `[data-theme='${theme.name}']`
	},
})
