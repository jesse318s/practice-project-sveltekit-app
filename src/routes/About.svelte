<script>
  import { isLightModeActive } from "../store.js";
  import GitHubProfile from "../lib/GitHubProfile.svelte";
</script>

<div id="about"></div>
<section class="text-center">
  <h2 class={`mb-5 ${$isLightModeActive ? "" : "text-shadow"}`}>About Me</h2>
  <GitHubProfile />
  <div class="row mx-5 mt-4">
    <div class="col-12">
      <p class="lead">
        Hello, my name is Jesse Sites, and I'm a software engineer based in
        Texas.
      </p>
      <p>
        I utilize Python, HTML/CSS, JavaScript, TypeScript, Java, C#, SQL,
        MongoDB, and POML to deliver solutions that improve capabilities, reduce
        costs, and increase efficiency.
      </p>
    </div>
    <hr class="my-5" />
  </div>
</section>
