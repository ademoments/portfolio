import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://ademoments.github.io',
  base: '/portfolio',
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
  prefetch: true,
  vite: {
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  },
});
