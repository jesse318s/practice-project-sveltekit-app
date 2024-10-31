<script>
  import { onMount, onDestroy } from "svelte";
  import { isLightModeActive } from "../store.js";
  import granburyArtImg from "../lib/granbury_art.webp";
  import granburyFreshImg from "../lib/granbury_fresh.webp";
  import princigrationImg from "../lib/princigration.webp";
  import pricecineratorAIImg from "../lib/pricecinerator_ai.webp";

  const cleanupFunctions = [];

  onMount(async () => {
    if (typeof document === "undefined") return;

    try {
      const mdb = await import("mdb-ui-kit");
      const togglerButtons = document.querySelectorAll(".accordion-button");
      let collapseElements = document.querySelectorAll(".collapse");

      collapseElements = Array.from(collapseElements).slice(1);

      collapseElements.forEach((collapseElement, index) => {
        const collapseInstance = new mdb.Collapse(collapseElement, {
          toggle: false,
        });
        const btn = togglerButtons[index];

        const toggleCollapse = () => {
          if (collapseElement.classList.contains("collapsing")) return;

          btn.classList.toggle(
            "collapsed",
            collapseElement.classList.contains("show")
          );
          collapseInstance.toggle();
        };

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

<div id="projects"></div>
<section class="text-center">
  <h2 class={`mb-5 ${$isLightModeActive ? "" : "text-shadow"}`}>My Projects</h2>
  <!-- Projects accordion -->
  <div class="accordion mx-2" id="projectsAccordion">
    <!-- Accordion option -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-controls="collapseOne"
        >
          <h2>Granbury Art - Art Gallery Website</h2>
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#projectsAccordion"
      >
        <div class="accordion-body text-dark">
          <p>The website for the artists of Granbury, TX.</p>
          <strong>
            <p>I was the principal developer for this web app.</p>
          </strong>
          <p class="text-decoration-underline">
            <a href="https://www.granbury-art.com/">Visit website...</a>
          </p>
          <img
            class="shadow-2-strong"
            src={granburyArtImg}
            width="75%"
            height="75%"
            loading="lazy"
            alt="The Granbury Art website"
          />
        </div>
      </div>
    </div>
    <!-- Accordion option -->
    <!-- Accordion option -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-controls="collapseTwo"
        >
          <h2>Granbury Fresh - Informative Environmental Website</h2>
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#projectsAccordion"
      >
        <div class="accordion-body text-dark">
          <p>
            The purpose of Granbury Fresh is to protect public health, public
            welfare, the environment, and the quality of life for the residents
            in Hood County with a special emphasis on Lake Granbury and the
            waters contributing to Lake Granbury.
          </p>
          <strong>
            <p>I was the principal front-end developer for this website.</p>
          </strong>
          <p class="text-decoration-underline">
            <a href="http://www.granburyfresh.org/">Visit website...</a>
          </p>
          <img
            class="shadow-2-strong"
            src={granburyFreshImg}
            width="75%"
            height="75%"
            loading="lazy"
            alt="The Granbury Fresh website"
          />
        </div>
      </div>
    </div>
    <!-- Accordion option -->
    <!-- Accordion option -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-controls="collapseThree"
        >
          <h2>Princigration - Software Blog</h2>
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#projectsAccordion"
      >
        <div class="accordion-body text-dark">
          <p>Princigration Landing Page and Blog App</p>
          <strong>
            <p>I was the principal developer for this web app.</p>
          </strong>
          <p class="text-decoration-underline">
            <a href="https://princigration.com/">Visit website...</a>
          </p>
          <img
            class="shadow-2-strong"
            src={princigrationImg}
            width="75%"
            height="75%"
            loading="lazy"
            alt="The Princigration website"
          />
        </div>
      </div>
    </div>
    <!-- Accordion option -->
    <!-- Accordion option -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-controls="collapseFour"
        >
          <h2>Pricecinerator AI - Neural Network App</h2>
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#projectsAccordion"
      >
        <div class="accordion-body text-dark">
          <p>
            A web app for predicting prices and developing neural networks for
            predicting prices.
          </p>
          <strong>
            <p>I was the only developer for this web app.</p>
          </strong>
          <p class="text-decoration-underline">
            <a href="https://jesse318s.github.io/pricecinerator-ai/"
              >Visit website...</a
            >
          </p>
          <img
            class="shadow-2-strong"
            src={pricecineratorAIImg}
            width="75%"
            height="75%"
            loading="lazy"
            alt="The Pricecinerator AI website"
          />
        </div>
      </div>
    </div>
    <!-- Accordion option -->
  </div>
  <!-- Projects accordion -->
  <hr class="my-5 mx-5" />
</section>
