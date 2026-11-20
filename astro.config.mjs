// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output for Cloudflare Pages.
// https://docs.astro.build/en/guides/deploy/cloudflare/
export default defineConfig({
  site: 'https://highvisionreno.com.au',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
