module.exports = {
	extends: ['next/core-web-vitals', 'prettier'],
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
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'react/require-default-props': ['off'],
		'@typescript-eslint/explicit-member-accessibility': 'off',

		// handled by typescript
		'react/prop-types': 'off',

		// handled by prettier
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-max-props-per-line': 'off',
		'react/jsx-max-depth': 'off',
		'react/jsx-one-expression-per-line': 'off',

		// stylistic, don't like
		'react/jsx-newline': 'off',

		// stupid
		'react/jsx-no-literals': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/destructuring-assignment': 'off',
		'react/react-in-jsx-scope': 'off',
		// https://github.com/vercel/next.js/issues/5533
		'jsx-a11y/anchor-is-valid': 'off',

		// use your own judgement
		'no-restricted-globals': 'off',

		// Incompatible with react-router
		'react/forbid-component-props': 'off'
	}
};
