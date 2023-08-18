import { defineConfig } from 'vitepress';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue3-docs',
  description: 'A VitePress Site111',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  vite: {
    plugins: [ demoblockVitePlugin(), vueJsx() ],
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../'),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [{ text: 'Form', link: '/form' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
