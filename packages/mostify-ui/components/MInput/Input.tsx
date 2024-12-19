import { defineComponent } from "vue";
import "./styles/input.scss";
import { useInputState, useInputClass } from "./hooks";

export default defineComponent({
  name: "MInput",
  props: {
    value: [String, Number],
    modelValue: [String, Number],
    placeholder: String,
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "small"
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      validator: function (val) {
        return (
          val === "success" ||
          val === "error" ||
          val === "warning" ||
          val === ""
        );
      },
      default: ""
    }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  exposed: ["focus", "blur"],
  setup(props, ctx) {
    const { inputRef, isFocus, setIsFocus, inputValue } = useInputState(props);
    const { inputClass } = useInputClass(props, isFocus);

    const onInputChange = e => {
      if (props.disabled || props.readonly) return;
      inputValue.value = e.target.value;
      ctx.emit("update:modelValue", inputValue.value);
      ctx.emit("change", inputValue.value);
    };
    const focus = () => {
      inputRef.value?.focus();
    };
    const blur = () => {
      inputRef.value?.blur();
    };
    ctx.expose({ focus, blur });

    return () => {
      const prefixSlot = ctx.slots?.prefix?.();
      const suffixSlot = ctx.slots?.suffix?.();
      const prependSlot = ctx.slots?.prepend?.();
      const appendSlot = ctx.slots?.append?.();

      const preClass = prependSlot || props.prepend ? "is-prepend" : "";
      const appendClass = appendSlot || props.append ? "is-append" : "";

      let names = inputClass.value;
      preClass && (names = names + " " + preClass);
      appendClass && (names = names + " " + appendClass);

      return (
        <div class={names}>
          {prependSlot || props.prepend ? (
            <div class="m-input-prepend">{prependSlot || props.prepend}</div>
          ) : null}

          <div class="m-input-content">
            {prefixSlot || props.prefix ? (
              <div class="m-input-prefix">{prefixSlot || props.prefix}</div>
            ) : null}
            <input
              class="m-input-inner"
              ref={inputRef}
              type={props.type}
              disabled={props.disabled}
              placeholder={props.placeholder}
              readonly={props.readonly}
              value={inputValue.value}
              autofocus={props.autofocus}
              onInput={onInputChange}
              onBlur={e => {
                setIsFocus(false);
                ctx.emit("blur", e);
              }}
              onFocus={e => {
                setIsFocus(true);
                ctx.emit("focus", e);
              }}
            />
            {props.clearable && inputValue.value && (
              <span
                class="m-input-clear"
                onClick={() => {
                  inputValue.value = "";
                  ctx.emit("update:modelValue", inputValue.value);
                  ctx.emit("change", inputValue.value);
                }}>
                <svg
                  class="m-input-clear-icon"
                  fill="currentColor"
                  viewBox="0 0 1024 1024">
                  <path d="M554.586353 512l170.556235-170.556235c11.444706-11.414588 11.595294-30.659765-0.180706-42.405647a29.906824 29.906824 0 0 0-42.405647-0.180706L512 469.413647l-170.556235-170.556235a30.208 30.208 0 0 0-42.405647 0.180706 29.906824 29.906824 0 0 0-0.180706 42.405647L469.413647 512l-170.556235 170.556235c-11.444706 11.414588-11.595294 30.659765 0.180706 42.405647a29.906824 29.906824 0 0 0 42.405647 0.180706L512 554.586353l170.556235 170.556235c11.414588 11.444706 30.659765 11.595294 42.405647-0.180706a29.906824 29.906824 0 0 0 0.180706-42.405647L554.586353 512zM512 993.882353C245.850353 993.882353 30.117647 778.149647 30.117647 512S245.850353 30.117647 512 30.117647s481.882353 215.732706 481.882353 481.882353-215.732706 481.882353-481.882353 481.882353z"></path>
                </svg>
              </span>
            )}
            {suffixSlot ||
              (props.suffix && (
                <div class="m-input-suffix">{suffixSlot || props.suffix}</div>
              ))}
          </div>

          {appendSlot || props.append ? (
            <div class="m-input-append">{appendSlot || props.append}</div>
          ) : null}
        </div>
      );
    };
  }
});
