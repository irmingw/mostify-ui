import { computed, inject, ref } from "vue";
import { providerKey } from "@/mostify-ui/config/config";
import { animate } from "@/utils/dom";
import {
  bgColorMap,
  colorMap,
  bgColorLightMap,
  colorLightMap,
  borderColorMap
} from "../constans";

export const useBtn = props => {
  const rippleRef = ref(null);
  const btnRef = ref(null);
  const injectData = inject(providerKey, { size: "" });
  const btnStyle = computed(() => {
    const style = [];

    // 处理底色
    let [base, hover, active] = bgColorMap.get(props.type) || [];
    if (props.light) {
      [base, hover, active] = bgColorLightMap.get(props.type) || [];
    }
    style.push(`--btn-bg-color:${props.btnBgColor || base || ""}`);
    style.push(`--btn-bg-hover-color:${props.btnBgHoverColor || hover || ""}`);
    style.push(
      `--btn-bg-active-color:${props.btnBgActiveColor || active || ""}`
    );

    // 处理尺寸
    const size = props.size || injectData.size;
    style.push(`--btn-size: var(--m-size-${size ? size : "small"})`);

    // 处理字体色
    let [tc, tch, tca] = colorMap.get(props.type) || [];
    if (props.light) {
      [tc, tch, tca] = colorLightMap.get(props.type) || [];
    }
    

    style.push(`--btn-color:${props.textColor || tc || "var(--m-theme-900)"}`);
    style.push(
      `--btn-color-hover:${props.textColor || tch || "var(--m-theme-900)"}`
    );
    style.push(
      `--btn-color-active:${props.textColor || tca || "var(--m-theme-900)"}`
    );

    // 处理border
    const [bdc, bdch, bdca] = borderColorMap.get(props.type) || [];
    
    style.push(`--btn-border-color:${props.borderColor || bdc}`);
    style.push(`--btn-border-color-hover:${props.borderColor || bdch}`);
    style.push(`--btn-border-color-active:${props.borderColor || bdca}`);
    style.push(`--btn-border-style:${props.borderStyle || "solid"}`);

      style.push(`--btn-border-width: ${ !['text','link'].includes(props.type) ?props.borderWidth : 0}px`);

    return style.join(";");
  });

  const btnClass = computed(() => {
    const arr = ["m-button"];
    props.shape && arr.push("m-button__shape__" + props.shape);
    props.loading && arr.push("is__loading");
    props.disabled && arr.push("is__disabled");
    props.text && arr.push("is__text");
    return arr;
  });

  const contentShow = computed(
    () => !(props.loading && ["circle", "rect"].includes(props.shape))
  );

  // User ripple effect
  const setClickXEvent = (e: MouseEvent) => {
    if (!rippleRef.value || !props.ripple) return;

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
    animate(
      rippleRef.value,
      [
        {
          offset: 0,
          transform: `scale(0.8)`,
          width,
          height,
          top,
          left,
          borderRadius: "50%"
        },
        {
          offset: 0.5,
          transform: `scale(8)`,
          width,
          height,
          top,
          left,
          borderRadius: "50%"
        },
        {
          offset: 1,
          transform: `scale(8)`,
          width,
          height,
          top,
          left,
          borderRadius: "50%"
        }
      ],
      {
        duration: 500,
        easing:"cubic-bezier(0.4, 0, 0, 1)"
      }
    );
  };

  return {
    btnStyle,
    btnClass,
    contentShow,
    setClickXEvent,
    btnRef,
    rippleRef
  };
};
