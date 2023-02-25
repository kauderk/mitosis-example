module.exports = {
	files: 'src/lib/**/*',
	dest: 'dist',
	targets: ['react', 'vue'],
	options: {
		angular: {
			typescript: true
		},
		react: {
			typescript: true
		},
		vue: {
			version: 3
		}
	},
	getTargetPath: ({ target }) => {
		return target;
	}
};
