## Getting started

To run the project locally, first create a file called `.env.local`. You can copy the env vars from `.env.example`. All the values for the Sanity variables you'll find when setting up your Sanity project (see the Sanity project readme). The `SANITY_PREVIEW_SECRET` can be any string as long it is the same one as the `SANITY_STUDIO_PREVIEW_TOKEN` you created in the Sanity `.env.development` file.

## Debugging

If you are using Visual Studio Code, there are 5 launch scripts provided. Use them from the debugger menu.

> The Edge debugger requires the Edge Tools for VSCode (https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools)

-   For Mac/Linux:

    -   `Next: Node` - Runs the Next server
    -   `Next: Edge` - Opens the Next site in the Edge browser
    -   `Next: Full (Mac/Linux)` - Runs the server and opens the site in the Edge browser

-   For Windows:

    -   `Next: Node` - Runs the Next server
    -   `Next: Node Windows` - Runs the Next server
    -   `Next: Full (Windows)` - Runs the server and opens the site in the Edge browser

## Documentation

All the documentation can be found in the [docs](docs/) folder.
