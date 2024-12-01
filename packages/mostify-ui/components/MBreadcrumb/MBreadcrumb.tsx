import { defineComponent, computed } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/",
    },
    color: String,
    activeColor: String,
  },
  setup(props, { slots }) {
    const length = computed(() => slots?.default?.()?.length || 0);

    return () => (
      <div
        class="m-breadcrumb"
        style={{
          "--color": props.color,
          "--activeColor": props.activeColor,
        }}
      >
        {slots?.default?.()?.map((item, index) => (
          <>
            {item}
            {index >= 0 && index < length.value - 1 && (
              <span>
                {(slots.separator && slots.separator?.()) || props.separator}
              </span>
            )}
          </>
        ))}
      </div>
    );
  },
});
