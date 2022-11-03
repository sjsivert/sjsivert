<script lang="ts">
	import { components } from "../portableText/components";
	import { PortableText } from "@portabletext/svelte";
	import type { Article } from "common/src/types/sanity/article";

	export let article: Article;
</script>

<h1>{article.title}</h1>
<PortableText value={article.blocks.body} {components} />
