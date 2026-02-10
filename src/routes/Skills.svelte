<script>
  import { isLightModeActive } from "../store.js";
</script>

<div id="skills"></div>
<section class="kawaii-skills text-center mt-5 mx-5">
  <h2 class="kawaii-title mb-5">⭐ My Magical Skills ⭐</h2>
  <div class="kawaii-skills-container">
    <div class="kawaii-skill-column">
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">🌐 HTML+CSS</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 95%;"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="HTML+CSS skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">95%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">⚡ JS/TS</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 95%;"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="JavaScript/TypeScript skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">95%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">🎨 MDBootstrap</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 93%;"
            role="progressbar"
            aria-valuenow="93"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="MDBootstrap skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">93%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">🚀 SvelteKit/React</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 95%;"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="SvelteKit/React skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">95%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">🗄️ Express+Mongo</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 93%;"
            role="progressbar"
            aria-valuenow="93"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Express+Mongo skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">93%</p>
      </div>
    </div>
    <div class="kawaii-skill-column">
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">📦 Git+GitHub</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 95%;"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Git+GitHub skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">95%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">🐳 Docker & GCP</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 90%;"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Docker & GCP skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">90%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">📋 POML</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 95%;"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="POML skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">95%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">🐍 Python/Java/C#</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 92%;"
            role="progressbar"
            aria-valuenow="92"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Python/Java/C# skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">92%</p>
      </div>
      <div class="kawaii-skill-item">
        <p class="kawaii-skill-name">⌨️ C/C++ & SQL</p>
        <div class="kawaii-progress">
          <div
            class="kawaii-progress-bar"
            style="width: 92%;"
            role="progressbar"
            aria-valuenow="92"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="C/C++ & SQL skill level"
          ></div>
        </div>
        <p class="kawaii-percentage">92%</p>
      </div>
    </div>
  </div>
  <hr class="kawaii-divider my-5" />
</section>

<style>
  .kawaii-skills {
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-cute);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 1200px;
    border: 3px solid var(--pastel-pink);
    box-shadow: var(--shadow-soft);
  }
  
  .kawaii-skills-container {
    display: flex;
    gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .kawaii-skill-column {
    flex: 1;
    min-width: 300px;
    max-width: 500px;
  }
  
  .kawaii-skill-item {
    background: var(--soft-white);
    border-radius: 15px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow-cute);
    border: 2px solid var(--pastel-purple);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 25px rgba(230, 179, 255, 0.4);
    }
  }
  
  .kawaii-skill-name {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--dark-pastel-purple);
    margin: 0 0 1rem 0;
  }
  
  .kawaii-progress {
    background: linear-gradient(90deg, var(--pastel-blue), var(--pastel-mint));
    border-radius: 25px;
    height: 20px;
    overflow: hidden;
    border: 2px solid var(--pastel-pink);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .kawaii-progress-bar {
    background: linear-gradient(90deg, var(--pastel-pink), var(--pastel-purple));
    height: 100%;
    border-radius: 20px;
    transition: width 1s ease-in-out;
    position: relative;
    
    &::after {
      content: '✨';
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.8rem;
    }
  }
  
  .kawaii-percentage {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1rem;
    color: var(--dark-pastel-purple);
    margin: 0.5rem 0 0 0;
  }
  
  .kawaii-divider {
    border: none;
    height: 3px;
    background: linear-gradient(90deg, var(--pastel-pink), var(--pastel-purple), var(--pastel-blue));
    border-radius: 5px;
    margin: 3rem 0;
  }
  
  @media (max-width: 768px) {
    .kawaii-skills {
      margin: 1rem;
      padding: 1rem;
    }
    
    .kawaii-skills-container {
      gap: 1.5rem;
    }
    
    .kawaii-skill-column {
      min-width: 250px;
    }
    
    .kawaii-skill-item {
      padding: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>
