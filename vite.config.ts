import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',                 // simula el navegador
    globals: true,                        // describe, it, expect sin importarlos
    setupFiles: './src/test/setup.ts',    // se ejecuta antes de las pruebas
    css: true,                            // procesa los CSS Modules
  },
});