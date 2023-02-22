<script lang="ts">
	// imports
	import type { PageItemCallToActionBar } from "common/src/types/sanity/landingPage/pageItemCallToActionBar";

	// props
	export let ctaBarData: PageItemCallToActionBar;
</script>

<div class="bg-red-400 px-4 py-2">
	<div>
		<p>{ctaBarData.bodyText}</p>
		<a href={ctaBarData.callToActionUrl}>{ctaBarData.callToActionLabel}</a>
	</div>
</div>
