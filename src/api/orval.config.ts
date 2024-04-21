import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: {
      target: './docs/openapi.yaml',
    },
    output: {
      mode: 'split',
      target: './generated/api.ts',
      schemas: './generated/models',
      mock: true,
      client: 'axios',
    },
  },
});
