<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const sizes = ['sm', 'md', 'lg'] as const;
	const variants = ['primary', 'secondary', 'neutral'] as const;

	type Size = typeof sizes[number];
	type Variant = typeof variants[number];

	export let variant: Variant = 'neutral';
	export let size: Size = 'md';
	export let disabled = false;
	export let type: 'button' | 'submit' = 'button';

	const dispatch = createEventDispatcher();

	function handleClick(event: any) {
		try {
			dispatch('click', event);
		} catch (e) {
			// nothing
		}
	}

	function getSizeClass() {
		if (size === 'sm') {
			return 'px-2 py-1 text-sm';
		} else if (size === 'md') {
			return 'px-3 py-2';
		}
		return 'px-4 py-3 text-lg';
	}

	function getVariantClass() {
		if (variant === 'primary') {
			return 'bg-primary-500 hover:bg-primary-400 ring-primary-300 text-white';
		} else if (variant === 'secondary') {
			return 'bg-secondary-500 hover:bg-secondary-400 ring-secondary-200 text-white';
		}
		return 'bg-neutral-500 hover:bg-neutral-400 ring-neutral-200 text-white dark:hover:bg-neutral-200';
	}
</script>

<button
	class={`disabled:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center rounded-md border border-transparent dark:border-none ${getSizeClass()} ${getVariantClass()}`}
	{disabled}
	{type}
	on:click={handleClick}
>
	<slot />
</button>
