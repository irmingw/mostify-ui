import { animate } from "@/utils/dom";

export const dialogAnimationShow = async ({ mask, content, wrapper }) => {
  animate(mask, [{ opacity: 0 }, { opacity: 1 }], 240);
  animate(
    wrapper,
    [
      { transform: "scale(0.33)", offset: 0, opacity: 0.66 },
      { transform: "scale(0.98)", offset: 0.66, opacity: 1 },
      { transform: "scale(1)", offset: 1, opacity: 1 },
    ],
    {
      duration: 240,
    }
  );
  await animate(
    content,
    [
      { opacity: 0, offset: 0 },
      { opacity: 0.05, offset: 0.5 },
      { opacity: 1, offset: 1 }
    ],
    {
      duration: 240,
    }
  );
}

export const dialogAnimationHide = async ({ mask, wrapper, content }) => {
  animate(mask, [{ opacity: 1 }, { opacity: 0 }], {
    duration: 200
  });
  animate(
    content,
    [
      { opacity: 0.25, offset: 0 },
      { opacity: 0.05, offset: 0.33, },
      { opacity: 0, offset: 1,transform: "scale(0.33)" }
    ],
    {
      duration: 200,
    }
  );
  await animate(
    wrapper,
    [
      { opacity: 1, offset: 0 },
      { opacity: 0.88, offset: 0.33 },
      { opacity: 0, offset: 1, transform: "scale(0.33)" }
    ],
    {
      duration: 200,
    },
    20
  );
}

// 当前弹窗在最前面
export const dialogAnimationShowTop = (target: HTMLElement | null) => {
  if (!target) return false
  const allDialogs = document.querySelectorAll(".m-dialog[data-show='true']");

  if (allDialogs.length > 0) {
    const last = allDialogs[allDialogs.length - 1];
    return last === target
  }

  return false
}
