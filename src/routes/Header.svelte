<script>
  import {
    isLightModeActive,
    isGameActive,
    isPlayerTraveling,
  } from "../store.js";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  const toggleLightMode = () => {
    isLightModeActive.update((value) => !value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") toggleLightMode();
  };
</script>

<header id="home">
  <nav
    class={`navbar navbar-expand-lg fixed-top overflow-hidden kawaii-nav ${
      $isLightModeActive ? "navbar-light" : "navbar-dark"
    }`}
  >
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler kawaii-button"
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
        {#if !$isGameActive}
          <a class="navbar-brand mx-1 kawaii-brand" href="#home">
            <h1 class="kawaii-title">🌸 JS 🌸</h1>
          </a>
        {:else}
          <a class="navbar-brand mx-1 kawaii-brand" href={base + "/game"}>
            <h1 class="kawaii-title">🎮 Omega Summoners 🎮</h1>
          </a>
        {/if}
        <ul class="navbar-nav me-auto font-weight-bold mx-1">
          <li class="nav-item">
            <button
              class="nav-link kawaii-nav-link"
              on:click={() => {
                goto(base);
              }}>🏠 Home</button
            >
          </li>
          {#if !$isGameActive}
            <li class="nav-item">
              <button class="nav-link kawaii-nav-link" on:click={() => goto(base + "#skills")}
                >⭐ Skills</button
              >
            </li>
            <li class="nav-item">
              <button class="nav-link kawaii-nav-link" on:click={() => goto(base + "#projects")}
                >🎨 Projects</button
              >
            </li>
            <li class="nav-item">
              <button class="nav-link kawaii-nav-link" on:click={() => goto(base + "#about")}
                >💖 About</button
              >
            </li>
            <li class="nav-item">
              <button class="nav-link kawaii-nav-link" on:click={() => goto(base + "#contact")}
                >💌 Contact</button
              >
            </li>
          {/if}
          {#if $isGameActive && !$isPlayerTraveling}
            <li class="nav-item">
              <button
                class="nav-link kawaii-nav-link"
                on:click={() => goto(base + "/game/world")}>🌍 Travel</button
              >
            </li>
          {/if}
          {#if $isPlayerTraveling}
            <li class="nav-item">
              <button class="nav-link kawaii-nav-link" on:click={() => goto(base + "/game")}
                >⚔️ Battle</button
              >
            </li>
          {/if}
        </ul>
      </div>
      <!-- Collapsible wrapper -->
      <div class="d-flex align-items-center text-center">
        {#if !$isGameActive}
          <button
            class="kawaii-button me-4"
            on:click={() => goto(base + "/game")}>🎮 Game</button
          >
          <a
            class="kawaii-button me-4"
            href="https://www.linkedin.com/in/jesse-sites/"
          >
            📄 Resume
          </a>
        {/if}
        <div
          class={`toggle-mode me-4 kawaii-toggle ${$isLightModeActive ? "moon" : "sun"}`}
          on:click={toggleLightMode}
          on:keydown={handleKeydown}
          tabindex="0"
          role="button"
          aria-label="Toggle light mode"
        >
          <i
            class={`fas fa-adjust fa-2x ${$isLightModeActive ? "moon" : "sun"}`}
          ></i>
          <aside class="font-weight-bold">✨ Mode</aside>
        </div>
      </div>
    </div>
  </nav>
</header>

<style>
  .kawaii-nav {
    background: linear-gradient(135deg, var(--pastel-pink), var(--pastel-purple)) !important;
    border-bottom: 3px solid var(--pastel-blue);
    box-shadow: var(--shadow-soft);
    backdrop-filter: blur(10px);
  }
  
  .kawaii-brand {
    text-decoration: none;
  }
  
  .kawaii-brand h1 {
    margin: 0;
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  }
  
  .kawaii-nav-link {
    color: white !important;
    font-family: var(--font-primary);
    font-weight: 600;
    padding: 8px 16px !important;
    margin: 0 5px;
    border-radius: 15px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid transparent;
  }
  
  .kawaii-nav-link:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    border-color: var(--pastel-blue);
  }
  
  .kawaii-toggle {
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    border: 2px solid var(--pastel-blue);
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 80px;
    justify-content: center;
  }
  
  .kawaii-toggle:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.3);
  }
  
  .kawaii-toggle aside {
    font-family: var(--font-primary);
    font-size: 0.8rem;
    white-space: nowrap;
  }

  .sun {
    border-radius: 50%;
    box-shadow:
      0 0 20px var(--pastel-yellow),
      0 0 40px var(--pastel-orange),
      inset 0 0 10px var(--pastel-yellow);
    color: var(--pastel-yellow) !important;
  }

  .moon {
    border-radius: 50%;
    box-shadow:
      0 0 20px var(--pastel-purple),
      0 0 40px var(--pastel-blue),
      inset 0 0 10px var(--pastel-purple);
    color: var(--pastel-purple) !important;
  }
  
  .navbar-toggler {
    border: 2px solid var(--pastel-blue) !important;
    background: rgba(255, 255, 255, 0.2) !important;
  }
  
  .navbar-toggler:hover {
    background: rgba(255, 255, 255, 0.3) !important;
  }
</style>
