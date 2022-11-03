<script lang="ts">
	import { page } from "$app/stores";
	import SEO from "$lib/components/SEO.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<SEO
	pageType={"website"}
	title="All articles"
	description="A list of all articles"
	permalink={$page.url.pathname}
	publishDate={null}
/>
<h2>Article list</h2>
<ul>
	{#each data.articles as article}
		<li><a href={`/articles/${article.collection.path.current}/${article.slug}`}>{article.title}</a></li>
	{/each}
</ul>
