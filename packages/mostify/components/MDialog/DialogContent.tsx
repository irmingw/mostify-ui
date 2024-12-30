import { defineComponent } from "vue";
import "./styles/content.scss";

export default defineComponent({
  name: "DialogContent",
  props: {
    show: Boolean,
    zIndex: Number,
    closeIcon: Boolean,
    title: String,
    width: String,
    fullscreen: Boolean,
    top: String,
    center: Boolean
  },
  emits: ["close"],
  setup(props, { slots, emit }) {
    return () => {
      const bodySlot = slots.default?.();
      return (
        <div
          style={{
            "--m-content-wrapper-index": props.zIndex,
            "--m-dialog-content-width": props.width,
            "--m-dialog-content-top": props.top
          }}
          onClick={e => {
            e.preventDefault();
            emit("close", e);
          }}
          class={{
            "m-dialog-content-wrapper": true,
            "m-dialog-content-fullscreen": props.fullscreen,
            "m-dialog-content-center": props.center
          }}>
          <div
            onClick={e => e.stopPropagation()}
            class={[
              "m-dialog-content",
              props.show ? "m-dialog-content-show" : "m-dialog-content-hide"
            ]}>
            <div class="m-dialog-content-background" />
            <div class="m-dialog-content-body">{bodySlot}</div>
            {props.closeIcon && (
              <m-icon
                class="m-dialog-close"
                name="close"
                onClick={e => emit("close", e)}></m-icon>
            )}
          </div>
        </div>
      );
    };
  }
});
