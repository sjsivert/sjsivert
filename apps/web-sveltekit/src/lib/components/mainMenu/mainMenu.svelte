<script lang="ts">
	// Imports
	import type { MainMenu } from 'common/src/types/sanity/allPages/mainMenu';
	import MainMenuItem from './mainMenuItem.svelte';

	// Props
	export let mainMenuData: MainMenu;
</script>

<header class="bg-slate-500 px-2">
	<ul class="flex list-none gap-4 p-4 text-white">
		{#each mainMenuData.menuItems as mainMenuItem}
			<MainMenuItem {mainMenuItem} />
		{/each}
	</ul>
</header>
