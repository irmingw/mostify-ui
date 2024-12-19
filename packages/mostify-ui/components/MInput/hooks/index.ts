import { ref, computed, watch } from 'vue';

export const useInputState = (props) => {
  const inputRef = ref<HTMLInputElement | null>(null);
  const isFocus = ref(false);
  const inputValue = ref(props.value || props.modelValue || '')

  const setIsFocus = (val: boolean) => {
    isFocus.value = val;
  };

  watch(() => [props.modelValue, props.value], (n, o) => {
    inputValue.value = n[0] === o[0] ? (n[1] || '') : (n[0] || '')
  })

  return { inputRef, inputValue, isFocus, setIsFocus };
}

export const useInputClass = (props, focusState) => {
  const inputClass = computed(() => {
    const classNameArr = ['m-input'];

    props.size && classNameArr.push(`m-input-size-${props.size}`)
    props.status && classNameArr.push(`m-input-status-${props.status}`)

    if (props.disabled) {
      classNameArr.push('m-input-disabled');
      return classNameArr
    }

    if (props.readonly) {
      classNameArr.push('m-input-readonly');
      return classNameArr
    }

    focusState.value && classNameArr.push('is-focus');
    return classNameArr?.join(" ")
  });



  return { inputClass };
};

