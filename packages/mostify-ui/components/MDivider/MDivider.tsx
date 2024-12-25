import { defineComponent } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MDivider",
  props: {
    layout: {
      type: String,
      default: "y",
      validator: (v: string) => ["x", "y"].includes(v)
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "12px"
    },
    borderStyle:{
      type:String,
      default:"solid"
    }
  },

  setup(props) {
    return () => (
      <div
        style={{ "--color": props.color, "--size": props.size,"--border-style":props.borderStyle }}
        class={{
          "m-divider": true,
          "m-divider-y": props.layout === "y",
          "m-divider-x": props.layout === "x"
        }} />
    );
  }
});
