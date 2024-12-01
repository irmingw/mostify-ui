// 判断是否存在需要隐藏滚动条的元素
export const updateBodyScroll = (attr = 'm-dialog[data-active="true"]') => {
  const flag = document.querySelectorAll(attr).length > 0
  if (flag) {
    document.body.setAttribute('data-overflow', 'hidden')
    document.documentElement.dataset.overflow = 'hidden'
  } else {
    document.body.setAttribute('data-overflow', 'auto')
    document.documentElement.dataset.overflow = 'auto'
  }
}