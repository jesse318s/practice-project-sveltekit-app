<script>
  import { isLightModeActive } from "../store.js";
  import "../styles/global.scss";

  const toggleLightMode = () => {
    isLightModeActive.update((value) => !value);
  };
</script>

<header id="home">
  <!-- Navbar -->
  <nav
    class={`navbar navbar-expand-lg ${
      $isLightModeActive
        ? "navbar-light bg-light fixed-top overflow-hidden"
        : "navbar-dark bg-dark fixed-top overflow-hidden"
    }`}
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand mx-1" href="#home">
          <h1 class="text_shadow">JS</h1>
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto font-weight-bold mx-1">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
      <!-- Right elements -->
      <div class="d-flex align-items-center text-center">
        <a
          class={`btn ${
            $isLightModeActive
              ? "btn-dark shadow-4-strong text-light"
              : "btn-light"
          } me-4`}
          href="https://www.linkedin.com/in/jesse-sites/"
        >
          <div class="font-weight-bold">My Resume</div>
        </a>
        <a
          class={`me-4 ${$isLightModeActive ? "text-dark" : "text-light"}`}
          href="https://github.com/jesse318s"
        >
          <i class="fab fa-github fa-2x text_shadow"></i>
          <aside class="font-weight-bold">GitHub</aside>
        </a>
        <!-- Light mode toggle -->
        <div
          class={`toggle_mode me-4 ${$isLightModeActive ? "link-dark" : "link-warning"}`}
          on:click={toggleLightMode}
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ") toggleLightMode();
          }}
          tabindex="0"
          role="button"
        >
          <i
            class={`fas fa-adjust fa-2x ${$isLightModeActive ? "moon" : "sun"}`}
          ></i>
          <aside class="font-weight-bold">Mode</aside>
        </div>
      </div>
      <!-- Light mode toggle -->
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</header>

<style lang="scss">
  .toggle_mode {
    cursor: pointer;
  }

  .sun {
    border-radius: 50%;
    box-shadow:
      0 0 40px orange,
      0 0 150px yellow,
      inset 0 0 10px yellow;
  }

  .moon {
    border-radius: 50%;
    box-shadow:
      0 0 40px darkslategrey,
      0 0 150px black,
      inset 0 0 10px black;
  }
</style>
