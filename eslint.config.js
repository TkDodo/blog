import antfu from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
		semi: false,
	},
	formatters: true,
	astro: true,
	typescript: true,
	rules: {
		'node/prefer-global/process': 'off',
	},
})
