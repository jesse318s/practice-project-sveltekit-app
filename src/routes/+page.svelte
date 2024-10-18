<script>
  import { isLightModeActive } from "../store.js";
  import Landing from "./Landing.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
</script>

<main class={$isLightModeActive ? "bg-light text-dark" : "bg-dark text-light"}>
  <Landing />
  <Skills />
  <Projects />
  <About />
  <Contact />
</main>
