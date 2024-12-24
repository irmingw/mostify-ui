import { ref, computed, watch } from 'vue';

export const useInput = (props, emit) => {
  const inputRef = ref<HTMLInputElement | null>(null);
  const isFocus = ref(false);
  const inputValue = ref(props.value || props.modelValue || '')

  const setIsFocus = async (val: boolean) => {
    isFocus.value = val;
    await new Promise(resolve => requestAnimationFrame(resolve));
    if (val) {
      inputRef.value?.focus();
      emit('focus', val)
    } else {
      inputRef.value?.blur();
      emit('blur', val)
    }
  };

  const onChange = (e: Event) => {
    const val = (e.target as HTMLInputElement).value;
    inputValue.value = val;
    emit('update:modelValue', val)
    emit('change', val)
  }

  const onClearValue = () => {
    inputValue.value = '';
    emit('update:modelValue', '')
    emit('change', '')
  }

  // 后期更新watch监听inputValue
  watch(() => [props.modelValue, props.value], (n, o) => {
    inputValue.value = n[0] === o[0] ? (n[1] || '') : (n[0] || '')
  })

  return { inputRef, inputValue, onChange, isFocus, setIsFocus, onClearValue };
}

export const useInputSuffixDefault = (props) => {
  const showPwd = ref(false)
  const pwdType = ref('')
  // 是否显示密码
  const showPassword = computed(() => {
    return props.showPasswordIcon && !props.disabled && !props.readonly && props.type?.toLowerCase() === 'password';
  })

  // 显示字数
  const showLimitCount = computed(() => {
    return props.showLimitCount && props.maxlength && !props.disabled && !props.readonly && ['text', 'textarea'].includes(props.type?.toLowerCase());
  });

  const toggleShowPwd = () => {
    showPwd.value = !showPwd.value;
    pwdType.value = showPwd.value ? 'text' : 'password';
  }

  return {
    pwdType,
    showPwd,
    toggleShowPwd,
    showPassword,
    showLimitCount
  }
}

