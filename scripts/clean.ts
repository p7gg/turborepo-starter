import * as c from 'colorette'
import { lstat, pathExists, remove } from 'fs-extra'

import { findClosestPackageJson, r } from './utils'

const root = process.cwd()
const packageJson = findClosestPackageJson(root)
const directoriesToClean = process.argv.slice(2)

void (async () => {
	try {
		if (directoriesToClean.length === 0) {
			throw new Error('Please provide directories to clean up.')
		}

		const promises: Promise<void>[] = []

		for (const directory of directoriesToClean) {
			const fullPath = r(root, directory)

			const directoryExists = await pathExists(fullPath)

			if (!directoryExists) continue

			const stats = await lstat(fullPath)

			if (!stats.isDirectory()) {
				throw new Error(`The provided path is not a directory: ${fullPath}`)
			}

			promises.push(remove(fullPath))
		}

		await Promise.all(promises)

		console.log(`Successfully cleaned workspace: ${c.green(packageJson.name)}`)
	} catch {
		console.error(`An error occurred while cleaning up workspace: ${c.red(packageJson.name)}`)
	}
})()
