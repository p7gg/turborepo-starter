/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['no-only-tests', 'solid', 'turbo'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:unicorn/recommended',
		'plugin:solid/typescript',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
		tsconfigRootDir: __dirname,
		project: ['./apps/*/tsconfig.json', './packages/*/tsconfig.json', './tsconfig.json'], // Allows for the use of rules which require parserServices to be generated
	},
	ignorePatterns: [
		'*.min.*',
		'CHANGELOG.md',
		'dist',
		'LICENSE*',
		'output',
		'out',
		'coverage',
		'public',
		'temp',
		'package-lock.json',
		'pnpm-lock.yaml',
		'yarn.lock',
		'__snapshots__',
		'!.github',
		'!.vscode',
	],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-only-tests/no-only-tests': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'unicorn/filename-case': [
			'error',
			{
				case: 'camelCase',
				ignore: [
					'\\.config\\.js',
					'\\.d\\.ts$',
					'issue-\\d+-.*\\.test\\.tsx?$',
					'\\.(styles|css)\\.ts$',
					'\\.(t|j)sx$',
				],
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				leadingUnderscore: 'allow',
				custom: {
					regex: '^(T|\\$)[A-Z][a-zA-Z]+[0-9]*$',
					match: true,
				},
			},
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true,
				fixStyle: 'separate-type-imports',
			},
		],
	},
	overrides: [
		{
			files: ['apps/**/*', 'packages/*/**/*', 'scripts/**/*'],
			rules: {
				// Todo: enable these for even stronger linting! 💪
				'@typescript-eslint/no-misused-promises': 'off',
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-declaration-merging': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/require-await': 'off',
				'@typescript-eslint/restrict-plus-operands': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
			},
		},
		{
			files: ['apps/**/*'],
			rules: {
				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/no-unused-vars': 'off',
			},
		},
		{
			files: ['**/test/**/*', 'packages/tests/**/*', '**/*.test.tsx', '**/*.test.ts'],
			rules: {
				'@typescript-eslint/no-floating-promises': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/naming-convention': 'off',
			},
		},
		{
			files: ['packages/**/*'],
			rules: {
				'no-console': 'error',
			},
		},
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'unicorn/no-process-exit': 'off',
				'unicorn/prefer-module': 'off',
			},
		},
	],
}
