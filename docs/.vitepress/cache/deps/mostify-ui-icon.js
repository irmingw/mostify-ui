import {
  computed,
  createVNode,
  defineComponent,
  onBeforeMount
} from "./chunk-VJWGEPT5.js";

// node_modules/mostify-ui-icon/dist/mostify-ui-icon.js
var l = defineComponent({ name: "MIcon", props: { name: { type: String, default: "" }, size: { type: String, default: "1em" }, color: { type: String, default: "currentColor" } }, setup(e2) {
  onBeforeMount(() => {
    globalThis == window && import("./iconfont-BJnk61_Z-VIUK5CD5.js").catch((e3) => {
    });
  });
  const l2 = computed(() => `#m-icon-${e2.name}`);
  return () => createVNode("svg", { class: "m-icon", style: { color: e2.color || "currentColor", width: e2.size || "1em", height: e2.size || "1em", verticalAlign: "-0.15em", fill: e2.color || "currentColor", overflow: "hidden" }, "aria-hidden": "true" }, [createVNode("use", { "xlink:href": l2.value }, null)]);
} });
l.install = function(e2) {
  e2.component(l.name, l);
};
var r = { install(e2) {
  e2.component(l.name, l);
} };
export {
  l as MIcon,
  r as default
};
/*! Bundled license information:

mostify-ui-icon/dist/mostify-ui-icon.js:
  (* @license Mostify UI By <tmwang>*)
*/
//# sourceMappingURL=mostify-ui-icon.js.map
