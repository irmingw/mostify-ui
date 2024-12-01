import { defineComponent, provide } from "vue";
import { providerKey } from "@/mostify-ui/config/config";
export default defineComponent({
  name: "MConfigProvider",
  props: {
    locale: {
      type: String,
      default: "zh-CN",
    },
    size: {
      type: String,
      default: "small",
      validator: (v: string) => ["small", "mini", "large"].includes(v),
    },
  },

  setup(props, { slots }) {
    provide(providerKey, props);
    return () => <>{slots.default && slots.default()}</>;
  },
});
