<script lang="ts">
	// imports
	import LandingPageSerializer from "$lib/components/landingPage/serializer.svelte";
	import type { LandingPageBase as HomePageType } from "common/src/types/sanity/landingPage";

	// props
	export let landingPageDocument: HomePageType;
</script>

<div>
	<h2>{landingPageDocument.title}</h2>
	<div class="flex flex-col gap-2">
		<LandingPageSerializer landingPage={landingPageDocument} />
	</div>
</div>
