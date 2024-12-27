/* @license Mostify UI By <Irming>*/
import { inject as e, ref as t, computed as a, defineComponent as l, createVNode as n, Fragment as o, reactive as s, watch as i, onBeforeMount as r, onMounted as u, onUnmounted as c, Teleport as d, withDirectives as p, vShow as m, provide as f, Transition as h, isVNode as g, mergeProps as v, createApp as y, createTextVNode as b } from "vue";
const w = Symbol("mostify-provider-option"), x = () => {
  const { size: t2, zIndex: a2 } = e(w, { size: "small", zIndex: 1e3 });
  return { size: t2, zIndex: a2 };
}, S = l({ name: "MIcon", props: { name: { type: String, default: "" }, size: { type: String, default: "16px" }, color: { type: String, default: "currentColor" } }, setup(e2, { emit: t2 }) {
  const l2 = a(() => `mostifyiconfont m-icon m-icon-${e2.name}`);
  return () => n("i", { class: l2.value, onClick: (e3) => t2("click", e3), style: { color: e2.color, "--icon-size": e2.size, lineHeight: "inherit" } }, null);
} });
const k = l({ name: "MButton", props: { type: { type: String, default: "default" }, size: String, shape: { type: String, default: "" }, disabled: Boolean, loading: Boolean, border: Boolean, light: Boolean, leftIcon: String, rightIcon: String, block: { type: Boolean, default: false } }, emits: ["click", "focus", "blur"], setup(e2, { slots: l2, emit: s2 }) {
  const { btnClass: i2, contentShow: r2, btnRef: u2 } = ((e3) => {
    const l3 = t(null), { size: n2 } = x();
    return { btnClass: a(() => {
      const t2 = ["m-button"];
      return e3.type && t2.push("m-button-type-" + e3.type), t2.push("m-button-size-" + (e3.size || n2 || "small")), e3.shape && t2.push("m-button-shape-" + e3.shape), e3.loading && t2.push("is-loading"), e3.disabled && t2.push("is-disabled"), t2;
    }), contentShow: a(() => !(e3.loading && ["circle", "square"].includes(e3.shape))), btnRef: l3 };
  })(e2), { rippleRef: c2, setRipple: d2 } = ((e3, a2) => {
    const l3 = t(null);
    let n2 = null;
    return { setRipple: async (t2) => {
      var _a;
      if (!l3.value || e3.disabled || e3.loading) return;
      const o2 = (_a = a2.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!o2) return;
      n2 || (n2 = document.createElement("div"), n2.className = "m-button-ripple");
      const s3 = n2.cloneNode();
      l3.value.appendChild(s3);
      const i3 = Math.max(o2.width, o2.height), r3 = i3 + "px", u3 = r3;
      let c3 = (t2.clientY - o2.top - i3 / 2).toFixed(0) + "px", d3 = (t2.clientX - o2.left - i3 / 2).toFixed(0) + "px";
      c3 = 0.5 * (o2.height - i3) + "px", Math.abs(o2.width - o2.height) < 12 && (d3 = 0.5 * (o2.width - i3) + "px"), s3.setAttribute("style", `width:${r3};height:${u3};top:${c3};left:${d3};`), s3.classList.add("m-button-ripple-active"), await new Promise((e4) => setTimeout(e4, 500)), s3.remove();
    }, rippleRef: l3 };
  })(e2, u2);
  function p2(t2, a2) {
    t2.preventDefault(), e2.loading || e2.disabled || s2(a2, t2);
  }
  return () => {
    const t2 = l2.leftIcon ? l2.leftIcon() : e2.leftIcon ? n(S, { name: e2.leftIcon }, null) : "", a2 = l2.rightIcon ? l2.rightIcon() : e2.rightIcon ? n(S, { name: e2.rightIcon }, null) : "";
    return n("button", { class: i2.value, onMousedown: d2, ref: u2, style: { "--border-width": e2.border ? "1px" : "0px", width: e2.block ? "100%" : "" }, "data-light": e2.light ? "on" : "off", onClick: (e3) => p2(e3, "click"), onFocus: (e3) => p2(e3, "focus"), onBlur: (e3) => p2(e3, "blur") }, [!e2.loading && !e2.disabled && n("div", { class: "m-button-ripple-wrapper", ref: c2 }, null), n("span", { class: "m-button-main" }, [e2.loading && (s3 = r2.value, n("span", { class: "m-button-loading-icon-wrapper", style: { marginRight: s3 ? "8px" : 0 } }, [n("svg", { viewBox: "0 0 1024 1024", width: "1em", height: "1em", class: "m-button-icon-loading" }, [n("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z", fill: "currentColor" }, null)])])), r2.value && n(o, null, [t2 && n("span", { class: "m-button-icon-left" }, [t2]), l2.default && l2.default(), a2 && n("span", { class: "m-button-icon-right" }, [a2])])])]);
    var s3;
  };
} }), B = l({ name: "MSpace", props: { size: { type: String, default: "" }, layout: { type: String, validator: (e2) => ["x", "y"].includes(e2), default: "x" }, alignItems: { type: String, default: "flex-start" } }, setup(e2, { slots: t2 }) {
  const l2 = a(() => "y" === e2.layout ? "m-space-y" : "m-space-x"), o2 = a(() => t2.default ? t2.default() : []);
  return () => {
    var _a;
    return n("div", { class: ["m-space", l2.value], style: { "--size": e2.size || "", "align-items": e2.alignItems || "" } }, [(_a = o2.value) == null ? void 0 : _a.map((e3, t3) => n("div", { class: "m-space-item", key: t3 }, [e3]))]);
  };
} }), C = l({ name: "MDivider", props: { layout: { type: String, default: "y", validator: (e2) => ["x", "y"].includes(e2) }, color: { type: String, default: "" }, size: { type: String, default: "12px" }, borderStyle: { type: String, default: "solid" } }, setup: (e2) => () => n("div", { style: { "--color": e2.color, "--size": e2.size, "--border-style": e2.borderStyle }, class: { "m-divider": true, "m-divider-y": "y" === e2.layout, "m-divider-x": "x" === e2.layout } }, null) }), z = l({ name: "MAnchor", props: { getTarget: { type: Function, default: () => window } }, setup(t2, { slots: a2 }) {
  e(w);
  return () => n("div", null, [a2.default && a2.default()]);
} }), I = l({ name: "MConfigProvider", props: { locale: { type: String, default: "zh-CN" }, size: { type: String, default: "small", validator: (e2) => ["small", "mini", "large"].includes(e2) } }, setup: (e2, { slots: t2 }) => () => n(o, null, [t2.default && t2.default()]) }), M = l({ name: "MBreadcrumb", props: { separator: { type: String, default: "/" } }, setup(e2, { slots: t2 }) {
  var _a, _b;
  const a2 = (_a = t2.default) == null ? void 0 : _a.call(t2), l2 = t2.separator ? (_b = t2.separator) == null ? void 0 : _b.call(t2) : e2.separator;
  return () => n("div", { class: "m-breadcrumb" }, [a2 == null ? void 0 : a2.map((e3, t3) => n(o, null, [e3, t3 >= 0 && t3 < a2.length - 1 && n("span", { class: "m-breadcrumb-separator" }, [l2])]))]);
} }), L = l({ name: "MBreadcrumbItem", props: { label: { type: String, default: "" }, disabled: { type: Boolean, default: false }, href: { type: String, default: "" }, target: { type: String, default: "_blank" } }, setup(e2, { slots: t2 }) {
  const a2 = (t2 == null ? void 0 : t2.default) ? t2.default() : e2.label;
  return () => e2.href && !e2.disabled ? n("a", { class: "m-breadcrumb-item m-breadcrumb-link", "data-disabled": e2.disabled, href: e2.href, target: e2.target }, [a2]) : n("span", { class: "m-breadcrumb-item", "data-disabled": e2.disabled }, [a2]);
} }), _ = (e2 = 'm-dialog[data-active="true"]') => {
  document.querySelectorAll(e2).length > 0 ? (document.body.setAttribute("data-overflow", "hidden"), document.documentElement.dataset.overflow = "hidden") : (document.body.setAttribute("data-overflow", "auto"), document.documentElement.dataset.overflow = "auto");
}, N = (e2) => e2 ? e2.getBoundingClientRect() : null, V = (e2) => new Promise((t2) => {
  if (!e2) return null;
  Promise.all(e2.getAnimations({ subtree: true }).map((e3) => e3.finished)).then(() => {
    t2(true);
  }).catch(() => {
    t2(false);
  });
}), E = (e2, t2, a2, l2 = 0) => new Promise(async (n2, o2) => {
  if (!e2) return o2("node is null");
  await ((e3) => new Promise((t3) => {
    var _a;
    if (!e3) return t3(false);
    (_a = e3 == null ? void 0 : e3.getAnimations()) == null ? void 0 : _a.forEach((e4) => {
      e4.cancel();
    }), t3(true);
  }))(e2), e2.animate(t2, a2);
  const s2 = "number" == typeof a2 ? a2 : (a2 == null ? void 0 : a2.duration) || null;
  null != s2 && Number(s2) >= 0 ? setTimeout(() => {
    n2(true);
  }, Number(s2) - l2) : n2(true);
}), P = { hideTime: 200, showTime: 200, bgShow: async (e2) => {
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
} }, F = (e2) => Array.isArray(e2), R = (e2, t2, a2 = true) => {
  const l2 = (e3) => {
    const t3 = e3.toString().split(".");
    return t3[1] ? t3[1].length : 0;
  }, n2 = Math.max(l2(e2), l2(t2));
  return parseFloat((a2 ? e2 + t2 : e2 - t2).toFixed(n2));
};
function T(e2, t2, a2) {
  const l2 = document.documentElement.scrollTop, n2 = function(e3, t3, a3) {
    var l3 = window.innerWidth, n3 = window.innerHeight, o2 = t3.top > (a3 == null ? void 0 : a3.height), s2 = n3 - ((t3 == null ? void 0 : t3.top) + (a3 == null ? void 0 : a3.height)) > 0, i2 = t3.left > a3.width, r2 = l3 - (t3.left + a3.width) > 0;
    return o2 && s2 && i2 && r2 ? e3 : s2 ? i2 && r2 ? ["bottomRight", "bottomLeft", "bottom"].includes(e3) ? e3 : "bottomLeft" : i2 ? "bottomRight" : "bottomLeft" : i2 && r2 ? ["topLeft", "topRight", "top"].includes(e3) ? e3 : "topLeft" : i2 ? "topLeft" : "topRight";
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
const H = l({ name: "MDropdown", props: { placement: { type: String, default: "bottomLeft" }, trigger: { type: String, default: "click", validator: (e2) => ["hover", "click"].includes(e2) }, destroyOnHide: { type: Boolean, default: false }, disabled: Boolean, open: { type: Boolean, default: false }, toBody: { type: Boolean, default: true } }, setup(e2, { slots: l2 }) {
  const o2 = t(null), f2 = t(null), h2 = t(null), g2 = t(false), v2 = s({ top: "0", left: "0", waitChange: false, renderToDom: null }), y2 = t(false);
  let b2 = null;
  const w2 = a(() => !e2.destroyOnHide || g2.value);
  let x2 = null;
  function S2() {
    const t2 = N(x2), a2 = N(h2.value), { top: l3, left: n2 } = T(e2.placement, t2, a2);
    v2.top = `${l3}px`, v2.left = `${n2}px`, f2.value.style.minWidth = `${t2.width}px`;
  }
  function k2() {
    w2.value && S2();
  }
  async function B2() {
    g2.value = true, y2.value = true, b2 && (clearTimeout(b2), b2 = null), v2.waitChange = true, await new Promise((e3) => requestAnimationFrame(e3)), S2(), window.addEventListener("scroll", k2, false), P.cShow(h2.value), P.bgShow(f2.value), await V(h2.value).catch(() => {
    }), v2.waitChange = false;
  }
  function C2() {
    if (v2.waitChange || e2.disabled) return;
    !g2.value ? B2() : I2();
  }
  function z2() {
    v2.waitChange || e2.disabled || g2.value || B2();
  }
  function I2() {
    v2.waitChange || (y2.value && (clearTimeout(b2), b2 = null), y2.value = true, b2 = setTimeout(async () => {
      var e3;
      y2.value && (v2.waitChange = true, P.cHide(h2.value), P.bgHide(f2.value), await (e3 = 0, new Promise((t2) => setTimeout(t2, e3))), await V(h2.value).catch(() => {
      }), window.removeEventListener("scroll", k2, false), g2.value = false, v2.waitChange = false);
    }, 60));
  }
  function M2(e3) {
    const t2 = e3.target;
    var a2, l3;
    t2 && (a2 = o2.value, l3 = t2, a2 && l3 && (a2 === l3 || a2.contains && a2.contains(l3)) || I2());
  }
  function L2() {
    y2.value = true, b2 ? (clearTimeout(b2), b2 = null, g2.value = true) : (y2.value = false, g2.value = true);
  }
  function _2() {
    var _a, _b;
    window.addEventListener("click", M2, true), "click" === e2.trigger ? x2 == null ? void 0 : x2.addEventListener("click", C2, false) : (x2 == null ? void 0 : x2.addEventListener("mouseenter", z2, false), x2 == null ? void 0 : x2.addEventListener("mouseleave", I2, false), (_a = f2.value) == null ? void 0 : _a.addEventListener("mouseenter", L2, false), (_b = f2.value) == null ? void 0 : _b.addEventListener("mouseleave", I2, false));
  }
  function E2() {
    var _a, _b;
    x2 == null ? void 0 : x2.removeEventListener("click", C2, false), window.removeEventListener("click", M2, false), x2 == null ? void 0 : x2.removeEventListener("mouseenter", z2, false), x2 == null ? void 0 : x2.removeEventListener("mouseleave", I2, false), (_a = f2.value) == null ? void 0 : _a.removeEventListener("mouseenter", L2, false), (_b = f2.value) == null ? void 0 : _b.removeEventListener("mouseleave", I2, false);
  }
  return i(() => e2.trigger, () => {
    E2(), _2();
  }), r(() => {
    var _a;
    if (!document.querySelector("#m-inset__body")) {
      const e3 = document.createElement("div");
      e3.setAttribute("id", "m-inset__body"), (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(e3);
    }
  }), u(() => {
    var _a;
    x2 = 1 === ((_a = o2.value.children) == null ? void 0 : _a.length) ? o2.value.children[0] || null : o2.value || null, _2();
  }), c(() => {
    E2();
  }), () => n("div", null, [n("div", { class: "m-dropdown", ref: o2, style: { "pointer-events": v2.waitChange ? "none" : "all" } }, [l2.default && l2.default()]), n(d, { to: "#m-inset__body" }, { default: () => {
    var _a;
    return [w2.value && p(n("div", { class: "m-dropdown__content m-box-shadow", ref: f2, style: { "--top": v2.top, "--left": v2.left, "pointer-events": v2.waitChange ? "none" : "all" } }, [n("div", { class: "m-dropdown__body", ref: h2 }, [l2.content && ((_a = l2.content()) == null ? void 0 : _a.map((e3) => (e3.props = { ...e3.props }, e3)))])]), [[m, g2.value]])];
  } })]);
} }), A = l({ name: "MButtonGroup", props: { layout: { type: String, default: "x", validator: (e2) => ["x", "y"].includes(e2) }, size: String }, setup(e2, { slots: t2 }) {
  const { size: a2, zIndex: l2 } = x();
  return f(w, { size: e2.size || a2, zIndex: l2 }), () => {
    var _a;
    const a3 = (_a = t2.default) == null ? void 0 : _a.call(t2);
    return n("div", { class: ["m-button-group", "y" === e2.layout ? "m-button-layout-y" : "m-button-layout-x"] }, [a3]);
  };
} }), $ = l({ name: "MMenuItem", props: { disabled: Boolean, label: String }, emits: ["click"], setup(e2, { slots: t2, emit: a2 }) {
  function l2(t3) {
    if (e2.disabled) return t3.preventDefault(), void t3.stopPropagation();
    a2("click", t3);
  }
  return () => n("div", { class: ["m-menu__item", e2.disabled ? "is__disabled" : ""], "data-disabled": e2.disabled, "aria-disabled": e2.disabled, onClick: l2 }, [t2.default && t2.default() || e2.label]);
} });
const q = l({ name: "MTransition", props: { onEnter: Function, onLeave: Function }, setup: (e2, t2) => () => {
  const a2 = t2.slots.default && t2.slots.default();
  return n(h, { appear: false, onEnter: (t3, a3) => {
    var _a;
    return (_a = e2.onEnter) == null ? void 0 : _a.call(e2, t3, a3);
  }, onLeave: (t3, a3) => {
    var _a;
    return (_a = e2.onLeave) == null ? void 0 : _a.call(e2, t3, a3);
  }, css: false }, "function" == typeof (l2 = a2) || "[object Object]" === Object.prototype.toString.call(l2) && !g(l2) ? a2 : { default: () => [a2] });
  var l2;
} }), O = async ({ mask: e2, content: t2, wrapper: a2 }) => {
  E(e2, [{ opacity: 0 }, { opacity: 1 }], 120), E(a2, [{ transform: "scale(0.33)", offset: 0, opacity: 0.66 }, { transform: "scale(1)", offset: 0.33, opacity: 1 }, { transform: "scale(1)", offset: 1, opacity: 1 }], { duration: 500 }), await E(t2, [{ opacity: 0, offset: 0 }, { opacity: 0.25, offset: 0.35 }, { opacity: 1, offset: 1 }], { duration: 500 });
}, j = async ({ mask: e2, wrapper: t2, content: a2 }) => {
  E(e2, [{ opacity: 1 }, { opacity: 0 }], { duration: 240 }), E(a2, [{ opacity: 1, offset: 0 }, { opacity: 0, offset: 0.2 }, { opacity: 0, offset: 1 }], { duration: 240 }), await E(t2, [{ opacity: 1, offset: 0 }, { opacity: 0.88, offset: 0.33 }, { opacity: 0, offset: 1, transform: "scale(0.33)" }], { duration: 240 }, 20);
}, D = l({ name: "MDialog", components: { MButton: k }, props: { visible: { type: Boolean, default: false }, content: { type: String, default: "" }, className: String, title: { type: String, default: "" }, cancelBtnText: { type: String, default: "" }, okBtnText: { type: String, default: "" }, okBtnProps: { type: Object, default: () => ({ type: "primary" }) }, cancelBtnProps: { type: Object, default: () => ({ type: "default" }) }, width: { type: [Number, String], default: "50%" }, height: { type: [Number, String], default: "auto" }, showClose: { type: Boolean, default: true }, maskBackgroundColor: { type: String, default: "" }, fullscreen: { type: Boolean, default: false }, escHide: { type: Boolean, default: true }, maskHide: { type: Boolean, default: true }, target: { type: [String], default: "body" }, top: { type: String, default: "center" }, _onClose: Function }, emits: ["close"], setup(e2, l2) {
  const { wrapperRef: o2, bodyRef: s2, maskRef: i2, dialogRef: r2 } = { dialogRef: t(null), wrapperRef: t(null), maskRef: t(null), bodyRef: t(null) }, { contentStyle: u2, wrapperStyle: c2, bodyStyle: f2 } = ((e3) => ({ contentStyle: a(() => {
    const t2 = ("number" == typeof e3.width ? `${e3.width}px` : e3.width) || "auto", a2 = ("number" == typeof e3.height ? `${e3.height}px` : e3.height) || "auto";
    return e3.fullscreen ? { width: "100%", padding: "0px", margin: "0px", height: "100%" } : { width: t2, maxWidth: "100%", height: a2, margin: e3.top && "center" !== e3.top ? "0 auto" : "24px auto" };
  }), wrapperStyle: a(() => e3.fullscreen ? "width: 100%; height: 100%;" : "center" === e3.top ? "display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      " : `position:relative;top: ${e3.top};padding-bottom:24px;`), bodyStyle: a(() => "width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;") }))(e2), h2 = (t2) => {
    var _a;
    e2._onClose && ((_a = e2._onClose) == null ? void 0 : _a.call(e2, t2)), l2.emit("close", t2);
  }, g2 = (t2) => {
    ("Escape" === t2.code || 27 === t2.keyCode || "Escape" === t2.key) && e2.escHide && ((e3) => {
      if (!e3) return false;
      const t3 = document.querySelectorAll(".m-dialog[data-show='true']");
      if (t3.length > 0) return t3[t3.length - 1] === e3;
      return false;
    })(r2.value) && l2.emit("close", { type: "cancel" });
  }, y2 = async (t2, a2) => {
    await new Promise((e3) => requestAnimationFrame(e3));
    const l3 = "center";
    o2.value.style.setProperty("transform-origin", l3), s2.value.style.setProperty("transform-origin", l3), _('.m-dialog[data-show="true"]'), await O({ mask: i2.value, content: s2.value, wrapper: o2.value }), e2.escHide && document.addEventListener("keyup", g2), a2();
  }, b2 = async (e3, t2) => {
    await j({ mask: i2.value, content: s2.value, wrapper: o2.value }), _('.m-dialog[data-show="true"]'), document.removeEventListener("keyup", g2), t2();
  };
  return () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const t2 = (_b = (_a = l2.slots).default) == null ? void 0 : _b.call(_a), a2 = (_d = (_c = l2.slots).footer) == null ? void 0 : _d.call(_c), g3 = (_f = (_e = l2.slots).header) == null ? void 0 : _f.call(_e), w2 = (_h = (_g = l2.slots).body) == null ? void 0 : _h.call(_g);
    return n(d, { to: e2.target }, { default: () => [n(q, { onEnter: y2, onLeave: b2 }, { default: () => [p(n("div", { class: `m-dialog ${e2.className || ""}`, "data-show": e2.visible, ref: r2, style: { "--m-dialog-mask-color": e2.maskBackgroundColor } }, [n("section", { class: "m-dialog-mask", ref: i2 }, null), n("div", { class: "m-dialog-container", onClick: () => e2.maskHide && h2("cancel") }, [n("div", { style: c2.value }, [n("div", { class: "m-dialog-cover", style: u2.value }, [n("div", { class: "m-dialog-content", onClick: (e3) => e3.stopPropagation() }, [n("div", { class: "m-dialog-content__background", ref: o2 }, null), n("section", { class: "m-dialog-content__wrapper", ref: s2, style: f2.value }, [e2.showClose && n(k, { type: "text", shape: "square", size: "small", class: "m-dialog-content__close", onClick: () => h2("cancel") }, { default: () => [n("svg", { fill: "currentColor", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5090", width: "28", height: "28" }, [n("path", { d: "M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" }, null)])] }), g3 || e2.title && n("header", { class: "m-dialog__header" }, [n("span", { class: "m-dialog-title" }, [e2.title])]), w2 || n("main", { class: "m-dialog__body" }, [t2 || e2.content]), a2 || (e2.cancelBtnText || e2.okBtnText) && n("footer", { class: "m-dialog__footer" }, [e2.cancelBtnText && n(k, v(e2.cancelBtnProps, { onClick: () => h2("cancel") }), { default: () => [e2.cancelBtnText] }), e2.okBtnText && n(k, v(e2.okBtnProps, { onClick: () => h2("ok") }), { default: () => [e2.okBtnText] })])])])])])])]), [[m, e2.visible]])] })] });
  };
} }), Y = (e2) => {
  const t2 = (e2 == null ? void 0 : e2.title) || "", a2 = e2.width || 480, l2 = (e2 == null ? void 0 : e2.top) || "center";
  return { onConfirm: () => {
  }, onCancel: () => {
  }, okBtnText: (e2 == null ? void 0 : e2.okBtnText) || "确定", cancelBtnText: (e2 == null ? void 0 : e2.cancelBtnText) || "", okBtnProps: e2 == null ? void 0 : e2.okBtnProps, cancelBtnProps: e2 == null ? void 0 : e2.cancelBtnProps, content: "hello", className: "m-dialog-confirm", title: t2, width: a2, top: l2, escHide: false, maskHide: false, showClose: false, visible: true };
}, Z = async (e2) => {
  const t2 = document.createElement("div");
  let a2, l2, n2;
  document.body.appendChild(t2);
  const o2 = y(D, { ...Y(e2), target: t2, _onClose: async (s3) => {
    var _a, _b;
    "cancel" === s3 && e2.onCancel ? (_a = e2.onCancel) == null ? void 0 : _a.call(e2) : "ok" === s3 && e2.onConfirm && ((_b = e2.onConfirm) == null ? void 0 : _b.call(e2)), await j({ mask: a2, wrapper: n2, content: l2 }), o2.unmount(), t2.remove();
  } });
  o2.mount(t2), a2 = t2.querySelector(".m-dialog-mask"), l2 = t2.querySelector(".m-dialog-content__wrapper"), n2 = t2.querySelector(".m-dialog-content__background");
  let s2 = "center";
  n2.style.setProperty("transform-origin", s2), l2.style.setProperty("transform-origin", s2), O({ mask: a2, content: l2, wrapper: n2 });
}, W = Object.freeze({ open: (e2 = {}) => {
  Z(Object.assign({}, e2));
}, confirm: (e2 = {}) => {
  Z(Object.assign({}, e2, { okBtnType: "primary", cancelBtnText: "取消", cancelBtnProps: { type: "default" } }));
} }), G = (e2, a2) => {
  const l2 = t(e2.modelValue || e2.value);
  return i(() => e2.modelValue, (e3) => {
    l2.value = e3;
  }), i(() => e2.value, (e3) => {
    l2.value = e3;
  }), { value: l2, setValue: (t2) => {
    e2.disabled || e2.readonly || (l2.value = t2, a2("update:modelValue", t2), a2("change", t2));
  } };
}, X = (e2, t2) => {
  const { size: l2 } = x();
  return { classNames: a(() => {
    const a2 = ["m-input", `m-input-size-${e2.size || l2 || "small"}`];
    return e2.disabled && a2.push("is-disabled"), e2.readonly && a2.push("is-readonly"), t2.value && a2.push("is-focus"), a2;
  }) };
}, J = (e2) => ({ showLimitCount: a(() => e2.showLimitCount && e2.maxlength) }), K = (e2) => {
  const a2 = t(null), l2 = t(false);
  return { domRef: a2, isFocus: l2, setIsFocus: (e3) => {
    var _a, _b;
    l2.value = e3, e3 ? (_a = a2.value) == null ? void 0 : _a.focus() : (_b = a2.value) == null ? void 0 : _b.blur();
  } };
}, Q = l({ name: "MInput", components: { MIcon: S }, props: { value: [String, Number], modelValue: [String, Number], name: { type: String, default: "" }, placeholder: { type: String, default: "" }, type: { type: String, default: "text" }, size: String, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, prepend: { type: String, default: "" }, append: { type: String, default: "" }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, width: { type: [String, Number], default: "" }, autofocus: { type: Boolean, default: false }, autocomplete: { type: String, default: "off" }, maxlength: { type: [String, Number], default: "" }, minlength: { type: [String, Number], default: "" }, max: { type: [String, Number], default: "" }, min: { type: [String, Number], default: "" }, step: { type: [String, Number], default: "" }, pattern: { type: String, default: "" }, showLimitCount: { type: Boolean, default: false }, showPasswordIcon: { type: Boolean, default: false }, tabindex: [Number, String] }, emits: ["update:modelValue", "change", "focus", "blur"], exposed: ["focus", "blur"], setup(e2, { emit: l2, slots: o2, expose: s2 }) {
  const { value: i2, setValue: r2 } = G(e2, l2), { domRef: u2, isFocus: c2, setIsFocus: d2 } = K(), { classNames: p2 } = X(e2, c2), { type: m2, showPwdIcon: f2, isOpenEye: h2, toggleShowPwd: g2 } = ((e3) => {
    const l3 = t(false), n2 = t(e3.type), o3 = a(() => {
      var _a;
      return e3.showPasswordIcon && "password" === ((_a = e3.type) == null ? void 0 : _a.toLowerCase());
    });
    return { type: n2, isOpenEye: l3, showPwdIcon: o3, toggleShowPwd: () => {
      l3.value = !l3.value, n2.value = l3.value ? "text" : e3.type;
    } };
  })(e2), { showLimitCount: v2 } = J(e2);
  return s2({ focus: () => d2(true), blur: () => d2(false) }), () => {
    var _a, _b, _c, _d;
    const t2 = ((_a = o2 == null ? void 0 : o2.prefix) == null ? void 0 : _a.call(o2)) || e2.prefix, a2 = ((_b = o2 == null ? void 0 : o2.suffix) == null ? void 0 : _b.call(o2)) || e2.suffix, l3 = ((_c = o2 == null ? void 0 : o2.prepend) == null ? void 0 : _c.call(o2)) || e2.prepend, s3 = ((_d = o2 == null ? void 0 : o2.append) == null ? void 0 : _d.call(o2)) || e2.append, c3 = () => {
      var _a2;
      return n("div", { onClick: () => d2(true), style: { width: e2.width }, class: p2.value }, [t2 && n("div", { class: "m-input-prefix" }, [t2]), n("input", { class: "m-input-base", ref: u2, type: m2.value, disabled: e2.disabled, tabindex: e2.tabindex, placeholder: e2.placeholder, readonly: e2.readonly, value: i2.value, autofocus: e2.autofocus, autocomplete: e2.autocomplete, maxlength: e2.maxlength, max: e2.max, min: e2.min, step: e2.step, minlength: e2.minlength, name: e2.name, onInput: (e3) => {
        var _a3;
        return r2((_a3 = e3.target) == null ? void 0 : _a3.value);
      }, onBlur: () => d2(false), onFocus: () => d2(true) }, null), e2.clearable && i2.value && n("span", { class: "m-input-suffix-icon-wrapper m-clearable", onClick: () => r2("") }, [n(S, { name: "close-circle" }, null)]), f2.value && n("span", { onClick: g2, class: "m-input-suffix-icon-wrapper" }, [n(S, { name: h2.value ? "eye" : "eye-close" }, null)]), v2.value && n("span", { class: "m-input-limit-count" }, [`${((_a2 = i2.value) == null ? void 0 : _a2.length) || 0}/${e2.maxlength}`]), a2 && n("div", { class: "m-input-suffix" }, [a2])]);
    };
    return l3 || s3 ? n("div", { style: { width: e2.width }, class: { "m-input-wrapper": true, "has-prepend": l3, "has-append": s3 } }, [l3 && n("div", { class: "m-input-prepend" }, [l3]), c3(), s3 && n("div", { class: "m-input-append" }, [s3])]) : c3();
  };
} }), U = (e2, t2, l2) => {
  const n2 = a(() => t2.value >= e2.max), o2 = a(() => t2.value <= e2.min);
  return { increase: () => {
    if (n2.value || e2.disabled || e2.readonly) return;
    const a2 = parseFloat(e2.step) || 1, o3 = parseInt(e2.precision) || 0, s2 = (i2 = parseFloat(t2.value), R(i2, a2, true));
    var i2;
    s2 > e2.max ? l2(e2.max) : l2(s2.toFixed(o3));
  }, decrease: () => {
    if (o2.value || e2.disabled || e2.readonly) return;
    const a2 = parseFloat(e2.step) || 1, n3 = parseInt(e2.precision) || 0, s2 = (i2 = parseFloat(t2.value), R(i2, a2, false));
    var i2;
    s2 < e2.min ? l2(e2.min) : s2 > e2.max ? l2(e2.max) : l2(s2.toFixed(n3));
  }, decreaseDisabled: o2, increaseDisabled: n2 };
}, ee = l({ name: "MInputNumber", components: { MIcon: S }, props: { modelValue: Number, min: Number, max: Number, step: Number, disabled: Boolean, controlsPosition: { type: String, default: "" }, controls: { type: Boolean, default: true }, size: String, readonly: Boolean, placeholder: String, name: String, id: String, autofocus: Boolean, tabindex: Number, prefix: String, suffix: String, precision: Number }, emits: ["update:modelValue", "change", "blur", "focus"], setup(e2, { emit: t2, expose: l2, slots: s2 }) {
  const { domRef: i2, isFocus: r2, setIsFocus: u2 } = K(), { showControl: c2, isRight: d2 } = ((e3) => ({ showControl: a(() => !!e3.controls), isRight: a(() => "right" === e3.controlsPosition) }))(e2), { value: p2, setValue: m2 } = G(e2, t2), { classNames: f2 } = X(e2, r2), { increase: h2, decrease: g2, decreaseDisabled: v2, increaseDisabled: y2 } = U(e2, p2, m2);
  return l2({ focus: () => u2(true), blur: () => u2(false) }), () => {
    var _a, _b, _c, _d;
    const t3 = (_a = s2.decreaseIcon) == null ? void 0 : _a.call(s2), a2 = (_b = s2.increaseIcon) == null ? void 0 : _b.call(s2), l3 = s2.prefix ? (_c = s2.prefix) == null ? void 0 : _c.call(s2) : e2.prefix, r3 = s2.suffix ? (_d = s2.suffix) == null ? void 0 : _d.call(s2) : e2.suffix, b2 = () => n(o, null, [l3 && n("div", { class: "m-input-prefix" }, [l3]), n("input", { type: "number", name: e2.name, value: p2.value, autofocus: e2.autofocus, tabindex: e2.tabindex, class: "m-input-base", ref: i2, disabled: e2.disabled, placeholder: e2.placeholder, readonly: e2.readonly, max: e2.max, min: e2.min, step: e2.step, onInput: (e3) => {
      var _a2;
      return m2((_a2 = e3.target) == null ? void 0 : _a2.value);
    }, onBlur: () => u2(false), onFocus: () => u2(true) }, null), r3 && n("div", { class: "m-input-suffix" }, [r3])]);
    return n("div", { class: ["m-input-number", c2.value ? d2.value ? "has-right-control" : "has-control" : "", ...f2.value] }, [c2.value ? d2.value ? n("div", { class: "m-input-control-right" }, [b2(), n("div", { class: "m-input-right-control-wrapper" }, [n("span", { class: "m-input-control-top", onClick: h2, "data-disabled": y2.value }, [t3 || n(S, { name: "up" }, null)]), n("span", { class: "m-input-control-bottom", "data-disabled": v2.value, onClick: g2 }, [a2 || n(S, { name: "down" }, null)])])]) : n("div", { class: "m-input-control-default" }, [n("div", { class: "m-input-number-control-left", "data-disabled": v2.value, onClick: g2 }, [t3 || n(S, { name: "minus" }, null)]), b2(), n("div", { class: "m-input-number-control-right", "data-disabled": y2.value, onClick: h2 }, [a2 || n(S, { name: "plus" }, null)])]) : b2()]);
  };
} }), te = l({ name: "MTextarea", props: { modelValue: String, placeholder: String, disabled: Boolean, readonly: Boolean, maxlength: Number, minlength: Number, rows: [Number, String], cols: [Number, String], autofocus: Boolean, autocomplete: String, showLimitCount: Boolean }, emits: ["update:modelValue", "focus", "blur", "change"], setup(e2, { emit: t2 }) {
  const { domRef: l2, isFocus: o2, setIsFocus: s2 } = K(), { value: i2, setValue: r2 } = G(e2, t2), { showLimitCount: u2 } = J(e2), { classnames: c2 } = ((e3, t3, l3) => ({ classnames: a(() => {
    const a2 = ["m-textarea"];
    return e3.disabled && a2.push("is-disabled"), e3.readonly && a2.push("is-readonly"), l3.value && a2.push("is-focus"), t3.value && a2.push("is-limit"), a2;
  }) }))(e2, u2, o2);
  return () => {
    var _a;
    return n("div", { class: c2.value }, [n("textarea", { class: "m-textarea-content", ref: l2, rows: e2.rows, cols: e2.cols, value: i2.value, onInput: (e3) => r2(e3.target.value), onFocus: () => s2(true), onBlur: () => s2(false), disabled: e2.disabled, readonly: e2.readonly, placeholder: e2.placeholder, maxlength: e2.maxlength, minlength: e2.minlength, autofocus: e2.autofocus, autocomplete: e2.autocomplete }, null), u2.value && n("span", { class: "m-textarea-limit" }, [((_a = i2.value) == null ? void 0 : _a.length) || 0, b("/"), e2.maxlength])]);
  };
} });
function ae({ type: e2, iconSize: t2 = "24px" }) {
  switch (e2) {
    case "success":
      return n("svg", { class: "m-icon-svg", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: t2, height: t2 }, [n("path", { d: "M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" }, null), n("path", { d: "M701.866667 381.866667L448 637.866667 322.133333 512c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l149.333334 149.333333c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l277.333333-277.333333c12.8-12.8 12.8-32 0-44.8-14.933333-12.8-36.266667-12.8-49.066666-2.133333z" }, null)]);
    case "warning":
    case "danger":
      return n("svg", { class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: t2, height: t2 }, [n("path", { d: "M934.4 770.133333L605.866667 181.333333C586.666667 147.2 550.4 128 512 128c-38.4 0-74.666667 21.333333-93.866667 53.333333L89.6 770.133333c-19.2 34.133333-19.2 76.8 0 110.933334S145.066667 938.666667 183.466667 938.666667h657.066666c38.4 0 74.666667-21.333333 93.866667-57.6 19.2-34.133333 19.2-76.8 0-110.933334z m-55.466667 81.066667c-8.533333 14.933333-23.466667 23.466667-38.4 23.466667H183.466667c-14.933333 0-29.866667-8.533333-38.4-23.466667-8.533333-14.933333-8.533333-34.133333 0-49.066667L473.6 213.333333c8.533333-12.8 23.466667-21.333333 38.4-21.333333s29.866667 8.533333 38.4 21.333333l328.533333 588.8c8.533333 14.933333 8.533333 32 0 49.066667z" }, null), n("path", { d: "M512 746.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" }, null), n("path", { d: "M512 629.333333c17.066667 0 32-14.933333 32-32v-192c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v192c0 17.066667 14.933333 32 32 32z" }, null)]);
    default:
      return n("svg", { class: "m-icon-svg", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: t2, height: t2 }, [n("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "p-id": "16147" }, null), n("path", { d: "M512 336m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z", "p-id": "16148" }, null), n("path", { d: "M536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" }, null)]);
  }
}
const le = l({ name: "MAlert", props: { type: { type: String, default: "primary" }, iconSize: { type: String, default: "24px" }, title: { type: String, default: "" }, description: { type: String, default: "" }, showClose: { type: Boolean, default: false }, showIcon: { type: Boolean, default: true }, dark: { type: Boolean, default: false } }, emits: ["close"], setup(e2, { slots: a2, emit: l2 }) {
  const o2 = t(true), s2 = () => {
    o2.value = false, l2("close");
  };
  return () => {
    const t2 = a2.title ? a2.title() : e2.title, l3 = a2.default ? a2.default() : e2.description, i2 = a2.icon ? a2.icon() : n(ae, { type: e2.type, iconSize: e2.iconSize }, null);
    return n("div", { class: `m-alert m-alert-${e2.type} ${e2.dark ? "is-dark" : ""}`, style: { display: o2.value ? "block" : "none" } }, [n("main", { class: "m-alert-main" }, [e2.showIcon && i2 && n("div", { class: "m-alert-icon" }, [i2]), n("div", { class: "m-alert-content" }, [t2 && n("div", { class: "m-alert-title" }, [t2]), l3 && n("div", { class: "m-alert-description" }, [l3])]), e2.showClose && n("span", { class: "m-alert-close" }, [n(k, { onClick: s2, rightIcon: "close", type: "text", size: "mini", shape: "circle" }, null)])])]);
  };
} });
function ne({ checked: e2, indeterminate: t2 }) {
  return e2 ? n("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", role: "img", "aria-hidden": "true" }, [n("path", { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null)]) : t2 ? n("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", fill: "currentColor", "aria-hidden": "true" }, [n("path", { d: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null)]) : n("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", role: "img", "aria-hidden": "true" }, [n("path", { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, null)]);
}
const oe = l({ name: "MCheckbox", props: { size: String, label: { type: String, default: "" }, checked: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, indeterminate: { type: Boolean, default: false }, value: { type: [String, Number], default: "" }, modelValue: { type: [String, Number, Boolean, Array], default: false } }, emits: ["update:modelValue", "change", "update:indeterminate"], setup(e2, { emit: l2, slots: o2 }) {
  const { checked: s2, indeterminate: r2, toggle: u2, classNames: c2 } = ((e3, l3) => {
    var _a;
    const n2 = t(e3.indeterminate), o3 = t(F(e3.modelValue) ? (_a = e3.modelValue) == null ? void 0 : _a.includes(e3.value) : e3.modelValue || e3.checked || false), { size: s3 } = x(), r3 = a(() => {
      const t2 = ["m-checkbox", `m-checkbox-size-${e3.size || s3 || "small"}`];
      return e3.disabled && t2.push("m-checkbox-disabled"), o3.value && t2.push("m-checkbox-checked"), n2.value && t2.push("m-checkbox-indeterminate"), t2;
    });
    return i(() => [e3.checked, e3.indeterminate, e3.modelValue], () => {
      var _a2;
      o3.value = F(e3.modelValue) ? (_a2 = e3.modelValue) == null ? void 0 : _a2.includes(e3.value) : e3.modelValue || e3.checked || false, n2.value = e3.indeterminate;
    }), { toggle: () => {
      if (!e3.disabled && !e3.readonly) {
        if (F(e3.modelValue)) {
          const t2 = [...e3.modelValue];
          t2.includes(e3.value) ? (t2.splice(t2.indexOf(e3.value), 1), o3.value = false) : (t2.push(e3.value), o3.value = true), l3("update:modelValue", t2), l3("change", t2);
        } else o3.value = !o3.value, l3("update:modelValue", o3.value), l3("change", o3.value);
        n2.value = false, l3("update:indeterminate", n2.value);
      }
    }, indeterminate: n2, checked: o3, classNames: r3 };
  })(e2, l2);
  return () => {
    const t2 = o2.default ? o2.default() : e2.label;
    return n("div", { class: c2.value, "data-disabled": e2.disabled, "data-checked": s2.value, "data-indeterminate": r2.value, "data-value": e2.value, onClick: u2 }, [n("div", { class: "m-checkbox-wrapper" }, [n("span", { class: "m-checkbox-control-wrapper" }, [n("div", { class: "m-checkbox-control-main" }, [n("div", { class: "m-checkbox-control-inner" }, [ne({ checked: s2.value, indeterminate: r2.value })])])]), n("span", { class: "m-checkbox-label" }, [t2]), n("input", { type: "checkbox", class: "m-checkbox-input", checked: s2.value, disabled: e2.disabled, readonly: e2.readonly, value: e2.value }, null)])]);
  };
} }), se = l({ name: "MAvatar", components: { MIcon: S }, props: { src: { type: String, default: "" }, size: { type: String, default: "36px" }, alt: { type: String, default: "" }, srcSet: { type: String, default: "" }, fit: { type: String, default: "cover" }, icon: { type: String, default: "" }, shape: { type: String, default: "circle" }, loading: { type: String, default: "eager" } }, emits: ["error"], setup(e2, { slots: t2, emit: a2 }) {
  const l2 = (e3) => {
    a2("error", e3);
  };
  return () => {
    const a3 = t2.icon ? t2.icon() : e2.icon ? n(S, { name: e2.icon, class: "m-avatar-icon", size: String(0.6 * parseInt(e2.size)) + "px" }, null) : "", o2 = t2.default ? t2.default() : "";
    return n("div", { class: { "m-avatar": true, "m-avatar-shape-square": "square" === e2.shape, "m-avatar-shape-circle": "circle" === e2.shape }, style: { "--size": e2.size, "--shape": e2.shape } }, [a3 || (o2 || n("img", { src: e2.src, alt: e2.alt, srcset: e2.srcSet, class: "m-avatar-image", style: { "object-fit": e2.fit || "none" }, loading: e2.loading, width: e2.size, height: e2.size, onError: l2 }, null))]);
  };
} }), ie = [k, B, C, z, I, M, L, H, A, $, D, Q, S, le, oe, se, ee, te].map((e2) => (e2.install = function(t2) {
  t2.component(e2.name, e2);
}, e2)), re = { install(e2, t2) {
  e2.provide(w, t2 || { size: "small", zIndex: 1e3 }), ie.forEach((t3) => {
    e2.component(t3.name, t3);
  });
} };
export {
  W as Dialog,
  le as MAlert,
  z as MAnchor,
  se as MAvatar,
  M as MBreadcrumb,
  L as MBreadcrumbItem,
  k as MButton,
  A as MButtonGroup,
  oe as MCheckbox,
  I as MConfigProvider,
  D as MDialog,
  C as MDivider,
  H as MDropdown,
  S as MIcon,
  Q as MInput,
  ee as MInputNumber,
  te as MMTextarea,
  $ as MMenuItem,
  B as MSpace,
  re as default
};
//# sourceMappingURL=mostify-ui.js.map
