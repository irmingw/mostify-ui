import { defineComponent } from "vue";
import { createNameSpace } from "@/utils/createNameSpace";
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
    const ns = createNameSpace("space");

    return () => {
      const defaultItems = slots.default ? slots.default() : [];
      return (
        <div
          class={[ns.b(), ns.m(props.direction)]}
          style={{
            "--m-space-size": props.size || "",
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
