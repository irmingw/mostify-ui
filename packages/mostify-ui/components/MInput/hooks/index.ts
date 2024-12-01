import { ref, computed, watch } from 'vue';

export const useInputState = (props) => {
  const inputRef = ref<HTMLInputElement | null>(null);
  const isFocus = ref(false);
  const inputValue = ref(props.value || props.modelValue || '')


  const showClear = computed(() => {
    return props.clearable && !isFocus.value && inputValue.value !== ''
  })

  const setIsFocus = (val: boolean) => {
    isFocus.value = val;
  };


  watch(() => [props.modelValue, props.value], (n, o) => {
    inputValue.value = n[0] === o[0] ? (n[1] || '') : (n[0] || '')
  })

  return { inputRef, inputValue, isFocus, setIsFocus, showClear };
}

export const useInputClass = (props, focusState) => {
  const inputClass = computed(() => {
    const classNameArr = ['m-input'];

    if (props.size) {
      classNameArr.push(`m-input__size_${props.size}`)
    }

    if (props.disabled) {
      classNameArr.push('m-input__disabled');
      return classNameArr
    }

    if (props.readonly) {
      classNameArr.push('m-input__readonly');
      return classNameArr
    }

    if (focusState.value) {
      classNameArr.push('m-input__focus');
    }
    return classNameArr?.join(" ")
  });

  const inputStyles = computed(() => {

    return {
      width: props.width ? (typeof props.width === 'number' ? `${props.width}px` : props.width) : '',
      '--border_width': props.borderWidth ? (typeof props.borderWidth === 'number' ? `${props.borderWidth}px` : props.borderWidth) : '1px'
    }
  });

  return { inputClass, inputStyles };
};

