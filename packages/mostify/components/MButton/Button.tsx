import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { BtnTypes, BtnSizes, BtnShapes } from "./types";
import { useBtn } from "./hooks/useBtn";
import "./styles/btn.scss";
import MIcon from "../MIcon";

export default defineComponent({
  name: "MButton",
  props: {
    type: {
      type: String as PropType<BtnTypes>,
      default: "default"
    },
    size: String as PropType<BtnSizes>,
    shape: { type: String as PropType<BtnShapes>, default: "" },
    disabled: Boolean,
    loading: Boolean,
    border: Boolean,
    light: Boolean,
    leftIcon: String,
    rightIcon: String,
    block: { type: Boolean, default: false }
  },
  emits: ["click", "focus", "blur"],
  setup(props, { slots, emit }) {
    const { btnClass, contentShow, setClickXEvent, btnRef, rippleRef } =
      useBtn(props);

    function onChangeByType(e: Event, type: "click" | "focus" | "blur") {
      e.preventDefault();
      if (props.loading || props.disabled) return;
      emit(type, e);
    }

    const onmousedown = (e: MouseEvent) => {
      e.preventDefault();
      if (props.loading || props.disabled) return;
      setClickXEvent(e);
    };
    return () => {
      const leftIcon = slots.leftIcon ? (
        slots.leftIcon()
      ) : props.leftIcon ? (
        <MIcon name={props.leftIcon} />
      ) : (
        ""
      );
      const rightIcon = slots.rightIcon ? (
        slots.rightIcon()
      ) : props.rightIcon ? (
        <MIcon name={props.rightIcon} />
      ) : (
        ""
      );
      return (
        <button
          class={btnClass.value}
          onMousedown={onmousedown}
          ref={btnRef}
          style={{
            "--border-width": props.border ? "1px" : "0px",
            width: props.block ? "100%" : ""
          }}
          data-light={props.light ? "on" : "off"}
          onClick={e => onChangeByType(e, "click")}
          onFocus={e => onChangeByType(e, "focus")}
          onBlur={e => onChangeByType(e, "blur")}>
          {!props.loading && !props.disabled && (
            <div class="m-button-ripple-wrapper" ref={rippleRef} />
          )}
          <span class="m-button-main">
            {props.loading && (
              <span
                class="m-button-loading-icon-wrapper"
                style={{ marginRight: contentShow.value ? "8px" : 0 }}>
                <svg
                  viewBox="0 0 1024 1024"
                  width="1em"
                  height="1em"
                  class="m-button-icon-loading">
                  <path
                    d="M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z"
                    fill="currentColor"></path>
                </svg>
              </span>
            )}
            {contentShow.value && (
              <>
                {leftIcon && <span class="m-button-icon-left">{leftIcon}</span>}
                {slots.default && slots.default()}
                {rightIcon && (
                  <span class="m-button-icon-right">{rightIcon}</span>
                )}
              </>
            )}
          </span>
        </button>
      );
    };
  }
});
