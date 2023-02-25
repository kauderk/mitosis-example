import { sveltekit } from '@sveltejs/kit/vite';
import { run } from 'vite-plugin-run';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		run([
			{
				name: 'sveltosis build',
				run: ['yarn', 'build:mitosis'],
				condition: (file) => file.includes('src/lib/') && file.includes('.svelte')
			}
		])
	]
};

export default config;
