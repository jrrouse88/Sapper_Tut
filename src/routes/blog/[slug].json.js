// Import markdown posts
import posts from "./_posts.js";

// Collate posts into Map by their slug value
const lookup = new Map();
posts.forEach(post => {
  lookup.set(post.slug, JSON.stringify(post));
});

// Get post by its slug
export function get(req, res, next) {
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
