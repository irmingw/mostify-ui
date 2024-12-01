import { defineComponent, computed, onBeforeMount } from "vue";

export default defineComponent({
  name: "MIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "1em",
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
  setup(props) {
    onBeforeMount(() => {
      if (globalThis == window) {
        import("./source/iconfont").catch((err) => {
          console.log(err);
        });
      }
    });
    const iconName = computed(() => `#m-icon-${props.name}`);
    return () => (
      <svg
        class="m-icon"
        style={{
          color: props.color || "currentColor",
          width: props.size || "1em",
          height: props.size || "1em",
          verticalAlign: "-0.15em",
          fill: props.color || "currentColor",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <use xlinkHref={iconName.value}></use>
      </svg>
    );
  },
});
