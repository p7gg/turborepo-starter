import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

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
