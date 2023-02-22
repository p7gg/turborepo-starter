import { dirname, resolve } from 'node:path'

import { readFileSync } from 'fs-extra'

export const r = (...pathSegments: string[]) => resolve(__dirname, ...pathSegments)

export const findClosestPackageJson = (start: string, level = 0): any => {
	try {
		const path = resolve(start, 'package.json')
		const content = readFileSync(path, { encoding: 'utf8' })

		return JSON.parse(content)
	} catch {
		return level >= 10 ? {} : findClosestPackageJson(dirname(start), level + 1)
	}
}
