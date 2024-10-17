<script>
  import "../styles/global.scss";
  import { isLightModeActive } from "../store.js";
  import GitHubProfile from "../lib/GitHubProfile.svelte";
  import landingImg from "../lib/landing_img.webp";
  import granburyArtImg from "../lib/granbury_art.webp";
  import granburyFreshImg from "../lib/granbury_fresh.webp";
  import princigrationImg from "../lib/princigration.webp";
  import pricecineratorAIImg from "../lib/pricecinerator_ai.webp";
</script>

<main class={$isLightModeActive ? "bg-light text-dark" : "bg-dark text-light"}>
  <section
    style="background: url({landingImg}); background-size: cover; height: 100vh; width: 100%;"
  >
    <!-- Popout animation -->
    <p class="popout">
      <span>J</span>
      <span>E</span>
      <span>S</span>
      <span>S</span>
      <span>E&nbsp;</span>
      <span>S</span>
      <span>I</span>
      <span>T</span>
      <span>E</span>
      <span>S&nbsp;</span>
      <span>-</span>
      <br />
      <span>P</span>
      <span>R</span>
      <span>O</span>
      <span>G</span>
      <span>R</span>
      <span>A</span>
      <span>M</span>
      <span>M</span>
      <span>E</span>
      <span>R</span>
    </p>
    <!-- Popout animation -->
    <!-- Down button -->
    <div class="d-flex justify-content-center">
      <a
        href="#skills"
        class={$isLightModeActive
          ? "btn btn-light btn-outline-* btn-lg blink"
          : "btn btn-dark btn-outline-* btn-lg blink"}
      >
        <h2 class={$isLightModeActive ? "" : "text-shadow"}>Skills</h2>
        <i class="fas fa-angle-down fa-2x"></i>
      </a>
    </div>
    <!-- Down button -->
  </section>

  <div id="skills"></div>
  <section class="row text-center mt-4 mx-5">
    <h2 class={$isLightModeActive ? "mb-4" : "mb-4 text-shadow"}>My Skills</h2>
    <div class="col-1"></div>
    <div class="col-4">
      <p class="font-weight-bold pt-4 mb-2">HTML</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 100%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">100%</p>
      <p class="font-weight-bold pt-4 mb-2">CSS/SASS</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 95%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">95%</p>
      <p class="font-weight-bold pt-4 mb-2">JavaScript</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 95%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">95%</p>
      <p class="font-weight-bold pt-4 mb-2">MDBootstrap</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 98%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">98%</p>
      <p class="font-weight-bold pt-4 mb-2">React/Svelte/Vue</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 90%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">90%</p>
    </div>
    <div class="col-2"></div>
    <div class="col-4">
      <p class="font-weight-bold pt-4 mb-2">Node/Express</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 95%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">95%</p>
      <p class="font-weight-bold pt-4 mb-2">Git/GitHub</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 95%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">95%</p>
      <p class="font-weight-bold pt-4 mb-2">MongoDB/SQL</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 90%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">90%</p>
      <p class="font-weight-bold pt-4 mb-2">Python/Java</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 90%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">90%</p>
      <p class="font-weight-bold pt-4 mb-2">C#/C/C++</p>
      <div class="progress bg-black">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 90%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        ></div>
      </div>
      <p class="mt-2">90%</p>
    </div>
    <hr class="my-5" />
  </section>
  <div id="projects"></div>
  <section class="text-center mb-5">
    <h2 class={$isLightModeActive ? "mb-5" : "mb-5 text-shadow"}>
      My Projects
    </h2>
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
            aria-expanded="false"
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
              <p>I was the only developer for this website.</p>
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
            aria-expanded="false"
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
              welfare, the environment, and the quality of life for the
              residents in Hood County with a special emphasis on Lake Granbury
              and the waters contributing to Lake Granbury.
            </p>
            <strong>
              <p>I was the leading front-end developer for this website.</p>
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
            aria-expanded="false"
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
              <p>I was the leading developer for this web app.</p>
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
            aria-expanded="false"
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
  <div id="about"></div>
  <section class="text-center">
    <h2 class={$isLightModeActive ? "mb-5" : "mb-5 text-shadow"}>About Me</h2>

    <GitHubProfile />

    <div class="row mx-5 mt-4">
      <div class="col-12">
        <p class="lead">
          Hello, my name is Jesse Sites, and I'm a programmer based in Texas.
        </p>
        <p>
          I can create programming solutions utilizing my knowledge and
          strategies gained from industry experience and Texas State Technical
          College.
        </p>
      </div>
      <hr class="my-5" />
    </div>
  </section>

  <div id="contact"></div>
  <section class="text-center">
    <h2 class={$isLightModeActive ? "mb-5" : "mb-5 text-shadow"}>Contact Me</h2>
    <ul class="list-unstyled mb-0">
      <li>
        <i class="fas fa-envelope fa-2x"></i>
        <p>jesse318s@gmail.com</p>
      </li>
      <li>
        <i class="fas fa-phone fa-2x"></i>
        <p class="mb-0">+1 325-455-4644</p>
      </li>
    </ul>
  </section>
</main>

<style lang="scss">
  .popout {
    $t: 1s;
    $d: 0.08em;
    $n: 3;
    $e: cubic-bezier(0.86, 0, 0.07, 1);
    $front: lightblue;
    $back: black;

    font-family: "Roboto Draft";
    font-weight: bold;
    font-size: 80px;
    padding: 80px;
    padding-top: 250px;
    margin: auto;
    width: 50%;
    white-space: nowrap;
    position: relative;
    right: 50px;

    @keyframes ani {
      0% {
        transform: translate3d(0, 0, 0);
        text-shadow: 0em 0em 0 $back;
        color: $front;
      }
      30% {
        transform: translate3d(0, 0, 0);
        text-shadow: 0em 0em 0 $back;
        color: $front;
      }
      70% {
        transform: translate3d($d, -$d, 0);
        text-shadow: -$d $d $back;
        color: $front;
      }
      100% {
        transform: translate3d($d, -$d, 0);
        text-shadow: -$d $d $back;
        color: $front;
      }
    }
    span {
      position: relative;
      display: inline-block;
      animation: ani $t infinite alternate $e;
      @for $i from 1 through $n {
        &:nth-last-child(#{$i}n) {
          animation-delay: -$t * calc($i/$n/2);
        }
      }
    }
  }

  .blink {
    position: relative;
    bottom: 50px;
    animation: blinker 2s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 50%;
    }
  }

  // tablet media query
  @media screen and (max-width: 991px), screen and (max-height: 600px) {
    .popout {
      font-size: 40px;
      position: relative;
      right: 60px;
      bottom: 160px;
    }

    .blink {
      position: relative;
      bottom: 240px;
    }
  }

  // phone media query
  @media screen and (max-width: 500px) {
    .popout {
      font-size: 25px;
      position: relative;
      right: 100px;
      bottom: 140px;
    }

    .blink {
      position: relative;
      bottom: 200px;
    }
  }
</style>
