import { defineComponent } from "vue";
import "./style.scss";

export default defineComponent({
  name: "MMask",
  props: {
    show: Boolean,
    zIndex: Number,
    bgColor: String,
    maskClose: Boolean,
    customClass: String,
    duration:{type:Number,default:300}
  },
  emits: ["close"],
  setup(props, { emit }) {
    return () => (
      <div
        style={{
          "--m-mask-bg": props.bgColor,
          "--m-mask-index": props.zIndex || 1000,
          "--m-mask-duration": `${props.duration || 300}ms`
        }}
        onClick={e => {
          e.stopPropagation();
          props.maskClose && emit("close", e);
        }}
        class={[
          "m-mask",
          props.show ? "m-mask-show" : "m-mask-close",
          props.customClass
        ]}
      />
    );
  }
});
