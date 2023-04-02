<script lang="ts">
	import LinkComp from "./linkComp.svelte";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import { PortableText } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps;
</script>

<div class="my-6 border border-slate-800 p-4 md:my-12">
	<p class="font-bold">{portableText.value.title}</p>
	<div>
		<PortableText
			value={portableText.value.bodyBlock}
			components={{
				marks: {
					link: LinkComp,
				},
			}}
		/>
	</div>
	<div class="my-4 bg-slate-500 px-4 py-2 text-center">
		<a href={portableText.value.callToActionButton.url} class="text-white"
			>{portableText.value.callToActionButton.label}</a
		>
	</div>
</div>
