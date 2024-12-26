// 延迟执行
export const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

// 等待渲染
export const delayRender = () =>
  new Promise(resolve => requestAnimationFrame(resolve));

// 是否是数组
export const isArray = (val: any) => Array.isArray(val);

const addOrSubtract = (a: number, b: number, isAdd = true) => {
  const getLen = val => {
    const arr = val.toString().split(".");
    return arr[1] ? arr[1].length : 0;
  };
  const fixedLen = Math.max(getLen(a), getLen(b));
  return parseFloat((isAdd ? a + b : a - b).toFixed(fixedLen));
};

// 两个数相加
export const add = (a: number, b: number): number => addOrSubtract(a, b, true);

// 两个数相减
export const subtract = (a: number, b: number): number =>
  addOrSubtract(a, b, false);
