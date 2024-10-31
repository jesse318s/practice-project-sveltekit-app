<script>
  import { isLightModeActive } from "../store.js";
</script>

<section
  style="background: url(landing_img.webp); background-size: cover; height: 100vh; width: 100%;"
>
  <p class="popout">
    <span>J</span>
    <span>E</span>
    <span>S</span>
    <span>S</span>
    <span>E&nbsp;</span>
    <span>S</span>
    <span>I</span>
    <span>T</span>
    <span>E</span>
    <span>S&nbsp;</span>
    <span>-</span>
    <br />
    <span>P</span>
    <span>R</span>
    <span>O</span>
    <span>G</span>
    <span>R</span>
    <span>A</span>
    <span>M</span>
    <span>M</span>
    <span>E</span>
    <span>R</span>
  </p>
  <div class="d-flex justify-content-center">
    <a
      href="#skills"
      class={`btn btn-outline-* btn-lg blink ${
        $isLightModeActive ? "btn-light" : "btn-dark"
      }`}
    >
      <h2 class={$isLightModeActive ? "" : "text-shadow"}>Skills</h2>
      <i class="fas fa-angle-down fa-2x"></i>
    </a>
  </div>
</section>

<style lang="scss">
  .popout {
    $t: 1s;
    $d: 0.08em;
    $n: 3;
    $e: cubic-bezier(0.86, 0, 0.07, 1);
    $front: lightblue;
    $back: black;

    font-family: "Roboto Draft";
    font-weight: bold;
    font-size: 80px;
    padding: 80px;
    padding-top: 250px;
    margin: auto;
    width: 50%;
    white-space: nowrap;
    position: relative;
    right: 50px;

    @keyframes ani {
      0% {
        transform: translate3d(0, 0, 0);
        text-shadow: 0em 0em 0 $back;
        color: $front;
      }
      30% {
        transform: translate3d(0, 0, 0);
        text-shadow: 0em 0em 0 $back;
        color: $front;
      }
      70% {
        transform: translate3d($d, -$d, 0);
        text-shadow: -$d $d $back;
        color: $front;
      }
      100% {
        transform: translate3d($d, -$d, 0);
        text-shadow: -$d $d $back;
        color: $front;
      }
    }

    span {
      position: relative;
      display: inline-block;
      animation: ani $t infinite alternate $e;

      @for $i from 1 through $n {
        &:nth-last-child(#{$i}n) {
          animation-delay: -$t * calc($i/$n/2);
        }
      }
    }
  }

  .blink {
    position: relative;
    bottom: 50px;
    animation: blinker 2s linear infinite;

    @keyframes blinker {
      50% {
        opacity: 50%;
      }
    }
  }

  @media screen and (max-width: 1125px), screen and (max-height: 650px) {
    .popout {
      font-size: 40px;
      position: relative;
      right: 60px;
      bottom: 160px;
    }

    .blink {
      position: relative;
      bottom: 240px;
    }
  }

  @media screen and (max-width: 575px) {
    .popout {
      font-size: 25px;
      position: relative;
      right: 100px;
      bottom: 140px;
    }

    .blink {
      position: relative;
      bottom: 200px;
    }
  }
</style>
