<script>
  import { isLightModeActive } from "../store.js";
</script>

<footer>
  <div
    class={`bg-gradient text-center p-3 ${
      $isLightModeActive ? "bg-light text-dark" : "bg-dark text-light"
    }`}
  >
    © 2024 Copyright: Jesse Sites
  </div>
</footer>
