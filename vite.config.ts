import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [
    preact(),
    checker({ typescript: true }),
  ],
  server: {
    open: true,
  },
});
