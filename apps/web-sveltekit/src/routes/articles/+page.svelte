<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h2>Article list</h2>
<ul>
	{#each data.articles as article}
		<li><a href={`/articles/${article.collection.path.current}/${article.slug}`}>{article.title}</a></li>
	{/each}
</ul>
