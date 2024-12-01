import { defineComponent, Teleport } from "vue";
import MTransition from "@/mostify-ui/components/MTransition";
import "./style.scss";
import { animate } from "@/utils/dom";

export default defineComponent({
  name: "MMask",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "rgba(0, 0, 0, .35)"
    },
    maskHide: {
      type: Boolean,
      default: true
    }
  },
  emits: ["hide"],
  setup(props, ctx) {
    const onCloseMask = async () => {
      if (!props.maskHide) return;
      ctx.emit("hide", false);
    };
    const onEnter = async (el, done) => {
      await animate(
        el,
        [
          { opacity: 0, offset: 0 },
          { opacity: 1, offset: 1 }
        ],
        { duration: 300 }
      );
      done();
    };

    const onLeave = async (el, done) => {
      await animate(
        el,
        [
          { opacity: 1, offset: 0 },
          { opacity: 0, offset: 1 }
        ],
        { duration: 200 },
        60
      );
      done();
    };

    return () => {
      const vNodes = ctx.slots.default && ctx.slots.default();
      return (
        <Teleport to="body">
          <MTransition onEnter={onEnter} onLeave={onLeave}>
            <div
              class={"m-mask"}
              v-show={props.visible}
              onClick={onCloseMask}
              style={{
                "--m-mask-background": props.background
              }}>
              <div class="m-mask-bg" />
              <div onClick={e => e.stopPropagation()} class="m-mask-body">
                {vNodes}
              </div>
            </div>
          </MTransition>
        </Teleport>
      );
    };
  }
});
