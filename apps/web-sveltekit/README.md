This is a SvelteKit project with Sanity integration and some pages

## Getting started

> You need to know how SvelteKit works to use this project, see: https://kit.svelte.dev/docs/introduction

To run the project locally, first create a file called `.env`. You can copy the env vars from `.env.example`. All the values for the Sanity variables you'll find when setting up your Sanity project (see the Sanity project readme). The `SANITY_PREVIEW_SECRET` can be any string as long it is the same one as the `SANITY_STUDIO_PREVIEW_TOKEN` you created in the Sanity `.env.development` file.

## Debugging

If you are using Visual Studio Code, there are 3 launch scripts provided. Use them from the debugger menu.

> The Edge debugger requires the Edge Tools for VSCode (https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools)

-   `Launch server` - Runs the Vite dev server and hooks up the VSCode debugger
-   `Launch Edge` - Opens the site site in the Edge browser and hooks up the VSCode debugger
-   `Server and Browser` - Runs the Vite dev server and opens the site in the Edge browser

## Important files and folders

-   `.svelte-kit` - This is a generated folder with generated types, configs and so on, don't edit it.
-   `/static` - This is for static files such as icons, images and so on
-   `/src` - All of the source code (this is where you edit stuff)
    -   `lib` - This is where you put all the local code that isn't a route
    -   `routes` - The routes/pages and any api endpoints
    -   `app.html` - The base file for the app
    -   `app.css` - The base CSS file.
    -   `app.d.ts` - Definition type file for the root app, see https://kit.svelte.dev/docs/types#app
-   `svelte.config.js` - This is your main config file, see the file itself for comments
