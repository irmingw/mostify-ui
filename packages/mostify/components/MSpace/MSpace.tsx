import { defineComponent, computed } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MSpace",
  props: {
    size: {
      type: String,
      default: ""
    },
    direction: {
      type: String, // dec 'horizontal' | 'vertical'
      default: "horizontal"
    },
    alignItems: { type: String, default: "flex-start" }
  },
  setup(props, { slots }) {
    const layoutClass = computed(() =>
      props.direction === "horizontal"
        ? "m-space-horizontal"
        : "m-space-vertical"
    );
    return () => {
      const defaultItems = slots.default ? slots.default() : [];
      return (
        <div
          class={["m-space", layoutClass.value]}
          style={{
            "--size": props.size || "",
            "align-items": props.alignItems || ""
          }}>
          {defaultItems?.map((item, index) => {
            return (
              <div class="m-space-item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      );
    };
  }
});
