module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
	plop.setGenerator('new-package', {
		description: 'Add new package',
		prompts: [
			{
				name: 'name',
				type: 'input',
				message: 'Whats the package name?',
				validate: (/** @type {string} */ input) => {
					if (!input || !/^[a-z0-9-]+$/.test(input)) {
						return `Incorrect package name argument: ${input}`
					}

					return true
				},
			},
		],
		actions: () => {
			return [
				{
					type: 'addMany',
					destination: 'packages/{{ name }}',
					base: 'templates/new-package/',
					templateFiles: 'templates/new-package/**/*.hbs',
				},
			]
		},
	})
}
