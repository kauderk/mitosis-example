<script>
	import Button from '../lib/Button/Button.svelte';
	export let Hst;
</script>

<Hst.Story layout={{ type: 'grid', width: '300px' }}>
	<Hst.Variant title="Variant">
		<Button>Neutral</Button>
		<Button variant="primary">Primary</Button>
		<Button variant="secondary">Secondary</Button>
	</Hst.Variant>

	<Hst.Variant title="Size">
		<Button size="sm">Small</Button>
		<Button size="md">Medium</Button>
		<Button size="lg">Large</Button>
	</Hst.Variant>
</Hst.Story>
