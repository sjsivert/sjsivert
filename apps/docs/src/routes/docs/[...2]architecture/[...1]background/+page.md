---
title: Background
---

## Background

This document describes the philosophy on which the template repo and the rest of this documentation is build on. This document is intended as background material to explain why the setup, tools and other stuff is setup the way it is.

:::admonition type="note"
The main target for this repo and documentation is developers working with complex "frontend projects", meaning Sanity, Next/SvelteKit including integrations. This type of project will be referred to as a **Sanity + Next project**, but you can substitute any meta framework instead of Next, for instance SvelteKit.
:::

### Working with modern web projects

In 2023 (and beyond), working with modern "frontend projects" involves all of the classical frontend methods and tools, like understanding and writing HTML, CSS and client side JavaScript. However, this alone is not enough when working with a typical Sanity + Next project. Other methods and tools are also often needed, this includes:

-   Design systems
-   Component libraries
-   Custom components in Sanity
-   Authentication
-   Integrations with API's and other external services
-   DevOps, CI/CD, hosting, CDNs, and so on

This means that in many projects it's necessary to have people from _different areas of expertise working on the same project_. For example you might need someone with knowledge of Auth0 (Authentication) to implement authentication and authorization for the project. At the same time you need an expert on component design and implementation to create the React components for a projects. These are typically two very different people.

At the same time, customers have an expectation that their website/platform will be delivered in a timely manner (as fast as possible), and that it should be a robust and high quality product.

So, to summarize.

:::yes
We need to work fast and end up with a high quality result and a happy client.
:::

:::yes
We need people from different areas of expertise working on the same code base.
:::

To accomplish this, it will require a pragmatic philosophy/approach for selecting tools and methods.

## A pragmatic approach for choosing tools and methods

As established above, we need tools that will fit a range of developer types. From UI/client experts to people accustomed to working with services and authentication (backend stuff..).

Having this in mind, we can define the following goals:

-   We need tools and method that are inclusive and effective for the entire team.
-   The tools and methods must be useable over time, making it as easy as possible to introduce new people to the project.
-   The developer experience needs to be a good as possible.

### Recommended tools and methods

Based on the philosophy described above, and a lot of trying different stuff over the years, these are the recommended tools and method.

:::yes
Use **Tailwind** for styling components and pages
:::
:::yes
Separate component development from websites/apps so on, and test and document components using **Storybook** ar a similar tool.
:::
:::yes
Use **Typescript** in Sanity Studio and any website/app project.
:::
:::yes
Automate as much as possible. (Code formatting, import order, how to handle env vars, working with pull-requests, so on)
:::

-   Tailwind standardized how to work with styling for the entire team. You get the structure "out of the box", and it makes it easier to include as many as possible in the styling part of the project. Note: Tailwind works in this specific setting because everything is [component based](/docs/architecture/background#components-the-lego-approach) (React or Svelte).
-   Typescript makes it easier to spot errors while writing code, and crucially, it makes it easier for multiple people to work on each others code.

The [template project in the Github repository](https://github.com/makingwaves/sanity-next-component-template-repo) uses these tools and method, and you can find much more technical information by looking at the repo it self and other pages in this documentation.

:::admonition type="note"
If you're an experienced JS or CSS developer you might be thinking right now that you have already figured out the most efficient way of structuring a project and writing code. And you might be right... Your way of writing CSS or JS might actually be faster and lead to better results, as long as you are the one doing it. However, this is about finding tools and method for an **entire team of different people**, and making everyone as comfortable and efficient as possible.
:::

## Components - The Lego approach

...coming soon

## Additional reading

-   Sanity
-   Next
-   Localization or language support
