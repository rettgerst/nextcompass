module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		"ecmaVersion": 2024
	},
	extends: ['plugin:@next/next/recommended', 'prettier', 'plugin:import/recommended'],
	env: {
		browser: true
	},
	rules: {
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'index',
					'sibling',
					'parent',
					'internal',
					'object'
				],
				pathGroups: [
					{
						pattern: 'next',
						group: 'external',
						position: 'before'
					},
					{
						pattern: 'next/*',
						group: 'external',
						position: 'before'
					},
					{
						pattern: 'react',
						group: 'external',
						position: 'before'
					},
					{
						pattern: 'react-*',
						group: 'external',
						position: 'before'
					},
					{
						pattern: '*.graphql',
						group: 'object',
						position: 'after',
						patternOptions: {
							matchBase: true
						}
					},
					{
						pattern: '*.graphqls',
						group: 'object',
						position: 'after',
						patternOptions: {
							matchBase: true
						}
					},
					{
						pattern: '*.scss',
						group: 'object',
						position: 'after',
						patternOptions: {
							matchBase: true
						}
					}
				],
				'newlines-between': 'always',
				pathGroupsExcludedImportTypes: []
			}
		],
		'import/no-unresolved': ['off'],
		'import/no-named-as-default': ['off'],
		'no-mixed-spaces-and-tabs': ['off'],
		'@typescript-eslint/explicit-member-accessibility': 'off',

		// handled by typescript
		'react/prop-types': 'off',

		// https://github.com/vercel/next.js/issues/5533
		'jsx-a11y/anchor-is-valid': 'off',

		// use your own judgement
		'no-restricted-globals': 'off',

		// Incompatible with react-router
		'react/forbid-component-props': 'off'
	}
};
