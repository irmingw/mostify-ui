import { defineComponent } from "vue";

export default defineComponent({
  name: "MBreadcrumbItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    disabled: Boolean,
  },
  emits: ["click"],
  setup(props, { emit, slots }) {
    function handleClick(e: MouseEvent): void {
      e.preventDefault();
      if (props?.disabled) return;
      emit("click", e);
    }

    return () => (
      <div
        class={[`m-breadcrumb__item`, props.disabled ? "is__disabled" : ""]}
        data-disabled={props.disabled}
        onClick={handleClick}
      >
        {(slots.default && slots.default()) || props.title}
      </div>
    );
  },
});
