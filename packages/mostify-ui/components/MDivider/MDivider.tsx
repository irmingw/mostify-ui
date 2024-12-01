import { defineComponent, computed } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MDivider",
  props: {
    layout: {
      type: String,
      default: "x",
      validator: (v: string) => ["x", "y"].includes(v),
    },
    color: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "12px",
    },
  },

  setup(props) {
    const dividerClass = computed(() =>
      props.layout === "y" ? "m-divider-y" : "m-divider-x"
    );

    return () => (
      <div
        style={{ "--color": props.color, "--size": props.size }}
        class={["m-divider", dividerClass.value]}
      ></div>
    );
  },
});
