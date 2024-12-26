import { defineComponent } from "vue";
import "./styles/index.scss";

export default defineComponent({
  name: "MBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/"
    }
  },
  setup(props, { slots }) {
    const defaultSlots = slots.default?.();
    const separator = slots.separator ? slots.separator?.() : props.separator;

    return () => (
      <div class="m-breadcrumb">
        {defaultSlots?.map((item, index) => (
          <>
            {item}
            {index >= 0 && index < defaultSlots.length - 1 && (
              <span class="m-breadcrumb-separator">{separator}</span>
            )}
          </>
        ))}
      </div>
    );
  }
});
