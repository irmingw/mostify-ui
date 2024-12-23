// .vitepress/theme/index.js
import MostifyUi from 'mostify-ui'
import 'mostify-ui/dist/index.css'
import DefaultTheme from 'vitepress/theme'
import './dark.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(MostifyUi)
  }
}