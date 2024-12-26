import { defineComponent, computed } from "vue";
import "./source/iconfont.css";
export default defineComponent({
  name: "MIcon",
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "16px"
    },
    color: {
      type: String,
      default: "currentColor"
    }
  },

  setup(props, { emit }) {
    const iconName = computed(() => `mostifyiconfont m-icon m-icon-${props.name}`);
    return () => (
      <i
        class={iconName.value}
        onClick={e => emit("click", e)}
        style={{
          color: props.color,
          '--icon-size': props.size,
          lineHeight: "inherit"
        }}
      />
    );
  }
});