import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@design-system/utils': path.resolve(
        __dirname,
        './src/design-system/utils.ds.ts'
      ),
      '@design-system': path.resolve(__dirname, './src/design-system'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
});
