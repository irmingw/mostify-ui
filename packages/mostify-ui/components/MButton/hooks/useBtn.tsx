import { computed, inject } from "vue";
import { providerKey } from "@/mostify-ui/config/config";
import { handleClickResColorMap } from "@/mostify-ui/utils/constants";

export const useBtn = props => {
  const injectData = inject(providerKey, { size: "" });

  const clickColor = computed(() => {
    if (props.clickColor) return props.clickColor;
    switch (props.type) {
      case "primary":
      case "danger":
      case "warning":
      case "success":
      case "info":
        return props.light
          ? handleClickResColorMap.get("dark")
          : handleClickResColorMap.get("light");

      default:
        return handleClickResColorMap.get("dark");
    }
  });
  const btnStyle = computed(() => {
    const style = [];
    style.push(`--border_style:${props.borderStyle || "solid"}`);
    style.push(`--m-click-res-color:${clickColor.value}`);
    return style.join(";");
  });

  const btnClass = computed(() => {
    const arr = ['m-button'];
    const size = props.size || injectData.size;

    props.type && arr.push("m-button__type__" + props.type);
    size && arr.push("m-button__size__" + size);
    props.shape && arr.push("m-button__shape__" + props.shape);
    props.plain && arr.push("is__plain");
    props.block && arr.push("is__block");
    props.light && arr.push("is__light");
    props.loading && arr.push("is__loading");
    props.disabled && arr.push("is__disabled");
    return arr;
  });

  const contentShow = computed(
    () => !(props.loading && ["circle", "rect"].includes(props.shape))
  );

  return {
    btnStyle,
    btnClass,
    contentShow
  };
};
