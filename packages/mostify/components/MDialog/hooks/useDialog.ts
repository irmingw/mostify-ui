import { ref, computed, watch } from "vue";

export const useDialogRef = () => {
  const dialogRef = ref<HTMLElement | null>(null);
  const mainRef = ref<HTMLElement | null>(null);
  const maskRef = ref<HTMLElement | null>(null);

  return {
    dialogRef,
    mainRef,
    maskRef
  };
};

export const useShow = (props, emit) => {
  const show = ref(props.modelValue || props.visible || false);

  watch(
    () => props.modelValue,
    newVal => {
      show.value = newVal;
    }
  );

  const setShow = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    show.value = false;
    emit("update:modelValue", false);
    emit("change", false);
  };

  return {
    show,
    setShow
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
  const dialogClass = computed(() => {
    return [
      "m-dialog",
      props.fullscreen ? "is-fullscreen" : "",
      props.customClass
    ];
  });

  const dialogStyles = computed(() => {
    const common = {
      "--m-dialog-width": props.width || "auto",
      "--m-dialog-border-radius": props.borderRadius,
      "--m-dialog-mask-bg": props.maskBackgroundColor,
      "--m-dialog-index": dialogIndex.value,
      "--m-dialog-bottom": "24px",
      "--m-dialog-top": props.top || "80px",
      overflow: show.value ? "auto" : "hidden",
      '--m-dialog-duration': `${props.duration || 300}ms`
    };

    if (props.center) {
      common["--m-dialog-top"] = "24px";
    }

    if (props.fullscreen) {
      common["--m-dialog-top"] = "0";
      common["--m-dialog-bottom"] = "0";
      common["--m-dialog-width"] = "100%";
    }

    return common;
  });

  return {
    wrapperStyles,
    dialogStyles,
    dialogClass,
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
    } else {
      // 验证是否存在多个dialog，如果有多个dialog，则不恢复滚动条
      const list = document.querySelectorAll('.m-dialog[data-show="on"]');
      if (list.length > 1) return;
      body.dataset.overflow = "auto";
    }
  });

  return {};
};

// 按下ESC关闭dialog
export const useEscClose = (props, show, setShow, dialogRef) => {
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
      setShow(e);
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
