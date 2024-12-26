import { defineComponent, inject } from "vue";
import { providerKey } from "@/mostify/utils/constants";

export default defineComponent({
  name: "MAnchor",
  props: {
    getTarget: {
      type: Function,
      default: () => window,
    },
  },
  setup(_, { slots }) {
    const injectData = inject(providerKey);

    console.log(injectData, "injectData");

    return () => <div>{slots.default && slots.default()}</div>;
  },
});
