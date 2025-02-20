import { defineComponent, ref } from "vue";
import useProvider from "@/hooks/useProvider";
import Transition from "@/components/MTransition/Transition";
import "./style.scss";
import { animate } from "@/utils/dom";

export default defineComponent({
  name: "MOverlay",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    overlayClass: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 300
    },
    // 点击遮罩层是否关闭
    clickClose: {
      type: Boolean,
      default: true
    },
    backgroundColor: String
  },
  emits: ["update:modelValue", "change"],
  setup(props, { slots, emit }) {
    const { zIndex } = useProvider();
    const fillRef = ref<HTMLElement>(null);

    const onHandleClick = (e: Event) => {
      if (props.clickClose) {
        emit("update:modelValue", false);
      }
      emit("change", e);
    };

    const onEnter = async (_, done) => {
      await animate(
        fillRef.value,
        [
          { opacity: 0, offset: 0 },
          { opacity: 1, offset: 1 }
        ],
        {
          duration: props.duration,
          easing: "linear",
          fill: "forwards"
        }
      );
      done();
    };

    const onLeave = async (_, done) => {
      await animate(
        fillRef.value,
        [
          { opacity: 1, offset: 0 },
          { opacity: 0, offset: 1 }
        ],
        {
          duration: props.duration,
          fill: "forwards",
          easing: "linear"
        }
      );
      done();
    };

    return () => {
      return (
        <Transition onEnter={onEnter} onLeave={onLeave}>
          <div
            v-show={props.modelValue}
            class={["m-overlay", props.overlayClass]}
            style={{
              zIndex: props.zIndex || zIndex || 1000,
              "--m-overlay-duration": (props.duration || 300) + "ms",
              "--m-overlay-fill": props.backgroundColor
            }}
            onClick={onHandleClick}>
            <div class="m-overlay-fill" ref={fillRef}></div>
            <div class="m-overlay-content">
              {slots?.default && slots.default()}
            </div>
          </div>
        </Transition>
      );
    };
  }
});
