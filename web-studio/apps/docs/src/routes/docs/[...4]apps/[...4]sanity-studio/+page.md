---
title: Sanity Studio
---

## Getting started

First you need to create a `.env` file. You can copy the env vars from the `.env.example`file. Then you need to create a project at sanity.io and update the env variables with your Sanity project config. For the `SANITY_STUDIO_PREVIEW_TOKEN` you can use a key generator and create a long string. (This key should also be used in the Next/SvelteKit project env vars.)

In short:

-   Clone the repo
-   Setup up you own Sanity dataset (run `sanity init` or do it manually)
-   Run `yarn install` (or convert to npm/pnpm..)
-   Run Studio `yarn dev`

:::admonition type="info"
There is a VSCode launch config for debugging in Edge. This allows inline debugging.
:::

## Structure

There are two main folder where most of the action happens:

1. `schemas` - All the schema definitions
2. `deskStructure` - Setup for the Sanity desk plugin

> Note that the schema types are stored in the `common` package in the same monorepo

In addition there is a file `resolveProductionUrl.ts`, which handles generating preview urls for the website project(s).

### Schemas

The schema files are organized into documents and objects. Documents are schemas that will in most cases show up as an editable document in the Studio ui. While objects are used as building blocks inside of a document. All documents and objects have been wrapped using `defineType`and `defineField`.

### Desk structure

The desk structure defines the UI for the studio using the structure builder. For more information about this see the official documentation https://beta.sanity.io/docs/platform/studio/v2-to-v3/structure

## Language support

The `apps/sanity-studio-intl` project uses [field level localization](https://www.sanity.io/docs/localization#cd568b11a09c).
All languages are defined in the common package (`src/locales/languages.ts`)

:::admonition type="warning"
Landing page components are localized, block content components are NOT localized. The main reason for this is that block content components live alongside other text, whilst landing page components do not. See the component documentation below for more info.
:::

-   There are three custom objects used for language support

    -   `schemas/objects/locale/localeString.ts` - Replaces the "string" type
    -   `schemas/objects/locale/localeText.ts` - Replaces the "text" type
    -   `schemas/objects/locale/localeBlockContainer.ts` - Adds locale support for the portable text container

-   There are two custom validators to support the «localeString» and the «localeText» objects. The validators can be found in `schemas/objects/locale/validators.ts`.
-   The «languageFilter plugin» has been added and configured in `sanity.config.ts`. This can be used to hide/show language fields in the Studio.

## Page templates

There are two page templates of interest:

-   Dynamic articles (`schemas/documents/article`)
-   Landing pages (`schemas/documents/landingPage`)

### Dynamic articles

A dynamic article is a template intended for text heavy content, such as articles (as not to be confused with the template type).

Dynamic articles have two parts:

-   A collection
-   The article document itself

A _collection_ allows an editor to create groups of articles, which will also affect the url of the output. This adds extra flexibility for the editor while keeping the structure tidy and easy to implement in the Next project.

The _article document_ itself belongs to a collection and can have any field needed. The main part is the content blocks (`blockContainer`). This block allows an editor to mix components and formatted text freely, and makes sure that the content can be serialized in one location in the Next project.

### Landing pages

Landing pages are more "controlled" compared to article templates. This template gives the editor the freedom to add, remove and re-order a set of «block components» (see below). However, each component explicitly defines what is allowed, there is no mixing of text and components like for the article template.

## Components

There are two main types of components:

-   Inline components (used by portable text)
-   Block components (or landing page components)

### Inline and block components

**Inline components** are typically used in conjunction with portable text, typically in article templates. Typical components are images, videos, buttons and other components which makes sense to intermingle them with formatted text.

These type of components doesn't have localization support since they are used together with text. An example: When using block content or portable text field, you should have one portable text field for each language. Given this, it doesn't make sense to have localization support embedded within block content components.

**Block components** (or landing page components) are components used to build an entire page, typically for a landing page template. These are components such as hero components, product carousels and similar. These components have build in localization, allowing the editor to create one layout for a landing page and still support multiple languages.

### Local vs global

**Local components** are objects where the content is a part of the document where the component is created. These components are only editable from the document where they are created.

**Global components** are references to a separate document. A global component owns its own schema and content. These components will show the same content on for all documents they are used and can be edited separately from the document itself.
