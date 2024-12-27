<script>
  import { createEventDispatcher } from "svelte";
  import stages from "./../stages.json";
  import stageGrids from "./stageGrids.json";

  export let curGridId;

  const dispatch = createEventDispatcher();
  const curStage = stages.find(
    (stage) =>
      stage.id === stageGrids.find((grid) => grid.id === curGridId).stageId
  );
  let rows = Math.max(...stages.map((s) => s.row));
</script>

<section>
  <button on:click={() => dispatch("close")}>Travel</button>
  <h2>World Map</h2>
  <div class="world-map" style="grid-template-rows: repeat({rows}, 1fr);">
    {#each stages as stage}
      <div
        class="stage"
        class:current={stage.id === curStage.id}
        style="grid-column: {stage.col}; grid-row: {stage.row};"
      >
        <h4>{stage.name}</h4>
        {#if stage.id === curStage.id}
          <p>Current Stage</p>
        {/if}
        <p>
          Exp. Requirement: {stage.expReq}
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
  h2 {
    margin: 20px;
  }

  .world-map {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    padding: 5px;
    margin: auto;
    color: #000000;
    background: linear-gradient(45deg, #c1ab8a, #af9867);
    border: 2px solid #a67b5b;
    border-radius: 15px;
    box-shadow: inset 0 0 5px #00000080;
  }

  .stage {
    padding: 10px;
    text-align: center;
    border: 2px solid #d3b878;
    border-radius: 8px;
    background: linear-gradient(45deg, #d4bc95, #d1c19b);
  }

  .stage h4 {
    margin-bottom: 10px;
  }

  .stage.current {
    border: 2px solid #a8aaff;
  }

  @media (max-width: 600px) {
    .stage h4 {
      font-size: 14px;
    }

    .stage p {
      font-size: 12px;
    }
  }
</style>
