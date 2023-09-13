import { defineConfig } from 'vitepress';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue3-docs',
  description: 'Vue3 Components Documentation',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: 'material-theme-palenight',
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin(), vueJsx()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [{ text: 'Form', link: '/components/element-plus/form' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
