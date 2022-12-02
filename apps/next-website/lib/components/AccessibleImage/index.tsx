import { sanityConfig } from "@/lib/config/envVariables";
import { getSanityClient } from "common/src/clients/sanityClient";
import { AccessibleImage as AccessibleImageType } from "common/src/types/sanity/accessibleImage";
import { useNextSanityImage } from "next-sanity-image";
import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src"> {
	image: AccessibleImageType;
	alt: string;
	sizes?: string;
	layout?: "fixed" | "fill" | "intrinsic" | "responsive";
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

/**
 * Use this component to display an image from Sanity as a Next image
 */
export default function AccessibleImage({ image, alt, className, sizes, layout, objectFit }: Props): JSX.Element {
	const imageProps = useNextSanityImage(getSanityClient(sanityConfig), image);
	const defaultSize = layout === "fill" || layout === "responsive" ? "750px" : undefined;

	return <Image {...imageProps} alt={alt || image.alt || ""} className={className} sizes={sizes || defaultSize} />;
}
