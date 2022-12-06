# Noa Ignite Sanity template repo

This project is using Sanity Studio v3.

This repository is intended as inspiration or a starter template to get rolling with Sanity Studio.

## Getting started

You need to create a `.env` file. You can copy the env vars from the `.env.example`file. The you need to create a project at sanity.io and update the env variables with your Sanity project config. For the `SANITY_STUDIO_PREVIEW_TOKEN` you can use a key generator and create a long string. (This key should also be used in the Next/SvelteKit project env vars.)

## Project overview

-   The project uses Typescript
-   The project has a setup for preview using the Next/SvelteKit project in /apps folder

### Files/folders to take a note of

-   `deskStructure` - Setup for the Sanity desk plugin
-   `resolveProductionUrl.ts` - Config for preview in Next
-   Note that the schema types are stored in the `common` package in the same monorepo

## Getting started and notes

-   Clone the repo
-   Setup up you own Sanity dataset (run `sanity init` or do it manually)
-   Run `yarn install` (or convert to npm/pnpm..)
-   Run Studio `yarn dev`

> There is a VSCode launch config for debugging in Edge. This allows inline debugging.

## Documentation

All documentation is located in the [«docs»](docs/) folder.
