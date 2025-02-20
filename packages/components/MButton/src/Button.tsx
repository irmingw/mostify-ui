import { defineComponent, type PropType } from "vue";
import { BtnTypes, BtnShapes } from "./types";
import { useBtn } from "./useButton";
import { useRipple } from "@/hooks/useRipple";
import { createNameSpace } from "@/utils/createNameSpace";
import { type SizeType } from "@/typings/global";
import "./style.scss";

function Loading(marginRight: Boolean) {
  return (
    <span
      class="m-button__loading"
      style={{ marginRight: marginRight ? "8px" : 0 }}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        class="m-button__icon-loading">
        <path
          d="M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z"
          fill="currentColor"></path>
      </svg>
    </span>
  );
}

export default defineComponent({
  name: "MButton",
  props: {
    type: String as PropType<BtnTypes>,
    size: String as PropType<SizeType>,
    shape: { type: String as PropType<BtnShapes>, default: "" },
    disabled: Boolean,
    loading: Boolean,
    light: Boolean,
    block: { type: Boolean, default: false },
    tabindex: { type: Number, default: 0 },
    border: { type: Boolean, default: true },
    borderStyle: { type: String, default: "solid" }
  },
  emits: ["click", "focus", "blur"],
  setup(props, { slots, emit }) {
    const { showText, btnRef, btnSize, handleEmitType } = useBtn(props, emit);
    const ns = createNameSpace("button");
    const { setRipple, rippleRef } = useRipple(props);

    return () => {
      // left icon and right icon slot
      const Icon = slots.icon ? slots?.icon() : ''

      // main button
      return (
        <button
          class={[
            ns.b(),
            ns.m(props.type),
            ns.m(btnSize.value),
            ns.is("block", props.block),
            ns.m(props.shape),
            ns.is("light", props.light),
            ns.is("loading", props.loading),
            ns.is("disabled", props.disabled)
          ]}
          style={{
            "--m-button-border-width": props.border ? "1px" : "0",
            "--m-button-border-style": props.borderStyle
          }}
          aria-disabled={props.disabled}
          tabindex={props.tabindex}
          onMousedown={setRipple}
          ref={btnRef}
          type="button"
          onClick={e => handleEmitType(e, "click")}
          onFocus={e => handleEmitType(e, "focus")}
          onBlur={e => handleEmitType(e, "blur")}>
          {!props.loading && !props.disabled && (
            <div class="m-ripple" ref={rippleRef} />
          )}
          <span class={[ns.e("content")]}>
            {props.loading && Loading(showText.value)}
            {showText.value && (
              <>
                {Icon && <span class={[ns.e("icon")]}>{Icon}</span>}
                {slots.default && slots.default()}
              </>
            )}
          </span>
        </button>
      );
    };
  }
});
