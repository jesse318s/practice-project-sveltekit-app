<script>
  import { isLightModeActive } from "../store.js";
</script>

<div id="contact"></div>
<section class="text-center">
  <h2 class={$isLightModeActive ? "mb-5" : "mb-5 text-shadow"}>Contact Me</h2>
  <ul class="list-unstyled">
    <li class="mb-4">
      <a
        class="btn btn-primary mb-3 fs-6"
        href="https://www.linkedin.com/in/jesse-sites/"
      >
        <i class="fa-brands fa-linkedin fa-2x me-1"></i>
        Jesse Sites
      </a>
    </li>
    <li class="mb-4">
      <i class="fas fa-phone fa-2x"></i>
      <p>+1 325-455-4644</p>
    </li>
  </ul>
</section>
