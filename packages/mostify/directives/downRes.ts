// 按下节点实现响应背景色
import { Directive } from "vue";

// 实现点击节点实现响应出现背景色彩
export const downRes: Directive = {
  mounted(el: HTMLElement, binding) {
    if (!binding.value) return;
    el.addEventListener("mousedown", (event?: MouseEvent) => {
      const parent = el.querySelector(".m-click__res");
      if (!parent || parent?.getAttribute("data-disabled") == "on") return;
      let isUp = false;
      let isAnimationEnd = false;
      const ripple = document.createElement("span");
      const destroyedRipple = () => {
        if (isUp && isAnimationEnd) {
          ripple.remove();
          window.removeEventListener("mouseup", onMouseup);
        }
      };
      const onMouseup = () => {
        isUp = true;
        destroyedRipple();
      };
      window.addEventListener("mouseup", onMouseup);

      const rect = el.getBoundingClientRect();
      let size = Math.max(rect.width, rect.height);
      let x = event.clientX - rect.left - size / 2;
      let y = rect.height / 2 - size / 2;
      if (Math.abs(rect.width - rect.height) < 4) {
        x = rect.width / 2 - size / 2;
        y = rect.height / 2 - size / 2;
        size = Math.max(rect.width, rect.height);
      }
      // 设置水波纹的位置和大小
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.classList.add("m-click__res--ripple");
      // 添加水波纹效果到按钮中
      parent.appendChild(ripple);
      setTimeout(() => {
        isAnimationEnd = true;
        destroyedRipple();
      }, 500);
    });
  }
};
