import { resolve } from 'node:path'

import withSolid from 'rollup-preset-solid'
import { defineConfig } from 'vite'

const entry = resolve(__dirname, 'src/index.tsx')

export default defineConfig({
	build: {
		emptyOutDir: true,
		rollupOptions: withSolid({
			input: entry,
			targets: ['esm', 'cjs'],
		}),
	},
	// resolve: {
	// 	alias: {
	// 		'@acme/lib': resolve(__dirname, '../lib/src'),
	// 	},
	// },
})
