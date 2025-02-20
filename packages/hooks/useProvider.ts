import { inject } from "vue";
import { providerKey } from "@/utils/constants";
import { type PluginOptionTypes } from "@/typings/global";

const useProvider = () => {
  const option: PluginOptionTypes = inject(providerKey, {
    size: "small",
    zIndex: 1000
  });

  return option;
};

export default useProvider;
