import { defineComponent, type PropType } from "vue";
import MIcon from "../MIcon";
import "./style.scss";

type ObjectFitType = "fill" | "contain" | "cover" | "scale-down" | "none";

export default defineComponent({
  name: "MAvatar",
  components: { MIcon },
  props: {
    src: { type: String, default: "" },
    size: { type: String, default: "36px" },
    alt: { type: String, default: "" },
    srcSet: { type: String, default: "" },
    fit: {
      type: String as PropType<ObjectFitType>,
      default: "cover"
    },
    icon: { type: String, default: "" },
    shape: { type: String, default: "circle" },
    loading: { type: String as PropType<"lazy" | "eager">, default: "eager" }
  },
  setup(props, { slots }) {
    const onError = e => {
      console.log(e);
    };

    return () => {
      const icon = slots.icon ? (
        slots.icon()
      ) : props.icon ? (
        <MIcon
          name={props.icon}
          class="m-avatar-icon"
          size={String(parseInt(props.size) * 0.6) + "px"}
        />
      ) : (
        ""
      );

      const defaultSlot = slots.default ? slots.default() : "";

      return (
        <div
          class={{
            "m-avatar": true,
            "m-avatar-shape-square": props.shape === "square",
            "m-avatar-shape-circle": props.shape === "circle"
          }}
          style={{ "--size": props.size, "--shape": props.shape }}>
          {icon ? (
            icon
          ) : defaultSlot ? (
            defaultSlot
          ) : (
            <img
              src={props.src}
              alt={props.alt}
              srcset={props.srcSet}
              class="m-avatar-image"
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
