import { computed, ref } from "vue";
import useProvider from "@/hooks/useProvider";

export const useBtn = (props, emit) => {
  const btnRef = ref<HTMLElement | null>(null);
  const { size } = useProvider();
  const btnSize = computed(() => props.size || size || "small");

  const showText = computed(
    () => !(props.loading && ["circle", "square"].includes(props.shape))
  );

  function handleEmitType(e: Event, type: "click" | "focus" | "blur") {
    e.preventDefault();
    if (props.loading || props.disabled) return;
    emit(type, e);
  }

  return {
    showText,
    btnRef,
    btnSize,
    handleEmitType
  };
};