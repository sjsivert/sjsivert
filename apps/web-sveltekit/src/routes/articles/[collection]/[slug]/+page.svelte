<script lang="ts">
	import { page } from "$app/stores";
	import SEO from "$lib/components/SEO.svelte";
	import ArticlePageComponent from "$lib/components/pageComponents/articlePageComponent.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<SEO
	pageType={"article"}
	title={data.article.title}
	description={data.article.description}
	permalink={$page.url.pathname}
	publishDate={data.article._createdAt}
/>
<ArticlePageComponent article={data.article} />
