/* @license Mostify UI By <tmwang>*/
import { inject as e, computed as t, defineComponent as a, withDirectives as o, createVNode as l, resolveDirective as n, provide as i, Fragment as s, ref as r, reactive as u, watch as d, onBeforeMount as c, onMounted as p, onUnmounted as f, Teleport as m, vShow as y, Transition as g, isVNode as h, mergeProps as v, createApp as b } from "vue";
const w = { mounted(e2) {
  e2.addEventListener("mousedown", (t2) => {
    const a2 = e2.querySelector(".m-click__res");
    if (!a2) return;
    let o2 = false, l2 = false;
    const n2 = document.createElement("span"), i2 = () => {
      o2 && l2 && (n2.remove(), window.removeEventListener("mouseup", s2));
    }, s2 = () => {
      o2 = true, i2();
    };
    window.addEventListener("mouseup", s2);
    const r2 = e2.getBoundingClientRect();
    let u2 = Math.max(r2.width, r2.height), d2 = t2.clientX - r2.left - u2 / 2, c2 = r2.height / 2 - u2 / 2;
    Math.abs(r2.width - r2.height) < 4 && (d2 = r2.width / 2 - u2 / 2, c2 = r2.height / 2 - u2 / 2, u2 = Math.max(r2.width, r2.height)), n2.style.left = `${d2}px`, n2.style.top = `${c2}px`, n2.style.width = n2.style.height = `${u2}px`, n2.classList.add("m-click__res--ripple"), a2.appendChild(n2), setTimeout(() => {
      l2 = true, i2();
    }, 300);
  });
}, unmounted(e2) {
  e2.removeEventListener("mousedown", () => {
  });
} }, _ = Symbol("muiConfigProvider"), k = /* @__PURE__ */ new Map([["light", "rgba(255,255,255,0.6)"], ["dark", "rgba(0,0,0,0.3)"]]), S = a({ name: "MButton", props: { type: { type: String, default: "" }, size: { type: String, default: "" }, shape: { type: String, default: "" }, plain: Boolean, disabled: Boolean, loading: Boolean, block: Boolean, light: Boolean, clickResColor: { type: String, default: "" }, borderStyle: { type: String, default: "solid" } }, emits: ["click", "focus", "blur"], directives: { downRes: w }, setup(a2, { slots: i2, emit: s2 }) {
  const { btnClass: r2, btnStyle: u2, contentShow: d2 } = ((a3) => {
    const o2 = e(_, { size: "" }), l2 = t(() => {
      if (a3.clickColor) return a3.clickColor;
      switch (a3.type) {
        case "primary":
        case "danger":
        case "warning":
        case "success":
        case "info":
          return a3.light ? k.get("dark") : k.get("light");
        default:
          return k.get("dark");
      }
    });
    return { btnStyle: t(() => {
      const e2 = [];
      return e2.push(`--border_style:${a3.borderStyle || "solid"}`), e2.push(`--m-click-res-color:${l2.value}`), e2.join(";");
    }), btnClass: t(() => {
      const e2 = ["m-button"], t2 = a3.size || o2.size;
      return a3.type && e2.push("m-button__type__" + a3.type), t2 && e2.push("m-button__size__" + t2), a3.shape && e2.push("m-button__shape__" + a3.shape), a3.plain && e2.push("is__plain"), a3.block && e2.push("is__block"), a3.light && e2.push("is__light"), a3.loading && e2.push("is__loading"), a3.disabled && e2.push("is__disabled"), e2;
    }), contentShow: t(() => !(a3.loading && ["circle", "rect"].includes(a3.shape))) };
  })(a2);
  function c2(e2) {
    e2.preventDefault(), a2.loading || a2.disabled || s2("click", e2);
  }
  function p2(e2) {
    e2.preventDefault(), a2.loading || a2.disabled || s2("focus", e2);
  }
  function f2(e2) {
    e2.preventDefault(), a2.loading || a2.disabled || s2("focus", e2);
  }
  return () => o(l("button", { class: r2.value, style: u2.value, onClick: c2, onFocus: p2, onBlur: f2 }, [l("span", { class: "m-button-content" }, [a2.loading && l("span", { class: "m-button__loading_wrapper", style: { marginRight: d2.value ? "8px" : 0 } }, [l("svg", { viewBox: "0 0 1024 1024", class: "m-button-icon__loading" }, [l("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z", fill: "currentColor" }, null)])]), d2.value ? i2.default && i2.default() : null, a2.loading || a2.disabled ? null : l("div", { class: "m-click__res" }, null)])]), [[n("down-res")]]);
} }), x = a({ name: "MSpace", props: { value: { type: String, default: "" }, layout: { type: String, validator: (e2) => ["x", "y"].includes(e2), default: "x" } }, setup(e2, { slots: a2 }) {
  const o2 = t(() => "y" === e2.layout ? "m-space-y" : "m-space-x"), n2 = t(() => a2.default ? a2.default() : []);
  return () => {
    var _a;
    return l("div", { class: ["m-space", o2.value], style: { "--size": e2.value || "" } }, [(_a = n2.value) == null ? void 0 : _a.map((e3, t2) => l("div", { class: "m-space-item", key: t2 }, [e3]))]);
  };
} }), C = a({ name: "MDivider", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, color: { type: String, default: "" }, size: { type: String, default: "12px" } }, setup(e2) {
  const a2 = t(() => "y" === e2.layout ? "m-divider-y" : "m-divider-x");
  return () => l("div", { style: { "--color": e2.color, "--size": e2.size }, class: ["m-divider", a2.value] }, null);
} }), B = a({ name: "MLayout", props: { layout: { type: String, default: "y" } }, setup(e2, { slots: a2 }) {
  const o2 = t(() => "x" === e2.layout ? "m-layout-x" : "m-layout-y");
  return () => l("div", { class: ["m-layout", o2.value] }, [a2.default && a2.default()]);
} }), L = a({ name: "MHeader", props: { height: { type: String, default: "64px" } }, setup: (e2, { slots: t2 }) => () => l("header", { class: "m-header", style: { "--height": e2.height } }, [t2.default && t2.default()]) }), E = a({ name: "MSide", props: { width: { type: String, default: "200px" } }, setup: (e2, { slots: t2 }) => () => l("nav", { class: "m-side", style: { "--size": e2.width } }, [t2.default && t2.default()]) }), M = a({ name: "MFooter", props: { height: { type: String, default: "64px" } }, setup: (e2, { slots: t2 }) => () => l("nav", { class: "m-footer", style: { "--size": e2.height } }, [t2.default && t2.default()]) }), z = a({ name: "MMain", setup: (e2, { slots: t2 }) => () => l("main", { class: "m-main" }, [t2.default && t2.default()]) }), T = a({ name: "MAnchor", props: { getTarget: { type: Function, default: () => window } }, setup(t2, { slots: a2 }) {
  e(_);
  return () => l("div", null, [a2.default && a2.default()]);
} }), P = a({ name: "MConfigProvider", props: { locale: { type: String, default: "zh-CN" }, size: { type: String, default: "small", validator: (e2) => ["small", "mini", "large"].includes(e2) } }, setup: (e2, { slots: t2 }) => (i(_, e2), () => l(s, null, [t2.default && t2.default()])) }), $ = a({ name: "MBreadcrumb", props: { separator: { type: String, default: "/" }, color: String, activeColor: String }, setup(e2, { slots: a2 }) {
  const o2 = t(() => {
    var _a, _b;
    return ((_b = (_a = a2 == null ? void 0 : a2.default) == null ? void 0 : _a.call(a2)) == null ? void 0 : _b.length) || 0;
  });
  return () => {
    var _a, _b;
    return l("div", { class: "m-breadcrumb", style: { "--color": e2.color, "--activeColor": e2.activeColor } }, [(_b = (_a = a2 == null ? void 0 : a2.default) == null ? void 0 : _a.call(a2)) == null ? void 0 : _b.map((t2, n2) => {
      var _a2;
      return l(s, null, [t2, n2 >= 0 && n2 < o2.value - 1 && l("span", null, [a2.separator && ((_a2 = a2.separator) == null ? void 0 : _a2.call(a2)) || e2.separator])]);
    })]);
  };
} }), R = a({ name: "MBreadcrumbItem", props: { title: { type: String, default: "" }, disabled: Boolean }, emits: ["click"], setup(e2, { emit: t2, slots: a2 }) {
  function o2(a3) {
    a3.preventDefault(), (e2 == null ? void 0 : e2.disabled) || t2("click", a3);
  }
  return () => l("div", { class: ["m-breadcrumb__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, onClick: o2 }, [a2.default && a2.default() || e2.title]);
} }), H = (e2) => e2 ? e2.getBoundingClientRect() : null, F = (e2) => new Promise((t2) => {
  if (!e2) return null;
  Promise.all(e2.getAnimations({ subtree: true }).map((e3) => e3.finished)).then(() => {
    t2(true);
  }).catch(() => {
    t2(false);
  });
}), N = (e2, t2, a2, o2 = 0) => new Promise(async (l2, n2) => {
  if (!e2) return n2("node is null");
  await ((e3) => new Promise((t3) => {
    if (!e3) return t3(false);
    e3.getAnimations().forEach((e4) => {
      e4.cancel();
    }), t3(true);
  }))(e2), e2.animate(t2, a2);
  const i2 = "number" == typeof a2 ? a2 : (a2 == null ? void 0 : a2.duration) || null;
  null != i2 && Number(i2) >= 0 ? setTimeout(() => {
    l2(true);
  }, Number(i2) - o2) : l2(true);
}), j = { hideTime: 200, showTime: 250, bgShow: async (e2) => {
  await N(e2, [{ transform: "scaleY(0.88)", offset: 0 }, { transform: "scaleY(1)", offset: 0.33 }, {}], { duration: 250 }).catch(() => {
  });
}, cShow: async (e2) => {
  await N(e2, [{ offset: 0, opacity: 0 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 1 }], { duration: 250 }).catch(() => {
  });
}, bgHide: async (e2) => {
  await N(e2, [{ opacity: 1, transform: "scaleY(1)", offset: 0 }, { opacity: 0.66, transform: "scaleY(1)", offset: 0.33 }, { opacity: 0, transform: "scaleY(0.88)", offset: 1 }], { duration: 200 }).catch(() => {
  });
}, async cHide(e2) {
  await N(e2, [{ offset: 0, opacity: 1 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 0 }], { duration: 200 }).catch(() => {
  });
} };
function A(e2, t2, a2) {
  const o2 = document.documentElement.scrollTop, l2 = function(e3, t3, a3) {
    var o3 = window.innerWidth, l3 = window.innerHeight, n2 = t3.top > (a3 == null ? void 0 : a3.height), i2 = l3 - ((t3 == null ? void 0 : t3.top) + (a3 == null ? void 0 : a3.height)) > 0, s2 = t3.left > a3.width, r2 = o3 - (t3.left + a3.width) > 0;
    return n2 && i2 && s2 && r2 ? e3 : i2 ? s2 && r2 ? ["bottomRight", "bottomLeft", "bottom"].includes(e3) ? e3 : "bottomLeft" : s2 ? "bottomRight" : "bottomLeft" : s2 && r2 ? ["topLeft", "topRight", "top"].includes(e3) ? e3 : "topLeft" : s2 ? "topLeft" : "topRight";
  }(e2, t2, a2);
  switch (l2) {
    case "bottomRight":
      return { top: `${t2.top + t2.height + o2}`, left: "" + (t2.left + t2.width - a2.width) };
    case "bottom":
      return { top: `${t2.top + t2.height + o2}`, left: "" + (t2.left + t2.width / 2 - a2.width / 2) };
    default:
      return { top: `${t2.top + t2.height + o2}`, left: `${t2.left}` };
  }
}
const q = a({ name: "MDropdown", props: { placement: { type: String, default: "bottomLeft" }, trigger: { type: String, default: "click", validator: (e2) => ["hover", "click"].includes(e2) }, destroyOnHide: { type: Boolean, default: false }, disabled: Boolean, open: { type: Boolean, default: false }, toBody: { type: Boolean, default: true } }, setup(e2, { slots: a2 }) {
  const n2 = r(null), i2 = r(null), g2 = r(null), h2 = r(false), v2 = u({ top: "0", left: "0", waitChange: false, renderToDom: null }), b2 = r(false);
  let w2 = null;
  const _2 = t(() => !e2.destroyOnHide || h2.value);
  let k2 = null;
  function S2() {
    const t2 = H(k2), a3 = H(g2.value), { top: o2, left: l2 } = A(e2.placement, t2, a3);
    v2.top = `${o2}px`, v2.left = `${l2}px`, i2.value.style.minWidth = `${t2.width}px`;
  }
  function x2() {
    _2.value && S2();
  }
  async function C2() {
    h2.value = true, b2.value = true, w2 && (clearTimeout(w2), w2 = null), v2.waitChange = true, await new Promise((e3) => requestAnimationFrame(e3)), S2(), window.addEventListener("scroll", x2, false), j.cShow(g2.value), j.bgShow(i2.value), await F(g2.value).catch(() => {
    }), v2.waitChange = false;
  }
  function B2() {
    if (v2.waitChange || e2.disabled) return;
    !h2.value ? C2() : E2();
  }
  function L2() {
    v2.waitChange || e2.disabled || h2.value || C2();
  }
  function E2() {
    v2.waitChange || (b2.value && (clearTimeout(w2), w2 = null), b2.value = true, w2 = setTimeout(async () => {
      var e3;
      b2.value && (v2.waitChange = true, j.cHide(g2.value), j.bgHide(i2.value), await (e3 = 0, new Promise((t2) => setTimeout(t2, e3))), await F(g2.value).catch(() => {
      }), window.removeEventListener("scroll", x2, false), h2.value = false, v2.waitChange = false);
    }, 60));
  }
  function M2(e3) {
    const t2 = e3.target;
    var a3, o2;
    t2 && (a3 = n2.value, o2 = t2, a3 && o2 && (a3 === o2 || a3.contains && a3.contains(o2)) || E2());
  }
  function z2() {
    b2.value = true, w2 ? (clearTimeout(w2), w2 = null, h2.value = true) : (b2.value = false, h2.value = true);
  }
  function T2() {
    var _a, _b;
    window.addEventListener("click", M2, true), "click" === e2.trigger ? k2 == null ? void 0 : k2.addEventListener("click", B2, false) : (k2 == null ? void 0 : k2.addEventListener("mouseenter", L2, false), k2 == null ? void 0 : k2.addEventListener("mouseleave", E2, false), (_a = i2.value) == null ? void 0 : _a.addEventListener("mouseenter", z2, false), (_b = i2.value) == null ? void 0 : _b.addEventListener("mouseleave", E2, false));
  }
  function P2() {
    var _a, _b;
    k2 == null ? void 0 : k2.removeEventListener("click", B2, false), window.removeEventListener("click", M2, false), k2 == null ? void 0 : k2.removeEventListener("mouseenter", L2, false), k2 == null ? void 0 : k2.removeEventListener("mouseleave", E2, false), (_a = i2.value) == null ? void 0 : _a.removeEventListener("mouseenter", z2, false), (_b = i2.value) == null ? void 0 : _b.removeEventListener("mouseleave", E2, false);
  }
  return d(() => e2.trigger, () => {
    P2(), T2();
  }), c(() => {
    var _a;
    if (!document.querySelector("#m-inset__body")) {
      const e3 = document.createElement("div");
      e3.setAttribute("id", "m-inset__body"), (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(e3);
    }
  }), p(() => {
    var _a;
    k2 = 1 === ((_a = n2.value.children) == null ? void 0 : _a.length) ? n2.value.children[0] || null : n2.value || null, T2();
  }), f(() => {
    P2();
  }), () => l(s, null, [l("div", { class: "m-dropdown", ref: n2, style: { "pointer-events": v2.waitChange ? "none" : "all" } }, [a2.default && a2.default()]), l(m, { to: "#m-inset__body" }, { default: () => [_2.value && o(l("div", { class: "m-dropdown__content m-box__shadow", ref: i2, style: { "--top": v2.top, "--left": v2.left, "pointer-events": v2.waitChange ? "none" : "all" } }, [l("div", { class: "m-dropdown__body", ref: g2 }, [a2.content && a2.content()])]), [[y, h2.value]])] })]);
} }), D = a({ name: "MButtonGroup", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, size: { type: String, default: "" } }, setup(t2, { slots: a2 }) {
  const o2 = e(_, { size: "" });
  return i(_, { size: t2.size || o2.size }), () => l("div", { class: ["m-button__group", "y" === t2.layout ? "m-button__group_y" : "m-button__group_x"] }, [a2.default && a2.default()]);
} }), O = a({ name: "MMenuItem", props: { disabled: Boolean, label: String }, emits: ["click"], setup(e2, { slots: t2, emit: a2 }) {
  function o2(t3) {
    if (e2.disabled) return t3.preventDefault(), void t3.stopPropagation();
    a2("click", t3);
  }
  return () => l("div", { class: ["m-menu__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, "aria-disabled": e2.disabled, onClick: o2 }, [t2.default && t2.default() || e2.label]);
} });
const V = a({ name: "MTransition", props: { onEnter: Function, onLeave: Function }, setup: (e2, t2) => () => {
  const a2 = t2.slots.default && t2.slots.default();
  return l(g, { appear: false, onEnter: (t3, a3) => {
    var _a;
    return (_a = e2.onEnter) == null ? void 0 : _a.call(e2, t3, a3);
  }, onLeave: (t3, a3) => {
    var _a;
    return (_a = e2.onLeave) == null ? void 0 : _a.call(e2, t3, a3);
  }, css: false }, "function" == typeof (o2 = a2) || "[object Object]" === Object.prototype.toString.call(o2) && !h(o2) ? a2 : { default: () => [a2] });
  var o2;
} }), W = async ({ mask: e2, content: t2, wrapper: a2 }) => {
  N(e2, [{ opacity: 0 }, { opacity: 1 }], 240), N(a2, [{ transform: "scale(0.33)", offset: 0, opacity: 0.66 }, { transform: "scale(0.98)", offset: 0.66, opacity: 1 }, { transform: "scale(1)", offset: 1, opacity: 1 }], { duration: 240 }), await N(t2, [{ opacity: 0, offset: 0 }, { opacity: 0.05, offset: 0.5 }, { opacity: 1, offset: 1 }], { duration: 240 });
}, I = async ({ mask: e2, wrapper: t2, content: a2 }) => {
  N(e2, [{ opacity: 1 }, { opacity: 0 }], { duration: 200 }), N(a2, [{ opacity: 0.25, offset: 0 }, { opacity: 0.05, offset: 0.33 }, { opacity: 0, offset: 1, transform: "scale(0.33)" }], { duration: 200 }), await N(t2, [{ opacity: 1, offset: 0 }, { opacity: 0.88, offset: 0.33 }, { opacity: 0, offset: 1, transform: "scale(0.33)" }], { duration: 200 }, 20);
}, Y = (e2 = 'm-dialog[data-active="true"]') => {
  document.querySelectorAll(e2).length > 0 ? (document.body.setAttribute("data-overflow", "hidden"), document.documentElement.dataset.overflow = "hidden") : (document.body.setAttribute("data-overflow", "auto"), document.documentElement.dataset.overflow = "auto");
}, G = a({ name: "MDialog", components: { MButton: S }, props: { visible: { type: Boolean, default: false }, content: { type: String, default: "" }, className: String, title: { type: String, default: "" }, cancelBtnText: { type: String, default: "" }, okBtnText: { type: String, default: "" }, okBtnProps: { type: Object, default: () => ({ type: "primary" }) }, cancelBtnProps: { type: Object, default: () => ({ type: "default" }) }, width: { type: [Number, String], default: "50%" }, height: { type: [Number, String], default: "auto" }, showClose: { type: Boolean, default: true }, backgroundColor: { type: String, default: "#fff" }, maskBackgroundColor: { type: String, default: "rgba(0, 0, 0, .35)" }, fullscreen: { type: Boolean, default: false }, escHide: { type: Boolean, default: true }, maskHide: { type: Boolean, default: true }, target: { type: [String, HTMLElement], default: "body" }, top: { type: String, default: "center" }, _onClose: Function }, emits: ["close"], setup(e2, a2) {
  const { wrapperRef: n2, bodyRef: i2, maskRef: s2, dialogRef: u2 } = { dialogRef: r(null), wrapperRef: r(null), maskRef: r(null), bodyRef: r(null) }, { contentStyle: d2, wrapperStyle: c2, bodyStyle: p2 } = ((e3) => ({ contentStyle: t(() => {
    const t2 = ("number" == typeof e3.width ? `${e3.width}px` : e3.width) || "auto", a3 = ("number" == typeof e3.height ? `${e3.height}px` : e3.height) || "auto";
    return e3.fullscreen ? { width: "100%", padding: "0px", margin: "0px", height: "100%" } : { width: t2, maxWidth: t2, height: a3, margin: e3.top && "center" !== e3.top ? "0 auto" : "24px auto" };
  }), wrapperStyle: t(() => e3.fullscreen ? "width: 100%; height: 100%;" : "center" === e3.top ? "display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      " : `position:relative;top: ${e3.top};padding-bottom:24px;`), bodyStyle: t(() => "width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;") }))(e2), f2 = (t2) => {
    var _a;
    e2._onClose && ((_a = e2._onClose) == null ? void 0 : _a.call(e2, t2)), a2.emit("close", t2);
  }, g2 = (t2) => {
    ("Escape" === t2.code || 27 === t2.keyCode || "Escape" === t2.key) && e2.escHide && ((e3) => {
      if (!e3) return false;
      const t3 = document.querySelectorAll(".m-dialog[data-show='true']");
      if (t3.length > 0) return t3[t3.length - 1] === e3;
      return false;
    })(u2.value) && a2.emit("close", { type: "cancel" });
  }, h2 = async (t2, a3) => {
    await new Promise((e3) => requestAnimationFrame(e3));
    const o2 = "center";
    n2.value.style.setProperty("transform-origin", o2), i2.value.style.setProperty("transform-origin", o2), Y('.m-dialog[data-show="true"]'), await W({ mask: s2.value, content: i2.value, wrapper: n2.value }), e2.escHide && document.addEventListener("keyup", g2), a3();
  }, b2 = async (e3, t2) => {
    await I({ mask: s2.value, content: i2.value, wrapper: n2.value }), Y('.m-dialog[data-show="true"]'), document.removeEventListener("keyup", g2), t2();
  };
  return () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const t2 = (_b = (_a = a2.slots).default) == null ? void 0 : _b.call(_a), r2 = (_d = (_c = a2.slots).footer) == null ? void 0 : _d.call(_c), g3 = (_f = (_e = a2.slots).header) == null ? void 0 : _f.call(_e), w2 = (_h = (_g = a2.slots).body) == null ? void 0 : _h.call(_g);
    return l(m, { to: e2.target }, { default: () => [l(V, { onEnter: h2, onLeave: b2 }, { default: () => [o(l("div", { class: `m-dialog ${e2.className}`, "data-show": e2.visible, ref: u2, style: { "--m-dialog-background_color": e2.backgroundColor, "--m-dialog__bask_color": e2.maskBackgroundColor } }, [l("section", { class: "m-dialog-mask", ref: s2 }, null), l("div", { class: "m-dialog-container", onClick: () => e2.maskHide && f2("cancel") }, [l("div", { style: c2.value }, [l("div", { class: "m-dialog-cover", style: d2.value }, [l("div", { class: "m-dialog-content", onClick: (e3) => e3.stopPropagation() }, [l("div", { class: "m-dialog-content__background", ref: n2 }, null), l("section", { class: "m-dialog-content__wrapper", ref: i2, style: p2.value }, [e2.showClose && l(S, { type: "text", shape: "rect", size: "small", class: "m-dialog-content__close", onClick: () => f2("cancel") }, { default: () => [l("svg", { fill: "currentColor", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5090", width: "28", height: "28" }, [l("path", { d: "M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" }, null)])] }), g3 || e2.title && l("header", { class: "m-dialog__header" }, [l("span", { class: "m-dialog-title" }, [e2.title])]), w2 || l("main", { class: "m-dialog__body" }, [t2 || e2.content]), r2 || (e2.cancelBtnText || e2.okBtnText) && l("footer", { class: "m-dialog__footer" }, [e2.cancelBtnText && l(S, v(e2.cancelBtnProps, { onClick: () => f2("cancel") }), { default: () => [e2.cancelBtnText] }), e2.okBtnText && l(S, v(e2.okBtnProps, { onClick: () => f2("ok") }), { default: () => [e2.okBtnText] })])])])])])])]), [[y, e2.visible]])] })] });
  };
} }), X = (e2) => {
  const t2 = (e2 == null ? void 0 : e2.title) || "", a2 = e2.width || 480, o2 = (e2 == null ? void 0 : e2.top) || "center";
  return { onConfirm: () => {
  }, onCancel: () => {
  }, okBtnText: (e2 == null ? void 0 : e2.okBtnText) || "确定", cancelBtnText: (e2 == null ? void 0 : e2.cancelBtnText) || "", okBtnProps: e2 == null ? void 0 : e2.okBtnProps, cancelBtnProps: e2 == null ? void 0 : e2.cancelBtnProps, content: "hello", className: "m-dialog-confirm", title: t2, width: a2, top: o2, escHide: false, maskHide: false, showClose: false, visible: true };
}, J = async (e2) => {
  const t2 = document.createElement("div");
  let a2, o2, l2;
  document.body.appendChild(t2);
  const n2 = b(G, { ...X(e2), target: t2, _onClose: async (i3) => {
    var _a, _b;
    "cancel" === i3 && e2.onCancel ? (_a = e2.onCancel) == null ? void 0 : _a.call(e2) : "ok" === i3 && e2.onConfirm && ((_b = e2.onConfirm) == null ? void 0 : _b.call(e2)), await I({ mask: a2, wrapper: l2, content: o2 }), n2.unmount(), t2.remove();
  } });
  n2.mount(t2), a2 = t2.querySelector(".m-dialog-mask"), o2 = t2.querySelector(".m-dialog-content__wrapper"), l2 = t2.querySelector(".m-dialog-content__background");
  let i2 = "center";
  l2.style.setProperty("transform-origin", i2), o2.style.setProperty("transform-origin", i2), W({ mask: a2, content: o2, wrapper: l2 });
}, K = Object.freeze({ open: (e2 = {}) => {
  J(Object.assign({}, e2));
}, confirm: (e2 = {}) => {
  J(Object.assign({}, e2, { okBtnType: "primary", cancelBtnText: "取消", cancelBtnProps: { type: "default" } }));
} }), Q = a({ name: "MMask", props: { visible: { type: Boolean, default: false }, background: { type: String, default: "rgba(0, 0, 0, .35)" }, maskHide: { type: Boolean, default: true } }, emits: ["hide"], setup(e2, t2) {
  const a2 = async () => {
    e2.maskHide && t2.emit("hide", false);
  }, n2 = async (e3, t3) => {
    await N(e3, [{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }], { duration: 300 }), t3();
  }, i2 = async (e3, t3) => {
    await N(e3, [{ opacity: 1, offset: 0 }, { opacity: 0, offset: 1 }], { duration: 200 }, 60), t3();
  };
  return () => {
    const s2 = t2.slots.default && t2.slots.default();
    return l(m, { to: "body" }, { default: () => [l(V, { onEnter: n2, onLeave: i2 }, { default: () => [o(l("div", { class: "m-mask", onClick: a2, style: { "--m-mask-background": e2.background } }, [l("div", { class: "m-mask-bg" }, null), l("div", { onClick: (e3) => e3.stopPropagation(), class: "m-mask-body" }, [s2])]), [[y, e2.visible]])] })] });
  };
} }), U = a({ name: "MInput", props: { value: { type: [String, Number], default: "" }, modelValue: { type: [String, Number], default: "" }, placeholder: { type: String, default: "" }, type: { type: String, default: "text" }, size: { type: String, default: "small" }, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, prepend: { type: String, default: "" }, append: { type: String, default: "" }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, width: { type: [String, Number], default: "" }, borderWidth: { type: [String, Number], default: "1px" }, autofocus: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "focus", "blur"], exposed: ["focus", "blur"], setup(e2, a2) {
  const { inputRef: o2, isFocus: n2, setIsFocus: i2, inputValue: s2, showClear: u2 } = ((e3) => {
    const a3 = r(null), o3 = r(false), l2 = r(e3.value || e3.modelValue || ""), n3 = t(() => e3.clearable && !o3.value && "" !== l2.value);
    return d(() => [e3.modelValue, e3.value], (e4, t2) => {
      l2.value = e4[0] === t2[0] ? e4[1] || "" : e4[0] || "";
    }), { inputRef: a3, inputValue: l2, isFocus: o3, setIsFocus: (e4) => {
      o3.value = e4;
    }, showClear: n3 };
  })(e2), { inputClass: c2, inputStyles: p2 } = ((e3, a3) => ({ inputClass: t(() => {
    const t2 = ["m-input"];
    return e3.size && t2.push(`m-input__size_${e3.size}`), e3.disabled ? (t2.push("m-input__disabled"), t2) : e3.readonly ? (t2.push("m-input__readonly"), t2) : (a3.value && t2.push("m-input__focus"), t2 == null ? void 0 : t2.join(" "));
  }), inputStyles: t(() => ({ width: e3.width ? "number" == typeof e3.width ? `${e3.width}px` : e3.width : "", "--border_width": e3.borderWidth ? "number" == typeof e3.borderWidth ? `${e3.borderWidth}px` : e3.borderWidth : "1px" })) }))(e2, n2), f2 = (t2) => {
    e2.disabled || e2.readonly || (s2.value = t2.target.value, a2.emit("update:modelValue", s2.value), a2.emit("change", s2.value));
  };
  return a2.expose({ focus: () => {
    var _a;
    (_a = o2.value) == null ? void 0 : _a.focus();
  }, blur: () => {
    var _a;
    (_a = o2.value) == null ? void 0 : _a.blur();
  } }), () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const t2 = (_b = (_a = a2.slots) == null ? void 0 : _a.prefix) == null ? void 0 : _b.call(_a), n3 = (_d = (_c = a2.slots) == null ? void 0 : _c.suffix) == null ? void 0 : _d.call(_c), r2 = (_f = (_e = a2.slots) == null ? void 0 : _e.prepend) == null ? void 0 : _f.call(_e), d2 = (_h = (_g = a2.slots) == null ? void 0 : _g.append) == null ? void 0 : _h.call(_g);
    return l("div", { class: `${c2.value} ${r2 || e2.prepend ? "m-input__hasPrepend" : ""} ${d2 || e2.append ? "m-input__hasAppend" : ""}`, style: p2.value }, [r2 || e2.prepend ? l("div", { class: "m-input__prepend" }, [r2 || e2.prepend]) : null, l("div", { class: "m-input__main" }, [t2 || e2.prefix ? l("div", { class: "m-input__prefix" }, [t2 || e2.prefix]) : null, l("input", { class: "m-input__inner", ref: o2, type: e2.type, disabled: e2.disabled, placeholder: e2.placeholder, readonly: e2.readonly, value: s2.value, autofocus: e2.autofocus, onInput: f2, onBlur: (e3) => {
      i2(false), a2.emit("blur", e3);
    }, onFocus: (e3) => {
      i2(true), a2.emit("focus", e3);
    } }, null), u2.value && l("span", { class: "m-input__clear", onClick: () => {
      s2.value = "", a2.emit("update:modelValue", s2.value), a2.emit("change", s2.value);
    } }, [l("svg", { class: "icon", fill: "currentColor", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, [l("path", { d: "M554.586353 512l170.556235-170.556235c11.444706-11.414588 11.595294-30.659765-0.180706-42.405647a29.906824 29.906824 0 0 0-42.405647-0.180706L512 469.413647l-170.556235-170.556235a30.208 30.208 0 0 0-42.405647 0.180706 29.906824 29.906824 0 0 0-0.180706 42.405647L469.413647 512l-170.556235 170.556235c-11.444706 11.414588-11.595294 30.659765 0.180706 42.405647a29.906824 29.906824 0 0 0 42.405647 0.180706L512 554.586353l170.556235 170.556235c11.414588 11.444706 30.659765 11.595294 42.405647-0.180706a29.906824 29.906824 0 0 0 0.180706-42.405647L554.586353 512zM512 993.882353C245.850353 993.882353 30.117647 778.149647 30.117647 512S245.850353 30.117647 512 30.117647s481.882353 215.732706 481.882353 481.882353-215.732706 481.882353-481.882353 481.882353z" }, null)])]), n3 || e2.suffix && l("div", { class: "m-input__suffix" }, [n3 || e2.suffix])]), d2 || e2.append ? l("div", { class: "m-input__append" }, [d2 || e2.append]) : null]);
  };
} }), Z = [S, x, C, B, L, E, M, z, T, P, $, R, q, D, O, G, Q, U].map((e2) => (e2.install = function(t2) {
  t2.component(e2.name, e2);
}, e2)), ee = { install(e2) {
  Z.forEach((t2) => {
    e2.component(t2.name, t2);
  });
} };
export {
  K as Dialog,
  T as MAnchor,
  $ as MBreadcrumb,
  R as MBreadcrumbItem,
  S as MButton,
  D as MButtonGroup,
  P as MConfigProvider,
  G as MDialog,
  C as MDivider,
  q as MDropdown,
  M as MFooter,
  L as MHeader,
  U as MInput,
  B as MLayout,
  z as MMain,
  Q as MMask,
  O as MMenuItem,
  E as MSide,
  x as MSpace,
  ee as default
};
//# sourceMappingURL=mostify-ui.js.map
