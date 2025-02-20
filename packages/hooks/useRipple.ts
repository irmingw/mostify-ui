import { ref } from "vue";

export const useRipple = (props) => {
  const rippleRef = ref<HTMLElement | null>(null);
  // rippler effect// User ripple effect
  let rippleCopy = null;
  // rippler effect
  const setRipple = async (e: MouseEvent) => {
    if (!rippleRef.value || props.disabled || props.loading) return;
    const rect = rippleRef.value.getBoundingClientRect();
    if (!rect) return;
    if (!rippleCopy) {
      rippleCopy = document.createElement("div");
    }
    const ripple = rippleCopy.cloneNode() as HTMLElement;
    rippleRef.value.appendChild(ripple);

    const size = Math.max(rect.width, rect.height);
    const width = size + "px";
    const height = width;
    let top = (e.clientY - rect.top - size / 2).toFixed(0) + "px";
    let left = (e.clientX - rect.left - size / 2).toFixed(0) + "px";
    top = (rect.height - size) * 0.5 + "px";
    if (Math.abs(rect.width - rect.height) < 12) {
      left = (rect.width - size) * 0.5 + "px";
    }

    ripple.setAttribute(
      "style",
      `width:${width};height:${height};top:${top};left:${left};`
    );
    ripple.classList.add("m-ripple__item");
    await new Promise(resolve => setTimeout(resolve, 500));
    ripple.remove();
  };

  return {
    setRipple,
    rippleRef
  };
};
