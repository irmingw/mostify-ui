import { computed, ref } from "vue";
import useProvider from "@/mostify/hooks/useProvider";

export const useBtn = props => {
  const btnRef = ref<HTMLElement | null>(null);
  const { size } = useProvider();
  const btnSize = computed(() => props.size || size || "small");
  // className
  const btnClass = computed(() => {
    const arr = ["m-button"];
    props.type && arr.push("m-button-type-" + props.type);
    arr.push("m-button-size-" + btnSize.value);
    props.shape && arr.push("m-button-shape-" + props.shape);
    props.loading && arr.push("is-loading");
    props.disabled && arr.push("is-disabled");
    return arr;
  });
  const contentShow = computed(
    () => !(props.loading && ["circle", "square"].includes(props.shape))
  );

  return {
    btnClass,
    contentShow,
    btnRef,
    btnSize
  };
};

export const useRipple = (props, wrapper) => {
  const rippleRef = ref<HTMLElement | null>(null);
  // rippler effect// User ripple effect
  let rippleCopy = null;
  // rippler effect
  const setRipple = async (e: MouseEvent) => {
    if (!rippleRef.value || props.disabled || props.loading) return;
    const rect = wrapper.value?.getBoundingClientRect();
    if (!rect) return;
    if (!rippleCopy) {
      rippleCopy = document.createElement("div");
      rippleCopy.className = "m-button-ripple";
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
    ripple.classList.add("m-button-ripple-active");
    await new Promise(resolve => setTimeout(resolve, 500));
    ripple.remove();
  };

  return {
    setRipple,
    rippleRef
  };
};

const pdMap = {
  mini: "0 12px",
  small: "0 16px",
  large: "0 24px"
}

export const useStyle = (props,btnSize) => {

  const styles = computed(() => {
    return {
      width: props.block ? '100%' : '',
      '--button-height': `var(--m-size-${btnSize.value})`,
      '--button-padding': pdMap[btnSize.value],
    };
  });
  return {
    styles,
  };
}