import { defineConfig } from 'vitepress';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue3-docs',
  description: 'Vue3 Components Documentation',
  lastUpdated: true,
  outDir: "../doc-dist",
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
      { text: 'Type Challenges', link: '/type-challenges' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Form', link: '/components/element-plus/form' },
            { text: 'SelectTree', link: '/components/element-plus/select-tree' }
          ],
        },
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/JunIce/junice-components' }],
  },
});
