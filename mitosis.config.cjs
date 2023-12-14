module.exports = {
	files: 'src/lib/**/*',
	dest: 'dist',
	targets: ['solid', 'qwik', 'marko', 'svelte'],
	options: {
		solid: {
			typescript: true,
			jsxImportSource: 'solid-js'
		},
		qwik: {
			typescript: true,
			jsxImportSource: '@builder.io/qwik'
		},
		marko: {
			typescript: true
		},
		svelte: {
			typescript: true
		}
	},
	getTargetPath: ({ target }) => {
		return target;
	}
};
