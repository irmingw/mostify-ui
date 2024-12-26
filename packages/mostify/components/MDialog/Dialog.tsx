import "./styles/dialog.scss";
import { defineComponent, Teleport } from "vue";
import type { PropType } from "vue";
import MTransition from "@/mostify/components/MTransition";
import { MButton } from "@/mostify/components";
import { useDialogRef, useDialogStyle } from "./hooks";
import {
  dialogAnimationHide,
  dialogAnimationShow,
  dialogAnimationShowTop
} from "./utils/dialogAnimation";
import { updateBodyScroll } from "@/mostify/utils/dom";

export default defineComponent({
  name: "MDialog",
  components: { MButton },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    },
    className: String,
    title: {
      type: String,
      default: ""
    },
    cancelBtnText: {
      type: String,
      default: ""
    },
    okBtnText: {
      type: String,
      default: ""
    },
    okBtnProps: {
      type: Object,
      default: () => ({ type: "primary" })
    },
    cancelBtnProps: {
      type: Object,
      default: () => ({ type: "default" })
    },
    width: {
      type: [Number, String] as PropType<number | string>,
      default: "50%"
    },
    height: {
      type: [Number, String] as PropType<number | string>,
      default: "auto"
    },
    showClose: {
      type: Boolean,
      default: true
    },
    maskBackgroundColor: {
      type: String,
      default: ""
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    escHide: {
      type: Boolean,
      default: true
    },
    maskHide: {
      type: Boolean,
      default: true
    },
    target: {
      type: [String],
      default: "body"
    },
    top: { type: String, default: "center" },
    _onClose: Function
  },
  emits: ["close"],
  setup(props, ctx) {
    const { wrapperRef, bodyRef, maskRef, dialogRef } = useDialogRef();
    const { contentStyle, wrapperStyle, bodyStyle } = useDialogStyle(props);
    const onVisibleHide = (type: string) => {
      props._onClose && props._onClose?.(type);
      ctx.emit("close", type);
    };
    const onHandleEscHideEvent = e => {
      if (
        (e.code === "Escape" || e.keyCode === 27 || e.key === "Escape") &&
        props.escHide &&
        dialogAnimationShowTop(dialogRef.value)
      ) {
        ctx.emit("close", { type: "cancel" });
      }
    };
    const onEnter = async (_, done) => {
      await new Promise(resolve => requestAnimationFrame(resolve));
      const transformOrigin = "center";

      wrapperRef.value.style.setProperty("transform-origin", transformOrigin);
      bodyRef.value.style.setProperty("transform-origin", transformOrigin);
      updateBodyScroll('.m-dialog[data-show="true"]');
      await dialogAnimationShow({
        mask: maskRef.value,
        content: bodyRef.value,
        wrapper: wrapperRef.value
      });
      props.escHide && document.addEventListener("keyup", onHandleEscHideEvent);
      done();
    };
    const onLeave = async (_, done) => {
      await dialogAnimationHide({
        mask: maskRef.value,
        content: bodyRef.value,
        wrapper: wrapperRef.value
      });
      updateBodyScroll('.m-dialog[data-show="true"]');
      document.removeEventListener("keyup", onHandleEscHideEvent);
      done();
    };

    return () => {
      // slots content slots footer slots header
      const defaultSlot = ctx.slots.default?.();
      const footerSlot = ctx.slots.footer?.();
      const headerSlot = ctx.slots.header?.();
      const bodySlot = ctx.slots.body?.();

      // render dom
      return (
        <Teleport to={props.target}>
          <MTransition onEnter={onEnter} onLeave={onLeave}>
            <div
              class={`m-dialog ${props.className || ""}`}
              v-show={props.visible}
              data-show={props.visible}
              ref={dialogRef}
              style={{
                "--m-dialog-mask-color": props.maskBackgroundColor
              }}>
              <section class="m-dialog-mask" ref={maskRef} />
              <div
                class="m-dialog-container"
                onClick={() => props.maskHide && onVisibleHide("cancel")}>
                <div style={wrapperStyle.value}>
                  <div class="m-dialog-cover" style={contentStyle.value}>
                    <div
                      class="m-dialog-content"
                      onClick={e => e.stopPropagation()}>
                      <div
                        class="m-dialog-content__background"
                        ref={wrapperRef}
                      />

                      <section
                        class="m-dialog-content__wrapper"
                        ref={bodyRef}
                        style={bodyStyle.value}>
                        {props.showClose && (
                          <MButton
                            type="text"
                            shape="square"
                            size="small"
                            class="m-dialog-content__close"
                            onClick={() => onVisibleHide("cancel")}>
                            <svg
                              fill="currentColor"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="5090"
                              width="28"
                              height="28">
                              <path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"></path>
                            </svg>
                          </MButton>
                        )}

                        {headerSlot
                          ? headerSlot
                          : props.title && (
                              <header class="m-dialog__header">
                                <span class="m-dialog-title">
                                  {props.title}
                                </span>
                              </header>
                            )}

                        {bodySlot ? (
                          bodySlot
                        ) : (
                          <main class="m-dialog__body">
                            {defaultSlot || props.content}
                          </main>
                        )}

                        {footerSlot
                          ? footerSlot
                          : (props.cancelBtnText || props.okBtnText) && (
                              <footer class="m-dialog__footer">
                                {props.cancelBtnText && (
                                  <MButton
                                    {...props.cancelBtnProps}
                                    onClick={() => onVisibleHide("cancel")}>
                                    {props.cancelBtnText}
                                  </MButton>
                                )}
                                {props.okBtnText && (
                                  <MButton
                                    {...props.okBtnProps}
                                    onClick={() => onVisibleHide("ok")}>
                                    {props.okBtnText}
                                  </MButton>
                                )}
                              </footer>
                            )}
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MTransition>
        </Teleport>
      );
    };
  }
});
