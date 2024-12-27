import { ref, watch, computed } from "vue";
import { isArray } from "@/mostify/utils/common";
import useProvider from "@/mostify/hooks/useProvider";

export const useCheckbox = (props, emit) => {
  const indeterminate = ref(props.indeterminate);
  const checked = ref(
    isArray(props.modelValue)
      ? props.modelValue?.includes(props.value)
      : props.modelValue || props.checked || false
  );
  const { size } = useProvider();
  const classNames = computed(() => {
    const sVal = props.size || size || "small";
    const arr = ["m-checkbox", `m-checkbox-size-${sVal}`];
    props.disabled && arr.push("m-checkbox-disabled");
    checked.value && arr.push("m-checkbox-checked");
    indeterminate.value && arr.push("m-checkbox-indeterminate");
    return arr;
  });

  const toggle = () => {
    if (props.disabled || props.readonly) return;
    if (isArray(props.modelValue)) {
      const newArr = [...props.modelValue];

      if (newArr.includes(props.value)) {
        newArr.splice(newArr.indexOf(props.value), 1);
        checked.value = false;
      } else {
        newArr.push(props.value);
        checked.value = true;
      }
      emit("update:modelValue", newArr);
      emit("change", newArr);
    } else {
      checked.value = !checked.value;
      emit("update:modelValue", checked.value);
      emit("change", checked.value);
    }
    indeterminate.value = false;
    emit("update:indeterminate", indeterminate.value);
  };

  watch(
    () => [props.checked, props.indeterminate, props.modelValue],
    () => {
      checked.value = isArray(props.modelValue)
        ? props.modelValue?.includes(props.value)
        : props.modelValue || props.checked || false;
      indeterminate.value = props.indeterminate;
    }
  );

  return {
    toggle,
    indeterminate,
    checked,
    classNames
  };
};
