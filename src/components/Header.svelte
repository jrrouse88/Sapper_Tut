<script>
  // Import container to reuse the style
  import Container from "./Container.svelte";
</script>

<style>
  /* Style the header */
  a {
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  header {
    background: #03a9f4;
    color: white;
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  /* Add extra style to <Container> */

  header :global(div) {
    align-items: center;
    display: flex;
    height: 100%;
  }
</style>

<header>
  <Container>
    <h1>
      <a href="/">Sapper Blog</a>
    </h1>
  </Container>
</header>
