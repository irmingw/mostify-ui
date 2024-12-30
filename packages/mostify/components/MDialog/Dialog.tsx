import { defineComponent, Teleport, ref } from "vue";
import MTransition from "@/mostify/components/MTransition";
import { MIcon } from "@/mostify/components";
import DialogContent from "./DialogContent";
import MMask from "../MMask";
import { useShow, useEscClose } from "./hooks/useDialog";
import useProvider from "@/mostify/hooks/useProvider";
import "./styles/dialog.scss";
import {useLockScroll} from '@/mostify/hooks/useLockScroll'

export default defineComponent({
  name: "MDialog",
  components: { MIcon, MTransition, MMask, DialogContent },
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
    width: { type: String, default: "360px" },
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
    const dialogRef = ref<HTMLElement | null>(null);
    const dialogIndex = ref<number>(props.zIndex || zIndex || 1000);
    const { setClose, show } = useShow(props, emit);

   const { setLockScroll } = useLockScroll();
    useEscClose(props, show, setClose, dialogRef);

    const onEnter = async (_, done) => {
      setLockScroll(true);

      done();
    };
    const onLeave = async (_, done) => {
      await new Promise(resolve => setTimeout(resolve, props.duration || 300));
      setLockScroll(false);
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
              class={["m-dialog", props.customClass]}
              ref={dialogRef}
              style={{
                "--m-dialog-index": dialogIndex.value
              }}
              v-show={show.value}
              aria-modal={show.value}
              role="dialog">
              <MMask
                show={show.value}
                zIndex={dialogIndex.value}
                maskClose={props.maskClose}
                onClose={e => {
                  e.preventDefault();
                  setClose(e);
                }}
              />
              <DialogContent
                show={show.value}
                title={props.title}
                closeIcon={props.closeIcon}
                fullscreen={props.fullscreen}
                width={props.width}
                zIndex={props.zIndex}
                top={props.top}
                center={props.center}
                onClose={setClose}>
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
