import { SizeType } from "@/mostify/types/types";
import { defineComponent, type PropType } from "vue";
import { useControl, useIncreaseDecrease } from "./hooks/useInputNumber";
import { useValue, useClassNames } from "./hooks/useState";
import { useFocus } from "@/mostify/hooks/useFocus";
import MIcon from "@/mostify/components/MIcon";
import "./styles/index.scss";
import "./styles/input-number.scss";

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
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(props, { emit, expose, slots }) {
    const { domRef, isFocus, setIsFocus } = useFocus();
    const { showControl, isRight } = useControl(props);
    const { value, setValue } = useValue(props, emit);
    const { classNames } = useClassNames(props, isFocus);
    const { increase, decrease, decreaseDisabled, increaseDisabled } =
      useIncreaseDecrease(props, value, setValue);

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
            {prefixSlot && <div class="m-input-prefix">{prefixSlot}</div>}
            <input
              type="number"
              name={props.name}
              value={value.value}
              autofocus={props.autofocus}
              tabindex={props.tabindex}
              class="m-input-base"
              ref={domRef}
              disabled={props.disabled}
              placeholder={props.placeholder}
              readonly={props.readonly}
              max={props.max}
              min={props.min}
              step={props.step}
              onInput={(e: InputEvent) => setValue((e.target as HTMLInputElement)?.value)}
              onBlur={() => setIsFocus(false)}
              onFocus={() => setIsFocus(true)}
            />
            {suffixSlot && <div class="m-input-suffix">{suffixSlot}</div>}
          </>
        );
      };
      const renderControl = () => (
        <div class="m-input-control-default">
          <div
            class="m-input-number-control-left"
            data-disabled={decreaseDisabled.value}
            onClick={decrease}>
            {decreaseIconSlot ? decreaseIconSlot : <MIcon name="minus" />}
          </div>
          {renderInput()}
          <div
            class="m-input-number-control-right"
            data-disabled={increaseDisabled.value}
            onClick={increase}>
            {increaseIconSlot ? increaseIconSlot : <MIcon name="plus" />}
          </div>
        </div>
      );
      const renderRightControl = () => (
        <div class="m-input-control-right">
          {renderInput()}
          <div class="m-input-right-control-wrapper">
            <span
              class="m-input-control-top"
              onClick={increase}
              data-disabled={increaseDisabled.value}>
              {decreaseIconSlot ? decreaseIconSlot : <MIcon name="up" />}
            </span>
            <span
              class="m-input-control-bottom"
              data-disabled={decreaseDisabled.value}
              onClick={decrease}>
              {increaseIconSlot ? increaseIconSlot : <MIcon name="down" />}
            </span>
          </div>
        </div>
      );
      return (
        <div
          class={[
            "m-input-number",
            showControl.value
              ? isRight.value
                ? "has-right-control"
                : "has-control"
              : "",
            ...classNames.value
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
