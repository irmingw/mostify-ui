import { ref, watch } from "vue";

export const useVisible = (props, emit) => {
  const visible = ref(props.modelValue || false);

  const setVisible = (val: boolean) => {
    visible.value = val;
    emit("update:modelValue", val);
    emit("change", val);
  };

  watch(
    () => props.modelValue,
    newVal => {
      visible.value = newVal;
    }
  );

  return { visible, setVisible };
};


// 按下ESC关闭dialog
export const useEscClose = (props, visible, seVisible, dialogRef) => {
  const getIsTarget = () => {
    const last = Array.from(
      document.querySelectorAll('.m-dialog[aria-modal="true"]')
    ).pop();
    if (last !== dialogRef.value) {
      return false;
    }
    return true;
  };
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && getIsTarget()) {
      seVisible(false);
    }
  };

  watch(visible, val => {
    if (!props.escapeClose) return;
    if (val) {
      document.addEventListener("keydown", handleKeydown);
    } else {
      // 判断是否是最后一个显示的dialog，如果不是最后一个则不关闭
      if (getIsTarget()) {
        document.removeEventListener("keydown", handleKeydown);
      }
    }
  });

  return {};
};
