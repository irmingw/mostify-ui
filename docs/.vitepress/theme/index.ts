// .vitepress/theme/index.js
import MostifyUi from 'mostify-ui'
import 'mostify-ui/dist/index.css'
import DefaultTheme from 'vitepress/theme'
import MostifyIcon from 'mostify-ui-icon'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(MostifyUi)
    app.use(MostifyIcon)
  }
}