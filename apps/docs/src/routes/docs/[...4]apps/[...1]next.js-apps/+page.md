## Next.js apps

There are 3 Next.js projects/apps.

-   **next-website** - Uses the pages router (legacy)
-   **next-website-app-dir** - Uses the app router
-   **next-website-app-dir-intl** - Uses the app router and has localization support

> 💡 When the document refers to a project using the pages router, it's the first project above. The other two projects are referred to as the app router projects.

## Getting started

> 💡 You need to setup you own Sanity instance and add the config to the project in order to run it.

To run the project locally, first create a file called `.env.local`. You can copy the env vars from `.env.example`. All the values for the Sanity variables you'll find when setting up your Sanity project ([see the Sanity documentation](/docs/apps/sanity-studio)).

### Environment variables

> All the projects comes with a `.env.example` file.

-   `SANITY_PREVIEW_SECRET` can be any string as long it is the same one as the `SANITY_STUDIO_PREVIEW_TOKEN` you created in the Sanity `.env.development` file.
-   `NEXT_PUBLIC_SANITY_PROJECT_ID` is the Sanity project id
-   `NEXT_PUBLIC_SANITY_DATASET` is the name of the Sanity dataset
-   `SANITY_SECRET_TOKEN` is the Sanity API key (you do need this for preview to work)
-   `VERCEL_URL` is used to generate sitemaps, locally you can just copy the value from the example file

### Debugging

If you are using Visual Studio Code, there are 5 launch scripts provided. Use them from the debugger menu.

Note that the Edge debugger requires the [Edge Tools for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools).

-   For Mac/Linux:

    -   `Next: Node` - Runs the Next server
    -   `Next: Edge` - Opens the Next site in the Edge browser
    -   `Next: Full (Mac/Linux)` - Runs the server and opens the site in the Edge browser

-   For Windows:

    -   `Next: Node` - Runs the Next server
    -   `Next: Node Windows` - Runs the Next server
    -   `Next: Full (Windows)` - Runs the server and opens the site in the Edge browser

> If you want to use Chrome instead of Edge, you can create a new launch script for that.

## Structure

This document will explain the main concepts of this Next project. However, for more details you should look at the provided example files and read the inline documentation in the code.

### Organizing files and folders

In this project, the `lib` folder contains all components, and any other local utils. The lib folder is for code which isn't a page, layout or other file which must reside in a special folder.

-   `/lib/components` - All local react components
-   `/lib/config` - Configuration
-   ...other

### Routing/pages

All routing in Next.js is handled by the file structure in the `/pages` folder (pages router) or the `/app` folder (app router).

### Sanity preview

Sanity preview works by calling an api route (`pages/api/preview/index.ts`) from within Sanity (_preview is implemented using the pages router for all projects for now_). This api route will disable any caching and set a cookie which will cause the `preview` param for all pages to become true.

-   **Sanity client.** Take a look at the client used to talk to the Sanity api: `common/src/clients/sanityClient.ts`. You want to use a slightly different client based on whether you want preview data or not. The `getSanityClient()` function returns the correct version based on whether the boolean param is true or not.
-   **Api preview route.** The `pages/api/preview/index.ts` route defines what to with the different preview paths coming from Sanity Studio. See the file for inline comments.

### Rendering Sanity components using serializers

This section is about serializing Sanity components into React components.

> Please see the [Sanity documentation](/docs/apps/sanity-studio) about components to get an overview of the fundamental differences between the different types of components.

There are two serializers, one for portable text and one for landing page components. For this example, global components can only appear as landing page components.

The **landing page component serializer** can be found here: `lib/components/landingPage/index.tsx`. This serializer is quite straight forward. It simply maps Sanity component types to React components. See the serializer file for more details.

The **portable text serializer** is using block content or portable text serializing as defined by Sanity. Since Next.js is build on React the [portable text to React](https://github.com/portabletext/react-portabletext) module is used. The actual serializer rules can be found in `lib/components/portableText/index.tsx`, and an example of using it can be found in the article page component here: `lib/components/pageComponents/articlePageComponent/index.tsx`.

For an introduction to portable text, Sanity ha written up an [introduction article](https://www.sanity.io/guides/introduction-to-portable-text).

### Sitemaps

> PS: The robots.txt is set to not allow indexing since this is a demo repo. You should probably change this.
> See `next-sitemap.config.js` «policies»

**Pages router**

The pages router project uses [next-sitemap](https://www.npmjs.com/package/next-sitemap).
See the setup file for more info at `next-sitemap.config.js`.

All non-dynamic pages will automatically get added to the sitemap. Also, if you are using `generateStaticParams` for a page with a dynamic path, it will automatically generate the sitemap for that file.

For pages with dynamic paths that doesn't use `generateStaticParams`, you'll need to generate the sitemap manually. An example of this can be seen at the `dynamic-sitemap.xml` path in the /pages folder.

**App router**

Both the app router projects is using a [route handler](https://beta.nextjs.org/docs/routing/route-handlers) for which will dynamically generate the sitemap and cache it. An example of this can be found in the `sitemap.xml` folder of either of the app router projects.

## SEO for the app router projects

When using the app router, Next has build in support for SEO using the `metadata` export (static) or by exporting the `generateMetadata` function.
This has been implemented for all pages in the projects using the app router. For more info, see https://beta.nextjs.org/docs/guides/seo

-   The main `app/layout.tsx` file configures the basic metadata, which is then overridden by the individual pages

## Running Playwright end-to-end tests

> Not implemented in all Next projects

More info about Playwright here: [https://playwright.dev/](https://playwright.dev/)

All the tests are located in the `/tests` folder. This is also where the report from the tests will be generated. See the `playwright.config.ts` for changing these paths.

The test will automatically start the local production server (`yarn start`) so you'll need to run a production build before running the tests (`yarn build`).

To run the tests use `yarn test:pw` or use the VSCode plugin.

## Localization

The project named `apps/next-website-app-dir-intl` features localization support.

The main new feature is that all localized routes are placed under the `[lang]` route. This means that all pages within this route will receive a `lang` parameter which can be used to fetch localized data from Sanity or any other source.
