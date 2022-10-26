<script lang="ts" context="module">
	// export const prerender = true;
	import NavBar from '../components/NavBar.svelte';
	import Contact from '../components/Contact.svelte';
	import './styles.css';
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="/global.css" /> -->
</svelte:head>

<NavBar />

<slot />

<Contact />
