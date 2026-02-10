<script>
  import { isLightModeActive, isGameActive } from "../store.js";
</script>

<footer>
  <div
    class={`kawaii-footer text-center p-3 floating ${
      $isLightModeActive ? "bg-light text-dark" : "bg-dark text-light"
    }`}
  >
    {$isGameActive ? "" : "💖 © 2024 Copyright: Jesse Sites 💖"}
  </div>
</footer>

<style>
  .kawaii-footer {
    background: linear-gradient(135deg, var(--pastel-purple), var(--pastel-blue)) !important;
    border-top: 3px solid var(--pastel-pink);
    box-shadow: 0 -4px 15px rgba(230, 179, 255, 0.3);
    font-family: var(--font-primary);
    font-weight: 600;
    margin-top: 2rem;
  }
</style>
