// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGithubPages ? 'https://benjino16.github.io' : 'https://rundlinge.de',
  base: isGithubPages ? '/rundlinge-website' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
