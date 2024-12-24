import { defineComponent } from "vue";
import "./styles/index.scss";
import { useInput, useInputSuffixDefault } from "./hooks";
import MIcon from "../MIcon";

export default defineComponent({
  name: "MInput",
  components: { MIcon },
  props: {
    value: [String, Number],
    modelValue: [String, Number],
    name: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" },
    size: { type: String, default: "small" },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    width: { type: [String, Number], default: "" },
    autofocus: { type: Boolean, default: false },
    autocomplete: { type: String, default: "off" },
    maxlength: { type: [String, Number], default: "" },
    minlength: { type: [String, Number], default: "" },
    max: { type: [String, Number], default: "" },
    min: { type: [String, Number], default: "" },
    step: { type: [String, Number], default: "" },
    pattern: { type: String, default: "" },
    showLimitCount: { type: Boolean, default: false },
    showPasswordIcon: { type: Boolean, default: false }
  },
  // emits events
  emits: ["update:modelValue", "change", "focus", "blur"],
  // expose events
  exposed: ["focus", "blur"],
  setup(props, { emit, slots, expose }) {
    // useInput hook
    const {
      inputRef,
      inputValue,
      isFocus,
      setIsFocus,
      onChange,
      onClearValue
    } = useInput(props, emit);

    const { showPassword, showPwd, pwdType, toggleShowPwd, showLimitCount } =
      useInputSuffixDefault(props);

    const focus = () => {
      setIsFocus(true);
    };
    const blur = () => {
      setIsFocus(false);
    };
    // expose focus and blur method to parent component
    expose({ focus, blur });

    // render function
    return () => {
      const prefixSlot = slots?.prefix?.() || props.prefix;
      const suffixSlot = slots?.suffix?.() || props.suffix;
      const prependSlot = slots?.prepend?.() || props.prepend;
      const appendSlot = slots?.append?.() || props.append;

      const inputVNode = () => (
        <div
          onClick={() => setIsFocus(true)}
          style={{ width: props.width }}
          class={{
            "m-input": true,
            "is-disabled": props.disabled,
            "is-readonly": props.readonly,
            "is-focus": isFocus.value,
            "m-input-size-large": props.size === "large",
            "m-input-size-small": props.size === "small",
            "m-input-size-mini": props.size === "mini"
          }}>
          {prefixSlot && <div class="m-input-prefix">{prefixSlot}</div>}
          <input
            class="m-input-base"
            ref={inputRef}
            type={pwdType.value || props.type}
            disabled={props.disabled}
            placeholder={props.placeholder}
            readonly={props.readonly}
            value={inputValue.value}
            autofocus={props.autofocus}
            autocomplete={props.autocomplete}
            maxlength={props.maxlength}
            max={props.max}
            min={props.min}
            step={props.step}
            minlength={props.minlength}
            name={props.name}
            onInput={onChange}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
          />
          {props.clearable && inputValue.value && (
            <span
              class="m-input-suffix-icon-wrapper m-clearable"
              onClick={onClearValue}>
              <MIcon name="close-circle" />
            </span>
          )}

          {showPassword.value && (
            <span onClick={toggleShowPwd} class="m-input-suffix-icon-wrapper">
              <MIcon name={showPwd.value ? "eye" : "eye-close"} />
            </span>
          )}
          {showLimitCount.value && (
            <span class="m-input-limit-count">
              {`${inputValue.value?.length}/${props.maxlength}`}
            </span>
          )}
          {suffixSlot && <div class="m-input-suffix">{suffixSlot}</div>}
        </div>
      );

      // 是否需要包裹prepend和append插槽
      return prependSlot || appendSlot ? (
        <div
          class={{
            ["m-input-wrapper"]: true,
            ["has-prepend"]: prependSlot,
            ["has-append"]: appendSlot
          }}>
          {prependSlot && <div class="m-input-prepend">{prependSlot}</div>}
          {inputVNode()}
          {appendSlot && <div class="m-input-append">{appendSlot}</div>}
        </div>
      ) : (
        inputVNode()
      );
    };
  }
});
