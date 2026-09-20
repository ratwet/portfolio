// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kaushal.is-a.dev',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
