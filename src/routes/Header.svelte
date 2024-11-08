<script>
  import { isLightModeActive, isGameActive } from "../store.js";
  import { goto } from "$app/navigation";

  const toggleLightMode = () => {
    isLightModeActive.update((value) => !value);
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter" || event.key === " ") toggleLightMode();
  };
</script>

<header id="home">
  <nav
    class={`navbar navbar-expand-lg fixed-top overflow-hidden ${
      $isLightModeActive ? "navbar-light bg-light" : "navbar-dark bg-dark"
    }`}
  >
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Toggle button -->
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand mx-1" href={isGameActive ? "" : "#home"}>
          <h1 class="text-shadow">JS</h1>
        </a>
        <ul class="navbar-nav me-auto font-weight-bold mx-1">
          <li class="nav-item">
            <button
              class="nav-link"
              on:click={() => {
                goto("/practice-project-sveltekit-app/");
              }}>Home</button
            >
          </li>
          {#if !$isGameActive}
            <li class="nav-item">
              <button
                class="nav-link"
                on:click={() => goto("/practice-project-sveltekit-app/#skills")}
                >Skills</button
              >
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                on:click={() =>
                  goto("/practice-project-sveltekit-app/#projects")}
                >Projects</button
              >
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                on:click={() => goto("/practice-project-sveltekit-app/#about")}
                >About</button
              >
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                on:click={() =>
                  goto("/practice-project-sveltekit-app/#contact")}
                >Contact</button
              >
            </li>
          {/if}
          <li class="nav-item">
            <button
              class="nav-link"
              on:click={() => goto("/practice-project-sveltekit-app/game")}
              >Game</button
            >
          </li>
        </ul>
      </div>
      <!-- Collapsible wrapper -->
      <div class="d-flex align-items-center text-center">
        {#if !$isGameActive}
          <a
            class="btn btn-primary me-4"
            href="https://www.linkedin.com/in/jesse-sites/"
          >
            <div class="font-weight-bold">My Resume</div>
          </a>
        {/if}
        <div
          class={`toggle-mode me-4 ${$isLightModeActive ? "link-dark" : "link-warning"}`}
          on:click={toggleLightMode}
          on:keydown={handleKeydown}
          tabindex="0"
          role="button"
          aria-label="Toggle light mode"
        >
          <i
            class={`fas fa-adjust fa-2x ${$isLightModeActive ? "moon" : "sun"}`}
          ></i>
          <aside class="font-weight-bold">Mode</aside>
        </div>
      </div>
    </div>
  </nav>
</header>

<style>
  .toggle-mode {
    cursor: pointer;
  }

  .sun {
    border-radius: 50%;
    box-shadow:
      0 0 40px #ffa600,
      0 0 150px #ffff00,
      inset 0 0 10px #ffff00;
  }

  .moon {
    border-radius: 50%;
    box-shadow:
      0 0 40px #305050,
      0 0 150px #000000,
      inset 0 0 10px #000000;
  }
</style>
