<script>
  import { onMount } from "svelte";
  import "mdb-ui-kit/css/mdb.min.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  onMount(async () => {
    if (typeof document === "undefined") return;

    const mdb = await import("mdb-ui-kit");
    const collapseElements = document.querySelectorAll(".collapse");
    const navbarButton = document.querySelector(".navbar-toggler");
    const togglerButtons = [
      navbarButton,
      ...document.querySelectorAll(".accordion-button"),
    ];

    collapseElements.forEach((collapseElement, index) => {
      const collapseInstance = new mdb.Collapse(collapseElement, {
        toggle: false,
      });
      const btn = togglerButtons[index];

      btn.addEventListener("click", () => {
        collapseInstance.toggle();
      });
    });
  });
</script>

<svelte:head>
  <meta
    name="Jesse Sites - SvelteKit App"
    content="Web site created using Vite and SvelteKit"
  />
  <meta name="description" content="The personal website of Jesse Sites" />
  <title>Jesse Sites - SvelteKit App</title>
</svelte:head>

<div class="app">
  <Header />

  <slot></slot>

  <Footer />
</div>
