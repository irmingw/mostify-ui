import { defineComponent, Teleport } from "vue";
import MTransition from "@/mostify/components/MTransition";
import { MIcon } from "@/mostify/components";
import Mask from "./Mask";
import DialogContent from "./DialogContent";
import {
  useDialogRef,
  useShow,
  useStyle,
  useLockScroll,
  useEscClose
} from "./hooks/useDialog";
import useProvider from "@/mostify/hooks/useProvider";
import "./styles/dialog.scss";

export default defineComponent({
  name: "MDialog",
  components: { MIcon, MTransition },
  props: {
    // 是否显示，默认为false。如果要显示，请设置为true。默认为false。
    modelValue: { type: Boolean, default: false },
    // 是否锁定滚动,默认为true。如果要解锁，请设置为false。默认为true。
    lockScroll: { type: Boolean, default: true },
    // 自定义类名
    customClass: String,
    // 标题名称
    title: String,
    // 显示宽度
    width: { type: String, default: "520px" },
    // 是否显示关闭图标，默认为false。如果要显示，请设置为true。默认为false。
    closeIcon: Boolean,
    // 关闭是否销毁DOM元素，默认不销毁。如果要销毁，请设置为true。默认为false。
    closeDestroy: { type: Boolean, default: false },
    // 遮罩层背景颜色，默认为空字符串。如果要设置，请设置为对应的颜色值。默认为""。
    maskBackgroundColor: String,
    // 是否全屏显示，默认为false。如果要全屏显示，请设置为true。默认为false。
    fullscreen: Boolean,
    // 按下Esc键是否隐藏，默认为true。如果要隐藏，请设置为false。默认为true。
    escapeClose: Boolean,
    // 按下遮罩层是否隐藏，默认为true。如果要隐藏，请设置为false。默认为true。
    maskClose: { type: Boolean, default: true },
    // 指定挂载元素，默认为body。如果要指定其他元素，请设置为对应的DOM元素或选择器字符串。默认为"body"。
    appendTarget: { type: [String, HTMLElement], default: "body" },
    // 距离顶部距离,默认为50%。如果要设置其他值，请设置为对应的字符串。默认为"50%"。
    top: { type: String, default: "80px" },
    // 自定义z-index，默认为1000。如果要设置其他值，请设置为对应的数字。默认为1000。
    zIndex: Number,
    // 边框圆角
    borderRadius: String,
    // 是否居中显示，默认为false。如果要居中显示，请设置为true。默认为false。
    center: Boolean,
    // 动画持续时间，默认为300毫秒。如果要设置其他值，请设置为对应的数字。默认为300毫秒。
    duration: { type: Number, default: 300 }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { zIndex } = useProvider();
    const { dialogRef, mainRef, maskRef } = useDialogRef();
    const { setShow, show } = useShow(props, emit);
    const { wrapperStyles, dialogStyles, dialogClass, dialogIndex } = useStyle(
      props,
      zIndex,
      show
    );
    useLockScroll(props, show);
    useEscClose(props, show, setShow, dialogRef);

    const onEnter = async (_, done) => {
      await new Promise(resolve => requestAnimationFrame(resolve));
      // await dialogAnimationShow({
      //   mask: maskRef.value,
      //   content: mainRef.value
      // });
      await new Promise(resolve => setTimeout(resolve, props.duration || 300));
      done();
    };
    const onLeave = async (_, done) => {
      // await dialogAnimationHide({
      //   mask: maskRef.value,
      //   content: mainRef.value
      // });
      await new Promise(resolve => setTimeout(resolve, props.duration || 300));
      done();
    };

    return () => {
      // slots content slots footer slots header
      const defaultSlot = slots.default?.();
      const footerSlot = slots.footer?.();
      const headerSlot =
        slots.header?.() || props.title ? (
          <header class="m-dialog-header">{props.title}</header>
        ) : null;

      // render dom
      return (
        <Teleport to={props.appendTarget || "body"}>
          <m-transition onEnter={onEnter} onLeave={onLeave}>
            <div
              class={dialogClass.value}
              ref={dialogRef}
              style={dialogStyles.value}
              v-show={show.value}
              data-show={show.value ? "on" : "off"}>
              <Mask
                show={show.value}
                ref={maskRef}
                zIndex={dialogIndex.value}
                maskClose={props.maskClose}
                onHide={e => {
                  e.preventDefault();
                  if (!props.maskClose) return;
                  setShow(e);
                }}
              />
              <DialogContent
                show={show.value}
                title={props.title}
                closeIcon={props.closeIcon}
                fullscreen={props.fullscreen}
                width={props.width}
                zIndex={props.zIndex}
                style={wrapperStyles.value}
                onHide={setShow}>
                {headerSlot}
                {defaultSlot}
                {footerSlot}
              </DialogContent>
            </div>
          </m-transition>
        </Teleport>
      );
    };
  }
});
