import { resolve } from 'path'
import withSolid from 'rollup-preset-solid'
import { defineConfig } from 'vite'

const entry = resolve(__dirname, 'src/index.tsx')

export default defineConfig({
	build: {
		lib: {
			entry,
			fileName: (_, entry) => `${entry}.js`,
		},
		rollupOptions: withSolid({
			input: entry,
			targets: ['esm', 'cjs'],
		}),
	},
})
