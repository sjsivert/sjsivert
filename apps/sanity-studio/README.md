# Noa Ignite Sanity template repo

This repository is intended as inspiration or a starter template to get rolling with Sanity Studio.

## Getting started

You need to create a `.env.development` file. You can copy the env vars from the `.env.example`file. The you need to create a project at sanity.io and update the env variables with your Sanity project config. For the `SANITY_STUDIO_PREVIEW_TOKEN` you can use a key generator and create a long string. (This key should also be used in the Next project env vars.)

## Project overview

-   The project uses Typescript
-   The project has a setup for preview using the Next project in the same org

### Files/folders to take a note of

-   `schemas/SchemaType.ts` - Defines all schema types (names) which is used in multiple locations.
-   `deskStructure` - Setup for the Sanity desk plugin
-   `resolveProductionUrl.ts` - Config for preview in Next

## Getting started and notes

-   Clone the repo
-   Setup up you own Sanity dataset (run `sanity init` or do it manually)
-   Run `yarn install` (or convert to npm/pnpm..)
-   Run Studio `yarn start`

> There is a VSCode launch config for debugging in Edge. This allows inline debugging.

## Documentation

All documentation is located in the [«docs»](docs/) folder.
