import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '/@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: 5050,
    fs: {
      strict: false,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
