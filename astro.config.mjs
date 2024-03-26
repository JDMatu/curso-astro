import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://candid-caramel-4bcd4b.netlify.app/",
  integrations: [preact()]
});