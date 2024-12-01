// 支持js打开弹窗
import MDialog from '../Dialog.tsx'
import { createApp } from 'vue'
import { dialogAnimationShow, dialogAnimationHide } from './dialogAnimation.ts'

interface DialogConfirmTypes {
  title?: string
  top?: string
  width?: string
  okBtnText: string
  cancelBtnText?: string
  okBtnProps?: Object
  cancelBtnProps?: Object
}

// 支持配置的选项
const getDefaultOpt = (obj: DialogConfirmTypes) => {
  const title = obj?.title || ''
  const width = obj.width || 480
  const top = obj?.top || 'center'
  const data = {
    onConfirm: () => { },
    onCancel: () => { },
    okBtnText: obj?.okBtnText || '确定',
    cancelBtnText: obj?.cancelBtnText || '',
    okBtnProps: obj?.okBtnProps,
    cancelBtnProps: obj?.cancelBtnProps,
    content: 'hello',
    className: 'm-dialog-confirm',
    title,
    width,
    top,
    escHide: false,
    maskHide: false,
    showClose: false,
    visible: true,
  }
  return data
}

const createDialog = async (option) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  let mask, content, wrapper
  const app = createApp(MDialog, {
    ...getDefaultOpt(option),
    target: div,
    _onClose: async (type: 'cancel' | 'ok') => {
      if (type === 'cancel' && option.onCancel) {
        option.onCancel?.();
      } else if (type === 'ok' && option.onConfirm) {
        option.onConfirm?.();
      }
      await dialogAnimationHide({ mask, wrapper, content })
      app.unmount();
      div.remove();
    },
  })
  app.mount(div)
  mask = div.querySelector('.m-dialog-mask') as HTMLElement
  content = div.querySelector('.m-dialog-content__wrapper') as HTMLElement
  wrapper = div.querySelector('.m-dialog-content__background') as HTMLElement
  const rect = content.getBoundingClientRect()
  const { enterX, enterY } = option
  let transformOrigin = ''

  if (enterX || enterY) {
    transformOrigin = `${enterX - rect.x}px ${enterY - rect.y}px`
  }
  if (transformOrigin) {
    wrapper.style.setProperty("transform-origin", transformOrigin);
    content.style.setProperty("transform-origin", transformOrigin);
  }
  dialogAnimationShow({ mask, content, wrapper })
}

const Dialog = Object.freeze({
  open: (option = {}) => {
    createDialog(Object.assign({}, option))
  },
  confirm: (option = {}) => {
    createDialog(Object.assign({}, option, {
      okBtnType: 'primary',
      cancelBtnText: '取消',
      cancelBtnProps: { type: 'default' }
    }))
  },
})

export default Dialog