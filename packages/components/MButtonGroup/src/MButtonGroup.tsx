import { defineComponent, provide, type PropType } from "vue";
import useProvider from "@/hooks/useProvider";
import { providerKey } from "@/utils/constants";
import { type SizeType } from "@/typings/global.ts";
import { createNameSpace } from "@/utils/createNameSpace";
import "./style.scss";

export default defineComponent({
  name: "MButtonGroup",
  props: {
    direction: {
      type: String,
      default: "horizontal" // vertical | horizontal
    },
    size: String as PropType<SizeType>
  },
  setup(props, { slots }) {
    const { size, zIndex } = useProvider();
    const ns = createNameSpace("button-group");
    // 提供给子组件使用，更新size和zIndex值
    provide(providerKey, { size: props.size || size, zIndex });
    return () => {
      const defaultSlot = slots.default?.();

      return <div class={[ns.b(), ns.m(props.direction)]}>{defaultSlot}</div>;
    };
  }
});
