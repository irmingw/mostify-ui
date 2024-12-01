import { defineComponent, provide, inject } from "vue";
import "./style.scss";
import { providerKey } from "@/mostify-ui/config/config";

export default defineComponent({
  name: "MButtonGroup",
  props: {
    layout: {
      type: String,
      default: "x",
      validator: (v: string) => ["x", "y"].includes(v),
    },
    size: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    console.log(props.size, "button");

    const injectData = inject(providerKey, { size: "" });

    provide(providerKey, { size: props.size || injectData.size });
    return () => (
      <div
        class={[
          "m-button__group",
          props.layout === "y" ? "m-button__group_y" : "m-button__group_x",
        ]}
      >
        {slots.default && slots.default()}
      </div>
    );
  },
});
