import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://monkeyandres.com",
  integrations: [tailwind(), sitemap(), mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  },
  redirects: {
    "/about": "/"
  },
  adapter: node({
    mode: "standalone"
  })
});