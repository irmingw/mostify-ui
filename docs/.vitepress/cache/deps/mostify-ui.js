import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createApp,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  isVNode,
  mergeProps,
  provide,
  ref,
  resolveComponent,
  vShow,
  watch,
  withDirectives
} from "./chunk-VJWGEPT5.js";

// node_modules/mostify-ui/dist/mostify-ui.js
var b = Symbol("mostify-provider-option");
var y = () => inject(b, { size: "small", zIndex: 1e3 });
var w = (e2) => {
  const l2 = ref(null);
  let o2 = null;
  return { setRipple: async (t2) => {
    if (!l2.value || e2.disabled || e2.loading) return;
    const s2 = l2.value.getBoundingClientRect();
    if (!s2) return;
    o2 || (o2 = document.createElement("div"));
    const a2 = o2.cloneNode();
    l2.value.appendChild(a2);
    const n2 = Math.max(s2.width, s2.height), i2 = n2 + "px", r2 = i2;
    let c2 = (t2.clientY - s2.top - n2 / 2).toFixed(0) + "px", d2 = (t2.clientX - s2.left - n2 / 2).toFixed(0) + "px";
    c2 = 0.5 * (s2.height - n2) + "px", Math.abs(s2.width - s2.height) < 12 && (d2 = 0.5 * (s2.width - n2) + "px"), a2.setAttribute("style", `width:${i2};height:${r2};top:${c2};left:${d2};`), a2.classList.add("m-ripple__item"), await new Promise((e3) => setTimeout(e3, 500)), a2.remove();
  }, rippleRef: l2 };
};
var x = (e2, t2, l2, o2, s2) => {
  let a2 = `${e2}-${t2}`;
  return l2 && (a2 += `-${l2}`), o2 && (a2 += `__${o2}`), s2 && (a2 += `--${s2}`), a2;
};
var S = (e2) => {
  const t2 = "m";
  return { namespace: t2, b: (l2 = "") => x(t2, e2, l2, "", ""), e: (l2) => l2 ? x(t2, e2, "", l2, "") : "", m: (l2) => l2 ? x(t2, e2, "", "", l2) : "", be: (l2, o2) => l2 && o2 ? x(t2, e2, l2, o2, "") : "", is: (e3, t3) => t3 ? `is-${e3}` : "" };
};
var z = (e2) => e2 ? (e2.install = (t2) => {
  t2.component(e2.name, e2);
}, e2) : e2;
var C = z(defineComponent({ name: "MButton", props: { type: String, size: String, shape: { type: String, default: "" }, disabled: Boolean, loading: Boolean, light: Boolean, block: { type: Boolean, default: false }, tabindex: { type: Number, default: 0 }, border: { type: Boolean, default: true }, borderStyle: { type: String, default: "solid" } }, emits: ["click", "focus", "blur"], setup(e2, { slots: o2, emit: n2 }) {
  const { showText: i2, btnRef: r2, btnSize: c2, handleEmitType: d2 } = ((e3, o3) => {
    const s2 = ref(null), { size: a2 } = y(), n3 = computed(() => e3.size || a2 || "small");
    return { showText: computed(() => !(e3.loading && ["circle", "square"].includes(e3.shape))), btnRef: s2, btnSize: n3, handleEmitType: function(t2, l2) {
      t2.preventDefault(), e3.loading || e3.disabled || o3(l2, t2);
    } };
  })(e2, n2), u2 = S("button"), { setRipple: p2, rippleRef: m2 } = w(e2);
  return () => {
    const t2 = o2.icon ? o2 == null ? void 0 : o2.icon() : "";
    return createVNode("button", { class: [u2.b(), u2.m(e2.type), u2.m(c2.value), u2.is("block", e2.block), u2.m(e2.shape), u2.is("light", e2.light), u2.is("loading", e2.loading), u2.is("disabled", e2.disabled)], style: { "--m-button-border-width": e2.border ? "1px" : "0", "--m-button-border-style": e2.borderStyle }, "aria-disabled": e2.disabled, tabindex: e2.tabindex, onMousedown: p2, ref: r2, type: "button", onClick: (e3) => d2(e3, "click"), onFocus: (e3) => d2(e3, "focus"), onBlur: (e3) => d2(e3, "blur") }, [!e2.loading && !e2.disabled && createVNode("div", { class: "m-ripple", ref: m2 }, null), createVNode("span", { class: [u2.e("content")] }, [e2.loading && (l2 = i2.value, createVNode("span", { class: "m-button__loading", style: { marginRight: l2 ? "8px" : 0 } }, [createVNode("svg", { viewBox: "0 0 1024 1024", width: "1em", height: "1em", class: "m-button__icon-loading" }, [createVNode("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z", fill: "currentColor" }, null)])])), i2.value && createVNode(Fragment, null, [t2 && createVNode("span", { class: [u2.e("icon")] }, [t2]), o2.default && o2.default()])])]);
    var l2;
  };
} }));
var B = z(defineComponent({ name: "MSpace", props: { size: { type: String, default: "" }, direction: { type: String, default: "horizontal" }, alignItems: { type: String, default: "flex-start" } }, setup(e2, { slots: t2 }) {
  const l2 = S("space");
  return () => {
    const o2 = t2.default ? t2.default() : [];
    return createVNode("div", { class: [l2.b(), l2.m(e2.direction)], style: { "--m-space-size": e2.size || "", "align-items": e2.alignItems || "" } }, [o2 == null ? void 0 : o2.map((e3, t3) => createVNode("div", { class: "m-space-item", key: t3 }, [e3]))]);
  };
} }));
var k = z(defineComponent({ name: "MDivider", props: { direction: { type: String, default: "horizontal" }, color: { type: String, default: "" }, size: { type: String, default: "12px" }, borderStyle: { type: String, default: "solid" } }, setup(e2) {
  const t2 = S("divider");
  return () => createVNode("div", { style: { "--m-divider-color": e2.color, "--m-divider-size": e2.size, "--m-divider-border-style": e2.borderStyle }, class: [t2.b(), t2.m(e2.direction)] }, null);
} }));
var I = defineComponent({ name: "MBreadcrumb", props: { separator: { type: String, default: "/" } }, setup(e2, { slots: t2 }) {
  const l2 = S("breadcrumb");
  return () => {
    var _a, _b;
    const o2 = (_a = t2.default) == null ? void 0 : _a.call(t2), n2 = t2.separator ? (_b = t2.separator) == null ? void 0 : _b.call(t2) : e2.separator;
    return createVNode("div", { class: [l2.b()] }, [o2 == null ? void 0 : o2.map((e3, t3) => createVNode(Fragment, null, [e3, t3 >= 0 && t3 < o2.length - 1 && createVNode("span", { class: l2.e("separator") }, [n2])]))]);
  };
} });
var M = defineComponent({ name: "MBreadcrumbItem", props: { label: { type: String, default: "" }, disabled: { type: Boolean, default: false }, href: { type: String, default: "" }, target: { type: String, default: "_blank" } }, setup(e2, { slots: t2 }) {
  const l2 = S("breadcrumb-item");
  return () => {
    const o2 = (t2 == null ? void 0 : t2.default) ? t2.default() : e2.label, a2 = e2.href && !e2.disabled;
    return createVNode("span", { class: [l2.b(), l2.is("disabled", e2.disabled), l2.is("link", a2)], "aria-disabled": e2.disabled }, [a2 ? createVNode("a", { class: [l2.e("link")], "aria-disabled": e2.disabled, href: e2.href, target: e2.target }, [o2]) : o2]);
  };
} });
z(I), z(M);
var V = z(defineComponent({ name: "MButtonGroup", props: { direction: { type: String, default: "horizontal" }, size: String }, setup(e2, { slots: t2 }) {
  const { size: l2, zIndex: o2 } = y(), a2 = S("button-group");
  return provide(b, { size: e2.size || l2, zIndex: o2 }), () => {
    var _a;
    const l3 = (_a = t2.default) == null ? void 0 : _a.call(t2);
    return createVNode("div", { class: [a2.b(), a2.m(e2.direction)] }, [l3]);
  };
} }));
var L = z(defineComponent({ name: "MTransition", props: { onEnter: Function, onLeave: Function }, setup: (e2, { slots: t2 }) => () => {
  const l2 = t2.default && t2.default();
  return createVNode(Transition, { appear: false, onEnter: (t3, l3) => {
    var _a;
    return (_a = e2.onEnter) == null ? void 0 : _a.call(e2, t3, l3);
  }, onLeave: (t3, l3) => {
    var _a;
    return (_a = e2.onLeave) == null ? void 0 : _a.call(e2, t3, l3);
  }, css: false }, "function" == typeof (o2 = l2) || "[object Object]" === Object.prototype.toString.call(o2) && !isVNode(o2) ? l2 : { default: () => [l2] });
  var o2;
} }));
var N = defineComponent({ name: "DialogContent", components: { MButton: C }, props: { show: Boolean, zIndex: Number, closeIcon: Boolean, title: String, width: String, fullscreen: Boolean, top: String, center: Boolean }, emits: ["close"], setup: (e2, { slots: t2, emit: l2 }) => () => {
  var _a;
  const o2 = (_a = t2.default) == null ? void 0 : _a.call(t2);
  return createVNode("div", { style: { "--m-content-wrapper-index": e2.zIndex, "--m-dialog-content-width": e2.width, "--m-dialog-content-top": e2.top }, onClick: (e3) => {
    e3.preventDefault(), l2("close", e3);
  }, class: { "m-dialog-content-wrapper": true, "m-dialog-content-fullscreen": e2.fullscreen, "m-dialog-content-center": e2.center } }, [createVNode("div", { onClick: (e3) => e3.stopPropagation(), class: ["m-dialog-content", e2.show ? "m-dialog-content-show" : "m-dialog-content-hide"] }, [createVNode("div", { class: "m-dialog-content-background" }, null), createVNode("div", { class: "m-dialog-content-body" }, [o2]), e2.closeIcon && createVNode(C, { class: "m-dialog__close", type: "text", shape: "circle", onClick: (e3) => l2("close", e3) }, { default: () => [createVNode("svg", { class: "m-icon_svg", viewBox: "0 0 1024 1024", version: "1.1", width: 18, height: 18, fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, [createVNode("path", { d: "M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z", "p-id": "9462" }, null)])] })])]);
} });
var T = z(defineComponent({ name: "MMask", props: { show: Boolean, zIndex: Number, bgColor: String, maskClose: Boolean, customClass: String, duration: { type: Number, default: 300 } }, emits: ["close"], setup: (e2, { emit: t2 }) => () => createVNode("div", { style: { "--m-mask-bg": e2.bgColor, "--m-mask-index": e2.zIndex || 1e3, "--m-mask-duration": `${e2.duration || 300}ms` }, onClick: (l2) => {
  l2.stopPropagation(), e2.maskClose && t2("close", l2);
}, class: ["m-mask", e2.show ? "m-mask-show" : "m-mask-close", e2.customClass] }, null) }));
var P = () => ({ setLockScroll: (e2) => {
  if (e2) !document.body.classList.contains("m-body-lock-scroll") && document.body.classList.add("m-body-lock-scroll");
  else {
    if (Array.from(document.querySelectorAll('div[role="dialog"][aria-modal="true"]')).length > 0) return;
    document.body.classList.remove("m-body-lock-scroll");
  }
} });
var F = z(defineComponent({ name: "MDialog", components: { MTransition: L, MMask: T, DialogContent: N }, props: { modelValue: { type: Boolean, default: false }, lockScroll: { type: Boolean, default: true }, customClass: String, title: String, width: { type: String, default: "500px" }, closeIcon: Boolean, closeDestroy: { type: Boolean, default: false }, maskBackgroundColor: String, fullscreen: Boolean, escapeClose: { type: Boolean, default: true }, maskClose: { type: Boolean, default: true }, appendTarget: { type: String, default: "body" }, top: { type: String, default: "80px" }, zIndex: Number, borderRadius: String, center: Boolean, duration: { type: Number, default: 300 } }, emits: ["update:modelValue", "change"], setup(e2, { emit: l2, slots: o2 }) {
  const { zIndex: a2 } = y(), n2 = ref(null), i2 = ref(e2.zIndex || a2 || 1e3), { setClose: r2, show: g2 } = ((e3, l3) => {
    const o3 = ref(e3.modelValue || e3.visible || false);
    return watch(() => e3.modelValue, (e4) => {
      o3.value = e4;
    }), { show: o3, setClose: (e4) => {
      e4.stopPropagation(), e4.preventDefault(), o3.value = false, l3("update:modelValue", false), l3("change", false);
    } };
  })(e2, l2), { setLockScroll: h2 } = P();
  ((e3, t2, l3, o3) => {
    const s2 = () => Array.from(document.querySelectorAll('.m-dialog[aria-modal="true"]')).pop() === o3.value, a3 = (e4) => {
      "Escape" === e4.key && s2() && l3(e4);
    };
    watch(t2, (t3) => {
      e3.escapeClose && (t3 ? document.addEventListener("keydown", a3) : s2() && document.removeEventListener("keydown", a3));
    });
  })(e2, g2, r2, n2);
  const f2 = async (e3, t2) => {
    h2(true), t2();
  }, v2 = async (t2, l3) => {
    await new Promise((t3) => setTimeout(t3, e2.duration || 300)), h2(false), l3();
  };
  return () => {
    var _a, _b, _c;
    const t2 = (_a = o2.default) == null ? void 0 : _a.call(o2), l3 = (_b = o2.footer) == null ? void 0 : _b.call(o2), a3 = ((_c = o2.header) == null ? void 0 : _c.call(o2)) || e2.title ? createVNode("header", { class: "m-dialog-header" }, [e2.title]) : null;
    return createVNode(Teleport, { to: e2.appendTarget || "body" }, { default: () => [createVNode(resolveComponent("m-transition"), { onEnter: f2, onLeave: v2 }, { default: () => [withDirectives(createVNode("div", { class: ["m-dialog", e2.customClass], ref: n2, style: { "--m-dialog-index": i2.value }, "aria-modal": g2.value, role: "dialog" }, [!e2.fullscreen && createVNode(T, { show: g2.value, zIndex: i2.value, maskClose: e2.maskClose, onClose: (e3) => {
      e3.preventDefault(), r2(e3);
    } }, null), createVNode(N, { show: g2.value, title: e2.title, closeIcon: e2.closeIcon, fullscreen: e2.fullscreen, width: e2.width, zIndex: e2.zIndex, top: e2.top, center: e2.center, onClose: r2 }, { default: () => [a3, createVNode("main", { class: "m-dialog-body" }, [t2]), l3 && createVNode("footer", { class: "m-dialog-footer" }, [l3])] })]), [[vShow, g2.value]])] })] });
  };
} }));
var R = z(defineComponent({ name: "MIcon", props: { name: { type: String, default: "" }, size: { type: String, default: "16px" }, color: { type: String, default: "currentColor" } }, setup(e2, { emit: t2 }) {
  const o2 = computed(() => `mostifyiconfont m-icon m-icon-${e2.name}`);
  return () => createVNode("i", { class: o2.value, onClick: (e3) => t2("click", e3), style: { "--m-icon-text-color": e2.color, "--m-icon-font-size": e2.size, lineHeight: "inherit" } }, null);
} }));
var _ = (e2, l2) => {
  const o2 = ref(e2.modelValue || e2.value);
  return watch(() => e2.modelValue, (e3) => {
    o2.value = e3;
  }), watch(() => e2.value, (e3) => {
    o2.value = e3;
  }), { value: o2, setValue: (t2) => {
    e2.disabled || e2.readonly || (o2.value = t2, l2("update:modelValue", t2), l2("change", t2));
  } };
};
var A = (e2) => ({ showLimitCount: computed(() => e2.showLimitCount && e2.maxlength) });
var E = (e2) => {
  const l2 = ref(null), o2 = ref(false);
  return { domRef: l2, isFocus: o2, setIsFocus: (e3) => {
    var _a, _b;
    o2.value = e3, e3 ? (_a = l2.value) == null ? void 0 : _a.focus() : (_b = l2.value) == null ? void 0 : _b.blur();
  } };
};
var $ = z(defineComponent({ name: "MInput", components: { MIcon: R }, props: { value: [String, Number], modelValue: [String, Number], name: { type: String, default: "" }, placeholder: { type: String, default: "" }, type: { type: String, default: "text" }, size: String, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, prepend: { type: String, default: "" }, append: { type: String, default: "" }, clearable: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, width: { type: String, default: "" }, autofocus: { type: Boolean, default: false }, autocomplete: { type: String, default: "off" }, maxlength: { type: [String, Number], default: "" }, minlength: { type: [String, Number], default: "" }, max: { type: [String, Number], default: "" }, min: { type: [String, Number], default: "" }, step: { type: [String, Number], default: "" }, pattern: { type: String, default: "" }, showLimitCount: { type: Boolean, default: false }, showPasswordIcon: { type: Boolean, default: false }, tabindex: [Number, String] }, emits: ["update:modelValue", "change", "focus", "blur"], exposed: ["focus", "blur"], setup(e2, { emit: o2, slots: a2, expose: n2 }) {
  const { value: i2, setValue: r2 } = _(e2, o2), { domRef: c2, isFocus: d2, setIsFocus: u2 } = E(), { type: p2, showPwdIcon: m2, isOpenEye: g2, toggleShowPwd: h2 } = ((e3) => {
    const o3 = ref(false), s2 = ref(e3.type), a3 = computed(() => {
      var _a;
      return e3.showPasswordIcon && "password" === ((_a = e3.type) == null ? void 0 : _a.toLowerCase());
    });
    return { type: s2, isOpenEye: o3, showPwdIcon: a3, toggleShowPwd: () => {
      o3.value = !o3.value, s2.value = o3.value ? "text" : e3.type;
    } };
  })(e2), { showLimitCount: f2 } = A(e2), { size: v2 } = y(), b2 = S("input");
  return n2({ focus: () => u2(true), blur: () => u2(false) }), () => {
    var _a, _b, _c, _d;
    const t2 = ((_a = a2 == null ? void 0 : a2.prefix) == null ? void 0 : _a.call(a2)) || e2.prefix, l2 = ((_b = a2 == null ? void 0 : a2.suffix) == null ? void 0 : _b.call(a2)) || e2.suffix, o3 = ((_c = a2 == null ? void 0 : a2.prepend) == null ? void 0 : _c.call(a2)) || e2.prepend, n3 = ((_d = a2 == null ? void 0 : a2.append) == null ? void 0 : _d.call(a2)) || e2.append, y2 = () => {
      var _a2;
      return createVNode("div", { onClick: () => u2(true), style: { width: e2.width }, class: [b2.b(), b2.m(e2.size || v2 || "small"), b2.is("focus", d2.value), b2.is("disabled", e2.disabled), b2.is("readonly", e2.readonly)] }, [t2 && createVNode("div", { class: [b2.e("prefix")] }, [t2]), createVNode("input", { class: b2.e("main"), ref: c2, type: p2.value, disabled: e2.disabled, tabindex: e2.tabindex, placeholder: e2.placeholder, readonly: e2.readonly, value: i2.value, autofocus: e2.autofocus, autocomplete: e2.autocomplete, maxlength: e2.maxlength, max: e2.max, min: e2.min, step: e2.step, minlength: e2.minlength, name: e2.name, onInput: (e3) => {
        var _a3;
        return r2((_a3 = e3.target) == null ? void 0 : _a3.value);
      }, onBlur: () => u2(false), onFocus: () => u2(true) }, null), e2.clearable && i2.value && createVNode("span", { class: [b2.e("base-icon"), b2.e("clear")], onClick: () => r2("") }, [createVNode(R, { name: "close-circle" }, null)]), m2.value && createVNode("span", { onClick: h2, class: [b2.e("base-icon")] }, [createVNode(R, { name: g2.value ? "eye" : "eye-close" }, null)]), f2.value && createVNode("span", { class: [b2.e("limit-count")] }, [`${((_a2 = i2.value) == null ? void 0 : _a2.length) || 0}/${e2.maxlength}`]), l2 && createVNode("div", { class: [b2.e("suffix")] }, [l2])]);
    };
    return o3 || n3 ? createVNode("div", { style: { width: e2.width }, class: [b2.b("wrapper"), b2.is("prepend", o3), b2.is("append", n3), b2.is("focus", d2.value), b2.is("disabled", e2.disabled), b2.is("readonly", e2.readonly)] }, [o3 && createVNode("div", { class: [b2.e("prepend")] }, [o3]), y2(), n3 && createVNode("div", { class: [b2.e("append")] }, [n3])]) : y2();
  };
} }));
var H = (e2) => Array.isArray(e2);
var D = (e2, t2, l2 = true) => {
  const o2 = (e3) => {
    const t3 = e3.toString().split(".");
    return t3[1] ? t3[1].length : 0;
  }, s2 = Math.max(o2(e2), o2(t2));
  return parseFloat((l2 ? e2 + t2 : e2 - t2).toFixed(s2));
};
var O = (e2, t2, o2) => {
  const s2 = computed(() => t2.value >= e2.max), a2 = computed(() => t2.value <= e2.min);
  return { increase: () => {
    if (s2.value || e2.disabled || e2.readonly) return;
    const l2 = parseFloat(e2.step) || 1, a3 = parseInt(e2.precision) || 0, n2 = (i2 = parseFloat(t2.value), D(i2, l2, true));
    var i2;
    n2 > e2.max ? o2(e2.max) : o2(n2.toFixed(a3));
  }, decrease: () => {
    if (a2.value || e2.disabled || e2.readonly) return;
    const l2 = parseFloat(e2.step) || 1, s3 = parseInt(e2.precision) || 0, n2 = (i2 = parseFloat(t2.value), D(i2, l2, false) || 0);
    var i2;
    n2 < e2.min ? o2(e2.min) : n2 > e2.max ? o2(e2.max) : o2(n2.toFixed(s3));
  }, decreaseDisabled: a2, increaseDisabled: s2 };
};
var j = z(defineComponent({ name: "MInputNumber", components: { MIcon: R }, props: { modelValue: Number, min: Number, max: Number, step: Number, disabled: Boolean, controlsPosition: { type: String, default: "" }, controls: { type: Boolean, default: true }, size: String, readonly: Boolean, placeholder: String, name: String, id: String, autofocus: Boolean, tabindex: Number, prefix: String, suffix: String, precision: Number, width: String }, emits: ["update:modelValue", "change", "blur", "focus"], setup(e2, { emit: t2, expose: o2, slots: n2 }) {
  const { domRef: i2, isFocus: r2, setIsFocus: c2 } = E(), { showControl: d2, isRight: u2 } = ((e3) => ({ showControl: computed(() => !!e3.controls), isRight: computed(() => "right" === e3.controlsPosition) }))(e2), { value: p2, setValue: m2 } = _(e2, t2), { increase: g2, decrease: h2, decreaseDisabled: f2, increaseDisabled: v2 } = O(e2, p2, m2), b2 = S("input-number");
  return o2({ focus: () => c2(true), blur: () => c2(false) }), () => {
    var _a, _b, _c, _d;
    const t3 = (_a = n2.decreaseIcon) == null ? void 0 : _a.call(n2), l2 = (_b = n2.increaseIcon) == null ? void 0 : _b.call(n2), o3 = n2.prefix ? (_c = n2.prefix) == null ? void 0 : _c.call(n2) : e2.prefix, y2 = n2.suffix ? (_d = n2.suffix) == null ? void 0 : _d.call(n2) : e2.suffix, w2 = () => createVNode(Fragment, null, [o3 && createVNode("div", { class: [b2.e("prefix")] }, [o3]), createVNode("input", { type: "number", name: e2.name, value: p2.value, autofocus: e2.autofocus, tabindex: e2.tabindex, class: [b2.e("input")], ref: i2, disabled: e2.disabled, placeholder: e2.placeholder, readonly: e2.readonly, max: e2.max, min: e2.min, step: e2.step, onInput: (e3) => {
      var _a2;
      return m2((_a2 = e3.target) == null ? void 0 : _a2.value);
    }, onBlur: () => c2(false), onFocus: () => c2(true) }, null), y2 && createVNode("div", { class: [b2.e("suffix")] }, [y2])]);
    return createVNode("div", { style: { width: e2.width ? e2.width : "auto" }, class: [b2.b(), b2.is("disabled", e2.disabled), b2.is("readonly", e2.readonly), b2.is("focus", r2.value)] }, [d2.value ? u2.value ? createVNode("div", { class: [b2.e("controlPositionRight")] }, [w2(), createVNode("div", { class: [b2.e("rightWrapper")] }, [createVNode("span", { class: [b2.e("rightTop"), b2.is("disabled", v2.value)], onClick: g2, "aria-disabled": v2.value }, [t3 || createVNode(R, { size: "0.9em", name: "up" }, null)]), createVNode("span", { class: [b2.e("split")] }, null), createVNode("span", { class: [b2.e("rightBottom"), b2.is("disabled", f2.value)], "aria-disabled": f2.value, onClick: h2 }, [l2 || createVNode(R, { size: "0.9em", name: "down" }, null)])])]) : createVNode("div", { class: [b2.e("control")] }, [createVNode("div", { class: [b2.e("control-left"), b2.is("disabled", f2.value)], "aria-disabled": f2.value, onClick: h2 }, [t3 || createVNode(R, { name: "minus" }, null)]), w2(), createVNode("div", { class: [b2.e("control-right"), b2.is("disabled", v2.value)], "aria-disabled": v2.value, onClick: g2 }, [l2 || createVNode(R, { name: "plus" }, null)])]) : w2()]);
  };
} }));
var Z = z(defineComponent({ name: "MTextarea", props: { modelValue: String, placeholder: String, disabled: Boolean, readonly: Boolean, maxlength: Number, minlength: Number, rows: [Number, String], cols: [Number, String], autofocus: Boolean, autocomplete: String, showLimitCount: Boolean }, emits: ["update:modelValue", "focus", "blur", "change"], setup(e2, { emit: t2 }) {
  const { domRef: l2, isFocus: o2, setIsFocus: a2 } = E(), { value: n2, setValue: i2 } = _(e2, t2), { showLimitCount: r2 } = A(e2), c2 = S("textarea");
  return () => {
    var _a;
    return createVNode("div", { class: [c2.b(), c2.is("limitCount", r2.value), c2.is("focus", o2.value), c2.is("disabled", e2.disabled), c2.is("readonly", e2.readonly)] }, [createVNode("textarea", { class: [c2.e("input")], ref: l2, rows: e2.rows, cols: e2.cols, value: n2.value, onInput: (e3) => i2(e3.target.value), onFocus: () => a2(true), onBlur: () => a2(false), disabled: e2.disabled, readonly: e2.readonly, placeholder: e2.placeholder, maxlength: e2.maxlength, minlength: e2.minlength, autofocus: e2.autofocus, autocomplete: e2.autocomplete }, null), r2.value && createVNode("span", { class: [c2.e("limit-count")] }, [((_a = n2.value) == null ? void 0 : _a.length) || 0, createTextVNode("/"), e2.maxlength])]);
  };
} }));
function q({ type: e2, iconSize: t2 = "24px" }) {
  switch (e2) {
    case "success":
      return createVNode("svg", { class: "m-icon-svg", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: t2, height: t2 }, [createVNode("path", { d: "M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" }, null), createVNode("path", { d: "M701.866667 381.866667L448 637.866667 322.133333 512c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l149.333334 149.333333c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l277.333333-277.333333c12.8-12.8 12.8-32 0-44.8-14.933333-12.8-36.266667-12.8-49.066666-2.133333z" }, null)]);
    case "warning":
    case "danger":
      return createVNode("svg", { class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: t2, height: t2 }, [createVNode("path", { d: "M934.4 770.133333L605.866667 181.333333C586.666667 147.2 550.4 128 512 128c-38.4 0-74.666667 21.333333-93.866667 53.333333L89.6 770.133333c-19.2 34.133333-19.2 76.8 0 110.933334S145.066667 938.666667 183.466667 938.666667h657.066666c38.4 0 74.666667-21.333333 93.866667-57.6 19.2-34.133333 19.2-76.8 0-110.933334z m-55.466667 81.066667c-8.533333 14.933333-23.466667 23.466667-38.4 23.466667H183.466667c-14.933333 0-29.866667-8.533333-38.4-23.466667-8.533333-14.933333-8.533333-34.133333 0-49.066667L473.6 213.333333c8.533333-12.8 23.466667-21.333333 38.4-21.333333s29.866667 8.533333 38.4 21.333333l328.533333 588.8c8.533333 14.933333 8.533333 32 0 49.066667z" }, null), createVNode("path", { d: "M512 746.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" }, null), createVNode("path", { d: "M512 629.333333c17.066667 0 32-14.933333 32-32v-192c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v192c0 17.066667 14.933333 32 32 32z" }, null)]);
    default:
      return createVNode("svg", { class: "m-icon-svg", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: t2, height: t2 }, [createVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "p-id": "16147" }, null), createVNode("path", { d: "M512 336m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z", "p-id": "16148" }, null), createVNode("path", { d: "M536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" }, null)]);
  }
}
var G = defineComponent({ name: "MAlert", props: { type: { type: String, default: "primary" }, iconSize: { type: String, default: "24px" }, title: { type: String, default: "" }, description: { type: String, default: "" }, showClose: { type: Boolean, default: false }, showIcon: { type: Boolean, default: true }, dark: { type: Boolean, default: false }, border: Boolean }, emits: ["close"], setup(e2, { slots: l2, emit: o2 }) {
  const a2 = ref(true), n2 = S("alert"), i2 = () => {
    a2.value = false, o2("close");
  };
  return () => {
    const t2 = l2.title ? l2.title() : e2.title, o3 = l2.default ? l2.default() : e2.description, r2 = l2.icon ? l2.icon() : createVNode(q, { type: e2.type, iconSize: e2.iconSize }, null);
    return createVNode("div", { class: [n2.b(), n2.m(e2.type), n2.is("dark", e2.dark), n2.is("center", !(t2 && o3)), n2.is("border", e2.border)], style: { display: a2.value ? "block" : "none" } }, [createVNode("main", { class: n2.e("wrapper") }, [e2.showIcon && r2 && createVNode("div", { class: n2.e("icon") }, [r2]), createVNode("div", { class: n2.e("content") }, [(r2 || t2) && createVNode("header", { class: n2.e("header") }, [t2 && createVNode("div", { class: n2.e("title") }, [t2])]), o3 && createVNode("div", { class: n2.e("description") }, [o3])]), e2.showClose && createVNode("span", { class: n2.e("close") }, [createVNode(C, { onClick: i2, icon: "close", type: "text", size: "mini", shape: "circle" }, null)])])]);
  };
} });
function W({ checked: e2, indeterminate: t2 }) {
  return e2 ? createVNode("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", role: "img", "aria-hidden": "true" }, [createVNode("path", { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null)]) : t2 ? createVNode("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", fill: "currentColor", "aria-hidden": "true" }, [createVNode("path", { d: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, null)]) : createVNode("svg", { class: "m-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", role: "img", "aria-hidden": "true" }, [createVNode("path", { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, null)]);
}
var X = z(defineComponent({ name: "MCheckbox", props: { size: String, label: { type: String, default: "" }, checked: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, indeterminate: { type: Boolean, default: false }, value: { type: [String, Number], default: "" }, modelValue: { type: [String, Number, Boolean, Array], default: false } }, emits: ["update:modelValue", "change", "update:indeterminate"], setup(e2, { emit: l2, slots: o2 }) {
  const { checked: a2, indeterminate: n2, toggle: i2 } = ((e3, l3) => {
    var _a;
    const o3 = ref(e3.indeterminate), s2 = ref(H(e3.modelValue) ? (_a = e3.modelValue) == null ? void 0 : _a.includes(e3.value) : e3.modelValue || e3.checked || false);
    return watch(() => [e3.checked, e3.indeterminate, e3.modelValue], () => {
      var _a2;
      s2.value = H(e3.modelValue) ? (_a2 = e3.modelValue) == null ? void 0 : _a2.includes(e3.value) : e3.modelValue || e3.checked || false, o3.value = e3.indeterminate;
    }), { toggle: () => {
      if (!e3.disabled && !e3.readonly) {
        if (H(e3.modelValue)) {
          const t2 = [...e3.modelValue];
          t2.includes(e3.value) ? (t2.splice(t2.indexOf(e3.value), 1), s2.value = false) : (t2.push(e3.value), s2.value = true), l3("update:modelValue", t2), l3("change", t2);
        } else s2.value = !s2.value, l3("update:modelValue", s2.value), l3("change", s2.value);
        o3.value = false, l3("update:indeterminate", o3.value);
      }
    }, indeterminate: o3, checked: s2 };
  })(e2, l2), r2 = S("checkbox"), { size: d2 } = y(), { rippleRef: u2, setRipple: p2 } = w(e2);
  return () => {
    const t2 = o2.default ? o2.default() : e2.label;
    return createVNode("div", { class: [r2.b(), r2.m(e2.size || d2 || "small"), r2.is("indeterminate", n2.value), r2.is("checked", a2.value), r2.is("readonly", e2.readonly), r2.is("disabled", e2.disabled)], "aria-disabled": e2.disabled, "aria-checked": a2.value, "aria-indeterminate": n2.value, onClick: i2 }, [createVNode("div", { class: [r2.e("wrapper")] }, [createVNode("span", { class: [r2.e("inner")], onMousedown: p2 }, [createVNode("div", { ref: u2, class: [r2.e("ripple")] }, null), createVNode("div", { class: [r2.e("control")] }, [W({ checked: a2.value, indeterminate: n2.value })])]), createVNode("span", { class: [r2.e("label")] }, [t2]), createVNode("input", { type: "checkbox", class: [r2.e("input")], checked: a2.value, disabled: e2.disabled, readonly: e2.readonly, value: e2.value }, null)])]);
  };
} }));
var Y = z(defineComponent({ name: "MAvatar", components: { MIcon: R }, props: { src: { type: String, default: "" }, size: { type: String, default: "36px" }, alt: { type: String, default: "" }, srcSet: { type: String, default: "" }, fit: { type: String, default: "cover" }, icon: { type: String, default: "" }, shape: { type: String, default: "circle" }, loading: { type: String, default: "eager" } }, emits: ["error"], setup(e2, { slots: t2, emit: l2 }) {
  const o2 = S("avatar"), a2 = (e3) => {
    l2("error", e3);
  };
  return () => {
    const l3 = t2.icon ? t2.icon() : e2.icon ? createVNode(R, { name: e2.icon, class: o2.e("icon"), size: String(0.6 * parseInt(e2.size)) + "px" }, null) : "", n2 = t2.default ? t2.default() : "";
    return createVNode("div", { class: [o2.b(), o2.m(e2.shape)], style: { "--m-avatar-size": e2.size } }, [l3 || (n2 || createVNode("img", { src: e2.src, alt: e2.alt, srcset: e2.srcSet, class: o2.e("image"), style: { "object-fit": e2.fit || "none" }, loading: e2.loading, width: e2.size, height: e2.size, onError: a2 }, null))]);
  };
} }));
var J = defineComponent({ name: "MsgIcon", props: { type: String, size: { type: Number, default: 24 } }, setup: (e2) => () => {
  switch (e2.type) {
    case "error":
      return createVNode("svg", { class: "m-message-icon m-message-icon-error", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: e2.size || 24, height: e2.size || 24 }, [createVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z", "p-id": "9714" }, null)]);
    case "warning":
      return createVNode("svg", { class: "m-message-icon m-message-icon-warning", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: e2.size || 24, height: e2.size || 24 }, [createVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z", "p-id": "9714" }, null)]);
    case "success":
      return createVNode("svg", { class: "m-message-icon m-message-icon-success", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: e2.size || 24, height: e2.size || 24 }, [createVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z", "p-id": "9967" }, null)]);
    default:
      return createVNode("svg", { class: "m-message-icon m-message-icon-info", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", width: e2.size || 24, height: e2.size || 24 }, [createVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" }, null)]);
  }
} });
var K = defineComponent({ name: "Content", components: { MMask: T, MButton: C, MsgIcon: J }, props: { title: String, message: String, icon: [Object, String], type: String, showClose: Boolean, customClass: String, show: Boolean, duration: Number, cancelText: String, confirmText: String, cancelButtonProp: Object, confirmButtonProp: Object, zIndex: Number, width: Number, iconSize: Number, iconColor: String, lockScroll: { type: Boolean, default: true }, showIcon: { type: Boolean, default: true } }, emits: ["close"], setup: (e2, { emit: t2 }) => () => createVNode("div", { class: ["m-message-box", e2.customClass], "aria-modal": e2.show, role: "dialog", style: { "--m-message-box-index": e2.zIndex || 1e3, "--m-message-box-width": `${e2.width || 420}px`, "--m-message-box-duration": `${e2.duration || 300}ms` } }, [createVNode(T, { show: e2.show, zIndex: e2.zIndex, duration: e2.duration }, null), createVNode("div", { class: ["m-message-wrapper", e2.show ? "m-is-show" : "m-is-close"] }, [createVNode("div", { class: "m-message-box-bg" }, null), createVNode("div", { class: "m-message-body" }, [e2.showIcon && createVNode("div", { class: "m-message-icon-wrapper", style: { color: e2.iconColor } }, [e2.icon ? e2.icon : createVNode(J, { size: e2.iconSize, type: e2.type }, null)]), createVNode("div", { class: "m-message-main" }, [e2.title && createVNode("header", { class: "m-message-title" }, [e2.title]), e2.message && createVNode("main", { class: "m-message-message" }, [e2.message]), (e2.cancelText || e2.confirmText) && createVNode("footer", { class: "m-message-footer" }, [e2.cancelText && createVNode(C, mergeProps(e2.cancelButtonProp, { onClick: () => t2("close", "cancel") }), { default: () => [e2.cancelText] }), e2.confirmText && createVNode(C, mergeProps(e2.confirmButtonProp, { onClick: () => t2("close", "confirm") }), { default: () => [e2.confirmText] })])])]), e2.showClose && createVNode("div", { class: "m-message-close", onClick: () => t2("close", "cancel") }, [createVNode(R, { name: "close" }, null)])])]) });
var Q = class {
  static alert(e2 = "", t2 = "", l2) {
    if (!t2 && !e2) return;
    const o2 = l2 || { callback: () => {
    }, confirmText: "", confirmButtonProp: { type: "primary" } };
    return function(e3, t3) {
      const l3 = document.createElement("div"), { setLockScroll: o3 } = P();
      l3.role = "message-box", document.body.appendChild(l3);
      let s2 = function() {
      }, a2 = function() {
      };
      return createApp({ data: () => ({ show: true, option: { title: e3.title, type: e3.type, message: e3.message, cancelText: e3.cancelText, customClass: e3.customClass, showClose: e3.showClose, cancelButtonProp: e3.cancelButtonProp, icon: e3.icon, iconColor: e3.iconColor, iconSize: e3.iconSize, confirmText: e3.confirmText, confirmButtonProp: e3.confirmButtonProp, duration: e3.duration, zIndex: e3.zIndex, width: e3.width, showIcon: e3.showIcon } }), methods: { close(e4) {
        try {
          t3 && t3(e4), this.destroyed();
        } catch (e5) {
        }
      }, update(e4) {
        Object.keys(this.option).forEach((t4) => {
          void 0 !== e4[t4] && (this.option[t4] = e4[t4]);
        });
      }, destroyed() {
        this.show = false, setTimeout(() => {
          l3.remove(), o3(false);
        }, e3.duration || 300);
      } }, mounted() {
        s2 = this.updateOption, a2 = this.destroyed;
      }, render() {
        return h(K, { ...this.option, onClose: this.close, show: this.show }, null);
      } }).mount(l3), o3(true), { update: s2, destroyed: a2 };
    }({ type: "primary", title: t2, message: e2, showIcon: false, showClose: false, confirmText: (o2 == null ? void 0 : o2.confirmText) || "确定", confirmButtonProp: o2.confirmButtonProp || { type: "primary" } }, o2 == null ? void 0 : o2.callback);
  }
};
var U = [C, B, k, I, M, V, F, $, R, G, X, Y, j, Z];
var ee = { install(e2, t2) {
  e2.provide(b, t2 || { size: "medium", zIndex: 1e3 }), U.forEach((t3) => {
    e2.component(t3.name, t3);
  });
} };
export {
  G as MAlert,
  Y as MAvatar,
  I as MBreadcrumb,
  M as MBreadcrumbItem,
  C as MButton,
  V as MButtonGroup,
  X as MCheckbox,
  F as MDialog,
  k as MDivider,
  R as MIcon,
  $ as MInput,
  j as MInputNumber,
  B as MSpace,
  Z as MTextarea,
  Q as MessageBox,
  ee as default
};
/*! Bundled license information:

mostify-ui/dist/mostify-ui.js:
  (* @license Mostify UI By <Irming>*)
*/
//# sourceMappingURL=mostify-ui.js.map
