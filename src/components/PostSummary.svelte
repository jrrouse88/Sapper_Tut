<script>
  // Define attributes to expose on this component
</script>

<style>
  /* Style the post summary */
  a {
    margin: 0;
    text-decoration: none;
  }

  article {
    background: #fff;
    border-radius: 0.2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow: hidden;
    transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  article:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  h1 {
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0;
  }

  h1,
  .byline {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .about {
    min-width: 0;
  }

  .author-image {
    flex: 0;
  }

  .author-image > img {
    border-radius: 100%;
    display: block;
    height: 3rem;
    margin-right: 1rem;
    width: 3rem;
  }

  .author-image > img,
  .post-image {
    background: #eee;
  }

  .body {
    align-items: center;
    display: flex;
    margin: 1rem;
  }

  .byline {
    color: #888;
  }

  .post-image {
    background-position: center;
    background-size: cover;
    padding-bottom: 50%;
    width: 100%;
  }
</style>

<!-- Create a pre-fetched link for each blog post -->
