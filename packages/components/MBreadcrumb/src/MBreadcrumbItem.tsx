import { defineComponent } from "vue";
import { createNameSpace } from "@/utils/createNameSpace";
import "./style.scss";

export default defineComponent({
  name: "MBreadcrumbItem",
  props: {
    label: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    href: { type: String, default: "" },
    target: { type: String, default: "_blank" }
  },
  setup(props, { slots }) {
    const ns = createNameSpace("breadcrumb-item");
    return () => {
      const label = slots?.default ? slots.default() : props.label;
      const isLink = props.href && !props.disabled;
      return (
        <span
          class={[
            ns.b(),
            ns.is("disabled", props.disabled),
            ns.is("link", isLink)
          ]}
          aria-disabled={props.disabled}>
          {isLink ? (
            <a
              class={[ns.e("link")]}
              aria-disabled={props.disabled}
              href={props.href}
              target={props.target}>
              {label}
            </a>
          ) : (
            label
          )}
        </span>
      );
    };
  }
});
