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
  setup(props) {
    const iconName = computed(() => `mostifyiconfont m-icon-${props.name}`);
    return () => (
      <i
        class={iconName.value}
        style={{
          color: props.color,
          fontSize: props.size,
          lineHeight: "inherit"
        }}
      />
    );
  }
});
