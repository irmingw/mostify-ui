import { defineComponent } from "vue";
import { createNameSpace } from "@/utils/createNameSpace";
import "./style.scss";

export default defineComponent({
  name: "MDivider",
  props: {
    direction: {
      type: String,
      default: "horizontal" // horizontal | vertical
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "12px"
    },
    borderStyle: {
      type: String,
      default: "solid"
    }
  },

  setup(props) {
    const ns = createNameSpace("divider");
    return () => (
      <div
        style={{
          "--m-divider-color": props.color,
          "--m-divider-size": props.size,
          "--m-divider-border-style": props.borderStyle
        }}
        class={[ns.b(), ns.m(props.direction)]}
      />
    );
  }
});
