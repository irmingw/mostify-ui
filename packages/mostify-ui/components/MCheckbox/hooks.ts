
import { ref } from 'vue'
export const useCheckbox = (props, emit) => {
  const indeterminate = ref(props.indeterminate);
  const checked = ref(props.checked);
  
  const toggle = () => { 
    if(props.disabled) return;
    checked.value = !checked.value;
    indeterminate.value = false;
    emit('update:checked', checked.value);
    emit('update:indeterminate', indeterminate.value);
    emit('change', checked.value);
    console.log('checked.value', checked.value);
  }


  return {
    toggle,
    indeterminate,
    checked
  }
}