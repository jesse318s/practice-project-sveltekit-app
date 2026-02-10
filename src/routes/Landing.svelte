<script>
  import { isLightModeActive } from "../store.js";
</script>

<section class="kawaii-landing">
  <div class="floating-sparkles">
    <span class="sparkle" style="top: 10%; left: 10%;">✨</span>
    <span class="sparkle" style="top: 20%; right: 15%;">🌟</span>
    <span class="sparkle" style="bottom: 30%; left: 20%;">💫</span>
    <span class="sparkle" style="top: 40%; right: 10%;">⭐</span>
    <span class="sparkle" style="bottom: 20%; right: 25%;">✨</span>
  </div>
  
  <p class="kawaii-popout">
    <span>🌸</span>
    <span>J</span>
    <span>E</span>
    <span>S</span>
    <span>S</span>
    <span>E</span>
    <span>&nbsp;</span>
    <span>S</span>
    <span>I</span>
    <span>T</span>
    <span>E</span>
    <span>S</span>
    <span>🌸</span>
    <br />
    <span>💖</span>
    <span>E</span>
    <span>N</span>
    <span>G</span>
    <span>I</span>
    <span>N</span>
    <span>E</span>
    <span>E</span>
    <span>R</span>
    <span>💖</span>
  </p>
  
  <div class="d-flex justify-content-center">
    <a
      href="#skills"
      class="kawaii-button kawaii-cta floating"
    >
      <h2>⭐ Skills ⭐</h2>
      <i class="fas fa-angle-down fa-2x"></i>
    </a>
  </div>
</section>

<style lang="scss">
  .kawaii-landing {
    background: linear-gradient(135deg, #E8A5C7, #D4A5FF, #9FC5FF);
    background-size: 400% 400%;
    animation: gradient-shift 15s ease infinite;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .floating-sparkles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    
    .sparkle {
      position: absolute;
      font-size: 1.5rem;
      animation: sparkle-float 3s ease-in-out infinite;
      
      &:nth-child(2) { animation-delay: 0.5s; }
      &:nth-child(3) { animation-delay: 1s; }
      &:nth-child(4) { animation-delay: 1.5s; }
      &:nth-child(5) { animation-delay: 2s; }
    }
  }
  
  @keyframes sparkle-float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg);
      opacity: 0.7;
    }
    50% { 
      transform: translateY(-20px) rotate(180deg);
      opacity: 1;
    }
  }

  .kawaii-popout {
    $t: 1.2s;
    $d: 0.08em;
    $n: 3;
    $e: cubic-bezier(0.86, 0, 0.07, 1);
    $front: var(--soft-white);
    $back: var(--pastel-purple);

    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 70px;
    padding: 80px;
    padding-top: 250px;
    margin: auto;
    width: 80%;
    white-space: nowrap;
    position: relative;
    text-align: center;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    z-index: 2;

    @keyframes kawaii-ani {
      0% {
        transform: translate3d(0, 0, 0) scale(1);
        text-shadow: 0em 0em 0 $back;
        color: $front;
      }
      30% {
        transform: translate3d(0, 0, 0) scale(1);
        text-shadow: 0em 0em 0 $back;
        color: $front;
      }
      70% {
        transform: translate3d($d, -$d, 0) scale(1.05);
        text-shadow: -$d $d 4px $back;
        color: $front;
      }
      100% {
        transform: translate3d($d, -$d, 0) scale(1.05);
        text-shadow: -$d $d 4px $back;
        color: $front;
      }
    }

    span {
      position: relative;
      display: inline-block;
      animation: kawaii-ani $t infinite alternate $e;
      margin: 0 2px;

      @for $i from 1 through $n {
        &:nth-last-child(#{$i}n) {
          animation-delay: -$t * calc($i/$n/2);
        }
      }
      
      &:first-child,
      &:last-child,
      &:nth-child(14),
      &:nth-child(16) {
        font-size: 1.2em;
        animation-duration: 0.8s;
      }
    }
  }

  .kawaii-cta {
    position: relative;
    bottom: 50px;
    z-index: 2;
    padding: 20px 40px !important;
    font-size: 1.2rem;
    background: linear-gradient(45deg, var(--pastel-mint), var(--pastel-yellow)) !important;
    border: 3px solid var(--pastel-pink) !important;
    
    h2 {
      margin: 0;
      font-family: var(--font-primary);
      font-weight: 700;
      color: var(--dark-bg);
    }
    
    i {
      color: var(--dark-bg);
      margin-top: 10px;
    }
    
    &:hover {
      transform: translateY(-5px) scale(1.1) !important;
      box-shadow: 0 15px 35px rgba(255, 179, 209, 0.6) !important;
    }
  }

  @media screen and (max-width: 1125px), screen and (max-height: 650px) {
    .kawaii-popout {
      font-size: 40px;
      width: 90%;
      padding-top: 200px;
    }

    .kawaii-cta {
      bottom: 30px;
      padding: 15px 30px !important;
    }
  }

  @media screen and (max-width: 575px) {
    .kawaii-popout {
      font-size: 25px;
      width: 95%;
      padding-top: 150px;
    }

    .kawaii-cta {
      bottom: 20px;
      padding: 12px 24px !important;
      font-size: 1rem;
    }
  }
</style>
