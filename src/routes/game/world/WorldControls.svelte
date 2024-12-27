<script>
  import { createEventDispatcher } from "svelte";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  export let movePlayer;

  const dispatch = createEventDispatcher();
</script>

<section>
  <div class="button-row">
    <button on:click={() => movePlayer("left")}>←</button>
    <div>
      <button on:click={() => movePlayer("up")}>↑</button>
      <button on:click={() => movePlayer("down")}>↓</button>
    </div>
    <button on:click={() => movePlayer("right")}>→</button>
  </div>
  <div class="button-row">
    <button on:click={() => dispatch("openStore")}>Relic Store</button>
    <button on:click={() => dispatch("openMap")}>World Map</button>
    <button on:click={() => goto(base + "/game")}>Battle</button>
  </div>
</section>

<style>
  .button-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-row div {
    display: flex;
    flex-direction: column;
  }
</style>
