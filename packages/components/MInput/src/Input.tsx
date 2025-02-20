import { defineComponent, type PropType } from "vue";
import MIcon from "@/components/MIcon";
import { useValue, usePwd, useLimitCount } from "@/hooks/input/useState";
import { useFocus } from "@/hooks/useFocus";
import { SizeType } from "@/typings/global.ts";
import { createNameSpace } from "@/utils/createNameSpace";
import useProvider from "@/hooks/useProvider";
import "./style.scss";

export default defineComponent({
  name: "MInput",
  components: { MIcon },
  props: {
    value: [String, Number],
    modelValue: [String, Number],
    name: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" },
    size: String as PropType<SizeType>,
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    prepend: { type: String, default: "" },
    append: { type: String, default: "" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    width: { type: String, default: "" },
    autofocus: { type: Boolean, default: false },
    autocomplete: { type: String, default: "off" },
    maxlength: { type: [String, Number], default: "" },
    minlength: { type: [String, Number], default: "" },
    max: { type: [String, Number], default: "" },
    min: { type: [String, Number], default: "" },
    step: { type: [String, Number], default: "" },
    pattern: { type: String, default: "" },
    showLimitCount: { type: Boolean, default: false },
    showPasswordIcon: { type: Boolean, default: false },
    tabindex: [Number, String]
  },
  // emits events
  emits: ["update:modelValue", "change", "focus", "blur"],
  // expose events
  exposed: ["focus", "blur"],
  setup(props, { emit, slots, expose }) {
    // useInput hook
    const { value, setValue } = useValue(props, emit);
    const { domRef, isFocus, setIsFocus } = useFocus();
    const { type, showPwdIcon, isOpenEye, toggleShowPwd } = usePwd(props);
    const { showLimitCount } = useLimitCount(props);
    const { size } = useProvider();
    const ns = createNameSpace("input");
    // expose focus and blur method to parent component
    expose({ focus: () => setIsFocus(true), blur: () => setIsFocus(false) });
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
          class={[
            ns.b(),
            ns.m(props.size || size || "small"),
            ns.is("focus", isFocus.value),
            ns.is("disabled", props.disabled),
            ns.is("readonly", props.readonly)
          ]}>
          {prefixSlot && <div class={[ns.e("prefix")]}>{prefixSlot}</div>}
          <input
            class={ns.e("main")}
            ref={domRef}
            type={type.value}
            disabled={props.disabled}
            tabindex={props.tabindex}
            placeholder={props.placeholder}
            readonly={props.readonly}
            value={value.value}
            autofocus={props.autofocus}
            autocomplete={props.autocomplete}
            maxlength={props.maxlength}
            max={props.max}
            min={props.min}
            step={props.step}
            minlength={props.minlength}
            name={props.name}
            onInput={(e: InputEvent) =>
              setValue((e.target as HTMLInputElement)?.value)
            }
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
          />
          {props.clearable && value.value && (
            <span
              class={[ns.e("base-icon"), ns.e("clear")]}
              onClick={() => setValue("")}>
              <MIcon name="close-circle" />
            </span>
          )}

          {showPwdIcon.value && (
            <span onClick={toggleShowPwd} class={[ns.e("base-icon")]}>
              <MIcon name={isOpenEye.value ? "eye" : "eye-close"} />
            </span>
          )}
          {showLimitCount.value && (
            <span class={[ns.e("limit-count")]}>
              {`${value.value?.length || 0}/${props.maxlength}`}
            </span>
          )}
          {suffixSlot && <div class={[ns.e("suffix")]}>{suffixSlot}</div>}
        </div>
      );

      // 是否需要包裹prepend和append插槽
      return prependSlot || appendSlot ? (
        <div
          style={{ width: props.width }}
          class={[
            ns.b("wrapper"),
            ns.is("prepend", prependSlot),
            ns.is("append", appendSlot),
            ns.is("focus", isFocus.value),
            ns.is("disabled", props.disabled),
            ns.is("readonly", props.readonly)
          ]}>
          {prependSlot && <div class={[ns.e("prepend")]}>{prependSlot}</div>}
          {inputVNode()}
          {appendSlot && <div class={[ns.e("append")]}>{appendSlot}</div>}
        </div>
      ) : (
        inputVNode()
      );
    };
  }
});
