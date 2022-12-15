# Documentation for the Next project

This document will explain the main concepts of this Next project. For details you should look at the provided example files and read the inline documentation in the code.

## What has not been implemented (yet)

-   SEO
-   Dynamic sitemaps (see [«Other»](#Other) below)

## Organizing files and folders

In this project, the `lib` folder contains all components, and any other local utils.

-   `/lib/components` - All local react components
-   `/lib/config` - Configuration
-   `/lib/utils` - Utils

## Routing/pages

All routing in Next.js is handled by the file structure in the `/app` folder. The `/app` directory can be used for nested layouts and features React Server components. There are no client components in the example repo, so everything is rendered on the server.

## Sanity preview

Sanity preview is not using the live preview component from Sanity. Instead we are reusing the Sanity data function from "common" passing the preview property to the data fetching function. See one of the pages for additional information.

## Rendering Sanity components using serializers

This section is about serializing Sanity components into React components.

> Please see the Sanity documentation about components to get an overview of the fundamental differences between the different types of components.

There are two serializers, one for portable text and one for landing page components. For this example, global components can only appear as landing page components.

The **landing page component serializer** can be found here: `lib/components/landingPage/index.tsx`. This serializer is quite straight forward. It simply maps Sanity component types to React components. See the serializer file for more details.

The **portable text serializer** is using block content or portable text serializing as defined by Sanity. Since Next.js is build on React the [portable text to React](https://github.com/portabletext/react-portabletext) module is used. The actual serializer rules can be found in `lib/components/portableText/index.tsx`, and an example of using it can be found in the article page component here: `lib/components/pageComponents/articlePageComponent/index.tsx`.

For an introduction to portable text, Sanity ha written up an [introduction article](https://www.sanity.io/guides/introduction-to-portable-text).

## Other

-   For generating dynamic sitemaps (pages not pre-rendered), take a look at the [documentation for next-sitemap](https://www.npmjs.com/package/next-sitemap).
