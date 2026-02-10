<script>
  import { displayStats } from "../../lib/utils.js";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  export let battleEnemy;
  export let playerCreature;
  export let swapCreature;
  export let chosenRelic;
</script>

<section class="kawaii-controls">
  <button
    class="kawaii-button"
    on:click={() =>
      battleEnemy(playerCreature.attackName, playerCreature.attackType)}
    on:contextmenu={(e) => {
      e.preventDefault();
      battleEnemy(playerCreature.specialName, playerCreature.specialType);
    }}>⚔️ Attack</button
  >
  <button
    class="kawaii-button"
    on:click={() =>
      battleEnemy(playerCreature.specialName, playerCreature.specialType)}
    >✨ Special</button
  >
  <button class="kawaii-button" on:click={swapCreature}>🎭 Mimic Summon</button>
  <button class="kawaii-button" on:click={() => displayStats(playerCreature, chosenRelic)}
    >📊 View Stats</button
  >
  <button
    class="kawaii-button"
    on:click={() => {
      goto(base + "/game/world");
    }}>🌍 Travel</button
  >
</section>

<style>
  .kawaii-controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin: 2rem 0;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-cute);
    border: 2px solid var(--pastel-purple);
    box-shadow: var(--shadow-soft);
  }
  
  .kawaii-button {
    min-width: 140px;
    padding: 12px 20px !important;
    font-size: 0.95rem;
    background: linear-gradient(45deg, var(--pastel-pink), var(--pastel-purple)) !important;
    
    &:hover {
      transform: translateY(-3px) scale(1.08) !important;
      box-shadow: 0 10px 25px rgba(255, 179, 209, 0.5) !important;
    }
    
    &:active {
      transform: translateY(-1px) scale(1.03) !important;
    }
  }
  
  @media (max-width: 768px) {
    .kawaii-controls {
      gap: 10px;
      padding: 1rem;
    }
    
    .kawaii-button {
      min-width: 120px;
      font-size: 0.85rem;
      padding: 10px 16px !important;
    }
  }
</style>
