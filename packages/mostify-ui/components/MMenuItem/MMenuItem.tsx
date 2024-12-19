import { defineComponent } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MMenuItem",
  props: {
    disabled: Boolean,
    label: String
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    function handleClick(e: MouseEvent) {
      if (props.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      emit("click", e);
    }
    return () => (
      <div
        class={["m-menu__item", props.disabled ? "is__disabled" : ""]}
        data-disabled={props.disabled}
        aria-disabled={props.disabled}
        onClick={handleClick}>
        {(slots.default && slots.default()) || props.label}
      </div>
    );
  }
});
