<script lang="ts">
	import '../app.css';

	import type { MainMenuAndFooter } from 'common/src/types/sanity/allPages/';
	import MainMenu from '$lib/components/mainMenu/mainMenu.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	export let data: MainMenuAndFooter;
</script>

<MainMenu mainMenuData={data.mainMenu} />
<div class="container prose mx-auto mt-8 mb-24">
	<main class="px-4"><slot /></main>
</div>
<Footer footerData={data.footer} />
