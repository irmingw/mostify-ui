import { defineComponent } from "vue";
import MButton from "@/components/MButton";

export default defineComponent({
  name: "DialogContent",
  components: { MButton },
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
            <div class="m-dialog-content-background"></div>
            <div class="m-dialog-content-body">{bodySlot}</div>
            {props.closeIcon && (
              <MButton
                class="m-dialog__close"
                type="text"
                shape="circle"
                onClick={e => emit("close", e)}>
                <svg
                  class="m-icon_svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  width={18}
                  height={18}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                    p-id="9462"></path>
                </svg>
              </MButton>
            )}
          </div>
        </div>
      );
    };
  }
});
