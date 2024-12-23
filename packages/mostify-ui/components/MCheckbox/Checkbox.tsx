import { defineComponent } from "vue";
import { useCheckbox } from "./hooks";
import "./style.scss";

export default defineComponent({
  name: "MCheckbox",
  props: {
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
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "update:checked",
    "update:indeterminate"
  ],
  
  setup(props, { emit, slots }) {
    const { checked, indeterminate, toggle } = useCheckbox(props, emit);

    return () => {
      const label = slots.default ? slots.default() : props.label;
      return (
        <div
          class={{
            "m-checkbox": true,
            "m-checkbox-indeterminate": indeterminate
          }}
          onClick={toggle}>
          <div class="m-checkbox-main">
            <span class="m-checkbox-state">
              <input
                type="checkbox"
                class="m-checkbox-input"
                checked={checked.value}
                disabled={props.disabled}
                value={props.value}
              />
              <span class="m-checkbox-box"></span>
            </span>
            <span class="m-checkbox-label">{label}</span>
          </div>
        </div>
      );
    };
  }
});
