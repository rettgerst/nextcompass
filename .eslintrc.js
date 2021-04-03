module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:react/all',
		'react-app',
		'plugin:react-perf/recommended'
	],
	plugins: [
		'rxjs',
		'react-perf',
		'lodash',
		'@typescript-eslint',
		'import',
		'jsdoc'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		browser: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/camelcase': ['off'],
		'@typescript-eslint/indent': ['off'],
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-parameter-properties': ['off'],
		'@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
		'@typescript-eslint/await-thenable': ['warn'],
		'@typescript-eslint/semi': ['warn', 'always'],
		'@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
		'@typescript-eslint/explicit-member-accessibility': [
			'warn',
			{
				accessibility: 'no-public',
				overrides: {
					constructors: 'no-public'
				}
			}
		],
		'@typescript-eslint/consistent-type-assertions': [
			'warn',
			{
				objectLiteralTypeAssertions: 'allow-as-parameter',
				assertionStyle: 'as'
			}
		],
		'@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
		'@typescript-eslint/prefer-regexp-exec': ['off'],
		'@typescript-eslint/no-var-requires': ['off'],

		// annoying and broken
		'@typescript-eslint/no-unsafe-assignment': ['off'],
		'@typescript-eslint/no-unsafe-member-access': ['off'],

		'jsdoc/require-jsdoc': [
			'error',
			{
				publicOnly: true,
				require: {
					ClassDeclaration: true,
					ClassExpression: true,
					FunctionDeclaration: false,
					FunctionExpression: true,
					MethodDefinition: true
				}
			}
		],
		'jsdoc/require-param-description': ['error'],

		// we get these for free from typescript
		'jsdoc/require-param-type': ['off'],
		'jsdoc/require-returns-type': ['off'],

		// ban types in jsdoc comments because we get them from typescript
		'jsdoc/no-types': ['warn'],

		'jsdoc/require-description-complete-sentence': ['warn'],
		'jsdoc/check-indentation': ['warn'],
		'jsdoc/require-hyphen-before-param-description': ['warn'],

		'key-spacing': ['off'],
		'dot-location': ['warn', 'property'],
		'dot-notation': ['warn'],
		'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
		'linebreak-style': ['warn', 'unix'],
		'no-console': ['off'],
		'no-extra-semi': ['warn'],
		'no-mixed-spaces-and-tabs': ['warn'],
		'no-trailing-spaces': ['warn'],
		'space-before-blocks': ['warn'],
		'no-shadow': ['off'],
		'array-callback-return': ['warn'],
		'arrow-spacing': ['warn'],
		'arrow-body-style': ['error'],
		'comma-spacing': ['warn'],
		'comma-style': ['warn'],
		'default-case': ['warn'],
		'no-fallthrough': ['warn'],
		eqeqeq: ['warn'],
		'keyword-spacing': ['warn'],
		'no-empty': ['warn'],
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
		'react/forbid-component-props': 'off',

		'rxjs/no-async-subscribe': 'error',
		'rxjs/no-ignored-observable': 'error',
		'rxjs/no-ignored-subscription': 'error',
		'rxjs/no-nested-subscribe': 'error',
		'rxjs/no-unbound-methods': 'error',
		'rxjs/throw-error': 'error',
		'lodash/import-scope': ['warn', 'method']
	}
};
