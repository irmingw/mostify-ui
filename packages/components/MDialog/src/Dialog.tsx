import { defineComponent, Teleport, ref } from "vue";
import MOverlay from "@/components/MOverlay";
import { useVisible, useEscClose } from "./useDialog";
import useProvider from "@/hooks/useProvider";
import { createNameSpace } from "@/utils/createNameSpace";
import { useLockScroll } from "@/hooks/useLockScroll";
import MTransition from "@/components/MTransition";
import "./style.scss";
import { animate } from "@/utils/dom";

export default defineComponent({
  name: "MDialog",
  components: { MOverlay, MTransition },
  props: {
    modelValue: { type: Boolean, default: false },
    lockScroll: { type: Boolean, default: true },
    customClass: String,
    title: String,
    width: { type: String, default: "50%" },
    closeIcon: Boolean,
    fullscreen: Boolean,
    escapeClose: { type: Boolean, default: true },
    appendTarget: { type: String, default: "body" },
    top: { type: String, default: "80px" },
    zIndex: Number,
    center: Boolean,
    duration: { type: Number, default: 300 }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const ns = createNameSpace("dialog");
    const { zIndex } = useProvider();
    const dialogRef = ref<HTMLElement | null>(null);
    const fillRef = ref<HTMLElement | null>(null);
    const bodyRef = ref<HTMLElement | null>(null);
    const dialogIndex = ref<number>(props.zIndex || zIndex || 1000);
    const { setVisible, visible } = useVisible(props, emit);
    useEscClose(props, visible, setVisible, dialogRef);
    const { setLockScroll } = useLockScroll();

    const onEnter = (_, done) => {
      const duration = props.duration || 300;
      if (props.lockScroll) setLockScroll(true);
      animate(
        fillRef.value!,
        [
          {
            offset: 0,
            transform: "translateY(-24px)",
            opacity: 0
          },
          {
            offset: 0.33,
            transform: "translateY(0)",
            opacity: 0.66
          },
          {
            offset: 1,
            transform: "translateY(0)",
            opacity: 1
          }
        ],
        {
          duration,
          fill: "forwards"
        }
      );
      animate(
        bodyRef.value!,
        [
          {
            offset: 0,
            opacity: 0
          },
          {
            offset: 0.33,
            opacity: 0
          },
          {
            offset: 1,
            opacity: 1
          }
        ],
        {
          duration,
          fill: "forwards"
        }
      );
      done();
    };
    const onLeave = async (_, done) => {
      const duration = props.duration || 300;
      animate(
        fillRef.value!,
        [
          {
            offset: 0,
            transform: "translateY(0)",
            opacity: 1
          },
          {
            offset: 0.33,
            transform: "translateY(0)",
            opacity: 0.66
          },
          {
            offset: 1,
            transform: "translateY(-24px)",
            opacity: 0
          }
        ],
        {
          duration,
          fill: "forwards",
          easing: "ease-out",
        }
      );
      await animate(
        bodyRef.value!,
        [
          {
            offset: 0,
            opacity: 1
          },
          {
            offset: 0.33,
            opacity: 0
          },
          {
            offset: 1,
            opacity: 0
          }
        ],
        {
          duration,
          fill: "forwards",
          easing: "ease-out",
        }
      );
      done();
      if (props.lockScroll) setLockScroll(false);
    };

    return () => {
      // slots content slots footer slots header
      const defaultSlot = slots.default?.();
      const footerSlot = slots.footer?.();
      const headerSlot =
        slots.header?.() || props.title ? (
          <header class={[ns.e("header")]}>{props.title}</header>
        ) : null;

      // render dom
      return (
        <Teleport to={props.appendTarget || "body"}>
          <MTransition onEnter={onEnter} onLeave={onLeave}>
            <div
              class={[
                ns.b(),
                ns.is("fullscreen", props.fullscreen),
                ns.is("center", props.center),
                props.customClass
              ]}
              v-show={visible.value}
              ref={dialogRef}
              style={{
                "--m-dialog-index": dialogIndex.value,
                "--m-dialog-top": props.top,
                "--m-dialog-width": props.width,
                "--m-dialog-duration": `${props.duration || 300}ms`
              }}
              aria-modal={visible.value}
              role="dialog">
              {!props.fullscreen && (
                <MOverlay
                  modelValue={visible.value}
                  zIndex={dialogIndex.value}
                />
              )}
              <div class={[ns.e("wrapper")]} onClick={() => setVisible(false)}>
                <div class={[ns.e("inner")]} onClick={e => e.stopPropagation()}>
                  <section class={[ns.e("fill")]} ref={fillRef} />
                  <section class={[ns.e("content")]} ref={bodyRef}>
                    {headerSlot}
                    <main class={[ns.e("body")]}>{defaultSlot}</main>
                    {footerSlot && (
                      <footer class={[ns.e("footer")]}>{footerSlot}</footer>
                    )}
                  </section>
                </div>
              </div>
            </div>
          </MTransition>
        </Teleport>
      );
    };
  }
});
