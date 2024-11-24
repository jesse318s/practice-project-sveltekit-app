<script>
  import stages from "./../stages.json";
  import relics from "./../relics.json";
  import grids from "./grids.json";
  import { onMount, onDestroy } from "svelte";
  import { isGameActive, isPlayerTraveling } from "../../../store";
  import { goto } from "$app/navigation";
  import RelicStore from "./RelicStore.svelte";

  const gridSize = 5;
  let playerPos = { x: 2, y: 2 };
  let curGridId = 1;
  let gridName = stages[0].name;
  let relicStoreIsActive = false;
  let playerExperience = 0;
  let drachmas = 0;
  let chosenRelic = relics[0];

  // Moves the player based on the key pressed
  const handleKeydown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      movePlayer("up");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      movePlayer("down");
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      movePlayer("left");
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      movePlayer("right");
    }
  };

  // Returns the class of the cell based on its position
  const getCellClass = (colIndex, rowIndex, playerPos, curGridId) => {
    try {
      if (playerPos.x === colIndex && playerPos.y === rowIndex) return "player";

      const curGrid = grids.find((grid) => grid.id === curGridId);

      if (
        curGrid.rocks.find((rock) => rock.x === colIndex && rock.y === rowIndex)
      )
        return "rock";

      if (
        curGrid.exits.find((exit) => exit.x === colIndex && exit.y === rowIndex)
      )
        return "exit";

      return "";
    } catch (err) {
      console.error(err);
    }
  };

  // Exits the current grid and enters the destination grid
  const exitGrid = () => {
    const exit = grids
      .find((grids) => grids.id === curGridId)
      .exits.find((exit) => exit.x === playerPos.x && exit.y === playerPos.y);
    const exitStage = stages.find(
      (stage) =>
        stage.id === grids.find((grid) => grid.id === exit.destGridId).stageId
    );

    if (playerExperience < exitStage.expReq) {
      alert(
        "Not enough experience to use portal! (Requires " +
          exitStage.expReq +
          " experience)"
      );

      return;
    }

    if (exit) {
      curGridId = exit.destGridId;
      localStorage.setItem("curStageId", exitStage.id);
      gridName = exitStage.name;
      playerPos = exit.spawn;
    }
  };

  // Moves the player in the specified direction if possible
  const movePlayer = (direction) => {
    try {
      let newPosition = { ...playerPos };

      if (direction === "up") newPosition.y -= 1;

      if (direction === "down") newPosition.y += 1;

      if (direction === "left") newPosition.x -= 1;

      if (direction === "right") newPosition.x += 1;

      if (
        newPosition.x < 0 ||
        newPosition.x >= gridSize ||
        newPosition.y < 0 ||
        newPosition.y >= gridSize
      )
        return;

      const curGrid = grids.find((grid) => grid.id === curGridId);

      if (
        !curGrid.rocks.find(
          (rock) => rock.x === newPosition.x && rock.y === newPosition.y
        )
      )
        playerPos = newPosition;

      if (
        curGrid.exits.find(
          (exit) => exit.x === playerPos.x && exit.y === playerPos.y
        )
      )
        exitGrid();
    } catch (err) {
      console.error(err);
    }
  };

  // Activates the game, loads the player's data, and adds the movement event listener
  onMount(() => {
    isGameActive.set(true);
    isPlayerTraveling.set(true);

    if (localStorage.getItem("curStageId")) {
      const stage = stages.find(
        (stage) => stage.id === parseInt(localStorage.getItem("curStageId"))
      );

      curGridId = parseInt(grids.find((grid) => grid.stageId === stage.id).id);
      gridName = stage.name;
    }

    if (localStorage.getItem("playerExperience"))
      playerExperience = parseInt(localStorage.getItem("playerExperience"));

    if (localStorage.getItem("drachmas"))
      drachmas = parseInt(localStorage.getItem("drachmas"));

    if (localStorage.getItem("chosenRelicId"))
      chosenRelic = relics.find(
        (relic) => relic.id === parseInt(localStorage.getItem("chosenRelicId"))
      );

    if (typeof window !== "undefined")
      window.addEventListener("keydown", handleKeydown);
  });

  // Deactivates the game and removes the movement event listener
  onDestroy(() => {
    isGameActive.set(false);
    isPlayerTraveling.set(false);

    if (typeof window !== "undefined")
      window.removeEventListener("keydown", handleKeydown);
  });
</script>

<div class="game-container">
  {#if !relicStoreIsActive}
    <h2>{gridName}</h2>
    <div
      class="grid
    grid-bg-{curGridId}"
    >
      {#each Array(gridSize) as _, rowIndex}
        {#each Array(gridSize) as _, colIndex}
          <div
            class="cell {getCellClass(
              colIndex,
              rowIndex,
              playerPos,
              curGridId
            )}"
          ></div>
        {/each}
      {/each}
    </div>
    <div class="button-row">
      <button on:click={() => movePlayer("left")}>←</button>
      <div>
        <button on:click={() => movePlayer("up")}>↑</button>
        <button on:click={() => movePlayer("down")}>↓</button>
      </div>
      <button on:click={() => movePlayer("right")}>→</button>
    </div>
  {/if}
  <div class="button-row">
    <button on:click={() => (relicStoreIsActive = !relicStoreIsActive)}>
      {relicStoreIsActive ? "Close Relic Store" : "Relic Store"}</button
    >
    {#if !relicStoreIsActive}
      <button on:click={() => goto("/practice-project-sveltekit-app/game")}
        >Battle</button
      >
    {/if}
  </div>
  {#if relicStoreIsActive}
    <RelicStore {drachmas} {chosenRelic} {curGridId} />
  {/if}
</div>

<style>
  .game-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px 0px 20px 0px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(5, 50px);
    gap: 5px;
    padding: 20px;
    border: 3px solid #a8aaff;
    border-radius: 10px;
  }

  .cell {
    width: 50px;
    height: 50px;
  }

  .player {
    background-color: #a8aaff;
    border-radius: 50%;
    box-shadow:
      inset -3px -3px 10px #00000033,
      inset 3px 3px 10px #4e1fce;
  }

  .rock {
    background-color: #584b4b;
    border-radius: 33%;
    box-shadow:
      inset -5px -5px 10px #00000033,
      inset 5px 5px 10px #453d3d;
  }

  .exit {
    height: 40px;
    border-style: solid;
    border-color: #800080;
    border-radius: 50%;
    background: #000000;
    filter: blur(10px);
    animation: portal 2s infinite;
  }

  @keyframes portal {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }

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
