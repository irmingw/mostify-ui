// import '@/motion/styles/index.scss';
import MButton from './MButton'
import MSpace from './MSpace'
import MDivider from './MDivider'
import { MLayout, MHeader, MSide, MFooter, MMain } from './MLayout';
import MAnchor from './MAnchor'
import MConfigProvider from './MConfigProvider'
import MBreadcrumb from './MBreadcrumb'
import MBreadcrumbItem from './MBreadcrumbItem'
import MDropdown from './MDropdown'
import MButtonGroup from './MButtonGroup'
import MMenuItem from './MMenuItem'
import MDialog, { Dialog } from './MDialog'
import MMask from './MMask'
import { MInput } from './MInput'
import MIcon from './MIcon'

const components = [
  MButton,
  MSpace,
  MDivider,
  MLayout,
  MHeader,
  MSide,
  MFooter,
  MMain,
  MAnchor,
  MConfigProvider,
  MBreadcrumb,
  MBreadcrumbItem,
  MDropdown,
  MButtonGroup,
  MMenuItem,
  MDialog,
  MMask,
  MInput,
  MIcon
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
  MLayout,
  MHeader,
  MSide,
  MFooter,
  MMain,
  MAnchor,
  MConfigProvider,
  MBreadcrumb,
  MBreadcrumbItem,
  MDropdown,
  MButtonGroup,
  MMenuItem,
  MDialog,
  Dialog,
  MMask,
  MInput,
  MIcon
}