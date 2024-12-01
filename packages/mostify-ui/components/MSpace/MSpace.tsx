import { defineComponent, computed } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MSpace",
  props: {
    value: {
      type: String,
      default: "",
    },
    layout: {
      type: String,
      validator: (val: string) => ["x", "y"].includes(val),
      default: "x",
    },
  },
  setup(props, { slots }) {
    const layoutClass = computed(() =>
      props.layout === "y" ? "m-space-y" : "m-space-x"
    );
    const defaultItems = computed(() => (slots.default ? slots.default() : []));

    return () => {
      return (
        <div
          class={["m-space", layoutClass.value]}
          style={{
            "--size": props.value || "",
          }}
        >
          {defaultItems.value?.map((item, index) => {
            return (
              <div class="m-space-item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      );
    };
  },
});
