// Automatically generated file.  Do not edit!
var d, g = this;

function aa(a) { return void 0 !== a }

function q(a) { return "string" == typeof a }

function t(a) { return "number" == typeof a }

function ba(a, b) { a = a.split("."); var c = g;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var e; a.length && (e = a.shift());) !a.length && aa(b) ? c[e] = b : c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} }

function ca() {}

function da(a) { a.Dm = void 0;
    a.Fd = function() { return a.Dm ? a.Dm : a.Dm = new a } }

function ea(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function u(a) { return "array" == ea(a) }

function fa(a) { var b = ea(a); return "array" == b || "object" == b && "number" == typeof a.length }

function w(a) { return "function" == ea(a) }

function ha(a) { var b = typeof a; return "object" == b && null != a || "function" == b }

function ia(a) { return a[ja] || (a[ja] = ++ka) }
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ka = 0;

function la(a, b, c) { return a.call.apply(a.bind, arguments) }

function ma(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var e = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, e); return a.apply(b, c) } } return function() { return a.apply(b, arguments) } }

function na(a, b, c) { na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma; return na.apply(null, arguments) }

function oa(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var b = c.slice();
        b.push.apply(b, arguments); return a.apply(this, b) } }

function y(a, b) {
    function c() {} c.prototype = b.prototype;
    a.m = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Oy = function(a, c, h) { for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f]; return b.prototype[c].apply(a, e) } };
var pa;
var qa = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) { if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1; for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c; return -1 },
    z = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++) h in f && b.call(c, f[h], h, a) },
    sa = Array.prototype.filter ? function(a, b) { return Array.prototype.filter.call(a, b, void 0) } : function(a, b) {
        for (var c =
                a.length, e = [], f = 0, h = q(a) ? a.split("") : a, k = 0; k < c; k++)
            if (k in h) { var l = h[k];
                b.call(void 0, l, k, a) && (e[f++] = l) } return e
    },
    ta = Array.prototype.map ? function(a, b, c) { return Array.prototype.map.call(a, b, c) } : function(a, b, c) { for (var e = a.length, f = Array(e), h = q(a) ? a.split("") : a, k = 0; k < e; k++) k in h && (f[k] = b.call(c, h[k], k, a)); return f },
    ua = Array.prototype.every ? function(a, b) { return Array.prototype.every.call(a, b, void 0) } : function(a, b) {
        for (var c = a.length, e = q(a) ? a.split("") : a, f = 0; f < c; f++)
            if (f in e && !b.call(void 0, e[f],
                    f, a)) return !1;
        return !0
    };

function va(a, b, c) { a: { for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++)
            if (h in f && b.call(c, f[h], h, a)) { b = h; break a } b = -1 } return 0 > b ? null : q(a) ? a.charAt(b) : a[b] }

function wa(a, b) { return 0 <= qa(a, b) }

function xa(a, b) { b = qa(a, b); var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1); return c }

function ya(a) { return Array.prototype.concat.apply([], arguments) }

function za(a) { var b = a.length; if (0 < b) { for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e]; return c } return [] }

function Aa(a, b) { for (var c = 1; c < arguments.length; c++) { var e = arguments[c]; if (fa(e)) { var f = a.length || 0,
                h = e.length || 0;
            a.length = f + h; for (var k = 0; k < h; k++) a[f + k] = e[k] } else a.push(e) } }

function Ba(a, b, c, e) { Array.prototype.splice.apply(a, Da(arguments, 1)) }

function Da(a, b, c) { return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c) };

function Ea(a, b) { return 0 == a.lastIndexOf(b, 0) }

function Fa(a) { return /^[\s\xa0]*$/.test(a) }

function Ga(a) { return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") }
var Ha = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

function Ia(a) { if (!Ja.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ka, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(La, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ma, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Na, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Oa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Pa, "&#0;")); return a }
var Ka = /&/g,
    La = /</g,
    Ma = />/g,
    Na = /"/g,
    Oa = /'/g,
    Pa = /\x00/g,
    Ja = /[\x00&<>"']/;

function Qa(a) { var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' }; var c = g.document.createElement("div"); return a.replace(Ra, function(a, f) { var e = b[a]; if (e) return e; "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (e = String.fromCharCode(f)));
        e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1)); return b[a] = e }) }

function Sa(a) { return a.replace(/&([^;]+);/g, function(a, c) { switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c) } }) }
var Ra = /&([^;\s<&]+);?/g;

function Ta(a, b) { return a < b ? -1 : a > b ? 1 : 0 }

function Ua() { return "background-color".replace(/\-([a-z])/g, function(a, b) { return b.toUpperCase() }) }

function Va(a) { var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s"; return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, f) { return b + f.toUpperCase() }) };
var Wa;
a: { var Xa = g.navigator; if (Xa) { var Ya = Xa.userAgent; if (Ya) { Wa = Ya; break a } } Wa = "" }

function A(a) { return -1 != Wa.indexOf(a) };

function Za(a, b, c) { for (var e in a) b.call(c, a[e], e, a) }
var $a = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function ab(a, b) { for (var c, e, f = 1; f < arguments.length; f++) { e = arguments[f]; for (c in e) a[c] = e[c]; for (var h = 0; h < $a.length; h++) c = $a[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]) } }

function bb(a) { var b = arguments.length; if (1 == b && u(arguments[0])) return bb.apply(null, arguments[0]); for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0; return c };

function cb(a) { cb[" "](a); return a } cb[" "] = ca;

function db(a, b) { var c = eb; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
var fb = A("Opera"),
    B = A("Trident") || A("MSIE"),
    gb = A("Edge"),
    D = A("Gecko") && !(-1 != Wa.toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
    E = -1 != Wa.toLowerCase().indexOf("webkit") && !A("Edge"),
    hb = E && A("Mobile"),
    ib = A("Macintosh"),
    jb = A("Android"),
    kb = A("iPhone") && !A("iPod") && !A("iPad"),
    lb = A("iPad");

function mb() { var a = g.document; return a ? a.documentMode : void 0 }
var nb;
a: { var ob = "",
        pb = function() { var a = Wa; if (D) return /rv:([^\);]+)(\)|;)/.exec(a); if (gb) return /Edge\/([\d\.]+)/.exec(a); if (B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (E) return /WebKit\/(\S+)/.exec(a); if (fb) return /(?:Version)[ \/]?(\S+)/.exec(a) }();pb && (ob = pb ? pb[1] : ""); if (B) { var qb = mb(); if (null != qb && qb > parseFloat(ob)) { nb = String(qb); break a } } nb = ob }
var eb = {};

function rb(a) { return db(a, function() { for (var b = 0, c = Ha(String(nb)).split("."), e = Ha(String(a)).split("."), f = Math.max(c.length, e.length), h = 0; 0 == b && h < f; h++) { var k = c[h] || "",
                l = e[h] || "";
            do { k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""]; if (0 == k[0].length && 0 == l[0].length) break;
                b = Ta(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || Ta(0 == k[2].length, 0 == l[2].length) || Ta(k[2], l[2]);
                k = k[3];
                l = l[3] } while (0 == b) } return 0 <= b }) }
var sb;
var tb = g.document;
sb = tb && B ? mb() || ("CSS1Compat" == tb.compatMode ? parseInt(nb, 10) : 5) : void 0;
var ub = !B || 9 <= Number(sb),
    vb = !D && !B || B && 9 <= Number(sb) || D && rb("1.9.1"),
    wb = B && !rb("9");
var xb = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };

function yb() { this.Rn = "";
    this.Yr = zb } yb.prototype.Se = !0;
yb.prototype.Hd = function() { return this.Rn };
yb.prototype.toString = function() { return "Const{" + this.Rn + "}" };

function Ab(a) { return a instanceof yb && a.constructor === yb && a.Yr === zb ? a.Rn : "type_error:Const" }
var zb = {};

function Bb() { this.Lq = "";
    this.Zr = Cb } Bb.prototype.Se = !0;
Bb.prototype.Hd = function() { return this.Lq };
Bb.prototype.Am = !0;
Bb.prototype.Vg = function() { return 1 };
var Cb = {};

function Db() { this.eg = "";
    this.Wr = Eb } Db.prototype.Se = !0;
Db.prototype.Hd = function() { return this.eg };
Db.prototype.Am = !0;
Db.prototype.Vg = function() { return 1 };

function Fb(a) { if (a instanceof Db && a.constructor === Db && a.Wr === Eb) return a.eg;
    ea(a); return "type_error:SafeUrl" }
var Gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function Hb(a) { if (a instanceof Db) return a;
    a = a.Se ? a.Hd() : String(a);
    Gb.test(a) || (a = "about:invalid#zClosurez"); return Ib(a) }
var Eb = {};

function Ib(a) { var b = new Db;
    b.eg = a; return b } Ib("about:blank");

function Jb() { this.ln = "";
    this.Vr = Kb } Jb.prototype.Se = !0;
var Kb = {};
Jb.prototype.Hd = function() { return this.ln };
Jb.prototype.lk = function(a) { this.ln = a; return this };
var Lb = (new Jb).lk("");

function Mb(a) { var b = "",
        c; for (c in a) { if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c); var e = a[c];
        null != e && (e = u(e) ? ta(e, Nb).join(" ") : Nb(e), b += c + ":" + e + ";") } return b ? (new Jb).lk(b) : Lb }

function Nb(a) { if (a instanceof Db) a = 'url("' + Fb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    else if (a instanceof yb) a = Ab(a);
    else { a = String(a); var b = a.replace(Ob, "$1").replace(Pb, "url"); if (b = Qb.test(b)) { for (var c = b = !0, e = 0; e < a.length; e++) { var f = a.charAt(e); "'" == f && c ? b = !b : '"' == f && b && (c = !c) } b = b && c } a = b ? Rb(a) : "zClosurez" } return a }
var Qb = /^[-,."'%_!# a-zA-Z0-9]+$/,
    Pb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    Ob = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

function Rb(a) { return a.replace(Pb, function(a, c, e, f) { var b = "";
        e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) { b = c; return e });
        a = Hb(e).Hd(); return c + b + a + b + f }) };

function Sb() { this.eg = "";
    this.Ur = Tb;
    this.rp = null } Sb.prototype.Am = !0;
Sb.prototype.Vg = function() { return this.rp };
Sb.prototype.Se = !0;
Sb.prototype.Hd = function() { return this.eg };

function Ub(a) { if (a instanceof Sb && a.constructor === Sb && a.Ur === Tb) return a.eg;
    ea(a); return "type_error:SafeHtml" }

function Vb(a) { if (a instanceof Sb) return a; var b = null;
    a.Am && (b = a.Vg()); return Wb(Ia(a.Se ? a.Hd() : String(a)), b) }
var Xb = /^[a-zA-Z0-9-]+$/,
    Yb = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
    Zb = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };

function $b(a, b, c) {
    var e = String(a);
    if (!Xb.test(e)) throw Error("Invalid tag name <" + e + ">.");
    if (e.toUpperCase() in Zb) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
    a = String(a);
    e = null;
    var f = "<" + a,
        h = "";
    if (b)
        for (n in b) {
            if (!Xb.test(n)) throw Error('Invalid attribute name "' + n + '".');
            var k = b[n];
            if (null != k) {
                var l = a;
                var m = n;
                if (k instanceof yb) k = Ab(k);
                else if ("style" == m.toLowerCase()) {
                    if (!ha(k)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k +
                        " given: " + k);
                    k instanceof Jb || (k = Mb(k));
                    k instanceof Jb && k.constructor === Jb && k.Vr === Kb ? k = k.ln : (ea(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(m)) throw Error('Attribute "' + m + '" requires goog.string.Const value, "' + k + '" given.');
                    if (m.toLowerCase() in Yb)
                        if (k instanceof Bb) k instanceof Bb && k.constructor === Bb && k.Zr === Cb ? k = k.Lq : (ea(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof Db) k = Fb(k);
                    else if (q(k)) k = Hb(k).Hd();
                    else throw Error('Attribute "' + m + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                        k + '" given.');
                }
                k.Se && (k = k.Hd());
                m = m + '="' + Ia(String(k)) + '"';
                h += " " + m
            }
        }
    var n = f + h;
    null != c ? u(c) || (c = [c]) : c = [];
    !0 === xb[a.toLowerCase()] ? n += ">" : (c = ac(c), n += ">" + Ub(c) + "</" + a + ">", e = c.Vg());
    (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return Wb(n, e)
}

function ac(a) {
    function b(a) { u(a) ? z(a, b) : (a = Vb(a), e += Ub(a), a = a.Vg(), 0 == c ? c = a : 0 != a && c != a && (c = null)) } var c = 0,
        e = "";
    z(arguments, b); return Wb(e, c) }
var Tb = {};

function Wb(a, b) { return (new Sb).lk(a, b) } Sb.prototype.lk = function(a, b) { this.eg = a;
    this.rp = b; return this };
Wb("<!DOCTYPE html>", 0);
var bc = Wb("", 0),
    cc = Wb("<br>", 0);

function dc(a, b) { a.innerHTML = Ub(b) };

function ec(a) { return a * Math.PI / 180 };

function F(a, b) { this.x = aa(a) ? a : 0;
    this.y = aa(b) ? b : 0 } d = F.prototype;
d.clone = function() { return new F(this.x, this.y) };

function fc(a, b) { return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1 }

function gc(a, b) { var c = a.x - b.x;
    a = a.y - b.y; return Math.sqrt(c * c + a * a) }

function hc(a, b) { return new F(a.x - b.x, a.y - b.y) }

function ic(a, b) { return new F(a.x + b.x, a.y + b.y) } d.ceil = function() { this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y); return this };
d.floor = function() { this.x = Math.floor(this.x);
    this.y = Math.floor(this.y); return this };
d.round = function() { this.x = Math.round(this.x);
    this.y = Math.round(this.y); return this };
d.translate = function(a, b) { a instanceof F ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), t(b) && (this.y += b)); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.x *= a;
    this.y *= b; return this };

function jc(a, b) { this.width = a;
    this.height = b } d = jc.prototype;
d.clone = function() { return new jc(this.width, this.height) };
d.qs = function() { return this.width * this.height };
d.aspectRatio = function() { return this.width / this.height };
d.aq = function() { return !this.qs() };
d.ceil = function() { this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height); return this };
d.floor = function() { this.width = Math.floor(this.width);
    this.height = Math.floor(this.height); return this };
d.round = function() { this.width = Math.round(this.width);
    this.height = Math.round(this.height); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.width *= a;
    this.height *= b; return this };

function kc(a) { return a ? new lc(mc(a)) : pa || (pa = new lc) }

function nc(a, b) { var c = document;
    b = b || c; if (b.querySelectorAll && b.querySelector) return b.querySelectorAll("TBODY" + (a ? "." + a : "")); if (a && b.getElementsByClassName) { b = b.getElementsByClassName(a);
        c = {}; for (var e = 0, f = 0, h; h = b[f]; f++) "TBODY" == h.nodeName && (c[e++] = h);
        c.length = e; return c } b = b.getElementsByTagName("TBODY"); if (a) { c = {}; for (f = e = 0; h = b[f]; f++) { var k = h.className; "function" == typeof k.split && wa(k.split(/\s+/), a) && (c[e++] = h) } c.length = e; return c } return b }

function oc(a, b) { Za(b, function(b, e) { b && b.Se && (b = b.Hd()); "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : pc.hasOwnProperty(e) ? a.setAttribute(pc[e], b) : Ea(e, "aria-") || Ea(e, "data-") ? a.setAttribute(e, b) : a[e] = b }) }
var pc = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

function qc() { var a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body; return new jc(a.clientWidth, a.clientHeight) }

function rc(a) { var b = sc(a);
    a = a.parentWindow || a.defaultView; return B && rb("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop) }

function sc(a) { return a.scrollingElement ? a.scrollingElement : E || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement }

function G(a, b, c) { return tc(document, arguments) }

function tc(a, b) { var c = String(b[0]),
        e = b[1]; if (!ub && e && (e.name || e.type)) { c = ["<", c];
        e.name && c.push(' name="', Ia(e.name), '"'); if (e.type) { c.push(' type="', Ia(e.type), '"'); var f = {};
            ab(f, e);
            delete f.type;
            e = f } c.push(">");
        c = c.join("") } c = a.createElement(c);
    e && (q(e) ? c.className = e : u(e) ? c.className = e.join(" ") : oc(c, e));
    2 < b.length && uc(a, c, b, 2); return c }

function uc(a, b, c, e) {
    function f(c) { c && b.appendChild(q(c) ? a.createTextNode(c) : c) } for (; e < c.length; e++) { var h = c[e];!fa(h) || ha(h) && 0 < h.nodeType ? f(h) : z(vc(h) ? za(h) : h, f) } }

function wc(a) { for (var b; b = a.firstChild;) a.removeChild(b) }

function yc(a, b) { b.parentNode && b.parentNode.insertBefore(a, b.nextSibling) }

function H(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null }

function zc(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }

function mc(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

function Ac(a, b) { if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b) } else wc(a), a.appendChild(mc(a).createTextNode(String(b))) }
var Bc = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    Cc = { IMG: " ", BR: "\n" };

function Dc(a) { return B && !rb("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex") }

function Ec(a) { a = a.tabIndex; return t(a) && 0 <= a && 32768 > a }

function Fc(a) { if (wb && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else { var b = [];
        Gc(a, b, !0);
        a = b.join("") } a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    wb || (a = a.replace(/ +/g, " ")); " " != a && (a = a.replace(/^\s*/, "")); return a }

function Hc(a) { var b = [];
    Gc(a, b, !1); return b.join("") }

function Gc(a, b, c) { if (!(a.nodeName in Bc))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in Cc) b.push(Cc[a.nodeName]);
    else
        for (a = a.firstChild; a;) Gc(a, b, c), a = a.nextSibling }

function vc(a) { if (a && "number" == typeof a.length) { if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item; if (w(a)) return "function" == typeof a.item } return !1 }

function lc(a) { this.fd = a || g.document || document } d = lc.prototype;
d.Wb = kc;
d.D = function(a) { return q(a) ? this.fd.getElementById(a) : a };
d.getElementsByTagName = function(a, b) { return (b || this.fd).getElementsByTagName(String(a)) };
d.setProperties = oc;
d.M = function(a, b, c) { return tc(this.fd, arguments) };
d.createElement = function(a) { return this.fd.createElement(String(a)) };
d.createTextNode = function(a) { return this.fd.createTextNode(String(a)) };
d.Vo = function(a, b) { for (var c = this.fd, e = c.createElement("TABLE"), f = e.appendChild(c.createElement("TBODY")), h = 0; h < a; h++) { for (var k = c.createElement("TR"), l = 0; l < b; l++) k.appendChild(c.createElement("TD"));
        f.appendChild(k) } return e };
d.appendChild = function(a, b) { a.appendChild(b) };
d.append = function(a, b) { uc(mc(a), a, arguments, 1) };
d.canHaveChildren = function(a) { if (1 != a.nodeType) return !1; switch (a.tagName) {
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
d.Rq = wc;
d.removeNode = H;
d.Ne = function(a) { return vb && void 0 != a.children ? a.children : sa(a.childNodes, function(a) { return 1 == a.nodeType }) };
d.contains = zc;
d.le = function(a) { var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Dc(a) || Ec(a)) : Dc(a) && Ec(a)) && B ? (a = !w(a.getBoundingClientRect) || B && null == a.parentElement ? { height: a.offsetHeight, width: a.offsetWidth } : a.getBoundingClientRect(), a = null != a && 0 < a.height && 0 < a.width) : a = b; return a };

function Ic(a) { if (a.mi && "function" == typeof a.mi) return a.mi(); if (q(a)) return a.split(""); if (fa(a)) { for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]); return b } b = [];
    c = 0; for (e in a) b[c++] = a[e]; return b };
var Jc = "StopIteration" in g ? g.StopIteration : { message: "StopIteration", stack: "" };

function Kc() {} Kc.prototype.next = function() { throw Jc; };
Kc.prototype.vo = function() { return this };

function Lc(a) { if (a instanceof Kc) return a; if ("function" == typeof a.vo) return a.vo(); if (fa(a)) { var b = 0,
            c = new Kc;
        c.next = function() { for (;;) { if (b >= a.length) throw Jc; if (b in a) return a[b++];
                b++ } }; return c } throw Error("Not implemented"); }

function Mc(a) { try { return Lc(a).next() } catch (b) { if (b != Jc) throw b; return null } };
var Nc = {},
    Oc = {};

function Pc() { throw Error("Do not instantiate directly"); } Pc.prototype.Ql = null;
Pc.prototype.mc = function() { return this.content };
Pc.prototype.toString = function() { return this.content };
Pc.prototype.kl = function() { if (this.Rl === Oc) return Vb(this.toString()); if (this.Rl !== Nc) throw Error("Sanitized content was not of kind TEXT or HTML."); return Wb(this.toString(), this.Ql || null) };

function Qc(a, b) { null != a && this.append.apply(this, arguments) } d = Qc.prototype;
d.gb = "";
d.set = function(a) { this.gb = "" + a };
d.append = function(a, b, c) { this.gb += String(a); if (null != b)
        for (var e = 1; e < arguments.length; e++) this.gb += arguments[e]; return this };
d.clear = function() { this.gb = "" };
d.toString = function() { return this.gb };

function Rc(a) { if (null != a) switch (a.Ql) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0 }
    return null }

function Sc() { Pc.call(this) } y(Sc, Pc);
Sc.prototype.Rl = Nc;

function Tc(a) { return null != a && a.Rl === Nc ? a : Uc(String(String(a)).replace(Vc, Wc), Rc(a)) }
var Uc = function(a) {
        function b() {} b.prototype = a.prototype; return function(a, e) { var c = new b;
            c.content = String(a);
            void 0 !== e && (c.Ql = e); return c } }(Sc),
    Xc = { "\x00": "&#0;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", "-": "&#45;", "/": "&#47;", "=": "&#61;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };

function Wc(a) { return Xc[a] }
var Vc = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Yc() { return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>' };

function Zc() {
    var a = $c;
    return '<div style="display: none"><span id="Puzzle_animal1">Con vịt</span><span id="Puzzle_animal1Pic">duck.png</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Lông vũ</span><span id="Puzzle_animal1Trait2">Mỏ</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Con mèo</span><span id="Puzzle_animal2Pic">cat.png</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Ria mép</span><span id="Puzzle_animal2Trait2">Lông</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Con ong</span><span id="Puzzle_animal3Pic">bee.png</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mật ong</span><span id="Puzzle_animal3Trait2">Ngòi</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Con sên</span><span id="Puzzle_animal4Pic">snail.png</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Vỏ</span><span id="Puzzle_animal4Trait2">Nhớt</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">Ảnh:</span><span id="Puzzle_legs">Số chân:</span><span id="Puzzle_legsChoose">Chọn...</span><span id="Puzzle_traits">Đặc điểm:</span><span id="Puzzle_error0">Perfect!\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\nKeep trying.</span></div><table id="header" width="100%"><tr><td valign="bottom"><h1>' +
        ('<span id="title">' + (ad ? '<a href="index.html?lang=' + Tc(a) + '">' : '<a href="./?lang=' + Tc(a) + '">') + "Blockly Games</a> : " + Tc({ appName: "Ghép hình" }.appName) + "</span>") + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Help</button>&nbsp;<button id="checkButton" class="primary">Check Answers</button></td></tr></table><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Đối với mỗi con vật (màu xanh lá cây), đính kèm hình ảnh của nó, chọn số chân của nó và tạo một chồng các đặc điểm của nó.</div><div id="sample" class="readonly"></div>' +
        Yc() + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + Yc() + "</div>"
};
// Copyright 2013 Google Inc.  Apache License 2.0
var I = {};
I.$a = Object(null);
var bd = !B || 9 <= Number(sb),
    cd = !B || 9 <= Number(sb),
    dd = B && !rb("9"),
    ed = "ontouchstart" in g || !!(g.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.navigator || !g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints),
    gd = "PointerEvent" in g,
    hd = "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
    id = function() {
        if (!g.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
        g.addEventListener("test",
            ca, b);
        g.removeEventListener("test", ca, b);
        return a
    }();

function jd() { 0 != kd && (ld[ia(this)] = this);
    this.Og = this.Og;
    this.ne = this.ne }
var kd = 0,
    ld = {};
jd.prototype.Og = !1;
jd.prototype.v = function() { if (!this.Og && (this.Og = !0, this.Ha(), 0 != kd)) { var a = ia(this); if (0 != kd && this.ne && 0 < this.ne.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete ld[a] } };

function md(a, b) { a.Og ? aa(void 0) ? b.call(void 0) : b() : (a.ne || (a.ne = []), a.ne.push(aa(void 0) ? na(b, void 0) : b)) } jd.prototype.Ha = function() { if (this.ne)
        for (; this.ne.length;) this.ne.shift()() };

function nd(a) { a && "function" == typeof a.v && a.v() };

function od(a, b) { this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.fg = !1;
    this.Sq = !0 } od.prototype.stopPropagation = function() { this.fg = !0 };
od.prototype.preventDefault = function() { this.defaultPrevented = !0;
    this.Sq = !1 };

function pd(a) { return E ? "webkit" + a : fb ? "o" + a.toLowerCase() : a.toLowerCase() }
var qd = {
        Tv: "click",
        Yx: "rightclick",
        cw: "dblclick",
        Eg: "mousedown",
        Fg: "mouseup",
        Jh: "mouseover",
        Ih: "mouseout",
        Qr: "mousemove",
        Or: "mouseenter",
        Pr: "mouseleave",
        Dg: "mousecancel",
        ey: "selectionchange",
        gy: "selectstart",
        Jy: "wheel",
        Rw: "keypress",
        Qw: "keydown",
        Sw: "keyup",
        Qv: "blur",
        Hw: "focus",
        dw: "deactivate",
        Iw: "focusin",
        Jw: "focusout",
        Bg: "change",
        Vx: "reset",
        by: "select",
        py: "submit",
        Ow: "input",
        Rx: "propertychange",
        uw: "dragstart",
        pw: "drag",
        rw: "dragenter",
        tw: "dragover",
        sw: "dragleave",
        zw: "drop",
        qw: "dragend",
        yy: "touchstart",
        xy: "touchmove",
        wy: "touchend",
        vy: "touchcancel",
        Lv: "beforeunload",
        Yv: "consolemessage",
        Zv: "contextmenu",
        ew: "devicechange",
        fw: "devicemotion",
        gw: "deviceorientation",
        jw: "DOMContentLoaded",
        Ew: "error",
        Nw: "help",
        Tw: "load",
        ax: "losecapture",
        Bx: "orientationchange",
        Tx: "readystatechange",
        Wx: "resize",
        Zx: "scroll",
        Ay: "unload",
        Rv: "canplay",
        Sv: "canplaythrough",
        Bw: "durationchange",
        Cw: "emptied",
        Dw: "ended",
        Ww: "loadeddata",
        Xw: "loadedmetadata",
        Fx: "pause",
        Gx: "play",
        Hx: "playing",
        Sx: "ratechange",
        $x: "seeked",
        ay: "seeking",
        ly: "stalled",
        qy: "suspend",
        uy: "timeupdate",
        Hy: "volumechange",
        Iy: "waiting",
        ky: "sourceopen",
        jy: "sourceended",
        iy: "sourceclosed",
        xv: "abort",
        Cy: "update",
        Fy: "updatestart",
        Dy: "updateend",
        Mw: "hashchange",
        Cx: "pagehide",
        Dx: "pageshow",
        Qx: "popstate",
        aw: "copy",
        Ex: "paste",
        bw: "cut",
        Fv: "beforecopy",
        Gv: "beforecut",
        Jv: "beforepaste",
        Ax: "online",
        zx: "offline",
        ex: "message",
        Xv: "connect",
        Pw: "install",
        yv: "activate",
        Gw: "fetch",
        Kw: "foreignfetch",
        gx: "messageerror",
        ny: "statechange",
        Ey: "updatefound",
        $v: "controllerchange",
        Dv: pd("AnimationStart"),
        Bv: pd("AnimationEnd"),
        Cv: pd("AnimationIteration"),
        zy: pd("TransitionEnd"),
        Jx: "pointerdown",
        Px: "pointerup",
        Ix: "pointercancel",
        Mx: "pointermove",
        Ox: "pointerover",
        Nx: "pointerout",
        Kx: "pointerenter",
        Lx: "pointerleave",
        Lw: "gotpointercapture",
        bx: "lostpointercapture",
        hx: "MSGestureChange",
        ix: "MSGestureEnd",
        jx: "MSGestureHold",
        kx: "MSGestureStart",
        lx: "MSGestureTap",
        mx: "MSGotPointerCapture",
        nx: "MSInertiaStart",
        ox: "MSLostPointerCapture",
        px: "MSPointerCancel",
        qx: "MSPointerDown",
        sx: "MSPointerEnter",
        tx: "MSPointerHover",
        ux: "MSPointerLeave",
        vx: "MSPointerMove",
        wx: "MSPointerOut",
        xx: "MSPointerOver",
        yx: "MSPointerUp",
        sy: "text",
        ty: B ? "textinput" : "textInput",
        Vv: "compositionstart",
        Wv: "compositionupdate",
        Uv: "compositionend",
        Hv: "beforeinput",
        Fw: "exit",
        Uw: "loadabort",
        Vw: "loadcommit",
        Yw: "loadredirect",
        Zw: "loadstart",
        $w: "loadstop",
        Xx: "responsive",
        hy: "sizechanged",
        By: "unresponsive",
        Gy: "visibilitychange",
        oy: "storage",
        ow: "DOMSubtreeModified",
        kw: "DOMNodeInserted",
        mw: "DOMNodeRemoved",
        nw: "DOMNodeRemovedFromDocument",
        lw: "DOMNodeInsertedIntoDocument",
        hw: "DOMAttrModified",
        iw: "DOMCharacterDataModified",
        Kv: "beforeprint",
        Av: "afterprint",
        Iv: "beforeinstallprompt",
        Ev: "appinstalled"
    },
    rd = {
        Eg: gd ? "pointerdown" : hd ? "MSPointerDown" : "mousedown",
        Fg: gd ? "pointerup" : hd ? "MSPointerUp" : "mouseup",
        Dg: gd ? "pointercancel" : hd ? "MSPointerCancel" : "mousecancel",
        Qr: gd ? "pointermove" : hd ? "MSPointerMove" : "mousemove",
        Jh: gd ? "pointerover" : hd ? "MSPointerOver" : "mouseover",
        Ih: gd ? "pointerout" : hd ? "MSPointerOut" : "mouseout",
        Or: gd ? "pointerenter" : hd ? "MSPointerEnter" : "mouseenter",
        Pr: gd ? "pointerleave" : hd ? "MSPointerLeave" : "mouseleave"
    };

function sd(a, b) { od.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.dn = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.Ad = null;
    a && this.ea(a, b) } y(sd, od);
var td = [1, 4, 2],
    ud = { 2: "touch", 3: "pen", 4: "mouse" };
sd.prototype.ea = function(a, b) {
    var c = this.type = a.type,
        e = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) { if (D) { a: { try { cb(b.nodeName); var f = !0; break a } catch (h) {} f = !1 } f || (b = null) } } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === e ? (this.offsetX = E || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = E || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.dn = ib ? a.metaKey : a.ctrlKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = q(a.pointerType) ? a.pointerType : ud[a.pointerType] || "";
    this.state = a.state;
    this.Ad = a;
    a.defaultPrevented && this.preventDefault()
};

function vd(a) { return bd ? 0 == a.Ad.button : "click" == a.type ? !0 : !!(a.Ad.button & td[0]) } sd.prototype.stopPropagation = function() { sd.m.stopPropagation.call(this);
    this.Ad.stopPropagation ? this.Ad.stopPropagation() : this.Ad.cancelBubble = !0 };
sd.prototype.preventDefault = function() { sd.m.preventDefault.call(this); var a = this.Ad; if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, dd) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
var wd = "closure_listenable_" + (1E6 * Math.random() | 0);

function xd(a) { return !(!a || !a[wd]) }
var yd = 0;

function zd(a, b, c, e, f) { this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!e;
    this.jk = f;
    this.key = ++yd;
    this.sh = this.yj = !1 }

function Ad(a) { a.sh = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.jk = null };

function Bd(a) { this.src = a;
    this.bc = {};
    this.lj = 0 } Bd.prototype.add = function(a, b, c, e, f) { var h = a.toString();
    a = this.bc[h];
    a || (a = this.bc[h] = [], this.lj++); var k = Cd(a, b, e, f); - 1 < k ? (b = a[k], c || (b.yj = !1)) : (b = new zd(b, this.src, h, !!e, f), b.yj = c, a.push(b)); return b };
Bd.prototype.remove = function(a, b, c, e) { a = a.toString(); if (!(a in this.bc)) return !1; var f = this.bc[a];
    b = Cd(f, b, c, e); return -1 < b ? (Ad(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.bc[a], this.lj--), !0) : !1 };

function Dd(a, b) { var c = b.type;
    c in a.bc && xa(a.bc[c], b) && (Ad(b), 0 == a.bc[c].length && (delete a.bc[c], a.lj--)) } Bd.prototype.removeAll = function(a) { a = a && a.toString(); var b = 0,
        c; for (c in this.bc)
        if (!a || c == a) { for (var e = this.bc[c], f = 0; f < e.length; f++) ++b, Ad(e[f]);
            delete this.bc[c];
            this.lj-- } return b };
Bd.prototype.ji = function(a, b, c, e) { a = this.bc[a.toString()]; var f = -1;
    a && (f = Cd(a, b, c, e)); return -1 < f ? a[f] : null };

function Cd(a, b, c, e) { for (var f = 0; f < a.length; ++f) { var h = a[f]; if (!h.sh && h.listener == b && h.capture == !!c && h.jk == e) return f } return -1 };
var Ed = "closure_lm_" + (1E6 * Math.random() | 0),
    Fd = {},
    Gd = 0;

function J(a, b, c, e, f) { if (e && e.once) return Hd(a, b, c, e, f); if (u(b)) { for (var h = 0; h < b.length; h++) J(a, b[h], c, e, f); return null } c = Id(c); return xd(a) ? a.ga(b, c, ha(e) ? !!e.capture : !!e, f) : Jd(a, b, c, !1, e, f) }

function Jd(a, b, c, e, f, h) { if (!b) throw Error("Invalid event type"); var k = ha(f) ? !!f.capture : !!f,
        l = Kd(a);
    l || (a[Ed] = l = new Bd(a));
    c = l.add(b, c, e, k, h); if (c.proxy) return c;
    e = Ld();
    c.proxy = e;
    e.src = a;
    e.listener = c; if (a.addEventListener) id || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), e, f);
    else if (a.attachEvent) a.attachEvent(Md(b.toString()), e);
    else if (a.addListener && a.removeListener) a.addListener(e);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Gd++; return c }

function Ld() { var a = Nd,
        b = cd ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c }; return b }

function Hd(a, b, c, e, f) { if (u(b)) { for (var h = 0; h < b.length; h++) Hd(a, b[h], c, e, f); return null } c = Id(c); return xd(a) ? a.hq(b, c, ha(e) ? !!e.capture : !!e, f) : Jd(a, b, c, !0, e, f) }

function Od(a, b, c, e, f) { if (u(b))
        for (var h = 0; h < b.length; h++) Od(a, b[h], c, e, f);
    else e = ha(e) ? !!e.capture : !!e, c = Id(c), xd(a) ? a.Jc(b, c, e, f) : a && (a = Kd(a)) && (b = a.ji(b, c, e, f)) && Pd(b) }

function Pd(a) { if (!t(a) && a && !a.sh) { var b = a.src; if (xd(b)) Dd(b.ae, a);
        else { var c = a.type,
                e = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(Md(c), e) : b.addListener && b.removeListener && b.removeListener(e);
            Gd--;
            (c = Kd(b)) ? (Dd(c, a), 0 == c.lj && (c.src = null, b[Ed] = null)) : Ad(a) } } }

function Md(a) { return a in Fd ? Fd[a] : Fd[a] = "on" + a }

function Qd(a, b, c, e) { var f = !0; if (a = Kd(a))
        if (b = a.bc[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) { var h = b[a];
                h && h.capture == c && !h.sh && (h = Rd(h, e), f = f && !1 !== h) }
    return f }

function Rd(a, b) { var c = a.listener,
        e = a.jk || a.src;
    a.yj && Pd(a); return c.call(e, b) }

function Nd(a, b) {
    if (a.sh) return !0;
    if (!cd) {
        if (!b) a: { b = ["window", "event"]; for (var c = g, e = 0; e < b.length; e++)
                if (c = c[b[e]], null == c) { b = null; break a } b = c } e = b;
        b = new sd(e, this);
        c = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: { var f = !1; if (0 == e.keyCode) try { e.keyCode = -1; break a } catch (k) { f = !0 }
                if (f || void 0 == e.returnValue) e.returnValue = !0 } e = [];
            for (f = b.currentTarget; f; f = f.parentNode) e.push(f);a = a.type;
            for (f = e.length - 1; !b.fg && 0 <= f; f--) { b.currentTarget = e[f]; var h = Qd(e[f], a, !0, b);
                c = c && h }
            for (f = 0; !b.fg && f < e.length; f++) b.currentTarget =
                e[f],
            h = Qd(e[f], a, !1, b),
            c = c && h
        }
        return c
    }
    return Rd(a, new sd(b, this))
}

function Kd(a) { a = a[Ed]; return a instanceof Bd ? a : null }
var Sd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Id(a) { if (w(a)) return a;
    a[Sd] || (a[Sd] = function(b) { return a.handleEvent(b) }); return a[Sd] };
// Copyright 2016 Google Inc.  Apache License 2.0
I.Touch = {};
I.Touch.jj = null;
I.Touch.ud = {};
g.PointerEvent ? I.Touch.ud = { mousedown: ["pointerdown"], mouseenter: ["pointerenter"], mouseleave: ["pointerleave"], mousemove: ["pointermove"], mouseout: ["pointerout"], mouseover: ["pointerover"], mouseup: ["pointerup", "pointercancel"], touchend: ["pointerup"], touchcancel: ["pointercancel"] } : ed && (I.Touch.ud = { mousedown: ["touchstart"], mousemove: ["touchmove"], mouseup: ["touchend", "touchcancel"] });
I.Ak = 0;
I.mu = function(a, b) { I.$e();
    a.changedTouches && 1 != a.changedTouches.length || (I.Ak = setTimeout(function() { a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        b && Td(b, a) }, I.Mr)) };
I.$e = function() { I.Ak && (clearTimeout(I.Ak), I.Ak = 0) };
I.Touch.$d = function() { I.Touch.jj = null };
I.Touch.Kn = function(a) { return !I.Touch.du(a) || I.Touch.Fs(a) };
I.Touch.fk = function(a) { return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 != a.changedTouches[0].identifier && null != a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse" };
I.Touch.Fs = function(a) { var b = I.Touch.fk(a); return void 0 != I.Touch.jj && null != I.Touch.jj ? I.Touch.jj == b : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (I.Touch.jj = b, !0) : !1 };
I.Touch.Xu = function(a) { if (Ea(a.type, "touch")) { var b = a.changedTouches[0];
        a.clientX = b.clientX;
        a.clientY = b.clientY } };
I.Touch.du = function(a) { return Ea(a.type, "touch") || Ea(a.type, "mouse") || Ea(a.type, "pointer") };
I.Touch.vk = function(a) { return Ea(a.type, "touch") || Ea(a.type, "pointer") };
I.Touch.$u = function(a) { var b = []; if (a.changedTouches)
        for (var c = 0; c < a.changedTouches.length; c++) b[c] = { type: a.type, changedTouches: [a.changedTouches[c]], target: a.target, stopPropagation: function() { a.stopPropagation() }, preventDefault: function() { a.preventDefault() } };
    else b.push(a); return b };
I.i = {};
I.i.gk = "";
I.i.Pb = !0;
I.i.$l = 0;
I.i.tj = "create";
I.i.Nv = I.i.tj;
I.i.rl = "delete";
I.i.Ov = I.i.rl;
I.i.Bg = "change";
I.i.Mv = I.i.Bg;
I.i.Kh = "move";
I.i.Pv = I.i.Kh;
I.i.so = "var_create";
I.i.to = "var_delete";
I.i.uo = "var_rename";
I.i.Al = "ui";
I.i.ao = "comment_create";
I.i.bo = "comment_delete";
I.i.$n = "comment_change";
I.i.co = "comment_move";
I.i.Gh = [];
I.i.L = function(a) { I.i.isEnabled() && (I.i.Gh.length || setTimeout(I.i.vt, 0), I.i.Gh.push(a)) };
I.i.vt = function() { for (var a = I.i.filter(I.i.Gh, !0), b = I.i.Gh.length = 0, c; c = a[b]; b++) { var e = Ud[c.gc] || null; if (e) { var f = c;
            f.Pb && (e.vg.push(f), e.Vi.length = 0, e.vg.length > e.Nr && e.vg.unshift()); for (var h = 0; c = e.cc[h]; h++) c(f) } } };
I.i.filter = function(a, b) {
    a = za(a);
    b || a.reverse();
    for (var c = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.eh()) { var k = [h.type, h.Gb, h.gc].join(" "),
                l = e[k];
            l ? h.type == I.i.Kh ? (l.$f = h.$f, l.Zf = h.Zf, l.bf = h.bf) : h.type == I.i.Bg && h.element == l.element && h.name == l.name ? l.newValue = h.newValue : h.type != I.i.Al || "click" != h.element || "commentOpen" != l.element && "mutatorOpen" != l.element && "warningOpen" != l.element ? (e[k] = h, c.push(h)) : l.newValue = h.newValue : (e[k] = h, c.push(h)) } a = c.filter(function(a) { return !a.eh() });
    b || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == I.i.Bg && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
I.i.Hs = function() { for (var a = 0, b; b = I.i.Gh[a]; a++) b.Pb = !1 };
I.i.disable = function() { I.i.$l++ };
I.i.enable = function() { I.i.$l-- };
I.i.isEnabled = function() { return 0 == I.i.$l };
I.i.Yb = function() { return I.i.gk };
I.i.O = function(a) { I.i.gk = "boolean" == typeof a ? a ? I.h.Cd() : "" : a };
I.i.Fp = function(a) { var b = [];
    a = K(a, !1); for (var c = 0, e; e = a[c]; c++) b[c] = e.id; return b };
I.i.X = function(a, b) {
    switch (a.type) {
        case I.i.tj:
            var c = new Vd(null); break;
        case I.i.rl:
            c = new Wd(null); break;
        case I.i.Bg:
            c = new Xd(null, "", "", "", ""); break;
        case I.i.Kh:
            c = new Yd(null); break;
        case I.i.so:
            c = new Zd(null); break;
        case I.i.to:
            c = new $d(null); break;
        case I.i.uo:
            c = new ae(null, ""); break;
        case I.i.Al:
            c = new L(null); break;
        case I.i.ao:
            c = new be(null); break;
        case I.i.$n:
            c = new ce(null); break;
        case I.i.co:
            c = new de(null); break;
        case I.i.bo:
            c = new ee(null); break;
        default:
            throw "Unknown event type."; } c.X(a);
    c.gc = b.id;
    return c
};
I.i.az = function(a) { if (a.type == I.i.Kh || a.type == I.i.tj) { var b = Ud[a.gc] || null; if (a = fe(b, a.Gb))
            if (a.getParent() && !a.getParent().disabled) { b = K(a, !1);
                a = 0; for (var c; c = b[a]; a++) c.mf(!1) } else if ((a.T || a.W) && !b.tb()) { do a.mf(!0), a = ge(a); while (a) } } };
// Copyright 2018 Google Inc.  Apache License 2.0
function he() { this.gc = void 0;
    this.group = I.i.gk;
    this.Pb = I.i.Pb } he.prototype.ta = function() { var a = { type: this.type };
    this.group && (a.group = this.group); return a };
he.prototype.X = function(a) { this.group = a.group };
he.prototype.eh = function() { return !1 };
he.prototype.run = function() {};

function ie(a) { a = Ud[a.gc] || null; if (!a) throw Error("Workspace is null. Event must have been generated from real Blockly events."); return a };

function je(a) { je.m.constructor.call(this);
    this.wf = a.ia();
    this.gc = a.o.id } y(je, he);
je.prototype.ta = function() { var a = je.m.ta.call(this);
    a.varId = this.wf; return a };
je.prototype.X = function(a) { je.m.ta.call(this);
    this.wf = a.varId };

function Zd(a) { a && (Zd.m.constructor.call(this, a), this.xg = a.type, this.wg = a.name) } y(Zd, je);
Zd.prototype.type = I.i.so;
Zd.prototype.ta = function() { var a = Zd.m.ta.call(this);
    a.varType = this.xg;
    a.varName = this.wg; return a };
Zd.prototype.X = function(a) { Zd.m.X.call(this, a);
    this.xg = a.varType;
    this.wg = a.varName };
Zd.prototype.run = function(a) { var b = ie(this);
    a ? b.Uc(this.wg, this.xg, this.wf) : b.If(this.wf) };

function $d(a) { a && ($d.m.constructor.call(this, a), this.xg = a.type, this.wg = a.name) } y($d, je);
$d.prototype.type = I.i.to;
$d.prototype.ta = function() { var a = $d.m.ta.call(this);
    a.varType = this.xg;
    a.varName = this.wg; return a };
$d.prototype.X = function(a) { $d.m.X.call(this, a);
    this.xg = a.varType;
    this.wg = a.varName };
$d.prototype.run = function(a) { var b = ie(this);
    a ? b.If(this.wf) : b.Uc(this.wg, this.xg, this.wf) };

function ae(a, b) { a && (ae.m.constructor.call(this, a), this.Um = a.name, this.Qm = b) } y(ae, je);
ae.prototype.type = I.i.uo;
ae.prototype.ta = function() { var a = ae.m.ta.call(this);
    a.oldName = this.Um;
    a.newName = this.Qm; return a };
ae.prototype.X = function(a) { ae.m.X.call(this, a);
    this.Um = a.oldName;
    this.Qm = a.newName };
ae.prototype.run = function(a) { var b = ie(this);
    a ? b.hg(this.wf, this.Qm) : b.hg(this.wf, this.Um) };
// Copyright 2017 Google Inc.  Apache License 2.0
function ke(a) { this.va = {};
    this.o = a } d = ke.prototype;
d.clear = function() { this.va = Object(null) };
d.pn = function(a, b) { var c = this.jd(b, a.type),
        e = le(this.o);
    I.i.O(!0); try { if (c && c.ia() != a.ia()) { var f = a.type;
            b != c.name && me(c, b, e); for (b = 0; b < e.length; b++)
                for (var h = void 0, k = e[b], l = a.ia(), m = c.ia(), n = 0; h = k.aa[n]; n++)
                    for (var p = 0, r; r = h.Ma[p]; p++) r.qh() && l == r.getValue() && r.setValue(m);
            I.i.L(new $d(a));
            this.va[f].splice(this.ni(f).indexOf(a), 1) } else me(a, b, e) } finally { I.i.O(!1) } };
d.hg = function(a, b) { var c = this.Oe(a); if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.pn(c, b) };

function me(a, b, c) { I.i.L(new ae(a, b));
    a.name = b; for (b = 0; b < c.length; b++)
        for (var e, f = c[b], h = a, k = 0; e = f.aa[k]; k++)
            for (var l = 0, m; m = e.Ma[l]; l++) m.qh() && h.ia() == m.getValue() && m.wb(h.name) }
d.Uc = function(a, b, c) { var e = this.jd(a, b); if (e) { if (c && e.ia() != c) throw Error('Variable "' + a + '" is already in use and its id is "' + e.ia() + '" which conflicts with the passed in id, "' + c + '".'); return e } if (c && this.Oe(c)) throw Error('Variable id, "' + c + '", is already in use.');
    c = c || I.h.Cd();
    b = b || "";
    e = new ne(this.o, a, b, c);
    this.va[b] ? this.va[b].push(e) : this.va[b] = [e]; return e };
d.If = function(a) { var b = this.Oe(a); if (b) { var c = b.name,
            e = this.rm(a);
        a = 0; for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) { a = oe(f, "NAME");
                c = I.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace("%2", a);
                I.alert(c); return } var h = this;
        1 < e.length ? (c = I.g.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", c), I.confirm(c, function(a) { a && h.Kj(b, e) })) : h.Kj(b, e) } else console.warn("Can't delete non-existent variable: " + a) };
d.Kj = function(a, b) { var c = I.i.Yb();
    c || I.i.O(!0); try { for (var e = 0; e < b.length; e++) b[e].v(!0, !1); var f = this.va[a.type];
        b = 0; for (var h; h = f[b]; b++)
            if (h.ia() == a.ia()) { f.splice(b, 1);
                I.i.L(new $d(a)); break } } finally { c || I.i.O(!1) } };
d.jd = function(a, b) { if (b = this.va[b || ""])
        for (var c = 0, e; e = b[c]; c++)
            if (e.name.toLowerCase() == a.toLowerCase()) return e; return null };
d.Oe = function(a) { for (var b = Object.keys(this.va), c = 0; c < b.length; c++)
        for (var e = b[c], f = 0, h; h = this.va[e][f]; f++)
            if (h.ia() == a) return h; return null };
d.ni = function(a) { return (a = this.va[a || ""]) ? a.slice() : [] };
d.qm = function() { for (var a = Object.keys(this.va), b = !1, c = 0; c < a.length; c++) "" == a[c] && (b = !0);
    b || a.push(""); return a };
d.ce = function() { for (var a = [], b = Object.keys(this.va), c = 0; c < b.length; c++) a = a.concat(this.va[b[c]]); return a };
d.rm = function(a) { for (var b = [], c = le(this.o), e = 0; e < c.length; e++) { var f = pe(c[e]); if (f)
            for (var h = 0; h < f.length; h++) f[h].ia() == a && b.push(c[e]) } return b };

function qe(a) { this.ed = a.id;
    this.gc = a.o.id;
    this.group = I.i.gk;
    this.Pb = I.i.Pb } y(qe, he);
qe.prototype.ta = function() { var a = { type: this.type };
    this.group && (a.group = this.group);
    this.ed && (a.commentId = this.ed); return a };
qe.prototype.X = function(a) { this.ed = a.commentId;
    this.group = a.group };

function ce(a, b, c) { a && (ce.m.constructor.call(this, a), this.tq = b, this.Hk = c) } y(ce, qe);
d = ce.prototype;
d.type = I.i.$n;
d.ta = function() { var a = ce.m.ta.call(this);
    a.newContents = this.Hk; return a };
d.X = function(a) { ce.m.X.call(this, a);
    this.Hk = a.newValue };
d.eh = function() { return this.tq == this.Hk };
d.run = function(a) { var b = re(ie(this), this.ed);
    b ? b.ad(a ? this.Hk : this.tq) : console.warn("Can't change non-existent comment: " + this.ed) };

function be(a) { a && (be.m.constructor.call(this, a), this.xml = a.ij()) } y(be, qe);
be.prototype.type = I.i.ao;
be.prototype.ta = function() { var a = be.m.ta.call(this);
    a.xml = I.C.Wc(this.xml); return a };
be.prototype.X = function(a) { be.m.X.call(this, a);
    this.xml = I.C.fc("<xml>" + a.xml + "</xml>").firstChild };
be.prototype.run = function(a) { var b = ie(this);
    a ? (a = G("xml"), a.appendChild(this.xml), I.C.gd(a, b)) : (b = re(b, this.ed)) ? b.v(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.ed) };

function ee(a) { a && (ee.m.constructor.call(this, a), this.xml = a.ij()) } y(ee, qe);
ee.prototype.type = I.i.bo;
ee.prototype.ta = function() { return ee.m.ta.call(this) };
ee.prototype.X = function(a) { ee.m.X.call(this, a) };
ee.prototype.run = function(a) { var b = ie(this);
    a ? (b = re(b, this.ed)) ? b.v(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.ed) : (a = G("xml"), a.appendChild(this.xml), I.C.gd(a, b)) };

function de(a) { a && (de.m.constructor.call(this, a), this.Ol = a, this.Tm = a.Lc.clone(), this.Yf = null) } y(de, qe);
d = de.prototype;
d.pe = function() { if (!this.Ol) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.Yf = this.Ol.Lc.clone();
    this.Ol = null };
d.type = I.i.co;
d.ta = function() { var a = de.m.ta.call(this);
    this.Yf && (a.newCoordinate = Math.round(this.Yf.x) + "," + Math.round(this.Yf.y)); return a };
d.X = function(a) { de.m.X.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Yf = new F(parseFloat(a[0]), parseFloat(a[1]))) };
d.eh = function() { return fc(this.Tm, this.Yf) };
d.run = function(a) { var b = re(ie(this), this.ed); if (b) { a = a ? this.Yf : this.Tm; var c = b.Lc.clone();
        b.moveBy(a.x - c.x, a.y - c.y) } else console.warn("Can't move non-existent comment: " + this.ed) };

function se(a, b, c, e, f) { this.id = f && !re(a, f) ? f : I.h.Cd();
    a.Ah.push(this);
    a.Dj[this.id] && console.warn('Overriding an existing comment on this workspace, with id "' + this.id + '"');
    a.Dj[this.id] = this;
    this.Lc = new F(0, 0);
    this.wa = c;
    this.Y = e;
    this.o = a;
    this.s = a.s;
    this.Qi = this.Yh = !0;
    this.yc = b;
    this.Zp = !0;
    te(this) } d = se.prototype;
d.v = function() { if (this.o) { I.i.isEnabled() && I.i.L(new ee(this)); var a = this.o; if (!xa(a.Ah, this)) throw "Comment not present in workspace's list of top-most comments.";
        delete a.Dj[this.id];
        this.o = null } };
d.Wg = function() { return this.wa };
d.Bc = function() { return this.Y };
d.moveBy = function(a, b) { var c = new de(this);
    this.Lc.translate(a, b);
    c.pe();
    I.i.L(c) };
d.Lb = function() { return this.Yh && !(this.o && this.o.options.readOnly) };
d.Wk = function(a) { this.Yh = a };
d.Kd = function() { return this.Qi && !(this.o && this.o.options.readOnly) };
d.lg = function(a) { this.Qi = a };
d.mc = function() { return this.yc };
d.ad = function(a) { this.yc != a && (I.i.L(new ce(this, this.yc, a)), this.yc = a) };
d.ij = function(a) { a = ue(this, a);
    a.setAttribute("x", Math.round(this.Lc.x));
    a.setAttribute("y", Math.round(this.Lc.y));
    a.setAttribute("h", this.wa);
    a.setAttribute("w", this.Y); return a };

function ue(a, b) { var c = G("comment");
    b || c.setAttribute("id", a.id);
    c.textContent = a.mc(); return c }

function te(a) { if (I.i.isEnabled()) { var b = I.i.Yb();
        b || I.i.O(!0); try { I.i.L(new be(a)) } finally { b || I.i.O(!1) } } }

function ve(a) { var b = a.getAttribute("h"),
        c = a.getAttribute("w"); return { id: a.getAttribute("id"), Lp: b ? parseInt(b, 10) : 100, wr: c ? parseInt(c, 10) : 100, x: parseInt(a.getAttribute("x"), 10), y: parseInt(a.getAttribute("y"), 10), content: a.textContent } };
// Copyright 2012 Google Inc.  Apache License 2.0
function we(a) { this.id = I.h.Cd();
    Ud[this.id] = this;
    this.options = a || {};
    this.s = !!this.options.s;
    this.Id = !!this.options.Id;
    this.ua = this.options.ua;
    this.zh = [];
    this.Ah = [];
    this.Dj = Object.create(null);
    this.cc = [];
    this.vg = [];
    this.Vi = [];
    this.Gl = Object.create(null);
    this.va = new ke(this);
    this.ph = null } d = we.prototype;
d.N = !1;
d.Em = !1;
d.Nr = 1024;
d.v = function() { this.cc.length = 0;
    this.clear();
    delete Ud[this.id] };

function xe(a, b) { if (!xa(a.zh, b)) throw "Block not present in workspace's list of top-most blocks."; }

function M(a, b) { var c = [].concat(a.zh); if (b && 1 < c.length) { var e = Math.sin(ec(3));
        a.s && (e *= -1);
        c.sort(function(a, b) { a = a.ca();
            b = b.ca(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function ye(a, b) { var c = [].concat(a.Ah); if (b && 1 < c.length) { var e = Math.sin(ec(3));
        a.s && (e *= -1);
        c.sort(function(a, b) { a = a.ca();
            b = b.ca(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function le(a) { var b = M(a, !1); for (a = 0; a < b.length; a++) b.push.apply(b, b[a].Ne(!1)); return b }
d.clear = function() { this.Em = !0; try { var a = I.i.Yb(); for (a || I.i.O(!0); this.zh.length;) this.zh[0].v(); for (; this.Ah.length;) this.Ah[this.Ah.length - 1].v();
        a || I.i.O(!1);
        this.va.clear();
        this.ph && this.ph.clear() } finally { this.Em = !1 } };
d.hg = function(a, b) { this.va.hg(a, b) };
d.Uc = function(a, b, c) { return this.va.Uc(a, b, c) };
d.rm = function(a) { return this.va.rm(a) };
d.If = function(a) { this.va.If(a) };
d.Kj = function(a, b) { this.va.Kj(a, b) };
d.jd = function(a, b) { return this.va.jd(a, b) };
d.Oe = function(a) { return this.va.Oe(a) };
d.ni = function(a) { return this.va.ni(a) };
d.qm = function() { return this.va.qm() };
d.ce = function() { return this.va.ce() };
d.Bc = function() { return 0 };
d.Ri = function(a, b) { return new ze(this, a, b) };

function Ae(a) { return isNaN(a.options.iq) ? Infinity : a.options.iq - le(a).length } d.Xn = function(a) { var b = a ? this.Vi : this.vg,
        c = a ? this.vg : this.Vi,
        e = b.pop(); if (e) { for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group;) f.push(b.pop()); for (b = 0; e = f[b]; b++) c.push(e);
        f = I.i.filter(f, a);
        I.i.Pb = !1; try { for (b = 0; e = f[b]; b++) e.run(a) } finally { I.i.Pb = !0 } } };
d.Ml = function() { this.vg.length = 0;
    this.Vi.length = 0;
    I.i.Hs() };
d.Pc = function(a) { this.cc.push(a); return a };
d.ff = function(a) { xa(this.cc, a) };

function fe(a, b) { return a.Gl[b] || null }

function re(a, b) { return a.Dj[b] || null }
var Ud = Object.create(null);
we.prototype.clear = we.prototype.clear;
we.prototype.clearUndo = we.prototype.Ml;
we.prototype.addChangeListener = we.prototype.Pc;
we.prototype.removeChangeListener = we.prototype.ff;

function Be(a, b, c, e, f, h) { this.j = a;
    this.yc = b;
    this.Zq = c;
    c = Ce;
    this.j.s && (c = -c);
    this.rs = ec(c);
    a.rd.appendChild(this.Uh(b, !(!f || !h)));
    this.Qc = e;
    this.hf && De(this);
    f && h || (b = this.yc.getBBox(), f = b.width + 2 * N, h = b.height + 2 * N);
    this.kf(f, h);
    De(this);
    Ee(this);
    this.hf = !0;
    a.options.readOnly || (I.H(this.Oh, "mousedown", this, this.xs), this.ob && I.H(this.ob, "mousedown", this, this.rn)) }
var N = 6,
    Ce = 20,
    Fe = null,
    Ge = null;
d = Be.prototype;
d.qn = null;

function He() { Fe && (I.Ba(Fe), Fe = null);
    Ge && (I.Ba(Ge), Ge = null) }

function Ie() { I.Touch.$d();
    He() } d.hf = !1;
d.Qc = null;
d.rh = 0;
d.Wi = 0;
d.Y = 0;
d.wa = 0;
d.xj = !0;
d.Uh = function(a, b) {
    this.wc = I.h.A("g", {}, null);
    var c = { filter: "url(#" + this.j.options.yp + ")" }; - 1 != Wa.indexOf("JavaFX") && (c = {});
    c = I.h.A("g", c, this.wc);
    this.Il = I.h.A("path", {}, c);
    this.Oh = I.h.A("rect", { "class": "blocklyDraggable", x: 0, y: 0, rx: N, ry: N }, c);
    b ? (this.ob = I.h.A("g", { "class": this.j.s ? "blocklyResizeSW" : "blocklyResizeSE" }, this.wc), b = 2 * N, I.h.A("polygon", { points: "0,x x,x x,0".replace(/x/g, b.toString()) }, this.ob), I.h.A("line", { "class": "blocklyResizeLine", x1: b / 3, y1: b - 1, x2: b - 1, y2: b / 3 }, this.ob), I.h.A("line", { "class": "blocklyResizeLine", x1: 2 * b / 3, y1: b - 1, x2: b - 1, y2: 2 * b / 3 }, this.ob)) : this.ob = null;
    this.wc.appendChild(a);
    return this.wc
};
d.P = function() { return this.wc };

function Je(a, b) { a.wc.dataset && (a.wc.dataset.Gb = b) } d.xs = function(a) { var b = this.j.Ed(a);
    b && (b.ec || (b.ec = this), b.pc = a) };
d.wh = function() {};
d.Lb = function() { return !1 };
d.rn = function(a) { Ke(this);
    He();
    I.h.Xe(a) || (this.j.hl(a, new F(this.j.s ? -this.Y : this.Y, this.wa)), Fe = I.H(document, "mouseup", this, Ie), Ge = I.H(document, "mousemove", this, this.sn), I.yb());
    a.stopPropagation() };
d.sn = function(a) { this.xj = !1;
    a = Le(this.j, a);
    this.kf(this.j.s ? -a.x : a.x, a.y);
    this.j.s && De(this) };

function Ke(a) { var b = a.wc.parentNode; return b.lastChild !== a.wc ? (b.appendChild(a.wc), !0) : !1 }

function De(a) { var b = a.Qc.x;
    b = a.j.s ? b - (a.rh + a.Y) : b + a.rh;
    a.moveTo(b, a.Wi + a.Qc.y) } d.moveTo = function(a, b) { this.wc.setAttribute("transform", "translate(" + a + "," + b + ")") };
d.Nf = function() { return { width: this.Y, height: this.wa } };
d.kf = function(a, b) {
    var c = 2 * N;
    a = Math.max(a, c + 45);
    b = Math.max(b, c + 20);
    this.Y = a;
    this.wa = b;
    this.Oh.setAttribute("width", a);
    this.Oh.setAttribute("height", b);
    this.ob && (this.j.s ? this.ob.setAttribute("transform", "translate(" + 2 * N + "," + (b - c) + ") scale(-1 1)") : this.ob.setAttribute("transform", "translate(" + (a - c) + "," + (b - c) + ")"));
    if (this.hf) {
        if (this.xj) {
            a = -this.Y / 4;
            b = -this.wa - 25;
            c = this.j.Va();
            c.qa /= this.j.scale;
            c.fb /= this.j.scale;
            var e = this.Qc.x;
            this.j.s ? e - c.fb - a - this.Y < O ? a = e - c.fb - this.Y - O : e - c.fb - a > c.qa && (a = e - c.fb -
                c.qa) : e + a < c.fb ? a = c.fb - e : c.fb + c.qa < e + a + this.Y + 10 + O && (a = c.fb + c.qa - e - this.Y - O);
            this.Qc.y + b < c.Td && (b = this.Zq.getBBox().height);
            this.rh = a;
            this.Wi = b
        }
        De(this);
        Ee(this)
    }
    this.qn && this.qn()
};

function Ee(a) {
    var b = [],
        c = a.Y / 2,
        e = a.wa / 2,
        f = -a.rh,
        h = -a.Wi;
    if (c == f && e == h) b.push("M " + c + "," + e);
    else {
        h -= e;
        f -= c;
        a.j.s && (f *= -1);
        var k = Math.sqrt(h * h + f * f),
            l = Math.acos(f / k);
        0 > h && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            p = Math.cos(m),
            r = a.Nf();
        m = (r.width + r.height) / 5;
        m = Math.min(m, r.width, r.height) / 4;
        r = 1 - 8 / k;
        f = c + r * f;
        h = e + r * h;
        r = c + m * p;
        var C = e + m * n;
        c -= m * p;
        e -= m * n;
        n = l + a.rs;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / 4;
        k = Math.cos(n) * k / 4;
        b.push("M" + r + "," + C);
        b.push("C" + (r + k) + "," + (C +
            l) + " " + f + "," + h + " " + f + "," + h);
        b.push("C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e)
    }
    b.push("z");
    a.Il.setAttribute("d", b.join(" "))
}
d.lf = function(a) { this.Oh.setAttribute("fill", a);
    this.Il.setAttribute("fill", a) };
d.v = function() { He();
    H(this.wc);
    this.Zq = this.yc = this.j = this.ob = this.Oh = this.Il = this.wc = null };
d.Fk = function(a, b) { a ? a.xe(b.x, b.y) : this.moveTo(b.x, b.y);
    this.rh = this.j.s ? this.Qc.x - b.x - this.Y : b.x - this.Qc.x;
    this.Wi = b.y - this.Qc.y;
    Ee(this) };
d.ca = function() { return new F(this.Qc.x + this.rh, this.Qc.y + this.Wi) };
d.Vq = function(a) { this.xj = a };

function Me(a) { Me.m.constructor.call(this);
    this.Gb = a.id;
    this.gc = a.o.id } y(Me, he);
Me.prototype.ta = function() { var a = Me.m.ta.call(this);
    a.blockId = this.Gb; return a };
Me.prototype.X = function(a) { Me.m.ta.call(this);
    this.Gb = a.blockId };

function Xd(a, b, c, e, f) { a && (Xd.m.constructor.call(this, a), this.element = b, this.name = c, this.oldValue = e, this.newValue = f) } y(Xd, Me);
I.i.hc = Xd;
d = Xd.prototype;
d.type = I.i.Bg;
d.ta = function() { var a = Xd.m.ta.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue; return a };
d.X = function(a) { Xd.m.X.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue };
d.eh = function() { return this.oldValue == this.newValue };
d.run = function(a) {
    var b = fe(ie(this), this.Gb);
    if (b) switch (b.me && b.me.ka(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (b = Ne(b, this.name)) ? (Oe(b, a), b.setValue(a)) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            b.Yi(a || null);
            break;
        case "collapsed":
            b.ig(a);
            break;
        case "disabled":
            b.mf(a);
            break;
        case "inline":
            b.kg(a);
            break;
        case "mutation":
            var c = "";
            b.Nb && (c = (c = b.Nb()) && I.C.Wc(c));
            if (b.Vc) { a = a || "<mutation></mutation>"; var e = I.C.fc("<xml>" + a + "</xml>");
                b.Vc(e.firstChild) } I.i.L(new Xd(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.Gb)
};

function Vd(a) { a && (Vd.m.constructor.call(this, a), this.xml = a.o.N ? I.C.Hl(a) : I.C.He(a), this.Tf = I.i.Fp(a)) } y(Vd, Me);
I.i.sj = Vd;
Vd.prototype.type = I.i.tj;
Vd.prototype.ta = function() { var a = Vd.m.ta.call(this);
    a.xml = I.C.Wc(this.xml);
    a.ids = this.Tf; return a };
Vd.prototype.X = function(a) { Vd.m.X.call(this, a);
    this.xml = I.C.fc("<xml>" + a.xml + "</xml>").firstChild;
    this.Tf = a.ids };
Vd.prototype.run = function(a) { var b = ie(this); if (a) a = G("xml"), a.appendChild(this.xml), I.C.gd(a, b);
    else { a = 0; for (var c; c = this.Tf[a]; a++) { var e = fe(b, c);
            e ? e.v(!1, !1) : c == this.Gb && console.warn("Can't uncreate non-existent block: " + c) } } };

function Wd(a) { if (a) { if (a.getParent()) throw "Connected blocks cannot be deleted.";
        Wd.m.constructor.call(this, a);
        this.vu = a.o.N ? I.C.Hl(a) : I.C.He(a);
        this.Tf = I.i.Fp(a) } } y(Wd, Me);
I.i.Ar = Wd;
Wd.prototype.type = I.i.rl;
Wd.prototype.ta = function() { var a = Wd.m.ta.call(this);
    a.ids = this.Tf; return a };
Wd.prototype.X = function(a) { Wd.m.X.call(this, a);
    this.Tf = a.ids };
Wd.prototype.run = function(a) { var b = ie(this); if (a) { a = 0; for (var c; c = this.Tf[a]; a++) { var e = fe(b, c);
            e ? e.v(!1, !1) : c == this.Gb && console.warn("Can't delete non-existent block: " + c) } } else a = G("xml"), a.appendChild(this.vu), I.C.gd(a, b) };

function Yd(a) { a && (Yd.m.constructor.call(this, a), a = Pe(this), this.vq = a.Hq, this.uq = a.Xp, this.Sm = a.Uo) } y(Yd, Me);
I.i.Fh = Yd;
d = Yd.prototype;
d.type = I.i.Kh;
d.ta = function() { var a = Yd.m.ta.call(this);
    this.$f && (a.newParentId = this.$f);
    this.Zf && (a.newInputName = this.Zf);
    this.bf && (a.newCoordinate = Math.round(this.bf.x) + "," + Math.round(this.bf.y)); return a };
d.X = function(a) { Yd.m.X.call(this, a);
    this.$f = a.newParentId;
    this.Zf = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.bf = new F(parseFloat(a[0]), parseFloat(a[1]))) };
d.pe = function() { var a = Pe(this);
    this.$f = a.Hq;
    this.Zf = a.Xp;
    this.bf = a.Uo };

function Pe(a) { var b = fe(Ud[a.gc] || null, a.Gb);
    a = {}; var c = b.getParent(); if (c) { a.Hq = c.id;
        a: { for (var e = 0, f; f = c.aa[e]; e++)
                if (f.connection && P(f.connection) == b) { b = f; break a } b = null } b && (a.Xp = b.name) } else a.Uo = b.ca(); return a } d.eh = function() { return this.vq == this.$f && this.uq == this.Zf && fc(this.Sm, this.bf) };
d.run = function(a) { var b = ie(this),
        c = fe(b, this.Gb); if (c) { var e = a ? this.$f : this.vq,
            f = a ? this.Zf : this.uq;
        a = a ? this.bf : this.Sm; var h = null; if (e && (h = fe(b, e), !h)) { console.warn("Can't connect to non-existent block: " + e); return } c.getParent() && Qe(c); if (a) f = c.ca(), c.moveBy(a.x - f.x, a.y - f.y);
        else { c = c.T || c.W; if (f) { if (b = Re(h, f)) var k = b.connection } else c.type == I.De && (k = h.S);
            k ? c.connect(k) : console.warn("Can't connect to non-existent input: " + f) } } else console.warn("Can't move non-existent block: " + this.Gb) };

function L(a, b, c, e) { L.m.constructor.call(this);
    this.Gb = a ? a.id : null;
    this.gc = a ? a.o.id : null;
    this.element = b;
    this.oldValue = c;
    this.newValue = e;
    this.Pb = !1 } y(L, he);
L.prototype.type = I.i.Al;
L.prototype.ta = function() { var a = L.m.ta.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.Gb && (a.blockId = this.Gb); return a };
L.prototype.X = function(a) { L.m.X.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.Gb = a.blockId };

function Se(a) { this.K = a } d = Se.prototype;
d.Oo = !0;
d.wl = 17;
d.Ka = null;
d.Sf = null;

function Te(a) { a.ac || (a.ac = I.h.A("g", { "class": "blocklyIconGroup" }, null), a.K.nc && I.h.Sa(a.ac, "blocklyIconGroupReadonly"), a.em(a.ac), a.K.P().appendChild(a.ac), I.H(a.ac, "mouseup", a, a.zm), a.Be()) } d.v = function() { H(this.ac);
    this.ac = null;
    this.ka(!1);
    this.K = null };
d.Be = function() {};
d.R = function() { return !!this.Ka };
d.zm = function(a) { this.K.o.tb() || this.K.nc || I.h.Xe(a) || this.ka(!this.R()) };
d.Ae = function() { this.R() && this.Ka.lf(this.K.yd) };

function Ue(a) { var b = a.K.ca(),
        c = I.h.Zb(a.ac);
    b = new F(b.x + c.x + a.wl / 2, b.y + c.y + a.wl / 2);
    fc(a.Sf, b) || (a.Sf = b, a.R() && (a = a.Ka, a.Qc = b, a.hf && De(a))) };
// Copyright 2011 Google Inc.  Apache License 2.0
function Ve(a) { Ve.m.constructor.call(this, a);
    Te(this) } y(Ve, Se);
d = Ve.prototype;
d.pa = "";
d.Y = 160;
d.wa = 80;
d.em = function(a) { I.h.A("circle", { "class": "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
    I.h.A("path", { "class": "blocklyIconSymbol", d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z" }, a);
    I.h.A("rect", { "class": "blocklyIconSymbol", x: "6.8", y: "10.78", height: "2", width: "2" }, a) };
d.Vh = function() {
    this.zc = I.h.A("foreignObject", { x: N, y: N }, null);
    var a = document.createElementNS(I.Ce, "body");
    a.setAttribute("xmlns", I.Ce);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(I.Ce, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.K.s ? "RTL" : "LTR");
    a.appendChild(b);
    this.Za = b;
    this.zc.appendChild(a);
    I.H(b, "mouseup", this, this.gv, !0, !0);
    I.H(b, "wheel", this, function(a) { a.stopPropagation() });
    I.H(b, "change", this, function() {
        this.pa != b.value && (I.i.L(new I.i.hc(this.K,
            "comment", null, this.pa, b.value)), this.pa = b.value)
    });
    setTimeout(function() { b.focus() }, 0);
    return this.zc
};
d.Be = function() { this.R() && (this.ka(!1), this.ka(!0));
    Se.prototype.Be.call(this) };
d.Rk = function() { if (this.R()) { var a = this.Ka.Nf(),
            b = 2 * N;
        this.zc.setAttribute("width", a.width - b);
        this.zc.setAttribute("height", a.height - b);
        this.Za.style.width = a.width - b - 4 + "px";
        this.Za.style.height = a.height - b - 4 + "px" } };
d.ka = function(a) { if (a != this.R())
        if (I.i.L(new L(this.K, "commentOpen", !a, a)), !We(this.K) && !this.Za || B) Xe.prototype.ka.call(this, a);
        else { var b = this.sb(),
                c = this.Nf();
            a ? (this.Ka = new Be(this.K.o, this.Vh(), this.K.bd, this.Sf, this.Y, this.wa), Je(this.Ka, this.K.id), a = this.Rk.bind(this), this.Ka.qn = a, this.Ae()) : (this.Ka.v(), this.zc = this.Za = this.Ka = null);
            this.wb(b);
            this.kf(c.width, c.height) } };
d.gv = function() { Ke(this.Ka) && this.Za.focus() };
d.Nf = function() { return this.R() ? this.Ka.Nf() : { width: this.Y, height: this.wa } };
d.kf = function(a, b) { this.Za ? this.Ka.kf(a, b) : (this.Y = a, this.wa = b) };
d.sb = function() { return this.Za ? this.Za.value : this.pa };
d.wb = function(a) { this.pa != a && (I.i.L(new I.i.hc(this.K, "comment", null, this.pa, a)), this.pa = a);
    this.Za && (this.Za.value = a) };
d.v = function() { I.i.isEnabled() && this.wb("");
    this.K.Ga = null;
    Se.prototype.v.call(this) };

function Ye(a, b) { this.w = a;
    this.type = b;
    a.o.Pl && (this.Je = a.o.Pl[b], this.Ij = a.o.Pl[I.Gg[b]], this.ym = !this.Je) } d = Ye.prototype;
d.Eb = null;
d.Xd = null;
d.Pd = null;
d.uc = 0;
d.Ea = 0;
d.Te = !1;
d.Je = null;
d.Ij = null;
d.ym = null;
d.Fj = function(a) {
    var b = this,
        c = b.w,
        e = a.w;
    a.isConnected() && a.disconnect();
    if (b.isConnected()) {
        var f = P(b),
            h = b.Pd;
        b.Pd = null;
        if (f.Wa) h = I.C.He(f), f.v(), f = null;
        else if (b.type == I.ab) { if (!f.T) throw "Orphan block does not have an output connection."; var k = Ze(e, f);
            k && (f.T.connect(k), f = null) } else if (b.type == I.Ta) { if (!f.W) throw "Orphan block does not have a previous connection."; for (k = e; k.S;) { var l = ge(k); if (l && !l.Wa) k = l;
                else { $e(f.W, k.S) && (k.S.connect(f.W), f = null); break } } }
        if (f && (b.disconnect(), I.i.Pb)) {
            var m = I.i.Yb();
            setTimeout(function() { f.o && !f.getParent() && (I.i.O(m), f.T ? af(f.T, b) : f.W && af(f.W, b), I.i.O(!1)) }, I.rj)
        }
        b.Pd = h
    }
    var n;
    I.i.isEnabled() && (n = new I.i.Fh(e));
    bf(b, a);
    e.mg(c);
    n && (n.pe(), I.i.L(n))
};
d.v = function() { if (this.isConnected()) throw "Disconnect connection before disposing of it.";
    this.Te && cf(this.Je, this);
    this.Ij = this.Je = null };

function df(a) { return a.type == I.ab || a.type == I.Ta } d.isConnected = function() { return !!this.Eb };

function ef(a, b) { if (!b) return 3; if (df(a)) var c = a.w,
        e = b.w;
    else e = a.w, c = b.w; return c && c == e ? 1 : b.type != I.Gg[a.type] ? 2 : c && e && c.o !== e.o ? 5 : $e(a, b) ? c.Wa && !e.Wa ? 6 : 0 : 4 } d.mk = function(a) { if (0 != ef(this, a)) return !1; if (a.type == I.Hg || a.type == I.De)
        if (a.isConnected() || this.isConnected()) return !1; return a.type == I.ab && a.isConnected() && !P(a).Kd() && !P(a).Wa || this.type == I.De && a.isConnected() && !this.w.S && !P(a).Wa && P(a).S || -1 != I.Qj.indexOf(a) ? !1 : !0 };
d.connect = function(a) { if (this.Eb != a) { switch (ef(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed. " + (this + " expected " + this.Xd + ", found " + a.Xd);
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!"; } df(this) ? this.Fj(a) : a.Fj(this) } };

function bf(a, b) { a.Eb = b;
    b.Eb = a }

function ff(a, b) { for (var c = !1, e = 0; e < a.aa.length; e++) { var f = a.aa[e].connection; if (f && f.type == I.ab && $e(b.T, f)) { if (c) return null;
            c = f } } return c }

function Ze(a, b) { for (var c; c = ff(a, b);)
        if (a = P(c), !a || a.Wa) return c; return null } d.disconnect = function() { var a = this.Eb; if (df(this)) { var b = this.w; var c = a.w;
        a = this } else b = a.w, c = this.w;
    this.am(b, c);
    a.un() };
d.am = function(a, b) { var c;
    I.i.isEnabled() && (c = new I.i.Fh(b));
    this.Eb = this.Eb.Eb = null;
    b.mg(null);
    c && (c.pe(), I.i.L(c)) };
d.un = function() { var a = this.w,
        b = this.Pd; if (a.o && b && I.i.Pb)
        if (a = I.C.Pg(b, a.o), a.T) this.connect(a.T);
        else if (a.W) this.connect(a.W);
    else throw "Child block does not have output or previous statement."; };

function P(a) { return a.isConnected() ? a.Eb.w : null }

function $e(a, b) { if (!a.Xd || !b.Xd) return !0; for (var c = 0; c < a.Xd.length; c++)
        if (-1 != b.Xd.indexOf(a.Xd[c])) return !0; return !1 } d.xq = function() { this.isConnected() && !$e(this, this.Eb) && Qe(df(this) ? P(this) : this.w) };
d.vh = function(a) { a ? (u(a) || (a = [a]), this.Xd = a, this.xq()) : this.Xd = null };
d.rq = function() { return [] };
d.toString = function() { var a = this.w; if (a)
        if (a.T == this) var b = "Output Connection of ";
        else if (a.W == this) b = "Previous Connection of ";
    else if (a.S == this) b = "Next Connection of ";
    else if (b = va(a.aa, function(a) { return a.connection == this }, this)) b = 'Input "' + b.name + '" connection on ';
    else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
    else return "Orphan Connection"; return b + gf(a) };

function hf() {} hf.prototype = [];

function jf(a, b) { if (b.Te) throw "Connection already in database.";
    b.w.nc || (a.splice(kf(a, b), 0, b), b.Te = !0) }

function lf(a, b) { if (!a.length) return -1; var c = kf(a, b); if (c >= a.length) return -1; for (var e = b.Ea, f = c; 0 <= f && a[f].Ea == e;) { if (a[f] == b) return f;
        f-- } for (; c < a.length && a[c].Ea == e;) { if (a[c] == b) return c;
        c++ } return -1 }

function kf(a, b) { if (!a.length) return 0; for (var c = 0, e = a.length; c < e;) { var f = Math.floor((c + e) / 2); if (a[f].Ea < b.Ea) c = f + 1;
        else if (a[f].Ea > b.Ea) e = f;
        else { c = f; break } } return c }

function cf(a, b) { if (!b.Te) throw "Connection not in database."; var c = lf(a, b); if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.Te = !1;
    a.splice(c, 1) }

function mf(a, b, c) {
    function e(a) { var b = h - f[a].uc,
            e = k - f[a].Ea;
        Math.sqrt(b * b + e * e) <= c && m.push(f[a]); return e < c } var f = a,
        h = b.uc,
        k = b.Ea;
    a = 0; for (var l = b = f.length - 2; a < l;) f[l].Ea < k ? a = l : b = l, l = Math.floor((a + b) / 2); var m = [];
    b = a = l; if (f.length) { for (; 0 <= a && e(a);) a--;
        do b++; while (b < f.length && e(b)) } return m };
I.Yy = {};
I.io = 5;
I.Er = 10;
I.vc = 20;
I.rj = 250;
I.Br = 30;
I.Mr = 750;
I.Xr = 100;
I.Dr = !0;
I.Jr = .45;
I.Kr = .65;
I.Sb = { width: 96, height: 124, url: "sprites.png" };
I.zl = "http://www.w3.org/2000/svg";
I.Ce = "http://www.w3.org/1999/xhtml";
I.ab = 1;
I.Hg = 2;
I.Ta = 3;
I.De = 4;
I.Ud = 5;
I.Eh = -1;
I.pj = 0;
I.Ag = 1;
I.xw = 0;
I.yw = 1;
I.vw = 1;
I.ww = 2;
I.Gg = [];
I.Gg[I.ab] = I.Hg;
I.Gg[I.Hg] = I.ab;
I.Gg[I.Ta] = I.De;
I.Gg[I.De] = I.Ta;
I.Fe = 0;
I.Bf = 1;
I.Ee = 2;
I.td = 3;
I.eo = null;
I.tl = 1;
I.fo = 2;
I.ro = "VARIABLE";
I.$r = "VARIABLE_DYNAMIC";
I.oo = "PROCEDURE";
I.po = "RENAME_VARIABLE_ID";
I.ho = "DELETE_VARIABLE_ID";
I.xa = {};
I.xa.bm = 0;
I.xa.Nj = null;
I.xa.jt = function(a) { var b = a.o,
        c = a.P();
    b.vd.play("delete");
    a = nf(b, c);
    c = c.cloneNode(!0);
    c.kv = a.x;
    c.mv = a.y;
    c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    Q(b).appendChild(c);
    c.Ao = c.getBBox();
    I.xa.tp(c, b.s, new Date, b.scale) };
I.xa.tp = function(a, b, c, e) { var f = (new Date - c) / 150;
    1 < f ? H(a) : (a.setAttribute("transform", "translate(" + (a.kv + (b ? -1 : 1) * a.Ao.width * e / 2 * f) + "," + (a.mv + a.Ao.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(I.xa.tp, 10, a, b, c, e)) };
I.xa.Os = function(a) { var b = a.o,
        c = b.scale;
    b.vd.play("click"); if (!(1 > c)) { var e = nf(b, a.P());
        a.T ? (e.x += (a.s ? 3 : -3) * c, e.y += 13 * c) : a.W && (e.x += (a.s ? -23 : 23) * c, e.y += 3 * c);
        a = I.h.A("circle", { cx: e.x, cy: e.y, r: 0, fill: "none", stroke: "#888", "stroke-width": 10 }, Q(b));
        I.xa.So(a, new Date, c) } };
I.xa.So = function(a, b, c) { var e = (new Date - b) / 150;
    1 < e ? H(a) : (a.setAttribute("r", 25 * e * c), a.style.opacity = 1 - e, I.xa.bm = setTimeout(I.xa.So, 10, a, b, c)) };
I.xa.ht = function(a) { a.o.vd.play("disconnect"); if (!(1 > a.o.scale)) { var b = a.kb().height;
        b = Math.atan(10 / b) / Math.PI * 180;
        a.s || (b *= -1);
        I.xa.sp(a.P(), b, new Date) } };
I.xa.sp = function(a, b, c) { var e = (new Date - c) / 200;
    1 < e ? a.og = "" : (a.og = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")", I.xa.Nj = a, I.xa.bm = setTimeout(I.xa.sp, 10, a, b, c));
    a.setAttribute("transform", a.ye + a.og) };
I.xa.cm = function() { if (I.xa.Nj) { clearTimeout(I.xa.bm); var a = I.xa.Nj;
        a.og = "";
        a.setAttribute("transform", a.ye);
        I.xa.Nj = null } };

function of (a, b) { of .m.constructor.call(this, a, b);
    this.Jk = new F(0, 0) } y( of , Ye);

function pf(a, b) { var c = a.uc - b.uc;
    a = a.Ea - b.Ea; return Math.sqrt(c * c + a * a) }

function af(a, b) { if (!a.w.o.tb()) { var c = qf(a.w); if (!c.nc) { var e = !1; if (!c.Kd()) { c = qf(b.w); if (!c.Kd()) return;
                b = a;
                e = !0 } var f = I.selected == c;
            f || c.Jg(); var h = b.uc + I.vc - a.uc;
            a = b.Ea + I.vc - a.Ea;
            e && (a = -a);
            c.s && (h = -h);
            c.moveBy(h, a);
            f || c.gg() } } } d = of .prototype;
d.moveTo = function(a, b) { this.Te && cf(this.Je, this);
    this.uc = a;
    this.Ea = b;
    this.ym || jf(this.Je, this) };
d.moveBy = function(a, b) { this.moveTo(this.uc + a, this.Ea + b) };

function rf(a, b) { a.moveTo(b.x + a.Jk.x, b.y + a.Jk.y) }

function sf(a, b, c) { a.Jk.x = b;
    a.Jk.y = c }

function tf(a) { var b = a.Eb.uc - a.uc,
        c = a.Eb.Ea - a.Ea; if (0 != b || 0 != c) { a = P(a); var e = a.P(); if (!e) throw "block is not rendered.";
        e = I.h.Zb(e);
        a.P().setAttribute("transform", "translate(" + (e.x - b) + "," + (e.y - c) + ")");
        uf(a, -b, -c) } }
d.closest = function(a, b) { var c = this.Ij; if (c.length) { var e = this.Ea,
            f = this.uc;
        this.uc = f + b.x;
        this.Ea = e + b.y; var h = kf(c, this);
        b = null; for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Ea - this.Ea) <= a;) l = c[m], this.mk(l, k) && (b = l, k = pf(l, this)), m--; for (; h < c.length && Math.abs(c[h].Ea - this.Ea) <= a;) l = c[h], this.mk(l, k) && (b = l, k = pf(l, this)), h++;
        this.uc = f;
        this.Ea = e;
        a = { connection: b, Pq: k } } else a = { connection: null, Pq: a }; return a };
d.Tp = function() { var a = this.type == I.ab || this.type == I.Hg ? "m 0,0 " + vf + " v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5"; var b = this.w.ca();
    Ye.Vp = I.h.A("path", { "class": "blocklyHighlightedConnectionPath", d: a, transform: "translate(" + (this.uc - b.x) + "," + (this.Ea - b.y) + ")" + (this.w.s ? " scale(-1 1)" : "") }, this.w.P()) };

function wf(a) { xf(a, !1); var b = []; if (a.type != I.ab && a.type != I.Ta) return b; if (a = P(a)) { if (a.isCollapsed()) { var c = [];
            a.T && c.push(a.T);
            a.S && c.push(a.S);
            a.W && c.push(a.W) } else c = a.Dd(!0); for (var e = 0; e < c.length; e++) b.push.apply(b, wf(c[e]));
        b.length || (b[0] = a) } return b }

function yf() { H(Ye.Vp);
    delete Ye.Vp }

function xf(a, b) {
    (a.ym = b) && a.Te ? cf(a.Je, a) : b || a.Te || jf(a.Je, a) } d.mk = function(a, b) { return pf(this, a) > b ? !1 : of .m.mk.call(this, a) };
d.am = function(a, b) { of .m.am.call(this, a, b);
    a.N && a.U();
    b.N && (zf(b), b.U()) };
d.un = function() { var a = this.w,
        b = this.Pd; if (a.o && b && I.i.Pb) { of .m.un.call(this);
        b = P(this); if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.ie();
        b.U(!1);
        a.N && a.U() } };
d.rq = function(a) { return mf(this.Ij, this, a) };
d.Fj = function(a) { of .m.Fj.call(this, a); var b = this.w;
    a = a.w;
    b.N && zf(b);
    a.N && zf(a);
    b.N && a.N && (this.type == I.Ta || this.type == I.De ? a.U() : b.U()) };
d.xq = function() { this.isConnected() && !$e(this, this.Eb) && (Qe(df(this) ? P(this) : this.w), this.w.Tb()) };

function Af(a) { this.tf = I.selected = a;
    this.j = a.o;
    a = this.tf.Dd(!1); var b;
    a: { for (b = this.tf.S; b;) { var c = P(b); if (!c) break a;
            b = c.S } b = null } b && b != this.tf.S && a.push(b);
    this.Fl = a;
    this.ih = this.Kb = null;
    this.mn = 0;
    this.yf = !1 } Af.prototype.v = function() { this.j = this.tf = null;
    this.Fl.length = 0;
    this.ih = this.Kb = null };
Af.prototype.update = function(a, b) { var c = this.Kb,
        e = this.Kb;
    this.ih = this.Kb = null;
    this.mn = I.vc; for (var f = 0; f < this.Fl.length; f++) { var h = this.Fl[f],
            k = h.closest(this.mn, a);
        k.connection && (this.Kb = k.connection, this.ih = h, this.mn = k.Pq) }(a = e != this.Kb) && c && yf();
    c = !!this.Kb && b != I.fo;
    this.yf = (b = !!b && !this.tf.getParent() && this.tf.Lb()) && !c;
    b && this.Kb && (yf(), this.Kb = null);!this.yf && a && this.Kb && this.Kb && this.Kb.Tp() };

function Bf(a, b) { this.Pa = a;
    this.j = b;
    this.Qg = new Af(this.Pa);
    this.Hf = null;
    this.yf = !1;
    this.Qd = this.Pa.ca();
    b = [];
    a = K(a, !1); for (var c = 0, e; e = a[c]; c++) { e = Cf(e); for (var f = 0; f < e.length; f++) b.push({ location: e[f].Sf, icon: e[f] }) } this.Pj = b } Bf.prototype.v = function() { this.Qa = this.j = this.Pa = null;
    this.Pj.length = 0;
    this.Qg && (this.Qg.v(), this.Qg = null) };

function Df(a, b, c) { c = a.nh(c);
    a.Pa.Fk(ic(a.Qd, c)); for (var e = 0; e < a.Pj.length; e++) { var f = a.Pj[e],
            h = f.icon;
        f = ic(f.location, c);
        h.Sf = f;
        h.R() && (h = h.Ka, h.Qc = f, h.hf && De(h)) } a.Hf = Ef(a.j, b);
    a.Qg.update(c, a.Hf);
    a.yf = a.Qg.yf;
    b = a.j.rc;
    a.yf ? (a.Pa.$i(!0), a.Hf == I.tl && b && Ff(b, !0)) : (a.Pa.$i(!1), b && Ff(b, !1)) }

function Gf(a, b, c) { Df(a, b, c);
    a.Pj = [];
    I.xa.cm();
    b = a.nh(c);
    a.Pa.oq(ic(a.Qd, b));
    c = a.j.rc;
    a.yf ? (c && Hf(c.close, 100, c), a.ci(), a.Pa.v(!1, !0)) : c && c.close();
    a.yf || (uf(a.Pa, b.x, b.y), a.Pa.nf(!1), b = a.Qg, b.Kb && (b.ih.connect(b.Kb), b.tf.N && (I.xa.Os((df(b.ih) ? b.Kb : b.ih).w), If(qf(b.tf))), b.Kb && yf()), a.Pa.U(), a.ci(), Jf(a.Pa));
    a.j.vb(!0);
    (b = a.j.V) && I.h.ub(b.ic, a.Pa.Lb() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    I.i.O(!1) } Bf.prototype.ci = function() { var a = new I.i.Fh(this.Pa);
    a.Sm = this.Qd;
    a.pe();
    I.i.L(a) };
Bf.prototype.nh = function(a) { a = new F(a.x / this.j.scale, a.y / this.j.scale);
    this.j.Gi && (a = a.scale(1 / this.j.options.Dc.scale)); return a };

function Kf(a, b, c, e, f) { this.u = I.h.A("g", { "class": "blocklyComment" }, null);
    this.u.ye = "";
    this.hj = I.h.A("rect", { "class": "blocklyCommentRect", x: 0, y: 0, rx: 3, ry: 3 });
    this.u.appendChild(this.hj);
    this.hf = !1;
    this.Sd = I.h.We() && !!a.cb;
    Kf.m.constructor.call(this, a, b, c, e, f);
    this.U() } y(Kf, se);
d = Kf.prototype;
d.v = function() { if (this.o) { if (I.selected == this) { this.ze(); var a = this.o;
            a.hb && a.hb.cancel() } I.i.isEnabled() && I.i.L(new ee(this));
        H(this.u);
        this.sg = this.sf = this.zc = this.Za = this.hj = this.u = null;
        I.i.disable();
        Kf.m.v.call(this);
        I.i.enable() } };
d.ie = function() { this.o.options.readOnly || this.gm || (I.H(this.sf, "mousedown", this, this.Iq), I.H(this.sg, "mousedown", this, this.Iq));
    this.gm = !0;
    Lf(this);
    this.P().parentNode || this.o.rd.appendChild(this.P()) };
d.Iq = function(a) { var b = this.o.Ed(a);
    b && (b.ec || (b.ec = this), b.pc = a) };
d.wh = function(a) { if (!this.o.options.readOnly) { var b = [];
        this.Lb() && this.Kd() && (b.push(I.$.Ks(this)), b.push(I.$.Js(this)));
        I.$.show(a, b, this.s) } };
d.select = function() { if (I.selected != this) { var a = null; if (I.selected) { a = I.selected.id;
            I.i.disable(); try { I.selected.ze() } finally { I.i.enable() } } a = new L(null, "selected", a, this.id);
        a.gc = this.o.id;
        I.i.L(a);
        I.selected = this;
        this.Jg() } };
d.ze = function() { if (I.selected == this) { var a = new L(null, "selected", this.id, null);
        a.gc = this.o.id;
        I.i.L(a);
        I.selected = null;
        this.gg();
        Mf(this) } };
d.Jg = function() { I.h.Sa(this.u, "blocklySelected");
    this.En() };
d.gg = function() { I.h.ub(this.u, "blocklySelected");
    Mf(this) };
d.ca = function() { var a = 0,
        b = 0,
        c = this.Sd ? this.o.cb.Yb() : null,
        e = this.P(); if (e) { do { var f = I.h.Zb(e);
            a += f.x;
            b += f.y;
            this.Sd && this.o.cb.zd.firstChild == e && (f = this.o.cb.ek(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.rd && e != c) } return this.Lc = new F(a, b) };
d.moveBy = function(a, b) { var c = new de(this),
        e = this.ca();
    this.translate(e.x + a, e.y + b);
    this.Lc = new F(e.x + a, e.y + b);
    c.pe();
    I.i.L(c);
    Nf(this.o) };
d.translate = function(a, b) { this.Lc = new F(a, b);
    this.P().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.Gk = function() { if (this.Sd) { var a = this.ca();
        I.h.removeAttribute(this.P(), "transform");
        this.o.cb.xe(a.x, a.y);
        Of(this.o.cb, this.P()) } };
d.oq = function(a) { this.Sd && (this.translate(a.x, a.y), this.o.cb.Qh(this.o.Ca)) };
d.Fk = function(a, b) { a ? a.xe(b.x, b.y) : (this.u.ye = "translate(" + b.x + "," + b.y + ")", this.u.setAttribute("transform", this.u.ye + this.u.og)) };
d.moveTo = function(a, b) { this.translate(a, b) };
d.lm = function() { var a = this.ca(),
        b = this.kb(); if (this.s) { var c = new F(a.x - b.width, a.y);
        a = new F(a.x, a.y + b.height) } else c = new F(a.x, a.y), a = new F(a.x + b.width, a.y + b.height); return { Ic: c, dd: a } };

function Lf(a) { a.Kd() ? I.h.Sa(a.u, "blocklyDraggable") : I.h.ub(a.u, "blocklyDraggable") } d.lg = function(a) { Kf.m.lg.call(this, a);
    Lf(this) };
d.nf = function(a) { a ? (a = this.P(), a.ye = "", a.og = "", I.h.Sa(this.u, "blocklyDragging")) : I.h.ub(this.u, "blocklyDragging") };
d.P = function() { return this.u };
d.mc = function() { return this.Za ? this.Za.value : this.yc };
d.ad = function(a) { Kf.m.ad.call(this, a);
    this.Za && (this.Za.value = a) };
d.$i = function(a) { a ? I.h.Sa(this.u, "blocklyDraggingDelete") : I.h.ub(this.u, "blocklyDraggingDelete") };
d.Vq = function() {};

function Pf(a, b, c) { I.i.disable(); try { var e = ve(a),
            f = new Kf(b, e.content, e.Lp, e.wr, e.id);
        b.N && (f.ie(), f.U(!1)); if (!isNaN(e.x) && !isNaN(e.y))
            if (b.s) { var h = c || b.Bc();
                f.moveBy(h - e.x, e.y) } else f.moveBy(e.x, e.y) } finally { I.i.enable() } te(f); return f }
d.ij = function(a) { var b;
    this.o.s && (b = this.o.Bc());
    a = ue(this, a); var c = this.ca();
    a.setAttribute("x", Math.round(this.o.s ? b - c.x : c.x));
    a.setAttribute("y", Math.round(c.y));
    a.setAttribute("h", this.Wg());
    a.setAttribute("w", this.Bc()); return a };

function Qf(a, b) { this.ib = a;
    this.j = b;
    this.Hf = null;
    this.ol = !1;
    this.Qd = this.ib.ca();
    this.Jf = I.h.We() && b.cb ? b.cb : null } Qf.prototype.v = function() { this.Jf = this.j = this.ib = null };

function Rf(a, b, c) { c = a.nh(c);
    a.ib.Fk(a.Jf, ic(a.Qd, c));
    a.ib.Lb() && (a.Hf = Ef(a.j, b), a.ol = a.Hf != I.eo, b = a.j.rc, a.ol ? (a.ib.$i(!0), a.Hf == I.tl && b && Ff(b, !0)) : (a.ib.$i(!1), b && Ff(b, !1))) }

function Sf(a, b, c) { Rf(a, b, c);
    b = a.nh(c);
    b = ic(a.Qd, b);
    a.ib.moveTo(b.x, b.y);
    b = a.j.rc;
    a.ol ? (b && Hf(b.close, 100, b), a.ci(), a.ib.v(!1, !0)) : b && b.close();
    a.ol || (a.Jf && a.Jf.Qh(a.j.rd), a.ib.nf && a.ib.nf(!1), a.ci());
    a.j.vb(!0);
    a.j.V && I.h.ub(a.j.V.ic, a.ib.Lb() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    I.i.O(!1) } Qf.prototype.ci = function() { if (this.ib.Zp) { var a = new de(this.ib);
        a.Tm = this.Qd;
        a.pe();
        I.i.L(a) } };
Qf.prototype.nh = function(a) { a = new F(a.x / this.j.scale, a.y / this.j.scale);
    this.j.Gi && (a = a.scale(1 / this.j.options.Dc.scale)); return a };
Qf.prototype.Gk = function() { this.ib.moveTo(0, 0);
    this.Jf.xe(this.Qd.x, this.Qd.y);
    Of(this.Jf, this.ib.P()) };

function Tf(a) { this.j = a;
    this.bv = a.Va();
    this.dv = new F(a.scrollX, a.scrollY) } Tf.prototype.v = function() { this.j = null };
Tf.prototype.hl = function() { I.selected && I.selected.ze();
    Uf(this.j) };

function Vf(a, b) { var c = a.bv,
        e = ic(a.dv, b);
    b = Math.min(e.x, -c.xc);
    e = Math.min(e.y, -c.kc);
    b = Math.max(b, c.qa - c.xc - c.lc);
    e = Math.max(e, c.Oa - c.kc - c.Ub);
    b = -b - c.xc;
    e = -e - c.kc;
    a.ur(b, e) } Tf.prototype.ur = function(a, b) { this.j.Xa.set(a, b) };

function Wf(a) { Wf.m.constructor.call(this, a.oi());
    this.Ab = a.Ab;
    this.kd = a.kd } y(Wf, Tf);
Wf.prototype.ur = function(a, b) { this.kd ? this.Ab.set(a) : this.Ab.set(b) };
I.B = {};
I.B.visible = !1;
I.B.Lg = !1;
I.B.Lr = 50;
I.B.nq = 0;
I.B.dj = 0;
I.B.Km = 0;
I.B.Lm = 0;
I.B.J = null;
I.B.Nk = null;
I.B.mo = 0;
I.B.no = 10;
I.B.Tr = 10;
I.B.Ir = 750;
I.B.ul = 5;
I.B.Z = null;
I.B.M = function() { I.B.Z || (I.B.Z = G("DIV", "blocklyTooltipDiv"), document.body.appendChild(I.B.Z)) };
I.B.Ef = function(a) { I.jc(a, "mouseover", null, I.B.Lu);
    I.jc(a, "mouseout", null, I.B.Ku);
    a.addEventListener("mousemove", I.B.Ju, !1) };
I.B.Lu = function(a) { if (!I.B.Lg) { for (a = a.target; !q(a.Hc) && !w(a.Hc);) a = a.Hc;
        I.B.J != a && (I.B.Aa(), I.B.Nk = null, I.B.J = a);
        clearTimeout(I.B.nq) } };
I.B.Ku = function() { I.B.Lg || (I.B.nq = setTimeout(function() { I.B.J = null;
        I.B.Nk = null;
        I.B.Aa() }, 1), clearTimeout(I.B.dj)) };
I.B.Ju = function(a) { if (I.B.J && I.B.J.Hc && !I.G.R() && !I.B.Lg)
        if (I.B.visible) { var b = I.B.Km - a.pageX;
            a = I.B.Lm - a.pageY;
            Math.sqrt(b * b + a * a) > I.B.Tr && I.B.Aa() } else I.B.Nk != I.B.J && (clearTimeout(I.B.dj), I.B.Km = a.pageX, I.B.Lm = a.pageY, I.B.dj = setTimeout(I.B.Yu, I.B.Ir)) };
I.B.Aa = function() { I.B.visible && (I.B.visible = !1, I.B.Z && (I.B.Z.style.display = "none"));
    I.B.dj && clearTimeout(I.B.dj) };
I.B.block = function() { I.B.Aa();
    I.B.Lg = !0 };
I.B.nv = function() { I.B.Lg = !1 };
I.B.Yu = function() {
    if (!I.B.Lg && (I.B.Nk = I.B.J, I.B.Z)) {
        wc(I.B.Z);
        for (var a = I.B.J.Hc; w(a);) a = a();
        a = I.h.uv(a);
        a = a.split("\n");
        for (var b = 0; b < a.length; b++) { var c = document.createElement("div");
            c.appendChild(document.createTextNode(a[b]));
            I.B.Z.appendChild(c) } a = I.B.J.s;
        b = qc();
        I.B.Z.style.direction = a ? "rtl" : "ltr";
        I.B.Z.style.display = "block";
        I.B.visible = !0;
        c = I.B.Km;
        c = a ? c - (I.B.mo + I.B.Z.offsetWidth) : c + I.B.mo;
        var e = I.B.Lm + I.B.no;
        e + I.B.Z.offsetHeight > b.height + window.scrollY && (e -= I.B.Z.offsetHeight + 2 * I.B.no);
        a ? c =
            Math.max(I.B.ul - window.scrollX, c) : c + I.B.Z.offsetWidth > b.width + window.scrollX - 2 * I.B.ul && (c = b.width - I.B.Z.offsetWidth - 2 * I.B.ul);
        I.B.Z.style.top = e + "px";
        I.B.Z.style.left = c + "px"
    }
};

function Xf(a, b) { this.Qa = this.Db = this.pg = this.qg = this.ec = this.Vb = this.mq = null;
    this.Rs = b;
    this.Ei = this.Vf = this.Fi = this.Pf = !1;
    this.pc = a;
    this.F = this.xf = this.Vd = this.Wd = this.Lk = this.Kk = null;
    this.pk = this.Rp = !1;
    this.Sp = !I.Dr } d = Xf.prototype;
d.v = function() { I.Touch.$d();
    I.B.nv();
    this.Rs.hb = null;
    this.Kk && I.Ba(this.Kk);
    this.Lk && I.Ba(this.Lk);
    this.F = this.Qa = this.Db = this.pg = this.qg = null;
    this.Vd && (this.Vd.v(), this.Vd = null);
    this.xf && (this.xf.v(), this.xf = null);
    this.Wd && (this.Wd.v(), this.Wd = null) };

function Yf(a, b) {
    a.Vb = hc(new F(b.clientX, b.clientY), a.mq);
    if (a.Pf) var c = !1;
    else c = a.Vb, a.Pf = Math.sqrt(c.x * c.x + c.y * c.y) > (a.F ? I.Er : I.io), c = a.Pf;
    if (c) {
        if (a.ec) { a.Ei = !0;
            a.Wd = new Qf(a.ec, a.Qa);
            c = a.Wd;
            I.i.Yb() || I.i.O(!0);
            c.j.vb(!1);
            c.ib.Vq(!1);
            c.Jf && c.Gk();
            c.ib.nf && c.ib.nf(!0); var e = c.j.V;
            e && I.h.Sa(e.ic, c.ib.Lb() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            Rf(a.Wd, a.pc, a.Vb);
            c = !0 } else c = !1;
        if (!c) {
            if (a.Db)
                if (a.F ? (a.Db.disabled ? c = !1 : !Zf(a.F) || a.F.$p(a.Vb) ? (a.Qa = a.F.na, $f(a.Qa), I.i.Yb() || I.i.O(!0), a.pg = null,
                        a.Db = ag(a.F, a.Db), a.Db.select(), c = !0) : c = !1, a.Vf = c) : a.Db.Kd() && (a.Vf = !0), a.Vf) { a.Vd = new Bf(a.Db, a.Qa);
                    c = a.Vd;
                    e = a.Vb; var f = a.Sp;
                    I.i.Yb() || I.i.O(!0);
                    c.j.vb(!1);
                    I.xa.cm(); if (c.Pa.getParent() || f && c.Pa.S && P(c.Pa.S)) Qe(c.Pa, f), e = c.nh(e), e = ic(c.Qd, e), c.Pa.translate(e.x, e.y), I.xa.ht(c.Pa);
                    c.Pa.nf(!0);
                    c.Pa.Gk();
                    (e = c.j.V) && I.h.Sa(e.ic, c.Pa.Lb() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                    Df(a.Vd, a.pc, a.Vb);
                    c = !0 } else c = !1;
            else c = !1;
            !c && (a.F ? Zf(a.F) : a.Qa && a.Qa.Xa) && (a.xf = a.F ? new Wf(a.F) : new Tf(a.Qa), a.Fi = !0,
                a.xf.hl())
        }
        I.$e()
    }
    a.pc = b
}
d.$h = function(a) { I.h.tk(a) ? this.cancel() : (this.Rp = !0, I.xa.cm(), $f(this.Qa), this.Qa.Gi && this.Qa.resize(), bg(this.Qa), this.pc = a, I.yb(!!this.F), I.B.block(), this.Db && this.Db.select(), I.h.Xe(a) ? Td(this, a) : (("touchstart" == a.type.toLowerCase() || "pointerdown" == a.type.toLowerCase() && "mouse" != a.pointerType) && I.mu(a, this), this.mq = new F(a.clientX, a.clientY), this.Sp = a.altKey || a.ctrlKey || a.metaKey, this.Ef(a))) };
d.Ef = function(a) { this.Kk = I.H(document, "mousemove", null, this.ti.bind(this));
    this.Lk = I.H(document, "mouseup", null, this.ik.bind(this));
    a.preventDefault();
    a.stopPropagation() };
d.ti = function(a) { Yf(this, a);
    this.Fi ? Vf(this.xf, this.Vb) : this.Vf ? Df(this.Vd, this.pc, this.Vb) : this.Ei && Rf(this.Wd, this.pc, this.Vb);
    a.preventDefault();
    a.stopPropagation() };
d.ik = function(a) {
    Yf(this, a);
    I.$e();
    if (this.pk) console.log("Trying to end a gesture recursively.");
    else {
        this.pk = !0;
        if (this.Ei) Sf(this.Wd, a, this.Vb);
        else if (this.Vf) Gf(this.Vd, a, this.Vb);
        else if (this.Fi) { var b = this.xf;
            Vf(b, this.Vb);
            cg(b.j) } else this.ec && !this.Pf ? (this.ec.En && this.ec.En(), this.ec.select && this.ec.select()) : dg(this) ? (this.qg.qf(), eg(this)) : !this.pg || this.Pf || dg(this) ? this.pg || this.ec || this.qg || this.Pf || I.selected && I.selected.ze() : (this.F && this.F.Kg ? this.Db.disabled || (I.i.Yb() || I.i.O(!0),
            Jf(ag(this.F, this.Db))) : I.i.L(new L(this.pg, "click", void 0, void 0)), eg(this), I.i.O(!1));
        a.preventDefault();
        a.stopPropagation();
        this.v()
    }
};
d.cancel = function() { if (!this.pk) { I.$e(); if (this.Ei) Sf(this.Wd, this.pc, this.Vb);
        else if (this.Vf) Gf(this.Vd, this.pc, this.Vb);
        else if (this.Fi) { var a = this.xf;
            Vf(a, this.Vb);
            cg(a.j) } this.v() } };

function Td(a, b) { a.Db ? (eg(a), I.yb(a.F), a.Db.wh(b)) : a.ec ? a.ec.wh(b) : a.Qa && !a.F && (I.yb(), a.Qa.wh(b));
    b.preventDefault();
    b.stopPropagation();
    a.v() }

function eg(a) { a.Db && !a.F && If(a.Db) }

function fg(a, b) { a.pg || a.ec || (a.pg = b, b.nc && b != qf(b) ? gg(a, qf(b)) : gg(a, b)) }

function gg(a, b) { b.Wa ? gg(a, b.getParent()) : a.Db = b }

function dg(a) { if (a.qg) { var b = a.qg;
        b = b.zf && !!b.w && We(b.w) } else b = !1; return b && !a.Pf && (!a.F || !a.F.Kg) } d.tb = function() { return this.Fi || this.Vf || this.Ei };
I.h = {};
I.h.removeAttribute = function(a, b) { B && rb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b) };
I.h.Sa = function(a, b) { var c = a.getAttribute("class") || ""; if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c && (c += " ");
    a.setAttribute("class", c + b); return !0 };
I.h.ub = function(a, b) { var c = a.getAttribute("class"); if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c = c.split(/\s+/); for (var e = 0; e < c.length; e++) c[e] && c[e] != b || (c.splice(e, 1), e--);
    c.length ? a.setAttribute("class", c.join(" ")) : I.h.removeAttribute(a, "class"); return !0 };
I.h.Op = function(a, b) { return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ") };
I.h.uu = function(a) { a.preventDefault();
    a.stopPropagation() };
I.h.tk = function(a) { return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable };
I.h.Zb = function(a) { var b = new F(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10)); if (c = a.getAttribute("y")) b.y = parseInt(c, 10); if (c = (c = a.getAttribute("transform")) && c.match(I.h.Zb.fs)) b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && ((c = a.match(I.h.Zb.bs)) || (c = a.match(I.h.Zb.ds)), c && (b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3])))); return b };
I.h.$j = function(a) { for (var b = 0, c = 0; a;) { var e = I.h.Zb(a);
        b += e.x;
        c += e.y; if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode } return new F(b, c) };
I.h.Zb.fs = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
I.h.Zb.ds = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
I.h.Zb.bs = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
I.h.A = function(a, b, c) { a = document.createElementNS(I.zl, a); for (var e in b) a.setAttribute(e, b[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a); return a };
I.h.Xe = function(a) { return a.ctrlKey && ib ? !0 : 2 == a.button };
I.h.Pi = function(a, b, c) { var e = b.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    c || (c = b.getScreenCTM().inverse()); return e.matrixTransform(c) };
I.h.Jn = function(a) { return a.length ? a.reduce(function(a, c) { return a.length < c.length ? a : c }).length : 0 };
I.h.Ms = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || I.h.Jn(a); for (var e = 0; e < b; e++) { for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c; return b };
I.h.Ns = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || I.h.Jn(a); for (var e = 0; e < b; e++) { for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c; return b };
I.h.hv = function(a) { return I.h.Wn(a, !0) };
I.h.Qb = function(a) { if (!q(a)) return a;
    a = I.h.Wn(a, !1); return a.length ? a[0] : "" };
I.h.Ho = function(a) { for (var b = I.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e;) { var f = e[1];
        f = f.toUpperCase(); "BKY_" != f.substr(0, 4) ? console.log("WARNING: Unsupported message table prefix in %{" + e[1] + "}.") : void 0 == b[f.substr(4)] && console.log("WARNING: No message string for %{" + e[1] + "}.");
        a = a.substring(e.index + f.length + 1);
        e = c.exec(a) } };
I.h.Wn = function(a, b) {
    var c = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && c.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : b && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && c.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (c.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[a-zA-Z][a-zA-Z0-9_]*/.test(f) ? (l = f.toUpperCase(), (l = Ea(l, "BKY_") ?
            l.substring(4) : null) && l in I.g ? (f = I.g[l], q(f) ? Array.prototype.push.apply(c, I.h.Wn(f, b)) : b ? c.push(String(f)) : c.push(f)) : c.push("%{" + f + "}")) : c.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && c.push(l);
    b = [];
    for (k = a.length = 0; k < c.length; ++k) "string" == typeof c[k] ? a.push(c[k]) : ((l = a.join("")) && b.push(l), a.length = 0, b.push(c[k]));
    (l = a.join("")) && b.push(l);
    a.length = 0;
    return b
};
I.h.Cd = function() { for (var a = I.h.Cd.cr.length, b = [], c = 0; 20 > c; c++) b[c] = I.h.Cd.cr.charAt(Math.random() * a); return b.join("") };
I.h.Cd.cr = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
I.h.uv = function(a) { var b = I.B.Lr;
    a = a.split("\n"); for (var c = 0; c < a.length; c++) a[c] = I.h.vv(a[c], b); return a.join("\n") };
I.h.vv = function(a, b) { if (a.length <= b) return a; for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++) c[e].length > b && (b = c[e].length);
    e = -Infinity; var f = 1;
    do { var h = e; var k = a;
        a = []; var l = c.length / f,
            m = 1; for (e = 0; e < c.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = I.h.zr(c, a, b);
        e = I.h.Zn(c, a, b);
        a = I.h.wv(c, a);
        f++ } while (e > h); return k };
I.h.Zn = function(a, b, c) { for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === b[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === b[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e); for (h = b = 0; h < e.length; h++) b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5), b -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? b += c / 3 : -1 != ",;)]}".indexOf(f[h]) && (b += c / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += .5); return b };
I.h.zr = function(a, b, c) { for (var e = I.h.Zn(a, b, c), f, h = 0; h < b.length - 1; h++)
        if (b[h] != b[h + 1]) { var k = [].concat(b);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1]; var l = I.h.Zn(a, k, c);
            l > e && (e = l, f = k) } return f ? I.h.zr(a, f, c) : b };
I.h.wv = function(a, b) { for (var c = [], e = 0; e < a.length; e++) c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " "); return c.join("") };
I.h.We = function() {
    if (void 0 !== I.h.We.Jl) return I.h.We.Jl;
    if (!g.getComputedStyle) return !1;
    var a = document.createElement("p"),
        b = "none",
        c = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
    document.body.insertBefore(a, null);
    for (var e in c)
        if (void 0 !== a.style[e]) { a.style[e] = "translate3d(1px,1px,1px)";
            b = g.getComputedStyle(a); if (!b) return document.body.removeChild(a), !1;
            b = b.getPropertyValue(c[e]) } document.body.removeChild(a);
    I.h.We.Jl = "none" !== b;
    return I.h.We.Jl
};
I.h.Ci = function(a, b) { var c = b.nextSibling;
    b = b.parentNode; if (!b) throw "Reference node has no parent.";
    c ? b.insertBefore(a, c) : b.appendChild(a) };
I.h.Tq = function(a) { if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document."); if ("complete" === document.readyState) a();
    else var b = setInterval(function() { "complete" === document.readyState && (clearInterval(b), a()) }, 10) };
I.h.Zi = function(a, b) { a.style.transform = b;
    a.style["-webkit-transform"] = b };
I.h.sm = function() { var a = qc(),
        b = hg(); return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x } };

function ig(a, b) { this.Zg = a;
    this.Nn = b.spacing;
    this.fq = b.length;
    this.iu = (this.Nm = a.firstChild) && this.Nm.nextSibling;
    this.Zu = b.snap } ig.prototype.jf = 1;
ig.prototype.v = function() { this.Zg = null };
ig.prototype.update = function(a) { this.jf = a; var b = this.Nn * a || 100;
    this.Zg.setAttribute("width", b);
    this.Zg.setAttribute("height", b);
    b = Math.floor(this.Nn / 2) + .5; var c = b - this.fq / 2,
        e = b + this.fq / 2;
    b *= a;
    c *= a;
    e *= a;
    jg(this.Nm, a, c, e, b, b);
    jg(this.iu, a, b, b, c, e) };

function jg(a, b, c, e, f, h) { a && (a.setAttribute("stroke-width", b), a.setAttribute("x1", c), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h)) } ig.prototype.moveTo = function(a, b) { this.Zg.setAttribute("x", a);
    this.Zg.setAttribute("y", b);
    (B || gb) && this.update(this.jf) };

function kg(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        e = !1,
        f = !1,
        h = !1,
        k = !1,
        l = !1,
        m = !1;
    else c = lg(a.toolbox), e = !(!c || !c.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = e), h = a.collapse, void 0 === h && (h = e), k = a.comments, void 0 === k && (k = e), l = a.disable, void 0 === l && (l = e), m = a.sounds, void 0 === m && (m = !0);
    var n = !!a.rtl,
        p = a.horizontalLayout;
    void 0 === p && (p = !1);
    var r = a.toolboxPosition;
    r = "end" === r ? !1 : !0;
    r = p ? r ? I.Fe : I.Bf : r == n ? I.td : I.Ee;
    var C = a.scrollbars;
    void 0 === C && (C = e);
    var v = a.css;
    void 0 === v && (v = !0);
    var x = "https://blockly-demo.appspot.com/static/media/";
    a.media ? x = a.media : a.path && (x = a.path + "media/");
    var ra = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
    this.s = n;
    this.Mk = ra;
    this.collapse = h;
    this.Ls = k;
    this.disable = l;
    this.readOnly = b;
    this.iq = a.maxBlocks || Infinity;
    this.nd = x;
    this.Np = e;
    this.Qp = C;
    this.Wt = f;
    this.Vt = m;
    this.Ut = v;
    this.Id = p;
    this.Ld = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.Wy = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.sz = 0 < c.spacing && !!b.snap;
    this.Jp = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.rv = void 0 === a.wheel ? !1 : !!a.wheel;
    b.kr = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Ni = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Oi = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.Wu = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.Fb = b;
    this.ua = r
}
kg.prototype.Dc = null;
kg.prototype.pf = null;
kg.prototype.Va = null;

function lg(a) { a ? ("string" != typeof a && ("undefined" == typeof XSLTProcessor && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = I.C.fc(a))) : a = null; return a };

function mg(a) { this.j = a;
    this.Qe = new ng(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.vf = new ng(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.Th = I.h.A("rect", { height: O, width: O, "class": "blocklyScrollbarBackground" }, null);
    I.h.Ci(this.Th, a.rd) } mg.prototype.Na = null;
mg.prototype.v = function() { H(this.Th);
    this.Na = this.j = this.Th = null;
    this.Qe.v();
    this.Qe = null;
    this.vf.v();
    this.vf = null };
mg.prototype.resize = function() {
    var a = this.j.Va();
    if (a) {
        var b = !1,
            c = !1;
        this.Na && this.Na.qa == a.qa && this.Na.Oa == a.Oa && this.Na.bb == a.bb && this.Na.Ra == a.Ra ? (this.Na && this.Na.lc == a.lc && this.Na.fb == a.fb && this.Na.xc == a.xc || (b = !0), this.Na && this.Na.Ub == a.Ub && this.Na.Td == a.Td && this.Na.kc == a.kc || (c = !0)) : c = b = !0;
        b && this.Qe.resize(a);
        c && this.vf.resize(a);
        this.Na && this.Na.qa == a.qa && this.Na.Ra == a.Ra || this.Th.setAttribute("x", this.vf.qc.x);
        this.Na && this.Na.Oa == a.Oa && this.Na.bb == a.bb || this.Th.setAttribute("y", this.Qe.qc.y);
        this.Na = a
    }
};
mg.prototype.set = function(a, b) { var c = {};
    a *= this.Qe.Ob;
    b *= this.vf.Ob; var e = this.vf.$c,
        f = a / this.Qe.$c;
    c.x = isNaN(f) ? 0 : f;
    e = b / e;
    c.y = isNaN(e) ? 0 : e;
    this.j.pf(c);
    og(this.Qe, a);
    og(this.vf, b) };

function ng(a, b, c, e) {
    this.j = a;
    this.mh = c || !1;
    this.Rf = b;
    this.Na = null;
    this.Uh(e);
    this.qc = new F(0, 0);
    a = O;
    b ? (this.Gc.setAttribute("height", a), this.Md.setAttribute("height", a), this.Rd.setAttribute("height", a - 5), this.Rd.setAttribute("y", 2.5), this.Ki = "width", this.Jq = "x") : (this.Gc.setAttribute("width", a), this.Md.setAttribute("width", a), this.Rd.setAttribute("width", a - 5), this.Rd.setAttribute("x", 2.5), this.Ki = "height", this.Jq = "y");
    this.Cq = I.H(this.Gc, "mousedown", this, this.Gu);
    this.Dq = I.H(this.Rd, "mousedown",
        this, this.Hu)
}
var pg, qg;
d = ng.prototype;
d.Zm = new F(0, 0);
d.ir = 0;
d.$c = 0;
d.Re = 0;
d.ui = 0;
d.Ii = !0;
d.Ff = !0;
var O = 15;
ed && (O = 25);
ng.prototype.v = function() { rg();
    I.Ba(this.Cq);
    this.Cq = null;
    I.Ba(this.Dq);
    this.Dq = null;
    H(this.Md);
    this.j = this.Rd = this.Gc = this.u = this.Md = null };

function og(a, b) { a.ui = b;
    a.Rd.setAttribute(a.Jq, a.ui) }

function sg(a, b) { a.$c = b;
    a.Md.setAttribute(a.Ki, a.$c);
    a.Gc.setAttribute(a.Ki, a.$c) } mg.prototype.jg = function(a) { this.Qe.jg(a);
    this.vf.jg(a) };

function tg(a, b, c) { a.qc.x = b;
    a.qc.y = c;
    I.h.Zi(a.Md, "translate(" + (a.qc.x + a.Zm.x) + "px," + (a.qc.y + a.Zm.y) + "px)") } d = ng.prototype;
d.resize = function(a) {
    if (!a && (a = this.j.Va(), !a)) return;
    var b = this.Na;
    if (!a || !b || a.qa != b.qa || a.Oa != b.Oa || a.fb != b.fb || a.Td != b.Td || a.bb != b.bb || a.Ra != b.Ra || a.lc != b.lc || a.Ub != b.Ub || a.xc != b.xc || a.kc != b.kc) {
        this.Na = a;
        if (this.Rf) {
            b = a.qa - 1;
            this.mh && (b -= O);
            sg(this, Math.max(0, b));
            b = a.Ra + .5;
            this.mh && this.j.s && (b += O);
            tg(this, b, a.bb + a.Oa - O - .5);
            this.mh || this.ka(this.$c < a.lc);
            this.Ob = this.$c / a.lc;
            if (-Infinity == this.Ob || Infinity == this.Ob || isNaN(this.Ob)) this.Ob = 0;
            this.Re = Math.max(0, a.qa * this.Ob);
            this.Rd.setAttribute(this.Ki,
                this.Re);
            og(this, ug(this, (a.fb - a.xc) * this.Ob))
        } else { b = a.Oa - 1;
            this.mh && (b -= O);
            sg(this, Math.max(0, b));
            b = a.Ra + .5;
            this.j.s || (b += a.qa - O - 1);
            tg(this, b, a.bb + .5);
            this.mh || this.ka(this.$c < a.Ub);
            this.Ob = this.$c / a.Ub; if (-Infinity == this.Ob || Infinity == this.Ob || isNaN(this.Ob)) this.Ob = 0;
            this.Re = Math.max(0, a.Oa * this.Ob);
            this.Rd.setAttribute(this.Ki, this.Re);
            og(this, ug(this, (a.Td - a.kc) * this.Ob)) } vg(this)
    }
};
d.Uh = function(a) { var b = "blocklyScrollbar" + (this.Rf ? "Horizontal" : "Vertical");
    a && (b += " " + a);
    this.Md = I.h.A("svg", { "class": b }, null);
    this.u = I.h.A("g", {}, this.Md);
    this.Gc = I.h.A("rect", { "class": "blocklyScrollbarBackground" }, this.u);
    a = Math.floor((O - 5) / 2);
    this.Rd = I.h.A("rect", { "class": "blocklyScrollbarHandle", rx: a, ry: a }, this.u);
    I.h.Ci(this.Md, Q(this.j)) };
d.R = function() { return this.Ii };
d.jg = function(a) { var b = a != this.Ff;
    this.Ff = a;
    b && this.mj() };
d.ka = function(a) { var b = a != this.R(); if (this.mh) throw "Unable to toggle visibility of paired scrollbars.";
    this.Ii = a;
    b && this.mj() };
d.mj = function() { this.Ff && this.R() ? this.Md.setAttribute("display", "block") : this.Md.setAttribute("display", "none") };
d.Gu = function(a) { bg(this.j);
    I.Touch.$d();
    rg(); if (I.h.Xe(a)) a.stopPropagation();
    else { var b = I.h.Pi(a, Q(this.j), wg(this.j));
        b = this.Rf ? b.x : b.y; var c = I.h.$j(this.Rd);
        c = this.Rf ? c.x : c.y; var e = this.ui,
            f = .95 * this.Re;
        b <= c ? e -= f : b >= c + this.Re && (e += f);
        og(this, ug(this, e));
        vg(this);
        a.stopPropagation();
        a.preventDefault() } };
d.Hu = function(a) { bg(this.j);
    rg();
    I.h.Xe(a) ? a.stopPropagation() : (this.av = this.ui, Uf(this.j), this.ir = this.Rf ? a.clientX : a.clientY, pg = I.H(document, "mouseup", this, this.Mu), qg = I.H(document, "mousemove", this, this.Iu), a.stopPropagation(), a.preventDefault()) };
d.Iu = function(a) { og(this, ug(this, this.av + ((this.Rf ? a.clientX : a.clientY) - this.ir)));
    vg(this) };
d.Mu = function() { cg(this.j);
    I.Touch.$d();
    rg() };

function rg() { I.yb(!0);
    pg && (I.Ba(pg), pg = null);
    qg && (I.Ba(qg), qg = null) }

function ug(a, b) { return b = 0 >= b || isNaN(b) || a.$c < a.Re ? 0 : Math.min(b, a.$c - a.Re) }

function vg(a) { var b = a.ui / a.$c;
    isNaN(b) && (b = 0); var c = {};
    a.Rf ? c.x = b : c.y = b;
    a.j.pf(c) } d.set = function(a) { og(this, ug(this, a * this.Ob));
    vg(this) };

function xg(a, b) { xg.m.constructor.call(this, a, b);
    this.qk = !1;
    this.Tc = {};
    this.gr = this.Ui = 0;
    this.Ym = null } y(xg, Xf);
d = xg.prototype;
d.$h = function(a) { xg.m.$h.call(this, a);!this.pk && I.Touch.vk(a) && yg(this, a) };
d.Ef = function(a) { this.Ym = I.H(document, "mousedown", null, this.Rt.bind(this), !0);
    this.Kk = I.H(document, "mousemove", null, this.ti.bind(this), !0);
    this.Lk = I.H(document, "mouseup", null, this.ik.bind(this), !0);
    a.preventDefault();
    a.stopPropagation() };
d.Rt = function(a) {!this.tb() && I.Touch.vk(a) && (yg(this, a), this.qk && I.$e()) };
d.ti = function(a) { if (this.tb()) I.Touch.Kn(a) && xg.m.ti.call(this, a);
    else if (this.qk) { if (I.Touch.vk(a)) { this.Tc[I.Touch.fk(a)] = zg(this, a); var b = Object.keys(this.Tc); if (2 == b.length) { b = gc(this.Tc[b[0]], this.Tc[b[1]]) / this.gr; if (0 < this.Ui && Infinity > this.Ui) { var c = b - this.Ui;
                    c = 0 < c ? 5 * c : 6 * c; var e = this.Qa,
                        f = I.h.Pi(a, Q(e), wg(e));
                    e.zoom(f.x, f.y, c) } this.Ui = b;
                a.preventDefault() } } I.$e() } else xg.m.ti.call(this, a) };
d.ik = function(a) { if (I.Touch.vk(a) && !this.tb()) { var b = I.Touch.fk(a);
        this.Tc[b] && delete this.Tc[b];
        2 > Object.keys(this.Tc).length && (this.Tc = {}, this.Ui = 0) }!this.qk || this.tb() ? I.Touch.Kn(a) && xg.m.ik.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.v()) };
d.v = function() { xg.m.v.call(this);
    this.Ym && I.Ba(this.Ym) };

function yg(a, b) { a.Tc[I.Touch.fk(b)] = zg(a, b); var c = Object.keys(a.Tc);
    2 == c.length && (a.gr = gc(a.Tc[c[0]], a.Tc[c[1]]), a.qk = !0, b.preventDefault()) }

function zg(a, b) { return a.Qa ? new F(b.pageX ? b.pageX : b.changedTouches[0].pageX, b.pageY ? b.pageY : b.changedTouches[0].pageY) : null };

function Ag() { jd.call(this);
    this.ae = new Bd(this);
    this.hs = this;
    this.$m = null } y(Ag, jd);
Ag.prototype[wd] = !0;
d = Ag.prototype;
d.ck = function() { return this.$m };
d.$k = function(a) { this.$m = a };
d.addEventListener = function(a, b, c, e) { J(this, a, b, c, e) };
d.removeEventListener = function(a, b, c, e) { Od(this, a, b, c, e) };
d.dispatchEvent = function(a) { var b, c = this.ck(); if (c)
        for (b = []; c; c = c.ck()) b.push(c);
    c = this.hs; var e = a.type || a; if (q(a)) a = new od(a, c);
    else if (a instanceof od) a.target = a.target || c;
    else { var f = a;
        a = new od(e, c);
        ab(a, f) } f = !0; if (b)
        for (var h = b.length - 1; !a.fg && 0 <= h; h--) { var k = a.currentTarget = b[h];
            f = Bg(k, e, !0, a) && f } a.fg || (k = a.currentTarget = c, f = Bg(k, e, !0, a) && f, a.fg || (f = Bg(k, e, !1, a) && f)); if (b)
        for (h = 0; !a.fg && h < b.length; h++) k = a.currentTarget = b[h], f = Bg(k, e, !1, a) && f; return f };
d.Ha = function() { Ag.m.Ha.call(this);
    this.removeAllListeners();
    this.$m = null };
d.ga = function(a, b, c, e) { return this.ae.add(String(a), b, !1, c, e) };
d.hq = function(a, b, c, e) { return this.ae.add(String(a), b, !0, c, e) };
d.Jc = function(a, b, c, e) { return this.ae.remove(String(a), b, c, e) };
d.removeAllListeners = function(a) { return this.ae ? this.ae.removeAll(a) : 0 };

function Bg(a, b, c, e) { b = a.ae.bc[String(b)]; if (!b) return !0;
    b = b.concat(); for (var f = !0, h = 0; h < b.length; ++h) { var k = b[h]; if (k && !k.sh && k.capture == c) { var l = k.listener,
                m = k.jk || k.src;
            k.yj && Dd(a.ae, k);
            f = !1 !== l.call(m, e) && f } } return f && 0 != e.Sq } d.ji = function(a, b, c, e) { return this.ae.ji(String(a), b, c, e) };

function Hf(a, b, c) { if (w(a)) c && (a = na(a, c));
    else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
    else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0) };

function Cg(a, b, c, e) { this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e } d = Cg.prototype;
d.Bc = function() { return this.right - this.left };
d.Wg = function() { return this.bottom - this.top };
d.clone = function() { return new Cg(this.top, this.right, this.bottom, this.left) };
d.contains = function(a) { return this && a ? a instanceof Cg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1 };
d.expand = function(a, b, c, e) { ha(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(e)); return this };
d.ceil = function() { this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left); return this };
d.floor = function() { this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left); return this };
d.round = function() { this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left); return this };
d.translate = function(a, b) { a instanceof F ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, t(b) && (this.top += b, this.bottom += b)); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b; return this };

function Dg(a, b, c, e) { this.left = a;
    this.top = b;
    this.width = c;
    this.height = e } d = Dg.prototype;
d.clone = function() { return new Dg(this.left, this.top, this.width, this.height) };
d.contains = function(a) { return a instanceof F ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height };
d.fe = function() { return new jc(this.width, this.height) };
d.ceil = function() { this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height); return this };
d.floor = function() { this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height); return this };
d.round = function() { this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height); return this };
d.translate = function(a, b) { a instanceof F ? (this.left += a.x, this.top += a.y) : (this.left += a, t(b) && (this.top += b)); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b; return this };

function Eg(a) { this.j = a } d = Eg.prototype;
d.Cf = 47;
d.qj = 44;
d.Cg = 16;
d.vl = 20;
d.Hh = 20;
d.vj = 10;
d.xl = 0;
d.yl = 32;
d.fh = !1;
d.u = null;
d.jl = null;
d.Mm = 0;
d.Ze = 0;
d.lb = 0;
d.we = 0;
d.M = function() {
    this.u = I.h.A("g", { "class": "blocklyTrash" }, null);
    var a = String(Math.random()).substring(2);
    var b = I.h.A("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.u);
    I.h.A("rect", { width: this.Cf, height: this.qj, y: this.Cg }, b);
    I.h.A("image", { width: I.Sb.width, x: -this.xl, height: I.Sb.height, y: -this.yl, "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")" }, this.u).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.j.options.nd + I.Sb.url);
    b = I.h.A("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.u);
    I.h.A("rect", { width: this.Cf, height: this.Cg }, b);
    this.jl = I.h.A("image", { width: I.Sb.width, x: -this.xl, height: I.Sb.height, y: -this.yl, "clip-path": "url(#blocklyTrashLidClipPath" + a + ")" }, this.u);
    this.jl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.j.options.nd + I.Sb.url);
    I.H(this.u, "mouseup", this, this.click);
    this.Dl();
    return this.u
};
d.ea = function(a) { this.Nh = this.vl + a;
    Ff(this, !1); return this.Nh + this.qj + this.Cg };
d.v = function() { this.u && (H(this.u), this.u = null);
    this.j = this.jl = null;
    g.clearTimeout(this.Mm) };
d.position = function() { var a = this.j.Va();
    a && (this.j.s ? (this.lb = this.Hh + O, a.ua == I.Ee && (this.lb += a.Tj, this.j.V && (this.lb += a.Ra))) : (this.lb = a.qa + a.Ra - this.Cf - this.Hh - O, a.ua == I.td && (this.lb -= a.Tj)), this.we = a.Oa + a.bb - (this.qj + this.Cg) - this.Nh, a.ua == I.Bf && (this.we -= a.Bp), this.u.setAttribute("transform", "translate(" + this.lb + "," + this.we + ")")) };
d.Tg = function() { if (!this.u) return null; var a = this.u.getBoundingClientRect(); return new Dg(a.left + this.xl - this.vj, a.top + this.yl - this.vj, this.Cf + 2 * this.vj, this.Cg + this.qj + 2 * this.vj) };

function Ff(a, b) { a.fh != b && (g.clearTimeout(a.Mm), a.fh = b, a.Dl()) }
d.Dl = function() { this.Ze += this.fh ? .2 : -.2;
    this.Ze = Math.min(Math.max(this.Ze, 0), 1); var a = 45 * this.Ze;
    this.jl.setAttribute("transform", "rotate(" + (this.j.s ? -a : a) + "," + (this.j.s ? 4 : this.Cf - 4) + "," + (this.Cg - 2) + ")");
    this.u.style.opacity = .4 + .4 * this.Ze;
    0 < this.Ze && 1 > this.Ze && (this.Mm = Hf(this.Dl, 20, this)) };
d.close = function() { Ff(this, !1) };
d.click = function() { var a = this.j.cv - this.j.scrollX,
        b = this.j.ev - this.j.scrollY;
    Math.sqrt(a * a + b * b) > I.io || console.log("TODO: Inspect trash.") };

function ne(a, b, c, e) { this.o = a;
    this.name = b;
    this.type = c || "";
    this.dh = e || I.h.Cd();
    I.i.L(new Zd(this)) } ne.prototype.ia = function() { return this.dh };

function Fg(a, b) { a = String(a.name).toLowerCase();
    b = String(b.name).toLowerCase(); return a < b ? -1 : a == b ? 0 : 1 };
I.I = {};
I.I.Rr = I.ro;
I.I.ns = function(a) { var b = le(a);
    a = Object.create(null); for (var c = 0; c < b.length; c++) { var e = pe(b[c]); if (e)
            for (var f = 0; f < e.length; f++) { var h = e[f];
                h.ia() && (a[h.ia()] = h) } } b = []; for (var k in a) b.push(a[k]); return b };
I.I.My = function() { console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.") };
I.I.Ly = function(a) { var b = le(a);
    a = {}; for (var c = 0; c < b.length; c++) { var e = b[c]; if (e.At) { e = e.At(); for (var f = 0; f < e.length; f++) a[e[f]] = e[f] } } b = []; for (var h in a) b.push(a[h]); return b };
I.I.Me = function(a) { var b = [],
        c = G("button");
    c.setAttribute("text", I.g.NEW_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE");
    Gg(a, function(a) { I.I.Mg(a.na) });
    b.push(c);
    a = I.I.im(a); return b = b.concat(a) };
I.I.im = function(a) {
    a = a.ni("");
    a.sort(Fg);
    var b = [];
    if (0 < a.length) {
        var c = a[0];
        if (I.$a.variables_set) { var e = I.$a.math_change ? 8 : 24;
            e = '<xml><block type="variables_set" gap="' + e + '">' + I.I.Sg(c) + "</block></xml>";
            e = I.C.fc(e).firstChild;
            b.push(e) } I.$a.math_change && (e = I.$a.variables_get ? 20 : 8, e = '<xml><block type="math_change" gap="' + e + '">' + I.I.Sg(c) + '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>', e = I.C.fc(e).firstChild, b.push(e));
        for (c = 0; e = a[c]; c++) I.$a.variables_get &&
            (e = '<xml><block type="variables_get" gap="8">' + I.I.Sg(e) + "</block></xml>", e = I.C.fc(e).firstChild, b.push(e))
    }
    return b
};
I.I.xt = function(a) { a = a.ce(); var b = ""; if (a.length)
        for (var c = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !b;) { for (var h = !1, k = 0; k < a.length; k++)
                if (a[k].name.toLowerCase() == f) { h = !0; break } h ? (e++, 25 == e && (e = 0, c++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < c && (f += c)) : b = f } else b = "i"; return b };
I.I.Mg = function(a, b, c) {
    function e(c) { I.I.Nq(I.g.NEW_VARIABLE_TITLE, c, function(c) { if (c) { var h = I.I.qu(c, a); if (h) { var k = c.toLowerCase(); if (h.type == f) var n = I.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
                    else n = I.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", k).replace("%2", h.type);
                    I.alert(n, function() { e(c) }) } else a.Uc(c, f), b && b(c) } else b && b(null) }) } var f = c || "";
    e("") };
ba("Blockly.Variables.createVariableButtonHandler", I.I.Mg);
I.I.Uc = I.I.Mg;
ba("Blockly.Variables.createVariable", I.I.Uc);
I.I.pn = function(a, b) {
    function c(e) { var f = I.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
        I.I.Nq(f, e, function(e) { if (e) { var f = I.I.su(e, b.type, a);
                f ? (f = I.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", e.toLowerCase()).replace("%2", f.type), I.alert(f, function() { c(e) })) : a.hg(b.ia(), e) } }) } c("") };
I.I.Nq = function(a, b, c) { I.prompt(a, b, function(a) { a && (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), a == I.g.RENAME_VARIABLE || a == I.g.NEW_VARIABLE) && (a = null);
        c(a) }) };
I.I.su = function(a, b, c) { c = c.va.ce();
    a = a.toLowerCase(); for (var e = 0, f; f = c[e]; e++)
        if (f.name.toLowerCase() == a && f.type != b) return f; return null };
I.I.qu = function(a, b) { b = b.va.ce();
    a = a.toLowerCase(); for (var c = 0, e; e = b[c]; c++)
        if (e.name.toLowerCase() == a) return e; return null };
I.I.Sg = function(a) { var b = a.type; "" == b && (b = "''"); return '<field name="VAR" id="' + a.ia() + '" variabletype="' + Ia(b) + '">' + Ia(a.name) + "</field>" };
I.I.dz = function(a) { a = "<xml>" + I.I.Sg(a) + "</xml>"; return I.C.fc(a).firstChild };
I.I.Hp = function(a, b, c, e) { var f = I.I.jd(a, b, c, e);
    f || (f = I.I.Qs(a, b, c, e)); return f };
I.I.jd = function(a, b, c, e) { var f = a.ph; if (b) { var h = a.Oe(b);!h && f && (h = f.Oe(b)) } else if (c) { if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.jd(c, e);!h && f && (h = f.jd(c, e)) } return h };
I.I.Qs = function(a, b, c, e) { var f = a.ph;
    c || (c = I.I.xt(a.ke ? a.ug : a)); return f ? f.Uc(c, e, b) : a.Uc(c, e, b) };
I.I.Dp = function(a, b) { a = a.ce(); var c = []; if (b.length != a.length)
        for (var e = 0; e < a.length; e++) { var f = a[e]; - 1 == b.indexOf(f) && c.push(f) }
    return c };
I.Oc = {};
I.Oc.zu = function(a) { I.I.Mg(a.na, null, "String") };
I.Oc.yu = function(a) { I.I.Mg(a.na, null, "Number") };
I.Oc.xu = function(a) { I.I.Mg(a.na, null, "Colour") };
I.Oc.Me = function(a) {
    var b = [],
        c = G("button");
    c.setAttribute("text", I.g.NEW_STRING_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
    b.push(c);
    c = G("button");
    c.setAttribute("text", I.g.NEW_NUMBER_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
    b.push(c);
    c = G("button");
    c.setAttribute("text", I.g.NEW_COLOUR_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
    b.push(c);
    a.Lf.CREATE_VARIABLE_STRING = I.Oc.zu;
    a.Lf.CREATE_VARIABLE_NUMBER = I.Oc.yu;
    a.Lf.CREATE_VARIABLE_COLOUR =
        I.Oc.xu;
    a = I.Oc.im(a);
    return b = b.concat(a)
};
I.Oc.im = function(a) { a = a.ce();
    a.sort(Fg); var b = []; if (0 < a.length) { if (I.$a.variables_set_dynamic) { var c = '<xml><block type="variables_set_dynamic" gap="24">' + I.I.Sg(a[0]) + "</block></xml>";
            c = I.C.fc(c).firstChild;
            b.push(c) } if (I.$a.variables_get_dynamic)
            for (var e = 0; c = a[e]; e++) c = '<xml><block type="variables_get_dynamic" gap="8">' + I.I.Sg(c) + "</block></xml>", c = I.C.fc(c).firstChild, b.push(c) } return b };

function Hg(a) { this.an = a;
    this.Lh = Object.create(null) } d = Hg.prototype;
d.Jm = null;
d.v = function() { this.Lh = this.an = null };
d.load = function(a, b) { if (a.length) { try { var c = new window.Audio } catch (l) { return } for (var e, f = 0; f < a.length; f++) { var h = a[f],
                k = h.match(/\.(\w+)$/); if (k && c.canPlayType("audio/" + k[1])) { e = new window.Audio(h); break } } e && e.play && (this.Lh[b] = e) } };
d.preload = function() { for (var a in this.Lh) { var b = this.Lh[a];
        b.volume = .01;
        b.play();
        b.pause(); if (lb || kb) break } };
d.play = function(a, b) { var c = this.Lh[a];
    c ? (a = new Date, null != this.Jm && a - this.Jm < I.Xr || (this.Jm = a, c = sb && 9 === sb || lb || jb ? c : c.cloneNode(), c.volume = void 0 === b ? 1 : b, c.play())) : this.an && this.an.vd.play(a, b) };
d = Kf.prototype;
d.kb = function() { return { width: this.Bc(), height: this.Wg() } };
d.U = function() {
    if (!this.hf) {
        var a = this.kb();
        this.Vh();
        this.u.appendChild(this.zc);
        this.sg = I.h.A("rect", { "class": "blocklyCommentHandleTarget", x: 0, y: 0 });
        this.u.appendChild(this.sg);
        this.sf = I.h.A("rect", { "class": "blocklyCommentTarget", x: 0, y: 0, rx: 3, ry: 3 });
        this.u.appendChild(this.sf);
        this.ob = I.h.A("g", { "class": this.s ? "blocklyResizeSW" : "blocklyResizeSE" }, this.u);
        I.h.A("polygon", { points: "0,x x,x x,0".replace(/x/g, (8).toString()) }, this.ob);
        I.h.A("line", { "class": "blocklyResizeLine", x1: 8 / 3, y1: 7, x2: 7, y2: 8 / 3 },
            this.ob);
        I.h.A("line", { "class": "blocklyResizeLine", x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 }, this.ob);
        this.Lb() && (this.Ke = I.h.A("g", { "class": "blocklyCommentDeleteIcon" }, this.u), this.mp = I.h.A("circle", { "class": "blocklyDeleteIconShape", r: "7", cx: "7.5", cy: "7.5" }, this.Ke), I.h.A("line", { x1: "5", y1: "10", x2: "10", y2: "5", stroke: "#fff", "stroke-width": "2" }, this.Ke), I.h.A("line", { x1: "5", y1: "5", x2: "10", y2: "10", stroke: "#fff", "stroke-width": "2" }, this.Ke));
        Ig(this, a.width, a.height);
        this.Za.value = this.yc;
        this.hf = !0;
        this.ob && I.H(this.ob,
            "mousedown", this, this.rn);
        this.Lb() && (I.H(this.Ke, "mousedown", this, this.bt), I.H(this.Ke, "mouseout", this, this.ct), I.H(this.Ke, "mouseup", this, this.dt))
    }
};
d.Vh = function() { this.zc = I.h.A("foreignObject", { x: 0, y: 10, "class": "blocklyCommentForeignObject" }, null); var a = document.createElementNS(I.Ce, "body");
    a.setAttribute("xmlns", I.Ce);
    a.className = "blocklyMinimalBody"; var b = document.createElementNS(I.Ce, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.s ? "RTL" : "LTR");
    a.appendChild(b);
    this.Za = b;
    this.zc.appendChild(a);
    I.H(b, "wheel", this, function(a) { a.stopPropagation() });
    I.H(b, "change", this, function() { this.ad(b.value) }); return this.zc };
d.rn = function(a) { Jg(this);
    I.h.Xe(a) || (this.o.hl(a, new F(this.o.s ? -this.Y : this.Y, this.wa)), this.lh = I.H(document, "mouseup", this, this.Tu), this.Xm = I.H(document, "mousemove", this, this.sn), I.yb());
    a.stopPropagation() };
d.bt = function(a) { I.h.Sa(this.mp, "blocklyDeleteIconHighlighted");
    a.stopPropagation() };
d.ct = function() { I.h.ub(this.mp, "blocklyDeleteIconHighlighted") };
d.dt = function(a) { this.v(!0, !0);
    a.stopPropagation() };

function Jg(a) { a.lh && (I.Ba(a.lh), a.lh = null);
    a.Xm && (I.Ba(a.Xm), a.Xm = null) }
d.Tu = function() { I.Touch.$d();
    Jg(this) };
d.sn = function(a) { this.xj = !1;
    a = Le(this.o, a);
    Ig(this, this.s ? -a.x : a.x, a.y) };

function Ig(a, b, c) {
    b = Math.max(b, 45);
    c = Math.max(c, 30);
    a.Y = b;
    a.wa = c;
    a.hj.setAttribute("width", b);
    a.hj.setAttribute("height", c);
    a.sf.setAttribute("width", b);
    a.sf.setAttribute("height", c);
    a.sg.setAttribute("width", b);
    a.sg.setAttribute("height", 10);
    a.s && (a.hj.setAttribute("transform", "scale(-1 1)"), a.sf.setAttribute("transform", "scale(-1 1)"));
    a.ob && (a.s ? (a.ob.setAttribute("transform", "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"), a.Ke.setAttribute("transform", "translate(" + (-b + 8) + ",-8) scale(-1 1)")) :
        (a.ob.setAttribute("transform", "translate(" + (b - 8) + "," + (c - 8) + ")"), a.Ke.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
    b = a.kb();
    a.zc.setAttribute("width", b.width);
    a.zc.setAttribute("height", b.height - 10);
    a.s && a.zc.setAttribute("x", -b.width);
    a.Za.style.width = b.width - 4 + "px";
    a.Za.style.height = b.height - 4 - 10 + "px"
}
d.En = function() { var a = this;
    this.di = !0;
    setTimeout(function() { a.Za.focus();
        I.h.Sa(a.u, "blocklyFocused");
        I.h.Sa(a.sf, "blocklyCommentTargetFocused");
        I.h.Sa(a.sg, "blocklyCommentHandleTargetFocused") }, 0) };

function Mf(a) { a.di = !1;
    setTimeout(function() { a.Za.blur();
        I.h.ub(a.u, "blocklyFocused");
        I.h.ub(a.sf, "blocklyCommentTargetFocused");
        I.h.ub(a.sg, "blocklyCommentHandleTargetFocused") }, 0) };

function Kg(a) { this.Sh = a;
    this.M() } d = Kg.prototype;
d.Ja = null;
d.zd = null;
d.Sh = null;
d.M = function() { this.Ja || (this.Ja = I.h.A("svg", { xmlns: I.zl, "xmlns:html": I.Ce, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyWsDragSurface blocklyOverflowVisible" }, null), this.Sh.appendChild(this.Ja)) };
d.xe = function(a, b) { a = a.toFixed(0);
    b = b.toFixed(0);
    this.Ja.style.display = "block";
    I.h.Zi(this.Ja, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.ek = function() { return I.h.Zb(this.Ja) };
d.Qh = function(a) { if (!a) throw "Couldn't clear and hide the drag surface: missing new surface."; var b = this.Ja.childNodes[0],
        c = this.Ja.childNodes[1]; if (!(b && c && I.h.Op(b, "blocklyBlockCanvas") && I.h.Op(c, "blocklyBubbleCanvas"))) throw "Couldn't clear and hide the drag surface.  A node was missing.";
    null != this.od ? I.h.Ci(b, this.od) : a.insertBefore(b, a.firstChild);
    I.h.Ci(c, b);
    this.Ja.style.display = "none";
    I.h.Zi(this.Ja, "");
    this.od = null };
I.C = {};
I.C.Yn = function(a, b) { var c = G("xml");
    c.appendChild(I.C.pv(I.I.ns(a))); for (var e = ye(a, !0), f = 0, h; h = e[f]; f++) c.appendChild(h.ij(b));
    a = M(a, !0); for (f = 0; e = a[f]; f++) c.appendChild(I.C.Hl(e, b)); return c };
I.C.pv = function(a) { for (var b = G("variables"), c = 0, e; e = a[c]; c++) { var f = G("variable", null, e.name);
        f.setAttribute("type", e.type);
        f.setAttribute("id", e.ia());
        b.appendChild(f) } return b };
I.C.Hl = function(a, b) { var c;
    a.o.s && (c = a.o.Bc());
    b = I.C.He(a, b); var e = a.ca();
    b.setAttribute("x", Math.round(a.o.s ? c - e.x : e.x));
    b.setAttribute("y", Math.round(e.y)); return b };
I.C.st = function(a) { null == a.getValue() && (a.Uf(), a.getValue()); var b = a.jd(); if (!b) throw Error("Tried to serialize a variable field with no variable."); var c = G("field", null, b.name);
    c.setAttribute("name", a.name);
    c.setAttribute("id", b.ia());
    c.setAttribute("variabletype", b.type); return c };
I.C.tt = function(a) { if (a.name && a.zf) { if (a.qh()) return I.C.st(a); var b = G("field", null, a.getValue());
        b.setAttribute("name", a.name); return b } return null };
I.C.ks = function(a, b) { for (var c = 0, e; e = a.aa[c]; c++)
        for (var f = 0, h; h = e.Ma[f]; f++)(h = I.C.tt(h)) && b.appendChild(h) };
I.C.He = function(a, b) {
    var c = G(a.Wa ? "shadow" : "block");
    c.setAttribute("type", a.type);
    b || c.setAttribute("id", a.id);
    if (a.Nb) { var e = a.Nb();
        e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e) } I.C.ks(a, c);
    if (e = a.Ep()) { e = G("comment", null, e); if ("object" == typeof a.Ga) { e.setAttribute("pinned", a.Ga.R()); var f = a.Ga.Nf();
            e.setAttribute("h", f.height);
            e.setAttribute("w", f.width) } c.appendChild(e) } a.data && (e = G("data", null, a.data), c.appendChild(e));
    f = 0;
    for (var h; h = a.aa[f]; f++) {
        var k, l = !0;
        if (h.type != I.Ud) {
            var m =
                P(h.connection);
            h.type == I.ab ? k = G("value") : h.type == I.Ta && (k = G("statement"));
            e = h.connection.Pd;
            !e || m && m.Wa || k.appendChild(I.C.No(e));
            m && (k.appendChild(I.C.He(m, b)), l = !1);
            k.setAttribute("name", h.name);
            l || c.appendChild(k)
        }
    }
    a.bu != a.Ve && c.setAttribute("inline", a.Ve);
    a.isCollapsed() && c.setAttribute("collapsed", !0);
    a.disabled && c.setAttribute("disabled", !0);
    a.Lb() || a.Wa || c.setAttribute("deletable", !1);
    a.Kd() || a.Wa || c.setAttribute("movable", !1);
    We(a) || c.setAttribute("editable", !1);
    if (f = ge(a)) k = G("next", null,
        I.C.He(f, b)), c.appendChild(k);
    e = a.S && a.S.Pd;
    !e || f && f.Wa || k.appendChild(I.C.No(e));
    return c
};
I.C.No = function(a) { for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else { for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && H(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && H(c)) } return a };
I.C.Wc = function(a) { return (new XMLSerializer).serializeToString(a) };
I.C.bz = function(a) { a = I.C.Wc(a).split("<"); for (var b = "", c = 1; c < a.length; c++) { var e = a[c]; "/" == e[0] && (b = b.substring(2));
        a[c] = b + "<" + e; "/" != e[0] && "/>" != e.slice(-2) && (b += "  ") } a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>"); return a.replace(/^\n/, "") };
I.C.fc = function(a) { return (new DOMParser).parseFromString(a, "text/xml").firstChild };
I.C.Vy = function(a, b) { b.vb(!1);
    b.clear();
    a = I.C.gd(a, b);
    b.vb(!0); return a };
I.C.gd = function(a, b) {
    if (a instanceof we) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.") }
    var e;
    b.s && (e = b.Bc());
    c = [];
    Lg();
    var f = a.childNodes.length,
        h = I.i.Yb();
    h || I.i.O(!0);
    b.vb && b.vb(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l],
                n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !I.i.Pb) {
                var p = I.C.Pg(m, b);
                c.push(p.id);
                var r = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    C = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(r) || isNaN(C) || p.moveBy(b.s ? e - r : r, C);
                k = !1
            } else if ("shadow" == n) k = !1;
            else if ("comment" == n)
                if (b.N) Pf(m, b, e);
                else { var v = m,
                        x = b,
                        ra = ve(v),
                        xc = new se(x, ra.content, ra.Lp, ra.wr, ra.id),
                        Ca = parseInt(v.getAttribute("x"), 10),
                        fd = parseInt(v.getAttribute("y"), 10);
                    isNaN(Ca) || isNaN(fd) || xc.moveBy(Ca, fd);
                    te(xc) }
            else if ("variables" == n) { if (k) I.C.ot(m, b);
                else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                k = !1 }
        }
    } finally {
        h ||
            I.i.O(!1), Mg()
    }
    b.vb && b.vb(!0);
    return c
};
I.C.Ny = function(a, b) { if (b.hasOwnProperty("scale")) { var c = R; try { R = 0; var e = Ng(b) } finally { R = c } } a = I.C.gd(a, b); if (e && e.height) { c = e.y + e.height; var f = e.x; var h = Infinity,
            k = Infinity; for (e = 0; e < a.length; e++) { var l = fe(b, a[e]).ca();
            l.y < k && (k = l.y);
            l.x < h && (h = l.x) } c = c - k + 10;
        f -= h; var m;
        b.s && (m = b.Bc()); for (e = 0; e < a.length; e++) fe(b, a[e]).moveBy(b.s ? m - f : f, c) } return a };
I.C.Pg = function(a, b) { if (a instanceof we) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.") } I.i.disable();
    c = b.ce(); try { var e = I.C.dm(a, b),
            f = K(e, !1); if (b.N) { Og(e, !0); for (var h = f.length - 1; 0 <= h; h--) f[h].ie(); for (h = f.length - 1; 0 <= h; h--) f[h].U(!1);
            setTimeout(function() { e.o && Og(e, !1) }, 1);
            zf(e);
            Nf(b) } else
            for (h = f.length - 1; 0 <= h; h--) f[h].Uf() } finally { I.i.enable() } if (I.i.isEnabled()) { a = I.I.Dp(b, c); for (h = 0; h < a.length; h++) I.i.L(new Zd(a[h]));
        I.i.L(new I.i.sj(e)) } return e };
I.C.ot = function(a, b) { for (var c = 0, e; e = a.children[c]; c++) { var f = e.getAttribute("type"),
            h = e.getAttribute("id");
        e = e.textContent; if (null == f) throw Error("Variable with id, " + h + " is without a type");
        b.Uc(e, f, h) } };
I.C.dm = function(a, b) {
    var c = null,
        e = a.getAttribute("type"),
        f = a.getAttribute("id");
    c = b.Ri(e, f);
    var h = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++)
        if (3 != k.nodeType) {
            for (var l = h = null, m = 0, n; n = k.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? h = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !h && l && (h = l);
            m = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.Vc && (c.Vc(k), c.ie && c.ie());
                    break;
                case "comment":
                    c.Yi(k.textContent);
                    var p = k.getAttribute("pinned");
                    p && !c.nc && setTimeout(function() {
                        c.Ga &&
                            c.Ga.ka && c.Ga.ka("true" == p)
                    }, 1);
                    h = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(h) && !isNaN(k) && c.Ga && c.Ga.ka && c.Ga.kf(h, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    I.C.nt(c, m, k);
                    break;
                case "value":
                case "statement":
                    k = Re(c, m);
                    if (!k) { console.warn("Ignoring non-existent input " + m + " in block " + e); break } l && (k.connection.Pd = l);
                    h && (h = I.C.dm(h, b), h.T ? k.connection.connect(h.T) : h.W && k.connection.connect(h.W));
                    break;
                case "next":
                    l && c.S && (c.S.Pd = l);
                    h &&
                        (h = I.C.dm(h, b), c.S.connect(h.W));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(b = a.getAttribute("inline")) && c.kg("true" == b);
    (b = a.getAttribute("disabled")) && c.mf("true" == b || "disabled" == b);
    (b = a.getAttribute("deletable")) && c.Wk("true" == b);
    (b = a.getAttribute("movable")) && c.lg("true" == b);
    (b = a.getAttribute("editable")) && c.Dn("true" == b);
    (b = a.getAttribute("collapsed")) && c.ig("true" == b);
    if ("shadow" == a.nodeName.toLowerCase()) { a = c.Ne(!1); for (f = 0; a[f]; f++);
        c.Hn(!0) }
    return c
};
I.C.mt = function(a, b, c, e) { var f = b.getAttribute("variabletype") || ""; "''" == f && (f = "");
    a = I.I.Hp(a, b.id, c, f); if (null != f && f !== a.type) throw Error("Serialized variable type with id '" + a.ia() + "' had type " + a.type + ", and does not match variable field that references it: " + I.C.Wc(b) + ".");
    e.setValue(a.ia()) };
I.C.nt = function(a, b, c) { var e = Ne(a, b);
    e ? (a = a.o, b = c.textContent, e.qh() ? I.C.mt(a, c, b, e) : e.setValue(b)) : console.warn("Ignoring non-existent field " + b + " in block " + a.type) };
I.C.et = function(a) { for (var b = 0, c; c = a.childNodes[b]; b++)
        if ("next" == c.nodeName.toLowerCase()) { a.removeChild(c); break } };
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = I.C.Wc;
g.Blockly.Xml.domToWorkspace = I.C.gd;
g.Blockly.Xml.textToDom = I.C.fc;
g.Blockly.Xml.workspaceToDom = I.C.Yn;
// Copyright 2015 Google Inc.  Apache License 2.0
function Pg(a) { this.j = a } d = Pg.prototype;
d.Cf = 32;
d.jo = 110;
d.vl = 20;
d.Hh = 20;
d.u = null;
d.lb = 0;
d.we = 0;
d.M = function() { this.u = I.h.A("g", { "class": "blocklyZoom" }, null); var a = String(Math.random()).substring(2);
    Qg(this, a);
    Rg(this, a);
    Sg(this, a); return this.u };
d.ea = function(a) { this.Nh = this.vl + a; return this.Nh + this.jo };
d.v = function() { this.u && (H(this.u), this.u = null);
    this.j = null };
d.position = function() { var a = this.j.Va();
    a && (this.j.s ? (this.lb = this.Hh + O, a.ua == I.Ee && (this.lb += a.Tj, this.j.V && (this.lb += a.Ra))) : (this.lb = a.qa + a.Ra - this.Cf - this.Hh - O, a.ua == I.td && (this.lb -= a.Tj)), this.we = a.Oa + a.bb - this.jo - this.Nh, a.ua == I.Bf && (this.we -= a.Bp), this.u.setAttribute("transform", "translate(" + this.lb + "," + this.we + ")")) };

function Qg(a, b) { var c = a.j,
        e = I.h.A("clipPath", { id: "blocklyZoomoutClipPath" + b }, a.u);
    I.h.A("rect", { width: 32, height: 32, y: 77 }, e);
    a = I.h.A("image", { width: I.Sb.width, height: I.Sb.height, x: -64, y: -15, "clip-path": "url(#blocklyZoomoutClipPath" + b + ")" }, a.u);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.nd + I.Sb.url);
    I.H(a, "mousedown", null, function(a) { bg(c);
        Tg(c, -1);
        I.Touch.$d();
        a.stopPropagation();
        a.preventDefault() }) }

function Rg(a, b) { var c = a.j,
        e = I.h.A("clipPath", { id: "blocklyZoominClipPath" + b }, a.u);
    I.h.A("rect", { width: 32, height: 32, y: 43 }, e);
    a = I.h.A("image", { width: I.Sb.width, height: I.Sb.height, x: -32, y: -49, "clip-path": "url(#blocklyZoominClipPath" + b + ")" }, a.u);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.nd + I.Sb.url);
    I.H(a, "mousedown", null, function(a) { bg(c);
        Tg(c, 1);
        I.Touch.$d();
        a.stopPropagation();
        a.preventDefault() }) }

function Sg(a, b) {
    var c = a.j,
        e = I.h.A("clipPath", { id: "blocklyZoomresetClipPath" + b }, a.u);
    I.h.A("rect", { width: 32, height: 32 }, e);
    a = I.h.A("image", { width: I.Sb.width, height: I.Sb.height, y: -92, "clip-path": "url(#blocklyZoomresetClipPath" + b + ")" }, a.u);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.nd + I.Sb.url);
    I.H(a, "mousedown", null, function(a) {
        bg(c);
        c.setScale(c.options.Fb.kr);
        if (c.Xa) { var b = c.Va(),
                e = (b.lc - b.qa) / 2;
            c.F && (e -= c.F.Y / 2);
            c.Xa.set(e, (b.Ub - b.Oa) / 2) } else console.warn("Tried to scroll a non-scrollable workspace.");
        I.Touch.$d();
        a.stopPropagation();
        a.preventDefault()
    })
};
// Copyright 2014 Google Inc.  Apache License 2.0
function Ug(a, b, c) { Ug.m.constructor.call(this, a);
    this.Va = a.Va || Vg;
    this.pf = a.pf || Wg; var e = [];
    e[I.ab] = new hf;
    e[I.Hg] = new hf;
    e[I.Ta] = new hf;
    e[I.De] = new hf;
    this.Pl = e;
    b && (this.cb = b);
    c && (this.yg = c);
    this.ll = this.yg && I.h.We();
    this.xi = [];
    this.vd = new Hg(a.Dc);
    this.Yc = this.options.Kp ? new ig(a.Kp, a.Jp) : null;
    I.I && I.I.Me && (this.yh[I.ro] = I.I.Me);
    I.Oc && I.Oc.Me && (this.yh[I.$r] = I.Oc.Me);
    I.Ua && I.Ua.Me && (this.yh[I.oo] = I.Ua.Me) } y(Ug, we);
d = Ug.prototype;
d.Tk = null;
d.N = !0;
d.ke = !1;
d.Gi = !1;
d.tn = !0;
d.scrollX = 0;
d.scrollY = 0;
d.cv = 0;
d.ev = 0;
d.vp = null;
d.scale = 1;
d.rc = null;
d.Xa = null;
d.hb = null;
d.cb = null;
d.yg = null;
d.ll = !1;
d.nk = !1;
d.Cm = null;
d.cq = null;
d.Lf = {};
d.yh = {};
d.Qo = null;
d.ug = null;
d.Yp = null;
d.Di = !0;

function wg(a) { if (a.Di) { var b = Q(a).getScreenCTM();
        b && (a.Yp = b.inverse(), a.Di = !1) } return a.Yp }

function nf(a, b) { var c = 0,
        e = 0,
        f = 1; if (zc(a.Ca, b) || zc(a.rd, b)) f = a.scale;
    do { var h = I.h.Zb(b); if (b == a.Ca || b == a.rd) f = 1;
        c += h.x * f;
        e += h.y * f;
        b = b.parentNode } while (b && b != Q(a)); return new F(c, e) }
d.M = function(a) {
    this.u = I.h.A("g", { "class": "blocklyWorkspace" }, null);
    a && (this.Gc = I.h.A("rect", { height: "100%", width: "100%", "class": a }, this.u), "blocklyMainBackground" == a && this.Yc && (this.Gc.style.fill = "url(#" + this.Yc.Zg.id + ")"));
    this.Ca = I.h.A("g", { "class": "blocklyBlockCanvas" }, this.u);
    this.rd = I.h.A("g", { "class": "blocklyBubbleCanvas" }, this.u);
    a = O;
    if (this.options.Wt) { this.rc = new Eg(this); var b = this.rc.M();
        this.u.insertBefore(b, this.Ca);
        a = this.rc.ea(a) } this.options.Fb && this.options.Fb.controls && (this.zg =
        new Pg(this), b = this.zg.M(), this.u.appendChild(b), this.zg.ea(a));
    this.ke || (I.H(this.u, "mousedown", this, this.oe, !1, !0), this.options.Fb && this.options.Fb.rv && I.H(this.u, "wheel", this, this.Ou));
    this.options.Np && (this.V = new Xg(this));
    this.Yc && this.Yc.update(this.scale);
    Yg(this);
    return this.u
};
d.v = function() { this.N = !1;
    this.hb && this.hb.cancel();
    Ug.m.v.call(this);
    this.u && (H(this.u), this.u = null);
    this.rd = this.Ca = null;
    this.V && (this.V.v(), this.V = null);
    this.F && (this.F.v(), this.F = null);
    this.rc && (this.rc.v(), this.rc = null);
    this.Xa && (this.Xa.v(), this.Xa = null);
    this.zg && (this.zg.v(), this.zg = null);
    this.vd && (this.vd.v(), this.vd = null);
    this.Yc && (this.Yc.v(), this.Yc = null);
    this.yh && (this.yh = null);
    this.Lf && (this.Lf = null);
    this.options.Dc || H(Q(this).parentNode);
    this.Tk && (I.Ba(this.Tk), this.Tk = null) };
d.Ri = function(a, b) { return new S(this, a, b) };

function Zg(a, b) { var c = { Zh: a.options.Zh, Dc: a, s: a.s, Mk: a.options.Mk, Id: a.Id, ua: a.options.ua };
    a.F = null;
    a.F = a.Id ? new $g(c) : new ah(c);
    a.F.Kg = !1; return a.F.M(b) }

function Nf(a) { a.tn && a.N && (a.Xa && a.Xa.resize(), a.Di = !0) } d.resize = function() { this.V && this.V.position();
    this.F && this.F.position();
    this.rc && this.rc.position();
    this.zg && this.zg.position();
    this.Xa && this.Xa.resize();
    this.Di = !0;
    Yg(this) };

function $f(a) { var b = rc(document);
    fc(a.cq, b) || (a.cq = b, a.Di = !0, Yg(a)) }

function Q(a) { if (a.Co) return a.Co; for (var b = a.u; b;) { if ("svg" == b.tagName) return a.Co = b;
        b = b.parentNode } return null } d.translate = function(a, b) { if (this.ll && this.nk) this.yg.xe(a, b);
    else { var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
        this.Ca.setAttribute("transform", c);
        this.rd.setAttribute("transform", c) } if (this.cb) { c = this.cb; var e = this.scale;
        c.jf = e;
        c.zd.setAttribute("transform", "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")") } };

function cg(a) { if (a.ll) { a.nk = !1; var b = a.yg.ek();
        a.yg.Qh(a.u);
        b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
        a.Ca.setAttribute("transform", b);
        a.rd.setAttribute("transform", b) } }

function Uf(a) { if (a.ll && !a.nk) { a.nk = !0; var b = a.Ca.previousSibling,
            c = parseInt(Q(a).getAttribute("width"), 10),
            e = parseInt(Q(a).getAttribute("height"), 10),
            f = I.h.Zb(a.Ca),
            h = a.yg,
            k = a.Ca,
            l = a.rd,
            m = a.scale;
        h.od = b;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.Ja.setAttribute("width", c);
        h.Ja.setAttribute("height", e);
        h.Ja.appendChild(k);
        h.Ja.appendChild(l);
        h.Ja.style.display = "block";
        a.yg.xe(f.x, f.y) } }
d.Bc = function() { var a = this.Va(); return a ? a.qa / this.scale : 0 };
d.ka = function(a) { this.Xa && this.Xa.jg(a);
    (this.F || this.V && this.V.F) && (this.F ? this.F : this.V ? this.V.F : null).jg(a);
    Q(this).style.display = a ? "block" : "none";
    this.V && (this.V.ic.style.display = a ? "block" : "none");
    a ? (this.U(), this.V && this.V.position()) : I.yb(!0) };
d.U = function() { for (var a = le(this), b = a.length - 1; 0 <= b; b--) a[b].U(!1) };

function bh(a) {
    var b = I.Rh;
    if (a.N && !(b.getElementsByTagName("block").length >= Ae(a)))
        if (a.hb && a.hb.cancel(), "comment" == b.tagName.toLowerCase()) { I.i.disable(); try { var c = Pf(b, a),
                    e = parseInt(b.getAttribute("x"), 10),
                    f = parseInt(b.getAttribute("y"), 10);
                isNaN(e) || isNaN(f) || (a.s && (e = -e), c.moveBy(e + 50, f + 50)) } finally { I.i.enable() } c.select() } else {
            I.i.disable();
            try {
                var h = I.C.Pg(b, a),
                    k = parseInt(b.getAttribute("x"), 10),
                    l = parseInt(b.getAttribute("y"), 10);
                if (!isNaN(k) && !isNaN(l)) {
                    a.s && (k = -k);
                    do {
                        b = !1;
                        var m = le(a);
                        c = 0;
                        for (var n; n = m[c]; c++) { var p = n.ca(); if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) { b = !0; break } }
                        if (!b) { var r = h.Dd(!1);
                            c = 0; for (var C; C = r[c]; c++)
                                if (C.closest(I.vc, new F(k, l)).connection) { b = !0; break } } b && (k = a.s ? k - I.vc : k + I.vc, l += 2 * I.vc)
                    } while (b);
                    h.moveBy(k, l)
                }
            } finally { I.i.enable() } I.i.isEnabled() && !h.Wa && I.i.L(new I.i.sj(h));
            h.select()
        }
}

function ch(a) { if ((a = a.ke ? a.ug : a) && !a.hb && a.V && a.V.F) { a = a.V; var b = a.cd.Gd();
        b && b.wd && a.F.show(b.wd) } } d.hg = function(a, b) { Ug.m.hg.call(this, a, b);
    ch(this) };
d.If = function(a) { Ug.m.If.call(this, a);
    ch(this) };
d.Uc = function(a, b, c) { a = Ug.m.Uc.call(this, a, b, c);
    ch(this); return a };

function Yg(a) { a.lp = a.rc && a.u.parentNode ? a.rc.Tg() : null;
    a.kp = a.F ? a.F.Tg() : a.V ? a.V.Tg() : null }

function Ef(a, b) { b = new F(b.clientX, b.clientY); return a.lp && a.lp.contains(b) ? I.tl : a.kp && a.kp.contains(b) ? I.fo : I.eo } d.oe = function(a) { var b = this.Ed(a);
    b && (b.Qa || (b.Qa = this), b.pc = a, b.$h(a)) };
d.hl = function(a, b) { a = I.h.Pi(a, Q(this), wg(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.vp = hc(b, a) };

function Le(a, b) { b = I.h.Pi(b, Q(a), wg(a));
    b.x /= a.scale;
    b.y /= a.scale; return ic(a.vp, b) } d.tb = function() { return null != this.hb && this.hb.tb() };
d.Ou = function(a) { this.hb && this.hb.cancel(); var b = -a.deltaY / 50,
        c = I.h.Pi(a, Q(this), wg(this));
    this.zoom(c.x, c.y, b);
    a.preventDefault() };

function Ng(a) { var b = M(a, !1);
    a = ye(a, !1);
    b = b.concat(a); if (!b.length) return { x: 0, y: 0, width: 0, height: 0 };
    a = b[0].lm(); for (var c = 1; c < b.length; c++) { var e = b[c].lm();
        e.Ic.x < a.Ic.x && (a.Ic.x = e.Ic.x);
        e.dd.x > a.dd.x && (a.dd.x = e.dd.x);
        e.Ic.y < a.Ic.y && (a.Ic.y = e.Ic.y);
        e.dd.y > a.dd.y && (a.dd.y = e.dd.y) } return { x: a.Ic.x, y: a.Ic.y, width: a.dd.x - a.Ic.x, height: a.dd.y - a.Ic.y } }
d.Gs = function() { this.vb(!1);
    I.i.O(!0); for (var a = M(this, !0), b = 0, c = 0, e; e = a[c]; c++) { var f = e.ca();
        e.moveBy(-f.x, b - f.y);
        dh(e);
        b = e.ca().y + e.kb().height + 25 } I.i.O(!1);
    this.vb(!0) };
d.wh = function(a) {
    function b(a) { if (a.Lb()) C = C.concat(K(a, !1));
        else { a = a.Ne(!1); for (var c = 0; c < a.length; c++) b(a[c]) } }

    function c() { I.i.O(h); var a = C.shift();
        a && (a.o ? (a.v(!1, !0), setTimeout(c, 10)) : c());
        I.i.O(!1) }
    if (!this.options.readOnly && !this.ke) {
        var e = [],
            f = M(this, !0),
            h = I.h.Cd(),
            k = this,
            l = {};
        l.text = I.g.UNDO;
        l.enabled = 0 < this.vg.length;
        l.qb = this.Xn.bind(this, !1);
        e.push(l);
        l = {};
        l.text = I.g.REDO;
        l.enabled = 0 < this.Vi.length;
        l.qb = this.Xn.bind(this, !0);
        e.push(l);
        this.Xa && (l = {}, l.text = I.g.CLEAN_UP, l.enabled = 1 < f.length,
            l.qb = this.Gs.bind(this), e.push(l));
        if (this.options.collapse) { for (var m = l = !1, n = 0; n < f.length; n++)
                for (var p = f[n]; p;) p.isCollapsed() ? l = !0 : m = !0, p = ge(p); var r = function(a) { for (var b = 0, c = 0; c < f.length; c++)
                    for (var e = f[c]; e;) setTimeout(e.ig.bind(e, a), b), e = ge(e), b += 10 };
            m = { enabled: m };
            m.text = I.g.COLLAPSE_ALL;
            m.qb = function() { r(!0) };
            e.push(m);
            l = { enabled: l };
            l.text = I.g.EXPAND_ALL;
            l.qb = function() { r(!1) };
            e.push(l) }
        var C = [];
        for (n = 0; n < f.length; n++) b(f[n]);
        l = {
            text: 1 == C.length ? I.g.DELETE_BLOCK : I.g.DELETE_X_BLOCKS.replace("%1",
                String(C.length)),
            enabled: 0 < C.length,
            qb: function() { k.hb && k.hb.cancel();
                2 > C.length ? c() : I.confirm(I.g.DELETE_ALL_BLOCKS.replace("%1", C.length), function(a) { a && c() }) }
        };
        e.push(l);
        this.Qo && this.Qo(e);
        I.$.show(a, e, this.s)
    }
};
d.vr = function(a) { if (a = lg(a)) { if (!this.options.Ld) throw "Existing toolbox is null.  Can't create new toolbox."; if (a.getElementsByTagName("category").length) { if (!this.V) throw "Existing toolbox has no categories.  Can't change mode.";
            this.options.Ld = a;
            this.V.Ok(a);
            eh(this.V) } else { if (!this.F) throw "Existing toolbox has categories.  Can't change mode.";
            this.options.Ld = a;
            this.F.show(a.childNodes) } } else if (this.options.Ld) throw "Can't nullify an existing toolbox."; };

function bg(a) { if (a.options.Dc) bg(a.options.Dc);
    else { I.af = a;
        document.activeElement && document.activeElement.blur(); try { Q(a).focus() } catch (b) { try { Q(a).parentNode.setActive() } catch (c) { Q(a).parentNode.focus() } } } }
d.zoom = function(a, b, c) { var e = this.options.Fb.Wu,
        f = this.Va(),
        h = Q(this).createSVGPoint();
    h.x = a;
    h.y = b;
    h = h.matrixTransform(this.Ca.getCTM().inverse());
    a = h.x;
    b = h.y;
    h = this.Ca;
    e = Math.pow(e, c);
    c = this.scale * e;
    c > this.options.Fb.Ni ? e = this.options.Fb.Ni / this.scale : c < this.options.Fb.Oi && (e = this.options.Fb.Oi / this.scale);
    this.scale != c && (this.Xa && (a = h.getCTM().translate(a * (1 - e), b * (1 - e)).scale(e), this.scrollX = a.e - f.Ra, this.scrollY = a.f - f.bb), this.setScale(c)) };

function Tg(a, b) { var c = a.Va();
    a.zoom(c.qa / 2, c.Oa / 2, b) } d.setScale = function(a) { this.options.Fb.Ni && a > this.options.Fb.Ni ? a = this.options.Fb.Ni : this.options.Fb.Oi && a < this.options.Fb.Oi && (a = this.options.Fb.Oi);
    this.scale = a;
    this.Yc && this.Yc.update(this.scale);
    this.Xa ? this.Xa.resize() : this.translate(this.scrollX, this.scrollY);
    I.yb(!1);
    this.F && this.F.nn() };

function fh(a) { var b = 0,
        c = 0;
    a && (b = a.Bc(), c = a.Wg()); return { width: b, height: c } }

function gh(a) { var b = Ng(a),
        c = a.scale;
    a = b.width * c; var e = b.height * c,
        f = b.x * c;
    b = b.y * c; return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e } }

function Vg() {
    var a = fh(this.V),
        b = fh(this.F),
        c = I.Tn(Q(this));
    if (this.V)
        if (this.ua == I.Fe || this.ua == I.Bf) c.height -= a.height;
        else if (this.ua == I.Ee || this.ua == I.td) c.width -= a.width;
    if (this.Xa) { var e = gh(this); var f = c.width,
            h = c.height,
            k = f / 2,
            l = h / 2,
            m = Math.min(e.left - k, e.right - f),
            n = Math.min(e.top - l, e.bottom - h);
        e = { left: m, top: n, height: Math.max(e.bottom + l, e.top + h) - n, width: Math.max(e.right + k, e.left + f) - m } } else e = gh(this);
    f = 0;
    this.V && this.ua == I.Ee && (f = a.width);
    h = 0;
    this.V && this.ua == I.Fe && (h = a.height);
    return {
        Ub: e.height,
        lc: e.width,
        kc: e.top,
        xc: e.left,
        Oa: c.height,
        qa: c.width,
        Td: -this.scrollY,
        fb: -this.scrollX,
        bb: h,
        Ra: f,
        vz: a.width,
        uz: a.height,
        Tj: b.width,
        Bp: b.height,
        ua: this.ua
    }
}

function Wg(a) { if (!this.Xa) throw "Attempt to set top level workspace scroll without scrollbars."; var b = this.Va();
    t(a.x) && (this.scrollX = -b.lc * a.x - b.xc);
    t(a.y) && (this.scrollY = -b.Ub * a.y - b.kc);
    a = this.scrollX + b.Ra;
    b = this.scrollY + b.bb;
    this.translate(a, b);
    this.Yc && this.Yc.moveTo(a, b) } d.vb = function(a) { var b = !this.tn && a;
    this.tn = a;
    b && Nf(this) };
d.clear = function() { this.vb(!1);
    Ug.m.clear.call(this);
    this.vb(!0) };

function Gg(a, b) { a.Lf.CREATE_VARIABLE = b }

function hh(a, b) { return (a = a.Lf[b]) ? a : null }

function ih(a, b) { return (a = a.yh[b]) ? a : null } d.Ed = function(a) { var b = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        c = this.hb; return c ? b && c.Rp ? (console.warn("tried to start the same gesture twice"), c.cancel(), null) : c : b ? this.hb = new xg(a, this) : null };
Ug.prototype.setVisible = Ug.prototype.ka;

function jh(a) { jh.m.constructor.call(this, null);
    this.Oq = a } y(jh, Se);
d = jh.prototype;
d.Dh = 0;
d.oj = 0;
d.em = function(a) {
    I.h.A("rect", { "class": "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" }, a);
    I.h.A("path", { "class": "blocklyIconSymbol", d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z" }, a);
    I.h.A("circle", { "class": "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, a)
};
d.zm = function(a) { We(this.K) && Se.prototype.zm.call(this, a) };
d.Vh = function() { this.fj = I.h.A("svg", { x: N, y: N }, null); if (this.Oq.length)
        for (var a = G("xml"), b = 0, c; c = this.Oq[b]; b++) a.appendChild(G("block", { type: c }));
    else a = null;
    a = { Ld: a, Dc: this.K.o, nd: this.K.o.options.nd, s: this.K.s, ua: this.K.s ? I.td : I.Ee, Id: !1, Va: this.Bt.bind(this), pf: null };
    this.j = new Ug(a);
    this.j.Gi = !0;
    a = Zg(this.j, "g");
    b = this.j.M("blocklyMutatorBackground");
    b.insertBefore(a, this.j.Ca);
    this.fj.appendChild(b); return this.fj };
d.Be = function() { this.K.nc || (We(this.K) ? this.ac && I.h.ub(this.ac, "blocklyIconGroupReadonly") : (this.ka(!1), this.ac && I.h.Sa(this.ac, "blocklyIconGroupReadonly")));
    Se.prototype.Be.call(this) };
d.Rk = function() { var a = 2 * N,
        b = this.j.Ca.getBBox(); var c = this.K.s ? -b.x : b.width + b.x;
    b = b.height + 3 * a; if (this.j.F) { var e = this.j.F.ee();
        b = Math.max(b, e.Ub + 20) } c += 3 * a; if (Math.abs(this.Dh - c) > a || Math.abs(this.oj - b) > a) this.Dh = c, this.oj = b, this.Ka.kf(c + a, b + a), this.fj.setAttribute("width", this.Dh), this.fj.setAttribute("height", this.oj);
    this.K.s && this.j.Ca.setAttribute("transform", "translate(" + this.Dh + ",0)");
    this.j.resize() };
d.ka = function(a) {
    if (a != this.R())
        if (I.i.L(new L(this.K, "mutatorOpen", !a, a)), a) {
            this.Ka = new Be(this.K.o, this.Vh(), this.K.bd, this.Sf, null, null);
            Je(this.Ka, this.K.id);
            if (a = this.j.options.Ld) this.j.F.ea(this.j), this.j.F.show(a.childNodes);
            this.qe = this.K.Jj(this.j);
            a = K(this.qe, !1);
            for (var b = 0, c; c = a[b]; b++) c.U();
            this.qe.lg(!1);
            this.qe.Wk(!1);
            this.j.F ? (a = 2 * this.j.F.ha, b = this.j.F.Y + a) : b = a = 16;
            this.K.s && (b = -b);
            this.qe.moveBy(b, a);
            if (this.K.Uq) { var e = this;
                this.K.Uq(this.qe);
                this.dl = function() { e.K.Uq(e.qe) };
                this.K.o.Pc(this.dl) } this.Rk();
            this.j.Pc(this.tv.bind(this));
            this.Ae()
        } else this.fj = null, this.j.v(), this.qe = this.j = null, this.Ka.v(), this.Ka = null, this.oj = this.Dh = 0, this.dl && (this.K.o.ff(this.dl), this.dl = null)
};
d.tv = function() { if (!this.j.tb())
        for (var a = M(this.j, !1), b = 0, c; c = a[b]; b++) { var e = c.ca(),
                f = c.kb();
            20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y) }
    if (this.qe.o == this.j) { I.i.O(!0);
        c = this.K;
        a = (a = c.Nb()) && I.C.Wc(a);
        b = c.N;
        c.N = !1;
        c.Ej(this.qe);
        c.N = b;
        c.ie();
        b = (b = c.Nb()) && I.C.Wc(b); if (a != b) { I.i.L(new I.i.hc(c, "mutation", null, a, b)); var h = I.i.Yb();
            setTimeout(function() { I.i.O(h);
                c.Tb();
                I.i.O(!1) }, I.rj) } c.N && c.U();
        this.j.tb() || this.Rk();
        I.i.O(!1) } };
d.Bt = function() { return { Oa: this.oj, qa: this.Dh, bb: 0, Ra: 0 } };
d.v = function() { this.K.me = null;
    Se.prototype.v.call(this) };
g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = function(a, b, c) { if (!a || !a.w.o) return !1;
    c = Re(b, c).connection; var e = P(a); return e && e != b || c.Eb == a ? !1 : (c.isConnected() && c.disconnect(), c.connect(a), !0) };
I.la = {};
I.la.ql = {};
I.la.register = function(a, b) { if (!q(a) || Fa(a)) throw Error('Error: Invalid extension name "' + a + '"'); if (I.la.ql[a]) throw Error('Error: Extension "' + a + '" is already registered.'); if (!w(b)) throw Error('Error: Extension "' + a + '" must be a function');
    I.la.ql[a] = b };
I.la.nz = function(a, b) { if (!ha(b)) throw Error('Error: Mixin "' + a + '" must be a object');
    I.la.register(a, function() { kh(this, b) }) };
I.la.oz = function(a, b, c, e) { var f = 'Error when registering mutator "' + a + '": ';
    I.la.Go(f, b.Vc, "domToMutation");
    I.la.Go(f, b.Nb, "mutationToDom"); var h = I.la.Io(b, f); if (c && !w(c)) throw Error('Extension "' + a + '" is not a function');
    I.la.register(a, function() { h && this.Xq(new jh(e));
        kh(this, b);
        c && c.apply(this) }) };
I.la.apply = function(a, b, c) { var e = I.la.ql[a]; if (!w(e)) throw Error('Error: Extension "' + a + '" not found.'); if (c) I.la.Es(a, b);
    else var f = I.la.om(b);
    e.apply(b); if (c) I.la.Cs('Error after applying mutator "' + a + '": ', b);
    else if (!I.la.pu(f, b)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.'); };
I.la.Go = function(a, b, c) { if (!b) throw Error(a + 'missing required property "' + c + '"'); if ("function" != typeof b) throw Error(a + '" required property "' + c + '" must be a function'); };
I.la.Es = function(a, b) { if (I.la.om(b).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + b.id); };
I.la.Io = function(a, b) { var c = void 0 !== a.Ej,
        e = void 0 !== a.Jj; if (c && e) { if ("function" != typeof a.Ej) throw Error(b + "compose must be a function."); if ("function" != typeof a.Jj) throw Error(b + "decompose must be a function."); return !0 } if (c || e) throw Error(b + 'Must have both or neither of "compose" and "decompose"'); return !1 };
I.la.Cs = function(a, b) { if ("function" != typeof b.Vc) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"'); if ("function" != typeof b.Nb) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    I.la.Io(b, a) };
I.la.om = function(a) { var b = [];
    void 0 !== a.Vc && b.push(a.Vc);
    void 0 !== a.Nb && b.push(a.Nb);
    void 0 !== a.Ej && b.push(a.Ej);
    void 0 !== a.Jj && b.push(a.Jj); return b };
I.la.pu = function(a, b) { b = I.la.om(b); if (b.length != a.length) return !1; for (var c = 0; c < b.length; c++)
        if (a[c] != b[c]) return !1; return !0 };
I.la.Py = function(a, b) { var c = []; "object" == typeof document && I.h.Tq(function() { for (var a in b) I.h.Ho(b[a]) }); return function() { this.type && -1 === c.indexOf(this.type) && (I.la.Ds(this, a, b), c.push(this.type));
        this.te(function() { var e = oe(this, a),
                f = b[e];
            null == f ? -1 === c.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = I.h.Qb(f); return f }.bind(this)) } };
I.la.Ds = function(a, b, c) { var e = Ne(a, b); if (!w(e.Xf)) { e = e.getOptions(); for (var f = 0; f < e.length; ++f) { var h = e[f][1];
            null == c[h] && console.warn("No tooltip mapping for value " + h + " of field " + b + " of block type " + a.type) } } };
I.la.Qy = function(a, b) { "object" == typeof document && I.h.Tq(function() { I.h.Ho(a) }); return function() { this.te(function() { var c = Ne(this, b); return I.h.Qb(a).replace("%1", c ? c.sb() : "") }.bind(this)) } };
I.la.rt = function() { this.jv = this.Hc;
    this.te(function() { var a = this.getParent(); return a && lh(a) && a.Hc || this.jv }.bind(this)) };
I.la.register("parent_tooltip_when_inline", I.la.rt);
var mh = {};

function nh(a, b) { var c = mc(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" }

function oh(a, b) { return nh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b] }

function hg() { var a = document,
        b = a.body;
    a = a.documentElement; return new F(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop) }

function ph(a) { try { var b = a.getBoundingClientRect() } catch (c) { return { left: 0, top: 0, right: 0, bottom: 0 } } B && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop); return b }

function qh(a) { var b = mc(a),
        c = new F(0, 0); var e = b ? mc(b) : document;
    e = !B || 9 <= Number(sb) || "CSS1Compat" == kc(e).fd.compatMode ? e.documentElement : e.body; if (a == e) return c;
    a = ph(a);
    b = rc(kc(b).fd);
    c.x = a.left + b.x;
    c.y = a.top + b.y; return c }

function rh(a) { "number" == typeof a && (a += "px"); return a }

function sh(a) { var b = th; if ("none" != oh(a, "display")) return b(a); var c = a.style,
        e = c.display,
        f = c.visibility,
        h = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = e;
    c.position = h;
    c.visibility = f; return a }

function th(a) { var b = a.offsetWidth,
        c = a.offsetHeight,
        e = E && !b && !c; return aa(b) && !e || !a.getBoundingClientRect ? new jc(b, c) : (a = ph(a), new jc(a.right - a.left, a.bottom - a.top)) }

function uh(a, b) { a.style.display = b ? "" : "none" }
var vh = D ? "MozUserSelect" : E || gb ? "WebkitUserSelect" : null;

function wh(a, b, c) { c = c ? null : a.getElementsByTagName("*"); if (vh) { if (b = b ? "none" : "", a.style && (a.style[vh] = b), c) { a = 0; for (var e; e = c[a]; a++) e.style && (e.style[vh] = b) } } else if (B || fb)
        if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
            for (a = 0; e = c[a]; a++) e.setAttribute("unselectable", b) }
var xh = { thin: 2, medium: 4, thick: 6 };

function yh(a, b) { if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0; var c = a.currentStyle ? a.currentStyle[b + "Width"] : null; if (c in xh) a = xh[c];
    else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
    else { b = a.style.left; var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = e;
        a = +c } return a };

function zh(a, b) { this.ma = new jc(0, 25);
    this.setValue(a);
    this.ml = b }
var Ah = {};

function Bh(a, b) { if (!q(a) || Fa(a)) throw Error('Invalid field type "' + a + '"'); if (!ha(b) || !w(b.X)) throw Error('Field "' + b + '" must have a fromJson function');
    Ah[a] = b }
var Ch = null,
    Dh = 0;
d = zh.prototype;
d.name = void 0;
d.jq = 50;
d.pa = "";
d.w = null;
d.Da = !0;
d.ml = null;
d.zf = !0;
d.In = function(a) { this.w = a };
d.ea = function() { this.Ia || (this.Ia = I.h.A("g", {}, null), this.Da || (this.Ia.style.display = "none"), this.Sc = I.h.A("rect", { rx: 4, ry: 4, x: -5, y: 0, height: 16 }, this.Ia), this.sa = I.h.A("text", { "class": "blocklyText", y: this.ma.height - 12.5 }, this.Ia), this.Be(), this.w.P().appendChild(this.Ia), this.Ek = I.H(this.Ia, "mousedown", this, this.oe), this.Od()) };
d.Uf = function() {};
d.v = function() { this.Ek && (I.Ba(this.Ek), this.Ek = null);
    this.w = null;
    H(this.Ia);
    this.ml = this.Sc = this.sa = this.Ia = null };
d.Be = function() { var a = this.Ia;
    this.zf && a && (We(this.w) ? (I.h.Sa(a, "blocklyEditableText"), I.h.ub(a, "blocklyNonEditableText"), this.Ia.style.cursor = this.uj) : (I.h.Sa(a, "blocklyNonEditableText"), I.h.ub(a, "blocklyEditableText"), this.Ia.style.cursor = "")) };
d.R = function() { return this.Da };
d.ka = function(a) { if (this.Da != a) { this.Da = a; var b = this.P();
        b && (b.style.display = a ? "block" : "none", this.Od()) } };
d.Ll = function(a) { return a };

function Oe(a, b) { var c = a.Ll(b); if (null === c) return null;
    void 0 !== c && (b = c); if (c = a.ml) { a = c.call(a, b); if (null === a) return null;
        void 0 !== a && (b = a) } return b } d.P = function() { return this.Ia };
d.Od = function() { this.Da ? (this.sa.textContent = Eh(this), this.nj()) : this.ma.width = 0 };
d.nj = function() { var a = Fh(this.sa);
    this.Sc && this.Sc.setAttribute("width", a + 10);
    this.ma.width = a };

function Fh(a) { var b = a.textContent + "\n" + a.className.baseVal,
        c; if (Ch && (c = Ch[b])) return c; try { c = B || gb ? a.getBBox().width : a.getComputedTextLength() } catch (e) { return 8 * a.textContent.length } Ch && (Ch[b] = c); return c }

function Lg() { Dh++;
    Ch || (Ch = {}) }

function Mg() { Dh--;
    Dh || (Ch = null) } d.fe = function() { this.ma.width || this.Od(); return this.ma };

function Gh(a) { var b = a.Sc.getBBox(),
        c = b.height * a.w.o.scale;
    b = b.width * a.w.o.scale;
    a = qh(a.Sc); return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b } }

function Eh(a) { var b = a.pa; if (!b) return "\u00a0";
    b.length > a.jq && (b = b.substring(0, a.jq - 2) + "\u2026");
    b = b.replace(/\s/g, "\u00a0");
    a.w.s && (b += "\u200f"); return b } d.sb = function() { return this.pa };
d.wb = function(a) { null !== a && (a = String(a), a !== this.pa && (this.pa = a, this.ei())) };
d.ei = function() { this.ma.width = 0;
    this.w && this.w.N && (this.w.U(), this.w.Tb()) };
d.getValue = function() { return this.sb() };
d.setValue = function(a) { if (null !== a) { var b = this.getValue();
        b != a && (this.w && I.i.isEnabled() && I.i.L(new I.i.hc(this.w, "field", this.name, b, a)), this.wb(a)) } };
d.oe = function(a) { this.w && this.w.o && (a = this.w.o.Ed(a)) && !a.qg && (a.qg = this) };
d.te = function() {};
d.qh = function() { return !1 };

function Hh(a, b) { this.ma = new jc(0, 17.5);
    this.Lo = b;
    this.setValue(a) } y(Hh, zh);
Hh.X = function(a) { var b = I.h.Qb(a.text); return new Hh(b, a["class"]) };
d = Hh.prototype;
d.zf = !1;
d.ea = function() { this.sa || (this.sa = I.h.A("text", { "class": "blocklyText", y: this.ma.height - 5 }, null), this.Lo && I.h.Sa(this.sa, this.Lo), this.Da || (this.sa.style.display = "none"), this.w.P().appendChild(this.sa), this.sa.Hc = this.w, I.B.Ef(this.sa), this.Od()) };
d.v = function() { H(this.sa);
    this.sa = null };
d.P = function() { return this.sa };
d.te = function(a) { this.sa.Hc = a };
Bh("field_label", Hh);

function Ih(a, b, c, e) { if (a != I.Ud && !b) throw "Value inputs and statement inputs must have non-empty name.";
    this.type = a;
    this.name = b;
    this.w = c;
    this.connection = e;
    this.Ma = [] } d = Ih.prototype;
d.align = I.Eh;
d.Da = !0;

function Jh(a, b, c) { Kh(a, a.Ma.length, b, c); return a }

function Kh(a, b, c, e) { if (0 > b || b > a.Ma.length) throw Error("index " + b + " out of bounds."); if (!c && !e) return b;
    q(c) && (c = new Hh(c));
    c.In(a.w);
    a.w.N && c.ea();
    c.name = e;
    c.hn && (b = Kh(a, b, c.hn));
    a.Ma.splice(b, 0, c);++b;
    c.Sn && (b = Kh(a, b, c.Sn));
    a.w.N && (a.w.U(), a.w.Tb()); return b } d.R = function() { return this.Da };
d.ka = function(a) { var b = []; if (this.Da == a) return b; for (var c = (this.Da = a) ? "block" : "none", e = 0, f; f = this.Ma[e]; e++) f.ka(a); if (this.connection) { if (a) b = wf(this.connection);
        else if (e = this.connection, xf(e, !0), e.Eb)
            for (e = K(P(e), !1), f = 0; f < e.length; f++) { for (var h = e[f], k = h.Dd(!0), l = 0; l < k.length; l++) xf(k[l], !0);
                h = Cf(h); for (l = 0; l < h.length; l++) h[l].ka(!1) }
        if (e = P(this.connection)) e.P().style.display = c, a || (e.N = !1) } return b };
d.vh = function(a) { if (!this.connection) throw "This input does not have a connection.";
    this.connection.vh(a) };

function Lh(a, b) { a.align = b;
    a.w.N && a.w.U(); return a } d.ea = function() { if (this.w.o.N)
        for (var a = 0; a < this.Ma.length; a++) this.Ma[a].ea() };
d.v = function() { for (var a = 0, b; b = this.Ma[a]; a++) b.v();
    this.connection && this.connection.v();
    this.w = null };

function Xe(a) { Xe.m.constructor.call(this, a);
    Te(this);
    this.pa = {} } y(Xe, Se);
d = Xe.prototype;
d.Oo = !1;
d.em = function(a) { I.h.A("path", { "class": "blocklyIconShape", d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z" }, a);
    I.h.A("path", { "class": "blocklyIconSymbol", d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z" }, a);
    I.h.A("rect", { "class": "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" }, a) };
d.ka = function(a) {
    if (a != this.R())
        if (I.i.L(new L(this.K, "warningOpen", !a, a)), a) {
            var b = this.sb();
            a = I.h.A("text", { "class": "blocklyText blocklyBubbleText", y: N }, null);
            b = b.split("\n");
            for (var c = 0; c < b.length; c++) I.h.A("tspan", { dy: "1em", x: N }, a).appendChild(document.createTextNode(b[c]));
            this.Ka = new Be(this.K.o, a, this.K.bd, this.Sf, null, null);
            Je(this.Ka, this.K.id);
            if (this.K.s) { b = a.getBBox().width;
                c = 0; for (var e; e = a.childNodes[c]; c++) e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + N) } this.Ae();
            a = this.Ka.Nf();
            this.Ka.kf(a.width, a.height)
        } else this.Ka.v(), this.Ka = null
};
d.wb = function(a, b) { this.pa[b] != a && (a ? this.pa[b] = a : delete this.pa[b], this.R() && (this.ka(!1), this.ka(!0))) };
d.sb = function() { var a = [],
        b; for (b in this.pa) a.push(this.pa[b]); return a.join("\n") };
d.v = function() { this.K.Kc = null;
    Se.prototype.v.call(this) };

function ze(a, b, c) {
    "undefined" !== typeof Mh.prototype[b] && console.warn('FUTURE ERROR: Block prototypeName "' + b + '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.');
    this.id = c && !fe(a, c) ? c : I.h.Cd();
    a.Gl[this.id] = this;
    this.W = this.S = this.T = null;
    this.aa = [];
    this.Ve = void 0;
    this.disabled = !1;
    this.Hc = "";
    this.contextMenu = !0;
    this.cf = null;
    this.Yd = [];
    this.xp = this.Qi = this.Yh = !0;
    this.xd = this.Wa = !1;
    this.Ga = null;
    this.Lc = new F(0, 0);
    this.o = a;
    this.nc = a.ke;
    this.s = a.s;
    if (b) { this.type = b;
        b = I.$a[b]; for (var e in b) this[e] = b[e] } a.zh.push(this);
    w(this.ea) && this.ea();
    this.bu = this.Ve;
    if (I.i.isEnabled()) {
        (a = I.i.Yb()) || I.i.O(!0); try { I.i.L(new I.i.sj(this)) } finally { a || I.i.O(!1) } }
    if (w(this.onchange)) { if ((a = this.onchange) && !w(a)) throw Error("onchange must be a function.");
        this.Si && this.o.ff(this.Si); if (this.onchange = a) this.Si = a.bind(this), this.o.Pc(this.Si) }
}
d = ze.prototype;
d.data = null;
d.yd = "#000000";
d.v = function(a) { if (this.o) { this.Si && this.o.ff(this.Si);
        Qe(this, a);
        I.i.isEnabled() && I.i.L(new I.i.Ar(this));
        I.i.disable(); try { this.o && (xe(this.o, this), delete this.o.Gl[this.id], this.o = null);
            I.selected == this && (I.selected = null); for (var b = this.Yd.length - 1; 0 <= b; b--) this.Yd[b].v(!1);
            b = 0; for (var c; c = this.aa[b]; b++) c.v();
            this.aa.length = 0; var e = this.Dd(!0); for (b = 0; b < e.length; b++) { var f = e[b];
                f.isConnected() && f.disconnect();
                e[b].v() } } finally { I.i.enable() } } };
d.Uf = function() { for (var a = 0, b; b = this.aa[a]; a++)
        for (var c = 0, e; e = b.Ma[c]; c++) e.Uf && e.Uf() };

function Qe(a, b) { if (a.T) a.T.isConnected() && a.T.disconnect();
    else if (a.W) { var c = null;
        a.W.isConnected() && (c = a.W.Eb, a.W.disconnect()); var e = ge(a);
        b && e && (a = a.S.Eb, a.disconnect(), c && $e(c, a) && c.connect(a)) } } d.Dd = function() { var a = [];
    this.T && a.push(this.T);
    this.W && a.push(this.W);
    this.S && a.push(this.S); for (var b = 0, c; c = this.aa[b]; b++) c.connection && a.push(c.connection); return a };
d.Tb = function() { console.warn("Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead.") };
d.getParent = function() { return this.cf };

function Nh(a) { do { var b = a;
        a = a.getParent(); if (!a) return null } while (ge(a) == b); return a }

function ge(a) { return a.S && P(a.S) }

function qf(a) { var b = a;
    do a = b, b = a.cf; while (b); return a } d.Ne = function(a) { if (!a) return this.Yd;
    a = []; for (var b = 0, c; c = this.aa[b]; b++) c.connection && (c = P(c.connection)) && a.push(c);
    (b = ge(this)) && a.push(b); return a };
d.mg = function(a) { if (a != this.cf) { if (this.cf) { xa(this.cf.Yd, this); if (this.W && this.W.isConnected()) throw "Still connected to previous block."; if (this.T && this.T.isConnected()) throw "Still connected to parent block.";
            this.cf = null } else xe(this.o, this);
        (this.cf = a) ? a.Yd.push(this): this.o.zh.push(this) } };

function K(a, b) { var c = [a];
    a = a.Ne(b); for (var e, f = 0; e = a[f]; f++) c.push.apply(c, K(e, b)); return c } d.Lb = function() { return this.Yh && !this.Wa && !(this.o && this.o.options.readOnly) };
d.Wk = function(a) { this.Yh = a };
d.Kd = function() { return this.Qi && !this.Wa && !(this.o && this.o.options.readOnly) };
d.lg = function(a) { this.Qi = a };
d.Hn = function(a) { this.Wa = a };

function We(a) { return a.xp && !(a.o && a.o.options.readOnly) } d.Dn = function(a) { this.xp = a;
    a = 0; for (var b; b = this.aa[a]; a++)
        for (var c = 0, e; e = b.Ma[c]; c++) e.Be() };

function Og(a, b) { if (!b && a.isCollapsed()) { if (a.T && xf(a.T, b), a.W && xf(a.W, b), a.S) { xf(a.S, b); var c = P(a.S);
            c && Og(c, b) } } else { a = a.Dd(!0); for (var e = 0; c = a[e]; e++) xf(c, b), df(c) && (c = P(c)) && Og(c, b) } } d.te = function(a) { this.Hc = a };
d.lf = function(a) { var b = q(a) ? I.h.Qb(a) : a,
        c = Number(b); if (!isNaN(c) && 0 <= c && 360 >= c) this.yd = I.Wp(c);
    else if (q(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.yd = b;
    else throw c = 'Invalid colour: "' + b + '"', a != b && (c += ' (from "' + a + '")'), c; };

function Ne(a, b) { for (var c = 0, e; e = a.aa[c]; c++)
        for (var f = 0, h; h = e.Ma[f]; f++)
            if (h.name === b) return h; return null }

function pe(a) { for (var b = [], c = 0, e; e = a.aa[c]; c++)
        for (var f = 0, h; h = e.Ma[f]; f++) h.qh() && (h = a.o.Oe(h.getValue())) && b.push(h); return b }

function oe(a, b) { return (a = Ne(a, b)) ? a.getValue() : null } d.al = function(a, b) { a ? (void 0 === b && (b = null), this.W || (this.W = this.Li(I.De)), this.W.vh(b)) : this.W && (this.W.v(), this.W = null) };
d.Yk = function(a, b) { a ? (void 0 === b && (b = null), this.S || (this.S = this.Li(I.Ta)), this.S.vh(b)) : this.S && (this.S.v(), this.S = null) };
d.Zk = function(a, b) { a ? (void 0 === b && (b = null), this.T || (this.T = this.Li(I.Hg)), this.T.vh(b)) : this.T && (this.T.v(), this.T = null) };
d.kg = function(a) { this.Ve != a && (I.i.L(new I.i.hc(this, "inline", null, this.Ve, a)), this.Ve = a) };

function lh(a) { if (void 0 != a.Ve) return a.Ve; for (var b = 1; b < a.aa.length; b++)
        if (a.aa[b - 1].type == I.Ud && a.aa[b].type == I.Ud) return !1; for (b = 1; b < a.aa.length; b++)
        if (a.aa[b - 1].type == I.ab && a.aa[b].type == I.Ud) return !0; return !1 } d.mf = function(a) { this.disabled != a && (I.i.L(new I.i.hc(this, "disabled", null, this.disabled, a)), this.disabled = a) };

function Oh(a) { for (a = Nh(a); a;) { if (a.disabled) return !0;
        a = Nh(a) } return !1 } d.isCollapsed = function() { return this.xd };
d.ig = function(a) { this.xd != a && (I.i.L(new I.i.hc(this, "collapsed", null, this.xd, a)), this.xd = a) };
d.toString = function(a, b) { var c = [],
        e = b || "?"; if (this.xd) c.push(Re(this, "_TEMP_COLLAPSED_INPUT").Ma[0].pa);
    else
        for (var f = 0, h; h = this.aa[f]; f++) { for (var k = 0, l; l = h.Ma[k]; k++) l instanceof Ph && !l.getValue() ? c.push(e) : c.push(l.sb());
            h.connection && ((h = P(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e)) } c = Ha(c.join(" ")) || "???";
    a && (b = c, b.length > a && (b = b.substring(0, a - 3) + "..."), c = b); return c };

function Qh(a, b) { return a.Df(I.Ud, b || "") }

function kh(a, b) { if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided"); var c = [],
        e; for (e in b) void 0 !== a[e] && c.push(e); if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c)); for (var f in b) a[f] = b[f] } d.Df = function(a, b) { var c = null; if (a == I.ab || a == I.Ta) c = this.Li(a);
    a = new Ih(a, b, this, c);
    this.aa.push(a); return a };
d.on = function(a) { for (var b = 0, c; c = this.aa[b]; b++)
        if (c.name == a) { c.connection && c.connection.isConnected() && (c.connection.Pd = null, a = P(c.connection), a.Wa ? a.v() : Qe(a));
            c.v();
            this.aa.splice(b, 1); break } };

function Re(a, b) { for (var c = 0, e; e = a.aa[c]; c++)
        if (e.name == b) return e; return null } d.Ep = function() { return this.Ga || "" };
d.Yi = function(a) { this.Ga != a && (I.i.L(new I.i.hc(this, "comment", null, this.Ga, a || "")), this.Ga = a) };
d.cl = function() {};
d.Xq = function() {};
d.ca = function() { return this.Lc };
d.moveBy = function(a, b) { var c = new I.i.Fh(this);
    this.Lc.translate(a, b);
    c.pe();
    I.i.L(c) };
d.Li = function(a) { return new Ye(this, a) };

function gf(a) { var b = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (b += ' (id="' + a.id + '")'); return b };
I.h.Bh = {};
I.h.Bh.fe = function(a) { a = a.D(); var b = sh(a);
    b.height = a.scrollHeight; return b };
I.h.Bh.xo = function(a, b, c) { b.left += c.width;
    b.right += c.width;
    a.left += c.width;
    a.right += c.width };

function Rh(a) { jd.call(this);
    this.bh = a;
    this.hh = {} } y(Rh, jd);
var Sh = [];
d = Rh.prototype;
d.ga = function(a, b, c, e) { u(b) || (b && (Sh[0] = b.toString()), b = Sh); for (var f = 0; f < b.length; f++) { var h = J(a, b[f], c || this.handleEvent, e || !1, this.bh || this); if (!h) break;
        this.hh[h.key] = h } return this };
d.hq = function(a, b, c, e) { return Th(this, a, b, c, e) };

function Th(a, b, c, e, f, h) { if (u(c))
        for (var k = 0; k < c.length; k++) Th(a, b, c[k], e, f, h);
    else { b = Hd(b, c, e || a.handleEvent, f, h || a.bh || a); if (!b) return a;
        a.hh[b.key] = b } return a }
d.Jc = function(a, b, c, e, f) { if (u(b))
        for (var h = 0; h < b.length; h++) this.Jc(a, b[h], c, e, f);
    else c = c || this.handleEvent, e = ha(e) ? !!e.capture : !!e, f = f || this.bh || this, c = Id(c), e = !!e, b = xd(a) ? a.ji(b, c, e, f) : a ? (a = Kd(a)) ? a.ji(b, c, e, f) : null : null, b && (Pd(b), delete this.hh[b.key]); return this };
d.removeAll = function() { Za(this.hh, function(a, b) { this.hh.hasOwnProperty(b) && Pd(a) }, this);
    this.hh = {} };
d.Ha = function() { Rh.m.Ha.call(this);
    this.removeAll() };
d.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

function Uh() {} da(Uh);
Uh.prototype.tu = 0;

function Vh(a) { Ag.call(this);
    this.Oj = a || kc();
    this.uh = Wh;
    this.dh = null;
    this.ra = !1;
    this.J = null;
    this.Pe = void 0;
    this.Ie = this.Jb = this.Nd = this.Pm = null;
    this.oh = this.qv = !1 } y(Vh, Ag);
Vh.prototype.Zt = Uh.Fd();
var Wh = null;

function Xh(a, b) { switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close" } throw Error("Invalid component state"); } d = Vh.prototype;
d.ia = function() { return this.dh || (this.dh = ":" + (this.Zt.tu++).toString(36)) };
d.D = function() { return this.J };

function Yh(a) { a.Pe || (a.Pe = new Rh(a)); return a.Pe }
d.mg = function(a) { if (this == a) throw Error("Unable to set parent component"); if (a && this.Nd && this.dh && Zh(this.Nd, this.dh) && this.Nd != a) throw Error("Unable to set parent component");
    this.Nd = a;
    Vh.m.$k.call(this, a) };
d.getParent = function() { return this.Nd };
d.$k = function(a) { if (this.Nd && this.Nd != a) throw Error("Method not supported");
    Vh.m.$k.call(this, a) };
d.Wb = function() { return this.Oj };
d.M = function() { this.J = this.Oj.createElement("DIV") };
d.U = function(a) { this.Od(a) };
d.Od = function(a, b) { if (this.ra) throw Error("Component already rendered");
    this.J || this.M();
    a ? a.insertBefore(this.J, b || null) : this.Oj.fd.body.appendChild(this.J);
    this.Nd && !this.Nd.ra || this.jb() };
d.jb = function() { this.ra = !0;
    $h(this, function(a) {!a.ra && a.D() && a.jb() }) };
d.Xc = function() { $h(this, function(a) { a.ra && a.Xc() });
    this.Pe && this.Pe.removeAll();
    this.ra = !1 };
d.Ha = function() { this.ra && this.Xc();
    this.Pe && (this.Pe.v(), delete this.Pe);
    $h(this, function(a) { a.v() });!this.qv && this.J && H(this.J);
    this.Nd = this.Pm = this.J = this.Ie = this.Jb = null;
    Vh.m.Ha.call(this) };
d.Mh = function(a, b) { this.Ig(a, ai(this), b) };
d.Ig = function(a, b, c) {
    if (a.ra && (c || !this.ra)) throw Error("Component already rendered");
    if (0 > b || b > ai(this)) throw Error("Child component index out of bounds");
    this.Ie && this.Jb || (this.Ie = {}, this.Jb = []);
    if (a.getParent() == this) { var e = a.ia();
        this.Ie[e] = a;
        xa(this.Jb, a) } else { e = this.Ie; var f = a.ia(); if (null !== e && f in e) throw Error('The object already contains the key "' + f + '"');
        e[f] = a } a.mg(this);
    Ba(this.Jb, b, 0, a);
    a.ra && this.ra && a.getParent() == this ? (c = this.Ac(), b = c.childNodes[b] || null, b != a.D() && c.insertBefore(a.D(),
        b)) : c ? (this.J || this.M(), b = T(this, b + 1), a.Od(this.Ac(), b ? b.J : null)) : this.ra && !a.ra && a.J && a.J.parentNode && 1 == a.J.parentNode.nodeType && a.jb()
};
d.Ac = function() { return this.J };

function bi(a) { null == a.uh && (a.uh = "rtl" == oh(a.ra ? a.J : a.Oj.fd.body, "direction")); return a.uh } d.se = function(a) { if (this.ra) throw Error("Component already rendered");
    this.uh = a };

function ci(a) { return !!a.Jb && 0 != a.Jb.length }

function ai(a) { return a.Jb ? a.Jb.length : 0 }

function Zh(a, b) { a.Ie && b ? (a = a.Ie, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null; return b }

function T(a, b) { return a.Jb ? a.Jb[b] || null : null }

function $h(a, b, c) { a.Jb && z(a.Jb, b, c) }

function di(a, b) { return a.Jb && b ? qa(a.Jb, b) : -1 } d.removeChild = function(a, b) { if (a) { var c = q(a) ? a : a.ia();
        a = Zh(this, c); if (c && a) { var e = this.Ie;
            c in e && delete e[c];
            xa(this.Jb, a);
            b && (a.Xc(), a.J && H(a.J));
            a.mg(null) } } if (!a) throw Error("Child is not in parent component"); return a };
d.Rq = function(a) { for (var b = []; ci(this);) b.push(this.removeChild(T(this, 0), a)); return b };
var ei;
bb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

function fi(a, b) { b ? a.setAttribute("role", b) : a.removeAttribute("role") }

function U(a, b, c) { u(c) && (c = c.join(" ")); var e = "aria-" + b; "" === c || void 0 == c ? (ei || (ei = { atomic: !1, autocomplete: "none", dropeffect: "none", haspopup: !1, live: "off", multiline: !1, multiselectable: !1, orientation: "vertical", readonly: !1, relevant: "additions text", required: !1, sort: "none", busy: !1, disabled: !1, hidden: !1, invalid: "false" }), c = ei, b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e)) : a.setAttribute(e, c) }

function gi(a, b) { a = a.getAttribute("aria-" + b); return null == a || void 0 == a ? "" : String(a) };

function hi(a, b, c, e, f, h) { if (E && !rb("525")) return !0; if (ib && f) return ii(a); if (f && !e) return !1; if (!D) { t(b) && (b = ji(b)); var k = 17 == b || 18 == b || ib && 91 == b; if ((!c || ib) && k || ib && 16 == b && (e || h)) return !1 } if ((E || gb) && e && c) switch (a) {
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
    if (B && e && b == a) return !1; switch (a) {
        case 13:
            return D ? h || f ? !1 : !(c && e) : !0;
        case 27:
            return !(E || gb || D) } return D && (e || f || h) ? !1 : ii(a) }

function ii(a) { if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (E || gb) && 0 == a) return !0; switch (a) {
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

function ji(a) { if (D) a = ki(a);
    else if (ib && E) switch (a) {
        case 93:
            a = 91 }
    return a }

function ki(a) { switch (a) {
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

function li(a, b) { Ag.call(this);
    a && mi(this, a, b) } y(li, Ag);
d = li.prototype;
d.J = null;
d.wk = null;
d.Gm = null;
d.xk = null;
d.oc = -1;
d.Ye = -1;
d.Cl = !1;
var ni = { 3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45 },
    oi = { Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45 },
    pi = !E || rb("525"),
    qi = ib && D;
d = li.prototype;
d.Lt = function(a) { if (E || gb)
        if (17 == this.oc && !a.ctrlKey || 18 == this.oc && !a.altKey || ib && 91 == this.oc && !a.metaKey) this.Ye = this.oc = -1; - 1 == this.oc && (a.ctrlKey && 17 != a.keyCode ? this.oc = 17 : a.altKey && 18 != a.keyCode ? this.oc = 18 : a.metaKey && 91 != a.keyCode && (this.oc = 91));
    pi && !hi(a.keyCode, this.oc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Ye = ji(a.keyCode), qi && (this.Cl = a.altKey)) };
d.Mt = function(a) { this.Ye = this.oc = -1;
    this.Cl = a.altKey };
d.handleEvent = function(a) {
    var b = a.Ad,
        c = b.altKey;
    if (B && "keypress" == a.type) { var e = this.Ye; var f = 13 != e && 27 != e ? b.keyCode : 0 } else(E || gb) && "keypress" == a.type ? (e = this.Ye, f = 0 <= b.charCode && 63232 > b.charCode && ii(e) ? b.charCode : 0) : fb && !E ? (e = this.Ye, f = ii(e) ? b.keyCode : 0) : (e = b.keyCode || this.Ye, f = b.charCode || 0, qi && "keypress" == a.type && (c = this.Cl), ib && 63 == f && 224 == e && (e = 191));
    var h = e = ji(e);
    e ? 63232 <= e && e in ni ? h = ni[e] : 25 == e && a.shiftKey && (h = 9) : b.keyIdentifier && b.keyIdentifier in oi && (h = oi[b.keyIdentifier]);
    D && pi && "keypress" ==
        a.type && !hi(h, this.oc, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = h == this.oc, this.oc = h, b = new ri(h, f, a, b), b.altKey = c, this.dispatchEvent(b))
};
d.D = function() { return this.J };

function mi(a, b, c) { a.xk && a.detach();
    a.J = b;
    a.wk = J(a.J, "keypress", a, c);
    a.Gm = J(a.J, "keydown", a.Lt, c, a);
    a.xk = J(a.J, "keyup", a.Mt, c, a) } d.detach = function() { this.wk && (Pd(this.wk), Pd(this.Gm), Pd(this.xk), this.xk = this.Gm = this.wk = null);
    this.J = null;
    this.Ye = this.oc = -1 };
d.Ha = function() { li.m.Ha.call(this);
    this.detach() };

function ri(a, b, c, e) { sd.call(this, e);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c } y(ri, sd);

function si(a) { if (a.classList) return a.classList;
    a = a.className; return q(a) && a.match(/\S+/g) || [] }

function ti(a, b) { return a.classList ? a.classList.contains(b) : wa(si(a), b) }

function ui(a, b) { a.classList ? a.classList.add(b) : ti(a, b) || (a.className += 0 < a.className.length ? " " + b : b) }

function vi(a, b) { if (a.classList) z(b, function(b) { ui(a, b) });
    else { var c = {};
        z(si(a), function(a) { c[a] = !0 });
        z(b, function(a) { c[a] = !0 });
        a.className = ""; for (var e in c) a.className += 0 < a.className.length ? " " + e : e } }

function wi(a, b) { a.classList ? a.classList.remove(b) : ti(a, b) && (a.className = sa(si(a), function(a) { return a != b }).join(" ")) }

function xi(a, b) { a.classList ? z(b, function(b) { wi(a, b) }) : a.className = sa(si(a), function(a) { return !wa(b, a) }).join(" ") };

function yi(a, b) { if (!a) throw Error("Invalid class name " + a); if (!w(b)) throw Error("Invalid decorator function " + b); }
var zi = {};

function Ai(a) { this.zo = a } da(Ai);
d = Ai.prototype;
d.Uj = function() { return this.zo };

function Bi(a, b) { a && (a.tabIndex = b ? 0 : -1) } d.M = function(a) { return a.Wb().M("DIV", this.ii(a).join(" ")) };
d.Ac = function(a) { return a };
d.Bi = function(a) { a = a.D();
    wh(a, !0, D);
    B && (a.hideFocus = !0); var b = this.Uj();
    b && fi(a, b) };
d.rb = function(a) { return a.D() };
d.za = function() { return "goog-container" };
d.ii = function(a) { var b = this.za(),
        c = [b, a.cg == Ci ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled"); return c };

function Di() {}
var Ei;
da(Di);
var Fi = { button: "pressed", checkbox: "checked", menuitem: "selected", menuitemcheckbox: "checked", menuitemradio: "checked", radio: "checked", tab: "selected", treeitem: "selected" };
d = Di.prototype;
d.Uj = function() {};
d.M = function(a) { return a.Wb().M("DIV", this.ii(a).join(" "), a.mc()) };
d.Ac = function(a) { return a };
d.ai = function(a, b, c) { if (a = a.D ? a.D() : a) { var e = [b];
        B && !rb("7") && (e = Gi(si(a), b), e.push(b));
        (c ? vi : xi)(a, e) } };
d.Bi = function(a) { bi(a) && this.se(a.D(), !0);
    a.isEnabled() && this.re(a, a.R()) };

function Hi(a, b, c) { if (a = c || a.Uj()) c = b.getAttribute("role") || null, a != c && fi(b, a) }

function Ii(a, b, c) { var e = b.yo;
    null != e && a.An(c, e);
    b.R() || U(c, "hidden", !b.R());
    b.isEnabled() || Ji(c, 1, !b.isEnabled());
    b.eb & 8 && Ji(c, 8, b.rk());
    b.eb & 16 && Ji(c, 16, !!(b.ya & 16));
    b.eb & 64 && Ji(c, 64, b.fh()) } d.An = function(a, b) { U(a, "label", b) };
d.zn = function(a, b) { wh(a, !b, !B && !fb) };
d.se = function(a, b) { this.ai(a, this.za() + "-rtl", b) };
d.le = function(a) { var b; return a.eb & 32 && (b = a.rb()) ? Dc(b) && Ec(b) : !1 };
d.re = function(a, b) { var c; if (a.eb & 32 && (c = a.rb())) { if (!b && a.ya & 32) { try { c.blur() } catch (e) {} a.ya & 32 && a.pi(null) }(Dc(c) && Ec(c)) != b && (a = c, b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))) } };
d.ka = function(a, b) { uh(a, b);
    a && U(a, "hidden", !b) };
d.qd = function(a, b, c) { var e = a.D(); if (e) { var f = this.Xj(b);
        f && this.ai(a, f, c);
        Ji(e, b, c) } };

function Ji(a, b, c) { Ei || (Ei = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = Ei[b]; var e = a.getAttribute("role") || null;
    e && (e = Fi[e] || b, b = "checked" == b || "selected" == b ? e : b);
    b && U(a, b, c) } d.ad = function(a, b) { var c = this.Ac(a);
    c && (wc(c), b && (q(b) ? Ac(c, b) : (a = function(a) { if (a) { var b = mc(c);
            c.appendChild(q(a) ? b.createTextNode(a) : a) } }, u(b) ? z(b, a) : !fa(b) || "nodeType" in b ? a(b) : z(za(b), a)))) };
d.rb = function(a) { return a.D() };
d.za = function() { return "goog-control" };
d.ii = function(a) { var b = this.za(),
        c = [b],
        e = this.za();
    e != b && c.push(e);
    b = a.getState(); for (e = []; b;) { var f = b & -b;
        e.push(this.Xj(f));
        b &= ~f } c.push.apply(c, e);
    (a = a.Bd) && c.push.apply(c, a);
    B && !rb("7") && c.push.apply(c, Gi(c)); return c };

function Gi(a, b) { var c = [];
    b && (a = ya(a, [b]));
    z([], function(e) {!ua(e, oa(wa, a)) || b && !wa(e, b) || c.push(e.join("_")) }); return c }
d.Xj = function(a) { if (!this.Jo) { var b = this.za();
        b.replace(/\xa0|\s/g, " ");
        this.Jo = { 1: b + "-disabled", 2: b + "-hover", 4: b + "-active", 8: b + "-selected", 16: b + "-checked", 32: b + "-focused", 64: b + "-open" } } return this.Jo[a] };

function V(a, b, c) { Vh.call(this, c); if (!b) { b = this.constructor; for (var e; b;) { e = ia(b); if (e = zi[e]) break;
            b = b.m ? b.m.constructor : null } b = e ? w(e.Fd) ? e.Fd() : new e : null } this.ba = b;
    this.Vk(aa(a) ? a : null);
    this.yo = null } y(V, Vh);
d = V.prototype;
d.yc = null;
d.ya = 0;
d.eb = 39;
d.El = 255;
d.rg = 0;
d.Da = !0;
d.Bd = null;
d.ri = !0;
d.Bl = !1;
d.Ru = null;
d.rb = function() { return this.ba.rb(this) };
d.ak = function() { return this.Mb || (this.Mb = new li) };
d.ai = function(a, b) { b ? a && (this.Bd ? wa(this.Bd, a) || this.Bd.push(a) : this.Bd = [a], this.ba.ai(this, a, !0)) : a && this.Bd && xa(this.Bd, a) && (0 == this.Bd.length && (this.Bd = null), this.ba.ai(this, a, !1)) };
d.M = function() { var a = this.ba.M(this);
    this.J = a;
    Hi(this.ba, a, this.dk());
    this.Bl || this.ba.zn(a, !1);
    this.R() || this.ba.ka(a, !1) };
d.dk = function() { return this.Ru };
d.An = function(a) { this.yo = a; var b = this.D();
    b && this.ba.An(b, a) };
d.Ac = function() { return this.ba.Ac(this.D()) };
d.jb = function() { V.m.jb.call(this);
    Ii(this.ba, this, this.J);
    this.ba.Bi(this); if (this.eb & -2 && (this.ri && Ki(this, !0), this.eb & 32)) { var a = this.rb(); if (a) { var b = this.ak();
            mi(b, a);
            Yh(this).ga(b, "key", this.Zc).ga(a, "focus", this.hk).ga(a, "blur", this.pi) } } };

function Ki(a, b) { var c = a.oh ? rd : qd,
        e = Yh(a),
        f = a.D();
    b ? (e.ga(f, c.Jh, a.si).ga(f, c.Eg, a.ge).ga(f, [c.Fg, c.Dg], a.ah).ga(f, c.Ih, a.vm), a.oh && e.ga(f, "gotpointercapture", a.Pk), a.$g != ca && e.ga(f, "contextmenu", a.$g), B && (rb(9) || e.ga(f, "dblclick", a.Mp), a.zi || (a.zi = new Li(a), md(a, oa(nd, a.zi))))) : (e.Jc(f, c.Jh, a.si).Jc(f, c.Eg, a.ge).Jc(f, [c.Fg, c.Dg], a.ah).Jc(f, c.Ih, a.vm), a.oh && e.Jc(f, "gotpointercapture", a.Pk), a.$g != ca && e.Jc(f, "contextmenu", a.$g), B && (rb(9) || e.Jc(f, "dblclick", a.Mp), nd(a.zi), a.zi = null)) }
d.Xc = function() { V.m.Xc.call(this);
    this.Mb && this.Mb.detach();
    this.R() && this.isEnabled() && this.ba.re(this, !1) };
d.Ha = function() { V.m.Ha.call(this);
    this.Mb && (this.Mb.v(), delete this.Mb);
    delete this.ba;
    this.zi = this.Bd = this.yc = null };
d.mc = function() { return this.yc };
d.ad = function(a) { this.ba.ad(this.D(), a);
    this.Vk(a) };
d.Vk = function(a) { this.yc = a };
d.Wj = function() { var a = this.mc(); if (!a) return "";
    a = q(a) ? a : u(a) ? ta(a, Hc).join("") : Fc(a); return Ga(a) };
d.se = function(a) { V.m.se.call(this, a); var b = this.D();
    b && this.ba.se(b, a) };
d.zn = function(a) { this.Bl = a; var b = this.D();
    b && this.ba.zn(b, a) };
d.R = function() { return this.Da };
d.ka = function(a, b) { return b || this.Da != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.D()) && this.ba.ka(b, a), this.isEnabled() && this.ba.re(this, a), this.Da = a, !0) : !1 };
d.isEnabled = function() { return !(this.ya & 1) };
d.aj = function(a) { var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Mi(this, 1, !a) || (a || (this.setActive(!1), this.Cb(!1)), this.R() && this.ba.re(this, a), this.qd(1, !a, !0)) };
d.Cb = function(a) { Mi(this, 2, a) && this.qd(2, a) };
d.setActive = function(a) { Mi(this, 4, a) && this.qd(4, a) };
d.rk = function() { return !!(this.ya & 8) };
d.Fn = function(a) { Mi(this, 8, a) && this.qd(8, a) };

function Ni(a, b) { Mi(a, 16, b) && a.qd(16, b) } d.fh = function() { return !!(this.ya & 64) };

function Oi(a, b) { Mi(a, 64, b) && a.qd(64, b) } d.getState = function() { return this.ya };
d.qd = function(a, b, c) { c || 1 != a ? this.eb & a && b != !!(this.ya & a) && (this.ba.qd(this, a, b), this.ya = b ? this.ya | a : this.ya & ~a) : this.aj(!b) };
d.dc = function(a, b) { if (this.ra && this.ya & a && !b) throw Error("Component already rendered");!b && this.ya & a && this.qd(a, !1);
    this.eb = b ? this.eb | a : this.eb & ~a };

function Pi(a, b) { return !!(a.El & b) && !!(a.eb & b) }

function Mi(a, b, c) { return !!(a.eb & b) && !!(a.ya & b) != c && (!(a.rg & b) || a.dispatchEvent(Xh(b, c))) && !a.Og }
d.si = function(a) {!Qi(a, this.D()) && this.dispatchEvent("enter") && this.isEnabled() && Pi(this, 2) && this.Cb(!0) };
d.vm = function(a) {!Qi(a, this.D()) && this.dispatchEvent("leave") && (Pi(this, 4) && this.setActive(!1), Pi(this, 2) && this.Cb(!1)) };
d.Pk = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };
d.$g = ca;

function Qi(a, b) { return !!a.relatedTarget && zc(b, a.relatedTarget) }
d.ge = function(a) { this.isEnabled() && (Pi(this, 2) && this.Cb(!0), !vd(a) || E && ib && a.ctrlKey || (Pi(this, 4) && this.setActive(!0), this.ba && this.ba.le(this) && this.rb().focus()));
    this.Bl || !vd(a) || E && ib && a.ctrlKey || a.preventDefault() };
d.ah = function(a) { this.isEnabled() && (Pi(this, 2) && this.Cb(!0), this.ya & 4 && this.df(a) && Pi(this, 4) && this.setActive(!1)) };
d.Mp = function(a) { this.isEnabled() && this.df(a) };
d.df = function(a) { Pi(this, 16) && Ni(this, !(this.ya & 16));
    Pi(this, 8) && this.Fn(!0);
    Pi(this, 64) && Oi(this, !this.fh()); var b = new od("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.dn = a.dn); return this.dispatchEvent(b) };
d.hk = function() { Pi(this, 32) && Mi(this, 32, !0) && this.qd(32, !0) };
d.pi = function() { Pi(this, 4) && this.setActive(!1);
    Pi(this, 32) && Mi(this, 32, !1) && this.qd(32, !1) };
d.Zc = function(a) { return this.R() && this.isEnabled() && this.Of(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.Of = function(a) { return 13 == a.keyCode && this.df(a) };
if (!w(V)) throw Error("Invalid component class " + V);
if (!w(Di)) throw Error("Invalid renderer class " + Di);
var Ri = ia(V);
zi[Ri] = Di;
yi("goog-control", function() { return new V(null) });

function Li(a) { jd.call(this);
    this.Gj = a;
    this.Aj = !1;
    this.bh = new Rh(this);
    md(this, oa(nd, this.bh));
    a = this.Gj.J;
    this.bh.ga(a, "mousedown", this.Nt).ga(a, "mouseup", this.Ot).ga(a, "click", this.Gt) } y(Li, jd);
var Si = !B || 9 <= Number(sb);
Li.prototype.Nt = function() { this.Aj = !1 };
Li.prototype.Ot = function() { this.Aj = !0 };

function Ti(a, b) { if (!Si) return a.button = 0, a.type = b, a; var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null); return c } Li.prototype.Gt = function(a) { if (this.Aj) this.Aj = !1;
    else { var b = a.Ad,
            c = b.button,
            e = b.type,
            f = Ti(b, "mousedown");
        this.Gj.ge(new sd(f, a.currentTarget));
        f = Ti(b, "mouseup");
        this.Gj.ah(new sd(f, a.currentTarget));
        Si || (b.button = c, b.type = e) } };
Li.prototype.Ha = function() { this.Gj = null;
    Li.m.Ha.call(this) };

function Ui(a, b, c) { Vh.call(this, c);
    this.ba = b || Ai.Fd();
    this.cg = a || Vi } y(Ui, Vh);
var Ci = "horizontal",
    Vi = "vertical";
d = Ui.prototype;
d.Hm = null;
d.Mb = null;
d.ba = null;
d.cg = null;
d.Da = !0;
d.Kf = !0;
d.Mf = !0;
d.oa = -1;
d.mb = null;
d.kh = !1;
d.os = !1;
d.Qu = !0;
d.Zd = null;
d.rb = function() { return this.Hm || this.ba.rb(this) };
d.ak = function() { return this.Mb || (this.Mb = new li(this.rb())) };
d.M = function() { this.J = this.ba.M(this) };
d.Ac = function() { return this.ba.Ac(this.D()) };
d.jb = function() { Ui.m.jb.call(this);
    $h(this, function(a) { a.ra && Wi(this, a) }, this); var a = this.D();
    this.ba.Bi(this);
    this.ka(this.Da, !0); var b = this.oh ? rd : qd;
    Yh(this).ga(this, "enter", this.tm).ga(this, "highlight", this.Kt).ga(this, "unhighlight", this.Tt).ga(this, "open", this.Pt).ga(this, "close", this.Ht).ga(a, b.Eg, this.ge).ga(mc(a), [b.Fg, b.Dg], this.It).ga(a, [b.Eg, b.Fg, b.Dg, b.Jh, b.Ih, "contextmenu"], this.Ft);
    this.oh && Yh(this).ga(a, "gotpointercapture", this.Pk);
    this.le() && Xi(this, !0) };
d.Pk = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };

function Xi(a, b) { var c = Yh(a),
        e = a.rb();
    b ? c.ga(e, "focus", a.hk).ga(e, "blur", a.pi).ga(a.ak(), "key", a.Zc) : c.Jc(e, "focus", a.hk).Jc(e, "blur", a.pi).Jc(a.ak(), "key", a.Zc) } d.Xc = function() { this.Rb(-1);
    this.mb && Oi(this.mb, !1);
    this.kh = !1;
    Ui.m.Xc.call(this) };
d.Ha = function() { Ui.m.Ha.call(this);
    this.Mb && (this.Mb.v(), this.Mb = null);
    this.ba = this.mb = this.Zd = this.Hm = null };
d.tm = function() { return !0 };
d.Kt = function(a) { var b = di(this, a.target); if (-1 < b && b != this.oa) { var c = T(this, this.oa);
        c && c.Cb(!1);
        this.oa = b;
        c = T(this, this.oa);
        this.kh && c.setActive(!0);
        this.Qu && this.mb && c != this.mb && (c.eb & 64 ? Oi(c, !0) : Oi(this.mb, !1)) } b = this.D();
    null != a.target.D() && U(b, "activedescendant", a.target.D().id) };
d.Tt = function(a) { a.target == T(this, this.oa) && (this.oa = -1);
    this.D().removeAttribute("aria-activedescendant") };
d.Pt = function(a) {
    (a = a.target) && a != this.mb && a.getParent() == this && (this.mb && Oi(this.mb, !1), this.mb = a) };
d.Ht = function(a) { a.target == this.mb && (this.mb = null); var b = this.D(),
        c = a.target.D();
    b && a.target.ya & 2 && c && (a = "", c && (a = c.id), U(b, "activedescendant", a)) };
d.ge = function(a) { this.Kf && (this.kh = !0); var b = this.rb();
    b && Dc(b) && Ec(b) ? b.focus() : a.preventDefault() };
d.It = function() { this.kh = !1 };
d.Ft = function(a) { var b = this.oh ? rd : qd,
        c = Yi(this, a.target); if (c) switch (a.type) {
        case b.Eg:
            c.ge(a); break;
        case b.Fg:
        case b.Dg:
            c.ah(a); break;
        case b.Jh:
            c.si(a); break;
        case b.Ih:
            c.vm(a); break;
        case "contextmenu":
            c.$g(a) } };

function Yi(a, b) { if (a.Zd)
        for (var c = a.D(); b && b !== c;) { var e = b.id; if (e in a.Zd) return a.Zd[e];
            b = b.parentNode }
    return null } d.hk = function() {};
d.pi = function() { this.Rb(-1);
    this.kh = !1;
    this.mb && Oi(this.mb, !1) };
d.Zc = function(a) { return this.isEnabled() && this.R() && (0 != ai(this) || this.Hm) && this.Of(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.Of = function(a) {
    var b = T(this, this.oa);
    if (b && "function" == typeof b.Zc && b.Zc(a) || this.mb && this.mb != b && "function" == typeof this.mb.Zc && this.mb.Zc(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.le()) this.rb().blur();
            else return !1;
            break;
        case 36:
            Zi(this);
            break;
        case 35:
            $i(this);
            break;
        case 38:
            if (this.cg == Vi) aj(this);
            else return !1;
            break;
        case 37:
            if (this.cg == Ci) bi(this) ? bj(this) : aj(this);
            else return !1;
            break;
        case 40:
            if (this.cg == Vi) bj(this);
            else return !1;
            break;
        case 39:
            if (this.cg == Ci) bi(this) ? aj(this) : bj(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function Wi(a, b) { var c = b.D();
    c = c.id || (c.id = b.ia());
    a.Zd || (a.Zd = {});
    a.Zd[c] = b } d.Mh = function(a, b) { Ui.m.Mh.call(this, a, b) };
d.Ig = function(a, b, c) { a.rg |= 2;
    a.rg |= 64;!this.le() && this.os || a.dc(32, !1);
    a.ra && 0 != a.ri && Ki(a, !1);
    a.ri = !1; var e = a.getParent() == this ? di(this, a) : -1;
    Ui.m.Ig.call(this, a, b, c);
    a.ra && this.ra && Wi(this, a);
    a = e; - 1 == a && (a = ai(this));
    a == this.oa ? this.oa = Math.min(ai(this) - 1, b) : a > this.oa && b <= this.oa ? this.oa++ : a < this.oa && b > this.oa && this.oa-- };
d.removeChild = function(a, b) { if (a = q(a) ? Zh(this, a) : a) { var c = di(this, a); - 1 != c && (c == this.oa ? (a.Cb(!1), this.oa = -1) : c < this.oa && this.oa--); var e = a.D();
        e && e.id && this.Zd && (c = this.Zd, e = e.id, e in c && delete c[e]) } b = a = Ui.m.removeChild.call(this, a, b);
    b.ra && 1 != b.ri && Ki(b, !0);
    b.ri = !0; return a };
d.setOrientation = function(a) { if (this.D()) throw Error("Component already rendered");
    this.cg = a };
d.R = function() { return this.Da };
d.ka = function(a, b) { if (b || this.Da != a && this.dispatchEvent(a ? "show" : "hide")) { this.Da = a; var c = this.D();
        c && (uh(c, a), this.le() && Bi(this.rb(), this.Kf && this.Da), b || this.dispatchEvent(this.Da ? "aftershow" : "afterhide")); return !0 } return !1 };
d.isEnabled = function() { return this.Kf };
d.aj = function(a) { this.Kf != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Kf = !0, $h(this, function(a) { a.xr ? delete a.xr : a.aj(!0) })) : ($h(this, function(a) { a.isEnabled() ? a.aj(!1) : a.xr = !0 }), this.kh = this.Kf = !1), this.le() && Bi(this.rb(), a && this.Da)) };
d.le = function() { return this.Mf };
d.re = function(a) { a != this.Mf && this.ra && Xi(this, a);
    this.Mf = a;
    this.Kf && this.Da && Bi(this.rb(), a) };
d.Rb = function(a) {
    (a = T(this, a)) ? a.Cb(!0): -1 < this.oa && T(this, this.oa).Cb(!1) };
d.Cb = function(a) { this.Rb(di(this, a)) };

function Zi(a) { cj(a, function(a, c) { return (a + 1) % c }, ai(a) - 1) }

function $i(a) { cj(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, 0) }

function bj(a) { cj(a, function(a, c) { return (a + 1) % c }, a.oa) }

function aj(a) { cj(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, a.oa) }

function cj(a, b, c) { c = 0 > c ? di(a, a.mb) : c; var e = ai(a);
    c = b.call(a, c, e); for (var f = 0; f <= e;) { var h = T(a, c); if (h && a.Fo(h)) { a.Rb(c); break } f++;
        c = b.call(a, c, e) } } d.Fo = function(a) { return a.R() && a.isEnabled() && !!(a.eb & 2) };

function dj() {} y(dj, Di);
da(dj);
dj.prototype.za = function() { return "goog-menuheader" };

function ej(a, b, c) { V.call(this, a, c || dj.Fd(), b);
    this.dc(1, !1);
    this.dc(2, !1);
    this.dc(4, !1);
    this.dc(32, !1);
    this.ya = 1 } y(ej, V);
yi("goog-menuheader", function() { return new ej(null) });

function fj() { this.Ko = [] } y(fj, Di);
da(fj);

function gj(a, b) { var c = a.Ko[b]; if (!c) { switch (b) {
            case 0:
                c = a.za() + "-highlight"; break;
            case 1:
                c = a.za() + "-checkbox"; break;
            case 2:
                c = a.za() + "-content" } a.Ko[b] = c } return c } d = fj.prototype;
d.Uj = function() { return "menuitem" };
d.M = function(a) { var b = a.Wb().M("DIV", this.ii(a).join(" "), hj(this, a.mc(), a.Wb()));
    ij(this, a, b, !!(a.eb & 8) || !!(a.eb & 16)); return b };
d.Ac = function(a) { return a && a.firstChild };
d.ad = function(a, b) { var c = this.Ac(a),
        e = jj(this, a) ? c.firstChild : null;
    fj.m.ad.call(this, a, b);
    e && !jj(this, a) && c.insertBefore(e, c.firstChild || null) };

function hj(a, b, c) { a = gj(a, 2); return c.M("DIV", a, b) } d.Yq = function(a, b, c) { a && b && ij(this, a, b, c) };
d.Cn = function(a, b, c) { a && b && ij(this, a, b, c) };

function jj(a, b) { return (b = a.Ac(b)) ? (b = b.firstChild, a = gj(a, 1), !!b && ha(b) && 1 == b.nodeType && ti(b, a)) : !1 }

function ij(a, b, c, e) { Hi(a, c, b.dk());
    Ii(a, b, c);
    e != jj(a, c) && (e ? ui(c, "goog-option") : wi(c, "goog-option"), c = a.Ac(c), e ? (a = gj(a, 1), c.insertBefore(b.Wb().M("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild)) } d.Xj = function(a) { switch (a) {
        case 2:
            return gj(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return fj.m.Xj.call(this, a) } };
d.za = function() { return "goog-menuitem" };

function kj(a, b, c, e) { V.call(this, a, e || fj.Fd(), c);
    this.setValue(b) } y(kj, V);
d = kj.prototype;
d.getValue = function() { var a = this.Pm; return null != a ? a : this.Wj() };
d.setValue = function(a) { this.Pm = a };
d.dc = function(a, b) { kj.m.dc.call(this, a, b); switch (a) {
        case 8:
            this.ya & 16 && !b && Ni(this, !1);
            (a = this.D()) && this.ba.Yq(this, a, b); break;
        case 16:
            (a = this.D()) && this.ba.Cn(this, a, b) } };
d.Yq = function(a) { this.dc(8, a) };
d.Cn = function(a) { this.dc(16, a) };
d.Wj = function() { var a = this.mc(); return u(a) ? (a = ta(a, function(a) { return ha(a) && 1 == a.nodeType && (ti(a, "goog-menuitem-accel") || ti(a, "goog-menuitem-mnemonic-separator")) ? "" : Hc(a) }).join(""), Ga(a)) : kj.m.Wj.call(this) };
d.ah = function(a) { var b = this.getParent(); if (b) { var c = b.Gq;
        b.Gq = null; if (c && t(a.clientX) && fc(c, new F(a.clientX, a.clientY))) return } kj.m.ah.call(this, a) };
d.Of = function(a) { return a.keyCode == this.lq && this.df(a) ? !0 : kj.m.Of.call(this, a) };
d.Ct = function() { return this.lq };
yi("goog-menuitem", function() { return new kj(null) });
kj.prototype.dk = function() { return this.eb & 16 ? "menuitemcheckbox" : this.eb & 8 ? "menuitemradio" : kj.m.dk.call(this) };
kj.prototype.getParent = function() { return V.prototype.getParent.call(this) };
kj.prototype.ck = function() { return V.prototype.ck.call(this) };

function lj() {} y(lj, Di);
da(lj);
lj.prototype.M = function(a) { return a.Wb().M("DIV", this.za()) };
lj.prototype.ad = function() {};
lj.prototype.za = function() { return "goog-menuseparator" };

function mj(a, b) { V.call(this, null, a || lj.Fd(), b);
    this.dc(1, !1);
    this.dc(2, !1);
    this.dc(4, !1);
    this.dc(32, !1);
    this.ya = 1 } y(mj, V);
mj.prototype.jb = function() { mj.m.jb.call(this); var a = this.D();
    fi(a, "separator") };
yi("goog-menuseparator", function() { return new mj });

function nj(a) { this.zo = a || "menu" } y(nj, Ai);
da(nj);
nj.prototype.za = function() { return "goog-menu" };
nj.prototype.Bi = function(a) { nj.m.Bi.call(this, a);
    a = a.D();
    U(a, "haspopup", "true") };
yi("goog-menuseparator", function() { return new mj });

function oj(a, b) { Ui.call(this, Vi, b || nj.Fd(), a);
    this.re(!1) } y(oj, Ui);
d = oj.prototype;
d.wj = !0;
d.ps = !1;
d.za = function() { return this.ba.za() };
d.removeItem = function(a) {
    (a = this.removeChild(a, !0)) && a.v() };
d.Gp = function(a) { return T(this, a) };
d.setPosition = function(a, b) { var c = this.R();
    c || uh(this.D(), !0); var e = this.D(),
        f = a;
    a = qh(e);
    f instanceof F && (b = f.y, f = f.x); var h = e.offsetLeft + (f - a.x);
    h instanceof F ? (f = h.x, b = h.y) : (f = h, b = e.offsetTop + (Number(b) - a.y));
    e.style.left = rh(f);
    e.style.top = rh(b);
    c || uh(this.D(), !1) };
d.Ip = function() { return this.R() ? qh(this.D()) : null };
d.ka = function(a, b, c) {
    (b = oj.m.ka.call(this, a, b)) && a && this.ra && this.wj && this.rb().focus();
    this.Gq = a && c && t(c.clientX) ? new F(c.clientX, c.clientY) : null; return b };
d.tm = function(a) { this.wj && this.rb().focus(); return oj.m.tm.call(this, a) };
d.Fo = function(a) { return (this.ps || a.isEnabled()) && a.R() && !!(a.eb & 2) };
d.Of = function(a) { var b = oj.m.Of.call(this, a);
    b || $h(this, function(c) {!b && c.Ct && c.lq == a.keyCode && (this.isEnabled() && this.Cb(c), b = c.Zc(a)) }, this); return b };
d.Rb = function(a) {
    oj.m.Rb.call(this, a);
    if (a = T(this, a)) {
        var b = a.D();
        a = this.D() || sc(document);
        var c = a || sc(document);
        var e = qh(b),
            f = qh(c);
        if (!B || 9 <= Number(sb)) { k = nh(c, "borderLeftWidth"); var h = nh(c, "borderRightWidth");
            l = nh(c, "borderTopWidth");
            m = nh(c, "borderBottomWidth");
            h = new Cg(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k)) } else { var k = yh(c, "borderLeft");
            h = yh(c, "borderRight"); var l = yh(c, "borderTop"),
                m = yh(c, "borderBottom");
            h = new Cg(l, h, m, k) } c == sc(document) ? (k = e.x - c.scrollLeft, e = e.y - c.scrollTop,
            !B || 10 <= Number(sb) || (k += h.left, e += h.top)) : (k = e.x - f.x - h.left, e = e.y - f.y - h.top);
        b = th(b);
        f = c.clientHeight - b.height;
        h = c.scrollLeft;
        l = c.scrollTop;
        h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0));
        l += Math.min(e, Math.max(e - f, 0));
        c = new F(h, l);
        a.scrollLeft = c.x;
        a.scrollTop = c.y
    }
};
I.$ = {};
I.$.Hj = null;
I.$.zp = null;
I.$.show = function(a, b, c) { I.G.show(I.$, c, null); if (b.length) { var e = I.$.Ok(b, c);
        J(e, "action", I.$.Aa);
        I.$.qc(e, a, c);
        setTimeout(function() { e.D().focus() }, 1);
        I.$.Hj = null } else I.$.Aa() };
I.$.Ok = function(a, b) { var c = new oj;
    c.se(b); for (var e = 0, f; f = a[e]; e++) { var h = new kj(f.text);
        h.se(b);
        c.Mh(h, !0);
        h.aj(f.enabled);
        f.enabled && (J(h, "action", f.qb), h.$g = function() { this.dispatchEvent("action") }) } return c };
I.$.qc = function(a, b, c) { var e = I.h.sm();
    b = { top: b.clientY + e.top, bottom: b.clientY + e.top, left: b.clientX + e.left, right: b.clientX + e.left };
    I.$.Wh(a); var f = I.h.Bh.fe(a);
    c && I.h.Bh.xo(e, b, f);
    I.G.fn(e, b, f, c);
    a.D().focus() };
I.$.Wh = function(a) { a.U(I.G.Z); var b = a.D();
    I.h.Sa(b, "blocklyContextMenu");
    I.H(b, "contextmenu", null, I.h.uu);
    a.wj = !0;
    a.re(!0) };
I.$.Aa = function() { I.G.wi(I.$);
    I.$.Hj = null;
    I.$.zp && I.Ba(I.$.zp) };
I.$.Uy = function(a, b) { return function() { I.i.disable(); try { var c = I.C.Pg(b, a.o),
                e = a.ca();
            e.x = a.s ? e.x - I.vc : e.x + I.vc;
            e.y += 2 * I.vc;
            c.moveBy(e.x, e.y) } finally { I.i.enable() } I.i.isEnabled() && !c.Wa && I.i.L(new I.i.sj(c));
        c.select() } };
I.$.us = function(a) { var b = K(a, !1).length,
        c = ge(a);
    c && (b -= K(c, !1).length); return { text: 1 == b ? I.g.DELETE_BLOCK : I.g.DELETE_X_BLOCKS.replace("%1", String(b)), enabled: !0, qb: function() { I.i.O(!0);
            a.v(!0, !0);
            I.i.O(!1) } } };
I.$.ws = function(a) { return { enabled: !(w(a.Qf) ? !a.Qf() : !a.Qf), text: I.g.HELP, qb: function() { var b = w(a.Qf) ? a.Qf() : a.Qf;
            b && window.open(b) } } };
I.$.vs = function(a) { var b = !0;
    K(a, !1).length > Ae(a.o) && (b = !1); return { text: I.g.DUPLICATE_BLOCK, enabled: b, qb: function() { I.wp(a) } } };
I.$.ts = function(a) { var b = { enabled: !B };
    a.Ga ? (b.text = I.g.REMOVE_COMMENT, b.qb = function() { a.Yi(null) }) : (b.text = I.g.ADD_COMMENT, b.qb = function() { a.Yi("") }); return b };
I.$.Js = function(a) { return { text: I.g.Ux, enabled: !0, qb: function() { I.i.O(!0);
            a.v(!0, !0);
            I.i.O(!1) } } };
I.$.Ks = function(a) { return { text: I.g.Aw, enabled: !0, qb: function() { I.wp(a) } } };
I.$.wz = function(a, b) { var c = { enabled: !0 };
    c.text = I.g.zv;
    c.qb = function() { var c = new Kf(a, I.g.Ky, 100, 100); if (!a.Cm)
            for (var f = a.u; f;) { if (-1 != (" " + (f.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) { a.Cm = f; break } f = f.parentNode } f = a.Cm.getBoundingClientRect();
        f = new F(b.clientX - f.left, b.clientY - f.top); var h = I.h.$j(a.Ca);
        f = hc(f, h).scale(1 / a.scale);
        c.moveBy(f.x, f.y);
        a.N && (c.ie(), c.U(!1), c.select()) }; return c };

function S(a, b, c) { this.u = I.h.A("g", {}, null);
    this.u.ye = "";
    this.gj = I.h.A("path", { "class": "blocklyPathDark", transform: "translate(1,1)" }, this.u);
    this.bd = I.h.A("path", { "class": "blocklyPath" }, this.u);
    this.rf = I.h.A("path", { "class": "blocklyPathLight" }, this.u);
    this.bd.Hc = this;
    this.N = !1;
    this.Sd = I.h.We() && !!a.cb;
    I.B.Ef(this.bd);
    S.m.constructor.call(this, a, b, c);
    this.u.dataset && (this.u.dataset.id = this.id) } y(S, ze);
d = S.prototype;
d.height = 0;
d.width = 0;
d.tc = null;
d.ie = function() { for (var a = 0, b; b = this.aa[a]; a++) b.ea();
    b = Cf(this); for (a = 0; a < b.length; a++) Te(b[a]);
    this.Ae();
    Lf(this);
    this.o.options.readOnly || this.gm || I.H(this.P(), "mousedown", this, this.oe);
    this.gm = !0;
    this.P().parentNode || this.o.Ca.appendChild(this.P()) };
d.select = function() { if (this.Wa && this.getParent()) this.getParent().select();
    else if (I.selected != this) { var a = null; if (I.selected) { a = I.selected.id;
            I.i.disable(); try { I.selected.ze() } finally { I.i.enable() } } a = new L(null, "selected", a, this.id);
        a.gc = this.o.id;
        I.i.L(a);
        I.selected = this;
        this.Jg() } };
d.ze = function() { if (I.selected == this) { var a = new L(null, "selected", this.id, null);
        a.gc = this.o.id;
        I.i.L(a);
        I.selected = null;
        this.gg() } };
d.me = null;
d.Ga = null;
d.Kc = null;

function Cf(a) { var b = [];
    a.me && b.push(a.me);
    a.Ga && b.push(a.Ga);
    a.Kc && b.push(a.Kc); return b } d.mg = function(a) { var b = this.cf; if (a != b) { Lg();
        S.m.mg.call(this, a);
        Mg(); var c = this.P(); if (!this.o.Em && c) { var e = this.ca();
            a ? (a.P().appendChild(c), a = this.ca(), uf(this, a.x - e.x, a.y - e.y)) : b && I.selected != this && (this.o.Ca.appendChild(c), this.translate(e.x, e.y)) } } };
d.ca = function() { var a = 0,
        b = 0,
        c = this.Sd ? this.o.cb.Yb() : null,
        e = this.P(); if (e) { do { var f = I.h.Zb(e);
            a += f.x;
            b += f.y;
            this.Sd && this.o.cb.zd.firstChild == e && (f = this.o.cb.ek(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.Ca && e != c) } return new F(a, b) };
d.moveBy = function(a, b) { var c = I.i.isEnabled(); if (c) var e = new I.i.Fh(this); var f = this.ca();
    this.translate(f.x + a, f.y + b);
    uf(this, a, b);
    c && (e.pe(), I.i.L(e));
    Nf(this.o) };
d.translate = function(a, b) { this.P().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.Gk = function() { if (this.Sd) { var a = this.ca();
        I.h.removeAttribute(this.P(), "transform");
        this.o.cb.xe(a.x, a.y);
        Of(this.o.cb, this.P()) } };
d.oq = function(a) { this.Sd && (this.translate(a.x, a.y), this.o.cb.Qh(this.o.Ca)) };
d.Fk = function(a) { this.Sd ? this.o.cb.xe(a.x, a.y) : (this.u.ye = "translate(" + a.x + "," + a.y + ")", this.u.setAttribute("transform", this.u.ye + this.u.og)) };

function dh(a) { if (a.o && !a.o.tb() && !a.getParent() && !a.nc) { var b = a.o.Yc; if (b && b.Zu) { var c = b.Nn,
                e = c / 2,
                f = a.ca();
            b = Math.round((f.x - e) / c) * c + e - f.x;
            c = Math.round((f.y - e) / c) * c + e - f.y;
            b = Math.round(b);
            c = Math.round(c);
            0 == b && 0 == c || a.moveBy(b, c) } } } d.lm = function() { var a = this.ca(),
        b = this.T ? R : 0,
        c = this.kb(); if (this.s) { var e = new F(a.x - (c.width - b), a.y);
        a = new F(a.x + b, a.y + c.height) } else e = new F(a.x - b, a.y), a = new F(a.x + c.width - b, a.y + c.height); return { Ic: e, dd: a } };
d.ig = function(a) { if (this.xd != a) { for (var b = [], c = 0, e; e = this.aa[c]; c++) b.push.apply(b, e.ka(!a)); if (a) { e = Cf(this); for (c = 0; c < e.length; c++) e[c].ka(!1);
            c = this.toString(I.Br);
            Jh(Qh(this, "_TEMP_COLLAPSED_INPUT"), c).ea() } else this.on("_TEMP_COLLAPSED_INPUT"), this.cl(null);
        S.m.ig.call(this, a);
        b.length || (b[0] = this); if (this.N)
            for (c = 0; a = b[c]; c++) a.U() } };
d.Vn = function(a, b) { for (var c = [], e = 0, f; f = this.aa[e]; e++) { for (var h = 0, k; k = f.Ma[h]; h++) k instanceof pj && c.push(k);
        f.connection && (f = P(f.connection)) && c.push(f) } a = c.indexOf(a); - 1 == a && (a = b ? -1 : c.length);
    (c = c[b ? a + 1 : a - 1]) ? c instanceof zh ? c.qf() : c.Vn(null, b): (c = this.getParent()) && c.Vn(this, b) };
d.oe = function(a) { var b = this.o && this.o.Ed(a);
    b && (fg(b, this), b.pc = a) };
d.wh = function(a) {
    if (!this.o.options.readOnly && this.contextMenu) {
        var b = this,
            c = [];
        if (this.Lb() && this.Kd() && !b.nc) {
            c.push(I.$.vs(b));
            We(this) && !this.xd && this.o.options.Ls && c.push(I.$.ts(b));
            if (!this.xd)
                for (var e = 1; e < this.aa.length; e++)
                    if (this.aa[e - 1].type != I.Ta && this.aa[e].type != I.Ta) { e = { enabled: !0 }; var f = lh(this);
                        e.text = f ? I.g.EXTERNAL_INPUTS : I.g.INLINE_INPUTS;
                        e.qb = function() { b.kg(!f) };
                        c.push(e); break } this.o.options.collapse && (this.xd ? (e = { enabled: !0 }, e.text = I.g.EXPAND_BLOCK, e.qb = function() { b.ig(!1) },
                c.push(e)) : (e = { enabled: !0 }, e.text = I.g.COLLAPSE_BLOCK, e.qb = function() { b.ig(!0) }, c.push(e)));
            this.o.options.disable && (e = { text: this.disabled ? I.g.ENABLE_BLOCK : I.g.DISABLE_BLOCK, enabled: !Oh(this), qb: function() { b.mf(!b.disabled) } }, c.push(e));
            c.push(I.$.us(b))
        }
        c.push(I.$.ws(b));
        this.Zs && this.Zs(c);
        I.$.show(a, c, this.s);
        I.$.Hj = this
    }
};

function uf(a, b, c) { if (a.N) { for (var e = a.Dd(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
        e = Cf(a); for (f = 0; f < e.length; f++) Ue(e[f]); for (f = 0; f < a.Yd.length; f++) uf(a.Yd[f], b, c) } }
d.nf = function(a) { if (a) { var b = this.P();
        b.ye = "";
        b.og = "";
        I.Qj = I.Qj.concat(this.Dd(!0));
        I.h.Sa(this.u, "blocklyDragging") } else I.Qj = [], I.h.ub(this.u, "blocklyDragging"); for (b = 0; b < this.Yd.length; b++) this.Yd[b].nf(a) };
d.lg = function(a) { S.m.lg.call(this, a);
    Lf(this) };
d.Dn = function(a) { S.m.Dn.call(this, a);
    a = Cf(this); for (var b = 0; b < a.length; b++) a[b].Be() };
d.Hn = function(a) { S.m.Hn.call(this, a);
    this.Ae() };
d.P = function() { return this.u };
d.v = function(a, b) { if (this.o) { I.B.Aa();
        Lg(); var c = this.o; if (I.selected == this) { this.ze(); var e = this.o;
            e.hb && e.hb.cancel() } I.$.Hj == this && I.$.Aa();
        b && this.N && (Qe(this, a), I.xa.jt(this));
        this.N = !1; if (this.tc) { for (var f in this.tc) clearTimeout(this.tc[f]);
            this.tc = null } I.i.disable(); try { var h = Cf(this); for (b = 0; b < h.length; b++) h[b].v() } finally { I.i.enable() } S.m.v.call(this, a);
        H(this.u);
        Nf(c);
        this.gj = this.rf = this.bd = this.u = null;
        Mg() } };
d.Ae = function() { if (!this.disabled) { var a = this.yd,
            b = qj(a); if (this.Wa) b = rj([255, 255, 255], b, .6), a = sj(b), this.rf.style.display = "none", this.gj.setAttribute("fill", a);
        else { this.rf.style.display = ""; var c = sj(rj([255, 255, 255], b, .3));
            b = sj(rj([0, 0, 0], b, .2));
            this.rf.setAttribute("stroke", c);
            this.gj.setAttribute("fill", b) } this.bd.setAttribute("fill", a);
        a = Cf(this); for (c = 0; c < a.length; c++) a[c].Ae(); for (a = 0; c = this.aa[a]; a++) { b = 0; for (var e; e = c.Ma[b]; b++) e.ei() } } };

function zf(a) { a.disabled || Oh(a) ? I.h.Sa(a.u, "blocklyDisabled") && a.bd.setAttribute("fill", "url(#" + a.o.options.Zh + ")") : I.h.ub(a.u, "blocklyDisabled") && a.Ae();
    a = a.Ne(!1); for (var b = 0, c; c = a[b]; b++) zf(c) } d.Ep = function() { return this.Ga ? this.Ga.sb().replace(/\s+$/, "").replace(/ +\n/g, "\n") : "" };
d.Yi = function(a) { var b = !1;
    q(a) ? (this.Ga || (this.Ga = new Ve(this), b = !0), this.Ga.wb(a)) : this.Ga && (this.Ga.v(), b = !0);
    b && this.N && (this.U(), this.Tb()) };
d.cl = function(a, b) {
    this.tc || (this.tc = Object.create(null));
    var c = b || "";
    if (c) this.tc[c] && (clearTimeout(this.tc[c]), delete this.tc[c]);
    else
        for (var e in this.tc) clearTimeout(this.tc[e]), delete this.tc[e];
    if (this.o.tb()) { var f = this;
        this.tc[c] = setTimeout(function() { f.o && (delete f.tc[c], f.cl(a, c)) }, 100) } else {
        this.nc && (a = null);
        b = Nh(this);
        for (e = null; b;) b.isCollapsed() && (e = b), b = Nh(b);
        e && e.cl(a, "collapsed " + this.id + " " + c);
        b = !1;
        q(a) ? (this.Kc || (this.Kc = new Xe(this), b = !0), this.Kc.wb(a, c)) : this.Kc && !c ? (this.Kc.v(),
            b = !0) : this.Kc && (b = this.Kc.sb(), this.Kc.wb("", c), (e = this.Kc.sb()) || this.Kc.v(), b = b != e);
        b && this.N && (this.U(), this.Tb())
    }
};
d.Xq = function(a) { this.me && this.me !== a && this.me.v();
    a && (a.K = this, this.me = a, Te(a)) };
d.mf = function(a) { this.disabled != a && (S.m.mf.call(this, a), this.N && zf(this)) };
d.Cb = function(a) { this.N && (a ? (this.bd.setAttribute("filter", "url(#" + this.o.options.yp + ")"), this.rf.style.display = "none") : (I.h.removeAttribute(this.bd, "filter"), delete this.rf.style.display)) };
d.Jg = function() { I.h.Sa(this.u, "blocklySelected") };
d.gg = function() { I.h.ub(this.u, "blocklySelected") };
d.$i = function(a) { a ? I.h.Sa(this.u, "blocklyDraggingDelete") : I.h.ub(this.u, "blocklyDraggingDelete") };
d.lf = function(a) { S.m.lf.call(this, a);
    this.N && this.Ae() };

function If(a) { do { var b = a.P();
        b.parentNode.appendChild(b);
        a = a.getParent() } while (a) } d.al = function(a, b) { S.m.al.call(this, a, b);
    this.N && (this.U(), this.Tb()) };
d.Yk = function(a, b) { S.m.Yk.call(this, a, b);
    this.N && (this.U(), this.Tb()) };
d.Zk = function(a, b) { S.m.Zk.call(this, a, b);
    this.N && (this.U(), this.Tb()) };
d.kg = function(a) { S.m.kg.call(this, a);
    this.N && (this.U(), this.Tb()) };
d.on = function(a, b) { S.m.on.call(this, a, b);
    this.N && (this.U(), this.Tb()) };
d.Df = function(a, b) { a = S.m.Df.call(this, a, b);
    this.N && (this.U(), this.Tb()); return a };
d.Dd = function(a) { var b = []; if (a || this.N)
        if (this.T && b.push(this.T), this.W && b.push(this.W), this.S && b.push(this.S), a || !this.xd) { a = 0; for (var c; c = this.aa[a]; a++) c.connection && b.push(c.connection) } return b };
d.Li = function(a) { return new of (this, a) };
d.Tb = function() { if (this.o && !this.o.tb()) { var a = qf(this); if (!a.nc)
            for (var b = this.Dd(!1), c = 0, e; e = b[c]; c++) { e.isConnected() && df(e) && P(e).Tb(); for (var f = e.rq(I.vc), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || qf(k.w) != a && (df(e) ? af(k, e) : af(e, k)) } } };

function Jf(a) { var b = I.i.Yb();
    setTimeout(function() { I.i.O(b);
        dh(a);
        I.i.O(!1) }, I.rj / 2);
    setTimeout(function() { I.i.O(b);
        a.Tb();
        I.i.O(!1) }, I.rj) };
var R = 8,
    tj = 7.5 * (1 - Math.SQRT1_2) + .5,
    uj = 8.5 * (1 - Math.SQRT1_2) - .5,
    vf = "v 5 c 0,10 -" + R + ",-8 -" + R + ",7.5 s " + R + ",-2.5 " + R + ",7.5",
    vj = "v 6.5 m -" + .97 * R + ",3 q -" + .05 * R + ",10 " + .3 * R + ",9.5 m " + .67 * R + ",-1.9 v 1.4",
    wj = "m " + tj + "," + tj,
    xj = "a 8,8 0 0,0 " + (-uj - .5) + "," + (8 - uj),
    yj = "a 8.5,8.5 0 0,0 " + (8 - uj) + "," + (uj + .5);
S.prototype.kb = function() { var a = this.height,
        b = this.width,
        c = ge(this);
    c ? (c = c.kb(), a += c.height - 4, b = Math.max(b, c.width)) : this.S || this.T || (a += 2); return { height: a, width: b } };
S.prototype.U = function(a) {
    Lg();
    this.N = !0;
    var b = 10;
    this.s && (b = -b);
    for (var c = Cf(this), e = 0; e < c.length; e++) { var f = c[e]; if (f.Oo && f.K.isCollapsed()) f.ac.setAttribute("display", "none");
        else { f.ac.setAttribute("display", "block"); var h = f.wl;
            f.K.s && (b -= h);
            f.ac.setAttribute("transform", "translate(" + b + ",5)");
            Ue(f);
            b = f.K.s ? b - 10 : b + (h + 10) } }
    var k = b += this.s ? 10 : -10,
        l = this.aa;
    c = [];
    c.pb = k + 20;
    if (this.W || this.S) c.pb = Math.max(c.pb, 40);
    f = e = 0;
    for (var m = h = !1, n = !1, p = void 0, r = lh(this) && !this.isCollapsed(), C = 0, v; v = l[C]; C++)
        if (v.R()) {
            if (r &&
                p && p != I.Ta && v.type != I.Ta) var x = c[c.length - 1];
            else p = v.type, x = [], x.type = r && v.type != I.Ta ? -1 : v.type, x.height = 0, c.push(x);
            x.push(v);
            v.gf = 25;
            v.zb = r && v.type == I.ab ? R + 12.5 : 0;
            if (v.connection && v.connection.isConnected()) { var ra = P(v.connection).kb();
                v.gf = Math.max(v.gf, ra.height);
                v.zb = Math.max(v.zb, ra.width) } r || C != l.length - 1 ? !r && v.type == I.ab && l[C + 1] && l[C + 1].type == I.Ta && v.gf-- : v.gf--;
            x.height = Math.max(x.height, v.gf);
            v.hd = 0;
            1 == c.length && (v.hd += this.s ? -k : k);
            ra = !1;
            for (var xc = 0, Ca; Ca = v.Ma[xc]; xc++) {
                0 != xc && (v.hd +=
                    10);
                var fd = Ca.fe();
                Ca.zb = fd.width;
                Ca.Qk = ra && Ca.zf ? 10 : 0;
                v.hd += Ca.zb + Ca.Qk;
                x.height = Math.max(x.height, fd.height);
                ra = Ca.zf
            } - 1 != x.type && (x.type == I.Ta ? (m = !0, f = Math.max(f, v.hd)) : (x.type == I.ab ? h = !0 : x.type == I.Ud && (n = !0), e = Math.max(e, v.hd)))
        } for (k = 0; x = c[k]; k++)
        if (x.pr = !1, -1 == x.type)
            for (l = 0; v = x[l]; l++)
                if (v.type == I.ab) { x.height += 10;
                    x.pr = !0; break } c.il = 20 + f;
    m && (c.pb = Math.max(c.pb, c.il + 30));
    h ? c.pb = Math.max(c.pb, e + 20 + R) : n && (c.pb = Math.max(c.pb, e + 20));
    c.Xt = h;
    c.gz = m;
    c.fz = n;
    f = b;
    this.jr = !1;
    this.height = 0;
    this.T ? this.On =
        this.fl = !0 : (this.On = this.fl = !1, this.W && (b = P(this.W)) && ge(b) == this && (this.fl = !0), ge(this) && (this.On = !0));
    h = [];
    m = [];
    b = [];
    e = [];
    n = c.pb;
    this.fl ? (h.push("m 0,0"), b.push("m 0.5,0.5"), this.jr && (h.push("c 30,-15 70,-15 100,0"), b.push(this.s ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (h.push("m 0,8"), b.push(this.s ? wj : "m 0.5,7.5"), h.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.W && (h.push("H", 15), b.push("H", 15), h.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"),
        sf(this.W, this.s ? -30 : 30, 0));
    h.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    for (v = n = 0; x = c[v]; v++) {
        p = 10;
        0 == v && (p += this.s ? -f : f);
        b.push("M", c.pb - .5 + "," + (n + .5));
        if (this.isCollapsed()) k = x[0], r = n, zj(this, k.Ma, p, r), h.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), k = x.height - 20, h.push("v", k), this.s && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", k - .7)), this.width += 15;
        else if (-1 == x.type) {
            for (l = 0; k = x[l]; l++) r = n, x.pr && (r += 5), p = zj(this, k.Ma, p, r), k.type != I.Ud && (p += k.zb + 10), k.type == I.ab && (m.push("M", p -
                10 + "," + (n + 5)), m.push("h", R - 2 - k.zb), m.push(vf), m.push("v", k.gf + 1 - 20), m.push("h", k.zb + 2 - R), m.push("z"), this.s ? (e.push("M", p - 10 - 2.5 + R - k.zb + "," + (n + 5 + .5)), e.push(vj), e.push("v", k.gf - 20 + 2.5), e.push("h", k.zb - R + 2)) : (e.push("M", p - 10 + .5 + "," + (n + 5 + .5)), e.push("v", k.gf + 1), e.push("h", R - 2 - k.zb), e.push("M", p - k.zb - 10 + .9 + "," + (n + 5 + 20 - .7)), e.push("l", .46 * R + ",-2.1")), r = this.s ? -p - R + 10 + k.zb + 1 : p + R - 10 - k.zb - 1, C = n + 5 + 1, sf(k.connection, r, C));
            p = Math.max(p, c.pb);
            this.width = Math.max(this.width, p);
            h.push("H", p);
            b.push("H", p - .5);
            h.push("v", x.height);
            this.s && b.push("v", x.height - 1)
        } else x.type == I.ab ? (k = x[0], r = n, k.align != I.Eh && (l = c.pb - k.hd - R - 20, k.align == I.Ag ? p += l : k.align == I.pj && (p += l / 2)), zj(this, k.Ma, p, r), h.push(vf), l = x.height - 20, h.push("v", l), this.s ? (b.push(vj), b.push("v", l + .5)) : (b.push("M", c.pb - 5 + "," + (n + 20 - .7)), b.push("l", .46 * R + ",-2.1")), r = this.s ? -c.pb - 1 : c.pb + 1, sf(k.connection, r, n), k.connection.isConnected() && (this.width = Math.max(this.width, c.pb + P(k.connection).kb().width - R + 1))) : x.type == I.Ud ? (k = x[0], r = n, k.align != I.Eh && (l =
            c.pb - k.hd - 20, c.Xt && (l -= R), k.align == I.Ag ? p += l : k.align == I.pj && (p += l / 2)), zj(this, k.Ma, p, r), h.push("v", x.height), this.s && b.push("v", x.height - 1)) : x.type == I.Ta && (k = x[0], 0 == v && (h.push("v", 10), this.s && b.push("v", 9), n += 10), r = n, k.align != I.Eh && (l = c.il - k.hd - 20, k.align == I.Ag ? p += l : k.align == I.pj && (p += l / 2)), zj(this, k.Ma, p, r), p = c.il + 30, h.push("H", p), h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), h.push("v", x.height - 16), h.push("a 8,8 0 0,0 8,8"), h.push("H", c.pb), this.s ? (b.push("M", p - 30 + uj + "," + (n + uj)), b.push(xj),
            b.push("v", x.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) : (b.push("M", p - 30 + uj + "," + (n + x.height - uj)), b.push(yj)), b.push("H", c.pb - .5), r = this.s ? -p : p + 1, sf(k.connection, r, n + 1), k.connection.isConnected() && (this.width = Math.max(this.width, c.il + P(k.connection).kb().width)), v == c.length - 1 || c[v + 1].type == I.Ta) && (h.push("v", 10), this.s && b.push("v", 9), n += 10);
        n += x.height
    }
    c.length || (n = 25, h.push("V", n), this.s && b.push("V", n - 1));
    c = n;
    this.height += c + 1;
    this.S && (h.push("H", 30 + (this.s ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), sf(this.S,
        this.s ? -30 : 30, c + 1), this.height += 4);
    this.On ? (h.push("H 0"), this.s || b.push("M", "0.5," + (c - .5))) : (h.push("H", 8), h.push("a", "8,8 0 0,1 -8,-8"), this.s || (b.push("M", tj + "," + (c - tj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
    this.T ? (sf(this.T, 0, 0), h.push("V", 20), h.push("c 0,-10 -" + R + ",8 -" + R + ",-7.5 s " + R + ",2.5 " + R + ",-7.5"), this.s ? (b.push("M", -.25 * R + ",8.4"), b.push("l", -.45 * R + ",-2.1")) : (b.push("V", 18.5), b.push("m", -.92 * R + ",-0.5 q " + -.19 * R + ",-5.5 0,-11"), b.push("m", .92 * R + ",1 V 0.5 H 1")), this.width += R) : this.s ||
        (this.fl ? b.push("V", .5) : b.push("V", 8));
    h.push("z");
    c = h.join(" ") + "\n" + m.join(" ");
    this.bd.setAttribute("d", c);
    this.gj.setAttribute("d", c);
    c = b.join(" ") + "\n" + e.join(" ");
    this.rf.setAttribute("d", c);
    this.s && (this.bd.setAttribute("transform", "scale(-1 1)"), this.rf.setAttribute("transform", "scale(-1 1)"), this.gj.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    c = this.ca();
    this.W && rf(this.W, c);
    this.T && rf(this.T, c);
    for (b = 0; b < this.aa.length; b++)
        if (e = this.aa[b].connection) rf(e, c), e.isConnected() &&
            tf(e);
    this.S && (rf(this.S, c), this.S.isConnected() && tf(this.S));
    !1 !== a && ((a = this.getParent()) ? a.U(!0) : Nf(this.o));
    Mg()
};

function zj(a, b, c, e) { e += 5;
    a.s && (c = -c); for (var f = 0, h; h = b[f]; f++) { var k = h.P();
        k && (a.s ? (c -= h.Qk + h.zb, k.setAttribute("transform", "translate(" + c + "," + e + ")"), h.zb && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + h.Qk) + "," + e + ")"), h.zb && (c += h.Qk + h.zb + 10))) } return a.s ? -c : c };
I.g = {};

function pj(a, b) { pj.m.constructor.call(this, a, b) } y(pj, zh);
pj.X = function(a) { var b = I.h.Qb(a.text);
    b = new pj(b, a["class"]); "boolean" === typeof a.spellcheck && (b.dr = a.spellcheck); return b };
var Aj = null;
d = pj.prototype;
d.uj = "text";
d.dr = !0;
d.v = function() { I.G.wi(this);
    pj.m.v.call(this) };
d.setValue = function(a) { if (null !== a) { if (this.w) { var b = Oe(this, a);
            null !== b && (a = b) } zh.prototype.setValue.call(this, a) } };
d.wb = function(a) { null !== a && (a = String(a), a !== this.pa && (this.w && I.i.isEnabled() && I.i.L(new I.i.hc(this.w, "field", this.name, this.pa, a)), zh.prototype.wb.call(this, a))) };
d.qf = function(a) { this.j = this.w.o;
    a = a || !1; if (!a && (hb || jb || lb)) Bj(this);
    else { I.G.show(this, this.w.s, Cj(this)); var b = I.G.Z,
            c = G("INPUT", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.dr); var e = 11 * this.j.scale + "pt";
        b.style.fontSize = e;
        c.style.fontSize = e;
        Aj = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.pa;
        c.wq = null;
        Dj(this);
        this.Sk();
        a || (c.focus(), c.select());
        c.Cu = I.H(c, "keydown", this, this.Bu);
        c.Fu = I.H(c, "keyup", this, this.zq);
        c.Eu = I.H(c, "keypress", this, this.zq);
        c.Fq = this.Sk.bind(this);
        this.j.Pc(c.Fq) } };

function Bj(a) { I.prompt(I.g.CHANGE_VALUE_TITLE, a.pa, function(b) { a.w && (b = Oe(a, b));
        a.setValue(b) }) } d.Bu = function(a) { var b = Aj;
    13 == a.keyCode ? I.G.Aa() : 27 == a.keyCode ? (b.value = b.defaultValue, I.G.Aa()) : 9 == a.keyCode && (I.G.Aa(), this.w.Vn(this, !a.shiftKey), a.preventDefault()) };
d.zq = function() { var a = Aj,
        b = a.value;
    b !== a.wq ? (a.wq = b, this.setValue(b), Dj(this)) : E && this.w.U();
    this.Sk();
    I.tg(this.w.o) };

function Dj(a) { var b = !0,
        c = Aj;
    a.w && (b = Oe(a, c.value));
    null === b ? I.h.Sa(c, "blocklyInvalidInput") : I.h.ub(c, "blocklyInvalidInput") } d.Sk = function() { var a = I.G.Z,
        b = Gh(this);
    a.style.width = b.right - b.left + "px";
    a.style.height = b.bottom - b.top + "px";
    b = new F(this.w.s ? b.right - a.offsetWidth : b.left, b.top);
    b.y += 1;
    D && I.G.Z.style.top && (--b.x, --b.y);
    E && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px" };

function Cj(a) { return function() { var b = Aj,
            c = Aj,
            e = c.value;
        a.w && (e = Oe(a, e), null === e ? e = c.defaultValue : a.Au && a.Au(e));
        a.wb(e);
        a.w.N && a.w.U();
        I.Ba(b.Cu);
        I.Ba(b.Fu);
        I.Ba(b.Eu);
        a.j.ff(b.Fq);
        Aj = null;
        I.i.O(!1);
        b = I.G.Z.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = "" } } Bh("field_input", pj);

function Ej(a, b) { this.Un = I.h.A("tspan", {}, null);
    this.Un.appendChild(document.createTextNode("\u00b0"));
    a = a && !isNaN(a) ? String(a) : "0";
    Ej.m.constructor.call(this, a, b) } y(Ej, pj);
Ej.X = function(a) { return new Ej(a.angle) };
d = Ej.prototype;
d.Od = function() { this.Da ? (this.sa.textContent = Eh(this), this.w.s ? this.sa.insertBefore(this.Un, this.sa.firstChild) : this.sa.appendChild(this.Un), this.nj()) : this.ma.width = 0 };
d.Ng = function() { var a = this; return function() { Ej.m.Ng.call(a)();
        a.gi = null;
        a.Mo && I.Ba(a.Mo);
        a.pq && I.Ba(a.pq);
        a.qq && I.Ba(a.qq) } };
d.qf = function() {
    Ej.m.qf.call(this, hb || jb || lb);
    var a = I.G.Z;
    if (a.firstChild) {
        a = I.h.A("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:html": "http://www.w3.org/1999/xhtml", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", height: "100px", width: "100px" }, a);
        var b = I.h.A("circle", { cx: 50, cy: 50, r: 49, "class": "blocklyAngleCircle" }, a);
        this.gi = I.h.A("path", { "class": "blocklyAngleGauge" }, a);
        this.gq = I.h.A("line", { x1: 50, y1: 50, "class": "blocklyAngleLine" }, a);
        for (var c = 0; 360 > c; c += 15) I.h.A("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ? 10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        this.Mo = I.jc(a, "click", this, I.G.Aa);
        this.pq = I.jc(b, "mousemove", this, this.Eq);
        this.qq = I.jc(this.gi, "mousemove", this, this.Eq);
        Fj(this)
    }
};
d.Eq = function(a) { var b = this.gi.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = Oe(this, b), Aj.value = b, this.setValue(b), Dj(this), this.Sk()) };
d.wb = function(a) { Ej.m.wb.call(this, a);
    this.sa && (Fj(this), this.ma.width = 0) };

function Fj(a) { if (a.gi) { var b = Number(a.sb()) + 0;
        b = ec(b); var c = ["M ", 50, ",", 50],
            e = 50,
            f = 50; if (!isNaN(b)) { var h = ec(0),
                k = 49 * Math.cos(h),
                l = -49 * Math.sin(h);
            e += 49 * Math.cos(b);
            f -= 49 * Math.sin(b);
            c.push(" l ", k, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - h) / Math.PI) % 2), " ", Number(!1), " ", e, ",", f, " z") } a.gi.setAttribute("d", c.join(""));
        a.gq.setAttribute("x2", e);
        a.gq.setAttribute("y2", f) } }
d.Ll = function(a) { if (null === a) return null;
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    a %= 360;
    0 > a && (a += 360);
    360 < a && (a -= 360); return String(a) };
Bh("field_angle", Ej);

function Gj(a, b) { Gj.m.constructor.call(this, "", b);
    this.setValue(a) } y(Gj, zh);
Gj.X = function(a) { return new Gj(a.checked ? "TRUE" : "FALSE") };
d = Gj.prototype;
d.uj = "default";
d.ea = function() { this.Ia || (Gj.m.ea.call(this), this.zj = I.h.A("text", { "class": "blocklyText blocklyCheckbox", x: -3, y: 14 }, this.Ia), this.zj.appendChild(document.createTextNode("\u2713")), this.zj.style.display = this.ya ? "block" : "none") };
d.getValue = function() { return String(this.ya).toUpperCase() };
d.setValue = function(a) { a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
    this.ya !== a && (this.w && I.i.isEnabled() && I.i.L(new I.i.hc(this.w, "field", this.name, this.ya, a)), this.ya = a, this.zj && (this.zj.style.display = a ? "block" : "none")) };
d.qf = function() { var a = !this.ya;
    this.w && (a = Oe(this, a));
    null !== a && this.setValue(String(a).toUpperCase()) };
Bh("field_checkbox", Gj);
var Hj = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function Ij(a) { var b = {};
    a = String(a); var c = "#" == a.charAt(0) ? a : "#" + a; if (Jj.test(c)) return b.wm = Kj(c), b.type = "hex", b;
    a: { var e = a.match(Lj); if (e) { c = Number(e[1]); var f = Number(e[2]);
            e = Number(e[3]); if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) { c = [c, f, e]; break a } } c = [] }
    if (c.length) return b.wm = sj(c), b.type = "rgb", b; if (Hj && (c = Hj[a.toLowerCase()])) return b.wm = c, b.type = "named", b; throw Error(a + " is not a valid color string"); }
var Mj = /#(.)(.)(.)/;

function Kj(a) { if (!Jj.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Mj, "#$1$1$2$2$3$3")); return a.toLowerCase() }

function qj(a) { a = Kj(a); return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)] }

function sj(a) { var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a); if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = Nj(b.toString(16));
    c = Nj(c.toString(16));
    a = Nj(a.toString(16)); return "#" + b + c + a }
var Jj = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Lj = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function Nj(a) { return 1 == a.length ? "0" + a : a }

function rj(a, b, c) { c = Math.min(Math.max(c, 0), 1); return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])] };

function Oj(a, b, c, e, f) { this.Ec = !!b;
    this.node = null;
    this.ue = 0;
    this.lr = !1;
    this.To = !c;
    a && this.setPosition(a, e);
    this.depth = void 0 != f ? f : this.ue || 0;
    this.Ec && (this.depth *= -1) } y(Oj, Kc);
Oj.prototype.setPosition = function(a, b, c) { if (this.node = a) this.ue = t(b) ? b : 1 != this.node.nodeType ? 0 : this.Ec ? -1 : 1;
    t(c) && (this.depth = c) };
Oj.prototype.clone = function() { return new Oj(this.node, this.Ec, !this.To, this.ue, this.depth) };
Oj.prototype.next = function() { if (this.lr) { if (!this.node || this.To && 0 == this.depth) throw Jc; var a = this.node; var b = this.Ec ? -1 : 1; if (this.ue == b) { var c = this.Ec ? a.lastChild : a.firstChild;
            c ? this.setPosition(c) : this.setPosition(a, -1 * b) } else(c = this.Ec ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
        this.depth += this.ue * (this.Ec ? -1 : 1) } else this.lr = !0;
    a = this.node; if (!this.node) throw Jc; return a };
Oj.prototype.splice = function(a) { var b = this.node,
        c = this.Ec ? 1 : -1;
    this.ue == c && (this.ue = -1 * c, this.depth += this.ue * (this.Ec ? -1 : 1));
    this.Ec = !this.Ec;
    Oj.prototype.next.call(this);
    this.Ec = !this.Ec;
    c = fa(arguments[0]) ? arguments[0] : arguments; for (var e = c.length - 1; 0 <= e; e--) yc(c[e], b);
    H(b) };

function Pj(a, b, c, e) { Oj.call(this, a, b, c, null, e) } y(Pj, Oj);
Pj.prototype.next = function() { do Pj.m.next.call(this); while (-1 == this.ue); return this.node };

function Qj() {} y(Qj, Di);
da(Qj);
var Rj = 0;
Qj.prototype.M = function(a) { var b = this.ii(a);
    a = a.Wb().M("DIV", b, Sj(this, a.mc(), a.fe(), a.Wb()));
    fi(a, "grid"); return a };

function Sj(a, b, c, e) { for (var f = [], h = 0, k = 0; h < c.height; h++) { for (var l = [], m = 0; m < c.width; m++) { var n = b && b[k++];
            l.push(Tj(a, n, e)) } f.push(Uj(a, l, e)) } return a.Vo(f, e) } Qj.prototype.Vo = function(a, b) { a = b.M("TABLE", this.za() + "-table", b.M("TBODY", this.za() + "-body", a));
    a.cellSpacing = "0";
    a.cellPadding = "0"; return a };

function Uj(a, b, c) { a = c.M("TR", a.za() + "-row", b);
    fi(a, "row"); return a }

function Tj(a, b, c) { a = c.M("TD", { "class": a.za() + "-cell", id: a.za() + "-cell-" + Rj++ }, b);
    fi(a, "gridcell");
    U(a, "selected", !1); if (!Fc(a) && !gi(a, "label")) { var e;
        b = new Pj(a); for (c = ""; !c && (e = Mc(b));) 1 == e.nodeType && (c = gi(e, "label") || e.title);
        (e = c) && U(a, "label", e) } return a }
Qj.prototype.ad = function(a, b) { if (a) { var c = nc(this.za() + "-body", a)[0]; if (c) { var e = 0;
            z(c.rows, function(a) { z(a.cells, function(a) { wc(a); if (b) { var c = b[e++];
                        c && a.appendChild(c) } }) }); if (e < b.length) { for (var f = [], h = kc(a), k = c.rows[0].cells.length; e < b.length;) { var l = b[e++];
                    f.push(Tj(this, l, h));
                    f.length == k && (l = Uj(this, f, h), c.appendChild(l), f.length = 0) } if (0 < f.length) { for (; f.length < k;) f.push(Tj(this, "", h));
                    l = Uj(this, f, h);
                    c.appendChild(l) } } } wh(a, !0, D) } };

function Vj(a, b, c) { for (b = b.D(); c && 1 == c.nodeType && c != b;) { if ("TD" == c.tagName && ti(c, a.za() + "-cell")) return c.firstChild;
        c = c.parentNode } return null } Qj.prototype.za = function() { return "goog-palette" };

function Wj(a) { Ag.call(this);
    this.gh = [];
    Xj(this, a) } y(Wj, Ag);
d = Wj.prototype;
d.Ya = null;
d.yn = null;
d.Gp = function(a) { return this.gh[a] || null };

function Xj(a, b) { b && (z(b, function(a) { this.Xi(a, !1) }, a), Aa(a.gh, b)) } d.removeItem = function(a) { a && xa(this.gh, a) && a == this.Ya && (this.Ya = null, this.dispatchEvent("select")) };
d.Gd = function() { return this.Ya };
d.Fc = function(a) { a != this.Ya && (this.Xi(this.Ya, !1), this.Ya = a, this.Xi(a, !0));
    this.dispatchEvent("select") };
d.li = function() { var a = this.Ya; return a ? qa(this.gh, a) : -1 };
d.bj = function(a) { this.Fc(this.Gp(a)) };
d.clear = function() { var a = this.gh; if (!u(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.Ya = null };
d.Ha = function() { Wj.m.Ha.call(this);
    delete this.gh;
    this.Ya = null };
d.Xi = function(a, b) { a && ("function" == typeof this.yn ? this.yn(a, b) : "function" == typeof a.Fn && a.Fn(b)) };

function Yj(a, b, c) { V.call(this, a, b || Qj.Fd(), c);
    this.El &= -89;
    this.Xh = new Zj;
    this.Xh.$k(this);
    this.Im = -1 } y(Yj, V);
d = Yj.prototype;
d.ma = null;
d.oa = -1;
d.Bb = null;
d.Ha = function() { Yj.m.Ha.call(this);
    this.Bb && (this.Bb.v(), this.Bb = null);
    this.ma = null;
    this.Xh.v() };
d.Vk = function(a) { Yj.m.Vk.call(this, a);
    ak(this);
    this.Bb ? (this.Bb.clear(), Xj(this.Bb, a)) : (this.Bb = new Wj(a), a = na(this.Xi, this), this.Bb.yn = a, Yh(this).ga(this.Bb, "select", this.Qt));
    this.oa = -1 };
d.Wj = function() { return "" };
d.si = function(a) { Yj.m.si.call(this, a); var b = Vj(this.ba, this, a.target);
    b && a.relatedTarget && zc(b, a.relatedTarget) || b != bk(this) && ck(this, b) };
d.ge = function(a) { Yj.m.ge.call(this, a);
    this.ya & 4 && (a = Vj(this.ba, this, a.target), a != bk(this) && ck(this, a)) };
d.df = function(a) { var b = bk(this); return b ? (a && (this.Gd() ? "mouseup" != a.type || Vj(this.ba, this, a.target) : 1) && this.Fc(b), Yj.m.df.call(this, a)) : !1 };
d.Zc = function(a) {
    var b = this.mc();
    b = b ? b.length : 0;
    var c = this.ma.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.keyCode || 32 == a.keyCode) return this.df(a);
    if (36 == a.keyCode) return this.Rb(0), !0;
    if (35 == a.keyCode) return this.Rb(b - 1), !0;
    var e = 0 > this.oa ? this.li() : this.oa;
    switch (a.keyCode) {
        case 37:
            if (-1 == e || 0 == e) e = b;
            this.Rb(e - 1);
            a.preventDefault();
            return !0;
        case 39:
            return e == b - 1 && (e = -1), this.Rb(e + 1), a.preventDefault(), !0;
        case 38:
            -1 == e && (e = b + c - 1);
            if (e >= c) return this.Rb(e - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 ==
                e && (e = -c), e < b - c) return this.Rb(e + c), a.preventDefault(), !0
    }
    return !1
};
d.Qt = function() {};
d.fe = function() { return this.ma };
d.bl = function(a) { if (this.D()) throw Error("Component already rendered");
    this.ma = t(a) ? new jc(a, void 0) : a;
    ak(this) };

function bk(a) { var b = a.mc(); return b && b[a.oa] } d.Rb = function(a) { a != this.oa && (dk(this, this.oa, !1), this.Im = this.oa, this.oa = a, dk(this, a, !0), this.dispatchEvent("a")) };

function ck(a, b) { var c = a.mc();
    a.Rb(c && b ? qa(c, b) : -1) } d.li = function() { return this.Bb ? this.Bb.li() : -1 };
d.Gd = function() { return this.Bb ? this.Bb.Gd() : null };
d.bj = function(a) { this.Bb && this.Bb.bj(a) };
d.Fc = function(a) { this.Bb && this.Bb.Fc(a) };

function dk(a, b, c) { if (a.D()) { var e = a.mc(); if (e && 0 <= b && b < e.length) { var f = (f = bk(a)) ? f.parentNode : null;
            a.Xh.D() != f && (a.Xh.J = f);
            f = a.Xh;
            f.Cb(c);!!(f.ya & 2) == c && (f = a.ba, b = e[b]) && (b = b ? b.parentNode : null, e = f.za() + "-cell-hover", c ? ui(b, e) : wi(b, e), c ? U(a.J, "activedescendant", b.id) : b.id == gi(a.J, "activedescendant") && a.J.removeAttribute("aria-activedescendant")) } } }
d.Cb = function(a) { a && -1 == this.oa ? this.Rb(-1 < this.Im ? this.Im : 0) : a || this.Rb(-1);
    Yj.m.Cb.call(this, a) };
d.Xi = function(a, b) { if (this.D() && a) { a = a.parentNode; var c = this.ba.za() + "-cell-selected";
        b ? ui(a, c) : wi(a, c);
        U(a, "selected", b) } };

function ak(a) { var b = a.mc(); if (b)
        if (a.ma && a.ma.width) { if (b = Math.ceil(b.length / a.ma.width), !t(a.ma.height) || a.ma.height < b) a.ma.height = b } else b = Math.ceil(Math.sqrt(b.length)), a.ma = new jc(b, b);
    else a.ma = new jc(0, 0) }

function Zj() { V.call(this, null);
    this.rg |= 2 } y(Zj, V);

function ek(a, b, c) { this.Cj = a || [];
    Yj.call(this, null, b || Qj.Fd(), c);
    this.Uk(this.Cj) } y(ek, Yj);
d = ek.prototype;
d.Ik = null;
d.yk = null;
d.Uk = function(a) { this.Cj = a;
    this.Ik = this.yk = null;
    this.ad(fk(this)) };
d.pm = function() { var a = this.Gd(); if (a) { var b = a.style[Ua()]; if ("undefined" !== typeof b) a = b;
        else { b = a.style; var c = mh["background-color"]; if (!c) { var e = Ua();
                c = e;
                void 0 === a.style[e] && (e = (E ? "Webkit" : D ? "Moz" : B ? "ms" : fb ? "O" : null) + Va(e), void 0 !== a.style[e] && (c = e));
                mh["background-color"] = c } a = b[c] || "" } return gk(a) } return null };
d.Gn = function(a) { a = gk(a);
    this.Ik || (this.Ik = ta(this.Cj, function(a) { return gk(a) }));
    this.bj(a ? qa(this.Ik, a) : -1) };

function fk(a) { return ta(a.Cj, function(a, c) { var b = this.Wb().M("DIV", { "class": this.ba.za() + "-colorswatch", style: "background-color:" + a });
        b.title = this.yk && this.yk[c] ? this.yk[c] : "#" == a.charAt(0) ? "RGB (" + qj(a).join(", ") + ")" : a; return b }, a) }

function gk(a) { if (a) try { return Ij(a).wm } catch (b) {}
    return null };

function hk(a, b) { Vh.call(this, a);
    this.Fa = b || null;
    Yh(this).ga(this, "action", this.wu) } y(hk, Vh);
d = hk.prototype;
d.Mf = !0;
d.Uk = function(a) { this.Fa ? this.Fa.Uk(a) : ik(this, a) };
d.bl = function(a) { this.Fa || ik(this, []);
    this.Fa.bl(a) };
d.fe = function() { return this.Fa ? this.Fa.fe() : null };
d.li = function() { return this.Fa ? this.Fa.li() : -1 };
d.bj = function(a) { this.Fa && this.Fa.bj(a) };
d.pm = function() { return this.Fa ? this.Fa.pm() : null };
d.Gn = function(a) { this.Fa && this.Fa.Gn(a) };
d.le = function() { return this.Mf };
d.re = function(a) { this.Mf = a;
    this.Fa && this.Fa.dc(32, a) };
d.jb = function() { hk.m.jb.call(this);
    this.Fa && this.Fa.U(this.D());
    this.D().unselectable = "on" };
d.Ha = function() { hk.m.Ha.call(this);
    this.Fa && (this.Fa.v(), this.Fa = null) };
d.focus = function() { this.Fa && this.Fa.D().focus() };
d.wu = function(a) { a.stopPropagation();
    this.dispatchEvent("change") };

function ik(a, b) { b = new ek(b, null, a.Wb());
    b.bl(5);
    b.dc(32, a.Mf);
    a.Mh(b);
    a.Fa = b;
    a.ra && a.Fa.U(a.D()) }
var jk = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function kk(a, b) { kk.m.constructor.call(this, a, b);
    this.wb("\u00a0\u00a0\u00a0") }
var lk;
y(kk, zh);
kk.X = function(a) { return new kk(a.colour) };
d = kk.prototype;
d.Is = null;
d.Po = 0;
d.ea = function() { kk.m.ea.call(this);
    this.Sc.style.fillOpacity = 1;
    this.setValue(this.getValue()) };
d.uj = "default";
d.v = function() { I.G.wi(this);
    kk.m.v.call(this) };
d.getValue = function() { return this.yd };
d.setValue = function(a) { this.w && I.i.isEnabled() && this.yd != a && I.i.L(new I.i.hc(this.w, "field", this.name, this.yd, a));
    this.yd = a;
    this.Sc && (this.Sc.style.fill = a) };
d.sb = function() { var a = this.yd,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]); return a };
d.setColumns = function(a) { this.Po = a; return this };
d.qf = function() { I.G.show(this, this.w.s, mk); var a = I.h.sm(),
        b = Gh(this),
        c = this.Wh(),
        e = sh(c.D());
    I.G.fn(a, b, e, this.w.s); var f = this;
    lk = J(c, "change", function(a) { a = a.target.pm() || "#000000";
        I.G.Aa();
        f.w && (a = Oe(f, a));
        null !== a && f.setValue(a) }) };
d.Wh = function() { var a = new hk;
    a.bl(this.Po || 7);
    a.Uk(this.Is || jk);
    a.U(I.G.Z);
    a.Gn(this.getValue()); return a };

function mk() { lk && Pd(lk);
    I.i.O(!1) } Bh("field_colour", kk);

function Ph(a, b) {
    w(a) || nk(a);
    this.Xf = a;
    this.Sn = this.hn = null;
    a = this.Xf;
    if (u(a)) {
        for (var c = !1, e = 0; e < a.length; e++) { var f = a[e][0]; "string" == typeof f ? a[e][0] = I.h.Qb(f) : (null != f.alt && (a[e][0].alt = I.h.Qb(f.alt)), c = !0) }
        if (!(c || 2 > a.length)) {
            f = [];
            for (e = 0; e < a.length; e++) f.push(a[e][0]);
            var h = I.h.Jn(f);
            e = I.h.Ms(f, h);
            c = I.h.Ns(f, h);
            if ((e || c) && !(h <= e + c)) {
                e && (this.hn = f[0].substring(0, e - 1));
                c && (this.Sn = f[0].substr(1 - c));
                f = [];
                for (h = 0; h < a.length; h++) { var k = a[h][0],
                        l = a[h][1];
                    k = k.substring(e, k.length - c);
                    f[h] = [k, l] } this.Xf =
                    f
            }
        }
    }
    a = this.getOptions()[0];
    Ph.m.constructor.call(this, a[1], b)
}
y(Ph, zh);
Ph.X = function(a) { return new Ph(a.options) };
var ok = jb ? "\u25bc" : "\u25be";
d = Ph.prototype;
d.uj = "default";
d.xb = "";
d.ld = null;
d.Jd = null;
d.ea = function() { this.Ia || (this.Ge = I.h.A("tspan", {}, null), this.Ge.appendChild(document.createTextNode(this.w.s ? ok + " " : " " + ok)), Ph.m.ea.call(this)) };
d.qf = function() { I.G.show(this, this.w.s, null); var a = new oj;
    a.se(this.w.s); for (var b = this.getOptions(), c = 0; c < b.length; c++) { var e = b[c][0],
            f = b[c][1]; if ("object" == typeof e) { var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h } e = new kj(e);
        e.se(this.w.s);
        e.setValue(f);
        e.Cn(!0);
        a.Mh(e, !0);
        Ni(e, f == this.xb) } pk(this, a);
    qk(a);
    rk(a);
    b = I.h.sm();
    c = Gh(this);
    this.w.s ? c.right += 25 : c.left -= 25;
    this.Wh(a);
    f = I.h.Bh.fe(a);
    300 < f.height && (f.height = 300);
    this.w.s && I.h.Bh.xo(b, c, f);
    I.G.fn(b, c, f, this.w.s);
    a.D().focus() };

function pk(a, b) { J(b, "action", function(b) {
        (b = b.target) && a.Aq(b);
        I.G.wi(a);
        I.i.O(!1) }) }

function qk(a) { Yh(a).ga(a.D(), "touchstart", function(a) { Yi(this, a.target).ge(a) }) }

function rk(a) { Yh(a).ga(a.D(), "touchend", function(a) { Yi(this, a.target).df(a) }) } d.Wh = function(a) { a.U(I.G.Z);
    I.h.Sa(a.D(), "blocklyDropdownMenu");
    a.wj = !0;
    a.re(!0) };
d.Aq = function(a) { a = a.getValue();
    this.w && (a = Oe(this, a));
    null !== a && this.setValue(a) };
d.getOptions = function() { if (w(this.Xf)) { var a = this.Xf.call(this);
        nk(a); return a } return this.Xf };
d.getValue = function() { return this.xb };
d.setValue = function(a) { if (null !== a && a !== this.xb) { this.w && I.i.isEnabled() && I.i.L(new I.i.hc(this.w, "field", this.name, this.xb, a));
        this.xb = a; for (var b = this.getOptions(), c = 0; c < b.length; c++)
            if (b[c][1] == a) { a = b[c][0]; "object" == typeof a ? (this.Jd = a, this.pa = a.alt) : (this.Jd = null, this.pa = a);
                this.ei(); return } this.pa = a;
        this.ei() } };
d.Od = function() {
    if (this.Da) {
        this.w && this.Ge && (this.Ge.style.fill = this.w.yd);
        wc(this.sa);
        H(this.ld);
        this.ld = null;
        if (this.Jd) {
            this.ld = I.h.A("image", { y: 5, height: this.Jd.height + "px", width: this.Jd.width + "px" }, this.Ia);
            this.ld.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.Jd.src);
            this.sa.appendChild(this.Ge);
            var a = Fh(this.Ge);
            this.ma.height = Number(this.Jd.height) + 19;
            this.ma.width = Number(this.Jd.width) + a;
            this.w.s ? (this.ld.setAttribute("x", a), this.sa.setAttribute("x", -1)) : (this.sa.setAttribute("text-anchor",
                "end"), this.sa.setAttribute("x", this.ma.width + 1))
        } else a = document.createTextNode(Eh(this)), this.sa.appendChild(a), this.w.s ? this.sa.insertBefore(this.Ge, this.sa.firstChild) : this.sa.appendChild(this.Ge), this.sa.setAttribute("text-anchor", "start"), this.sa.setAttribute("x", 0), this.ma.height = 25, this.ma.width = Fh(this.sa);
        this.Sc.setAttribute("height", this.ma.height - 9);
        this.Sc.setAttribute("width", this.ma.width + 10)
    } else this.ma.width = 0
};
d.nj = function() { if (this.Jd && (B || gb)) { var a = Fh(this.Ge);
        a = Number(this.Jd.width) + a + 10;
        this.Sc && this.Sc.setAttribute("width", a);
        this.ma.width = a } else zh.prototype.nj.call(this) };
d.v = function() { I.G.wi(this);
    Ph.m.v.call(this) };

function nk(a) {
    if (!u(a)) throw "FieldDropdown options must be an array.";
    for (var b = !1, c = 0; c < a.length; ++c) {
        var e = a[c];
        u(a) ? q(e[1]) ? q(e[0]) || q(e[0].src) || (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must have a string label or image description. Found" + e[0] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must be an array. Found: ",
            e))
    }
    if (b) throw "Found invalid FieldDropdown options.";
}
Bh("field_dropdown", Ph);

function sk(a, b, c, e, f) { this.w = null;
    this.wa = Number(c);
    this.Y = Number(b);
    this.ma = new jc(this.Y, this.wa + 10);
    this.pa = e || "";
    this.setValue(a); "function" == typeof f && (this.Nl = f) } y(sk, zh);
sk.X = function(a) { var b = I.h.Qb(a.src),
        c = Number(I.h.Qb(a.width)),
        e = Number(I.h.Qb(a.height));
    a = I.h.Qb(a.alt); return new sk(b, c, e, a) };
d = sk.prototype;
d.zf = !1;
d.ea = function() { this.Ia || (this.Ia = I.h.A("g", {}, null), this.Da || (this.Ia.style.display = "none"), this.ld = I.h.A("image", { height: this.wa + "px", width: this.Y + "px" }, this.Ia), this.setValue(this.er), this.w.P().appendChild(this.Ia), this.te(this.w), I.B.Ef(this.ld), this.Nl && (this.Ek = I.H(this.Ia, "mousedown", this, this.oe))) };
d.v = function() { H(this.Ia);
    this.ld = this.Ia = null };
d.te = function(a) { this.ld.Hc = a };
d.getValue = function() { return this.er };
d.setValue = function(a) { null !== a && (this.er = a, this.ld && this.ld.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a || "")) };
d.wb = function(a) { null !== a && (this.pa = a) };
d.Od = function() {};
d.ei = function() {};
d.nj = function() {};
d.qf = function() { this.Nl && this.Nl(this) };
Bh("field_image", sk);

function tk(a, b, c, e, f) { a = a && !isNaN(a) ? String(a) : "0";
    tk.m.constructor.call(this, a, f);
    a = parseFloat(e);
    this.gn = isNaN(a) ? 0 : a;
    b = parseFloat(b);
    this.ou = isNaN(b) ? -Infinity : b;
    c = parseFloat(c);
    this.nu = isNaN(c) ? Infinity : c;
    this.setValue(Oe(this, this.getValue())) } y(tk, pj);
tk.X = function(a) { return new tk(a.value, a.min, a.max, a.precision) };
tk.prototype.Ll = function(a) { if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    this.gn && isFinite(a) && (a = Math.round(a / this.gn) * this.gn);
    a = Math.min(Math.max(a, this.ou), this.nu); return String(a) };
Bh("field_number", tk);

function uk(a, b, c, e) { this.Xf = vk;
    this.ma = new jc(0, 25);
    this.ml = b;
    this.at = a || "";
    a = e || ""; if (null == c || void 0 == c) c = null;
    else if (Array.isArray(c)) { b = !1; for (e = 0; e < c.length; e++) c[e] == a && (b = !0); if (!b) throw Error("Invalid default type '" + a + "' in the definition of a FieldVariable"); } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    this.$s = a;
    this.ov = c;
    this.xb = null } y(uk, Ph);
uk.X = function(a) { var b = I.h.Qb(a.variable); return new uk(b, null, a.variableTypes, a.defaultType) };
d = uk.prototype;
d.ea = function() { this.Ia || (uk.m.ea.call(this), this.Uf()) };
d.Uf = function() { if (!this.sd) { this.j = this.w.o; var a = I.I.Hp(this.j, null, this.at, this.$s);
        I.i.disable(); try { this.setValue(a.ia()) } finally { I.i.enable() } } };
d.v = function() { uk.m.v.call(this);
    this.va = this.j = null };
d.In = function(a) { uk.m.In.call(this, a) };
d.getValue = function() { return this.sd ? this.sd.ia() : null };
d.sb = function() { return this.sd ? this.sd.name : "" };
d.jd = function() { return this.sd };
d.setValue = function(a) { var b = I.I.jd(this.w.o, a); if (!b) throw Error("Variable id doesn't point to a real variable!  ID was " + a); var c = b.type,
        e;
    a: if (e = wk(this)) { for (var f = 0; f < e.length; f++)
            if (c == e[f]) { e = !0; break a } e = !1 } else e = !0; if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
    this.w && I.i.isEnabled() && (c = this.sd ? this.sd.ia() : null, I.i.L(new I.i.hc(this.w, "field", this.name, c, a)));
    this.sd = b;
    this.xb = a;
    this.wb(b.name) };

function wk(a) { var b = a.ov; if (null === b && a.w) return a.w.o.qm();
    b = b || [""]; if (0 == b.length) throw a = a.sb(), Error("'variableTypes' of field variable " + a + " was an empty list"); return b }

function vk() { if (!this.sd) throw Error("Tried to call dropdownCreate on a variable field with no variable selected."); var a = this.sb(),
        b = null;
    this.w && (b = this.w.o); var c = []; if (b)
        for (var e = wk(this), f = 0; f < e.length; f++) c = c.concat(b.ni(e[f]));
    c.sort(Fg);
    b = []; for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].ia()];
    b.push([I.g.RENAME_VARIABLE, I.po]);
    I.g.DELETE_VARIABLE && b.push([I.g.DELETE_VARIABLE.replace("%1", a), I.ho]); return b }
d.Aq = function(a) { a = a.getValue(); if (this.w && this.w.o) { var b = this.w.o; if (a == I.po) { I.I.pn(b, this.sd); return } if (a == I.ho) { b.If(this.sd.ia()); return } } this.setValue(a) };
d.qh = function() { return !0 };
Bh("field_variable", uk);

function Mh() {} Mh.prototype.qo = null;

function xk() { var a = I.lo,
        b = W;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = I.Xg()); var c = [];
    a.ea(b);
    b = M(b, !0); for (var e = 0, f; f = b[e]; e++) f = yk(a, f), u(f) && (f = f[0]), f && c.push(f);
    c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n"); return c = c.replace(/[ \t]+\n/g, "\n") }

function yk(a, b) { if (!b) return ""; if (b.disabled) return yk(a, ge(b)); var c = a[b.type].call(b, b); if (u(c)) return [c[0], c[1]]; if (q(c)) return b = b.id.replace(/\$/g, "$$$$"), a.qo && (c = a.qo.replace(/%1/g, "'" + b + "'") + c), c; if (null === c) return "" } Mh.prototype.ea = function() {};
Mh.prototype.finish = function(a) { return a };
I.Ua = {};
I.Ua.Rr = I.oo;
I.Ua.ls = function(a) { a = le(a); for (var b = [], c = [], e = 0; e < a.length; e++)
        if (a[e].Yg) { var f = a[e].Yg();
            f && (f[2] ? b.push(f) : c.push(f)) } c.sort(I.Ua.Mq);
    b.sort(I.Ua.Mq); return [c, b] };
I.Ua.Mq = function(a, b) { return a[0].toLowerCase().localeCompare(b[0].toLowerCase()) };
I.Ua.ut = function(a, b) { if (b.nc) return a; for (; !I.Ua.cu(a, b.o, b);) { var c = a.match(/^(.*?)(\d+)$/);
        a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2" } return a };
I.Ua.cu = function(a, b, c) { return !I.Ua.eu(a, b, c) };
I.Ua.eu = function(a, b, c) { b = le(b); for (var e = 0; e < b.length; e++)
        if (b[e] != c && b[e].Yg && b[e].Yg()[0].toLowerCase() == a.toLowerCase()) return !0; return !1 };
I.Ua.pz = function(a) { a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""); var b = I.Ua.ut(a, this.w),
        c = this.pa; if (c != a && c != b) { a = le(this.w.o); for (var e = 0; e < a.length; e++) a[e].Su && a[e].Su(c, b) } return b };
I.Ua.Me = function(a) {
    function b(a, b) { for (var e = 0; e < a.length; e++) { var f = a[e][0],
                h = a[e][1],
                k = G("block");
            k.setAttribute("type", b);
            k.setAttribute("gap", 16); var r = G("mutation");
            r.setAttribute("name", f);
            k.appendChild(r); for (f = 0; f < h.length; f++) { var C = G("arg");
                C.setAttribute("name", h[f]);
                r.appendChild(C) } c.push(k) } }
    var c = [];
    if (I.$a.procedures_defnoreturn) {
        var e = G("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap", 16);
        var f = G("field", null, I.g.PROCEDURES_DEFNORETURN_PROCEDURE);
        f.setAttribute("name",
            "NAME");
        e.appendChild(f);
        c.push(e)
    }
    I.$a.procedures_defreturn && (e = G("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = G("field", null, I.g.PROCEDURES_DEFRETURN_PROCEDURE), f.setAttribute("name", "NAME"), e.appendChild(f), c.push(e));
    I.$a.procedures_ifreturn && (e = G("block"), e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), c.push(e));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = I.Ua.ls(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};
I.Ua.zt = function(a, b) { var c = [];
    b = le(b); for (var e = 0; e < b.length; e++)
        if (b[e].Dt) { var f = b[e].Dt();
            f && f.toLowerCase() == a.toLowerCase() && c.push(b[e]) } return c };
I.Ua.lz = function(a) { var b = I.i.Pb,
        c = a.Yg()[0],
        e = a.Nb(!0);
    a = I.Ua.zt(c, a.o);
    c = 0; for (var f; f = a[c]; c++) { var h = f.Nb();
        h = h && I.C.Wc(h);
        f.Vc(e); var k = f.Nb();
        k = k && I.C.Wc(k);
        h != k && (I.i.Pb = !1, I.i.L(new I.i.hc(f, "mutation", null, h, k)), I.i.Pb = b) } };
I.Ua.ez = function(a, b) { b = M(b, !1); for (var c = 0; c < b.length; c++)
        if (b[c].Yg) { var e = b[c].Yg(); if (e && e[0].toLowerCase() == a.toLowerCase()) return b[c] } return null };

function zk(a, b, c, e) { this.j = a;
    this.na = b;
    this.pa = c.getAttribute("text");
    this.qc = new F(0, 0);
    this.Wf = e;
    this.Kl = null;
    a = c.getAttribute("callbackKey");
    this.Wf && a ? console.warn("Labels should not have callbacks. Label text: " + this.pa) : this.Wf || a && hh(b, a) ? this.Kl = hh(b, a) : console.warn("Buttons should have callbacks. Button text: " + this.pa);
    this.Yo = c.getAttribute("web-class") || null } d = zk.prototype;
d.width = 0;
d.height = 0;
d.lh = null;
d.M = function() {
    var a = this.Wf ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.Yo && (a += " " + this.Yo);
    this.u = I.h.A("g", { "class": a }, this.j.Ca);
    if (!this.Wf) var b = I.h.A("rect", { "class": "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 }, this.u);
    a = I.h.A("rect", { "class": this.Wf ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground", rx: 4, ry: 4 }, this.u);
    var c = I.h.A("text", { "class": this.Wf ? "blocklyFlyoutLabelText" : "blocklyText", x: 0, y: 0, "text-anchor": "middle" }, this.u);
    c.textContent = this.pa;
    this.width = Fh(c);
    this.height = 20;
    this.Wf || (this.width += 10, b.setAttribute("width", this.width), b.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height", this.height);
    c.setAttribute("x", this.width / 2);
    c.setAttribute("y", this.height - 5);
    Ak(this);
    I.H(this.u, "mouseup", this, this.Nu);
    return this.u
};
d.show = function() { Ak(this);
    this.u.setAttribute("display", "block") };

function Ak(a) { a.u.setAttribute("transform", "translate(" + a.qc.x + "," + a.qc.y + ")") }
d.moveTo = function(a, b) { this.qc.x = a;
    this.qc.y = b;
    Ak(this) };
d.Ip = function() { return this.qc };
d.v = function() { this.lh && I.Ba(this.lh);
    this.u && (H(this.u), this.u = null);
    this.na = this.j = null };
d.Nu = function(a) {
    (a = this.na.Ed(a)) && a.cancel();
    this.Kl && this.Kl(this) };

function Bk(a) { a.Va = this.ee.bind(this);
    a.pf = this.Xk.bind(this);
    this.j = new Ug(a);
    this.j.ke = !0;
    this.s = !!a.s;
    this.ve = a.ua;
    this.fm = [];
    this.Dk = [];
    this.Ph = [];
    this.cc = [];
    this.cn = [] } d = Bk.prototype;
d.Kg = !0;
d.Ii = !1;
d.Ff = !0;
d.ha = 8;
d.Nc = Bk.prototype.ha;
d.Gr = 3 * Bk.prototype.Nc;
d.Hr = 3 * Bk.prototype.Nc;
d.Af = 2;
d.Y = 0;
d.wa = 0;
d.up = 70;
d.M = function(a) { this.u = I.h.A(a, { "class": "blocklyFlyout", style: "display: none" }, null);
    this.Gc = I.h.A("path", { "class": "blocklyFlyoutBackground" }, this.u);
    this.u.appendChild(this.j.M()); return this.u };
d.ea = function(a) { this.na = a;
    this.j.ug = a;
    this.Ab = new ng(this.j, this.kd, !1, "blocklyFlyoutScrollbar");
    this.Aa();
    Array.prototype.push.apply(this.fm, I.H(this.u, "wheel", this, this.yr));
    this.Kg || (this.Rj = this.hm.bind(this), this.na.Pc(this.Rj));
    Array.prototype.push.apply(this.fm, I.H(this.Gc, "mousedown", this, this.oe));
    this.j.Ed = this.na.Ed.bind(this.na);
    this.j.va = this.na.va;
    a = this.j;
    a.ph = new ke(a) };
d.v = function() { this.Aa();
    I.Ba(this.fm);
    this.Rj && (this.na.ff(this.Rj), this.Rj = null);
    this.Ab && (this.Ab.v(), this.Ab = null);
    this.j && (this.j.ug = null, this.j.v(), this.j = null);
    this.u && (H(this.u), this.u = null);
    this.na = this.Gc = null };
d.Bc = function() { return this.Y };
d.Wg = function() { return this.wa };
d.oi = function() { return this.j };
d.R = function() { return this.Ii };
d.ka = function(a) { var b = a != this.R();
    this.Ii = a;
    b && this.mj() };
d.jg = function(a) { var b = a != this.Ff;
    this.Ff = a;
    b && this.mj() };
d.mj = function() { var a = this.Ff ? this.R() : !1;
    this.u.style.display = a ? "block" : "none";
    this.Ab.jg(a) };

function Ck(a, b, c, e, f) { a.u.setAttribute("width", b);
    a.u.setAttribute("height", c); "svg" == a.u.tagName ? I.h.Zi(a.u, "translate(" + e + "px," + f + "px)") : a.u.setAttribute("transform", "translate(" + e + "," + f + ")");
    a.Ab && (a.Ab.Zm = new F(e, f), a.Ab.resize()) } d.Aa = function() { if (this.R()) { this.ka(!1); for (var a = 0, b; b = this.cc[a]; a++) I.Ba(b);
        this.cc.length = 0;
        this.ef && (this.j.ff(this.ef), this.ef = null) } };
d.show = function(a) {
    this.j.vb(!1);
    this.Aa();
    Dk(this);
    "string" == typeof a && (a = ih(this.j.ug, a)(this.j.ug));
    this.ka(!0);
    for (var b = [], c = [], e = this.cn.length = 0, f; f = a[e]; e++)
        if (f.tagName) {
            var h = f.tagName.toUpperCase(),
                k = this.kd ? this.Gr : this.Hr;
            if ("BLOCK" == h) h = I.C.Pg(f, this.j), h.disabled && this.cn.push(h), b.push({ type: "block", block: h }), f = parseInt(f.getAttribute("gap"), 10), c.push(isNaN(f) ? k : f);
            else if ("SEP" == f.tagName.toUpperCase()) f = parseInt(f.getAttribute("gap"), 10), !isNaN(f) && 0 < c.length ? c[c.length - 1] = f : c.push(k);
            else if ("BUTTON" == h || "LABEL" == h) f = new zk(this.j, this.na, f, "LABEL" == h), b.push({ type: "button", button: f }), c.push(k)
        } this.eq(b, c);
    this.cc.push(I.H(this.Gc, "mouseover", this, function() { for (var a = M(this.j, !1), b = 0, c; c = a[b]; b++) c.gg() }));
    this.kd ? this.wa = 0 : this.Y = 0;
    this.j.vb(!0);
    this.nn();
    this.hm();
    this.position();
    this.ef = this.nn.bind(this);
    this.j.Pc(this.ef)
};

function Dk(a) { for (var b = M(a.j, !1), c = 0, e; e = b[c]; c++) e.o == a.j && e.v(!1, !1); for (c = 0; c < a.Dk.length; c++)(b = a.Dk[c]) && H(b); for (c = a.Dk.length = 0; b = a.Ph[c]; c++) b.v();
    a.Ph.length = 0;
    a.j.ph.clear() }

function Ek(a, b, c, e) { a.cc.push(I.H(b, "mousedown", null, Fk(a, c)));
    a.cc.push(I.H(e, "mousedown", null, Fk(a, c)));
    a.cc.push(I.jc(b, "mouseover", c, c.Jg));
    a.cc.push(I.jc(b, "mouseout", c, c.gg));
    a.cc.push(I.jc(e, "mouseover", c, c.Jg));
    a.cc.push(I.jc(e, "mouseout", c, c.gg)) }

function Fk(a, b) { return function(c) { var e = a.na.Ed(c);
        e && (fg(e, b), e.F || (e.F = a), e.Qa || (e.Qa = a.oi()), e.pc = c, e.$h(c)) } } d.oe = function(a) { var b = this.na.Ed(a);
    b && (b.F || (b.F = this), b.Qa || (b.Qa = this.oi()), b.pc = a, b.$h(a)) };

function ag(a, b) { var c = null;
    I.i.disable(); var e = a.na.ce();
    a.na.vb(!1); try { var f = a.na; if (!b.P()) throw "oldBlock is not rendered."; var h = I.C.He(b);
        f.vb(!1); var k = I.C.Pg(h, f); if (!k.P()) throw "block is not rendered."; var l = I.h.$j(f.Ca),
            m = I.h.$j(a.j.Ca),
            n = b.ca().scale(a.j.scale),
            p = hc(ic(m, n), l).scale(1 / f.scale);
        k.moveBy(p.x, p.y);
        c = k;
        I.yb() } finally { I.i.enable() } b = I.I.Dp(a.na, e); if (I.i.isEnabled())
        for (I.i.O(!0), I.i.L(new Vd(c)), e = 0; e < b.length; e++) I.i.L(new Zd(b[e]));
    a.Kg ? a.Aa() : a.hm(); return c }

function Gk(a, b, c, e) { var f = b.M();
    b.moveTo(c, e);
    b.show();
    a.cc.push(I.H(f, "mousedown", a, a.oe));
    a.Ph.push(b) }

function Hk(a, b, c, e, f, h) { c = I.h.A("rect", { "fill-opacity": 0, x: c, y: e, height: f.height, width: f.width }, null);
    c.Hc = b;
    I.B.Ef(c);
    a.j.Ca.insertBefore(c, b.P());
    b.Sj = c; return a.Dk[h] = c }

function Ik(a, b, c) { var e = c.kb();
    b.setAttribute("width", e.width);
    b.setAttribute("height", e.height); var f = c.jr ? 15 : 0;
    f && c.moveBy(0, f);
    f = c.T ? R : 0;
    c = c.ca();
    b.setAttribute("y", c.y);
    b.setAttribute("x", a.s ? c.x - e.width + f : c.x - f) }
d.hm = function() { for (var a = Ae(this.na), b = M(this.j, !1), c = 0, e; e = b[c]; c++)
        if (-1 == this.cn.indexOf(e)) { var f = K(e, !1);
            e.mf(f.length > a) } };
d.nn = function() { this.ef && this.j.ff(this.ef);
    this.Qq();
    this.ef && this.j.Pc(this.ef) };

function Zf(a) { return a.Ab ? a.Ab.R() : !1 };

function $g(a) { a.Va = this.ee.bind(this);
    a.pf = this.Xk.bind(this);
    $g.m.constructor.call(this, a);
    this.kd = !0 } y($g, Bk);
d = $g.prototype;
d.ee = function() { if (!this.R()) return null; try { var a = this.j.Ca.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.Af,
        c = this.Af;
    this.ve == I.Bf && (b = 0); var e = this.wa;
    this.ve == I.Fe && (e -= this.Af); return { Oa: e, qa: this.Y - 2 * this.Af, Ub: (a.height + 2 * this.Nc) * this.j.scale, lc: (a.width + 2 * this.Nc) * this.j.scale, Td: -this.j.scrollY, fb: -this.j.scrollX, kc: a.y, xc: a.x, bb: b, Ra: c } };
d.Xk = function(a) { var b = this.ee();
    b && (t(a.x) && (this.j.scrollX = -b.lc * a.x), this.j.translate(this.j.scrollX + b.Ra, this.j.scrollY + b.bb)) };
d.position = function() { if (this.R()) { var a = this.na.Va(); if (a) { this.Y = a.qa;
            this.Bn(a.qa - 2 * this.ha, this.wa - this.ha); var b = a.Ra,
                c = a.bb;
            this.ve == I.Bf && (c += a.Oa - this.wa);
            Ck(this, this.Y, this.wa, b, c) } } };
d.Bn = function(a, b) { var c = this.ve == I.Fe,
        e = ["M 0," + (c ? 0 : this.ha)];
    c ? (e.push("h", a + 2 * this.ha), e.push("v", b), e.push("a", this.ha, this.ha, 0, 0, 1, -this.ha, this.ha), e.push("h", -1 * a), e.push("a", this.ha, this.ha, 0, 0, 1, -this.ha, -this.ha)) : (e.push("a", this.ha, this.ha, 0, 0, 1, this.ha, -this.ha), e.push("h", a), e.push("a", this.ha, this.ha, 0, 0, 1, this.ha, this.ha), e.push("v", b), e.push("h", -a - 2 * this.ha));
    e.push("z");
    this.Gc.setAttribute("d", e.join(" ")) };
d.wn = function() { this.Ab.set(this.s ? Infinity : 0) };
d.yr = function(a) { var b = a.deltaX; if (b) { D && 1 === a.deltaMode && (b *= 10); var c = this.ee();
        b = c.fb + b;
        b = Math.min(b, c.lc - c.qa);
        b = Math.max(b, 0);
        this.Ab.set(b);
        I.G.Aa() } a.preventDefault();
    a.stopPropagation() };
d.eq = function(a, b) { this.j.scale = this.na.scale; var c = this.Nc,
        e = this.s ? c : c + R;
    this.s && (a = a.reverse()); for (var f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = K(h, !1), l = 0, m; m = k[l]; l++) m.nc = !0;
            h.U();
            k = h.P();
            l = h.kb();
            m = h.T ? R : 0;
            m = this.s ? e + l.width : e + m;
            h.moveBy(m, c);
            m = Hk(this, h, m, c, l, f);
            e += l.width + b[f];
            Ek(this, k, h, m) } else "button" == h.type && (Gk(this, h.button, e, c), e += h.button.width + b[f]) };
d.$p = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.up; return a < 90 + b && a > 90 - b || a > -90 - b && a < -90 + b ? !0 : !1 };
d.Tg = function() { if (!this.u) return null; var a = this.u.getBoundingClientRect(),
        b = a.top;
    a = a.height; if (this.ve == I.Fe) return new Dg(-1E9, b - 1E9, 2E9, 1E9 + a); if (this.ve == I.Bf) return new Dg(-1E9, b, 2E9, 1E9 + a) };
d.Qq = function() { this.j.scale = this.na.scale; for (var a = 0, b = M(this.j, !1), c = 0, e; e = b[c]; c++) a = Math.max(a, e.kb().height);
    a += 1.5 * this.Nc;
    a *= this.j.scale;
    a += O; if (this.wa != a) { for (c = 0; e = b[c]; c++) e.Sj && Ik(this, e.Sj, e);
        this.wa = a;
        this.na.resize() } };

function ah(a) { a.Va = this.ee.bind(this);
    a.pf = this.Xk.bind(this);
    ah.m.constructor.call(this, a);
    this.kd = !1 } y(ah, Bk);
d = ah.prototype;
d.ee = function() { if (!this.R()) return null; try { var a = this.j.Ca.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.Af,
        c = this.wa - 2 * this.Af,
        e = this.Y;
    this.s || (e -= this.Af); return { Oa: c, qa: e, Ub: a.height * this.j.scale + 2 * this.Nc, lc: a.width * this.j.scale + 2 * this.Nc, Td: -this.j.scrollY + a.y, fb: -this.j.scrollX, kc: a.y, xc: a.x, bb: b, Ra: 0 } };
d.Xk = function(a) { var b = this.ee();
    b && (t(a.y) && (this.j.scrollY = -b.Ub * a.y), this.j.translate(this.j.scrollX + b.Ra, this.j.scrollY + b.bb)) };
d.position = function() { if (this.R()) { var a = this.na.Va(); if (a) { this.wa = a.Oa;
            this.Bn(this.Y - this.ha, a.Oa - 2 * this.ha); var b = a.bb,
                c = a.Ra;
            this.ve == I.td && (this.gu = c += a.qa - this.Y);
            Ck(this, this.Y, this.wa, c, b) } } };
d.Bn = function(a, b) { var c = this.ve == I.td,
        e = a + this.ha;
    e = ["M " + (c ? e : 0) + ",0"];
    e.push("h", c ? -a : a);
    e.push("a", this.ha, this.ha, 0, 0, c ? 0 : 1, c ? -this.ha : this.ha, this.ha);
    e.push("v", Math.max(0, b));
    e.push("a", this.ha, this.ha, 0, 0, c ? 0 : 1, c ? this.ha : -this.ha, this.ha);
    e.push("h", c ? a : -a);
    e.push("z");
    this.Gc.setAttribute("d", e.join(" ")) };
d.wn = function() { this.Ab.set(0) };
d.yr = function(a) { var b = a.deltaY; if (b) { D && 1 === a.deltaMode && (b *= 10); var c = this.ee();
        b = c.Td - c.kc + b;
        b = Math.min(b, c.Ub - c.Oa);
        b = Math.max(b, 0);
        this.Ab.set(b);
        I.G.Aa() } a.preventDefault();
    a.stopPropagation() };
d.eq = function(a, b) { this.j.scale = this.na.scale; for (var c = this.Nc, e = this.s ? c : c + R, f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = K(h, !1), l = 0, m; m = k[l]; l++) m.nc = !0;
            h.U();
            k = h.P();
            l = h.kb();
            h.moveBy(e, c);
            m = Hk(this, h, this.s ? e - l.width : e, c, l, f);
            Ek(this, k, h, m);
            c += l.height + b[f] } else "button" == h.type && (Gk(this, h.button, e, c), c += h.button.height + b[f]) };
d.$p = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.up; return a < b && a > -b || a < -180 + b || a > 180 - b ? !0 : !1 };
d.Tg = function() { if (!this.u) return null; var a = this.u.getBoundingClientRect(),
        b = a.left;
    a = a.width; if (this.ve == I.Ee) return new Dg(b - 1E9, -1E9, 1E9 + a, 2E9); if (D && this.na && this.na.Gi) { var c = this.na.u.getBoundingClientRect().x;
        10 > Math.abs(c - b) && (b += this.gu * this.na.options.Dc.scale) } return new Dg(b, -1E9, 1E9 + a, 2E9) };
d.Qq = function() { this.j.scale = this.na.scale; for (var a = 0, b = M(this.j, !1), c = 0, e; e = b[c]; c++) { var f = e.kb().width;
        e.T && (f -= R);
        a = Math.max(a, f) } for (c = 0; e = this.Ph[c]; c++) a = Math.max(a, e.width);
    a += 1.5 * this.Nc + R;
    a *= this.j.scale;
    a += O; if (this.Y != a) { for (c = 0; e = b[c]; c++) this.s && (f = e.ca().x, e.moveBy(a / this.j.scale - this.Nc - R - f, 0)), e.Sj && Ik(this, e.Sj, e); if (this.s)
            for (c = 0; e = this.Ph[c]; c++) b = e.Ip().y, e.moveTo(a / this.j.scale - e.width - this.Nc - R, b);
        this.Y = a;
        this.na.resize() } };

function Jk(a) { Ag.call(this);
    this.J = a;
    a = B ? "focusout" : "blur";
    this.ju = J(this.J, B ? "focusin" : "focus", this, !B);
    this.ku = J(this.J, a, this, !B) } y(Jk, Ag);
Jk.prototype.handleEvent = function(a) { var b = new sd(a.Ad);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b) };
Jk.prototype.Ha = function() { Jk.m.Ha.call(this);
    Pd(this.ju);
    Pd(this.ku);
    delete this.J };

function Kk(a, b, c) { Vh.call(this, c);
    this.La = b || Lk;
    a instanceof Sb || (a = Vb(a), a = Wb(Ub(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.Vg()));
    this.yi = a;
    this.bi = this.xn = !1;
    this.iv = null;
    this.js = bc;
    this.Hi = !0;
    this.Lj = -1 } y(Kk, Vh);
var Mk = {};
d = Kk.prototype;
d.Ha = function() { Kk.m.Ha.call(this);
    this.uf && (this.uf.removeNode(this), this.uf = null);
    this.J = null };
d.kk = function() { var a = this.D(); if (a) { var b = Nk(this);
        b && !b.id && (b.id = this.ia() + ".label");
        fi(a, "treeitem");
        U(a, "selected", !1);
        U(a, "level", this.Ug());
        b && U(a, "labelledby", b.id);
        (b = this.Zj()) && fi(b, "presentation");
        (b = this.Yj()) && fi(b, "presentation"); if (b = Ok(this))
            if (fi(b, "group"), b.hasChildNodes())
                for (U(a, "expanded", !1), a = ai(this), b = 1; b <= a; b++) { var c = T(this, b - 1).D();
                    U(c, "setsize", a);
                    U(c, "posinset", b) } } };
d.M = function() { var a = this.Wb(); var b = this.kl(); var c = a.fd;
    a = c.createElement("DIV");
    B ? (dc(a, ac(cc, b)), a.removeChild(a.firstChild)) : dc(a, b); if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else
        for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.J = b };
d.jb = function() { Kk.m.jb.call(this);
    Mk[this.ia()] = this;
    this.kk() };
d.Xc = function() { Kk.m.Xc.call(this);
    delete Mk[this.ia()] };
d.Ig = function(a, b) { var c = T(this, b - 1),
        e = T(this, b);
    Kk.m.Ig.call(this, a, b);
    a.od = c;
    a.md = e;
    c ? c.md = a : this.Ap = a;
    e ? e.od = a : this.bq = a;
    (b = this.$b()) && Pk(a, b);
    Qk(a, this.Ug() + 1); if (b = this.D())
        if (this.Ch(), U(b, "expanded", this.Xb()), this.Xb()) { b = Ok(this);
            a.D() || a.M(); var f = a.D(),
                h = e && e.D();
            b.insertBefore(f, h);
            this.ra && a.jb();
            e || (c ? c.Ch() : (uh(b, !0), this.pd(this.Xb()))) } };
d.add = function(a, b) { a.getParent() && a.getParent().removeChild(a);
    this.Ig(a, b ? di(this, b) : ai(this)); return a };
d.removeChild = function(a) {
    var b = this.$b(),
        c = b ? b.Gd() : null;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), Hf(this.Pu, 10, this)) : this.select();
    Kk.m.removeChild.call(this, a);
    this.bq == a && (this.bq = a.od);
    this.Ap == a && (this.Ap = a.md);
    a.od && (a.od.md = a.md);
    a.md && (a.md.od = a.od);
    c = !a.md;
    a.uf = null;
    a.Lj = -1;
    if (b && (b.removeNode(a), this.ra)) {
        b = Ok(this);
        if (a.ra) { var e = a.D();
            b.removeChild(e);
            a.Xc() } c && (c = T(this, ai(this) - 1)) && c.Ch();
        ci(this) || (b.style.display = "none", this.Ch(), this.Zj().className = this.Vj(), (c = this.D()) &&
            c.removeAttribute("aria-expanded"))
    }
    return a
};
d.remove = Kk.prototype.removeChild;
d.Pu = function() { this.select() };
d.Ug = function() { var a = this.Lj;
    0 > a && (a = (a = this.getParent()) ? a.Ug() + 1 : 0, Qk(this, a)); return a };

function Qk(a, b) { if (b != a.Lj) { a.Lj = b; var c = Rk(a); if (c) { var e = Sk(a) + "px";
            bi(a) ? c.style.paddingRight = e : c.style.paddingLeft = e } $h(a, function(a) { Qk(a, b + 1) }) } } d.contains = function(a) { for (; a;) { if (a == this) return !0;
        a = a.getParent() } return !1 };
d.Ne = function() { var a = [];
    $h(this, function(b) { a.push(b) }); return a };
d.rk = function() { return this.xn };
d.select = function() { var a = this.$b();
    a && a.Fc(this) };

function Tk(a, b) { if (a.xn != b) { a.xn = b;
        Uk(a); var c = a.D();
        c && (U(c, "selected", b), b && (b = a.$b().D(), U(b, "activedescendant", a.ia()))) } } d.Xb = function() { return this.bi };
d.pd = function(a) { var b = a != this.bi; if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) { this.bi = a; var c = this.$b(); var e = this.D(); if (ci(this)) { if (!a && c && this.contains(c.Gd()) && this.select(), e) { if (c = Ok(this))
                    if (uh(c, a), U(e, "expanded", a), a && this.ra && !c.hasChildNodes()) { var f = [];
                        $h(this, function(a) { f.push(a.kl()) });
                        dc(c, ac(f));
                        $h(this, function(a) { a.jb() }) } this.Ch() } } else(c = Ok(this)) && uh(c, !1);
        e && (this.Zj().className = this.Vj());
        b && this.dispatchEvent(a ? "expand" : "collapse") } };
d.toggle = function() { this.pd(!this.Xb()) };
d.expand = function() { this.pd(!0) };
d.collapse = function() { this.pd(!1) };
d.vn = function() { var a = this.getParent();
    a && (a.pd(!0), a.vn()) };
d.kl = function() { var a = this.$b(),
        b = !a.cj || a == this.getParent() && !a.Mn ? this.La.Xo : this.La.Wo;
    a = this.Xb() && ci(this);
    b = { "class": b, style: Vk(this) }; var c = [];
    a && $h(this, function(a) { c.push(a.kl()) });
    a = $b("div", b, c); return $b("div", { "class": this.La.gp, id: this.ia() }, [Wk(this), a]) };

function Sk(a) { return Math.max(0, (a.Ug() - 1) * a.La.Bm) }

function Wk(a) { var b = {};
    b["padding-" + (bi(a) ? "right" : "left")] = Sk(a) + "px";
    b = { "class": a.ki(), style: b }; var c = a.nm(),
        e = $b("span", { style: { display: "inline-block" }, "class": a.Vj() }),
        f = $b("span", { "class": a.La.hp, title: a.iv || null }, a.yi);
    a = ac(f, $b("span", {}, a.js)); return $b("div", b, [c, e, a]) } d.ki = function() { return this.La.Vl + (this.rk() ? " " + this.La.jp : "") };
d.nm = function() { return $b("span", { type: "expand", style: { display: "inline-block" }, "class": Xk(this) }) };

function Xk(a) { var b = a.$b(),
        c = !b.cj || b == a.getParent() && !b.Mn,
        e = a.La,
        f = new Qc;
    f.append(e.Gf, " ", e.Ss, " "); if (ci(a)) { var h = 0;
        b.Ln && a.Hi && (h = a.Xb() ? 2 : 1);
        c || (h = a.md ? h + 8 : h + 4); switch (h) {
            case 1:
                f.append(e.Ws); break;
            case 2:
                f.append(e.Vs); break;
            case 4:
                f.append(e.bp); break;
            case 5:
                f.append(e.Us); break;
            case 6:
                f.append(e.Ts); break;
            case 8:
                f.append(e.cp); break;
            case 9:
                f.append(e.Ys); break;
            case 10:
                f.append(e.Xs); break;
            default:
                f.append(e.ap) } } else c ? f.append(e.ap) : a.md ? f.append(e.cp) : f.append(e.bp); return f.toString() }

function Vk(a) { var b = a.Xb() && ci(a); return Mb({ "background-position": Yk(a), display: b ? null : "none" }) }

function Yk(a) { return (a.md ? (a.Ug() - 1) * a.La.Bm : "-100") + "px 0" } d.D = function() { var a = Kk.m.D.call(this);
    a || (this.J = a = this.Wb().D(this.ia())); return a };

function Rk(a) { return (a = a.D()) ? a.firstChild : null } d.Yj = function() { var a = Rk(this); return a ? a.firstChild : null };
d.Zj = function() { var a = Rk(this); return a ? a.childNodes[1] : null };

function Nk(a) { return (a = Rk(a)) && a.lastChild ? a.lastChild.previousSibling : null }

function Ok(a) { return (a = a.D()) ? a.lastChild : null } d.wb = function(a) { this.yi = a = Vb(a); var b = Nk(this);
    b && dc(b, a);
    (a = this.$b()) && Zk(a, this) };
d.sb = function() { var a = Ub(this.yi); return -1 != a.indexOf("&") ? "document" in g ? Qa(a) : Sa(a) : a };

function Uk(a) { var b = Rk(a);
    b && (b.className = a.ki()) } d.Ch = function() { var a = this.Yj();
    a && (a.className = Xk(this)); if (a = Ok(this)) a.style.backgroundPosition = Yk(this) };
d.Bq = function(a) { "expand" == a.target.getAttribute("type") && ci(this) ? this.Hi && this.toggle() : (this.select(), Uk(this)) };
d.Vm = function(a) { a.preventDefault() };
d.yq = function(a) { "expand" == a.target.getAttribute("type") && ci(this) || this.Hi && this.toggle() };
d.Wm = function(a) {
    var b = !0;
    switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            ci(this) && (this.Xb() ? T(this, 0).select() : this.pd(!0));
            break;
        case 37:
            if (a.altKey) break;
            if (ci(this) && this.Xb() && this.Hi) this.pd(!1);
            else { var c = this.getParent(),
                    e = this.$b();
                c && (e.ng || c != e) && c.select() }
            break;
        case 40:
            a: if (ci(this) && this.Xb()) c = T(this, 0);
                else { for (c = this; c != this.$b();) { e = c.md; if (null != e) { c = e; break a } c = c.getParent() } c = null } c && c.select();
            break;
        case 38:
            c = this.od;
            null != c ? c = $k(c) : (c = this.getParent(), e = this.$b(), c = !e.ng && c ==
                e || this == e ? null : c);
            c && c.select();
            break;
        default:
            b = !1
    }
    b && (a.preventDefault(), (e = this.$b()) && e.kj.clear());
    return b
};

function $k(a) { return a.Xb() && ci(a) ? $k(T(a, ai(a) - 1)) : a }

function Pk(a, b) { a.uf != b && (a.uf = b, Zk(b, a), $h(a, function(a) { Pk(a, b) })) }
var Lk = {
    Bm: 19,
    ip: "goog-tree-root goog-tree-item",
    fp: "goog-tree-hide-root",
    gp: "goog-tree-item",
    Wo: "goog-tree-children",
    Xo: "goog-tree-children-nolines",
    Vl: "goog-tree-row",
    hp: "goog-tree-item-label",
    Gf: "goog-tree-icon",
    Ss: "goog-tree-expand-icon",
    Ws: "goog-tree-expand-icon-plus",
    Vs: "goog-tree-expand-icon-minus",
    Ys: "goog-tree-expand-icon-tplus",
    Xs: "goog-tree-expand-icon-tminus",
    Us: "goog-tree-expand-icon-lplus",
    Ts: "goog-tree-expand-icon-lminus",
    cp: "goog-tree-expand-icon-t",
    bp: "goog-tree-expand-icon-l",
    ap: "goog-tree-expand-icon-blank",
    Tl: "goog-tree-expanded-folder-icon",
    Zo: "goog-tree-collapsed-folder-icon",
    Ul: "goog-tree-file-icon",
    ep: "goog-tree-expanded-folder-icon",
    $o: "goog-tree-collapsed-folder-icon",
    jp: "selected"
};

function al(a, b, c) { Kk.call(this, a, b, c) } y(al, Kk);
al.prototype.$b = function() { if (this.uf) return this.uf; var a = this.getParent(); return a && (a = a.$b()) ? (Pk(this, a), a) : null };
al.prototype.Vj = function() { var a = this.Xb(),
        b = this.qt; if (a && b) return b;
    b = this.Yt; if (!a && b) return b;
    b = this.La; if (ci(this)) { if (a && b.Tl) return b.Gf + " " + b.Tl; if (!a && b.Zo) return b.Gf + " " + b.Zo } else if (b.Ul) return b.Gf + " " + b.Ul; return "" };

function bl(a) { this.xb = void 0;
    this.Ib = {}; if (a) { if (a.bk && "function" == typeof a.bk) var b = a.bk();
        else if (a.mi && "function" == typeof a.mi) b = void 0;
        else if (fa(a) || q(a)) { b = []; for (var c = a.length, e = 0; e < c; e++) b.push(e) } else
            for (e in b = [], c = 0, a) b[c++] = e;
        a = Ic(a); for (c = 0; c < b.length; c++) this.set(b[c], a[c]) } } d = bl.prototype;
d.set = function(a, b) { cl(this, a, b, !1) };
d.add = function(a, b) { cl(this, a, b, !0) };

function cl(a, b, c, e) { for (var f = 0; f < b.length; f++) { var h = b.charAt(f);
        a.Ib[h] || (a.Ib[h] = new bl);
        a = a.Ib[h] } if (e && void 0 !== a.xb) throw Error('The collection already contains the key "' + b + '"');
    a.xb = c } d.get = function(a) { a: { for (var b = this, c = 0; c < a.length; c++)
            if (b = b.Ib[a.charAt(c)], !b) { a = void 0; break a } a = b } return a ? a.xb : void 0 };
d.mi = function() { var a = [];
    dl(this, a); return a };

function dl(a, b) { void 0 !== a.xb && b.push(a.xb); for (var c in a.Ib) dl(a.Ib[c], b) }
d.bk = function(a) { var b = []; if (a) { for (var c = this, e = 0; e < a.length; e++) { var f = a.charAt(e); if (!c.Ib[f]) return [];
            c = c.Ib[f] } el(c, a, b) } else el(this, "", b); return b };

function el(a, b, c) { void 0 !== a.xb && c.push(b); for (var e in a.Ib) el(a.Ib[e], b + e, c) } d.clear = function() { this.Ib = {};
    this.xb = void 0 };
d.remove = function(a) { for (var b = this, c = [], e = 0; e < a.length; e++) { var f = a.charAt(e); if (!b.Ib[f]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, f]);
        b = b.Ib[f] } a = b.xb; for (delete b.xb; 0 < c.length;)
        if (f = c.pop(), b = f[0], f = f[1], b.Ib[f].aq()) delete b.Ib[f];
        else break; return a };
d.clone = function() { return new bl(this) };
d.aq = function() { var a; if (a = void 0 === this.xb) a: { for (var b in this.Ib) { a = !1; break a } a = !0 }
    return a };

function fl() { this.ag = new bl;
    this.gb = "";
    this.Ck = this.Om = null;
    this.jh = this.Mi = 0 }

function gl(a, b) { var c = b.sb(); if (c && !Fa(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.ag.get(c); if (e) { for (var f = ai(b), h = 0; h < f; h++) gl(a, T(b, h));
            xa(e, b);
            e.length || a.ag.remove(c) } } }

function hl(a, b) { var c = !1;
    (b = a.ag.bk(b)) && b.length && (a.jh = 0, a.Mi = 0, c = a.ag.get(b[0]), c = il(a, c)) && (a.Om = b); return c }

function il(a, b) { if (b) { if (a.jh < b.length) { var c = b[a.jh];
            a.Ck = b } c && (c.vn(), c.select()) } return !!c }
fl.prototype.clear = function() { this.gb = "" };

function jl(a, b, c) { Kk.call(this, a, b, c);
    this.bi = !0;
    Tk(this, !0);
    this.Ya = this;
    this.kj = new fl;
    this.jm = this.Mb = null;
    this.di = !1;
    this.wt = null;
    this.Mn = this.ng = this.Ln = this.cj = !0; if (B) try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {} } y(jl, Kk);
d = jl.prototype;
d.$b = function() { return this };
d.Ug = function() { return 0 };
d.vn = function() {};
d.Jt = function() { this.di = !0;
    ui(this.D(), "focused");
    this.Ya && this.Ya.select() };
d.Et = function() { this.di = !1;
    wi(this.D(), "focused") };
d.hasFocus = function() { return this.di };
d.Xb = function() { return !this.ng || jl.m.Xb.call(this) };
d.pd = function(a) { this.ng ? jl.m.pd.call(this, a) : this.bi = a };
d.nm = function() { return bc };
d.Zj = function() { var a = Rk(this); return a ? a.firstChild : null };
d.Yj = function() { return null };
d.Ch = function() {};
d.ki = function() { return jl.m.ki.call(this) + (this.ng ? "" : " " + this.La.fp) };
d.Vj = function() { var a = this.Xb(),
        b = this.qt; if (a && b) return b;
    b = this.Yt; if (!a && b) return b;
    b = this.La; return a && b.ep ? b.Gf + " " + b.ep : !a && b.$o ? b.Gf + " " + b.$o : "" };
d.Fc = function(a) { if (this.Ya != a) { var b = !1;
        this.Ya && (b = this.Ya == this.wt, Tk(this.Ya, !1)); if (this.Ya = a) Tk(a, !0), b && a.select();
        this.dispatchEvent("change") } };
d.Gd = function() { return this.Ya };

function kl(a) { 0 != a.cj && (a.cj = !1, a.ra && ll(a)) }

function ll(a) {
    function b(a) { var h = Ok(a); if (h) { var l = !e || c == a.getParent() && !f ? a.La.Xo : a.La.Wo;
            h.className = l; if (h = a.Yj()) h.className = Xk(a) } $h(a, b) } var c = a,
        e = c.cj,
        f = c.Mn;
    b(a) }

function ml(a) { 0 != a.Ln && (a.Ln = !1, a.ra && ll(a)) }

function nl(a) { if (0 != a.ng) { a.ng = !1; if (a.ra) { var b = Rk(a);
            b && (b.className = a.ki()) } a.Gd() == a && T(a, 0) && a.Fc(T(a, 0)) } } d.kk = function() { jl.m.kk.call(this); var a = this.D();
    fi(a, "tree");
    U(a, "labelledby", Nk(this).id) };
d.jb = function() { jl.m.jb.call(this); var a = this.D();
    a.className = this.La.ip;
    a.setAttribute("hideFocus", "true");
    a = this.D();
    a.tabIndex = 0; var b = this.Mb = new li(a),
        c = this.jm = new Jk(a);
    Yh(this).ga(c, "focusout", this.Et).ga(c, "focusin", this.Jt).ga(b, "key", this.Zc).ga(a, "mousedown", this.um).ga(a, "click", this.um).ga(a, "dblclick", this.um);
    this.kk() };
d.Xc = function() { jl.m.Xc.call(this);
    this.Mb.v();
    this.Mb = null;
    this.jm.v();
    this.jm = null };
d.um = function(a) { var b = ol(this, a); if (b) switch (a.type) {
        case "mousedown":
            b.Bq(a); break;
        case "click":
            b.Vm(a); break;
        case "dblclick":
            b.yq(a) } };
d.Zc = function(a) {
    var b = this.kj;
    var c = !1;
    switch (a.keyCode) {
        case 40:
        case 38:
            if (a.ctrlKey) { c = 40 == a.keyCode ? 1 : -1; var e = b.Om; if (e) { var f = null,
                        h = !1; if (b.Ck) { var k = b.jh + c;
                        0 <= k && k < b.Ck.length ? (b.jh = k, f = b.Ck) : h = !0 } f || (k = b.Mi + c, 0 <= k && k < e.length && (b.Mi = k), e.length > b.Mi && (f = b.ag.get(e[b.Mi])), f && f.length && h && (b.jh = -1 == c ? f.length - 1 : 0));
                    il(b, f) && (b.Om = e) } c = !0 } break;
        case 8:
            e = b.gb.length - 1;
            c = !0;
            0 < e ? (b.gb = b.gb.substring(0, e), hl(b, b.gb)) : 0 == e ? b.gb = "" : c = !1; break;
        case 27:
            b.gb = "", c = !0 }(b = c || this.Ya && this.Ya.Wm(a)) || (b =
        this.kj, c = !1, a.ctrlKey || a.altKey || (e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "\u0080" <= e && "\ufffd" >= e) && (" " != e || b.gb) && (b.gb += e, c = hl(b, b.gb))), b = c);
    b && a.preventDefault();
    return b
};

function ol(a, b) { for (var c = b.target; null != c;) { if (b = Mk[c.id]) return b; if (c == a.D()) break;
        c = c.parentNode } return null } d.createNode = function(a) { return new al(a || bc, this.La, this.Wb()) };

function Zk(a, b) { a = a.kj; var c = b.sb(); if (c && !Fa(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.ag.get(c);
        e ? e.push(b) : a.ag.set(c, [b]) } } d.removeNode = function(a) { gl(this.kj, a) };

function Xg(a) {
    this.j = a;
    this.s = a.options.s;
    this.kd = a.options.Id;
    this.ua = a.options.ua;
    this.La = { Bm: 19, ip: "blocklyTreeRoot", fp: "blocklyHidden", gp: "", Vl: "blocklyTreeRow", hp: "blocklyTreeLabel", Gf: "blocklyTreeIcon", Tl: "blocklyTreeIconOpen", Ul: "blocklyTreeIconNone", jp: "blocklyTreeSelected" };
    this.rr = { Vl: "blocklyTreeSeparator" };
    this.kd && (this.La.cssTreeRow += a.s ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.rr.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.s ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.La.cssTreeIcon = "")
}
d = Xg.prototype;
d.width = 0;
d.height = 0;
d.Ji = null;
d.ea = function() {
    var a = this.j,
        b = Q(this.j);
    this.ic = G("DIV", "blocklyToolboxDiv");
    this.ic.setAttribute("dir", a.s ? "RTL" : "LTR");
    b.parentNode.insertBefore(this.ic, b);
    I.H(this.ic, "mousedown", this, function(a) { I.h.Xe(a) || a.target == this.ic ? I.yb(!1) : I.yb(!0);
        I.Touch.$d() }, !1, !0);
    b = { Zh: a.options.Zh, Dc: a, s: a.s, Mk: a.options.Mk, Id: a.Id, ua: a.options.ua };
    this.F = null;
    this.F = a.Id ? new $g(b) : new ah(b);
    yc(this.F.M("svg"), Q(this.j));
    this.F.ea(a);
    this.La.cleardotPath = a.options.nd + "1x1.gif";
    this.La.cssCollapsedFolderIcon =
        "blocklyTreeIconClosed" + (a.s ? "Rtl" : "Ltr");
    this.cd = b = new pl(this, this.La);
    nl(b);
    kl(b);
    ml(b);
    b.Fc(null);
    a = this.Ok(a.options.Ld);
    b.U(this.ic);
    a && b.Fc(a);
    eh(this);
    this.position()
};
d.v = function() { this.F.v();
    this.cd.v();
    H(this.ic);
    this.Ji = this.j = null };
d.Bc = function() { return this.width };
d.Wg = function() { return this.height };
d.position = function() { var a = this.ic; if (a) { var b = Q(this.j);
        b = I.Tn(b);
        this.kd ? (a.style.left = "0", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, this.ua == I.Fe ? a.style.top = "0" : a.style.bottom = "0") : (this.ua == I.td ? a.style.right = "0" : a.style.left = "0", a.style.height = b.height + "px", this.width = a.offsetWidth);
        this.F.position() } };
d.Ok = function(a) { this.cd.Rq();
    this.cd.wd = [];
    this.Pp = !1;
    a = ql(this, a, this.cd, this.j.options.nd); if (this.cd.wd.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    Nf(this.j); return a };

function ql(a, b, c, e) {
    for (var f = null, h = null, k = 0, l; l = b.childNodes[k]; k++)
        if (l.tagName) switch (l.tagName.toUpperCase()) {
            case "CATEGORY":
                h = I.h.Qb(l.getAttribute("name"));
                h = a.cd.createNode(h);
                h.wd = [];
                c.add(h);
                var m = l.getAttribute("custom");
                m ? h.wd = m : (m = ql(a, l, h, e)) && (f = m);
                m = I.h.Qb(l.getAttribute("colour"));
                q(m) ? (h.xm = /^#[0-9a-fA-F]{6}$/.test(m) ? m : I.Wp(Number(m)), a.Pp = !0) : h.xm = "";
                "true" == l.getAttribute("expanded") ? (h.wd.length && (f = h), h.pd(!0)) : h.pd(!1);
                h = l;
                break;
            case "SEP":
                h && ("CATEGORY" == h.tagName.toUpperCase() ?
                    c.add(new rl(a.rr)) : (l = parseFloat(l.getAttribute("gap")), !isNaN(l) && h && h.setAttribute("gap", l)));
                break;
            case "BLOCK":
            case "SHADOW":
            case "LABEL":
            case "BUTTON":
                c.wd.push(l), h = l
        }
    return f
}

function eh(a, b) { b = (b || a.cd).Ne(!1); for (var c = 0, e; e = b[c]; c++) { var f = Rk(e); if (f) { var h = a.Pp ? "8px solid " + (e.xm || "#ddd") : "none";
            a.j.s ? f.style.borderRight = h : f.style.borderLeft = h } eh(a, e) } }
d.Tg = function() { if (!this.ic) return null; var a = this.ic.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        e = a.width;
    a = a.height; return this.ua == I.Ee ? new Dg(-1E7, -1E7, 1E7 + b + e, 2E7) : this.ua == I.td ? new Dg(b, -1E7, 1E7 + e, 2E7) : this.ua == I.Fe ? new Dg(-1E7, -1E7, 2E7, 1E7 + c + a) : new Dg(0, c, 2E7, 1E7 + e) };

function pl(a, b) { this.V = a;
    jl.call(this, bc, b) } y(pl, jl);
pl.prototype.jb = function() { pl.m.jb.call(this); if (ed) { var a = this.D();
        I.H(a, "touchend", this, this.St) } };
pl.prototype.St = function(a) { var b = ol(this, a);
    b && "touchend" === a.type && setTimeout(function() { b.Vm(a) }, 1) };
pl.prototype.createNode = function(a) { a = a ? Vb(a) : bc; return new sl(this.V, a, this.La, this.Wb()) };
pl.prototype.Fc = function(a) { var b = this.V; if (a != this.Ya && a != b.cd) { b.Ji && (Rk(b.Ji).style.backgroundColor = ""); if (a) { var c = a.xm || "#57e";
            Rk(a).style.backgroundColor = c;
            eh(b, a) } c = this.Gd();
        jl.prototype.Fc.call(this, a);
        a && a.wd && a.wd.length ? (b.F.show(a.wd), b.Ji != a && b.F.wn()) : b.F.Aa();
        c != a && c != this && (c = new L(null, "category", c && Ub(c.yi), a && Ub(a.yi)), c.gc = b.j.id, I.i.L(c));
        a && (b.Ji = a) } };

function sl(a, b, c, e) { Kk.call(this, b, c, e);
    a && (b = function() { I.tg(a.j) }, J(a.cd, "expand", b), J(a.cd, "collapse", b)) } y(sl, al);
d = sl.prototype;
d.nm = function() { return $b("span") };
d.Vm = function() { ci(this) && this.Hi ? (this.toggle(), this.select()) : this.rk() ? this.$b().Fc(null) : this.select();
    Uk(this) };
d.Bq = function() {};
d.yq = function() {};
d.Wm = function(a) { if (this.uf.V.kd) { var b = {};
        b[39] = this.uh ? 38 : 40;
        b[37] = this.uh ? 40 : 38;
        b[38] = 37;
        b[40] = 39;
        a.keyCode = b[a.keyCode] || a.keyCode } return sl.m.Wm.call(this, a) };

function rl(a) { sl.call(this, null, bc, a) } y(rl, sl);
I.Mc = {};
I.Mc.Zy = "";
I.Mc.nr = null;
I.Mc.kq = "";
I.Mc.Ue = function(a, b) { if (!I.Mc.nr) { var c = ".blocklyDraggable {}\n";
        a && (c += I.Mc.Cr.join("\n"), I.Fr && (c += I.Fr.CSS.join("\n")));
        I.Mc.kq = b.replace(/[\\\/]$/, "");
        c = c.replace(/<<<PATH>>>/g, I.Mc.kq);
        a = document.createElement("style");
        document.head.insertBefore(a, document.head.firstChild);
        a.appendChild(document.createTextNode(c));
        I.Mc.nr = a.sheet } };
I.Mc.rz = function() { console.warn("Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context") };
I.Mc.Cr = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none", "}", ".blocklyNonSelectable {", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;",
    "top: 0;", "left: 0;", "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: .9;", "padding: 2px;", "position: absolute;",
    "z-index: 100000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;",
    "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxGrab {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {",
    "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {",
    "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklyFlyoutButton {", "fill: #888;", "cursor: default;", "}", ".blocklyFlyoutButtonShadow {", "fill: #666;", "}", ".blocklyFlyoutButton:hover {", "fill: #aaa;", "}", ".blocklyFlyoutLabel {", "cursor: default;", "}", ".blocklyFlyoutLabelBackground {", "opacity: 0;", "}", ".blocklyFlyoutLabelText {", "fill: #000;", "}", ".blocklySvg text, .blocklyBlockDragSurface text {", "user-select: none;",
    "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;",
    "}", ".blocklyCommentForeignObject {", "position: relative;", "z-index: 0;", "}", ".blocklyCommentRect {", "fill: #E7DE8E;", "stroke: #bcA903;", "stroke-width: 1px", "}", ".blocklyCommentTarget {", "fill: transparent;", "stroke: #bcA903;", "}", ".blocklyCommentTargetFocused {", "fill: none;", "}", ".blocklyCommentHandleTarget {", "fill: none;", "}", ".blocklyCommentHandleTargetFocused {", "fill: transparent;", "}", ".blocklyFocused>.blocklyCommentRect {", "fill: #B9B272;", "stroke: #B9B272;", "}", ".blocklySelected>.blocklyCommentTarget {",
    "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklyCommentTextarea {", "background-color: #fef49c;", "border: 0;", "outline: 0;", "margin: 0;", "padding: 3px;", "resize: none;", "display: block;", "overflow: hidden;", "}", ".blocklyCommentDeleteIcon {", "cursor: pointer;", "fill: #000;", "display: none", "}", ".blocklySelected > .blocklyCommentDeleteIcon {", "display: block", "}", ".blocklyDeleteIconShape {", "fill: #000;", "stroke: #000;", "stroke-width: 1px;", "}", ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
    "stroke: #fc3;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyTransparentBackground {", "opacity: 0;", "}", ".blocklyMainWorkspaceScrollbar {", "z-index: 20;",
    "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;", "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}",
    ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;", "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;",
    "stroke-width: 2;", "stroke-linecap: round;", "pointer-events: none;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "max-height: 300px !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;", "overflow-x: visible;", "overflow-y: auto;",
    "position: absolute;", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "z-index: 70;", "-webkit-tap-highlight-color: transparent;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {",
    "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;", "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;",
    "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "background-position: 0 -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0 -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;",
    "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyToolboxDelete .blocklyTreeLabel {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {",
    "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;", "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {",
    "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;", "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;",
    "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,",
    ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {",
    "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;",
    "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;", "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {",
    "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];
I.G = {};
I.G.Z = null;
I.G.Ti = null;
I.G.Ng = null;
I.G.M = function() { I.G.Z || (I.G.Z = G("DIV", "blocklyWidgetDiv"), document.body.appendChild(I.G.Z)) };
I.G.show = function(a, b, c) { I.G.Aa();
    I.G.Ti = a;
    I.G.Ng = c;
    I.G.Z.style.top = hg().y + "px";
    I.G.Z.style.direction = b ? "rtl" : "ltr";
    I.G.Z.style.display = "block" };
I.G.Aa = function() { I.G.Ti && (I.G.Ti = null, I.G.Z.style.display = "none", I.G.Z.style.left = "", I.G.Z.style.top = "", I.G.Ng && I.G.Ng(), I.G.Ng = null, wc(I.G.Z)) };
I.G.R = function() { return !!I.G.Ti };
I.G.wi = function(a) { I.G.Ti == a && I.G.Aa() };
I.G.position = function(a, b, c, e, f) { b < e.y && (b = e.y);
    f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
    I.G.Kq(a, b, c.height) };
I.G.Kq = function(a, b, c) { I.G.Z.style.left = a + "px";
    I.G.Z.style.top = b + "px";
    I.G.Z.style.height = c + "px" };
I.G.fn = function(a, b, c, e) { I.G.Kq(I.G.ys(a, b, c, e), I.G.zs(a, b, c), c.height) };
I.G.ys = function(a, b, c, e) { if (e) return b = Math.max(b.right - c.width, a.left), Math.min(b, a.right - c.width);
    b = Math.min(b.left, a.right - c.width); return Math.max(b, a.left) };
I.G.zs = function(a, b, c) { return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom };

function tl(a) { this.Sh = a;
    this.M() } d = tl.prototype;
d.Ja = null;
d.zd = null;
d.Sh = null;
d.jf = 1;
d.ej = null;
d.M = function() { this.Ja || (this.Ja = I.h.A("svg", { xmlns: I.zl, "xmlns:html": I.Ce, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyBlockDragSurface" }, this.Sh), this.zd = I.h.A("g", {}, this.Ja)) };

function Of(a, b) { a.zd.appendChild(b);
    a.Ja.style.display = "block";
    a.ej = new F(0, 0) }
d.xe = function(a, b) { this.ej = new F(a * this.jf, b * this.jf);
    a = this.ej.x;
    b = this.ej.y;
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.Ja.style.display = "block";
    I.h.Zi(this.Ja, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.ek = function() { var a = I.h.Zb(this.Ja); return new F(a.x / this.jf, a.y / this.jf) };
d.Yb = function() { return this.zd };
d.Qh = function(a) { a ? a.appendChild(this.zd.firstChild) : this.zd.removeChild(this.zd.firstChild);
    this.Ja.style.display = "none";
    this.ej = null };
I.Ue = function(a, b) { I.Bs();
    q(a) && (a = document.getElementById(a) || document.querySelector(a)); if (!zc(document, a)) throw "Error: container is not in current document.";
    b = new kg(b || {}); var c = G("DIV", "injectionDiv");
    a.appendChild(c);
    a = I.Uh(c, b); var e = new tl(c);
    c = new Kg(c);
    b = I.Ps(a, b, e, c);
    I.$t(b);
    I.af = b;
    I.tg(b); return b };
I.Uh = function(a, b) {
    a.setAttribute("dir", "LTR");
    Wh = b.s;
    I.Mc.Ue(b.Ut, b.nd);
    a = I.h.A("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:html": "http://www.w3.org/1999/xhtml", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklySvg" }, a);
    var c = I.h.A("defs", {}, a),
        e = String(Math.random()).substring(2),
        f = I.h.A("filter", { id: "blocklyEmbossFilter" + e }, c);
    I.h.A("feGaussianBlur", { "in": "SourceAlpha", stdDeviation: 1, result: "blur" }, f);
    var h = I.h.A("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, f);
    I.h.A("fePointLight", { x: -5E3, y: -1E4, z: 2E4 }, h);
    I.h.A("feComposite", { "in": "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" }, f);
    I.h.A("feComposite", { "in": "SourceGraphic", in2: "specOut", operator: "arithmetic", k1: 0, k2: 1, k3: 1, k4: 0 }, f);
    b.yp = f.id;
    f = I.h.A("pattern", { id: "blocklyDisabledPattern" + e, patternUnits: "userSpaceOnUse", width: 10, height: 10 }, c);
    I.h.A("rect", { width: 10, height: 10, fill: "#aaa" }, f);
    I.h.A("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    b.Zh = f.id;
    f = b.Jp;
    c = I.h.A("pattern", { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" }, c);
    0 < f.length && 0 < f.spacing ? (I.h.A("line", { stroke: f.colour }, c), 1 < f.length && I.h.A("line", { stroke: f.colour }, c)) : I.h.A("line", {}, c);
    b.Kp = c;
    return a
};
I.Ps = function(a, b, c, e) {
    b.Dc = null;
    var f = new Ug(b, c, e);
    f.scale = b.Fb.kr;
    a.appendChild(f.M("blocklyMainBackground"));
    !b.Np && b.Ld && (c = Zg(f, "svg"), I.h.Ci(c, a));
    f.translate(0, 0);
    I.af = f;
    b.readOnly || b.Qp || f.Pc(function() {
        if (!f.tb()) {
            var a = f.Va(),
                c = a.fb + a.Ra,
                e = a.Td + a.bb;
            if (a.kc < e || a.kc + a.Ub > a.Oa + e || a.xc < (b.s ? a.fb : c) || a.xc + a.lc > (b.s ? a.qa : a.qa + c))
                for (var m = M(f, !1), n = 0, p; p = m[n]; n++) {
                    var r = p.ca(),
                        C = p.kb(),
                        v = e + 25 - C.height - r.y;
                    0 < v && p.moveBy(0, v);
                    v = e + a.Oa - 25 - r.y;
                    0 > v && p.moveBy(0, v);
                    v = 25 + c - r.x - (b.s ? 0 : C.width);
                    0 < v &&
                        p.moveBy(v, 0);
                    r = c + a.qa - 25 - r.x + (b.s ? C.width : 0);
                    0 > r && p.moveBy(r, 0)
                }
        }
    });
    I.tg(f);
    I.G.M();
    I.B.M();
    return f
};
I.$t = function(a) { var b = a.options,
        c = Q(a);
    I.H(c.parentNode, "contextmenu", null, function(a) { I.h.tk(a) || a.preventDefault() });
    c = I.H(window, "resize", null, function() { I.yb(!0);
        I.tg(a) });
    a.Tk = c;
    I.Ue.ss();
    b.Ld && (a.V ? a.V.ea(a) : a.F && (a.F.ea(a), a.F.show(b.Ld.childNodes), a.F.wn(), a.scrollX = a.F.Y, b.ua == I.td && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.Qp && (a.Xa = new mg(a), a.Xa.resize());
    b.Vt && I.Ue.lu(b.nd, a) };
I.Ue.ss = function() { I.kt || (I.H(document, "keydown", null, I.Du), I.jc(document, "touchend", null, I.$e), I.jc(document, "touchcancel", null, I.$e), lb && I.H(window, "orientationchange", document, function() { I.tg(I.Xg()) }));
    I.kt = !0 };
I.Ue.lu = function(a, b) {
    function c() { for (; f.length;) I.Ba(f.pop());
        e.preload() } var e = b.vd;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete"); var f = [];
    f.push(I.H(document, "mousemove", null, c, !0));
    f.push(I.H(document, "touchstart", null, c, !0)) };
I.vr = function(a) { console.warn("Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead.");
    I.Xg().vr(a) };
I.af = null;
I.selected = null;
I.Qj = [];
I.Rh = null;
I.Bj = null;
I.Ry = null;
I.Wp = function(a) { var b = I.Jr,
        c = 255 * I.Kr,
        e = 0,
        f = 0,
        h = 0; if (0 == b) h = f = e = c;
    else { var k = Math.floor(a / 60),
            l = a / 60 - k;
        a = c * (1 - b); var m = c * (1 - b * l);
        b = c * (1 - b * (1 - l)); switch (k) {
            case 1:
                e = m;
                f = c;
                h = a; break;
            case 2:
                e = a;
                f = c;
                h = b; break;
            case 3:
                e = a;
                f = m;
                h = c; break;
            case 4:
                e = b;
                f = a;
                h = c; break;
            case 5:
                e = c;
                f = a;
                h = m; break;
            case 6:
            case 0:
                e = c, f = b, h = a } } return sj([Math.floor(e), Math.floor(f), Math.floor(h)]) };
I.Tn = function(a) { return { width: a.Do, height: a.Bo } };
I.qz = function(a) { Nf(a) };
I.tg = function(a) { for (; a.options.Dc;) a = a.options.Dc; var b = Q(a),
        c = b.parentNode; if (c) { var e = c.offsetWidth;
        c = c.offsetHeight;
        b.Do != e && (b.setAttribute("width", e + "px"), b.Do = e);
        b.Bo != c && (b.setAttribute("height", c + "px"), b.Bo = c);
        a.resize() } };
I.Du = function(a) {
    if (!I.af.options.readOnly && !I.h.tk(a)) {
        var b = !1;
        if (27 == a.keyCode) I.yb();
        else if (8 == a.keyCode || 46 == a.keyCode) { a.preventDefault(); if (I.af.tb()) return;
            I.selected && I.selected.Lb() && (b = !0) } else if (a.altKey || a.ctrlKey || a.metaKey) { if (I.af.tb()) return;
            I.selected && I.selected.Lb() && I.selected.Kd() && (67 == a.keyCode ? (I.yb(), I.Sl(I.selected)) : 88 != a.keyCode || I.selected.o.ke || (I.Sl(I.selected), b = !0));
            86 == a.keyCode ? I.Rh && (I.i.O(!0), a = I.Bj, a.ke && (a = a.ug), bh(a), I.i.O(!1)) : 90 == a.keyCode && (I.yb(), I.af.Xn(a.shiftKey)) } b &&
            !I.selected.o.ke && (I.i.O(!0), I.yb(), I.selected.v(!0, !0), I.i.O(!1))
    }
};
I.Sl = function(a) { if (a.Zp) var b = a.ij();
    else { b = I.C.He(a);
        I.C.et(b); var c = a.ca();
        b.setAttribute("x", a.s ? -c.x : c.x);
        b.setAttribute("y", c.y) } I.Rh = b;
    I.Bj = a.o };
I.wp = function(a) { var b = I.Rh,
        c = I.Bj;
    I.Sl(a);
    bh(a.o);
    I.Rh = b;
    I.Bj = c };
I.mz = function(a) { I.h.tk(a) || a.preventDefault() };
I.yb = function(a) { I.B.Aa();
    I.G.Aa();
    a || (a = I.Xg(), a.V && a.V.F && a.V.F.Kg && a.V.cd.Fc(null)) };
I.Pc = function(a) { console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."); return I.Xg().Pc(a) };
I.Xg = function() { return I.af };
I.alert = function(a, b) { window.alert(a);
    b && b() };
I.confirm = function(a, b) { b(window.confirm(a)) };
I.prompt = function(a, b, c) { c(window.prompt(a, b)) };
I.fu = function(a) {
    return function() {
        var b = a.type ? 'Block "' + a.type + '": ' : "";
        if ("colour" in a)
            if (void 0 === a.colour) console.warn(b + "Undefined color value.");
            else { var c = a.colour; try { this.lf(c) } catch (r) { console.warn(b + "Illegal color value: ", c) } } for (c = 0; void 0 !== a["message" + c];) {
            for (var e = a["args" + c] || [], f = a["lastDummyAlign" + c], h = I.h.hv(a["message" + c]), k = [], l = 0, m = [], n = 0; n < h.length; n++) {
                var p = h[n];
                if ("number" == typeof p) {
                    if (0 >= p || p > e.length) throw Error('Block "' + this.type + '": Message index %' + p + " out of range.");
                    if (k[p]) throw Error('Block "' + this.type + '": Message index %' + p + " duplicated.");
                    k[p] = !0;
                    l++;
                    m.push(e[p - 1])
                } else(p = p.trim()) && m.push(p)
            }
            if (l != e.length) throw Error('Block "' + this.type + '": Message does not reference all ' + e.length + " arg(s).");
            m.length && ("string" == typeof m[m.length - 1] || Ea(m[m.length - 1].type, "field_")) && (n = { type: "input_dummy" }, f && (n.align = f), m.push(n));
            f = { LEFT: I.Eh, RIGHT: I.Ag, CENTRE: I.pj };
            e = [];
            for (n = 0; n < m.length; n++)
                if (k = m[n], "string" == typeof k) e.push([k, void 0]);
                else {
                    h = p = null;
                    do
                        if (l = !1, "string" == typeof k) p = new Hh(k);
                        else switch (k.type) {
                            case "input_value":
                                h = this.Df(I.ab, k.name); break;
                            case "input_statement":
                                h = this.Df(I.Ta, k.name); break;
                            case "input_dummy":
                                h = Qh(this, k.name); break;
                            default:
                                p = (p = Ah[k.type]) ? p.X(k) : null, p || (k.alt ? (k = k.alt, l = !0) : console.warn("Blockly could not create a field of type " + k.type + ". You may need to register your custom field.  See github.com/google/blockly/issues/1584")) }
                    while (l);
                    if (p) e.push([p, k.name]);
                    else if (h) {
                        k.check && h.vh(k.check);
                        k.align && Lh(h, f[k.align]);
                        for (k = 0; k < e.length; k++) Jh(h, e[k][0], e[k][1]);
                        e.length = 0
                    }
                } c++
        }
        void 0 !== a.inputsInline && this.kg(a.inputsInline);
        void 0 !== a.output && this.Zk(!0, a.output);
        void 0 !== a.previousStatement && this.al(!0, a.previousStatement);
        void 0 !== a.nextStatement && this.Yk(!0, a.nextStatement);
        void 0 !== a.tooltip && (c = a.tooltip, c = I.h.Qb(c), this.te(c));
        void 0 !== a.enableContextMenu && (c = a.enableContextMenu, this.contextMenu = !!c);
        void 0 !== a.helpUrl && (c = a.helpUrl, this.Qf = I.h.Qb(c));
        q(a.extensions) && (console.warn(b + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
            a.type + "' block."), a.extensions = [a.extensions]);
        void 0 !== a.mutator && I.la.apply(a.mutator, this, !0);
        if (Array.isArray(a.extensions))
            for (b = a.extensions, c = 0; c < b.length; ++c) I.la.apply(b[c], this, !1)
    }
};
I.$y = function(a) { for (var b = 0; b < a.length; b++) { var c = a[b]; if (c) { var e = c.type;
            null == e || "" === e ? console.warn("Block definition #" + b + " in JSON array is missing a type attribute. Skipping.") : (I.$a[e] && console.warn("Block definition #" + b + ' in JSON array overwrites prior definition of "' + e + '".'), I.$a[e] = { ea: I.fu(c) }) } else console.warn("Block definition #" + b + " in JSON array is " + c + ". Skipping.") } };
I.H = function(a, b, c, e, f, h) {
    function k(a) { var b = !f;
        a = I.Touch.$u(a); for (var h = 0, k; k = a[h]; h++)
            if (!b || I.Touch.Kn(k)) I.Touch.Xu(k), c ? e.call(c, k) : e(k), l = !0 } var l = !1,
        m = []; if (g.PointerEvent && b in I.Touch.ud)
        for (var n = 0, p; p = I.Touch.ud[b][n]; n++) a.addEventListener(p, k, !1), m.push([a, p, k]);
    else if (a.addEventListener(b, k, !1), m.push([a, b, k]), b in I.Touch.ud) { var r = function(a) { k(a); var b = !h;
            l && b && a.preventDefault() }; for (n = 0; p = I.Touch.ud[b][n]; n++) a.addEventListener(p, r, !1), m.push([a, p, r]) } return m };
I.jc = function(a, b, c, e) {
    function f(a) { c ? e.call(c, a) : e(a) } var h = [],
        k = g.window; if (k && k.PointerEvent && b in I.Touch.ud) { k = 0; for (var l; l = I.Touch.ud[b][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f]) } else if (a.addEventListener(b, f, !1), h.push([a, b, f]), b in I.Touch.ud) { var m = function(a) { if (a.changedTouches && 1 == a.changedTouches.length) { var b = a.changedTouches[0];
                a.clientX = b.clientX;
                a.clientY = b.clientY } f(a);
            a.preventDefault() }; for (k = 0; l = I.Touch.ud[b][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m]) } return h };
I.Ba = function(a) { for (; a.length;) { var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1) } };
I.jz = function(a) { return /^\s*-?\d+(\.\d+)?\s*$/.test(a) };
I.Bs = function() {
    I.Hb("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    I.Hb("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    I.Hb("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    I.Hb("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    I.Hb("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    I.Hb("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    I.Hb("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    I.Hb("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    I.Hb("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    I.Hb("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    I.Hb("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    I.Hb("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    I.Hb("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    I.Hb("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    I.Hb("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    I.Hb("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
I.Hb = function(a, b, c) { for (var e = "Blockly", f = I, h = 0; h < b.length; ++h) e += "." + b[h], f && (f = f[b[h]]);
    f && f !== c && (a = (void 0 === c ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a)) };
g.console || (g.console = { log: function() {}, warn: function() {} });
g.Blockly || (g.Blockly = {});
g.Blockly.getMainWorkspace = I.Xg;
g.Blockly.addChangeListener = I.Pc;

function ul(a, b) { var c = a.className;
    c = q(c) && c.match(/\S+/g) || []; for (var e = Da(arguments, 1), f = 0; f < e.length; f++) wa(c, e[f]) || c.push(e[f]);
    c = c.join(" ");
    a.className = c };
var vl = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    wl = "ace ar fa he mzn ps".split(" "),
    $c = window.BlocklyGamesLang,
    xl = window.BlocklyGamesLanguages,
    ad = !!window.location.pathname.match(/\.html$/),
    W = null;

function yl() { return -1 != wl.indexOf($c) }
var zl, Al = Number,
    Bl, Cl = window.location.search.match(/[?&]level=([^&]+)/);
Bl = Cl ? decodeURIComponent(Cl[1].replace(/\+/g, "%20")) : "NaN";
var Dl = Al(Bl);
zl = isNaN(Dl) ? 1 : Math.min(Math.max(1, Dl), 10);

function El() {
    document.title = document.getElementById("title").textContent;
    document.dir = yl() ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", $c);
    var a = document.getElementById("languageMenu");
    if (a) { for (var b = [], c = 0; c < xl.length; c++) { var e = xl[c];
            b.push([vl[e], e]) } b.sort(function(a, b) { return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0 }); for (c = a.options.length = 0; c < b.length; c++) { var f = b[c];
            e = f[1];
            f = new Option(f[0], e);
            e == $c && (f.selected = !0);
            a.options.add(f) } 1 >= a.options.length && (a.style.display = "none") }
    for (c =
        1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!Fl(c), a && b && ul(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Gl, 1)
}

function Fl(a) { var b = Hl; try { var c = window.localStorage[b + a] } catch (e) {} return c }

function X(a) { var b = Il(a); return null === b ? "[Unknown message: " + a + "]" : b }

function Il(a) { return (a = document.getElementById(a)) ? (a = a.textContent, a = a.replace(/\\n/g, "\n")) : null }

function Jl(a, b) { if (!a) throw TypeError("Element not found: " + a); "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0) }

function Gl() { if (!ad) { window.GoogleAnalyticsObject = "GoogleAnalyticsFunction"; var a = function(b) {
            (a.q = a.q || []).push(arguments) };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date; var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview") } };
I.$a.animal = {
    ea: function() { this.lf(120);
        Jh(Qh(this), "", "NAME");
        Jh(Lh(this.Df(I.ab, "PIC"), I.Ag), X("Puzzle_picture"));
        Jh(Jh(Lh(Qh(this), I.Ag), X("Puzzle_legs")), new Ph(Kl), "LEGS");
        Jh(this.Df(I.Ta, "TRAITS"), X("Puzzle_traits"));
        this.kg(!1) },
    Nb: function() { var a = document.createElement("mutation");
        a.setAttribute("animal", this.Rc); return a },
    Vc: function(a) { this.dg(parseInt(a.getAttribute("animal"), 10)) },
    Rc: 0,
    dg: function(a) {
        this.Rc = a;
        var b = X("Puzzle_animal" + a);
        Ne(this, "NAME").setValue(b);
        this.Qf = X("Puzzle_animal" +
            a + "HelpUrl")
    },
    Fm: function() { return oe(this, "LEGS") == this.Rc }
};
I.$a.picture = { ea: function() { this.lf(30);
        Qh(this, "PIC");
        this.Zk(!0);
        this.te("") }, Nb: I.$a.animal.Nb, Vc: I.$a.animal.Vc, Rc: 0, dg: function(a) { this.Rc = a; var b = "puzzle/" + X("Puzzle_animal" + a + "Pic"),
            c = X("Puzzle_animal" + a + "PicHeight");
        a = X("Puzzle_animal" + a + "PicWidth");
        Jh(Re(this, "PIC"), new sk(b, a, c)) }, Fm: function() { var a = this.getParent(); return a && a.Rc == this.Rc } };
I.$a.trait = { ea: function() { this.lf(290);
        Jh(Qh(this), "", "NAME");
        this.al(!0);
        this.Yk(!0) }, Nb: function() { var a = document.createElement("mutation");
        a.setAttribute("animal", this.Rc);
        a.setAttribute("trait", this.qr); return a }, Vc: function(a) { this.dg(parseInt(a.getAttribute("animal"), 10), parseInt(a.getAttribute("trait"), 10)) }, Rc: 0, qr: 0, dg: function(a, b) { this.Rc = a;
        this.qr = b;
        a = X("Puzzle_animal" + a + "Trait" + b);
        Ne(this, "NAME").setValue(a) }, Fm: function() { var a = Nh(this); return a && a.Rc == this.Rc } };
I.g.cz = {};
I.g.ADD_COMMENT = "Add Comment";
I.g.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
I.g.CHANGE_VALUE_TITLE = "Change value:";
I.g.CLEAN_UP = "Clean up Blocks";
I.g.COLLAPSE_ALL = "Collapse Blocks";
I.g.COLLAPSE_BLOCK = "Collapse Block";
I.g.COLOUR_BLEND_COLOUR1 = "colour 1";
I.g.COLOUR_BLEND_COLOUR2 = "colour 2";
I.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
I.g.COLOUR_BLEND_RATIO = "ratio";
I.g.COLOUR_BLEND_TITLE = "blend";
I.g.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).";
I.g.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
I.g.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
I.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
I.g.COLOUR_RANDOM_TITLE = "random colour";
I.g.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
I.g.COLOUR_RGB_BLUE = "blue";
I.g.COLOUR_RGB_GREEN = "green";
I.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
I.g.COLOUR_RGB_RED = "red";
I.g.COLOUR_RGB_TITLE = "colour with";
I.g.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
I.g.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
I.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
I.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
I.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
I.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
I.g.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
I.g.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
I.g.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
I.g.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
I.g.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
I.g.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
I.g.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
I.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
I.g.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
I.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
I.g.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
I.g.CONTROLS_IF_MSG_ELSE = "else";
I.g.CONTROLS_IF_MSG_ELSEIF = "else if";
I.g.CONTROLS_IF_MSG_IF = "if";
I.g.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
I.g.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
I.g.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
I.g.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
I.g.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
I.g.CONTROLS_REPEAT_INPUT_DO = "do";
I.g.CONTROLS_REPEAT_TITLE = "repeat %1 times";
I.g.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
I.g.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
I.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
I.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
I.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
I.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
I.g.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
I.g.DELETE_BLOCK = "Delete Block";
I.g.DELETE_VARIABLE = "Delete the '%1' variable";
I.g.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
I.g.DELETE_X_BLOCKS = "Delete %1 Blocks";
I.g.DISABLE_BLOCK = "Disable Block";
I.g.DUPLICATE_BLOCK = "Duplicate";
I.g.DUPLICATE_COMMENT = "Duplicate Comment";
I.g.ENABLE_BLOCK = "Enable Block";
I.g.EXPAND_ALL = "Expand Blocks";
I.g.EXPAND_BLOCK = "Expand Block";
I.g.EXTERNAL_INPUTS = "External Inputs";
I.g.HELP = "Help";
I.g.INLINE_INPUTS = "Inline Inputs";
I.g.IOS_CANCEL = "Cancel";
I.g.IOS_ERROR = "Error";
I.g.IOS_OK = "OK";
I.g.IOS_PROCEDURES_ADD_INPUT = "+ Add Input";
I.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Allow statements";
I.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = "This function has duplicate inputs.";
I.g.IOS_PROCEDURES_INPUTS = "INPUTS";
I.g.IOS_VARIABLES_ADD_BUTTON = "Add";
I.g.IOS_VARIABLES_ADD_VARIABLE = "+ Add Variable";
I.g.IOS_VARIABLES_DELETE_BUTTON = "Delete";
I.g.IOS_VARIABLES_EMPTY_NAME_ERROR = "You can't use an empty variable name.";
I.g.IOS_VARIABLES_RENAME_BUTTON = "Rename";
I.g.IOS_VARIABLES_VARIABLE_NAME = "Variable name";
I.g.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
I.g.LISTS_CREATE_EMPTY_TITLE = "create empty list";
I.g.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
I.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
I.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
I.g.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
I.g.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
I.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
I.g.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
I.g.LISTS_GET_INDEX_FIRST = "first";
I.g.LISTS_GET_INDEX_FROM_END = "# from end";
I.g.LISTS_GET_INDEX_FROM_START = "#";
I.g.LISTS_GET_INDEX_GET = "get";
I.g.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
I.g.LISTS_GET_INDEX_LAST = "last";
I.g.LISTS_GET_INDEX_RANDOM = "random";
I.g.LISTS_GET_INDEX_REMOVE = "remove";
I.g.LISTS_GET_INDEX_TAIL = "";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
I.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
I.g.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
I.g.LISTS_GET_SUBLIST_END_FROM_START = "to #";
I.g.LISTS_GET_SUBLIST_END_LAST = "to last";
I.g.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
I.g.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
I.g.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
I.g.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
I.g.LISTS_GET_SUBLIST_TAIL = "";
I.g.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
I.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
I.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
I.g.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
I.g.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
I.g.LISTS_INDEX_OF_LAST = "find last occurrence of item";
I.g.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
I.g.LISTS_INLIST = "in list";
I.g.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
I.g.LISTS_ISEMPTY_TITLE = "%1 is empty";
I.g.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
I.g.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
I.g.LISTS_LENGTH_TITLE = "length of %1";
I.g.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
I.g.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
I.g.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
I.g.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
I.g.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
I.g.LISTS_REVERSE_MESSAGE0 = "reverse %1";
I.g.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
I.g.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
I.g.LISTS_SET_INDEX_INPUT_TO = "as";
I.g.LISTS_SET_INDEX_INSERT = "insert at";
I.g.LISTS_SET_INDEX_SET = "set";
I.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
I.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.";
I.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
I.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
I.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
I.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.";
I.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
I.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
I.g.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
I.g.LISTS_SORT_ORDER_ASCENDING = "ascending";
I.g.LISTS_SORT_ORDER_DESCENDING = "descending";
I.g.LISTS_SORT_TITLE = "sort %1 %2 %3";
I.g.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
I.g.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
I.g.LISTS_SORT_TYPE_NUMERIC = "numeric";
I.g.LISTS_SORT_TYPE_TEXT = "alphabetic";
I.g.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
I.g.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
I.g.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
I.g.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
I.g.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
I.g.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
I.g.LOGIC_BOOLEAN_FALSE = "false";
I.g.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
I.g.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
I.g.LOGIC_BOOLEAN_TRUE = "true";
I.g.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
I.g.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
I.g.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
I.g.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
I.g.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
I.g.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
I.g.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
I.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
I.g.LOGIC_NEGATE_TITLE = "not %1";
I.g.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
I.g.LOGIC_NULL = "null";
I.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
I.g.LOGIC_NULL_TOOLTIP = "Returns null.";
I.g.LOGIC_OPERATION_AND = "and";
I.g.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
I.g.LOGIC_OPERATION_OR = "or";
I.g.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
I.g.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
I.g.LOGIC_TERNARY_CONDITION = "test";
I.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
I.g.LOGIC_TERNARY_IF_FALSE = "if false";
I.g.LOGIC_TERNARY_IF_TRUE = "if true";
I.g.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
I.g.MATH_ADDITION_SYMBOL = "+";
I.g.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
I.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
I.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
I.g.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
I.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
I.g.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
I.g.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
I.g.MATH_CHANGE_TITLE = "change %1 by %2";
I.g.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
I.g.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
I.g.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
I.g.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
I.g.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
I.g.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
I.g.MATH_DIVISION_SYMBOL = "\u00f7";
I.g.MATH_IS_DIVISIBLE_BY = "is divisible by";
I.g.MATH_IS_EVEN = "is even";
I.g.MATH_IS_NEGATIVE = "is negative";
I.g.MATH_IS_ODD = "is odd";
I.g.MATH_IS_POSITIVE = "is positive";
I.g.MATH_IS_PRIME = "is prime";
I.g.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
I.g.MATH_IS_WHOLE = "is whole";
I.g.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
I.g.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
I.g.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
I.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
I.g.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
I.g.MATH_NUMBER_TOOLTIP = "A number.";
I.g.MATH_ONLIST_HELPURL = "";
I.g.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
I.g.MATH_ONLIST_OPERATOR_MAX = "max of list";
I.g.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
I.g.MATH_ONLIST_OPERATOR_MIN = "min of list";
I.g.MATH_ONLIST_OPERATOR_MODE = "modes of list";
I.g.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
I.g.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
I.g.MATH_ONLIST_OPERATOR_SUM = "sum of list";
I.g.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
I.g.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
I.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
I.g.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
I.g.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
I.g.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
I.g.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
I.g.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
I.g.MATH_POWER_SYMBOL = "^";
I.g.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
I.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
I.g.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
I.g.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
I.g.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
I.g.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
I.g.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
I.g.MATH_ROUND_OPERATOR_ROUND = "round";
I.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
I.g.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
I.g.MATH_ROUND_TOOLTIP = "Round a number up or down.";
I.g.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
I.g.MATH_SINGLE_OP_ABSOLUTE = "absolute";
I.g.MATH_SINGLE_OP_ROOT = "square root";
I.g.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
I.g.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
I.g.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
I.g.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
I.g.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
I.g.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
I.g.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
I.g.MATH_SUBTRACTION_SYMBOL = "-";
I.g.MATH_TRIG_ACOS = "acos";
I.g.MATH_TRIG_ASIN = "asin";
I.g.MATH_TRIG_ATAN = "atan";
I.g.MATH_TRIG_COS = "cos";
I.g.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
I.g.MATH_TRIG_SIN = "sin";
I.g.MATH_TRIG_TAN = "tan";
I.g.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
I.g.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
I.g.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
I.g.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
I.g.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
I.g.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
I.g.NEW_COLOUR_VARIABLE = "Create colour variable...";
I.g.NEW_NUMBER_VARIABLE = "Create number variable...";
I.g.NEW_STRING_VARIABLE = "Create string variable...";
I.g.NEW_VARIABLE = "Create variable...";
I.g.NEW_VARIABLE_TITLE = "New variable name:";
I.g.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
I.g.ORDINAL_NUMBER_SUFFIX = "";
I.g.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
I.g.PROCEDURES_BEFORE_PARAMS = "with:";
I.g.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
I.g.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
I.g.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
I.g.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
I.g.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
I.g.PROCEDURES_CREATE_DO = "Create '%1'";
I.g.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
I.g.PROCEDURES_DEFNORETURN_DO = "";
I.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
I.g.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
I.g.PROCEDURES_DEFNORETURN_TITLE = "to";
I.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
I.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
I.g.PROCEDURES_DEFRETURN_RETURN = "return";
I.g.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
I.g.PROCEDURES_DEF_DUPLICATE_WARNING = "Warning: This function has duplicate parameters.";
I.g.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
I.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
I.g.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
I.g.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
I.g.PROCEDURES_MUTATORARG_TITLE = "input name:";
I.g.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
I.g.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
I.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
I.g.REDO = "Redo";
I.g.REMOVE_COMMENT = "Remove Comment";
I.g.RENAME_VARIABLE = "Rename variable...";
I.g.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
I.g.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
I.g.TEXT_APPEND_TITLE = "to %1 append text %2";
I.g.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
I.g.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
I.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
I.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
I.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
I.g.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
I.g.TEXT_CHARAT_FIRST = "get first letter";
I.g.TEXT_CHARAT_FROM_END = "get letter # from end";
I.g.TEXT_CHARAT_FROM_START = "get letter #";
I.g.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
I.g.TEXT_CHARAT_LAST = "get last letter";
I.g.TEXT_CHARAT_RANDOM = "get random letter";
I.g.TEXT_CHARAT_TAIL = "";
I.g.TEXT_CHARAT_TITLE = "in text %1 %2";
I.g.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
I.g.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
I.g.TEXT_COUNT_MESSAGE0 = "count %1 in %2";
I.g.TEXT_COUNT_TOOLTIP = "Count how many times some text occurs within some other text.";
I.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
I.g.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
I.g.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
I.g.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
I.g.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
I.g.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
I.g.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
I.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
I.g.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
I.g.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
I.g.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
I.g.TEXT_GET_SUBSTRING_TAIL = "";
I.g.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
I.g.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
I.g.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
I.g.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
I.g.TEXT_INDEXOF_TITLE = "in text %1 %2 %3";
I.g.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
I.g.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
I.g.TEXT_ISEMPTY_TITLE = "%1 is empty";
I.g.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
I.g.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
I.g.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
I.g.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
I.g.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
I.g.TEXT_LENGTH_TITLE = "length of %1";
I.g.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
I.g.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
I.g.TEXT_PRINT_TITLE = "print %1";
I.g.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
I.g.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
I.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
I.g.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
I.g.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
I.g.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
I.g.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
I.g.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3";
I.g.TEXT_REPLACE_TOOLTIP = "Replace all occurances of some text within some other text.";
I.g.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Text#reversing-text";
I.g.TEXT_REVERSE_MESSAGE0 = "reverse %1";
I.g.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.";
I.g.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
I.g.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
I.g.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
I.g.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
I.g.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
I.g.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
I.g.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";
I.g.TODAY = "Today";
I.g.UNDO = "Undo";
I.g.VARIABLES_DEFAULT_NAME = "item";
I.g.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
I.g.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
I.g.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
I.g.VARIABLES_SET = "set %1 to %2";
I.g.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
I.g.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
I.g.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
I.g.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
I.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
I.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
I.g.PROCEDURES_DEFRETURN_TITLE = I.g.PROCEDURES_DEFNORETURN_TITLE;
I.g.CONTROLS_IF_IF_TITLE_IF = I.g.CONTROLS_IF_MSG_IF;
I.g.CONTROLS_WHILEUNTIL_INPUT_DO = I.g.CONTROLS_REPEAT_INPUT_DO;
I.g.CONTROLS_IF_MSG_THEN = I.g.CONTROLS_REPEAT_INPUT_DO;
I.g.CONTROLS_IF_ELSE_TITLE_ELSE = I.g.CONTROLS_IF_MSG_ELSE;
I.g.PROCEDURES_DEFRETURN_PROCEDURE = I.g.PROCEDURES_DEFNORETURN_PROCEDURE;
I.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = I.g.LISTS_INLIST;
I.g.LISTS_GET_INDEX_INPUT_IN_LIST = I.g.LISTS_INLIST;
I.g.MATH_CHANGE_TITLE_ITEM = I.g.VARIABLES_DEFAULT_NAME;
I.g.PROCEDURES_DEFRETURN_DO = I.g.PROCEDURES_DEFNORETURN_DO;
I.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = I.g.CONTROLS_IF_MSG_ELSEIF;
I.g.LISTS_GET_INDEX_HELPURL = I.g.LISTS_INDEX_OF_HELPURL;
I.g.CONTROLS_FOREACH_INPUT_DO = I.g.CONTROLS_REPEAT_INPUT_DO;
I.g.LISTS_SET_INDEX_INPUT_IN_LIST = I.g.LISTS_INLIST;
I.g.CONTROLS_FOR_INPUT_DO = I.g.CONTROLS_REPEAT_INPUT_DO;
I.g.LISTS_CREATE_WITH_ITEM_TITLE = I.g.VARIABLES_DEFAULT_NAME;
I.g.TEXT_APPEND_VARIABLE = I.g.VARIABLES_DEFAULT_NAME;
I.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = I.g.VARIABLES_DEFAULT_NAME;
I.g.LISTS_INDEX_OF_INPUT_IN_LIST = I.g.LISTS_INLIST;
I.g.PROCEDURES_DEFRETURN_COMMENT = I.g.PROCEDURES_DEFNORETURN_COMMENT;
I.g.MATH_HUE = "230";
I.g.LOOPS_HUE = "120";
I.g.LISTS_HUE = "260";
I.g.LOGIC_HUE = "210";
I.g.VARIABLES_HUE = "330";
I.g.TEXTS_HUE = "160";
I.g.PROCEDURES_HUE = "290";
I.g.COLOUR_HUE = "20";
I.g.VARIABLES_DYNAMIC_HUE = "310";
var Z = {
    Rg: null,
    ea: function() {
        El();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = X("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = X("Games_linkAlert"), BlocklyStorage.HASH_ERROR = X("Games_hashError"), BlocklyStorage.XML_ERROR = X("Games_xmlError"), BlocklyStorage.alert = Y.mr.bind(Y, a), a && Jl(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Z.As, !0);
        I.$a && (I.$a.Sr = !1);
        I.lo &&
            (I.lo.Sr = !1)
    },
    kz: function(a, b) { if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else { var c = null; try { c = window.sessionStorage.zk } catch (h) {} c && delete window.sessionStorage.zk; var e = Fl(zl),
                f = b && Fl(zl - 1);
            f && "function" == typeof b && (f = b(f));
            (a = c || e || f || a) && Z.Wq(a) } },
    Wq: function(a) { Z.Rg ? Z.Rg.setValue(a, -1) : (a = I.C.fc(a), W.clear(), I.C.gd(a, W), W.Ml()) },
    mm: function() {
        if (Z.Rg) var a = Z.Rg.getValue();
        else {
            a = I.C.Yn(W, !0);
            if (1 == M(W, !1).length &&
                a.querySelector) { var b = a.querySelector("block");
                b && (b.removeAttribute("x"), b.removeAttribute("y")) } a = I.C.Wc(a)
        }
        return a
    },
    oi: function() { return W },
    Vu: function() { window.localStorage && (window.localStorage[Hl + zl] = Z.mm()) },
    Ai: function() { window.location = (ad ? "index.html" : "./") + "?lang=" + $c },
    As: function() {
        if (window.sessionStorage) { if (Z.Rg) var a = Z.Rg.getValue();
            else a = I.C.Yn(W), a = I.C.Wc(a);
            window.sessionStorage.zk = a } a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var b = window.location.search;
        b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    Rm: function() { 10 > zl ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + $c + "&level=" + (zl + 1) : Z.Ai() },
    Tp: function(a, b) {
        if (a) { var c = a.match(/^block_id_([^']+)$/);
            c && (a = c[1]) }
        var e = a;
        a = W;
        if (void 0 === b) {
            for (var f = 0; c =
                a.xi[f]; f++) c.Cb(!1);
            a.xi.length = 0
        }
        if (c = e ? fe(a, e) : null)(b = void 0 === b || b) ? -1 == a.xi.indexOf(c) && a.xi.push(c) : xa(a.xi, c), c.Cb(b)
    },
    au: function(a, b) { a = document.getElementById(a);
        a.firstChild || (a = I.Ue(a, { rtl: yl(), readOnly: !0 }), "string" != typeof b && (b = b.join("")), I.C.gd(I.C.fc(b), a)) },
    fv: function(a) { return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "") },
    Le: function(a) {
        if ("click" == a.type && "touchend" == Z.Le.kn && Z.Le.jn + 2E3 > Date.now() || Z.Le.kn == a.type && Z.Le.jn + 400 > Date.now()) return a.preventDefault(),
            a.stopPropagation(), !0;
        Z.Le.kn = a.type;
        Z.Le.jn = Date.now();
        return !1
    }
};
Z.Le.kn = null;
Z.Le.jn = 0;
Z.hz = function() { var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a) };
Z.iz = function() { var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a) };
window.BlocklyInterface = Z;
Z.setCode = Z.Wq;
Z.getCode = Z.mm;
Z.getWorkspace = Z.oi;
var Y = {
    je: !1,
    op: null,
    Mj: null,
    xh: function(a, b, c, e, f, h) {
        function k() { Y.je && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden") }
        if (!a) throw TypeError("Content not found: " + a);
        Y.je && Y.Cc(!1);
        I.yb(!0);
        Y.je = !0;
        Y.op = b;
        Y.Mj = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), Y.Wl = I.jc(e, "mousedown", null, Y.ft));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (Y.Bk(b, !1, .2), Y.Bk(l, !0, .8), setTimeout(k, 175)) : k()
    },
    pp: 0,
    qp: 0,
    ft: function(a) { Y.Zl(); if (!I.h.Xe(a)) { var b = document.getElementById("dialog");
            Y.pp = b.offsetLeft - a.clientX;
            Y.qp = b.offsetTop - a.clientY;
            Y.Yl = I.jc(document, "mouseup", null, Y.Zl);
            Y.Xl = I.jc(document, "mousemove", null, Y.gt);
            a.stopPropagation() } },
    gt: function(a) {
        var b = document.getElementById("dialog"),
            c = Y.pp + a.clientX;
        a = Y.qp + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    Zl: function() { Y.Yl && (I.Ba(Y.Yl), Y.Yl = null);
        Y.Xl && (I.Ba(Y.Xl), Y.Xl = null) },
    Cc: function(a) {
        function b() { e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden" }
        if (Y.je) {
            Y.Zl();
            Y.Wl && (I.Ba(Y.Wl), Y.Wl = null);
            Y.je = !1;
            Y.Mj && Y.Mj();
            Y.Mj = null;
            var c = !1 === a ?
                null : Y.op;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            c && a ? (Y.Bk(a, !1, .8), Y.Bk(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    Bk: function(a, b, c) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top =
                h.y + "px";
            f.style.opacity = c
        }
        if (a) { var f = document.getElementById("dialogBorder"),
                h = Y.yt(a);
            b ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible" }
    },
    yt: function(a) { var b = qh(a);
        b = { x: b.x, y: b.y };
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth); return b },
    mr: function(a, b) {
        var c = document.getElementById("containerStorage");
        c.textContent = "";
        b = b.split("\n");
        for (var e = 0; e < b.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(b[e]));
            c.appendChild(f)
        }
        c = document.getElementById("dialogStorage");
        Y.xh(c, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, Y.Qn);
        Y.Pn()
    },
    gs: function() {
        if (!Fl(zl))
            if (Y.je || W.tb()) setTimeout(Y.gs, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", Y.Cc, !0);
                b.addEventListener("touchend", Y.Cc, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Z.Ai, !0);
                b.addEventListener("touchend",
                    Z.Ai, !0);
                Y.xh(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", Y.wo, !0) });
                document.body.addEventListener("keydown", Y.wo, !0)
            }
    },
    $q: function() {
        document.getElementById("galleryXml").value = Z.mm();
        var a = document.getElementById("galleryDialog");
        if (!Y.$q.Uu) {
            var b = document.getElementById("galleryCancel");
            b.addEventListener("click", Y.Cc, !0);
            b.addEventListener("touchend", Y.Cc, !0);
            b = document.getElementById("galleryOk");
            b.addEventListener("click", Y.km, !0);
            b.addEventListener("touchend", Y.km, !0);
            Y.$q.Uu = !0
        }
        b = document.getElementById("submitButton");
        Y.xh(a, b, !0, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", Y.Cp, !0) });
        document.body.addEventListener("keydown", Y.Cp, !0);
        setTimeout(function() { document.getElementById("galleryTitle").focus() }, 250)
    },
    Xy: function() {
        var a = document.getElementById("dialogDone");
        if (W) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = xk();
            c = Z.fv(c);
            var e = c.replace(/\/\/[^\n]*/g,
                "");
            e = e.replace(/\/\*.*\*\//g, "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = c;
            "function" == typeof prettyPrintOne && (c = f.innerHTML, c = prettyPrintOne(c, "js"), f.innerHTML = c);
            c = 1 == e ? X("Games_linesOfCode1") : X("Games_linesOfCode2").replace("%1", String(e));
            b.appendChild(document.createTextNode(c))
        }
        c = 10 > zl ? X("Games_nextLevel").replace("%1", String(zl + 1)) : X("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", Y.Cc, !0);
        b.addEventListener("touchend", Y.Cc, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Z.Rm, !0);
        b.addEventListener("touchend", Z.Rm, !0);
        Y.xh(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", Y.Ro, !0) });
        document.body.addEventListener("keydown", Y.Ro, !0);
        document.getElementById("dialogDoneText").textContent = c
    },
    np: function(a) {
        !Y.je || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (Y.Cc(!0), a.stopPropagation(),
            a.preventDefault())
    },
    Pn: function() { document.body.addEventListener("keydown", Y.np, !0) },
    Qn: function() { document.body.removeEventListener("keydown", Y.np, !0) },
    Ro: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Cc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Z.Rm() },
    wo: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Cc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Z.Ai() },
    Cp: function(a) { 27 == a.keyCode ? Y.Cc(!0) : 13 == a.keyCode && Y.km() },
    km: function() {
        var a =
            document.getElementById("galleryTitle");
        if (a.value.trim()) { a = document.getElementById("galleryForm"); for (var b = [], c = 0, e; e = a.elements[c]; c++) e.name && (b[c] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)); var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function() { if (4 == f.readyState) { var a = 200 == f.status ? X("Games_submitted") : X("Games_httpRequestError") + "\nStatus: " + f.status;
                    Y.mr(null, a) } };
            f.send(b.join("&"));
            Y.Cc(!0) } else a.value =
            "", a.focus()
    }
};
window.BlocklyDialogs = Y;
Y.hideDialog = Y.Cc;
var Hl = "puzzle";

function Ll(a) { for (var b = a.length - 1; 0 < b; b--) { var c = Math.floor(Math.random() * (b + 1)),
            e = a[b];
        a[b] = a[c];
        a[c] = e } }

function Kl() { for (var a = [
            [X("Puzzle_legsChoose"), "0"]
        ], b = 1, c; c = Il("Puzzle_animal" + b + "Legs");) a[b] = [c, String(b)], b++;
    a.sort(function(a, b) { return a[0] - b[0] }); return a }

function Ml() {
    for (var a = le(W), b = 0, c = [], e = 0, f; f = a[e]; e++) f.Fm() || (b++, f.select(), c.push(f));
    var h = document.getElementById("graphValue");
    setTimeout(function() { h.style.width = 100 * (a.length - b) / a.length + "px" }, 500);
    1 == b ? e = [X("Puzzle_error1"), X("Puzzle_tryAgain")] : b ? e = [X("Puzzle_error2").replace("%1", b), X("Puzzle_tryAgain")] : (e = [X("Puzzle_error0").replace("%1", a.length)], Z.Vu());
    f = document.getElementById("answerMessage");
    f.textContent = "";
    for (var k = 0; k < e.length; k++) {
        var l = document.createElement("div");
        l.appendChild(document.createTextNode(e[k]));
        f.appendChild(l)
    }
    e = document.getElementById("answers");
    f = document.getElementById("checkButton");
    Y.xh(e, f, !0, !0, { width: "25%", left: yl() ? "5%" : "70%", top: "5em" }, b ? Y.Qn : Z.Ai);
    Y.Pn();
    if (c.length) { Ll(c); var m = c[0],
            n = function() { m.select();
                Y.je && (setTimeout(function() { m.ze() }, 150), setTimeout(n, 300)) };
        n() } else setTimeout(Nl, 2E3), I.selected && I.selected.ze()
}

function Nl() { W.vd.play("win", .5); for (var a = M(W, !1), b = 0, c; c = a[b]; b++) Ol(c, b / a.length * 360) }

function Ol(a, b) {
    if (Y.je) {
        var c = W.Va(),
            e = c.Oa / 2,
            f = c.qa / 2,
            h = a.kb();
        c = a.ca();
        yl() && (c.x -= h.width);
        var k = Math.max(175, Math.min(e, f) - Math.max(h.height, h.width) / 2),
            l = Date.now(),
            m = b + l / 50 % 360;
        k *= Math.sin(l % 5E3 / 5E3 * 2 * Math.PI) / 8 + .875;
        f = k * Math.cos(ec(m)) + f - h.width / 2;
        h = k * Math.sin(ec(m)) + e - h.height / 2;
        5 > Math.sqrt(Math.pow(f - c.x, 2) + Math.pow(h - c.y, 2)) ? (e = f - c.x, c = h - c.y) : (c = 180 * Math.atan2(h - c.y, f - c.x) / Math.PI % 360, c = 0 > 360 * c ? c + 360 : c, e = Math.round(5 * Math.cos(ec(c))), c = Math.round(5 * Math.sin(ec(c))));
        a.moveBy(e, c);
        setTimeout(Ol.bind(null,
            a, b), 50)
    }
}

function Pl(a) {
    Z.au("sample", '<xml>;<block type="animal" x="5" y="5">;<mutation animal="1"></mutation>;<title name="LEGS">1</title>;<value name="PIC">;<block type="picture">;<mutation animal="1"></mutation>;</block>;</value>;<statement name="TRAITS">;<block type="trait">;<mutation animal="1" trait="2"></mutation>;<next>;<block type="trait">;<mutation animal="1" trait="1"></mutation>;</block>;</next>;</block>;</statement>;</block>;</xml>'.split(";"));
    var b = document.getElementById("help"),
        c = document.getElementById("helpButton");
    Y.xh(b, c, a, !0, { width: "50%", left: "25%", top: "5em" }, Y.Qn);
    Y.Pn()
}
window.addEventListener("load", function() {
    function a() { c.style.width = window.innerWidth - 20 + "px";
        c.style.height = window.innerHeight - c.offsetTop - 15 + "px" } document.body.innerHTML = Zc();
    Z.ea();
    var b = yl(),
        c = document.getElementById("blockly");
    a(null);
    window.addEventListener("resize", a);
    W = I.Ue("blockly", { media: "third-party/blockly/media/", rtl: b, scrollbars: !1, trashcan: !1 });
    var e = Fl(zl);
    try { var f = window.sessionStorage.zk } catch (C) { f = null }
    if (f) delete window.sessionStorage.zk, b = I.C.fc(f), I.C.gd(b, W);
    else if (e) b =
        I.C.fc(e), I.C.gd(b, W);
    else {
        var h = [],
            k = [],
            l = [];
        f = 1;
        for (var m; Il("Puzzle_animal" + f);) { m = W.Ri("animal");
            m.dg(f);
            h.push(m);
            m = W.Ri("picture");
            m.dg(f);
            k.push(m); for (var n = 1; Il("Puzzle_animal" + f + "Trait" + n);) m = W.Ri("trait"), m.dg(f, n), l.push(m), n++;
            f++ } Ll(h);
        Ll(k);
        Ll(l);
        h = [].concat(h, k, l);
        b && h.reverse();
        for (f = 0; m = h[f]; f++) m.Wk(!1), m.ie(), m.U();
        for (f = k = 0; m = h[f]; f++) l = m.P().getBBox(), m.Ty = l.width, m.Sy = l.height, m.Eo = l.width * l.height, k += m.Eo;
        I.tg(W);
        n = I.Tn(Q(W));
        n.width -= 50;
        n.height -= 50;
        var p = 0;
        for (f = 0; m = h[f]; f++) {
            l =
                m.P().getBBox();
            var r = b ? l.width + p / k * n.width : p / k * (n.width - l.width);
            r = Math.round(r + 50 * Math.random());
            m.moveBy(r, Math.round(Math.random() * (n.height - l.height)));
            p += m.Eo
        }
    }
    W.Ml();
    Jl("checkButton", Ml);
    Jl("helpButton", function() { Pl(!0) });
    e || Pl(!1);
    I.vc *= 2;
    W.vd.load(["puzzle/win.mp3", "puzzle/win.ogg"], "win")
});