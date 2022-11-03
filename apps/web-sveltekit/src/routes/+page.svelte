<script lang="ts">
	import LandingPageComponent from "$lib/components/pageComponents/landingPageComponent.svelte";
	import type { PageData } from "./$types";

	// props
	export let data: PageData;
</script>

<LandingPageComponent landingPageDocument={data.homePageData} />
