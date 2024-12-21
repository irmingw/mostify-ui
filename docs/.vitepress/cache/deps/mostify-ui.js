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
var w = defineComponent({ name: "MButton", props: { type: { type: String, default: "default" }, size: String, shape: String, disabled: Boolean, loading: Boolean, border: Boolean, light: Boolean }, emits: ["click", "focus", "blur"], setup(n2, { slots: l2, emit: i2 }) {
  const { btnClass: s2, contentShow: r2, setClickXEvent: u2, btnRef: c2, rippleRef: d2 } = ((n3) => {
    const o2 = ref(null), l3 = ref(null), i3 = inject(b, { size: "" }), s3 = computed(() => {
      const e2 = ["m-button"];
      n3.type && e2.push("m-button-type-" + n3.type);
      const t2 = n3.size || i3.size || "small";
      return e2.push("m-button-size-" + t2), n3.shape && e2.push("m-button-shape-" + n3.shape), n3.loading && e2.push("is-loading"), n3.disabled && e2.push("is-disabled"), e2;
    }), r3 = computed(() => !(n3.loading && ["circle", "square"].includes(n3.shape)));
    let u3 = null;
    return { btnClass: s3, contentShow: r3, setClickXEvent: async (e2) => {
      if (!o2.value) return;
      u3 || (u3 = document.createElement("div"), u3.className = "m-button-ripple");
      const t2 = u3.cloneNode();
      o2.value.appendChild(t2);
      const a2 = l3.value.getBoundingClientRect(), n4 = Math.max(a2.width, a2.height), i4 = n4 + "px", s4 = i4;
      let r4 = (e2.clientY - a2.top - n4 / 2).toFixed(0) + "px", c3 = (e2.clientX - a2.left - n4 / 2).toFixed(0) + "px";
      r4 = 0.5 * (a2.height - n4) + "px", Math.abs(a2.width - a2.height) < 12 && (c3 = 0.5 * (a2.width - n4) + "px"), t2.setAttribute("style", `width:${i4};height:${s4};top:${r4};left:${c3};`), t2.classList.add("m-button-ripple-active"), await new Promise((e3) => setTimeout(e3, 500)), t2.remove();
    }, btnRef: l3, rippleRef: o2 };
  })(n2);
  function p2(e2, t2) {
    e2.preventDefault(), n2.loading || n2.disabled || i2(t2, e2);
  }
  const f2 = (e2) => {
    e2.preventDefault(), n2.loading || n2.disabled || u2(e2);
  };
  return () => createVNode("button", { class: s2.value, onMousedown: f2, ref: c2, style: { "--border-width": n2.border ? "1px" : "0px" }, "data-light": n2.light ? "on" : "off", onClick: (e2) => p2(e2, "click"), onFocus: (e2) => p2(e2, "focus"), onBlur: (e2) => p2(e2, "blur") }, [!n2.loading && !n2.disabled && createVNode("div", { class: "m-button-ripple-wrapper", ref: d2 }, null), createVNode("span", { class: "m-button-main" }, [n2.loading && createVNode("span", { class: "m-button-loading-icon-wrapper", style: { marginRight: r2.value ? "8px" : 0 } }, [createVNode("svg", { viewBox: "0 0 1024 1024", width: "1em", height: "1em", class: "m-button-icon-loading" }, [createVNode("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z", fill: "currentColor" }, null)])]), r2.value ? l2.default && l2.default() : null])]);
} });
var S = defineComponent({ name: "MSpace", props: { size: { type: String, default: "" }, layout: { type: String, validator: (e2) => ["x", "y"].includes(e2), default: "x" }, alignItems: { type: String, default: "flex-start" } }, setup(e2, { slots: t2 }) {
  const n2 = computed(() => "y" === e2.layout ? "m-space-y" : "m-space-x"), l2 = computed(() => t2.default ? t2.default() : []);
  return () => {
    var _a;
    return createVNode("div", { class: ["m-space", n2.value], style: { "--size": e2.size || "", "align-items": e2.alignItems || "" } }, [(_a = l2.value) == null ? void 0 : _a.map((e3, t3) => createVNode("div", { class: "m-space-item", key: t3 }, [e3]))]);
  };
} });
var x = defineComponent({ name: "MDivider", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, color: { type: String, default: "" }, size: { type: String, default: "12px" } }, setup(e2) {
  const t2 = computed(() => "y" === e2.layout ? "m-divider-y" : "m-divider-x");
  return () => createVNode("div", { style: { "--color": e2.color, "--size": e2.size }, class: ["m-divider", t2.value] }, null);
} });
var k = defineComponent({ name: "MAnchor", props: { getTarget: { type: Function, default: () => window } }, setup(e2, { slots: a2 }) {
  inject(b);
  return () => createVNode("div", null, [a2.default && a2.default()]);
} });
var C = defineComponent({ name: "MConfigProvider", props: { locale: { type: String, default: "zh-CN" }, size: { type: String, default: "small", validator: (e2) => ["small", "mini", "large"].includes(e2) } }, setup: (e2, { slots: t2 }) => (provide(b, e2), () => createVNode(Fragment, null, [t2.default && t2.default()])) });
var B = defineComponent({ name: "MBreadcrumb", props: { separator: { type: String, default: "/" }, color: String, activeColor: String }, setup(e2, { slots: t2 }) {
  const n2 = computed(() => {
    var _a, _b;
    return ((_b = (_a = t2 == null ? void 0 : t2.default) == null ? void 0 : _a.call(t2)) == null ? void 0 : _b.length) || 0;
  });
  return () => {
    var _a, _b;
    return createVNode("div", { class: "m-breadcrumb", style: { "--color": e2.color, "--activeColor": e2.activeColor } }, [(_b = (_a = t2 == null ? void 0 : t2.default) == null ? void 0 : _a.call(t2)) == null ? void 0 : _b.map((a2, l2) => {
      var _a2;
      return createVNode(Fragment, null, [a2, l2 >= 0 && l2 < n2.value - 1 && createVNode("span", null, [t2.separator && ((_a2 = t2.separator) == null ? void 0 : _a2.call(t2)) || e2.separator])]);
    })]);
  };
} });
var _ = defineComponent({ name: "MBreadcrumbItem", props: { title: { type: String, default: "" }, disabled: Boolean }, emits: ["click"], setup(e2, { emit: t2, slots: a2 }) {
  function n2(a3) {
    a3.preventDefault(), (e2 == null ? void 0 : e2.disabled) || t2("click", a3);
  }
  return () => createVNode("div", { class: ["m-breadcrumb__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, onClick: n2 }, [a2.default && a2.default() || e2.title]);
} });
var E = (e2) => e2 ? e2.getBoundingClientRect() : null;
var L = (e2) => new Promise((t2) => {
  if (!e2) return null;
  Promise.all(e2.getAnimations({ subtree: true }).map((e3) => e3.finished)).then(() => {
    t2(true);
  }).catch(() => {
    t2(false);
  });
});
var z = (e2, t2, a2, n2 = 0) => new Promise(async (o2, l2) => {
  if (!e2) return l2("node is null");
  await ((e3) => new Promise((t3) => {
    var _a;
    if (!e3) return t3(false);
    (_a = e3 == null ? void 0 : e3.getAnimations()) == null ? void 0 : _a.forEach((e4) => {
      e4.cancel();
    }), t3(true);
  }))(e2), e2.animate(t2, a2);
  const i2 = "number" == typeof a2 ? a2 : (a2 == null ? void 0 : a2.duration) || null;
  null != i2 && Number(i2) >= 0 ? setTimeout(() => {
    o2(true);
  }, Number(i2) - n2) : o2(true);
});
var T = { hideTime: 200, showTime: 200, bgShow: async (e2) => {
  await z(e2, [{ transform: "scaleY(0.8)", offset: 0 }, { transform: "scaleY(1)", offset: 0.33 }, { transform: "scaleY(1)", offset: 1 }], { duration: 200 }).catch(() => {
  });
}, cShow: async (e2) => {
  await z(e2, [{ offset: 0, opacity: 0 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 1 }], { duration: 200 }).catch(() => {
  });
}, bgHide: async (e2) => {
  await z(e2, [{ opacity: 1, offset: 0 }, { opacity: 0.66, offset: 0.33 }, { opacity: 0, transform: "scaleY(0.8)", offset: 1 }], { duration: 200 }).catch(() => {
  });
}, async cHide(e2) {
  await z(e2, [{ offset: 0, opacity: 1 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 0 }], { duration: 200 }).catch(() => {
  });
} };
function P(e2, t2, a2) {
  const n2 = document.documentElement.scrollTop, o2 = function(e3, t3, a3) {
    var n3 = window.innerWidth, o3 = window.innerHeight, l2 = t3.top > (a3 == null ? void 0 : a3.height), i2 = o3 - ((t3 == null ? void 0 : t3.top) + (a3 == null ? void 0 : a3.height)) > 0, s2 = t3.left > a3.width, r2 = n3 - (t3.left + a3.width) > 0;
    return l2 && i2 && s2 && r2 ? e3 : i2 ? s2 && r2 ? ["bottomRight", "bottomLeft", "bottom"].includes(e3) ? e3 : "bottomLeft" : s2 ? "bottomRight" : "bottomLeft" : s2 && r2 ? ["topLeft", "topRight", "top"].includes(e3) ? e3 : "topLeft" : s2 ? "topLeft" : "topRight";
  }(e2, t2, a2);
  switch (o2) {
    case "bottomRight":
      return { top: `${t2.top + t2.height + n2}`, left: "" + (t2.left + t2.width - a2.width) };
    case "bottom":
      return { top: `${t2.top + t2.height + n2}`, left: "" + (t2.left + t2.width / 2 - a2.width / 2) };
    default:
      return { top: `${t2.top + t2.height + n2}`, left: `${t2.left}` };
  }
}
var M = defineComponent({ name: "MDropdown", props: { placement: { type: String, default: "bottomLeft" }, trigger: { type: String, default: "click", validator: (e2) => ["hover", "click"].includes(e2) }, destroyOnHide: { type: Boolean, default: false }, disabled: Boolean, open: { type: Boolean, default: false }, toBody: { type: Boolean, default: true } }, setup(t2, { slots: n2 }) {
  const l2 = ref(null), i2 = ref(null), y2 = ref(null), v2 = ref(false), g2 = reactive({ top: "0", left: "0", waitChange: false, renderToDom: null }), h2 = ref(false);
  let b2 = null;
  const w2 = computed(() => !t2.destroyOnHide || v2.value);
  let S2 = null;
  function x2() {
    const e2 = E(S2), a2 = E(y2.value), { top: n3, left: o2 } = P(t2.placement, e2, a2);
    g2.top = `${n3}px`, g2.left = `${o2}px`, i2.value.style.minWidth = `${e2.width}px`;
  }
  function k2() {
    w2.value && x2();
  }
  async function C2() {
    v2.value = true, h2.value = true, b2 && (clearTimeout(b2), b2 = null), g2.waitChange = true, await new Promise((e2) => requestAnimationFrame(e2)), x2(), window.addEventListener("scroll", k2, false), T.cShow(y2.value), T.bgShow(i2.value), await L(y2.value).catch(() => {
    }), g2.waitChange = false;
  }
  function B2() {
    if (g2.waitChange || t2.disabled) return;
    !v2.value ? C2() : z2();
  }
  function _2() {
    g2.waitChange || t2.disabled || v2.value || C2();
  }
  function z2() {
    g2.waitChange || (h2.value && (clearTimeout(b2), b2 = null), h2.value = true, b2 = setTimeout(async () => {
      var e2;
      h2.value && (g2.waitChange = true, T.cHide(y2.value), T.bgHide(i2.value), await (e2 = 0, new Promise((t3) => setTimeout(t3, e2))), await L(y2.value).catch(() => {
      }), window.removeEventListener("scroll", k2, false), v2.value = false, g2.waitChange = false);
    }, 60));
  }
  function M2(e2) {
    const t3 = e2.target;
    var a2, n3;
    t3 && (a2 = l2.value, n3 = t3, a2 && n3 && (a2 === n3 || a2.contains && a2.contains(n3)) || z2());
  }
  function R2() {
    h2.value = true, b2 ? (clearTimeout(b2), b2 = null, v2.value = true) : (h2.value = false, v2.value = true);
  }
  function $2() {
    var _a, _b;
    window.addEventListener("click", M2, true), "click" === t2.trigger ? S2 == null ? void 0 : S2.addEventListener("click", B2, false) : (S2 == null ? void 0 : S2.addEventListener("mouseenter", _2, false), S2 == null ? void 0 : S2.addEventListener("mouseleave", z2, false), (_a = i2.value) == null ? void 0 : _a.addEventListener("mouseenter", R2, false), (_b = i2.value) == null ? void 0 : _b.addEventListener("mouseleave", z2, false));
  }
  function H2() {
    var _a, _b;
    S2 == null ? void 0 : S2.removeEventListener("click", B2, false), window.removeEventListener("click", M2, false), S2 == null ? void 0 : S2.removeEventListener("mouseenter", _2, false), S2 == null ? void 0 : S2.removeEventListener("mouseleave", z2, false), (_a = i2.value) == null ? void 0 : _a.removeEventListener("mouseenter", R2, false), (_b = i2.value) == null ? void 0 : _b.removeEventListener("mouseleave", z2, false);
  }
  return watch(() => t2.trigger, () => {
    H2(), $2();
  }), onBeforeMount(() => {
    var _a;
    if (!document.querySelector("#m-inset__body")) {
      const e2 = document.createElement("div");
      e2.setAttribute("id", "m-inset__body"), (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(e2);
    }
  }), onMounted(() => {
    var _a;
    S2 = 1 === ((_a = l2.value.children) == null ? void 0 : _a.length) ? l2.value.children[0] || null : l2.value || null, $2();
  }), onUnmounted(() => {
    H2();
  }), () => createVNode("div", null, [createVNode("div", { class: "m-dropdown", ref: l2, style: { "pointer-events": g2.waitChange ? "none" : "all" } }, [n2.default && n2.default()]), createVNode(Teleport, { to: "#m-inset__body" }, { default: () => {
    var _a;
    return [w2.value && withDirectives(createVNode("div", { class: "m-dropdown__content m-box-shadow", ref: i2, style: { "--top": g2.top, "--left": g2.left, "pointer-events": g2.waitChange ? "none" : "all" } }, [createVNode("div", { class: "m-dropdown__body", ref: y2 }, [n2.content && ((_a = n2.content()) == null ? void 0 : _a.map((e2) => (e2.props = { ...e2.props }, e2)))])]), [[vShow, v2.value]])];
  } })]);
} });
var R = defineComponent({ name: "MButtonGroup", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, size: { type: String, default: "" } }, setup(e2, { slots: a2 }) {
  const n2 = inject(b, { size: "" });
  return provide(b, { size: e2.size || n2.size }), () => createVNode("div", { class: ["m-button-group", "y" === e2.layout ? "m-button-layout-y" : "m-button-layout-x"] }, [a2.default && a2.default()]);
} });
var $ = defineComponent({ name: "MMenuItem", props: { disabled: Boolean, label: String }, emits: ["click"], setup(e2, { slots: t2, emit: a2 }) {
  function n2(t3) {
    if (e2.disabled) return t3.preventDefault(), void t3.stopPropagation();
    a2("click", t3);
  }
  return () => createVNode("div", { class: ["m-menu__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, "aria-disabled": e2.disabled, onClick: n2 }, [t2.default && t2.default() || e2.label]);
} });
var H = defineComponent({ name: "MTransition", props: { onEnter: Function, onLeave: Function }, setup: (e2, t2) => () => {
  const a2 = t2.slots.default && t2.slots.default();
  return createVNode(Transition, { appear: false, onEnter: (t3, a3) => {
    var _a;
    return (_a = e2.onEnter) == null ? void 0 : _a.call(e2, t3, a3);
  }, onLeave: (t3, a3) => {
    var _a;
    return (_a = e2.onLeave) == null ? void 0 : _a.call(e2, t3, a3);
  }, css: false }, "function" == typeof (n2 = a2) || "[object Object]" === Object.prototype.toString.call(n2) && !isVNode(n2) ? a2 : { default: () => [a2] });
  var n2;
} });
var F = async ({ mask: e2, content: t2, wrapper: a2 }) => {
  z(e2, [{ opacity: 0 }, { opacity: 1 }], 120), z(a2, [{ transform: "scale(0.33)", offset: 0, opacity: 0.66 }, { transform: "scale(1)", offset: 0.33, opacity: 1 }, { transform: "scale(1)", offset: 1, opacity: 1 }], { duration: 500 }), await z(t2, [{ opacity: 0, offset: 0 }, { opacity: 0.25, offset: 0.35 }, { opacity: 1, offset: 1 }], { duration: 500 });
};
var N = async ({ mask: e2, wrapper: t2, content: a2 }) => {
  z(e2, [{ opacity: 1 }, { opacity: 0 }], { duration: 240 }), z(a2, [{ opacity: 1, offset: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 0, offset: 1 }], { duration: 240 }), await z(t2, [{ opacity: 1, offset: 0 }, { opacity: 0.88, offset: 0.33 }, { opacity: 0, offset: 1, transform: "scale(0.33)" }], { duration: 240 }, 20);
};
var q = (e2 = 'm-dialog[data-active="true"]') => {
  document.querySelectorAll(e2).length > 0 ? (document.body.setAttribute("data-overflow", "hidden"), document.documentElement.dataset.overflow = "hidden") : (document.body.setAttribute("data-overflow", "auto"), document.documentElement.dataset.overflow = "auto");
};
var A = defineComponent({ name: "MDialog", components: { MButton: w }, props: { visible: { type: Boolean, default: false }, content: { type: String, default: "" }, className: String, title: { type: String, default: "" }, cancelBtnText: { type: String, default: "" }, okBtnText: { type: String, default: "" }, okBtnProps: { type: Object, default: () => ({ type: "primary" }) }, cancelBtnProps: { type: Object, default: () => ({ type: "default" }) }, width: { type: [Number, String], default: "50%" }, height: { type: [Number, String], default: "auto" }, showClose: { type: Boolean, default: true }, maskBackgroundColor: { type: String, default: "" }, fullscreen: { type: Boolean, default: false }, escHide: { type: Boolean, default: true }, maskHide: { type: Boolean, default: true }, target: { type: [String], default: "body" }, top: { type: String, default: "center" }, _onClose: Function }, emits: ["close"], setup(t2, n2) {
  const { wrapperRef: l2, bodyRef: i2, maskRef: s2, dialogRef: r2 } = { dialogRef: ref(null), wrapperRef: ref(null), maskRef: ref(null), bodyRef: ref(null) }, { contentStyle: u2, wrapperStyle: c2, bodyStyle: d2 } = ((e2) => ({ contentStyle: computed(() => {
    const t3 = ("number" == typeof e2.width ? `${e2.width}px` : e2.width) || "auto", a2 = ("number" == typeof e2.height ? `${e2.height}px` : e2.height) || "auto";
    return e2.fullscreen ? { width: "100%", padding: "0px", margin: "0px", height: "100%" } : { width: t3, maxWidth: "100%", height: a2, margin: e2.top && "center" !== e2.top ? "0 auto" : "24px auto" };
  }), wrapperStyle: computed(() => e2.fullscreen ? "width: 100%; height: 100%;" : "center" === e2.top ? "display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      " : `position:relative;top: ${e2.top};padding-bottom:24px;`), bodyStyle: computed(() => "width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;") }))(t2), y2 = (e2) => {
    var _a;
    t2._onClose && ((_a = t2._onClose) == null ? void 0 : _a.call(t2, e2)), n2.emit("close", e2);
  }, v2 = (e2) => {
    ("Escape" === e2.code || 27 === e2.keyCode || "Escape" === e2.key) && t2.escHide && ((e3) => {
      if (!e3) return false;
      const t3 = document.querySelectorAll(".m-dialog[data-show='true']");
      if (t3.length > 0) return t3[t3.length - 1] === e3;
      return false;
    })(r2.value) && n2.emit("close", { type: "cancel" });
  }, h2 = async (e2, a2) => {
    await new Promise((e3) => requestAnimationFrame(e3));
    const n3 = "center";
    l2.value.style.setProperty("transform-origin", n3), i2.value.style.setProperty("transform-origin", n3), q('.m-dialog[data-show="true"]'), await F({ mask: s2.value, content: i2.value, wrapper: l2.value }), t2.escHide && document.addEventListener("keyup", v2), a2();
  }, b2 = async (e2, t3) => {
    await N({ mask: s2.value, content: i2.value, wrapper: l2.value }), q('.m-dialog[data-show="true"]'), document.removeEventListener("keyup", v2), t3();
  };
  return () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const e2 = (_b = (_a = n2.slots).default) == null ? void 0 : _b.call(_a), a2 = (_d = (_c = n2.slots).footer) == null ? void 0 : _d.call(_c), v3 = (_f = (_e = n2.slots).header) == null ? void 0 : _f.call(_e), S2 = (_h = (_g = n2.slots).body) == null ? void 0 : _h.call(_g);
    return createVNode(Teleport, { to: t2.target }, { default: () => [createVNode(H, { onEnter: h2, onLeave: b2 }, { default: () => [withDirectives(createVNode("div", { class: `m-dialog ${t2.className || ""}`, "data-show": t2.visible, ref: r2, style: { "--m-dialog-mask-color": t2.maskBackgroundColor } }, [createVNode("section", { class: "m-dialog-mask", ref: s2 }, null), createVNode("div", { class: "m-dialog-container", onClick: () => t2.maskHide && y2("cancel") }, [createVNode("div", { style: c2.value }, [createVNode("div", { class: "m-dialog-cover", style: u2.value }, [createVNode("div", { class: "m-dialog-content", onClick: (e3) => e3.stopPropagation() }, [createVNode("div", { class: "m-dialog-content__background", ref: l2 }, null), createVNode("section", { class: "m-dialog-content__wrapper", ref: i2, style: d2.value }, [t2.showClose && createVNode(w, { type: "text", shape: "square", size: "small", class: "m-dialog-content__close", onClick: () => y2("cancel") }, { default: () => [createVNode("svg", { fill: "currentColor", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5090", width: "28", height: "28" }, [createVNode("path", { d: "M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" }, null)])] }), v3 || t2.title && createVNode("header", { class: "m-dialog__header" }, [createVNode("span", { class: "m-dialog-title" }, [t2.title])]), S2 || createVNode("main", { class: "m-dialog__body" }, [e2 || t2.content]), a2 || (t2.cancelBtnText || t2.okBtnText) && createVNode("footer", { class: "m-dialog__footer" }, [t2.cancelBtnText && createVNode(w, mergeProps(t2.cancelBtnProps, { onClick: () => y2("cancel") }), { default: () => [t2.cancelBtnText] }), t2.okBtnText && createVNode(w, mergeProps(t2.okBtnProps, { onClick: () => y2("ok") }), { default: () => [t2.okBtnText] })])])])])])])]), [[vShow, t2.visible]])] })] });
  };
} });
var j = (e2) => {
  const t2 = (e2 == null ? void 0 : e2.title) || "", a2 = e2.width || 480, n2 = (e2 == null ? void 0 : e2.top) || "center";
  return { onConfirm: () => {
  }, onCancel: () => {
  }, okBtnText: (e2 == null ? void 0 : e2.okBtnText) || "确定", cancelBtnText: (e2 == null ? void 0 : e2.cancelBtnText) || "", okBtnProps: e2 == null ? void 0 : e2.okBtnProps, cancelBtnProps: e2 == null ? void 0 : e2.cancelBtnProps, content: "hello", className: "m-dialog-confirm", title: t2, width: a2, top: n2, escHide: false, maskHide: false, showClose: false, visible: true };
};
var I = async (e2) => {
  const t2 = document.createElement("div");
  let a2, n2, o2;
  document.body.appendChild(t2);
  const l2 = createApp(A, { ...j(e2), target: t2, _onClose: async (i3) => {
    var _a, _b;
    "cancel" === i3 && e2.onCancel ? (_a = e2.onCancel) == null ? void 0 : _a.call(e2) : "ok" === i3 && e2.onConfirm && ((_b = e2.onConfirm) == null ? void 0 : _b.call(e2)), await N({ mask: a2, wrapper: o2, content: n2 }), l2.unmount(), t2.remove();
  } });
  l2.mount(t2), a2 = t2.querySelector(".m-dialog-mask"), n2 = t2.querySelector(".m-dialog-content__wrapper"), o2 = t2.querySelector(".m-dialog-content__background");
  let i2 = "center";
  o2.style.setProperty("transform-origin", i2), n2.style.setProperty("transform-origin", i2), F({ mask: a2, content: n2, wrapper: o2 });
};
var O = Object.freeze({ open: (e2 = {}) => {
  I(Object.assign({}, e2));
}, confirm: (e2 = {}) => {
  I(Object.assign({}, e2, { okBtnType: "primary", cancelBtnText: "取消", cancelBtnProps: { type: "default" } }));
} });
var D = defineComponent({ name: "MInput", props: { value: [String, Number], modelValue: [String, Number], placeholder: String, type: { type: String, default: "text" }, size: { type: String, default: "small" }, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, prepend: { type: String, default: "" }, append: { type: String, default: "" }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, width: { type: [String, Number], default: "" }, autofocus: { type: Boolean, default: false }, status: { type: String, validator: function(e2) {
  return "success" === e2 || "error" === e2 || "warning" === e2 || "" === e2;
}, default: "" } }, emits: ["update:modelValue", "change", "focus", "blur"], exposed: ["focus", "blur"], setup(t2, n2) {
  const { inputRef: l2, isFocus: i2, setIsFocus: s2, inputValue: u2 } = ((t3) => {
    const a2 = ref(null), n3 = ref(false), o2 = ref(t3.value || t3.modelValue || "");
    return watch(() => [t3.modelValue, t3.value], (e2, t4) => {
      o2.value = e2[0] === t4[0] ? e2[1] || "" : e2[0] || "";
    }), { inputRef: a2, inputValue: o2, isFocus: n3, setIsFocus: (e2) => {
      n3.value = e2;
    } };
  })(t2), { inputClass: c2 } = ((e2, t3) => ({ inputClass: computed(() => {
    const a2 = ["m-input"];
    return e2.size && a2.push(`m-input-size-${e2.size}`), e2.status && a2.push(`m-input-status-${e2.status}`), e2.disabled ? (a2.push("m-input-disabled"), a2) : e2.readonly ? (a2.push("m-input-readonly"), a2) : (t3.value && a2.push("is-focus"), a2 == null ? void 0 : a2.join(" "));
  }) }))(t2, i2), d2 = (e2) => {
    t2.disabled || t2.readonly || (u2.value = e2.target.value, n2.emit("update:modelValue", u2.value), n2.emit("change", u2.value));
  };
  return n2.expose({ focus: () => {
    var _a;
    (_a = l2.value) == null ? void 0 : _a.focus();
  }, blur: () => {
    var _a;
    (_a = l2.value) == null ? void 0 : _a.blur();
  } }), () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const e2 = (_b = (_a = n2.slots) == null ? void 0 : _a.prefix) == null ? void 0 : _b.call(_a), a2 = (_d = (_c = n2.slots) == null ? void 0 : _c.suffix) == null ? void 0 : _d.call(_c), i3 = (_f = (_e = n2.slots) == null ? void 0 : _e.prepend) == null ? void 0 : _f.call(_e), r2 = (_h = (_g = n2.slots) == null ? void 0 : _g.append) == null ? void 0 : _h.call(_g), p2 = i3 || t2.prepend ? "is-prepend" : "", f2 = r2 || t2.append ? "is-append" : "";
    let m2 = c2.value;
    return p2 && (m2 = m2 + " " + p2), f2 && (m2 = m2 + " " + f2), createVNode("div", { class: m2 }, [i3 || t2.prepend ? createVNode("div", { class: "m-input-prepend" }, [i3 || t2.prepend]) : null, createVNode("div", { class: "m-input-content" }, [e2 || t2.prefix ? createVNode("div", { class: "m-input-prefix" }, [e2 || t2.prefix]) : null, createVNode("input", { class: "m-input-inner", ref: l2, type: t2.type, disabled: t2.disabled, placeholder: t2.placeholder, readonly: t2.readonly, value: u2.value, autofocus: t2.autofocus, onInput: d2, onBlur: (e3) => {
      s2(false), n2.emit("blur", e3);
    }, onFocus: (e3) => {
      s2(true), n2.emit("focus", e3);
    } }, null), t2.clearable && u2.value && createVNode("span", { class: "m-input-clear", onClick: () => {
      u2.value = "", n2.emit("update:modelValue", u2.value), n2.emit("change", u2.value);
    } }, [createVNode("svg", { class: "m-input-clear-icon", fill: "currentColor", viewBox: "0 0 1024 1024" }, [createVNode("path", { d: "M554.586353 512l170.556235-170.556235c11.444706-11.414588 11.595294-30.659765-0.180706-42.405647a29.906824 29.906824 0 0 0-42.405647-0.180706L512 469.413647l-170.556235-170.556235a30.208 30.208 0 0 0-42.405647 0.180706 29.906824 29.906824 0 0 0-0.180706 42.405647L469.413647 512l-170.556235 170.556235c-11.444706 11.414588-11.595294 30.659765 0.180706 42.405647a29.906824 29.906824 0 0 0 42.405647 0.180706L512 554.586353l170.556235 170.556235c11.414588 11.444706 30.659765 11.595294 42.405647-0.180706a29.906824 29.906824 0 0 0 0.180706-42.405647L554.586353 512zM512 993.882353C245.850353 993.882353 30.117647 778.149647 30.117647 512S245.850353 30.117647 512 30.117647s481.882353 215.732706 481.882353 481.882353-215.732706 481.882353-481.882353 481.882353z" }, null)])]), a2 || t2.suffix && createVNode("div", { class: "m-input-suffix" }, [a2 || t2.suffix])]), r2 || t2.append ? createVNode("div", { class: "m-input-append" }, [r2 || t2.append]) : null]);
  };
} });
var V = defineComponent({ name: "MIcon", props: { name: { type: String, default: "" }, size: { type: String, default: "16px" }, color: { type: String, default: "currentColor" } }, setup(e2) {
  const t2 = computed(() => `mostifyiconfont m-icon-${e2.name}`);
  return () => createVNode("i", { class: t2.value, style: { color: e2.color, fontSize: e2.size, lineHeight: "inherit" } }, null);
} });
var Y = [w, S, x, k, C, B, _, M, R, $, A, D, V].map((e2) => (e2.install = function(t2) {
  t2.component(e2.name, e2);
}, e2));
var W = { install(e2) {
  Y.forEach((t2) => {
    e2.component(t2.name, t2);
  });
} };
export {
  O as Dialog,
  k as MAnchor,
  B as MBreadcrumb,
  _ as MBreadcrumbItem,
  w as MButton,
  R as MButtonGroup,
  C as MConfigProvider,
  A as MDialog,
  x as MDivider,
  M as MDropdown,
  V as MIcon,
  D as MInput,
  $ as MMenuItem,
  S as MSpace,
  W as default
};
/*! Bundled license information:

mostify-ui/dist/mostify-ui.js:
  (* @license Mostify UI By <tmwang>*)
*/
//# sourceMappingURL=mostify-ui.js.map
