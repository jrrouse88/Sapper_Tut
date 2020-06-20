<script>
  // Import container component
  import Container from "../components/Container.svelte";

  // Expose attributes to set error
  export let status;
  export let error;

  // Work out if development environment
  const dev = process.env.NODE_ENV === "development";
</script>

<!-- Set the title of the page when an error occurs -->
<svelte:head>
  <title>{status}</title>
</svelte:head>

<Container>
  <h1>{status}</h1>
  <p>{error.message}</p>

  <!-- Only display an error in development mode -->
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</Container>
