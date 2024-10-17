import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: "app",
    adapter: adapter({
      pages: "build",
      assets: "build",
    }),
    paths: {
      base: "/practice-project-sveltekit-app",
    },
  },
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`,
    },
  }),
};

export default config;
