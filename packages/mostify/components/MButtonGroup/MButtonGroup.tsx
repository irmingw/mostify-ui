import { defineComponent, provide, type PropType } from "vue";
import useProvider from "@/mostify/hooks/useProvider";
import { providerKey } from "@/mostify/utils/constants";
import { type SizeType } from "@/mostify/types/types";
import "./style.scss";

export default defineComponent({
  name: "MButtonGroup",
  props: {
    layout: {
      type: String,
      default: "x",
      validator: (v: string) => ["x", "y"].includes(v)
    },
    size: String as PropType<SizeType>
  },
  setup(props, { slots }) {
    const { size, zIndex } = useProvider();
    // 提供给子组件使用，更新size和zIndex值
    provide(providerKey, { size: props.size || size, zIndex });
    return () => {
      const defaultSlot = slots.default?.();
      
      return (
        <div
          class={[
            "m-button-group",
            props.layout === "y" ? "m-button-layout-y" : "m-button-layout-x"
          ]}>
          {defaultSlot}
        </div>
      );
    };
  }
});
