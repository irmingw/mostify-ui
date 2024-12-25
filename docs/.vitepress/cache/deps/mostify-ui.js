import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createApp,
  createVNode,
  defineComponent,
  inject,
  isVNode,
  mergeProps,
  onBeforeMount,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  vShow,
  watch,
  withDirectives
} from "./chunk-VJWGEPT5.js";

// node_modules/mostify-ui/dist/mostify-ui.js
var b = Symbol("muiConfigProvider");
var w = defineComponent({ name: "MIcon", props: { name: { type: String, default: "" }, size: { type: String, default: "16px" }, color: { type: String, default: "currentColor" } }, setup(e2, { emit: t2 }) {
  const l2 = computed(() => `mostifyiconfont m-icon-${e2.name}`);
  return () => createVNode("i", { class: l2.value, onClick: (e3) => t2("click", e3), style: { color: e2.color, fontSize: e2.size ? e2.size : "16px", lineHeight: "inherit" } }, null);
} });
var x = defineComponent({ name: "MButton", props: { type: { type: String, default: "default" }, size: { type: String, default: "small" }, shape: { type: String, default: "" }, disabled: Boolean, loading: Boolean, border: Boolean, light: Boolean, leftIcon: String, rightIcon: String, block: { type: Boolean, default: false } }, emits: ["click", "focus", "blur"], setup(l2, { slots: i2, emit: s2 }) {
  const { btnClass: r2, contentShow: u2, setClickXEvent: c2, btnRef: d2, rippleRef: p2 } = ((l3) => {
    const n2 = ref(null), o2 = ref(null), i3 = inject(b, { size: "" }), s3 = computed(() => {
      const e2 = ["m-button"];
      l3.type && e2.push("m-button-type-" + l3.type);
      const t2 = l3.size || i3.size || "small";
      return e2.push("m-button-size-" + t2), l3.shape && e2.push("m-button-shape-" + l3.shape), l3.loading && e2.push("is-loading"), l3.disabled && e2.push("is-disabled"), e2;
    }), r3 = computed(() => !(l3.loading && ["circle", "square"].includes(l3.shape)));
    let u3 = null;
    return { btnClass: s3, contentShow: r3, setClickXEvent: async (e2) => {
      if (!n2.value) return;
      u3 || (u3 = document.createElement("div"), u3.className = "m-button-ripple");
      const t2 = u3.cloneNode();
      n2.value.appendChild(t2);
      const a2 = o2.value.getBoundingClientRect(), l4 = Math.max(a2.width, a2.height), i4 = l4 + "px", s4 = i4;
      let r4 = (e2.clientY - a2.top - l4 / 2).toFixed(0) + "px", c3 = (e2.clientX - a2.left - l4 / 2).toFixed(0) + "px";
      r4 = 0.5 * (a2.height - l4) + "px", Math.abs(a2.width - a2.height) < 12 && (c3 = 0.5 * (a2.width - l4) + "px"), t2.setAttribute("style", `width:${i4};height:${s4};top:${r4};left:${c3};`), t2.classList.add("m-button-ripple-active"), await new Promise((e3) => setTimeout(e3, 500)), t2.remove();
    }, btnRef: o2, rippleRef: n2 };
  })(l2);
  function m2(e2, t2) {
    e2.preventDefault(), l2.loading || l2.disabled || s2(t2, e2);
  }
  const f2 = (e2) => {
    e2.preventDefault(), l2.loading || l2.disabled || c2(e2);
  };
  return () => {
    const e2 = i2.leftIcon ? i2.leftIcon() : l2.leftIcon ? createVNode(w, { name: l2.leftIcon }, null) : "", t2 = i2.rightIcon ? i2.rightIcon() : l2.rightIcon ? createVNode(w, { name: l2.rightIcon }, null) : "";
    return createVNode("button", { class: r2.value, onMousedown: f2, ref: d2, style: { "--border-width": l2.border ? "1px" : "0px", width: l2.block ? "100%" : "" }, "data-light": l2.light ? "on" : "off", onClick: (e3) => m2(e3, "click"), onFocus: (e3) => m2(e3, "focus"), onBlur: (e3) => m2(e3, "blur") }, [!l2.loading && !l2.disabled && createVNode("div", { class: "m-button-ripple-wrapper", ref: p2 }, null), createVNode("span", { class: "m-button-main" }, [l2.loading && createVNode("span", { class: "m-button-loading-icon-wrapper", style: { marginRight: u2.value ? "8px" : 0 } }, [createVNode("svg", { viewBox: "0 0 1024 1024", width: "1em", height: "1em", class: "m-button-icon-loading" }, [createVNode("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z", fill: "currentColor" }, null)])]), u2.value && createVNode(Fragment, null, [e2 && createVNode("span", { class: "m-button-icon-left" }, [e2]), i2.default && i2.default(), t2 && createVNode("span", { class: "m-button-icon-right" }, [t2])])])]);
  };
} });
var k = defineComponent({ name: "MSpace", props: { size: { type: String, default: "" }, layout: { type: String, validator: (e2) => ["x", "y"].includes(e2), default: "x" }, alignItems: { type: String, default: "flex-start" } }, setup(e2, { slots: t2 }) {
  const l2 = computed(() => "y" === e2.layout ? "m-space-y" : "m-space-x"), o2 = computed(() => t2.default ? t2.default() : []);
  return () => {
    var _a;
    return createVNode("div", { class: ["m-space", l2.value], style: { "--size": e2.size || "", "align-items": e2.alignItems || "" } }, [(_a = o2.value) == null ? void 0 : _a.map((e3, t3) => createVNode("div", { class: "m-space-item", key: t3 }, [e3]))]);
  };
} });
var S = defineComponent({ name: "MDivider", props: { layout: { type: String, default: "y", validator: (e2) => ["x", "y"].includes(e2) }, color: { type: String, default: "" }, size: { type: String, default: "12px" }, borderStyle: { type: String, default: "solid" } }, setup: (e2) => () => createVNode("div", { style: { "--color": e2.color, "--size": e2.size, "--border-style": e2.borderStyle }, class: { "m-divider": true, "m-divider-y": "y" === e2.layout, "m-divider-x": "x" === e2.layout } }, null) });
var C = defineComponent({ name: "MAnchor", props: { getTarget: { type: Function, default: () => window } }, setup(e2, { slots: a2 }) {
  inject(b);
  return () => createVNode("div", null, [a2.default && a2.default()]);
} });
var B = defineComponent({ name: "MConfigProvider", props: { locale: { type: String, default: "zh-CN" }, size: { type: String, default: "small", validator: (e2) => ["small", "mini", "large"].includes(e2) } }, setup: (e2, { slots: t2 }) => (provide(b, e2), () => createVNode(Fragment, null, [t2.default && t2.default()])) });
var z = defineComponent({ name: "MBreadcrumb", props: { separator: { type: String, default: "/" } }, setup(e2, { slots: t2 }) {
  var _a, _b;
  const a2 = (_a = t2.default) == null ? void 0 : _a.call(t2), l2 = t2.separator ? (_b = t2.separator) == null ? void 0 : _b.call(t2) : e2.separator;
  return () => createVNode("div", { class: "m-breadcrumb" }, [a2 == null ? void 0 : a2.map((e3, t3) => createVNode(Fragment, null, [e3, t3 >= 0 && t3 < a2.length - 1 && createVNode("span", { class: "m-breadcrumb-separator" }, [l2])]))]);
} });
var _ = defineComponent({ name: "MBreadcrumbItem", props: { label: { type: String, default: "" }, disabled: { type: Boolean, default: false }, href: { type: String, default: "" }, target: { type: String, default: "_blank" } }, setup(e2, { slots: t2 }) {
  const a2 = (t2 == null ? void 0 : t2.default) ? t2.default() : e2.label;
  return () => e2.href && !e2.disabled ? createVNode("a", { class: "m-breadcrumb-item m-breadcrumb-link", "data-disabled": e2.disabled, href: e2.href, target: e2.target }, [a2]) : createVNode("span", { class: "m-breadcrumb-item", "data-disabled": e2.disabled }, [a2]);
} });
var L = (e2) => e2 ? e2.getBoundingClientRect() : null;
var P = (e2) => new Promise((t2) => {
  if (!e2) return null;
  Promise.all(e2.getAnimations({ subtree: true }).map((e3) => e3.finished)).then(() => {
    t2(true);
  }).catch(() => {
    t2(false);
  });
});
var E = (e2, t2, a2, l2 = 0) => new Promise(async (n2, o2) => {
  if (!e2) return o2("node is null");
  await ((e3) => new Promise((t3) => {
    var _a;
    if (!e3) return t3(false);
    (_a = e3 == null ? void 0 : e3.getAnimations()) == null ? void 0 : _a.forEach((e4) => {
      e4.cancel();
    }), t3(true);
  }))(e2), e2.animate(t2, a2);
  const i2 = "number" == typeof a2 ? a2 : (a2 == null ? void 0 : a2.duration) || null;
  null != i2 && Number(i2) >= 0 ? setTimeout(() => {
    n2(true);
  }, Number(i2) - l2) : n2(true);
});
var M = { hideTime: 200, showTime: 200, bgShow: async (e2) => {
  await E(e2, [{ transform: "scaleY(0.8)", offset: 0 }, { transform: "scaleY(1)", offset: 0.33 }, { transform: "scaleY(1)", offset: 1 }], { duration: 200 }).catch(() => {
  });
}, cShow: async (e2) => {
  await E(e2, [{ offset: 0, opacity: 0 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 1 }], { duration: 200 }).catch(() => {
  });
}, bgHide: async (e2) => {
  await E(e2, [{ opacity: 1, offset: 0 }, { opacity: 0.66, offset: 0.33 }, { opacity: 0, transform: "scaleY(0.8)", offset: 1 }], { duration: 200 }).catch(() => {
  });
}, async cHide(e2) {
  await E(e2, [{ offset: 0, opacity: 1 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 0 }], { duration: 200 }).catch(() => {
  });
} };
function V(e2, t2, a2) {
  const l2 = document.documentElement.scrollTop, n2 = function(e3, t3, a3) {
    var l3 = window.innerWidth, n3 = window.innerHeight, o2 = t3.top > (a3 == null ? void 0 : a3.height), i2 = n3 - ((t3 == null ? void 0 : t3.top) + (a3 == null ? void 0 : a3.height)) > 0, s2 = t3.left > a3.width, r2 = l3 - (t3.left + a3.width) > 0;
    return o2 && i2 && s2 && r2 ? e3 : i2 ? s2 && r2 ? ["bottomRight", "bottomLeft", "bottom"].includes(e3) ? e3 : "bottomLeft" : s2 ? "bottomRight" : "bottomLeft" : s2 && r2 ? ["topLeft", "topRight", "top"].includes(e3) ? e3 : "topLeft" : s2 ? "topLeft" : "topRight";
  }(e2, t2, a2);
  switch (n2) {
    case "bottomRight":
      return { top: `${t2.top + t2.height + l2}`, left: "" + (t2.left + t2.width - a2.width) };
    case "bottom":
      return { top: `${t2.top + t2.height + l2}`, left: "" + (t2.left + t2.width / 2 - a2.width / 2) };
    default:
      return { top: `${t2.top + t2.height + l2}`, left: `${t2.left}` };
  }
}
var T = defineComponent({ name: "MDropdown", props: { placement: { type: String, default: "bottomLeft" }, trigger: { type: String, default: "click", validator: (e2) => ["hover", "click"].includes(e2) }, destroyOnHide: { type: Boolean, default: false }, disabled: Boolean, open: { type: Boolean, default: false }, toBody: { type: Boolean, default: true } }, setup(t2, { slots: l2 }) {
  const o2 = ref(null), i2 = ref(null), g2 = ref(null), y2 = ref(false), h2 = reactive({ top: "0", left: "0", waitChange: false, renderToDom: null }), v2 = ref(false);
  let b2 = null;
  const w2 = computed(() => !t2.destroyOnHide || y2.value);
  let x2 = null;
  function k2() {
    const e2 = L(x2), a2 = L(g2.value), { top: l3, left: n2 } = V(t2.placement, e2, a2);
    h2.top = `${l3}px`, h2.left = `${n2}px`, i2.value.style.minWidth = `${e2.width}px`;
  }
  function S2() {
    w2.value && k2();
  }
  async function C2() {
    y2.value = true, v2.value = true, b2 && (clearTimeout(b2), b2 = null), h2.waitChange = true, await new Promise((e2) => requestAnimationFrame(e2)), k2(), window.addEventListener("scroll", S2, false), M.cShow(g2.value), M.bgShow(i2.value), await P(g2.value).catch(() => {
    }), h2.waitChange = false;
  }
  function B2() {
    if (h2.waitChange || t2.disabled) return;
    !y2.value ? C2() : _2();
  }
  function z2() {
    h2.waitChange || t2.disabled || y2.value || C2();
  }
  function _2() {
    h2.waitChange || (v2.value && (clearTimeout(b2), b2 = null), v2.value = true, b2 = setTimeout(async () => {
      var e2;
      v2.value && (h2.waitChange = true, M.cHide(g2.value), M.bgHide(i2.value), await (e2 = 0, new Promise((t3) => setTimeout(t3, e2))), await P(g2.value).catch(() => {
      }), window.removeEventListener("scroll", S2, false), y2.value = false, h2.waitChange = false);
    }, 60));
  }
  function E2(e2) {
    const t3 = e2.target;
    var a2, l3;
    t3 && (a2 = o2.value, l3 = t3, a2 && l3 && (a2 === l3 || a2.contains && a2.contains(l3)) || _2());
  }
  function T2() {
    v2.value = true, b2 ? (clearTimeout(b2), b2 = null, y2.value = true) : (v2.value = false, y2.value = true);
  }
  function I2() {
    var _a, _b;
    window.addEventListener("click", E2, true), "click" === t2.trigger ? x2 == null ? void 0 : x2.addEventListener("click", B2, false) : (x2 == null ? void 0 : x2.addEventListener("mouseenter", z2, false), x2 == null ? void 0 : x2.addEventListener("mouseleave", _2, false), (_a = i2.value) == null ? void 0 : _a.addEventListener("mouseenter", T2, false), (_b = i2.value) == null ? void 0 : _b.addEventListener("mouseleave", _2, false));
  }
  function H2() {
    var _a, _b;
    x2 == null ? void 0 : x2.removeEventListener("click", B2, false), window.removeEventListener("click", E2, false), x2 == null ? void 0 : x2.removeEventListener("mouseenter", z2, false), x2 == null ? void 0 : x2.removeEventListener("mouseleave", _2, false), (_a = i2.value) == null ? void 0 : _a.removeEventListener("mouseenter", T2, false), (_b = i2.value) == null ? void 0 : _b.removeEventListener("mouseleave", _2, false);
  }
  return watch(() => t2.trigger, () => {
    H2(), I2();
  }), onBeforeMount(() => {
    var _a;
    if (!document.querySelector("#m-inset__body")) {
      const e2 = document.createElement("div");
      e2.setAttribute("id", "m-inset__body"), (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(e2);
    }
  }), onMounted(() => {
    var _a;
    x2 = 1 === ((_a = o2.value.children) == null ? void 0 : _a.length) ? o2.value.children[0] || null : o2.value || null, I2();
  }), onUnmounted(() => {
    H2();
  }), () => createVNode("div", null, [createVNode("div", { class: "m-dropdown", ref: o2, style: { "pointer-events": h2.waitChange ? "none" : "all" } }, [l2.default && l2.default()]), createVNode(Teleport, { to: "#m-inset__body" }, { default: () => {
    var _a;
    return [w2.value && withDirectives(createVNode("div", { class: "m-dropdown__content m-box-shadow", ref: i2, style: { "--top": h2.top, "--left": h2.left, "pointer-events": h2.waitChange ? "none" : "all" } }, [createVNode("div", { class: "m-dropdown__body", ref: g2 }, [l2.content && ((_a = l2.content()) == null ? void 0 : _a.map((e2) => (e2.props = { ...e2.props }, e2)))])]), [[vShow, y2.value]])];
  } })]);
} });
var I = defineComponent({ name: "MButtonGroup", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, size: { type: String, default: "" } }, setup(e2, { slots: a2 }) {
  const l2 = inject(b, { size: "" });
  return provide(b, { size: e2.size || l2.size }), () => createVNode("div", { class: ["m-button-group", "y" === e2.layout ? "m-button-layout-y" : "m-button-layout-x"] }, [a2.default && a2.default()]);
} });
var H = defineComponent({ name: "MMenuItem", props: { disabled: Boolean, label: String }, emits: ["click"], setup(e2, { slots: t2, emit: a2 }) {
  function l2(t3) {
    if (e2.disabled) return t3.preventDefault(), void t3.stopPropagation();
    a2("click", t3);
  }
  return () => createVNode("div", { class: ["m-menu__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, "aria-disabled": e2.disabled, onClick: l2 }, [t2.default && t2.default() || e2.label]);
} });
var A = defineComponent({ name: "MTransition", props: { onEnter: Function, onLeave: Function }, setup: (e2, t2) => () => {
  const a2 = t2.slots.default && t2.slots.default();
  return createVNode(Transition, { appear: false, onEnter: (t3, a3) => {
    var _a;
    return (_a = e2.onEnter) == null ? void 0 : _a.call(e2, t3, a3);
  }, onLeave: (t3, a3) => {
    var _a;
    return (_a = e2.onLeave) == null ? void 0 : _a.call(e2, t3, a3);
  }, css: false }, "function" == typeof (l2 = a2) || "[object Object]" === Object.prototype.toString.call(l2) && !isVNode(l2) ? a2 : { default: () => [a2] });
  var l2;
} });
var R = async ({ mask: e2, content: t2, wrapper: a2 }) => {
  E(e2, [{ opacity: 0 }, { opacity: 1 }], 120), E(a2, [{ transform: "scale(0.33)", offset: 0, opacity: 0.66 }, { transform: "scale(1)", offset: 0.33, opacity: 1 }, { transform: "scale(1)", offset: 1, opacity: 1 }], { duration: 500 }), await E(t2, [{ opacity: 0, offset: 0 }, { opacity: 0.25, offset: 0.35 }, { opacity: 1, offset: 1 }], { duration: 500 });
};
var N = async ({ mask: e2, wrapper: t2, content: a2 }) => {
  E(e2, [{ opacity: 1 }, { opacity: 0 }], { duration: 240 }), E(a2, [{ opacity: 1, offset: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 0, offset: 1 }], { duration: 240 }), await E(t2, [{ opacity: 1, offset: 0 }, { opacity: 0.88, offset: 0.33 }, { opacity: 0, offset: 1, transform: "scale(0.33)" }], { duration: 240 }, 20);
};
var $ = (e2 = 'm-dialog[data-active="true"]') => {
  document.querySelectorAll(e2).length > 0 ? (document.body.setAttribute("data-overflow", "hidden"), document.documentElement.dataset.overflow = "hidden") : (document.body.setAttribute("data-overflow", "auto"), document.documentElement.dataset.overflow = "auto");
};
var F = defineComponent({ name: "MDialog", components: { MButton: x }, props: { visible: { type: Boolean, default: false }, content: { type: String, default: "" }, className: String, title: { type: String, default: "" }, cancelBtnText: { type: String, default: "" }, okBtnText: { type: String, default: "" }, okBtnProps: { type: Object, default: () => ({ type: "primary" }) }, cancelBtnProps: { type: Object, default: () => ({ type: "default" }) }, width: { type: [Number, String], default: "50%" }, height: { type: [Number, String], default: "auto" }, showClose: { type: Boolean, default: true }, maskBackgroundColor: { type: String, default: "" }, fullscreen: { type: Boolean, default: false }, escHide: { type: Boolean, default: true }, maskHide: { type: Boolean, default: true }, target: { type: [String], default: "body" }, top: { type: String, default: "center" }, _onClose: Function }, emits: ["close"], setup(t2, l2) {
  const { wrapperRef: o2, bodyRef: i2, maskRef: s2, dialogRef: r2 } = { dialogRef: ref(null), wrapperRef: ref(null), maskRef: ref(null), bodyRef: ref(null) }, { contentStyle: u2, wrapperStyle: c2, bodyStyle: d2 } = ((e2) => ({ contentStyle: computed(() => {
    const t3 = ("number" == typeof e2.width ? `${e2.width}px` : e2.width) || "auto", a2 = ("number" == typeof e2.height ? `${e2.height}px` : e2.height) || "auto";
    return e2.fullscreen ? { width: "100%", padding: "0px", margin: "0px", height: "100%" } : { width: t3, maxWidth: "100%", height: a2, margin: e2.top && "center" !== e2.top ? "0 auto" : "24px auto" };
  }), wrapperStyle: computed(() => e2.fullscreen ? "width: 100%; height: 100%;" : "center" === e2.top ? "display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      " : `position:relative;top: ${e2.top};padding-bottom:24px;`), bodyStyle: computed(() => "width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;") }))(t2), g2 = (e2) => {
    var _a;
    t2._onClose && ((_a = t2._onClose) == null ? void 0 : _a.call(t2, e2)), l2.emit("close", e2);
  }, y2 = (e2) => {
    ("Escape" === e2.code || 27 === e2.keyCode || "Escape" === e2.key) && t2.escHide && ((e3) => {
      if (!e3) return false;
      const t3 = document.querySelectorAll(".m-dialog[data-show='true']");
      if (t3.length > 0) return t3[t3.length - 1] === e3;
      return false;
    })(r2.value) && l2.emit("close", { type: "cancel" });
  }, v2 = async (e2, a2) => {
    await new Promise((e3) => requestAnimationFrame(e3));
    const l3 = "center";
    o2.value.style.setProperty("transform-origin", l3), i2.value.style.setProperty("transform-origin", l3), $('.m-dialog[data-show="true"]'), await R({ mask: s2.value, content: i2.value, wrapper: o2.value }), t2.escHide && document.addEventListener("keyup", y2), a2();
  }, b2 = async (e2, t3) => {
    await N({ mask: s2.value, content: i2.value, wrapper: o2.value }), $('.m-dialog[data-show="true"]'), document.removeEventListener("keyup", y2), t3();
  };
  return () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const e2 = (_b = (_a = l2.slots).default) == null ? void 0 : _b.call(_a), a2 = (_d = (_c = l2.slots).footer) == null ? void 0 : _d.call(_c), y3 = (_f = (_e = l2.slots).header) == null ? void 0 : _f.call(_e), w2 = (_h = (_g = l2.slots).body) == null ? void 0 : _h.call(_g);
    return createVNode(Teleport, { to: t2.target }, { default: () => [createVNode(A, { onEnter: v2, onLeave: b2 }, { default: () => [withDirectives(createVNode("div", { class: `m-dialog ${t2.className || ""}`, "data-show": t2.visible, ref: r2, style: { "--m-dialog-mask-color": t2.maskBackgroundColor } }, [createVNode("section", { class: "m-dialog-mask", ref: s2 }, null), createVNode("div", { class: "m-dialog-container", onClick: () => t2.maskHide && g2("cancel") }, [createVNode("div", { style: c2.value }, [createVNode("div", { class: "m-dialog-cover", style: u2.value }, [createVNode("div", { class: "m-dialog-content", onClick: (e3) => e3.stopPropagation() }, [createVNode("div", { class: "m-dialog-content__background", ref: o2 }, null), createVNode("section", { class: "m-dialog-content__wrapper", ref: i2, style: d2.value }, [t2.showClose && createVNode(x, { type: "text", shape: "square", size: "small", class: "m-dialog-content__close", onClick: () => g2("cancel") }, { default: () => [createVNode("svg", { fill: "currentColor", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5090", width: "28", height: "28" }, [createVNode("path", { d: "M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" }, null)])] }), y3 || t2.title && createVNode("header", { class: "m-dialog__header" }, [createVNode("span", { class: "m-dialog-title" }, [t2.title])]), w2 || createVNode("main", { class: "m-dialog__body" }, [e2 || t2.content]), a2 || (t2.cancelBtnText || t2.okBtnText) && createVNode("footer", { class: "m-dialog__footer" }, [t2.cancelBtnText && createVNode(x, mergeProps(t2.cancelBtnProps, { onClick: () => g2("cancel") }), { default: () => [t2.cancelBtnText] }), t2.okBtnText && createVNode(x, mergeProps(t2.okBtnProps, { onClick: () => g2("ok") }), { default: () => [t2.okBtnText] })])])])])])])]), [[vShow, t2.visible]])] })] });
  };
} });
var q = (e2) => {
  const t2 = (e2 == null ? void 0 : e2.title) || "", a2 = e2.width || 480, l2 = (e2 == null ? void 0 : e2.top) || "center";
  return { onConfirm: () => {
  }, onCancel: () => {
  }, okBtnText: (e2 == null ? void 0 : e2.okBtnText) || "确定", cancelBtnText: (e2 == null ? void 0 : e2.cancelBtnText) || "", okBtnProps: e2 == null ? void 0 : e2.okBtnProps, cancelBtnProps: e2 == null ? void 0 : e2.cancelBtnProps, content: "hello", className: "m-dialog-confirm", title: t2, width: a2, top: l2, escHide: false, maskHide: false, showClose: false, visible: true };
};
var j = async (e2) => {
  const t2 = document.createElement("div");
  let a2, l2, n2;
  document.body.appendChild(t2);
  const o2 = createApp(F, { ...q(e2), target: t2, _onClose: async (i3) => {
    var _a, _b;
    "cancel" === i3 && e2.onCancel ? (_a = e2.onCancel) == null ? void 0 : _a.call(e2) : "ok" === i3 && e2.onConfirm && ((_b = e2.onConfirm) == null ? void 0 : _b.call(e2)), await N({ mask: a2, wrapper: n2, content: l2 }), o2.unmount(), t2.remove();
  } });
  o2.mount(t2), a2 = t2.querySelector(".m-dialog-mask"), l2 = t2.querySelector(".m-dialog-content__wrapper"), n2 = t2.querySelector(".m-dialog-content__background");
  let i2 = "center";
  n2.style.setProperty("transform-origin", i2), l2.style.setProperty("transform-origin", i2), R({ mask: a2, content: l2, wrapper: n2 });
};
var O = Object.freeze({ open: (e2 = {}) => {
  j(Object.assign({}, e2));
}, confirm: (e2 = {}) => {
  j(Object.assign({}, e2, { okBtnType: "primary", cancelBtnText: "取消", cancelBtnProps: { type: "default" } }));
} });
var D = defineComponent({ name: "MInput", components: { MIcon: w }, props: { value: [String, Number], modelValue: [String, Number], name: { type: String, default: "" }, placeholder: { type: String, default: "" }, type: { type: String, default: "text" }, size: { type: String, default: "small" }, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, prepend: { type: String, default: "" }, append: { type: String, default: "" }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, width: { type: [String, Number], default: "" }, autofocus: { type: Boolean, default: false }, autocomplete: { type: String, default: "off" }, maxlength: { type: [String, Number], default: "" }, minlength: { type: [String, Number], default: "" }, max: { type: [String, Number], default: "" }, min: { type: [String, Number], default: "" }, step: { type: [String, Number], default: "" }, pattern: { type: String, default: "" }, showLimitCount: { type: Boolean, default: false }, showPasswordIcon: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "focus", "blur"], exposed: ["focus", "blur"], setup(t2, { emit: l2, slots: o2, expose: i2 }) {
  const { inputRef: s2, inputValue: u2, isFocus: c2, setIsFocus: d2, onChange: p2, onClearValue: m2 } = ((t3, a2) => {
    const l3 = ref(null), n2 = ref(false), o3 = ref(t3.value || t3.modelValue || "");
    return watch(() => [t3.modelValue, t3.value], (e2, t4) => {
      o3.value = e2[0] === t4[0] ? e2[1] || "" : e2[0] || "";
    }), { inputRef: l3, inputValue: o3, onChange: (e2) => {
      const t4 = e2.target.value;
      o3.value = t4, a2("update:modelValue", t4), a2("change", t4);
    }, isFocus: n2, setIsFocus: async (e2) => {
      var _a, _b;
      n2.value = e2, await new Promise((e3) => requestAnimationFrame(e3)), e2 ? ((_a = l3.value) == null ? void 0 : _a.focus(), a2("focus", e2)) : ((_b = l3.value) == null ? void 0 : _b.blur(), a2("blur", e2));
    }, onClearValue: () => {
      o3.value = "", a2("update:modelValue", ""), a2("change", "");
    } };
  })(t2, l2), { showPassword: f2, showPwd: g2, pwdType: y2, toggleShowPwd: h2, showLimitCount: v2 } = ((t3) => {
    const l3 = ref(false), n2 = ref(""), o3 = computed(() => {
      var _a;
      return t3.showPasswordIcon && !t3.disabled && !t3.readonly && "password" === ((_a = t3.type) == null ? void 0 : _a.toLowerCase());
    }), i3 = computed(() => {
      var _a;
      return t3.showLimitCount && t3.maxlength && !t3.disabled && !t3.readonly && ["text", "textarea"].includes((_a = t3.type) == null ? void 0 : _a.toLowerCase());
    });
    return { pwdType: n2, showPwd: l3, toggleShowPwd: () => {
      l3.value = !l3.value, n2.value = l3.value ? "text" : "password";
    }, showPassword: o3, showLimitCount: i3 };
  })(t2);
  return i2({ focus: () => {
    d2(true);
  }, blur: () => {
    d2(false);
  } }), () => {
    var _a, _b, _c, _d;
    const e2 = ((_a = o2 == null ? void 0 : o2.prefix) == null ? void 0 : _a.call(o2)) || t2.prefix, a2 = ((_b = o2 == null ? void 0 : o2.suffix) == null ? void 0 : _b.call(o2)) || t2.suffix, l3 = ((_c = o2 == null ? void 0 : o2.prepend) == null ? void 0 : _c.call(o2)) || t2.prepend, i3 = ((_d = o2 == null ? void 0 : o2.append) == null ? void 0 : _d.call(o2)) || t2.append, r2 = () => {
      var _a2;
      return createVNode("div", { onClick: () => d2(true), style: { width: t2.width }, class: { "m-input": true, "is-disabled": t2.disabled, "is-readonly": t2.readonly, "is-focus": c2.value, "m-input-size-large": "large" === t2.size, "m-input-size-small": "small" === t2.size, "m-input-size-mini": "mini" === t2.size } }, [e2 && createVNode("div", { class: "m-input-prefix" }, [e2]), createVNode("input", { class: "m-input-base", ref: s2, type: y2.value || t2.type, disabled: t2.disabled, placeholder: t2.placeholder, readonly: t2.readonly, value: u2.value, autofocus: t2.autofocus, autocomplete: t2.autocomplete, maxlength: t2.maxlength, max: t2.max, min: t2.min, step: t2.step, minlength: t2.minlength, name: t2.name, onInput: p2, onBlur: () => d2(false), onFocus: () => d2(true) }, null), t2.clearable && u2.value && createVNode("span", { class: "m-input-suffix-icon-wrapper m-clearable", onClick: m2 }, [createVNode(w, { name: "close-circle" }, null)]), f2.value && createVNode("span", { onClick: h2, class: "m-input-suffix-icon-wrapper" }, [createVNode(w, { name: g2.value ? "eye" : "eye-close" }, null)]), v2.value && createVNode("span", { class: "m-input-limit-count" }, [`${(_a2 = u2.value) == null ? void 0 : _a2.length}/${t2.maxlength}`]), a2 && createVNode("div", { class: "m-input-suffix" }, [a2])]);
    };
    return l3 || i3 ? createVNode("div", { class: { "m-input-wrapper": true, "has-prepend": l3, "has-append": i3 } }, [l3 && createVNode("div", { class: "m-input-prepend" }, [l3]), r2(), i3 && createVNode("div", { class: "m-input-append" }, [i3])]) : r2();
  };
} });
function Y({ type: e2 }) {
  switch (e2) {
    case "success":
      return createVNode(w, { size: "20px", name: "check-circle-fill" }, null);
    case "warning":
      return createVNode(w, { size: "20px", name: "warning-circle-fill" }, null);
    case "danger":
      return createVNode(w, { size: "20px", name: "close-circle-fill" }, null);
    default:
      return createVNode(w, { size: "20px", name: "info-circle-fill" }, null);
  }
}
var W = defineComponent({ name: "MAlert", props: { type: { type: String, default: "primary" }, icon: { type: String, default: "" }, title: { type: String, default: "" }, description: { type: String, default: "" }, showClose: { type: Boolean, default: false }, showIcon: { type: Boolean, default: false }, dark: { type: Boolean, default: false } }, emits: ["close"], setup(t2, { slots: a2, emit: l2 }) {
  const o2 = ref(true), i2 = () => {
    o2.value = false, l2("close");
  };
  return () => {
    const e2 = a2.title ? a2.title() : t2.title, l3 = a2.default ? a2.default() : t2.description, s2 = a2.icon ? a2.icon() : createVNode(Y, { type: t2.type }, null);
    return createVNode("div", { class: `m-alert m-alert-${t2.type} ${t2.dark ? "is-dark" : ""}`, style: { display: o2.value ? "block" : "none" } }, [createVNode("main", { class: "m-alert-main" }, [t2.showIcon && s2 && createVNode("div", { class: "m-alert-icon" }, [s2]), createVNode("div", { class: "m-alert-content" }, [e2 && createVNode("div", { class: "m-alert-title" }, [e2]), l3 && createVNode("div", { class: "m-alert-description" }, [l3])]), t2.showClose && createVNode("span", { class: "m-alert-close" }, [createVNode(x, { onClick: i2, rightIcon: "close", type: "text", shape: "circle" }, null)])])]);
  };
} });
var X = (e2) => Array.isArray(e2);
function Z({ checked: e2, indeterminate: t2 }) {
  return e2 ? createVNode("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", role: "img", "aria-hidden": "true" }, [createVNode("path", { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null)]) : t2 ? createVNode("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", fill: "currentColor", "aria-hidden": "true" }, [createVNode("path", { d: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null)]) : createVNode("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", role: "img", "aria-hidden": "true" }, [createVNode("path", { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, null)]);
}
var G = defineComponent({ name: "MCheckbox", props: { size: { type: String, default: "small", validator: (e2) => ["mini", "small", "large"].includes(e2) }, label: { type: String, default: "" }, checked: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, indeterminate: { type: Boolean, default: false }, value: { type: [String, Number], default: "" }, modelValue: { type: [String, Number, Boolean, Array], default: false } }, emits: ["update:modelValue", "change", "update:indeterminate"], setup(t2, { emit: a2, slots: l2 }) {
  const { checked: o2, indeterminate: i2, toggle: s2 } = ((t3, a3) => {
    var _a;
    const l3 = ref(t3.indeterminate), n2 = ref(X(t3.modelValue) ? (_a = t3.modelValue) == null ? void 0 : _a.includes(t3.value) : t3.modelValue || t3.checked || false);
    return watch(() => [t3.checked, t3.indeterminate, t3.modelValue], () => {
      var _a2;
      n2.value = X(t3.modelValue) ? (_a2 = t3.modelValue) == null ? void 0 : _a2.includes(t3.value) : t3.modelValue || t3.checked || false, l3.value = t3.indeterminate;
    }), { toggle: () => {
      if (!t3.disabled) {
        if (X(t3.modelValue)) {
          const e2 = [...t3.modelValue];
          e2.includes(t3.value) ? (e2.splice(e2.indexOf(t3.value), 1), n2.value = false) : (e2.push(t3.value), n2.value = true), a3("update:modelValue", e2), a3("change", e2);
        } else n2.value = !n2.value, a3("update:modelValue", n2.value), a3("change", n2.value);
        l3.value = false, a3("update:indeterminate", l3.value);
      }
    }, indeterminate: l3, checked: n2 };
  })(t2, a2);
  return () => {
    const e2 = l2.default ? l2.default() : t2.label;
    return createVNode("div", { class: { "m-checkbox": true, "m-checkbox-disabled": t2.disabled, "m-checkbox-checked": o2.value, "m-checkbox-indeterminate": i2.value, "m-checkbox-size-mini": "mini" === t2.size, "m-checkbox-size-small": "small" === t2.size, "m-checkbox-size-large": "large" === t2.size }, "data-disabled": t2.disabled, "data-checked": o2.value, "data-indeterminate": i2.value, "data-value": t2.value, onClick: s2 }, [createVNode("div", { class: "m-checkbox-wrapper" }, [createVNode("span", { class: "m-checkbox-control-wrapper" }, [createVNode("div", { class: "m-checkbox-control-main" }, [createVNode("div", { class: "m-checkbox-control-inner" }, [Z({ checked: o2.value, indeterminate: i2.value })])])]), createVNode("span", { class: "m-checkbox-label" }, [e2]), createVNode("input", { type: "checkbox", class: "m-checkbox-input", checked: o2.value, disabled: t2.disabled, value: t2.value }, null)])]);
  };
} });
var J = defineComponent({ name: "MAvatar", components: { MIcon: w }, props: { src: { type: String, default: "" }, size: { type: String, default: "36px" }, alt: { type: String, default: "" }, srcSet: { type: String, default: "" }, fit: { type: String, default: "cover" }, icon: { type: String, default: "" }, shape: { type: String, default: "circle" }, loading: { type: String, default: "eager" } }, setup(e2, { slots: t2 }) {
  const a2 = (e3) => {
  };
  return () => {
    const l2 = t2.icon ? t2.icon() : e2.icon ? createVNode(w, { name: e2.icon, class: "m-avatar-icon", size: String(0.6 * parseInt(e2.size)) + "px" }, null) : "", o2 = t2.default ? t2.default() : "";
    return createVNode("div", { class: { "m-avatar": true, "m-avatar-shape-square": "square" === e2.shape, "m-avatar-shape-circle": "circle" === e2.shape }, style: { "--size": e2.size, "--shape": e2.shape } }, [l2 || (o2 || createVNode("img", { src: e2.src, alt: e2.alt, srcset: e2.srcSet, class: "m-avatar-image", style: { "object-fit": e2.fit || "none" }, loading: e2.loading, width: e2.size, height: e2.size, onError: a2 }, null))]);
  };
} });
var K = [x, k, S, C, B, z, _, T, I, H, F, D, w, W, G, J].map((e2) => (e2.install = function(t2) {
  t2.component(e2.name, e2);
}, e2));
var Q = { install(e2) {
  K.forEach((t2) => {
    e2.component(t2.name, t2);
  });
} };
export {
  O as Dialog,
  W as MAlert,
  C as MAnchor,
  J as MAvatar,
  z as MBreadcrumb,
  _ as MBreadcrumbItem,
  x as MButton,
  I as MButtonGroup,
  G as MCheckbox,
  B as MConfigProvider,
  F as MDialog,
  S as MDivider,
  T as MDropdown,
  w as MIcon,
  D as MInput,
  H as MMenuItem,
  k as MSpace,
  Q as default
};
/*! Bundled license information:

mostify-ui/dist/mostify-ui.js:
  (* @license Mostify UI By <tmwang>*)
*/
//# sourceMappingURL=mostify-ui.js.map
