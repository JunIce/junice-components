import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

import DemoForm from '../../demo/form/index.vue'

export function useComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)

  app.component('DemoForm', DemoForm)
}