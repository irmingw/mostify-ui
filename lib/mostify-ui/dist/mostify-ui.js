/* @license Mostify UI By <tmwang>*/
import { ref as e, inject as t, computed as a, defineComponent as o, createVNode as n, provide as l, Fragment as r, reactive as i, watch as s, onBeforeMount as u, onMounted as d, onUnmounted as c, Teleport as p, withDirectives as m, vShow as f, Transition as v, isVNode as y, mergeProps as g, createApp as h } from "vue";
const b = Symbol("muiConfigProvider"), w = (e2) => e2 ? e2.getBoundingClientRect() : null, _ = (e2) => new Promise((t2) => {
  if (!e2) return null;
  Promise.all(e2.getAnimations({ subtree: true }).map((e3) => e3.finished)).then(() => {
    t2(true);
  }).catch(() => {
    t2(false);
  });
}), x = (e2, t2, a2, o2 = 0) => new Promise(async (n2, l2) => {
  if (!e2) return l2("node is null");
  await ((e3) => new Promise((t3) => {
    if (!e3) return t3(false);
    e3.getAnimations().forEach((e4) => {
      e4.cancel();
    }), t3(true);
  }))(e2), e2.animate(t2, a2);
  const r2 = "number" == typeof a2 ? a2 : (a2 == null ? void 0 : a2.duration) || null;
  null != r2 && Number(r2) >= 0 ? setTimeout(() => {
    n2(true);
  }, Number(r2) - o2) : n2(true);
}), k = ["var(--m-primary-600)", "var(--m-primary-500)", "var(--m-primary-700)"], S = ["var(--m-error-600)", "var(--m-error-500)", "var(--m-error-700)"], C = ["var(--m-warning-600)", "var(--m-warning-500)", "var(--m-warning-700)"], B = ["var(--m-success-600)", "var(--m-success-500)", "var(--m-success-700)"], M = /* @__PURE__ */ new Map([["primary", k], ["danger", S], ["warning", C], ["success", B], ["default", ["var(--m-theme-50)", "var(--m-primary-200)", "var(--m-primary-300)"]], ["text", ["", "rgba(0,0,0,.06)", "rgba(0,0,0,.25)"]], ["link", ["", "var(--m-primary-100)", "var(--m-primary-300)"]]]), L = /* @__PURE__ */ new Map([["primary", ["var(--m-primary-200)", "var(--m-primary-100)", "var(--m-primary-300)"]], ["danger", ["var(--m-error-200)", "var(--m-error-100)", "var(--m-error-300)"]], ["warning", ["var(--m-warning-200)", "var(--m-warning-100)", "var(--m-warning-300)"]], ["success", ["var(--m-success-200)", "var(--m-success-100)", "var(--m-success-300)"]], ["default", ["var(--m-theme-50)", "var(--m-primary-100)", "var(--m-primary-300)"]], ["text", ["", "rgba(0,0,0,.06)", "rgba(0,0,0,.25)"]], ["link", ["", "var(--m-primary-200)", "var(--m-primary-300)"]]]), E = /* @__PURE__ */ new Map([["primary", ["var(--m-theme-50)", "var(--m-theme-50)", "var(--m-theme-50)"]], ["danger", ["var(--m-theme-50)", "var(--m-theme-50)", "var(--m-theme-50)"]], ["success", ["var(--m-theme-50)", "var(--m-theme-50)", "var(--m-theme-50)"]], ["warning", ["var(--m-theme-50)", "var(--m-theme-50)", "var(--m-theme-50)"]], ["default", ["var(--m-theme-900)", "var(--m-primary-600)", "var(--m-primary-600)"]], ["text", ["var(--m-theme-900)", "var(--m-theme-900)", "var(--m-theme-900)"]], ["link", ["var(--m-primary-600)", "var(--m-primary-600)", "var(--m-primary-700)"]]]), z = /* @__PURE__ */ new Map([["primary", ["var(--m-primary-600)", "var(--m-primary-600)", "var(--m-primary-700)"]], ["danger", ["var(--m-error-600)", "var(--m-error-600)", "var(--m-error-700)"]], ["success", ["var(--m-success-600)", "var(--m-success-600)", "var(--m-success-700)"]], ["warning", ["var(--m-warning-600)", "var(--m-warning-600)", "var(--m-warning-700)"]], ["default", ["var(--m-theme-900)", "var(--m-primary-600)", "var(--m-primary-700)"]], ["text", ["", "var(--m-theme-900)", "var(--m-theme-900)"]], ["link", ["var(--m-primary-600)", "var(--m-primary-600)", "var(--m-primary-700)"]]]), $ = /* @__PURE__ */ new Map([["primary", k], ["danger", S], ["warning", C], ["success", B], ["default", ["var(--m-theme-400)", "var(--m-primary-600)", "var(--m-primary-700)"]], ["text", ["", "", ""]], ["link", ["", "", ""]]]), T = o({ name: "MButton", props: { type: { type: String, default: "default" }, size: String, shape: String, text: Boolean, disabled: Boolean, loading: Boolean, btnBgColor: String, btnBgHoverColor: String, btnBgActiveColor: String, textColor: String, ripple: { type: Boolean, default: true }, light: Boolean, borderWidth: { type: Number, default: 1 }, borderStyle: { type: String, default: "solid" }, borderColor: String }, emits: ["click", "focus", "blur"], setup(o2, { slots: l2, emit: r2 }) {
  const { btnClass: i2, btnStyle: s2, contentShow: u2, setClickXEvent: d2, btnRef: c2, rippleRef: p2 } = ((o3) => {
    const n2 = e(null), l3 = e(null), r3 = t(b, { size: "" });
    return { btnStyle: a(() => {
      const e2 = [];
      let [t2, a2, n3] = M.get(o3.type) || [];
      o3.light && ([t2, a2, n3] = L.get(o3.type) || []), e2.push(`--btn-bg-color:${o3.btnBgColor || t2 || ""}`), e2.push(`--btn-bg-hover-color:${o3.btnBgHoverColor || a2 || ""}`), e2.push(`--btn-bg-active-color:${o3.btnBgActiveColor || n3 || ""}`);
      const l4 = o3.size || r3.size;
      e2.push(`--btn-size: var(--m-size-${l4 || "small"})`);
      let [i3, s3, u3] = E.get(o3.type) || [];
      o3.light && ([i3, s3, u3] = z.get(o3.type) || []), e2.push(`--btn-color:${o3.textColor || i3 || "var(--m-theme-900)"}`), e2.push(`--btn-color-hover:${o3.textColor || s3 || "var(--m-theme-900)"}`), e2.push(`--btn-color-active:${o3.textColor || u3 || "var(--m-theme-900)"}`);
      const [d3, c3, p3] = $.get(o3.type) || [];
      return e2.push(`--btn-border-color:${o3.borderColor || d3}`), e2.push(`--btn-border-color-hover:${o3.borderColor || c3}`), e2.push(`--btn-border-color-active:${o3.borderColor || p3}`), e2.push(`--btn-border-style:${o3.borderStyle || "solid"}`), e2.push(`--btn-border-width: ${["text", "link"].includes(o3.type) ? 0 : o3.borderWidth}px`), e2.join(";");
    }), btnClass: a(() => {
      const e2 = ["m-button"];
      return o3.shape && e2.push("m-button__shape__" + o3.shape), o3.loading && e2.push("is__loading"), o3.disabled && e2.push("is__disabled"), o3.text && e2.push("is__text"), e2;
    }), contentShow: a(() => !(o3.loading && ["circle", "rect"].includes(o3.shape))), setClickXEvent: (e2) => {
      if (!n2.value || !o3.ripple) return;
      const t2 = l3.value.getBoundingClientRect(), a2 = Math.max(t2.width, t2.height), r4 = a2 + "px", i3 = r4;
      let s3 = (e2.clientY - t2.top - a2 / 2).toFixed(0) + "px", u3 = (e2.clientX - t2.left - a2 / 2).toFixed(0) + "px";
      Math.abs(t2.width - t2.height) < 12 && (s3 = 0.5 * (t2.height - a2) + "px", u3 = 0.5 * (t2.width - a2) + "px"), x(n2.value, [{ offset: 0, transform: "scale(0.66)", width: r4, height: i3, top: s3, left: u3, borderRadius: "50%" }, { offset: 1, transform: "scale(3)", width: r4, height: i3, top: s3, left: u3 }], 500);
    }, btnRef: l3, rippleRef: n2 };
  })(o2);
  function m2(e2, t2) {
    e2.preventDefault(), o2.loading || o2.disabled || r2(t2, e2);
  }
  const f2 = (e2) => {
    e2.preventDefault(), o2.loading || o2.disabled || d2(e2);
  };
  return () => n("button", { class: i2.value, style: s2.value, onMousedown: f2, ref: c2, onClick: (e2) => m2(e2, "click"), onFocus: (e2) => m2(e2, "focus"), onBlur: (e2) => m2(e2, "blur") }, [n("span", { class: "m-button-content" }, [o2.ripple && !o2.loading && !o2.disabled && n("div", { class: "m-button_inner__ripple", ref: p2 }, null), o2.loading && n("span", { class: "m-button__loading_wrapper", style: { marginRight: u2.value ? "8px" : 0 } }, [n("svg", { viewBox: "0 0 1024 1024", class: "m-button-icon__loading" }, [n("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z", fill: "currentColor" }, null)])]), u2.value ? l2.default && l2.default() : null])]);
} }), P = o({ name: "MSpace", props: { value: { type: String, default: "" }, layout: { type: String, validator: (e2) => ["x", "y"].includes(e2), default: "x" } }, setup(e2, { slots: t2 }) {
  const o2 = a(() => "y" === e2.layout ? "m-space-y" : "m-space-x"), l2 = a(() => t2.default ? t2.default() : []);
  return () => {
    var _a;
    return n("div", { class: ["m-space", o2.value], style: { "--size": e2.value || "" } }, [(_a = l2.value) == null ? void 0 : _a.map((e3, t3) => n("div", { class: "m-space-item", key: t3 }, [e3]))]);
  };
} }), R = o({ name: "MDivider", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, color: { type: String, default: "" }, size: { type: String, default: "12px" } }, setup(e2) {
  const t2 = a(() => "y" === e2.layout ? "m-divider-y" : "m-divider-x");
  return () => n("div", { style: { "--color": e2.color, "--size": e2.size }, class: ["m-divider", t2.value] }, null);
} }), H = o({ name: "MLayout", props: { layout: { type: String, default: "y" } }, setup(e2, { slots: t2 }) {
  const o2 = a(() => "x" === e2.layout ? "m-layout-x" : "m-layout-y");
  return () => n("div", { class: ["m-layout", o2.value] }, [t2.default && t2.default()]);
} }), F = o({ name: "MHeader", props: { height: { type: String, default: "64px" } }, setup: (e2, { slots: t2 }) => () => n("header", { class: "m-header", style: { "--height": e2.height } }, [t2.default && t2.default()]) }), A = o({ name: "MSide", props: { width: { type: String, default: "200px" } }, setup: (e2, { slots: t2 }) => () => n("nav", { class: "m-side", style: { "--size": e2.width } }, [t2.default && t2.default()]) }), N = o({ name: "MFooter", props: { height: { type: String, default: "64px" } }, setup: (e2, { slots: t2 }) => () => n("nav", { class: "m-footer", style: { "--size": e2.height } }, [t2.default && t2.default()]) }), j = o({ name: "MMain", setup: (e2, { slots: t2 }) => () => n("main", { class: "m-main" }, [t2.default && t2.default()]) }), W = o({ name: "MAnchor", props: { getTarget: { type: Function, default: () => window } }, setup(e2, { slots: a2 }) {
  t(b);
  return () => n("div", null, [a2.default && a2.default()]);
} }), q = o({ name: "MConfigProvider", props: { locale: { type: String, default: "zh-CN" }, size: { type: String, default: "small", validator: (e2) => ["small", "mini", "large"].includes(e2) } }, setup: (e2, { slots: t2 }) => (l(b, e2), () => n(r, null, [t2.default && t2.default()])) }), O = o({ name: "MBreadcrumb", props: { separator: { type: String, default: "/" }, color: String, activeColor: String }, setup(e2, { slots: t2 }) {
  const o2 = a(() => {
    var _a, _b;
    return ((_b = (_a = t2 == null ? void 0 : t2.default) == null ? void 0 : _a.call(t2)) == null ? void 0 : _b.length) || 0;
  });
  return () => {
    var _a, _b;
    return n("div", { class: "m-breadcrumb", style: { "--color": e2.color, "--activeColor": e2.activeColor } }, [(_b = (_a = t2 == null ? void 0 : t2.default) == null ? void 0 : _a.call(t2)) == null ? void 0 : _b.map((a2, l2) => {
      var _a2;
      return n(r, null, [a2, l2 >= 0 && l2 < o2.value - 1 && n("span", null, [t2.separator && ((_a2 = t2.separator) == null ? void 0 : _a2.call(t2)) || e2.separator])]);
    })]);
  };
} }), D = o({ name: "MBreadcrumbItem", props: { title: { type: String, default: "" }, disabled: Boolean }, emits: ["click"], setup(e2, { emit: t2, slots: a2 }) {
  function o2(a3) {
    a3.preventDefault(), (e2 == null ? void 0 : e2.disabled) || t2("click", a3);
  }
  return () => n("div", { class: ["m-breadcrumb__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, onClick: o2 }, [a2.default && a2.default() || e2.title]);
} }), V = { hideTime: 200, showTime: 250, bgShow: async (e2) => {
  await x(e2, [{ transform: "scaleY(0.88)", offset: 0 }, { transform: "scaleY(1)", offset: 0.33 }, {}], { duration: 250 }).catch(() => {
  });
}, cShow: async (e2) => {
  await x(e2, [{ offset: 0, opacity: 0 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 1 }], { duration: 250 }).catch(() => {
  });
}, bgHide: async (e2) => {
  await x(e2, [{ opacity: 1, transform: "scaleY(1)", offset: 0 }, { opacity: 0.66, transform: "scaleY(1)", offset: 0.33 }, { opacity: 0, transform: "scaleY(0.88)", offset: 1 }], { duration: 200 }).catch(() => {
  });
}, async cHide(e2) {
  await x(e2, [{ offset: 0, opacity: 1 }, { offset: 0.33, opacity: 0 }, { offset: 1, opacity: 0 }], { duration: 200 }).catch(() => {
  });
} };
function I(e2, t2, a2) {
  const o2 = document.documentElement.scrollTop, n2 = function(e3, t3, a3) {
    var o3 = window.innerWidth, n3 = window.innerHeight, l2 = t3.top > (a3 == null ? void 0 : a3.height), r2 = n3 - ((t3 == null ? void 0 : t3.top) + (a3 == null ? void 0 : a3.height)) > 0, i2 = t3.left > a3.width, s2 = o3 - (t3.left + a3.width) > 0;
    return l2 && r2 && i2 && s2 ? e3 : r2 ? i2 && s2 ? ["bottomRight", "bottomLeft", "bottom"].includes(e3) ? e3 : "bottomLeft" : i2 ? "bottomRight" : "bottomLeft" : i2 && s2 ? ["topLeft", "topRight", "top"].includes(e3) ? e3 : "topLeft" : i2 ? "topLeft" : "topRight";
  }(e2, t2, a2);
  switch (n2) {
    case "bottomRight":
      return { top: `${t2.top + t2.height + o2}`, left: "" + (t2.left + t2.width - a2.width) };
    case "bottom":
      return { top: `${t2.top + t2.height + o2}`, left: "" + (t2.left + t2.width / 2 - a2.width / 2) };
    default:
      return { top: `${t2.top + t2.height + o2}`, left: `${t2.left}` };
  }
}
const Y = o({ name: "MDropdown", props: { placement: { type: String, default: "bottomLeft" }, trigger: { type: String, default: "click", validator: (e2) => ["hover", "click"].includes(e2) }, destroyOnHide: { type: Boolean, default: false }, disabled: Boolean, open: { type: Boolean, default: false }, toBody: { type: Boolean, default: true } }, setup(t2, { slots: o2 }) {
  const l2 = e(null), v2 = e(null), y2 = e(null), g2 = e(false), h2 = i({ top: "0", left: "0", waitChange: false, renderToDom: null }), b2 = e(false);
  let x2 = null;
  const k2 = a(() => !t2.destroyOnHide || g2.value);
  let S2 = null;
  function C2() {
    const e2 = w(S2), a2 = w(y2.value), { top: o3, left: n2 } = I(t2.placement, e2, a2);
    h2.top = `${o3}px`, h2.left = `${n2}px`, v2.value.style.minWidth = `${e2.width}px`;
  }
  function B2() {
    k2.value && C2();
  }
  async function M2() {
    g2.value = true, b2.value = true, x2 && (clearTimeout(x2), x2 = null), h2.waitChange = true, await new Promise((e2) => requestAnimationFrame(e2)), C2(), window.addEventListener("scroll", B2, false), V.cShow(y2.value), V.bgShow(v2.value), await _(y2.value).catch(() => {
    }), h2.waitChange = false;
  }
  function L2() {
    if (h2.waitChange || t2.disabled) return;
    !g2.value ? M2() : z2();
  }
  function E2() {
    h2.waitChange || t2.disabled || g2.value || M2();
  }
  function z2() {
    h2.waitChange || (b2.value && (clearTimeout(x2), x2 = null), b2.value = true, x2 = setTimeout(async () => {
      var e2;
      b2.value && (h2.waitChange = true, V.cHide(y2.value), V.bgHide(v2.value), await (e2 = 0, new Promise((t3) => setTimeout(t3, e2))), await _(y2.value).catch(() => {
      }), window.removeEventListener("scroll", B2, false), g2.value = false, h2.waitChange = false);
    }, 60));
  }
  function $2(e2) {
    const t3 = e2.target;
    var a2, o3;
    t3 && (a2 = l2.value, o3 = t3, a2 && o3 && (a2 === o3 || a2.contains && a2.contains(o3)) || z2());
  }
  function T2() {
    b2.value = true, x2 ? (clearTimeout(x2), x2 = null, g2.value = true) : (b2.value = false, g2.value = true);
  }
  function P2() {
    var _a, _b;
    window.addEventListener("click", $2, true), "click" === t2.trigger ? S2 == null ? void 0 : S2.addEventListener("click", L2, false) : (S2 == null ? void 0 : S2.addEventListener("mouseenter", E2, false), S2 == null ? void 0 : S2.addEventListener("mouseleave", z2, false), (_a = v2.value) == null ? void 0 : _a.addEventListener("mouseenter", T2, false), (_b = v2.value) == null ? void 0 : _b.addEventListener("mouseleave", z2, false));
  }
  function R2() {
    var _a, _b;
    S2 == null ? void 0 : S2.removeEventListener("click", L2, false), window.removeEventListener("click", $2, false), S2 == null ? void 0 : S2.removeEventListener("mouseenter", E2, false), S2 == null ? void 0 : S2.removeEventListener("mouseleave", z2, false), (_a = v2.value) == null ? void 0 : _a.removeEventListener("mouseenter", T2, false), (_b = v2.value) == null ? void 0 : _b.removeEventListener("mouseleave", z2, false);
  }
  return s(() => t2.trigger, () => {
    R2(), P2();
  }), u(() => {
    var _a;
    if (!document.querySelector("#m-inset__body")) {
      const e2 = document.createElement("div");
      e2.setAttribute("id", "m-inset__body"), (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(e2);
    }
  }), d(() => {
    var _a;
    S2 = 1 === ((_a = l2.value.children) == null ? void 0 : _a.length) ? l2.value.children[0] || null : l2.value || null, P2();
  }), c(() => {
    R2();
  }), () => n(r, null, [n("div", { class: "m-dropdown", ref: l2, style: { "pointer-events": h2.waitChange ? "none" : "all" } }, [o2.default && o2.default()]), n(p, { to: "#m-inset__body" }, { default: () => [k2.value && m(n("div", { class: "m-dropdown__content m-box__shadow", ref: v2, style: { "--top": h2.top, "--left": h2.left, "pointer-events": h2.waitChange ? "none" : "all" } }, [n("div", { class: "m-dropdown__body", ref: y2 }, [o2.content && o2.content()])]), [[f, g2.value]])] })]);
} }), X = o({ name: "MButtonGroup", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, size: { type: String, default: "" } }, setup(e2, { slots: a2 }) {
  const o2 = t(b, { size: "" });
  return l(b, { size: e2.size || o2.size }), () => n("div", { class: ["m-button__group", "y" === e2.layout ? "m-button__group_y" : "m-button__group_x"] }, [a2.default && a2.default()]);
} }), G = o({ name: "MMenuItem", props: { disabled: Boolean, label: String }, emits: ["click"], setup(e2, { slots: t2, emit: a2 }) {
  function o2(t3) {
    if (e2.disabled) return t3.preventDefault(), void t3.stopPropagation();
    a2("click", t3);
  }
  return () => n("div", { class: ["m-menu__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, "aria-disabled": e2.disabled, onClick: o2 }, [t2.default && t2.default() || e2.label]);
} });
const J = o({ name: "MTransition", props: { onEnter: Function, onLeave: Function }, setup: (e2, t2) => () => {
  const a2 = t2.slots.default && t2.slots.default();
  return n(v, { appear: false, onEnter: (t3, a3) => {
    var _a;
    return (_a = e2.onEnter) == null ? void 0 : _a.call(e2, t3, a3);
  }, onLeave: (t3, a3) => {
    var _a;
    return (_a = e2.onLeave) == null ? void 0 : _a.call(e2, t3, a3);
  }, css: false }, "function" == typeof (o2 = a2) || "[object Object]" === Object.prototype.toString.call(o2) && !y(o2) ? a2 : { default: () => [a2] });
  var o2;
} }), K = async ({ mask: e2, content: t2, wrapper: a2 }) => {
  x(e2, [{ opacity: 0 }, { opacity: 1 }], 120), x(a2, [{ transform: "scale(0.33)", offset: 0, opacity: 0.66 }, { transform: "scale(0.98)", offset: 0.66, opacity: 1 }, { transform: "scale(1)", offset: 1, opacity: 1 }], { duration: 240 }), await x(t2, [{ opacity: 0, offset: 0 }, { opacity: 0.25, offset: 0.5 }, { opacity: 1, offset: 1 }], { duration: 240 });
}, Q = async ({ mask: e2, wrapper: t2, content: a2 }) => {
  x(e2, [{ opacity: 1 }, { opacity: 0 }], { duration: 200 }), x(a2, [{ opacity: 0.25, offset: 0 }, { opacity: 0, offset: 0.33 }, { opacity: 0, offset: 1 }], { duration: 200 }), await x(t2, [{ opacity: 1, offset: 0 }, { opacity: 0.88, offset: 0.33 }, { opacity: 0, offset: 1, transform: "scale(0.33)" }], { duration: 200 }, 20);
}, U = (e2 = 'm-dialog[data-active="true"]') => {
  document.querySelectorAll(e2).length > 0 ? (document.body.setAttribute("data-overflow", "hidden"), document.documentElement.dataset.overflow = "hidden") : (document.body.setAttribute("data-overflow", "auto"), document.documentElement.dataset.overflow = "auto");
}, Z = o({ name: "MDialog", components: { MButton: T }, props: { visible: { type: Boolean, default: false }, content: { type: String, default: "" }, className: String, title: { type: String, default: "" }, cancelBtnText: { type: String, default: "" }, okBtnText: { type: String, default: "" }, okBtnProps: { type: Object, default: () => ({ type: "primary" }) }, cancelBtnProps: { type: Object, default: () => ({ type: "default" }) }, width: { type: [Number, String], default: "50%" }, height: { type: [Number, String], default: "auto" }, showClose: { type: Boolean, default: true }, backgroundColor: { type: String, default: "#fff" }, maskBackgroundColor: { type: String, default: "rgba(0, 0, 0, .35)" }, fullscreen: { type: Boolean, default: false }, escHide: { type: Boolean, default: true }, maskHide: { type: Boolean, default: true }, target: { type: [String, HTMLElement], default: "body" }, top: { type: String, default: "center" }, _onClose: Function }, emits: ["close"], setup(t2, o2) {
  const { wrapperRef: l2, bodyRef: r2, maskRef: i2, dialogRef: s2 } = { dialogRef: e(null), wrapperRef: e(null), maskRef: e(null), bodyRef: e(null) }, { contentStyle: u2, wrapperStyle: d2, bodyStyle: c2 } = ((e2) => ({ contentStyle: a(() => {
    const t3 = ("number" == typeof e2.width ? `${e2.width}px` : e2.width) || "auto", a2 = ("number" == typeof e2.height ? `${e2.height}px` : e2.height) || "auto";
    return e2.fullscreen ? { width: "100%", padding: "0px", margin: "0px", height: "100%" } : { width: t3, maxWidth: "100%", height: a2, margin: e2.top && "center" !== e2.top ? "0 auto" : "24px auto" };
  }), wrapperStyle: a(() => e2.fullscreen ? "width: 100%; height: 100%;" : "center" === e2.top ? "display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      " : `position:relative;top: ${e2.top};padding-bottom:24px;`), bodyStyle: a(() => "width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;") }))(t2), v2 = (e2) => {
    var _a;
    t2._onClose && ((_a = t2._onClose) == null ? void 0 : _a.call(t2, e2)), o2.emit("close", e2);
  }, y2 = (e2) => {
    ("Escape" === e2.code || 27 === e2.keyCode || "Escape" === e2.key) && t2.escHide && ((e3) => {
      if (!e3) return false;
      const t3 = document.querySelectorAll(".m-dialog[data-show='true']");
      if (t3.length > 0) return t3[t3.length - 1] === e3;
      return false;
    })(s2.value) && o2.emit("close", { type: "cancel" });
  }, h2 = async (e2, a2) => {
    await new Promise((e3) => requestAnimationFrame(e3));
    const o3 = "center";
    l2.value.style.setProperty("transform-origin", o3), r2.value.style.setProperty("transform-origin", o3), U('.m-dialog[data-show="true"]'), await K({ mask: i2.value, content: r2.value, wrapper: l2.value }), t2.escHide && document.addEventListener("keyup", y2), a2();
  }, b2 = async (e2, t3) => {
    await Q({ mask: i2.value, content: r2.value, wrapper: l2.value }), U('.m-dialog[data-show="true"]'), document.removeEventListener("keyup", y2), t3();
  };
  return () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const e2 = (_b = (_a = o2.slots).default) == null ? void 0 : _b.call(_a), a2 = (_d = (_c = o2.slots).footer) == null ? void 0 : _d.call(_c), y3 = (_f = (_e = o2.slots).header) == null ? void 0 : _f.call(_e), w2 = (_h = (_g = o2.slots).body) == null ? void 0 : _h.call(_g);
    return n(p, { to: t2.target }, { default: () => [n(J, { onEnter: h2, onLeave: b2 }, { default: () => [m(n("div", { class: `m-dialog ${t2.className || ""}`, "data-show": t2.visible, ref: s2, style: { "--m-dialog-background_color": t2.backgroundColor, "--m-dialog__bask_color": t2.maskBackgroundColor } }, [n("section", { class: "m-dialog-mask", ref: i2 }, null), n("div", { class: "m-dialog-container", onClick: () => t2.maskHide && v2("cancel") }, [n("div", { style: d2.value }, [n("div", { class: "m-dialog-cover", style: u2.value }, [n("div", { class: "m-dialog-content", onClick: (e3) => e3.stopPropagation() }, [n("div", { class: "m-dialog-content__background", ref: l2 }, null), n("section", { class: "m-dialog-content__wrapper", ref: r2, style: c2.value }, [t2.showClose && n(T, { type: "text", shape: "rect", size: "small", class: "m-dialog-content__close", onClick: () => v2("cancel") }, { default: () => [n("svg", { fill: "currentColor", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5090", width: "28", height: "28" }, [n("path", { d: "M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" }, null)])] }), y3 || t2.title && n("header", { class: "m-dialog__header" }, [n("span", { class: "m-dialog-title" }, [t2.title])]), w2 || n("main", { class: "m-dialog__body" }, [e2 || t2.content]), a2 || (t2.cancelBtnText || t2.okBtnText) && n("footer", { class: "m-dialog__footer" }, [t2.cancelBtnText && n(T, g(t2.cancelBtnProps, { onClick: () => v2("cancel") }), { default: () => [t2.cancelBtnText] }), t2.okBtnText && n(T, g(t2.okBtnProps, { onClick: () => v2("ok") }), { default: () => [t2.okBtnText] })])])])])])])]), [[f, t2.visible]])] })] });
  };
} }), ee = (e2) => {
  const t2 = (e2 == null ? void 0 : e2.title) || "", a2 = e2.width || 480, o2 = (e2 == null ? void 0 : e2.top) || "center";
  return { onConfirm: () => {
  }, onCancel: () => {
  }, okBtnText: (e2 == null ? void 0 : e2.okBtnText) || "确定", cancelBtnText: (e2 == null ? void 0 : e2.cancelBtnText) || "", okBtnProps: e2 == null ? void 0 : e2.okBtnProps, cancelBtnProps: e2 == null ? void 0 : e2.cancelBtnProps, content: "hello", className: "m-dialog-confirm", title: t2, width: a2, top: o2, escHide: false, maskHide: false, showClose: false, visible: true };
}, te = async (e2) => {
  const t2 = document.createElement("div");
  let a2, o2, n2;
  document.body.appendChild(t2);
  const l2 = h(Z, { ...ee(e2), target: t2, _onClose: async (r3) => {
    var _a, _b;
    "cancel" === r3 && e2.onCancel ? (_a = e2.onCancel) == null ? void 0 : _a.call(e2) : "ok" === r3 && e2.onConfirm && ((_b = e2.onConfirm) == null ? void 0 : _b.call(e2)), await Q({ mask: a2, wrapper: n2, content: o2 }), l2.unmount(), t2.remove();
  } });
  l2.mount(t2), a2 = t2.querySelector(".m-dialog-mask"), o2 = t2.querySelector(".m-dialog-content__wrapper"), n2 = t2.querySelector(".m-dialog-content__background");
  let r2 = "center";
  n2.style.setProperty("transform-origin", r2), o2.style.setProperty("transform-origin", r2), K({ mask: a2, content: o2, wrapper: n2 });
}, ae = Object.freeze({ open: (e2 = {}) => {
  te(Object.assign({}, e2));
}, confirm: (e2 = {}) => {
  te(Object.assign({}, e2, { okBtnType: "primary", cancelBtnText: "取消", cancelBtnProps: { type: "default" } }));
} }), oe = o({ name: "MMask", props: { visible: { type: Boolean, default: false }, background: { type: String, default: "rgba(0, 0, 0, .35)" }, maskHide: { type: Boolean, default: true } }, emits: ["hide"], setup(e2, t2) {
  const a2 = async () => {
    e2.maskHide && t2.emit("hide", false);
  }, o2 = async (e3, t3) => {
    await x(e3, [{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }], { duration: 300 }), t3();
  }, l2 = async (e3, t3) => {
    await x(e3, [{ opacity: 1, offset: 0 }, { opacity: 0, offset: 1 }], { duration: 200 }, 60), t3();
  };
  return () => {
    const r2 = t2.slots.default && t2.slots.default();
    return n(p, { to: "body" }, { default: () => [n(J, { onEnter: o2, onLeave: l2 }, { default: () => [m(n("div", { class: "m-mask", onClick: a2, style: { "--m-mask-background": e2.background } }, [n("div", { class: "m-mask-bg" }, null), n("div", { onClick: (e3) => e3.stopPropagation(), class: "m-mask-body" }, [r2])]), [[f, e2.visible]])] })] });
  };
} }), ne = o({ name: "MInput", props: { value: { type: [String, Number], default: "" }, modelValue: { type: [String, Number], default: "" }, placeholder: { type: String, default: "" }, type: { type: String, default: "text" }, size: { type: String, default: "small" }, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, prepend: { type: String, default: "" }, append: { type: String, default: "" }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, width: { type: [String, Number], default: "" }, borderWidth: { type: [String, Number], default: "1px" }, autofocus: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "focus", "blur"], exposed: ["focus", "blur"], setup(t2, o2) {
  const { inputRef: l2, isFocus: r2, setIsFocus: i2, inputValue: u2, showClear: d2 } = ((t3) => {
    const o3 = e(null), n2 = e(false), l3 = e(t3.value || t3.modelValue || ""), r3 = a(() => t3.clearable && !n2.value && "" !== l3.value);
    return s(() => [t3.modelValue, t3.value], (e2, t4) => {
      l3.value = e2[0] === t4[0] ? e2[1] || "" : e2[0] || "";
    }), { inputRef: o3, inputValue: l3, isFocus: n2, setIsFocus: (e2) => {
      n2.value = e2;
    }, showClear: r3 };
  })(t2), { inputClass: c2, inputStyles: p2 } = ((e2, t3) => ({ inputClass: a(() => {
    const a2 = ["m-input"];
    return e2.size && a2.push(`m-input__size_${e2.size}`), e2.disabled ? (a2.push("m-input__disabled"), a2) : e2.readonly ? (a2.push("m-input__readonly"), a2) : (t3.value && a2.push("m-input__focus"), a2 == null ? void 0 : a2.join(" "));
  }), inputStyles: a(() => ({ width: e2.width ? "number" == typeof e2.width ? `${e2.width}px` : e2.width : "", "--border_width": e2.borderWidth ? "number" == typeof e2.borderWidth ? `${e2.borderWidth}px` : e2.borderWidth : "1px" })) }))(t2, r2), m2 = (e2) => {
    t2.disabled || t2.readonly || (u2.value = e2.target.value, o2.emit("update:modelValue", u2.value), o2.emit("change", u2.value));
  };
  return o2.expose({ focus: () => {
    var _a;
    (_a = l2.value) == null ? void 0 : _a.focus();
  }, blur: () => {
    var _a;
    (_a = l2.value) == null ? void 0 : _a.blur();
  } }), () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const e2 = (_b = (_a = o2.slots) == null ? void 0 : _a.prefix) == null ? void 0 : _b.call(_a), a2 = (_d = (_c = o2.slots) == null ? void 0 : _c.suffix) == null ? void 0 : _d.call(_c), r3 = (_f = (_e = o2.slots) == null ? void 0 : _e.prepend) == null ? void 0 : _f.call(_e), s2 = (_h = (_g = o2.slots) == null ? void 0 : _g.append) == null ? void 0 : _h.call(_g);
    return n("div", { class: `${c2.value} ${r3 || t2.prepend ? "m-input__hasPrepend" : ""} ${s2 || t2.append ? "m-input__hasAppend" : ""}`, style: p2.value }, [r3 || t2.prepend ? n("div", { class: "m-input__prepend" }, [r3 || t2.prepend]) : null, n("div", { class: "m-input__main" }, [e2 || t2.prefix ? n("div", { class: "m-input__prefix" }, [e2 || t2.prefix]) : null, n("input", { class: "m-input__inner", ref: l2, type: t2.type, disabled: t2.disabled, placeholder: t2.placeholder, readonly: t2.readonly, value: u2.value, autofocus: t2.autofocus, onInput: m2, onBlur: (e3) => {
      i2(false), o2.emit("blur", e3);
    }, onFocus: (e3) => {
      i2(true), o2.emit("focus", e3);
    } }, null), d2.value && n("span", { class: "m-input__clear", onClick: () => {
      u2.value = "", o2.emit("update:modelValue", u2.value), o2.emit("change", u2.value);
    } }, [n("svg", { class: "icon", fill: "currentColor", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, [n("path", { d: "M554.586353 512l170.556235-170.556235c11.444706-11.414588 11.595294-30.659765-0.180706-42.405647a29.906824 29.906824 0 0 0-42.405647-0.180706L512 469.413647l-170.556235-170.556235a30.208 30.208 0 0 0-42.405647 0.180706 29.906824 29.906824 0 0 0-0.180706 42.405647L469.413647 512l-170.556235 170.556235c-11.444706 11.414588-11.595294 30.659765 0.180706 42.405647a29.906824 29.906824 0 0 0 42.405647 0.180706L512 554.586353l170.556235 170.556235c11.414588 11.444706 30.659765 11.595294 42.405647-0.180706a29.906824 29.906824 0 0 0 0.180706-42.405647L554.586353 512zM512 993.882353C245.850353 993.882353 30.117647 778.149647 30.117647 512S245.850353 30.117647 512 30.117647s481.882353 215.732706 481.882353 481.882353-215.732706 481.882353-481.882353 481.882353z" }, null)])]), a2 || t2.suffix && n("div", { class: "m-input__suffix" }, [a2 || t2.suffix])]), s2 || t2.append ? n("div", { class: "m-input__append" }, [s2 || t2.append]) : null]);
  };
} }), le = [T, P, R, H, F, A, N, j, W, q, O, D, Y, X, G, Z, oe, ne].map((e2) => (e2.install = function(t2) {
  t2.component(e2.name, e2);
}, e2)), re = { install(e2) {
  le.forEach((t2) => {
    e2.component(t2.name, t2);
  });
} };
export {
  ae as Dialog,
  W as MAnchor,
  O as MBreadcrumb,
  D as MBreadcrumbItem,
  T as MButton,
  X as MButtonGroup,
  q as MConfigProvider,
  Z as MDialog,
  R as MDivider,
  Y as MDropdown,
  N as MFooter,
  F as MHeader,
  ne as MInput,
  H as MLayout,
  j as MMain,
  oe as MMask,
  G as MMenuItem,
  A as MSide,
  P as MSpace,
  re as default
};
//# sourceMappingURL=mostify-ui.js.map
