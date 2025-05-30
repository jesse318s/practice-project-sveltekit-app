<script>
  import stages from "./../stages.json";
  import relics from "./../relics.json";
  import stageGrids from "./stageGrids.json";
  import { onMount, onDestroy } from "svelte";
  import { isGameActive, isPlayerTraveling } from "../../../store";
  import WorldControls from "./WorldControls.svelte";
  import RelicStore from "./RelicStore.svelte";
  import WorldMap from "./WorldMap.svelte";

  const gridSize = 5;
  let playerPos = { x: 2, y: 2 };
  let curGridId = 1;
  let gridName = stages[0].name;
  let relicStoreIsActive = false;
  let worldMapIsActive = false;
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

      const curGrid = stageGrids.find((grid) => grid.id === curGridId);
      const rock = curGrid.rocks.find(
        (rock) => rock.x === colIndex && rock.y === rowIndex
      );

      if (rock?.type === "plain") return "rock-plain";

      if (rock?.type === "smooth") return "rock-smooth";

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
    const exit = stageGrids
      .find((grid) => grid.id === curGridId)
      .exits.find((exit) => exit.x === playerPos.x && exit.y === playerPos.y);
    const exitStage = stages.find(
      (stage) =>
        stage.id ===
        stageGrids.find((grid) => grid.id === exit.destGridId).stageId
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
      localStorage.setItem("gridId", curGridId);
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

      const curGrid = stageGrids.find((grid) => grid.id === curGridId);

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

    if (localStorage.getItem("curStageId"))
      gridName = stages.find(
        (stage) => stage.id === parseInt(localStorage.getItem("curStageId"))
      ).name;

    if (localStorage.getItem("gridId"))
      curGridId = parseInt(localStorage.getItem("gridId"));

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

<main class="game-container">
  {#if !relicStoreIsActive && !worldMapIsActive}
    <section>
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
              style="background: {getCellClass(
                colIndex,
                rowIndex,
                playerPos,
                curGridId
              ) === 'player'
                ? chosenRelic.style
                : ''}"
            ></div>
          {/each}
        {/each}
      </div>
    </section>
    <WorldControls
      {movePlayer}
      on:openStore={() => (relicStoreIsActive = true)}
      on:openMap={() => (worldMapIsActive = true)}
    />
  {/if}
  {#if relicStoreIsActive}
    <RelicStore
      {drachmas}
      {chosenRelic}
      {curGridId}
      on:close={() => (relicStoreIsActive = false)}
    />
  {/if}
  {#if worldMapIsActive}
    <WorldMap {curGridId} on:close={() => (worldMapIsActive = false)} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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

  .rock-plain {
    background-color: #584b4b;
    background-image: radial-gradient(
        circle at 50% 50%,
        #453d3d 10%,
        transparent 60%
      ),
      radial-gradient(circle at 20% 20%, #645858 5%, transparent 30%),
      radial-gradient(circle at 80% 80%, #3a3434 15%, transparent 40%),
      radial-gradient(circle at 30% 70%, #4d4343 8%, transparent 25%);
    background-size: 30px 30px;
    border-radius: 33%;
    box-shadow:
      inset -5px -5px 10px #00000033,
      inset 5px 5px 10px #453d3d;
  }

  .rock-smooth {
    background-color: #584b4b;
    background-image: radial-gradient(
        circle at 50% 50%,
        #453d3d 10%,
        transparent 60%
      ),
      radial-gradient(circle at 20% 20%, #645858 5%, transparent 30%),
      radial-gradient(circle at 80% 80%, #4d4343 8%, transparent 25%);
    background-size: 30px 30px;
    border-radius: 33%;
    box-shadow:
      inset -5px -5px 10px #00000033,
      inset 5px 5px 10px #453d3d;
  }
</style>
