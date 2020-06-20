---
author:
  name: Matt Crouch
  image: /images/matt-crouch.jpg
image: /images/server-routes.png
title: Server routes
slug: server-routes
---

Sapper can manage the server side as well as the client side. While pre-rendering is all handled through middleware elsewhere, Sapper can consume other `.js` files to use them as endpoints for data.

For some projects, there may be a need to consume data through a means other than HTML. For example, a blog might have a JSON endpoint or an RSS feed to generate. These server routes are a great place to create those.

```js
export function get(req, res) {
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
```

Each `.js` file can export a function that corresponds to a HTTP method. The corresponding function is fired when a request comes in through that method.

In the above example, we are checking if we have a blog post on file with that defined `slug` value. If we do, return it with a `200` response. If not, send a `404` instead.

The data that powers these screens can come from anywhere - either consuming some other API on another service or by importing another local dataset. It's entirely up to us as developers to work out what's best for the project.

Of course, there is no hard requirement to use server routes _at all_. If they are not useful, they can just be left off.
