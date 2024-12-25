
import { ref, watch } from 'vue'

const isArray = (val) => Array.isArray(val);

export const useCheckbox = (props, emit) => {
  const indeterminate = ref(props.indeterminate);
  const checked = ref(isArray(props.modelValue) ? props.modelValue?.includes(props.value) : (props.modelValue || props.checked || false));

  const toggle = () => {
    if (props.disabled) return;
    if (isArray(props.modelValue)) {
      const newArr = [...props.modelValue];

      if (newArr.includes(props.value)) {
        newArr.splice(newArr.indexOf(props.value), 1);
        checked.value = false;
      } else {
        newArr.push(props.value);
        checked.value = true;
      }
      console.log(newArr, 'newArr');
      emit('update:modelValue', newArr);
      emit('change', newArr);
    } else {
      checked.value = !checked.value;
      emit('update:modelValue', checked.value);
      emit('change', checked.value);
    }
    indeterminate.value = false;
    emit('update:indeterminate', indeterminate.value);

  }

  watch(() => [props.checked, props.indeterminate, props.modelValue], () => {
    checked.value = isArray(props.modelValue) ? props.modelValue?.includes(props.value) : (props.modelValue || props.checked || false);
    indeterminate.value = props.indeterminate;
  })

  return {
    toggle,
    indeterminate,
    checked
  }
}