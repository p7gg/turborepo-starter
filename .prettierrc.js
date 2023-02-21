/** @type {import("prettier").Config} */
module.exports = {
	printWidth: 100,
	trailingComma: 'all',
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'auto',
	useTabs: true,
	plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
	importOrder: [
		'^(solid-js/(.*)$)|^(solid-js$)',
		'<THIRD_PARTY_MODULES>',
		'^@acme/(.*)$',
		'',
		'^~/(.*)$',
		'^[./]',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
}
