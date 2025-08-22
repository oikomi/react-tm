import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createVitePlugins } from './buildconfig/plugins';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), createVitePlugins()],

  resolve: {
    alias: {
      '@': '/src',
      '#': '/types',
    },
  },
});
