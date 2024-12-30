import { defineComponent } from "vue";
import MMask from "../MMask";
import MButton from "../MButton";
import MIcon from "../MIcon";
import MsgIcon from "./MsgIcon";
import "./style.scss";

export default defineComponent({
  name: "Content",
  components: { MMask, MButton, MsgIcon },
  props: {
    title: String,
    message: String,
    icon: [Object, String],
    type: String,
    showClose: Boolean,
    customClass: String,
    show: Boolean,
    duration: Number,
    cancelText: String,
    confirmText: String,
    cancelButtonProp: Object,
    confirmButtonProp: Object,
    zIndex: Number,
    width: Number,
    iconSize: Number,
    iconColor: String,
    lockScroll: { type: Boolean, default: true },
    showIcon: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(props, { emit }) {
    return () => {
      return (
        <div
          class={["m-message-box", props.customClass]}
          aria-modal={props.show}
          role="dialog"
          style={{
            "--m-message-box-index": props.zIndex || 1000,
            "--m-message-box-width": `${props.width || 420}px`,
            "--m-message-box-duration": `${props.duration || 300}ms`
          }}>
          <MMask
            show={props.show}
            zIndex={props.zIndex}
            duration={props.duration}
          />
          <div
            class={[
              "m-message-wrapper",
              props.show ? "m-is-show" : "m-is-close"
            ]}>
            <div class="m-message-box-bg" />
            <div class="m-message-body">
              {props.showIcon && (
                <div
                  class="m-message-icon-wrapper"
                  style={{ color: props.iconColor }}>
                  {props.icon ? (
                    props.icon
                  ) : (
                    <MsgIcon size={props.iconSize} type={props.type} />
                  )}
                </div>
              )}

              <div class="m-message-main">
                {props.title && (
                  <header class="m-message-title">{props.title}</header>
                )}
                {props.message && (
                  <main class="m-message-message">{props.message}</main>
                )}
                {(props.cancelText || props.confirmText) && (
                  <footer class="m-message-footer">
                    {props.cancelText && (
                      <MButton
                        {...props.cancelButtonProp}
                        onClick={() => emit("close", "cancel")}>
                        {props.cancelText}
                      </MButton>
                    )}
                    {props.confirmText && (
                      <MButton
                        {...props.confirmButtonProp}
                        onClick={() => emit("close", "confirm")}>
                        {props.confirmText}
                      </MButton>
                    )}
                  </footer>
                )}
              </div>
            </div>
            {props.showClose && (
              <div
                class="m-message-close"
                onClick={() => emit("close", "cancel")}>
                <MIcon name="close" />
              </div>
            )}
          </div>
        </div>
      );
    };
  }
});
