import { sanityConfig } from "@/lib/config/envVariables";
import { getCroppedDimensions } from "@/lib/utils/sanityImages";
import imageUrlBuilder from "@sanity/image-url";
import { AccessibleImage as AccessibleImageType } from "common/src/types/sanity/accessibleImage";
import Image from "next/image";

interface Props {
	image: AccessibleImageType;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
}

/**
 * Use this component to display an image from Sanity as a Next image
 */
export default function AccessibleImage({ image, alt, className, width, height }: Props): JSX.Element {
	const defaultWidth = 400;

	const builder = imageUrlBuilder(sanityConfig);
	let imgUrl = "";

	if (width && height) {
		imgUrl = builder.image(image).width(width).height(height).url();
	} else if (width) {
		imgUrl = builder.image(image).width(width).url();
	} else if (height) {
		imgUrl = builder.image(image).height(height).url();
	} else {
		imgUrl = builder.image(image).url();
	}

	// Get the new dimensions of the image after scaling and cropping
	const dimensions = getCroppedDimensions(imgUrl, width || defaultWidth, image.crop);

	return (
		<Image
			src={imgUrl}
			alt={alt || image.alt || ""}
			className={className}
			width={dimensions.width}
			height={dimensions.height}
			unoptimized={true}
		/>
	);
}
