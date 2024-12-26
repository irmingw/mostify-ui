import { defineComponent } from "vue";
import { useValue, useTextarea, useLimitCount } from "./hooks/useState";
import { useFocus } from "@/mostify/hooks/useFocus";
import "./styles/index.scss";
import "./styles/textarea.scss";

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
    const { classnames } = useTextarea(props, showLimitCount, isFocus);
    return () => {
      return (
        <div class={classnames.value}>
          <textarea
            class="m-textarea-content"
            ref={domRef}
            rows={props.rows}
            cols={props.cols}
            value={value.value}
            onInput={(e: Event) => setValue((e.target as HTMLTextAreaElement).value)}
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
            <span class="m-textarea-limit">
              {value.value?.length || 0}/{props.maxlength}
            </span>
          )}
        </div>
      );
    };
  }
});
