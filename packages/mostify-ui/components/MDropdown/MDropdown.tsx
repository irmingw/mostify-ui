import {
  defineComponent,
  PropType,
  ref,
  Teleport,
  onMounted,
  onUnmounted,
  computed,
  onBeforeMount,
  reactive,
  watch
} from "vue";
import { PlacementType } from "@/mostify-ui/types/types";
import "./style.scss";
import { getNodeRect, isSameOrChildNode } from "@/utils/dom";
import animateOption from "./animateOption";
import { delay } from "@/utils/utils";
import { getAnimateEnd } from "@/utils/dom";
import { getRect } from "./getRect";

export default defineComponent({
  name: "MDropdown",
  props: {
    placement: {
      type: String as PropType<PlacementType>,
      default: "bottomLeft"
    },
    trigger: {
      type: String,
      default: "click",
      validator: (value: string) => ["hover", "click"].includes(value)
    },
    // 隐藏是否销毁
    destroyOnHide: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    open: { type: Boolean, default: false },
    toBody: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const triggerRef = ref<HTMLElement>(null);
    const dropdownContentRef = ref<HTMLElement>(null);
    const bodyRef = ref<HTMLElement>(null);
    const show = ref(false);
    const state = reactive({
      top: "0",
      left: "0",
      waitChange: false,
      renderToDom: null
    });
    const hideState = ref(false);
    let timer = null;
    const isShow = computed(() => {
      return props.destroyOnHide ? show.value : true;
    });
    let trigger: HTMLElement | Element | null = null;

    watch(
      () => props.trigger,
      () => {
        unBindEvent();
        bindEvent();
      }
    );

    /**
     * 处理点击事件 --- start ---
     */

    /**
     * 处理点击事件 --- end ---
     */

    function renderRect() {
      const rect = getNodeRect(trigger);
      const cRect = getNodeRect(bodyRef.value);
      const { top, left } = getRect(props.placement, rect, cRect);
      state.top = `${top}px`;
      state.left = `${left}px`;
      dropdownContentRef.value.style.minWidth = `${rect.width}px`;
    }

    function scrollListenHandle() {
      if (isShow.value) {
        renderRect();
      }
    }

    // 注册显示事件
    async function showDropdown() {
      show.value = true;
      hideState.value = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      // 设置不可触发事件
      state.waitChange = true;
      await new Promise(resolve => requestAnimationFrame(resolve));
      renderRect();
      window.addEventListener("scroll", scrollListenHandle, false);
      // 执行动画
      animateOption.cShow(bodyRef.value);
      animateOption.bgShow(dropdownContentRef.value);
      // 等待执行完成后
      await getAnimateEnd(bodyRef.value).catch(() => {});
      state.waitChange = false;
    }
    function handleClickHandle() {
      if (state.waitChange || props.disabled) return;
      let value = !show.value;

      if (value) {
        showDropdown();
      } else {
        hideDropdown();
      }
    }

    function triggerMouseEnter() {
      if (state.waitChange || props.disabled || show.value) return;
      showDropdown();
    }
    function hideDropdown() {
      if (state.waitChange) return;
      if (hideState.value) {
        clearTimeout(timer);
        timer = null;
      }
      hideState.value = true;

      timer = setTimeout(async () => {
        if (hideState.value) {
          state.waitChange = true;
          animateOption.cHide(bodyRef.value);
          animateOption.bgHide(dropdownContentRef.value);
          await delay(0);
          await getAnimateEnd(bodyRef.value).catch(() => {});
          window.removeEventListener("scroll", scrollListenHandle, false);
          show.value = false;
          state.waitChange = false;
        }
      }, 60);
    }
    function clickHideListenHandle(e) {
      const el = e.target;
      if (!el) return;
      if (isSameOrChildNode(triggerRef.value, el)) return;
      hideDropdown();
    }
    function onContentMouseEnter() {
      hideState.value = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
        show.value = true;
      } else {
        hideState.value = false;
        show.value = true;
      }
    }

    /**
     * 事件注册和解绑 -- start ---
     */
    function bindEvent() {
      window.addEventListener("click", clickHideListenHandle, true);
      if (props.trigger === "click") {
        trigger?.addEventListener("click", handleClickHandle, false);
      } else {
        trigger?.addEventListener("mouseenter", triggerMouseEnter, false);
        trigger?.addEventListener("mouseleave", hideDropdown, false);
        dropdownContentRef.value?.addEventListener(
          "mouseenter",
          onContentMouseEnter,
          false
        );
        dropdownContentRef.value?.addEventListener(
          "mouseleave",
          hideDropdown,
          false
        );
      }
    }
    // 销毁事件
    function unBindEvent() {
      trigger?.removeEventListener("click", handleClickHandle, false);
      window.removeEventListener("click", clickHideListenHandle, false);

      trigger?.removeEventListener("mouseenter", triggerMouseEnter, false);
      trigger?.removeEventListener("mouseleave", hideDropdown, false);

      dropdownContentRef.value?.removeEventListener(
        "mouseenter",
        onContentMouseEnter,
        false
      );
      dropdownContentRef.value?.removeEventListener(
        "mouseleave",
        hideDropdown,
        false
      );
    }

    /**
     * 事件注册和解绑 -- end ---
     */

    onBeforeMount(() => {
      if (!document.querySelector("#m-inset__body")) {
        const insetBody = document.createElement("div");
        insetBody.setAttribute("id", "m-inset__body");
        document.querySelector("body")?.appendChild(insetBody);
      }
    });
    onMounted(() => {
      if (triggerRef.value.children?.length === 1) {
        trigger = triggerRef.value.children[0] || null;
      } else {
        trigger = triggerRef.value || null;
      }
      bindEvent();
    });

    onUnmounted(() => {
      unBindEvent();
    });

    return () => {
      console.log(slots.content());
      return (
        <div>
          <div
            class="m-dropdown"
            ref={triggerRef}
            style={{ "pointer-events": state.waitChange ? "none" : "all" }}>
            {slots.default && slots.default()}
          </div>

          <Teleport to={"#m-inset__body"}>
            {isShow.value && (
              <div
                class="m-dropdown__content m-box-shadow"
                v-show={show.value}
                ref={dropdownContentRef}
                style={{
                  "--top": state.top,
                  "--left": state.left,
                  "pointer-events": state.waitChange ? "none" : "all"
                }}>
                <div class="m-dropdown__body" ref={bodyRef}>
                  {slots.content &&
                    slots.content()?.map(item => {
                      item.props = { ...item.props };
                      return item;
                    })}
                </div>
              </div>
            )}
          </Teleport>
        </div>
      );
    };
  }
});
