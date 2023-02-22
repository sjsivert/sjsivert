<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import getYouTubeId from "get-youtube-id";

	export let portableText: CustomBlockComponentProps;

	const videoId = getYouTubeId(portableText.value.url);
</script>

<lite-youtube videoid={videoId} />
