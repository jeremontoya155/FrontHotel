// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ejemplo de alias para ajustar la configuración según tus necesidades
      '@components': '/src/components',
      '@utils': '/src/utils'
    }
  }
});
