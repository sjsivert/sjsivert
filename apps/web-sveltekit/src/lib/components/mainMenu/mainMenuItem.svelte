<script lang="ts">
	// Imports
	import type { MainMenuItem, MainMenuActionItem } from 'common/src/types/sanity/allPages/mainMenu';
	import SchemaType from 'common/src/sanity/SchemaType';

	// Props
	export let mainMenuItem: MainMenuItem | MainMenuActionItem;

	// Pick the icon for the menu item
	let icon = `🏠`;
	if (mainMenuItem._type === SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT) {
		const typedItem = mainMenuItem as MainMenuActionItem;
		if (typedItem.icon === 'document') {
			icon = `📄`;
		} else if (typedItem.icon === 'newspaper') {
			icon = `📰`;
		}
	}
</script>

{#if mainMenuItem._type === SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT}
	<li class="flex gap-1">
		<div class="flex items-center">{icon}</div>
		<a href={mainMenuItem.url} class="text-white no-underline">
			{mainMenuItem.label}
		</a>
	</li>
{:else}
	<li class="text-gray-400">
		{mainMenuItem.label}
	</li>
{/if}
