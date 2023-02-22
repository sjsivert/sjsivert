<script lang="ts">
	import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
	import { getCroppedDimensions } from "$lib/utils/sanityImages";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import imageUrlBuilder from "@sanity/image-url";
	import type { AccessibleImage } from "common/src/types/sanity/accessibleImage";

	// props
	export let portableText: CustomBlockComponentProps<AccessibleImage>;

	const builder = imageUrlBuilder({ projectId: PUBLIC_SANITY_PROJECT_ID, dataset: PUBLIC_SANITY_DATASET });

	// This is the width of our image after procesing
	const targetWidth = 400;

	// Have Sanity generate a url, taking cropping and the new width into consideration
	const imgUrl = builder.image(portableText.value).width(targetWidth).url();
	// Get the new dimensions of the image after scaling and cropping
	const dimensions = getCroppedDimensions(imgUrl, targetWidth, portableText.value.crop);
</script>

<figure class="mt-10 mb-10">
	<img
		class="m-auto"
		src={imgUrl}
		alt={portableText.value.alt}
		width={dimensions.width}
		height={dimensions.height}
		loading={"lazy"}
	/>
	<figcaption class="mt-5 text-center text-sm italic">{portableText.value.caption}</figcaption>
</figure>
