---
author:
  name: Matt Crouch
  image: /images/matt-crouch.jpg
image: /images/sapper.png
title: What is Sapper?
slug: what-is-sapper
---

Sapper touts itself as "the next small thing in web development". It may just be.

Sapper is built on top of [Svelte][svelte] and provides a neat solution for building any lightweight site looking to prioritise speed and performance.

In addition to Svelte's impressive feature-set, Sapper provides a few more added behaviour out of the box, such as server-side rendering, automatic code-splitting and tools to help generate service workers. All of this is to help make fast sites by default, without sacrificing the developer experience.

## Integration with Svelte

Each page is a `svelte` component. This makes it easier for Sapper to extract information such as critical CSS, templated HTML and any data required to render the page upfront.

Each `svelte` page component lives inside the `/routes` directory. Sapper can look in here and start building the structure of the web site without needing any specific config.

## Getting started

Sapper is not quite ready for version 1 just yet, but the developers actively encourage people do download and try it out. The example project, [sapper-template][sapper-template] generates a fully-working site out of the box to customise as required. This site here was built with that exact template!

## The end result

When building a Sapper project, the resulting set of files come in two parts - the server-side and client-side code.

Server code is generally minimal and is all that is needed to host a Sapper app. It is responsible for creating that first render that gets sent to the browser.

Client-side code powers whatever happens next. This includes small functions to rehydration of the app after loading, the handling of the routes and the logic behind prefetching. This is all provided for us. All we need to do is build the `svelte` components to power it.

[svelte]: /blog/what-is-svelte
[sapper-template]: https://github.com/sveltejs/sapper-template
