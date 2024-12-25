// import '@/motion/styles/index.scss';
import MButton from './MButton'
import MSpace from './MSpace'
import MDivider from './MDivider'
import MAnchor from './MAnchor'
import MConfigProvider from './MConfigProvider'
import {MBreadcrumb,MBreadcrumbItem} from './MBreadcrumb'
import MDropdown from './MDropdown'
import MButtonGroup from './MButtonGroup'
import MMenuItem from './MMenuItem'
import MDialog, { Dialog } from './MDialog'
import { MInput } from './MInput'
import MIcon from './MIcon'
import MAlert from './MAlert/MAlert'
import MCheckbox from './MCheckbox'
import MAvatar from './MAvatar'

const components = [
  MButton,
  MSpace,
  MDivider,
  MAnchor,
  MConfigProvider,
  MBreadcrumb,
  MBreadcrumbItem,
  MDropdown,
  MButtonGroup,
  MMenuItem,
  MDialog,
  MInput,
  MIcon,
  MAlert,
  MCheckbox,
  MAvatar
].map(item => {
  item.install = function (app) {
    app.component(item.name, item)
  }
  return item
})

export default {
  install(app) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}

export {
  MButton,
  MSpace,
  MDivider,
  MAnchor,
  MConfigProvider,
  MBreadcrumb,
  MBreadcrumbItem,
  MDropdown,
  MButtonGroup,
  MMenuItem,
  MDialog,
  Dialog,
  MInput,
  MIcon,
  MAlert,
  MCheckbox,
  MAvatar
}