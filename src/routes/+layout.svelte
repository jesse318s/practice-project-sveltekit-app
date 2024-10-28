<script>
  import { onMount, onDestroy } from "svelte";
  import "mdb-ui-kit/css/mdb.min.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "../styles/global.scss";
  import { isLightModeActive } from "../store.js";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  const cleanupFunctions = [];

  onMount(async () => {
    if (typeof document === "undefined") return;

    try {
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
        const toggleCollapse = () => collapseInstance.toggle();

        btn.addEventListener("click", toggleCollapse);
        cleanupFunctions.push(() => {
          btn.removeEventListener("click", toggleCollapse);
        });
      });
    } catch (err) {
      console.error(err);
    }
  });

  onDestroy(() => {
    cleanupFunctions.forEach((cleanup) => cleanup());
    cleanupFunctions.length = 0;
  });
</script>

<svelte:head>
  <meta
    name="Jesse Sites - SvelteKit App"
    content="Website created using Vite and SvelteKit"
  />
  <meta name="description" content="The personal website of Jesse Sites" />
  <title>Jesse Sites - SvelteKit App</title>
</svelte:head>

<div
  class={`app ${$isLightModeActive ? "bg-light text-dark" : "bg-dark text-light"}`}
>
  <Header />
  <slot></slot>
  <Footer />
</div>
