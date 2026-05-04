import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://michaelinstitute.org',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
