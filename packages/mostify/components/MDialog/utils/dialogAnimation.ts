import { animate } from "@/mostify/utils/dom";

export const dialogAnimationShow = async ({ mask, content, wrapper }) => {
   animate(mask, [{ opacity: 0 }, { opacity: 1 }], 120);
  animate(
    wrapper,
    [
      { transform: "scale(0.33)", offset: 0, opacity: 0.66 },
      { transform: "scale(1)", offset: 0.33, opacity: 1 },
      { transform: "scale(1)", offset: 1, opacity: 1 },
    ],
    {
      duration: 500,
    }
  );
  await animate(
    content,
    [
      { opacity: 0, offset: 0 },
      { opacity: 0.25, offset: 0.35 },
      { opacity: 1, offset: 1 }
    ],
    {
      duration: 500,
    }
  );
}

export const dialogAnimationHide = async ({ mask, wrapper, content }) => {
  animate(mask, [{ opacity: 1 }, { opacity: 0 }], {
    duration: 240
  });
  animate(
    content,
    [
      { opacity: 1, offset: 0 },
      { opacity: 0, offset: 0.2, },
      { opacity: 0, offset: 1}
    ],
    {
      duration: 240,
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
      duration: 240,
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
