/* @license Mostify UI By <tmwang>*/
import { defineComponent as e, onBeforeMount as o, computed as n, createVNode as t } from "vue";
const l = e({ name: "MIcon", props: { name: { type: String, default: "" }, size: { type: String, default: "1em" }, color: { type: String, default: "currentColor" } }, setup(e2) {
  o(() => {
    globalThis == window && import("./iconfont-BJnk61_Z.js").catch((e3) => {
    });
  });
  const l2 = n(() => `#m-icon-${e2.name}`);
  return () => t("svg", { class: "m-icon", style: { color: e2.color || "currentColor", width: e2.size || "1em", height: e2.size || "1em", verticalAlign: "-0.15em", fill: e2.color || "currentColor", overflow: "hidden" }, "aria-hidden": "true" }, [t("use", { "xlink:href": l2.value }, null)]);
} });
l.install = function(e2) {
  e2.component(l.name, l);
};
const r = { install(e2) {
  e2.component(l.name, l);
} };
export {
  l as MIcon,
  r as default
};
//# sourceMappingURL=mostify-ui-icon.js.map
