<script>
  import stages from "./stages.json";
  import creatures from "./creatures.json";
  import relics from "./relics.json";
  import enemyCreatures from "./enemyCreatures.json";
  import { onMount, onDestroy } from "svelte";
  import { isGameActive } from "../../store.js";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";

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
  let enemyIsSpawning = false;
  let attackTimeout = null;
  let specialTimeout = null;
  let enemyAttackTimeout = null;
  let enemySpawnTimeout = null;

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
    enemyIsSpawning = true;
    enemySpawnTimeout = setTimeout(() => (enemyIsSpawning = false), 500);
    enemyCreature =
      curEnemyCreatures[Math.floor(Math.random() * curEnemyCreatures.length)];
    document.documentElement.style.setProperty(
      "--enemy-creature-img-hurt",
      `url(${base + "/game/" + enemyCreature.img.slice(0, -4) + "_hurt.png"})`
    );
    document.documentElement.style.setProperty(
      "--enemy-creature-img-attack",
      `url(${base + "/game/" + enemyCreature.img.slice(0, -4) + "_attack.png"})`
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

      if (enemyIsSpawning) return;

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
        `url(${base + "/game/" + playerCreature.img.slice(0, -4) + "_attack.png"})`
      );
      document.documentElement.style.setProperty(
        "--player-creature-img-hurt",
        `url(${base + "/game/" + playerCreature.img.slice(0, -4) + "_hurt.png"})`
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
    localStorage.setItem("chosenRelicId", chosenRelic.id);
  };

  // Activates the game and loads the player's data from local storage
  onMount(() => {
    try {
      const savedDrachmas = localStorage.getItem("drachmas");
      const savedPlayerExperience = localStorage.getItem("playerExperience");
      const savedChosenRelicId = localStorage.getItem("chosenRelicId");
      const savedCurStageId = localStorage.getItem("curStageId");

      isGameActive.set(true);

      if (savedDrachmas) drachmas = parseInt(savedDrachmas);

      if (savedPlayerExperience)
        playerExperience = parseInt(savedPlayerExperience);

      if (savedChosenRelicId)
        chosenRelic = relics.find(
          (relic) => relic.id === parseInt(savedChosenRelicId)
        );

      if (savedCurStageId)
        curStage = stages.find(
          (stage) => stage.id === parseInt(savedCurStageId)
        );

      curPlayerCreatures = creatures.filter(
        (creature) => creature.stageId === curStage.id
      );
      playerCreature = curPlayerCreatures[0];
      playerCreatureHP = playerCreature.hp + chosenRelic.hpMod;
      playerCreatureMP = playerCreature.mp + chosenRelic.mpMod;
      document.documentElement.style.setProperty(
        "--player-creature-img-attack",
        `url(${base + "/game/" + playerCreature.img.slice(0, -4) + "_attack.png"})`
      );
      document.documentElement.style.setProperty(
        "--player-creature-img-hurt",
        `url(${base + "/game/" + playerCreature.img.slice(0, -4) + "_hurt.png"})`
      );
      curEnemyCreatures = enemyCreatures.filter(
        (enemyCreature) => enemyCreature.stageId === curStage.id
      );
      enemyCreature =
        curEnemyCreatures[Math.floor(Math.random() * curEnemyCreatures.length)];
      enemyCreatureHP = enemyCreature.hp;
      document.documentElement.style.setProperty(
        "--enemy-creature-img-hurt",
        `url(${base + "/game/" + enemyCreature.img.slice(0, -4) + "_hurt.png"})`
      );
      document.documentElement.style.setProperty(
        "--enemy-creature-img-attack",
        `url(${base + "/game/" + enemyCreature.img.slice(0, -4) + "_attack.png"})`
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
    clearTimeout(enemySpawnTimeout);
  });

  $: {
    drachmas, playerExperience, chosenRelic;
    savePlayerData();
  }
</script>

<div class="game-container">
  <h2>{curStage.name}</h2>
  <div class="stats">
    <div>Player HP: {playerCreatureHP}/{playerCreature.hp}</div>
    <div>Player MP: {playerCreatureMP}/{playerCreature.mp}</div>
    <div>Enemy HP: {enemyCreatureHP}/{enemyCreature.hp}</div>
  </div>
  <div class="battle-container">
    <div class="battlefield">
      <div class="creatures-container">
        <div class="creature player-creature">
          <img
            class:attack={playerIsAttacking}
            class:hurt={enemyIsAttacking}
            class:aura={!playerIsUsingSpecial}
            class:player-using-special={playerIsUsingSpecial}
            src={base + "/game/" + playerCreature.img}
            width="128px"
            height="128px"
            alt={playerCreature.name}
          />
          <div class="shadow"></div>
          <div
            class={playerIsUsingSpecial ? playerCreature.specialEffect : ""}
          />
        </div>
        <div class="creature enemy-creature">
          <img
            class:enemy-attack={enemyIsAttacking}
            class:enemy-hurt={playerIsAttacking}
            class:enemy-spawning={enemyIsSpawning}
            src={base + "/game/" + enemyCreature.img}
            width="128px"
            height="128px"
            alt={enemyCreature.name}
          />
          <div class="shadow"></div>
          <div class="enemy-spawn-container">
            <div class={enemyIsSpawning ? "enemy-spawn" : ""} />
          </div>
        </div>
      </div>
      <div class="floor"></div>
    </div>
  </div>
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
  <div class="combat-alert">{combatAlert}</div>
  <div class="experience">Experience: {playerExperience}</div>
  <div class="drachmas">Drachmas: {drachmas}</div>
  <button on:click={swapCreature}>Mimic Summon</button>
  <button on:click={displayStats}>View Stats</button>
  <button
    on:click={() => {
      goto(base + "/game/world");
    }}>Travel</button
  >
</div>

<style>
  :root {
    --battle-perspective: 1200px;
  }

  button {
    background-color: #a8aaff1a;
    color: #fff;
    border: 2px solid #a8aaff;
  }

  .game-container {
    padding: 100px 0px 20px 0px;
    text-align: center;
    background: linear-gradient(to bottom, #1a1a2e, #16213e);
    color: #fff;
  }

  .stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px;
  }

  .battle-container {
    perspective: var(--battle-perspective);
    perspective-origin: 50% -50%;
    margin: 40px auto;
    overflow: hidden;
  }

  .battlefield {
    transform-style: preserve-3d;
    position: relative;
    height: 220px;
    transform: rotateX(15deg);
  }

  .creatures-container {
    transform-style: preserve-3d;
    perspective: var(--battle-perspective);
    position: relative;
    width: 100%;
    height: 100%;
  }

  .creature {
    position: absolute;
  }

  .player-creature {
    top: 40%;
    left: calc(50% - 150px);
    transform: translateZ(80px);
  }

  .player-creature img.attack {
    content: var(--player-creature-img-attack);
  }

  .player-creature img.hurt {
    content: var(--player-creature-img-hurt);
  }

  .player-creature img.aura {
    filter: drop-shadow(0 0 3px #a8aaff);
  }

  [class*="special-effect"] {
    position: absolute;
    transform: translateZ(80px);
    transform-style: preserve-3d;
    perspective: var(--battle-perspective);
  }

  .enemy-creature {
    top: 40%;
    right: calc(50% - 150px);
    transform: translateZ(80px);
  }

  .enemy-creature img {
    transform: scaleX(-1);
  }

  .enemy-creature img.enemy-attack {
    content: var(--enemy-creature-img-attack);
  }

  .enemy-creature img.enemy-hurt {
    content: var(--enemy-creature-img-hurt);
  }

  .floor {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 300px;
    background: linear-gradient(#a8aaff33, #a8aaff1a 30%, transparent);
    transform: rotateX(60deg) translateZ(-100px);
  }

  .shadow {
    position: absolute;
    top: 100px;
    left: 10%;
    width: 80%;
    height: 10px;
    background: #0000004d;
    border-radius: 50%;
    transform: rotateX(60deg);
  }

  .enemy-spawn-container {
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .combat-alert {
    margin: 20px;
    color: #a8aaff;
  }

  .experience,
  .drachmas {
    margin-bottom: 20px;
  }
</style>
