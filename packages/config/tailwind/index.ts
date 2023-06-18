import { fontFamily } from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: ['src/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
	theme: {},
	plugins: [],
} satisfies Config
