# Documentation for the Next project

> PS: This project is using the pages directory for routing

This document will explain the main concepts of this Next project. For details you should look at the provided example files and read the inline documentation in the code.

## What has not been implemented (yet)

-   Pre-rendering of pages (`getStaticPaths` will return an empty array for now)
-   Dynamic sitemaps (see https://www.npmjs.com/package/next-sitemap for more info)

## Organizing files and folders

In this project, the `lib` folder contains all components, and any other local utils.

-   `/lib/components` - All local react components
-   `/lib/config` - Configuration

## Routing/pages

All routing in Next.js is handled by the file structure in the `/pages` folder. Note that we are using folder routing in the template project, not file routing (all the files are called `index.tsx`).

## Sanity preview

Sanity preview works by calling an api route (`pages/api/preview/index.ts`) from within Sanity. This api route will disable any caching and set a cookie which will cause the `preview` param for all pages to become true.

-   **Sanity client.** Take a look at the client used to talk to the Sanity api: `common/src/clients/sanityClient.ts`. You want to use a slightly different client based on whether you want preview data or not. The `getSanityClient()` function returns the correct version based on whether the boolean param is true or not.
-   **Api preview route.** The `pages/api/preview/index.ts` route defines what to with the different preview paths coming from Sanity Studio. See the file for inline comments.

## Rendering Sanity components using serializers

This section is about serializing Sanity components into React components.

> Please see the Sanity documentation about components to get an overview of the fundamental differences between the different types of components.

There are two serializers, one for portable text and one for landing page components. For this example, global components can only appear as landing page components.

The **landing page component serializer** can be found here: `lib/components/landingPage/index.tsx`. This serializer is quite straight forward. It simply maps Sanity component types to React components. See the serializer file for more details.

The **portable text serializer** is using block content or portable text serializing as defined by Sanity. Since Next.js is build on React the [portable text to React](https://github.com/portabletext/react-portabletext) module is used. The actual serializer rules can be found in `lib/components/portableText/index.tsx`, and an example of using it can be found in the article page component here: `lib/components/pageComponents/articlePageComponent/index.tsx`.

For an introduction to portable text, Sanity ha written up an [introduction article](https://www.sanity.io/guides/introduction-to-portable-text).
