---
author:
  name: Matt Crouch
  image: /images/matt-crouch.jpg
image: /images/svelte.png
title: What is Svelte?
slug: what-is-svelte
---

[Svelte][svelte docs] is a unique approach to the modern JavaScript framework. It prides itself on having fantastic speed and performance benchmarks compared to other frameworks. But how does that work?

Unlike traditional front-end frameworks like React or Vue, Svelte does not require a runtime. Lots of the work is done at compile time, which allows Svelte to strip out everything that doesn't get used. Everything else can be optimised to best work with the content of the application.

There's also no need for something like React's virtual DOM diffing to achieve peak performance. As Svelte knows exactly how an to update the page ahead of time. The result is a speedy site with a small footprint.

## Component structure

A Svelte component live all in one file. The `.svelte` components contain `<script>` tags for the necessary JavaScript, `<style>` tags for CSS and the rest is purely HTML to handle the display side of things.

For example, here's a slimmed down `PostSummary.svelte` component from this very site:

```html
<script>
  // Define attributes to expose on this component
  export let author;
</script>

<style>
  /* Style the  component */
  a {
    margin: 0;
    text-decoration: none;
  }
</style>

<!-- Create the markup -->
<a rel="prefetch" href="/blog/{slug}">
  <!-- Summary content -->
</a>
```

Attributes are defined as exported values within the `<script>` block. These values can be populated by the consuming component and when they change, the values inside the component change too.

Styles defined within a component do not leak out to other components across the application. This means we are free to be as generic as we like when defining selectors - goodbye BEM!

The rest of the component is purely markup. There are some Svelte-specific syntax in there such a if statements and event handlers, but this will all look familiar when comparing to something like Angular. It looks, feels and works just like regular old HTML and that's the best part.

## Want to learn more?

There's plenty more to Svelte components. Check out the [Svelte docs][svelte docs] to get the full scoop on what's possible.

For a more structured approach, there is a comprehensive interactive [tutorial][svelte tutorial] on their website ready to try out. Find a problem and see exactly how Svelte helps solve it.

[svelte docs]: https://svelte.dev/
[svelte tutorial]: https://svelte.dev/tutorial/basics
[rethinking reactivity]: https://svelte.dev/blog/svelte-3-rethinking-reactivity
