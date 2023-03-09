import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
	plugins: [solidPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	resolve: {
		alias: {
			'@acme/core': resolve(__dirname, '../../packages/core/src'),
		},
	},
})
