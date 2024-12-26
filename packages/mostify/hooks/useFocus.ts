import { ref } from "vue";

export const useFocus = (defaultValue?: boolean) => {
  const domRef = ref<HTMLElement | null>(null);
  const isFocus = ref(defaultValue || false);

  const setIsFocus = (bol: boolean) => {
    isFocus.value = bol;
    if (bol) {
      domRef.value?.focus();
    } else {
      domRef.value?.blur();
    }
  };

  return {
    domRef,
    isFocus,
    setIsFocus
  };
};
