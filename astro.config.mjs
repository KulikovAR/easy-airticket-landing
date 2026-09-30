// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://easy-airticket.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
