<script lang="ts">
	import { base } from '$app/paths';
	export let text: string;
	export let link: string;
</script>

<a class="nav-link" href="{base}/{link}">{text}</a>

<style>
	.nav-link {
		color: #fefbf6;
		display: block;
		position: relative;
		left: 34em;
		/* position:absolute; */
		justify-content: space-between;
		margin-left: 2em;
		padding: 0;
	}
</style>
