import { computed, inject, ref } from "vue";
import { providerKey } from "@/mostify-ui/config/config";
import { animate } from "@/utils/dom";

const primaryColors = [
  "var(--m-primary-600)",
  "var(--m-primary-500)",
  "var(--m-primary-700)"
];

const dangerColors = [
  "var(--m-error-600)",
  "var(--m-error-500)",
  "var(--m-error-700)"
];

const warningColors = [
  "var(--m-warning-600)",
  "var(--m-warning-500)",
  "var(--m-warning-700)"
];

const successColors = [
  "var(--m-success-600)",
  "var(--m-success-500)",
  "var(--m-success-700)"
];
const colorMap = new Map([
  ["primary", primaryColors],
  ["danger", dangerColors],
  ["warning", warningColors],
  ["success", successColors],
  [
    "default",
    ["var(--m-theme-50)", "var(--m-primary-200)", "var(--m-primary-300)"]
  ]
]);

export const useBtn = props => {
  const rippleRef = ref(null);
  const btnRef = ref(null);
  const injectData = inject(providerKey, { size: "" });
  const btnStyle = computed(() => {
    const style = [];
    let [base, hover, active] = colorMap.get(props.type) || [];

    if (props.text) {
      base = "";
      hover = "rgba(0,0,0,.06)";
      active = "rgba(0,0,0,.25)";
    }

    style.push(`--btn-bg-color:${props.btnBgColor || base || ""}`);
    style.push(`--btn-bg-hover-color:${props.btnBgHoverColor || hover || ""}`);
    style.push(
      `--btn-bg-active-color:${props.btnBgActiveColor || active || ""}`
    );
    const size = props.size || injectData.size;
    style.push(
      `--btn-size: ${size ? "m-size-" + size : "var(--m-size-small)"}`
    );

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

  const setClickXEvent = (e: MouseEvent) => {
    if (!rippleRef.value || !props.ripple) return;

    const rect = btnRef.value.getBoundingClientRect();
    const width = Math.max(rect.width, rect.height).toFixed(0) + "px";
    const height = width;
    const top = (e.clientY - rect.top - parseInt(height) / 2).toFixed(0) + "px";
    const left =
      (e.clientX - rect.left - parseInt(width) / 2).toFixed(0) + "px";
    animate(
      rippleRef.value,
      [
        {
          offset: 0,
          transform: `scale(0.75)`,
          width,
          height,
          top,
          left,
          opacity: 0.5,
          borderRadius: "50%"
        },
        {
          offset: 1,
          transform: `scale(2)`,
          width,
          height,
          top,
          left,
          opacity: 1
        }
      ],
      500
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
