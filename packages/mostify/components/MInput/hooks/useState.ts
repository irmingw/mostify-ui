import { ref, watch, computed } from "vue";
import useProvider from "@/mostify/hooks/useProvider";

export const useValue = (props, emit) => {
  const value = ref(props.modelValue || props.value);
  const setValue = val => {
    if (props.disabled || props.readonly) return;
    value.value = val;
    emit("update:modelValue", val);
    emit("change", val);
  };

  watch(
    () => props.modelValue,
    val => {
      value.value = val;
    }
  );

  watch(
    () => props.value,
    val => {
      value.value = val;
    }
  );

  return { value, setValue };
};

export const useClassNames = (props, isFocus) => {
  const { size } = useProvider();
  const classNames = computed(() => {
    const sValue = props.size || size || "small";
    const arr = ["m-input", `m-input-size-${sValue}`];
    props.disabled && arr.push("is-disabled");
    props.readonly && arr.push("is-readonly");
    isFocus.value && arr.push("is-focus");
    return arr;
  });

  return {
    classNames
  };
};

export const usePwd = props => {
  const isOpenEye = ref(false);
  const type = ref(props.type);
  const toggleShowPwd = () => {
    isOpenEye.value = !isOpenEye.value;
    type.value = isOpenEye.value ? "text" : props.type;
  };
  const showPwdIcon = computed(() => {
    return props.showPasswordIcon && props.type?.toLowerCase() === "password";
  });

  return {
    type,
    isOpenEye,
    showPwdIcon,
    toggleShowPwd
  };
};

export const useLimitCount = props => {
  const showLimitCount = computed(() => {
    return props.showLimitCount && props.maxlength;
  });

  return {
    showLimitCount
  };
};

export const useTextarea = (props, showLimitCount, isFocus) => {
  const classnames = computed(() => {
    const arr = ["m-textarea"];

    props.disabled && arr.push("is-disabled");
    props.readonly && arr.push("is-readonly");
    isFocus.value && arr.push("is-focus");
    showLimitCount.value && arr.push("is-limit");
    return arr;
  });

  return {
    classnames
  };
};
