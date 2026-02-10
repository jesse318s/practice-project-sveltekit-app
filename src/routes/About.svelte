<script>
  import { isLightModeActive } from "../store.js";
  import GitHubProfile from "../lib/GitHubProfile.svelte";
</script>

<div id="about"></div>
<section class="kawaii-about text-center">
  <h2 class="kawaii-title mb-5">💖 About Me 💖</h2>
  <GitHubProfile />
  <div class="kawaii-about-content mx-5 mt-4">
    <div class="kawaii-intro">
      <p class="kawaii-greeting">
        🌸 Hello, my name is Jesse Sites, and I'm a software engineer based in Texas! 🌸
      </p>
      <p class="kawaii-description">
        ✨ I utilize Python, HTML/CSS, JavaScript, TypeScript, Java, C#, SQL,
        MongoDB, and POML to deliver solutions that improve capabilities, reduce
        costs, and increase efficiency. ✨
      </p>
    </div>
    <div class="kawaii-decorations">
      <span class="floating-decoration" style="top: 10%; left: 5%;">🌟</span>
      <span class="floating-decoration" style="top: 20%; right: 8%;">💫</span>
      <span class="floating-decoration" style="bottom: 30%; left: 10%;">⭐</span>
      <span class="floating-decoration" style="bottom: 15%; right: 12%;">✨</span>
    </div>
    <hr class="kawaii-divider my-5" />
  </div>
</section>

<style>
  .kawaii-about {
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-cute);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
    border: 3px solid var(--pastel-purple);
    box-shadow: var(--shadow-soft);
    position: relative;
    overflow: hidden;
  }
  
  .kawaii-about-content {
    position: relative;
    z-index: 2;
  }
  
  .kawaii-intro {
    background: var(--soft-white);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-cute);
    border: 2px solid var(--pastel-pink);
  }
  
  .kawaii-greeting {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--dark-pastel-purple);
    margin: 0 0 1.5rem 0;
    line-height: 1.6;
  }
  
  .kawaii-description {
    font-family: var(--font-secondary);
    font-size: 1.1rem;
    color: var(--dark-bg);
    line-height: 1.8;
    margin: 0;
  }
  
  .kawaii-decorations {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  .floating-decoration {
    position: absolute;
    font-size: 1.5rem;
    animation: float-decoration 4s ease-in-out infinite;
    
    &:nth-child(2) { animation-delay: 1s; }
    &:nth-child(3) { animation-delay: 2s; }
    &:nth-child(4) { animation-delay: 3s; }
  }
  
  @keyframes float-decoration {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg);
      opacity: 0.6;
    }
    50% { 
      transform: translateY(-15px) rotate(10deg);
      opacity: 1;
    }
  }
  
  .kawaii-divider {
    border: none;
    height: 3px;
    background: linear-gradient(90deg, var(--pastel-pink), var(--pastel-purple), var(--pastel-blue));
    border-radius: 5px;
    margin: 3rem 0;
  }
  
  @media (max-width: 768px) {
    .kawaii-about {
      margin: 1rem;
      padding: 1rem;
    }
    
    .kawaii-intro {
      padding: 1.5rem;
    }
    
    .kawaii-greeting {
      font-size: 1.1rem;
    }
    
    .kawaii-description {
      font-size: 1rem;
    }
    
    .floating-decoration {
      font-size: 1.2rem;
    }
  }
</style>
