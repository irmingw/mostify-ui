import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { BtnTypes, BtnSizes, BtnShapes } from "./types";
import { downRes } from "@/mostify-ui/directives/downRes";
import "./styles/style.scss";
import { useBtn } from "./hooks/useBtn";

export default defineComponent({
  name: "MButton",
  props: {
    type: String as PropType<BtnTypes>,
    size: String as PropType<BtnSizes>,
    shape: String as PropType<BtnShapes>,
    text: Boolean,
    disabled: Boolean,
    loading: Boolean,
    btnBgColor: String,
    btnBgHoverColor: String,
    btnBgActiveColor: String,
    ripple: { type: Boolean, default: true }
  },
  emits: ["click", "focus", "blur"],
  setup(props, { slots, emit }) {
    const {
      btnClass,
      btnStyle,
      contentShow,
      setClickXEvent,
      btnRef,
      rippleRef
    } = useBtn(props);

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
      return (
        <button
          class={btnClass.value}
          style={btnStyle.value}
          onMousedown={onmousedown}
          ref={btnRef}
          onClick={e => onChangeByType(e, "click")}
          onFocus={e => onChangeByType(e, "focus")}
          onBlur={e => onChangeByType(e, "blur")}>
          <span class="m-button-content">
            {props.ripple && (
              <div class="m-button_inner__ripple" ref={rippleRef} />
            )}

            {props.loading && (
              <span
                class="m-button__loading_wrapper"
                style={{ marginRight: contentShow.value ? "8px" : 0 }}>
                <svg viewBox="0 0 1024 1024" class="m-button-icon__loading">
                  <path
                    d="M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z"
                    fill="currentColor"></path>
                </svg>
              </span>
            )}
            {contentShow.value ? slots.default && slots.default() : null}
          </span>
        </button>
      );
    };
  }
});
