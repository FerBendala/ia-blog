import { u as y, c as oe, a as O, b as j, d as ke, e as Re, f as S, R as Ve, g as _, C as U, i as B, h as ae, F as Pe, j as N, k as Q, l as Ne, m as Te, n as V, o as l, H as Ue, p as De, q as Oe, P as Z, r as ie, S as Be, N as z, s as J, M as W, t as X, A as Y, v as ze, w as qe, L as le, B as ce, x as K, y as de } from "./index-bf902976.mjs";
function k() {
  return k = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, k.apply(this, arguments);
}
function D(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(n) {
    if (e == null || e(n), t === !1 || !n.defaultPrevented)
      return r == null ? void 0 : r(n);
  };
}
function He(e, r) {
  typeof e == "function" ? e(r) : e != null && (e.current = r);
}
function ue(...e) {
  return (r) => e.forEach(
    (t) => He(t, r)
  );
}
function fe(...e) {
  return y(ue(...e), e);
}
function Ke(e, r = []) {
  let t = [];
  function o(s, i) {
    const a = /* @__PURE__ */ oe(i), u = t.length;
    t = [
      ...t,
      i
    ];
    function v($) {
      const { scope: p, children: x, ...b } = $, C = (p == null ? void 0 : p[e][u]) || a, w = O(
        () => b,
        Object.values(b)
      );
      return /* @__PURE__ */ j(C.Provider, {
        value: w
      }, x);
    }
    function E($, p) {
      const x = (p == null ? void 0 : p[e][u]) || a, b = ke(x);
      if (b)
        return b;
      if (i !== void 0)
        return i;
      throw new Error(`\`${$}\` must be used within \`${s}\``);
    }
    return v.displayName = s + "Provider", [
      v,
      E
    ];
  }
  const n = () => {
    const s = t.map((i) => /* @__PURE__ */ oe(i));
    return function(a) {
      const u = (a == null ? void 0 : a[e]) || s;
      return O(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: u
          }
        }),
        [
          a,
          u
        ]
      );
    };
  };
  return n.scopeName = e, [
    o,
    Ge(n, ...r)
  ];
}
function Ge(...e) {
  const r = e[0];
  if (e.length === 1)
    return r;
  const t = () => {
    const o = e.map(
      (n) => ({
        useScope: n(),
        scopeName: n.scopeName
      })
    );
    return function(s) {
      const i = o.reduce((a, { useScope: u, scopeName: v }) => {
        const $ = u(s)[`__scope${v}`];
        return {
          ...a,
          ...$
        };
      }, {});
      return O(
        () => ({
          [`__scope${r.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return t.scopeName = r.scopeName, t;
}
const Qe = globalThis != null && globalThis.document ? Re : () => {
}, Ze = Ve["useId".toString()] || (() => {
});
let Je = 0;
function We(e) {
  const [r, t] = S(Ze());
  return Qe(() => {
    e || t(
      (o) => o ?? String(Je++)
    );
  }, [
    e
  ]), e || (r ? `radix-${r}` : "");
}
const me = /* @__PURE__ */ _((e, r) => {
  const { children: t, ...o } = e, n = U.toArray(t), s = n.find(Ye);
  if (s) {
    const i = s.props.children, a = n.map((u) => u === s ? U.count(i) > 1 ? U.only(null) : /* @__PURE__ */ B(i) ? i.props.children : null : u);
    return /* @__PURE__ */ j(G, k({}, o, {
      ref: r
    }), /* @__PURE__ */ B(i) ? /* @__PURE__ */ ae(i, void 0, a) : null);
  }
  return /* @__PURE__ */ j(G, k({}, o, {
    ref: r
  }), t);
});
me.displayName = "Slot";
const G = /* @__PURE__ */ _((e, r) => {
  const { children: t, ...o } = e;
  return /* @__PURE__ */ B(t) ? /* @__PURE__ */ ae(t, {
    ...et(o, t.props),
    ref: r ? ue(r, t.ref) : t.ref
  }) : U.count(t) > 1 ? U.only(null) : null;
});
G.displayName = "SlotClone";
const Xe = ({ children: e }) => /* @__PURE__ */ j(Pe, null, e);
function Ye(e) {
  return /* @__PURE__ */ B(e) && e.type === Xe;
}
function et(e, r) {
  const t = {
    ...r
  };
  for (const o in r) {
    const n = e[o], s = r[o];
    /^on[A-Z]/.test(o) ? n && s ? t[o] = (...a) => {
      s(...a), n(...a);
    } : n && (t[o] = n) : o === "style" ? t[o] = {
      ...n,
      ...s
    } : o === "className" && (t[o] = [
      n,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...t
  };
}
const tt = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ee = tt.reduce((e, r) => {
  const t = /* @__PURE__ */ _((o, n) => {
    const { asChild: s, ...i } = o, a = s ? me : r;
    return N(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ j(a, k({}, i, {
      ref: n
    }));
  });
  return t.displayName = `Primitive.${r}`, {
    ...e,
    [r]: t
  };
}, {}), [te, Nt] = Ke("Form"), ve = "Form", [rt, ge] = te(ve), [ot, nt] = te(ve), st = /* @__PURE__ */ _((e, r) => {
  const { __scopeForm: t, onClearServerErrors: o = () => {
  }, ...n } = e, s = Q(null), i = fe(r, s), [a, u] = S({}), v = y(
    (d) => a[d],
    [
      a
    ]
  ), E = y(
    (d, f) => u((m) => {
      var g;
      return {
        ...m,
        [d]: {
          ...(g = m[d]) !== null && g !== void 0 ? g : {},
          ...f
        }
      };
    }),
    []
  ), $ = y((d) => {
    u(
      (f) => ({
        ...f,
        [d]: void 0
      })
    ), c(
      (f) => ({
        ...f,
        [d]: {}
      })
    );
  }, []), [p, x] = S({}), b = y((d) => {
    var f;
    return (f = p[d]) !== null && f !== void 0 ? f : [];
  }, [
    p
  ]), C = y((d, f) => {
    x((m) => {
      var g;
      return {
        ...m,
        [d]: [
          ...(g = m[d]) !== null && g !== void 0 ? g : [],
          f
        ]
      };
    });
  }, []), w = y((d, f) => {
    x((m) => {
      var g;
      return {
        ...m,
        [d]: ((g = m[d]) !== null && g !== void 0 ? g : []).filter(
          (L) => L.id !== f
        )
      };
    });
  }, []), [A, c] = S({}), h = y((d) => {
    var f;
    return (f = A[d]) !== null && f !== void 0 ? f : {};
  }, [
    A
  ]), F = y((d, f) => {
    c((m) => {
      var g;
      return {
        ...m,
        [d]: {
          ...(g = m[d]) !== null && g !== void 0 ? g : {},
          ...f
        }
      };
    });
  }, []), [I, M] = S({}), T = y((d, f) => {
    M((m) => {
      const g = new Set(m[d]).add(f);
      return {
        ...m,
        [d]: g
      };
    });
  }, []), P = y((d, f) => {
    M((m) => {
      const g = new Set(m[d]);
      return g.delete(f), {
        ...m,
        [d]: g
      };
    });
  }, []), R = y((d) => {
    var f;
    return Array.from((f = I[d]) !== null && f !== void 0 ? f : []).join(" ") || void 0;
  }, [
    I
  ]);
  return /* @__PURE__ */ j(rt, {
    scope: t,
    getFieldValidity: v,
    onFieldValidityChange: E,
    getFieldCustomMatcherEntries: b,
    onFieldCustomMatcherEntryAdd: C,
    onFieldCustomMatcherEntryRemove: w,
    getFieldCustomErrors: h,
    onFieldCustomErrorsChange: F,
    onFieldValiditionClear: $
  }, /* @__PURE__ */ j(ot, {
    scope: t,
    onFieldMessageIdAdd: T,
    onFieldMessageIdRemove: P,
    getFieldDescription: R
  }, /* @__PURE__ */ j(ee.form, k({}, n, {
    ref: i,
    onInvalid: D(e.onInvalid, (d) => {
      const f = $e(d.currentTarget);
      f === d.target && f.focus(), d.preventDefault();
    }),
    onSubmit: D(e.onSubmit, o, {
      checkForDefaultPrevented: !1
    }),
    onReset: D(e.onReset, o)
  }))));
}), pe = "FormField", [at, it] = te(pe), lt = /* @__PURE__ */ _((e, r) => {
  const { __scopeForm: t, name: o, serverInvalid: n = !1, ...s } = e, a = ge(pe, t).getFieldValidity(o), u = We();
  return /* @__PURE__ */ j(at, {
    scope: t,
    id: u,
    name: o,
    serverInvalid: n
  }, /* @__PURE__ */ j(ee.div, k({
    "data-valid": he(a, n),
    "data-invalid": xe(a, n)
  }, s, {
    ref: r
  })));
}), q = "FormControl", ct = /* @__PURE__ */ _((e, r) => {
  const { __scopeForm: t, ...o } = e, n = ge(q, t), s = it(q, t), i = nt(q, t), a = Q(null), u = fe(r, a), v = o.name || s.name, E = o.id || s.id, $ = n.getFieldCustomMatcherEntries(v), { onFieldValidityChange: p, onFieldCustomErrorsChange: x, onFieldValiditionClear: b } = n, C = y(async (c) => {
    if (pt(c.validity)) {
      const m = H(c.validity);
      p(v, m);
      return;
    }
    const h = c.form ? new FormData(c.form) : new FormData(), F = [
      c.value,
      h
    ], I = [], M = [];
    $.forEach((m) => {
      mt(m, F) ? M.push(m) : vt(m) && I.push(m);
    });
    const T = I.map(({ id: m, match: g }) => [
      m,
      g(...F)
    ]), P = Object.fromEntries(T), R = Object.values(P).some(Boolean), d = R;
    c.setCustomValidity(d ? ne : "");
    const f = H(c.validity);
    if (p(v, f), x(v, P), !R && M.length > 0) {
      const m = M.map(
        ({ id: Ie, match: Me }) => Me(...F).then(
          (Le) => [
            Ie,
            Le
          ]
        )
      ), g = await Promise.all(m), L = Object.fromEntries(g), Se = Object.values(L).some(Boolean);
      c.setCustomValidity(Se ? ne : "");
      const _e = H(c.validity);
      p(v, _e), x(v, L);
    }
  }, [
    $,
    v,
    x,
    p
  ]);
  N(() => {
    const c = a.current;
    if (c) {
      const h = () => C(c);
      return c.addEventListener("change", h), () => c.removeEventListener("change", h);
    }
  }, [
    C
  ]);
  const w = y(() => {
    const c = a.current;
    c && (c.setCustomValidity(""), b(v));
  }, [
    v,
    b
  ]);
  N(() => {
    var c;
    const h = (c = a.current) === null || c === void 0 ? void 0 : c.form;
    if (h)
      return h.addEventListener("reset", w), () => h.removeEventListener("reset", w);
  }, [
    w
  ]), N(() => {
    const c = a.current, h = c == null ? void 0 : c.closest("form");
    if (h && s.serverInvalid) {
      const F = $e(h);
      F === c && F.focus();
    }
  }, [
    s.serverInvalid
  ]);
  const A = n.getFieldValidity(v);
  return /* @__PURE__ */ j(ee.input, k({
    "data-valid": he(A, s.serverInvalid),
    "data-invalid": xe(A, s.serverInvalid),
    "aria-invalid": s.serverInvalid ? !0 : void 0,
    "aria-describedby": i.getFieldDescription(v),
    title: ""
  }, o, {
    ref: u,
    id: E,
    name: v,
    onInvalid: D(e.onInvalid, (c) => {
      const h = c.currentTarget;
      C(h);
    }),
    onChange: D(e.onChange, (c) => {
      w();
    })
  }));
}), ne = "This value is not valid";
function H(e) {
  const r = {};
  for (const t in e)
    r[t] = e[t];
  return r;
}
function dt(e) {
  return e instanceof HTMLElement;
}
function ut(e) {
  return "validity" in e;
}
function ft(e) {
  return ut(e) && (e.validity.valid === !1 || e.getAttribute("aria-invalid") === "true");
}
function $e(e) {
  const r = e.elements, [t] = Array.from(r).filter(dt).filter(ft);
  return t;
}
function mt(e, r) {
  return e.match.constructor.name === "AsyncFunction" || gt(e.match, r);
}
function vt(e) {
  return e.match.constructor.name === "Function";
}
function gt(e, r) {
  return e(...r) instanceof Promise;
}
function pt(e) {
  let r = !1;
  for (const t in e) {
    const o = t;
    if (o !== "valid" && o !== "customError" && e[o]) {
      r = !0;
      break;
    }
  }
  return r;
}
function he(e, r) {
  if ((e == null ? void 0 : e.valid) === !0 && !r)
    return !0;
}
function xe(e, r) {
  if ((e == null ? void 0 : e.valid) === !1 || r)
    return !0;
}
const se = st, $t = lt, ht = ct, xt = ({
  type: e = "text",
  inputRef: r,
  title: t,
  hideTitle: o,
  value: n,
  error: s,
  placeholder: i,
  rightPlaceholder: a,
  hint: u,
  onChange: v,
  onFocus: E,
  onBlur: $,
  clearBg: p = !1,
  className: x = "",
  maxLength: b,
  containerClassName: C = "",
  hintClassName: w = "",
  unstyled: A = !1,
  disabled: c,
  ...h
}) => {
  const F = Ne(), { setFocusState: I } = Te(), M = (L) => {
    E == null || E(L), I(!0);
  }, T = (L) => {
    $ == null || $(L), I(!1);
  }, P = V(
    "relative order-2 flex w-full items-center",
    t && !o && "mt-1.5"
  ), R = !A && V(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    s ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    c && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), d = !A && V(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    c ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    a ? "w-0 grow rounded-l-lg" : "rounded-lg",
    x
  ), f = !A && V(
    "z-[1] order-3 rounded-r-lg",
    a ? typeof a == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let m = /* @__PURE__ */ l.jsx(l.Fragment, {});
  const g = /* @__PURE__ */ l.jsx(
    "input",
    {
      ref: r,
      className: d || x,
      disabled: c,
      id: F,
      maxLength: b,
      placeholder: i,
      type: e,
      value: n,
      onBlur: T,
      onChange: v,
      onFocus: M,
      ...h
    }
  );
  return m = /* @__PURE__ */ l.jsx($t, { name: F, asChild: !0, children: /* @__PURE__ */ l.jsxs("div", { className: P, children: [
    /* @__PURE__ */ l.jsx(ht, { asChild: !0, children: g }),
    !A && !p && /* @__PURE__ */ l.jsx("div", { className: R || "" }),
    a && /* @__PURE__ */ l.jsx("span", { className: f || "", children: a })
  ] }) }), w = V(
    "order-3",
    w
  ), C = V(
    "flex flex-col",
    C
  ), t || u ? /* @__PURE__ */ l.jsx(se, { asChild: !0, children: /* @__PURE__ */ l.jsxs("div", { className: C, children: [
    m,
    t && /* @__PURE__ */ l.jsx(Ue, { className: o ? "sr-only" : "order-1", htmlFor: F, useLabelTag: !0, children: t }),
    u && /* @__PURE__ */ l.jsx(De, { className: w, color: s ? "red" : "default", children: u })
  ] }) }) : /* @__PURE__ */ l.jsx(se, { asChild: !0, children: m });
};
function bt(e) {
  const r = Q(e);
  return N(() => {
    r.current = e;
  }), O(() => (...t) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...t);
  }, []);
}
var re = "Avatar", [yt, Tt] = Oe(re), [Ct, be] = yt(re), ye = _(
  (e, r) => {
    const { __scopeAvatar: t, ...o } = e, [n, s] = S("idle");
    return /* @__PURE__ */ l.jsx(
      Ct,
      {
        scope: t,
        imageLoadingStatus: n,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ l.jsx(Z.span, { ...o, ref: r })
      }
    );
  }
);
ye.displayName = re;
var Ce = "AvatarImage", we = _(
  (e, r) => {
    const { __scopeAvatar: t, src: o, onLoadingStatusChange: n = () => {
    }, ...s } = e, i = be(Ce, t), a = wt(o), u = bt((v) => {
      n(v), i.onImageLoadingStatusChange(v);
    });
    return ie(() => {
      a !== "idle" && u(a);
    }, [a, u]), a === "loaded" ? /* @__PURE__ */ l.jsx(Z.img, { ...s, ref: r, src: o }) : null;
  }
);
we.displayName = Ce;
var Fe = "AvatarFallback", Ee = _(
  (e, r) => {
    const { __scopeAvatar: t, delayMs: o, ...n } = e, s = be(Fe, t), [i, a] = S(o === void 0);
    return N(() => {
      if (o !== void 0) {
        const u = window.setTimeout(() => a(!0), o);
        return () => window.clearTimeout(u);
      }
    }, [o]), i && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l.jsx(Z.span, { ...n, ref: r }) : null;
  }
);
Ee.displayName = Fe;
function wt(e) {
  const [r, t] = S("idle");
  return ie(() => {
    if (!e) {
      t("error");
      return;
    }
    let o = !0;
    const n = new window.Image(), s = (i) => () => {
      o && t(i);
    };
    return t("loading"), n.onload = s("loaded"), n.onerror = s("error"), n.src = e, () => {
      o = !1;
    };
  }, [e]), r;
}
var Ft = ye, Et = we, jt = Ee;
const je = ({ image: e, label: r, labelColor: t, bgColor: o, size: n, className: s }) => {
  let i = "", a = " -mb-2 ";
  switch (n) {
    case "sm":
      i = " w-7 h-7 text-sm ";
      break;
    case "lg":
      i = " w-12 h-12 text-xl ";
      break;
    case "xl":
      i = " w-16 h-16 text-2xl ", a = " -mb-3 ";
      break;
    case "2xl":
      i = " w-20 h-20 text-2xl ", a = " -mb-3 ";
      break;
    default:
      i = " w-10 h-10 text-md ";
      break;
  }
  return /* @__PURE__ */ l.jsxs(Ft, { className: `relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle ${i}`, children: [
    e ? /* @__PURE__ */ l.jsx(Et, { className: `absolute z-20 h-full w-full object-cover ${s && s}`, src: e }) : /* @__PURE__ */ l.jsx("span", { className: `${t && `text-${t}`} relative z-10 inline-flex h-full w-full items-center justify-center p-2 font-semibold ${s && s}`, style: o ? { backgroundColor: o } : {}, children: r }),
    /* @__PURE__ */ l.jsx(jt, { asChild: !0, children: /* @__PURE__ */ l.jsx(Be, { className: `${a} absolute z-0 h-full w-full text-grey-300` }) })
  ] });
}, Ae = ({
  id: e,
  title: r,
  detail: t,
  action: o,
  hideActions: n,
  avatar: s,
  className: i,
  testId: a,
  separator: u = !0,
  bgOnHover: v = !0,
  paddingRight: E = !0,
  onClick: $,
  children: p
}) => {
  const x = (C) => {
    $ == null || $(C);
  }, b = V(
    "group/list-item flex items-center justify-between",
    v && "hover:bg-gradient-to-r hover:from-white hover:to-grey-50 dark:hover:from-black dark:hover:to-grey-950",
    u ? "border-b border-grey-100 last-of-type:border-b-transparent hover:border-grey-200 dark:border-grey-900 dark:hover:border-grey-800" : "border-y border-transparent hover:border-grey-200 first-of-type:hover:border-t-transparent dark:hover:border-grey-800",
    i
  );
  return /* @__PURE__ */ l.jsxs("div", { className: b, "data-testid": a, children: [
    p || /* @__PURE__ */ l.jsxs("div", { className: `flex grow items-center gap-3 ${$ && "cursor-pointer"}`, onClick: x, children: [
      s && s,
      /* @__PURE__ */ l.jsxs("div", { className: "flex grow flex-col py-3 pr-6", id: e, children: [
        /* @__PURE__ */ l.jsx("span", { children: r }),
        t && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-grey-700", children: t })
      ] })
    ] }),
    o && /* @__PURE__ */ l.jsx("div", { className: `visible py-3 md:pl-6 ${E && "md:pr-6"} ${n ? "group-hover/list-item:visible md:invisible" : ""}`, children: o })
  ] });
};
function At(e, r, t) {
  var a;
  const n = (a = X().data) == null ? void 0 : a.site, s = (n == null ? void 0 : n.url) ?? window.location.origin, i = new Y(
    new URL(s),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    e
  );
  return ze({
    async mutationFn(u) {
      return i.follow(u);
    },
    onSuccess: r,
    onError: t
  });
}
const St = z.create(() => {
  const { updateRoute: e } = J(), r = z.useModal(), [t, o] = S(""), [n, s] = S(null);
  async function i() {
    qe({
      message: "Site followed",
      type: "success"
    }), r.remove(), e("");
  }
  async function a() {
    s(n);
  }
  const u = At("index", i, a);
  return /* @__PURE__ */ l.jsx(
    W,
    {
      afterClose: () => {
        u.reset(), e("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: () => u.mutate(t),
      children: /* @__PURE__ */ l.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ l.jsx(
        xt,
        {
          autoFocus: !0,
          error: !!n,
          hint: n,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: t,
          "data-test-new-follower": !0,
          onChange: (v) => o(v.target.value)
        }
      ) })
    }
  );
});
function _t(e) {
  var s;
  const t = (s = X().data) == null ? void 0 : s.site, o = (t == null ? void 0 : t.url) ?? window.location.origin, n = new Y(
    new URL(o),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    e
  );
  return de({
    queryKey: [`followers:${e}`],
    async queryFn() {
      const i = await n.getFollowers();
      return await Promise.all(i.map((u) => n.getActor(u)));
    }
  });
}
const It = ({}) => {
  const { updateRoute: e } = J(), { data: r = [], isLoading: t } = _t("index");
  return /* @__PURE__ */ l.jsx(
    W,
    {
      afterClose: () => {
        e("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ l.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: t ? /* @__PURE__ */ l.jsx("p", { children: "Loading followers..." }) : /* @__PURE__ */ l.jsx(le, { children: r.map((o) => /* @__PURE__ */ l.jsx(
        Ae,
        {
          action: /* @__PURE__ */ l.jsx(ce, { color: "grey", label: "Remove", link: !0 }),
          avatar: /* @__PURE__ */ l.jsx(je, { image: o.icon, size: "sm" }),
          detail: K(o),
          id: "list-item",
          title: o.name || K(o)
        },
        o.id
      )) }) })
    }
  );
}, Mt = z.create(It);
function Lt(e) {
  var s;
  const t = (s = X().data) == null ? void 0 : s.site, o = (t == null ? void 0 : t.url) ?? window.location.origin, n = new Y(
    new URL(o),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    e
  );
  return de({
    queryKey: [`following:${e}`],
    async queryFn() {
      return n.getFollowing();
    }
  });
}
const kt = ({}) => {
  const { updateRoute: e } = J(), { data: r = [] } = Lt("index");
  return /* @__PURE__ */ l.jsx(
    W,
    {
      afterClose: () => {
        e("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ l.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ l.jsx(le, { children: r.map((t) => /* @__PURE__ */ l.jsx(
        Ae,
        {
          action: /* @__PURE__ */ l.jsx(ce, { color: "grey", label: "Unfollow", link: !0 }),
          avatar: /* @__PURE__ */ l.jsx(je, { image: t.icon, size: "sm" }),
          detail: K(t),
          id: "list-item",
          title: t.name
        },
        t.id
      )) }) })
    }
  );
}, Rt = z.create(kt), Ut = { FollowSite: St, ViewFollowing: Rt, ViewFollowers: Mt };
export {
  Ut as default
};
//# sourceMappingURL=modals-b1995907.mjs.map
