---
author:
  name: Matt Crouch
  image: /images/matt-crouch.jpg
image: /images/pages.png
title: Pages
slug: pages
---

Pages are specific [Svelte][what is svelte] components that define a page that can be linked and navigated to.

All pages live inside the `/routes` directory. The location of that component determines the URL used to access it. For example, a page component stored inside `/routes/about/bio.svelte` can be accessed by visiting `/about/bio`.

Naming a page component `index.svelte` will work similar to an `index.html` would anywhere else. To have a page at `/blog` it can either be `/routes/blog.svelte` or `/routes/blog/index.svelte`.

## Special features

### Server rendering

When a user first lands on a URL for a page, the server will supply the full HTML rendered version of that page. That will then go and download the JavaScript that powers all the interactivity on that page and silently update (or "hydrate") the application later on.

This ensures the user gets the page's content as quickly as possible and allows other visitors such as web crawlers and bots to digest the information a lot easier.

### Data preloading

There needs to be some kind of mechanism for Sapper to know exactly what data a page needs to download in order to render it. Thankfully that is all sorted through a special `preload` function.

```html
<script context="module">
  // Fetch blog posts and pre-load their contents
  export function preload({ params, query }) {
    return this.fetch("blog.json")
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>
<script>
  // Export custom attributes for component
  export let posts;
</script>
```

The `context` attribute on the script block tells Sapper that the contents is special. The `preload` function itself is provided with some of the information about the page being loaded, including and URL parameters that were supplied.

This then returns a promise that describes the steps needed to go and get the data and what to do with it. The final returned data from that promise then goes and fills out a variable in the regular `<script>` block.

When the promise resolves, Sapper knows the page's data is ready to render and starts pumping out the HTML to return in the request. As a result, a promise that is very slow to resolve can end up damaging the response time of the site rather than helping it. Make sure only the critical information about the page goes in there.

### `<head>` updates

If needed, a page component can also update the contents within the `<head>` of the page through a special `<svelte:head>` tag.

```html
<svelte:head>
  <title>Sapper Blog</title>
</svelte:head>
```

When Sapper encounters this, it injects it in to the defined part of the `template.html` file.

While this is most commonly used to update the title of the window for each page, it can also add in more features by including extra HTML. For example, if there's a third-party widget that needs some extra JavaScript to run, this is a great place to put it. This makes sure it only ever gets requested on the page that actually uses it.

[what is svelte]: /blog/what-is-svelte
