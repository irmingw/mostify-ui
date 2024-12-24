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
var w = Symbol("muiConfigProvider");
var b = defineComponent({ name: "MIcon", props: { name: { type: String, default: "" }, size: { type: String, default: "16px" }, color: { type: String, default: "currentColor" } }, setup(e2, { emit: t2 }) {
  const n2 = computed(() => `mostifyiconfont m-icon-${e2.name}`);
  return () => createVNode("i", { class: n2.value, onClick: (e3) => t2("click", e3), style: { color: e2.color, fontSize: e2.size ? e2.size : "16px", lineHeight: "inherit" } }, null);
} });
var x = defineComponent({ name: "MButton", props: { type: { type: String, default: "default" }, size: String, shape: String, disabled: Boolean, loading: Boolean, border: Boolean, light: Boolean, leftIcon: String, rightIcon: String }, emits: ["click", "focus", "blur"], setup(n2, { slots: i2, emit: s2 }) {
  const { btnClass: r2, contentShow: u2, setClickXEvent: c2, btnRef: d2, rippleRef: p2 } = ((n3) => {
    const l2 = ref(null), o2 = ref(null), i3 = inject(w, { size: "" }), s3 = computed(() => {
      const e2 = ["m-button"];
      n3.type && e2.push("m-button-type-" + n3.type);
      const t2 = n3.size || i3.size || "small";
      return e2.push("m-button-size-" + t2), n3.shape && e2.push("m-button-shape-" + n3.shape), n3.loading && e2.push("is-loading"), n3.disabled && e2.push("is-disabled"), e2;
    }), r3 = computed(() => !(n3.loading && ["circle", "square"].includes(n3.shape)));
    let u3 = null;
    return { btnClass: s3, contentShow: r3, setClickXEvent: async (e2) => {
      if (!l2.value) return;
      u3 || (u3 = document.createElement("div"), u3.className = "m-button-ripple");
      const t2 = u3.cloneNode();
      l2.value.appendChild(t2);
      const a2 = o2.value.getBoundingClientRect(), n4 = Math.max(a2.width, a2.height), i4 = n4 + "px", s4 = i4;
      let r4 = (e2.clientY - a2.top - n4 / 2).toFixed(0) + "px", c3 = (e2.clientX - a2.left - n4 / 2).toFixed(0) + "px";
      r4 = 0.5 * (a2.height - n4) + "px", Math.abs(a2.width - a2.height) < 12 && (c3 = 0.5 * (a2.width - n4) + "px"), t2.setAttribute("style", `width:${i4};height:${s4};top:${r4};left:${c3};`), t2.classList.add("m-button-ripple-active"), await new Promise((e3) => setTimeout(e3, 500)), t2.remove();
    }, btnRef: o2, rippleRef: l2 };
  })(n2);
  function m2(e2, t2) {
    e2.preventDefault(), n2.loading || n2.disabled || s2(t2, e2);
  }
  const f2 = (e2) => {
    e2.preventDefault(), n2.loading || n2.disabled || c2(e2);
  };
  return () => {
    const e2 = i2.leftIcon ? i2.leftIcon() : n2.leftIcon ? createVNode(b, { name: n2.leftIcon }, null) : "", t2 = i2.rightIcon ? i2.rightIcon() : n2.rightIcon ? createVNode(b, { name: n2.rightIcon }, null) : "";
    return createVNode("button", { class: r2.value, onMousedown: f2, ref: d2, style: { "--border-width": n2.border ? "1px" : "0px" }, "data-light": n2.light ? "on" : "off", onClick: (e3) => m2(e3, "click"), onFocus: (e3) => m2(e3, "focus"), onBlur: (e3) => m2(e3, "blur") }, [!n2.loading && !n2.disabled && createVNode("div", { class: "m-button-ripple-wrapper", ref: p2 }, null), createVNode("span", { class: "m-button-main" }, [n2.loading && createVNode("span", { class: "m-button-loading-icon-wrapper", style: { marginRight: u2.value ? "8px" : 0 } }, [createVNode("svg", { viewBox: "0 0 1024 1024", width: "1em", height: "1em", class: "m-button-icon-loading" }, [createVNode("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z", fill: "currentColor" }, null)])]), u2.value && createVNode(Fragment, null, [e2 && createVNode("span", { class: "m-button-icon-left" }, [e2]), i2.default && i2.default(), t2 && createVNode("span", { class: "m-button-icon-right" }, [t2])])])]);
  };
} });
var k = defineComponent({ name: "MSpace", props: { size: { type: String, default: "" }, layout: { type: String, validator: (e2) => ["x", "y"].includes(e2), default: "x" }, alignItems: { type: String, default: "flex-start" } }, setup(e2, { slots: t2 }) {
  const n2 = computed(() => "y" === e2.layout ? "m-space-y" : "m-space-x"), o2 = computed(() => t2.default ? t2.default() : []);
  return () => {
    var _a;
    return createVNode("div", { class: ["m-space", n2.value], style: { "--size": e2.size || "", "align-items": e2.alignItems || "" } }, [(_a = o2.value) == null ? void 0 : _a.map((e3, t3) => createVNode("div", { class: "m-space-item", key: t3 }, [e3]))]);
  };
} });
var S = defineComponent({ name: "MDivider", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, color: { type: String, default: "" }, size: { type: String, default: "12px" } }, setup(e2) {
  const t2 = computed(() => "y" === e2.layout ? "m-divider-y" : "m-divider-x");
  return () => createVNode("div", { style: { "--color": e2.color, "--size": e2.size }, class: ["m-divider", t2.value] }, null);
} });
var C = defineComponent({ name: "MAnchor", props: { getTarget: { type: Function, default: () => window } }, setup(e2, { slots: a2 }) {
  inject(w);
  return () => createVNode("div", null, [a2.default && a2.default()]);
} });
var B = defineComponent({ name: "MConfigProvider", props: { locale: { type: String, default: "zh-CN" }, size: { type: String, default: "small", validator: (e2) => ["small", "mini", "large"].includes(e2) } }, setup: (e2, { slots: t2 }) => (provide(w, e2), () => createVNode(Fragment, null, [t2.default && t2.default()])) });
var _ = defineComponent({ name: "MBreadcrumb", props: { separator: { type: String, default: "/" }, color: String, activeColor: String }, setup(e2, { slots: t2 }) {
  const n2 = computed(() => {
    var _a, _b;
    return ((_b = (_a = t2 == null ? void 0 : t2.default) == null ? void 0 : _a.call(t2)) == null ? void 0 : _b.length) || 0;
  });
  return () => {
    var _a, _b;
    return createVNode("div", { class: "m-breadcrumb", style: { "--color": e2.color, "--activeColor": e2.activeColor } }, [(_b = (_a = t2 == null ? void 0 : t2.default) == null ? void 0 : _a.call(t2)) == null ? void 0 : _b.map((a2, i2) => {
      var _a2;
      return createVNode(Fragment, null, [a2, i2 >= 0 && i2 < n2.value - 1 && createVNode("span", null, [t2.separator && ((_a2 = t2.separator) == null ? void 0 : _a2.call(t2)) || e2.separator])]);
    })]);
  };
} });
var z = defineComponent({ name: "MBreadcrumbItem", props: { title: { type: String, default: "" }, disabled: Boolean }, emits: ["click"], setup(e2, { emit: t2, slots: a2 }) {
  function n2(a3) {
    a3.preventDefault(), (e2 == null ? void 0 : e2.disabled) || t2("click", a3);
  }
  return () => createVNode("div", { class: ["m-breadcrumb__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, onClick: n2 }, [a2.default && a2.default() || e2.title]);
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
var E = (e2, t2, a2, n2 = 0) => new Promise(async (l2, o2) => {
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
    l2(true);
  }, Number(i2) - n2) : l2(true);
});
var T = { hideTime: 200, showTime: 200, bgShow: async (e2) => {
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
function I(e2, t2, a2) {
  const n2 = document.documentElement.scrollTop, l2 = function(e3, t3, a3) {
    var n3 = window.innerWidth, l3 = window.innerHeight, o2 = t3.top > (a3 == null ? void 0 : a3.height), i2 = l3 - ((t3 == null ? void 0 : t3.top) + (a3 == null ? void 0 : a3.height)) > 0, s2 = t3.left > a3.width, r2 = n3 - (t3.left + a3.width) > 0;
    return o2 && i2 && s2 && r2 ? e3 : i2 ? s2 && r2 ? ["bottomRight", "bottomLeft", "bottom"].includes(e3) ? e3 : "bottomLeft" : s2 ? "bottomRight" : "bottomLeft" : s2 && r2 ? ["topLeft", "topRight", "top"].includes(e3) ? e3 : "topLeft" : s2 ? "topLeft" : "topRight";
  }(e2, t2, a2);
  switch (l2) {
    case "bottomRight":
      return { top: `${t2.top + t2.height + n2}`, left: "" + (t2.left + t2.width - a2.width) };
    case "bottom":
      return { top: `${t2.top + t2.height + n2}`, left: "" + (t2.left + t2.width / 2 - a2.width / 2) };
    default:
      return { top: `${t2.top + t2.height + n2}`, left: `${t2.left}` };
  }
}
var M = defineComponent({ name: "MDropdown", props: { placement: { type: String, default: "bottomLeft" }, trigger: { type: String, default: "click", validator: (e2) => ["hover", "click"].includes(e2) }, destroyOnHide: { type: Boolean, default: false }, disabled: Boolean, open: { type: Boolean, default: false }, toBody: { type: Boolean, default: true } }, setup(t2, { slots: n2 }) {
  const o2 = ref(null), i2 = ref(null), y2 = ref(null), g2 = ref(false), h2 = reactive({ top: "0", left: "0", waitChange: false, renderToDom: null }), v2 = ref(false);
  let w2 = null;
  const b2 = computed(() => !t2.destroyOnHide || g2.value);
  let x2 = null;
  function k2() {
    const e2 = L(x2), a2 = L(y2.value), { top: n3, left: l2 } = I(t2.placement, e2, a2);
    h2.top = `${n3}px`, h2.left = `${l2}px`, i2.value.style.minWidth = `${e2.width}px`;
  }
  function S2() {
    b2.value && k2();
  }
  async function C2() {
    g2.value = true, v2.value = true, w2 && (clearTimeout(w2), w2 = null), h2.waitChange = true, await new Promise((e2) => requestAnimationFrame(e2)), k2(), window.addEventListener("scroll", S2, false), T.cShow(y2.value), T.bgShow(i2.value), await P(y2.value).catch(() => {
    }), h2.waitChange = false;
  }
  function B2() {
    if (h2.waitChange || t2.disabled) return;
    !g2.value ? C2() : z2();
  }
  function _2() {
    h2.waitChange || t2.disabled || g2.value || C2();
  }
  function z2() {
    h2.waitChange || (v2.value && (clearTimeout(w2), w2 = null), v2.value = true, w2 = setTimeout(async () => {
      var e2;
      v2.value && (h2.waitChange = true, T.cHide(y2.value), T.bgHide(i2.value), await (e2 = 0, new Promise((t3) => setTimeout(t3, e2))), await P(y2.value).catch(() => {
      }), window.removeEventListener("scroll", S2, false), g2.value = false, h2.waitChange = false);
    }, 60));
  }
  function E2(e2) {
    const t3 = e2.target;
    var a2, n3;
    t3 && (a2 = o2.value, n3 = t3, a2 && n3 && (a2 === n3 || a2.contains && a2.contains(n3)) || z2());
  }
  function M2() {
    v2.value = true, w2 ? (clearTimeout(w2), w2 = null, g2.value = true) : (v2.value = false, g2.value = true);
  }
  function R2() {
    var _a, _b;
    window.addEventListener("click", E2, true), "click" === t2.trigger ? x2 == null ? void 0 : x2.addEventListener("click", B2, false) : (x2 == null ? void 0 : x2.addEventListener("mouseenter", _2, false), x2 == null ? void 0 : x2.addEventListener("mouseleave", z2, false), (_a = i2.value) == null ? void 0 : _a.addEventListener("mouseenter", M2, false), (_b = i2.value) == null ? void 0 : _b.addEventListener("mouseleave", z2, false));
  }
  function $2() {
    var _a, _b;
    x2 == null ? void 0 : x2.removeEventListener("click", B2, false), window.removeEventListener("click", E2, false), x2 == null ? void 0 : x2.removeEventListener("mouseenter", _2, false), x2 == null ? void 0 : x2.removeEventListener("mouseleave", z2, false), (_a = i2.value) == null ? void 0 : _a.removeEventListener("mouseenter", M2, false), (_b = i2.value) == null ? void 0 : _b.removeEventListener("mouseleave", z2, false);
  }
  return watch(() => t2.trigger, () => {
    $2(), R2();
  }), onBeforeMount(() => {
    var _a;
    if (!document.querySelector("#m-inset__body")) {
      const e2 = document.createElement("div");
      e2.setAttribute("id", "m-inset__body"), (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(e2);
    }
  }), onMounted(() => {
    var _a;
    x2 = 1 === ((_a = o2.value.children) == null ? void 0 : _a.length) ? o2.value.children[0] || null : o2.value || null, R2();
  }), onUnmounted(() => {
    $2();
  }), () => createVNode("div", null, [createVNode("div", { class: "m-dropdown", ref: o2, style: { "pointer-events": h2.waitChange ? "none" : "all" } }, [n2.default && n2.default()]), createVNode(Teleport, { to: "#m-inset__body" }, { default: () => {
    var _a;
    return [b2.value && withDirectives(createVNode("div", { class: "m-dropdown__content m-box-shadow", ref: i2, style: { "--top": h2.top, "--left": h2.left, "pointer-events": h2.waitChange ? "none" : "all" } }, [createVNode("div", { class: "m-dropdown__body", ref: y2 }, [n2.content && ((_a = n2.content()) == null ? void 0 : _a.map((e2) => (e2.props = { ...e2.props }, e2)))])]), [[vShow, g2.value]])];
  } })]);
} });
var R = defineComponent({ name: "MButtonGroup", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, size: { type: String, default: "" } }, setup(e2, { slots: a2 }) {
  const n2 = inject(w, { size: "" });
  return provide(w, { size: e2.size || n2.size }), () => createVNode("div", { class: ["m-button-group", "y" === e2.layout ? "m-button-layout-y" : "m-button-layout-x"] }, [a2.default && a2.default()]);
} });
var $ = defineComponent({ name: "MMenuItem", props: { disabled: Boolean, label: String }, emits: ["click"], setup(e2, { slots: t2, emit: a2 }) {
  function n2(t3) {
    if (e2.disabled) return t3.preventDefault(), void t3.stopPropagation();
    a2("click", t3);
  }
  return () => createVNode("div", { class: ["m-menu__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, "aria-disabled": e2.disabled, onClick: n2 }, [t2.default && t2.default() || e2.label]);
} });
var N = defineComponent({ name: "MTransition", props: { onEnter: Function, onLeave: Function }, setup: (e2, t2) => () => {
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
  E(e2, [{ opacity: 0 }, { opacity: 1 }], 120), E(a2, [{ transform: "scale(0.33)", offset: 0, opacity: 0.66 }, { transform: "scale(1)", offset: 0.33, opacity: 1 }, { transform: "scale(1)", offset: 1, opacity: 1 }], { duration: 500 }), await E(t2, [{ opacity: 0, offset: 0 }, { opacity: 0.25, offset: 0.35 }, { opacity: 1, offset: 1 }], { duration: 500 });
};
var H = async ({ mask: e2, wrapper: t2, content: a2 }) => {
  E(e2, [{ opacity: 1 }, { opacity: 0 }], { duration: 240 }), E(a2, [{ opacity: 1, offset: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 0, offset: 1 }], { duration: 240 }), await E(t2, [{ opacity: 1, offset: 0 }, { opacity: 0.88, offset: 0.33 }, { opacity: 0, offset: 1, transform: "scale(0.33)" }], { duration: 240 }, 20);
};
var A = (e2 = 'm-dialog[data-active="true"]') => {
  document.querySelectorAll(e2).length > 0 ? (document.body.setAttribute("data-overflow", "hidden"), document.documentElement.dataset.overflow = "hidden") : (document.body.setAttribute("data-overflow", "auto"), document.documentElement.dataset.overflow = "auto");
};
var q = defineComponent({ name: "MDialog", components: { MButton: x }, props: { visible: { type: Boolean, default: false }, content: { type: String, default: "" }, className: String, title: { type: String, default: "" }, cancelBtnText: { type: String, default: "" }, okBtnText: { type: String, default: "" }, okBtnProps: { type: Object, default: () => ({ type: "primary" }) }, cancelBtnProps: { type: Object, default: () => ({ type: "default" }) }, width: { type: [Number, String], default: "50%" }, height: { type: [Number, String], default: "auto" }, showClose: { type: Boolean, default: true }, maskBackgroundColor: { type: String, default: "" }, fullscreen: { type: Boolean, default: false }, escHide: { type: Boolean, default: true }, maskHide: { type: Boolean, default: true }, target: { type: [String], default: "body" }, top: { type: String, default: "center" }, _onClose: Function }, emits: ["close"], setup(t2, n2) {
  const { wrapperRef: o2, bodyRef: i2, maskRef: s2, dialogRef: r2 } = { dialogRef: ref(null), wrapperRef: ref(null), maskRef: ref(null), bodyRef: ref(null) }, { contentStyle: u2, wrapperStyle: c2, bodyStyle: d2 } = ((e2) => ({ contentStyle: computed(() => {
    const t3 = ("number" == typeof e2.width ? `${e2.width}px` : e2.width) || "auto", a2 = ("number" == typeof e2.height ? `${e2.height}px` : e2.height) || "auto";
    return e2.fullscreen ? { width: "100%", padding: "0px", margin: "0px", height: "100%" } : { width: t3, maxWidth: "100%", height: a2, margin: e2.top && "center" !== e2.top ? "0 auto" : "24px auto" };
  }), wrapperStyle: computed(() => e2.fullscreen ? "width: 100%; height: 100%;" : "center" === e2.top ? "display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      " : `position:relative;top: ${e2.top};padding-bottom:24px;`), bodyStyle: computed(() => "width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;") }))(t2), y2 = (e2) => {
    var _a;
    t2._onClose && ((_a = t2._onClose) == null ? void 0 : _a.call(t2, e2)), n2.emit("close", e2);
  }, g2 = (e2) => {
    ("Escape" === e2.code || 27 === e2.keyCode || "Escape" === e2.key) && t2.escHide && ((e3) => {
      if (!e3) return false;
      const t3 = document.querySelectorAll(".m-dialog[data-show='true']");
      if (t3.length > 0) return t3[t3.length - 1] === e3;
      return false;
    })(r2.value) && n2.emit("close", { type: "cancel" });
  }, v2 = async (e2, a2) => {
    await new Promise((e3) => requestAnimationFrame(e3));
    const n3 = "center";
    o2.value.style.setProperty("transform-origin", n3), i2.value.style.setProperty("transform-origin", n3), A('.m-dialog[data-show="true"]'), await F({ mask: s2.value, content: i2.value, wrapper: o2.value }), t2.escHide && document.addEventListener("keyup", g2), a2();
  }, w2 = async (e2, t3) => {
    await H({ mask: s2.value, content: i2.value, wrapper: o2.value }), A('.m-dialog[data-show="true"]'), document.removeEventListener("keyup", g2), t3();
  };
  return () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const e2 = (_b = (_a = n2.slots).default) == null ? void 0 : _b.call(_a), a2 = (_d = (_c = n2.slots).footer) == null ? void 0 : _d.call(_c), g3 = (_f = (_e = n2.slots).header) == null ? void 0 : _f.call(_e), b2 = (_h = (_g = n2.slots).body) == null ? void 0 : _h.call(_g);
    return createVNode(Teleport, { to: t2.target }, { default: () => [createVNode(N, { onEnter: v2, onLeave: w2 }, { default: () => [withDirectives(createVNode("div", { class: `m-dialog ${t2.className || ""}`, "data-show": t2.visible, ref: r2, style: { "--m-dialog-mask-color": t2.maskBackgroundColor } }, [createVNode("section", { class: "m-dialog-mask", ref: s2 }, null), createVNode("div", { class: "m-dialog-container", onClick: () => t2.maskHide && y2("cancel") }, [createVNode("div", { style: c2.value }, [createVNode("div", { class: "m-dialog-cover", style: u2.value }, [createVNode("div", { class: "m-dialog-content", onClick: (e3) => e3.stopPropagation() }, [createVNode("div", { class: "m-dialog-content__background", ref: o2 }, null), createVNode("section", { class: "m-dialog-content__wrapper", ref: i2, style: d2.value }, [t2.showClose && createVNode(x, { type: "text", shape: "square", size: "small", class: "m-dialog-content__close", onClick: () => y2("cancel") }, { default: () => [createVNode("svg", { fill: "currentColor", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5090", width: "28", height: "28" }, [createVNode("path", { d: "M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" }, null)])] }), g3 || t2.title && createVNode("header", { class: "m-dialog__header" }, [createVNode("span", { class: "m-dialog-title" }, [t2.title])]), b2 || createVNode("main", { class: "m-dialog__body" }, [e2 || t2.content]), a2 || (t2.cancelBtnText || t2.okBtnText) && createVNode("footer", { class: "m-dialog__footer" }, [t2.cancelBtnText && createVNode(x, mergeProps(t2.cancelBtnProps, { onClick: () => y2("cancel") }), { default: () => [t2.cancelBtnText] }), t2.okBtnText && createVNode(x, mergeProps(t2.okBtnProps, { onClick: () => y2("ok") }), { default: () => [t2.okBtnText] })])])])])])])]), [[vShow, t2.visible]])] })] });
  };
} });
var V = (e2) => {
  const t2 = (e2 == null ? void 0 : e2.title) || "", a2 = e2.width || 480, n2 = (e2 == null ? void 0 : e2.top) || "center";
  return { onConfirm: () => {
  }, onCancel: () => {
  }, okBtnText: (e2 == null ? void 0 : e2.okBtnText) || "确定", cancelBtnText: (e2 == null ? void 0 : e2.cancelBtnText) || "", okBtnProps: e2 == null ? void 0 : e2.okBtnProps, cancelBtnProps: e2 == null ? void 0 : e2.cancelBtnProps, content: "hello", className: "m-dialog-confirm", title: t2, width: a2, top: n2, escHide: false, maskHide: false, showClose: false, visible: true };
};
var j = async (e2) => {
  const t2 = document.createElement("div");
  let a2, n2, l2;
  document.body.appendChild(t2);
  const o2 = createApp(q, { ...V(e2), target: t2, _onClose: async (i3) => {
    var _a, _b;
    "cancel" === i3 && e2.onCancel ? (_a = e2.onCancel) == null ? void 0 : _a.call(e2) : "ok" === i3 && e2.onConfirm && ((_b = e2.onConfirm) == null ? void 0 : _b.call(e2)), await H({ mask: a2, wrapper: l2, content: n2 }), o2.unmount(), t2.remove();
  } });
  o2.mount(t2), a2 = t2.querySelector(".m-dialog-mask"), n2 = t2.querySelector(".m-dialog-content__wrapper"), l2 = t2.querySelector(".m-dialog-content__background");
  let i2 = "center";
  l2.style.setProperty("transform-origin", i2), n2.style.setProperty("transform-origin", i2), F({ mask: a2, content: n2, wrapper: l2 });
};
var O = Object.freeze({ open: (e2 = {}) => {
  j(Object.assign({}, e2));
}, confirm: (e2 = {}) => {
  j(Object.assign({}, e2, { okBtnType: "primary", cancelBtnText: "取消", cancelBtnProps: { type: "default" } }));
} });
var D = defineComponent({ name: "MInput", components: { MIcon: b }, props: { value: [String, Number], modelValue: [String, Number], name: { type: String, default: "" }, placeholder: { type: String, default: "" }, type: { type: String, default: "text" }, size: { type: String, default: "small" }, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, prepend: { type: String, default: "" }, append: { type: String, default: "" }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, width: { type: [String, Number], default: "" }, autofocus: { type: Boolean, default: false }, autocomplete: { type: String, default: "off" }, maxlength: { type: [String, Number], default: "" }, minlength: { type: [String, Number], default: "" }, max: { type: [String, Number], default: "" }, min: { type: [String, Number], default: "" }, step: { type: [String, Number], default: "" }, pattern: { type: String, default: "" }, showLimitCount: { type: Boolean, default: false }, showPasswordIcon: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "focus", "blur"], exposed: ["focus", "blur"], setup(t2, { emit: n2, slots: o2, expose: i2 }) {
  const { inputRef: s2, inputValue: u2, isFocus: c2, setIsFocus: d2, onChange: p2, onClearValue: m2 } = ((t3, a2) => {
    const n3 = ref(null), l2 = ref(false), o3 = ref(t3.value || t3.modelValue || "");
    return watch(() => [t3.modelValue, t3.value], (e2, t4) => {
      o3.value = e2[0] === t4[0] ? e2[1] || "" : e2[0] || "";
    }), { inputRef: n3, inputValue: o3, onChange: (e2) => {
      const t4 = e2.target.value;
      o3.value = t4, a2("update:modelValue", t4), a2("change", t4);
    }, isFocus: l2, setIsFocus: async (e2) => {
      var _a, _b;
      l2.value = e2, await new Promise((e3) => requestAnimationFrame(e3)), e2 ? ((_a = n3.value) == null ? void 0 : _a.focus(), a2("focus", e2)) : ((_b = n3.value) == null ? void 0 : _b.blur(), a2("blur", e2));
    }, onClearValue: () => {
      o3.value = "", a2("update:modelValue", ""), a2("change", "");
    } };
  })(t2, n2), { showPassword: f2, showPwd: y2, pwdType: g2, toggleShowPwd: h2, showLimitCount: v2 } = ((t3) => {
    const n3 = ref(false), l2 = ref(""), o3 = computed(() => {
      var _a;
      return t3.showPasswordIcon && !t3.disabled && !t3.readonly && "password" === ((_a = t3.type) == null ? void 0 : _a.toLowerCase());
    }), i3 = computed(() => {
      var _a;
      return t3.showLimitCount && t3.maxlength && !t3.disabled && !t3.readonly && ["text", "textarea"].includes((_a = t3.type) == null ? void 0 : _a.toLowerCase());
    });
    return { pwdType: l2, showPwd: n3, toggleShowPwd: () => {
      n3.value = !n3.value, l2.value = n3.value ? "text" : "password";
    }, showPassword: o3, showLimitCount: i3 };
  })(t2);
  return i2({ focus: () => {
    d2(true);
  }, blur: () => {
    d2(false);
  } }), () => {
    var _a, _b, _c, _d;
    const e2 = ((_a = o2 == null ? void 0 : o2.prefix) == null ? void 0 : _a.call(o2)) || t2.prefix, a2 = ((_b = o2 == null ? void 0 : o2.suffix) == null ? void 0 : _b.call(o2)) || t2.suffix, n3 = ((_c = o2 == null ? void 0 : o2.prepend) == null ? void 0 : _c.call(o2)) || t2.prepend, i3 = ((_d = o2 == null ? void 0 : o2.append) == null ? void 0 : _d.call(o2)) || t2.append, r2 = () => {
      var _a2;
      return createVNode("div", { onClick: () => d2(true), style: { width: t2.width }, class: { "m-input": true, "is-disabled": t2.disabled, "is-readonly": t2.readonly, "is-focus": c2.value, "m-input-size-large": "large" === t2.size, "m-input-size-small": "small" === t2.size, "m-input-size-mini": "mini" === t2.size } }, [e2 && createVNode("div", { class: "m-input-prefix" }, [e2]), createVNode("input", { class: "m-input-base", ref: s2, type: g2.value || t2.type, disabled: t2.disabled, placeholder: t2.placeholder, readonly: t2.readonly, value: u2.value, autofocus: t2.autofocus, autocomplete: t2.autocomplete, maxlength: t2.maxlength, max: t2.max, min: t2.min, step: t2.step, minlength: t2.minlength, name: t2.name, onInput: p2, onBlur: () => d2(false), onFocus: () => d2(true) }, null), t2.clearable && u2.value && createVNode("span", { class: "m-input-suffix-icon-wrapper m-clearable", onClick: m2 }, [createVNode(b, { name: "close-circle" }, null)]), f2.value && createVNode("span", { onClick: h2, class: "m-input-suffix-icon-wrapper" }, [createVNode(b, { name: y2.value ? "eye" : "eye-close" }, null)]), v2.value && createVNode("span", { class: "m-input-limit-count" }, [`${(_a2 = u2.value) == null ? void 0 : _a2.length}/${t2.maxlength}`]), a2 && createVNode("div", { class: "m-input-suffix" }, [a2])]);
    };
    return n3 || i3 ? createVNode("div", { class: { "m-input-wrapper": true, "has-prepend": n3, "has-append": i3 } }, [n3 && createVNode("div", { class: "m-input-prepend" }, [n3]), r2(), i3 && createVNode("div", { class: "m-input-append" }, [i3])]) : r2();
  };
} });
function Y({ type: e2 }) {
  switch (e2) {
    case "success":
      return createVNode(b, { size: "20px", name: "check-circle-fill" }, null);
    case "warning":
      return createVNode(b, { size: "20px", name: "warning-circle-fill" }, null);
    case "danger":
      return createVNode(b, { size: "20px", name: "close-circle-fill" }, null);
    default:
      return createVNode(b, { size: "20px", name: "info-circle-fill" }, null);
  }
}
var W = defineComponent({ name: "MAlert", props: { type: { type: String, default: "primary" }, icon: { type: String, default: "" }, title: { type: String, default: "" }, description: { type: String, default: "" }, showClose: { type: Boolean, default: false }, showIcon: { type: Boolean, default: false }, dark: { type: Boolean, default: false } }, emits: ["close"], setup(t2, { slots: a2, emit: n2 }) {
  const o2 = ref(true), i2 = () => {
    o2.value = false, n2("close");
  };
  return () => {
    const e2 = a2.title ? a2.title() : t2.title, n3 = a2.default ? a2.default() : t2.description, s2 = a2.icon ? a2.icon() : t2.icon ? createVNode(Y, { type: t2.type }, null) : "";
    return createVNode("div", { class: `m-alert m-alert-${t2.type} ${t2.dark ? "is-dark" : ""}`, style: { display: o2.value ? "block" : "none" } }, [createVNode("main", { class: "m-alert-main" }, [t2.showIcon && s2 && createVNode("div", { class: "m-alert-icon" }, [s2]), createVNode("div", { class: "m-alert-content" }, [e2 && createVNode("div", { class: "m-alert-title" }, [e2]), n3 && createVNode("div", { class: "m-alert-description" }, [n3])]), t2.showClose && createVNode("span", { class: "m-alert-close" }, [createVNode(x, { onClick: i2, rightIcon: "close", type: "text", shape: "circle" }, null)])])]);
  };
} });
var X = defineComponent({ name: "MCheckbox", props: { label: { type: String, default: "" }, checked: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, indeterminate: { type: Boolean, default: false }, value: { type: [String, Number], default: "" } }, emits: ["update:modelValue", "change", "update:checked", "update:indeterminate"], setup(t2, { emit: a2, slots: n2 }) {
  const { checked: o2, indeterminate: i2, toggle: s2 } = ((t3, a3) => {
    const n3 = ref(t3.indeterminate), l2 = ref(t3.checked);
    return { toggle: () => {
      t3.disabled || (l2.value = !l2.value, n3.value = false, a3("update:checked", l2.value), a3("update:indeterminate", n3.value), a3("change", l2.value));
    }, indeterminate: n3, checked: l2 };
  })(t2, a2);
  return () => {
    const e2 = n2.default ? n2.default() : t2.label;
    return createVNode("div", { class: { "m-checkbox": true, "m-checkbox-indeterminate": i2 }, onClick: s2 }, [createVNode("div", { class: "m-checkbox-main" }, [createVNode("span", { class: "m-checkbox-state" }, [createVNode("input", { type: "checkbox", class: "m-checkbox-input", checked: o2.value, disabled: t2.disabled, value: t2.value }, null), createVNode("span", { class: "m-checkbox-box" }, null)]), createVNode("span", { class: "m-checkbox-label" }, [e2])])]);
  };
} });
var G = [x, k, S, C, B, _, z, M, R, $, q, D, b, W, X].map((e2) => (e2.install = function(t2) {
  t2.component(e2.name, e2);
}, e2));
var J = { install(e2) {
  G.forEach((t2) => {
    e2.component(t2.name, t2);
  });
} };
export {
  O as Dialog,
  W as MAlert,
  C as MAnchor,
  _ as MBreadcrumb,
  z as MBreadcrumbItem,
  x as MButton,
  R as MButtonGroup,
  X as MCheckbox,
  B as MConfigProvider,
  q as MDialog,
  S as MDivider,
  M as MDropdown,
  b as MIcon,
  D as MInput,
  $ as MMenuItem,
  k as MSpace,
  J as default
};
/*! Bundled license information:

mostify-ui/dist/mostify-ui.js:
  (* @license Mostify UI By <tmwang>*)
*/
//# sourceMappingURL=mostify-ui.js.map
