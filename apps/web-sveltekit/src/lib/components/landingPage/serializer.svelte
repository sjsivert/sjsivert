<script lang="ts">
	// imports
	import GlobalAlert from "$lib/components/globalComponents/alert.svelte";
	import GlobalInfoBox from "$lib/components/globalComponents/infoBox.svelte";
	import CallToActionBar from "./callToActionBar.svelte";
	import Hero from "./hero.svelte";
	import SchemaType from "common/src/sanity/SchemaType";
	import type { LandingPageBase } from "common/src/types/sanity/landingPage";

	// props
	export let landingPage: LandingPageBase;
</script>

{#each landingPage.pageItems as pageItem}
	{#if pageItem._type === SchemaType.LANDING_PAGE_ITEM_HERO}
		<Hero heroData={pageItem} />
	{:else if pageItem._type === SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR}
		<CallToActionBar ctaBarData={pageItem} />
	{:else if pageItem._type === SchemaType.GLOBAL_COMP_ALERT}
		<GlobalAlert alertData={pageItem} />
	{:else if pageItem._type === SchemaType.GLOBAL_COMP_INFO_BOX}
		<GlobalInfoBox infoBoxData={pageItem} />
	{:else}
		<p>Fallback component</p>
	{/if}
{/each}
