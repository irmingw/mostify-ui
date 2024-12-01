// 获取节点当前坐标大小
export const getNodeRect = (node: HTMLElement | Element | null): DOMRect | null => {
  return node ? node.getBoundingClientRect() : null
};

// 判断两个节点是否是同一个节点或者是子节点
export const isSameOrChildNode = (parent: HTMLElement, child: HTMLElement): boolean => {
  if (!parent || !child) return false
  if (parent === child) return true;
  if (parent.contains && parent.contains(child)) return true;

  return false
}

// 结束节点的动画
export const endAnimation = (node: HTMLElement) => {
  return new Promise((resolve) => {
    if (!node) return resolve(false)
    node.getAnimations().forEach((animation) => {
      animation.cancel()
    });
    resolve(true)
  })
}

// 判断节点是否动画结束
export const getAnimateEnd = (node: HTMLElement) => {
  return new Promise((resolve) => {
    if (!node) return null
    Promise.all(
      node.getAnimations({ subtree: true }).map((animation) => animation.finished),
    ).then(() => {
      resolve(true)
    }).catch(() => {
      resolve(false)
    })
  })
}

// 设置动画
export const animate = (node: HTMLElement, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options: number | KeyframeAnimationOptions, delay = 0) => {
  return new Promise(async (resolve, reject) => {
    if (!node) return reject('node is null')
    // 移除所有动画
    await endAnimation(node)
    node.animate(keyframes, options)
    const time: number | string | CSSNumericValue = typeof options === 'number' ? options : (options?.duration || null)
    if (time !== null && time !== undefined && Number(time) >= 0) {
      setTimeout(() => {
        resolve(true)
      }, Number(time) - delay)
    } else {
      resolve(true)
    }
  })
}


// 设置样式
export const setDomStyleByObj = (node: HTMLElement, obj: { [key: string]: any }) => {
  if (!node || !obj) return false;
  node.setAttribute('style', Object.keys(obj).map((key) => `${key}:${obj[key]}`).join(';'))
}