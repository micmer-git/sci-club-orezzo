import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.scicluborezzo.com',
  integrations: [tailwind()],
  build: {
    assets: '_assets',
  },
});
