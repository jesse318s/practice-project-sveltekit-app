<script>
  import stages from "./../stages.json";
  import grids from "./grids.json";
  import relics from "./../relics.json";
  import { base } from "$app/paths";

  export let drachmas;
  export let chosenRelic;
  export let curGridId;

  const stage = stages.find(
    (stage) => stage.id === grids.find((grid) => grid.id === curGridId).stageId
  );
  const stageRelics = relics.filter((relic) => relic.stageId === stage.id);

  // Buys a relic from the relic store and sets it as the chosen relic
  const buyRelic = (relic) => {
    try {
      if (drachmas >= relic.price) {
        drachmas -= relic.price;
        localStorage.setItem("drachmas", drachmas);
        chosenRelic = relic;
        localStorage.setItem("chosenRelicId", relic.id);
        window.location.reload();

        return;
      }

      alert("Not enough drachmas to spend!");
    } catch (err) {
      console.error(err);
    }
  };
</script>

<div class="menu">
  <h2>Relic Store</h2>
  <p>Drachmas: {drachmas}</p>
  <div>
    {#each stageRelics as relic}
      <div class="menu-item">
        <img
          src={base + "/" + relic.img}
          width="46px"
          height="46px"
          alt={relic.name}
        />
        <h3>{relic.name}</h3>
        <p class="active">
          {#if relic.id === chosenRelic.id}Active{/if}
        </p>
        <p>{relic.description}</p>
        <p>Price: {relic.price} drachmas</p>
        {#if relic.id !== chosenRelic.id}<button
            on:click={() => buyRelic(relic)}>Buy</button
          >
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  img {
    margin-bottom: 10px;
  }

  .menu {
    text-align: center;
    margin-top: 20px;
  }

  .menu-item {
    border: 1px solid #cccccc;
    margin: 10px;
    padding: 10px;
  }
</style>
