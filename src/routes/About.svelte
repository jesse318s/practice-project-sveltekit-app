<script>
  import { isLightModeActive } from "../store.js";
  import GitHubProfile from "../lib/GitHubProfile.svelte";
</script>

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
        I can create programming solutions utilizing my knowledge and strategies
        gained from industry experience and Texas State Technical College.
      </p>
    </div>
    <hr class="my-5" />
  </div>
</section>
