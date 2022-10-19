# Documentation for the Next project

This document will explain the main concepts of this Next project. For details you should look at the provided example files and read the inline documentation in the code.

## What has not been implemented (yet)

* Pre-rendering of pages (`getStaticPaths` will return an empty array for now)
* SEO
* Authentication example
* Dynamic sitemaps (see [«Other»](#Other) below)

## Organizing files and folders

In this project, the `lib` folder contains all components, all code for fetching data from Sanity, any clients, all types and hooks, as well as any local utils.

* `/lib/components` - All local react components
* `/lib/clients` - All clients used to fetch data
* `/lib/config` - Configuration
* `/lib/content` - Functions and queries for all content (in this repo it's only Sanity content, but other content should go in here as well)
* `/lib/hooks` - Any local React hooks
* `/lib/types` - All Typescript types for non local objects and functions
* `/lib/utils` - Any utils only used by the Next project

## Routing/pages

All routing in Next.js is handled by the file structure in the `/pages` folder. Note that we are using folder routing in the template project, not file routing (all the files are called `index.tsx`). This is a good idea since in future versions, Next will introduce the `/app` folder (to support nested layouts). Within the `/app` folder folder routing will be required since the files will follow pre-defined naming schema.

## Sanity preview

When working with Sanity preview there are a few things to consider.

* **Separate groq used for previews into its own files.** `landingPageGroq` is used by the preview hook on the client side (inside `export default function LandingPage`) and on the server-side via the `getLandingPageDocumentsBySlug` function. It's therefore essential to keep this query in a separate file to avoid bunding server-side stuff on the client side.
	* Take a look at `pages/[slug]/index.tsx` for an example setup for Sanity preview.
	* [See the official doc for Sanity and Next preview](https://www.sanity.io/guides/nextjs-live-preview)
* **Sanity client.** Take a look at the client used to talk to the Sanity api: `lib/clients/sanityClient.ts`. You want to use a slightly different client based on whether you want preview data or not. The `getSanityClient()` function returns the correct version based on whether the boolean param is true or not.
* **Api preview route.** The `pages/api/preview/index.ts` route defines what to with the different preview paths coming from Sanity Studio. See the file for inline comments.

## Rendering Sanity components using serializers

This section is about serializing Sanity components into React components.

> Please see the Sanity documentation about components to get an overview of the fundamental differences between the different types of components.

There are two serializers, one for portable text and one for landing page components. For this example, global components can only appear as landing page components.

The **landing page component serializer** can be found here: `lib/components/landingPage/index.tsx`. This serializer is quite straight forward. It simply maps Sanity component types to React components. See the serializer file for more details.

The **portable text serializer** is using block content or portable text serializing as defined by Sanity. Since Next.js is build on React the [portable text to React](https://github.com/portabletext/react-portabletext) module is used. The actual serializer rules can be found in `lib/components/portableText/index.tsx`, and an example of using it can be found in the article page component here: `lib/components/pageComponents/articlePageComponent/index.tsx`.

For an introduction to portable text, Sanity ha written up an [introduction article](https://www.sanity.io/guides/introduction-to-portable-text).

## Other

* For generating dynamic sitemaps (pages not pre-rendered), take a look at the [documentation for next-sitemap](https://www.npmjs.com/package/next-sitemap).
