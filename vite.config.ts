import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5172,
    host: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      entities: fileURLToPath(new URL('./src/entities', import.meta.url)),
      pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
      shared: fileURLToPath(new URL('./src/shared', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  define: {
    'process.env': process.env,
  },
});
