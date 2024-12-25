import { defineComponent } from "vue";
import { useCheckbox } from "./hooks";
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
    size: {
      type: String,
      default: "small",
      validator(value: string) {
        return ["mini", "small", "large"].includes(value);
      }
    },
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
    indeterminate: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ""
    },
    modelValue: {
      type: [String, Number, Boolean,Array],
      default: false
    }
  },
  emits: ["update:modelValue", "change", "update:indeterminate"],

  setup(props, { emit, slots }) {
    const { checked, indeterminate, toggle } = useCheckbox(props, emit);

    return () => {
      const label = slots.default ? slots.default() : props.label;
      return (
        <div
          class={{
            "m-checkbox": true,
            "m-checkbox-disabled": props.disabled,
            "m-checkbox-checked": checked.value,
            "m-checkbox-indeterminate": indeterminate.value,
            "m-checkbox-size-mini": props.size === "mini",
            "m-checkbox-size-small": props.size === "small",
            "m-checkbox-size-large": props.size === "large"
          }}
          data-disabled={props.disabled}
          data-checked={checked.value}
          data-indeterminate={indeterminate.value}
          data-value={props.value}
          onClick={toggle}>
          <div class="m-checkbox-wrapper">
            <span class="m-checkbox-control-wrapper">
              <div class="m-checkbox-control-main">
                <div class="m-checkbox-control-inner">
                  {CheckboxState({
                    checked: checked.value,
                    indeterminate: indeterminate.value
                  })}
                </div>
              </div>
            </span>
            <span class="m-checkbox-label">{label}</span>
            <input
              type="checkbox"
              class="m-checkbox-input"
              checked={checked.value}
              disabled={props.disabled}
              value={props.value}
            />
          </div>
        </div>
      );
    };
  }
});
