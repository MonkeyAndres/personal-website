import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://monkeyandres.com",
  integrations: [
    tailwind(),
    sitemap(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
  redirects: {
    "/about": "/",
    "/uses": "/tools",
  },
});
