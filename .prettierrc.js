/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
	printWidth: 100,
	trailingComma: 'all',
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'auto',
	useTabs: true,
	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
	importOrder: [
		'<BUILT_IN_MODULES>|^vite$',
		'',
		'^react(/.*)?$|^react-dom(/.*)?$',
		// '^next(/.*)?$',
		// '^solid-js(/.*)?$',
		'',
		'<THIRD_PARTY_MODULES>',
		'',
		'^~/(.*)$',
		'',
		'^[./]',
		'',
		'<TYPES>|<TYPES>^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
	tailwindConfig: './tailwind.config.ts',
}

module.exports = config
