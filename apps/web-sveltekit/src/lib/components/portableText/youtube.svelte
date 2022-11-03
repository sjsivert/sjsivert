<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import getYouTubeId from "get-youtube-id";

	export let portableText: CustomBlockComponentProps;

	const videoId = getYouTubeId(portableText.value.url);
</script>

<div class="aspect-video">
	<iframe
		title="Video"
		src={`https://www.youtube.com/embed/${videoId}`}
		class="aspect-video w-full"
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
	/>
</div>
