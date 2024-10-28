<script>
  import { isLightModeActive } from "../store.js";

  const toggleLightMode = () => {
    isLightModeActive.update((value) => !value);
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter" || event.key === " ") toggleLightMode();
  };
</script>

<header id="home">
  <!-- Navbar -->
  <nav
    class={`navbar navbar-expand-lg fixed-top overflow-hidden ${
      $isLightModeActive ? "navbar-light bg-light" : "navbar-dark bg-dark"
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
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand mx-1" href="#home">
          <h1 class="text-shadow">JS</h1>
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
          class="btn btn-primary me-4"
          href="https://www.linkedin.com/in/jesse-sites/"
        >
          <div class="font-weight-bold">My Resume</div>
        </a>
        <!-- Light mode toggle -->
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
      <!-- Light mode toggle -->
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</header>

<style>
  .toggle-mode {
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
