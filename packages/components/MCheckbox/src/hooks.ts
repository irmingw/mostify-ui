import { ref, watch } from "vue";
import { isArray } from "@/utils/common";

export const useCheckbox = (props, emit) => {
  const indeterminate = ref(props.indeterminate);
  const checked = ref(
    isArray(props.modelValue)
      ? props.modelValue?.includes(props.value)
      : props.modelValue || props.checked || false
  );

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
    checked
  };
};

export const useCheckboxAnimation = (props, checked, indeterminate) => {
  const animationClass = ref("");

  const handleAnimation = val => {
    if (props.disabled || props.readonly) return;
    animationClass.value = val ? "m-checkbox__fade-in" : "m-checkbox__fade-out";
  };

  watch(
    () => checked.value,
    val => {
      handleAnimation(val);
    }
  );
  watch(
    () => indeterminate.value,
    value => {
      handleAnimation(value);
    }
  );

  return {
    animationClass
  };
};
