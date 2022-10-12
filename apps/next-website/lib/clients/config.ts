/**
 * This is the default config for Sanity
 */
export const sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    token: process.env.SANITY_SECRET_TOKEN as string,
    apiVersion: "2021-03-25",
    useCdn: true,
};
