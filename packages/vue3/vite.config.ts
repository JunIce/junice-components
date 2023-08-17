/*
 * @Descripttion: 
 * @LastEditors: rongjun.qiu
 * @LastEditTime: 2023-08-17 14:14:52
 */
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), VueJsx()],
  build: {
    rollupOptions: {
      external: ['element-plus']
    }
  }
});
