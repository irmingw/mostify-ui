import { computed, inject, ref } from "vue";
import { providerKey } from "@/mostify-ui/config/config";
import { animate } from "@/utils/dom";

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
  const setClickXEvent = (e: MouseEvent) => {
    if (!rippleRef.value) return;

    const rect = btnRef.value.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const width = size + "px";
    const height = width;
    let top = (e.clientY - rect.top - size / 2).toFixed(0) + "px";
    let left = (e.clientX - rect.left - size / 2).toFixed(0) + "px";

    if (Math.abs(rect.width - rect.height) < 12) {
      top = (rect.height - size) * 0.5 + "px";
      left = (rect.width - size) * 0.5 + "px";
    }
    rippleRef.value.setAttribute(
      "style",
      `width:${width};height:${height};top:${top};left:${left};`
    );
    animate(
      rippleRef.value,
      [
        { transform: "scale(0.8)", background: "var(--m-btn-ripple-color)" },
        {
          transform: "scale(5)",
          background: "var(--m-btn-ripple-color)",
          opacity: 0.15
        }
      ],
      500
    );
  };

  return {
    btnClass,
    contentShow,
    setClickXEvent,
    btnRef,
    rippleRef
  };
};
