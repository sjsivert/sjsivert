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

## Sitemaps

> PS: The robots.txt is set to not allow indexing since this is a demo repo. You should probably change this.
> See `next-sitemap.config.js` «policies»

This project uses [next-sitemap](https://www.npmjs.com/package/next-sitemap).
See the setup file for more info at `next-sitemap.config.js`.

All non-dynamic pages will automatically get added to the sitemap. Also, if you are using `generateStaticParams` for a page with a dynamic path, it will automatically generate the sitemap for that file.

For pages with dynamic paths that doesn't use `generateStaticParams`, you'll need to generate the sitemap manually. An example of this can be seen at the `dynamic-sitemap.xml` path in the /pages folder.

## SEO

Next 13 has build in support using the `metadata` export (static) or by exporting the `generateMetadata` function.
This has been implemented for all pages in this project. For more info, see https://beta.nextjs.org/docs/guides/seo

## Running Playwright end-to-end tests

More info about Playwright here: https://playwright.dev/

All the tests are located in the `/tests` folder. This is also where the report from the tests will be generated. See the `playwright.config.ts` for changing these paths.

The test will automatically start the local production server (`yarn start`) so you'll need to run a production build before running the tests (`yarn build`).

To run the tests use `yarn test:pw` or use the VSCode plugin.
