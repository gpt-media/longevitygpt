import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TheLongevityGPT — AI-native, evidence-led, hype-averse longevity answers.
// Static output = fast, clean HTML that AI answer engines (GPTBot, PerplexityBot,
// ClaudeBot, Google) can read + cite. English is the default at the root domain
// (x-default); country editions (/my/ /sg/ /tw/) + language subfolders are one
// `articles` collection keyed by edition sub-folder. See src/lib/editions.ts.
export default defineConfig({
  site: 'https://thelongevitygpt.com',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
