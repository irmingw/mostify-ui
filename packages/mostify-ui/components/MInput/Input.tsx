import { defineComponent } from "vue";
import "./styles/base.scss";
import { useInputState, useInputClass } from "./hooks";

export default defineComponent({
  name: "MInput",
  props: {
    value: { type: [String, Number], default: "" },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
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
    borderWidth: {
      type: [String, Number],
      default: "1px"
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  exposed: ["focus", "blur"],
  setup(props, ctx) {
    const { inputRef, isFocus, setIsFocus, inputValue, showClear } =
      useInputState(props);
    const { inputClass, inputStyles } = useInputClass(props, isFocus);

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

      return (
        <div
          class={`${inputClass.value} ${
            prependSlot || props.prepend ? "m-input__hasPrepend" : ''
          } ${appendSlot || props.append ? "m-input__hasAppend" : ''}`}
          style={inputStyles.value}>
          {prependSlot || props.prepend ? (
            <div class="m-input__prepend">{prependSlot || props.prepend}</div>
          ) : null}
          <div class="m-input__main">
            {prefixSlot || props.prefix ? (
              <div class="m-input__prefix">{prefixSlot || props.prefix}</div>
            ) : null}
            <input
              class="m-input__inner"
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
            {showClear.value && (
              <span
                class="m-input__clear"
                onClick={() => {
                  inputValue.value = "";
                  ctx.emit("update:modelValue", inputValue.value);
                  ctx.emit("change", inputValue.value);
                }}>
                <svg
                  class="icon"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M554.586353 512l170.556235-170.556235c11.444706-11.414588 11.595294-30.659765-0.180706-42.405647a29.906824 29.906824 0 0 0-42.405647-0.180706L512 469.413647l-170.556235-170.556235a30.208 30.208 0 0 0-42.405647 0.180706 29.906824 29.906824 0 0 0-0.180706 42.405647L469.413647 512l-170.556235 170.556235c-11.444706 11.414588-11.595294 30.659765 0.180706 42.405647a29.906824 29.906824 0 0 0 42.405647 0.180706L512 554.586353l170.556235 170.556235c11.414588 11.444706 30.659765 11.595294 42.405647-0.180706a29.906824 29.906824 0 0 0 0.180706-42.405647L554.586353 512zM512 993.882353C245.850353 993.882353 30.117647 778.149647 30.117647 512S245.850353 30.117647 512 30.117647s481.882353 215.732706 481.882353 481.882353-215.732706 481.882353-481.882353 481.882353z"></path>
                </svg>
              </span>
            )}
            {suffixSlot ||
              (props.suffix && (
                <div class="m-input__suffix">{suffixSlot || props.suffix}</div>
              ))}
          </div>

          {appendSlot || props.append ? (
            <div class="m-input__append">{appendSlot || props.append}</div>
          ) : null}
        </div>
      );
    };
  }
});
