import Theme from 'vitepress/theme'
import { useComponents } from './usingComponents'
// style
import "../style/index.css"

export default {
  ...Theme,
  theme: 'material-theme-palenight',
  lineNumbers: true,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    useComponents(ctx.app)
  }
}