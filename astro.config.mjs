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
        spec_table: "storyblok/SpecTable",
        spec_header: "storyblok/SpecTable",
        spec_row: "storyblok/SpecTable",
        spec_cell: "storyblok/SpecTable",
        cta_banner: "storyblok/CtaBanner",
      },
    }),
  ],
  vite: {
    plugins: [mkcert()],
  },
});