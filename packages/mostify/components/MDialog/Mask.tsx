import { defineComponent } from "vue";
import "./styles/mask.scss";

export default defineComponent({
  name: "Mask",
  props: {
    show: Boolean,
    zIndex: Number,
    bgColor: String,
    maskClose: Boolean
  },
  emits: ["hide"],
  setup(props, { expose, emit }) {
    return () => (
      <div
        style={{
          "--m-mask-bg": props.bgColor,
          "--m-mask-index": props.zIndex
        }}
        onClick={e => {
          e.stopPropagation();
          props.maskClose && emit("hide",e);
        }}
        class={["m-mask", props.show ? "m-mask-show" : "m-mask-hide"]}
      />
    );
  }
});
