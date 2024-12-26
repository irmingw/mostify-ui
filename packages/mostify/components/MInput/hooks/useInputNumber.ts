import { computed } from "vue";
import { add, subtract } from "@/mostify/utils/common";

export const useControl = props => {
  const showControl = computed(() => {
    return !!props.controls;
  });
  const isRight = computed(() => props.controlsPosition === "right");
  return { showControl, isRight };
};

// 新增和减少的逻辑封装起来
export const useIncreaseDecrease = (props, value, setValue) => {
  const increaseDisabled = computed(() => {
    return value.value >= props.max;
  });
  const decreaseDisabled = computed(() => {
    return value.value <= props.min;
  });

  const increase = () => {
    if (increaseDisabled.value || props.disabled || props.readonly) return;
    const step = parseFloat(props.step) || 1;
    const precision = parseInt(props.precision) || 0;
    const val = add(parseFloat(value.value), step);

    if (val > props.max) {
      setValue(props.max);
      return;
    }
    setValue(val.toFixed(precision));
  };

  const decrease = () => {
    if (decreaseDisabled.value || props.disabled || props.readonly) return;
    const step = parseFloat(props.step) || 1;
    const precision = parseInt(props.precision) || 0;
    const val = subtract(parseFloat(value.value), step);

    if (val < props.min) {
      setValue(props.min);
      return;
    }

    if(val > props.max){
      setValue(props.max);
      return;
    }
    setValue(val.toFixed(precision));
  };

  return { increase, decrease, decreaseDisabled, increaseDisabled };
};
