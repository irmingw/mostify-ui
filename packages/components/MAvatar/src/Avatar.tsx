import { defineComponent, type PropType } from "vue";
import { createNameSpace } from "@/utils/createNameSpace";
import "./style.scss";

type ObjectFitType = "fill" | "contain" | "cover" | "scale-down" | "none";

export default defineComponent({
  name: "MAvatar",
  props: {
    src: { type: String, default: "" },
    size: { type: String, default: "36px" },
    alt: { type: String, default: "" },
    srcSet: { type: String, default: "" },
    fit: {
      type: String as PropType<ObjectFitType>,
      default: "cover"
    },
    shape: { type: String, default: "circle" },
    loading: { type: String as PropType<"lazy" | "eager">, default: "eager" }
  },
  emits: ["error"],
  setup(props, { slots, emit }) {
    const ns = createNameSpace("avatar");
    const onError = e => {
      emit("error", e);
    };

    return () => {
      const defaultSlot = slots.default ? slots.default() : "";

      return (
        <div
          class={[ns.b(), ns.m(props.shape)]}
          style={{ "--m-avatar-size": props.size }}>
          {defaultSlot ? (
            defaultSlot
          ) : (
            <img
              src={props.src}
              alt={props.alt}
              srcset={props.srcSet}
              class={ns.e("image")}
              style={{
                "object-fit": props.fit || "none"
              }}
              loading={props.loading}
              width={props.size}
              height={props.size}
              onError={onError}
            />
          )}
        </div>
      );
    };
  }
});
