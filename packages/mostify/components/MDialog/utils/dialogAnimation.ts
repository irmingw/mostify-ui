import { animate } from "@/mostify/utils/dom";

export const dialogAnimationShow = async ({
  mask,
  content
}: {
  mask: HTMLElement;
  content: HTMLElement;
}) => {
  content.style.setProperty("transform-origin", "center top")
  animate(mask, [{ opacity: 0 }, { opacity: 1 }], 300);
  await animate(
    content,
    [
      { opacity: 0, transform: "translateY(-16px)", offset: 0 },
      { opacity: 1, transform: "translateY(0)", offset: 0.33 },
      { opacity: 1, offset: 1 }
    ],
    {
      duration: 300,
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    }
  );
};

export const dialogAnimationHide = async ({ mask, content }) => {
  try {
    animate(mask, [{ opacity: 1 }, { opacity: 0 }], {
      duration: 200
    });
    await animate(
      content,
      [
        { opacity: 1, offset: 0 },
        { opacity: 0, transform: "translateY(-16px)", offset: 1 }
      ],
      {
        duration: 200,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      20
    );
  } catch (error) {}
};
