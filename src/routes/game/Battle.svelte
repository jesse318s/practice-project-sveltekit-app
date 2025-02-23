<script>
  import { base } from "$app/paths";

  export let stageId;
  export let playerState;
  export let enemyState;
</script>

<section class="battle-container {`battle-bg-${stageId}`}">
  <div class="battlefield">
    <div class="creatures-container">
      <div class="creature player-creature">
        <img
          class:attack={playerState.isAttacking}
          class:hurt={enemyState.isAttacking}
          class:aura={!playerState.isUsingSpecial}
          class:player-using-special={playerState.isUsingSpecial}
          src={base + "/game/" + playerState.creature.img}
          width="128px"
          height="128px"
          alt={playerState.creature.name}
        />
        <div class="shadow"></div>
        <div
          class={playerState.isUsingSpecial
            ? playerState.creature.specialEffect
            : ""}
        ></div>
      </div>
      <div class="creature enemy-creature">
        <img
          class:enemy-attack={enemyState.isAttacking}
          class:enemy-hurt={playerState.isAttacking}
          class:enemy-spawning={enemyState.isSpawning}
          src={base + "/game/" + enemyState.creature.img}
          width="128px"
          height="128px"
          alt={enemyState.creature.name}
        />
        <div class="shadow"></div>
        <div class="enemy-spawn-container">
          <div class={enemyState.isSpawning ? "enemy-spawn" : ""}></div>
        </div>
      </div>
    </div>
    <div class="floor"></div>
  </div>
</section>

<style>
  .battle-container {
    perspective: 1200px;
    perspective-origin: 50% -50%;
    margin: 40px auto;
    overflow: hidden;
    border-top: 1px solid #a8aaff;
    border-bottom: 1px solid #a8aaff;
  }

  .battlefield {
    transform-style: preserve-3d;
    position: relative;
    height: 220px;
    transform: rotateX(15deg);
  }

  .creatures-container {
    transform-style: preserve-3d;
    perspective: 1200px;
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
    perspective: 1200px;
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
    transform: rotateX(85deg) translateZ(-100px);
  }

  .shadow {
    position: absolute;
    top: 100px;
    left: 10%;
    width: 80%;
    height: 10px;
    background: #0000004d;
    border-radius: 50%;
    transform: rotateX(50deg);
  }

  .enemy-spawn-container {
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
</style>
