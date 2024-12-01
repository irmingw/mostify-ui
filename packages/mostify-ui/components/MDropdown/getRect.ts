function getPlacement(placement, rect, cRect) {
  // 获取浏览器窗口的宽度
  var windowWidth = window.innerWidth;
  // 获取浏览器窗口的高度
  var windowHeight = window.innerHeight;

  // 是否可以显示在上方
  var canShowOnTop = rect.top > cRect?.height;
  // 是否可以显示在下方
  var canShowOnBottom = windowHeight - (rect?.top + cRect?.height) > 0;
  // 是否可以显示在左边
  var canShowOnLeft = rect.left > cRect.width;
  // 是否可以显示在右边
  var canShowOnRight = windowWidth - (rect.left + cRect.width) > 0;

  if (canShowOnTop && canShowOnBottom && canShowOnLeft && canShowOnRight) return placement;
  console.log(canShowOnTop,'canShowOnTop');
  
  if (canShowOnBottom) {
    if (canShowOnLeft && canShowOnRight) {
      return ['bottomRight', 'bottomLeft', 'bottom'].includes(placement) ? placement : 'bottomLeft'
    } else if (canShowOnLeft) {
      return 'bottomRight'
    } else {
      return 'bottomLeft'
    }
  } else {
    if (canShowOnLeft && canShowOnRight) {
      return ['topLeft', 'topRight', 'top'].includes(placement) ? placement : 'topLeft'
    } else if (canShowOnLeft) {
      return 'topLeft'
    } else {
      return 'topRight'
    }
  }
}


export function getRect(placement, rect, cRect) {
  const st_px = document.documentElement.scrollTop
  const key = getPlacement(placement, rect, cRect)

  switch (key) {
    case 'bottomRight':
      return {
        top: `${rect.top + rect.height + st_px}`,
        left: `${rect.left + rect.width - cRect.width}`
      }

    case 'bottom':
      return {
        top: `${rect.top + rect.height + st_px}`,
        left: `${rect.left + rect.width / 2 - cRect.width / 2}`
      }

    default:
      return {
        top: `${rect.top + rect.height + st_px}`,
        left: `${rect.left}`
      }
  }
}