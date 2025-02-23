<script>
  import { displayStats } from "../../lib/utils.js";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  export let battleEnemy;
  export let playerCreature;
  export let swapCreature;
  export let chosenRelic;
</script>

<section>
  <button
    on:click={() =>
      battleEnemy(playerCreature.attackName, playerCreature.attackType)}
    on:contextmenu={(e) => {
      e.preventDefault();
      battleEnemy(playerCreature.specialName, playerCreature.specialType);
    }}>Attack</button
  >
  <button
    on:click={() =>
      battleEnemy(playerCreature.specialName, playerCreature.specialType)}
    >Special</button
  >
  <button on:click={swapCreature}>Mimic Summon</button>
  <button on:click={() => displayStats(playerCreature, chosenRelic)}
    >View Stats</button
  >
  <button
    on:click={() => {
      goto(base + "/game/world");
    }}>Travel</button
  >
</section>
