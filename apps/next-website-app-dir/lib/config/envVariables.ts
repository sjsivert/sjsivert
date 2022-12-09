import { SanityConfig } from "common/src/clients/config";

function logUndefinedEnv(missingVariable: string) {
	console.error(`Environment variable ${missingVariable} is not set!`);
	return "";
}

export const serverSideEnvironmentVariables = {
	// Sanity
	sanityApiToken: process.env.SANITY_SECRET_TOKEN ?? logUndefinedEnv("SANITY_SECRET_TOKEN"),
	sanityPreviewSecret: process.env.SANITY_PREVIEW_SECRET ?? logUndefinedEnv("SANITY_PREVIEW_SECRET"),
};

export const clientSideEnvironmentVariables = {
	// Sanity
	sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? logUndefinedEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
	sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? logUndefinedEnv("NEXT_PUBLIC_SANITY_DATASET"),
};

export const sanityConfig: SanityConfig = {
	projectId: clientSideEnvironmentVariables.sanityProjectId,
	dataset: clientSideEnvironmentVariables.sanityDataset,
	token: serverSideEnvironmentVariables.sanityApiToken,
};
