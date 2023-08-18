import Theme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { useComponents } from './usingComponents'


console.log('dddddddd');

export default {
  ...Theme,

  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    ctx.app.use(ElementPlus)
    useComponents(ctx.app)
  }
}