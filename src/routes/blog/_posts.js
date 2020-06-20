// Import packages to find blog posts
import marked from "marked";
import * as fs from "fs";
import glob from "glob";
import fm from "front-matter";

const posts = [];

// Find all posts in the __posts directory
const paths = glob.sync("**/_posts/*.md");

// Extract their content into `posts` array
paths.forEach(path => {
  const data = fs.readFileSync(path, "utf8");
  const frontmatter = fm(data);
  const html = marked(frontmatter.body);

  const { author, image, title, slug } = frontmatter.attributes;

  posts.push({
    author,
    image,
    title,
    slug,
    html
  });
});

export default posts;
