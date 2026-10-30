import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";

const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,
      apiOptions: {
        region: "eu",
      },
      components: {
        page: "storyblok/Page",
        hero: "storyblok/Hero",
        feature_grid: "storyblok/FeatureGrid",
        feature_card: "storyblok/FeatureCard",
      },
    }),
  ],
  vite: {
    plugins: [mkcert()],
  },
});