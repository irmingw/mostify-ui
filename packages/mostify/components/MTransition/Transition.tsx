import { defineComponent, Transition } from "vue";

export default defineComponent({
  name: "MTransition",
  props: {
    onEnter: Function,
    onLeave: Function
  },
  setup(props, { slots }) {
    return () => {
      const vNodes = slots.default && slots.default();
      return (
        <Transition
          appear={false}
          onEnter={(el: Element, done: () => void) => props.onEnter?.(el, done)}
          onLeave={(el: Element, done: () => void) => props.onLeave?.(el, done)}
          css={false}>
          {vNodes}
        </Transition>
      );
    };
  }
});
