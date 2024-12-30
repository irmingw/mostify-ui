import { ref, computed, watch } from "vue";

export const useShow = (props, emit) => {
  const show = ref(props.modelValue || props.visible || false);

  watch(
    () => props.modelValue,
    newVal => {
      show.value = newVal;
    }
  );

  const setClose = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    show.value = false;
    emit("update:modelValue", false);
    emit("change", false);
  };

  return {
    show,
    setClose
  };
};

export const useStyle = (props, zIndex, show) => {
  const dialogIndex = ref(props.zIndex || zIndex || 1000);
  // 内容是否居中控制
  const wrapperStyles = computed(() => {
    if (props.center) {
      return {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        overflow: show.value ? "auto" : "hidden"
      };
    }
    return {
      display: "block"
    };
  });

  return {
    wrapperStyles,
    dialogIndex
  };
};

// 是否需要控制body滚动条hook
export const useLockScroll = (props, show) => {
  watch(show, val => {
    // 是否需要控制滚动条
    if (!props.lockScroll) return;
    const body = document.body;

    if (val) {
      body.dataset.overflow = "hidden";
    }
  });

  return {};
};

// 按下ESC关闭dialog
export const useEscClose = (props, show, setClose, dialogRef) => {
  const getIsTarget = () => {
    const last = Array.from(
      document.querySelectorAll('.m-dialog[data-show="on"]')
    ).pop();
    if (last !== dialogRef.value) {
      return false;
    }
    return true;
  };
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && getIsTarget()) {
      setClose(e);
    }
  };

  watch(show, val => {
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
