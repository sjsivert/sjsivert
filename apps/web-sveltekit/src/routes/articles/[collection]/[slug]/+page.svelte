<script lang="ts">
	import ArticlePageComponent from "$lib/components/pageComponents/articlePageComponent.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<ArticlePageComponent article={data.article} />
