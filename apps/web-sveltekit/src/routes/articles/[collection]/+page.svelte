<script lang="ts">
	import { page } from "$app/stores";
	import SEO from "$lib/components/SEO.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const collection = data.articles[0].collection;
</script>

<SEO
	pageType={"website"}
	title={`All articles in ${collection.name}`}
	description={collection.description || ""}
	permalink={$page.url.pathname}
	publishDate={collection._createdAt}
/>
<h2>Articles in collection «{data.articles[0].collection.name}»</h2>
<ul>
	{#each data.articles as article}
		<li><a href={`/articles/${article.collection.path.current}/${article.slug}`}>{article.title}</a></li>
	{/each}
</ul>
