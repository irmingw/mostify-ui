import { defineComponent } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MDivider",
  props: {
    direction: {
      type: String,
      default: "horizontal", // horizontal | vertical 
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
          "m-divider-horizontal": props.direction === "horizontal",
          "m-divider-vertical": props.direction === "vertical"
        }} />
    );
  }
});
