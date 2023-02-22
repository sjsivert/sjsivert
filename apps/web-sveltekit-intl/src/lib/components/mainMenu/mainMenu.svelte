<script lang="ts">
	// Imports
	import LocalePicker from "./localePicker.svelte";
	import MainMenuItem from "./mainMenuItem.svelte";
	import type { MainMenu } from "common/src/types/sanity/allPages/mainMenu";

	// Props
	export let mainMenuData: MainMenu;
	export let previewActive: boolean;
</script>

<header class="bg-slate-500">
	{#if previewActive}
		<div class="alert alert-info shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 flex-shrink-0 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Preview is active.</span>
				<a href="/api/exit-preview" class="text-blue-400 underline"> Disable preview mode </a>
			</div>
		</div>
	{/if}

	<nav class="navbar bg-base-200">
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				{#each mainMenuData.menuItems as mainMenuItem}
					<MainMenuItem {mainMenuItem} />
				{/each}
				<LocalePicker />
			</ul>
		</div>
	</nav>
</header>
