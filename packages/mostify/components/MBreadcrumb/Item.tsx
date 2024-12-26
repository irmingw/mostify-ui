import { defineComponent } from "vue";
import "./styles/item.scss";

export default defineComponent({
  name: "MBreadcrumbItem",
  props: {
    label: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    href: { type: String, default: "" },
    target: { type: String, default: "_blank" }
  },
  setup(props, { slots }) {
    const label = slots?.default ? slots.default() : props.label;
    return () =>
      props.href && !props.disabled ? (
        <a
          class="m-breadcrumb-item m-breadcrumb-link"
          data-disabled={props.disabled}
          href={props.href}
          target={props.target}>
          {label}
        </a>
      ) : (
        <span class="m-breadcrumb-item" data-disabled={props.disabled}>
          {label}
        </span>
      );
  }
});
