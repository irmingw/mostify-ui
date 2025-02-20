import { defineComponent } from "vue";
import { createNameSpace } from "@/utils/createNameSpace";
import './style.scss';

export default defineComponent({
  name: "MBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/"
    }
  },
  setup(props, { slots }) {
    const ns = createNameSpace("breadcrumb");

    return () => {
      const defaultSlots = slots.default?.();
      const separator = slots.separator ? slots.separator?.() : props.separator;

      return (
        <div class={[ns.b()]}>
          {defaultSlots?.map((item, index) => (
            <>
              {item}
              {index >= 0 && index < defaultSlots.length - 1 && (
                <span class={ns.e('separator')}>{separator}</span>
              )}
            </>
          ))}
        </div>
      );
    };
  }
});
