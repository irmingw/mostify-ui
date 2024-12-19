import { animate } from "@/utils/dom";

const showTime = 250;
const hideTime = 200;

export default {
  hideTime,
  showTime,
  bgShow: async (el: HTMLElement | null) => {
    await animate(
      el,
      [
        { transform: "scaleY(0.33)", offset: 0 },
        { transform: "scaleY(1)", offset: 0.33 },
        {},
      ],
      { duration: showTime }
    ).catch(() => { });
  },
  cShow: async (el: HTMLElement | null) => {
    await animate(
      el,
      [
        { offset: 0, opacity: 0 },
        { offset: 0.33, opacity: 0 },
        { offset: 1, opacity: 1 },
      ],
      { duration: showTime }
    ).catch(() => { });
  },
  bgHide: async (el) => {
    await animate(
      el,
      [
        { opacity: 1, offset: 0 },
        { opacity: 0.66, offset: 0.33 },
        { opacity: 0, transform: "scaleY(0.33)", offset: 1 },
      ],
      { duration: hideTime }
    ).catch(() => { });
  },
  async cHide(el: HTMLElement | null) {
    await animate(
      el,
      [
        { offset: 0, opacity: 1 },
        { offset: 0.33, opacity: 0 },
        { offset: 1, opacity: 0 },
      ],
      { duration: hideTime }
    ).catch(() => { });
  },
};
