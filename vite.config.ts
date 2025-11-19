import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is critical for GitHub Pages at https://username.github.io/repo-name/
  base: '/Ariadna/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});