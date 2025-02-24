import { defineComponent, PropType } from "vue";
import { useCheckbox } from "./hooks";
import { SizeType } from "@/typings/global.ts";
import { createNameSpace } from "@/utils/createNameSpace";
import useProvider from "@/hooks/useProvider";
import { useRipple } from "@/hooks/useRipple";
import "./style.scss";

function CheckboxState({ checked, indeterminate }) {
  if (checked) {
    return (
      <svg
        class="m-icon__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-hidden="true">
        <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>
      </svg>
    );
  } else if (indeterminate) {
    return (
      <svg
        class="m-icon__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        fill="currentColor"
        aria-hidden="true">
        <path d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>
      </svg>
    );
  } else {
    return (
      <svg
        class="m-icon__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-hidden="true">
        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"></path>
      </svg>
    );
  }
}

export default defineComponent({
  name: "MCheckbox",
  props: {
    size: String as PropType<SizeType>,
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ""
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: false
    }
  },
  emits: ["update:modelValue", "change", "update:indeterminate"],

  setup(props, { emit, slots }) {
    const { checked, indeterminate, toggle } = useCheckbox(props, emit);
    const ns = createNameSpace("checkbox");
    const { size } = useProvider();
    const { rippleRef, setRipple } = useRipple(props);

    return () => {
      const label = slots.default ? slots.default() : props.label;
      return (
        <div
          class={[
            ns.b(),
            ns.m(props.size || size || "small"),
            ns.is("indeterminate", indeterminate.value),
            ns.is("checked", checked.value),
            ns.is("readonly", props.readonly),
            ns.is("disabled", props.disabled)
          ]}
          aria-disabled={props.disabled}
          aria-checked={checked.value}
          aria-indeterminate={indeterminate.value}
          onClick={toggle}>
          <div class={[ns.e("wrapper")]}>
            <span class={[ns.e("inner")]} onMousedown={setRipple}>
              <div ref={rippleRef} class={[ns.e("ripple")]}></div>
              <div class={[ns.e("control")]}>
                {CheckboxState({
                  checked: checked.value,
                  indeterminate: indeterminate.value
                })}
              </div>
            </span>
            <span class={[ns.e("label")]}>{label}</span>
            <input
              type="checkbox"
              class={[ns.e("input")]}
              checked={checked.value}
              disabled={props.disabled}
              readonly={props.readonly}
              value={props.value}
            />
          </div>
        </div>
      );
    };
  }
});
