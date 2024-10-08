<script>
  import { isLightModeActive } from "../store.js";
</script>

<footer>
  <div
    class={$isLightModeActive
      ? "bg-light bg-gradient text-center text-dark p-3"
      : "bg-dark bg-gradient text-center text-light p-3"}
  >
    © 2024 Copyright: Jesse Sites
  </div>
</footer>
