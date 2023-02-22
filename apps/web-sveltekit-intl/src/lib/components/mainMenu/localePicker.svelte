<script lang="ts">
	import { page } from "$app/stores";
	// Imports
	import { supportedLanguages } from "common/src/locales/languages";

	// This function preserves the current url
	// when swapping language
	function generateUrl(lang: string): string {
		return $page.url.pathname.replace(`/${$page.params.lang}`, `/${lang}`);
	}
</script>

<li tabIndex={0}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a>
		Locale
		<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
			<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
		</svg>
	</a>
	<ul class="bg-base-200 p-2">
		{#each supportedLanguages as lang}
			<li>
				<a href={generateUrl(lang.id)}>{lang.title}</a>
			</li>
		{/each}
	</ul>
</li>
