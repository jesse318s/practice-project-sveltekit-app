<script>
  export let project;

  import { onMount, onDestroy } from "svelte";

  let cleanup = () => {};

  onMount(async () => {
    if (typeof document === "undefined") return;

    try {
      const mdb = await import("mdb-ui-kit");
      const collapseElement = document.getElementById(`collapse${project.id}`);
      const btn = document.querySelector(
        `button[data-bs-target="#collapse${project.id}"]`
      );
      const collapseInstance = new mdb.Collapse(collapseElement, {
        toggle: false,
      });

      const toggleCollapse = () => {
        if (collapseElement.classList.contains("collapsing")) return;

        btn.classList.toggle(
          "collapsed",
          collapseElement.classList.contains("show")
        );
        collapseInstance.toggle();
      };

      btn.addEventListener("click", toggleCollapse);
      cleanup = () => btn.removeEventListener("click", toggleCollapse);
    } catch (err) {
      console.error(err);
    }
  });

  onDestroy(() => {
    cleanup();
    cleanup = () => {};
  });
</script>

<div class="accordion-item">
  <h2 class="accordion-header" id={`heading${project.id}`}>
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#collapse${project.id}`}
      aria-controls={`collapse${project.id}`}
    >
      <h2>{project.title}</h2>
    </button>
  </h2>
  <div
    id={`collapse${project.id}`}
    class="accordion-collapse collapse"
    aria-labelledby={`heading${project.id}`}
    data-bs-parent="#projectsAccordion"
  >
    <div class="accordion-body text-dark">
      <p>{project.desc}</p>
      <strong>
        <p>{project.role}</p>
      </strong>
      <p class="text-decoration-underline">
        <a href={project.url}>Visit website...</a>
      </p>
      <img
        class="shadow-2-strong"
        src={project.img}
        width="75%"
        height="75%"
        loading="lazy"
        alt={project.title}
      />
    </div>
  </div>
</div>
