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
  },
  emits: ["hide"],
  setup(props, { slots, emit }) {
    return () => {
      const bodySlot = slots.default?.();
      return (
        <div
          style={{
            "--m-content-wrapper-index": props.zIndex,
          }}
          onClick={e => {
            emit("hide", e);
          }}
          class={{
            "m-dialog-content-wrapper": true,
            "m-dialog-content-fullscreen": props.fullscreen,
            "m-dialog-content-width": props.width
          }}>
          <div
            onClick={e => e.stopPropagation()}
            class={[
              "m-dialog-content",
              props.show ? "m-dialog-content-show" : "m-dialog-content-hide"
            ]}>
            {bodySlot}
            {props.closeIcon && (
              <m-icon
                class="m-dialog-close"
                name="close"
                onClick={e => emit("hide", e)}></m-icon>
            )}
          </div>
        </div>
      );
    };
  }
});
