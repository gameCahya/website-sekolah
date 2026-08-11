// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
    }),
  ],
  server: {
    allowedHosts: [
      'minute-consultancy-filing-validation.trycloudflare.com'
    ]
  }
});
