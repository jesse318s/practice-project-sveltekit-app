<script>
  import stages from "./stages.json";
  import creatures from "./creatures.json";
  import relics from "./relics.json";
  import enemyCreatures from "./enemyCreatures.json";
  import { onMount, onDestroy } from "svelte";
  import { isGameActive } from "../../store.js";

  let playerExperience = 0;
  let drachmas = 0;
  let curStage = stages[0];
  let curPlayerCreatures = creatures.filter(
    (creature) => creature.stageId === curStage.id
  );
  let playerCreature = curPlayerCreatures[0];
  let chosenRelic = relics[0];
  let playerDataIsLoaded = false;
  let playerCreatureHP = playerCreature.hp + chosenRelic.hpMod;
  let playerCreatureMP = playerCreature.mp + chosenRelic.mpMod;
  let curEnemyCreatures = enemyCreatures.filter(
    (enemyCreature) => enemyCreature.stageId === curStage.id
  );
  let enemyCreature =
    curEnemyCreatures[Math.floor(Math.random() * curEnemyCreatures.length)];
  let enemyCreatureHP = enemyCreature.hp;
  let combatAlert = "";
  let counterRef = 0;
  let playerIsAttacking = false;
  let playerIsUsingSpecial = false;
  let enemyIsAttacking = false;
  let attackTimeout = null;
  let specialTimeout = null;
  let enemyAttackTimeout = null;
  let relicStoreIsActive = false;
  let stageMenuIsActive = false;

  // Increases the player creature's mp by the mp regen amount
  const regenMP = () => {
    if (
      playerCreatureMP !== playerCreature.mp + chosenRelic.mpMod &&
      playerCreatureMP + playerCreature.mpRegen + chosenRelic.mpRegenMod <=
        playerCreature.mp + chosenRelic.mpMod
    ) {
      playerCreatureMP =
        playerCreatureMP + playerCreature.mpRegen + chosenRelic.mpRegenMod;

      return;
    }

    playerCreatureMP = playerCreature.mp + chosenRelic.mpMod;
  };

  // Checks if the player creature dies or takes damage
  const dieOrTakeDamage = (playerCreatureDefense, criticalMultiplier) => {
    if (
      playerCreatureHP -
        (enemyCreature.attack - enemyCreature.attack * playerCreatureDefense) *
          criticalMultiplier <=
      0
    ) {
      combatAlert = "Defeat!";
      playerCreatureHP = 0;

      return;
    }

    playerCreatureHP =
      playerCreatureHP -
      (enemyCreature.attack - enemyCreature.attack * playerCreatureDefense) *
        criticalMultiplier;
  };

  // Checks the creature data and makes the enemy creature battle the player creature
  const receiveEnemyCounterAttack = (chancePlayer, moveName, moveType) => {
    try {
      const playerCreatureSpeed = playerCreature.speed + chosenRelic.speedMod;
      let playerCreatureDefense =
        (playerCreature.defense + chosenRelic.defenseMod) / 100;
      let enemyCreatureCritical = enemyCreature.critical / 100;
      let criticalMultiplier = 1;
      let chanceEnemy = false;

      if (enemyCreature.attackType === "Magic") playerCreatureDefense = 0;

      if (enemyCreature.speed < playerCreatureSpeed) {
        chanceEnemy = Math.random() >= 0.5;
      } else {
        chanceEnemy = Math.random() >= 0.8;
      }

      if (counterRef > 1 && !chanceEnemy && !chancePlayer) chanceEnemy = true;

      if (!chanceEnemy && chancePlayer) combatAlert = "Enemy was too slow!";

      if (!chanceEnemy && !chancePlayer) {
        playerCreatureMP = playerCreature.mp + chosenRelic.mpMod;
        counterRef += 1;
        battleEnemy(moveName, moveType);

        return;
      }

      if (moveName === playerCreature.attackName) regenMP();

      if (chanceEnemy && chancePlayer)
        combatAlert = "Both abilities succeeded.";

      if (chanceEnemy && !chancePlayer)
        combatAlert = "Your summon was too slow!";

      if (chanceEnemy) {
        if (Math.random() <= enemyCreatureCritical) criticalMultiplier = 1.5;

        if (enemyCreature.attackType === "Poison" && criticalMultiplier === 1)
          criticalMultiplier = 1.5;

        dieOrTakeDamage(playerCreatureDefense, criticalMultiplier);
        enemyIsAttacking = true;
        enemyAttackTimeout = setTimeout(() => (enemyIsAttacking = false), 500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Heals the player creature if it's using a lifesteal move
  const checkLifesteal = (
    playerCreatureSpecial,
    criticalMultiplier,
    chancePlayer,
    moveName,
    moveType
  ) => {
    if (moveType === "Lifesteal" && chancePlayer) {
      if (
        playerCreatureHP + playerCreatureSpecial * criticalMultiplier * 0.2 >
        playerCreature.hp + chosenRelic.hpMod
      ) {
        playerCreatureHP = playerCreature.hp + chosenRelic.hpMod;
      } else {
        playerCreatureHP =
          playerCreatureHP + playerCreatureSpecial * criticalMultiplier * 0.2;
      }
    }

    receiveEnemyCounterAttack(chancePlayer, moveName, moveType);
  };

  // Heals the player creature if it's using a healing move
  const checkHealPlayerCreature = (
    chancePlayer,
    playerCreatureSpecial,
    criticalMultiplier,
    moveName,
    moveType
  ) => {
    if (chancePlayer) {
      if (
        playerCreatureHP + playerCreatureSpecial * criticalMultiplier >
        playerCreature.hp + chosenRelic.hpMod
      ) {
        playerCreatureHP = playerCreature.hp + chosenRelic.hpMod;
      } else {
        playerCreatureHP =
          playerCreatureHP + playerCreatureSpecial * criticalMultiplier;
      }
    }

    receiveEnemyCounterAttack(chancePlayer, moveName, moveType);
  };

  // Decreases the player creature's mp and performs a special move
  const performSpecial = (
    chancePlayer,
    playerCreatureSpecial,
    playerCreatureSpecialCost,
    criticalMultiplier,
    enemyDefense,
    moveName,
    moveType
  ) => {
    playerCreatureMP = playerCreatureMP - playerCreatureSpecialCost;

    if (moveType !== "Heal") {
      if (
        enemyCreatureHP -
          (playerCreatureSpecial - playerCreatureSpecial * enemyDefense) *
            criticalMultiplier <=
          0 &&
        chancePlayer
      ) {
        enemyCreatureHP = 0;
        combatAlert = "Victory!";
        playerExperience += enemyCreature.reward * 2;
        drachmas += enemyCreature.reward;
        playerIsAttacking = true;
        attackTimeout = setTimeout(() => (playerIsAttacking = false), 500);
        playerIsUsingSpecial = true;
        specialTimeout = setTimeout(() => (playerIsUsingSpecial = false), 500);

        return;
      }

      if (chancePlayer) {
        enemyCreatureHP =
          enemyCreatureHP -
          (playerCreatureSpecial - playerCreatureSpecial * enemyDefense) *
            criticalMultiplier;
        playerIsAttacking = true;
        attackTimeout = setTimeout(() => (playerIsAttacking = false), 500);
        playerIsUsingSpecial = true;
        specialTimeout = setTimeout(() => (playerIsUsingSpecial = false), 500);
      }

      checkLifesteal(
        playerCreatureSpecial,
        criticalMultiplier,
        chancePlayer,
        moveName,
        moveType
      );

      return;
    }

    checkHealPlayerCreature(
      chancePlayer,
      playerCreatureSpecial,
      criticalMultiplier,
      moveName,
      moveType
    );
  };

  // Checks the creature data and makes the player creature battle the enemy creature
  const checkGameReset = () => {
    if (!(playerCreatureHP <= 0 || enemyCreatureHP <= 0)) return;

    playerCreatureHP = playerCreature.hp + chosenRelic.hpMod;
    playerCreatureMP = playerCreature.mp + chosenRelic.mpMod;
    enemyCreature =
      curEnemyCreatures[Math.floor(Math.random() * curEnemyCreatures.length)];
    document.documentElement.style.setProperty(
      "--enemy-creature-img-hurt",
      `url(${"/practice-project-sveltekit-app/" + enemyCreature.img.slice(0, -4) + "_hurt.png"})`
    );
    document.documentElement.style.setProperty(
      "--enemy-creature-img-attack",
      `url(${"/practice-project-sveltekit-app/" + enemyCreature.img.slice(0, -4) + "_attack.png"})`
    );
    enemyCreatureHP = enemyCreature.hp;
    combatAlert = "";
  };

  // Checks the creature data and battles the enemy creature accordingly
  const battleEnemy = (moveName, moveType) => {
    try {
      const playerCreatureAttack =
        playerCreature.attack + chosenRelic.attackMod;
      const playerCreatureSpeed = playerCreature.speed + chosenRelic.speedMod;
      const playerCreatureCritical =
        (playerCreature.critical + chosenRelic.criticalMod) / 100;
      let playerCreatureSpecial =
        playerCreature.special + chosenRelic.specialMod;
      let playerCreatureSpecialCost = playerCreature.specialCost;
      let enemyDefense = enemyCreature.defense / 100;
      let chancePlayer = false;
      let criticalMultiplier = 1;

      checkGameReset();

      if (moveType === "Magic") enemyDefense = 0;

      if (playerCreatureSpeed < enemyCreature.speed) {
        chancePlayer = Math.random() >= 0.5;
      } else {
        chancePlayer = Math.random() >= 0.8;
      }

      if (Math.random() <= playerCreatureCritical) criticalMultiplier = 1.5;

      if (moveType === "Poison" && criticalMultiplier === 1)
        criticalMultiplier = 1.5;

      if (moveName === playerCreature.attackName) {
        if (
          enemyCreatureHP -
            (playerCreatureAttack - playerCreatureAttack * enemyDefense) *
              criticalMultiplier <=
            0 &&
          chancePlayer
        ) {
          enemyCreatureHP = 0;
          combatAlert = "Victory!";
          playerExperience += enemyCreature.reward * 2;
          drachmas += enemyCreature.reward;
          playerIsAttacking = true;
          attackTimeout = setTimeout(() => (playerIsAttacking = false), 500);

          return;
        }

        if (chancePlayer) {
          enemyCreatureHP =
            enemyCreatureHP -
            (playerCreatureAttack - playerCreatureAttack * enemyDefense) *
              criticalMultiplier;
          playerIsAttacking = true;
          attackTimeout = setTimeout(() => (playerIsAttacking = false), 500);
        }

        receiveEnemyCounterAttack(chancePlayer, moveName, moveType);

        return;
      }

      if (playerCreatureMP >= playerCreatureSpecialCost) {
        performSpecial(
          chancePlayer,
          playerCreatureSpecial,
          playerCreatureSpecialCost,
          criticalMultiplier,
          enemyDefense,
          moveName,
          moveType
        );
      } else {
        combatAlert = "Not enough MP!";
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Swaps to the other player creature
  const swapCreature = () => {
    try {
      const targetCreature = enemyCreature;

      playerCreatureHP = 0;
      checkGameReset();
      playerCreature = creatures.find(
        (creature) => creature.id === targetCreature.id
      );
      playerCreatureHP = playerCreature.hp + chosenRelic.hpMod;
      playerCreatureMP = playerCreature.mp + chosenRelic.mpMod;
      document.documentElement.style.setProperty(
        "--player-creature-img-attack",
        `url(${"/practice-project-sveltekit-app/" + playerCreature.img.slice(0, -4) + "_attack.png"})`
      );
      document.documentElement.style.setProperty(
        "--player-creature-img-hurt",
        `url(${"/practice-project-sveltekit-app/" + playerCreature.img.slice(0, -4) + "_hurt.png"})`
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Displays the current player creature's stats
  const displayStats = () => {
    try {
      const playerStats = [
        { label: "Name", value: playerCreature.name },
        { label: "HP", value: playerCreature.hp + chosenRelic.hpMod },
        { label: "Speed", value: playerCreature.speed + chosenRelic.speedMod },
        {
          label: "Defense",
          value: playerCreature.defense + chosenRelic.defenseMod,
        },
        {
          label: "Critical",
          value: playerCreature.critical + chosenRelic.criticalMod,
        },
        { label: "MP", value: playerCreature.mp + chosenRelic.mpMod },
        {
          label: "MP Regen",
          value: playerCreature.mpRegen + chosenRelic.mpRegenMod,
        },
        { label: "\nAttack Name", value: playerCreature.attackName },
        {
          label: "Attack",
          value: playerCreature.attack + chosenRelic.attackMod,
        },
        { label: "Attack Type", value: playerCreature.attackType },
        { label: "\nSpecial Name", value: playerCreature.specialName },
        {
          label: "Special",
          value: playerCreature.special + chosenRelic.specialMod,
        },
        { label: "Special Cost", value: playerCreature.specialCost },
        { label: "Special Type", value: playerCreature.specialType },
      ];
      const formattedStats = playerStats
        .map((stat) => `${stat.label}: ${stat.value}`)
        .join("\n");

      alert(formattedStats);
    } catch (err) {
      console.error(err);
    }
  };

  // Saves the player's data to local storage
  const savePlayerData = () => {
    if (!playerDataIsLoaded) return;

    localStorage.setItem("drachmas", drachmas);
    localStorage.setItem("playerExperience", playerExperience);
    localStorage.setItem("chosenRelic", JSON.stringify(chosenRelic));
    localStorage.setItem("curStage", JSON.stringify(curStage));
  };

  // Buys a relic from the relic store and sets it as the chosen relic
  const buyRelic = (relic) => {
    if (drachmas >= relic.price) {
      drachmas -= relic.price;
      chosenRelic = relic;
      window.location.reload();

      return;
    }

    alert("Not enough drachmas!");
  };

  // Switches the current stage to the selected stage if the player has enough experience
  const switchStage = (stage) => {
    if (playerExperience >= stage.expReq) {
      curStage = stage;
      window.location.reload();

      return;
    }

    alert("Not enough experience!");
  };

  // Activates the game and loads the player's data from local storage
  onMount(() => {
    try {
      const savedDrachmas = localStorage.getItem("drachmas");
      const savedPlayerExperience = localStorage.getItem("playerExperience");
      const savedChosenRelic = localStorage.getItem("chosenRelic");
      const savedCurStage = localStorage.getItem("curStage");

      isGameActive.set(true);

      if (savedDrachmas) drachmas = parseInt(savedDrachmas);

      if (savedPlayerExperience)
        playerExperience = parseInt(savedPlayerExperience);

      if (savedChosenRelic) chosenRelic = JSON.parse(savedChosenRelic);

      if (savedCurStage) curStage = JSON.parse(savedCurStage);

      curPlayerCreatures = creatures.filter(
        (creature) => creature.stageId === curStage.id
      );
      playerCreature = curPlayerCreatures[0];
      playerCreatureHP = playerCreature.hp + chosenRelic.hpMod;
      playerCreatureMP = playerCreature.mp + chosenRelic.mpMod;
      document.documentElement.style.setProperty(
        "--player-creature-img-attack",
        `url(${"/practice-project-sveltekit-app/" + playerCreature.img.slice(0, -4) + "_attack.png"})`
      );
      document.documentElement.style.setProperty(
        "--player-creature-img-hurt",
        `url(${"/practice-project-sveltekit-app/" + playerCreature.img.slice(0, -4) + "_hurt.png"})`
      );
      curEnemyCreatures = enemyCreatures.filter(
        (enemyCreature) => enemyCreature.stageId === curStage.id
      );
      enemyCreature =
        curEnemyCreatures[Math.floor(Math.random() * curEnemyCreatures.length)];
      enemyCreatureHP = enemyCreature.hp;
      document.documentElement.style.setProperty(
        "--enemy-creature-img-hurt",
        `url(${"/practice-project-sveltekit-app/" + enemyCreature.img.slice(0, -4) + "_hurt.png"})`
      );
      document.documentElement.style.setProperty(
        "--enemy-creature-img-attack",
        `url(${"/practice-project-sveltekit-app/" + enemyCreature.img.slice(0, -4) + "_attack.png"})`
      );
      playerDataIsLoaded = true;
    } catch (err) {
      console.error(err);
    }
  });

  // Deactivates the game and clears the attack and special timeouts
  onDestroy(() => {
    isGameActive.set(false);
    clearTimeout(attackTimeout);
    clearTimeout(specialTimeout);
    clearTimeout(enemyAttackTimeout);
  });

  $: {
    drachmas, playerExperience, chosenRelic, curStage;
    savePlayerData();
  }
</script>

<div class="game-container">
  {#if !relicStoreIsActive && !stageMenuIsActive}
    <h2>Omega Summoners</h2>
    <div class="stats">
      <div>Player HP: {playerCreatureHP}</div>
      <div>Player MP: {playerCreatureMP}</div>
      <div>Enemy HP: {enemyCreatureHP}</div>
    </div>
    <div class="creatures">
      <img
        class:attack={playerIsAttacking}
        class:hurt={enemyIsAttacking}
        src={playerCreature.img}
        width="128px"
        height="128px"
        alt={playerCreature.name}
      />
      <div class="special-effect-container">
        <div class={playerIsUsingSpecial ? playerCreature.specialEffect : ""} />
      </div>
      <img
        class="enemy-creature"
        class:enemy-attack={enemyIsAttacking}
        class:enemy-hurt={playerIsAttacking}
        src={enemyCreature.img}
        width="128px"
        height="128px"
        alt={enemyCreature.name}
      />
    </div>
    <button
      on:click={() =>
        battleEnemy(playerCreature.attackName, playerCreature.attackType)}
      >Attack</button
    >
    <button
      on:click={() =>
        battleEnemy(playerCreature.specialName, playerCreature.specialType)}
      >Special Attack</button
    >
    <div class="combat-alert">{combatAlert}</div>
    <div class="experience">Experience: {playerExperience}</div>
    <div class="drachmas">Drachmas: {drachmas}</div>
    <button on:click={() => swapCreature()}>Swap Summon</button>
    <button on:click={() => displayStats()}>View Stats</button>
  {/if}
  {#if !stageMenuIsActive}
    <button on:click={() => (relicStoreIsActive = !relicStoreIsActive)}>
      {relicStoreIsActive ? "Close Relic Store" : "Open Relic Store"}</button
    >
  {/if}
  {#if !relicStoreIsActive}
    <button on:click={() => (stageMenuIsActive = !stageMenuIsActive)}>
      {stageMenuIsActive ? "Close Stage Menu" : "Open Stage Menu"}</button
    >
  {/if}
  {#if relicStoreIsActive}
    <div class="menu">
      <h2>Relic Store</h2>
      <p>Drachmas: {drachmas}</p>
      <div>
        {#each relics as relic}
          <div class="menu-item">
            <img src={relic.img} width="46px" height="46px" alt={relic.name} />
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
  {/if}
  {#if stageMenuIsActive}
    <div class="menu">
      <h2>Stage Menu</h2>
      <p>Experience: {playerExperience}</p>
      <div>
        {#each stages as stage}
          <div class="menu-item">
            <h3>{stage.name}</h3>
            <p class="active">
              {#if stage.id === curStage.id}Active{/if}
            </p>
            <p>{stage.description}</p>
            <p>Experience requirement: {stage.expReq}</p>
            {#if stage.id !== curStage.id}<button
                on:click={() => switchStage(stage)}
              >
                Battle</button
              >
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  :root {
    background-color: #000000;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
  }

  .game-container {
    padding: 100px 0px 20px 0px;
    text-align: center;
  }

  .stats {
    margin: 20px;
  }

  .creatures {
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }

  .special-effect-container {
    height: 0;
  }

  .enemy-creature {
    transform: scaleX(-1);
  }

  .combat-alert {
    margin: 20px;
    color: #a8aaff;
  }

  .experience,
  .drachmas {
    margin-bottom: 20px;
  }

  .menu {
    margin-top: 20px;
  }

  .menu-item {
    border: 1px solid #cccccc;
    margin: 10px;
    padding: 10px;

    img {
      margin-bottom: 10px;
    }
  }

  .active {
    color: #a8aaff;
  }

  .attack {
    animation: attack-animation 0.5s;

    @keyframes attack-animation {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(30px);
        content: var(--player-creature-img-attack);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  .hurt {
    animation: hurt-animation 0.5s;

    @keyframes hurt-animation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
        content: var(--player-creature-img-hurt);
      }
      100% {
        opacity: 1;
      }
    }
  }

  .enemy-attack {
    animation: enemy-attack-animation 0.5s;

    @keyframes enemy-attack-animation {
      0% {
        transform: translateX(0) scaleX(-1);
      }
      50% {
        transform: translateX(-30px) scaleX(-1);
        content: var(--enemy-creature-img-attack);
      }
      100% {
        transform: translateX(0) scaleX(-1);
      }
    }
  }

  .enemy-hurt {
    animation: enemy-hurt-animation 0.5s;

    @keyframes enemy-hurt-animation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
        content: var(--enemy-creature-img-hurt);
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
