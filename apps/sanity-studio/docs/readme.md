# General and structure

There are two main folder where most of the action happens:

1. schemas
2. deskStructure

In addition there is a file `resolveProductionUrl.ts`, which handles generating preview urls for the Next.js project.

## Schemas

The schema files are organized into documents and objects. Documents are schemas that will in most cases show up as an editable document in the Studio ui. While objects are used as building blocks inside of a document.

## Desk structure

The desk structure defines the UI for the studio using the structure builder. For more information about this see the official documentation https://www.sanity.io/docs/structure-builder-introduction.

# Page templates

There are two page templates of interest:

* Dynamic articles (`schemas/documents/article`)
* Landing pages (`schemas/documents/landingPage`)

## Dynamic articles

A dynamic article is a template intended for text heavy content, such as articles (as not to be confused with the template type).

Dynamic articles have two parts:

* The collection
* The article document itself

A collection allows an editor to create groups of articles, which will also affect the url of the output. This adds extra flexibility for the editor while keeping the structure tidy and easy to implement in the Next project.

The article document itself belongs to a collection and can have any field needed. The main part is the content blocks (`blockContainer`). This block allows an editor to mix components and formatted text freely, and makes sure that the content can be serialized in one location in the Next project.

## Landing pages

Landing pages are more "controlled" compared to article templates. This template gives the editor the freedom to add, remove and re-order a set of «landing page components» (see below). However, each component explicitly defines what is allowed, there is no mixing of text and components like for the article template.


# Components

There are two main types of components:

* Inline components (used by portable text)
* Block components (or landing page components)

## Inline and block components

Inline components are typically used in conjunction with portable text, in article templates. Typical components are images, videos, buttons and other components which makes sense to allow an editor to intermingle with formatted text.

Block components are components used to build an entire page, typically for a landing page template. These are components such as hero components, product carousels and similar.

## Local vs global

Local components are objects where the content is a part of the document where the component is created. These components are only editable from the document where they are created.

Global components are references to a separate document. A global component owns its own schema and content. These components will show the same content on for all documents they are used and can be edited separately from the document itself.
