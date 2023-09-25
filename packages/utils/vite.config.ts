import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [],
  build: {
    lib: {
      entry: path.join(__dirname, './src/index.ts'),
      name: 'utils',
      fileName: 'utils',
    },
    rollupOptions: {
      output: {
      },
    }
  }
});
