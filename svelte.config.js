import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: "app",
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    paths: {
      base: dev ? "" : "/practice-project-sveltekit-app",
    },
  },
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`,
    },
  }),
};

export default config;
