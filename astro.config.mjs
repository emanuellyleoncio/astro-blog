import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()]
});