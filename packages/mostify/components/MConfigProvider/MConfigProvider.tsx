import { defineComponent } from "vue";
export default defineComponent({
  name: "MConfigProvider",
  props: {
    locale: {
      type: String,
      default: "zh-CN"
    },
    size: {
      type: String,
      default: "small",
      validator: (v: string) => ["small", "mini", "large"].includes(v)
    }
  },

  setup(props, { slots }) {
    console.log(props);
    
    return () => <>{slots.default && slots.default()}</>;
  }
});
