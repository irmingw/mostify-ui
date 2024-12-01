import Mostify from '../../lib/mostify-ui/dist/mostify-ui'
import '../../lib/mostify-ui/dist/index.css'

import Icons from '../../lib/mostify-ui-icon/dist/mostify-ui-icon'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Mostify)
  nuxtApp.vueApp.use(Icons)
})