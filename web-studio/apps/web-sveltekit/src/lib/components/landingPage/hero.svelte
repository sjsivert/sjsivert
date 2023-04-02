<script lang="ts">
	// imports
	import type { PageItemHero } from "common/src/types/sanity/landingPage/pageItemHero";

	// props
	export let heroData: PageItemHero;
</script>

<div class="bg-blue-500 px-4 py-2 text-center">
	<h3>{heroData.title}</h3>
	<p>{heroData.bodyText}</p>
	<a href={heroData.callToActionUrl}>{heroData.callToActionLabel}</a>
</div>
