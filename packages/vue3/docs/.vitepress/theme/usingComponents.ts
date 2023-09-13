import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export function useComponents(app) {
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
  app.use(ElementPlus);
}
