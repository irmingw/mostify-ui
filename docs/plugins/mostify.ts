import Mostify from 'mostify-ui'
import 'mostify-ui/index.css'

import Icons from 'mostify-ui-icon'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Mostify)
  nuxtApp.vueApp.use(Icons)
})