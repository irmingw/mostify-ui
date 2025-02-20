import { defineComponent } from "vue";
import { useValue, useLimitCount } from "@/hooks/input/useState";
import { useFocus } from "@/hooks/useFocus";
import { createNameSpace } from "@/utils/createNameSpace";
import "./style.scss";

export default defineComponent({
  name: "MTextarea",
  props: {
    modelValue: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: Number,
    minlength: Number,
    rows: [Number, String],
    cols: [Number, String],
    autofocus: Boolean,
    autocomplete: String,
    showLimitCount: Boolean
  },
  emits: ["update:modelValue", "focus", "blur", "change"],

  setup(props, { emit }) {
    const { domRef, isFocus, setIsFocus } = useFocus();
    const { value, setValue } = useValue(props, emit);
    const { showLimitCount } = useLimitCount(props);
    const ns = createNameSpace("textarea");
    return () => {
      return (
        <div
          class={[
            ns.b(),
            ns.is("limitCount", showLimitCount.value),
            ns.is("focus", isFocus.value),
            ns.is("disabled", props.disabled),
            ns.is("readonly", props.readonly),
          ]}>
          <textarea
            class={[ns.e("input")]}
            ref={domRef}
            rows={props.rows}
            cols={props.cols}
            value={value.value}
            onInput={(e: Event) =>
              setValue((e.target as HTMLTextAreaElement).value)
            }
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            disabled={props.disabled}
            readonly={props.readonly}
            placeholder={props.placeholder}
            maxlength={props.maxlength}
            minlength={props.minlength}
            autofocus={props.autofocus}
            autocomplete={props.autocomplete}
          />
          {showLimitCount.value && (
            <span class={[ns.e("limit-count")]}>
              {value.value?.length || 0}/{props.maxlength}
            </span>
          )}
        </div>
      );
    };
  }
});
