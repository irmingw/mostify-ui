import { computed, inject, ref } from "vue";
import { providerKey } from "@/mostify-ui/config/config";

export const useBtn = props => {
  const rippleRef = ref<HTMLElement | null>(null);
  const btnRef = ref<HTMLElement | null>(null);
  const injectData = inject(providerKey, { size: "" });
  const btnClass = computed(() => {
    const arr = ["m-button"];
    props.type && arr.push("m-button-type-" + props.type);
    const size = props.size || injectData.size || "small";
    arr.push("m-button-size-" + size);
    props.shape && arr.push("m-button-shape-" + props.shape);
    props.loading && arr.push("is-loading");
    props.disabled && arr.push("is-disabled");
    return arr;
  });
  const contentShow = computed(
    () => !(props.loading && ["circle", "square"].includes(props.shape))
  );

  // User ripple effect
  let rippleCopy = null;

  const setClickXEvent = async (e: MouseEvent) => {
    if (!rippleRef.value) return;
    if (!rippleCopy) {
      rippleCopy = document.createElement("div");
      rippleCopy.className = "m-button-ripple";
    }
    const ripple = rippleCopy.cloneNode() as HTMLElement;
    rippleRef.value.appendChild(ripple);
    const rect = btnRef.value.getBoundingClientRect();
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
    ripple.classList.add("m-button-ripple-active");
    await new Promise(resolve => setTimeout(resolve, 500));
    ripple.remove();
  };

  return {
    btnClass,
    contentShow,
    setClickXEvent,
    btnRef,
    rippleRef
  };
};
