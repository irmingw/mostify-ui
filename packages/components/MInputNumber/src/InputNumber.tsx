import { SizeType } from "@/typings/global.ts";
import { defineComponent, type PropType } from "vue";
import { useControl, useIncreaseDecrease } from "@/hooks/input/useInputNumber";
import { useValue } from "@/hooks/input/useState";
import { useFocus } from "@/hooks/useFocus";
import MIcon from "@/components/MIcon";
import { createNameSpace } from "@/utils/createNameSpace";
import "./style.scss";

export default defineComponent({
  name: "MInputNumber",
  components: { MIcon },
  props: {
    modelValue: Number,
    min: Number,
    max: Number,
    step: Number,
    disabled: Boolean,
    controlsPosition: {
      type: String as PropType<"" | "right">,
      default: ""
    },
    controls: {
      type: Boolean,
      default: true
    },
    size: String as PropType<SizeType>,
    readonly: Boolean,
    placeholder: String,
    name: String,
    id: String,
    autofocus: Boolean,
    tabindex: Number,
    prefix: String,
    suffix: String,
    precision: Number,
    width: String
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(props, { emit, expose, slots }) {
    const { domRef, isFocus, setIsFocus } = useFocus();
    const { showControl, isRight } = useControl(props);
    const { value, setValue } = useValue(props, emit);
    const { increase, decrease, decreaseDisabled, increaseDisabled } =
      useIncreaseDecrease(props, value, setValue);
    const ns = createNameSpace("input-number");

    expose({ focus: () => setIsFocus(true), blur: () => setIsFocus(false) });
    return () => {
      // slot 自定义icon
      const decreaseIconSlot = slots.decreaseIcon?.();
      const increaseIconSlot = slots.increaseIcon?.();
      // prefix suffix 插槽
      const prefixSlot = slots.prefix ? slots.prefix?.() : props.prefix;
      const suffixSlot = slots.suffix ? slots.suffix?.() : props.suffix;

      const renderInput = () => {
        return (
          <>
            {prefixSlot && <div class={[ns.e("prefix")]}>{prefixSlot}</div>}
            <input
              type="number"
              name={props.name}
              value={value.value}
              autofocus={props.autofocus}
              tabindex={props.tabindex}
              class={[ns.e("input")]}
              ref={domRef}
              disabled={props.disabled}
              placeholder={props.placeholder}
              readonly={props.readonly}
              max={props.max}
              min={props.min}
              step={props.step}
              onInput={(e: InputEvent) =>
                setValue((e.target as HTMLInputElement)?.value)
              }
              onBlur={() => setIsFocus(false)}
              onFocus={() => setIsFocus(true)}
            />
            {suffixSlot && <div class={[ns.e("suffix")]}>{suffixSlot}</div>}
          </>
        );
      };
      const renderControl = () => (
        <div class={[ns.e("control")]}>
          <div
            class={[
              ns.e("control-left"),
              ns.is("disabled", decreaseDisabled.value)
            ]}
            aria-disabled={decreaseDisabled.value}
            onClick={decrease}>
            {decreaseIconSlot ? decreaseIconSlot : <MIcon name="minus" />}
          </div>
          {renderInput()}
          <div
            class={[
              ns.e("control-right"),
              ns.is("disabled", increaseDisabled.value)
            ]}
            aria-disabled={increaseDisabled.value}
            onClick={increase}>
            {increaseIconSlot ? increaseIconSlot : <MIcon name="plus" />}
          </div>
        </div>
      );
      const renderRightControl = () => (
        <div class={[ns.e("controlPositionRight")]}>
          {renderInput()}
          <div class={[ns.e("rightWrapper")]}>
            <span
              class={[
                ns.e("rightTop"),
                ns.is("disabled", increaseDisabled.value)
              ]}
              onClick={increase}
              aria-disabled={increaseDisabled.value}>
              {decreaseIconSlot ? (
                decreaseIconSlot
              ) : (
                <MIcon size="0.9em" name="up" />
              )}
            </span>
            <span class={[ns.e("split")]} />
            <span
              class={[
                ns.e("rightBottom"),
                ns.is("disabled", decreaseDisabled.value)
              ]}
              aria-disabled={decreaseDisabled.value}
              onClick={decrease}>
              {increaseIconSlot ? (
                increaseIconSlot
              ) : (
                <MIcon size="0.9em" name="down" />
              )}
            </span>
          </div>
        </div>
      );
      return (
        <div
          style={{ width: props.width ? props.width : "auto" }}
          class={[
            ns.b(),
            ns.is("disabled", props.disabled),
            ns.is("readonly", props.readonly),
            ns.is("focus", isFocus.value)
          ]}>
          {showControl.value
            ? isRight.value
              ? renderRightControl()
              : renderControl()
            : renderInput()}
        </div>
      );
    };
  }
});
