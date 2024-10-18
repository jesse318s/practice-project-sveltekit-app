<script>
  import { isLightModeActive } from "../store.js";
</script>

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
