<script lang="ts">
	import Footer from "$lib/components/footer/footer.svelte";
	import MainMenu from "$lib/components/mainMenu/mainMenu.svelte";
	import "../app.css";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

{#if data.preview}
	<div class="flex h-10 w-full items-center justify-center gap-5 bg-yellow-600">
		<p>Preview mode active</p>
		<a href="/api/exit-preview" class="underline">Exit preview</a>
	</div>
{/if}
<MainMenu mainMenuData={data.headerAndFooterData.mainMenu} />
<div class="container prose mx-auto mt-8 mb-24">
	<main class="px-4"><slot /></main>
</div>
<Footer footerData={data.headerAndFooterData.footer} />
