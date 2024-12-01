import { defineComponent, computed } from "vue";
import "./style.scss";

export const MLayout = defineComponent({
  name: "MLayout",
  props: {
    layout: {
      type: String,
      default: "y",
    },
  },

  setup(props, { slots }) {
    const layoutClass = computed(() =>
      props.layout === "x" ? "m-layout-x" : "m-layout-y"
    );
    return () => (
      <div class={["m-layout", layoutClass.value]}>
        {slots.default && slots.default()}
      </div>
    );
  },
});

export const MHeader = defineComponent({
  name: "MHeader",
  props: {
    height: {
      type: String,
      default: "64px",
    },
  },
  setup(props, { slots }) {
    return () => (
      <header class="m-header" style={{ "--height": props.height }}>
        {slots.default && slots.default()}
      </header>
    );
  },
});

export const MSide = defineComponent({
  name: "MSide",
  props: {
    width: {
      type: String,
      default: "200px",
    },
  },
  setup(props, { slots }) {
    return () => (
      <nav class="m-side" style={{ "--size": props.width }}>
        {slots.default && slots.default()}
      </nav>
    );
  },
});

export const MFooter = defineComponent({
  name: "MFooter",
  props: {
    height: {
      type: String,
      default: "64px",
    },
  },
  setup(props, { slots }) {
    return () => (
      <nav class="m-footer" style={{ "--size": props.height }}>
        {slots.default && slots.default()}
      </nav>
    );
  },
});

export const MMain = defineComponent({
  name: "MMain",
  // @ts-ignore
  setup(props, { slots }) {
    return () => (
      <main class="m-main">
        {slots.default && slots.default()}
      </main>
    );
  },
});
