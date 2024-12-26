import { defineComponent, ref } from "vue";
import MButton from "../MButton";
import MIcon from "../MIcon";
import "./alert.scss";

function AlertIcon({ type }) {
  switch (type) {
    case "success":
      return <MIcon size="20px" name="check-circle-fill" />;
    case "warning":
      return <MIcon size="20px" name="warning-circle-fill" />;
    case "danger":
      return <MIcon size="20px" name="close-circle-fill" />;
    default:
      return <MIcon size="20px" name="info-circle-fill" />;
  }
}
export default defineComponent({
  name: "MAlert",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    showClose: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { slots, emit }) {
    const show = ref(true);

    const onHandleClose = () => {
      show.value = false;
      emit("close");
    };
    return () => {
      const titleText = slots.title ? slots.title() : props.title;
      const defaultSlot = slots.default ? slots.default() : props.description;
      const iconSlot = slots.icon ? (
        slots.icon()
      ) : (
        <AlertIcon type={props.type} />
      );
      return (
        <div
          class={`m-alert m-alert-${props.type} ${props.dark ? "is-dark" : ""}`}
          style={{ display: show.value ? "block" : "none" }}>
          <main class="m-alert-main">
            {props.showIcon && iconSlot && (
              <div class="m-alert-icon">{iconSlot}</div>
            )}

            <div class="m-alert-content">
              {titleText && <div class="m-alert-title">{titleText}</div>}
              {defaultSlot && (
                <div class="m-alert-description">{defaultSlot}</div>
              )}
            </div>

            {props.showClose && (
              <span class="m-alert-close">
                <MButton
                  onClick={onHandleClose}
                  rightIcon="close"
                  type="text"
                  shape="circle"
                />
              </span>
            )}
          </main>
        </div>
      );
    };
  }
});
