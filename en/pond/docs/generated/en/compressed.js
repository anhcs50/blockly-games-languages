// Automatically generated file.  Do not edit!
var h, l = this;

function m(a) { return "string" == typeof a }

function aa() {}

function ba(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function n(a) { return "array" == ba(a) }

function ca(a) { var b = ba(a); return "array" == b || "object" == b && "number" == typeof a.length }

function p(a) { return "function" == ba(a) }

function q(a) { var b = typeof a; return "object" == b && null != a || "function" == b }
var r = "closure_uid_" + (1E9 * Math.random() >>> 0),
    da = 0;

function ea(a, b, c) { return a.call.apply(a.bind, arguments) }

function fa(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d); return a.apply(b, c) } } return function() { return a.apply(b, arguments) } }

function t(a, b, c) { t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa; return t.apply(null, arguments) }
var ha = Date.now || function() { return +new Date };

function u(a, b) {
    function c() {} c.prototype = b.prototype;
    a.ga = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.za = function(a, c, f) { for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e]; return b.prototype[c].apply(a, d) } };
var v;
var ia = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) { if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, 0) : -1; for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c; return -1 },
    ja = Array.prototype.forEach ? function(a, b) { Array.prototype.forEach.call(a, b, void 0) } : function(a, b) { for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) },
    ka = Array.prototype.filter ? function(a, b) { return Array.prototype.filter.call(a, b, void 0) } : function(a,
        b) { for (var c = a.length, d = [], e = 0, f = m(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) { var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k) } return d };

function la(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] };
var ma = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

function na(a) { if (!oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ta, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;")); return a }
var pa = /&/g,
    qa = /</g,
    ra = />/g,
    sa = /"/g,
    ta = /'/g,
    ua = /\x00/g,
    oa = /[\x00&<>"']/;

function va(a, b) { return a < b ? -1 : a > b ? 1 : 0 };
var w;
a: { var wa = l.navigator; if (wa) { var xa = wa.userAgent; if (xa) { w = xa; break a } } w = "" };

function ya(a, b, c) { for (var d in a) b.call(c, a[d], d, a) }

function za() { var a = x,
        b; for (b in a) return !1; return !0 }
var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ba(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < Aa.length; f++) c = Aa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } }

function Ca(a) { var b = arguments.length; if (1 == b && n(arguments[0])) return Ca.apply(null, arguments[0]); for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0; return c };

function Da(a) { Da[" "](a); return a } Da[" "] = aa;

function Ea(a, b) { var c = Fa; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
var Ga = -1 != w.indexOf("Opera"),
    y = -1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE"),
    z = -1 != w.indexOf("Edge"),
    A = -1 != w.indexOf("Gecko") && !(-1 != w.toLowerCase().indexOf("webkit") && -1 == w.indexOf("Edge")) && !(-1 != w.indexOf("Trident") || -1 != w.indexOf("MSIE")) && -1 == w.indexOf("Edge"),
    B = -1 != w.toLowerCase().indexOf("webkit") && -1 == w.indexOf("Edge"),
    C = -1 != w.indexOf("Macintosh");

function Ha() { var a = l.document; return a ? a.documentMode : void 0 }
var D;
a: { var Ia = "",
        Ja = function() { var a = w; if (A) return /rv:([^\);]+)(\)|;)/.exec(a); if (z) return /Edge\/([\d\.]+)/.exec(a); if (y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (B) return /WebKit\/(\S+)/.exec(a); if (Ga) return /(?:Version)[ \/]?(\S+)/.exec(a) }();Ja && (Ia = Ja ? Ja[1] : ""); if (y) { var Ka = Ha(); if (null != Ka && Ka > parseFloat(Ia)) { D = String(Ka); break a } } D = Ia }
var Fa = {};

function La(a) { return Ea(a, function() { for (var b = 0, c = ma(String(D)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) { var g = c[f] || "",
                k = d[f] || "";
            do { g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""]; if (0 == g[0].length && 0 == k[0].length) break;
                b = va(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || va(0 == g[2].length, 0 == k[2].length) || va(g[2], k[2]);
                g = g[3];
                k = k[3] } while (0 == b) } return 0 <= b }) }
var Ma;
var Na = l.document;
Ma = Na && y ? Ha() || ("CSS1Compat" == Na.compatMode ? parseInt(D, 10) : 5) : void 0;
var Oa = !y || 9 <= Number(Ma);

function Pa(a, b) { ya(b, function(b, d) { b && b.Ba && (b = b.Aa()); "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Qa.hasOwnProperty(d) ? a.setAttribute(Qa[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b }) }
var Qa = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

function Ra(a, b, c, d) {
    function e(c) { c && b.appendChild(m(c) ? a.createTextNode(c) : c) } for (; d < c.length; d++) { var f = c[d];!ca(f) || q(f) && 0 < f.nodeType ? e(f) : ja(Sa(f) ? la(f) : f, e) } }

function Sa(a) { if (a && "number" == typeof a.length) { if (q(a)) return "function" == typeof a.item || "string" == typeof a.item; if (p(a)) return "function" == typeof a.item } return !1 }

function Ta() { this.H = l.document || document } h = Ta.prototype;
h.J = function(a) { return m(a) ? this.H.getElementById(a) : a };
h.getElementsByTagName = function(a, b) { return (b || this.H).getElementsByTagName(String(a)) };
h.setProperties = Pa;
h.la = function(a, b, c) { var d = this.H,
        e = arguments,
        f = String(e[0]),
        g = e[1]; if (!Oa && g && (g.name || g.type)) { f = ["<", f];
        g.name && f.push(' name="', na(g.name), '"'); if (g.type) { f.push(' type="', na(g.type), '"'); var k = {};
            Ba(k, g);
            delete k.type;
            g = k } f.push(">");
        f = f.join("") } f = d.createElement(f);
    g && (m(g) ? f.className = g : n(g) ? f.className = g.join(" ") : Pa(f, g));
    2 < e.length && Ra(d, f, e, 2); return f };
h.createElement = function(a) { return this.H.createElement(String(a)) };
h.createTextNode = function(a) { return this.H.createTextNode(String(a)) };
h.appendChild = function(a, b) { a.appendChild(b) };
h.append = function(a, b) { Ra(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1) };
h.canHaveChildren = function(a) { if (1 != a.nodeType) return !1; switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1 } return !0 };
h.removeNode = function(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null };
h.contains = function(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a };
var Ua;
var Va = Object.freeze || function(a) { return a };
var Wa = !y || 9 <= Number(Ma),
    Xa = y && !La("9"),
    Ya = function() { if (!l.addEventListener || !Object.defineProperty) return !1; var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
        l.addEventListener("test", aa, b);
        l.removeEventListener("test", aa, b); return a }();

function E() { 0 != Za && (this[r] || (this[r] = ++da)) }
var Za = 0;

function F(a, b) { this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.A = !1;
    this.fa = !0 } F.prototype.stopPropagation = function() { this.A = !0 };
F.prototype.preventDefault = function() { this.defaultPrevented = !0;
    this.fa = !1 };

function G(a, b) {
    F.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.C = null;
    if (a) {
        var c = this.type = a.type,
            d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (A) {
                a: {
                    try {
                        Da(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {} e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        null === d ? (this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = m(a.pointerType) ? a.pointerType : $a[a.pointerType] || "";
        this.state = a.state;
        this.C = a;
        a.defaultPrevented && this.preventDefault()
    }
}
u(G, F);
var $a = Va({ 2: "touch", 3: "pen", 4: "mouse" });
G.prototype.stopPropagation = function() { G.ga.stopPropagation.call(this);
    this.C.stopPropagation ? this.C.stopPropagation() : this.C.cancelBubble = !0 };
G.prototype.preventDefault = function() { G.ga.preventDefault.call(this); var a = this.C; if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Xa) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
var ab = "closure_listenable_" + (1E6 * Math.random() | 0);

function H(a) { return !(!a || !a[ab]) }
var bb = 0;

function cb(a, b, c, d, e) { this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.S = e;
    this.key = ++bb;
    this.G = this.P = !1 }

function I(a) { a.G = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.S = null };

function J(a) { this.src = a;
    this.g = {};
    this.O = 0 } J.prototype.add = function(a, b, c, d, e) { var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.O++); var g = db(a, b, d, e); - 1 < g ? (b = a[g], c || (b.P = !1)) : (b = new cb(b, this.src, f, !!d, e), b.P = c, a.push(b)); return b };
J.prototype.remove = function(a, b, c, d) { a = a.toString(); if (!(a in this.g)) return !1; var e = this.g[a];
    b = db(e, b, c, d); return -1 < b ? (I(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.O--), !0) : !1 };

function eb(a, b) { var c = b.type; if (!(c in a.g)) return !1; var d = a.g[c],
        e = ia(d, b),
        f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (I(b), 0 == a.g[c].length && (delete a.g[c], a.O--)); return f } J.prototype.removeAll = function(a) { a = a && a.toString(); var b = 0,
        c; for (c in this.g)
        if (!a || c == a) { for (var d = this.g[c], e = 0; e < d.length; e++) ++b, I(d[e]);
            delete this.g[c];
            this.O-- } return b };
J.prototype.K = function(a, b, c, d) { a = this.g[a.toString()]; var e = -1;
    a && (e = db(a, b, c, d)); return -1 < e ? a[e] : null };

function db(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.G && f.listener == b && f.capture == !!c && f.S == d) return e } return -1 };
var fb = "closure_lm_" + (1E6 * Math.random() | 0),
    gb = {},
    hb = 0;

function K(a, b, c, d, e) { if (d && d.once) return ib(a, b, c, d, e); if (n(b)) { for (var f = 0; f < b.length; f++) K(a, b[f], c, d, e); return null } c = L(c); return H(a) ? a.W(b, c, q(d) ? !!d.capture : !!d, e) : jb(a, b, c, !1, d, e) }

function jb(a, b, c, d, e, f) { if (!b) throw Error("Invalid event type"); var g = q(e) ? !!e.capture : !!e,
        k = M(a);
    k || (a[fb] = k = new J(a));
    c = k.add(b, c, d, g, f); if (c.proxy) return c;
    d = kb();
    c.proxy = d;
    d.src = a;
    d.listener = c; if (a.addEventListener) Ya || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(lb(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    hb++; return c }

function kb() { var a = mb,
        b = Wa ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c }; return b }

function ib(a, b, c, d, e) { if (n(b)) { for (var f = 0; f < b.length; f++) ib(a, b[f], c, d, e); return null } c = L(c); return H(a) ? a.ca(b, c, q(d) ? !!d.capture : !!d, e) : jb(a, b, c, !0, d, e) }

function nb(a, b, c, d, e) { if (n(b))
        for (var f = 0; f < b.length; f++) nb(a, b[f], c, d, e);
    else d = q(d) ? !!d.capture : !!d, c = L(c), H(a) ? a.$(b, c, d, e) : a && (a = M(a)) && (b = a.K(b, c, d, e)) && N(b) }

function N(a) { if ("number" == typeof a || !a || a.G) return !1; var b = a.src; if (H(b)) return eb(b.u, a); var c = a.type,
        d = a.proxy;
    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(lb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
    hb--;
    (c = M(b)) ? (eb(c, a), 0 == c.O && (c.src = null, b[fb] = null)) : I(a); return !0 }

function ob(a) { if (a)
        if (H(a)) a.removeAllListeners(void 0);
        else if (a = M(a)) { var b = 0,
            c; for (c in a.g)
            for (var d = a.g[c].concat(), e = 0; e < d.length; ++e) N(d[e]) && ++b } }

function lb(a) { return a in gb ? gb[a] : gb[a] = "on" + a }

function pb(a, b, c, d) { var e = !0; if (a = M(a))
        if (b = a.g[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) { var f = b[a];
                f && f.capture == c && !f.G && (f = qb(f, d), e = e && !1 !== f) }
    return e }

function qb(a, b) { var c = a.listener,
        d = a.S || a.src;
    a.P && N(a); return c.call(d, b) }

function mb(a, b) {
    if (a.G) return !0;
    if (!Wa) {
        if (!b) a: { b = ["window", "event"]; for (var c = l, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) { b = null; break a } b = c } d = b;
        b = new G(d, this);
        c = !0;
        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
            a: { var e = !1; if (0 == d.keyCode) try { d.keyCode = -1; break a } catch (g) { e = !0 }
                if (e || void 0 == d.returnValue) d.returnValue = !0 } d = [];
            for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
            for (e = d.length - 1; !b.A && 0 <= e; e--) { b.currentTarget = d[e]; var f = pb(d[e], a, !0, b);
                c = c && f }
            for (e = 0; !b.A && e < d.length; e++) b.currentTarget =
                d[e],
            f = pb(d[e], a, !1, b),
            c = c && f
        }
        return c
    }
    return qb(a, new G(b, this))
}

function M(a) { a = a[fb]; return a instanceof J ? a : null }
var rb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function L(a) { if (p(a)) return a;
    a[rb] || (a[rb] = function(b) { return a.handleEvent(b) }); return a[rb] };

function O() { E.call(this);
    this.u = new J(this);
    this.ha = this;
    this.ea = null } u(O, E);
O.prototype[ab] = !0;
h = O.prototype;
h.addEventListener = function(a, b, c, d) { K(this, a, b, c, d) };
h.removeEventListener = function(a, b, c, d) { nb(this, a, b, c, d) };
h.dispatchEvent = function(a) { var b, c = this.ea; if (c)
        for (b = []; c; c = c.ea) b.push(c);
    c = this.ha; var d = a.type || a; if (m(a)) a = new F(a, c);
    else if (a instanceof F) a.target = a.target || c;
    else { var e = a;
        a = new F(d, c);
        Ba(a, e) } e = !0; if (b)
        for (var f = b.length - 1; !a.A && 0 <= f; f--) { var g = a.currentTarget = b[f];
            e = P(g, d, !0, a) && e } a.A || (g = a.currentTarget = c, e = P(g, d, !0, a) && e, a.A || (e = P(g, d, !1, a) && e)); if (b)
        for (f = 0; !a.A && f < b.length; f++) g = a.currentTarget = b[f], e = P(g, d, !1, a) && e; return e };
h.W = function(a, b, c, d) { return this.u.add(String(a), b, !1, c, d) };
h.ca = function(a, b, c, d) { return this.u.add(String(a), b, !0, c, d) };
h.$ = function(a, b, c, d) { this.u.remove(String(a), b, c, d) };
h.removeAllListeners = function(a) { return this.u ? this.u.removeAll(a) : 0 };

function P(a, b, c, d) { b = a.u.g[String(b)]; if (!b) return !0;
    b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) { var g = b[f]; if (g && !g.G && g.capture == c) { var k = g.listener,
                Nb = g.S || g.src;
            g.P && eb(a.u, g);
            e = !1 !== k.call(Nb, d) && e } } return e && 0 != d.fa }
h.K = function(a, b, c, d) { return this.u.K(String(a), b, c, d) };

function Q() { O.call(this);
    this.m = R;
    this.endTime = this.startTime = null } u(Q, O);
var R = 0;
Q.prototype.o = function(a) { this.dispatchEvent(a) };

function S(a, b, c) { E.call(this);
    this.da = a;
    this.qa = b || 0;
    this.L = c;
    this.ka = t(this.ma, this) } u(S, E);
S.prototype.D = 0;
S.prototype.start = function(a) { this.stop(); var b = this.ka;
    a = void 0 !== a ? a : this.qa; if (!p(b))
        if (b && "function" == typeof b.handleEvent) b = t(b.handleEvent, b);
        else throw Error("Invalid listener argument");
    this.D = 2147483647 < Number(a) ? -1 : l.setTimeout(b, a || 0) };
S.prototype.stop = function() { 0 != this.D && l.clearTimeout(this.D);
    this.D = 0 };
S.prototype.ma = function() { this.D = 0;
    this.da && this.da.call(this.L) };
var x = {},
    T = null;

function U(a) { a = a[r] || (a[r] = ++da);
    delete x[a];
    za() && T && T.stop() }

function sb() { T || (T = new S(function() { tb() }, 20)); var a = T;
    0 != a.D || a.start() }

function tb() { var a = ha();
    ya(x, function(b) { ub(b, a) });
    za() || sb() };

function V(a, b, c, d) { Q.call(this); if (!n(a) || !n(b)) throw Error("Start and end parameters must be arrays"); if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.N = a;
    this.na = b;
    this.duration = c;
    this.aa = d;
    this.coords = [];
    this.j = 0 } u(V, Q);
V.prototype.play = function(a) { if (a || this.m == R) this.j = 0, this.coords = this.N;
    else if (1 == this.m) return !1;
    U(this);
    this.startTime = a = ha(); - 1 == this.m && (this.startTime -= this.duration * this.j);
    this.endTime = this.startTime + this.duration;
    this.j || this.o("begin");
    this.o("play"); - 1 == this.m && this.o("resume");
    this.m = 1; var b = this[r] || (this[r] = ++da);
    b in x || (x[b] = this);
    sb();
    ub(this, a); return !0 };
V.prototype.stop = function(a) { U(this);
    this.m = R;
    a && (this.j = 1);
    vb(this, this.j);
    this.o("stop");
    this.o("end") };
V.prototype.pause = function() { 1 == this.m && (U(this), this.m = -1, this.o("pause")) };

function ub(a, b) { b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
    a.j = (b - a.startTime) / (a.endTime - a.startTime);
    1 < a.j && (a.j = 1);
    vb(a, a.j);
    1 == a.j ? (a.m = R, U(a), a.o("finish"), a.o("end")) : 1 == a.m && a.o("animate") }

function vb(a, b) { p(a.aa) && (b = a.aa(b));
    a.coords = Array(a.N.length); for (var c = 0; c < a.N.length; c++) a.coords[c] = (a.na[c] - a.N[c]) * b + a.N[c] } V.prototype.o = function(a) { this.dispatchEvent(new wb(a, this)) };

function wb(a, b) { F.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.j = b.j;
    this.state = b.m } u(wb, F);
Ca("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

function xb(a) { if (a.classList) return a.classList;
    a = a.className; return m(a) && a.match(/\S+/g) || [] }

function yb(a, b) { a.classList ? b = a.classList.contains(b) : (a = xb(a), b = 0 <= ia(a, b)); return b }

function W(a, b) { a.classList ? a.classList.add(b) : yb(a, b) || (a.className += 0 < a.className.length ? " " + b : b) }

function zb(a, b) { a.classList ? a.classList.remove(b) : yb(a, b) && (a.className = ka(xb(a), function(a) { return a != b }).join(" ")) };

function X(a) { E.call(this);
    this.L = a;
    this.F = {} } u(X, E);
var Ab = [];
h = X.prototype;
h.W = function(a, b, c, d) { n(b) || (b && (Ab[0] = b.toString()), b = Ab); for (var e = 0; e < b.length; e++) { var f = K(a, b[e], c || this.handleEvent, d || !1, this.L || this); if (!f) break;
        this.F[f.key] = f } return this };
h.ca = function(a, b, c, d) { return Bb(this, a, b, c, d) };

function Bb(a, b, c, d, e, f) { if (n(c))
        for (var g = 0; g < c.length; g++) Bb(a, b, c[g], d, e, f);
    else { b = ib(b, c, d || a.handleEvent, e, f || a.L || a); if (!b) return a;
        a.F[b.key] = b } return a }
h.$ = function(a, b, c, d, e) { if (n(b))
        for (var f = 0; f < b.length; f++) this.$(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = q(d) ? !!d.capture : !!d, e = e || this.L || this, c = L(c), d = !!d, b = H(a) ? a.K(b, c, d, e) : a ? (a = M(a)) ? a.K(b, c, d, e) : null : null, b && (N(b), delete this.F[b.key]) };
h.removeAll = function() { ya(this.F, function(a, b) { this.F.hasOwnProperty(b) && N(a) }, this);
    this.F = {} };
h.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

function Cb(a, b, c, d, e, f) { if (B && !La("525")) return !0; if (C && e) return Y(a); if (e && !d) return !1; if (!A) { "number" == typeof b && (b = Db(b)); var g = 17 == b || 18 == b || C && 91 == b; if ((!c || C) && g || C && 16 == b && (d || f)) return !1 } if ((B || z) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1 }
    if (y && d && b == a) return !1; switch (a) {
        case 13:
            return A ? f || e ? !1 : !(c && d) : !0;
        case 27:
            return !(B || z || A) } return A && (d || e || f) ? !1 : Y(a) }

function Y(a) { if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (B || z) && 0 == a) return !0; switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1 } }

function Db(a) { if (A) a = Eb(a);
    else if (C && B) switch (a) {
        case 93:
            a = 91 }
    return a }

function Eb(a) { switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a } };

function Fb(a, b) { O.call(this);
    a && Gb(this, a, b) } u(Fb, O);
h = Fb.prototype;
h.B = null;
h.T = null;
h.Z = null;
h.U = null;
h.h = -1;
h.w = -1;
h.X = !1;
var Hb = { 3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45 },
    Ib = { Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45 },
    Jb = !B || La("525"),
    Kb = C && A;
h = Fb.prototype;
h.oa = function(a) { if (B || z)
        if (17 == this.h && !a.ctrlKey || 18 == this.h && !a.altKey || C && 91 == this.h && !a.metaKey) this.w = this.h = -1; - 1 == this.h && (a.ctrlKey && 17 != a.keyCode ? this.h = 17 : a.altKey && 18 != a.keyCode ? this.h = 18 : a.metaKey && 91 != a.keyCode && (this.h = 91));
    Jb && !Cb(a.keyCode, this.h, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.w = Db(a.keyCode), Kb && (this.X = a.altKey)) };
h.pa = function(a) { this.w = this.h = -1;
    this.X = a.altKey };
h.handleEvent = function(a) {
    var b = a.C,
        c = b.altKey;
    if (y && "keypress" == a.type) { var d = this.w; var e = 13 != d && 27 != d ? b.keyCode : 0 } else(B || z) && "keypress" == a.type ? (d = this.w, e = 0 <= b.charCode && 63232 > b.charCode && Y(d) ? b.charCode : 0) : Ga && !B ? (d = this.w, e = Y(d) ? b.keyCode : 0) : (d = b.keyCode || this.w, e = b.charCode || 0, Kb && "keypress" == a.type && (c = this.X), C && 63 == e && 224 == d && (d = 191));
    var f = d = Db(d);
    d ? 63232 <= d && d in Hb ? f = Hb[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Ib && (f = Ib[b.keyIdentifier]);
    A && Jb && "keypress" == a.type &&
        !Cb(f, this.h, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.h, this.h = f, b = new Lb(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
};
h.J = function() { return this.B };

function Gb(a, b, c) { a.U && a.detach();
    a.B = b;
    a.T = K(a.B, "keypress", a, c);
    a.Z = K(a.B, "keydown", a.oa, c, a);
    a.U = K(a.B, "keyup", a.pa, c, a) } h.detach = function() { this.T && (N(this.T), N(this.Z), N(this.U), this.U = this.Z = this.T = null);
    this.B = null;
    this.w = this.h = -1 };

function Lb(a, b, c, d) { G.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c } u(Lb, G);

function Mb(a, b, c, d, e, f) {
    function g(a) { if (a) { a.tabIndex = 0; var b = k.ya;
            b ? a.setAttribute("role", b) : a.removeAttribute("role");
            W(a, "goog-zippy-header");
            a && k.sa.W(a, "click", k.wa);
            b = k;
            a && (Gb(b.ba, a), b.ra.W(b.ba, "key", b.xa)) } } O.call(this);
    this.Y = e || v || (v = new Ta);
    this.v = this.Y.J(a) || null;
    this.I = this.Y.J(d || null);
    this.V = p(b) ? b : null;
    this.ya = f || "tab";
    this.s = this.V || !b ? null : this.Y.J(b);
    this.i = 1 == c;
    void 0 !== c || this.V || (this.I ? this.i = "none" != this.I.style.display : this.v && (this.i = yb(this.v, "goog-zippy-expanded")));
    this.ra = new X(this);
    this.ba = new Fb;
    this.sa = new X(this);
    var k = this;
    g(this.v);
    g(this.I);
    this.M(this.i)
}
u(Mb, O);
h = Mb.prototype;
h.expand = function() { this.M(!0) };
h.collapse = function() { this.M(!1) };
h.toggle = function() { this.M(!this.i) };
h.M = function(a) { this.s ? this.s.style.display = a ? "" : "none" : a && this.V && (this.s = this.V());
    this.s && W(this.s, "goog-zippy-content");
    this.I ? (this.v.style.display = a ? "none" : "", this.I.style.display = a ? "" : "none") : Ob(this, a);
    this.i = a;
    this.dispatchEvent(new Z("toggle", this, this.i)) };

function Ob(a, b) {
    if (a.v) {
        var c = a.v;
        b ? W(c, "goog-zippy-expanded") : zb(c, "goog-zippy-expanded");
        c = a.v;
        b ? zb(c, "goog-zippy-collapsed") : W(c, "goog-zippy-collapsed");
        a = a.v;
        n(b) && (b = b.join(" "));
        "" === b || void 0 == b ? (Ua || (Ua = { atomic: !1, autocomplete: "none", dropeffect: "none", haspopup: !1, live: "off", multiline: !1, multiselectable: !1, orientation: "vertical", readonly: !1, relevant: "additions text", required: !1, sort: "none", busy: !1, disabled: !1, hidden: !1, invalid: "false" }), b = Ua, "expanded" in b ? a.setAttribute("aria-expanded", b.expanded) :
            a.removeAttribute("aria-expanded")) : a.setAttribute("aria-expanded", b)
    }
}
h.xa = function(a) { if (13 == a.keyCode || 32 == a.keyCode) this.toggle(), this.dispatchEvent(new Z("action", this, this.i, a)), a.preventDefault(), a.stopPropagation() };
h.wa = function(a) { this.toggle();
    this.dispatchEvent(new Z("action", this, this.i, a)) };

function Z(a, b) { F.call(this, a, b) } u(Z, F);

function Pb(a, b, c, d, e) { d = d || v || (v = new Ta); var f = d.la("DIV", { style: "overflow:hidden" });
    b = d.J(b);
    b.parentNode.replaceChild(f, b);
    f.appendChild(b);
    this.R = f;
    this.l = null;
    Mb.call(this, a, b, c, void 0, d, e);
    a = this.i;
    this.R.style.display = a ? "" : "none";
    Ob(this, a) } u(Pb, Mb);
h = Pb.prototype;
h.ja = 500;
h.ia = function(a) { return 1 - Math.pow(1 - a, 3) };
h.M = function(a) { if (this.i != a || this.l) { "none" == this.R.style.display && (this.R.style.display = ""); var b = this.s.offsetHeight; if (this.l) { a = this.i;
            ob(this.l);
            this.l.stop(!1); var c = b - Math.abs(parseInt(this.s.style.marginTop, 10)) } else c = a ? 0 : b;
        Ob(this, a);
        this.l = new V([0, c], [0, a ? b : 0], this.ja, this.ia);
        K(this.l, ["begin", "animate", "end"], this.ta, !1, this);
        K(this.l, "begin", t(this.ua, this, a));
        K(this.l, "end", t(this.va, this, a));
        this.l.play(!1) } };
h.ta = function(a) { var b = this.s;
    b.style.marginTop = a.y - b.offsetHeight + "px" };
h.ua = function(a) { this.dispatchEvent(new Z("a", this, a)) };
h.va = function(a) { a && (this.s.style.marginTop = "0");
    ob(this.l);
    this.i = a;
    this.l = null;
    a || (this.R.style.display = "none");
    this.dispatchEvent(new Z("toggle", this, a));
    this.dispatchEvent(new Z("b", this, a)) };
window.addEventListener("load", function() {
    var a = window.location.search.match(/[?&]mode=([^&]+)/);
    a = a ? Number(a[1]) : Infinity;
    var b = a % 2 ? "blocks" : "js";
    document.body.innerHTML = '<h1>Pond Documentation</h1><h2 id="pond"><img src="../common/1x1.gif">Pond</h2><div id="pond-content"><h3>Angles</h3><p>The compass is oriented so that due east (right) is 0 degrees, 90 is north, 180 is west, 270 is south. Angles wrap as expected: -90 is south, 450 is north.</p><p><img src="docs/compass.png" height="145" width="150" style="padding: 0 2em;"></p><h3>Cannon</h3>' +
        ("blocks" == b ? '<p><img src="docs/cannon.png" height="41" width="231"></p>' : "js" == b ? '<pre class="pondSpec spec">cannon(<i>angle</i>, <i>range</i>)</pre>' : "") + "<p>The <code>cannon()</code> function fires a cannonball towards the specified angle and range.  The angle is independent of the direction of the duck. The range can be 0-70 metres, with greater ranges truncated to 70.</p><p>The cannon takes about one second to reload after firing. If <code>cannon()</code> is called during this time, nothing happens." +
        ("js" == b ? " <code>cannon()</code> returns <code>true</code> if a cannonball was fired, or <code>false</code> if the cannon is reloading." : "") + "</p>" + (5 <= a ? "<h3>Scan</h3>" + ("blocks" == b ? '<p><img src="docs/scan.png" height="36" width="134"></p>' : "js" == b ? '<pre class="pondSpec spec">scan(<i>angle</i>)\nscan(<i>angle</i>, <i>width</i>)</pre>' : "") + "<p>The <code>scan()</code> function activates the duck's radar.  This function returns the range to the nearest opponent in the specified direction. The angle is independent of the direction of the duck.  Sunk opponents are not detected.  If there is no opponent in that direction, then <code>Infinity</code> is returned.</p>" +
            ("js" == b ? "<p>The second (optional) parameter of <code>scan()</code> specifies the width of the scanning beam.  This can be from 1 degree to 20 degrees.  Advanced players may wish to start scanning with a width of 20 for a fast scan, then progressively decrease the width to get more accuracy.  If not specified, the width is 5. This parameter is only available with JavaScript, not with blocks.</p>" : "") : "") + (7 <= a ? "<h3>Swim</h3>" + ("blocks" == b ? '<p><img src="docs/swim.png" height="41" width="131"></p>' :
            "js" == b ? '<pre class="pondSpec spec">swim(<i>angle</i>)\nswim(<i>angle</i>, <i>speed</i>)</pre>' : "") + "<p>The <code>swim()</code> function starts the duck moving.  The duck will continue moving in the specified direction indefinitely.</p>" + ("js" == b ? "<p>The second (optional) parameter of <code>swim()</code> specifies the speed. This can be from 0 (stopped) to 100 (fast).  Direction of movement may only be changed if the speed is 50 or less.  If not specified, the speed is 50. This parameter is only available with JavaScript, not with blocks.</p>" :
            "") + "<p>Crashing into the edges of the pond will damage your duck.  Crashing into other ducks will damage both ducks.  The amount of damage is proportional to your speed.</p>" : "") + (9 <= a ? "<h3>Stop</h3>" + ("blocks" == b ? '<p><img src="docs/stop.png" height="31" width="63"></p>' : "js" == b ? '<pre class="pondSpec spec">stop()</pre>' : "") + "<p>The <code>stop()</code> function stops the duck from moving.  The duck will take a moment to slow down before stopping completely." + ("js" == b ? "This is the same as calling <code>swim()</code> with a speed of zero." :
            "") + "</p>" : "") + (9 <= a ? "<h3>Location</h3>" + ("blocks" == b ? '<p><img src="docs/loc_x.png" height="26" width="74"> &nbsp; <img src="docs/loc_y.png" height="26" width="74"></p>' : "js" == b ? '<pre class="pondSpec spec">loc_x()\nloc_y()</pre>' : "") + '<p>The <code>loc_x()</code> and <code>loc_y()</code> functions return the duck\'s horizontal and vertical positions.  Values are between 0 and 100, starting from the lower-left corner.</p><p><img src="docs/map.png" height="190" width="244" style="padding: 0 2em;"></p>' :
            "") + (11 <= a ? "<h3>Speed</h3>" + ("blocks" == b ? '<p><img src="docs/speed.png" height="26" width="79"></p>' : "js" == b ? '<pre class="pondSpec spec">speed()</pre>' : "") + "<p>The <code>speed()</code> function returns the duck's current speed. Values are between 0 (stopped) and 100 (fast).  This function may be used to detect collisions (which instantly stop the duck).</p>" : "") + (11 <= a ? "<h3>Health</h3>" + ("blocks" == b ? '<p><img src="docs/health.png" height="26" width="78"></p>' : "js" == b ? '<pre class="pondSpec spec">health()</pre>' :
            "") + "<p>The <code>health()</code> function returns the duck's current health level. Values are between 0 (sunk) and 100 (perfect).  Advanced players may wish to store the health in a variable, then periodically check to see if the health has decreased, thus indicating that the duck is under attack.</p><p>There is no way to repair health.</p>" : "") + "</div>" + (3 <= a ? '\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="logic"><img src="../common/1x1.gif">Logic</h2><div id="logic-content">' +
            (9 <= a ? "<h3>If</h3>" + ("blocks" == b ? '<p><img src="docs/if.png" height="90" width="118"></p>' : "js" == b ? '<pre class="logicSpec spec">if (<i>condition</i>) {\n  <i>statements</i>\n}\n\n\nif (<i>condition</i>) {\n  <i>statements</i>\n} else if (<i>condition</i>) {\n  <i>statements</i>\n}\n\n\nif (<i>condition</i>) {\n  <i>statements</i>\n} else {\n  <i>statements</i>\n}</pre>' : "") + "<p>If the condition is true, then execute the contained statements. The <code>if</code> may be followed by any number of other <code>else if</code> conditions, and at the end by an optional <code>else</code> condition that executes if none of the previous conditions were true.</p>" :
                "") + (9 <= a ? "<h3>Equality</h3>" + ("blocks" == b ? '<p><img src="docs/equals.png" height="36" width="122"></p>' : "js" == b ? '<pre class="logicSpec spec">==    !=    &lt;    &lt;=    &gt;    &gt;=</pre>' : "") + "<p>These expressions compare two numbers and return <code>true</code> or <code>false</code>. The six available equality operators are:</p><table><tr><th>Operator</td><th>Example</td><th>Returns</td></tr><tr><td>Equals</td><td><code>5 == 10</code></td><td><code>false</code></td></tr><tr><td>Not equals</td><td><code>5 != 10</code></td><td><code>true</code></td></tr><tr><td>Less than</td><td><code>5 &lt; 10</code></td><td><code>true</code></td></tr><tr><td>Less than or equal</td><td><code>5 &lt;= 10</code></td><td><code>true</code></td></tr><tr><td>Greater than</td><td><code>5 &gt; 10</code></td><td><code>false</code></td></tr><tr><td>Greater than or equal</td><td><code>5 &gt;= 10</code></td><td><code>false</code></td></tr></table><p>Use of <code>!=</code> may be dangerous if the numbers being compared are fractions.  Consider this code that is designed to swim to 50 then stop:</p><pre>while (loc_y() <b>!=</b> 50) {\n  swim(90" +
                ("js" == b ? ", 50" : "") + ");\n}\nstop();</pre><p>The above code will fail because <code>loc_y()</code> may be 49.4 on one execution, then 50.6 on the next execution.  Since the value was not seen at exactly 50, the loop continues forever.  Below is better code:</p><pre>while (loc_y() <b>&lt;</b> 50) {\n  swim(90" + ("js" == b ? ", 50" : "") + ");\n}\nstop();</pre>" : "") + (11 <= a ? "<h3>And/Or</h3>" + ("blocks" == b ? '<p><img src="docs/and.png" height="36" width="124"></p>' : "js" == b ? '<pre class="logicSpec spec">&&    ||</pre>' :
                    "") + "<p>'And' is represented by the <code>&&</code> operator. It returns <code>true</code> only if both inputs are <code>true</code>. For example this code will only fire the cannon if the range is both greater than 5 and less than 70:</p><pre>if (range &gt; 5 <b>&amp;&amp;</b> range &lt; 70) {\n  cannon(angle, range);\n}</pre><p>'Or' is represented by the <code>||</code> operator. It returns <code>true</code> if either input is <code>true</code>. For example this code will stop if the duck is close to any wall:</p><pre>if (loc_x() &lt; 10 <b>||</b> loc_x() &gt; 90 <b>||</b>\n    loc_y() &lt; 10 <b>||</b> loc_y() &gt; 90) {\n  stop();\n}</pre>" :
                "") + "<h3>Booleans</h3>" + ("blocks" == b ? '<p><img src="docs/true.png" height="26" width="68"></p>' : "js" == b ? '<pre class="logicSpec spec">true    false</pre>' : "") + "<p>The value <code>true</code> is mainly used by the while loop to make a loop that executes forever.  The value <code>false</code> is also available.</p></div>" : "") + (3 <= a ? '\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="loops"><img src="../common/1x1.gif">Loops</h2><div id="loops-content"><h3>While</h3>' +
            ("blocks" == b ? '<p><img src="docs/while.png" height="90" width="118"></p>' : "js" == b ? '<pre class="loopsSpec spec">while (<i>condition</i>) {\n  <i>statements</i>\n}</pre>' : "") + "<p>Loops will repeat executing the enclosed statements as long as the condition is true.  Thus, the following will fire the cannon west forever:</p><pre>while (true) {\n  cannon(180, 50);\n}</pre><p>Whereas the following will fire the canon west as long as an opponent is in range:</p><pre>while (scan(180" + ("js" == b ? ", 5" : "") + ") &lt;= 70) {\n  cannon(180, scan(180" +
            ("js" == b ? ", 5" : "") + "));\n}</pre></div>" : "") + '\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="math"><img src="../common/1x1.gif">Math</h2><div id="math-content"><h3>Number</h3>' + ("blocks" == b ? '<p><img src="docs/number.png" height="26" width="37"></p>' : "js" == b ? '<pre class="mathSpec spec">123</pre>' : "") + "<p>Numbers are used for many things, including ranges, angles, and counters. Numbers may be negative (e.g. -360), or fractional (e.g. 3.14159), or very large (e.g. 9007199254740992). There is even a special number called <code>Infinity</code>.</p><p>Do not use thousands separators (e.g. 9,000).</p>" +
        (11 <= a ? "<h3>Arithmetic</h3>" + ("blocks" == b ? '<p><img src="docs/plus.png" height="36" width="113"></p>' : "js" == b ? '<pre class="mathSpec spec">+    -    *    /</pre>' : "") + "<p>These operators take two numbers and return a single number. The four available arithmetic operators are:</p><table><tr><th>Operator</td><th>Example</td><th>Returns</td></tr><tr><td>Plus</td><td><code>3 + 4</code></td><td><code>7</code></td></tr><tr><td>Minus</td><td><code>3 - 4</code></td><td><code>-1</code></td></tr><tr><td>Multiply</td><td><code>3 * 4</code></td><td><code>12</code></td></tr><tr><td>Divide</td><td><code>3 / 4</code></td><td><code>0.75</code></td></tr></table>" :
            "") + (11 <= a ? "<h3>Trigonometry</h3>" + ("blocks" == b ? '<p><img src="docs/math_sqrt.png" height="36" width="164"></p>' : "js" == b ? '<pre class="mathSpec spec">Math.<i>operation</i>(<i>number</i>)</pre>' : "") + "<p>These functions take a number and return a number. The eight available functions are:</p><table><tr><th>Function</td><th>Example</td><th>Returns</td></tr><tr><td>Square root</td><td><code>Math.sqrt(25)</code></td><td><code>5</code></td></tr><tr><td>Absolute</td><td><code>Math.abs(-25)</code></td><td><code>25</code></td></tr><tr><td>Sine</td><td><code>Math.sin_deg(30)</code></td><td><code>0.5</code></td></tr><tr><td>Cosine</td><td><code>Math.cos_deg(30)</code></td><td><code>0.866</code></td></tr><tr><td>Tangent</td><td><code>Math.tan_deg(30)</code></td><td><code>0.577</code></td></tr><tr><td>Arcsine</td><td><code>Math.asin_deg(0.5)</code></td><td><code>30</code></td></tr><tr><td>Arccosine</td><td><code>Math.acos_deg(0.866)</code></td><td><code>30.003</code></td></tr><tr><td>Arctangent</td><td><code>Math.atan_deg(0.577)</code></td><td><code>29.985</code></td></tr></table><p>Note that these trigonmetric functions are custom to the Pond game and all use degrees.  The standard JavaScript functions use radians.</p>" :
            "") + (11 <= a ? "<h3>Incrementing</h3>" + ("blocks" == b ? '<p><img src="docs/increment.png" height="41" width="159"></p>' : "js" == b ? '<pre class="mathSpec spec"><i>name</i> += <i>number</i>;</pre>' : "") + "<p>This is a shortcut for adding a number to an existing variable. There is no difference between the following two lines:</p><pre>angle += 10;\nvar angle = angle + 10;</pre><p>Do not use <code>+=</code> on a variable that has not already been defined. If in doubt, assign the variable to 0 at the beginning of the program.</p>" :
            "") + (11 <= a ? "<h3>Random</h3>" + ("blocks" == b ? '<p><img src="docs/math_random.png" height="26" width="124"></p>' : "js" == b ? '<pre class="mathSpec spec">Math.random()</pre>' : "") + "<p>This function returns a random fraction from 0.0 to 1.0.  To get a random number in a larger range, just multiply it by the maximum value. Here's an example of getting a random angle:</p><pre>var angle = Math.random() * 360;</pre>" : "") + "</div>" + (11 <= a ? '\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="variables"><img src="../common/1x1.gif">Variables</h2><div id="variables-content"><h3>Assigning</h3>' +
            ("blocks" == b ? '<p><img src="docs/var_set.png" height="40" width="165"></p>' : "js" == b ? '<pre class="variablesSpec spec">var <i>name</i> = <i>value</i>;</pre>' : "") + "<p>Assigns a value (usually a number) to the named variable. The name of the variable should be something that makes sense, such as <code>range</code> or <code>angle</code>.</p>" + ("js" == b ? "<p>Note that variable names are case-sensitive, thus <code>angle</code> and <code>Angle</code> are two completely different variables.  Variable names must only use the English letters a-z, and numbers. Variable names may not start with a number.</p><p>The <code>var</code> keyword may be omitted on all but the first assignment, but there is no harm in using it.</p>" :
                "") + "<h3>Retrieving</h3>" + ("blocks" == b ? '<p><img src="docs/var_get.png" height="26" width="79"></p>' : "js" == b ? '<pre class="variablesSpec spec"><i>name</i></pre>' : "") + "<p>Retrieves the value (usually a number) that had previously been assigned to the named variable.</p></div>" : "") + (11 <= a ? '\x3c!-- ---------------------------------------------------------------------- --\x3e<h2 id="functions"><img src="../common/1x1.gif">Functions</h2><div id="functions-content"><p>TODO</p></div>' : "");
    a = document.getElementsByTagName("h2");
    b = 0;
    for (var c; c = a[b]; b++) new Pb(c, c.id + "-content", !1)
});