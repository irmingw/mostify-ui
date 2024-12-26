import { inject } from "vue";
import { providerKey } from "@/mostify/utils/constants";

const useProvider = () => {
  const { size, zIndex } = inject(providerKey, { size: "small", zIndex: 1000 });
    
  return {
    size: size as string,
    zIndex: zIndex as number,
  };
};

export default useProvider;
