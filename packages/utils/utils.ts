// 延迟执行
export const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

// 等待渲染
export const delayRender = () => new Promise((resolve) => requestAnimationFrame(resolve))