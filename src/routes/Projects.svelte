<script>
  import { isLightModeActive } from "../store.js";
  import projects from "./projects.json";
  import AccordionItem from "../lib/AccordionItem.svelte";
</script>

<div id="projects"></div>
<section class="text-center">
  <h2 class={`mb-5 ${$isLightModeActive ? "" : "text-shadow"}`}>My Projects</h2>
  <div class="accordion mx-2" id="projectsAccordion">
    {#each projects as project}
      <AccordionItem {project} />
    {/each}
  </div>
  <hr class="my-5 mx-5" />
</section>
