// Automatically generated file.  Do not edit!
var d, g = this;

function aa(a) { return void 0 !== a }

function q(a) { return "string" == typeof a }

function t(a) { return "number" == typeof a }

function ba(a, b) { a = a.split("."); var c = g;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var e; a.length && (e = a.shift());) !a.length && aa(b) ? c[e] = b : c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} }

function ca() {}

function da(a) { a.oo = void 0;
    a.re = function() { return a.oo ? a.oo : a.oo = new a } }

function ea(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function u(a) { return "array" == ea(a) }

function fa(a) { var b = ea(a); return "array" == b || "object" == b && "number" == typeof a.length }

function v(a) { return "function" == ea(a) }

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
    a.s = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.AB = function(a, c, h) { for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f]; return b.prototype[c].apply(a, e) } };
// Copyright 2013 Google Inc.  Apache License 2.0
var z = {};
z.J = Object(null);
var pa;
var qa = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) { if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1; for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c; return -1 },
    ra = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++) h in f && b.call(c, f[h], h, a) },
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

function Ba(a, b, c, e) { Array.prototype.splice.apply(a, Ca(arguments, 1)) }

function Ca(a, b, c) { return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c) }

function Da(a, b) { if (!fa(a) || !fa(b) || a.length != b.length) return !1; for (var c = a.length, e = Ea, f = 0; f < c; f++)
        if (!e(a[f], b[f])) return !1; return !0 }

function Ea(a, b) { return a === b };

function Fa(a, b) { return 0 == a.lastIndexOf(b, 0) }

function Ga(a) { return /^[\s\xa0]*$/.test(a) }

function Ha(a) { return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") }
var Ia = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

function Ka(a) { if (!La.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ma, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Na, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Oa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Pa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Qa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ra, "&#0;")); return a }
var Ma = /&/g,
    Na = /</g,
    Oa = />/g,
    Pa = /"/g,
    Qa = /'/g,
    Ra = /\x00/g,
    La = /[\x00&<>"']/;

function Sa(a) { var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' }; var c = g.document.createElement("div"); return a.replace(Ta, function(a, f) { var e = b[a]; if (e) return e; "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (e = String.fromCharCode(f)));
        e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1)); return b[a] = e }) }

function Ua(a) { return a.replace(/&([^;]+);/g, function(a, c) { switch (c) {
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
var Ta = /&([^;\s<&]+);?/g;

function Wa(a, b) { return a < b ? -1 : a > b ? 1 : 0 }

function Xa() { return "background-color".replace(/\-([a-z])/g, function(a, b) { return b.toUpperCase() }) }

function Ya(a) { var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s"; return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, f) { return b + f.toUpperCase() }) };
var Za;
a: { var $a = g.navigator; if ($a) { var ab = $a.userAgent; if (ab) { Za = ab; break a } } Za = "" }

function bb(a) { return -1 != Za.indexOf(a) };

function cb(a, b, c) { for (var e in a) b.call(c, a[e], e, a) }
var db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function eb(a, b) { for (var c, e, f = 1; f < arguments.length; f++) { e = arguments[f]; for (c in e) a[c] = e[c]; for (var h = 0; h < db.length; h++) c = db[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]) } }

function fb(a) { var b = arguments.length; if (1 == b && u(arguments[0])) return fb.apply(null, arguments[0]); for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0; return c };

function gb(a) { gb[" "](a); return a } gb[" "] = ca;

function hb(a, b) { var c = ib; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
var jb = bb("Opera"),
    A = bb("Trident") || bb("MSIE"),
    kb = bb("Edge"),
    lb = bb("Gecko") && !(-1 != Za.toLowerCase().indexOf("webkit") && !bb("Edge")) && !(bb("Trident") || bb("MSIE")) && !bb("Edge"),
    B = -1 != Za.toLowerCase().indexOf("webkit") && !bb("Edge"),
    mb = B && bb("Mobile"),
    nb = bb("Macintosh"),
    ob = bb("Android"),
    pb = bb("iPhone") && !bb("iPod") && !bb("iPad"),
    qb = bb("iPad");

function rb() { var a = g.document; return a ? a.documentMode : void 0 }
var sb;
a: { var tb = "",
        ub = function() { var a = Za; if (lb) return /rv:([^\);]+)(\)|;)/.exec(a); if (kb) return /Edge\/([\d\.]+)/.exec(a); if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (B) return /WebKit\/(\S+)/.exec(a); if (jb) return /(?:Version)[ \/]?(\S+)/.exec(a) }();ub && (tb = ub ? ub[1] : ""); if (A) { var vb = rb(); if (null != vb && vb > parseFloat(tb)) { sb = String(vb); break a } } sb = tb }
var ib = {};

function wb(a) { return hb(a, function() { for (var b = 0, c = Ia(String(sb)).split("."), e = Ia(String(a)).split("."), f = Math.max(c.length, e.length), h = 0; 0 == b && h < f; h++) { var k = c[h] || "",
                l = e[h] || "";
            do { k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""]; if (0 == k[0].length && 0 == l[0].length) break;
                b = Wa(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || Wa(0 == k[2].length, 0 == l[2].length) || Wa(k[2], l[2]);
                k = k[3];
                l = l[3] } while (0 == b) } return 0 <= b }) }
var xb;
var yb = g.document;
xb = yb && A ? rb() || ("CSS1Compat" == yb.compatMode ? parseInt(sb, 10) : 5) : void 0;
var zb = !A || 9 <= Number(xb),
    Ab = !A || 9 <= Number(xb),
    Bb = A && !wb("9"),
    Cb = "ontouchstart" in g || !!(g.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.navigator || !g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints),
    Db = "PointerEvent" in g,
    Eb = "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
    Fb = function() {
        if (!g.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
        g.addEventListener("test",
            ca, b);
        g.removeEventListener("test", ca, b);
        return a
    }();

function Gb() { 0 != Hb && (Ib[ia(this)] = this);
    this.Ph = this.Ph;
    this.ff = this.ff }
var Hb = 0,
    Ib = {};
Gb.prototype.Ph = !1;
Gb.prototype.A = function() { if (!this.Ph && (this.Ph = !0, this.Ta(), 0 != Hb)) { var a = ia(this); if (0 != Hb && this.ff && 0 < this.ff.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Ib[a] } };

function Jb(a, b) { a.Ph ? aa(void 0) ? b.call(void 0) : b() : (a.ff || (a.ff = []), a.ff.push(aa(void 0) ? na(b, void 0) : b)) } Gb.prototype.Ta = function() { if (this.ff)
        for (; this.ff.length;) this.ff.shift()() };

function Kb(a) { a && "function" == typeof a.A && a.A() };

function Lb(a, b) { this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.$g = !1;
    this.Zs = !0 } Lb.prototype.stopPropagation = function() { this.$g = !0 };
Lb.prototype.preventDefault = function() { this.defaultPrevented = !0;
    this.Zs = !1 };

function Mb(a) { return B ? "webkit" + a : jb ? "o" + a.toLowerCase() : a.toLowerCase() }
var Nb = {
        xy: "click",
        QA: "rightclick",
        Hy: "dblclick",
        Dh: "mousedown",
        Eh: "mouseup",
        Ki: "mouseover",
        Ji: "mouseout",
        nu: "mousemove",
        lu: "mouseenter",
        mu: "mouseleave",
        Ch: "mousecancel",
        VA: "selectionchange",
        WA: "selectstart",
        wB: "wheel",
        wz: "keypress",
        vz: "keydown",
        xz: "keyup",
        uy: "blur",
        lz: "focus",
        Iy: "deactivate",
        mz: "focusin",
        nz: "focusout",
        zh: "change",
        NA: "reset",
        UA: "select",
        dB: "submit",
        sz: "input",
        JA: "propertychange",
        Zy: "dragstart",
        Uy: "drag",
        Wy: "dragenter",
        Yy: "dragover",
        Xy: "dragleave",
        dz: "drop",
        Vy: "dragend",
        lB: "touchstart",
        kB: "touchmove",
        jB: "touchend",
        iB: "touchcancel",
        qy: "beforeunload",
        Cy: "consolemessage",
        Dy: "contextmenu",
        Jy: "devicechange",
        Ky: "devicemotion",
        Ly: "deviceorientation",
        Oy: "DOMContentLoaded",
        iz: "error",
        rz: "help",
        yz: "load",
        Gz: "losecapture",
        tA: "orientationchange",
        LA: "readystatechange",
        OA: "resize",
        RA: "scroll",
        nB: "unload",
        vy: "canplay",
        wy: "canplaythrough",
        fz: "durationchange",
        gz: "emptied",
        hz: "ended",
        Bz: "loadeddata",
        Cz: "loadedmetadata",
        xA: "pause",
        yA: "play",
        zA: "playing",
        KA: "ratechange",
        SA: "seeked",
        TA: "seeking",
        aB: "stalled",
        eB: "suspend",
        hB: "timeupdate",
        uB: "volumechange",
        vB: "waiting",
        $A: "sourceopen",
        ZA: "sourceended",
        YA: "sourceclosed",
        Zx: "abort",
        pB: "update",
        sB: "updatestart",
        qB: "updateend",
        qz: "hashchange",
        uA: "pagehide",
        vA: "pageshow",
        IA: "popstate",
        Fy: "copy",
        wA: "paste",
        Gy: "cut",
        jy: "beforecopy",
        ky: "beforecut",
        oy: "beforepaste",
        bA: "online",
        aA: "offline",
        Iz: "message",
        By: "connect",
        uz: "install",
        $x: "activate",
        kz: "fetch",
        oz: "foreignfetch",
        Jz: "messageerror",
        bB: "statechange",
        rB: "updatefound",
        Ey: "controllerchange",
        hy: Mb("AnimationStart"),
        ey: Mb("AnimationEnd"),
        gy: Mb("AnimationIteration"),
        mB: Mb("TransitionEnd"),
        BA: "pointerdown",
        HA: "pointerup",
        AA: "pointercancel",
        EA: "pointermove",
        GA: "pointerover",
        FA: "pointerout",
        CA: "pointerenter",
        DA: "pointerleave",
        pz: "gotpointercapture",
        Hz: "lostpointercapture",
        Kz: "MSGestureChange",
        Lz: "MSGestureEnd",
        Mz: "MSGestureHold",
        Nz: "MSGestureStart",
        Oz: "MSGestureTap",
        Pz: "MSGotPointerCapture",
        Qz: "MSInertiaStart",
        Rz: "MSLostPointerCapture",
        Sz: "MSPointerCancel",
        Tz: "MSPointerDown",
        Uz: "MSPointerEnter",
        Vz: "MSPointerHover",
        Wz: "MSPointerLeave",
        Xz: "MSPointerMove",
        Yz: "MSPointerOut",
        Zz: "MSPointerOver",
        $z: "MSPointerUp",
        fB: "text",
        gB: A ? "textinput" : "textInput",
        zy: "compositionstart",
        Ay: "compositionupdate",
        yy: "compositionend",
        ly: "beforeinput",
        jz: "exit",
        zz: "loadabort",
        Az: "loadcommit",
        Dz: "loadredirect",
        Ez: "loadstart",
        Fz: "loadstop",
        PA: "responsive",
        XA: "sizechanged",
        oB: "unresponsive",
        tB: "visibilitychange",
        cB: "storage",
        Ty: "DOMSubtreeModified",
        Py: "DOMNodeInserted",
        Ry: "DOMNodeRemoved",
        Sy: "DOMNodeRemovedFromDocument",
        Qy: "DOMNodeInsertedIntoDocument",
        My: "DOMAttrModified",
        Ny: "DOMCharacterDataModified",
        py: "beforeprint",
        by: "afterprint",
        ny: "beforeinstallprompt",
        iy: "appinstalled"
    },
    Ob = {
        Dh: Db ? "pointerdown" : Eb ? "MSPointerDown" : "mousedown",
        Eh: Db ? "pointerup" : Eb ? "MSPointerUp" : "mouseup",
        Ch: Db ? "pointercancel" : Eb ? "MSPointerCancel" : "mousecancel",
        nu: Db ? "pointermove" : Eb ? "MSPointerMove" : "mousemove",
        Ki: Db ? "pointerover" : Eb ? "MSPointerOver" : "mouseover",
        Ji: Db ? "pointerout" : Eb ? "MSPointerOut" : "mouseout",
        lu: Db ? "pointerenter" : Eb ? "MSPointerEnter" : "mouseenter",
        mu: Db ? "pointerleave" : Eb ? "MSPointerLeave" : "mouseleave"
    };

function Pb(a, b) { Lb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.To = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.le = null;
    a && this.L(a, b) } y(Pb, Lb);
var Qb = [1, 4, 2],
    Rb = { 2: "touch", 3: "pen", 4: "mouse" };
Pb.prototype.L = function(a, b) {
    var c = this.type = a.type,
        e = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) { if (lb) { a: { try { gb(b.nodeName); var f = !0; break a } catch (h) {} f = !1 } f || (b = null) } } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === e ? (this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.To = nb ? a.metaKey : a.ctrlKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = q(a.pointerType) ? a.pointerType : Rb[a.pointerType] || "";
    this.state = a.state;
    this.le = a;
    a.defaultPrevented && this.preventDefault()
};

function Sb(a) { return zb ? 0 == a.le.button : "click" == a.type ? !0 : !!(a.le.button & Qb[0]) } Pb.prototype.stopPropagation = function() { Pb.s.stopPropagation.call(this);
    this.le.stopPropagation ? this.le.stopPropagation() : this.le.cancelBubble = !0 };
Pb.prototype.preventDefault = function() { Pb.s.preventDefault.call(this); var a = this.le; if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Bb) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
var Tb = "closure_listenable_" + (1E6 * Math.random() | 0);

function Ub(a) { return !(!a || !a[Tb]) }
var Vb = 0;

function Wb(a, b, c, e, f) { this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!e;
    this.Ll = f;
    this.key = ++Vb;
    this.ui = this.Rk = !1 }

function Xb(a) { a.ui = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ll = null };

function Yb(a) { this.src = a;
    this.xc = {};
    this.vk = 0 } Yb.prototype.add = function(a, b, c, e, f) { var h = a.toString();
    a = this.xc[h];
    a || (a = this.xc[h] = [], this.vk++); var k = Zb(a, b, e, f); - 1 < k ? (b = a[k], c || (b.Rk = !1)) : (b = new Wb(b, this.src, h, !!e, f), b.Rk = c, a.push(b)); return b };
Yb.prototype.remove = function(a, b, c, e) { a = a.toString(); if (!(a in this.xc)) return !1; var f = this.xc[a];
    b = Zb(f, b, c, e); return -1 < b ? (Xb(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.xc[a], this.vk--), !0) : !1 };

function $b(a, b) { var c = b.type;
    c in a.xc && xa(a.xc[c], b) && (Xb(b), 0 == a.xc[c].length && (delete a.xc[c], a.vk--)) } Yb.prototype.removeAll = function(a) { a = a && a.toString(); var b = 0,
        c; for (c in this.xc)
        if (!a || c == a) { for (var e = this.xc[c], f = 0; f < e.length; f++) ++b, Xb(e[f]);
            delete this.xc[c];
            this.vk-- } return b };
Yb.prototype.oj = function(a, b, c, e) { a = this.xc[a.toString()]; var f = -1;
    a && (f = Zb(a, b, c, e)); return -1 < f ? a[f] : null };

function Zb(a, b, c, e) { for (var f = 0; f < a.length; ++f) { var h = a[f]; if (!h.ui && h.listener == b && h.capture == !!c && h.Ll == e) return f } return -1 };
var ac = "closure_lm_" + (1E6 * Math.random() | 0),
    bc = {},
    cc = 0;

function dc(a, b, c, e, f) { if (e && e.once) return ec(a, b, c, e, f); if (u(b)) { for (var h = 0; h < b.length; h++) dc(a, b[h], c, e, f); return null } c = fc(c); return Ub(a) ? a.na(b, c, ha(e) ? !!e.capture : !!e, f) : gc(a, b, c, !1, e, f) }

function gc(a, b, c, e, f, h) { if (!b) throw Error("Invalid event type"); var k = ha(f) ? !!f.capture : !!f,
        l = hc(a);
    l || (a[ac] = l = new Yb(a));
    c = l.add(b, c, e, k, h); if (c.proxy) return c;
    e = ic();
    c.proxy = e;
    e.src = a;
    e.listener = c; if (a.addEventListener) Fb || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), e, f);
    else if (a.attachEvent) a.attachEvent(jc(b.toString()), e);
    else if (a.addListener && a.removeListener) a.addListener(e);
    else throw Error("addEventListener and attachEvent are unavailable.");
    cc++; return c }

function ic() { var a = kc,
        b = Ab ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c }; return b }

function ec(a, b, c, e, f) { if (u(b)) { for (var h = 0; h < b.length; h++) ec(a, b[h], c, e, f); return null } c = fc(c); return Ub(a) ? a.ls(b, c, ha(e) ? !!e.capture : !!e, f) : gc(a, b, c, !0, e, f) }

function lc(a, b, c, e, f) { if (u(b))
        for (var h = 0; h < b.length; h++) lc(a, b[h], c, e, f);
    else e = ha(e) ? !!e.capture : !!e, c = fc(c), Ub(a) ? a.jd(b, c, e, f) : a && (a = hc(a)) && (b = a.oj(b, c, e, f)) && mc(b) }

function mc(a) { if (!t(a) && a && !a.ui) { var b = a.src; if (Ub(b)) $b(b.Xe, a);
        else { var c = a.type,
                e = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(jc(c), e) : b.addListener && b.removeListener && b.removeListener(e);
            cc--;
            (c = hc(b)) ? ($b(c, a), 0 == c.vk && (c.src = null, b[ac] = null)) : Xb(a) } } }

function jc(a) { return a in bc ? bc[a] : bc[a] = "on" + a }

function nc(a, b, c, e) { var f = !0; if (a = hc(a))
        if (b = a.xc[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) { var h = b[a];
                h && h.capture == c && !h.ui && (h = oc(h, e), f = f && !1 !== h) }
    return f }

function oc(a, b) { var c = a.listener,
        e = a.Ll || a.src;
    a.Rk && mc(a); return c.call(e, b) }

function kc(a, b) {
    if (a.ui) return !0;
    if (!Ab) {
        if (!b) a: { b = ["window", "event"]; for (var c = g, e = 0; e < b.length; e++)
                if (c = c[b[e]], null == c) { b = null; break a } b = c } e = b;
        b = new Pb(e, this);
        c = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: { var f = !1; if (0 == e.keyCode) try { e.keyCode = -1; break a } catch (k) { f = !0 }
                if (f || void 0 == e.returnValue) e.returnValue = !0 } e = [];
            for (f = b.currentTarget; f; f = f.parentNode) e.push(f);a = a.type;
            for (f = e.length - 1; !b.$g && 0 <= f; f--) { b.currentTarget = e[f]; var h = nc(e[f], a, !0, b);
                c = c && h }
            for (f = 0; !b.$g && f < e.length; f++) b.currentTarget =
                e[f],
            h = nc(e[f], a, !1, b),
            c = c && h
        }
        return c
    }
    return oc(a, new Pb(b, this))
}

function hc(a) { a = a[ac]; return a instanceof Yb ? a : null }
var pc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function fc(a) { if (v(a)) return a;
    a[pc] || (a[pc] = function(b) { return a.handleEvent(b) }); return a[pc] };
// Copyright 2016 Google Inc.  Apache License 2.0
z.Touch = {};
z.Touch.rk = null;
z.Touch.ae = {};
g.PointerEvent ? z.Touch.ae = { mousedown: ["pointerdown"], mouseenter: ["pointerenter"], mouseleave: ["pointerleave"], mousemove: ["pointermove"], mouseout: ["pointerout"], mouseover: ["pointerover"], mouseup: ["pointerup", "pointercancel"], touchend: ["pointerup"], touchcancel: ["pointercancel"] } : Cb && (z.Touch.ae = { mousedown: ["touchstart"], mousemove: ["touchmove"], mouseup: ["touchend", "touchcancel"] });
z.$l = 0;
z.Jw = function(a, b) { z.Xf();
    a.changedTouches && 1 != a.changedTouches.length || (z.$l = setTimeout(function() { a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        b && qc(b, a) }, z.gu)) };
z.Xf = function() { z.$l && (clearTimeout(z.$l), z.$l = 0) };
z.Touch.Te = function() { z.Touch.rk = null };
z.Touch.Bp = function(a) { return !z.Touch.zw(a) || z.Touch.$u(a) };
z.Touch.Hl = function(a) { return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 != a.changedTouches[0].identifier && null != a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse" };
z.Touch.$u = function(a) { var b = z.Touch.Hl(a); return void 0 != z.Touch.rk && null != z.Touch.rk ? z.Touch.rk == b : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (z.Touch.rk = b, !0) : !1 };
z.Touch.zx = function(a) { if (Fa(a.type, "touch")) { var b = a.changedTouches[0];
        a.clientX = b.clientX;
        a.clientY = b.clientY } };
z.Touch.zw = function(a) { return Fa(a.type, "touch") || Fa(a.type, "mouse") || Fa(a.type, "pointer") };
z.Touch.Wl = function(a) { return Fa(a.type, "touch") || Fa(a.type, "pointer") };
z.Touch.Cx = function(a) { var b = []; if (a.changedTouches)
        for (var c = 0; c < a.changedTouches.length; c++) b[c] = { type: a.type, changedTouches: [a.changedTouches[c]], target: a.target, stopPropagation: function() { a.stopPropagation() }, preventDefault: function() { a.preventDefault() } };
    else b.push(a); return b };

function rc(a, b, c) { return Math.min(Math.max(a, b), c) };

function D(a, b) { this.x = aa(a) ? a : 0;
    this.y = aa(b) ? b : 0 } d = D.prototype;
d.clone = function() { return new D(this.x, this.y) };

function sc(a, b) { return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1 }

function tc(a, b) { var c = a.x - b.x;
    a = a.y - b.y; return Math.sqrt(c * c + a * a) }

function uc(a, b) { return new D(a.x - b.x, a.y - b.y) }

function vc(a, b) { return new D(a.x + b.x, a.y + b.y) } d.ceil = function() { this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y); return this };
d.floor = function() { this.x = Math.floor(this.x);
    this.y = Math.floor(this.y); return this };
d.round = function() { this.x = Math.round(this.x);
    this.y = Math.round(this.y); return this };
d.translate = function(a, b) { a instanceof D ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), t(b) && (this.y += b)); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.x *= a;
    this.y *= b; return this };
z.j = {};
z.j.Il = "";
z.j.hc = !0;
z.j.Fn = 0;
z.j.Gk = "create";
z.j.Ct = z.j.Gk;
z.j.Nm = "delete";
z.j.Dt = z.j.Nm;
z.j.zh = "change";
z.j.sy = z.j.zh;
z.j.Li = "move";
z.j.ty = z.j.Li;
z.j.jq = "var_create";
z.j.kq = "var_delete";
z.j.lq = "var_rename";
z.j.an = "ui";
z.j.Vp = "comment_create";
z.j.Wp = "comment_delete";
z.j.Tp = "comment_change";
z.j.Xp = "comment_move";
z.j.Hi = [];
z.j.U = function(a) { z.j.isEnabled() && (z.j.Hi.length || setTimeout(z.j.Qv, 0), z.j.Hi.push(a)) };
z.j.Qv = function() { for (var a = z.j.filter(z.j.Hi, !0), b = z.j.Hi.length = 0, c; c = a[b]; b++) { var e = wc[c.Bc] || null; if (e) { var f = c;
            f.hc && (e.rh.push(f), e.Yj.length = 0, e.rh.length > e.ku && e.rh.unshift()); for (var h = 0; c = e.yc[h]; h++) c(f) } } };
z.j.filter = function(a, b) {
    a = za(a);
    b || a.reverse();
    for (var c = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.ei()) { var k = [h.type, h.$b, h.Bc].join(" "),
                l = e[k];
            l ? h.type == z.j.Li ? (l.Wg = h.Wg, l.Vg = h.Vg, l.Zf = h.Zf) : h.type == z.j.zh && h.element == l.element && h.name == l.name ? l.newValue = h.newValue : h.type != z.j.an || "click" != h.element || "commentOpen" != l.element && "mutatorOpen" != l.element && "warningOpen" != l.element ? (e[k] = h, c.push(h)) : l.newValue = h.newValue : (e[k] = h, c.push(h)) } a = c.filter(function(a) { return !a.ei() });
    b || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == z.j.zh && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
z.j.bv = function() { for (var a = 0, b; b = z.j.Hi[a]; a++) b.hc = !1 };
z.j.disable = function() { z.j.Fn++ };
z.j.enable = function() { z.j.Fn-- };
z.j.isEnabled = function() { return 0 == z.j.Fn };
z.j.rc = function() { return z.j.Il };
z.j.R = function(a) { z.j.Il = "boolean" == typeof a ? a ? z.i.ne() : "" : a };
z.j.Gr = function(a) { var b = [];
    a = xc(a, !1); for (var c = 0, e; e = a[c]; c++) b[c] = e.id; return b };
z.j.ia = function(a, b) {
    switch (a.type) {
        case z.j.Gk:
            var c = new yc(null); break;
        case z.j.Nm:
            c = new zc(null); break;
        case z.j.zh:
            c = new Ac(null, "", "", "", ""); break;
        case z.j.Li:
            c = new Bc(null); break;
        case z.j.jq:
            c = new Cc(null); break;
        case z.j.kq:
            c = new Dc(null); break;
        case z.j.lq:
            c = new Ec(null, ""); break;
        case z.j.an:
            c = new Fc(null); break;
        case z.j.Vp:
            c = new Gc(null); break;
        case z.j.Tp:
            c = new Hc(null); break;
        case z.j.Xp:
            c = new Ic(null); break;
        case z.j.Wp:
            c = new Jc(null); break;
        default:
            throw "Unknown event type."; } c.ia(a);
    c.Bc = b.id;
    return c
};
z.j.Ev = function(a) { if (a.type == z.j.Li || a.type == z.j.Gk) { var b = wc[a.Bc] || null; if (a = Kc(b, a.$b))
            if (a.getParent() && !a.getParent().disabled) { b = xc(a, !1);
                a = 0; for (var c; c = b[a]; a++) c.Nc(!1) } else if ((a.N || a.Y) && !b.pb()) { do a.Nc(!0), a = Lc(a); while (a) } } };
// Copyright 2018 Google Inc.  Apache License 2.0
function Mc() { this.Bc = void 0;
    this.group = z.j.Il;
    this.hc = z.j.hc } Mc.prototype.Aa = function() { var a = { type: this.type };
    this.group && (a.group = this.group); return a };
Mc.prototype.ia = function(a) { this.group = a.group };
Mc.prototype.ei = function() { return !1 };
Mc.prototype.run = function() {};

function Nc(a) { a = wc[a.Bc] || null; if (!a) throw Error("Workspace is null. Event must have been generated from real Blockly events."); return a };

function Oc(a) { Oc.s.constructor.call(this);
    this.sg = a.$();
    this.Bc = a.o.id } y(Oc, Mc);
Oc.prototype.Aa = function() { var a = Oc.s.Aa.call(this);
    a.varId = this.sg; return a };
Oc.prototype.ia = function(a) { Oc.s.Aa.call(this);
    this.sg = a.varId };

function Cc(a) { a && (Cc.s.constructor.call(this, a), this.vh = a.type, this.uh = a.name) } y(Cc, Oc);
Cc.prototype.type = z.j.jq;
Cc.prototype.Aa = function() { var a = Cc.s.Aa.call(this);
    a.varType = this.vh;
    a.varName = this.uh; return a };
Cc.prototype.ia = function(a) { Cc.s.ia.call(this, a);
    this.vh = a.varType;
    this.uh = a.varName };
Cc.prototype.run = function(a) { var b = Nc(this);
    a ? b.Wc(this.uh, this.vh, this.sg) : b.Ff(this.sg) };

function Dc(a) { a && (Dc.s.constructor.call(this, a), this.vh = a.type, this.uh = a.name) } y(Dc, Oc);
Dc.prototype.type = z.j.kq;
Dc.prototype.Aa = function() { var a = Dc.s.Aa.call(this);
    a.varType = this.vh;
    a.varName = this.uh; return a };
Dc.prototype.ia = function(a) { Dc.s.ia.call(this, a);
    this.vh = a.varType;
    this.uh = a.varName };
Dc.prototype.run = function(a) { var b = Nc(this);
    a ? b.Ff(this.sg) : b.Wc(this.uh, this.vh, this.sg) };

function Ec(a, b) { a && (Ec.s.constructor.call(this, a), this.Io = a.name, this.Eo = b) } y(Ec, Oc);
Ec.prototype.type = z.j.lq;
Ec.prototype.Aa = function() { var a = Ec.s.Aa.call(this);
    a.oldName = this.Io;
    a.newName = this.Eo; return a };
Ec.prototype.ia = function(a) { Ec.s.ia.call(this, a);
    this.Io = a.oldName;
    this.Eo = a.newName };
Ec.prototype.run = function(a) { var b = Nc(this);
    a ? b.eh(this.sg, this.Eo) : b.eh(this.sg, this.Io) };
// Copyright 2017 Google Inc.  Apache License 2.0
function Pc(a) { this.ra = {};
    this.o = a } d = Pc.prototype;
d.clear = function() { this.ra = Object(null) };
d.ep = function(a, b) { var c = this.Jc(b, a.type),
        e = Qc(this.o);
    z.j.R(!0); try { if (c && c.$() != a.$()) { var f = a.type;
            b != c.name && Rc(c, b, e); for (b = 0; b < e.length; b++) e[b].ak(a.$(), c.$());
            z.j.U(new Dc(a));
            this.ra[f].splice(this.sj(f).indexOf(a), 1) } else Rc(a, b, e) } finally { z.j.R(!1) } };
d.eh = function(a, b) { var c = this.Nd(a); if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.ep(c, b) };

function Rc(a, b, c) { z.j.U(new Ec(a, b));
    a.name = b; for (b = 0; b < c.length; b++) c[b].Jm(a) } d.Wc = function(a, b, c) { var e = this.Jc(a, b); if (e) { if (c && e.$() != c) throw Error('Variable "' + a + '" is already in use and its id is "' + e.$() + '" which conflicts with the passed in id, "' + c + '".'); return e } if (c && this.Nd(c)) throw Error('Variable id, "' + c + '", is already in use.');
    c = c || z.i.ne();
    b = b || "";
    e = new Sc(this.o, a, b, c);
    this.ra[b] ? this.ra[b].push(e) : this.ra[b] = [e]; return e };
d.Ff = function(a) { var b = this.Nd(a); if (b) { var c = b.name,
            e = this.Yn(a);
        a = 0; for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) { a = E(f, "NAME");
                c = z.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace("%2", a);
                z.alert(c); return } var h = this;
        1 < e.length ? (c = z.g.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", c), z.confirm(c, function(a) { a && h.cl(b, e) })) : h.cl(b, e) } else console.warn("Can't delete non-existent variable: " + a) };
d.cl = function(a, b) { var c = z.j.rc();
    c || z.j.R(!0); try { for (var e = 0; e < b.length; e++) b[e].A(!0, !1); var f = this.ra[a.type];
        b = 0; for (var h; h = f[b]; b++)
            if (h.$() == a.$()) { f.splice(b, 1);
                z.j.U(new Dc(a)); break } } finally { c || z.j.R(!1) } };
d.Jc = function(a, b) { if (b = this.ra[b || ""])
        for (var c = 0, e; e = b[c]; c++)
            if (Tc(e.name, a)) return e; return null };
d.Nd = function(a) { for (var b = Object.keys(this.ra), c = 0; c < b.length; c++)
        for (var e = b[c], f = 0, h; h = this.ra[e][f]; f++)
            if (h.$() == a) return h; return null };
d.sj = function(a) { return (a = this.ra[a || ""]) ? a.slice() : [] };
d.Xn = function() { for (var a = Object.keys(this.ra), b = !1, c = 0; c < a.length; c++) "" == a[c] && (b = !0);
    b || a.push(""); return a };
d.Ye = function() { for (var a = [], b = Object.keys(this.ra), c = 0; c < b.length; c++) a = a.concat(this.ra[b[c]]); return a };
d.Yn = function(a) { for (var b = [], c = Qc(this.o), e = 0; e < c.length; e++) { var f = c[e].Jf(); if (f)
            for (var h = 0; h < f.length; h++) f[h].$() == a && b.push(c[e]) } return b };

function Vc(a) { this.Jd = a.id;
    this.Bc = a.o.id;
    this.group = z.j.Il;
    this.hc = z.j.hc } y(Vc, Mc);
Vc.prototype.Aa = function() { var a = { type: this.type };
    this.group && (a.group = this.group);
    this.Jd && (a.commentId = this.Jd); return a };
Vc.prototype.ia = function(a) { this.Jd = a.commentId;
    this.group = a.group };

function Hc(a, b, c) { a && (Hc.s.constructor.call(this, a), this.zs = b, this.gm = c) } y(Hc, Vc);
d = Hc.prototype;
d.type = z.j.Tp;
d.Aa = function() { var a = Hc.s.Aa.call(this);
    a.newContents = this.gm; return a };
d.ia = function(a) { Hc.s.ia.call(this, a);
    this.gm = a.newValue };
d.ei = function() { return this.zs == this.gm };
d.run = function(a) { var b = Wc(Nc(this), this.Jd);
    b ? b.Cd(a ? this.gm : this.zs) : console.warn("Can't change non-existent comment: " + this.Jd) };

function Gc(a) { a && (Gc.s.constructor.call(this, a), this.xml = a.qk()) } y(Gc, Vc);
Gc.prototype.type = z.j.Vp;
Gc.prototype.Aa = function() { var a = Gc.s.Aa.call(this);
    a.xml = z.D.wd(this.xml); return a };
Gc.prototype.ia = function(a) { Gc.s.ia.call(this, a);
    this.xml = z.D.fd("<xml>" + a.xml + "</xml>").firstChild };
Gc.prototype.run = function(a) { var b = Nc(this);
    a ? (a = F("xml"), a.appendChild(this.xml), z.D.ie(a, b)) : (b = Wc(b, this.Jd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Jd) };

function Jc(a) { a && (Jc.s.constructor.call(this, a), this.xml = a.qk()) } y(Jc, Vc);
Jc.prototype.type = z.j.Wp;
Jc.prototype.Aa = function() { return Jc.s.Aa.call(this) };
Jc.prototype.ia = function(a) { Jc.s.ia.call(this, a) };
Jc.prototype.run = function(a) { var b = Nc(this);
    a ? (b = Wc(b, this.Jd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Jd) : (a = F("xml"), a.appendChild(this.xml), z.D.ie(a, b)) };

function Ic(a) { a && (Ic.s.constructor.call(this, a), this.sn = a, this.Ho = a.nd.clone(), this.Ug = null) } y(Ic, Vc);
d = Ic.prototype;
d.hf = function() { if (!this.sn) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.Ug = this.sn.nd.clone();
    this.sn = null };
d.type = z.j.Xp;
d.Aa = function() { var a = Ic.s.Aa.call(this);
    this.Ug && (a.newCoordinate = Math.round(this.Ug.x) + "," + Math.round(this.Ug.y)); return a };
d.ia = function(a) { Ic.s.ia.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Ug = new D(parseFloat(a[0]), parseFloat(a[1]))) };
d.ei = function() { return sc(this.Ho, this.Ug) };
d.run = function(a) { var b = Wc(Nc(this), this.Jd); if (b) { a = a ? this.Ug : this.Ho; var c = b.nd.clone();
        b.moveBy(a.x - c.x, a.y - c.y) } else console.warn("Can't move non-existent comment: " + this.Jd) };

function Xc(a, b, c, e, f) { this.id = f && !Wc(a, f) ? f : z.i.ne();
    a.Bi.push(this);
    a.Yk[this.id] && console.warn('Overriding an existing comment on this workspace, with id "' + this.id + '"');
    a.Yk[this.id] = this;
    this.nd = new D(0, 0);
    this.Ca = c;
    this.ka = e;
    this.o = a;
    this.u = a.u;
    this.Tj = this.ej = !0;
    this.Vc = b;
    this.Yr = !0;
    Yc(this) } d = Xc.prototype;
d.A = function() { if (this.o) { z.j.isEnabled() && z.j.U(new Jc(this)); var a = this.o; if (!xa(a.Bi, this)) throw "Comment not present in workspace's list of top-most comments.";
        delete a.Yk[this.id];
        this.o = null } };
d.Xh = function() { return this.Ca };
d.$c = function() { return this.ka };
d.moveBy = function(a, b) { var c = new Ic(this);
    this.nd.translate(a, b);
    c.hf();
    z.j.U(c) };
d.ec = function() { return this.ej && !(this.o && this.o.options.readOnly) };
d.ym = function(a) { this.ej = a };
d.we = function() { return this.Tj && !(this.o && this.o.options.readOnly) };
d.hh = function(a) { this.Tj = a };
d.Ic = function() { return this.Vc };
d.Cd = function(a) { this.Vc != a && (z.j.U(new Hc(this, this.Vc, a)), this.Vc = a) };
d.qk = function(a) { a = Zc(this, a);
    a.setAttribute("x", Math.round(this.nd.x));
    a.setAttribute("y", Math.round(this.nd.y));
    a.setAttribute("h", this.Ca);
    a.setAttribute("w", this.ka); return a };

function Zc(a, b) { var c = F("comment");
    b || c.setAttribute("id", a.id);
    c.textContent = a.Ic(); return c }

function Yc(a) { if (z.j.isEnabled()) { var b = z.j.rc();
        b || z.j.R(!0); try { z.j.U(new Gc(a)) } finally { b || z.j.R(!1) } } }

function $c(a) { var b = a.getAttribute("h"),
        c = a.getAttribute("w"); return { id: a.getAttribute("id"), Lr: b ? parseInt(b, 10) : 100, xt: c ? parseInt(c, 10) : 100, x: parseInt(a.getAttribute("x"), 10), y: parseInt(a.getAttribute("y"), 10), content: a.textContent } };
// Copyright 2012 Google Inc.  Apache License 2.0
function ad(a) { this.id = z.i.ne();
    wc[this.id] = this;
    this.options = a || {};
    this.u = !!this.options.u;
    this.ue = !!this.options.ue;
    this.Ba = this.options.Ba;
    this.Ai = [];
    this.Bi = [];
    this.Yk = Object.create(null);
    this.yc = [];
    this.rh = [];
    this.Yj = [];
    this.ln = Object.create(null);
    this.ra = new Pc(this);
    this.si = null } d = ad.prototype;
d.P = !1;
d.po = !1;
d.ku = 1024;
d.A = function() { this.yc.length = 0;
    this.clear();
    delete wc[this.id] };

function bd(a, b) { if (!xa(a.Ai, b)) throw "Block not present in workspace's list of top-most blocks."; }

function cd(a, b) { var c = [].concat(a.Ai); if (b && 1 < c.length) { var e = Math.sin(3 * Math.PI / 180);
        a.u && (e *= -1);
        c.sort(function(a, b) { a = a.la();
            b = b.la(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function dd(a, b) { var c = [].concat(a.Bi); if (b && 1 < c.length) { var e = Math.sin(3 * Math.PI / 180);
        a.u && (e *= -1);
        c.sort(function(a, b) { a = a.la();
            b = b.la(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function Qc(a) { var b = cd(a, !1); for (a = 0; a < b.length; a++) b.push.apply(b, b[a].If(!1)); return b }
d.clear = function() { this.po = !0; try { var a = z.j.rc(); for (a || z.j.R(!0); this.Ai.length;) this.Ai[0].A(); for (; this.Bi.length;) this.Bi[this.Bi.length - 1].A();
        a || z.j.R(!1);
        this.ra.clear();
        this.si && this.si.clear() } finally { this.po = !1 } };
d.eh = function(a, b) { this.ra.eh(a, b) };
d.Wc = function(a, b, c) { return this.ra.Wc(a, b, c) };
d.Yn = function(a) { return this.ra.Yn(a) };
d.Ff = function(a) { this.ra.Ff(a) };
d.cl = function(a, b) { this.ra.cl(a, b) };
d.Jc = function(a, b) { return this.ra.Jc(a, b) };
d.Nd = function(a) { return this.ra.Nd(a) };
d.sj = function(a) { return this.ra.sj(a) };
d.Xn = function() { return this.ra.Xn() };
d.Ye = function() { return this.ra.Ye() };
d.$c = function() { return 0 };
d.ef = function(a, b) { return new ed(this, a, b) };

function fd(a) { return isNaN(a.options.os) ? Infinity : a.options.os - Qc(a).length } d.Pp = function(a) { var b = a ? this.Yj : this.rh,
        c = a ? this.rh : this.Yj,
        e = b.pop(); if (e) { for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group;) f.push(b.pop()); for (b = 0; e = f[b]; b++) c.push(e);
        f = z.j.filter(f, a);
        z.j.hc = !1; try { for (b = 0; e = f[b]; b++) e.run(a) } finally { z.j.hc = !0 } } };
d.Gq = function() { this.rh.length = 0;
    this.Yj.length = 0;
    z.j.bv() };
d.Fc = function(a) { this.yc.push(a); return a };
d.dg = function(a) { xa(this.yc, a) };

function Kc(a, b) { return a.ln[b] || null }

function Wc(a, b) { return a.Yk[b] || null }
var wc = Object.create(null);
ad.prototype.clear = ad.prototype.clear;
ad.prototype.clearUndo = ad.prototype.Gq;
ad.prototype.addChangeListener = ad.prototype.Fc;
ad.prototype.removeChangeListener = ad.prototype.dg;
var gd = !A || 9 <= Number(xb),
    hd = !lb && !A || A && 9 <= Number(xb) || lb && wb("1.9.1"),
    id = A && !wb("9");
var jd = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };

function kd() { this.Kp = "";
    this.wu = ld } kd.prototype.Of = !0;
kd.prototype.te = function() { return this.Kp };
kd.prototype.toString = function() { return "Const{" + this.Kp + "}" };

function md(a) { return a instanceof kd && a.constructor === kd && a.wu === ld ? a.Kp : "type_error:Const" }
var ld = {};

function nd() { this.Rs = "";
    this.xu = od } nd.prototype.Of = !0;
nd.prototype.te = function() { return this.Rs };
nd.prototype.jo = !0;
nd.prototype.Wh = function() { return 1 };
var od = {};

function pd() { this.Zg = "";
    this.uu = qd } pd.prototype.Of = !0;
pd.prototype.te = function() { return this.Zg };
pd.prototype.jo = !0;
pd.prototype.Wh = function() { return 1 };

function rd(a) { if (a instanceof pd && a.constructor === pd && a.uu === qd) return a.Zg;
    ea(a); return "type_error:SafeUrl" }
var sd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function td(a) { if (a instanceof pd) return a;
    a = a.Of ? a.te() : String(a);
    sd.test(a) || (a = "about:invalid#zClosurez"); return ud(a) }
var qd = {};

function ud(a) { var b = new pd;
    b.Zg = a; return b } ud("about:blank");

function vd() { this.Zo = "";
    this.tu = wd } vd.prototype.Of = !0;
var wd = {};
vd.prototype.te = function() { return this.Zo };
vd.prototype.Pl = function(a) { this.Zo = a; return this };
var xd = (new vd).Pl("");

function yd(a) { var b = "",
        c; for (c in a) { if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c); var e = a[c];
        null != e && (e = u(e) ? ta(e, zd).join(" ") : zd(e), b += c + ":" + e + ";") } return b ? (new vd).Pl(b) : xd }

function zd(a) { if (a instanceof pd) a = 'url("' + rd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    else if (a instanceof kd) a = md(a);
    else { a = String(a); var b = a.replace(Ad, "$1").replace(Bd, "url"); if (b = Dd.test(b)) { for (var c = b = !0, e = 0; e < a.length; e++) { var f = a.charAt(e); "'" == f && c ? b = !b : '"' == f && b && (c = !c) } b = b && c } a = b ? Ed(a) : "zClosurez" } return a }
var Dd = /^[-,."'%_!# a-zA-Z0-9]+$/,
    Bd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    Ad = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

function Ed(a) { return a.replace(Bd, function(a, c, e, f) { var b = "";
        e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) { b = c; return e });
        a = td(e).te(); return c + b + a + b + f }) };

function Fd() { this.Zg = "";
    this.su = Gd;
    this.qr = null } Fd.prototype.jo = !0;
Fd.prototype.Wh = function() { return this.qr };
Fd.prototype.Of = !0;
Fd.prototype.te = function() { return this.Zg };

function Hd(a) { if (a instanceof Fd && a.constructor === Fd && a.su === Gd) return a.Zg;
    ea(a); return "type_error:SafeHtml" }

function Id(a) { if (a instanceof Fd) return a; var b = null;
    a.jo && (b = a.Wh()); return Jd(Ka(a.Of ? a.te() : String(a)), b) }
var Kd = /^[a-zA-Z0-9-]+$/,
    Ld = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
    Md = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };

function Nd(a, b, c) {
    var e = String(a);
    if (!Kd.test(e)) throw Error("Invalid tag name <" + e + ">.");
    if (e.toUpperCase() in Md) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
    a = String(a);
    e = null;
    var f = "<" + a,
        h = "";
    if (b)
        for (n in b) {
            if (!Kd.test(n)) throw Error('Invalid attribute name "' + n + '".');
            var k = b[n];
            if (null != k) {
                var l = a;
                var m = n;
                if (k instanceof kd) k = md(k);
                else if ("style" == m.toLowerCase()) {
                    if (!ha(k)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k +
                        " given: " + k);
                    k instanceof vd || (k = yd(k));
                    k instanceof vd && k.constructor === vd && k.tu === wd ? k = k.Zo : (ea(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(m)) throw Error('Attribute "' + m + '" requires goog.string.Const value, "' + k + '" given.');
                    if (m.toLowerCase() in Ld)
                        if (k instanceof nd) k instanceof nd && k.constructor === nd && k.xu === od ? k = k.Rs : (ea(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof pd) k = rd(k);
                    else if (q(k)) k = td(k).te();
                    else throw Error('Attribute "' + m + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                        k + '" given.');
                }
                k.Of && (k = k.te());
                m = m + '="' + Ka(String(k)) + '"';
                h += " " + m
            }
        }
    var n = f + h;
    null != c ? u(c) || (c = [c]) : c = [];
    !0 === jd[a.toLowerCase()] ? n += ">" : (c = Od(c), n += ">" + Hd(c) + "</" + a + ">", e = c.Wh());
    (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return Jd(n, e)
}

function Od(a) {
    function b(a) { u(a) ? ra(a, b) : (a = Id(a), e += Hd(a), a = a.Wh(), 0 == c ? c = a : 0 != a && c != a && (c = null)) } var c = 0,
        e = "";
    ra(arguments, b); return Jd(e, c) }
var Gd = {};

function Jd(a, b) { return (new Fd).Pl(a, b) } Fd.prototype.Pl = function(a, b) { this.Zg = a;
    this.qr = b; return this };
Jd("<!DOCTYPE html>", 0);
var Pd = Jd("", 0),
    Qd = Jd("<br>", 0);

function Rd(a, b) { a.innerHTML = Hd(b) };

function Sd(a, b) { this.width = a;
    this.height = b } d = Sd.prototype;
d.clone = function() { return new Sd(this.width, this.height) };
d.Lu = function() { return this.width * this.height };
d.aspectRatio = function() { return this.width / this.height };
d.$r = function() { return !this.Lu() };
d.ceil = function() { this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height); return this };
d.floor = function() { this.width = Math.floor(this.width);
    this.height = Math.floor(this.height); return this };
d.round = function() { this.width = Math.round(this.width);
    this.height = Math.round(this.height); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.width *= a;
    this.height *= b; return this };

function Td(a) { return a ? new Ud(Vd(a)) : pa || (pa = new Ud) }

function Wd(a, b) { var c = document;
    b = b || c; if (b.querySelectorAll && b.querySelector) return b.querySelectorAll("TBODY" + (a ? "." + a : "")); if (a && b.getElementsByClassName) { b = b.getElementsByClassName(a);
        c = {}; for (var e = 0, f = 0, h; h = b[f]; f++) "TBODY" == h.nodeName && (c[e++] = h);
        c.length = e; return c } b = b.getElementsByTagName("TBODY"); if (a) { c = {}; for (f = e = 0; h = b[f]; f++) { var k = h.className; "function" == typeof k.split && wa(k.split(/\s+/), a) && (c[e++] = h) } c.length = e; return c } return b }

function Xd(a, b) { cb(b, function(b, e) { b && b.Of && (b = b.te()); "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : Yd.hasOwnProperty(e) ? a.setAttribute(Yd[e], b) : Fa(e, "aria-") || Fa(e, "data-") ? a.setAttribute(e, b) : a[e] = b }) }
var Yd = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

function Zd() { var a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body; return new Sd(a.clientWidth, a.clientHeight) }

function $d(a) { var b = ae(a);
    a = a.parentWindow || a.defaultView; return A && wb("10") && a.pageYOffset != b.scrollTop ? new D(b.scrollLeft, b.scrollTop) : new D(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop) }

function ae(a) { return a.scrollingElement ? a.scrollingElement : B || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement }

function F(a, b, c) { return be(document, arguments) }

function be(a, b) { var c = String(b[0]),
        e = b[1]; if (!gd && e && (e.name || e.type)) { c = ["<", c];
        e.name && c.push(' name="', Ka(e.name), '"'); if (e.type) { c.push(' type="', Ka(e.type), '"'); var f = {};
            eb(f, e);
            delete f.type;
            e = f } c.push(">");
        c = c.join("") } c = a.createElement(c);
    e && (q(e) ? c.className = e : u(e) ? c.className = e.join(" ") : Xd(c, e));
    2 < b.length && ce(a, c, b, 2); return c }

function ce(a, b, c, e) {
    function f(c) { c && b.appendChild(q(c) ? a.createTextNode(c) : c) } for (; e < c.length; e++) { var h = c[e];!fa(h) || ha(h) && 0 < h.nodeType ? f(h) : ra(de(h) ? za(h) : h, f) } }

function ee(a) { for (var b; b = a.firstChild;) a.removeChild(b) }

function fe(a, b) { b.parentNode && b.parentNode.insertBefore(a, b.nextSibling) }

function G(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null }

function ge(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }

function Vd(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

function he(a, b) { if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b) } else ee(a), a.appendChild(Vd(a).createTextNode(String(b))) }
var ie = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    je = { IMG: " ", BR: "\n" };

function ke(a) { return A && !wb("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex") }

function le(a) { a = a.tabIndex; return t(a) && 0 <= a && 32768 > a }

function me(a) { if (id && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else { var b = [];
        ne(a, b, !0);
        a = b.join("") } a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    id || (a = a.replace(/ +/g, " ")); " " != a && (a = a.replace(/^\s*/, "")); return a }

function oe(a) { var b = [];
    ne(a, b, !1); return b.join("") }

function ne(a, b, c) { if (!(a.nodeName in ie))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in je) b.push(je[a.nodeName]);
    else
        for (a = a.firstChild; a;) ne(a, b, c), a = a.nextSibling }

function de(a) { if (a && "number" == typeof a.length) { if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item; if (v(a)) return "function" == typeof a.item } return !1 }

function Ud(a) { this.Kd = a || g.document || document } d = Ud.prototype;
d.pc = Td;
d.F = function(a) { return q(a) ? this.Kd.getElementById(a) : a };
d.getElementsByTagName = function(a, b) { return (b || this.Kd).getElementsByTagName(String(a)) };
d.setProperties = Xd;
d.V = function(a, b, c) { return be(this.Kd, arguments) };
d.createElement = function(a) { return this.Kd.createElement(String(a)) };
d.createTextNode = function(a) { return this.Kd.createTextNode(String(a)) };
d.Pq = function(a, b) { for (var c = this.Kd, e = c.createElement("TABLE"), f = e.appendChild(c.createElement("TBODY")), h = 0; h < a; h++) { for (var k = c.createElement("TR"), l = 0; l < b; l++) k.appendChild(c.createElement("TD"));
        f.appendChild(k) } return e };
d.appendChild = function(a, b) { a.appendChild(b) };
d.append = function(a, b) { ce(Vd(a), a, arguments, 1) };
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
d.Xs = ee;
d.removeNode = G;
d.If = function(a) { return hd && void 0 != a.children ? a.children : sa(a.childNodes, function(a) { return 1 == a.nodeType }) };
d.contains = ge;
d.df = function(a) { var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!ke(a) || le(a)) : ke(a) && le(a)) && A ? (a = !v(a.getBoundingClientRect) || A && null == a.parentElement ? { height: a.offsetHeight, width: a.offsetWidth } : a.getBoundingClientRect(), a = null != a && 0 < a.height && 0 < a.width) : a = b; return a };

function pe(a, b, c, e, f, h) { this.m = a;
    this.Vc = b;
    this.et = c;
    c = qe;
    this.m.u && (c = -c);
    this.Mu = c * Math.PI / 180;
    a.Yd.appendChild(this.$i(b, !(!f || !h)));
    this.sd = e;
    this.fg && re(this);
    f && h || (b = this.Vc.getBBox(), f = b.width + 2 * se, h = b.height + 2 * se);
    this.hg(f, h);
    re(this);
    te(this);
    this.fg = !0;
    a.options.readOnly || (z.O(this.Si, "mousedown", this, this.Su), this.Mb && z.O(this.Mb, "mousedown", this, this.gp)) }
var se = 6,
    qe = 20,
    ue = null,
    ve = null;
d = pe.prototype;
d.fp = null;

function we() { ue && (z.Da(ue), ue = null);
    ve && (z.Da(ve), ve = null) }

function xe() { z.Touch.Te();
    we() } d.fg = !1;
d.sd = null;
d.ti = 0;
d.Zj = 0;
d.ka = 0;
d.Ca = 0;
d.Pk = !0;
d.$i = function(a, b) {
    this.Uc = z.i.B("g", {}, null);
    var c = { filter: "url(#" + this.m.options.zr + ")" }; - 1 != Za.indexOf("JavaFX") && (c = {});
    c = z.i.B("g", c, this.Uc);
    this.nn = z.i.B("path", {}, c);
    this.Si = z.i.B("rect", { "class": "blocklyDraggable", x: 0, y: 0, rx: se, ry: se }, c);
    b ? (this.Mb = z.i.B("g", { "class": this.m.u ? "blocklyResizeSW" : "blocklyResizeSE" }, this.Uc), b = 2 * se, z.i.B("polygon", { points: "0,x x,x x,0".replace(/x/g, b.toString()) }, this.Mb), z.i.B("line", { "class": "blocklyResizeLine", x1: b / 3, y1: b - 1, x2: b - 1, y2: b / 3 }, this.Mb), z.i.B("line", { "class": "blocklyResizeLine", x1: 2 * b / 3, y1: b - 1, x2: b - 1, y2: 2 * b / 3 }, this.Mb)) : this.Mb = null;
    this.Uc.appendChild(a);
    return this.Uc
};
d.ga = function() { return this.Uc };

function ye(a, b) { a.Uc.dataset && (a.Uc.dataset.$b = b) } d.Su = function(a) { var b = this.m.qe(a);
    b && (b.Ac || (b.Ac = this), b.Lc = a) };
d.xi = function() {};
d.ec = function() { return !1 };
d.gp = function(a) { ze(this);
    we();
    z.i.Uf(a) || (this.m.Em(a, new D(this.m.u ? -this.ka : this.ka, this.Ca)), ue = z.O(document, "mouseup", this, xe), ve = z.O(document, "mousemove", this, this.hp), z.Qb());
    a.stopPropagation() };
d.hp = function(a) { this.Pk = !1;
    a = Ae(this.m, a);
    this.hg(this.m.u ? -a.x : a.x, a.y);
    this.m.u && re(this) };

function ze(a) { var b = a.Uc.parentNode; return b.lastChild !== a.Uc ? (b.appendChild(a.Uc), !0) : !1 }

function re(a) { var b = a.sd.x;
    b = a.m.u ? b - (a.ti + a.ka) : b + a.ti;
    a.moveTo(b, a.Zj + a.sd.y) } d.moveTo = function(a, b) { this.Uc.setAttribute("transform", "translate(" + a + "," + b + ")") };
d.Kg = function() { return { width: this.ka, height: this.Ca } };
d.hg = function(a, b) {
    var c = 2 * se;
    a = Math.max(a, c + 45);
    b = Math.max(b, c + 20);
    this.ka = a;
    this.Ca = b;
    this.Si.setAttribute("width", a);
    this.Si.setAttribute("height", b);
    this.Mb && (this.m.u ? this.Mb.setAttribute("transform", "translate(" + 2 * se + "," + (b - c) + ") scale(-1 1)") : this.Mb.setAttribute("transform", "translate(" + (a - c) + "," + (b - c) + ")"));
    if (this.fg) {
        if (this.Pk) {
            a = -this.ka / 4;
            b = -this.Ca - 25;
            c = this.m.rb();
            c.ya /= this.m.scale;
            c.Cb /= this.m.scale;
            var e = this.sd.x;
            this.m.u ? e - c.Cb - a - this.ka < H ? a = e - c.Cb - this.ka - H : e - c.Cb - a > c.ya && (a =
                e - c.Cb - c.ya) : e + a < c.Cb ? a = c.Cb - e : c.Cb + c.ya < e + a + this.ka + 10 + H && (a = c.Cb + c.ya - e - this.ka - H);
            this.sd.y + b < c.Ke && (b = this.et.getBBox().height);
            this.ti = a;
            this.Zj = b
        }
        re(this);
        te(this)
    }
    this.fp && this.fp()
};

function te(a) {
    var b = [],
        c = a.ka / 2,
        e = a.Ca / 2,
        f = -a.ti,
        h = -a.Zj;
    if (c == f && e == h) b.push("M " + c + "," + e);
    else {
        h -= e;
        f -= c;
        a.m.u && (f *= -1);
        var k = Math.sqrt(h * h + f * f),
            l = Math.acos(f / k);
        0 > h && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            p = Math.cos(m),
            r = a.Kg();
        m = (r.width + r.height) / 5;
        m = Math.min(m, r.width, r.height) / 4;
        r = 1 - 8 / k;
        f = c + r * f;
        h = e + r * h;
        r = c + m * p;
        var x = e + m * n;
        c -= m * p;
        e -= m * n;
        n = l + a.Mu;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / 4;
        k = Math.cos(n) * k / 4;
        b.push("M" + r + "," + x);
        b.push("C" + (r + k) + "," +
            (x + l) + " " + f + "," + h + " " + f + "," + h);
        b.push("C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e)
    }
    b.push("z");
    a.nn.setAttribute("d", b.join(" "))
}
d.qb = function(a) { this.Si.setAttribute("fill", a);
    this.nn.setAttribute("fill", a) };
d.A = function() { we();
    G(this.Uc);
    this.et = this.Vc = this.m = this.Mb = this.Si = this.nn = this.Uc = null };
d.em = function(a, b) { a ? a.qf(b.x, b.y) : this.moveTo(b.x, b.y);
    this.ti = this.m.u ? this.sd.x - b.x - this.ka : b.x - this.sd.x;
    this.Zj = b.y - this.sd.y;
    te(this) };
d.la = function() { return new D(this.sd.x + this.ti, this.sd.y + this.Zj) };
d.bt = function(a) { this.Pk = a };

function Be(a) { Be.s.constructor.call(this);
    this.$b = a.id;
    this.Bc = a.o.id } y(Be, Mc);
Be.prototype.Aa = function() { var a = Be.s.Aa.call(this);
    a.blockId = this.$b; return a };
Be.prototype.ia = function(a) { Be.s.Aa.call(this);
    this.$b = a.blockId };

function Ac(a, b, c, e, f) { a && (Ac.s.constructor.call(this, a), this.element = b, this.name = c, this.oldValue = e, this.newValue = f) } y(Ac, Be);
z.j.Cc = Ac;
d = Ac.prototype;
d.type = z.j.zh;
d.Aa = function() { var a = Ac.s.Aa.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue; return a };
d.ia = function(a) { Ac.s.ia.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue };
d.ei = function() { return this.oldValue == this.newValue };
d.run = function(a) {
    var b = Kc(Nc(this), this.$b);
    if (b) switch (b.bd && b.bd.oa(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (b = I(b, this.name)) ? (Ce(b, a), b.setValue(a)) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            b.fh(a || null);
            break;
        case "collapsed":
            b.ig(a);
            break;
        case "disabled":
            b.Nc(a);
            break;
        case "inline":
            b.Dd(a);
            break;
        case "mutation":
            var c = "";
            b.Ga && (c = (c = b.Ga()) && z.D.wd(c));
            if (b.fb) { a = a || "<mutation></mutation>"; var e = z.D.fd("<xml>" + a + "</xml>");
                b.fb(e.firstChild) } z.j.U(new Ac(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.$b)
};

function yc(a) { a && (yc.s.constructor.call(this, a), this.xml = a.o.P ? z.D.mn(a) : z.D.Bf(a), this.cf = z.j.Gr(a)) } y(yc, Be);
z.j.Fk = yc;
yc.prototype.type = z.j.Gk;
yc.prototype.Aa = function() { var a = yc.s.Aa.call(this);
    a.xml = z.D.wd(this.xml);
    a.ids = this.cf; return a };
yc.prototype.ia = function(a) { yc.s.ia.call(this, a);
    this.xml = z.D.fd("<xml>" + a.xml + "</xml>").firstChild;
    this.cf = a.ids };
yc.prototype.run = function(a) { var b = Nc(this); if (a) a = F("xml"), a.appendChild(this.xml), z.D.ie(a, b);
    else { a = 0; for (var c; c = this.cf[a]; a++) { var e = Kc(b, c);
            e ? e.A(!1, !1) : c == this.$b && console.warn("Can't uncreate non-existent block: " + c) } } };

function zc(a) { if (a) { if (a.getParent()) throw "Connected blocks cannot be deleted.";
        zc.s.constructor.call(this, a);
        this.Uw = a.o.P ? z.D.mn(a) : z.D.Bf(a);
        this.cf = z.j.Gr(a) } } y(zc, Be);
z.j.Ft = zc;
zc.prototype.type = z.j.Nm;
zc.prototype.Aa = function() { var a = zc.s.Aa.call(this);
    a.ids = this.cf; return a };
zc.prototype.ia = function(a) { zc.s.ia.call(this, a);
    this.cf = a.ids };
zc.prototype.run = function(a) { var b = Nc(this); if (a) { a = 0; for (var c; c = this.cf[a]; a++) { var e = Kc(b, c);
            e ? e.A(!1, !1) : c == this.$b && console.warn("Can't delete non-existent block: " + c) } } else a = F("xml"), a.appendChild(this.Uw), z.D.ie(a, b) };

function Bc(a) { a && (Bc.s.constructor.call(this, a), a = De(this), this.Bs = a.Ms, this.As = a.Vr, this.Go = a.Oq) } y(Bc, Be);
z.j.Gi = Bc;
d = Bc.prototype;
d.type = z.j.Li;
d.Aa = function() { var a = Bc.s.Aa.call(this);
    this.Wg && (a.newParentId = this.Wg);
    this.Vg && (a.newInputName = this.Vg);
    this.Zf && (a.newCoordinate = Math.round(this.Zf.x) + "," + Math.round(this.Zf.y)); return a };
d.ia = function(a) { Bc.s.ia.call(this, a);
    this.Wg = a.newParentId;
    this.Vg = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Zf = new D(parseFloat(a[0]), parseFloat(a[1]))) };
d.hf = function() { var a = De(this);
    this.Wg = a.Ms;
    this.Vg = a.Vr;
    this.Zf = a.Oq };

function De(a) { var b = Kc(wc[a.Bc] || null, a.$b);
    a = {}; var c = b.getParent(); if (c) { a.Ms = c.id;
        a: { for (var e = 0, f; f = c.W[e]; e++)
                if (f.connection && J(f.connection) == b) { b = f; break a } b = null } b && (a.Vr = b.name) } else a.Oq = b.la(); return a } d.ei = function() { return this.Bs == this.Wg && this.As == this.Vg && sc(this.Go, this.Zf) };
d.run = function(a) { var b = Nc(this),
        c = Kc(b, this.$b); if (c) { var e = a ? this.Wg : this.Bs,
            f = a ? this.Vg : this.As;
        a = a ? this.Zf : this.Go; var h = null; if (e && (h = Kc(b, e), !h)) { console.warn("Can't connect to non-existent block: " + e); return } c.getParent() && Ee(c); if (a) f = c.la(), c.moveBy(a.x - f.x, a.y - f.y);
        else { c = c.N || c.Y; if (f) { if (b = K(h, f)) var k = b.connection } else c.type == z.wf && (k = h.K);
            k ? c.connect(k) : console.warn("Can't connect to non-existent input: " + f) } } else console.warn("Can't move non-existent block: " + this.$b) };

function Fc(a, b, c, e) { Fc.s.constructor.call(this);
    this.$b = a ? a.id : null;
    this.Bc = a ? a.o.id : null;
    this.element = b;
    this.oldValue = c;
    this.newValue = e;
    this.hc = !1 } y(Fc, Mc);
Fc.prototype.type = z.j.an;
Fc.prototype.Aa = function() { var a = Fc.s.Aa.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.$b && (a.blockId = this.$b); return a };
Fc.prototype.ia = function(a) { Fc.s.ia.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.$b = a.blockId };

function Fe(a) { this.T = a } d = Fe.prototype;
d.Iq = !0;
d.Wm = 17;
d.Za = null;
d.Og = null;

function Ge(a) { a.vc || (a.vc = z.i.B("g", { "class": "blocklyIconGroup" }, null), a.T.tb && z.i.mb(a.vc, "blocklyIconGroupReadonly"), a.Kn(a.vc), a.T.ga().appendChild(a.vc), z.O(a.vc, "mouseup", a, a.io), a.tf()) } d.A = function() { G(this.vc);
    this.vc = null;
    this.oa(!1);
    this.T = null };
d.tf = function() {};
d.X = function() { return !!this.Za };
d.io = function(a) { this.T.o.pb() || this.T.tb || z.i.Uf(a) || this.oa(!this.X()) };
d.sf = function() { this.X() && this.Za.qb(this.T.ge) };

function He(a) { var b = a.T.la(),
        c = z.i.tc(a.vc);
    b = new D(b.x + c.x + a.Wm / 2, b.y + c.y + a.Wm / 2);
    sc(a.Og, b) || (a.Og = b, a.X() && (a = a.Za, a.sd = b, a.fg && re(a))) };
// Copyright 2011 Google Inc.  Apache License 2.0
function Ie(a) { Ie.s.constructor.call(this, a);
    Ge(this) } y(Ie, Fe);
d = Ie.prototype;
d.va = "";
d.ka = 160;
d.Ca = 80;
d.Kn = function(a) { z.i.B("circle", { "class": "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
    z.i.B("path", { "class": "blocklyIconSymbol", d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z" }, a);
    z.i.B("rect", { "class": "blocklyIconSymbol", x: "6.8", y: "10.78", height: "2", width: "2" }, a) };
d.aj = function() {
    this.Yc = z.i.B("foreignObject", { x: se, y: se }, null);
    var a = document.createElementNS(z.uf, "body");
    a.setAttribute("xmlns", z.uf);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(z.uf, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.T.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.wb = b;
    this.Yc.appendChild(a);
    z.O(b, "mouseup", this, this.Jx, !0, !0);
    z.O(b, "wheel", this, function(a) { a.stopPropagation() });
    z.O(b, "change", this, function() {
        this.va != b.value && (z.j.U(new z.j.Cc(this.T,
            "comment", null, this.va, b.value)), this.va = b.value)
    });
    setTimeout(function() { b.focus() }, 0);
    return this.Yc
};
d.tf = function() { this.X() && (this.oa(!1), this.oa(!0));
    Fe.prototype.tf.call(this) };
d.sm = function() { if (this.X()) { var a = this.Za.Kg(),
            b = 2 * se;
        this.Yc.setAttribute("width", a.width - b);
        this.Yc.setAttribute("height", a.height - b);
        this.wb.style.width = a.width - b - 4 + "px";
        this.wb.style.height = a.height - b - 4 + "px" } };
d.oa = function(a) { if (a != this.X())
        if (z.j.U(new Fc(this.T, "commentOpen", !a, a)), !Je(this.T) && !this.wb || A) Ke.prototype.oa.call(this, a);
        else { var b = this.Ib(),
                c = this.Kg();
            a ? (this.Za = new pe(this.T.o, this.aj(), this.T.Gd, this.Og, this.ka, this.Ca), ye(this.Za, this.T.id), a = this.sm.bind(this), this.Za.fp = a, this.sf()) : (this.Za.A(), this.Yc = this.wb = this.Za = null);
            this.vb(b);
            this.hg(c.width, c.height) } };
d.Jx = function() { ze(this.Za) && this.wb.focus() };
d.Kg = function() { return this.X() ? this.Za.Kg() : { width: this.ka, height: this.Ca } };
d.hg = function(a, b) { this.wb ? this.Za.hg(a, b) : (this.ka = a, this.Ca = b) };
d.Ib = function() { return this.wb ? this.wb.value : this.va };
d.vb = function(a) { this.va != a && (z.j.U(new z.j.Cc(this.T, "comment", null, this.va, a)), this.va = a);
    this.wb && (this.wb.value = a) };
d.A = function() { z.j.isEnabled() && this.vb("");
    this.T.Sa = null;
    Fe.prototype.A.call(this) };

function Le(a, b) { this.v = a;
    this.type = b;
    a.o.tn && (this.vd = a.o.tn[b], this.bl = a.o.tn[z.Fh[b]], this.ho = !this.vd) } d = Le.prototype;
d.Na = null;
d.Qe = null;
d.Fe = null;
d.Rc = 0;
d.Pa = 0;
d.Pf = !1;
d.vd = null;
d.bl = null;
d.ho = null;
d.Zk = function(a) {
    var b = this,
        c = b.v,
        e = a.v;
    a.isConnected() && a.disconnect();
    if (b.isConnected()) {
        var f = J(b),
            h = b.Fe;
        b.Fe = null;
        if (f.hb) h = z.D.Bf(f), f.A(), f = null;
        else if (b.type == z.Wa) { if (!f.N) throw "Orphan block does not have an output connection."; var k = Me(e, f);
            k && (f.N.connect(k), f = null) } else if (b.type == z.Qa) { if (!f.Y) throw "Orphan block does not have a previous connection."; for (k = e; k.K;) { var l = Lc(k); if (l && !l.hb) k = l;
                else { Ne(f.Y, k.K) && (k.K.connect(f.Y), f = null); break } } }
        if (f && (b.disconnect(), z.j.hc)) {
            var m = z.j.rc();
            setTimeout(function() { f.o && !f.getParent() && (z.j.R(m), f.N ? Oe(f.N, b) : f.Y && Oe(f.Y, b), z.j.R(!1)) }, z.Ek)
        }
        b.Fe = h
    }
    var n;
    z.j.isEnabled() && (n = new z.j.Gi(e));
    Pe(b, a);
    e.ih(c);
    n && (n.hf(), z.j.U(n))
};
d.A = function() { if (this.isConnected()) throw "Disconnect connection before disposing of it.";
    this.Pf && Qe(this.vd, this);
    this.bl = this.vd = null };

function Re(a) { return a.type == z.Wa || a.type == z.Qa } d.isConnected = function() { return !!this.Na };

function Se(a, b) { if (!b) return 3; if (Re(a)) var c = a.v,
        e = b.v;
    else e = a.v, c = b.v; return c && c == e ? 1 : b.type != z.Fh[a.type] ? 2 : c && e && c.o !== e.o ? 5 : Ne(a, b) ? c.hb && !e.hb ? 6 : 0 : 4 } d.Ql = function(a) { if (0 != Se(this, a)) return !1; if (a.type == z.Hh || a.type == z.wf)
        if (a.isConnected() || this.isConnected()) return !1; return a.type == z.Wa && a.isConnected() && !J(a).we() && !J(a).hb || this.type == z.wf && a.isConnected() && !this.v.K && !J(a).hb && J(a).K || -1 != z.ll.indexOf(a) ? !1 : !0 };
d.connect = function(a) { if (this.Na != a) { switch (Se(this, a)) {
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
                throw "Connection checks failed. " + (this + " expected " + this.Qe + ", found " + a.Qe);
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!"; } Re(this) ? this.Zk(a) : a.Zk(this) } };

function Pe(a, b) { a.Na = b;
    b.Na = a }

function Te(a, b) { for (var c = !1, e = 0; e < a.W.length; e++) { var f = a.W[e].connection; if (f && f.type == z.Wa && Ne(b.N, f)) { if (c) return null;
            c = f } } return c }

function Me(a, b) { for (var c; c = Te(a, b);)
        if (a = J(c), !a || a.hb) return c; return null } d.disconnect = function() { var a = this.Na; if (Re(this)) { var b = this.v; var c = a.v;
        a = this } else b = a.v, c = this.v;
    this.Gn(b, c);
    a.jp() };
d.Gn = function(a, b) { var c;
    z.j.isEnabled() && (c = new z.j.Gi(b));
    this.Na = this.Na.Na = null;
    b.ih(null);
    c && (c.hf(), z.j.U(c)) };
d.jp = function() { var a = this.v,
        b = this.Fe; if (a.o && b && z.j.hc)
        if (a = z.D.Qh(b, a.o), a.N) this.connect(a.N);
        else if (a.Y) this.connect(a.Y);
    else throw "Child block does not have output or previous statement."; };

function J(a) { return a.isConnected() ? a.Na.v : null }

function Ne(a, b) { if (!a.Qe || !b.Qe) return !0; for (var c = 0; c < a.Qe.length; c++)
        if (-1 != b.Qe.indexOf(a.Qe[c])) return !0; return !1 } d.Ds = function() { this.isConnected() && !Ne(this, this.Na) && Ee(Re(this) ? J(this) : this.v) };
d.bb = function(a) { a ? (u(a) || (a = [a]), this.Qe = a, this.Ds()) : this.Qe = null; return this };
d.ys = function() { return [] };
d.toString = function() { var a = this.v; if (a)
        if (a.N == this) var b = "Output Connection of ";
        else if (a.Y == this) b = "Previous Connection of ";
    else if (a.K == this) b = "Next Connection of ";
    else if (b = va(a.W, function(a) { return a.connection == this }, this)) b = 'Input "' + b.name + '" connection on ';
    else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
    else return "Orphan Connection"; return b + Ue(a) };

function Ve() {} Ve.prototype = [];

function We(a, b) { if (b.Pf) throw "Connection already in database.";
    b.v.tb || (a.splice(Xe(a, b), 0, b), b.Pf = !0) }

function Ye(a, b) { if (!a.length) return -1; var c = Xe(a, b); if (c >= a.length) return -1; for (var e = b.Pa, f = c; 0 <= f && a[f].Pa == e;) { if (a[f] == b) return f;
        f-- } for (; c < a.length && a[c].Pa == e;) { if (a[c] == b) return c;
        c++ } return -1 }

function Xe(a, b) { if (!a.length) return 0; for (var c = 0, e = a.length; c < e;) { var f = Math.floor((c + e) / 2); if (a[f].Pa < b.Pa) c = f + 1;
        else if (a[f].Pa > b.Pa) e = f;
        else { c = f; break } } return c }

function Qe(a, b) { if (!b.Pf) throw "Connection not in database."; var c = Ye(a, b); if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.Pf = !1;
    a.splice(c, 1) }

function Ze(a, b, c) {
    function e(a) { var b = h - f[a].Rc,
            e = k - f[a].Pa;
        Math.sqrt(b * b + e * e) <= c && m.push(f[a]); return e < c } var f = a,
        h = b.Rc,
        k = b.Pa;
    a = 0; for (var l = b = f.length - 2; a < l;) f[l].Pa < k ? a = l : b = l, l = Math.floor((a + b) / 2); var m = [];
    b = a = l; if (f.length) { for (; 0 <= a && e(a);) a--;
        do b++; while (b < f.length && e(b)) } return m };
z.EB = {};
z.aq = 5;
z.Pt = 10;
z.Tc = 20;
z.Ek = 250;
z.Gt = 30;
z.gu = 750;
z.vu = 100;
z.Ot = !0;
z.Wt = .45;
z.Xt = .65;
z.lc = { width: 96, height: 124, url: "sprites.png" };
z.Zm = "http://www.w3.org/2000/svg";
z.uf = "http://www.w3.org/1999/xhtml";
z.Wa = 1;
z.Hh = 2;
z.Qa = 3;
z.wf = 4;
z.Le = 5;
z.Fi = -1;
z.Ck = 0;
z.yh = 1;
z.bz = 0;
z.cz = 1;
z.$y = 1;
z.az = 2;
z.Fh = [];
z.Fh[z.Wa] = z.Hh;
z.Fh[z.Hh] = z.Wa;
z.Fh[z.Qa] = z.wf;
z.Fh[z.wf] = z.Qa;
z.yf = 0;
z.Ag = 1;
z.xf = 2;
z.$d = 3;
z.Yp = null;
z.Om = 1;
z.Zp = 2;
z.iq = "VARIABLE";
z.yu = "VARIABLE_DYNAMIC";
z.gq = "PROCEDURE";
z.hq = "RENAME_VARIABLE_ID";
z.$p = "DELETE_VARIABLE_ID";
z.Ea = {};
z.Ea.Hn = 0;
z.Ea.hl = null;
z.Ea.Gv = function(a) { var b = a.o,
        c = a.ga();
    b.Af.play("delete");
    a = $e(b, c);
    c = c.cloneNode(!0);
    c.Ox = a.x;
    c.Px = a.y;
    c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    L(b).appendChild(c);
    c.tq = c.getBBox();
    z.Ea.ur(c, b.u, new Date, b.scale) };
z.Ea.ur = function(a, b, c, e) { var f = (new Date - c) / 150;
    1 < f ? G(a) : (a.setAttribute("transform", "translate(" + (a.Ox + (b ? -1 : 1) * a.tq.width * e / 2 * f) + "," + (a.Px + a.tq.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(z.Ea.ur, 10, a, b, c, e)) };
z.Ea.iv = function(a) { var b = a.o,
        c = b.scale;
    b.Af.play("click"); if (!(1 > c)) { var e = $e(b, a.ga());
        a.N ? (e.x += (a.u ? 3 : -3) * c, e.y += 13 * c) : a.Y && (e.x += (a.u ? -23 : 23) * c, e.y += 3 * c);
        a = z.i.B("circle", { cx: e.x, cy: e.y, r: 0, fill: "none", stroke: "#888", "stroke-width": 10 }, L(b));
        z.Ea.Mq(a, new Date, c) } };
z.Ea.Mq = function(a, b, c) { var e = (new Date - b) / 150;
    1 < e ? G(a) : (a.setAttribute("r", 25 * e * c), a.style.opacity = 1 - e, z.Ea.Hn = setTimeout(z.Ea.Mq, 10, a, b, c)) };
z.Ea.Fv = function(a) { a.o.Af.play("disconnect"); if (!(1 > a.o.scale)) { var b = a.Hb().height;
        b = Math.atan(10 / b) / Math.PI * 180;
        a.u || (b *= -1);
        z.Ea.rr(a.ga(), b, new Date) } };
z.Ea.rr = function(a, b, c) { var e = (new Date - c) / 200;
    1 < e ? a.kh = "" : (a.kh = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")", z.Ea.hl = a, z.Ea.Hn = setTimeout(z.Ea.rr, 10, a, b, c));
    a.setAttribute("transform", a.rf + a.kh) };
z.Ea.In = function() { if (z.Ea.hl) { clearTimeout(z.Ea.Hn); var a = z.Ea.hl;
        a.kh = "";
        a.setAttribute("transform", a.rf);
        z.Ea.hl = null } };

function af(a, b) { af.s.constructor.call(this, a, b);
    this.im = new D(0, 0) } y(af, Le);

function bf(a, b) { var c = a.Rc - b.Rc;
    a = a.Pa - b.Pa; return Math.sqrt(c * c + a * a) }

function Oe(a, b) { if (!a.v.o.pb()) { var c = cf(a.v); if (!c.tb) { var e = !1; if (!c.we()) { c = cf(b.v); if (!c.we()) return;
                b = a;
                e = !0 } var f = z.selected == c;
            f || c.Kh(); var h = b.Rc + z.Tc - a.Rc;
            a = b.Pa + z.Tc - a.Pa;
            e && (a = -a);
            c.u && (h = -h);
            c.moveBy(h, a);
            f || c.dh() } } } d = af.prototype;
d.moveTo = function(a, b) { this.Pf && Qe(this.vd, this);
    this.Rc = a;
    this.Pa = b;
    this.ho || We(this.vd, this) };
d.moveBy = function(a, b) { this.moveTo(this.Rc + a, this.Pa + b) };

function df(a, b) { a.moveTo(b.x + a.im.x, b.y + a.im.y) }

function ef(a, b, c) { a.im.x = b;
    a.im.y = c }

function ff(a) { var b = a.Na.Rc - a.Rc,
        c = a.Na.Pa - a.Pa; if (0 != b || 0 != c) { a = J(a); var e = a.ga(); if (!e) throw "block is not rendered.";
        e = z.i.tc(e);
        a.ga().setAttribute("transform", "translate(" + (e.x - b) + "," + (e.y - c) + ")");
        gf(a, -b, -c) } }
d.closest = function(a, b) { var c = this.bl; if (c.length) { var e = this.Pa,
            f = this.Rc;
        this.Rc = f + b.x;
        this.Pa = e + b.y; var h = Xe(c, this);
        b = null; for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Pa - this.Pa) <= a;) l = c[m], this.Ql(l, k) && (b = l, k = bf(l, this)), m--; for (; h < c.length && Math.abs(c[h].Pa - this.Pa) <= a;) l = c[h], this.Ql(l, k) && (b = l, k = bf(l, this)), h++;
        this.Rc = f;
        this.Pa = e;
        a = { connection: b, Vs: k } } else a = { connection: null, Vs: a }; return a };
d.Aj = function() { var a = this.type == z.Wa || this.type == z.Hh ? "m 0,0 " + hf + " v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5"; var b = this.v.la();
    Le.Tr = z.i.B("path", { "class": "blocklyHighlightedConnectionPath", d: a, transform: "translate(" + (this.Rc - b.x) + "," + (this.Pa - b.y) + ")" + (this.v.u ? " scale(-1 1)" : "") }, this.v.ga()) };

function jf(a) { kf(a, !1); var b = []; if (a.type != z.Wa && a.type != z.Qa) return b; if (a = J(a)) { if (a.isCollapsed()) { var c = [];
            a.N && c.push(a.N);
            a.K && c.push(a.K);
            a.Y && c.push(a.Y) } else c = a.pe(!0); for (var e = 0; e < c.length; e++) b.push.apply(b, jf(c[e]));
        b.length || (b[0] = a) } return b }

function lf() { G(Le.Tr);
    delete Le.Tr }

function kf(a, b) {
    (a.ho = b) && a.Pf ? Qe(a.vd, a) : b || a.Pf || We(a.vd, a) } d.Ql = function(a, b) { return bf(this, a) > b ? !1 : af.s.Ql.call(this, a) };
d.Gn = function(a, b) { af.s.Gn.call(this, a, b);
    a.P && a.Z();
    b.P && (mf(b), b.Z()) };
d.jp = function() { var a = this.v,
        b = this.Fe; if (a.o && b && z.j.hc) { af.s.jp.call(this);
        b = J(this); if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.wc();
        b.Z(!1);
        a.P && a.Z() } };
d.ys = function(a) { return Ze(this.bl, this, a) };
d.Zk = function(a) { af.s.Zk.call(this, a); var b = this.v;
    a = a.v;
    b.P && mf(b);
    a.P && mf(a);
    b.P && a.P && (this.type == z.Qa || this.type == z.wf ? a.Z() : b.Z()) };
d.Ds = function() { this.isConnected() && !Ne(this, this.Na) && (Ee(Re(this) ? J(this) : this.v), this.v.ob()) };

function nf(a) { this.og = z.selected = a;
    this.m = a.o;
    a = this.og.pe(!1); var b;
    a: { for (b = this.og.K; b;) { var c = J(b); if (!c) break a;
            b = c.K } b = null } b && b != this.og.K && a.push(b);
    this.kn = a;
    this.ki = this.dc = null;
    this.$o = 0;
    this.ug = !1 } nf.prototype.A = function() { this.m = this.og = null;
    this.kn.length = 0;
    this.ki = this.dc = null };
nf.prototype.update = function(a, b) { var c = this.dc,
        e = this.dc;
    this.ki = this.dc = null;
    this.$o = z.Tc; for (var f = 0; f < this.kn.length; f++) { var h = this.kn[f],
            k = h.closest(this.$o, a);
        k.connection && (this.dc = k.connection, this.ki = h, this.$o = k.Vs) }(a = e != this.dc) && c && lf();
    c = !!this.dc && b != z.Zp;
    this.ug = (b = !!b && !this.og.getParent() && this.og.ec()) && !c;
    b && this.dc && (lf(), this.dc = null);!this.ug && a && this.dc && this.dc && this.dc.Aj() };

function of (a, b) { this.gb = a;
    this.m = b;
    this.Rh = new nf(this.gb);
    this.Fg = null;
    this.ug = !1;
    this.Ge = this.gb.la();
    b = [];
    a = xc(a, !1); for (var c = 0, e; e = a[c]; c++) { e = pf(e); for (var f = 0; f < e.length; f++) b.push({ location: e[f].Og, icon: e[f] }) } this.kl = b } of .prototype.A = function() { this.jb = this.m = this.gb = null;
    this.kl.length = 0;
    this.Rh && (this.Rh.A(), this.Rh = null) };

function qf(a, b, c) { c = a.pi(c);
    a.gb.em(vc(a.Ge, c)); for (var e = 0; e < a.kl.length; e++) { var f = a.kl[e],
            h = f.icon;
        f = vc(f.location, c);
        h.Og = f;
        h.X() && (h = h.Za, h.sd = f, h.fg && re(h)) } a.Fg = rf(a.m, b);
    a.Rh.update(c, a.Fg);
    a.ug = a.Rh.ug;
    b = a.m.Pc;
    a.ug ? (a.gb.ek(!0), a.Fg == z.Om && b && sf(b, !0)) : (a.gb.ek(!1), b && sf(b, !1)) }

function tf(a, b, c) { qf(a, b, c);
    a.kl = [];
    z.Ea.In();
    b = a.pi(c);
    a.gb.us(vc(a.Ge, b));
    c = a.m.Pc;
    a.ug ? (c && uf(c.close, 100, c), a.jj(), a.gb.A(!1, !0)) : c && c.close();
    a.ug || (gf(a.gb, b.x, b.y), a.gb.jg(!1), b = a.Rh, b.dc && (b.ki.connect(b.dc), b.og.P && (z.Ea.iv((Re(b.ki) ? b.dc : b.ki).v), vf(cf(b.og))), b.dc && lf()), a.gb.Z(), a.jj(), wf(a.gb));
    a.m.Sb(!0);
    (b = a.m.ea) && z.i.Rb(b.Dc, a.gb.ec() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    z.j.R(!1) } of .prototype.jj = function() { var a = new z.j.Gi(this.gb);
    a.Go = this.Ge;
    a.hf();
    z.j.U(a) }; of .prototype.pi = function(a) { a = new D(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Jj && (a = a.scale(1 / this.m.options.Lb.scale)); return a };

function xf(a, b, c, e, f) { this.w = z.i.B("g", { "class": "blocklyComment" }, null);
    this.w.rf = "";
    this.pk = z.i.B("rect", { "class": "blocklyCommentRect", x: 0, y: 0, rx: 3, ry: 3 });
    this.w.appendChild(this.pk);
    this.fg = !1;
    this.Je = z.i.Sf() && !!a.zb;
    xf.s.constructor.call(this, a, b, c, e, f);
    this.Z() } y(xf, Xc);
d = xf.prototype;
d.A = function() { if (this.o) { if (z.selected == this) { this.qg(); var a = this.o;
            a.Eb && a.Eb.cancel() } z.j.isEnabled() && z.j.U(new Jc(this));
        G(this.w);
        this.oh = this.ng = this.Yc = this.wb = this.pk = this.w = null;
        z.j.disable();
        xf.s.A.call(this);
        z.j.enable() } };
d.wc = function() { this.o.options.readOnly || this.Mn || (z.O(this.ng, "mousedown", this, this.Ns), z.O(this.oh, "mousedown", this, this.Ns));
    this.Mn = !0;
    yf(this);
    this.ga().parentNode || this.o.Yd.appendChild(this.ga()) };
d.Ns = function(a) { var b = this.o.qe(a);
    b && (b.Ac || (b.Ac = this), b.Lc = a) };
d.xi = function(a) { if (!this.o.options.readOnly) { var b = [];
        this.ec() && this.we() && (b.push(z.ba.ev(this)), b.push(z.ba.dv(this)));
        z.ba.show(a, b, this.u) } };
d.select = function() { if (z.selected != this) { var a = null; if (z.selected) { a = z.selected.id;
            z.j.disable(); try { z.selected.qg() } finally { z.j.enable() } } a = new Fc(null, "selected", a, this.id);
        a.Bc = this.o.id;
        z.j.U(a);
        z.selected = this;
        this.Kh() } };
d.qg = function() { if (z.selected == this) { var a = new Fc(null, "selected", this.id, null);
        a.Bc = this.o.id;
        z.j.U(a);
        z.selected = null;
        this.dh();
        zf(this) } };
d.Kh = function() { z.i.mb(this.w, "blocklySelected");
    this.up() };
d.dh = function() { z.i.Rb(this.w, "blocklySelected");
    zf(this) };
d.la = function() { var a = 0,
        b = 0,
        c = this.Je ? this.o.zb.rc() : null,
        e = this.ga(); if (e) { do { var f = z.i.tc(e);
            a += f.x;
            b += f.y;
            this.Je && this.o.zb.je.firstChild == e && (f = this.o.zb.Gl(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.Yd && e != c) } return this.nd = new D(a, b) };
d.moveBy = function(a, b) { var c = new Ic(this),
        e = this.la();
    this.translate(e.x + a, e.y + b);
    this.nd = new D(e.x + a, e.y + b);
    c.hf();
    z.j.U(c);
    Af(this.o) };
d.translate = function(a, b) { this.nd = new D(a, b);
    this.ga().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.fm = function() { if (this.Je) { var a = this.la();
        z.i.removeAttribute(this.ga(), "transform");
        this.o.zb.qf(a.x, a.y);
        Bf(this.o.zb, this.ga()) } };
d.us = function(a) { this.Je && (this.translate(a.x, a.y), this.o.zb.Ui(this.o.Ma)) };
d.em = function(a, b) { a ? a.qf(b.x, b.y) : (this.w.rf = "translate(" + b.x + "," + b.y + ")", this.w.setAttribute("transform", this.w.rf + this.w.kh)) };
d.moveTo = function(a, b) { this.translate(a, b) };
d.Sn = function() { var a = this.la(),
        b = this.Hb(); if (this.u) { var c = new D(a.x - b.width, a.y);
        a = new D(a.x, a.y + b.height) } else c = new D(a.x, a.y), a = new D(a.x + b.width, a.y + b.height); return { hd: c, Id: a } };

function yf(a) { a.we() ? z.i.mb(a.w, "blocklyDraggable") : z.i.Rb(a.w, "blocklyDraggable") } d.hh = function(a) { xf.s.hh.call(this, a);
    yf(this) };
d.jg = function(a) { a ? (a = this.ga(), a.rf = "", a.kh = "", z.i.mb(this.w, "blocklyDragging")) : z.i.Rb(this.w, "blocklyDragging") };
d.ga = function() { return this.w };
d.Ic = function() { return this.wb ? this.wb.value : this.Vc };
d.Cd = function(a) { xf.s.Cd.call(this, a);
    this.wb && (this.wb.value = a) };
d.ek = function(a) { a ? z.i.mb(this.w, "blocklyDraggingDelete") : z.i.Rb(this.w, "blocklyDraggingDelete") };
d.bt = function() {};

function Cf(a, b, c) { z.j.disable(); try { var e = $c(a),
            f = new xf(b, e.content, e.Lr, e.xt, e.id);
        b.P && (f.wc(), f.Z(!1)); if (!isNaN(e.x) && !isNaN(e.y))
            if (b.u) { var h = c || b.$c();
                f.moveBy(h - e.x, e.y) } else f.moveBy(e.x, e.y) } finally { z.j.enable() } Yc(f); return f }
d.qk = function(a) { var b;
    this.o.u && (b = this.o.$c());
    a = Zc(this, a); var c = this.la();
    a.setAttribute("x", Math.round(this.o.u ? b - c.x : c.x));
    a.setAttribute("y", Math.round(c.y));
    a.setAttribute("h", this.Xh());
    a.setAttribute("w", this.$c()); return a };

function Df(a, b) { this.Fb = a;
    this.m = b;
    this.Fg = null;
    this.Lm = !1;
    this.Ge = this.Fb.la();
    this.Gg = z.i.Sf() && b.zb ? b.zb : null } Df.prototype.A = function() { this.Gg = this.m = this.Fb = null };

function Ef(a, b, c) { c = a.pi(c);
    a.Fb.em(a.Gg, vc(a.Ge, c));
    a.Fb.ec() && (a.Fg = rf(a.m, b), a.Lm = a.Fg != z.Yp, b = a.m.Pc, a.Lm ? (a.Fb.ek(!0), a.Fg == z.Om && b && sf(b, !0)) : (a.Fb.ek(!1), b && sf(b, !1))) }

function Ff(a, b, c) { Ef(a, b, c);
    b = a.pi(c);
    b = vc(a.Ge, b);
    a.Fb.moveTo(b.x, b.y);
    b = a.m.Pc;
    a.Lm ? (b && uf(b.close, 100, b), a.jj(), a.Fb.A(!1, !0)) : b && b.close();
    a.Lm || (a.Gg && a.Gg.Ui(a.m.Yd), a.Fb.jg && a.Fb.jg(!1), a.jj());
    a.m.Sb(!0);
    a.m.ea && z.i.Rb(a.m.ea.Dc, a.Fb.ec() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    z.j.R(!1) } Df.prototype.jj = function() { if (this.Fb.Yr) { var a = new Ic(this.Fb);
        a.Ho = this.Ge;
        a.hf();
        z.j.U(a) } };
Df.prototype.pi = function(a) { a = new D(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Jj && (a = a.scale(1 / this.m.options.Lb.scale)); return a };
Df.prototype.fm = function() { this.Fb.moveTo(0, 0);
    this.Gg.qf(this.Ge.x, this.Ge.y);
    Bf(this.Gg, this.Fb.ga()) };

function Gf(a) { this.m = a;
    this.Ex = a.rb();
    this.Gx = new D(a.scrollX, a.scrollY) } Gf.prototype.A = function() { this.m = null };
Gf.prototype.Em = function() { z.selected && z.selected.qg();
    Hf(this.m) };

function If(a, b) { var c = a.Ex,
        e = vc(a.Gx, b);
    b = Math.min(e.x, -c.Gc);
    e = Math.min(e.y, -c.nc);
    b = Math.max(b, c.ya - c.Gc - c.Hc);
    e = Math.max(e, c.cb - c.nc - c.mc);
    b = -b - c.Gc;
    e = -e - c.nc;
    a.ut(b, e) } Gf.prototype.ut = function(a, b) { this.m.ib.set(a, b) };

function Jf(a) { Jf.s.constructor.call(this, a.tj());
    this.Ub = a.Ub;
    this.Od = a.Od } y(Jf, Gf);
Jf.prototype.ut = function(a, b) { this.Od ? this.Ub.set(a) : this.Ub.set(b) };
z.C = {};
z.C.visible = !1;
z.C.Mh = !1;
z.C.au = 50;
z.C.ts = 0;
z.C.jk = 0;
z.C.vo = 0;
z.C.wo = 0;
z.C.S = null;
z.C.nm = null;
z.C.cq = 0;
z.C.eq = 10;
z.C.qu = 10;
z.C.Vt = 750;
z.C.Qm = 5;
z.C.ha = null;
z.C.V = function() { z.C.ha || (z.C.ha = F("DIV", "blocklyTooltipDiv"), document.body.appendChild(z.C.ha)) };
z.C.Cg = function(a) { z.Zb(a, "mouseover", null, z.C.lx);
    z.Zb(a, "mouseout", null, z.C.kx);
    a.addEventListener("mousemove", z.C.jx, !1) };
z.C.lx = function(a) { if (!z.C.Mh) { for (a = a.target; !q(a.gd) && !v(a.gd);) a = a.gd;
        z.C.S != a && (z.C.Fa(), z.C.nm = null, z.C.S = a);
        clearTimeout(z.C.ts) } };
z.C.kx = function() { z.C.Mh || (z.C.ts = setTimeout(function() { z.C.S = null;
        z.C.nm = null;
        z.C.Fa() }, 1), clearTimeout(z.C.jk)) };
z.C.jx = function(a) { if (z.C.S && z.C.S.gd && !z.H.X() && !z.C.Mh)
        if (z.C.visible) { var b = z.C.vo - a.pageX;
            a = z.C.wo - a.pageY;
            Math.sqrt(b * b + a * a) > z.C.qu && z.C.Fa() } else z.C.nm != z.C.S && (clearTimeout(z.C.jk), z.C.vo = a.pageX, z.C.wo = a.pageY, z.C.jk = setTimeout(z.C.Ax, z.C.Vt)) };
z.C.Fa = function() { z.C.visible && (z.C.visible = !1, z.C.ha && (z.C.ha.style.display = "none"));
    z.C.jk && clearTimeout(z.C.jk) };
z.C.block = function() { z.C.Fa();
    z.C.Mh = !0 };
z.C.Qx = function() { z.C.Mh = !1 };
z.C.Ax = function() {
    if (!z.C.Mh && (z.C.nm = z.C.S, z.C.ha)) {
        ee(z.C.ha);
        for (var a = z.C.S.gd; v(a);) a = a();
        a = z.i.At(a, z.C.au);
        a = a.split("\n");
        for (var b = 0; b < a.length; b++) { var c = document.createElement("div");
            c.appendChild(document.createTextNode(a[b]));
            z.C.ha.appendChild(c) } a = z.C.S.u;
        b = Zd();
        z.C.ha.style.direction = a ? "rtl" : "ltr";
        z.C.ha.style.display = "block";
        z.C.visible = !0;
        c = z.C.vo;
        c = a ? c - (z.C.cq + z.C.ha.offsetWidth) : c + z.C.cq;
        var e = z.C.wo + z.C.eq;
        e + z.C.ha.offsetHeight > b.height + window.scrollY && (e -= z.C.ha.offsetHeight +
            2 * z.C.eq);
        a ? c = Math.max(z.C.Qm - window.scrollX, c) : c + z.C.ha.offsetWidth > b.width + window.scrollX - 2 * z.C.Qm && (c = b.width - z.C.ha.offsetWidth - 2 * z.C.Qm);
        z.C.ha.style.top = e + "px";
        z.C.ha.style.left = c + "px"
    }
};

function Kf(a, b) { this.jb = this.Xb = this.lh = this.mh = this.Ac = this.oc = this.ss = null;
    this.mv = b;
    this.Hj = this.Rg = this.Ij = this.Mg = !1;
    this.Lc = a;
    this.I = this.tg = this.Oe = this.Pe = this.lm = this.km = null;
    this.Sl = this.Rr = !1;
    this.Sr = !z.Ot } d = Kf.prototype;
d.A = function() { z.Touch.Te();
    z.C.Qx();
    this.mv.Eb = null;
    this.km && z.Da(this.km);
    this.lm && z.Da(this.lm);
    this.I = this.jb = this.Xb = this.lh = this.mh = null;
    this.Oe && (this.Oe.A(), this.Oe = null);
    this.tg && (this.tg.A(), this.tg = null);
    this.Pe && (this.Pe.A(), this.Pe = null) };

function Lf(a, b) {
    a.oc = uc(new D(b.clientX, b.clientY), a.ss);
    if (a.Mg) var c = !1;
    else c = a.oc, a.Mg = Math.sqrt(c.x * c.x + c.y * c.y) > (a.I ? z.Pt : z.aq), c = a.Mg;
    if (c) {
        if (a.Ac) { a.Hj = !0;
            a.Pe = new Df(a.Ac, a.jb);
            c = a.Pe;
            z.j.rc() || z.j.R(!0);
            c.m.Sb(!1);
            c.Fb.bt(!1);
            c.Gg && c.fm();
            c.Fb.jg && c.Fb.jg(!0); var e = c.m.ea;
            e && z.i.mb(e.Dc, c.Fb.ec() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            Ef(a.Pe, a.Lc, a.oc);
            c = !0 } else c = !1;
        if (!c) {
            if (a.Xb)
                if (a.I ? (a.Xb.disabled ? c = !1 : !Mf(a.I) || a.I.Zr(a.oc) ? (a.jb = a.I.ta, Nf(a.jb), z.j.rc() || z.j.R(!0), a.lh =
                        null, a.Xb = Of(a.I, a.Xb), a.Xb.select(), c = !0) : c = !1, a.Rg = c) : a.Xb.we() && (a.Rg = !0), a.Rg) { a.Oe = new of (a.Xb, a.jb);
                    c = a.Oe;
                    e = a.oc; var f = a.Sr;
                    z.j.rc() || z.j.R(!0);
                    c.m.Sb(!1);
                    z.Ea.In(); if (c.gb.getParent() || f && c.gb.K && J(c.gb.K)) Ee(c.gb, f), e = c.pi(e), e = vc(c.Ge, e), c.gb.translate(e.x, e.y), z.Ea.Fv(c.gb);
                    c.gb.jg(!0);
                    c.gb.fm();
                    (e = c.m.ea) && z.i.mb(e.Dc, c.gb.ec() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                    qf(a.Oe, a.Lc, a.oc);
                    c = !0 } else c = !1;
            else c = !1;
            !c && (a.I ? Mf(a.I) : a.jb && a.jb.ib) && (a.tg = a.I ? new Jf(a.I) : new Gf(a.jb), a.Ij = !0, a.tg.Em())
        }
        z.Xf()
    }
    a.Lc = b
}
d.gj = function(a) { z.i.Vl(a) ? this.cancel() : (this.Rr = !0, z.Ea.In(), Nf(this.jb), this.jb.Jj && this.jb.resize(), Pf(this.jb), this.Lc = a, z.Qb(!!this.I), z.C.block(), this.Xb && this.Xb.select(), z.i.Uf(a) ? qc(this, a) : (("touchstart" == a.type.toLowerCase() || "pointerdown" == a.type.toLowerCase() && "mouse" != a.pointerType) && z.Jw(a, this), this.ss = new D(a.clientX, a.clientY), this.Sr = a.altKey || a.ctrlKey || a.metaKey, this.Cg(a))) };
d.Cg = function(a) { this.km = z.O(document, "mousemove", null, this.xj.bind(this));
    this.lm = z.O(document, "mouseup", null, this.Kl.bind(this));
    a.preventDefault();
    a.stopPropagation() };
d.xj = function(a) { Lf(this, a);
    this.Ij ? If(this.tg, this.oc) : this.Rg ? qf(this.Oe, this.Lc, this.oc) : this.Hj && Ef(this.Pe, this.Lc, this.oc);
    a.preventDefault();
    a.stopPropagation() };
d.Kl = function(a) {
    Lf(this, a);
    z.Xf();
    if (this.Sl) console.log("Trying to end a gesture recursively.");
    else {
        this.Sl = !0;
        if (this.Hj) Ff(this.Pe, a, this.oc);
        else if (this.Rg) tf(this.Oe, a, this.oc);
        else if (this.Ij) { var b = this.tg;
            If(b, this.oc);
            Qf(b.m) } else this.Ac && !this.Mg ? (this.Ac.up && this.Ac.up(), this.Ac.select && this.Ac.select()) : Rf(this) ? (this.mh.Fd(), Sf(this)) : !this.lh || this.Mg || Rf(this) ? this.lh || this.Ac || this.mh || this.Mg || z.selected && z.selected.qg() : (this.I && this.I.Lh ? this.Xb.disabled || (z.j.rc() || z.j.R(!0),
            wf(Of(this.I, this.Xb))) : z.j.U(new Fc(this.lh, "click", void 0, void 0)), Sf(this), z.j.R(!1));
        a.preventDefault();
        a.stopPropagation();
        this.A()
    }
};
d.cancel = function() { if (!this.Sl) { z.Xf(); if (this.Hj) Ff(this.Pe, this.Lc, this.oc);
        else if (this.Rg) tf(this.Oe, this.Lc, this.oc);
        else if (this.Ij) { var a = this.tg;
            If(a, this.oc);
            Qf(a.m) } this.A() } };

function qc(a, b) { a.Xb ? (Sf(a), z.Qb(a.I), a.Xb.xi(b)) : a.Ac ? a.Ac.xi(b) : a.jb && !a.I && (z.Qb(), a.jb.xi(b));
    b.preventDefault();
    b.stopPropagation();
    a.A() }

function Sf(a) { a.Xb && !a.I && vf(a.Xb) }

function Tf(a, b) { a.lh || a.Ac || (a.lh = b, b.tb && b != cf(b) ? Uf(a, cf(b)) : Uf(a, b)) }

function Uf(a, b) { b.hb ? Uf(a, b.getParent()) : a.Xb = b }

function Rf(a) { if (a.mh) { var b = a.mh;
        b = b.vg && !!b.v && Je(b.v) } else b = !1; return b && !a.Mg && (!a.I || !a.I.Lh) } d.pb = function() { return this.Ij || this.Rg || this.Hj };
z.i = {};
z.i.removeAttribute = function(a, b) { A && wb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b) };
z.i.mb = function(a, b) { var c = a.getAttribute("class") || ""; if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c && (c += " ");
    a.setAttribute("class", c + b); return !0 };
z.i.Rb = function(a, b) { var c = a.getAttribute("class"); if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c = c.split(/\s+/); for (var e = 0; e < c.length; e++) c[e] && c[e] != b || (c.splice(e, 1), e--);
    c.length ? a.setAttribute("class", c.join(" ")) : z.i.removeAttribute(a, "class"); return !0 };
z.i.Or = function(a, b) { return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ") };
z.i.Sw = function(a) { a.preventDefault();
    a.stopPropagation() };
z.i.Vl = function(a) { return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable };
z.i.tc = function(a) { var b = new D(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10)); if (c = a.getAttribute("y")) b.y = parseInt(c, 10); if (c = (c = a.getAttribute("transform")) && c.match(z.i.tc.Cu)) b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && ((c = a.match(z.i.tc.Au)) || (c = a.match(z.i.tc.Bu)), c && (b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3])))); return b };
z.i.Al = function(a) { for (var b = 0, c = 0; a;) { var e = z.i.tc(a);
        b += e.x;
        c += e.y; if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode } return new D(b, c) };
z.i.tc.Cu = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
z.i.tc.Bu = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
z.i.tc.Au = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
z.i.B = function(a, b, c) { a = document.createElementNS(z.Zm, a); for (var e in b) a.setAttribute(e, b[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a); return a };
z.i.Uf = function(a) { return a.ctrlKey && nb ? !0 : 2 == a.button };
z.i.Sj = function(a, b, c) { var e = b.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    c || (c = b.getScreenCTM().inverse()); return e.matrixTransform(c) };
z.i.Ap = function(a) { return a.length ? a.reduce(function(a, c) { return a.length < c.length ? a : c }).length : 0 };
z.i.fv = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || z.i.Ap(a); for (var e = 0; e < b; e++) { for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c; return b };
z.i.gv = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || z.i.Ap(a); for (var e = 0; e < b; e++) { for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c; return b };
z.i.Kx = function(a) { return z.i.Op(a, !0) };
z.i.ic = function(a) { if (!q(a)) return a;
    a = z.i.Op(a, !1); return a.length ? a[0] : "" };
z.i.Bq = function(a) { for (var b = z.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e;) { var f = e[1];
        f = f.toUpperCase(); "BKY_" != f.substr(0, 4) ? console.log("WARNING: Unsupported message table prefix in %{" + e[1] + "}.") : void 0 == b[f.substr(4)] && console.log("WARNING: No message string for %{" + e[1] + "}.");
        a = a.substring(e.index + f.length + 1);
        e = c.exec(a) } };
z.i.Op = function(a, b) {
    var c = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && c.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : b && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && c.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (c.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[a-zA-Z][a-zA-Z0-9_]*/.test(f) ? (l = f.toUpperCase(), (l = Fa(l, "BKY_") ?
            l.substring(4) : null) && l in z.g ? (f = z.g[l], q(f) ? Array.prototype.push.apply(c, z.i.Op(f, b)) : b ? c.push(String(f)) : c.push(f)) : c.push("%{" + f + "}")) : c.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && c.push(l);
    b = [];
    for (k = a.length = 0; k < c.length; ++k) "string" == typeof c[k] ? a.push(c[k]) : ((l = a.join("")) && b.push(l), a.length = 0, b.push(c[k]));
    (l = a.join("")) && b.push(l);
    a.length = 0;
    return b
};
z.i.ne = function() { for (var a = z.i.ne.ft.length, b = [], c = 0; 20 > c; c++) b[c] = z.i.ne.ft.charAt(Math.random() * a); return b.join("") };
z.i.ne.ft = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
z.i.At = function(a, b) { a = a.split("\n"); for (var c = 0; c < a.length; c++) a[c] = z.i.Xx(a[c], b); return a.join("\n") };
z.i.Xx = function(a, b) { if (a.length <= b) return a; for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++) c[e].length > b && (b = c[e].length);
    e = -Infinity; var f = 1;
    do { var h = e; var k = a;
        a = []; var l = c.length / f,
            m = 1; for (e = 0; e < c.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = z.i.Bt(c, a, b);
        e = z.i.Sp(c, a, b);
        a = z.i.Yx(c, a);
        f++ } while (e > h); return k };
z.i.Sp = function(a, b, c) { for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === b[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === b[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e); for (h = b = 0; h < e.length; h++) b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5), b -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? b += c / 3 : -1 != ",;)]}".indexOf(f[h]) && (b += c / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += .5); return b };
z.i.Bt = function(a, b, c) { for (var e = z.i.Sp(a, b, c), f, h = 0; h < b.length - 1; h++)
        if (b[h] != b[h + 1]) { var k = [].concat(b);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1]; var l = z.i.Sp(a, k, c);
            l > e && (e = l, f = k) } return f ? z.i.Bt(a, f, c) : b };
z.i.Yx = function(a, b) { for (var c = [], e = 0; e < a.length; e++) c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " "); return c.join("") };
z.i.Sf = function() {
    if (void 0 !== z.i.Sf.pn) return z.i.Sf.pn;
    if (!g.getComputedStyle) return !1;
    var a = document.createElement("p"),
        b = "none",
        c = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
    document.body.insertBefore(a, null);
    for (var e in c)
        if (void 0 !== a.style[e]) { a.style[e] = "translate3d(1px,1px,1px)";
            b = g.getComputedStyle(a); if (!b) return document.body.removeChild(a), !1;
            b = b.getPropertyValue(c[e]) } document.body.removeChild(a);
    z.i.Sf.pn = "none" !== b;
    return z.i.Sf.pn
};
z.i.Fj = function(a, b) { var c = b.nextSibling;
    b = b.parentNode; if (!b) throw "Reference node has no parent.";
    c ? b.insertBefore(a, c) : b.appendChild(a) };
z.i.$s = function(a) { if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document."); if ("complete" === document.readyState) a();
    else var b = setInterval(function() { "complete" === document.readyState && (clearInterval(b), a()) }, 10) };
z.i.dk = function(a, b) { a.style.transform = b;
    a.style["-webkit-transform"] = b };
z.i.$n = function() { var a = Zd(),
        b = Vf(); return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x } };

function Wf(a, b) { this.Zh = a;
    this.Gp = b.spacing;
    this.js = b.length;
    this.Dw = (this.yo = a.firstChild) && this.yo.nextSibling;
    this.Bx = b.snap } Wf.prototype.gg = 1;
Wf.prototype.A = function() { this.Zh = null };
Wf.prototype.update = function(a) { this.gg = a; var b = this.Gp * a || 100;
    this.Zh.setAttribute("width", b);
    this.Zh.setAttribute("height", b);
    b = Math.floor(this.Gp / 2) + .5; var c = b - this.js / 2,
        e = b + this.js / 2;
    b *= a;
    c *= a;
    e *= a;
    Xf(this.yo, a, c, e, b, b);
    Xf(this.Dw, a, b, b, c, e) };

function Xf(a, b, c, e, f, h) { a && (a.setAttribute("stroke-width", b), a.setAttribute("x1", c), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h)) } Wf.prototype.moveTo = function(a, b) { this.Zh.setAttribute("x", a);
    this.Zh.setAttribute("y", b);
    (A || kb) && this.update(this.gg) };

function Yf(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        e = !1,
        f = !1,
        h = !1,
        k = !1,
        l = !1,
        m = !1;
    else c = Zf(a.toolbox), e = !(!c || !c.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = e), h = a.collapse, void 0 === h && (h = e), k = a.comments, void 0 === k && (k = e), l = a.disable, void 0 === l && (l = e), m = a.sounds, void 0 === m && (m = !0);
    var n = !!a.rtl,
        p = a.horizontalLayout;
    void 0 === p && (p = !1);
    var r = a.toolboxPosition;
    r = "end" === r ? !1 : !0;
    r = p ? r ? z.yf : z.Ag : r == n ? z.$d : z.xf;
    var x = a.scrollbars;
    void 0 === x && (x = e);
    var w = a.css;
    void 0 === w && (w = !0);
    var C = "https://blockly-demo.appspot.com/static/media/";
    a.media ? C = a.media : a.path && (C = a.path + "media/");
    var Ja = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
    this.u = n;
    this.ye = Ja;
    this.collapse = h;
    this.Xi = k;
    this.disable = l;
    this.readOnly = b;
    this.os = a.maxBlocks || Infinity;
    this.Sd = C;
    this.Nr = e;
    this.Qr = x;
    this.qw = f;
    this.pw = m;
    this.ow = w;
    this.ue = p;
    this.xe = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.DB = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.PB = 0 < c.spacing && !!b.snap;
    this.Jr = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.Vx = void 0 === a.wheel ? !1 : !!a.wheel;
    b.mt = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Qj = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Rj = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.yx = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.Yb = b;
    this.Ba = r
}
Yf.prototype.Lb = null;
Yf.prototype.kg = null;
Yf.prototype.rb = null;

function Zf(a) { a ? ("string" != typeof a && ("undefined" == typeof XSLTProcessor && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = z.D.fd(a))) : a = null; return a };

function $f(a) { this.m = a;
    this.Lf = new ag(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.rg = new ag(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.Zi = z.i.B("rect", { height: H, width: H, "class": "blocklyScrollbarBackground" }, null);
    z.i.Fj(this.Zi, a.Yd) } $f.prototype.ab = null;
$f.prototype.A = function() { G(this.Zi);
    this.ab = this.m = this.Zi = null;
    this.Lf.A();
    this.Lf = null;
    this.rg.A();
    this.rg = null };
$f.prototype.resize = function() {
    var a = this.m.rb();
    if (a) {
        var b = !1,
            c = !1;
        this.ab && this.ab.ya == a.ya && this.ab.cb == a.cb && this.ab.xb == a.xb && this.ab.lb == a.lb ? (this.ab && this.ab.Hc == a.Hc && this.ab.Cb == a.Cb && this.ab.Gc == a.Gc || (b = !0), this.ab && this.ab.mc == a.mc && this.ab.Ke == a.Ke && this.ab.nc == a.nc || (c = !0)) : c = b = !0;
        b && this.Lf.resize(a);
        c && this.rg.resize(a);
        this.ab && this.ab.ya == a.ya && this.ab.lb == a.lb || this.Zi.setAttribute("x", this.rg.Mc.x);
        this.ab && this.ab.cb == a.cb && this.ab.xb == a.xb || this.Zi.setAttribute("y", this.Lf.Mc.y);
        this.ab = a
    }
};
$f.prototype.set = function(a, b) { var c = {};
    a *= this.Lf.gc;
    b *= this.rg.gc; var e = this.rg.Bd,
        f = a / this.Lf.Bd;
    c.x = isNaN(f) ? 0 : f;
    e = b / e;
    c.y = isNaN(e) ? 0 : e;
    this.m.kg(c);
    bg(this.Lf, a);
    bg(this.rg, b) };

function ag(a, b, c, e) {
    this.m = a;
    this.oi = c || !1;
    this.Ng = b;
    this.ab = null;
    this.$i(e);
    this.Mc = new D(0, 0);
    a = H;
    b ? (this.ed.setAttribute("height", a), this.ze.setAttribute("height", a), this.Ie.setAttribute("height", a - 5), this.Ie.setAttribute("y", 2.5), this.Nj = "width", this.Os = "x") : (this.ed.setAttribute("width", a), this.ze.setAttribute("width", a), this.Ie.setAttribute("width", a - 5), this.Ie.setAttribute("x", 2.5), this.Nj = "height", this.Os = "y");
    this.Is = z.O(this.ed, "mousedown", this, this.gx);
    this.Js = z.O(this.Ie, "mousedown",
        this, this.hx)
}
var cg, dg;
d = ag.prototype;
d.Oo = new D(0, 0);
d.jt = 0;
d.Bd = 0;
d.Mf = 0;
d.yj = 0;
d.Lj = !0;
d.Dg = !0;
var H = 15;
Cb && (H = 25);
ag.prototype.A = function() { eg();
    z.Da(this.Is);
    this.Is = null;
    z.Da(this.Js);
    this.Js = null;
    G(this.ze);
    this.m = this.Ie = this.ed = this.w = this.ze = null };

function bg(a, b) { a.yj = b;
    a.Ie.setAttribute(a.Os, a.yj) }

function fg(a, b) { a.Bd = b;
    a.ze.setAttribute(a.Nj, a.Bd);
    a.ed.setAttribute(a.Nj, a.Bd) } $f.prototype.gh = function(a) { this.Lf.gh(a);
    this.rg.gh(a) };

function gg(a, b, c) { a.Mc.x = b;
    a.Mc.y = c;
    z.i.dk(a.ze, "translate(" + (a.Mc.x + a.Oo.x) + "px," + (a.Mc.y + a.Oo.y) + "px)") } d = ag.prototype;
d.resize = function(a) {
    if (!a && (a = this.m.rb(), !a)) return;
    var b = this.ab;
    if (!a || !b || a.ya != b.ya || a.cb != b.cb || a.Cb != b.Cb || a.Ke != b.Ke || a.xb != b.xb || a.lb != b.lb || a.Hc != b.Hc || a.mc != b.mc || a.Gc != b.Gc || a.nc != b.nc) {
        this.ab = a;
        if (this.Ng) {
            b = a.ya - 1;
            this.oi && (b -= H);
            fg(this, Math.max(0, b));
            b = a.lb + .5;
            this.oi && this.m.u && (b += H);
            gg(this, b, a.xb + a.cb - H - .5);
            this.oi || this.oa(this.Bd < a.Hc);
            this.gc = this.Bd / a.Hc;
            if (-Infinity == this.gc || Infinity == this.gc || isNaN(this.gc)) this.gc = 0;
            this.Mf = Math.max(0, a.ya * this.gc);
            this.Ie.setAttribute(this.Nj,
                this.Mf);
            bg(this, hg(this, (a.Cb - a.Gc) * this.gc))
        } else { b = a.cb - 1;
            this.oi && (b -= H);
            fg(this, Math.max(0, b));
            b = a.lb + .5;
            this.m.u || (b += a.ya - H - 1);
            gg(this, b, a.xb + .5);
            this.oi || this.oa(this.Bd < a.mc);
            this.gc = this.Bd / a.mc; if (-Infinity == this.gc || Infinity == this.gc || isNaN(this.gc)) this.gc = 0;
            this.Mf = Math.max(0, a.cb * this.gc);
            this.Ie.setAttribute(this.Nj, this.Mf);
            bg(this, hg(this, (a.Ke - a.nc) * this.gc)) } ig(this)
    }
};
d.$i = function(a) { var b = "blocklyScrollbar" + (this.Ng ? "Horizontal" : "Vertical");
    a && (b += " " + a);
    this.ze = z.i.B("svg", { "class": b }, null);
    this.w = z.i.B("g", {}, this.ze);
    this.ed = z.i.B("rect", { "class": "blocklyScrollbarBackground" }, this.w);
    a = Math.floor((H - 5) / 2);
    this.Ie = z.i.B("rect", { "class": "blocklyScrollbarHandle", rx: a, ry: a }, this.w);
    z.i.Fj(this.ze, L(this.m)) };
d.X = function() { return this.Lj };
d.gh = function(a) { var b = a != this.Dg;
    this.Dg = a;
    b && this.wk() };
d.oa = function(a) { var b = a != this.X(); if (this.oi) throw "Unable to toggle visibility of paired scrollbars.";
    this.Lj = a;
    b && this.wk() };
d.wk = function() { this.Dg && this.X() ? this.ze.setAttribute("display", "block") : this.ze.setAttribute("display", "none") };
d.gx = function(a) { Pf(this.m);
    z.Touch.Te();
    eg(); if (z.i.Uf(a)) a.stopPropagation();
    else { var b = z.i.Sj(a, L(this.m), jg(this.m));
        b = this.Ng ? b.x : b.y; var c = z.i.Al(this.Ie);
        c = this.Ng ? c.x : c.y; var e = this.yj,
            f = .95 * this.Mf;
        b <= c ? e -= f : b >= c + this.Mf && (e += f);
        bg(this, hg(this, e));
        ig(this);
        a.stopPropagation();
        a.preventDefault() } };
d.hx = function(a) { Pf(this.m);
    eg();
    z.i.Uf(a) ? a.stopPropagation() : (this.Dx = this.yj, Hf(this.m), this.jt = this.Ng ? a.clientX : a.clientY, cg = z.O(document, "mouseup", this, this.mx), dg = z.O(document, "mousemove", this, this.ix), a.stopPropagation(), a.preventDefault()) };
d.ix = function(a) { bg(this, hg(this, this.Dx + ((this.Ng ? a.clientX : a.clientY) - this.jt)));
    ig(this) };
d.mx = function() { Qf(this.m);
    z.Touch.Te();
    eg() };

function eg() { z.Qb(!0);
    cg && (z.Da(cg), cg = null);
    dg && (z.Da(dg), dg = null) }

function hg(a, b) { return b = 0 >= b || isNaN(b) || a.Bd < a.Mf ? 0 : Math.min(b, a.Bd - a.Mf) }

function ig(a) { var b = a.yj / a.Bd;
    isNaN(b) && (b = 0); var c = {};
    a.Ng ? c.x = b : c.y = b;
    a.m.kg(c) } d.set = function(a) { bg(this, hg(this, a * this.gc));
    ig(this) };

function kg(a, b) { kg.s.constructor.call(this, a, b);
    this.Tl = !1;
    this.ud = {};
    this.ht = this.Xj = 0;
    this.No = null } y(kg, Kf);
d = kg.prototype;
d.gj = function(a) { kg.s.gj.call(this, a);!this.Sl && z.Touch.Wl(a) && lg(this, a) };
d.Cg = function(a) { this.No = z.O(document, "mousedown", null, this.lw.bind(this), !0);
    this.km = z.O(document, "mousemove", null, this.xj.bind(this), !0);
    this.lm = z.O(document, "mouseup", null, this.Kl.bind(this), !0);
    a.preventDefault();
    a.stopPropagation() };
d.lw = function(a) {!this.pb() && z.Touch.Wl(a) && (lg(this, a), this.Tl && z.Xf()) };
d.xj = function(a) { if (this.pb()) z.Touch.Bp(a) && kg.s.xj.call(this, a);
    else if (this.Tl) { if (z.Touch.Wl(a)) { this.ud[z.Touch.Hl(a)] = mg(this, a); var b = Object.keys(this.ud); if (2 == b.length) { b = tc(this.ud[b[0]], this.ud[b[1]]) / this.ht; if (0 < this.Xj && Infinity > this.Xj) { var c = b - this.Xj;
                    c = 0 < c ? 5 * c : 6 * c; var e = this.jb,
                        f = z.i.Sj(a, L(e), jg(e));
                    e.zoom(f.x, f.y, c) } this.Xj = b;
                a.preventDefault() } } z.Xf() } else kg.s.xj.call(this, a) };
d.Kl = function(a) { if (z.Touch.Wl(a) && !this.pb()) { var b = z.Touch.Hl(a);
        this.ud[b] && delete this.ud[b];
        2 > Object.keys(this.ud).length && (this.ud = {}, this.Xj = 0) }!this.Tl || this.pb() ? z.Touch.Bp(a) && kg.s.Kl.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.A()) };
d.A = function() { kg.s.A.call(this);
    this.No && z.Da(this.No) };

function lg(a, b) { a.ud[z.Touch.Hl(b)] = mg(a, b); var c = Object.keys(a.ud);
    2 == c.length && (a.ht = tc(a.ud[c[0]], a.ud[c[1]]), a.Tl = !0, b.preventDefault()) }

function mg(a, b) { return a.jb ? new D(b.pageX ? b.pageX : b.changedTouches[0].pageX, b.pageY ? b.pageY : b.changedTouches[0].pageY) : null };

function ng() { Gb.call(this);
    this.Xe = new Yb(this);
    this.Eu = this;
    this.Qo = null } y(ng, Gb);
ng.prototype[Tb] = !0;
d = ng.prototype;
d.El = function() { return this.Qo };
d.Am = function(a) { this.Qo = a };
d.addEventListener = function(a, b, c, e) { dc(this, a, b, c, e) };
d.removeEventListener = function(a, b, c, e) { lc(this, a, b, c, e) };
d.dispatchEvent = function(a) { var b, c = this.El(); if (c)
        for (b = []; c; c = c.El()) b.push(c);
    c = this.Eu; var e = a.type || a; if (q(a)) a = new Lb(a, c);
    else if (a instanceof Lb) a.target = a.target || c;
    else { var f = a;
        a = new Lb(e, c);
        eb(a, f) } f = !0; if (b)
        for (var h = b.length - 1; !a.$g && 0 <= h; h--) { var k = a.currentTarget = b[h];
            f = og(k, e, !0, a) && f } a.$g || (k = a.currentTarget = c, f = og(k, e, !0, a) && f, a.$g || (f = og(k, e, !1, a) && f)); if (b)
        for (h = 0; !a.$g && h < b.length; h++) k = a.currentTarget = b[h], f = og(k, e, !1, a) && f; return f };
d.Ta = function() { ng.s.Ta.call(this);
    this.removeAllListeners();
    this.Qo = null };
d.na = function(a, b, c, e) { return this.Xe.add(String(a), b, !1, c, e) };
d.ls = function(a, b, c, e) { return this.Xe.add(String(a), b, !0, c, e) };
d.jd = function(a, b, c, e) { return this.Xe.remove(String(a), b, c, e) };
d.removeAllListeners = function(a) { return this.Xe ? this.Xe.removeAll(a) : 0 };

function og(a, b, c, e) { b = a.Xe.xc[String(b)]; if (!b) return !0;
    b = b.concat(); for (var f = !0, h = 0; h < b.length; ++h) { var k = b[h]; if (k && !k.ui && k.capture == c) { var l = k.listener,
                m = k.Ll || k.src;
            k.Rk && $b(a.Xe, k);
            f = !1 !== l.call(m, e) && f } } return f && 0 != e.Zs } d.oj = function(a, b, c, e) { return this.Xe.oj(String(a), b, c, e) };

function uf(a, b, c) { if (v(a)) c && (a = na(a, c));
    else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
    else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0) };

function pg(a, b, c, e) { this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e } d = pg.prototype;
d.$c = function() { return this.right - this.left };
d.Xh = function() { return this.bottom - this.top };
d.clone = function() { return new pg(this.top, this.right, this.bottom, this.left) };
d.contains = function(a) { return this && a ? a instanceof pg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1 };
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
d.translate = function(a, b) { a instanceof D ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, t(b) && (this.top += b, this.bottom += b)); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b; return this };

function qg(a, b, c, e) { this.left = a;
    this.top = b;
    this.width = c;
    this.height = e } d = qg.prototype;
d.clone = function() { return new qg(this.left, this.top, this.width, this.height) };
d.contains = function(a) { return a instanceof D ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height };
d.af = function() { return new Sd(this.width, this.height) };
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
d.translate = function(a, b) { a instanceof D ? (this.left += a.x, this.top += a.y) : (this.left += a, t(b) && (this.top += b)); return this };
d.scale = function(a, b) { b = t(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b; return this };

function rg(a) { this.m = a } d = rg.prototype;
d.Bg = 47;
d.Dk = 44;
d.Bh = 16;
d.Rm = 20;
d.Ii = 20;
d.Kk = 10;
d.Xm = 0;
d.Ym = 32;
d.gi = !1;
d.w = null;
d.Gm = null;
d.xo = 0;
d.Wf = 0;
d.Jb = 0;
d.pf = 0;
d.V = function() {
    this.w = z.i.B("g", { "class": "blocklyTrash" }, null);
    var a = String(Math.random()).substring(2);
    var b = z.i.B("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.w);
    z.i.B("rect", { width: this.Bg, height: this.Dk, y: this.Bh }, b);
    z.i.B("image", { width: z.lc.width, x: -this.Xm, height: z.lc.height, y: -this.Ym, "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")" }, this.w).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.Sd + z.lc.url);
    b = z.i.B("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.w);
    z.i.B("rect", { width: this.Bg, height: this.Bh }, b);
    this.Gm = z.i.B("image", { width: z.lc.width, x: -this.Xm, height: z.lc.height, y: -this.Ym, "clip-path": "url(#blocklyTrashLidClipPath" + a + ")" }, this.w);
    this.Gm.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.Sd + z.lc.url);
    z.O(this.w, "mouseup", this, this.click);
    this.gn();
    return this.w
};
d.L = function(a) { this.Ri = this.Rm + a;
    sf(this, !1); return this.Ri + this.Dk + this.Bh };
d.A = function() { this.w && (G(this.w), this.w = null);
    this.m = this.Gm = null;
    g.clearTimeout(this.xo) };
d.position = function() { var a = this.m.rb();
    a && (this.m.u ? (this.Jb = this.Ii + H, a.Ba == z.xf && (this.Jb += a.ql, this.m.ea && (this.Jb += a.lb))) : (this.Jb = a.ya + a.lb - this.Bg - this.Ii - H, a.Ba == z.$d && (this.Jb -= a.ql)), this.pf = a.cb + a.xb - (this.Dk + this.Bh) - this.Ri, a.Ba == z.Ag && (this.pf -= a.Cr), this.w.setAttribute("transform", "translate(" + this.Jb + "," + this.pf + ")")) };
d.Uh = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(); return new qg(a.left + this.Xm - this.Kk, a.top + this.Ym - this.Kk, this.Bg + 2 * this.Kk, this.Bh + this.Dk + 2 * this.Kk) };

function sf(a, b) { a.gi != b && (g.clearTimeout(a.xo), a.gi = b, a.gn()) }
d.gn = function() { this.Wf += this.gi ? .2 : -.2;
    this.Wf = rc(this.Wf, 0, 1); var a = 45 * this.Wf;
    this.Gm.setAttribute("transform", "rotate(" + (this.m.u ? -a : a) + "," + (this.m.u ? 4 : this.Bg - 4) + "," + (this.Bh - 2) + ")");
    this.w.style.opacity = .4 + .4 * this.Wf;
    0 < this.Wf && 1 > this.Wf && (this.xo = uf(this.gn, 20, this)) };
d.close = function() { sf(this, !1) };
d.click = function() { var a = this.m.Fx - this.m.scrollX,
        b = this.m.Hx - this.m.scrollY;
    Math.sqrt(a * a + b * b) > z.aq || console.log("TODO: Inspect trash.") };

function Sc(a, b, c, e) { this.o = a;
    this.name = b;
    this.type = c || "";
    this.di = e || z.i.ne();
    z.j.U(new Cc(this)) } Sc.prototype.$ = function() { return this.di };

function sg(a, b) { a = String(a.name).toLowerCase();
    b = String(b.name).toLowerCase(); return a < b ? -1 : a == b ? 0 : 1 };
z.G = {};
z.G.Xa = z.iq;
z.G.pq = function(a) { var b = Qc(a);
    a = Object.create(null); for (var c = 0; c < b.length; c++) { var e = b[c].Jf(); if (e)
            for (var f = 0; f < e.length; f++) { var h = e[f];
                h.$() && (a[h.$()] = h) } } b = []; for (var k in a) b.push(a[k]); return b };
z.G.yB = function() { console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.") };
z.G.Gu = function(a) { var b = Qc(a);
    a = {}; for (var c = 0; c < b.length; c++) { var e = b[c]; if (e.Vv) { e = e.Vv(); for (var f = 0; f < e.length; f++) a[e[f]] = e[f] } } b = []; for (var h in a) b.push(a[h]); return b };
z.G.Hf = function(a) { var b = [],
        c = F("button");
    c.setAttribute("text", z.g.NEW_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE");
    tg(a, function(a) { z.G.Nh(a.ta) });
    b.push(c);
    a = z.G.On(a); return b = b.concat(a) };
z.G.On = function(a) {
    a = a.sj("");
    a.sort(sg);
    var b = [];
    if (0 < a.length) {
        var c = a[0];
        if (z.J.variables_set) { var e = z.J.math_change ? 8 : 24;
            e = '<xml><block type="variables_set" gap="' + e + '">' + z.G.Th(c) + "</block></xml>";
            e = z.D.fd(e).firstChild;
            b.push(e) } z.J.math_change && (e = z.J.variables_get ? 20 : 8, e = '<xml><block type="math_change" gap="' + e + '">' + z.G.Th(c) + '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>', e = z.D.fd(e).firstChild, b.push(e));
        for (c = 0; e = a[c]; c++) z.J.variables_get &&
            (e = '<xml><block type="variables_get" gap="8">' + z.G.Th(e) + "</block></xml>", e = z.D.fd(e).firstChild, b.push(e))
    }
    return b
};
z.G.Sv = function(a) { a = a.Ye(); var b = ""; if (a.length)
        for (var c = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !b;) { for (var h = !1, k = 0; k < a.length; k++)
                if (a[k].name.toLowerCase() == f) { h = !0; break } h ? (e++, 25 == e && (e = 0, c++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < c && (f += c)) : b = f } else b = "i"; return b };
z.G.Nh = function(a, b, c) {
    function e(c) { z.G.Ts(z.g.NEW_VARIABLE_TITLE, c, function(c) { if (c) { var h = z.G.Pw(c, a); if (h) { var k = c.toLowerCase(); if (h.type == f) var n = z.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
                    else n = z.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", k).replace("%2", h.type);
                    z.alert(n, function() { e(c) }) } else a.Wc(c, f), b && b(c) } else b && b(null) }) } var f = c || "";
    e("") };
ba("Blockly.Variables.createVariableButtonHandler", z.G.Nh);
z.G.Wc = z.G.Nh;
ba("Blockly.Variables.createVariable", z.G.Wc);
z.G.ep = function(a, b) {
    function c(e) { var f = z.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
        z.G.Ts(f, e, function(e) { if (e) { var f = z.G.Qw(e, b.type, a);
                f ? (f = z.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", e.toLowerCase()).replace("%2", f.type), z.alert(f, function() { c(e) })) : a.eh(b.$(), e) } }) } c("") };
z.G.Ts = function(a, b, c) { z.prompt(a, b, function(a) { a && (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), a == z.g.RENAME_VARIABLE || a == z.g.NEW_VARIABLE) && (a = null);
        c(a) }) };
z.G.Qw = function(a, b, c) { c = c.ra.Ye();
    a = a.toLowerCase(); for (var e = 0, f; f = c[e]; e++)
        if (f.name.toLowerCase() == a && f.type != b) return f; return null };
z.G.Pw = function(a, b) { b = b.ra.Ye();
    a = a.toLowerCase(); for (var c = 0, e; e = b[c]; c++)
        if (e.name.toLowerCase() == a) return e; return null };
z.G.Th = function(a) { var b = a.type; "" == b && (b = "''"); return '<field name="VAR" id="' + a.$() + '" variabletype="' + Ka(b) + '">' + Ka(a.name) + "</field>" };
z.G.Er = function(a) { a = "<xml>" + z.G.Th(a) + "</xml>"; return z.D.fd(a).firstChild };
z.G.Dl = function(a, b, c, e) { var f = z.G.Jc(a, b, c, e);
    f || (f = z.G.kv(a, b, c, e)); return f };
z.G.Jc = function(a, b, c, e) { var f = a.si; if (b) { var h = a.Nd(b);!h && f && (h = f.Nd(b)) } else if (c) { if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.Jc(c, e);!h && f && (h = f.Jc(c, e)) } return h };
z.G.kv = function(a, b, c, e) { var f = a.si;
    c || (c = z.G.Sv(a.Pd ? a.qh : a)); return f ? f.Wc(c, e, b) : a.Wc(c, e, b) };
z.G.Fr = function(a, b) { a = a.Ye(); var c = []; if (b.length != a.length)
        for (var e = 0; e < a.length; e++) { var f = a[e]; - 1 == b.indexOf(f) && c.push(f) }
    return c };
z.rd = {};
z.rd.Yw = function(a) { z.G.Nh(a.ta, null, "String") };
z.rd.Xw = function(a) { z.G.Nh(a.ta, null, "Number") };
z.rd.Ww = function(a) { z.G.Nh(a.ta, null, "Colour") };
z.rd.Hf = function(a) {
    var b = [],
        c = F("button");
    c.setAttribute("text", z.g.NEW_STRING_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
    b.push(c);
    c = F("button");
    c.setAttribute("text", z.g.NEW_NUMBER_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
    b.push(c);
    c = F("button");
    c.setAttribute("text", z.g.NEW_COLOUR_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
    b.push(c);
    a.Ig.CREATE_VARIABLE_STRING = z.rd.Yw;
    a.Ig.CREATE_VARIABLE_NUMBER = z.rd.Xw;
    a.Ig.CREATE_VARIABLE_COLOUR =
        z.rd.Ww;
    a = z.rd.On(a);
    return b = b.concat(a)
};
z.rd.On = function(a) { a = a.Ye();
    a.sort(sg); var b = []; if (0 < a.length) { if (z.J.variables_set_dynamic) { var c = '<xml><block type="variables_set_dynamic" gap="24">' + z.G.Th(a[0]) + "</block></xml>";
            c = z.D.fd(c).firstChild;
            b.push(c) } if (z.J.variables_get_dynamic)
            for (var e = 0; c = a[e]; e++) c = '<xml><block type="variables_get_dynamic" gap="8">' + z.G.Th(c) + "</block></xml>", c = z.D.fd(c).firstChild, b.push(c) } return b };

function ug(a) { this.Ro = a;
    this.Pi = Object.create(null) } d = ug.prototype;
d.uo = null;
d.A = function() { this.Pi = this.Ro = null };
d.load = function(a, b) { if (a.length) { try { var c = new window.Audio } catch (l) { return } for (var e, f = 0; f < a.length; f++) { var h = a[f],
                k = h.match(/\.(\w+)$/); if (k && c.canPlayType("audio/" + k[1])) { e = new window.Audio(h); break } } e && e.play && (this.Pi[b] = e) } };
d.preload = function() { for (var a in this.Pi) { var b = this.Pi[a];
        b.volume = .01;
        b.play();
        b.pause(); if (qb || pb) break } };
d.play = function(a, b) { var c = this.Pi[a];
    c ? (a = new Date, null != this.uo && a - this.uo < z.vu || (this.uo = a, c = xb && 9 === xb || qb || ob ? c : c.cloneNode(), c.volume = void 0 === b ? 1 : b, c.play())) : this.Ro && this.Ro.Af.play(a, b) };
d = xf.prototype;
d.Hb = function() { return { width: this.$c(), height: this.Xh() } };
d.Z = function() {
    if (!this.fg) {
        var a = this.Hb();
        this.aj();
        this.w.appendChild(this.Yc);
        this.oh = z.i.B("rect", { "class": "blocklyCommentHandleTarget", x: 0, y: 0 });
        this.w.appendChild(this.oh);
        this.ng = z.i.B("rect", { "class": "blocklyCommentTarget", x: 0, y: 0, rx: 3, ry: 3 });
        this.w.appendChild(this.ng);
        this.Mb = z.i.B("g", { "class": this.u ? "blocklyResizeSW" : "blocklyResizeSE" }, this.w);
        z.i.B("polygon", { points: "0,x x,x x,0".replace(/x/g, (8).toString()) }, this.Mb);
        z.i.B("line", { "class": "blocklyResizeLine", x1: 8 / 3, y1: 7, x2: 7, y2: 8 / 3 },
            this.Mb);
        z.i.B("line", { "class": "blocklyResizeLine", x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 }, this.Mb);
        this.ec() && (this.Ef = z.i.B("g", { "class": "blocklyCommentDeleteIcon" }, this.w), this.kr = z.i.B("circle", { "class": "blocklyDeleteIconShape", r: "7", cx: "7.5", cy: "7.5" }, this.Ef), z.i.B("line", { x1: "5", y1: "10", x2: "10", y2: "5", stroke: "#fff", "stroke-width": "2" }, this.Ef), z.i.B("line", { x1: "5", y1: "5", x2: "10", y2: "10", stroke: "#fff", "stroke-width": "2" }, this.Ef));
        vg(this, a.width, a.height);
        this.wb.value = this.Vc;
        this.fg = !0;
        this.Mb && z.O(this.Mb,
            "mousedown", this, this.gp);
        this.ec() && (z.O(this.Ef, "mousedown", this, this.yv), z.O(this.Ef, "mouseout", this, this.zv), z.O(this.Ef, "mouseup", this, this.Av))
    }
};
d.aj = function() { this.Yc = z.i.B("foreignObject", { x: 0, y: 10, "class": "blocklyCommentForeignObject" }, null); var a = document.createElementNS(z.uf, "body");
    a.setAttribute("xmlns", z.uf);
    a.className = "blocklyMinimalBody"; var b = document.createElementNS(z.uf, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.wb = b;
    this.Yc.appendChild(a);
    z.O(b, "wheel", this, function(a) { a.stopPropagation() });
    z.O(b, "change", this, function() { this.Cd(b.value) }); return this.Yc };
d.gp = function(a) { wg(this);
    z.i.Uf(a) || (this.o.Em(a, new D(this.o.u ? -this.ka : this.ka, this.Ca)), this.ni = z.O(document, "mouseup", this, this.vx), this.Mo = z.O(document, "mousemove", this, this.hp), z.Qb());
    a.stopPropagation() };
d.yv = function(a) { z.i.mb(this.kr, "blocklyDeleteIconHighlighted");
    a.stopPropagation() };
d.zv = function() { z.i.Rb(this.kr, "blocklyDeleteIconHighlighted") };
d.Av = function(a) { this.A(!0, !0);
    a.stopPropagation() };

function wg(a) { a.ni && (z.Da(a.ni), a.ni = null);
    a.Mo && (z.Da(a.Mo), a.Mo = null) }
d.vx = function() { z.Touch.Te();
    wg(this) };
d.hp = function(a) { this.Pk = !1;
    a = Ae(this.o, a);
    vg(this, this.u ? -a.x : a.x, a.y) };

function vg(a, b, c) {
    b = Math.max(b, 45);
    c = Math.max(c, 30);
    a.ka = b;
    a.Ca = c;
    a.pk.setAttribute("width", b);
    a.pk.setAttribute("height", c);
    a.ng.setAttribute("width", b);
    a.ng.setAttribute("height", c);
    a.oh.setAttribute("width", b);
    a.oh.setAttribute("height", 10);
    a.u && (a.pk.setAttribute("transform", "scale(-1 1)"), a.ng.setAttribute("transform", "scale(-1 1)"));
    a.Mb && (a.u ? (a.Mb.setAttribute("transform", "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"), a.Ef.setAttribute("transform", "translate(" + (-b + 8) + ",-8) scale(-1 1)")) :
        (a.Mb.setAttribute("transform", "translate(" + (b - 8) + "," + (c - 8) + ")"), a.Ef.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
    b = a.Hb();
    a.Yc.setAttribute("width", b.width);
    a.Yc.setAttribute("height", b.height - 10);
    a.u && a.Yc.setAttribute("x", -b.width);
    a.wb.style.width = b.width - 4 + "px";
    a.wb.style.height = b.height - 4 - 10 + "px"
}
d.up = function() { var a = this;
    this.kj = !0;
    setTimeout(function() { a.wb.focus();
        z.i.mb(a.w, "blocklyFocused");
        z.i.mb(a.ng, "blocklyCommentTargetFocused");
        z.i.mb(a.oh, "blocklyCommentHandleTargetFocused") }, 0) };

function zf(a) { a.kj = !1;
    setTimeout(function() { a.wb.blur();
        z.i.Rb(a.w, "blocklyFocused");
        z.i.Rb(a.ng, "blocklyCommentTargetFocused");
        z.i.Rb(a.oh, "blocklyCommentHandleTargetFocused") }, 0) };

function xg(a) { this.Yi = a;
    this.V() } d = xg.prototype;
d.wa = null;
d.je = null;
d.Yi = null;
d.V = function() { this.wa || (this.wa = z.i.B("svg", { xmlns: z.Zm, "xmlns:html": z.uf, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyWsDragSurface blocklyOverflowVisible" }, null), this.Yi.appendChild(this.wa)) };
d.qf = function(a, b) { a = a.toFixed(0);
    b = b.toFixed(0);
    this.wa.style.display = "block";
    z.i.dk(this.wa, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.Gl = function() { return z.i.tc(this.wa) };
d.Ui = function(a) { if (!a) throw "Couldn't clear and hide the drag surface: missing new surface."; var b = this.wa.childNodes[0],
        c = this.wa.childNodes[1]; if (!(b && c && z.i.Or(b, "blocklyBlockCanvas") && z.i.Or(c, "blocklyBubbleCanvas"))) throw "Couldn't clear and hide the drag surface.  A node was missing.";
    null != this.Td ? z.i.Fj(b, this.Td) : a.insertBefore(b, a.firstChild);
    z.i.Fj(c, b);
    this.wa.style.display = "none";
    z.i.dk(this.wa, "");
    this.Td = null };
z.D = {};
z.D.Rp = function(a, b) { var c = F("xml");
    c.appendChild(z.D.Tx(z.G.pq(a))); for (var e = dd(a, !0), f = 0, h; h = e[f]; f++) c.appendChild(h.qk(b));
    a = cd(a, !0); for (f = 0; e = a[f]; f++) c.appendChild(z.D.mn(e, b)); return c };
z.D.Tx = function(a) { for (var b = F("variables"), c = 0, e; e = a[c]; c++) { var f = F("variable", null, e.name);
        f.setAttribute("type", e.type);
        f.setAttribute("id", e.$());
        b.appendChild(f) } return b };
z.D.mn = function(a, b) { var c;
    a.o.u && (c = a.o.$c());
    b = z.D.Bf(a, b); var e = a.la();
    b.setAttribute("x", Math.round(a.o.u ? c - e.x : e.x));
    b.setAttribute("y", Math.round(e.y)); return b };
z.D.Nv = function(a) { null == a.getValue() && (a.Pg(), a.getValue()); var b = a.Jc(); if (!b) throw Error("Tried to serialize a variable field with no variable."); var c = F("field", null, b.name);
    c.setAttribute("name", a.name);
    c.setAttribute("id", b.$());
    c.setAttribute("variabletype", b.type); return c };
z.D.Ov = function(a) { if (a.name && a.vg) { if (a.bh()) return z.D.Nv(a); var b = F("field", null, a.getValue());
        b.setAttribute("name", a.name); return b } return null };
z.D.Hu = function(a, b) { for (var c = 0, e; e = a.W[c]; c++)
        for (var f = 0, h; h = e.Ja[f]; f++)(h = z.D.Ov(h)) && b.appendChild(h) };
z.D.Bf = function(a, b) {
    var c = F(a.hb ? "shadow" : "block");
    c.setAttribute("type", a.type);
    b || c.setAttribute("id", a.id);
    if (a.Ga) { var e = a.Ga();
        e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e) } z.D.Hu(a, c);
    if (e = a.wl()) { e = F("comment", null, e); if ("object" == typeof a.Sa) { e.setAttribute("pinned", a.Sa.X()); var f = a.Sa.Kg();
            e.setAttribute("h", f.height);
            e.setAttribute("w", f.width) } c.appendChild(e) } a.data && (e = F("data", null, a.data), c.appendChild(e));
    f = 0;
    for (var h; h = a.W[f]; f++) {
        var k, l = !0;
        if (h.type != z.Le) {
            var m =
                J(h.connection);
            h.type == z.Wa ? k = F("value") : h.type == z.Qa && (k = F("statement"));
            e = h.connection.Fe;
            !e || m && m.hb || k.appendChild(z.D.Hq(e));
            m && (k.appendChild(z.D.Bf(m, b)), l = !1);
            k.setAttribute("name", h.name);
            l || c.appendChild(k)
        }
    }
    a.xw != a.Rf && c.setAttribute("inline", a.Rf);
    a.isCollapsed() && c.setAttribute("collapsed", !0);
    a.disabled && c.setAttribute("disabled", !0);
    a.ec() || a.hb || c.setAttribute("deletable", !1);
    a.we() || a.hb || c.setAttribute("movable", !1);
    Je(a) || c.setAttribute("editable", !1);
    if (f = Lc(a)) k = F("next", null,
        z.D.Bf(f, b)), c.appendChild(k);
    e = a.K && a.K.Fe;
    !e || f && f.hb || k.appendChild(z.D.Hq(e));
    return c
};
z.D.Hq = function(a) { for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else { for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && G(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && G(c)) } return a };
z.D.wd = function(a) { return (new XMLSerializer).serializeToString(a) };
z.D.GB = function(a) { a = z.D.wd(a).split("<"); for (var b = "", c = 1; c < a.length; c++) { var e = a[c]; "/" == e[0] && (b = b.substring(2));
        a[c] = b + "<" + e; "/" != e[0] && "/>" != e.slice(-2) && (b += "  ") } a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>"); return a.replace(/^\n/, "") };
z.D.fd = function(a) { return (new DOMParser).parseFromString(a, "text/xml").firstChild };
z.D.CB = function(a, b) { b.Sb(!1);
    b.clear();
    a = z.D.ie(a, b);
    b.Sb(!0); return a };
z.D.ie = function(a, b) {
    if (a instanceof ad) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.") }
    var e;
    b.u && (e = b.$c());
    c = [];
    yg();
    var f = a.childNodes.length,
        h = z.j.rc();
    h || z.j.R(!0);
    b.Sb && b.Sb(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l],
                n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !z.j.hc) {
                var p = z.D.Qh(m, b);
                c.push(p.id);
                var r = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    x = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(r) || isNaN(x) || p.moveBy(b.u ? e - r : r, x);
                k = !1
            } else if ("shadow" == n) k = !1;
            else if ("comment" == n)
                if (b.P) Cf(m, b, e);
                else { var w = m,
                        C = b,
                        Ja = $c(w),
                        Uc = new Xc(C, Ja.content, Ja.Lr, Ja.xt, Ja.id),
                        Va = parseInt(w.getAttribute("x"), 10),
                        Cd = parseInt(w.getAttribute("y"), 10);
                    isNaN(Va) || isNaN(Cd) || Uc.moveBy(Va, Cd);
                    Yc(Uc) }
            else if ("variables" == n) { if (k) z.D.Kv(m, b);
                else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                k = !1 }
        }
    } finally {
        h ||
            z.j.R(!1), zg()
    }
    b.Sb && b.Sb(!0);
    return c
};
z.D.zB = function(a, b) { if (b.hasOwnProperty("scale")) { var c = M; try { M = 0; var e = Ag(b) } finally { M = c } } a = z.D.ie(a, b); if (e && e.height) { c = e.y + e.height; var f = e.x; var h = Infinity,
            k = Infinity; for (e = 0; e < a.length; e++) { var l = Kc(b, a[e]).la();
            l.y < k && (k = l.y);
            l.x < h && (h = l.x) } c = c - k + 10;
        f -= h; var m;
        b.u && (m = b.$c()); for (e = 0; e < a.length; e++) Kc(b, a[e]).moveBy(b.u ? m - f : f, c) } return a };
z.D.Qh = function(a, b) { if (a instanceof ad) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.") } z.j.disable();
    c = b.Ye(); try { var e = z.D.Jn(a, b),
            f = xc(e, !1); if (b.P) { Bg(e, !0); for (var h = f.length - 1; 0 <= h; h--) f[h].wc(); for (h = f.length - 1; 0 <= h; h--) f[h].Z(!1);
            setTimeout(function() { e.o && Bg(e, !1) }, 1);
            mf(e);
            Af(b) } else
            for (h = f.length - 1; 0 <= h; h--) f[h].Pg() } finally { z.j.enable() } if (z.j.isEnabled()) { a = z.G.Fr(b, c); for (h = 0; h < a.length; h++) z.j.U(new Cc(a[h]));
        z.j.U(new z.j.Fk(e)) } return e };
z.D.Kv = function(a, b) { for (var c = 0, e; e = a.children[c]; c++) { var f = e.getAttribute("type"),
            h = e.getAttribute("id");
        e = e.textContent; if (null == f) throw Error("Variable with id, " + h + " is without a type");
        b.Wc(e, f, h) } };
z.D.Jn = function(a, b) {
    var c = null,
        e = a.getAttribute("type"),
        f = a.getAttribute("id");
    c = b.ef(e, f);
    var h = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++)
        if (3 != k.nodeType) {
            for (var l = h = null, m = 0, n; n = k.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? h = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !h && l && (h = l);
            m = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.fb && (c.fb(k), c.wc && c.wc());
                    break;
                case "comment":
                    c.fh(k.textContent);
                    var p = k.getAttribute("pinned");
                    p && !c.tb && setTimeout(function() {
                        c.Sa &&
                            c.Sa.oa && c.Sa.oa("true" == p)
                    }, 1);
                    h = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(h) && !isNaN(k) && c.Sa && c.Sa.oa && c.Sa.hg(h, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    z.D.Jv(c, m, k);
                    break;
                case "value":
                case "statement":
                    k = K(c, m);
                    if (!k) { console.warn("Ignoring non-existent input " + m + " in block " + e); break } l && (k.connection.Fe = l);
                    h && (h = z.D.Jn(h, b), h.N ? k.connection.connect(h.N) : h.Y && k.connection.connect(h.Y));
                    break;
                case "next":
                    l && c.K && (c.K.Fe = l);
                    h && (h =
                        z.D.Jn(h, b), c.K.connect(h.Y));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(b = a.getAttribute("inline")) && c.Dd("true" == b);
    (b = a.getAttribute("disabled")) && c.Nc("true" == b || "disabled" == b);
    (b = a.getAttribute("deletable")) && c.ym("true" == b);
    (b = a.getAttribute("movable")) && c.hh("true" == b);
    (b = a.getAttribute("editable")) && c.tp("true" == b);
    (b = a.getAttribute("collapsed")) && c.ig("true" == b);
    if ("shadow" == a.nodeName.toLowerCase()) { a = c.If(!1); for (f = 0; a[f]; f++);
        c.yp(!0) }
    return c
};
z.D.Iv = function(a, b, c, e) { var f = b.getAttribute("variabletype") || ""; "''" == f && (f = "");
    a = z.G.Dl(a, b.id, c, f); if (null != f && f !== a.type) throw Error("Serialized variable type with id '" + a.$() + "' had type " + a.type + ", and does not match variable field that references it: " + z.D.wd(b) + ".");
    e.setValue(a.$()) };
z.D.Jv = function(a, b, c) { var e = I(a, b);
    e ? (a = a.o, b = c.textContent, e.bh() ? z.D.Iv(a, c, b, e) : e.setValue(b)) : console.warn("Ignoring non-existent field " + b + " in block " + a.type) };
z.D.Bv = function(a) { for (var b = 0, c; c = a.childNodes[b]; b++)
        if ("next" == c.nodeName.toLowerCase()) { a.removeChild(c); break } };
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = z.D.wd;
g.Blockly.Xml.domToWorkspace = z.D.ie;
g.Blockly.Xml.textToDom = z.D.fd;
g.Blockly.Xml.workspaceToDom = z.D.Rp;
// Copyright 2015 Google Inc.  Apache License 2.0
function Cg(a) { this.m = a } d = Cg.prototype;
d.Bg = 32;
d.bq = 110;
d.Rm = 20;
d.Ii = 20;
d.w = null;
d.Jb = 0;
d.pf = 0;
d.V = function() { this.w = z.i.B("g", { "class": "blocklyZoom" }, null); var a = String(Math.random()).substring(2);
    Dg(this, a);
    Eg(this, a);
    Fg(this, a); return this.w };
d.L = function(a) { this.Ri = this.Rm + a; return this.Ri + this.bq };
d.A = function() { this.w && (G(this.w), this.w = null);
    this.m = null };
d.position = function() { var a = this.m.rb();
    a && (this.m.u ? (this.Jb = this.Ii + H, a.Ba == z.xf && (this.Jb += a.ql, this.m.ea && (this.Jb += a.lb))) : (this.Jb = a.ya + a.lb - this.Bg - this.Ii - H, a.Ba == z.$d && (this.Jb -= a.ql)), this.pf = a.cb + a.xb - this.bq - this.Ri, a.Ba == z.Ag && (this.pf -= a.Cr), this.w.setAttribute("transform", "translate(" + this.Jb + "," + this.pf + ")")) };

function Dg(a, b) { var c = a.m,
        e = z.i.B("clipPath", { id: "blocklyZoomoutClipPath" + b }, a.w);
    z.i.B("rect", { width: 32, height: 32, y: 77 }, e);
    a = z.i.B("image", { width: z.lc.width, height: z.lc.height, x: -64, y: -15, "clip-path": "url(#blocklyZoomoutClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.Sd + z.lc.url);
    z.O(a, "mousedown", null, function(a) { Pf(c);
        Gg(c, -1);
        z.Touch.Te();
        a.stopPropagation();
        a.preventDefault() }) }

function Eg(a, b) { var c = a.m,
        e = z.i.B("clipPath", { id: "blocklyZoominClipPath" + b }, a.w);
    z.i.B("rect", { width: 32, height: 32, y: 43 }, e);
    a = z.i.B("image", { width: z.lc.width, height: z.lc.height, x: -32, y: -49, "clip-path": "url(#blocklyZoominClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.Sd + z.lc.url);
    z.O(a, "mousedown", null, function(a) { Pf(c);
        Gg(c, 1);
        z.Touch.Te();
        a.stopPropagation();
        a.preventDefault() }) }

function Fg(a, b) {
    var c = a.m,
        e = z.i.B("clipPath", { id: "blocklyZoomresetClipPath" + b }, a.w);
    z.i.B("rect", { width: 32, height: 32 }, e);
    a = z.i.B("image", { width: z.lc.width, height: z.lc.height, y: -92, "clip-path": "url(#blocklyZoomresetClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.Sd + z.lc.url);
    z.O(a, "mousedown", null, function(a) {
        Pf(c);
        c.setScale(c.options.Yb.mt);
        if (c.ib) { var b = c.rb(),
                e = (b.Hc - b.ya) / 2;
            c.I && (e -= c.I.ka / 2);
            c.ib.set(e, (b.mc - b.cb) / 2) } else console.warn("Tried to scroll a non-scrollable workspace.");
        z.Touch.Te();
        a.stopPropagation();
        a.preventDefault()
    })
};
// Copyright 2014 Google Inc.  Apache License 2.0
function Hg(a, b, c) { Hg.s.constructor.call(this, a);
    this.rb = a.rb || Ig;
    this.kg = a.kg || Jg; var e = [];
    e[z.Wa] = new Ve;
    e[z.Hh] = new Ve;
    e[z.Qa] = new Ve;
    e[z.wf] = new Ve;
    this.tn = e;
    b && (this.zb = b);
    c && (this.wh = c);
    this.Km = this.wh && z.i.Sf();
    this.Bj = [];
    this.Af = new ug(a.Lb);
    this.zd = this.options.Kr ? new Wf(a.Kr, a.Jr) : null;
    z.G && z.G.Hf && (this.zi[z.iq] = z.G.Hf);
    z.rd && z.rd.Hf && (this.zi[z.yu] = z.rd.Hf);
    z.qa && z.qa.Hf && (this.zi[z.gq] = z.qa.Hf) } y(Hg, ad);
d = Hg.prototype;
d.tm = null;
d.P = !0;
d.Pd = !1;
d.Jj = !1;
d.ip = !0;
d.scrollX = 0;
d.scrollY = 0;
d.Fx = 0;
d.Hx = 0;
d.wr = null;
d.scale = 1;
d.Pc = null;
d.ib = null;
d.Eb = null;
d.zb = null;
d.wh = null;
d.Km = !1;
d.Rl = !1;
d.no = null;
d.gs = null;
d.Ig = {};
d.zi = {};
d.Kq = null;
d.qh = null;
d.Xr = null;
d.Gj = !0;

function jg(a) { if (a.Gj) { var b = L(a).getScreenCTM();
        b && (a.Xr = b.inverse(), a.Gj = !1) } return a.Xr }

function $e(a, b) { var c = 0,
        e = 0,
        f = 1; if (ge(a.Ma, b) || ge(a.Yd, b)) f = a.scale;
    do { var h = z.i.tc(b); if (b == a.Ma || b == a.Yd) f = 1;
        c += h.x * f;
        e += h.y * f;
        b = b.parentNode } while (b && b != L(a)); return new D(c, e) }
d.V = function(a) {
    this.w = z.i.B("g", { "class": "blocklyWorkspace" }, null);
    a && (this.ed = z.i.B("rect", { height: "100%", width: "100%", "class": a }, this.w), "blocklyMainBackground" == a && this.zd && (this.ed.style.fill = "url(#" + this.zd.Zh.id + ")"));
    this.Ma = z.i.B("g", { "class": "blocklyBlockCanvas" }, this.w);
    this.Yd = z.i.B("g", { "class": "blocklyBubbleCanvas" }, this.w);
    a = H;
    if (this.options.qw) { this.Pc = new rg(this); var b = this.Pc.V();
        this.w.insertBefore(b, this.Ma);
        a = this.Pc.L(a) } this.options.Yb && this.options.Yb.controls && (this.xh =
        new Cg(this), b = this.xh.V(), this.w.appendChild(b), this.xh.L(a));
    this.Pd || (z.O(this.w, "mousedown", this, this.gf, !1, !0), this.options.Yb && this.options.Yb.Vx && z.O(this.w, "wheel", this, this.ox));
    this.options.Nr && (this.ea = new Kg(this));
    this.zd && this.zd.update(this.scale);
    Lg(this);
    return this.w
};
d.A = function() { this.P = !1;
    this.Eb && this.Eb.cancel();
    Hg.s.A.call(this);
    this.w && (G(this.w), this.w = null);
    this.Yd = this.Ma = null;
    this.ea && (this.ea.A(), this.ea = null);
    this.I && (this.I.A(), this.I = null);
    this.Pc && (this.Pc.A(), this.Pc = null);
    this.ib && (this.ib.A(), this.ib = null);
    this.xh && (this.xh.A(), this.xh = null);
    this.Af && (this.Af.A(), this.Af = null);
    this.zd && (this.zd.A(), this.zd = null);
    this.zi && (this.zi = null);
    this.Ig && (this.Ig = null);
    this.options.Lb || G(L(this).parentNode);
    this.tm && (z.Da(this.tm), this.tm = null) };
d.ef = function(a, b) { return new N(this, a, b) };

function Mg(a, b) { var c = { fj: a.options.fj, Lb: a, u: a.u, ye: a.options.ye, ue: a.ue, Ba: a.options.Ba };
    a.I = null;
    a.I = a.ue ? new Ng(c) : new Og(c);
    a.I.Lh = !1; return a.I.V(b) }

function Af(a) { a.ip && a.P && (a.ib && a.ib.resize(), a.Gj = !0) } d.resize = function() { this.ea && this.ea.position();
    this.I && this.I.position();
    this.Pc && this.Pc.position();
    this.xh && this.xh.position();
    this.ib && this.ib.resize();
    this.Gj = !0;
    Lg(this) };

function Nf(a) { var b = $d(document);
    sc(a.gs, b) || (a.gs = b, a.Gj = !0, Lg(a)) }

function L(a) { if (a.vq) return a.vq; for (var b = a.w; b;) { if ("svg" == b.tagName) return a.vq = b;
        b = b.parentNode } return null }
d.translate = function(a, b) { if (this.Km && this.Rl) this.wh.qf(a, b);
    else { var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
        this.Ma.setAttribute("transform", c);
        this.Yd.setAttribute("transform", c) } if (this.zb) { c = this.zb; var e = this.scale;
        c.gg = e;
        c.je.setAttribute("transform", "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")") } };

function Qf(a) { if (a.Km) { a.Rl = !1; var b = a.wh.Gl();
        a.wh.Ui(a.w);
        b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
        a.Ma.setAttribute("transform", b);
        a.Yd.setAttribute("transform", b) } }

function Hf(a) { if (a.Km && !a.Rl) { a.Rl = !0; var b = a.Ma.previousSibling,
            c = parseInt(L(a).getAttribute("width"), 10),
            e = parseInt(L(a).getAttribute("height"), 10),
            f = z.i.tc(a.Ma),
            h = a.wh,
            k = a.Ma,
            l = a.Yd,
            m = a.scale;
        h.Td = b;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.wa.setAttribute("width", c);
        h.wa.setAttribute("height", e);
        h.wa.appendChild(k);
        h.wa.appendChild(l);
        h.wa.style.display = "block";
        a.wh.qf(f.x, f.y) } }
d.$c = function() { var a = this.rb(); return a ? a.ya / this.scale : 0 };
d.oa = function(a) { this.ib && this.ib.gh(a);
    (this.I || this.ea && this.ea.I) && (this.I ? this.I : this.ea ? this.ea.I : null).gh(a);
    L(this).style.display = a ? "block" : "none";
    this.ea && (this.ea.Dc.style.display = a ? "block" : "none");
    a ? (this.Z(), this.ea && this.ea.position()) : z.Qb(!0) };
d.Z = function() { for (var a = Qc(this), b = a.length - 1; 0 <= b; b--) a[b].Z(!1) };

function Pg(a, b) { var c = O; if (void 0 === b) { for (var e = 0, f; f = c.Bj[e]; e++) f.Wb(!1);
        c.Bj.length = 0 } if (f = a ? Kc(c, a) : null)(a = void 0 === b || b) ? -1 == c.Bj.indexOf(f) && c.Bj.push(f) : xa(c.Bj, f), f.Wb(a) }

function Qg(a) {
    var b = z.Wi;
    if (a.P && !(b.getElementsByTagName("block").length >= fd(a)))
        if (a.Eb && a.Eb.cancel(), "comment" == b.tagName.toLowerCase()) { z.j.disable(); try { var c = Cf(b, a),
                    e = parseInt(b.getAttribute("x"), 10),
                    f = parseInt(b.getAttribute("y"), 10);
                isNaN(e) || isNaN(f) || (a.u && (e = -e), c.moveBy(e + 50, f + 50)) } finally { z.j.enable() } c.select() } else {
            z.j.disable();
            try {
                var h = z.D.Qh(b, a),
                    k = parseInt(b.getAttribute("x"), 10),
                    l = parseInt(b.getAttribute("y"), 10);
                if (!isNaN(k) && !isNaN(l)) {
                    a.u && (k = -k);
                    do {
                        b = !1;
                        var m = Qc(a);
                        c = 0;
                        for (var n; n = m[c]; c++) { var p = n.la(); if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) { b = !0; break } }
                        if (!b) { var r = h.pe(!1);
                            c = 0; for (var x; x = r[c]; c++)
                                if (x.closest(z.Tc, new D(k, l)).connection) { b = !0; break } } b && (k = a.u ? k - z.Tc : k + z.Tc, l += 2 * z.Tc)
                    } while (b);
                    h.moveBy(k, l)
                }
            } finally { z.j.enable() } z.j.isEnabled() && !h.hb && z.j.U(new z.j.Fk(h));
            h.select()
        }
}

function Rg(a) { if ((a = a.Pd ? a.qh : a) && !a.Eb && a.ea && a.ea.I) { a = a.ea; var b = a.Hd.se();
        b && b.ee && a.I.show(b.ee) } } d.eh = function(a, b) { Hg.s.eh.call(this, a, b);
    Rg(this) };
d.Ff = function(a) { Hg.s.Ff.call(this, a);
    Rg(this) };
d.Wc = function(a, b, c) { a = Hg.s.Wc.call(this, a, b, c);
    Rg(this); return a };

function Lg(a) { a.jr = a.Pc && a.w.parentNode ? a.Pc.Uh() : null;
    a.ir = a.I ? a.I.Uh() : a.ea ? a.ea.Uh() : null }

function rf(a, b) { b = new D(b.clientX, b.clientY); return a.jr && a.jr.contains(b) ? z.Om : a.ir && a.ir.contains(b) ? z.Zp : z.Yp } d.gf = function(a) { var b = this.qe(a);
    b && (b.jb || (b.jb = this), b.Lc = a, b.gj(a)) };
d.Em = function(a, b) { a = z.i.Sj(a, L(this), jg(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.wr = uc(b, a) };

function Ae(a, b) { b = z.i.Sj(b, L(a), jg(a));
    b.x /= a.scale;
    b.y /= a.scale; return vc(a.wr, b) } d.pb = function() { return null != this.Eb && this.Eb.pb() };
d.ox = function(a) { this.Eb && this.Eb.cancel(); var b = -a.deltaY / 50,
        c = z.i.Sj(a, L(this), jg(this));
    this.zoom(c.x, c.y, b);
    a.preventDefault() };

function Ag(a) { var b = cd(a, !1);
    a = dd(a, !1);
    b = b.concat(a); if (!b.length) return { x: 0, y: 0, width: 0, height: 0 };
    a = b[0].Sn(); for (var c = 1; c < b.length; c++) { var e = b[c].Sn();
        e.hd.x < a.hd.x && (a.hd.x = e.hd.x);
        e.Id.x > a.Id.x && (a.Id.x = e.Id.x);
        e.hd.y < a.hd.y && (a.hd.y = e.hd.y);
        e.Id.y > a.Id.y && (a.Id.y = e.Id.y) } return { x: a.hd.x, y: a.hd.y, width: a.Id.x - a.hd.x, height: a.Id.y - a.hd.y } }
d.av = function() { this.Sb(!1);
    z.j.R(!0); for (var a = cd(this, !0), b = 0, c = 0, e; e = a[c]; c++) { var f = e.la();
        e.moveBy(-f.x, b - f.y);
        Sg(e);
        b = e.la().y + e.Hb().height + 25 } z.j.R(!1);
    this.Sb(!0) };
d.xi = function(a) {
    function b(a) { if (a.ec()) x = x.concat(xc(a, !1));
        else { a = a.If(!1); for (var c = 0; c < a.length; c++) b(a[c]) } }

    function c() { z.j.R(h); var a = x.shift();
        a && (a.o ? (a.A(!1, !0), setTimeout(c, 10)) : c());
        z.j.R(!1) }
    if (!this.options.readOnly && !this.Pd) {
        var e = [],
            f = cd(this, !0),
            h = z.i.ne(),
            k = this,
            l = {};
        l.text = z.g.UNDO;
        l.enabled = 0 < this.rh.length;
        l.eb = this.Pp.bind(this, !1);
        e.push(l);
        l = {};
        l.text = z.g.REDO;
        l.enabled = 0 < this.Yj.length;
        l.eb = this.Pp.bind(this, !0);
        e.push(l);
        this.ib && (l = {}, l.text = z.g.CLEAN_UP, l.enabled = 1 < f.length,
            l.eb = this.av.bind(this), e.push(l));
        if (this.options.collapse) { for (var m = l = !1, n = 0; n < f.length; n++)
                for (var p = f[n]; p;) p.isCollapsed() ? l = !0 : m = !0, p = Lc(p); var r = function(a) { for (var b = 0, c = 0; c < f.length; c++)
                    for (var e = f[c]; e;) setTimeout(e.ig.bind(e, a), b), e = Lc(e), b += 10 };
            m = { enabled: m };
            m.text = z.g.COLLAPSE_ALL;
            m.eb = function() { r(!0) };
            e.push(m);
            l = { enabled: l };
            l.text = z.g.EXPAND_ALL;
            l.eb = function() { r(!1) };
            e.push(l) }
        var x = [];
        for (n = 0; n < f.length; n++) b(f[n]);
        l = {
            text: 1 == x.length ? z.g.DELETE_BLOCK : z.g.DELETE_X_BLOCKS.replace("%1",
                String(x.length)),
            enabled: 0 < x.length,
            eb: function() { k.Eb && k.Eb.cancel();
                2 > x.length ? c() : z.confirm(z.g.DELETE_ALL_BLOCKS.replace("%1", x.length), function(a) { a && c() }) }
        };
        e.push(l);
        this.Kq && this.Kq(e);
        z.ba.show(a, e, this.u)
    }
};
d.Im = function(a) { if (a = Zf(a)) { if (!this.options.xe) throw "Existing toolbox is null.  Can't create new toolbox."; if (a.getElementsByTagName("category").length) { if (!this.ea) throw "Existing toolbox has no categories.  Can't change mode.";
            this.options.xe = a;
            this.ea.om(a);
            Tg(this.ea) } else { if (!this.I) throw "Existing toolbox has categories.  Can't change mode.";
            this.options.xe = a;
            this.I.show(a.childNodes) } } else if (this.options.xe) throw "Can't nullify an existing toolbox."; };

function Pf(a) { if (a.options.Lb) Pf(a.options.Lb);
    else { z.Yf = a;
        document.activeElement && document.activeElement.blur(); try { L(a).focus() } catch (b) { try { L(a).parentNode.setActive() } catch (c) { L(a).parentNode.focus() } } } }
d.zoom = function(a, b, c) { var e = this.options.Yb.yx,
        f = this.rb(),
        h = L(this).createSVGPoint();
    h.x = a;
    h.y = b;
    h = h.matrixTransform(this.Ma.getCTM().inverse());
    a = h.x;
    b = h.y;
    h = this.Ma;
    e = Math.pow(e, c);
    c = this.scale * e;
    c > this.options.Yb.Qj ? e = this.options.Yb.Qj / this.scale : c < this.options.Yb.Rj && (e = this.options.Yb.Rj / this.scale);
    this.scale != c && (this.ib && (a = h.getCTM().translate(a * (1 - e), b * (1 - e)).scale(e), this.scrollX = a.e - f.lb, this.scrollY = a.f - f.xb), this.setScale(c)) };

function Gg(a, b) { var c = a.rb();
    a.zoom(c.ya / 2, c.cb / 2, b) } d.setScale = function(a) { this.options.Yb.Qj && a > this.options.Yb.Qj ? a = this.options.Yb.Qj : this.options.Yb.Rj && a < this.options.Yb.Rj && (a = this.options.Yb.Rj);
    this.scale = a;
    this.zd && this.zd.update(this.scale);
    this.ib ? this.ib.resize() : this.translate(this.scrollX, this.scrollY);
    z.Qb(!1);
    this.I && this.I.ap() };

function Ug(a) { var b = 0,
        c = 0;
    a && (b = a.$c(), c = a.Xh()); return { width: b, height: c } }

function Vg(a) { var b = Ag(a),
        c = a.scale;
    a = b.width * c; var e = b.height * c,
        f = b.x * c;
    b = b.y * c; return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e } }

function Ig() {
    var a = Ug(this.ea),
        b = Ug(this.I),
        c = z.rt(L(this));
    if (this.ea)
        if (this.Ba == z.yf || this.Ba == z.Ag) c.height -= a.height;
        else if (this.Ba == z.xf || this.Ba == z.$d) c.width -= a.width;
    if (this.ib) { var e = Vg(this); var f = c.width,
            h = c.height,
            k = f / 2,
            l = h / 2,
            m = Math.min(e.left - k, e.right - f),
            n = Math.min(e.top - l, e.bottom - h);
        e = { left: m, top: n, height: Math.max(e.bottom + l, e.top + h) - n, width: Math.max(e.right + k, e.left + f) - m } } else e = Vg(this);
    f = 0;
    this.ea && this.Ba == z.xf && (f = a.width);
    h = 0;
    this.ea && this.Ba == z.yf && (h = a.height);
    return {
        mc: e.height,
        Hc: e.width,
        nc: e.top,
        Gc: e.left,
        cb: c.height,
        ya: c.width,
        Ke: -this.scrollY,
        Cb: -this.scrollX,
        xb: h,
        lb: f,
        RB: a.width,
        QB: a.height,
        ql: b.width,
        Cr: b.height,
        Ba: this.Ba
    }
}

function Jg(a) { if (!this.ib) throw "Attempt to set top level workspace scroll without scrollbars."; var b = this.rb();
    t(a.x) && (this.scrollX = -b.Hc * a.x - b.Gc);
    t(a.y) && (this.scrollY = -b.mc * a.y - b.nc);
    a = this.scrollX + b.lb;
    b = this.scrollY + b.xb;
    this.translate(a, b);
    this.zd && this.zd.moveTo(a, b) } d.Sb = function(a) { var b = !this.ip && a;
    this.ip = a;
    b && Af(this) };
d.clear = function() { this.Sb(!1);
    Hg.s.clear.call(this);
    this.Sb(!0) };

function tg(a, b) { a.Ig.CREATE_VARIABLE = b }

function Wg(a, b) { return (a = a.Ig[b]) ? a : null }

function Xg(a, b) { return (a = a.zi[b]) ? a : null } d.qe = function(a) { var b = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        c = this.Eb; return c ? b && c.Rr ? (console.warn("tried to start the same gesture twice"), c.cancel(), null) : c : b ? this.Eb = new kg(a, this) : null };
Hg.prototype.setVisible = Hg.prototype.oa;

function Yg(a) { Yg.s.constructor.call(this, null);
    this.Us = a } y(Yg, Fe);
d = Yg.prototype;
d.Ei = 0;
d.Bk = 0;
d.Kn = function(a) {
    z.i.B("rect", { "class": "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" }, a);
    z.i.B("path", { "class": "blocklyIconSymbol", d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z" }, a);
    z.i.B("circle", { "class": "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, a)
};
d.io = function(a) { Je(this.T) && Fe.prototype.io.call(this, a) };
d.aj = function() { this.mk = z.i.B("svg", { x: se, y: se }, null); if (this.Us.length)
        for (var a = F("xml"), b = 0, c; c = this.Us[b]; b++) a.appendChild(F("block", { type: c }));
    else a = null;
    a = { xe: a, Lb: this.T.o, Sd: this.T.o.options.Sd, u: this.T.u, Ba: this.T.u ? z.$d : z.xf, ue: !1, rb: this.Wv.bind(this), kg: null };
    this.m = new Hg(a);
    this.m.Jj = !0;
    a = Mg(this.m, "g");
    b = this.m.V("blocklyMutatorBackground");
    b.insertBefore(a, this.m.Ma);
    this.mk.appendChild(b); return this.mk };
d.tf = function() { this.T.tb || (Je(this.T) ? this.vc && z.i.Rb(this.vc, "blocklyIconGroupReadonly") : (this.oa(!1), this.vc && z.i.mb(this.vc, "blocklyIconGroupReadonly")));
    Fe.prototype.tf.call(this) };
d.sm = function() { var a = 2 * se,
        b = this.m.Ma.getBBox(); var c = this.T.u ? -b.x : b.width + b.x;
    b = b.height + 3 * a; if (this.m.I) { var e = this.m.I.Ze();
        b = Math.max(b, e.mc + 20) } c += 3 * a; if (Math.abs(this.Ei - c) > a || Math.abs(this.Bk - b) > a) this.Ei = c, this.Bk = b, this.Za.hg(c + a, b + a), this.mk.setAttribute("width", this.Ei), this.mk.setAttribute("height", this.Bk);
    this.T.u && this.m.Ma.setAttribute("transform", "translate(" + this.Ei + ",0)");
    this.m.resize() };
d.oa = function(a) {
    if (a != this.X())
        if (z.j.U(new Fc(this.T, "mutatorOpen", !a, a)), a) {
            this.Za = new pe(this.T.o, this.aj(), this.T.Gd, this.Og, null, null);
            ye(this.Za, this.T.id);
            if (a = this.m.options.xe) this.m.I.L(this.m), this.m.I.show(a.childNodes);
            this.jf = this.T.We(this.m);
            a = xc(this.jf, !1);
            for (var b = 0, c; c = a[b]; b++) c.Z();
            this.jf.hh(!1);
            this.jf.ym(!1);
            this.m.I ? (a = 2 * this.m.I.pa, b = this.m.I.ka + a) : b = a = 16;
            this.T.u && (b = -b);
            this.jf.moveBy(b, a);
            if (this.T.um) {
                var e = this;
                this.T.um(this.jf);
                this.Cm = function() { e.T.um(e.jf) };
                this.T.o.Fc(this.Cm)
            }
            this.sm();
            this.m.Fc(this.Wx.bind(this));
            this.sf()
        } else this.mk = null, this.m.A(), this.jf = this.m = null, this.Za.A(), this.Za = null, this.Bk = this.Ei = 0, this.Cm && (this.T.o.dg(this.Cm), this.Cm = null)
};
d.Wx = function() { if (!this.m.pb())
        for (var a = cd(this.m, !1), b = 0, c; c = a[b]; b++) { var e = c.la(),
                f = c.Hb();
            20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y) }
    if (this.jf.o == this.m) { z.j.R(!0);
        c = this.T;
        a = (a = c.Ga()) && z.D.wd(a);
        b = c.P;
        c.P = !1;
        c.Ue(this.jf);
        c.P = b;
        c.wc();
        b = (b = c.Ga()) && z.D.wd(b); if (a != b) { z.j.U(new z.j.Cc(c, "mutation", null, a, b)); var h = z.j.rc();
            setTimeout(function() { z.j.R(h);
                c.ob();
                z.j.R(!1) }, z.Ek) } c.P && c.Z();
        this.m.pb() || this.sm();
        z.j.R(!1) } };
d.Wv = function() { return { cb: this.Bk, ya: this.Ei, xb: 0, lb: 0 } };
d.A = function() { this.T.bd = null;
    Fe.prototype.A.call(this) };

function Zg(a, b, c) { if (!a || !a.v.o) return !1;
    c = K(b, c).connection; var e = J(a); return e && e != b || c.Na == a ? !1 : (c.isConnected() && c.disconnect(), c.connect(a), !0) }

function $g(a) { var b = null; if (a && a.options) { var c = a.options.Lb;
        a.Pd ? c && c.options && (b = c.options.Lb) : c && (b = c) } return b } g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = Zg;
z.M = {};
z.M.Mm = {};
z.M.register = function(a, b) { if (!q(a) || Ga(a)) throw Error('Error: Invalid extension name "' + a + '"'); if (z.M.Mm[a]) throw Error('Error: Extension "' + a + '" is already registered.'); if (!v(b)) throw Error('Error: Extension "' + a + '" must be a function');
    z.M.Mm[a] = b };
z.M.qm = function(a, b) { if (!ha(b)) throw Error('Error: Mixin "' + a + '" must be a object');
    z.M.register(a, function() { ah(this, b) }) };
z.M.bp = function(a, b, c, e) { var f = 'Error when registering mutator "' + a + '": ';
    z.M.Aq(f, b.fb, "domToMutation");
    z.M.Aq(f, b.Ga, "mutationToDom"); var h = z.M.Cq(b, f); if (c && !v(c)) throw Error('Extension "' + a + '" is not a function');
    z.M.register(a, function() { h && this.gk(new Yg(e));
        ah(this, b);
        c && c.apply(this) }) };
z.M.apply = function(a, b, c) { var e = z.M.Mm[a]; if (!v(e)) throw Error('Error: Extension "' + a + '" not found.'); if (c) z.M.Zu(a, b);
    else var f = z.M.Vn(b);
    e.apply(b); if (c) z.M.Xu('Error after applying mutator "' + a + '": ', b);
    else if (!z.M.Ow(f, b)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.'); };
z.M.Aq = function(a, b, c) { if (!b) throw Error(a + 'missing required property "' + c + '"'); if ("function" != typeof b) throw Error(a + '" required property "' + c + '" must be a function'); };
z.M.Zu = function(a, b) { if (z.M.Vn(b).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + b.id); };
z.M.Cq = function(a, b) { var c = void 0 !== a.Ue,
        e = void 0 !== a.We; if (c && e) { if ("function" != typeof a.Ue) throw Error(b + "compose must be a function."); if ("function" != typeof a.We) throw Error(b + "decompose must be a function."); return !0 } if (c || e) throw Error(b + 'Must have both or neither of "compose" and "decompose"'); return !1 };
z.M.Xu = function(a, b) { if ("function" != typeof b.fb) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"'); if ("function" != typeof b.Ga) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    z.M.Cq(b, a) };
z.M.Vn = function(a) { var b = [];
    void 0 !== a.fb && b.push(a.fb);
    void 0 !== a.Ga && b.push(a.Ga);
    void 0 !== a.Ue && b.push(a.Ue);
    void 0 !== a.We && b.push(a.We); return b };
z.M.Ow = function(a, b) { b = z.M.Vn(b); if (b.length != a.length) return !1; for (var c = 0; c < b.length; c++)
        if (a[c] != b[c]) return !1; return !0 };
z.M.Qk = function(a, b) { var c = []; "object" == typeof document && z.i.$s(function() { for (var a in b) z.i.Bq(b[a]) }); return function() { this.type && -1 === c.indexOf(this.type) && (z.M.Yu(this, a, b), c.push(this.type));
        this.La(function() { var e = E(this, a),
                f = b[e];
            null == f ? -1 === c.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = z.i.ic(f); return f }.bind(this)) } };
z.M.Yu = function(a, b, c) { var e = I(a, b); if (!v(e.Tg)) { e = e.getOptions(); for (var f = 0; f < e.length; ++f) { var h = e[f][1];
            null == c[h] && console.warn("No tooltip mapping for value " + h + " of field " + b + " of block type " + a.type) } } };
z.M.on = function(a) { "object" == typeof document && z.i.$s(function() { z.i.Bq(a) }); return function() { this.La(function() { var b = I(this, "VAR"); return z.i.ic(a).replace("%1", b ? b.Ib() : "") }.bind(this)) } };
z.M.Mv = function() { this.Mx = this.gd;
    this.La(function() { var a = this.getParent(); return a && bh(a) && a.gd || this.Mx }.bind(this)) };
z.M.register("parent_tooltip_when_inline", z.M.Mv);
var ch = {};

function dh(a, b) { var c = Vd(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" }

function eh(a, b) { return dh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b] }

function Vf() { var a = document,
        b = a.body;
    a = a.documentElement; return new D(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop) }

function fh(a) { try { var b = a.getBoundingClientRect() } catch (c) { return { left: 0, top: 0, right: 0, bottom: 0 } } A && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop); return b }

function gh(a) { var b = Vd(a),
        c = new D(0, 0); var e = b ? Vd(b) : document;
    e = !A || 9 <= Number(xb) || "CSS1Compat" == Td(e).Kd.compatMode ? e.documentElement : e.body; if (a == e) return c;
    a = fh(a);
    b = $d(Td(b).Kd);
    c.x = a.left + b.x;
    c.y = a.top + b.y; return c }

function hh(a) { "number" == typeof a && (a += "px"); return a }

function ih(a) { var b = jh; if ("none" != eh(a, "display")) return b(a); var c = a.style,
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

function jh(a) { var b = a.offsetWidth,
        c = a.offsetHeight,
        e = B && !b && !c; return aa(b) && !e || !a.getBoundingClientRect ? new Sd(b, c) : (a = fh(a), new Sd(a.right - a.left, a.bottom - a.top)) }

function kh(a, b) { a.style.display = b ? "" : "none" }
var lh = lb ? "MozUserSelect" : B || kb ? "WebkitUserSelect" : null;

function mh(a, b, c) { c = c ? null : a.getElementsByTagName("*"); if (lh) { if (b = b ? "none" : "", a.style && (a.style[lh] = b), c) { a = 0; for (var e; e = c[a]; a++) e.style && (e.style[lh] = b) } } else if (A || jb)
        if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
            for (a = 0; e = c[a]; a++) e.setAttribute("unselectable", b) }
var nh = { thin: 2, medium: 4, thick: 6 };

function oh(a, b) { if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0; var c = a.currentStyle ? a.currentStyle[b + "Width"] : null; if (c in nh) a = nh[c];
    else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
    else { b = a.style.left; var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = e;
        a = +c } return a };

function ph(a, b) { this.sa = new Sd(0, 25);
    this.setValue(a);
    this.sh = b }
var qh = {};

function rh(a, b) { if (!q(a) || Ga(a)) throw Error('Invalid field type "' + a + '"'); if (!ha(b) || !v(b.ia)) throw Error('Field "' + b + '" must have a fromJson function');
    qh[a] = b }
var sh = null,
    th = 0;
d = ph.prototype;
d.name = void 0;
d.ps = 50;
d.va = "";
d.v = null;
d.Oa = !0;
d.sh = null;
d.vg = !0;
d.zp = function(a) { this.v = a };
d.L = function() { this.Ua || (this.Ua = z.i.B("g", {}, null), this.Oa || (this.Ua.style.display = "none"), this.td = z.i.B("rect", { rx: 4, ry: 4, x: -5, y: 0, height: 16 }, this.Ua), this.xa = z.i.B("text", { "class": "blocklyText", y: this.sa.height - 12.5 }, this.Ua), this.tf(), this.v.ga().appendChild(this.Ua), this.dm = z.O(this.Ua, "mousedown", this, this.gf), this.Be()) };
d.Pg = function() {};
d.A = function() { this.dm && (z.Da(this.dm), this.dm = null);
    this.v = null;
    G(this.Ua);
    this.sh = this.td = this.xa = this.Ua = null };
d.tf = function() { var a = this.Ua;
    this.vg && a && (Je(this.v) ? (z.i.mb(a, "blocklyEditableText"), z.i.Rb(a, "blocklyNonEditableText"), this.Ua.style.cursor = this.Hk) : (z.i.mb(a, "blocklyNonEditableText"), z.i.Rb(a, "blocklyEditableText"), this.Ua.style.cursor = "")) };
d.X = function() { return this.Oa };
d.oa = function(a) { if (this.Oa != a) { this.Oa = a; var b = this.ga();
        b && (b.style.display = a ? "block" : "none", this.Be()) } };

function uh(a, b) { a.sh = b } d.Uk = function(a) { return a };

function Ce(a, b) { var c = a.Uk(b); if (null === c) return null;
    void 0 !== c && (b = c); if (c = a.sh) { a = c.call(a, b); if (null === a) return null;
        void 0 !== a && (b = a) } return b } d.ga = function() { return this.Ua };
d.Be = function() { this.Oa ? (this.xa.textContent = vh(this), this.Ak()) : this.sa.width = 0 };
d.Ak = function() { var a = wh(this.xa);
    this.td && this.td.setAttribute("width", a + 10);
    this.sa.width = a };

function wh(a) { var b = a.textContent + "\n" + a.className.baseVal,
        c; if (sh && (c = sh[b])) return c; try { c = A || kb ? a.getBBox().width : a.getComputedTextLength() } catch (e) { return 8 * a.textContent.length } sh && (sh[b] = c); return c }

function yg() { th++;
    sh || (sh = {}) }

function zg() { th--;
    th || (sh = null) } d.af = function() { this.sa.width || this.Be(); return this.sa };

function xh(a) { var b = a.td.getBBox(),
        c = b.height * a.v.o.scale;
    b = b.width * a.v.o.scale;
    a = gh(a.td); return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b } }

function vh(a) { var b = a.va; if (!b) return "\u00a0";
    b.length > a.ps && (b = b.substring(0, a.ps - 2) + "\u2026");
    b = b.replace(/\s/g, "\u00a0");
    a.v.u && (b += "\u200f"); return b } d.Ib = function() { return this.va };
d.vb = function(a) { null !== a && (a = String(a), a !== this.va && (this.va = a, this.lj())) };
d.lj = function() { this.sa.width = 0;
    this.v && this.v.P && (this.v.Z(), this.v.ob()) };
d.getValue = function() { return this.Ib() };
d.setValue = function(a) { if (null !== a) { var b = this.getValue();
        b != a && (this.v && z.j.isEnabled() && z.j.U(new z.j.Cc(this.v, "field", this.name, b, a)), this.vb(a)) } };
d.gf = function(a) { this.v && this.v.o && (a = this.v.o.qe(a)) && !a.mh && (a.mh = this) };
d.La = function() {};
d.bh = function() { return !1 };

function yh(a, b) { this.sa = new Sd(0, 17.5);
    this.Fq = b;
    this.setValue(a) } y(yh, ph);
yh.ia = function(a) { var b = z.i.ic(a.text); return new yh(b, a["class"]) };
d = yh.prototype;
d.vg = !1;
d.L = function() { this.xa || (this.xa = z.i.B("text", { "class": "blocklyText", y: this.sa.height - 5 }, null), this.Fq && z.i.mb(this.xa, this.Fq), this.Oa || (this.xa.style.display = "none"), this.v.ga().appendChild(this.xa), this.xa.gd = this.v, z.C.Cg(this.xa), this.Be()) };
d.A = function() { G(this.xa);
    this.xa = null };
d.ga = function() { return this.xa };
d.La = function(a) { this.xa.gd = a };
rh("field_label", yh);

function zh(a, b, c, e) { if (a != z.Le && !b) throw "Value inputs and statement inputs must have non-empty name.";
    this.type = a;
    this.name = b;
    this.v = c;
    this.connection = e;
    this.Ja = [] } d = zh.prototype;
d.align = z.Fi;
d.Oa = !0;

function P(a, b, c) { Ah(a, a.Ja.length, b, c); return a }

function Ah(a, b, c, e) { if (0 > b || b > a.Ja.length) throw Error("index " + b + " out of bounds."); if (!c && !e) return b;
    q(c) && (c = new yh(c));
    c.zp(a.v);
    a.v.P && c.L();
    c.name = e;
    c.Wo && (b = Ah(a, b, c.Wo));
    a.Ja.splice(b, 0, c);++b;
    c.Lp && (b = Ah(a, b, c.Lp));
    a.v.P && (a.v.Z(), a.v.ob()); return b } d.X = function() { return this.Oa };
d.oa = function(a) { var b = []; if (this.Oa == a) return b; for (var c = (this.Oa = a) ? "block" : "none", e = 0, f; f = this.Ja[e]; e++) f.oa(a); if (this.connection) { if (a) b = jf(this.connection);
        else if (e = this.connection, kf(e, !0), e.Na)
            for (e = xc(J(e), !1), f = 0; f < e.length; f++) { for (var h = e[f], k = h.pe(!0), l = 0; l < k.length; l++) kf(k[l], !0);
                h = pf(h); for (l = 0; l < h.length; l++) h[l].oa(!1) }
        if (e = J(this.connection)) e.ga().style.display = c, a || (e.P = !1) } return b };
d.bb = function(a) { if (!this.connection) throw "This input does not have a connection.";
    this.connection.bb(a); return this };

function Bh(a, b) { a.align = b;
    a.v.P && a.v.Z(); return a } d.L = function() { if (this.v.o.P)
        for (var a = 0; a < this.Ja.length; a++) this.Ja[a].L() };
d.A = function() { for (var a = 0, b; b = this.Ja[a]; a++) b.A();
    this.connection && this.connection.A();
    this.v = null };

function Ke(a) { Ke.s.constructor.call(this, a);
    Ge(this);
    this.va = {} } y(Ke, Fe);
d = Ke.prototype;
d.Iq = !1;
d.Kn = function(a) { z.i.B("path", { "class": "blocklyIconShape", d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z" }, a);
    z.i.B("path", { "class": "blocklyIconSymbol", d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z" }, a);
    z.i.B("rect", { "class": "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" }, a) };
d.oa = function(a) {
    if (a != this.X())
        if (z.j.U(new Fc(this.T, "warningOpen", !a, a)), a) {
            var b = this.Ib();
            a = z.i.B("text", { "class": "blocklyText blocklyBubbleText", y: se }, null);
            b = b.split("\n");
            for (var c = 0; c < b.length; c++) z.i.B("tspan", { dy: "1em", x: se }, a).appendChild(document.createTextNode(b[c]));
            this.Za = new pe(this.T.o, a, this.T.Gd, this.Og, null, null);
            ye(this.Za, this.T.id);
            if (this.T.u) { b = a.getBBox().width;
                c = 0; for (var e; e = a.childNodes[c]; c++) e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + se) } this.sf();
            a =
                this.Za.Kg();
            this.Za.hg(a.width, a.height)
        } else this.Za.A(), this.Za = null
};
d.vb = function(a, b) { this.va[b] != a && (a ? this.va[b] = a : delete this.va[b], this.X() && (this.oa(!1), this.oa(!0))) };
d.Ib = function() { var a = [],
        b; for (b in this.va) a.push(this.va[b]); return a.join("\n") };
d.A = function() { this.T.md = null;
    Fe.prototype.A.call(this) };

function ed(a, b, c) {
    "undefined" !== typeof Ch.prototype[b] && console.warn('FUTURE ERROR: Block prototypeName "' + b + '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.');
    this.id = c && !Kc(a, c) ? c : z.i.ne();
    a.ln[this.id] = this;
    this.Y = this.K = this.N = null;
    this.W = [];
    this.Rf = void 0;
    this.disabled = !1;
    this.gd = "";
    this.contextMenu = !0;
    this.$f = null;
    this.Re = [];
    this.yr = this.Tj = this.ej = !0;
    this.fe =
        this.hb = !1;
    this.Sa = null;
    this.nd = new D(0, 0);
    this.o = a;
    this.tb = a.Pd;
    this.u = a.u;
    if (b) { this.type = b;
        b = z.J[b]; for (var e in b) this[e] = b[e] } a.Ai.push(this);
    v(this.L) && this.L();
    this.xw = this.Rf;
    if (z.j.isEnabled()) {
        (a = z.j.rc()) || z.j.R(!0); try { z.j.U(new z.j.Fk(this)) } finally { a || z.j.R(!1) } }
    if (v(this.onchange)) { if ((a = this.onchange) && !v(a)) throw Error("onchange must be a function.");
        this.Uj && this.o.dg(this.Uj); if (this.onchange = a) this.Uj = a.bind(this), this.o.Fc(this.Uj) }
}
d = ed.prototype;
d.data = null;
d.ge = "#000000";
d.A = function(a) { if (this.o) { this.Uj && this.o.dg(this.Uj);
        Ee(this, a);
        z.j.isEnabled() && z.j.U(new z.j.Ft(this));
        z.j.disable(); try { this.o && (bd(this.o, this), delete this.o.ln[this.id], this.o = null);
            z.selected == this && (z.selected = null); for (var b = this.Re.length - 1; 0 <= b; b--) this.Re[b].A(!1);
            b = 0; for (var c; c = this.W[b]; b++) c.A();
            this.W.length = 0; var e = this.pe(!0); for (b = 0; b < e.length; b++) { var f = e[b];
                f.isConnected() && f.disconnect();
                e[b].A() } } finally { z.j.enable() } } };
d.Pg = function() { for (var a = 0, b; b = this.W[a]; a++)
        for (var c = 0, e; e = b.Ja[c]; c++) e.Pg && e.Pg() };

function Ee(a, b) { if (a.N) a.N.isConnected() && a.N.disconnect();
    else if (a.Y) { var c = null;
        a.Y.isConnected() && (c = a.Y.Na, a.Y.disconnect()); var e = Lc(a);
        b && e && (a = a.K.Na, a.disconnect(), c && Ne(c, a) && c.connect(a)) } } d.pe = function() { var a = [];
    this.N && a.push(this.N);
    this.Y && a.push(this.Y);
    this.K && a.push(this.K); for (var b = 0, c; c = this.W[b]; b++) c.connection && a.push(c.connection); return a };
d.ob = function() { console.warn("Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead.") };
d.getParent = function() { return this.$f };

function Dh(a) { do { var b = a;
        a = a.getParent(); if (!a) return null } while (Lc(a) == b); return a }

function Lc(a) { return a.K && J(a.K) }

function cf(a) { var b = a;
    do a = b, b = a.$f; while (b); return a } d.If = function(a) { if (!a) return this.Re;
    a = []; for (var b = 0, c; c = this.W[b]; b++) c.connection && (c = J(c.connection)) && a.push(c);
    (b = Lc(this)) && a.push(b); return a };
d.ih = function(a) { if (a != this.$f) { if (this.$f) { xa(this.$f.Re, this); if (this.Y && this.Y.isConnected()) throw "Still connected to previous block."; if (this.N && this.N.isConnected()) throw "Still connected to parent block.";
            this.$f = null } else bd(this.o, this);
        (this.$f = a) ? a.Re.push(this): this.o.Ai.push(this) } };

function xc(a, b) { var c = [a];
    a = a.If(b); for (var e, f = 0; e = a[f]; f++) c.push.apply(c, xc(e, b)); return c } d.ec = function() { return this.ej && !this.hb && !(this.o && this.o.options.readOnly) };
d.ym = function(a) { this.ej = a };
d.we = function() { return this.Tj && !this.hb && !(this.o && this.o.options.readOnly) };
d.hh = function(a) { this.Tj = a };
d.yp = function(a) { this.hb = a };

function Je(a) { return a.yr && !(a.o && a.o.options.readOnly) } d.tp = function(a) { this.yr = a;
    a = 0; for (var b; b = this.W[a]; a++)
        for (var c = 0, e; e = b.Ja[c]; c++) e.tf() };

function Bg(a, b) { if (!b && a.isCollapsed()) { if (a.N && kf(a.N, b), a.Y && kf(a.Y, b), a.K) { kf(a.K, b); var c = J(a.K);
            c && Bg(c, b) } } else { a = a.pe(!0); for (var e = 0; c = a[e]; e++) kf(c, b), Re(c) && (c = J(c)) && Bg(c, b) } } d.La = function(a) { this.gd = a };
d.qb = function(a) { var b = q(a) ? z.i.ic(a) : a,
        c = Number(b); if (!isNaN(c) && 0 <= c && 360 >= c) this.ge = z.Ur(c);
    else if (q(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.ge = b;
    else throw c = 'Invalid colour: "' + b + '"', a != b && (c += ' (from "' + a + '")'), c; };

function I(a, b) { for (var c = 0, e; e = a.W[c]; c++)
        for (var f = 0, h; h = e.Ja[f]; f++)
            if (h.name === b) return h; return null } d.Zn = function() { for (var a = [], b = 0, c; c = this.W[b]; b++)
        for (var e = 0, f; f = c.Ja[e]; e++) f.bh() && a.push(f.getValue()); return a };
d.Jf = function() { for (var a = [], b = 0, c; c = this.W[b]; b++)
        for (var e = 0, f; f = c.Ja[e]; e++) f.bh() && (f = this.o.Nd(f.getValue())) && a.push(f); return a };
d.Jm = function(a) { for (var b = 0, c; c = this.W[b]; b++)
        for (var e = 0, f; f = c.Ja[e]; e++) f.bh() && a.$() == f.getValue() && f.vb(a.name) };
d.ak = function(a, b) { for (var c = 0, e; e = this.W[c]; c++)
        for (var f = 0, h; h = e.Ja[f]; f++) h.bh() && a == h.getValue() && h.setValue(b) };

function E(a, b) { return (a = I(a, b)) ? a.getValue() : null }
d.De = function(a, b) { a ? (void 0 === b && (b = null), this.Y || (this.Y = this.Oj(z.wf)), this.Y.bb(b)) : this.Y && (this.Y.A(), this.Y = null) };
d.Ce = function(a, b) { a ? (void 0 === b && (b = null), this.K || (this.K = this.Oj(z.Qa)), this.K.bb(b)) : this.K && (this.K.A(), this.K = null) };
d.Ed = function(a, b) { a ? (void 0 === b && (b = null), this.N || (this.N = this.Oj(z.Hh)), this.N.bb(b)) : this.N && (this.N.A(), this.N = null) };
d.Dd = function(a) { this.Rf != a && (z.j.U(new z.j.Cc(this, "inline", null, this.Rf, a)), this.Rf = a) };

function bh(a) { if (void 0 != a.Rf) return a.Rf; for (var b = 1; b < a.W.length; b++)
        if (a.W[b - 1].type == z.Le && a.W[b].type == z.Le) return !1; for (b = 1; b < a.W.length; b++)
        if (a.W[b - 1].type == z.Wa && a.W[b].type == z.Le) return !0; return !1 } d.Nc = function(a) { this.disabled != a && (z.j.U(new z.j.Cc(this, "disabled", null, this.disabled, a)), this.disabled = a) };

function Eh(a) { for (a = Dh(a); a;) { if (a.disabled) return !0;
        a = Dh(a) } return !1 } d.isCollapsed = function() { return this.fe };
d.ig = function(a) { this.fe != a && (z.j.U(new z.j.Cc(this, "collapsed", null, this.fe, a)), this.fe = a) };
d.toString = function(a, b) { var c = [],
        e = b || "?"; if (this.fe) c.push(K(this, "_TEMP_COLLAPSED_INPUT").Ja[0].va);
    else
        for (var f = 0, h; h = this.W[f]; f++) { for (var k = 0, l; l = h.Ja[k]; k++) l instanceof Fh && !l.getValue() ? c.push(e) : c.push(l.Ib());
            h.connection && ((h = J(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e)) } c = Ia(c.join(" ")) || "???";
    a && (b = c, b.length > a && (b = b.substring(0, a - 3) + "..."), c = b); return c };

function Gh(a, b) { return a.ce(z.Wa, b) }

function Q(a, b) { return a.ce(z.Le, b || "") }

function Hh(a, b) {
    var c = b.type ? 'Block "' + b.type + '": ' : "";
    if ("colour" in b)
        if (void 0 === b.colour) console.warn(c + "Undefined color value.");
        else { var e = b.colour; try { a.qb(e) } catch (w) { console.warn(c + "Illegal color value: ", e) } } for (e = 0; void 0 !== b["message" + e];) {
        for (var f = a, h = b["args" + e] || [], k = b["lastDummyAlign" + e], l = z.i.Kx(b["message" + e]), m = [], n = 0, p = [], r = 0; r < l.length; r++) {
            var x = l[r];
            if ("number" == typeof x) {
                if (0 >= x || x > h.length) throw Error('Block "' + f.type + '": Message index %' + x + " out of range.");
                if (m[x]) throw Error('Block "' +
                    f.type + '": Message index %' + x + " duplicated.");
                m[x] = !0;
                n++;
                p.push(h[x - 1])
            } else(x = x.trim()) && p.push(x)
        }
        if (n != h.length) throw Error('Block "' + f.type + '": Message does not reference all ' + h.length + " arg(s).");
        p.length && ("string" == typeof p[p.length - 1] || Fa(p[p.length - 1].type, "field_")) && (r = { type: "input_dummy" }, k && (r.align = k), p.push(r));
        k = { LEFT: z.Fi, RIGHT: z.yh, CENTRE: z.Ck };
        h = [];
        for (r = 0; r < p.length; r++)
            if (m = p[r], "string" == typeof m) h.push([m, void 0]);
            else {
                l = x = null;
                do
                    if (n = !1, "string" == typeof m) x = new yh(m);
                    else switch (m.type) {
                        case "input_value":
                            l =
                                Gh(f, m.name);
                            break;
                        case "input_statement":
                            l = f.ce(z.Qa, m.name);
                            break;
                        case "input_dummy":
                            l = Q(f, m.name);
                            break;
                        default:
                            x = (x = qh[m.type]) ? x.ia(m) : null, x || (m.alt ? (m = m.alt, n = !0) : console.warn("Blockly could not create a field of type " + m.type + ". You may need to register your custom field.  See github.com/google/blockly/issues/1584"))
                    }
                while (n);
                if (x) h.push([x, m.name]);
                else if (l) { m.check && l.bb(m.check);
                    m.align && Bh(l, k[m.align]); for (m = 0; m < h.length; m++) P(l, h[m][0], h[m][1]);
                    h.length = 0 }
            } e++
    }
    void 0 !== b.inputsInline &&
        a.Dd(b.inputsInline);
    void 0 !== b.output && a.Ed(!0, b.output);
    void 0 !== b.previousStatement && a.De(!0, b.previousStatement);
    void 0 !== b.nextStatement && a.Ce(!0, b.nextStatement);
    void 0 !== b.tooltip && (e = b.tooltip, e = z.i.ic(e), a.La(e));
    void 0 !== b.enableContextMenu && (e = b.enableContextMenu, a.contextMenu = !!e);
    void 0 !== b.helpUrl && (e = b.helpUrl, e = z.i.ic(e), a.Pb = e);
    q(b.extensions) && (console.warn(c + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + b.type + "' block."), b.extensions = [b.extensions]);
    void 0 !== b.mutator && z.M.apply(b.mutator, a, !0);
    if (Array.isArray(b.extensions))
        for (b = b.extensions, e = 0; e < b.length; ++e) z.M.apply(b[e], a, !1)
}

function ah(a, b) { if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided"); var c = [],
        e; for (e in b) void 0 !== a[e] && c.push(e); if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c)); for (var f in b) a[f] = b[f] } d.ce = function(a, b) { var c = null; if (a == z.Wa || a == z.Qa) c = this.Oj(a);
    a = new zh(a, b, this, c);
    this.W.push(a); return a };

function Ih(a, b, c) { if (b != c) { for (var e = -1, f = c ? -1 : a.W.length, h = 0, k; k = a.W[h]; h++)
            if (k.name == b) { if (e = h, -1 != f) break } else if (c && k.name == c && (f = h, -1 != e)) break;
        a.Co(e, f) } } d.Co = function(a, b) { var c = this.W[a];
    this.W.splice(a, 1);
    a < b && b--;
    this.W.splice(b, 0, c) };
d.Ab = function(a) { for (var b = 0, c; c = this.W[b]; b++)
        if (c.name == a) { c.connection && c.connection.isConnected() && (c.connection.Fe = null, a = J(c.connection), a.hb ? a.A() : Ee(a));
            c.A();
            this.W.splice(b, 1); break } };

function K(a, b) { for (var c = 0, e; e = a.W[c]; c++)
        if (e.name == b) return e; return null }

function Jh(a, b) { return (a = K(a, b)) && a.connection && J(a.connection) } d.wl = function() { return this.Sa || "" };
d.fh = function(a) { this.Sa != a && (z.j.U(new z.j.Cc(this, "comment", null, this.Sa, a || "")), this.Sa = a) };
d.Ee = function() {};
d.gk = function() {};
d.la = function() { return this.nd };
d.moveBy = function(a, b) { var c = new z.j.Gi(this);
    this.nd.translate(a, b);
    c.hf();
    z.j.U(c) };
d.Oj = function(a) { return new Le(this, a) };

function Ue(a) { var b = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (b += ' (id="' + a.id + '")'); return b };
z.i.Ci = {};
z.i.Ci.af = function(a) { a = a.F(); var b = ih(a);
    b.height = a.scrollHeight; return b };
z.i.Ci.oq = function(a, b, c) { b.left += c.width;
    b.right += c.width;
    a.left += c.width;
    a.right += c.width };

function Kh(a) { Gb.call(this);
    this.bi = a;
    this.ji = {} } y(Kh, Gb);
var Lh = [];
d = Kh.prototype;
d.na = function(a, b, c, e) { u(b) || (b && (Lh[0] = b.toString()), b = Lh); for (var f = 0; f < b.length; f++) { var h = dc(a, b[f], c || this.handleEvent, e || !1, this.bi || this); if (!h) break;
        this.ji[h.key] = h } return this };
d.ls = function(a, b, c, e) { return Mh(this, a, b, c, e) };

function Mh(a, b, c, e, f, h) { if (u(c))
        for (var k = 0; k < c.length; k++) Mh(a, b, c[k], e, f, h);
    else { b = ec(b, c, e || a.handleEvent, f, h || a.bi || a); if (!b) return a;
        a.ji[b.key] = b } return a }
d.jd = function(a, b, c, e, f) { if (u(b))
        for (var h = 0; h < b.length; h++) this.jd(a, b[h], c, e, f);
    else c = c || this.handleEvent, e = ha(e) ? !!e.capture : !!e, f = f || this.bi || this, c = fc(c), e = !!e, b = Ub(a) ? a.oj(b, c, e, f) : a ? (a = hc(a)) ? a.oj(b, c, e, f) : null : null, b && (mc(b), delete this.ji[b.key]); return this };
d.removeAll = function() { cb(this.ji, function(a, b) { this.ji.hasOwnProperty(b) && mc(a) }, this);
    this.ji = {} };
d.Ta = function() { Kh.s.Ta.call(this);
    this.removeAll() };
d.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

function Nh() {} da(Nh);
Nh.prototype.Rw = 0;

function Oh(a) { ng.call(this);
    this.jl = a || Td();
    this.wi = Ph;
    this.di = null;
    this.za = !1;
    this.S = null;
    this.Kf = void 0;
    this.Cf = this.cc = this.Ae = this.Bo = null;
    this.ri = this.Ux = !1 } y(Oh, ng);
Oh.prototype.tw = Nh.re();
var Ph = null;

function Qh(a, b) { switch (a) {
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
            return b ? "open" : "close" } throw Error("Invalid component state"); } d = Oh.prototype;
d.$ = function() { return this.di || (this.di = ":" + (this.tw.Rw++).toString(36)) };
d.F = function() { return this.S };

function Rh(a) { a.Kf || (a.Kf = new Kh(a)); return a.Kf }
d.ih = function(a) { if (this == a) throw Error("Unable to set parent component"); if (a && this.Ae && this.di && Sh(this.Ae, this.di) && this.Ae != a) throw Error("Unable to set parent component");
    this.Ae = a;
    Oh.s.Am.call(this, a) };
d.getParent = function() { return this.Ae };
d.Am = function(a) { if (this.Ae && this.Ae != a) throw Error("Method not supported");
    Oh.s.Am.call(this, a) };
d.pc = function() { return this.jl };
d.V = function() { this.S = this.jl.createElement("DIV") };
d.Z = function(a) { this.Be(a) };
d.Be = function(a, b) { if (this.za) throw Error("Component already rendered");
    this.S || this.V();
    a ? a.insertBefore(this.S, b || null) : this.jl.Kd.body.appendChild(this.S);
    this.Ae && !this.Ae.za || this.Gb() };
d.Gb = function() { this.za = !0;
    Th(this, function(a) {!a.za && a.F() && a.Gb() }) };
d.xd = function() { Th(this, function(a) { a.za && a.xd() });
    this.Kf && this.Kf.removeAll();
    this.za = !1 };
d.Ta = function() { this.za && this.xd();
    this.Kf && (this.Kf.A(), delete this.Kf);
    Th(this, function(a) { a.A() });!this.Ux && this.S && G(this.S);
    this.Ae = this.Bo = this.S = this.Cf = this.cc = null;
    Oh.s.Ta.call(this) };
d.Qi = function(a, b) { this.Jh(a, Uh(this), b) };
d.Jh = function(a, b, c) {
    if (a.za && (c || !this.za)) throw Error("Component already rendered");
    if (0 > b || b > Uh(this)) throw Error("Child component index out of bounds");
    this.Cf && this.cc || (this.Cf = {}, this.cc = []);
    if (a.getParent() == this) { var e = a.$();
        this.Cf[e] = a;
        xa(this.cc, a) } else { e = this.Cf; var f = a.$(); if (null !== e && f in e) throw Error('The object already contains the key "' + f + '"');
        e[f] = a } a.ih(this);
    Ba(this.cc, b, 0, a);
    a.za && this.za && a.getParent() == this ? (c = this.Zc(), b = c.childNodes[b] || null, b != a.F() && c.insertBefore(a.F(),
        b)) : c ? (this.S || this.V(), b = R(this, b + 1), a.Be(this.Zc(), b ? b.S : null)) : this.za && !a.za && a.S && a.S.parentNode && 1 == a.S.parentNode.nodeType && a.Gb()
};
d.Zc = function() { return this.S };

function Vh(a) { null == a.wi && (a.wi = "rtl" == eh(a.za ? a.S : a.jl.Kd.body, "direction")); return a.wi } d.lf = function(a) { if (this.za) throw Error("Component already rendered");
    this.wi = a };

function Wh(a) { return !!a.cc && 0 != a.cc.length }

function Uh(a) { return a.cc ? a.cc.length : 0 }

function Sh(a, b) { a.Cf && b ? (a = a.Cf, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null; return b }

function R(a, b) { return a.cc ? a.cc[b] || null : null }

function Th(a, b, c) { a.cc && ra(a.cc, b, c) }

function Xh(a, b) { return a.cc && b ? qa(a.cc, b) : -1 } d.removeChild = function(a, b) { if (a) { var c = q(a) ? a : a.$();
        a = Sh(this, c); if (c && a) { var e = this.Cf;
            c in e && delete e[c];
            xa(this.cc, a);
            b && (a.xd(), a.S && G(a.S));
            a.ih(null) } } if (!a) throw Error("Child is not in parent component"); return a };
d.Xs = function(a) { for (var b = []; Wh(this);) b.push(this.removeChild(R(this, 0), a)); return b };
var Yh;
fb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

function Zh(a, b) { b ? a.setAttribute("role", b) : a.removeAttribute("role") }

function S(a, b, c) { u(c) && (c = c.join(" ")); var e = "aria-" + b; "" === c || void 0 == c ? (Yh || (Yh = { atomic: !1, autocomplete: "none", dropeffect: "none", haspopup: !1, live: "off", multiline: !1, multiselectable: !1, orientation: "vertical", readonly: !1, relevant: "additions text", required: !1, sort: "none", busy: !1, disabled: !1, hidden: !1, invalid: "false" }), c = Yh, b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e)) : a.setAttribute(e, c) }

function $h(a, b) { a = a.getAttribute("aria-" + b); return null == a || void 0 == a ? "" : String(a) };

function ai(a, b, c, e, f, h) { if (B && !wb("525")) return !0; if (nb && f) return bi(a); if (f && !e) return !1; if (!lb) { t(b) && (b = ci(b)); var k = 17 == b || 18 == b || nb && 91 == b; if ((!c || nb) && k || nb && 16 == b && (e || h)) return !1 } if ((B || kb) && e && c) switch (a) {
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
    if (A && e && b == a) return !1; switch (a) {
        case 13:
            return lb ? h || f ? !1 : !(c && e) : !0;
        case 27:
            return !(B || kb || lb) } return lb && (e || f || h) ? !1 : bi(a) }

function bi(a) { if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (B || kb) && 0 == a) return !0; switch (a) {
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

function ci(a) { if (lb) a = di(a);
    else if (nb && B) switch (a) {
        case 93:
            a = 91 }
    return a }

function di(a) { switch (a) {
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

function ei(a, b) { ng.call(this);
    a && fi(this, a, b) } y(ei, ng);
d = ei.prototype;
d.S = null;
d.Xl = null;
d.qo = null;
d.Yl = null;
d.Kc = -1;
d.Vf = -1;
d.fn = !1;
var gi = { 3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45 },
    hi = { Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45 },
    ii = !B || wb("525"),
    ji = nb && lb;
d = ei.prototype;
d.fw = function(a) { if (B || kb)
        if (17 == this.Kc && !a.ctrlKey || 18 == this.Kc && !a.altKey || nb && 91 == this.Kc && !a.metaKey) this.Vf = this.Kc = -1; - 1 == this.Kc && (a.ctrlKey && 17 != a.keyCode ? this.Kc = 17 : a.altKey && 18 != a.keyCode ? this.Kc = 18 : a.metaKey && 91 != a.keyCode && (this.Kc = 91));
    ii && !ai(a.keyCode, this.Kc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Vf = ci(a.keyCode), ji && (this.fn = a.altKey)) };
d.gw = function(a) { this.Vf = this.Kc = -1;
    this.fn = a.altKey };
d.handleEvent = function(a) {
    var b = a.le,
        c = b.altKey;
    if (A && "keypress" == a.type) { var e = this.Vf; var f = 13 != e && 27 != e ? b.keyCode : 0 } else(B || kb) && "keypress" == a.type ? (e = this.Vf, f = 0 <= b.charCode && 63232 > b.charCode && bi(e) ? b.charCode : 0) : jb && !B ? (e = this.Vf, f = bi(e) ? b.keyCode : 0) : (e = b.keyCode || this.Vf, f = b.charCode || 0, ji && "keypress" == a.type && (c = this.fn), nb && 63 == f && 224 == e && (e = 191));
    var h = e = ci(e);
    e ? 63232 <= e && e in gi ? h = gi[e] : 25 == e && a.shiftKey && (h = 9) : b.keyIdentifier && b.keyIdentifier in hi && (h = hi[b.keyIdentifier]);
    lb && ii && "keypress" ==
        a.type && !ai(h, this.Kc, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = h == this.Kc, this.Kc = h, b = new ki(h, f, a, b), b.altKey = c, this.dispatchEvent(b))
};
d.F = function() { return this.S };

function fi(a, b, c) { a.Yl && a.detach();
    a.S = b;
    a.Xl = dc(a.S, "keypress", a, c);
    a.qo = dc(a.S, "keydown", a.fw, c, a);
    a.Yl = dc(a.S, "keyup", a.gw, c, a) } d.detach = function() { this.Xl && (mc(this.Xl), mc(this.qo), mc(this.Yl), this.Yl = this.qo = this.Xl = null);
    this.S = null;
    this.Vf = this.Kc = -1 };
d.Ta = function() { ei.s.Ta.call(this);
    this.detach() };

function ki(a, b, c, e) { Pb.call(this, e);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c } y(ki, Pb);

function li(a) { if (a.classList) return a.classList;
    a = a.className; return q(a) && a.match(/\S+/g) || [] }

function mi(a, b) { return a.classList ? a.classList.contains(b) : wa(li(a), b) }

function ni(a, b) { a.classList ? a.classList.add(b) : mi(a, b) || (a.className += 0 < a.className.length ? " " + b : b) }

function oi(a, b) { if (a.classList) ra(b, function(b) { ni(a, b) });
    else { var c = {};
        ra(li(a), function(a) { c[a] = !0 });
        ra(b, function(a) { c[a] = !0 });
        a.className = ""; for (var e in c) a.className += 0 < a.className.length ? " " + e : e } }

function pi(a, b) { a.classList ? a.classList.remove(b) : mi(a, b) && (a.className = sa(li(a), function(a) { return a != b }).join(" ")) }

function qi(a, b) { a.classList ? ra(b, function(b) { pi(a, b) }) : a.className = sa(li(a), function(a) { return !wa(b, a) }).join(" ") };

function ri(a, b) { if (!a) throw Error("Invalid class name " + a); if (!v(b)) throw Error("Invalid decorator function " + b); }
var si = {};

function ti(a) { this.rq = a } da(ti);
d = ti.prototype;
d.rl = function() { return this.rq };

function ui(a, b) { a && (a.tabIndex = b ? 0 : -1) } d.V = function(a) { return a.pc().V("DIV", this.nj(a).join(" ")) };
d.Zc = function(a) { return a };
d.Ej = function(a) { a = a.F();
    mh(a, !0, lb);
    A && (a.hideFocus = !0); var b = this.rl();
    b && Zh(a, b) };
d.Ob = function(a) { return a.F() };
d.Ka = function() { return "goog-container" };
d.nj = function(a) { var b = this.Ka(),
        c = [b, a.Yg == vi ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled"); return c };

function wi() {}
var xi;
da(wi);
var yi = { button: "pressed", checkbox: "checked", menuitem: "selected", menuitemcheckbox: "checked", menuitemradio: "checked", radio: "checked", tab: "selected", treeitem: "selected" };
d = wi.prototype;
d.rl = function() {};
d.V = function(a) { return a.pc().V("DIV", this.nj(a).join(" "), a.Ic()) };
d.Zc = function(a) { return a };
d.hj = function(a, b, c) { if (a = a.F ? a.F() : a) { var e = [b];
        A && !wb("7") && (e = zi(li(a), b), e.push(b));
        (c ? oi : qi)(a, e) } };
d.Ej = function(a) { Vh(a) && this.lf(a.F(), !0);
    a.isEnabled() && this.kf(a, a.X()) };

function Ai(a, b, c) { if (a = c || a.rl()) c = b.getAttribute("role") || null, a != c && Zh(b, a) }

function Bi(a, b, c) { var e = b.qq;
    null != e && a.qp(c, e);
    b.X() || S(c, "hidden", !b.X());
    b.isEnabled() || Ci(c, 1, !b.isEnabled());
    b.Bb & 8 && Ci(c, 8, b.Ul());
    b.Bb & 16 && Ci(c, 16, !!(b.Ha & 16));
    b.Bb & 64 && Ci(c, 64, b.gi()) } d.qp = function(a, b) { S(a, "label", b) };
d.pp = function(a, b) { mh(a, !b, !A && !jb) };
d.lf = function(a, b) { this.hj(a, this.Ka() + "-rtl", b) };
d.df = function(a) { var b; return a.Bb & 32 && (b = a.Ob()) ? ke(b) && le(b) : !1 };
d.kf = function(a, b) { var c; if (a.Bb & 32 && (c = a.Ob())) { if (!b && a.Ha & 32) { try { c.blur() } catch (e) {} a.Ha & 32 && a.uj(null) }(ke(c) && le(c)) != b && (a = c, b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))) } };
d.oa = function(a, b) { kh(a, b);
    a && S(a, "hidden", !b) };
d.Wd = function(a, b, c) { var e = a.F(); if (e) { var f = this.vl(b);
        f && this.hj(a, f, c);
        Ci(e, b, c) } };

function Ci(a, b, c) { xi || (xi = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = xi[b]; var e = a.getAttribute("role") || null;
    e && (e = yi[e] || b, b = "checked" == b || "selected" == b ? e : b);
    b && S(a, b, c) } d.Cd = function(a, b) { var c = this.Zc(a);
    c && (ee(c), b && (q(b) ? he(c, b) : (a = function(a) { if (a) { var b = Vd(c);
            c.appendChild(q(a) ? b.createTextNode(a) : a) } }, u(b) ? ra(b, a) : !fa(b) || "nodeType" in b ? a(b) : ra(za(b), a)))) };
d.Ob = function(a) { return a.F() };
d.Ka = function() { return "goog-control" };
d.nj = function(a) { var b = this.Ka(),
        c = [b],
        e = this.Ka();
    e != b && c.push(e);
    b = a.getState(); for (e = []; b;) { var f = b & -b;
        e.push(this.vl(f));
        b &= ~f } c.push.apply(c, e);
    (a = a.me) && c.push.apply(c, a);
    A && !wb("7") && c.push.apply(c, zi(c)); return c };

function zi(a, b) { var c = [];
    b && (a = ya(a, [b]));
    ra([], function(e) {!ua(e, oa(wa, a)) || b && !wa(e, b) || c.push(e.join("_")) }); return c }
d.vl = function(a) { if (!this.Dq) { var b = this.Ka();
        b.replace(/\xa0|\s/g, " ");
        this.Dq = { 1: b + "-disabled", 2: b + "-hover", 4: b + "-active", 8: b + "-selected", 16: b + "-checked", 32: b + "-focused", 64: b + "-open" } } return this.Dq[a] };

function T(a, b, c) { Oh.call(this, c); if (!b) { b = this.constructor; for (var e; b;) { e = ia(b); if (e = si[e]) break;
            b = b.s ? b.s.constructor : null } b = e ? v(e.re) ? e.re() : new e : null } this.ma = b;
    this.xm(aa(a) ? a : null);
    this.qq = null } y(T, Oh);
d = T.prototype;
d.Vc = null;
d.Ha = 0;
d.Bb = 39;
d.jn = 255;
d.nh = 0;
d.Oa = !0;
d.me = null;
d.vj = !0;
d.dn = !1;
d.sx = null;
d.Ob = function() { return this.ma.Ob(this) };
d.Bl = function() { return this.fc || (this.fc = new ei) };
d.hj = function(a, b) { b ? a && (this.me ? wa(this.me, a) || this.me.push(a) : this.me = [a], this.ma.hj(this, a, !0)) : a && this.me && xa(this.me, a) && (0 == this.me.length && (this.me = null), this.ma.hj(this, a, !1)) };
d.V = function() { var a = this.ma.V(this);
    this.S = a;
    Ai(this.ma, a, this.Fl());
    this.dn || this.ma.pp(a, !1);
    this.X() || this.ma.oa(a, !1) };
d.Fl = function() { return this.sx };
d.qp = function(a) { this.qq = a; var b = this.F();
    b && this.ma.qp(b, a) };
d.Zc = function() { return this.ma.Zc(this.F()) };
d.Gb = function() { T.s.Gb.call(this);
    Bi(this.ma, this, this.S);
    this.ma.Ej(this); if (this.Bb & -2 && (this.vj && Di(this, !0), this.Bb & 32)) { var a = this.Ob(); if (a) { var b = this.Bl();
            fi(b, a);
            Rh(this).na(b, "key", this.Ad).na(a, "focus", this.Jl).na(a, "blur", this.uj) } } };

function Di(a, b) { var c = a.ri ? Ob : Nb,
        e = Rh(a),
        f = a.F();
    b ? (e.na(f, c.Ki, a.wj).na(f, c.Dh, a.bf).na(f, [c.Eh, c.Ch], a.ai).na(f, c.Ji, a.co), a.ri && e.na(f, "gotpointercapture", a.pm), a.$h != ca && e.na(f, "contextmenu", a.$h), A && (wb(9) || e.na(f, "dblclick", a.Mr), a.Dj || (a.Dj = new Ei(a), Jb(a, oa(Kb, a.Dj))))) : (e.jd(f, c.Ki, a.wj).jd(f, c.Dh, a.bf).jd(f, [c.Eh, c.Ch], a.ai).jd(f, c.Ji, a.co), a.ri && e.jd(f, "gotpointercapture", a.pm), a.$h != ca && e.jd(f, "contextmenu", a.$h), A && (wb(9) || e.jd(f, "dblclick", a.Mr), Kb(a.Dj), a.Dj = null)) }
d.xd = function() { T.s.xd.call(this);
    this.fc && this.fc.detach();
    this.X() && this.isEnabled() && this.ma.kf(this, !1) };
d.Ta = function() { T.s.Ta.call(this);
    this.fc && (this.fc.A(), delete this.fc);
    delete this.ma;
    this.Dj = this.me = this.Vc = null };
d.Ic = function() { return this.Vc };
d.Cd = function(a) { this.ma.Cd(this.F(), a);
    this.xm(a) };
d.xm = function(a) { this.Vc = a };
d.ul = function() { var a = this.Ic(); if (!a) return "";
    a = q(a) ? a : u(a) ? ta(a, oe).join("") : me(a); return Ha(a) };
d.lf = function(a) { T.s.lf.call(this, a); var b = this.F();
    b && this.ma.lf(b, a) };
d.pp = function(a) { this.dn = a; var b = this.F();
    b && this.ma.pp(b, a) };
d.X = function() { return this.Oa };
d.oa = function(a, b) { return b || this.Oa != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.F()) && this.ma.oa(b, a), this.isEnabled() && this.ma.kf(this, a), this.Oa = a, !0) : !1 };
d.isEnabled = function() { return !(this.Ha & 1) };
d.fk = function(a) { var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Fi(this, 1, !a) || (a || (this.setActive(!1), this.Wb(!1)), this.X() && this.ma.kf(this, a), this.Wd(1, !a, !0)) };
d.Wb = function(a) { Fi(this, 2, a) && this.Wd(2, a) };
d.setActive = function(a) { Fi(this, 4, a) && this.Wd(4, a) };
d.Ul = function() { return !!(this.Ha & 8) };
d.wp = function(a) { Fi(this, 8, a) && this.Wd(8, a) };

function Gi(a, b) { Fi(a, 16, b) && a.Wd(16, b) } d.gi = function() { return !!(this.Ha & 64) };

function Hi(a, b) { Fi(a, 64, b) && a.Wd(64, b) } d.getState = function() { return this.Ha };
d.Wd = function(a, b, c) { c || 1 != a ? this.Bb & a && b != !!(this.Ha & a) && (this.ma.Wd(this, a, b), this.Ha = b ? this.Ha | a : this.Ha & ~a) : this.fk(!b) };
d.zc = function(a, b) { if (this.za && this.Ha & a && !b) throw Error("Component already rendered");!b && this.Ha & a && this.Wd(a, !1);
    this.Bb = b ? this.Bb | a : this.Bb & ~a };

function Ii(a, b) { return !!(a.jn & b) && !!(a.Bb & b) }

function Fi(a, b, c) { return !!(a.Bb & b) && !!(a.Ha & b) != c && (!(a.nh & b) || a.dispatchEvent(Qh(b, c))) && !a.Ph }
d.wj = function(a) {!Ji(a, this.F()) && this.dispatchEvent("enter") && this.isEnabled() && Ii(this, 2) && this.Wb(!0) };
d.co = function(a) {!Ji(a, this.F()) && this.dispatchEvent("leave") && (Ii(this, 4) && this.setActive(!1), Ii(this, 2) && this.Wb(!1)) };
d.pm = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };
d.$h = ca;

function Ji(a, b) { return !!a.relatedTarget && ge(b, a.relatedTarget) }
d.bf = function(a) { this.isEnabled() && (Ii(this, 2) && this.Wb(!0), !Sb(a) || B && nb && a.ctrlKey || (Ii(this, 4) && this.setActive(!0), this.ma && this.ma.df(this) && this.Ob().focus()));
    this.dn || !Sb(a) || B && nb && a.ctrlKey || a.preventDefault() };
d.ai = function(a) { this.isEnabled() && (Ii(this, 2) && this.Wb(!0), this.Ha & 4 && this.ag(a) && Ii(this, 4) && this.setActive(!1)) };
d.Mr = function(a) { this.isEnabled() && this.ag(a) };
d.ag = function(a) { Ii(this, 16) && Gi(this, !(this.Ha & 16));
    Ii(this, 8) && this.wp(!0);
    Ii(this, 64) && Hi(this, !this.gi()); var b = new Lb("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.To = a.To); return this.dispatchEvent(b) };
d.Jl = function() { Ii(this, 32) && Fi(this, 32, !0) && this.Wd(32, !0) };
d.uj = function() { Ii(this, 4) && this.setActive(!1);
    Ii(this, 32) && Fi(this, 32, !1) && this.Wd(32, !1) };
d.Ad = function(a) { return this.X() && this.isEnabled() && this.Lg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.Lg = function(a) { return 13 == a.keyCode && this.ag(a) };
if (!v(T)) throw Error("Invalid component class " + T);
if (!v(wi)) throw Error("Invalid renderer class " + wi);
var Ki = ia(T);
si[Ki] = wi;
ri("goog-control", function() { return new T(null) });

function Ei(a) { Gb.call(this);
    this.$k = a;
    this.Vk = !1;
    this.bi = new Kh(this);
    Jb(this, oa(Kb, this.bi));
    a = this.$k.S;
    this.bi.na(a, "mousedown", this.hw).na(a, "mouseup", this.iw).na(a, "click", this.aw) } y(Ei, Gb);
var Li = !A || 9 <= Number(xb);
Ei.prototype.hw = function() { this.Vk = !1 };
Ei.prototype.iw = function() { this.Vk = !0 };

function Mi(a, b) { if (!Li) return a.button = 0, a.type = b, a; var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null); return c } Ei.prototype.aw = function(a) { if (this.Vk) this.Vk = !1;
    else { var b = a.le,
            c = b.button,
            e = b.type,
            f = Mi(b, "mousedown");
        this.$k.bf(new Pb(f, a.currentTarget));
        f = Mi(b, "mouseup");
        this.$k.ai(new Pb(f, a.currentTarget));
        Li || (b.button = c, b.type = e) } };
Ei.prototype.Ta = function() { this.$k = null;
    Ei.s.Ta.call(this) };

function Ni(a, b, c) { Oh.call(this, c);
    this.ma = b || ti.re();
    this.Yg = a || Oi } y(Ni, Oh);
var vi = "horizontal",
    Oi = "vertical";
d = Ni.prototype;
d.ro = null;
d.fc = null;
d.ma = null;
d.Yg = null;
d.Oa = !0;
d.Hg = !0;
d.Jg = !0;
d.ua = -1;
d.Kb = null;
d.mi = !1;
d.Ju = !1;
d.qx = !0;
d.Se = null;
d.Ob = function() { return this.ro || this.ma.Ob(this) };
d.Bl = function() { return this.fc || (this.fc = new ei(this.Ob())) };
d.V = function() { this.S = this.ma.V(this) };
d.Zc = function() { return this.ma.Zc(this.F()) };
d.Gb = function() { Ni.s.Gb.call(this);
    Th(this, function(a) { a.za && Pi(this, a) }, this); var a = this.F();
    this.ma.Ej(this);
    this.oa(this.Oa, !0); var b = this.ri ? Ob : Nb;
    Rh(this).na(this, "enter", this.ao).na(this, "highlight", this.ew).na(this, "unhighlight", this.nw).na(this, "open", this.jw).na(this, "close", this.bw).na(a, b.Dh, this.bf).na(Vd(a), [b.Eh, b.Ch], this.cw).na(a, [b.Dh, b.Eh, b.Ch, b.Ki, b.Ji, "contextmenu"], this.$v);
    this.ri && Rh(this).na(a, "gotpointercapture", this.pm);
    this.df() && Qi(this, !0) };
d.pm = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };

function Qi(a, b) { var c = Rh(a),
        e = a.Ob();
    b ? c.na(e, "focus", a.Jl).na(e, "blur", a.uj).na(a.Bl(), "key", a.Ad) : c.jd(e, "focus", a.Jl).jd(e, "blur", a.uj).jd(a.Bl(), "key", a.Ad) } d.xd = function() { this.jc(-1);
    this.Kb && Hi(this.Kb, !1);
    this.mi = !1;
    Ni.s.xd.call(this) };
d.Ta = function() { Ni.s.Ta.call(this);
    this.fc && (this.fc.A(), this.fc = null);
    this.ma = this.Kb = this.Se = this.ro = null };
d.ao = function() { return !0 };
d.ew = function(a) { var b = Xh(this, a.target); if (-1 < b && b != this.ua) { var c = R(this, this.ua);
        c && c.Wb(!1);
        this.ua = b;
        c = R(this, this.ua);
        this.mi && c.setActive(!0);
        this.qx && this.Kb && c != this.Kb && (c.Bb & 64 ? Hi(c, !0) : Hi(this.Kb, !1)) } b = this.F();
    null != a.target.F() && S(b, "activedescendant", a.target.F().id) };
d.nw = function(a) { a.target == R(this, this.ua) && (this.ua = -1);
    this.F().removeAttribute("aria-activedescendant") };
d.jw = function(a) {
    (a = a.target) && a != this.Kb && a.getParent() == this && (this.Kb && Hi(this.Kb, !1), this.Kb = a) };
d.bw = function(a) { a.target == this.Kb && (this.Kb = null); var b = this.F(),
        c = a.target.F();
    b && a.target.Ha & 2 && c && (a = "", c && (a = c.id), S(b, "activedescendant", a)) };
d.bf = function(a) { this.Hg && (this.mi = !0); var b = this.Ob();
    b && ke(b) && le(b) ? b.focus() : a.preventDefault() };
d.cw = function() { this.mi = !1 };
d.$v = function(a) { var b = this.ri ? Ob : Nb,
        c = Ri(this, a.target); if (c) switch (a.type) {
        case b.Dh:
            c.bf(a); break;
        case b.Eh:
        case b.Ch:
            c.ai(a); break;
        case b.Ki:
            c.wj(a); break;
        case b.Ji:
            c.co(a); break;
        case "contextmenu":
            c.$h(a) } };

function Ri(a, b) { if (a.Se)
        for (var c = a.F(); b && b !== c;) { var e = b.id; if (e in a.Se) return a.Se[e];
            b = b.parentNode }
    return null } d.Jl = function() {};
d.uj = function() { this.jc(-1);
    this.mi = !1;
    this.Kb && Hi(this.Kb, !1) };
d.Ad = function(a) { return this.isEnabled() && this.X() && (0 != Uh(this) || this.ro) && this.Lg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.Lg = function(a) {
    var b = R(this, this.ua);
    if (b && "function" == typeof b.Ad && b.Ad(a) || this.Kb && this.Kb != b && "function" == typeof this.Kb.Ad && this.Kb.Ad(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.df()) this.Ob().blur();
            else return !1;
            break;
        case 36:
            Si(this);
            break;
        case 35:
            Ti(this);
            break;
        case 38:
            if (this.Yg == Oi) Ui(this);
            else return !1;
            break;
        case 37:
            if (this.Yg == vi) Vh(this) ? Vi(this) : Ui(this);
            else return !1;
            break;
        case 40:
            if (this.Yg == Oi) Vi(this);
            else return !1;
            break;
        case 39:
            if (this.Yg == vi) Vh(this) ? Ui(this) : Vi(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function Pi(a, b) { var c = b.F();
    c = c.id || (c.id = b.$());
    a.Se || (a.Se = {});
    a.Se[c] = b } d.Qi = function(a, b) { Ni.s.Qi.call(this, a, b) };
d.Jh = function(a, b, c) { a.nh |= 2;
    a.nh |= 64;!this.df() && this.Ju || a.zc(32, !1);
    a.za && 0 != a.vj && Di(a, !1);
    a.vj = !1; var e = a.getParent() == this ? Xh(this, a) : -1;
    Ni.s.Jh.call(this, a, b, c);
    a.za && this.za && Pi(this, a);
    a = e; - 1 == a && (a = Uh(this));
    a == this.ua ? this.ua = Math.min(Uh(this) - 1, b) : a > this.ua && b <= this.ua ? this.ua++ : a < this.ua && b > this.ua && this.ua-- };
d.removeChild = function(a, b) { if (a = q(a) ? Sh(this, a) : a) { var c = Xh(this, a); - 1 != c && (c == this.ua ? (a.Wb(!1), this.ua = -1) : c < this.ua && this.ua--); var e = a.F();
        e && e.id && this.Se && (c = this.Se, e = e.id, e in c && delete c[e]) } b = a = Ni.s.removeChild.call(this, a, b);
    b.za && 1 != b.vj && Di(b, !0);
    b.vj = !0; return a };
d.setOrientation = function(a) { if (this.F()) throw Error("Component already rendered");
    this.Yg = a };
d.X = function() { return this.Oa };
d.oa = function(a, b) { if (b || this.Oa != a && this.dispatchEvent(a ? "show" : "hide")) { this.Oa = a; var c = this.F();
        c && (kh(c, a), this.df() && ui(this.Ob(), this.Hg && this.Oa), b || this.dispatchEvent(this.Oa ? "aftershow" : "afterhide")); return !0 } return !1 };
d.isEnabled = function() { return this.Hg };
d.fk = function(a) { this.Hg != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Hg = !0, Th(this, function(a) { a.yt ? delete a.yt : a.fk(!0) })) : (Th(this, function(a) { a.isEnabled() ? a.fk(!1) : a.yt = !0 }), this.mi = this.Hg = !1), this.df() && ui(this.Ob(), a && this.Oa)) };
d.df = function() { return this.Jg };
d.kf = function(a) { a != this.Jg && this.za && Qi(this, a);
    this.Jg = a;
    this.Hg && this.Oa && ui(this.Ob(), a) };
d.jc = function(a) {
    (a = R(this, a)) ? a.Wb(!0): -1 < this.ua && R(this, this.ua).Wb(!1) };
d.Wb = function(a) { this.jc(Xh(this, a)) };

function Si(a) { Wi(a, function(a, c) { return (a + 1) % c }, Uh(a) - 1) }

function Ti(a) { Wi(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, 0) }

function Vi(a) { Wi(a, function(a, c) { return (a + 1) % c }, a.ua) }

function Ui(a) { Wi(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, a.ua) }

function Wi(a, b, c) { c = 0 > c ? Xh(a, a.Kb) : c; var e = Uh(a);
    c = b.call(a, c, e); for (var f = 0; f <= e;) { var h = R(a, c); if (h && a.yq(h)) { a.jc(c); break } f++;
        c = b.call(a, c, e) } } d.yq = function(a) { return a.X() && a.isEnabled() && !!(a.Bb & 2) };

function Xi() {} y(Xi, wi);
da(Xi);
Xi.prototype.Ka = function() { return "goog-menuheader" };

function Yi(a, b, c) { T.call(this, a, c || Xi.re(), b);
    this.zc(1, !1);
    this.zc(2, !1);
    this.zc(4, !1);
    this.zc(32, !1);
    this.Ha = 1 } y(Yi, T);
ri("goog-menuheader", function() { return new Yi(null) });

function Zi() { this.Eq = [] } y(Zi, wi);
da(Zi);

function $i(a, b) { var c = a.Eq[b]; if (!c) { switch (b) {
            case 0:
                c = a.Ka() + "-highlight"; break;
            case 1:
                c = a.Ka() + "-checkbox"; break;
            case 2:
                c = a.Ka() + "-content" } a.Eq[b] = c } return c } d = Zi.prototype;
d.rl = function() { return "menuitem" };
d.V = function(a) { var b = a.pc().V("DIV", this.nj(a).join(" "), aj(this, a.Ic(), a.pc()));
    bj(this, a, b, !!(a.Bb & 8) || !!(a.Bb & 16)); return b };
d.Zc = function(a) { return a && a.firstChild };
d.Cd = function(a, b) { var c = this.Zc(a),
        e = cj(this, a) ? c.firstChild : null;
    Zi.s.Cd.call(this, a, b);
    e && !cj(this, a) && c.insertBefore(e, c.firstChild || null) };

function aj(a, b, c) { a = $i(a, 2); return c.V("DIV", a, b) } d.dt = function(a, b, c) { a && b && bj(this, a, b, c) };
d.sp = function(a, b, c) { a && b && bj(this, a, b, c) };

function cj(a, b) { return (b = a.Zc(b)) ? (b = b.firstChild, a = $i(a, 1), !!b && ha(b) && 1 == b.nodeType && mi(b, a)) : !1 }

function bj(a, b, c, e) { Ai(a, c, b.Fl());
    Bi(a, b, c);
    e != cj(a, c) && (e ? ni(c, "goog-option") : pi(c, "goog-option"), c = a.Zc(c), e ? (a = $i(a, 1), c.insertBefore(b.pc().V("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild)) } d.vl = function(a) { switch (a) {
        case 2:
            return $i(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return Zi.s.vl.call(this, a) } };
d.Ka = function() { return "goog-menuitem" };

function dj(a, b, c, e) { T.call(this, a, e || Zi.re(), c);
    this.setValue(b) } y(dj, T);
d = dj.prototype;
d.getValue = function() { var a = this.Bo; return null != a ? a : this.ul() };
d.setValue = function(a) { this.Bo = a };
d.zc = function(a, b) { dj.s.zc.call(this, a, b); switch (a) {
        case 8:
            this.Ha & 16 && !b && Gi(this, !1);
            (a = this.F()) && this.ma.dt(this, a, b); break;
        case 16:
            (a = this.F()) && this.ma.sp(this, a, b) } };
d.dt = function(a) { this.zc(8, a) };
d.sp = function(a) { this.zc(16, a) };
d.ul = function() { var a = this.Ic(); return u(a) ? (a = ta(a, function(a) { return ha(a) && 1 == a.nodeType && (mi(a, "goog-menuitem-accel") || mi(a, "goog-menuitem-mnemonic-separator")) ? "" : oe(a) }).join(""), Ha(a)) : dj.s.ul.call(this) };
d.ai = function(a) { var b = this.getParent(); if (b) { var c = b.Ls;
        b.Ls = null; if (c && t(a.clientX) && sc(c, new D(a.clientX, a.clientY))) return } dj.s.ai.call(this, a) };
d.Lg = function(a) { return a.keyCode == this.rs && this.ag(a) ? !0 : dj.s.Lg.call(this, a) };
d.Yv = function() { return this.rs };
ri("goog-menuitem", function() { return new dj(null) });
dj.prototype.Fl = function() { return this.Bb & 16 ? "menuitemcheckbox" : this.Bb & 8 ? "menuitemradio" : dj.s.Fl.call(this) };
dj.prototype.getParent = function() { return T.prototype.getParent.call(this) };
dj.prototype.El = function() { return T.prototype.El.call(this) };

function ej() {} y(ej, wi);
da(ej);
ej.prototype.V = function(a) { return a.pc().V("DIV", this.Ka()) };
ej.prototype.Cd = function() {};
ej.prototype.Ka = function() { return "goog-menuseparator" };

function fj(a, b) { T.call(this, null, a || ej.re(), b);
    this.zc(1, !1);
    this.zc(2, !1);
    this.zc(4, !1);
    this.zc(32, !1);
    this.Ha = 1 } y(fj, T);
fj.prototype.Gb = function() { fj.s.Gb.call(this); var a = this.F();
    Zh(a, "separator") };
ri("goog-menuseparator", function() { return new fj });

function gj(a) { this.rq = a || "menu" } y(gj, ti);
da(gj);
gj.prototype.Ka = function() { return "goog-menu" };
gj.prototype.Ej = function(a) { gj.s.Ej.call(this, a);
    a = a.F();
    S(a, "haspopup", "true") };
ri("goog-menuseparator", function() { return new fj });

function hj(a, b) { Ni.call(this, Oi, b || gj.re(), a);
    this.kf(!1) } y(hj, Ni);
d = hj.prototype;
d.Ok = !0;
d.Ku = !1;
d.Ka = function() { return this.ma.Ka() };
d.removeItem = function(a) {
    (a = this.removeChild(a, !0)) && a.A() };
d.Hr = function(a) { return R(this, a) };
d.setPosition = function(a, b) { var c = this.X();
    c || kh(this.F(), !0); var e = this.F(),
        f = a;
    a = gh(e);
    f instanceof D && (b = f.y, f = f.x); var h = e.offsetLeft + (f - a.x);
    h instanceof D ? (f = h.x, b = h.y) : (f = h, b = e.offsetTop + (Number(b) - a.y));
    e.style.left = hh(f);
    e.style.top = hh(b);
    c || kh(this.F(), !1) };
d.Ir = function() { return this.X() ? gh(this.F()) : null };
d.oa = function(a, b, c) {
    (b = hj.s.oa.call(this, a, b)) && a && this.za && this.Ok && this.Ob().focus();
    this.Ls = a && c && t(c.clientX) ? new D(c.clientX, c.clientY) : null; return b };
d.ao = function(a) { this.Ok && this.Ob().focus(); return hj.s.ao.call(this, a) };
d.yq = function(a) { return (this.Ku || a.isEnabled()) && a.X() && !!(a.Bb & 2) };
d.Lg = function(a) { var b = hj.s.Lg.call(this, a);
    b || Th(this, function(c) {!b && c.Yv && c.rs == a.keyCode && (this.isEnabled() && this.Wb(c), b = c.Ad(a)) }, this); return b };
d.jc = function(a) {
    hj.s.jc.call(this, a);
    if (a = R(this, a)) {
        var b = a.F();
        a = this.F() || ae(document);
        var c = a || ae(document);
        var e = gh(b),
            f = gh(c);
        if (!A || 9 <= Number(xb)) { k = dh(c, "borderLeftWidth"); var h = dh(c, "borderRightWidth");
            l = dh(c, "borderTopWidth");
            m = dh(c, "borderBottomWidth");
            h = new pg(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k)) } else { var k = oh(c, "borderLeft");
            h = oh(c, "borderRight"); var l = oh(c, "borderTop"),
                m = oh(c, "borderBottom");
            h = new pg(l, h, m, k) } c == ae(document) ? (k = e.x - c.scrollLeft, e = e.y - c.scrollTop,
            !A || 10 <= Number(xb) || (k += h.left, e += h.top)) : (k = e.x - f.x - h.left, e = e.y - f.y - h.top);
        b = jh(b);
        f = c.clientHeight - b.height;
        h = c.scrollLeft;
        l = c.scrollTop;
        h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0));
        l += Math.min(e, Math.max(e - f, 0));
        c = new D(h, l);
        a.scrollLeft = c.x;
        a.scrollTop = c.y
    }
};
z.ba = {};
z.ba.al = null;
z.ba.Ar = null;
z.ba.show = function(a, b, c) { z.H.show(z.ba, c, null); if (b.length) { var e = z.ba.om(b, c);
        dc(e, "action", z.ba.Fa);
        z.ba.Mc(e, a, c);
        setTimeout(function() { e.F().focus() }, 1);
        z.ba.al = null } else z.ba.Fa() };
z.ba.om = function(a, b) { var c = new hj;
    c.lf(b); for (var e = 0, f; f = a[e]; e++) { var h = new dj(f.text);
        h.lf(b);
        c.Qi(h, !0);
        h.fk(f.enabled);
        f.enabled && (dc(h, "action", f.eb), h.$h = function() { this.dispatchEvent("action") }) } return c };
z.ba.Mc = function(a, b, c) { var e = z.i.$n();
    b = { top: b.clientY + e.top, bottom: b.clientY + e.top, left: b.clientX + e.left, right: b.clientX + e.left };
    z.ba.bj(a); var f = z.i.Ci.af(a);
    c && z.i.Ci.oq(e, b, f);
    z.H.Uo(e, b, f, c);
    a.F().focus() };
z.ba.bj = function(a) { a.Z(z.H.ha); var b = a.F();
    z.i.mb(b, "blocklyContextMenu");
    z.O(b, "contextmenu", null, z.i.Sw);
    a.Ok = !0;
    a.kf(!0) };
z.ba.Fa = function() { z.H.zj(z.ba);
    z.ba.al = null;
    z.ba.Ar && z.Da(z.ba.Ar) };
z.ba.Sk = function(a, b) { return function() { z.j.disable(); try { var c = z.D.Qh(b, a.o),
                e = a.la();
            e.x = a.u ? e.x - z.Tc : e.x + z.Tc;
            e.y += 2 * z.Tc;
            c.moveBy(e.x, e.y) } finally { z.j.enable() } z.j.isEnabled() && !c.hb && z.j.U(new z.j.Fk(c));
        c.select() } };
z.ba.Pu = function(a) { var b = xc(a, !1).length,
        c = Lc(a);
    c && (b -= xc(c, !1).length); return { text: 1 == b ? z.g.DELETE_BLOCK : z.g.DELETE_X_BLOCKS.replace("%1", String(b)), enabled: !0, eb: function() { z.j.R(!0);
            a.A(!0, !0);
            z.j.R(!1) } } };
z.ba.Ru = function(a) { return { enabled: !(v(a.Pb) ? !a.Pb() : !a.Pb), text: z.g.HELP, eb: function() { var b = v(a.Pb) ? a.Pb() : a.Pb;
            b && window.open(b) } } };
z.ba.Qu = function(a) { var b = !0;
    xc(a, !1).length > fd(a.o) && (b = !1); return { text: z.g.DUPLICATE_BLOCK, enabled: b, eb: function() { z.xr(a) } } };
z.ba.Ou = function(a) { var b = { enabled: !A };
    a.Sa ? (b.text = z.g.REMOVE_COMMENT, b.eb = function() { a.fh(null) }) : (b.text = z.g.ADD_COMMENT, b.eb = function() { a.fh("") }); return b };
z.ba.dv = function(a) { return { text: z.g.MA, enabled: !0, eb: function() { z.j.R(!0);
            a.A(!0, !0);
            z.j.R(!1) } } };
z.ba.ev = function(a) { return { text: z.g.ez, enabled: !0, eb: function() { z.xr(a) } } };
z.ba.SB = function(a, b) { var c = { enabled: !0 };
    c.text = z.g.ay;
    c.eb = function() { var c = new xf(a, z.g.xB, 100, 100); if (!a.no)
            for (var f = a.w; f;) { if (-1 != (" " + (f.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) { a.no = f; break } f = f.parentNode } f = a.no.getBoundingClientRect();
        f = new D(b.clientX - f.left, b.clientY - f.top); var h = z.i.Al(a.Ma);
        f = uc(f, h).scale(1 / a.scale);
        c.moveBy(f.x, f.y);
        a.P && (c.wc(), c.Z(!1), c.select()) }; return c };

function N(a, b, c) { this.w = z.i.B("g", {}, null);
    this.w.rf = "";
    this.nk = z.i.B("path", { "class": "blocklyPathDark", transform: "translate(1,1)" }, this.w);
    this.Gd = z.i.B("path", { "class": "blocklyPath" }, this.w);
    this.mg = z.i.B("path", { "class": "blocklyPathLight" }, this.w);
    this.Gd.gd = this;
    this.P = !1;
    this.Je = z.i.Sf() && !!a.zb;
    z.C.Cg(this.Gd);
    N.s.constructor.call(this, a, b, c);
    this.w.dataset && (this.w.dataset.id = this.id) } y(N, ed);
d = N.prototype;
d.height = 0;
d.width = 0;
d.Qc = null;
d.wc = function() { for (var a = 0, b; b = this.W[a]; a++) b.L();
    b = pf(this); for (a = 0; a < b.length; a++) Ge(b[a]);
    this.sf();
    yf(this);
    this.o.options.readOnly || this.Mn || z.O(this.ga(), "mousedown", this, this.gf);
    this.Mn = !0;
    this.ga().parentNode || this.o.Ma.appendChild(this.ga()) };
d.select = function() { if (this.hb && this.getParent()) this.getParent().select();
    else if (z.selected != this) { var a = null; if (z.selected) { a = z.selected.id;
            z.j.disable(); try { z.selected.qg() } finally { z.j.enable() } } a = new Fc(null, "selected", a, this.id);
        a.Bc = this.o.id;
        z.j.U(a);
        z.selected = this;
        this.Kh() } };
d.qg = function() { if (z.selected == this) { var a = new Fc(null, "selected", this.id, null);
        a.Bc = this.o.id;
        z.j.U(a);
        z.selected = null;
        this.dh() } };
d.bd = null;
d.Sa = null;
d.md = null;

function pf(a) { var b = [];
    a.bd && b.push(a.bd);
    a.Sa && b.push(a.Sa);
    a.md && b.push(a.md); return b } d.ih = function(a) { var b = this.$f; if (a != b) { yg();
        N.s.ih.call(this, a);
        zg(); var c = this.ga(); if (!this.o.po && c) { var e = this.la();
            a ? (a.ga().appendChild(c), a = this.la(), gf(this, a.x - e.x, a.y - e.y)) : b && z.selected != this && (this.o.Ma.appendChild(c), this.translate(e.x, e.y)) } } };
d.la = function() { var a = 0,
        b = 0,
        c = this.Je ? this.o.zb.rc() : null,
        e = this.ga(); if (e) { do { var f = z.i.tc(e);
            a += f.x;
            b += f.y;
            this.Je && this.o.zb.je.firstChild == e && (f = this.o.zb.Gl(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.Ma && e != c) } return new D(a, b) };
d.moveBy = function(a, b) { var c = z.j.isEnabled(); if (c) var e = new z.j.Gi(this); var f = this.la();
    this.translate(f.x + a, f.y + b);
    gf(this, a, b);
    c && (e.hf(), z.j.U(e));
    Af(this.o) };
d.translate = function(a, b) { this.ga().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.fm = function() { if (this.Je) { var a = this.la();
        z.i.removeAttribute(this.ga(), "transform");
        this.o.zb.qf(a.x, a.y);
        Bf(this.o.zb, this.ga()) } };
d.us = function(a) { this.Je && (this.translate(a.x, a.y), this.o.zb.Ui(this.o.Ma)) };
d.em = function(a) { this.Je ? this.o.zb.qf(a.x, a.y) : (this.w.rf = "translate(" + a.x + "," + a.y + ")", this.w.setAttribute("transform", this.w.rf + this.w.kh)) };

function Sg(a) { if (a.o && !a.o.pb() && !a.getParent() && !a.tb) { var b = a.o.zd; if (b && b.Bx) { var c = b.Gp,
                e = c / 2,
                f = a.la();
            b = Math.round((f.x - e) / c) * c + e - f.x;
            c = Math.round((f.y - e) / c) * c + e - f.y;
            b = Math.round(b);
            c = Math.round(c);
            0 == b && 0 == c || a.moveBy(b, c) } } } d.Sn = function() { var a = this.la(),
        b = this.N ? M : 0,
        c = this.Hb(); if (this.u) { var e = new D(a.x - (c.width - b), a.y);
        a = new D(a.x + b, a.y + c.height) } else e = new D(a.x - b, a.y), a = new D(a.x + c.width - b, a.y + c.height); return { hd: e, Id: a } };
d.ig = function(a) { if (this.fe != a) { for (var b = [], c = 0, e; e = this.W[c]; c++) b.push.apply(b, e.oa(!a)); if (a) { e = pf(this); for (c = 0; c < e.length; c++) e[c].oa(!1);
            c = this.toString(z.Gt);
            P(Q(this, "_TEMP_COLLAPSED_INPUT"), c).L() } else this.Ab("_TEMP_COLLAPSED_INPUT"), this.Ee(null);
        N.s.ig.call(this, a);
        b.length || (b[0] = this); if (this.P)
            for (c = 0; a = b[c]; c++) a.Z() } };
d.Np = function(a, b) { for (var c = [], e = 0, f; f = this.W[e]; e++) { for (var h = 0, k; k = f.Ja[h]; h++) k instanceof ij && c.push(k);
        f.connection && (f = J(f.connection)) && c.push(f) } a = c.indexOf(a); - 1 == a && (a = b ? -1 : c.length);
    (c = c[b ? a + 1 : a - 1]) ? c instanceof ph ? c.Fd() : c.Np(null, b): (c = this.getParent()) && c.Np(this, b) };
d.gf = function(a) { var b = this.o && this.o.qe(a);
    b && (Tf(b, this), b.Lc = a) };
d.xi = function(a) {
    if (!this.o.options.readOnly && this.contextMenu) {
        var b = this,
            c = [];
        if (this.ec() && this.we() && !b.tb) {
            c.push(z.ba.Qu(b));
            Je(this) && !this.fe && this.o.options.Xi && c.push(z.ba.Ou(b));
            if (!this.fe)
                for (var e = 1; e < this.W.length; e++)
                    if (this.W[e - 1].type != z.Qa && this.W[e].type != z.Qa) { e = { enabled: !0 }; var f = bh(this);
                        e.text = f ? z.g.EXTERNAL_INPUTS : z.g.INLINE_INPUTS;
                        e.eb = function() { b.Dd(!f) };
                        c.push(e); break } this.o.options.collapse && (this.fe ? (e = { enabled: !0 }, e.text = z.g.EXPAND_BLOCK, e.eb = function() { b.ig(!1) },
                c.push(e)) : (e = { enabled: !0 }, e.text = z.g.COLLAPSE_BLOCK, e.eb = function() { b.ig(!0) }, c.push(e)));
            this.o.options.disable && (e = { text: this.disabled ? z.g.ENABLE_BLOCK : z.g.DISABLE_BLOCK, enabled: !Eh(this), eb: function() { b.Nc(!b.disabled) } }, c.push(e));
            c.push(z.ba.Pu(b))
        }
        c.push(z.ba.Ru(b));
        this.Ve && this.Ve(c);
        z.ba.show(a, c, this.u);
        z.ba.al = this
    }
};

function gf(a, b, c) { if (a.P) { for (var e = a.pe(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
        e = pf(a); for (f = 0; f < e.length; f++) He(e[f]); for (f = 0; f < a.Re.length; f++) gf(a.Re[f], b, c) } }
d.jg = function(a) { if (a) { var b = this.ga();
        b.rf = "";
        b.kh = "";
        z.ll = z.ll.concat(this.pe(!0));
        z.i.mb(this.w, "blocklyDragging") } else z.ll = [], z.i.Rb(this.w, "blocklyDragging"); for (b = 0; b < this.Re.length; b++) this.Re[b].jg(a) };
d.hh = function(a) { N.s.hh.call(this, a);
    yf(this) };
d.tp = function(a) { N.s.tp.call(this, a);
    a = pf(this); for (var b = 0; b < a.length; b++) a[b].tf() };
d.yp = function(a) { N.s.yp.call(this, a);
    this.sf() };
d.ga = function() { return this.w };
d.A = function(a, b) { if (this.o) { z.C.Fa();
        yg(); var c = this.o; if (z.selected == this) { this.qg(); var e = this.o;
            e.Eb && e.Eb.cancel() } z.ba.al == this && z.ba.Fa();
        b && this.P && (Ee(this, a), z.Ea.Gv(this));
        this.P = !1; if (this.Qc) { for (var f in this.Qc) clearTimeout(this.Qc[f]);
            this.Qc = null } z.j.disable(); try { var h = pf(this); for (b = 0; b < h.length; b++) h[b].A() } finally { z.j.enable() } N.s.A.call(this, a);
        G(this.w);
        Af(c);
        this.nk = this.mg = this.Gd = this.w = null;
        zg() } };
d.sf = function() { if (!this.disabled) { var a = this.ge,
            b = jj(a); if (this.hb) b = kj([255, 255, 255], b, .6), a = lj(b), this.mg.style.display = "none", this.nk.setAttribute("fill", a);
        else { this.mg.style.display = ""; var c = lj(kj([255, 255, 255], b, .3));
            b = lj(kj([0, 0, 0], b, .2));
            this.mg.setAttribute("stroke", c);
            this.nk.setAttribute("fill", b) } this.Gd.setAttribute("fill", a);
        a = pf(this); for (c = 0; c < a.length; c++) a[c].sf(); for (a = 0; c = this.W[a]; a++) { b = 0; for (var e; e = c.Ja[b]; b++) e.lj() } } };

function mf(a) { a.disabled || Eh(a) ? z.i.mb(a.w, "blocklyDisabled") && a.Gd.setAttribute("fill", "url(#" + a.o.options.fj + ")") : z.i.Rb(a.w, "blocklyDisabled") && a.sf();
    a = a.If(!1); for (var b = 0, c; c = a[b]; b++) mf(c) } d.wl = function() { return this.Sa ? this.Sa.Ib().replace(/\s+$/, "").replace(/ +\n/g, "\n") : "" };
d.fh = function(a) { var b = !1;
    q(a) ? (this.Sa || (this.Sa = new Ie(this), b = !0), this.Sa.vb(a)) : this.Sa && (this.Sa.A(), b = !0);
    b && this.P && (this.Z(), this.ob()) };
d.Ee = function(a, b) {
    this.Qc || (this.Qc = Object.create(null));
    var c = b || "";
    if (c) this.Qc[c] && (clearTimeout(this.Qc[c]), delete this.Qc[c]);
    else
        for (var e in this.Qc) clearTimeout(this.Qc[e]), delete this.Qc[e];
    if (this.o.pb()) { var f = this;
        this.Qc[c] = setTimeout(function() { f.o && (delete f.Qc[c], f.Ee(a, c)) }, 100) } else {
        this.tb && (a = null);
        b = Dh(this);
        for (e = null; b;) b.isCollapsed() && (e = b), b = Dh(b);
        e && e.Ee(a, "collapsed " + this.id + " " + c);
        b = !1;
        q(a) ? (this.md || (this.md = new Ke(this), b = !0), this.md.vb(a, c)) : this.md && !c ? (this.md.A(),
            b = !0) : this.md && (b = this.md.Ib(), this.md.vb("", c), (e = this.md.Ib()) || this.md.A(), b = b != e);
        b && this.P && (this.Z(), this.ob())
    }
};
d.gk = function(a) { this.bd && this.bd !== a && this.bd.A();
    a && (a.T = this, this.bd = a, Ge(a)) };
d.Nc = function(a) { this.disabled != a && (N.s.Nc.call(this, a), this.P && mf(this)) };
d.Wb = function(a) { this.P && (a ? (this.Gd.setAttribute("filter", "url(#" + this.o.options.zr + ")"), this.mg.style.display = "none") : (z.i.removeAttribute(this.Gd, "filter"), delete this.mg.style.display)) };
d.Kh = function() { z.i.mb(this.w, "blocklySelected") };
d.dh = function() { z.i.Rb(this.w, "blocklySelected") };
d.ek = function(a) { a ? z.i.mb(this.w, "blocklyDraggingDelete") : z.i.Rb(this.w, "blocklyDraggingDelete") };
d.qb = function(a) { N.s.qb.call(this, a);
    this.P && this.sf() };

function vf(a) { do { var b = a.ga();
        b.parentNode.appendChild(b);
        a = a.getParent() } while (a) } d.De = function(a, b) { N.s.De.call(this, a, b);
    this.P && (this.Z(), this.ob()) };
d.Ce = function(a, b) { N.s.Ce.call(this, a, b);
    this.P && (this.Z(), this.ob()) };
d.Ed = function(a, b) { N.s.Ed.call(this, a, b);
    this.P && (this.Z(), this.ob()) };
d.Dd = function(a) { N.s.Dd.call(this, a);
    this.P && (this.Z(), this.ob()) };
d.Ab = function(a, b) { N.s.Ab.call(this, a, b);
    this.P && (this.Z(), this.ob()) };
d.Co = function(a, b) { N.s.Co.call(this, a, b);
    this.P && (this.Z(), this.ob()) };
d.ce = function(a, b) { a = N.s.ce.call(this, a, b);
    this.P && (this.Z(), this.ob()); return a };
d.pe = function(a) { var b = []; if (a || this.P)
        if (this.N && b.push(this.N), this.Y && b.push(this.Y), this.K && b.push(this.K), a || !this.fe) { a = 0; for (var c; c = this.W[a]; a++) c.connection && b.push(c.connection) } return b };
d.Oj = function(a) { return new af(this, a) };
d.ob = function() { if (this.o && !this.o.pb()) { var a = cf(this); if (!a.tb)
            for (var b = this.pe(!1), c = 0, e; e = b[c]; c++) { e.isConnected() && Re(e) && J(e).ob(); for (var f = e.ys(z.Tc), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || cf(k.v) != a && (Re(e) ? Oe(k, e) : Oe(e, k)) } } };

function wf(a) { var b = z.j.rc();
    setTimeout(function() { z.j.R(b);
        Sg(a);
        z.j.R(!1) }, z.Ek / 2);
    setTimeout(function() { z.j.R(b);
        a.ob();
        z.j.R(!1) }, z.Ek) };
var M = 8,
    mj = 7.5 * (1 - Math.SQRT1_2) + .5,
    nj = 8.5 * (1 - Math.SQRT1_2) - .5,
    hf = "v 5 c 0,10 -" + M + ",-8 -" + M + ",7.5 s " + M + ",-2.5 " + M + ",7.5",
    oj = "v 6.5 m -" + .97 * M + ",3 q -" + .05 * M + ",10 " + .3 * M + ",9.5 m " + .67 * M + ",-1.9 v 1.4",
    pj = "m " + mj + "," + mj,
    qj = "a 8,8 0 0,0 " + (-nj - .5) + "," + (8 - nj),
    rj = "a 8.5,8.5 0 0,0 " + (8 - nj) + "," + (nj + .5);
N.prototype.Hb = function() { var a = this.height,
        b = this.width,
        c = Lc(this);
    c ? (c = c.Hb(), a += c.height - 4, b = Math.max(b, c.width)) : this.K || this.N || (a += 2); return { height: a, width: b } };
N.prototype.Z = function(a) {
    yg();
    this.P = !0;
    var b = 10;
    this.u && (b = -b);
    for (var c = pf(this), e = 0; e < c.length; e++) { var f = c[e]; if (f.Iq && f.T.isCollapsed()) f.vc.setAttribute("display", "none");
        else { f.vc.setAttribute("display", "block"); var h = f.Wm;
            f.T.u && (b -= h);
            f.vc.setAttribute("transform", "translate(" + b + ",5)");
            He(f);
            b = f.T.u ? b - 10 : b + (h + 10) } }
    var k = b += this.u ? 10 : -10,
        l = this.W;
    c = [];
    c.Nb = k + 20;
    if (this.Y || this.K) c.Nb = Math.max(c.Nb, 40);
    f = e = 0;
    for (var m = h = !1, n = !1, p = void 0, r = bh(this) && !this.isCollapsed(), x = 0, w; w = l[x]; x++)
        if (w.X()) {
            if (r &&
                p && p != z.Qa && w.type != z.Qa) var C = c[c.length - 1];
            else p = w.type, C = [], C.type = r && w.type != z.Qa ? -1 : w.type, C.height = 0, c.push(C);
            C.push(w);
            w.eg = 25;
            w.Tb = r && w.type == z.Wa ? M + 12.5 : 0;
            if (w.connection && w.connection.isConnected()) { var Ja = J(w.connection).Hb();
                w.eg = Math.max(w.eg, Ja.height);
                w.Tb = Math.max(w.Tb, Ja.width) } r || x != l.length - 1 ? !r && w.type == z.Wa && l[x + 1] && l[x + 1].type == z.Qa && w.eg-- : w.eg--;
            C.height = Math.max(C.height, w.eg);
            w.Md = 0;
            1 == c.length && (w.Md += this.u ? -k : k);
            Ja = !1;
            for (var Uc = 0, Va; Va = w.Ja[Uc]; Uc++) {
                0 != Uc && (w.Md +=
                    10);
                var Cd = Va.af();
                Va.Tb = Cd.width;
                Va.rm = Ja && Va.vg ? 10 : 0;
                w.Md += Va.Tb + Va.rm;
                C.height = Math.max(C.height, Cd.height);
                Ja = Va.vg
            } - 1 != C.type && (C.type == z.Qa ? (m = !0, f = Math.max(f, w.Md)) : (C.type == z.Wa ? h = !0 : C.type == z.Le && (n = !0), e = Math.max(e, w.Md)))
        } for (k = 0; C = c[k]; k++)
        if (C.st = !1, -1 == C.type)
            for (l = 0; w = C[l]; l++)
                if (w.type == z.Wa) { C.height += 10;
                    C.st = !0; break } c.Fm = 20 + f;
    m && (c.Nb = Math.max(c.Nb, c.Fm + 30));
    h ? c.Nb = Math.max(c.Nb, e + 20 + M) : n && (c.Nb = Math.max(c.Nb, e + 20));
    c.rw = h;
    c.JB = m;
    c.IB = n;
    f = b;
    this.kt = !1;
    this.height = 0;
    this.N ? this.Hp =
        this.Dm = !0 : (this.Hp = this.Dm = !1, this.Y && (b = J(this.Y)) && Lc(b) == this && (this.Dm = !0), Lc(this) && (this.Hp = !0));
    h = [];
    m = [];
    b = [];
    e = [];
    n = c.Nb;
    this.Dm ? (h.push("m 0,0"), b.push("m 0.5,0.5"), this.kt && (h.push("c 30,-15 70,-15 100,0"), b.push(this.u ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (h.push("m 0,8"), b.push(this.u ? pj : "m 0.5,7.5"), h.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.Y && (h.push("H", 15), b.push("H", 15), h.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"),
        ef(this.Y, this.u ? -30 : 30, 0));
    h.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    for (w = n = 0; C = c[w]; w++) {
        p = 10;
        0 == w && (p += this.u ? -f : f);
        b.push("M", c.Nb - .5 + "," + (n + .5));
        if (this.isCollapsed()) k = C[0], r = n, sj(this, k.Ja, p, r), h.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), k = C.height - 20, h.push("v", k), this.u && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", k - .7)), this.width += 15;
        else if (-1 == C.type) {
            for (l = 0; k = C[l]; l++) r = n, C.st && (r += 5), p = sj(this, k.Ja, p, r), k.type != z.Le && (p += k.Tb + 10), k.type == z.Wa && (m.push("M", p -
                10 + "," + (n + 5)), m.push("h", M - 2 - k.Tb), m.push(hf), m.push("v", k.eg + 1 - 20), m.push("h", k.Tb + 2 - M), m.push("z"), this.u ? (e.push("M", p - 10 - 2.5 + M - k.Tb + "," + (n + 5 + .5)), e.push(oj), e.push("v", k.eg - 20 + 2.5), e.push("h", k.Tb - M + 2)) : (e.push("M", p - 10 + .5 + "," + (n + 5 + .5)), e.push("v", k.eg + 1), e.push("h", M - 2 - k.Tb), e.push("M", p - k.Tb - 10 + .9 + "," + (n + 5 + 20 - .7)), e.push("l", .46 * M + ",-2.1")), r = this.u ? -p - M + 10 + k.Tb + 1 : p + M - 10 - k.Tb - 1, x = n + 5 + 1, ef(k.connection, r, x));
            p = Math.max(p, c.Nb);
            this.width = Math.max(this.width, p);
            h.push("H", p);
            b.push("H", p - .5);
            h.push("v", C.height);
            this.u && b.push("v", C.height - 1)
        } else C.type == z.Wa ? (k = C[0], r = n, k.align != z.Fi && (l = c.Nb - k.Md - M - 20, k.align == z.yh ? p += l : k.align == z.Ck && (p += l / 2)), sj(this, k.Ja, p, r), h.push(hf), l = C.height - 20, h.push("v", l), this.u ? (b.push(oj), b.push("v", l + .5)) : (b.push("M", c.Nb - 5 + "," + (n + 20 - .7)), b.push("l", .46 * M + ",-2.1")), r = this.u ? -c.Nb - 1 : c.Nb + 1, ef(k.connection, r, n), k.connection.isConnected() && (this.width = Math.max(this.width, c.Nb + J(k.connection).Hb().width - M + 1))) : C.type == z.Le ? (k = C[0], r = n, k.align != z.Fi && (l =
            c.Nb - k.Md - 20, c.rw && (l -= M), k.align == z.yh ? p += l : k.align == z.Ck && (p += l / 2)), sj(this, k.Ja, p, r), h.push("v", C.height), this.u && b.push("v", C.height - 1)) : C.type == z.Qa && (k = C[0], 0 == w && (h.push("v", 10), this.u && b.push("v", 9), n += 10), r = n, k.align != z.Fi && (l = c.Fm - k.Md - 20, k.align == z.yh ? p += l : k.align == z.Ck && (p += l / 2)), sj(this, k.Ja, p, r), p = c.Fm + 30, h.push("H", p), h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), h.push("v", C.height - 16), h.push("a 8,8 0 0,0 8,8"), h.push("H", c.Nb), this.u ? (b.push("M", p - 30 + nj + "," + (n + nj)), b.push(qj),
            b.push("v", C.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) : (b.push("M", p - 30 + nj + "," + (n + C.height - nj)), b.push(rj)), b.push("H", c.Nb - .5), r = this.u ? -p : p + 1, ef(k.connection, r, n + 1), k.connection.isConnected() && (this.width = Math.max(this.width, c.Fm + J(k.connection).Hb().width)), w == c.length - 1 || c[w + 1].type == z.Qa) && (h.push("v", 10), this.u && b.push("v", 9), n += 10);
        n += C.height
    }
    c.length || (n = 25, h.push("V", n), this.u && b.push("V", n - 1));
    c = n;
    this.height += c + 1;
    this.K && (h.push("H", 30 + (this.u ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), ef(this.K,
        this.u ? -30 : 30, c + 1), this.height += 4);
    this.Hp ? (h.push("H 0"), this.u || b.push("M", "0.5," + (c - .5))) : (h.push("H", 8), h.push("a", "8,8 0 0,1 -8,-8"), this.u || (b.push("M", mj + "," + (c - mj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
    this.N ? (ef(this.N, 0, 0), h.push("V", 20), h.push("c 0,-10 -" + M + ",8 -" + M + ",-7.5 s " + M + ",2.5 " + M + ",-7.5"), this.u ? (b.push("M", -.25 * M + ",8.4"), b.push("l", -.45 * M + ",-2.1")) : (b.push("V", 18.5), b.push("m", -.92 * M + ",-0.5 q " + -.19 * M + ",-5.5 0,-11"), b.push("m", .92 * M + ",1 V 0.5 H 1")), this.width += M) : this.u ||
        (this.Dm ? b.push("V", .5) : b.push("V", 8));
    h.push("z");
    c = h.join(" ") + "\n" + m.join(" ");
    this.Gd.setAttribute("d", c);
    this.nk.setAttribute("d", c);
    c = b.join(" ") + "\n" + e.join(" ");
    this.mg.setAttribute("d", c);
    this.u && (this.Gd.setAttribute("transform", "scale(-1 1)"), this.mg.setAttribute("transform", "scale(-1 1)"), this.nk.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    c = this.la();
    this.Y && df(this.Y, c);
    this.N && df(this.N, c);
    for (b = 0; b < this.W.length; b++)
        if (e = this.W[b].connection) df(e, c), e.isConnected() && ff(e);
    this.K && (df(this.K, c), this.K.isConnected() && ff(this.K));
    !1 !== a && ((a = this.getParent()) ? a.Z(!0) : Af(this.o));
    zg()
};

function sj(a, b, c, e) { e += 5;
    a.u && (c = -c); for (var f = 0, h; h = b[f]; f++) { var k = h.ga();
        k && (a.u ? (c -= h.rm + h.Tb, k.setAttribute("transform", "translate(" + c + "," + e + ")"), h.Tb && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + h.rm) + "," + e + ")"), h.Tb && (c += h.rm + h.Tb + 10))) } return a.u ? -c : c };
z.g = {};

function ij(a, b) { ij.s.constructor.call(this, a, b) } y(ij, ph);
ij.ia = function(a) { var b = z.i.ic(a.text);
    b = new ij(b, a["class"]); "boolean" === typeof a.spellcheck && (b.kk = a.spellcheck); return b };
var tj = null;
d = ij.prototype;
d.Hk = "text";
d.kk = !0;
d.A = function() { z.H.zj(this);
    ij.s.A.call(this) };
d.setValue = function(a) { if (null !== a) { if (this.v) { var b = Ce(this, a);
            null !== b && (a = b) } ph.prototype.setValue.call(this, a) } };
d.vb = function(a) { null !== a && (a = String(a), a !== this.va && (this.v && z.j.isEnabled() && z.j.U(new z.j.Cc(this.v, "field", this.name, this.va, a)), ph.prototype.vb.call(this, a))) };
d.Fd = function(a) { this.m = this.v.o;
    a = a || !1; if (!a && (mb || ob || qb)) uj(this);
    else { z.H.show(this, this.v.u, vj(this)); var b = z.H.ha,
            c = F("INPUT", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.kk); var e = 11 * this.m.scale + "pt";
        b.style.fontSize = e;
        c.style.fontSize = e;
        tj = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.va;
        c.Cs = null;
        wj(this);
        this.bk();
        a || (c.focus(), c.select());
        c.$w = z.O(c, "keydown", this, this.Zw);
        c.ex = z.O(c, "keyup", this, this.Fs);
        c.bx = z.O(c, "keypress", this, this.Fs);
        c.Ks = this.bk.bind(this);
        this.m.Fc(c.Ks) } };

function uj(a) { z.prompt(z.g.CHANGE_VALUE_TITLE, a.va, function(b) { a.v && (b = Ce(a, b));
        a.setValue(b) }) } d.Zw = function(a) { var b = tj;
    13 == a.keyCode ? z.H.Fa() : 27 == a.keyCode ? (b.value = b.defaultValue, z.H.Fa()) : 9 == a.keyCode && (z.H.Fa(), this.v.Np(this, !a.shiftKey), a.preventDefault()) };
d.Fs = function() { var a = tj,
        b = a.value;
    b !== a.Cs ? (a.Cs = b, this.setValue(b), wj(this)) : B && this.v.Z();
    this.bk();
    z.ph(this.v.o) };

function wj(a) { var b = !0,
        c = tj;
    a.v && (b = Ce(a, c.value));
    null === b ? z.i.mb(c, "blocklyInvalidInput") : z.i.Rb(c, "blocklyInvalidInput") } d.bk = function() { var a = z.H.ha,
        b = xh(this);
    a.style.width = b.right - b.left + "px";
    a.style.height = b.bottom - b.top + "px";
    b = new D(this.v.u ? b.right - a.offsetWidth : b.left, b.top);
    b.y += 1;
    lb && z.H.ha.style.top && (--b.x, --b.y);
    B && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px" };

function vj(a) { return function() { var b = tj,
            c = tj,
            e = c.value;
        a.v && (e = Ce(a, e), null === e ? e = c.defaultValue : a.Ko && a.Ko(e));
        a.vb(e);
        a.v.P && a.v.Z();
        z.Da(b.$w);
        z.Da(b.ex);
        z.Da(b.bx);
        a.m.dg(b.Ks);
        tj = null;
        z.j.R(!1);
        b = z.H.ha.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = "" } } rh("field_input", ij);

function xj(a, b) { this.Mp = z.i.B("tspan", {}, null);
    this.Mp.appendChild(document.createTextNode("\u00b0"));
    a = a && !isNaN(a) ? String(a) : "0";
    xj.s.constructor.call(this, a, b) } y(xj, ij);
xj.ia = function(a) { return new xj(a.angle) };
d = xj.prototype;
d.Be = function() { this.Oa ? (this.xa.textContent = vh(this), this.v.u ? this.xa.insertBefore(this.Mp, this.xa.firstChild) : this.xa.appendChild(this.Mp), this.Ak()) : this.sa.width = 0 };
d.Gf = function() { var a = this; return function() { xj.s.Gf.call(a)();
        a.mj = null;
        a.Vi && z.Da(a.Vi);
        a.vs && z.Da(a.vs);
        a.ws && z.Da(a.ws) } };
d.Fd = function() {
    xj.s.Fd.call(this, mb || ob || qb);
    var a = z.H.ha;
    if (a.firstChild) {
        a = z.i.B("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:html": "http://www.w3.org/1999/xhtml", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", height: "100px", width: "100px" }, a);
        var b = z.i.B("circle", { cx: 50, cy: 50, r: 49, "class": "blocklyAngleCircle" }, a);
        this.mj = z.i.B("path", { "class": "blocklyAngleGauge" }, a);
        this.ks = z.i.B("line", { x1: 50, y1: 50, "class": "blocklyAngleLine" }, a);
        for (var c = 0; 360 > c; c += 15) z.i.B("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ? 10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        this.Vi = z.Zb(a, "click", this, z.H.Fa);
        this.vs = z.Zb(b, "mousemove", this, this.jm);
        this.ws = z.Zb(this.mj, "mousemove", this, this.jm);
        this.xk()
    }
};
d.jm = function(a) { var b = this.mj.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = Ce(this, b), tj.value = b, this.setValue(b), wj(this), this.bk()) };
d.vb = function(a) { xj.s.vb.call(this, a);
    this.xa && (this.xk(), this.sa.width = 0) };
d.xk = function() { if (this.mj) { var a = (Number(this.Ib()) + 0) * Math.PI / 180,
            b = ["M ", 50, ",", 50],
            c = 50,
            e = 50; if (!isNaN(a)) { var f = 0 * Math.PI / 180,
                h = 49 * Math.cos(f),
                k = -49 * Math.sin(f);
            c += 49 * Math.cos(a);
            e -= 49 * Math.sin(a);
            b.push(" l ", h, ",", k, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((a - f) / Math.PI) % 2), " ", Number(!1), " ", c, ",", e, " z") } this.mj.setAttribute("d", b.join(""));
        this.ks.setAttribute("x2", c);
        this.ks.setAttribute("y2", e) } };
d.Uk = function(a) { if (null === a) return null;
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    a %= 360;
    0 > a && (a += 360);
    360 < a && (a -= 360); return String(a) };
rh("field_angle", xj);

function yj(a, b) { yj.s.constructor.call(this, "", b);
    this.setValue(a) } y(yj, ph);
yj.ia = function(a) { return new yj(a.checked ? "TRUE" : "FALSE") };
d = yj.prototype;
d.Hk = "default";
d.L = function() { this.Ua || (yj.s.L.call(this), this.Tk = z.i.B("text", { "class": "blocklyText blocklyCheckbox", x: -3, y: 14 }, this.Ua), this.Tk.appendChild(document.createTextNode("\u2713")), this.Tk.style.display = this.Ha ? "block" : "none") };
d.getValue = function() { return String(this.Ha).toUpperCase() };
d.setValue = function(a) { a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
    this.Ha !== a && (this.v && z.j.isEnabled() && z.j.U(new z.j.Cc(this.v, "field", this.name, this.Ha, a)), this.Ha = a, this.Tk && (this.Tk.style.display = a ? "block" : "none")) };
d.Fd = function() { var a = !this.Ha;
    this.v && (a = Ce(this, a));
    null !== a && this.setValue(String(a).toUpperCase()) };
rh("field_checkbox", yj);
var zj = {
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

function Aj(a) { var b = {};
    a = String(a); var c = "#" == a.charAt(0) ? a : "#" + a; if (Bj.test(c)) return b.eo = Cj(c), b.type = "hex", b;
    a: { var e = a.match(Dj); if (e) { c = Number(e[1]); var f = Number(e[2]);
            e = Number(e[3]); if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) { c = [c, f, e]; break a } } c = [] }
    if (c.length) return b.eo = lj(c), b.type = "rgb", b; if (zj && (c = zj[a.toLowerCase()])) return b.eo = c, b.type = "named", b; throw Error(a + " is not a valid color string"); }
var Ej = /#(.)(.)(.)/;

function Cj(a) { if (!Bj.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Ej, "#$1$1$2$2$3$3")); return a.toLowerCase() }

function jj(a) { a = Cj(a); return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)] }

function lj(a) { var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a); if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = Fj(b.toString(16));
    c = Fj(c.toString(16));
    a = Fj(a.toString(16)); return "#" + b + c + a }
var Bj = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Dj = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function Fj(a) { return 1 == a.length ? "0" + a : a }

function kj(a, b, c) { c = rc(c, 0, 1); return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])] };
var Gj = "StopIteration" in g ? g.StopIteration : { message: "StopIteration", stack: "" };

function Hj() {} Hj.prototype.next = function() { throw Gj; };
Hj.prototype.mq = function() { return this };

function Ij(a) { if (a instanceof Hj) return a; if ("function" == typeof a.mq) return a.mq(); if (fa(a)) { var b = 0,
            c = new Hj;
        c.next = function() { for (;;) { if (b >= a.length) throw Gj; if (b in a) return a[b++];
                b++ } }; return c } throw Error("Not implemented"); }

function Jj(a) { try { return Ij(a).next() } catch (b) { if (b != Gj) throw b; return null } };

function Kj(a, b, c, e, f) { this.cd = !!b;
    this.node = null;
    this.mf = 0;
    this.nt = !1;
    this.Nq = !c;
    a && this.setPosition(a, e);
    this.depth = void 0 != f ? f : this.mf || 0;
    this.cd && (this.depth *= -1) } y(Kj, Hj);
Kj.prototype.setPosition = function(a, b, c) { if (this.node = a) this.mf = t(b) ? b : 1 != this.node.nodeType ? 0 : this.cd ? -1 : 1;
    t(c) && (this.depth = c) };
Kj.prototype.clone = function() { return new Kj(this.node, this.cd, !this.Nq, this.mf, this.depth) };
Kj.prototype.next = function() { if (this.nt) { if (!this.node || this.Nq && 0 == this.depth) throw Gj; var a = this.node; var b = this.cd ? -1 : 1; if (this.mf == b) { var c = this.cd ? a.lastChild : a.firstChild;
            c ? this.setPosition(c) : this.setPosition(a, -1 * b) } else(c = this.cd ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
        this.depth += this.mf * (this.cd ? -1 : 1) } else this.nt = !0;
    a = this.node; if (!this.node) throw Gj; return a };
Kj.prototype.splice = function(a) { var b = this.node,
        c = this.cd ? 1 : -1;
    this.mf == c && (this.mf = -1 * c, this.depth += this.mf * (this.cd ? -1 : 1));
    this.cd = !this.cd;
    Kj.prototype.next.call(this);
    this.cd = !this.cd;
    c = fa(arguments[0]) ? arguments[0] : arguments; for (var e = c.length - 1; 0 <= e; e--) fe(c[e], b);
    G(b) };

function Lj(a, b, c, e) { Kj.call(this, a, b, c, null, e) } y(Lj, Kj);
Lj.prototype.next = function() { do Lj.s.next.call(this); while (-1 == this.mf); return this.node };

function Mj() {} y(Mj, wi);
da(Mj);
var Nj = 0;
Mj.prototype.V = function(a) { var b = this.nj(a);
    a = a.pc().V("DIV", b, Oj(this, a.Ic(), a.af(), a.pc()));
    Zh(a, "grid"); return a };

function Oj(a, b, c, e) { for (var f = [], h = 0, k = 0; h < c.height; h++) { for (var l = [], m = 0; m < c.width; m++) { var n = b && b[k++];
            l.push(Pj(a, n, e)) } f.push(Qj(a, l, e)) } return a.Pq(f, e) } Mj.prototype.Pq = function(a, b) { a = b.V("TABLE", this.Ka() + "-table", b.V("TBODY", this.Ka() + "-body", a));
    a.cellSpacing = "0";
    a.cellPadding = "0"; return a };

function Qj(a, b, c) { a = c.V("TR", a.Ka() + "-row", b);
    Zh(a, "row"); return a }

function Pj(a, b, c) { a = c.V("TD", { "class": a.Ka() + "-cell", id: a.Ka() + "-cell-" + Nj++ }, b);
    Zh(a, "gridcell");
    S(a, "selected", !1); if (!me(a) && !$h(a, "label")) { var e;
        b = new Lj(a); for (c = ""; !c && (e = Jj(b));) 1 == e.nodeType && (c = $h(e, "label") || e.title);
        (e = c) && S(a, "label", e) } return a }
Mj.prototype.Cd = function(a, b) { if (a) { var c = Wd(this.Ka() + "-body", a)[0]; if (c) { var e = 0;
            ra(c.rows, function(a) { ra(a.cells, function(a) { ee(a); if (b) { var c = b[e++];
                        c && a.appendChild(c) } }) }); if (e < b.length) { for (var f = [], h = Td(a), k = c.rows[0].cells.length; e < b.length;) { var l = b[e++];
                    f.push(Pj(this, l, h));
                    f.length == k && (l = Qj(this, f, h), c.appendChild(l), f.length = 0) } if (0 < f.length) { for (; f.length < k;) f.push(Pj(this, "", h));
                    l = Qj(this, f, h);
                    c.appendChild(l) } } } mh(a, !0, lb) } };

function Rj(a, b, c) { for (b = b.F(); c && 1 == c.nodeType && c != b;) { if ("TD" == c.tagName && mi(c, a.Ka() + "-cell")) return c.firstChild;
        c = c.parentNode } return null } Mj.prototype.Ka = function() { return "goog-palette" };

function Sj(a) { ng.call(this);
    this.ii = [];
    Tj(this, a) } y(Sj, ng);
d = Sj.prototype;
d.ub = null;
d.op = null;
d.Hr = function(a) { return this.ii[a] || null };

function Tj(a, b) { b && (ra(b, function(a) { this.ck(a, !1) }, a), Aa(a.ii, b)) } d.removeItem = function(a) { a && xa(this.ii, a) && a == this.ub && (this.ub = null, this.dispatchEvent("select")) };
d.se = function() { return this.ub };
d.dd = function(a) { a != this.ub && (this.ck(this.ub, !1), this.ub = a, this.ck(a, !0));
    this.dispatchEvent("select") };
d.qj = function() { var a = this.ub; return a ? qa(this.ii, a) : -1 };
d.hk = function(a) { this.dd(this.Hr(a)) };
d.clear = function() { var a = this.ii; if (!u(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.ub = null };
d.Ta = function() { Sj.s.Ta.call(this);
    delete this.ii;
    this.ub = null };
d.ck = function(a, b) { a && ("function" == typeof this.op ? this.op(a, b) : "function" == typeof a.wp && a.wp(b)) };

function Uj(a, b, c) { T.call(this, a, b || Mj.re(), c);
    this.jn &= -89;
    this.dj = new Vj;
    this.dj.Am(this);
    this.to = -1 } y(Uj, T);
d = Uj.prototype;
d.sa = null;
d.ua = -1;
d.Vb = null;
d.Ta = function() { Uj.s.Ta.call(this);
    this.Vb && (this.Vb.A(), this.Vb = null);
    this.sa = null;
    this.dj.A() };
d.xm = function(a) { Uj.s.xm.call(this, a);
    Wj(this);
    this.Vb ? (this.Vb.clear(), Tj(this.Vb, a)) : (this.Vb = new Sj(a), a = na(this.ck, this), this.Vb.op = a, Rh(this).na(this.Vb, "select", this.kw));
    this.ua = -1 };
d.ul = function() { return "" };
d.wj = function(a) { Uj.s.wj.call(this, a); var b = Rj(this.ma, this, a.target);
    b && a.relatedTarget && ge(b, a.relatedTarget) || b != Xj(this) && Yj(this, b) };
d.bf = function(a) { Uj.s.bf.call(this, a);
    this.Ha & 4 && (a = Rj(this.ma, this, a.target), a != Xj(this) && Yj(this, a)) };
d.ag = function(a) { var b = Xj(this); return b ? (a && (this.se() ? "mouseup" != a.type || Rj(this.ma, this, a.target) : 1) && this.dd(b), Uj.s.ag.call(this, a)) : !1 };
d.Ad = function(a) {
    var b = this.Ic();
    b = b ? b.length : 0;
    var c = this.sa.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.keyCode || 32 == a.keyCode) return this.ag(a);
    if (36 == a.keyCode) return this.jc(0), !0;
    if (35 == a.keyCode) return this.jc(b - 1), !0;
    var e = 0 > this.ua ? this.qj() : this.ua;
    switch (a.keyCode) {
        case 37:
            if (-1 == e || 0 == e) e = b;
            this.jc(e - 1);
            a.preventDefault();
            return !0;
        case 39:
            return e == b - 1 && (e = -1), this.jc(e + 1), a.preventDefault(), !0;
        case 38:
            -1 == e && (e = b + c - 1);
            if (e >= c) return this.jc(e - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 ==
                e && (e = -c), e < b - c) return this.jc(e + c), a.preventDefault(), !0
    }
    return !1
};
d.kw = function() {};
d.af = function() { return this.sa };
d.Bm = function(a) { if (this.F()) throw Error("Component already rendered");
    this.sa = t(a) ? new Sd(a, void 0) : a;
    Wj(this) };

function Xj(a) { var b = a.Ic(); return b && b[a.ua] } d.jc = function(a) { a != this.ua && (Zj(this, this.ua, !1), this.to = this.ua, this.ua = a, Zj(this, a, !0), this.dispatchEvent("a")) };

function Yj(a, b) { var c = a.Ic();
    a.jc(c && b ? qa(c, b) : -1) } d.qj = function() { return this.Vb ? this.Vb.qj() : -1 };
d.se = function() { return this.Vb ? this.Vb.se() : null };
d.hk = function(a) { this.Vb && this.Vb.hk(a) };
d.dd = function(a) { this.Vb && this.Vb.dd(a) };

function Zj(a, b, c) { if (a.F()) { var e = a.Ic(); if (e && 0 <= b && b < e.length) { var f = (f = Xj(a)) ? f.parentNode : null;
            a.dj.F() != f && (a.dj.S = f);
            f = a.dj;
            f.Wb(c);!!(f.Ha & 2) == c && (f = a.ma, b = e[b]) && (b = b ? b.parentNode : null, e = f.Ka() + "-cell-hover", c ? ni(b, e) : pi(b, e), c ? S(a.S, "activedescendant", b.id) : b.id == $h(a.S, "activedescendant") && a.S.removeAttribute("aria-activedescendant")) } } }
d.Wb = function(a) { a && -1 == this.ua ? this.jc(-1 < this.to ? this.to : 0) : a || this.jc(-1);
    Uj.s.Wb.call(this, a) };
d.ck = function(a, b) { if (this.F() && a) { a = a.parentNode; var c = this.ma.Ka() + "-cell-selected";
        b ? ni(a, c) : pi(a, c);
        S(a, "selected", b) } };

function Wj(a) { var b = a.Ic(); if (b)
        if (a.sa && a.sa.width) { if (b = Math.ceil(b.length / a.sa.width), !t(a.sa.height) || a.sa.height < b) a.sa.height = b } else b = Math.ceil(Math.sqrt(b.length)), a.sa = new Sd(b, b);
    else a.sa = new Sd(0, 0) }

function Vj() { T.call(this, null);
    this.nh |= 2 } y(Vj, T);

function ak(a, b, c) { this.Xk = a || [];
    Uj.call(this, null, b || Mj.re(), c);
    this.wm(this.Xk) } y(ak, Uj);
d = ak.prototype;
d.hm = null;
d.Zl = null;
d.wm = function(a) { this.Xk = a;
    this.hm = this.Zl = null;
    this.Cd(bk(this)) };
d.Wn = function() { var a = this.se(); if (a) { var b = a.style[Xa()]; if ("undefined" !== typeof b) a = b;
        else { b = a.style; var c = ch["background-color"]; if (!c) { var e = Xa();
                c = e;
                void 0 === a.style[e] && (e = (B ? "Webkit" : lb ? "Moz" : A ? "ms" : jb ? "O" : null) + Ya(e), void 0 !== a.style[e] && (c = e));
                ch["background-color"] = c } a = b[c] || "" } return ck(a) } return null };
d.xp = function(a) { a = ck(a);
    this.hm || (this.hm = ta(this.Xk, function(a) { return ck(a) }));
    this.hk(a ? qa(this.hm, a) : -1) };

function bk(a) { return ta(a.Xk, function(a, c) { var b = this.pc().V("DIV", { "class": this.ma.Ka() + "-colorswatch", style: "background-color:" + a });
        b.title = this.Zl && this.Zl[c] ? this.Zl[c] : "#" == a.charAt(0) ? "RGB (" + jj(a).join(", ") + ")" : a; return b }, a) }

function ck(a) { if (a) try { return Aj(a).eo } catch (b) {}
    return null };

function dk(a, b) { Oh.call(this, a);
    this.Ra = b || null;
    Rh(this).na(this, "action", this.Vw) } y(dk, Oh);
d = dk.prototype;
d.Jg = !0;
d.wm = function(a) { this.Ra ? this.Ra.wm(a) : ek(this, a) };
d.Bm = function(a) { this.Ra || ek(this, []);
    this.Ra.Bm(a) };
d.af = function() { return this.Ra ? this.Ra.af() : null };
d.qj = function() { return this.Ra ? this.Ra.qj() : -1 };
d.hk = function(a) { this.Ra && this.Ra.hk(a) };
d.Wn = function() { return this.Ra ? this.Ra.Wn() : null };
d.xp = function(a) { this.Ra && this.Ra.xp(a) };
d.df = function() { return this.Jg };
d.kf = function(a) { this.Jg = a;
    this.Ra && this.Ra.zc(32, a) };
d.Gb = function() { dk.s.Gb.call(this);
    this.Ra && this.Ra.Z(this.F());
    this.F().unselectable = "on" };
d.Ta = function() { dk.s.Ta.call(this);
    this.Ra && (this.Ra.A(), this.Ra = null) };
d.focus = function() { this.Ra && this.Ra.F().focus() };
d.Vw = function(a) { a.stopPropagation();
    this.dispatchEvent("change") };

function ek(a, b) { b = new ak(b, null, a.pc());
    b.Bm(5);
    b.zc(32, a.Jg);
    a.Qi(b);
    a.Ra = b;
    a.za && a.Ra.Z(a.F()) }
var fk = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function gk(a, b) { gk.s.constructor.call(this, a, b);
    this.vb("\u00a0\u00a0\u00a0") }
var hk;
y(gk, ph);
gk.ia = function(a) { return new gk(a.colour) };
d = gk.prototype;
d.cv = null;
d.Jq = 0;
d.L = function() { gk.s.L.call(this);
    this.td.style.fillOpacity = 1;
    this.setValue(this.getValue()) };
d.Hk = "default";
d.A = function() { z.H.zj(this);
    gk.s.A.call(this) };
d.getValue = function() { return this.ge };
d.setValue = function(a) { this.v && z.j.isEnabled() && this.ge != a && z.j.U(new z.j.Cc(this.v, "field", this.name, this.ge, a));
    this.ge = a;
    this.td && (this.td.style.fill = a) };
d.Ib = function() { var a = this.ge,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]); return a };
d.setColumns = function(a) { this.Jq = a; return this };
d.Fd = function() { z.H.show(this, this.v.u, ik); var a = z.i.$n(),
        b = xh(this),
        c = this.bj(),
        e = ih(c.F());
    z.H.Uo(a, b, e, this.v.u); var f = this;
    hk = dc(c, "change", function(a) { a = a.target.Wn() || "#000000";
        z.H.Fa();
        f.v && (a = Ce(f, a));
        null !== a && f.setValue(a) }) };
d.bj = function() { var a = new dk;
    a.Bm(this.Jq || 7);
    a.wm(this.cv || fk);
    a.Z(z.H.ha);
    a.xp(this.getValue()); return a };

function ik() { hk && mc(hk);
    z.j.R(!1) } rh("field_colour", gk);

function Fh(a, b) {
    v(a) || jk(a);
    this.Tg = a;
    this.Lp = this.Wo = null;
    a = this.Tg;
    if (u(a)) {
        for (var c = !1, e = 0; e < a.length; e++) { var f = a[e][0]; "string" == typeof f ? a[e][0] = z.i.ic(f) : (null != f.alt && (a[e][0].alt = z.i.ic(f.alt)), c = !0) }
        if (!(c || 2 > a.length)) {
            f = [];
            for (e = 0; e < a.length; e++) f.push(a[e][0]);
            var h = z.i.Ap(f);
            e = z.i.fv(f, h);
            c = z.i.gv(f, h);
            if ((e || c) && !(h <= e + c)) {
                e && (this.Wo = f[0].substring(0, e - 1));
                c && (this.Lp = f[0].substr(1 - c));
                f = [];
                for (h = 0; h < a.length; h++) { var k = a[h][0],
                        l = a[h][1];
                    k = k.substring(e, k.length - c);
                    f[h] = [k, l] } this.Tg =
                    f
            }
        }
    }
    a = this.getOptions()[0];
    Fh.s.constructor.call(this, a[1], b)
}
y(Fh, ph);
Fh.ia = function(a) { return new Fh(a.options) };
var kk = ob ? "\u25bc" : "\u25be";
d = Fh.prototype;
d.Hk = "default";
d.Ia = "";
d.sb = null;
d.ve = null;
d.L = function() { this.Ua || (this.zf = z.i.B("tspan", {}, null), this.zf.appendChild(document.createTextNode(this.v.u ? kk + " " : " " + kk)), Fh.s.L.call(this)) };
d.Fd = function() { z.H.show(this, this.v.u, null); var a = new hj;
    a.lf(this.v.u); for (var b = this.getOptions(), c = 0; c < b.length; c++) { var e = b[c][0],
            f = b[c][1]; if ("object" == typeof e) { var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h } e = new dj(e);
        e.lf(this.v.u);
        e.setValue(f);
        e.sp(!0);
        a.Qi(e, !0);
        Gi(e, f == this.Ia) } lk(this, a);
    mk(a);
    nk(a);
    b = z.i.$n();
    c = xh(this);
    this.v.u ? c.right += 25 : c.left -= 25;
    this.bj(a);
    f = z.i.Ci.af(a);
    300 < f.height && (f.height = 300);
    this.v.u && z.i.Ci.oq(b, c, f);
    z.H.Uo(b, c, f, this.v.u);
    a.F().focus() };

function lk(a, b) { dc(b, "action", function(b) {
        (b = b.target) && a.Gs(b);
        z.H.zj(a);
        z.j.R(!1) }) }

function mk(a) { Rh(a).na(a.F(), "touchstart", function(a) { Ri(this, a.target).bf(a) }) }

function nk(a) { Rh(a).na(a.F(), "touchend", function(a) { Ri(this, a.target).ag(a) }) } d.bj = function(a) { a.Z(z.H.ha);
    z.i.mb(a.F(), "blocklyDropdownMenu");
    a.Ok = !0;
    a.kf(!0) };
d.Gs = function(a) { a = a.getValue();
    this.v && (a = Ce(this, a));
    null !== a && this.setValue(a) };
d.getOptions = function() { if (v(this.Tg)) { var a = this.Tg.call(this);
        jk(a); return a } return this.Tg };
d.getValue = function() { return this.Ia };
d.setValue = function(a) { if (null !== a && a !== this.Ia) { this.v && z.j.isEnabled() && z.j.U(new z.j.Cc(this.v, "field", this.name, this.Ia, a));
        this.Ia = a; for (var b = this.getOptions(), c = 0; c < b.length; c++)
            if (b[c][1] == a) { a = b[c][0]; "object" == typeof a ? (this.ve = a, this.va = a.alt) : (this.ve = null, this.va = a);
                this.lj(); return } this.va = a;
        this.lj() } };
d.Be = function() {
    if (this.Oa) {
        this.v && this.zf && (this.zf.style.fill = this.v.ge);
        ee(this.xa);
        G(this.sb);
        this.sb = null;
        if (this.ve) {
            this.sb = z.i.B("image", { y: 5, height: this.ve.height + "px", width: this.ve.width + "px" }, this.Ua);
            this.sb.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.ve.src);
            this.xa.appendChild(this.zf);
            var a = wh(this.zf);
            this.sa.height = Number(this.ve.height) + 19;
            this.sa.width = Number(this.ve.width) + a;
            this.v.u ? (this.sb.setAttribute("x", a), this.xa.setAttribute("x", -1)) : (this.xa.setAttribute("text-anchor",
                "end"), this.xa.setAttribute("x", this.sa.width + 1))
        } else a = document.createTextNode(vh(this)), this.xa.appendChild(a), this.v.u ? this.xa.insertBefore(this.zf, this.xa.firstChild) : this.xa.appendChild(this.zf), this.xa.setAttribute("text-anchor", "start"), this.xa.setAttribute("x", 0), this.sa.height = 25, this.sa.width = wh(this.xa);
        this.td.setAttribute("height", this.sa.height - 9);
        this.td.setAttribute("width", this.sa.width + 10)
    } else this.sa.width = 0
};
d.Ak = function() { if (this.ve && (A || kb)) { var a = wh(this.zf);
        a = Number(this.ve.width) + a + 10;
        this.td && this.td.setAttribute("width", a);
        this.sa.width = a } else ph.prototype.Ak.call(this) };
d.A = function() { z.H.zj(this);
    Fh.s.A.call(this) };

function jk(a) {
    if (!u(a)) throw "FieldDropdown options must be an array.";
    for (var b = !1, c = 0; c < a.length; ++c) {
        var e = a[c];
        u(a) ? q(e[1]) ? q(e[0]) || q(e[0].src) || (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must have a string label or image description. Found" + e[0] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must be an array. Found: ",
            e))
    }
    if (b) throw "Found invalid FieldDropdown options.";
}
rh("field_dropdown", Fh);

function ok(a, b, c, e, f) { this.v = null;
    this.Ca = Number(c);
    this.ka = Number(b);
    this.sa = new Sd(this.ka, this.Ca + 10);
    this.va = e || "";
    this.setValue(a); "function" == typeof f && (this.rn = f) } y(ok, ph);
ok.ia = function(a) { var b = z.i.ic(a.src),
        c = Number(z.i.ic(a.width)),
        e = Number(z.i.ic(a.height));
    a = z.i.ic(a.alt); return new ok(b, c, e, a) };
d = ok.prototype;
d.vg = !1;
d.L = function() { this.Ua || (this.Ua = z.i.B("g", {}, null), this.Oa || (this.Ua.style.display = "none"), this.sb = z.i.B("image", { height: this.Ca + "px", width: this.ka + "px" }, this.Ua), this.setValue(this.gt), this.v.ga().appendChild(this.Ua), this.La(this.v), z.C.Cg(this.sb), this.rn && (this.dm = z.O(this.Ua, "mousedown", this, this.gf))) };
d.A = function() { G(this.Ua);
    this.sb = this.Ua = null };
d.La = function(a) { this.sb.gd = a };
d.getValue = function() { return this.gt };
d.setValue = function(a) { null !== a && (this.gt = a, this.sb && this.sb.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a || "")) };
d.vb = function(a) { null !== a && (this.va = a) };
d.Be = function() {};
d.lj = function() {};
d.Ak = function() {};
d.Fd = function() { this.rn && this.rn(this) };
rh("field_image", ok);

function pk(a, b, c, e, f) { a = a && !isNaN(a) ? String(a) : "0";
    pk.s.constructor.call(this, a, f);
    a = parseFloat(e);
    this.Vo = isNaN(a) ? 0 : a;
    b = parseFloat(b);
    this.Nw = isNaN(b) ? -Infinity : b;
    c = parseFloat(c);
    this.Mw = isNaN(c) ? Infinity : c;
    this.setValue(Ce(this, this.getValue())) } y(pk, ij);
pk.ia = function(a) { return new pk(a.value, a.min, a.max, a.precision) };
pk.prototype.Uk = function(a) { if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    this.Vo && isFinite(a) && (a = Math.round(a / this.Vo) * this.Vo);
    a = rc(a, this.Nw, this.Mw); return String(a) };
rh("field_number", pk);

function qk(a, b, c, e) { this.Tg = rk;
    this.sa = new Sd(0, 25);
    this.sh = b;
    this.wv = a || "";
    a = e || ""; if (null == c || void 0 == c) c = null;
    else if (Array.isArray(c)) { b = !1; for (e = 0; e < c.length; e++) c[e] == a && (b = !0); if (!b) throw Error("Invalid default type '" + a + "' in the definition of a FieldVariable"); } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    this.vv = a;
    this.Rx = c;
    this.Ia = null } y(qk, Fh);
qk.ia = function(a) { var b = z.i.ic(a.variable); return new qk(b, null, a.variableTypes, a.defaultType) };
d = qk.prototype;
d.L = function() { this.Ua || (qk.s.L.call(this), this.Pg()) };
d.Pg = function() { if (!this.Zd) { this.m = this.v.o; var a = z.G.Dl(this.m, null, this.wv, this.vv);
        z.j.disable(); try { this.setValue(a.$()) } finally { z.j.enable() } } };
d.A = function() { qk.s.A.call(this);
    this.ra = this.m = null };
d.zp = function(a) { qk.s.zp.call(this, a) };
d.getValue = function() { return this.Zd ? this.Zd.$() : null };
d.Ib = function() { return this.Zd ? this.Zd.name : "" };
d.Jc = function() { return this.Zd };
d.setValue = function(a) { var b = z.G.Jc(this.v.o, a); if (!b) throw Error("Variable id doesn't point to a real variable!  ID was " + a); var c = b.type,
        e;
    a: if (e = sk(this)) { for (var f = 0; f < e.length; f++)
            if (c == e[f]) { e = !0; break a } e = !1 } else e = !0; if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
    this.v && z.j.isEnabled() && (c = this.Zd ? this.Zd.$() : null, z.j.U(new z.j.Cc(this.v, "field", this.name, c, a)));
    this.Zd = b;
    this.Ia = a;
    this.vb(b.name) };

function sk(a) { var b = a.Rx; if (null === b && a.v) return a.v.o.Xn();
    b = b || [""]; if (0 == b.length) throw a = a.Ib(), Error("'variableTypes' of field variable " + a + " was an empty list"); return b }

function rk() { if (!this.Zd) throw Error("Tried to call dropdownCreate on a variable field with no variable selected."); var a = this.Ib(),
        b = null;
    this.v && (b = this.v.o); var c = []; if (b)
        for (var e = sk(this), f = 0; f < e.length; f++) c = c.concat(b.sj(e[f]));
    c.sort(sg);
    b = []; for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].$()];
    b.push([z.g.RENAME_VARIABLE, z.hq]);
    z.g.DELETE_VARIABLE && b.push([z.g.DELETE_VARIABLE.replace("%1", a), z.$p]); return b }
d.Gs = function(a) { a = a.getValue(); if (this.v && this.v.o) { var b = this.v.o; if (a == z.hq) { z.G.ep(b, this.Zd); return } if (a == z.$p) { b.Ff(this.Zd.$()); return } } this.setValue(a) };
d.bh = function() { return !0 };
rh("field_variable", qk);

function Ch() { this.Qt = new RegExp(this.pd, "g") } d = Ch.prototype;
d.Jk = null;
d.Ih = null;
d.Me = "  ";
d.Ht = 60;
d.Nk = [];

function tk() { var a = z.h,
        b = O;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = z.Yh()); var c = [];
    a.L(b);
    b = cd(b, !0); for (var e = 0, f; f = b[e]; e++) { var h = uk(a, f);
        u(h) && (h = h[0]);
        h && (f.N && (h = a.at(h)), c.push(h)) } c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n"); return c = c.replace(/[ \t]+\n/g, "\n") }

function vk(a, b) { return b + a.replace(/(?!\n$)\n/g, "\n" + b) }

function uk(a, b) { if (!b) return ""; if (b.disabled) return uk(a, Lc(b)); var c = a[b.type].call(b, b); if (u(c)) return [a.vm(b, c[0]), c[1]]; if (q(c)) { var e = b.id.replace(/\$/g, "$$$$");
        a.Ih && (c = a.Ih.replace(/%1/g, "'" + e + "'") + c); return a.vm(b, c) } if (null === c) return "" }

function U(a, b, c) { var e = z.h;
    a = Jh(a, b); if (!a) return "";
    b = uk(e, a); if ("" === b) return "";
    a = b[0];
    b = b[1]; if (!a) return ""; var f = !1,
        h = Math.floor(c),
        k = Math.floor(b); if (h <= k && (h != k || 0 != h && 99 != h))
        for (f = !0, h = 0; h < e.Nk.length; h++)
            if (e.Nk[h][0] == c && e.Nk[h][1] == b) { f = !1; break } f && (a = "(" + a + ")"); return a }

function wk(a, b) { var c = z.h;
    a = Jh(a, b);
    (a = uk(c, a)) && (a = vk(a, c.Me)); return a }

function xk(a, b) { var c = z.h;
    b = b.replace(/\$/g, "$$$$");
    c.Jk && (a = c.Jk.replace(/%1/g, "'" + b + "'") + a);
    c.Ih && (a += vk(c.Ih.replace(/%1/g, "'" + b + "'"), c.Me)); return a } d.Vm = "";

function yk(a) { var b = z.h;
    b.Vm += a + "," } d.pd = "{leCUI8hutHZI4480Dc}";

function zk(a, b) { var c = z.h; if (!c.Df[a]) { var e = Ak(c.Va, a, z.qa.Xa);
        c.Qn[a] = e;
        b = b.join("\n").replace(c.Qt, e); for (var f; f != b;) f = b, b = b.replace(/^(( {2})*) {2}/gm, "$1\x00");
        b = b.replace(/\0/g, c.Me);
        c.Df[a] = b } return c.Qn[a] } d.L = function() {};
d.vm = function(a, b) { return b };
d.finish = function(a) { return a };
d.at = function(a) { return a };

function Bk() { var a = z.h.Vm;
    this.wt = "";
    this.Ys = Object.create(null); if (a) { a = a.split(","); for (var b = 0; b < a.length; b++) this.Ys[a[b]] = !0 } this.reset() } Bk.prototype.reset = function() { this.vd = Object.create(null);
    this.gr = Object.create(null);
    this.ra = null };
Bk.prototype.getName = function(a, b) {
    if (b == z.G.Xa) { var c = a;
        this.ra ? c = (c = this.ra.Nd(c)) ? c.name : null : (console.log("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"), c = null);
        c && (a = c) } c = a.toLowerCase() + "_" + b;
    var e = b == z.G.Xa || "DEVELOPER_VARIABLE" == b ? this.wt : "";
    if (c in this.vd) return e + this.vd[c];
    a = Ak(this, a, b);
    this.vd[c] =
        a.substr(e.length);
    return a
};

function Ak(a, b, c) { b ? (b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b)) : b = "unnamed"; for (var e = ""; a.gr[b + e] || b + e in a.Ys;) e = e ? e + 1 : 2;
    b += e;
    a.gr[b] = !0; return (c == z.G.Xa || "DEVELOPER_VARIABLE" == c ? a.wt : "") + b }

function Tc(a, b) { return a.toLowerCase() == b.toLowerCase() };
z.qa = {};
z.qa.Xa = z.gq;
z.qa.Iu = function(a) { a = Qc(a); for (var b = [], c = [], e = 0; e < a.length; e++)
        if (a[e].$e) { var f = a[e].$e();
            f && (f[2] ? b.push(f) : c.push(f)) } c.sort(z.qa.Ss);
    b.sort(z.qa.Ss); return [c, b] };
z.qa.Ss = function(a, b) { return a[0].toLowerCase().localeCompare(b[0].toLowerCase()) };
z.qa.Pv = function(a, b) { if (b.tb) return a; for (; !z.qa.yw(a, b.o, b);) { var c = a.match(/^(.*?)(\d+)$/);
        a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2" } return a };
z.qa.yw = function(a, b, c) { return !z.qa.Aw(a, b, c) };
z.qa.Aw = function(a, b, c) { b = Qc(b); for (var e = 0; e < b.length; e++)
        if (b[e] != c && b[e].$e) { var f = b[e].$e(); if (Tc(f[0], a)) return !0 } return !1 };
z.qa.cp = function(a) { a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""); var b = z.qa.Pv(a, this.v),
        c = this.va; if (c != a && c != b) { a = Qc(this.v.o); for (var e = 0; e < a.length; e++) a[e].$j && a[e].$j(c, b) } return b };
z.qa.Hf = function(a) {
    function b(a, b) { for (var e = 0; e < a.length; e++) { var f = a[e][0],
                h = a[e][1],
                k = F("block");
            k.setAttribute("type", b);
            k.setAttribute("gap", 16); var r = F("mutation");
            r.setAttribute("name", f);
            k.appendChild(r); for (f = 0; f < h.length; f++) { var x = F("arg");
                x.setAttribute("name", h[f]);
                r.appendChild(x) } c.push(k) } }
    var c = [];
    if (z.J.procedures_defnoreturn) {
        var e = F("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap", 16);
        var f = F("field", null, z.g.PROCEDURES_DEFNORETURN_PROCEDURE);
        f.setAttribute("name",
            "NAME");
        e.appendChild(f);
        c.push(e)
    }
    z.J.procedures_defreturn && (e = F("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = F("field", null, z.g.PROCEDURES_DEFRETURN_PROCEDURE), f.setAttribute("name", "NAME"), e.appendChild(f), c.push(e));
    z.J.procedures_ifreturn && (e = F("block"), e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), c.push(e));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = z.qa.Iu(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};
z.qa.Uv = function(a, b) { var c = [];
    b = Qc(b); for (var e = 0; e < b.length; e++)
        if (b[e].yd) { var f = b[e].yd();
            f && Tc(f, a) && c.push(b[e]) } return c };
z.qa.Do = function(a) { var b = z.j.hc,
        c = a.$e()[0],
        e = a.Ga(!0);
    a = z.qa.Uv(c, a.o);
    c = 0; for (var f; f = a[c]; c++) { var h = f.Ga();
        h = h && z.D.wd(h);
        f.fb(e); var k = f.Ga();
        k = k && z.D.wd(k);
        h != k && (z.j.hc = !1, z.j.U(new z.j.Cc(f, "mutation", null, h, k)), z.j.hc = b) } };
z.qa.xl = function(a, b) { b = cd(b, !1); for (var c = 0; c < b.length; c++)
        if (b[c].$e) { var e = b[c].$e(); if (e && Tc(e[0], a)) return b[c] } return null };

function Ck(a, b, c, e) { this.m = a;
    this.ta = b;
    this.va = c.getAttribute("text");
    this.Mc = new D(0, 0);
    this.Sg = e;
    this.qn = null;
    a = c.getAttribute("callbackKey");
    this.Sg && a ? console.warn("Labels should not have callbacks. Label text: " + this.va) : this.Sg || a && Wg(b, a) ? this.qn = Wg(b, a) : console.warn("Buttons should have callbacks. Button text: " + this.va);
    this.Sq = c.getAttribute("web-class") || null } d = Ck.prototype;
d.width = 0;
d.height = 0;
d.ni = null;
d.V = function() {
    var a = this.Sg ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.Sq && (a += " " + this.Sq);
    this.w = z.i.B("g", { "class": a }, this.m.Ma);
    if (!this.Sg) var b = z.i.B("rect", { "class": "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 }, this.w);
    a = z.i.B("rect", { "class": this.Sg ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground", rx: 4, ry: 4 }, this.w);
    var c = z.i.B("text", { "class": this.Sg ? "blocklyFlyoutLabelText" : "blocklyText", x: 0, y: 0, "text-anchor": "middle" }, this.w);
    c.textContent = this.va;
    this.width = wh(c);
    this.height = 20;
    this.Sg || (this.width += 10, b.setAttribute("width", this.width), b.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height", this.height);
    c.setAttribute("x", this.width / 2);
    c.setAttribute("y", this.height - 5);
    Dk(this);
    z.O(this.w, "mouseup", this, this.nx);
    return this.w
};
d.show = function() { Dk(this);
    this.w.setAttribute("display", "block") };

function Dk(a) { a.w.setAttribute("transform", "translate(" + a.Mc.x + "," + a.Mc.y + ")") }
d.moveTo = function(a, b) { this.Mc.x = a;
    this.Mc.y = b;
    Dk(this) };
d.Ir = function() { return this.Mc };
d.A = function() { this.ni && z.Da(this.ni);
    this.w && (G(this.w), this.w = null);
    this.ta = this.m = null };
d.nx = function(a) {
    (a = this.ta.qe(a)) && a.cancel();
    this.qn && this.qn(this) };

function Ek(a) { a.rb = this.Ze.bind(this);
    a.kg = this.zm.bind(this);
    this.m = new Hg(a);
    this.m.Pd = !0;
    this.u = !!a.u;
    this.nf = a.Ba;
    this.Ln = [];
    this.cm = [];
    this.Ti = [];
    this.yc = [];
    this.So = [] } d = Ek.prototype;
d.Lh = !0;
d.Lj = !1;
d.Dg = !0;
d.pa = 8;
d.qd = Ek.prototype.pa;
d.Tt = 3 * Ek.prototype.qd;
d.Ut = 3 * Ek.prototype.qd;
d.yg = 2;
d.ka = 0;
d.Ca = 0;
d.vr = 70;
d.V = function(a) { this.w = z.i.B(a, { "class": "blocklyFlyout", style: "display: none" }, null);
    this.ed = z.i.B("path", { "class": "blocklyFlyoutBackground" }, this.w);
    this.w.appendChild(this.m.V()); return this.w };
d.L = function(a) { this.ta = a;
    this.m.qh = a;
    this.Ub = new ag(this.m, this.Od, !1, "blocklyFlyoutScrollbar");
    this.Fa();
    Array.prototype.push.apply(this.Ln, z.O(this.w, "wheel", this, this.zt));
    this.Lh || (this.ml = this.Nn.bind(this), this.ta.Fc(this.ml));
    Array.prototype.push.apply(this.Ln, z.O(this.ed, "mousedown", this, this.gf));
    this.m.qe = this.ta.qe.bind(this.ta);
    this.m.ra = this.ta.ra;
    a = this.m;
    a.si = new Pc(a) };
d.A = function() { this.Fa();
    z.Da(this.Ln);
    this.ml && (this.ta.dg(this.ml), this.ml = null);
    this.Ub && (this.Ub.A(), this.Ub = null);
    this.m && (this.m.qh = null, this.m.A(), this.m = null);
    this.w && (G(this.w), this.w = null);
    this.ta = this.ed = null };
d.$c = function() { return this.ka };
d.Xh = function() { return this.Ca };
d.tj = function() { return this.m };
d.X = function() { return this.Lj };
d.oa = function(a) { var b = a != this.X();
    this.Lj = a;
    b && this.wk() };
d.gh = function(a) { var b = a != this.Dg;
    this.Dg = a;
    b && this.wk() };
d.wk = function() { var a = this.Dg ? this.X() : !1;
    this.w.style.display = a ? "block" : "none";
    this.Ub.gh(a) };

function Fk(a, b, c, e, f) { a.w.setAttribute("width", b);
    a.w.setAttribute("height", c); "svg" == a.w.tagName ? z.i.dk(a.w, "translate(" + e + "px," + f + "px)") : a.w.setAttribute("transform", "translate(" + e + "," + f + ")");
    a.Ub && (a.Ub.Oo = new D(e, f), a.Ub.resize()) } d.Fa = function() { if (this.X()) { this.oa(!1); for (var a = 0, b; b = this.yc[a]; a++) z.Da(b);
        this.yc.length = 0;
        this.cg && (this.m.dg(this.cg), this.cg = null) } };
d.show = function(a) {
    this.m.Sb(!1);
    this.Fa();
    Gk(this);
    "string" == typeof a && (a = Xg(this.m.qh, a)(this.m.qh));
    this.oa(!0);
    for (var b = [], c = [], e = this.So.length = 0, f; f = a[e]; e++)
        if (f.tagName) {
            var h = f.tagName.toUpperCase(),
                k = this.Od ? this.Tt : this.Ut;
            if ("BLOCK" == h) h = z.D.Qh(f, this.m), h.disabled && this.So.push(h), b.push({ type: "block", block: h }), f = parseInt(f.getAttribute("gap"), 10), c.push(isNaN(f) ? k : f);
            else if ("SEP" == f.tagName.toUpperCase()) f = parseInt(f.getAttribute("gap"), 10), !isNaN(f) && 0 < c.length ? c[c.length - 1] = f : c.push(k);
            else if ("BUTTON" == h || "LABEL" == h) f = new Ck(this.m, this.ta, f, "LABEL" == h), b.push({ type: "button", button: f }), c.push(k)
        } this.hs(b, c);
    this.yc.push(z.O(this.ed, "mouseover", this, function() { for (var a = cd(this.m, !1), b = 0, c; c = a[b]; b++) c.dh() }));
    this.Od ? this.Ca = 0 : this.ka = 0;
    this.m.Sb(!0);
    this.ap();
    this.Nn();
    this.position();
    this.cg = this.ap.bind(this);
    this.m.Fc(this.cg)
};

function Gk(a) { for (var b = cd(a.m, !1), c = 0, e; e = b[c]; c++) e.o == a.m && e.A(!1, !1); for (c = 0; c < a.cm.length; c++)(b = a.cm[c]) && G(b); for (c = a.cm.length = 0; b = a.Ti[c]; c++) b.A();
    a.Ti.length = 0;
    a.m.si.clear() }

function Hk(a, b, c, e) { a.yc.push(z.O(b, "mousedown", null, Ik(a, c)));
    a.yc.push(z.O(e, "mousedown", null, Ik(a, c)));
    a.yc.push(z.Zb(b, "mouseover", c, c.Kh));
    a.yc.push(z.Zb(b, "mouseout", c, c.dh));
    a.yc.push(z.Zb(e, "mouseover", c, c.Kh));
    a.yc.push(z.Zb(e, "mouseout", c, c.dh)) }

function Ik(a, b) { return function(c) { var e = a.ta.qe(c);
        e && (Tf(e, b), e.I || (e.I = a), e.jb || (e.jb = a.tj()), e.Lc = c, e.gj(c)) } } d.gf = function(a) { var b = this.ta.qe(a);
    b && (b.I || (b.I = this), b.jb || (b.jb = this.tj()), b.Lc = a, b.gj(a)) };

function Of(a, b) { var c = null;
    z.j.disable(); var e = a.ta.Ye();
    a.ta.Sb(!1); try { var f = a.ta; if (!b.ga()) throw "oldBlock is not rendered."; var h = z.D.Bf(b);
        f.Sb(!1); var k = z.D.Qh(h, f); if (!k.ga()) throw "block is not rendered."; var l = z.i.Al(f.Ma),
            m = z.i.Al(a.m.Ma),
            n = b.la().scale(a.m.scale),
            p = uc(vc(m, n), l).scale(1 / f.scale);
        k.moveBy(p.x, p.y);
        c = k;
        z.Qb() } finally { z.j.enable() } b = z.G.Fr(a.ta, e); if (z.j.isEnabled())
        for (z.j.R(!0), z.j.U(new yc(c)), e = 0; e < b.length; e++) z.j.U(new Cc(b[e]));
    a.Lh ? a.Fa() : a.Nn(); return c }

function Jk(a, b, c, e) { var f = b.V();
    b.moveTo(c, e);
    b.show();
    a.yc.push(z.O(f, "mousedown", a, a.gf));
    a.Ti.push(b) }

function Kk(a, b, c, e, f, h) { c = z.i.B("rect", { "fill-opacity": 0, x: c, y: e, height: f.height, width: f.width }, null);
    c.gd = b;
    z.C.Cg(c);
    a.m.Ma.insertBefore(c, b.ga());
    b.ol = c; return a.cm[h] = c }

function Lk(a, b, c) { var e = c.Hb();
    b.setAttribute("width", e.width);
    b.setAttribute("height", e.height); var f = c.kt ? 15 : 0;
    f && c.moveBy(0, f);
    f = c.N ? M : 0;
    c = c.la();
    b.setAttribute("y", c.y);
    b.setAttribute("x", a.u ? c.x - e.width + f : c.x - f) }
d.Nn = function() { for (var a = fd(this.ta), b = cd(this.m, !1), c = 0, e; e = b[c]; c++)
        if (-1 == this.So.indexOf(e)) { var f = xc(e, !1);
            e.Nc(f.length > a) } };
d.ap = function() { this.cg && this.m.dg(this.cg);
    this.Ws();
    this.cg && this.m.Fc(this.cg) };

function Mf(a) { return a.Ub ? a.Ub.X() : !1 };

function Ng(a) { a.rb = this.Ze.bind(this);
    a.kg = this.zm.bind(this);
    Ng.s.constructor.call(this, a);
    this.Od = !0 } y(Ng, Ek);
d = Ng.prototype;
d.Ze = function() { if (!this.X()) return null; try { var a = this.m.Ma.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.yg,
        c = this.yg;
    this.nf == z.Ag && (b = 0); var e = this.Ca;
    this.nf == z.yf && (e -= this.yg); return { cb: e, ya: this.ka - 2 * this.yg, mc: (a.height + 2 * this.qd) * this.m.scale, Hc: (a.width + 2 * this.qd) * this.m.scale, Ke: -this.m.scrollY, Cb: -this.m.scrollX, nc: a.y, Gc: a.x, xb: b, lb: c } };
d.zm = function(a) { var b = this.Ze();
    b && (t(a.x) && (this.m.scrollX = -b.Hc * a.x), this.m.translate(this.m.scrollX + b.lb, this.m.scrollY + b.xb)) };
d.position = function() { if (this.X()) { var a = this.ta.rb(); if (a) { this.ka = a.ya;
            this.rp(a.ya - 2 * this.pa, this.Ca - this.pa); var b = a.lb,
                c = a.xb;
            this.nf == z.Ag && (c += a.cb - this.Ca);
            Fk(this, this.ka, this.Ca, b, c) } } };
d.rp = function(a, b) { var c = this.nf == z.yf,
        e = ["M 0," + (c ? 0 : this.pa)];
    c ? (e.push("h", a + 2 * this.pa), e.push("v", b), e.push("a", this.pa, this.pa, 0, 0, 1, -this.pa, this.pa), e.push("h", -1 * a), e.push("a", this.pa, this.pa, 0, 0, 1, -this.pa, -this.pa)) : (e.push("a", this.pa, this.pa, 0, 0, 1, this.pa, -this.pa), e.push("h", a), e.push("a", this.pa, this.pa, 0, 0, 1, this.pa, this.pa), e.push("v", b), e.push("h", -a - 2 * this.pa));
    e.push("z");
    this.ed.setAttribute("d", e.join(" ")) };
d.mp = function() { this.Ub.set(this.u ? Infinity : 0) };
d.zt = function(a) { var b = a.deltaX; if (b) { lb && 1 === a.deltaMode && (b *= 10); var c = this.Ze();
        b = c.Cb + b;
        b = Math.min(b, c.Hc - c.ya);
        b = Math.max(b, 0);
        this.Ub.set(b);
        z.H.Fa() } a.preventDefault();
    a.stopPropagation() };
d.hs = function(a, b) { this.m.scale = this.ta.scale; var c = this.qd,
        e = this.u ? c : c + M;
    this.u && (a = a.reverse()); for (var f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = xc(h, !1), l = 0, m; m = k[l]; l++) m.tb = !0;
            h.Z();
            k = h.ga();
            l = h.Hb();
            m = h.N ? M : 0;
            m = this.u ? e + l.width : e + m;
            h.moveBy(m, c);
            m = Kk(this, h, m, c, l, f);
            e += l.width + b[f];
            Hk(this, k, h, m) } else "button" == h.type && (Jk(this, h.button, e, c), e += h.button.width + b[f]) };
d.Zr = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.vr; return a < 90 + b && a > 90 - b || a > -90 - b && a < -90 + b ? !0 : !1 };
d.Uh = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(),
        b = a.top;
    a = a.height; if (this.nf == z.yf) return new qg(-1E9, b - 1E9, 2E9, 1E9 + a); if (this.nf == z.Ag) return new qg(-1E9, b, 2E9, 1E9 + a) };
d.Ws = function() { this.m.scale = this.ta.scale; for (var a = 0, b = cd(this.m, !1), c = 0, e; e = b[c]; c++) a = Math.max(a, e.Hb().height);
    a += 1.5 * this.qd;
    a *= this.m.scale;
    a += H; if (this.Ca != a) { for (c = 0; e = b[c]; c++) e.ol && Lk(this, e.ol, e);
        this.Ca = a;
        this.ta.resize() } };

function Og(a) { a.rb = this.Ze.bind(this);
    a.kg = this.zm.bind(this);
    Og.s.constructor.call(this, a);
    this.Od = !1 } y(Og, Ek);
d = Og.prototype;
d.Ze = function() { if (!this.X()) return null; try { var a = this.m.Ma.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.yg,
        c = this.Ca - 2 * this.yg,
        e = this.ka;
    this.u || (e -= this.yg); return { cb: c, ya: e, mc: a.height * this.m.scale + 2 * this.qd, Hc: a.width * this.m.scale + 2 * this.qd, Ke: -this.m.scrollY + a.y, Cb: -this.m.scrollX, nc: a.y, Gc: a.x, xb: b, lb: 0 } };
d.zm = function(a) { var b = this.Ze();
    b && (t(a.y) && (this.m.scrollY = -b.mc * a.y), this.m.translate(this.m.scrollX + b.lb, this.m.scrollY + b.xb)) };
d.position = function() { if (this.X()) { var a = this.ta.rb(); if (a) { this.Ca = a.cb;
            this.rp(this.ka - this.pa, a.cb - 2 * this.pa); var b = a.xb,
                c = a.lb;
            this.nf == z.$d && (this.Cw = c += a.ya - this.ka);
            Fk(this, this.ka, this.Ca, c, b) } } };
d.rp = function(a, b) { var c = this.nf == z.$d,
        e = a + this.pa;
    e = ["M " + (c ? e : 0) + ",0"];
    e.push("h", c ? -a : a);
    e.push("a", this.pa, this.pa, 0, 0, c ? 0 : 1, c ? -this.pa : this.pa, this.pa);
    e.push("v", Math.max(0, b));
    e.push("a", this.pa, this.pa, 0, 0, c ? 0 : 1, c ? this.pa : -this.pa, this.pa);
    e.push("h", c ? a : -a);
    e.push("z");
    this.ed.setAttribute("d", e.join(" ")) };
d.mp = function() { this.Ub.set(0) };
d.zt = function(a) { var b = a.deltaY; if (b) { lb && 1 === a.deltaMode && (b *= 10); var c = this.Ze();
        b = c.Ke - c.nc + b;
        b = Math.min(b, c.mc - c.cb);
        b = Math.max(b, 0);
        this.Ub.set(b);
        z.H.Fa() } a.preventDefault();
    a.stopPropagation() };
d.hs = function(a, b) { this.m.scale = this.ta.scale; for (var c = this.qd, e = this.u ? c : c + M, f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = xc(h, !1), l = 0, m; m = k[l]; l++) m.tb = !0;
            h.Z();
            k = h.ga();
            l = h.Hb();
            h.moveBy(e, c);
            m = Kk(this, h, this.u ? e - l.width : e, c, l, f);
            Hk(this, k, h, m);
            c += l.height + b[f] } else "button" == h.type && (Jk(this, h.button, e, c), c += h.button.height + b[f]) };
d.Zr = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.vr; return a < b && a > -b || a < -180 + b || a > 180 - b ? !0 : !1 };
d.Uh = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(),
        b = a.left;
    a = a.width; if (this.nf == z.xf) return new qg(b - 1E9, -1E9, 1E9 + a, 2E9); if (lb && this.ta && this.ta.Jj) { var c = this.ta.w.getBoundingClientRect().x;
        10 > Math.abs(c - b) && (b += this.Cw * this.ta.options.Lb.scale) } return new qg(b, -1E9, 1E9 + a, 2E9) };
d.Ws = function() { this.m.scale = this.ta.scale; for (var a = 0, b = cd(this.m, !1), c = 0, e; e = b[c]; c++) { var f = e.Hb().width;
        e.N && (f -= M);
        a = Math.max(a, f) } for (c = 0; e = this.Ti[c]; c++) a = Math.max(a, e.width);
    a += 1.5 * this.qd + M;
    a *= this.m.scale;
    a += H; if (this.ka != a) { for (c = 0; e = b[c]; c++) this.u && (f = e.la().x, e.moveBy(a / this.m.scale - this.qd - M - f, 0)), e.ol && Lk(this, e.ol, e); if (this.u)
            for (c = 0; e = this.Ti[c]; c++) b = e.Ir().y, e.moveTo(a / this.m.scale - e.width - this.qd - M, b);
        this.ka = a;
        this.ta.resize() } };

function Mk(a) { ng.call(this);
    this.S = a;
    a = A ? "focusout" : "blur";
    this.Ew = dc(this.S, A ? "focusin" : "focus", this, !A);
    this.Fw = dc(this.S, a, this, !A) } y(Mk, ng);
Mk.prototype.handleEvent = function(a) { var b = new Pb(a.le);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b) };
Mk.prototype.Ta = function() { Mk.s.Ta.call(this);
    mc(this.Ew);
    mc(this.Fw);
    delete this.S };

function Nk(a, b) { null != a && this.append.apply(this, arguments) } d = Nk.prototype;
d.Db = "";
d.set = function(a) { this.Db = "" + a };
d.append = function(a, b, c) { this.Db += String(a); if (null != b)
        for (var e = 1; e < arguments.length; e++) this.Db += arguments[e]; return this };
d.clear = function() { this.Db = "" };
d.toString = function() { return this.Db };

function Ok(a, b, c) { Oh.call(this, c);
    this.$a = b || Pk;
    a instanceof Fd || (a = Id(a), a = Jd(Hd(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.Wh()));
    this.Cj = a;
    this.ij = this.np = !1;
    this.Lx = null;
    this.Fu = Pd;
    this.Kj = !0;
    this.dl = -1 } y(Ok, Oh);
var Qk = {};
d = Ok.prototype;
d.Ta = function() { Ok.s.Ta.call(this);
    this.pg && (this.pg.removeNode(this), this.pg = null);
    this.S = null };
d.Ol = function() { var a = this.F(); if (a) { var b = Rk(this);
        b && !b.id && (b.id = this.$() + ".label");
        Zh(a, "treeitem");
        S(a, "selected", !1);
        S(a, "level", this.Vh());
        b && S(a, "labelledby", b.id);
        (b = this.zl()) && Zh(b, "presentation");
        (b = this.yl()) && Zh(b, "presentation"); if (b = Sk(this))
            if (Zh(b, "group"), b.hasChildNodes())
                for (S(a, "expanded", !1), a = Uh(this), b = 1; b <= a; b++) { var c = R(this, b - 1).F();
                    S(c, "setsize", a);
                    S(c, "posinset", b) } } };
d.V = function() { var a = this.pc(); var b = this.Hm(); var c = a.Kd;
    a = c.createElement("DIV");
    A ? (Rd(a, Od(Qd, b)), a.removeChild(a.firstChild)) : Rd(a, b); if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else
        for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.S = b };
d.Gb = function() { Ok.s.Gb.call(this);
    Qk[this.$()] = this;
    this.Ol() };
d.xd = function() { Ok.s.xd.call(this);
    delete Qk[this.$()] };
d.Jh = function(a, b) { var c = R(this, b - 1),
        e = R(this, b);
    Ok.s.Jh.call(this, a, b);
    a.Td = c;
    a.Rd = e;
    c ? c.Rd = a : this.Br = a;
    e ? e.Td = a : this.fs = a;
    (b = this.uc()) && Tk(a, b);
    Uk(a, this.Vh() + 1); if (b = this.F())
        if (this.Di(), S(b, "expanded", this.qc()), this.qc()) { b = Sk(this);
            a.F() || a.V(); var f = a.F(),
                h = e && e.F();
            b.insertBefore(f, h);
            this.za && a.Gb();
            e || (c ? c.Di() : (kh(b, !0), this.Vd(this.qc()))) } };
d.add = function(a, b) { a.getParent() && a.getParent().removeChild(a);
    this.Jh(a, b ? Xh(this, b) : Uh(this)); return a };
d.removeChild = function(a) {
    var b = this.uc(),
        c = b ? b.se() : null;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), uf(this.px, 10, this)) : this.select();
    Ok.s.removeChild.call(this, a);
    this.fs == a && (this.fs = a.Td);
    this.Br == a && (this.Br = a.Rd);
    a.Td && (a.Td.Rd = a.Rd);
    a.Rd && (a.Rd.Td = a.Td);
    c = !a.Rd;
    a.pg = null;
    a.dl = -1;
    if (b && (b.removeNode(a), this.za)) {
        b = Sk(this);
        if (a.za) { var e = a.F();
            b.removeChild(e);
            a.xd() } c && (c = R(this, Uh(this) - 1)) && c.Di();
        Wh(this) || (b.style.display = "none", this.Di(), this.zl().className = this.tl(), (c = this.F()) &&
            c.removeAttribute("aria-expanded"))
    }
    return a
};
d.remove = Ok.prototype.removeChild;
d.px = function() { this.select() };
d.Vh = function() { var a = this.dl;
    0 > a && (a = (a = this.getParent()) ? a.Vh() + 1 : 0, Uk(this, a)); return a };

function Uk(a, b) { if (b != a.dl) { a.dl = b; var c = Vk(a); if (c) { var e = Wk(a) + "px";
            Vh(a) ? c.style.paddingRight = e : c.style.paddingLeft = e } Th(a, function(a) { Uk(a, b + 1) }) } } d.contains = function(a) { for (; a;) { if (a == this) return !0;
        a = a.getParent() } return !1 };
d.If = function() { var a = [];
    Th(this, function(b) { a.push(b) }); return a };
d.Ul = function() { return this.np };
d.select = function() { var a = this.uc();
    a && a.dd(this) };

function Xk(a, b) { if (a.np != b) { a.np = b;
        Yk(a); var c = a.F();
        c && (S(c, "selected", b), b && (b = a.uc().F(), S(b, "activedescendant", a.$()))) } } d.qc = function() { return this.ij };
d.Vd = function(a) { var b = a != this.ij; if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) { this.ij = a; var c = this.uc(); var e = this.F(); if (Wh(this)) { if (!a && c && this.contains(c.se()) && this.select(), e) { if (c = Sk(this))
                    if (kh(c, a), S(e, "expanded", a), a && this.za && !c.hasChildNodes()) { var f = [];
                        Th(this, function(a) { f.push(a.Hm()) });
                        Rd(c, Od(f));
                        Th(this, function(a) { a.Gb() }) } this.Di() } } else(c = Sk(this)) && kh(c, !1);
        e && (this.zl().className = this.tl());
        b && this.dispatchEvent(a ? "expand" : "collapse") } };
d.toggle = function() { this.Vd(!this.qc()) };
d.expand = function() { this.Vd(!0) };
d.collapse = function() { this.Vd(!1) };
d.lp = function() { var a = this.getParent();
    a && (a.Vd(!0), a.lp()) };
d.Hm = function() { var a = this.uc(),
        b = !a.ik || a == this.getParent() && !a.Ep ? this.$a.Rq : this.$a.Qq;
    a = this.qc() && Wh(this);
    b = { "class": b, style: Zk(this) }; var c = [];
    a && Th(this, function(a) { c.push(a.Hm()) });
    a = Nd("div", b, c); return Nd("div", { "class": this.$a.$q, id: this.$() }, [$k(this), a]) };

function Wk(a) { return Math.max(0, (a.Vh() - 1) * a.$a.lo) }

function $k(a) { var b = {};
    b["padding-" + (Vh(a) ? "right" : "left")] = Wk(a) + "px";
    b = { "class": a.pj(), style: b }; var c = a.Un(),
        e = Nd("span", { style: { display: "inline-block" }, "class": a.tl() }),
        f = Nd("span", { "class": a.$a.cr, title: a.Lx || null }, a.Cj);
    a = Od(f, Nd("span", {}, a.Fu)); return Nd("div", b, [c, e, a]) } d.pj = function() { return this.$a.zn + (this.Ul() ? " " + this.$a.er : "") };
d.Un = function() { return Nd("span", { type: "expand", style: { display: "inline-block" }, "class": al(this) }) };

function al(a) { var b = a.uc(),
        c = !b.ik || b == a.getParent() && !b.Ep,
        e = a.$a,
        f = new Nk;
    f.append(e.Eg, " ", e.nv, " "); if (Wh(a)) { var h = 0;
        b.Cp && a.Kj && (h = a.qc() ? 2 : 1);
        c || (h = a.Rd ? h + 8 : h + 4); switch (h) {
            case 1:
                f.append(e.rv); break;
            case 2:
                f.append(e.qv); break;
            case 4:
                f.append(e.Wq); break;
            case 5:
                f.append(e.pv); break;
            case 6:
                f.append(e.ov); break;
            case 8:
                f.append(e.Xq); break;
            case 9:
                f.append(e.uv); break;
            case 10:
                f.append(e.tv); break;
            default:
                f.append(e.Vq) } } else c ? f.append(e.Vq) : a.Rd ? f.append(e.Xq) : f.append(e.Wq); return f.toString() }

function Zk(a) { var b = a.qc() && Wh(a); return yd({ "background-position": bl(a), display: b ? null : "none" }) }

function bl(a) { return (a.Rd ? (a.Vh() - 1) * a.$a.lo : "-100") + "px 0" } d.F = function() { var a = Ok.s.F.call(this);
    a || (this.S = a = this.pc().F(this.$())); return a };

function Vk(a) { return (a = a.F()) ? a.firstChild : null } d.yl = function() { var a = Vk(this); return a ? a.firstChild : null };
d.zl = function() { var a = Vk(this); return a ? a.childNodes[1] : null };

function Rk(a) { return (a = Vk(a)) && a.lastChild ? a.lastChild.previousSibling : null }

function Sk(a) { return (a = a.F()) ? a.lastChild : null } d.vb = function(a) { this.Cj = a = Id(a); var b = Rk(this);
    b && Rd(b, a);
    (a = this.uc()) && cl(a, this) };
d.Ib = function() { var a = Hd(this.Cj); return -1 != a.indexOf("&") ? "document" in g ? Sa(a) : Ua(a) : a };

function Yk(a) { var b = Vk(a);
    b && (b.className = a.pj()) } d.Di = function() { var a = this.yl();
    a && (a.className = al(this)); if (a = Sk(this)) a.style.backgroundPosition = bl(this) };
d.Hs = function(a) { "expand" == a.target.getAttribute("type") && Wh(this) ? this.Kj && this.toggle() : (this.select(), Yk(this)) };
d.Jo = function(a) { a.preventDefault() };
d.Es = function(a) { "expand" == a.target.getAttribute("type") && Wh(this) || this.Kj && this.toggle() };
d.Lo = function(a) {
    var b = !0;
    switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            Wh(this) && (this.qc() ? R(this, 0).select() : this.Vd(!0));
            break;
        case 37:
            if (a.altKey) break;
            if (Wh(this) && this.qc() && this.Kj) this.Vd(!1);
            else { var c = this.getParent(),
                    e = this.uc();
                c && (e.jh || c != e) && c.select() }
            break;
        case 40:
            a: if (Wh(this) && this.qc()) c = R(this, 0);
                else { for (c = this; c != this.uc();) { e = c.Rd; if (null != e) { c = e; break a } c = c.getParent() } c = null } c && c.select();
            break;
        case 38:
            c = this.Td;
            null != c ? c = dl(c) : (c = this.getParent(), e = this.uc(), c = !e.jh && c ==
                e || this == e ? null : c);
            c && c.select();
            break;
        default:
            b = !1
    }
    b && (a.preventDefault(), (e = this.uc()) && e.tk.clear());
    return b
};

function dl(a) { return a.qc() && Wh(a) ? dl(R(a, Uh(a) - 1)) : a }

function Tk(a, b) { a.pg != b && (a.pg = b, cl(b, a), Th(a, function(a) { Tk(a, b) })) }
var Pk = {
    lo: 19,
    dr: "goog-tree-root goog-tree-item",
    Zq: "goog-tree-hide-root",
    $q: "goog-tree-item",
    Qq: "goog-tree-children",
    Rq: "goog-tree-children-nolines",
    zn: "goog-tree-row",
    cr: "goog-tree-item-label",
    Eg: "goog-tree-icon",
    nv: "goog-tree-expand-icon",
    rv: "goog-tree-expand-icon-plus",
    qv: "goog-tree-expand-icon-minus",
    uv: "goog-tree-expand-icon-tplus",
    tv: "goog-tree-expand-icon-tminus",
    pv: "goog-tree-expand-icon-lplus",
    ov: "goog-tree-expand-icon-lminus",
    Xq: "goog-tree-expand-icon-t",
    Wq: "goog-tree-expand-icon-l",
    Vq: "goog-tree-expand-icon-blank",
    xn: "goog-tree-expanded-folder-icon",
    Tq: "goog-tree-collapsed-folder-icon",
    yn: "goog-tree-file-icon",
    Yq: "goog-tree-expanded-folder-icon",
    Uq: "goog-tree-collapsed-folder-icon",
    er: "selected"
};

function el(a, b, c) { Ok.call(this, a, b, c) } y(el, Ok);
el.prototype.uc = function() { if (this.pg) return this.pg; var a = this.getParent(); return a && (a = a.uc()) ? (Tk(this, a), a) : null };
el.prototype.tl = function() { var a = this.qc(),
        b = this.Lv; if (a && b) return b;
    b = this.sw; if (!a && b) return b;
    b = this.$a; if (Wh(this)) { if (a && b.xn) return b.Eg + " " + b.xn; if (!a && b.Tq) return b.Eg + " " + b.Tq } else if (b.yn) return b.Eg + " " + b.yn; return "" };

function fl(a) { if (a.rj && "function" == typeof a.rj) return a.rj(); if (q(a)) return a.split(""); if (fa(a)) { for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]); return b } b = [];
    c = 0; for (e in a) b[c++] = a[e]; return b };

function gl(a) { this.Ia = void 0;
    this.bc = {}; if (a) { if (a.Cl && "function" == typeof a.Cl) var b = a.Cl();
        else if (a.rj && "function" == typeof a.rj) b = void 0;
        else if (fa(a) || q(a)) { b = []; for (var c = a.length, e = 0; e < c; e++) b.push(e) } else
            for (e in b = [], c = 0, a) b[c++] = e;
        a = fl(a); for (c = 0; c < b.length; c++) this.set(b[c], a[c]) } } d = gl.prototype;
d.set = function(a, b) { hl(this, a, b, !1) };
d.add = function(a, b) { hl(this, a, b, !0) };

function hl(a, b, c, e) { for (var f = 0; f < b.length; f++) { var h = b.charAt(f);
        a.bc[h] || (a.bc[h] = new gl);
        a = a.bc[h] } if (e && void 0 !== a.Ia) throw Error('The collection already contains the key "' + b + '"');
    a.Ia = c } d.get = function(a) { a: { for (var b = this, c = 0; c < a.length; c++)
            if (b = b.bc[a.charAt(c)], !b) { a = void 0; break a } a = b } return a ? a.Ia : void 0 };
d.rj = function() { var a = [];
    il(this, a); return a };

function il(a, b) { void 0 !== a.Ia && b.push(a.Ia); for (var c in a.bc) il(a.bc[c], b) }
d.Cl = function(a) { var b = []; if (a) { for (var c = this, e = 0; e < a.length; e++) { var f = a.charAt(e); if (!c.bc[f]) return [];
            c = c.bc[f] } jl(c, a, b) } else jl(this, "", b); return b };

function jl(a, b, c) { void 0 !== a.Ia && c.push(b); for (var e in a.bc) jl(a.bc[e], b + e, c) } d.clear = function() { this.bc = {};
    this.Ia = void 0 };
d.remove = function(a) { for (var b = this, c = [], e = 0; e < a.length; e++) { var f = a.charAt(e); if (!b.bc[f]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, f]);
        b = b.bc[f] } a = b.Ia; for (delete b.Ia; 0 < c.length;)
        if (f = c.pop(), b = f[0], f = f[1], b.bc[f].$r()) delete b.bc[f];
        else break; return a };
d.clone = function() { return new gl(this) };
d.$r = function() { var a; if (a = void 0 === this.Ia) a: { for (var b in this.bc) { a = !1; break a } a = !0 }
    return a };

function kl() { this.Xg = new gl;
    this.Db = "";
    this.bm = this.Ao = null;
    this.li = this.Pj = 0 }

function ll(a, b) { var c = b.Ib(); if (c && !Ga(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.Xg.get(c); if (e) { for (var f = Uh(b), h = 0; h < f; h++) ll(a, R(b, h));
            xa(e, b);
            e.length || a.Xg.remove(c) } } }

function ml(a, b) { var c = !1;
    (b = a.Xg.Cl(b)) && b.length && (a.li = 0, a.Pj = 0, c = a.Xg.get(b[0]), c = nl(a, c)) && (a.Ao = b); return c }

function nl(a, b) { if (b) { if (a.li < b.length) { var c = b[a.li];
            a.bm = b } c && (c.lp(), c.select()) } return !!c }
kl.prototype.clear = function() { this.Db = "" };

function ol(a, b, c) { Ok.call(this, a, b, c);
    this.ij = !0;
    Xk(this, !0);
    this.ub = this;
    this.tk = new kl;
    this.Pn = this.fc = null;
    this.kj = !1;
    this.Rv = null;
    this.Ep = this.jh = this.Cp = this.ik = !0; if (A) try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {} } y(ol, Ok);
d = ol.prototype;
d.uc = function() { return this };
d.Vh = function() { return 0 };
d.lp = function() {};
d.dw = function() { this.kj = !0;
    ni(this.F(), "focused");
    this.ub && this.ub.select() };
d.Zv = function() { this.kj = !1;
    pi(this.F(), "focused") };
d.hasFocus = function() { return this.kj };
d.qc = function() { return !this.jh || ol.s.qc.call(this) };
d.Vd = function(a) { this.jh ? ol.s.Vd.call(this, a) : this.ij = a };
d.Un = function() { return Pd };
d.zl = function() { var a = Vk(this); return a ? a.firstChild : null };
d.yl = function() { return null };
d.Di = function() {};
d.pj = function() { return ol.s.pj.call(this) + (this.jh ? "" : " " + this.$a.Zq) };
d.tl = function() { var a = this.qc(),
        b = this.Lv; if (a && b) return b;
    b = this.sw; if (!a && b) return b;
    b = this.$a; return a && b.Yq ? b.Eg + " " + b.Yq : !a && b.Uq ? b.Eg + " " + b.Uq : "" };
d.dd = function(a) { if (this.ub != a) { var b = !1;
        this.ub && (b = this.ub == this.Rv, Xk(this.ub, !1)); if (this.ub = a) Xk(a, !0), b && a.select();
        this.dispatchEvent("change") } };
d.se = function() { return this.ub };

function pl(a) { 0 != a.ik && (a.ik = !1, a.za && ql(a)) }

function ql(a) {
    function b(a) { var h = Sk(a); if (h) { var l = !e || c == a.getParent() && !f ? a.$a.Rq : a.$a.Qq;
            h.className = l; if (h = a.yl()) h.className = al(a) } Th(a, b) } var c = a,
        e = c.ik,
        f = c.Ep;
    b(a) }

function rl(a) { 0 != a.Cp && (a.Cp = !1, a.za && ql(a)) }

function sl(a) { if (0 != a.jh) { a.jh = !1; if (a.za) { var b = Vk(a);
            b && (b.className = a.pj()) } a.se() == a && R(a, 0) && a.dd(R(a, 0)) } } d.Ol = function() { ol.s.Ol.call(this); var a = this.F();
    Zh(a, "tree");
    S(a, "labelledby", Rk(this).id) };
d.Gb = function() { ol.s.Gb.call(this); var a = this.F();
    a.className = this.$a.dr;
    a.setAttribute("hideFocus", "true");
    a = this.F();
    a.tabIndex = 0; var b = this.fc = new ei(a),
        c = this.Pn = new Mk(a);
    Rh(this).na(c, "focusout", this.Zv).na(c, "focusin", this.dw).na(b, "key", this.Ad).na(a, "mousedown", this.bo).na(a, "click", this.bo).na(a, "dblclick", this.bo);
    this.Ol() };
d.xd = function() { ol.s.xd.call(this);
    this.fc.A();
    this.fc = null;
    this.Pn.A();
    this.Pn = null };
d.bo = function(a) { var b = tl(this, a); if (b) switch (a.type) {
        case "mousedown":
            b.Hs(a); break;
        case "click":
            b.Jo(a); break;
        case "dblclick":
            b.Es(a) } };
d.Ad = function(a) {
    var b = this.tk;
    var c = !1;
    switch (a.keyCode) {
        case 40:
        case 38:
            if (a.ctrlKey) { c = 40 == a.keyCode ? 1 : -1; var e = b.Ao; if (e) { var f = null,
                        h = !1; if (b.bm) { var k = b.li + c;
                        0 <= k && k < b.bm.length ? (b.li = k, f = b.bm) : h = !0 } f || (k = b.Pj + c, 0 <= k && k < e.length && (b.Pj = k), e.length > b.Pj && (f = b.Xg.get(e[b.Pj])), f && f.length && h && (b.li = -1 == c ? f.length - 1 : 0));
                    nl(b, f) && (b.Ao = e) } c = !0 } break;
        case 8:
            e = b.Db.length - 1;
            c = !0;
            0 < e ? (b.Db = b.Db.substring(0, e), ml(b, b.Db)) : 0 == e ? b.Db = "" : c = !1; break;
        case 27:
            b.Db = "", c = !0 }(b = c || this.ub && this.ub.Lo(a)) || (b =
        this.tk, c = !1, a.ctrlKey || a.altKey || (e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "\u0080" <= e && "\ufffd" >= e) && (" " != e || b.Db) && (b.Db += e, c = ml(b, b.Db))), b = c);
    b && a.preventDefault();
    return b
};

function tl(a, b) { for (var c = b.target; null != c;) { if (b = Qk[c.id]) return b; if (c == a.F()) break;
        c = c.parentNode } return null } d.createNode = function(a) { return new el(a || Pd, this.$a, this.pc()) };

function cl(a, b) { a = a.tk; var c = b.Ib(); if (c && !Ga(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.Xg.get(c);
        e ? e.push(b) : a.Xg.set(c, [b]) } } d.removeNode = function(a) { ll(this.tk, a) };

function Kg(a) {
    this.m = a;
    this.u = a.options.u;
    this.Od = a.options.ue;
    this.Ba = a.options.Ba;
    this.$a = { lo: 19, dr: "blocklyTreeRoot", Zq: "blocklyHidden", $q: "", zn: "blocklyTreeRow", cr: "blocklyTreeLabel", Eg: "blocklyTreeIcon", xn: "blocklyTreeIconOpen", yn: "blocklyTreeIconNone", er: "blocklyTreeSelected" };
    this.tt = { zn: "blocklyTreeSeparator" };
    this.Od && (this.$a.cssTreeRow += a.u ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.tt.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.u ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.$a.cssTreeIcon = "")
}
d = Kg.prototype;
d.width = 0;
d.height = 0;
d.Mj = null;
d.L = function() {
    var a = this.m,
        b = L(this.m);
    this.Dc = F("DIV", "blocklyToolboxDiv");
    this.Dc.setAttribute("dir", a.u ? "RTL" : "LTR");
    b.parentNode.insertBefore(this.Dc, b);
    z.O(this.Dc, "mousedown", this, function(a) { z.i.Uf(a) || a.target == this.Dc ? z.Qb(!1) : z.Qb(!0);
        z.Touch.Te() }, !1, !0);
    b = { fj: a.options.fj, Lb: a, u: a.u, ye: a.options.ye, ue: a.ue, Ba: a.options.Ba };
    this.I = null;
    this.I = a.ue ? new Ng(b) : new Og(b);
    fe(this.I.V("svg"), L(this.m));
    this.I.L(a);
    this.$a.cleardotPath = a.options.Sd + "1x1.gif";
    this.$a.cssCollapsedFolderIcon = "blocklyTreeIconClosed" +
        (a.u ? "Rtl" : "Ltr");
    this.Hd = b = new ul(this, this.$a);
    sl(b);
    pl(b);
    rl(b);
    b.dd(null);
    a = this.om(a.options.xe);
    b.Z(this.Dc);
    a && b.dd(a);
    Tg(this);
    this.position()
};
d.A = function() { this.I.A();
    this.Hd.A();
    G(this.Dc);
    this.Mj = this.m = null };
d.$c = function() { return this.width };
d.Xh = function() { return this.height };
d.position = function() { var a = this.Dc; if (a) { var b = L(this.m);
        b = z.rt(b);
        this.Od ? (a.style.left = "0", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, this.Ba == z.yf ? a.style.top = "0" : a.style.bottom = "0") : (this.Ba == z.$d ? a.style.right = "0" : a.style.left = "0", a.style.height = b.height + "px", this.width = a.offsetWidth);
        this.I.position() } };
d.om = function(a) { this.Hd.Xs();
    this.Hd.ee = [];
    this.Pr = !1;
    a = vl(this, a, this.Hd, this.m.options.Sd); if (this.Hd.ee.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    Af(this.m); return a };

function vl(a, b, c, e) {
    for (var f = null, h = null, k = 0, l; l = b.childNodes[k]; k++)
        if (l.tagName) switch (l.tagName.toUpperCase()) {
            case "CATEGORY":
                h = z.i.ic(l.getAttribute("name"));
                h = a.Hd.createNode(h);
                h.ee = [];
                c.add(h);
                var m = l.getAttribute("custom");
                m ? h.ee = m : (m = vl(a, l, h, e)) && (f = m);
                m = z.i.ic(l.getAttribute("colour"));
                q(m) ? (h.fo = /^#[0-9a-fA-F]{6}$/.test(m) ? m : z.Ur(Number(m)), a.Pr = !0) : h.fo = "";
                "true" == l.getAttribute("expanded") ? (h.ee.length && (f = h), h.Vd(!0)) : h.Vd(!1);
                h = l;
                break;
            case "SEP":
                h && ("CATEGORY" == h.tagName.toUpperCase() ?
                    c.add(new wl(a.tt)) : (l = parseFloat(l.getAttribute("gap")), !isNaN(l) && h && h.setAttribute("gap", l)));
                break;
            case "BLOCK":
            case "SHADOW":
            case "LABEL":
            case "BUTTON":
                c.ee.push(l), h = l
        }
    return f
}

function Tg(a, b) { b = (b || a.Hd).If(!1); for (var c = 0, e; e = b[c]; c++) { var f = Vk(e); if (f) { var h = a.Pr ? "8px solid " + (e.fo || "#ddd") : "none";
            a.m.u ? f.style.borderRight = h : f.style.borderLeft = h } Tg(a, e) } }
d.Uh = function() { if (!this.Dc) return null; var a = this.Dc.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        e = a.width;
    a = a.height; return this.Ba == z.xf ? new qg(-1E7, -1E7, 1E7 + b + e, 2E7) : this.Ba == z.$d ? new qg(b, -1E7, 1E7 + e, 2E7) : this.Ba == z.yf ? new qg(-1E7, -1E7, 2E7, 1E7 + c + a) : new qg(0, c, 2E7, 1E7 + e) };

function ul(a, b) { this.ea = a;
    ol.call(this, Pd, b) } y(ul, ol);
ul.prototype.Gb = function() { ul.s.Gb.call(this); if (Cb) { var a = this.F();
        z.O(a, "touchend", this, this.mw) } };
ul.prototype.mw = function(a) { var b = tl(this, a);
    b && "touchend" === a.type && setTimeout(function() { b.Jo(a) }, 1) };
ul.prototype.createNode = function(a) { a = a ? Id(a) : Pd; return new xl(this.ea, a, this.$a, this.pc()) };
ul.prototype.dd = function(a) { var b = this.ea; if (a != this.ub && a != b.Hd) { b.Mj && (Vk(b.Mj).style.backgroundColor = ""); if (a) { var c = a.fo || "#57e";
            Vk(a).style.backgroundColor = c;
            Tg(b, a) } c = this.se();
        ol.prototype.dd.call(this, a);
        a && a.ee && a.ee.length ? (b.I.show(a.ee), b.Mj != a && b.I.mp()) : b.I.Fa();
        c != a && c != this && (c = new Fc(null, "category", c && Hd(c.Cj), a && Hd(a.Cj)), c.Bc = b.m.id, z.j.U(c));
        a && (b.Mj = a) } };

function xl(a, b, c, e) { Ok.call(this, b, c, e);
    a && (b = function() { z.ph(a.m) }, dc(a.Hd, "expand", b), dc(a.Hd, "collapse", b)) } y(xl, el);
d = xl.prototype;
d.Un = function() { return Nd("span") };
d.Jo = function() { Wh(this) && this.Kj ? (this.toggle(), this.select()) : this.Ul() ? this.uc().dd(null) : this.select();
    Yk(this) };
d.Hs = function() {};
d.Es = function() {};
d.Lo = function(a) { if (this.pg.ea.Od) { var b = {};
        b[39] = this.wi ? 38 : 40;
        b[37] = this.wi ? 40 : 38;
        b[38] = 37;
        b[40] = 39;
        a.keyCode = b[a.keyCode] || a.keyCode } return xl.s.Lo.call(this, a) };

function wl(a) { xl.call(this, null, Pd, a) } y(wl, xl);
z.od = {};
z.od.FB = "";
z.od.qt = null;
z.od.qs = "";
z.od.Qf = function(a, b) { if (!z.od.qt) { var c = ".blocklyDraggable {}\n";
        a && (c += z.od.It.join("\n"), z.St && (c += z.St.CSS.join("\n")));
        z.od.qs = b.replace(/[\\\/]$/, "");
        c = c.replace(/<<<PATH>>>/g, z.od.qs);
        a = document.createElement("style");
        document.head.insertBefore(a, document.head.firstChild);
        a.appendChild(document.createTextNode(c));
        z.od.qt = a.sheet } };
z.od.OB = function() { console.warn("Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context") };
z.od.It = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none", "}", ".blocklyNonSelectable {", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;",
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
z.H = {};
z.H.ha = null;
z.H.Vj = null;
z.H.Gf = null;
z.H.V = function() { z.H.ha || (z.H.ha = F("DIV", "blocklyWidgetDiv"), document.body.appendChild(z.H.ha)) };
z.H.show = function(a, b, c) { z.H.Fa();
    z.H.Vj = a;
    z.H.Gf = c;
    z.H.ha.style.top = Vf().y + "px";
    z.H.ha.style.direction = b ? "rtl" : "ltr";
    z.H.ha.style.display = "block" };
z.H.Fa = function() { z.H.Vj && (z.H.Vj = null, z.H.ha.style.display = "none", z.H.ha.style.left = "", z.H.ha.style.top = "", z.H.Gf && z.H.Gf(), z.H.Gf = null, ee(z.H.ha)) };
z.H.X = function() { return !!z.H.Vj };
z.H.zj = function(a) { z.H.Vj == a && z.H.Fa() };
z.H.position = function(a, b, c, e, f) { b < e.y && (b = e.y);
    f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
    z.H.Ps(a, b, c.height) };
z.H.Ps = function(a, b, c) { z.H.ha.style.left = a + "px";
    z.H.ha.style.top = b + "px";
    z.H.ha.style.height = c + "px" };
z.H.Uo = function(a, b, c, e) { z.H.Ps(z.H.Tu(a, b, c, e), z.H.Uu(a, b, c), c.height) };
z.H.Tu = function(a, b, c, e) { if (e) return b = Math.max(b.right - c.width, a.left), Math.min(b, a.right - c.width);
    b = Math.min(b.left, a.right - c.width); return Math.max(b, a.left) };
z.H.Uu = function(a, b, c) { return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom };

function yl(a) { this.Yi = a;
    this.V() } d = yl.prototype;
d.wa = null;
d.je = null;
d.Yi = null;
d.gg = 1;
d.lk = null;
d.V = function() { this.wa || (this.wa = z.i.B("svg", { xmlns: z.Zm, "xmlns:html": z.uf, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyBlockDragSurface" }, this.Yi), this.je = z.i.B("g", {}, this.wa)) };

function Bf(a, b) { a.je.appendChild(b);
    a.wa.style.display = "block";
    a.lk = new D(0, 0) }
d.qf = function(a, b) { this.lk = new D(a * this.gg, b * this.gg);
    a = this.lk.x;
    b = this.lk.y;
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.wa.style.display = "block";
    z.i.dk(this.wa, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.Gl = function() { var a = z.i.tc(this.wa); return new D(a.x / this.gg, a.y / this.gg) };
d.rc = function() { return this.je };
d.Ui = function(a) { a ? a.appendChild(this.je.firstChild) : this.je.removeChild(this.je.firstChild);
    this.wa.style.display = "none";
    this.lk = null };
z.Qf = function(a, b) { z.Wu();
    q(a) && (a = document.getElementById(a) || document.querySelector(a)); if (!ge(document, a)) throw "Error: container is not in current document.";
    b = new Yf(b || {}); var c = F("DIV", "injectionDiv");
    a.appendChild(c);
    a = z.$i(c, b); var e = new yl(c);
    c = new xg(c);
    b = z.jv(a, b, e, c);
    z.ww(b);
    z.Yf = b;
    z.ph(b); return b };
z.$i = function(a, b) {
    a.setAttribute("dir", "LTR");
    Ph = b.u;
    z.od.Qf(b.ow, b.Sd);
    a = z.i.B("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:html": "http://www.w3.org/1999/xhtml", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklySvg" }, a);
    var c = z.i.B("defs", {}, a),
        e = String(Math.random()).substring(2),
        f = z.i.B("filter", { id: "blocklyEmbossFilter" + e }, c);
    z.i.B("feGaussianBlur", { "in": "SourceAlpha", stdDeviation: 1, result: "blur" }, f);
    var h = z.i.B("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, f);
    z.i.B("fePointLight", { x: -5E3, y: -1E4, z: 2E4 }, h);
    z.i.B("feComposite", { "in": "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" }, f);
    z.i.B("feComposite", { "in": "SourceGraphic", in2: "specOut", operator: "arithmetic", k1: 0, k2: 1, k3: 1, k4: 0 }, f);
    b.zr = f.id;
    f = z.i.B("pattern", { id: "blocklyDisabledPattern" + e, patternUnits: "userSpaceOnUse", width: 10, height: 10 }, c);
    z.i.B("rect", { width: 10, height: 10, fill: "#aaa" }, f);
    z.i.B("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    b.fj = f.id;
    f = b.Jr;
    c = z.i.B("pattern", { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" }, c);
    0 < f.length && 0 < f.spacing ? (z.i.B("line", { stroke: f.colour }, c), 1 < f.length && z.i.B("line", { stroke: f.colour }, c)) : z.i.B("line", {}, c);
    b.Kr = c;
    return a
};
z.jv = function(a, b, c, e) {
    b.Lb = null;
    var f = new Hg(b, c, e);
    f.scale = b.Yb.mt;
    a.appendChild(f.V("blocklyMainBackground"));
    !b.Nr && b.xe && (c = Mg(f, "svg"), z.i.Fj(c, a));
    f.translate(0, 0);
    z.Yf = f;
    b.readOnly || b.Qr || f.Fc(function() {
        if (!f.pb()) {
            var a = f.rb(),
                c = a.Cb + a.lb,
                e = a.Ke + a.xb;
            if (a.nc < e || a.nc + a.mc > a.cb + e || a.Gc < (b.u ? a.Cb : c) || a.Gc + a.Hc > (b.u ? a.ya : a.ya + c))
                for (var m = cd(f, !1), n = 0, p; p = m[n]; n++) {
                    var r = p.la(),
                        x = p.Hb(),
                        w = e + 25 - x.height - r.y;
                    0 < w && p.moveBy(0, w);
                    w = e + a.cb - 25 - r.y;
                    0 > w && p.moveBy(0, w);
                    w = 25 + c - r.x - (b.u ? 0 : x.width);
                    0 < w &&
                        p.moveBy(w, 0);
                    r = c + a.ya - 25 - r.x + (b.u ? x.width : 0);
                    0 > r && p.moveBy(r, 0)
                }
        }
    });
    z.ph(f);
    z.H.V();
    z.C.V();
    return f
};
z.ww = function(a) { var b = a.options,
        c = L(a);
    z.O(c.parentNode, "contextmenu", null, function(a) { z.i.Vl(a) || a.preventDefault() });
    c = z.O(window, "resize", null, function() { z.Qb(!0);
        z.ph(a) });
    a.tm = c;
    z.Qf.Nu();
    b.xe && (a.ea ? a.ea.L(a) : a.I && (a.I.L(a), a.I.show(b.xe.childNodes), a.I.mp(), a.scrollX = a.I.ka, b.Ba == z.$d && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.Qr && (a.ib = new $f(a), a.ib.resize());
    b.pw && z.Qf.Hw(b.Sd, a) };
z.Qf.Nu = function() { z.Hv || (z.O(document, "keydown", null, z.ax), z.Zb(document, "touchend", null, z.Xf), z.Zb(document, "touchcancel", null, z.Xf), qb && z.O(window, "orientationchange", document, function() { z.ph(z.Yh()) }));
    z.Hv = !0 };
z.Qf.Hw = function(a, b) {
    function c() { for (; f.length;) z.Da(f.pop());
        e.preload() } var e = b.Af;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete"); var f = [];
    f.push(z.O(document, "mousemove", null, c, !0));
    f.push(z.O(document, "touchstart", null, c, !0)) };
z.Im = function(a) { console.warn("Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead.");
    z.Yh().Im(a) };
z.Yf = null;
z.selected = null;
z.ll = [];
z.Wi = null;
z.Wk = null;
z.BB = null;
z.Ur = function(a) { var b = z.Wt,
        c = 255 * z.Xt,
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
                e = c, f = b, h = a } } return lj([Math.floor(e), Math.floor(f), Math.floor(h)]) };
z.rt = function(a) { return { width: a.wq, height: a.uq } };
z.NB = function(a) { Af(a) };
z.ph = function(a) { for (; a.options.Lb;) a = a.options.Lb; var b = L(a),
        c = b.parentNode; if (c) { var e = c.offsetWidth;
        c = c.offsetHeight;
        b.wq != e && (b.setAttribute("width", e + "px"), b.wq = e);
        b.uq != c && (b.setAttribute("height", c + "px"), b.uq = c);
        a.resize() } };
z.ax = function(a) {
    if (!z.Yf.options.readOnly && !z.i.Vl(a)) {
        var b = !1;
        if (27 == a.keyCode) z.Qb();
        else if (8 == a.keyCode || 46 == a.keyCode) { a.preventDefault(); if (z.Yf.pb()) return;
            z.selected && z.selected.ec() && (b = !0) } else if (a.altKey || a.ctrlKey || a.metaKey) { if (z.Yf.pb()) return;
            z.selected && z.selected.ec() && z.selected.we() && (67 == a.keyCode ? (z.Qb(), z.wn(z.selected)) : 88 != a.keyCode || z.selected.o.Pd || (z.wn(z.selected), b = !0));
            86 == a.keyCode ? z.Wi && (z.j.R(!0), a = z.Wk, a.Pd && (a = a.qh), Qg(a), z.j.R(!1)) : 90 == a.keyCode && (z.Qb(), z.Yf.Pp(a.shiftKey)) } b &&
            !z.selected.o.Pd && (z.j.R(!0), z.Qb(), z.selected.A(!0, !0), z.j.R(!1))
    }
};
z.wn = function(a) { if (a.Yr) var b = a.qk();
    else { b = z.D.Bf(a);
        z.D.Bv(b); var c = a.la();
        b.setAttribute("x", a.u ? -c.x : c.x);
        b.setAttribute("y", c.y) } z.Wi = b;
    z.Wk = a.o };
z.xr = function(a) { var b = z.Wi,
        c = z.Wk;
    z.wn(a);
    Qg(a.o);
    z.Wi = b;
    z.Wk = c };
z.LB = function(a) { z.i.Vl(a) || a.preventDefault() };
z.Qb = function(a) { z.C.Fa();
    z.H.Fa();
    a || (a = z.Yh(), a.ea && a.ea.I && a.ea.I.Lh && a.ea.Hd.dd(null)) };
z.Fc = function(a) { console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."); return z.Yh().Fc(a) };
z.Yh = function() { return z.Yf };
z.alert = function(a, b) { window.alert(a);
    b && b() };
z.confirm = function(a, b) { b(window.confirm(a)) };
z.prompt = function(a, b, c) { c(window.prompt(a, b)) };
z.Bw = function(a) { return function() { Hh(this, a) } };
z.Oh = function(a) { for (var b = 0; b < a.length; b++) { var c = a[b]; if (c) { var e = c.type;
            null == e || "" === e ? console.warn("Block definition #" + b + " in JSON array is missing a type attribute. Skipping.") : (z.J[e] && console.warn("Block definition #" + b + ' in JSON array overwrites prior definition of "' + e + '".'), z.J[e] = { L: z.Bw(c) }) } else console.warn("Block definition #" + b + " in JSON array is " + c + ". Skipping.") } };
z.O = function(a, b, c, e, f, h) {
    function k(a) { var b = !f;
        a = z.Touch.Cx(a); for (var h = 0, k; k = a[h]; h++)
            if (!b || z.Touch.Bp(k)) z.Touch.zx(k), c ? e.call(c, k) : e(k), l = !0 } var l = !1,
        m = []; if (g.PointerEvent && b in z.Touch.ae)
        for (var n = 0, p; p = z.Touch.ae[b][n]; n++) a.addEventListener(p, k, !1), m.push([a, p, k]);
    else if (a.addEventListener(b, k, !1), m.push([a, b, k]), b in z.Touch.ae) { var r = function(a) { k(a); var b = !h;
            l && b && a.preventDefault() }; for (n = 0; p = z.Touch.ae[b][n]; n++) a.addEventListener(p, r, !1), m.push([a, p, r]) } return m };
z.Zb = function(a, b, c, e) {
    function f(a) { c ? e.call(c, a) : e(a) } var h = [],
        k = g.window; if (k && k.PointerEvent && b in z.Touch.ae) { k = 0; for (var l; l = z.Touch.ae[b][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f]) } else if (a.addEventListener(b, f, !1), h.push([a, b, f]), b in z.Touch.ae) { var m = function(a) { if (a.changedTouches && 1 == a.changedTouches.length) { var b = a.changedTouches[0];
                a.clientX = b.clientX;
                a.clientY = b.clientY } f(a);
            a.preventDefault() }; for (k = 0; l = z.Touch.ae[b][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m]) } return h };
z.Da = function(a) { for (; a.length;) { var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1) } };
z.Tf = function(a) { return /^\s*-?\d+(\.\d+)?\s*$/.test(a) };
z.Wu = function() {
    z.ac("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    z.ac("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    z.ac("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    z.ac("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    z.ac("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    z.ac("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    z.ac("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    z.ac("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    z.ac("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    z.ac("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    z.ac("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    z.ac("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    z.ac("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    z.ac("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    z.ac("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    z.ac("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
z.ac = function(a, b, c) { for (var e = "Blockly", f = z, h = 0; h < b.length; ++h) e += "." + b[h], f && (f = f[b[h]]);
    f && f !== c && (a = (void 0 === c ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a)) };
g.console || (g.console = { log: function() {}, warn: function() {} });
g.Blockly || (g.Blockly = {});
g.Blockly.getMainWorkspace = z.Yh;
g.Blockly.addChangeListener = z.Fc;

function zl(a, b) { var c = a.className;
    c = q(c) && c.match(/\S+/g) || []; for (var e = Ca(arguments, 1), f = 0; f < e.length; f++) wa(c, e[f]) || c.push(e[f]);
    c = c.join(" ");
    a.className = c };
var Al = {
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
    Bl = "ace ar fa he mzn ps".split(" "),
    Cl = window.BlocklyGamesLang,
    Dl = window.BlocklyGamesLanguages,
    El = !!window.location.pathname.match(/\.html$/),
    O = null,
    V, Fl = Number,
    Gl, Hl = window.location.search.match(/[?&]level=([^&]+)/);
Gl = Hl ? decodeURIComponent(Hl[1].replace(/\+/g, "%20")) : "NaN";
var Il = Fl(Gl);
V = isNaN(Il) ? 1 : rc(1, Il, 10);

function Jl() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != Bl.indexOf(Cl) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", Cl);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < Dl.length; c++) { var e = Dl[c];
            b.push([Al[e], e]) } b.sort(function(a, b) { return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0 });
        for (c = a.options.length = 0; c < b.length; c++) { var f = b[c];
            e = f[1];
            f = new Option(f[0], e);
            e == Cl && (f.selected = !0);
            a.options.add(f) } 1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!Kl(c), a && b && zl(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Ll, 1)
}

function Kl(a) { var b = Ml; try { var c = window.localStorage[b + a] } catch (e) {} return c }

function W(a) { var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null; return null === b ? "[Unknown message: " + a + "]" : b }

function Nl(a, b) { if (!a) throw TypeError("Element not found: " + a); "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0) }

function Ll() { if (!El) { window.GoogleAnalyticsObject = "GoogleAnalyticsFunction"; var a = function(b) {
            (a.q = a.q || []).push(arguments) };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date; var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview") } };
z.g.HB = {};
z.g.ADD_COMMENT = "Add Comment";
z.g.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
z.g.CHANGE_VALUE_TITLE = "Change value:";
z.g.CLEAN_UP = "Clean up Blocks";
z.g.COLLAPSE_ALL = "Collapse Blocks";
z.g.COLLAPSE_BLOCK = "Collapse Block";
z.g.COLOUR_BLEND_COLOUR1 = "colour 1";
z.g.COLOUR_BLEND_COLOUR2 = "colour 2";
z.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
z.g.COLOUR_BLEND_RATIO = "ratio";
z.g.COLOUR_BLEND_TITLE = "blend";
z.g.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).";
z.g.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
z.g.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
z.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
z.g.COLOUR_RANDOM_TITLE = "random colour";
z.g.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
z.g.COLOUR_RGB_BLUE = "blue";
z.g.COLOUR_RGB_GREEN = "green";
z.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
z.g.COLOUR_RGB_RED = "red";
z.g.COLOUR_RGB_TITLE = "colour with";
z.g.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
z.g.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
z.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
z.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
z.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
z.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
z.g.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
z.g.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
z.g.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
z.g.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
z.g.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
z.g.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
z.g.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
z.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
z.g.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
z.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
z.g.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
z.g.CONTROLS_IF_MSG_ELSE = "else";
z.g.CONTROLS_IF_MSG_ELSEIF = "else if";
z.g.CONTROLS_IF_MSG_IF = "if";
z.g.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
z.g.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
z.g.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
z.g.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
z.g.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
z.g.CONTROLS_REPEAT_INPUT_DO = "do";
z.g.CONTROLS_REPEAT_TITLE = "repeat %1 times";
z.g.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
z.g.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
z.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
z.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
z.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
z.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
z.g.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
z.g.DELETE_BLOCK = "Delete Block";
z.g.DELETE_VARIABLE = "Delete the '%1' variable";
z.g.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
z.g.DELETE_X_BLOCKS = "Delete %1 Blocks";
z.g.DISABLE_BLOCK = "Disable Block";
z.g.DUPLICATE_BLOCK = "Duplicate";
z.g.DUPLICATE_COMMENT = "Duplicate Comment";
z.g.ENABLE_BLOCK = "Enable Block";
z.g.EXPAND_ALL = "Expand Blocks";
z.g.EXPAND_BLOCK = "Expand Block";
z.g.EXTERNAL_INPUTS = "External Inputs";
z.g.HELP = "Help";
z.g.INLINE_INPUTS = "Inline Inputs";
z.g.IOS_CANCEL = "Cancel";
z.g.IOS_ERROR = "Error";
z.g.IOS_OK = "OK";
z.g.IOS_PROCEDURES_ADD_INPUT = "+ Add Input";
z.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Allow statements";
z.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = "This function has duplicate inputs.";
z.g.IOS_PROCEDURES_INPUTS = "INPUTS";
z.g.IOS_VARIABLES_ADD_BUTTON = "Add";
z.g.IOS_VARIABLES_ADD_VARIABLE = "+ Add Variable";
z.g.IOS_VARIABLES_DELETE_BUTTON = "Delete";
z.g.IOS_VARIABLES_EMPTY_NAME_ERROR = "You can't use an empty variable name.";
z.g.IOS_VARIABLES_RENAME_BUTTON = "Rename";
z.g.IOS_VARIABLES_VARIABLE_NAME = "Variable name";
z.g.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
z.g.LISTS_CREATE_EMPTY_TITLE = "create empty list";
z.g.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
z.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
z.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
z.g.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
z.g.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
z.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
z.g.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
z.g.LISTS_GET_INDEX_FIRST = "first";
z.g.LISTS_GET_INDEX_FROM_END = "# from end";
z.g.LISTS_GET_INDEX_FROM_START = "#";
z.g.LISTS_GET_INDEX_GET = "get";
z.g.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
z.g.LISTS_GET_INDEX_LAST = "last";
z.g.LISTS_GET_INDEX_RANDOM = "random";
z.g.LISTS_GET_INDEX_REMOVE = "remove";
z.g.LISTS_GET_INDEX_TAIL = "";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
z.g.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
z.g.LISTS_GET_SUBLIST_END_FROM_START = "to #";
z.g.LISTS_GET_SUBLIST_END_LAST = "to last";
z.g.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
z.g.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
z.g.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
z.g.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
z.g.LISTS_GET_SUBLIST_TAIL = "";
z.g.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
z.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
z.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
z.g.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
z.g.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
z.g.LISTS_INDEX_OF_LAST = "find last occurrence of item";
z.g.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
z.g.LISTS_INLIST = "in list";
z.g.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
z.g.LISTS_ISEMPTY_TITLE = "%1 is empty";
z.g.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
z.g.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
z.g.LISTS_LENGTH_TITLE = "length of %1";
z.g.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
z.g.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
z.g.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
z.g.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
z.g.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
z.g.LISTS_REVERSE_MESSAGE0 = "reverse %1";
z.g.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
z.g.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
z.g.LISTS_SET_INDEX_INPUT_TO = "as";
z.g.LISTS_SET_INDEX_INSERT = "insert at";
z.g.LISTS_SET_INDEX_SET = "set";
z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.";
z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
z.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
z.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.";
z.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
z.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
z.g.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
z.g.LISTS_SORT_ORDER_ASCENDING = "ascending";
z.g.LISTS_SORT_ORDER_DESCENDING = "descending";
z.g.LISTS_SORT_TITLE = "sort %1 %2 %3";
z.g.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
z.g.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
z.g.LISTS_SORT_TYPE_NUMERIC = "numeric";
z.g.LISTS_SORT_TYPE_TEXT = "alphabetic";
z.g.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
z.g.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
z.g.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
z.g.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
z.g.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
z.g.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
z.g.LOGIC_BOOLEAN_FALSE = "false";
z.g.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
z.g.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
z.g.LOGIC_BOOLEAN_TRUE = "true";
z.g.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
z.g.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
z.g.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
z.g.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
z.g.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
z.g.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
z.g.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
z.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
z.g.LOGIC_NEGATE_TITLE = "not %1";
z.g.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
z.g.LOGIC_NULL = "null";
z.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
z.g.LOGIC_NULL_TOOLTIP = "Returns null.";
z.g.LOGIC_OPERATION_AND = "and";
z.g.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
z.g.LOGIC_OPERATION_OR = "or";
z.g.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
z.g.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
z.g.LOGIC_TERNARY_CONDITION = "test";
z.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
z.g.LOGIC_TERNARY_IF_FALSE = "if false";
z.g.LOGIC_TERNARY_IF_TRUE = "if true";
z.g.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
z.g.MATH_ADDITION_SYMBOL = "+";
z.g.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
z.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
z.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
z.g.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
z.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
z.g.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
z.g.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
z.g.MATH_CHANGE_TITLE = "change %1 by %2";
z.g.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
z.g.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
z.g.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
z.g.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
z.g.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
z.g.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
z.g.MATH_DIVISION_SYMBOL = "\u00f7";
z.g.MATH_IS_DIVISIBLE_BY = "is divisible by";
z.g.MATH_IS_EVEN = "is even";
z.g.MATH_IS_NEGATIVE = "is negative";
z.g.MATH_IS_ODD = "is odd";
z.g.MATH_IS_POSITIVE = "is positive";
z.g.MATH_IS_PRIME = "is prime";
z.g.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
z.g.MATH_IS_WHOLE = "is whole";
z.g.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
z.g.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
z.g.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
z.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
z.g.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
z.g.MATH_NUMBER_TOOLTIP = "A number.";
z.g.MATH_ONLIST_HELPURL = "";
z.g.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
z.g.MATH_ONLIST_OPERATOR_MAX = "max of list";
z.g.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
z.g.MATH_ONLIST_OPERATOR_MIN = "min of list";
z.g.MATH_ONLIST_OPERATOR_MODE = "modes of list";
z.g.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
z.g.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
z.g.MATH_ONLIST_OPERATOR_SUM = "sum of list";
z.g.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
z.g.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
z.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
z.g.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
z.g.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
z.g.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
z.g.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
z.g.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
z.g.MATH_POWER_SYMBOL = "^";
z.g.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
z.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
z.g.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
z.g.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
z.g.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
z.g.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
z.g.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
z.g.MATH_ROUND_OPERATOR_ROUND = "round";
z.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
z.g.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
z.g.MATH_ROUND_TOOLTIP = "Round a number up or down.";
z.g.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
z.g.MATH_SINGLE_OP_ABSOLUTE = "absolute";
z.g.MATH_SINGLE_OP_ROOT = "square root";
z.g.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
z.g.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
z.g.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
z.g.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
z.g.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
z.g.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
z.g.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
z.g.MATH_SUBTRACTION_SYMBOL = "-";
z.g.MATH_TRIG_ACOS = "acos";
z.g.MATH_TRIG_ASIN = "asin";
z.g.MATH_TRIG_ATAN = "atan";
z.g.MATH_TRIG_COS = "cos";
z.g.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
z.g.MATH_TRIG_SIN = "sin";
z.g.MATH_TRIG_TAN = "tan";
z.g.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
z.g.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
z.g.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
z.g.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
z.g.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
z.g.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
z.g.NEW_COLOUR_VARIABLE = "Create colour variable...";
z.g.NEW_NUMBER_VARIABLE = "Create number variable...";
z.g.NEW_STRING_VARIABLE = "Create string variable...";
z.g.NEW_VARIABLE = "Create variable...";
z.g.NEW_VARIABLE_TITLE = "New variable name:";
z.g.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
z.g.ORDINAL_NUMBER_SUFFIX = "";
z.g.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
z.g.PROCEDURES_BEFORE_PARAMS = "with:";
z.g.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
z.g.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
z.g.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
z.g.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
z.g.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
z.g.PROCEDURES_CREATE_DO = "Create '%1'";
z.g.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
z.g.PROCEDURES_DEFNORETURN_DO = "";
z.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
z.g.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
z.g.PROCEDURES_DEFNORETURN_TITLE = "to";
z.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
z.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
z.g.PROCEDURES_DEFRETURN_RETURN = "return";
z.g.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
z.g.PROCEDURES_DEF_DUPLICATE_WARNING = "Warning: This function has duplicate parameters.";
z.g.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
z.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
z.g.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
z.g.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
z.g.PROCEDURES_MUTATORARG_TITLE = "input name:";
z.g.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
z.g.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
z.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
z.g.REDO = "Redo";
z.g.REMOVE_COMMENT = "Remove Comment";
z.g.RENAME_VARIABLE = "Rename variable...";
z.g.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
z.g.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
z.g.TEXT_APPEND_TITLE = "to %1 append text %2";
z.g.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
z.g.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
z.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
z.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
z.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
z.g.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
z.g.TEXT_CHARAT_FIRST = "get first letter";
z.g.TEXT_CHARAT_FROM_END = "get letter # from end";
z.g.TEXT_CHARAT_FROM_START = "get letter #";
z.g.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
z.g.TEXT_CHARAT_LAST = "get last letter";
z.g.TEXT_CHARAT_RANDOM = "get random letter";
z.g.TEXT_CHARAT_TAIL = "";
z.g.TEXT_CHARAT_TITLE = "in text %1 %2";
z.g.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
z.g.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
z.g.TEXT_COUNT_MESSAGE0 = "count %1 in %2";
z.g.TEXT_COUNT_TOOLTIP = "Count how many times some text occurs within some other text.";
z.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
z.g.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
z.g.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
z.g.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
z.g.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
z.g.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
z.g.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
z.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
z.g.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
z.g.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
z.g.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
z.g.TEXT_GET_SUBSTRING_TAIL = "";
z.g.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
z.g.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
z.g.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
z.g.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
z.g.TEXT_INDEXOF_TITLE = "in text %1 %2 %3";
z.g.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
z.g.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
z.g.TEXT_ISEMPTY_TITLE = "%1 is empty";
z.g.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
z.g.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
z.g.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
z.g.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
z.g.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
z.g.TEXT_LENGTH_TITLE = "length of %1";
z.g.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
z.g.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
z.g.TEXT_PRINT_TITLE = "print %1";
z.g.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
z.g.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
z.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
z.g.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
z.g.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
z.g.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
z.g.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
z.g.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3";
z.g.TEXT_REPLACE_TOOLTIP = "Replace all occurances of some text within some other text.";
z.g.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Text#reversing-text";
z.g.TEXT_REVERSE_MESSAGE0 = "reverse %1";
z.g.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.";
z.g.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
z.g.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
z.g.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
z.g.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
z.g.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
z.g.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
z.g.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";
z.g.TODAY = "Today";
z.g.UNDO = "Undo";
z.g.VARIABLES_DEFAULT_NAME = "item";
z.g.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
z.g.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
z.g.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
z.g.VARIABLES_SET = "set %1 to %2";
z.g.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
z.g.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
z.g.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
z.g.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
z.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
z.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
z.g.PROCEDURES_DEFRETURN_TITLE = z.g.PROCEDURES_DEFNORETURN_TITLE;
z.g.CONTROLS_IF_IF_TITLE_IF = z.g.CONTROLS_IF_MSG_IF;
z.g.CONTROLS_WHILEUNTIL_INPUT_DO = z.g.CONTROLS_REPEAT_INPUT_DO;
z.g.CONTROLS_IF_MSG_THEN = z.g.CONTROLS_REPEAT_INPUT_DO;
z.g.CONTROLS_IF_ELSE_TITLE_ELSE = z.g.CONTROLS_IF_MSG_ELSE;
z.g.PROCEDURES_DEFRETURN_PROCEDURE = z.g.PROCEDURES_DEFNORETURN_PROCEDURE;
z.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = z.g.LISTS_INLIST;
z.g.LISTS_GET_INDEX_INPUT_IN_LIST = z.g.LISTS_INLIST;
z.g.MATH_CHANGE_TITLE_ITEM = z.g.VARIABLES_DEFAULT_NAME;
z.g.PROCEDURES_DEFRETURN_DO = z.g.PROCEDURES_DEFNORETURN_DO;
z.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = z.g.CONTROLS_IF_MSG_ELSEIF;
z.g.LISTS_GET_INDEX_HELPURL = z.g.LISTS_INDEX_OF_HELPURL;
z.g.CONTROLS_FOREACH_INPUT_DO = z.g.CONTROLS_REPEAT_INPUT_DO;
z.g.LISTS_SET_INDEX_INPUT_IN_LIST = z.g.LISTS_INLIST;
z.g.CONTROLS_FOR_INPUT_DO = z.g.CONTROLS_REPEAT_INPUT_DO;
z.g.LISTS_CREATE_WITH_ITEM_TITLE = z.g.VARIABLES_DEFAULT_NAME;
z.g.TEXT_APPEND_VARIABLE = z.g.VARIABLES_DEFAULT_NAME;
z.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = z.g.VARIABLES_DEFAULT_NAME;
z.g.LISTS_INDEX_OF_INPUT_IN_LIST = z.g.LISTS_INLIST;
z.g.PROCEDURES_DEFRETURN_COMMENT = z.g.PROCEDURES_DEFNORETURN_COMMENT;
z.g.MATH_HUE = "230";
z.g.LOOPS_HUE = "120";
z.g.LISTS_HUE = "260";
z.g.LOGIC_HUE = "210";
z.g.VARIABLES_HUE = "330";
z.g.TEXTS_HUE = "160";
z.g.PROCEDURES_HUE = "290";
z.g.COLOUR_HUE = "20";
z.g.VARIABLES_DYNAMIC_HUE = "310";
var Y = {
    Sh: null,
    L: function() {
        Jl();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = W("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = W("Games_linkAlert"), BlocklyStorage.HASH_ERROR = W("Games_hashError"), BlocklyStorage.XML_ERROR = W("Games_xmlError"), BlocklyStorage.alert = X.ot.bind(X, a), a && Nl(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Y.Vu, !0);
        z.J && (z.J.ou = !1);
        z.h &&
            (z.h.ou = !1)
    },
    Gw: function(a, b) { if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else { var c = null; try { c = window.sessionStorage.ns } catch (h) {} c && delete window.sessionStorage.ns; var e = Kl(V),
                f = b && Kl(V - 1);
            f && "function" == typeof b && (f = b(f));
            (a = c || e || f || a) && Y.ct(a) } },
    ct: function(a) { Y.Sh ? Y.Sh.setValue(a, -1) : (a = z.D.fd(a), O.clear(), z.D.ie(a, O), O.Gq()) },
    Tn: function() {
        if (Y.Sh) var a = Y.Sh.getValue();
        else {
            a = z.D.Rp(O, !0);
            if (1 == cd(O, !1).length && a.querySelector) {
                var b =
                    a.querySelector("block");
                b && (b.removeAttribute("x"), b.removeAttribute("y"))
            }
            a = z.D.wd(a)
        }
        return a
    },
    tj: function() { return O },
    xx: function() { window.localStorage && (window.localStorage[Ml + V] = Y.Tn()) },
    Nl: function() { window.location = (El ? "index.html" : "./") + "?lang=" + Cl },
    Vu: function() {
        if (window.sessionStorage) { if (Y.Sh) var a = Y.Sh.getValue();
            else a = z.D.Rp(O), a = z.D.wd(a);
            window.sessionStorage.ns = a } a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var b = window.location.search;
        b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    Fo: function() { 10 > V ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Cl + "&level=" + (V + 1) : Y.Nl() },
    Aj: function(a, b) { if (a) { var c = a.match(/^block_id_([^']+)$/);
            c && (a = c[1]) } Pg(a, b) },
    mo: function(a, b) {
        a = document.getElementById(a);
        a.firstChild ||
            (a = z.Qf(a, { rtl: -1 != Bl.indexOf(Cl), readOnly: !0 }), "string" != typeof b && (b = b.join("")), z.D.ie(z.D.fd(b), a))
    },
    Ix: function(a) { return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "") },
    ke: function(a) { if ("click" == a.type && "touchend" == Y.ke.Yo && Y.ke.Xo + 2E3 > Date.now() || Y.ke.Yo == a.type && Y.ke.Xo + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        Y.ke.Yo = a.type;
        Y.ke.Xo = Date.now(); return !1 }
};
Y.ke.Yo = null;
Y.ke.Xo = 0;
Y.uw = function() { var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a) };
Y.vw = function() { var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a) };
window.BlocklyInterface = Y;
Y.setCode = Y.ct;
Y.getCode = Y.Tn;
Y.getWorkspace = Y.tj;
var X = {
    Qg: !1,
    mr: null,
    fl: null,
    yi: function(a, b, c, e, f, h) {
        function k() { X.Qg && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden") }
        if (!a) throw TypeError("Content not found: " + a);
        X.Qg && X.ad(!1);
        z.Qb(!0);
        X.Qg = !0;
        X.mr = b;
        X.fl = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), X.Bn = z.Zb(e, "mousedown", null, X.Cv));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (X.am(b, !1, .2), X.am(l, !0, .8), setTimeout(k, 175)) : k()
    },
    nr: 0,
    pr: 0,
    Cv: function(a) { X.En(); if (!z.i.Uf(a)) { var b = document.getElementById("dialog");
            X.nr = b.offsetLeft - a.clientX;
            X.pr = b.offsetTop - a.clientY;
            X.Dn = z.Zb(document, "mouseup", null, X.En);
            X.Cn = z.Zb(document, "mousemove", null, X.Dv);
            a.stopPropagation() } },
    Dv: function(a) {
        var b = document.getElementById("dialog"),
            c = X.nr + a.clientX;
        a = X.pr + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    En: function() { X.Dn && (z.Da(X.Dn), X.Dn = null);
        X.Cn && (z.Da(X.Cn), X.Cn = null) },
    ad: function(a) {
        function b() { e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden" }
        if (X.Qg) {
            X.En();
            X.Bn && (z.Da(X.Bn), X.Bn = null);
            X.Qg = !1;
            X.fl && X.fl();
            X.fl = null;
            var c = !1 === a ?
                null : X.mr;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            c && a ? (X.am(a, !1, .8), X.am(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    am: function(a, b, c) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top =
                h.y + "px";
            f.style.opacity = c
        }
        if (a) { var f = document.getElementById("dialogBorder"),
                h = X.Tv(a);
            b ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible" }
    },
    Tv: function(a) { var b = gh(a);
        b = { x: b.x, y: b.y };
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth); return b },
    ot: function(a, b) {
        var c = document.getElementById("containerStorage");
        c.textContent = "";
        b = b.split("\n");
        for (var e = 0; e < b.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(b[e]));
            c.appendChild(f)
        }
        c = document.getElementById("dialogStorage");
        X.yi(c, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, X.Jp);
        X.Ip()
    },
    Du: function() {
        if (!Kl(V))
            if (X.Qg || O.pb()) setTimeout(X.Du, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", X.ad, !0);
                b.addEventListener("touchend", X.ad, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Y.Nl, !0);
                b.addEventListener("touchend", Y.Nl,
                    !0);
                X.yi(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.nq, !0) });
                document.body.addEventListener("keydown", X.nq, !0)
            }
    },
    Dp: function() {
        document.getElementById("galleryXml").value = Y.Tn();
        var a = document.getElementById("galleryDialog");
        if (!X.Dp.wx) {
            var b = document.getElementById("galleryCancel");
            b.addEventListener("click", X.ad, !0);
            b.addEventListener("touchend", X.ad, !0);
            b = document.getElementById("galleryOk");
            b.addEventListener("click", X.Rn, !0);
            b.addEventListener("touchend",
                X.Rn, !0);
            X.Dp.wx = !0
        }
        b = document.getElementById("submitButton");
        X.yi(a, b, !0, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.Dr, !0) });
        document.body.addEventListener("keydown", X.Dr, !0);
        setTimeout(function() { document.getElementById("galleryTitle").focus() }, 250)
    },
    hv: function() {
        var a = document.getElementById("dialogDone");
        if (O) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = tk();
            c = Y.Ix(c);
            var e = c.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g,
                "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = c;
            "function" == typeof prettyPrintOne && (c = f.innerHTML, c = prettyPrintOne(c, "js"), f.innerHTML = c);
            c = 1 == e ? W("Games_linesOfCode1") : W("Games_linesOfCode2").replace("%1", String(e));
            b.appendChild(document.createTextNode(c))
        }
        c = 10 > V ? W("Games_nextLevel").replace("%1", String(V + 1)) : W("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click",
            X.ad, !0);
        b.addEventListener("touchend", X.ad, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Y.Fo, !0);
        b.addEventListener("touchend", Y.Fo, !0);
        X.yi(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.Lq, !0) });
        document.body.addEventListener("keydown", X.Lq, !0);
        document.getElementById("dialogDoneText").textContent = c
    },
    lr: function(a) {!X.Qg || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (X.ad(!0), a.stopPropagation(), a.preventDefault()) },
    Ip: function() { document.body.addEventListener("keydown", X.lr, !0) },
    Jp: function() { document.body.removeEventListener("keydown", X.lr, !0) },
    Lq: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.ad(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.Fo() },
    nq: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.ad(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.Nl() },
    Dr: function(a) { 27 == a.keyCode ? X.ad(!0) : 13 == a.keyCode && X.Rn() },
    Rn: function() {
        var a = document.getElementById("galleryTitle");
        if (a.value.trim()) { a = document.getElementById("galleryForm"); for (var b = [], c = 0, e; e = a.elements[c]; c++) e.name && (b[c] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)); var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function() { if (4 == f.readyState) { var a = 200 == f.status ? W("Games_submitted") : W("Games_httpRequestError") + "\nStatus: " + f.status;
                    X.ot(null, a) } };
            f.send(b.join("&"));
            X.ad(!0) } else a.value = "", a.focus()
    }
};
window.BlocklyDialogs = X;
X.hideDialog = X.ad;
z.J.zo = {};
z.aa = {};
z.aa.ju = {};
z.aa.ju.Ik = 260;
z.Oh([{ type: "lists_create_empty", message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}", output: "Array", colour: "%{BKY_LISTS_HUE}", tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}", helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}" }, { type: "lists_repeat", message0: "%{BKY_LISTS_REPEAT_TITLE}", args0: [{ type: "input_value", name: "ITEM" }, { type: "input_value", name: "NUM", check: "Number" }], output: "Array", colour: "%{BKY_LISTS_HUE}", tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}", helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}" }, {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{ type: "input_value", name: "LIST", check: "Array" }],
    output: "Array",
    inputsInline: !0,
    colour: "%{BKY_LISTS_HUE}",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}"
}, { type: "lists_isEmpty", message0: "%{BKY_LISTS_ISEMPTY_TITLE}", args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }], output: "Boolean", colour: "%{BKY_LISTS_HUE}", tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}", helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}" }, {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Number",
    colour: "%{BKY_LISTS_HUE}",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}"
}]);
z.J.lists_create_with = {
    L: function() { this.Pb = z.g.LISTS_CREATE_WITH_HELPURL;
        this.qb(z.g.LISTS_HUE);
        this.Qd = 3;
        this.ld();
        this.Ed(!0, "Array");
        this.gk(new Yg(["lists_create_with_item"]));
        this.La(z.g.LISTS_CREATE_WITH_TOOLTIP) },
    Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("items", this.Qd); return a },
    fb: function(a) { this.Qd = parseInt(a.getAttribute("items"), 10);
        this.ld() },
    We: function(a) {
        var b = a.ef("lists_create_with_container");
        b.wc();
        for (var c = K(b, "STACK").connection, e = 0; e < this.Qd; e++) {
            var f =
                a.ef("lists_create_with_item");
            f.wc();
            c.connect(f.Y);
            c = f.K
        }
        return b
    },
    Ue: function(a) { var b = Jh(a, "STACK"); for (a = []; b;) a.push(b.Qp), b = b.K && J(b.K); for (b = 0; b < this.Qd; b++) { var c = K(this, "ADD" + b).connection.Na;
            c && -1 == a.indexOf(c) && c.disconnect() } this.Qd = a.length;
        this.ld(); for (b = 0; b < this.Qd; b++) Zg(a[b], this, "ADD" + b) },
    um: function(a) { a = Jh(a, "STACK"); for (var b = 0; a;) { var c = K(this, "ADD" + b);
            a.Qp = c && c.connection.Na;
            b++;
            a = a.K && J(a.K) } },
    ld: function() {
        this.Qd && K(this, "EMPTY") ? this.Ab("EMPTY") : this.Qd || K(this, "EMPTY") ||
            P(Q(this, "EMPTY"), z.g.LISTS_CREATE_EMPTY_TITLE);
        for (var a = 0; a < this.Qd; a++)
            if (!K(this, "ADD" + a)) { var b = Gh(this, "ADD" + a);
                0 == a && P(b, z.g.LISTS_CREATE_WITH_INPUT_WITH) } for (; K(this, "ADD" + a);) this.Ab("ADD" + a), a++
    }
};
z.J.lists_create_with_container = { L: function() { this.qb(z.g.LISTS_HUE);
        P(Q(this), z.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.ce(z.Qa, "STACK");
        this.La(z.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = !1 } };
z.J.lists_create_with_item = { L: function() { this.qb(z.g.LISTS_HUE);
        P(Q(this), z.g.LISTS_CREATE_WITH_ITEM_TITLE);
        this.De(!0);
        this.Ce(!0);
        this.La(z.g.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1 } };
z.J.lists_indexOf = { L: function() { var a = [
            [z.g.LISTS_INDEX_OF_FIRST, "FIRST"],
            [z.g.LISTS_INDEX_OF_LAST, "LAST"]
        ];
        this.Pb = z.g.LISTS_INDEX_OF_HELPURL;
        this.qb(z.g.LISTS_HUE);
        this.Ed(!0, "Number");
        P(Gh(this, "VALUE").bb("Array"), z.g.LISTS_INDEX_OF_INPUT_IN_LIST);
        P(Gh(this, "FIND"), new Fh(a), "END");
        this.Dd(!0); var b = this;
        this.La(function() { return z.g.LISTS_INDEX_OF_TOOLTIP.replace("%1", b.o.options.ye ? "0" : "-1") }) } };
z.J.lists_getIndex = {
    L: function() {
        var a = [
            [z.g.LISTS_GET_INDEX_GET, "GET"],
            [z.g.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
            [z.g.LISTS_GET_INDEX_REMOVE, "REMOVE"]
        ];
        this.cn = [
            [z.g.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [z.g.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [z.g.LISTS_GET_INDEX_FIRST, "FIRST"],
            [z.g.LISTS_GET_INDEX_LAST, "LAST"],
            [z.g.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.Pb = z.g.LISTS_GET_INDEX_HELPURL;
        this.qb(z.g.LISTS_HUE);
        a = new Fh(a, function(a) { this.v.vt("REMOVE" == a) });
        P(Gh(this, "VALUE").bb("Array"),
            z.g.LISTS_GET_INDEX_INPUT_IN_LIST);
        P(P(Q(this), a, "MODE"), "", "SPACE");
        Q(this, "AT");
        z.g.LISTS_GET_INDEX_TAIL && P(Q(this, "TAIL"), z.g.LISTS_GET_INDEX_TAIL);
        this.Dd(!0);
        this.Ed(!0);
        this.kd(!0);
        var b = this;
        this.La(function() {
            var a = E(b, "MODE"),
                e = E(b, "WHERE"),
                f = "";
            switch (a + " " + e) {
                case "GET FROM_START":
                case "GET FROM_END":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                    break;
                case "GET FIRST":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                    break;
                case "GET LAST":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                    break;
                case "GET RANDOM":
                    f =
                        z.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                    break;
                case "GET_REMOVE FROM_START":
                case "GET_REMOVE FROM_END":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                    break;
                case "GET_REMOVE FIRST":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                    break;
                case "GET_REMOVE LAST":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                    break;
                case "GET_REMOVE RANDOM":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                    break;
                case "REMOVE FROM_START":
                case "REMOVE FROM_END":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                    break;
                case "REMOVE FIRST":
                    f =
                        z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                    break;
                case "REMOVE LAST":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                    break;
                case "REMOVE RANDOM":
                    f = z.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + ("FROM_START" == e ? z.g.LISTS_INDEX_FROM_START_TOOLTIP : z.g.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1", b.o.options.ye ? "#1" : "#0");
            return f
        })
    },
    Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("statement", !this.N);
        a.setAttribute("at", K(this, "AT").type == z.Wa); return a },
    fb: function(a) { var b = "true" == a.getAttribute("statement");
        this.vt(b);
        a = "false" != a.getAttribute("at");
        this.kd(a) },
    vt: function(a) { a != !this.N && (Ee(this, !0), a ? (this.Ed(!1), this.De(!0), this.Ce(!0)) : (this.De(!1), this.Ce(!1), this.Ed(!0))) },
    kd: function(a) {
        this.Ab("AT");
        this.Ab("ORDINAL", !0);
        a ? (Gh(this, "AT").bb("Number"), z.g.ORDINAL_NUMBER_SUFFIX && P(Q(this, "ORDINAL"), z.g.ORDINAL_NUMBER_SUFFIX)) : Q(this, "AT");
        var b = new Fh(this.cn, function(b) {
            var c = "FROM_START" == b || "FROM_END" == b;
            if (c != a) {
                var f = this.v;
                f.kd(c);
                I(f, "WHERE").setValue(b);
                return null
            }
        });
        P(K(this, "AT"), b, "WHERE");
        z.g.LISTS_GET_INDEX_TAIL && Ih(this, "TAIL", null)
    }
};
z.J.lists_setIndex = {
    L: function() {
        var a = [
            [z.g.LISTS_SET_INDEX_SET, "SET"],
            [z.g.LISTS_SET_INDEX_INSERT, "INSERT"]
        ];
        this.cn = [
            [z.g.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [z.g.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [z.g.LISTS_GET_INDEX_FIRST, "FIRST"],
            [z.g.LISTS_GET_INDEX_LAST, "LAST"],
            [z.g.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.Pb = z.g.LISTS_SET_INDEX_HELPURL;
        this.qb(z.g.LISTS_HUE);
        P(Gh(this, "LIST").bb("Array"), z.g.LISTS_SET_INDEX_INPUT_IN_LIST);
        P(P(Q(this), new Fh(a), "MODE"), "", "SPACE");
        Q(this, "AT");
        P(Gh(this,
            "TO"), z.g.LISTS_SET_INDEX_INPUT_TO);
        this.Dd(!0);
        this.De(!0);
        this.Ce(!0);
        this.La(z.g.LISTS_SET_INDEX_TOOLTIP);
        this.kd(!0);
        var b = this;
        this.La(function() {
            var a = E(b, "MODE"),
                e = E(b, "WHERE"),
                f = "";
            switch (a + " " + e) {
                case "SET FROM_START":
                case "SET FROM_END":
                    f = z.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                    break;
                case "SET FIRST":
                    f = z.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                    break;
                case "SET LAST":
                    f = z.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                    break;
                case "SET RANDOM":
                    f = z.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                    break;
                case "INSERT FROM_START":
                case "INSERT FROM_END":
                    f =
                        z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                    break;
                case "INSERT FIRST":
                    f = z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                    break;
                case "INSERT LAST":
                    f = z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                    break;
                case "INSERT RANDOM":
                    f = z.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + z.g.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", b.o.options.ye ? "#1" : "#0");
            return f
        })
    },
    Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("at", K(this, "AT").type == z.Wa); return a },
    fb: function(a) {
        a =
            "false" != a.getAttribute("at");
        this.kd(a)
    },
    kd: function(a) { this.Ab("AT");
        this.Ab("ORDINAL", !0);
        a ? (Gh(this, "AT").bb("Number"), z.g.ORDINAL_NUMBER_SUFFIX && P(Q(this, "ORDINAL"), z.g.ORDINAL_NUMBER_SUFFIX)) : Q(this, "AT"); var b = new Fh(this.cn, function(b) { var c = "FROM_START" == b || "FROM_END" == b; if (c != a) { var f = this.v;
                f.kd(c);
                I(f, "WHERE").setValue(b); return null } });
        Ih(this, "AT", "TO");
        K(this, "ORDINAL") && Ih(this, "ORDINAL", "TO");
        P(K(this, "AT"), b, "WHERE") }
};
z.J.lists_getSublist = {
    L: function() {
        this.WHERE_OPTIONS_1 = [
            [z.g.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
            [z.g.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
            [z.g.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]
        ];
        this.WHERE_OPTIONS_2 = [
            [z.g.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
            [z.g.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
            [z.g.LISTS_GET_SUBLIST_END_LAST, "LAST"]
        ];
        this.Pb = z.g.LISTS_GET_SUBLIST_HELPURL;
        this.qb(z.g.LISTS_HUE);
        P(Gh(this, "LIST").bb("Array"), z.g.LISTS_GET_SUBLIST_INPUT_IN_LIST);
        Q(this,
            "AT1");
        Q(this, "AT2");
        z.g.LISTS_GET_SUBLIST_TAIL && P(Q(this, "TAIL"), z.g.LISTS_GET_SUBLIST_TAIL);
        this.Dd(!0);
        this.Ed(!0, "Array");
        this.kd(1, !0);
        this.kd(2, !0);
        this.La(z.g.LISTS_GET_SUBLIST_TOOLTIP)
    },
    Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("at1", K(this, "AT1").type == z.Wa);
        a.setAttribute("at2", K(this, "AT2").type == z.Wa); return a },
    fb: function(a) { var b = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.kd(1, b);
        this.kd(2, a) },
    kd: function(a, b) {
        this.Ab("AT" + a);
        this.Ab("ORDINAL" +
            a, !0);
        b ? (Gh(this, "AT" + a).bb("Number"), z.g.ORDINAL_NUMBER_SUFFIX && P(Q(this, "ORDINAL" + a), z.g.ORDINAL_NUMBER_SUFFIX)) : Q(this, "AT" + a);
        var c = new Fh(this["WHERE_OPTIONS_" + a], function(c) { var e = "FROM_START" == c || "FROM_END" == c; if (e != b) { var h = this.v;
                h.kd(a, e);
                I(h, "WHERE" + a).setValue(c); return null } });
        P(K(this, "AT" + a), c, "WHERE" + a);
        1 == a && (Ih(this, "AT1", "AT2"), K(this, "ORDINAL1") && Ih(this, "ORDINAL1", "AT2"));
        z.g.LISTS_GET_SUBLIST_TAIL && Ih(this, "TAIL", null)
    }
};
z.J.lists_sort = { L: function() { Hh(this, { message0: z.g.LISTS_SORT_TITLE, args0: [{ type: "field_dropdown", name: "TYPE", options: [
                    [z.g.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
                    [z.g.LISTS_SORT_TYPE_TEXT, "TEXT"],
                    [z.g.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]
                ] }, { type: "field_dropdown", name: "DIRECTION", options: [
                    [z.g.LISTS_SORT_ORDER_ASCENDING, "1"],
                    [z.g.LISTS_SORT_ORDER_DESCENDING, "-1"]
                ] }, { type: "input_value", name: "LIST", check: "Array" }], output: "Array", colour: z.g.LISTS_HUE, tooltip: z.g.LISTS_SORT_TOOLTIP, helpUrl: z.g.LISTS_SORT_HELPURL }) } };
z.J.lists_split = {
    L: function() {
        var a = this,
            b = new Fh([
                [z.g.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
                [z.g.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]
            ], function(b) { a.zk(b) });
        this.Pb = z.g.LISTS_SPLIT_HELPURL;
        this.qb(z.g.LISTS_HUE);
        P(Gh(this, "INPUT").bb("String"), b, "MODE");
        P(Gh(this, "DELIM").bb("String"), z.g.LISTS_SPLIT_WITH_DELIMITER);
        this.Dd(!0);
        this.Ed(!0, "Array");
        this.La(function() {
            var b = E(a, "MODE");
            if ("SPLIT" == b) return z.g.LISTS_SPLIT_TOOLTIP_SPLIT;
            if ("JOIN" == b) return z.g.LISTS_SPLIT_TOOLTIP_JOIN;
            throw "Unknown mode: " +
                b;
        })
    },
    zk: function(a) { "SPLIT" == a ? (this.N.bb("Array"), K(this, "INPUT").bb("String")) : (this.N.bb("String"), K(this, "INPUT").bb("Array")) },
    Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("mode", E(this, "MODE")); return a },
    fb: function(a) { this.zk(a.getAttribute("mode")) }
};
z.J.Iw = {};
z.aa.Sc = {};
z.aa.Sc.Ik = 210;
z.Oh([{ type: "logic_boolean", message0: "%1", args0: [{ type: "field_dropdown", name: "BOOL", options: [
                ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
                ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
            ] }], output: "Boolean", colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}", helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}" }, {
        type: "controls_if",
        message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
        args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
        message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
        args1: [{ type: "input_statement", name: "DO0" }],
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_LOGIC_HUE}",
        helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
        mutator: "controls_if_mutator",
        extensions: ["controls_if_tooltip"]
    }, {
        type: "controls_ifelse",
        message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
        args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
        message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
        args1: [{ type: "input_statement", name: "DO0" }],
        message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
        args2: [{ type: "input_statement", name: "ELSE" }],
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
        helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
        extensions: ["controls_if_tooltip"]
    }, { type: "logic_compare", message0: "%1 %2 %3", args0: [{ type: "input_value", name: "A" }, { type: "field_dropdown", name: "OP", options: [
                ["=", "EQ"],
                ["\u2260", "NEQ"],
                ["\u200f<", "LT"],
                ["\u200f\u2264", "LTE"],
                ["\u200f>", "GT"],
                ["\u200f\u2265", "GTE"]
            ] }, { type: "input_value", name: "B" }], inputsInline: !0, output: "Boolean", colour: "%{BKY_LOGIC_HUE}", helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}", extensions: ["logic_compare", "logic_op_tooltip"] },
    { type: "logic_operation", message0: "%1 %2 %3", args0: [{ type: "input_value", name: "A", check: "Boolean" }, { type: "field_dropdown", name: "OP", options: [
                ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
                ["%{BKY_LOGIC_OPERATION_OR}", "OR"]
            ] }, { type: "input_value", name: "B", check: "Boolean" }], inputsInline: !0, output: "Boolean", colour: "%{BKY_LOGIC_HUE}", helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}", extensions: ["logic_op_tooltip"] }, {
        type: "logic_negate",
        message0: "%{BKY_LOGIC_NEGATE_TITLE}",
        args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
        output: "Boolean",
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
        helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}"
    }, { type: "logic_null", message0: "%{BKY_LOGIC_NULL}", output: null, colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}", helpUrl: "%{BKY_LOGIC_NULL_HELPURL}" }, {
        type: "logic_ternary",
        message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
        args0: [{ type: "input_value", name: "IF", check: "Boolean" }],
        message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
        args1: [{ type: "input_value", name: "THEN" }],
        message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
        args2: [{ type: "input_value", name: "ELSE" }],
        output: null,
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
        helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
        extensions: ["logic_ternary"]
    }
]);
z.Oh([{ type: "controls_if_if", message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}", nextStatement: null, enableContextMenu: !1, colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}" }, { type: "controls_if_elseif", message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}", previousStatement: null, nextStatement: null, enableContextMenu: !1, colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}" }, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
}]);
z.aa.Sc.$m = { EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}", NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}", LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}", LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}", GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}", GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}", AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}", OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}" };
z.M.register("logic_op_tooltip", z.M.Qk("OP", z.aa.Sc.$m));
z.aa.Sc.Jt = {
    Xc: 0,
    Ld: 0,
    Ga: function() { if (!this.Xc && !this.Ld) return null; var a = document.createElement("mutation");
        this.Xc && a.setAttribute("elseif", this.Xc);
        this.Ld && a.setAttribute("else", 1); return a },
    fb: function(a) { this.Xc = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.Ld = parseInt(a.getAttribute("else"), 10) || 0;
        this.ld() },
    We: function(a) {
        var b = a.ef("controls_if_if");
        b.wc();
        for (var c = b.K, e = 1; e <= this.Xc; e++) { var f = a.ef("controls_if_elseif");
            f.wc();
            c.connect(f.Y);
            c = f.K } this.Ld && (a = a.ef("controls_if_else"),
            a.wc(), c.connect(a.Y));
        return b
    },
    Ue: function(a) { var b = J(a.K);
        this.Ld = this.Xc = 0;
        a = [null]; for (var c = [null], e = null; b;) { switch (b.type) {
                case "controls_if_elseif":
                    this.Xc++;
                    a.push(b.Qp);
                    c.push(b.He); break;
                case "controls_if_else":
                    this.Ld++;
                    e = b.He; break;
                default:
                    throw "Unknown block type."; } b = b.K && J(b.K) } this.ld(); for (b = 1; b <= this.Xc; b++) Zg(a[b], this, "IF" + b), Zg(c[b], this, "DO" + b);
        Zg(e, this, "ELSE") },
    um: function(a) {
        a = J(a.K);
        for (var b = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var c = K(this, "IF" + b),
                        e = K(this,
                            "DO" + b);
                    a.Qp = c && c.connection.Na;
                    a.He = e && e.connection.Na;
                    b++;
                    break;
                case "controls_if_else":
                    e = K(this, "ELSE");
                    a.He = e && e.connection.Na;
                    break;
                default:
                    throw "Unknown block type.";
            }
            a = a.K && J(a.K)
        }
    },
    ld: function() { K(this, "ELSE") && this.Ab("ELSE"); for (var a = 1; K(this, "IF" + a);) this.Ab("IF" + a), this.Ab("DO" + a), a++; for (a = 1; a <= this.Xc; a++) P(Gh(this, "IF" + a).bb("Boolean"), z.g.CONTROLS_IF_MSG_ELSEIF), P(this.ce(z.Qa, "DO" + a), z.g.CONTROLS_IF_MSG_THEN);
        this.Ld && P(this.ce(z.Qa, "ELSE"), z.g.CONTROLS_IF_MSG_ELSE) }
};
z.M.bp("controls_if_mutator", z.aa.Sc.Jt, null, ["controls_if_elseif", "controls_if_else"]);
z.aa.Sc.Kt = function() { this.La(function() { if (this.Xc || this.Ld) { if (!this.Xc && this.Ld) return z.g.CONTROLS_IF_TOOLTIP_2; if (this.Xc && !this.Ld) return z.g.CONTROLS_IF_TOOLTIP_3; if (this.Xc && this.Ld) return z.g.CONTROLS_IF_TOOLTIP_4 } else return z.g.CONTROLS_IF_TOOLTIP_1; return "" }.bind(this)) };
z.M.register("controls_if_tooltip", z.aa.Sc.Kt);
z.aa.Sc.eu = { onchange: function(a) { this.Wj || (this.Wj = [null, null]); var b = Jh(this, "A"),
            c = Jh(this, "B");
        b && c && !Ne(b.N, c.N) && (z.j.R(a.group), a = this.Wj[0], a !== b && (Ee(b), a && !a.hb && K(this, "A").connection.connect(a.N)), b = this.Wj[1], b !== c && (Ee(c), b && !b.hb && K(this, "B").connection.connect(b.N)), this.ob(), z.j.R(!1));
        this.Wj[0] = Jh(this, "A");
        this.Wj[1] = Jh(this, "B") } };
z.aa.Sc.du = function() { ah(this, z.aa.Sc.eu) };
z.M.register("logic_compare", z.aa.Sc.du);
z.aa.Sc.fu = { Qs: null, onchange: function(a) { var b = Jh(this, "THEN"),
            c = Jh(this, "ELSE"),
            e = this.N.Na; if ((b || c) && e)
            for (var f = 0; 2 > f; f++) { var h = 1 == f ? b : c;
                h && !Ne(h.N, e) && (z.j.R(a.group), e === this.Qs ? (Ee(this), e.v.ob()) : (Ee(h), h.ob()), z.j.R(!1)) } this.Qs = e } };
z.M.qm("logic_ternary", z.aa.Sc.fu);
z.J.Kw = {};
z.aa.Ne = {};
z.aa.Ne.Ik = 120;
z.Oh([{ type: "controls_repeat_ext", message0: "%{BKY_CONTROLS_REPEAT_TITLE}", args0: [{ type: "input_value", name: "TIMES", check: "Number" }], message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1", args1: [{ type: "input_statement", name: "DO" }], previousStatement: null, nextStatement: null, colour: "%{BKY_LOOPS_HUE}", tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}", helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}" }, {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{ type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1 }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [{ type: "field_dropdown", name: "MODE", options: [
            ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
            ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]
        ] }, { type: "input_value", name: "BOOL", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"]
}, {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [{ type: "field_variable", name: "VAR", variable: null }, { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" }, { type: "input_value", name: "TO", check: "Number", align: "RIGHT" }, { type: "input_value", name: "BY", check: "Number", align: "RIGHT" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
}, {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [{ type: "field_variable", name: "VAR", variable: null }, { type: "input_value", name: "LIST", check: "Array" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"]
}, {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [{ type: "field_dropdown", name: "FLOW", options: [
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]
        ] }],
    previousStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip",
        "controls_flow_in_loop_check"
    ]
}]);
z.aa.Ne.zu = { WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}", UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}" };
z.M.register("controls_whileUntil_tooltip", z.M.Qk("MODE", z.aa.Ne.zu));
z.aa.Ne.Et = { BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}", CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}" };
z.M.register("controls_flow_tooltip", z.M.Qk("FLOW", z.aa.Ne.Et));
z.aa.Ne.Mt = { Ve: function(a) { if (!this.tb) { var b = I(this, "VAR").Jc(),
                c = b.name; if (!this.isCollapsed() && null != c) { var e = { enabled: !0 };
                e.text = z.g.VARIABLES_SET_CREATE_GET.replace("%1", c);
                b = z.G.Er(b);
                b = F("block", null, b);
                b.setAttribute("type", "variables_get");
                e.eb = z.ba.Sk(this, b);
                a.push(e) } } } };
z.M.qm("contextMenu_newGetVariableBlock", z.aa.Ne.Mt);
z.M.register("controls_for_tooltip", z.M.on("%{BKY_CONTROLS_FOR_TOOLTIP}"));
z.M.register("controls_forEach_tooltip", z.M.on("%{BKY_CONTROLS_FOREACH_TOOLTIP}"));
z.aa.Ne.Lt = { iu: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"], onchange: function() { if (this.o.pb && !this.o.pb()) { var a = !1,
                b = this;
            do { if (-1 != this.iu.indexOf(b.type)) { a = !0; break } b = Dh(b) } while (b);
            a ? (this.Ee(null), this.tb || this.Nc(!1)) : (this.Ee(z.g.CONTROLS_FLOW_STATEMENTS_WARNING), this.tb || Eh(this) || this.Nc(!0)) } } };
z.M.qm("controls_flow_in_loop_check", z.aa.Ne.Lt);
z.J.Lw = {};
z.aa.Math = {};
z.aa.Math.Ik = 230;
z.Oh([{ type: "math_number", message0: "%1", args0: [{ type: "field_number", name: "NUM", value: 0 }], output: "Number", colour: "%{BKY_MATH_HUE}", helpUrl: "%{BKY_MATH_NUMBER_HELPURL}", tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}", extensions: ["parent_tooltip_when_inline"] }, {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{ type: "input_value", name: "A", check: "Number" }, {
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}",
                "MULTIPLY"
            ],
            ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
            ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]
        ]
    }, { type: "input_value", name: "B", check: "Number" }],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_single",
    message0: "%1 %2",
    args0: [{ type: "field_dropdown", name: "OP", options: [
                ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
                ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
                ["-", "NEG"],
                ["ln", "LN"],
                ["log10", "LOG10"],
                ["e^", "EXP"],
                ["10^", "POW10"]
            ] },
        { type: "input_value", name: "NUM", check: "Number" }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_trig",
    message0: "%1 %2",
    args0: [{ type: "field_dropdown", name: "OP", options: [
            ["%{BKY_MATH_TRIG_SIN}", "SIN"],
            ["%{BKY_MATH_TRIG_COS}", "COS"],
            ["%{BKY_MATH_TRIG_TAN}", "TAN"],
            ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
            ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
            ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
        ] }, { type: "input_value", name: "NUM", check: "Number" }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"]
}, { type: "math_constant", message0: "%1", args0: [{ type: "field_dropdown", name: "CONSTANT", options: [
            ["\u03c0", "PI"],
            ["e", "E"],
            ["\u03c6", "GOLDEN_RATIO"],
            ["sqrt(2)", "SQRT2"],
            ["sqrt(\u00bd)", "SQRT1_2"],
            ["\u221e", "INFINITY"]
        ] }], output: "Number", colour: "%{BKY_MATH_HUE}", tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}", helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}" }, {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [{ type: "input_value", name: "NUMBER_TO_CHECK", check: "Number" },
        { type: "field_dropdown", name: "PROPERTY", options: [
                ["%{BKY_MATH_IS_EVEN}", "EVEN"],
                ["%{BKY_MATH_IS_ODD}", "ODD"],
                ["%{BKY_MATH_IS_PRIME}", "PRIME"],
                ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
                ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
                ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
                ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]
            ] }
    ],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
}, {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}"
    }, { type: "input_value", name: "DELTA", check: "Number" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_VARIABLES_HUE}",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"]
}, {
    type: "math_round",
    message0: "%1 %2",
    args0: [{ type: "field_dropdown", name: "OP", options: [
            ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
        ] }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
}, {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
            ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
            ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}",
                "STD_DEV"
            ],
            ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]
        ]
    }, { type: "input_value", name: "LIST", check: "Array" }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [{ type: "input_value", name: "DIVIDEND", check: "Number" }, { type: "input_value", name: "DIVISOR", check: "Number" }],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
}, { type: "math_constrain", message0: "%{BKY_MATH_CONSTRAIN_TITLE}", args0: [{ type: "input_value", name: "VALUE", check: "Number" }, { type: "input_value", name: "LOW", check: "Number" }, { type: "input_value", name: "HIGH", check: "Number" }], inputsInline: !0, output: "Number", colour: "%{BKY_MATH_HUE}", tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}", helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}" }, {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [{ type: "input_value", name: "FROM", check: "Number" },
        { type: "input_value", name: "TO", check: "Number" }
    ],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
}, { type: "math_random_float", message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}", output: "Number", colour: "%{BKY_MATH_HUE}", tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}", helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}" }]);
z.aa.Math.$m = {
    ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
    MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
    MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
    DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
    POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
    ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
    ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
    NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
    LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
    LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
    EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
    POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
    SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
    COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
    TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
    ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
    ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
    ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
    SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
    MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
    MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
    AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
    MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
    MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
    STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
    RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
};
z.M.register("math_op_tooltip", z.M.Qk("OP", z.aa.Math.$m));
z.aa.Math.Yt = { Ga: function() { var a = document.createElement("mutation"),
            b = "DIVISIBLE_BY" == E(this, "PROPERTY");
        a.setAttribute("divisor_input", b); return a }, fb: function(a) { a = "true" == a.getAttribute("divisor_input");
        this.ld(a) }, ld: function(a) { var b = K(this, "DIVISOR");
        a ? b || Gh(this, "DIVISOR").bb("Number") : b && this.Ab("DIVISOR") } };
z.aa.Math.Zt = function() { uh(I(this, "PROPERTY"), function(a) { this.v.ld("DIVISIBLE_BY" == a) }) };
z.M.bp("math_is_divisibleby_mutator", z.aa.Math.Yt, z.aa.Math.Zt);
z.M.register("math_change_tooltip", z.M.on("%{BKY_MATH_CHANGE_TOOLTIP}"));
z.aa.Math.cu = { zk: function(a) { "MODE" == a ? this.N.bb("Array") : this.N.bb("Number") }, Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("op", E(this, "OP")); return a }, fb: function(a) { this.zk(a.getAttribute("op")) } };
z.aa.Math.bu = function() { uh(I(this, "OP"), function(a) { this.zk(a) }.bind(this)) };
z.M.bp("math_modes_of_list_mutator", z.aa.Math.cu, z.aa.Math.bu);
z.J.tx = {};
z.J.procedures_defnoreturn = {
    L: function() { var a = new ij("", z.qa.cp);
        a.kk = !1;
        P(P(P(Q(this), z.g.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
        this.gk(new Yg(["procedures_mutatorarg"]));
        (this.o.options.Xi || this.o.options.Lb && this.o.options.Lb.options.Xi) && z.g.PROCEDURES_DEFNORETURN_COMMENT && this.fh(z.g.PROCEDURES_DEFNORETURN_COMMENT);
        this.qb(z.g.PROCEDURES_HUE);
        this.La(z.g.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.Pb = z.g.PROCEDURES_DEFNORETURN_HELPURL;
        this.ca = [];
        this.yb = [];
        this.lg(!0);
        this.He = null },
    lg: function(a) { this.Ml !== a && (a ? (P(this.ce(z.Qa, "STACK"), z.g.PROCEDURES_DEFNORETURN_DO), K(this, "RETURN") && Ih(this, "STACK", "RETURN")) : this.Ab("STACK", !0), this.Ml = a) },
    yk: function() { for (var a = !1, b = {}, c = 0; c < this.ca.length; c++) { if (b["arg_" + this.ca[c].toLowerCase()]) { a = !0; break } b["arg_" + this.ca[c].toLowerCase()] = !0 } a ? this.Ee(z.g.PROCEDURES_DEF_DUPLICATE_WARNING) : this.Ee(null);
        a = "";
        this.ca.length && (a = z.g.PROCEDURES_BEFORE_PARAMS + " " + this.ca.join(", "));
        z.j.disable(); try { I(this, "PARAMS").setValue(a) } finally { z.j.enable() } },
    Ga: function(a) { var b = document.createElement("mutation");
        a && b.setAttribute("name", E(this, "NAME")); for (var c = 0; c < this.yb.length; c++) { var e = document.createElement("arg"),
                f = this.yb[c];
            e.setAttribute("name", f.name);
            e.setAttribute("varId", f.$());
            a && this.Po && e.setAttribute("paramId", this.Po[c]);
            b.appendChild(e) } this.Ml || b.setAttribute("statements", "false"); return b },
    fb: function(a) {
        this.ca = [];
        this.yb = [];
        for (var b = 0, c; c = a.childNodes[b]; b++)
            if ("arg" == c.nodeName.toLowerCase()) {
                var e = c.getAttribute("name");
                c =
                    c.getAttribute("varId");
                this.ca.push(e);
                e = z.G.Dl(this.o, c, e, "");
                this.yb.push(e)
            } this.yk();
        z.qa.Do(this);
        this.lg("false" !== a.getAttribute("statements"))
    },
    We: function(a) { var b = a.ef("procedures_mutatorcontainer");
        b.wc();
        K(this, "RETURN") ? I(b, "STATEMENTS").setValue(this.Ml ? "TRUE" : "FALSE") : K(b, "STATEMENT_INPUT").oa(!1); for (var c = K(b, "STACK").connection, e = 0; e < this.ca.length; e++) { var f = a.ef("procedures_mutatorarg");
            f.wc();
            I(f, "NAME").setValue(this.ca[e]);
            f.KB = e;
            c.connect(f.Y);
            c = f.K } z.qa.Do(this); return b },
    Ue: function(a) { this.ca = [];
        this.Po = [];
        this.yb = []; for (var b = Jh(a, "STACK"); b;) { var c = E(b, "NAME");
            this.ca.push(c);
            c = this.o.Jc(c, "");
            this.yb.push(c);
            this.Po.push(b.id);
            b = b.K && J(b.K) } this.yk();
        z.qa.Do(this);
        a = E(a, "STATEMENTS"); if (null !== a && (a = "TRUE" == a, this.Ml != a))
            if (a) this.lg(!0), Zg(this.He, this, "STACK"), this.He = null;
            else { a = K(this, "STACK").connection; if (this.He = a.Na) a = J(a), Ee(a), a.ob();
                this.lg(!1) } },
    $e: function() { return [E(this, "NAME"), this.ca, !1] },
    Zn: function() { return this.ca },
    Jf: function() { return this.yb },
    ak: function(a, b) { var c = this.o.Nd(a); if ("" == c.type) { c = c.name;
            b = this.o.Nd(b); for (var e = !1, f = 0; f < this.yb.length; f++) this.yb[f].$() == a && (this.ca[f] = b.name, this.yb[f] = b, e = !0);
            e && this.il(c, b.name) } },
    Jm: function(a) { for (var b = a.name, c = !1, e = 0; e < this.yb.length; e++)
            if (this.yb[e].$() == a.$()) { var f = this.ca[e];
                this.ca[e] = b;
                c = !0 } c && this.il(f, b) },
    il: function(a, b) { this.yk(); if (this.bd.X())
            for (var c = Qc(this.bd.m), e = 0, f; f = c[e]; e++) "procedures_mutatorarg" == f.type && Tc(a, E(f, "NAME")) && I(f, "NAME").setValue(b) },
    Ve: function(a) {
        if (!this.tb) {
            var b = { enabled: !0 },
                c = E(this, "NAME");
            b.text = z.g.PROCEDURES_CREATE_DO.replace("%1", c);
            var e = F("mutation");
            e.setAttribute("name", c);
            for (var f = 0; f < this.ca.length; f++) c = F("arg"), c.setAttribute("name", this.ca[f]), e.appendChild(c);
            c = F("block", null, e);
            c.setAttribute("type", this.xq);
            b.eb = z.ba.Sk(this, c);
            a.push(b);
            if (!this.isCollapsed())
                for (f = 0; f < this.yb.length; f++) b = { enabled: !0 }, e = this.yb[f], c = e.name, b.text = z.g.VARIABLES_SET_CREATE_GET.replace("%1", c), c = z.G.Er(e), c = F("block", null, c), c.setAttribute("type", "variables_get"),
                    b.eb = z.ba.Sk(this, c), a.push(b)
        }
    },
    xq: "procedures_callnoreturn"
};
z.J.procedures_defreturn = {
    L: function() {
        var a = new ij("", z.qa.cp);
        a.kk = !1;
        P(P(P(Q(this), z.g.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
        P(Bh(Gh(this, "RETURN"), z.yh), z.g.PROCEDURES_DEFRETURN_RETURN);
        this.gk(new Yg(["procedures_mutatorarg"]));
        (this.o.options.Xi || this.o.options.Lb && this.o.options.Lb.options.Xi) && z.g.PROCEDURES_DEFRETURN_COMMENT && this.fh(z.g.PROCEDURES_DEFRETURN_COMMENT);
        this.qb(z.g.PROCEDURES_HUE);
        this.La(z.g.PROCEDURES_DEFRETURN_TOOLTIP);
        this.Pb = z.g.PROCEDURES_DEFRETURN_HELPURL;
        this.ca = [];
        this.yb = [];
        this.lg(!0);
        this.He = null
    },
    lg: z.J.procedures_defnoreturn.lg,
    yk: z.J.procedures_defnoreturn.yk,
    Ga: z.J.procedures_defnoreturn.Ga,
    fb: z.J.procedures_defnoreturn.fb,
    We: z.J.procedures_defnoreturn.We,
    Ue: z.J.procedures_defnoreturn.Ue,
    $e: function() { return [E(this, "NAME"), this.ca, !0] },
    Zn: z.J.procedures_defnoreturn.Zn,
    Jf: z.J.procedures_defnoreturn.Jf,
    ak: z.J.procedures_defnoreturn.ak,
    Jm: z.J.procedures_defnoreturn.Jm,
    il: z.J.procedures_defnoreturn.il,
    Ve: z.J.procedures_defnoreturn.Ve,
    xq: "procedures_callreturn"
};
z.J.procedures_mutatorcontainer = { L: function() { P(Q(this), z.g.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.ce(z.Qa, "STACK");
        P(P(Q(this, "STATEMENT_INPUT"), z.g.PROCEDURES_ALLOW_STATEMENTS), new yj("TRUE"), "STATEMENTS");
        this.qb(z.g.PROCEDURES_HUE);
        this.La(z.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1 } };
z.J.procedures_mutatorarg = {
    L: function() { var a = new ij("x", this.sh);
        a.Tw = a.Fd;
        a.Fd = function() { this.cj = [];
            this.Tw() };
        P(P(Q(this), z.g.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
        this.De(!0);
        this.Ce(!0);
        this.qb(z.g.PROCEDURES_HUE);
        this.La(z.g.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.Ko = this.xv;
        a.cj = [];
        a.Ko("x") },
    sh: function(a) {
        var b = $g(this.v.o);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a) return null;
        var c = b.Jc(a, "");
        c && c.name != a && b.ak(c.$(), a);
        c || (c = b.Wc(a, "")) && this.cj && this.cj.push(c);
        return a
    },
    xv: function(a) { var b = $g(this.v.o); if (b)
            for (var c = 0; c < this.cj.length; c++) { var e = this.cj[c];
                e.name != a && b.Ff(e.$()) } }
};
z.J.procedures_callnoreturn = {
    L: function() { P(Q(this, "TOPROW"), this.id, "NAME");
        this.De(!0);
        this.Ce(!0);
        this.qb(z.g.PROCEDURES_HUE);
        this.Pb = z.g.PROCEDURES_CALLNORETURN_HELPURL;
        this.ca = [];
        this.yb = [];
        this.ah = {};
        this.Ud = null },
    yd: function() { return E(this, "NAME") },
    $j: function(a, b) { Tc(a, this.yd()) && (I(this, "NAME").setValue(b), this.La((this.N ? z.g.PROCEDURES_CALLRETURN_TOOLTIP : z.g.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b))) },
    vp: function(a, b) {
        var c = z.qa.xl(this.yd(), this.o),
            e = c && c.bd && c.bd.X();
        e || (this.ah = {}, this.Ud = null);
        if (b)
            if (Da(this.ca, a)) this.Ud = b;
            else {
                if (b.length != a.length) throw "Error: paramNames and paramIds must be the same length.";
                this.ig(!1);
                this.Ud || (this.ah = {}, a.join("\n") == this.ca.join("\n") ? this.Ud = b : this.Ud = []);
                c = this.P;
                this.P = !1;
                for (var f = 0; f < this.ca.length; f++) { var h = K(this, "ARG" + f);
                    h && (h = h.connection.Na, this.ah[this.Ud[f]] = h, e && h && -1 == b.indexOf(this.Ud[f]) && (h.disconnect(), h.v.ob())) } this.ca = [].concat(a);
                this.yb = [];
                for (f = 0; f < this.ca.length; f++) a = z.G.Dl(this.o, null, this.ca[f], ""),
                    this.yb.push(a);
                this.ld();
                if (this.Ud = b)
                    for (f = 0; f < this.ca.length; f++) b = this.Ud[f], b in this.ah && (h = this.ah[b], Zg(h, this, "ARG" + f) || delete this.ah[b]);
                (this.P = c) && this.Z()
            }
    },
    ld: function() {
        for (var a = 0; a < this.ca.length; a++) { var b = I(this, "ARGNAME" + a); if (b) { z.j.disable(); try { b.setValue(this.ca[a]) } finally { z.j.enable() } } else b = new yh(this.ca[a]), P(Bh(Gh(this, "ARG" + a), z.yh), b, "ARGNAME" + a).L() }
        for (; K(this, "ARG" + a);) this.Ab("ARG" + a), a++;
        if (a = K(this, "TOPROW"))
            if (this.ca.length) I(this, "WITH") || (P(a, z.g.PROCEDURES_CALL_BEFORE_PARAMS,
                "WITH"), a.L());
            else if (I(this, "WITH")) { b = 0; for (var c; c = a.Ja[b]; b++)
                if ("WITH" === c.name) { c.A();
                    a.Ja.splice(b, 1);
                    a.v.P && (a.v.Z(), a.v.ob()); break } }
    },
    Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("name", this.yd()); for (var b = 0; b < this.ca.length; b++) { var c = document.createElement("arg");
            c.setAttribute("name", this.ca[b]);
            a.appendChild(c) } return a },
    fb: function(a) {
        var b = a.getAttribute("name");
        this.$j(this.yd(), b);
        b = [];
        for (var c = [], e = 0, f; f = a.childNodes[e]; e++) "arg" == f.nodeName.toLowerCase() &&
            (b.push(f.getAttribute("name")), c.push(f.getAttribute("paramId")));
        this.vp(b, c)
    },
    Jf: function() { return this.yb },
    onchange: function(a) {
        if (this.o && !this.o.Pd)
            if (a.type == z.j.Ct && -1 != a.cf.indexOf(this.id)) {
                var b = this.yd();
                b = z.qa.xl(b, this.o);
                !b || b.type == this.An && JSON.stringify(b.ca) == JSON.stringify(this.ca) || (b = null);
                if (!b) {
                    z.j.R(a.group);
                    a = F("xml");
                    b = F("block");
                    b.setAttribute("type", this.An);
                    var c = this.la(),
                        e = c.y + 2 * z.Tc;
                    b.setAttribute("x", c.x + z.Tc * (this.u ? -1 : 1));
                    b.setAttribute("y", e);
                    c = this.Ga();
                    b.appendChild(c);
                    c = F("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(document.createTextNode(this.yd()));
                    b.appendChild(c);
                    a.appendChild(b);
                    z.D.ie(a, this.o);
                    z.j.R(!1)
                }
            } else a.type == z.j.Dt && (b = this.yd(), b = z.qa.xl(b, this.o), b || (z.j.R(a.group), this.A(!0, !1), z.j.R(!1)))
    },
    Ve: function(a) {
        var b = { enabled: !0 };
        b.text = z.g.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.yd(),
            e = this.o;
        b.eb = function() {
            var a = z.qa.xl(c, e);
            if (a) {
                if (e.ib) {
                    var b = Kc(e, a.id);
                    if (b) {
                        var k = b.la(),
                            l = b.Hb(),
                            m = e.scale;
                        b = (k.x + (e.u ? -1 : 1) * l.width / 2) * m;
                        k = (k.y + l.height /
                            2) * m;
                        l = e.rb();
                        b = b - l.Gc - l.ya / 2;
                        k = k - l.nc - l.cb / 2;
                        z.Qb();
                        e.ib.set(b, k)
                    }
                } else console.warn("Tried to scroll a non-scrollable workspace.");
                a.select()
            }
        };
        a.push(b)
    },
    An: "procedures_defnoreturn"
};
z.J.procedures_callreturn = {
    L: function() { P(Q(this, "TOPROW"), "", "NAME");
        this.Ed(!0);
        this.qb(z.g.PROCEDURES_HUE);
        this.Pb = z.g.PROCEDURES_CALLRETURN_HELPURL;
        this.ca = [];
        this.ah = {};
        this.Ud = null },
    yd: z.J.procedures_callnoreturn.yd,
    $j: z.J.procedures_callnoreturn.$j,
    vp: z.J.procedures_callnoreturn.vp,
    ld: z.J.procedures_callnoreturn.ld,
    Ga: z.J.procedures_callnoreturn.Ga,
    fb: z.J.procedures_callnoreturn.fb,
    Jf: z.J.procedures_callnoreturn.Jf,
    onchange: z.J.procedures_callnoreturn.onchange,
    Ve: z.J.procedures_callnoreturn.Ve,
    An: "procedures_defreturn"
};
z.J.procedures_ifreturn = {
    L: function() { P(Gh(this, "CONDITION").bb("Boolean"), z.g.CONTROLS_IF_MSG_IF);
        P(Gh(this, "VALUE"), z.g.PROCEDURES_DEFRETURN_RETURN);
        this.Dd(!0);
        this.De(!0);
        this.Ce(!0);
        this.qb(z.g.PROCEDURES_HUE);
        this.La(z.g.PROCEDURES_IFRETURN_TOOLTIP);
        this.Pb = z.g.PROCEDURES_IFRETURN_HELPURL;
        this.Nf = !0 },
    Ga: function() { var a = document.createElement("mutation");
        a.setAttribute("value", Number(this.Nf)); return a },
    fb: function(a) {
        this.Nf = 1 == a.getAttribute("value");
        this.Nf || (this.Ab("VALUE"), P(Q(this, "VALUE"),
            z.g.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.o.pb && !this.o.pb()) {
            var a = !1,
                b = this;
            do { if (-1 != this.Rt.indexOf(b.type)) { a = !0; break } b = Dh(b) } while (b);
            a ? ("procedures_defnoreturn" == b.type && this.Nf ? (this.Ab("VALUE"), P(Q(this, "VALUE"), z.g.PROCEDURES_DEFRETURN_RETURN), this.Nf = !1) : "procedures_defreturn" != b.type || this.Nf || (this.Ab("VALUE"), P(Gh(this, "VALUE"), z.g.PROCEDURES_DEFRETURN_RETURN), this.Nf = !0), this.Ee(null), this.tb || this.Nc(!1)) : (this.Ee(z.g.PROCEDURES_IFRETURN_WARNING), this.tb || Eh(this) ||
                this.Nc(!0))
        }
    },
    Rt: ["procedures_defnoreturn", "procedures_defreturn"]
};
z.J.Sx = {};
z.aa.G = {};
z.aa.G.Ik = 330;
z.Oh([{ type: "variables_get", message0: "%1", args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" }], output: null, colour: "%{BKY_VARIABLES_HUE}", helpUrl: "%{BKY_VARIABLES_GET_HELPURL}", tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}", extensions: ["contextMenu_variableSetterGetter"] }, {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" }, { type: "input_value", name: "VALUE" }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_VARIABLES_HUE}",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
}]);
z.aa.G.Nt = { Ve: function(a) { if (!this.tb) { if ("variables_get" == this.type) var b = "variables_set",
                c = z.g.VARIABLES_GET_CREATE_SET;
            else b = "variables_get", c = z.g.VARIABLES_SET_CREATE_GET; var e = { enabled: 0 < fd(this.o) },
                f = I(this, "VAR").Ib();
            e.text = c.replace("%1", f);
            c = F("field", null, f);
            c.setAttribute("name", "VAR");
            c = F("block", null, c);
            c.setAttribute("type", b);
            e.eb = z.ba.Sk(this, c);
            a.push(e) } } };
z.M.qm("contextMenu_variableSetterGetter", z.aa.G.Nt);
/*

 Blockly Games: Music

 Copyright 2016 Google Inc.
 https://github.com/google/blockly-games

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ol(a) { Ol.s.constructor.call(this, a) } y(Ol, ij);
var Pl = "C3 D3 E3 F3 G3 A3 B3 C4 D4 E4 F4 G4 A4".split(" ");
d = Ol.prototype;
d.Ia = "";
d.Gf = function() { var a = this; return function() { Ol.s.Gf.call(a)();
        a.sb = null;
        a.Vi && z.Da(a.Vi);
        a.xs && z.Da(a.xs) } };
d.Fd = function() { Ol.s.Fd.call(this, mb || ob || qb); var a = z.H.ha;
    a.firstChild && (this.sb = document.createElement("div"), this.sb.id = "notePicker", a.appendChild(this.sb), this.Vi = z.Zb(this.sb, "click", this, z.H.Fa), this.xs = z.Zb(this.sb, "mousemove", this, this.jm), this.xk()) };
d.jm = function(a) { var b = this.sb.getBoundingClientRect();
    a = rc(Math.round(13.5 - (a.clientY - b.top) / 7.5), 0, 12);
    this.sb.style.backgroundPosition = 37 * -a + "px 0";
    tj.value = Pl[a];
    this.setValue(a);
    wj(this);
    this.bk() };
d.vb = function(a) { a = Ce(this, a) || a;
    Ol.s.vb.call(this, a);
    this.xa && (a = Pl.indexOf(a), -1 != a && (this.Ia = String(a)), this.xk()) };
d.getValue = function() { return this.Ia };
d.setValue = function(a) { if (null !== a && a !== this.Ia) { this.Ia = a; var b = Pl[Number(a)]; if (void 0 === b) throw "Invalid note value: " + a;
        this.vb(b) } };
d.xk = function() { if (this.sb) { var a = this.getValue();
        this.sb.style.backgroundPosition = 37 * -a + "px 0" } };
d.Uk = function(a) { if (null === a) return null;
    a = a.replace(/\s/g, "").toUpperCase(); return -1 != Pl.indexOf(a) ? a : null };
// Copyright 2012 Google Inc.  Apache License 2.0
z.h = new Ch;
yk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
z.h.vf = 0;
z.h.oA = 1.1;
z.h.kb = 1.2;
z.h.Ya = 2;
z.h.mA = 3;
z.h.iA = 3;
z.h.eA = 4.1;
z.h.qA = 4.2;
z.h.Oi = 4.3;
z.h.Mi = 4.4;
z.h.pA = 4.5;
z.h.rA = 4.6;
z.h.jA = 4.7;
z.h.cA = 4.8;
z.h.kA = 5;
z.h.Um = 5.1;
z.h.Mk = 5.2;
z.h.Ni = 5.3;
z.h.Gh = 6.1;
z.h.wg = 6.2;
z.h.gA = 7;
z.h.pu = 8;
z.h.lA = 8;
z.h.nA = 8;
z.h.fq = 9;
z.h.dA = 10;
z.h.hA = 11;
z.h.fA = 12;
z.h.Sm = 13;
z.h.Tm = 14;
z.h.Lk = 15;
z.h.xg = 16;
z.h.sA = 17;
z.h.kc = 18;
z.h.Ec = 99;
z.h.Nk = [
    [z.h.Ya, z.h.kb],
    [z.h.Ya, z.h.Ya],
    [z.h.kb, z.h.kb],
    [z.h.kb, z.h.Ya],
    [z.h.Mi, z.h.Mi],
    [z.h.Um, z.h.Um],
    [z.h.wg, z.h.wg],
    [z.h.Sm, z.h.Sm],
    [z.h.Tm, z.h.Tm]
];
z.h.L = function(a) { z.h.Df = Object.create(null);
    z.h.Qn = Object.create(null);
    z.h.Va ? z.h.Va.reset() : z.h.Va = new Bk;
    z.h.Va.ra = a.ra; for (var b = [], c = z.G.Gu(a), e = 0; e < c.length; e++) b.push(z.h.Va.getName(c[e], "DEVELOPER_VARIABLE"));
    a = z.G.pq(a); for (e = 0; e < a.length; e++) b.push(z.h.Va.getName(a[e].$(), z.G.Xa));
    b.length && (z.h.Df.variables = "var " + b.join(", ") + ";") };
z.h.finish = function(a) { var b = [],
        c; for (c in z.h.Df) b.push(z.h.Df[c]);
    delete z.h.Df;
    delete z.h.Qn;
    z.h.Va.reset(); return b.join("\n\n") + "\n\n\n" + a };
z.h.at = function(a) { return a + ";\n" };
z.h.MB = function(a) { a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'"); return "'" + a + "'" };
z.h.vm = function(a, b) { var c = ""; if (!a.N || !a.N.Na) { var e = a.wl();
        (e = z.i.At(e, z.h.Ht - 3)) && (c = a.$e ? c + ("/**\n" + vk(e + "\n", " * ") + " */\n") : c + vk(e + "\n", "// ")); for (var f = 0; f < a.W.length; f++)
            if (a.W[f].type == z.Wa) { var h = J(a.W[f].connection); if (h) { e = [];
                    h = xc(h, !0); for (var k = 0; k < h.length; k++) { var l = h[k].wl();
                        l && e.push(l) } e.length && e.push("");
                    (e = e.join("\n")) && (c += vk(e, "// ")) } } } a = a.K && J(a.K);
    a = uk(z.h, a); return c + b + a };
z.h.oe = function(a, b, c, e, f) { c = c || 0;
    f = f || z.h.Ec;
    a.o.options.ye && c--; var h = a.o.options.ye ? "1" : "0";
    a = 0 < c ? U(a, b, z.h.wg) || h : 0 > c ? U(a, b, z.h.Gh) || h : e ? U(a, b, z.h.Oi) || h : U(a, b, f) || h; if (z.Tf(a)) a = parseFloat(a) + c, e && (a = -a);
    else { if (0 < c) { a = a + " + " + c; var k = z.h.wg } else 0 > c && (a = a + " - " + -c, k = z.h.Gh);
        e && (a = c ? "-(" + a + ")" : "-" + a, k = z.h.Oi);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")") } return a };
z.h.zo = {};
z.h.lists_create_empty = function() { return ["[]", z.h.vf] };
z.h.lists_create_with = function(a) { for (var b = Array(a.Qd), c = 0; c < a.Qd; c++) b[c] = U(a, "ADD" + c, z.h.kc) || "null"; return ["[" + b.join(", ") + "]", z.h.vf] };
z.h.lists_repeat = function(a) { var b = zk("listsRepeat", ["function " + z.h.pd + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
        c = U(a, "ITEM", z.h.kc) || "null";
    a = U(a, "NUM", z.h.kc) || "0"; return [b + "(" + c + ", " + a + ")", z.h.Ya] };
z.h.lists_length = function(a) { return [(U(a, "VALUE", z.h.kb) || "[]") + ".length", z.h.kb] };
z.h.lists_isEmpty = function(a) { return ["!" + (U(a, "VALUE", z.h.kb) || "[]") + ".length", z.h.Mi] };
z.h.lists_indexOf = function(a) { var b = "FIRST" == E(a, "END") ? "indexOf" : "lastIndexOf",
        c = U(a, "FIND", z.h.Ec) || "''";
    b = (U(a, "VALUE", z.h.kb) || "[]") + "." + b + "(" + c + ")"; return a.o.options.ye ? [b + " + 1", z.h.wg] : [b, z.h.Ya] };
z.h.lists_getIndex = function(a) {
    var b = E(a, "MODE") || "GET",
        c = E(a, "WHERE") || "FROM_START",
        e = U(a, "VALUE", "RANDOM" == c ? z.h.kc : z.h.kb) || "[]";
    switch (c) {
        case "FIRST":
            if ("GET" == b) return [e + "[0]", z.h.kb];
            if ("GET_REMOVE" == b) return [e + ".shift()", z.h.kb];
            if ("REMOVE" == b) return e + ".shift();\n";
            break;
        case "LAST":
            if ("GET" == b) return [e + ".slice(-1)[0]", z.h.kb];
            if ("GET_REMOVE" == b) return [e + ".pop()", z.h.kb];
            if ("REMOVE" == b) return e + ".pop();\n";
            break;
        case "FROM_START":
            a = z.h.oe(a, "AT");
            if ("GET" == b) return [e + "[" + a + "]", z.h.kb];
            if ("GET_REMOVE" ==
                b) return [e + ".splice(" + a + ", 1)[0]", z.h.Ya];
            if ("REMOVE" == b) return e + ".splice(" + a + ", 1);\n";
            break;
        case "FROM_END":
            a = z.h.oe(a, "AT", 1, !0);
            if ("GET" == b) return [e + ".slice(" + a + ")[0]", z.h.Ya];
            if ("GET_REMOVE" == b) return [e + ".splice(" + a + ", 1)[0]", z.h.Ya];
            if ("REMOVE" == b) return e + ".splice(" + a + ", 1);";
            break;
        case "RANDOM":
            e = zk("listsGetRandomItem", ["function " + z.h.pd + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];",
                "  }", "}"
            ]) + "(" + e + ", " + ("GET" != b) + ")";
            if ("GET" == b || "GET_REMOVE" == b) return [e, z.h.Ya];
            if ("REMOVE" == b) return e + ";\n"
    }
    throw "Unhandled combination (lists_getIndex).";
};
z.h.lists_setIndex = function(a) {
    function b() { if (c.match(/^\w+$/)) return ""; var a = Ak(z.h.Va, "tmpList", z.G.Xa),
            b = "var " + a + " = " + c + ";\n";
        c = a; return b }
    var c = U(a, "LIST", z.h.kb) || "[]",
        e = E(a, "MODE") || "GET",
        f = E(a, "WHERE") || "FROM_START",
        h = U(a, "TO", z.h.xg) || "null";
    switch (f) {
        case "FIRST":
            if ("SET" == e) return c + "[0] = " + h + ";\n";
            if ("INSERT" == e) return c + ".unshift(" + h + ");\n";
            break;
        case "LAST":
            if ("SET" == e) return a = b(), a + (c + "[" + c + ".length - 1] = " + h + ";\n");
            if ("INSERT" == e) return c + ".push(" + h + ");\n";
            break;
        case "FROM_START":
            f =
                z.h.oe(a, "AT");
            if ("SET" == e) return c + "[" + f + "] = " + h + ";\n";
            if ("INSERT" == e) return c + ".splice(" + f + ", 0, " + h + ");\n";
            break;
        case "FROM_END":
            f = z.h.oe(a, "AT", 1, !1, z.h.Gh);
            a = b();
            if ("SET" == e) return a + (c + "[" + c + ".length - " + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (c + ".splice(" + c + ".length - " + f + ", 0, " + h + ");\n");
            break;
        case "RANDOM":
            a = b();
            f = Ak(z.h.Va, "tmpX", z.G.Xa);
            a += "var " + f + " = Math.floor(Math.random() * " + c + ".length);\n";
            if ("SET" == e) return a + (c + "[" + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (c + ".splice(" + f +
                ", 0, " + h + ");\n")
    }
    throw "Unhandled combination (lists_setIndex).";
};
z.h.zo.Xv = function(a, b, c) { return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c };
z.h.lists_getSublist = function(a) {
    var b = U(a, "LIST", z.h.kb) || "[]",
        c = E(a, "WHERE1"),
        e = E(a, "WHERE2");
    if ("FIRST" == c && "LAST" == e) b += ".slice(0)";
    else if (b.match(/^\w+$/) || "FROM_END" != c && "FROM_START" == e) {
        switch (c) {
            case "FROM_START":
                var f = z.h.oe(a, "AT1"); break;
            case "FROM_END":
                f = z.h.oe(a, "AT1", 1, !1, z.h.Gh);
                f = b + ".length - " + f; break;
            case "FIRST":
                f = "0"; break;
            default:
                throw "Unhandled option (lists_getSublist)."; }
        switch (e) {
            case "FROM_START":
                a = z.h.oe(a, "AT2", 1);
                break;
            case "FROM_END":
                a = z.h.oe(a, "AT2", 0, !1, z.h.Gh);
                a =
                    b + ".length - " + a;
                break;
            case "LAST":
                a = b + ".length";
                break;
            default:
                throw "Unhandled option (lists_getSublist).";
        }
        b = b + ".slice(" + f + ", " + a + ")"
    } else {
        f = z.h.oe(a, "AT1");
        a = z.h.oe(a, "AT2");
        var h = z.h.zo.Xv,
            k = { FIRST: "First", LAST: "Last", FROM_START: "FromStart", FROM_END: "FromEnd" };
        b = zk("subsequence" + k[c] + k[e], ["function " + z.h.pd + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") + ") {", "  var start = " + h("sequence", c, "at1") + ";", "  var end = " + h("sequence", e, "at2") + " + 1;",
            "  return sequence.slice(start, end);", "}"
        ]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + f : "") + ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") + ")"
    }
    return [b, z.h.Ya]
};
z.h.lists_sort = function(a) {
    var b = U(a, "LIST", z.h.Ya) || "[]",
        c = "1" === E(a, "DIRECTION") ? 1 : -1;
    a = E(a, "TYPE");
    var e = zk("listsGetSortCompare", ["function " + z.h.pd + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return parseFloat(a) - parseFloat(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },", '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };",
        "  var compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"
    ]);
    return [b + ".slice().sort(" + e + '("' + a + '", ' + c + "))", z.h.Ya]
};
z.h.lists_split = function(a) { var b = U(a, "INPUT", z.h.kb),
        c = U(a, "DELIM", z.h.Ec) || "''";
    a = E(a, "MODE"); if ("SPLIT" == a) b || (b = "''"), a = "split";
    else if ("JOIN" == a) b || (b = "[]"), a = "join";
    else throw "Unknown mode: " + a; return [b + "." + a + "(" + c + ")", z.h.Ya] };
z.h.lists_reverse = function(a) { return [(U(a, "LIST", z.h.Ya) || "[]") + ".slice().reverse()", z.h.Ya] };
z.h.Iw = {};
z.h.controls_if = function(a) { var b = 0,
        c = "";
    do { var e = U(a, "IF" + b, z.h.Ec) || "false"; var f = wk(a, "DO" + b);
        c += (0 < b ? " else " : "") + "if (" + e + ") {\n" + f + "}";++b } while (K(a, "IF" + b));
    K(a, "ELSE") && (f = wk(a, "ELSE"), c += " else {\n" + f + "}"); return c + "\n" };
z.h.controls_ifelse = z.h.controls_if;
z.h.logic_compare = function(a) { var b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" } [E(a, "OP")],
        c = "==" == b || "!=" == b ? z.h.fq : z.h.pu,
        e = U(a, "A", c) || "0";
    a = U(a, "B", c) || "0"; return [e + " " + b + " " + a, c] };
z.h.logic_operation = function(a) { var b = "AND" == E(a, "OP") ? "&&" : "||",
        c = "&&" == b ? z.h.Sm : z.h.Tm,
        e = U(a, "A", c);
    a = U(a, "B", c); if (e || a) { var f = "&&" == b ? "true" : "false";
        e || (e = f);
        a || (a = f) } else a = e = "false"; return [e + " " + b + " " + a, c] };
z.h.logic_negate = function(a) { var b = z.h.Mi; return ["!" + (U(a, "BOOL", b) || "true"), b] };
z.h.logic_boolean = function(a) { return ["TRUE" == E(a, "BOOL") ? "true" : "false", z.h.vf] };
z.h.logic_null = function() { return ["null", z.h.vf] };
z.h.logic_ternary = function(a) { var b = U(a, "IF", z.h.Lk) || "false",
        c = U(a, "THEN", z.h.Lk) || "null";
    a = U(a, "ELSE", z.h.Lk) || "null"; return [b + " ? " + c + " : " + a, z.h.Lk] };
z.h.Kw = {};
z.h.controls_repeat_ext = function(a) { var b = I(a, "TIMES") ? String(Number(E(a, "TIMES"))) : U(a, "TIMES", z.h.xg) || "0",
        c = wk(a, "DO");
    c = xk(c, a.id);
    a = ""; var e = Ak(z.h.Va, "count", z.G.Xa),
        f = b;
    b.match(/^\w+$/) || z.Tf(b) || (f = Ak(z.h.Va, "repeat_end", z.G.Xa), a += "var " + f + " = " + b + ";\n"); return a + ("for (var " + e + " = 0; " + e + " < " + f + "; " + e + "++) {\n" + c + "}\n") };
z.h.controls_repeat = z.h.controls_repeat_ext;
z.h.controls_whileUntil = function(a) { var b = "UNTIL" == E(a, "MODE"),
        c = U(a, "BOOL", b ? z.h.Mi : z.h.Ec) || "false",
        e = wk(a, "DO");
    e = xk(e, a.id);
    b && (c = "!" + c); return "while (" + c + ") {\n" + e + "}\n" };
z.h.controls_for = function(a) {
    var b = z.h.Va.getName(E(a, "VAR"), z.G.Xa),
        c = U(a, "FROM", z.h.xg) || "0",
        e = U(a, "TO", z.h.xg) || "0",
        f = U(a, "BY", z.h.xg) || "1",
        h = wk(a, "DO");
    h = xk(h, a.id);
    if (z.Tf(c) && z.Tf(e) && z.Tf(f)) { var k = parseFloat(c) <= parseFloat(e);
        a = "for (" + b + " = " + c + "; " + b + (k ? " <= " : " >= ") + e + "; " + b;
        b = Math.abs(parseFloat(f));
        a = (1 == b ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + b)) + (") {\n" + h + "}\n") } else a = "", k = c, c.match(/^\w+$/) || z.Tf(c) || (k = Ak(z.h.Va, b + "_start", z.G.Xa), a += "var " + k + " = " + c + ";\n"), c = e, e.match(/^\w+$/) ||
        z.Tf(e) || (c = Ak(z.h.Va, b + "_end", z.G.Xa), a += "var " + c + " = " + e + ";\n"), e = Ak(z.h.Va, b + "_inc", z.G.Xa), a += "var " + e + " = ", a = z.Tf(f) ? a + (Math.abs(f) + ";\n") : a + ("Math.abs(" + f + ");\n"), a = a + ("if (" + k + " > " + c + ") {\n") + (z.h.Me + e + " = -" + e + ";\n"), a += "}\n", a += "for (" + b + " = " + k + "; " + e + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + e + ") {\n" + h + "}\n";
    return a
};
z.h.controls_forEach = function(a) { var b = z.h.Va.getName(E(a, "VAR"), z.G.Xa),
        c = U(a, "LIST", z.h.xg) || "[]",
        e = wk(a, "DO");
    e = xk(e, a.id);
    a = ""; var f = c;
    c.match(/^\w+$/) || (f = Ak(z.h.Va, b + "_list", z.G.Xa), a += "var " + f + " = " + c + ";\n");
    c = Ak(z.h.Va, b + "_index", z.G.Xa);
    e = z.h.Me + b + " = " + f + "[" + c + "];\n" + e; return a + ("for (var " + c + " in " + f + ") {\n" + e + "}\n") };
z.h.controls_flow_statements = function(a) { switch (E(a, "FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n" } throw "Unknown flow statement."; };
z.h.Lw = {};
z.h.math_number = function(a) { a = parseFloat(E(a, "NUM")); return [a, 0 <= a ? z.h.vf : z.h.Oi] };
z.h.math_arithmetic = function(a) { var b = { ADD: [" + ", z.h.wg], MINUS: [" - ", z.h.Gh], MULTIPLY: [" * ", z.h.Um], DIVIDE: [" / ", z.h.Mk], POWER: [null, z.h.kc] } [E(a, "OP")],
        c = b[0];
    b = b[1]; var e = U(a, "A", b) || "0";
    a = U(a, "B", b) || "0"; return c ? [e + c + a, b] : ["Math.pow(" + e + ", " + a + ")", z.h.Ya] };
z.h.math_single = function(a) {
    var b = E(a, "OP");
    if ("NEG" == b) return a = U(a, "NUM", z.h.Oi) || "0", "-" == a[0] && (a = " " + a), ["-" + a, z.h.Oi];
    a = "SIN" == b || "COS" == b || "TAN" == b ? U(a, "NUM", z.h.Mk) || "0" : U(a, "NUM", z.h.Ec) || "0";
    switch (b) {
        case "ABS":
            var c = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            c = "Math.sqrt(" + a + ")";
            break;
        case "LN":
            c = "Math.log(" + a + ")";
            break;
        case "EXP":
            c = "Math.exp(" + a + ")";
            break;
        case "POW10":
            c = "Math.pow(10," + a + ")";
            break;
        case "ROUND":
            c = "Math.round(" + a + ")";
            break;
        case "ROUNDUP":
            c = "Math.ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            c =
                "Math.floor(" + a + ")";
            break;
        case "SIN":
            c = "Math.sin(" + a + " / 180 * Math.PI)";
            break;
        case "COS":
            c = "Math.cos(" + a + " / 180 * Math.PI)";
            break;
        case "TAN":
            c = "Math.tan(" + a + " / 180 * Math.PI)"
    }
    if (c) return [c, z.h.Ya];
    switch (b) {
        case "LOG10":
            c = "Math.log(" + a + ") / Math.log(10)"; break;
        case "ASIN":
            c = "Math.asin(" + a + ") / Math.PI * 180"; break;
        case "ACOS":
            c = "Math.acos(" + a + ") / Math.PI * 180"; break;
        case "ATAN":
            c = "Math.atan(" + a + ") / Math.PI * 180"; break;
        default:
            throw "Unknown math operator: " + b; }
    return [c, z.h.Mk]
};
z.h.math_constant = function(a) { return { PI: ["Math.PI", z.h.kb], E: ["Math.E", z.h.kb], GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", z.h.Mk], SQRT2: ["Math.SQRT2", z.h.kb], SQRT1_2: ["Math.SQRT1_2", z.h.kb], INFINITY: ["Infinity", z.h.vf] } [E(a, "CONSTANT")] };
z.h.math_number_property = function(a) {
    var b = U(a, "NUMBER_TO_CHECK", z.h.Ni) || "0",
        c = E(a, "PROPERTY");
    if ("PRIME" == c) {
        var e = zk("mathIsPrime", ["function " + z.h.pd + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
            "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"
        ]) + "(" + b + ")";
        return [e, z.h.Ya]
    }
    switch (c) {
        case "EVEN":
            e = b + " % 2 == 0"; break;
        case "ODD":
            e = b + " % 2 == 1"; break;
        case "WHOLE":
            e = b + " % 1 == 0"; break;
        case "POSITIVE":
            e = b + " > 0"; break;
        case "NEGATIVE":
            e = b + " < 0"; break;
        case "DIVISIBLE_BY":
            a = U(a, "DIVISOR", z.h.Ni) || "0", e = b + " % " + a + " == 0" }
    return [e, z.h.fq]
};
z.h.math_change = function(a) { var b = U(a, "DELTA", z.h.wg) || "0";
    a = z.h.Va.getName(E(a, "VAR"), z.G.Xa); return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n" };
z.h.math_round = z.h.math_single;
z.h.math_trig = z.h.math_single;
z.h.math_on_list = function(a) {
    var b = E(a, "OP");
    switch (b) {
        case "SUM":
            a = U(a, "LIST", z.h.kb) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = U(a, "LIST", z.h.kc) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = U(a, "LIST", z.h.kc) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            b = zk("mathMean", ["function " + z.h.pd + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = U(a, "LIST", z.h.Ec) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MEDIAN":
            b =
                zk("mathMedian", ["function " + z.h.pd + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = U(a, "LIST", z.h.Ec) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MODE":
            b = zk("mathModes",
                ["function " + z.h.pd + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);",
                    "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
                ]);
            a = U(a, "LIST", z.h.Ec) || "[]";
            a = b + "(" + a + ")";
            break;
        case "STD_DEV":
            b = zk("mathStandardDeviation", ["function " + z.h.pd + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"
            ]);
            a = U(a, "LIST", z.h.Ec) || "[]";
            a = b + "(" + a + ")";
            break;
        case "RANDOM":
            b = zk("mathRandomList", ["function " + z.h.pd + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = U(a, "LIST", z.h.Ec) || "[]";
            a = b + "(" + a + ")";
            break;
        default:
            throw "Unknown operator: " + b;
    }
    return [a, z.h.Ya]
};
z.h.math_modulo = function(a) { var b = U(a, "DIVIDEND", z.h.Ni) || "0";
    a = U(a, "DIVISOR", z.h.Ni) || "0"; return [b + " % " + a, z.h.Ni] };
z.h.math_constrain = function(a) { var b = U(a, "VALUE", z.h.kc) || "0",
        c = U(a, "LOW", z.h.kc) || "0";
    a = U(a, "HIGH", z.h.kc) || "Infinity"; return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", z.h.Ya] };
z.h.math_random_int = function(a) { var b = U(a, "FROM", z.h.kc) || "0";
    a = U(a, "TO", z.h.kc) || "0"; return [zk("mathRandomInt", ["function " + z.h.pd + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", z.h.Ya] };
z.h.math_random_float = function() { return ["Math.random()", z.h.Ya] };
z.h.tx = {};
z.h.procedures_defreturn = function(a) { var b = z.h.Va.getName(E(a, "NAME"), z.qa.Xa),
        c = wk(a, "STACK"); if (z.h.Ih) { var e = a.id.replace(/\$/g, "$$$$");
        c = vk(z.h.Ih.replace(/%1/g, "'" + e + "'"), z.h.Me) + c } z.h.Jk && (c = z.h.Jk.replace(/%1/g, "'" + a.id + "'") + c);
    (e = U(a, "RETURN", z.h.Ec) || "") && (e = z.h.Me + "return " + e + ";\n"); for (var f = [], h = 0; h < a.ca.length; h++) f[h] = z.h.Va.getName(a.ca[h], z.G.Xa);
    c = "function " + b + "(" + f.join(", ") + ") {\n" + c + e + "}";
    c = z.h.vm(a, c);
    z.h.Df["%" + b] = c; return null };
z.h.procedures_defnoreturn = z.h.procedures_defreturn;
z.h.procedures_callreturn = function(a) { for (var b = z.h.Va.getName(E(a, "NAME"), z.qa.Xa), c = [], e = 0; e < a.ca.length; e++) c[e] = U(a, "ARG" + e, z.h.kc) || "null"; return [b + "(" + c.join(", ") + ")", z.h.Ya] };
z.h.procedures_callnoreturn = function(a) { for (var b = z.h.Va.getName(E(a, "NAME"), z.qa.Xa), c = [], e = 0; e < a.ca.length; e++) c[e] = U(a, "ARG" + e, z.h.kc) || "null"; return b + "(" + c.join(", ") + ");\n" };
z.h.procedures_ifreturn = function(a) { var b = "if (" + (U(a, "CONDITION", z.h.Ec) || "false") + ") {\n";
    a.Nf ? (a = U(a, "VALUE", z.h.Ec) || "null", b += z.h.Me + "return " + a + ";\n") : b += z.h.Me + "return;\n"; return b + "}\n" };
z.h.Sx = {};
z.h.variables_get = function(a) { return [z.h.Va.getName(E(a, "VAR"), z.G.Xa), z.h.vf] };
z.h.variables_set = function(a) { var b = U(a, "VALUE", z.h.xg) || "0"; return z.h.Va.getName(E(a, "VAR"), z.G.Xa) + " = " + b + ";\n" };
/*

 Blockly Games: Music Graphics Blocks

 Copyright 2012 Google Inc.
 https://github.com/google/blockly-games

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Ql;
z.J.music_pitch = { L: function() { P(Q(this), new Ol("7"), "PITCH");
        this.Ed(!0, "Number");
        this.qb(z.g.MATH_HUE);
        this.La(W("Music_pitchTooltip")) } };
z.h.music_pitch = function(a) { return [E(a, "PITCH"), z.h.vf] };
z.J.music_note = {
    L: function() {
        var a = [
            [{ src: "music/note1.png", width: 9, height: 19, alt: "whole" }, "1"],
            [{ src: "music/note0.5.png", width: 9, height: 19, alt: "half" }, "0.5"],
            [{ src: "music/note0.25.png", width: 9, height: 19, alt: "quarter" }, "0.25"],
            [{ src: "music/note0.125.png", width: 9, height: 19, alt: "eighth" }, "0.125"],
            [{ src: "music/note0.0625.png", width: 9, height: 19, alt: "sixteenth" }, "0.0625"]
        ];
        10 > V && (a.shift(), a.pop());
        Hh(this, {
            message0: W("Music_playNote"),
            args0: [{ type: "field_dropdown", name: "DURATION", options: a }, {
                type: "input_value",
                name: "PITCH",
                check: "Number"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: W("Music_playNoteTooltip")
        })
    }
};
z.h.music_note = function(a) { var b = U(a, "PITCH", z.h.kc) || "7"; return "play(" + E(a, "DURATION") + ", " + b + ", 'block_id_" + a.id + "');\n" };
z.J.music_rest_whole = { L: function() { Hh(this, { message0: W("Music_rest"), args0: [{ type: "field_image", src: "music/rest1.png", width: 10, height: 20, alt: "-" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: 160, tooltip: W("Music_restWholeTooltip") }) } };
z.h.music_rest_whole = function(a) { return "rest(1, 'block_id_" + a.id + "');\n" };
z.J.music_rest = {
    L: function() {
        Hh(this, {
            message0: W("Music_rest"),
            args0: [{ type: "field_dropdown", name: "DURATION", options: [
                    [{ src: "music/rest1.png", width: 10, height: 20, alt: "whole" }, "1"],
                    [{ src: "music/rest0.5.png", width: 10, height: 20, alt: "half" }, "0.5"],
                    [{ src: "music/rest0.25.png", width: 10, height: 20, alt: "quarter" }, "0.25"],
                    [{ src: "music/rest0.125.png", width: 10, height: 20, alt: "eighth" }, "0.125"],
                    [{ src: "music/rest0.0625.png", width: 10, height: 20, alt: "sixteenth" }, "0.0625"]
                ] }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: W("Music_restTooltip")
        })
    }
};
z.h.music_rest = function(a) { return "rest(" + E(a, "DURATION") + ", 'block_id_" + a.id + "');\n" };
z.J.music_instrument = { L: function() { Hh(this, { message0: W("Music_setInstrument"), args0: [{ type: "field_dropdown", name: "INSTRUMENT", options: [
                    [W("Music_piano"), "piano"],
                    [W("Music_trumpet"), "trumpet"],
                    [W("Music_banjo"), "banjo"],
                    [W("Music_violin"), "violin"],
                    [W("Music_guitar"), "guitar"],
                    [W("Music_flute"), "flute"],
                    [W("Music_drum"), "drum"],
                    [W("Music_choir"), "choir"]
                ] }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: 160, tooltip: W("Music_setInstrumentTooltip") }) } };
z.h.music_instrument = function(a) { return "setInstrument('" + E(a, "INSTRUMENT") + "', 'block_id_" + a.id + "');\n" };
z.J.music_start = { L: function() { Hh(this, { message0: W("Music_start"), args0: [{ type: "field_image", src: "music/play.png", width: 17, height: 17, alt: "\u25b6" }], message1: "%1", args1: [{ type: "input_statement", name: "STACK" }], colour: 0, tooltip: W("Music_startTooltip") }) } };
z.h.music_start = function(a) { Rl++;
    a = wk(a, "STACK");
    z.h.Df["%start" + Rl] = "function start" + Rl + "() {\n" + a + "}\n"; return null };
10 > V && (z.J.procedures_defnoreturn.L = function() { var a = new ij("", z.qa.cp);
    a.kk = !1;
    P(P(P(Q(this), z.g.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.qb(z.g.PROCEDURES_HUE);
    this.La(z.g.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Pb = z.g.PROCEDURES_DEFNORETURN_HELPURL;
    this.ca = [];
    this.yb = [];
    this.lg(!0);
    this.He = null }, delete z.J.procedures_defreturn, delete z.J.procedures_ifreturn);
var Sl = {},
    Tl = {};

function Ul() { throw Error("Do not instantiate directly"); } Ul.prototype.un = null;
Ul.prototype.Ic = function() { return this.content };
Ul.prototype.toString = function() { return this.content };
Ul.prototype.Hm = function() { if (this.vn === Tl) return Id(this.toString()); if (this.vn !== Sl) throw Error("Sanitized content was not of kind TEXT or HTML."); return Jd(this.toString(), this.un || null) };

function Vl(a) { if (null != a) switch (a.un) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0 }
    return null }

function Wl() { Ul.call(this) } y(Wl, Ul);
Wl.prototype.vn = Sl;

function Xl(a) { return null != a && a.vn === Sl ? a : Yl(String(String(a)).replace(Zl, $l), Vl(a)) }
var Yl = function(a) {
        function b() {} b.prototype = a.prototype; return function(a, e) { var c = new b;
            c.content = String(a);
            void 0 !== e && (c.un = e); return c } }(Wl),
    am = { "\x00": "&#0;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", "-": "&#45;", "/": "&#47;", "=": "&#61;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };

function $l(a) { return am[a] }
var Zl = /[\x00\x22\x26\x27\x3c\x3e]/g;

function bm() { return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>' };

function cm() {
    for (var a = '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Music_playNoteTooltip">Plays one musical note of the specified duration \\nand pitch. </span><span id="Music_playNote">play %1 note %2</span><span id="Music_restTooltip">Waits for the specified duration.</span><span id="Music_restWholeTooltip">Waits for one whole note.</span><span id="Music_rest">rest %1</span><span id="Music_setInstrumentTooltip">Switches to the specified instrument when \\nplaying subsequent musical notes. </span><span id="Music_setInstrument">set instrument to %1</span><span id="Music_startTooltip">Executes the blocks inside when the \'Run \\nProgram\' button is clicked. </span><span id="Music_start">when %1 clicked</span><span id="Music_pitchTooltip">One note (C4 is 7).</span><span id="Music_firstPart">first part</span><span id="Music_piano">piano</span><span id="Music_trumpet">trumpet</span><span id="Music_banjo">banjo</span><span id="Music_violin">violin</span><span id="Music_guitar">guitar</span><span id="Music_flute">flute</span><span id="Music_drum">drum</span><span id="Music_choir">choir</span><span id="Music_submitDisabled">Run your program until it stops. Then you may submit your music to the gallery.</span></div><table width="100%"><tr><td><h1>' +
            ('<span id="title">' + (El ? '<a href="index.html?lang=' + Xl(Cl) + '">' : '<a href="./?lang=' + Xl(Cl) + '">') + "Blockly Games</a> : " + Xl({ appName: "Music" }.appName) + "</span>"), b = " &nbsp; ", c = 1; 11 > c; c++) b += " " + (c == V ? '<span class="level_number level_done" id="level' + Xl(c) + '">' + Xl(c) + "</span>" : 10 == c ? '<a class="level_number" id="level' + Xl(c) + '" href="?lang=' + Xl(Cl) + "&level=" + Xl(c) + Xl("") + '">' + Xl(c) + "</a>" : '<a class="level_dot" id="level' + Xl(c) + '" href="?lang=' + Xl(Cl) + "&level=" + Xl(c) + Xl("") + '"></a>');
    return a + b + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="music/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="music/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' +
        (10 != V || El ? "" : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' + Xl(Cl) + '"><button type="submit" title="Open the gallery of music."><img src="common/1x1.gif" class="gallery icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your music to the gallery."><img src="common/1x1.gif" class="camera icon21"> Submit to Gallery</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your music to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><footer>\x3c!--Legal disclaimer goes here if needed.--\x3e</footer><div class="farSide"><button id="galleryCancel" type="button">Cancel</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>') +
        ('<xml id="toolbox" style="display: none">' + (10 == V ? '<category name="Music"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_change"><value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Lists"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>' :
            '<category name="Music"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' + (6 < V ? '<block type="music_rest_whole"></block>' : "") + (5 < V ? '<block type="music_instrument"></block>' : "") + (6 < V ? '<block type="music_start" id="music_start"></block>' : "") + "</category>" + (1 < V ? '<category name="Functions" custom="PROCEDURE"></category>' : "")) + "</xml>") + '<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + bm() + "</div>") + '<div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better.  Use functions to reduce the amount of repeated code.</div>' + bm() + '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + (1 == V ? "Compose the first four notes of 'Fr\u00e8re Jacques'.<p>C4 - D4 - E4 - C4</p>" : 2 == V ? "A 'function' allows you to group blocks together, then run them more than once.<div id=\"sampleHelp2\" class=\"readonly\"></div>Create a function to play the first four notes of 'Fr\u00e8re Jacques'. Run that function twice.  Don't add any new note blocks." :
            3 == V ? 'Create a second function for the next part of \'Fr\u00e8re Jacques\'. The last note is longer.<br><img src="music/note0.5.png" class="sampleNote">' : 4 == V ? 'Create a third function for the next part of \'Fr\u00e8re Jacques\'. The first four notes are shorter.<br><img src="music/note0.125.png" class="sampleNote">' : 5 == V ? "Complete the full tune of 'Fr\u00e8re Jacques'." : 6 == V ? 'This new block lets you change to another instrument.<div id="sampleHelp6" class="readonly"></div>Play your tune with a violin.' :
            7 == V ? 'This new block adds a silent delay.<div id="sampleHelp7" class="readonly"></div>Create a second start block that has two delay blocks, then also plays \'Fr\u00e8re Jacques\'.' : 8 == V ? "Each start block should play 'Fr\u00e8re Jacques' twice." : 9 == V ? "Create four start blocks that each play 'Fr\u00e8re Jacques' twice. Add the correct number of delay blocks." : 10 == V ? "Compose anything you want. You've got a huge number of new blocks you can explore. Have fun!" + (El ? "" : '<br><br>Use the "See Gallery" button to see what other people have composed. If you compose something interesting, use the "Submit to Gallery" button to publish it.') :
            "") + "</div>" + bm() + "</div>"
};

function dm(a) {
    var b = em;
    this.$t = 23;
    this.Ah = 18;
    this.Pm = 132;
    this.zg = 20;
    this.Ia = .5;
    this.zq = b;
    this.hn = [];
    b = document.createElementNS(fm, "line");
    b.setAttribute("class", "sliderTrack");
    b.setAttribute("x1", 10);
    b.setAttribute("y1", 35);
    b.setAttribute("x2", 140);
    b.setAttribute("y2", 35);
    a.appendChild(b);
    b = document.createElementNS(fm, "rect");
    b.setAttribute("style", "opacity: 0");
    b.setAttribute("x", 10 - this.zg);
    b.setAttribute("y", 35 - this.zg);
    b.setAttribute("width", 130 + 2 * this.zg);
    b.setAttribute("height", 2 * this.zg);
    b.setAttribute("rx", this.zg);
    b.setAttribute("ry", this.zg);
    a.appendChild(b);
    this.Nx = b;
    b = document.createElementNS(fm, "path");
    b.setAttribute("class", "sliderKnob");
    b.setAttribute("d", "m 0,0 l -8,8 v 12 h 16 v -12 z");
    a.appendChild(b);
    this.ds = b;
    b = document.createElementNS(fm, "circle");
    b.setAttribute("style", "opacity: 0");
    b.setAttribute("r", this.zg);
    b.setAttribute("cy", 35);
    a.appendChild(b);
    this.so = b;
    for (this.setValue(.5); a && "svg" != a.nodeName.toLowerCase();) a = a.parentNode;
    this.wa = a;
    gm(this.so, "mousedown",
        this, this.bs);
    gm(this.so, "touchstart", this, this.bs);
    gm(this.Nx, "mousedown", this, this.ux);
    gm(this.wa, "mouseup", null, hm);
    gm(this.wa, "touchend", null, hm);
    gm(this.wa, "mousemove", null, im);
    gm(this.wa, "touchmove", null, im);
    gm(document, "mouseover", null, jm)
}
var fm = "http://www.w3.org/2000/svg",
    km = null,
    lm = 0,
    mm = 0;
dm.prototype.bs = function(a) { if ("touchstart" == a.type) { if (1 != a.changedTouches.length) return;
        nm(a) } km = this;
    lm = om(this, a).x;
    mm = 0; var b = this.ds.getAttribute("transform");
    b && (b = b.match(/translate\(\s*([-\d.]+)/)) && (mm = Number(b[1]));
    a.preventDefault() };

function hm() { km = null }

function jm(a) { if (km) { a = a.target;
        do
            if (a == km.wa) return; while (a = a.parentNode);
        km = null } }

function im(a) { var b = km; if (b) { if ("touchmove" == a.type) { if (1 != a.changedTouches.length) return;
            nm(a) } a = om(b, a).x - lm + mm;
        b.setValue((a - b.Ah) / (b.Pm - b.Ah)) } } dm.prototype.ux = function(a) { if ("touchstart" == a.type) { if (1 != a.changedTouches.length) return;
        nm(a) } a = om(this, a).x;
    pm(this, (a - this.Ah) / (this.Pm - this.Ah)) };
dm.prototype.getValue = function() { return this.Ia };

function pm(a, b) {
    function c(c) { return function() { a.setValue(c * (b - e) / 9 + e) } } for (; a.hn.length;) clearTimeout(a.hn.pop()); for (var e = a.getValue(), f = 0; 10 > f; f++) a.hn.push(setTimeout(c(f), 200 * f / 10)) } dm.prototype.setValue = function(a) { this.Ia = rc(a, 0, 1);
    a = this.Ah + (this.Pm - this.Ah) * this.Ia;
    this.ds.setAttribute("transform", "translate(" + a + "," + this.$t + ")");
    this.so.setAttribute("cx", a);
    this.zq && this.zq(this.Ia) };

function om(a, b) { var c = a.wa.createSVGPoint();
    c.x = b.clientX;
    c.y = b.clientY;
    a = a.wa.getScreenCTM().inverse(); return c.matrixTransform(a) }

function gm(a, b, c, e) { a.addEventListener(b, function(a) { e.apply(c, arguments) }, !1) }

function nm(a) { var b = a.changedTouches[0];
    a.clientX = b.clientX;
    a.clientY = b.clientY };
var Ml = "music",
    qm = 0,
    Rl = 0,
    rm = 0,
    sm = 0,
    tm = null,
    um = [],
    vm = 0,
    wm = 0,
    Z = null,
    xm = !1;
window.addEventListener("load", function() {
    function a() { var a = e.offsetTop;
        f.style.top = a + "px";
        h.style.top = a + "px";
        c.style.top = Math.max(10, a - window.pageYOffset) + "px";
        c.style.left = b ? "10px" : "420px";
        c.style.width = window.innerWidth - 440 + "px" } document.body.innerHTML = cm();
    Y.L();
    var b = -1 != Bl.indexOf(Cl),
        c = document.getElementById("blockly"),
        e = document.getElementById("paddingBox"),
        f = document.getElementById("staveBox"),
        h = document.getElementById("musicBox");
    window.addEventListener("scroll", function() { a(null);
        z.ph(O) });
    window.addEventListener("resize", a);
    a(null);
    var k = 1.03333 - .0333333 * V,
        l = document.getElementById("toolbox");
    O = z.Qf("blockly", { disable: !1, media: "third-party/blockly/media/", rtl: b, toolbox: l, zoom: { maxScale: 2, controls: !0, wheel: !0, startScale: k } });
    O.Fc(z.j.Ev);
    O.Fc(ym);
    yk("play,rest,setInstrument,start0,start1,start2,start3,start4,start5,start6,start7,start8,start9");
    document.getElementById("submitButton") && Nl("submitButton", zm);
    k = document.getElementById("slider");
    Ql = new dm(k);
    Y.Gw('<xml>  <block type="music_start" deletable="' +
        (6 < V) + '" x="180" y="50"></block></xml>', 10 != V || Am);
    if (6 < V) { l = cd(O, !1);
        k = 0; for (var m; m = l[k]; k++) m.ym(!0) } Bm();
    Cm();
    Nl("runButton", Dm);
    Nl("resetButton", Em);
    setTimeout(Y.uw, 1);
    setTimeout(Y.vw, 1);
    Nl("helpButton", Fm);
    2 > location.hash.length && !Kl(V) && setTimeout(Fm, 1E3);
    l = "piano trumpet violin drum flute banjo guitar choir".split(" ");
    m = [];
    for (k = 0; k < l.length; k++)
        for (var n = 0; n < Pl.length; n++) m.push({ src: l[k] + "/" + Pl[n] + ".mp3", id: l[k] + n });
    createjs.Sound.registerSounds(m, "third-party/midi-js-soundfonts/")
});

function em() { vm = 0 }

function Gm(a) { rm = a; for (var b = document.getElementById("staveBox"), c = 1; c <= a; c++) { var e = Hm(c, a),
            f = document.createElement("img");
        f.src = "music/stave.png";
        f.className = "stave";
        f.style.top = Math.round(e) + "px";
        b.appendChild(f) } }

function Hm(a, b) { return a = (2 * a - 1) / (2 * b) * 385 - 34.5 + 5 }

function Im(a, b, c, e, f) {
    for (; 1 < e;) Im(a, b, c, 1, f), b += 1, --e;
    a = Hm(a, rm);
    a = -1 == c ? Math.round(a + 21) : Math.floor(a + (-4.5 * c + 32));
    b = Math.round(256 * b + 10);
    var h = document.getElementById("musicContainer"),
        k = document.createElement("img"),
        l = -1 == c ? "rest" : "note";
    k.src = "music/" + l + e + ".png";
    k.className = f + " " + l;
    k.style.top = a + "px";
    k.style.left = b + "px"; - 1 != c && (k.title = Pl[c]);
    h.appendChild(k);
    if (!f) {
        var m = document.createElement("img");
        m.src = "music/" + l + e + ".png";
        m.className = l;
        m.style.top = a + "px";
        m.style.left = b + "px";
        h.appendChild(m);
        setTimeout(function() { m.className = "splash " + l }, 0);
        setTimeout(function() { G(m) }, 1E3)
    }
    if ("0" == c || "12" == c) c = document.createElement("img"), c.src = "music/black1x1.gif", c.className = f + " ledgerLine", c.style.top = a + 32 + "px", c.style.left = b - 5 + "px", h.appendChild(c)
}

function Fm() {
    var a = document.getElementById("help"),
        b = document.getElementById("helpButton");
    if (2 == V) { var c = '<xml><block type="procedures_defnoreturn" x="5" y="10"><field name="NAME">%1</field></block><block type="procedures_callnoreturn" x="5" y="85"><mutation name="%1"></mutation><next><block type="procedures_callnoreturn"><mutation name="%1"></mutation></block></next></block></xml>',
            e = W("Music_firstPart");
        c = c.replace(/%1/g, Ka(e));
        Y.mo("sampleHelp2", c) } else 6 == V ? Y.mo("sampleHelp6", '<xml><block type="music_instrument" x="5" y="10"></block></xml>') :
        7 == V && Y.mo("sampleHelp7", '<xml><block type="music_rest_whole" x="5" y="10"></block></xml>');
    X.yi(a, b, !0, !0, { width: "50%", left: "25%", top: "5em" }, Jm);
    X.Ip()
}

function Jm() { X.Jp() }

function ym(a) {
    var b = document.getElementById("toolbox"),
        c = document.getElementById("music_start");
    if (c) {
        var e = Km ? Km.length : 4,
            f = Rl;
        if (a instanceof yc) { for (var h = [], k = cd(O, !1), l = 0, m; m = k[l]; l++) "music_start" == m.type && h.push(m); if (e < h.length)
                for (l = 0; k = a.cf[l]; l++) { m = 0; for (var n; n = h[m]; m++) n.id == k && n.Nc(!0) } e <= h.length ? (c.setAttribute("disabled", "true"), O.Im(b), Rl = e) : Rl = h.length } else if (a instanceof zc) {
            a = [];
            h = [];
            k = cd(O, !0);
            for (l = 0; m = k[l]; l++) "music_start" == m.type && (m.disabled ? h : a).push(m);
            for (; e > a.length &&
                h.length;) m = h.shift(), m.Nc(!1), a.push(m);
            e > a.length && (c.setAttribute("disabled", "false"), O.Im(b));
            Rl = a.length
        }
        Rl != f && Em()
    }
}

function Cm() { clearTimeout(qm); for (var a = 0, b; b = um[a]; a++) Lm(b);
    Z = tm = null;
    vm = wm = um.length = 0;
    xm = !1;
    ee(document.getElementById("staveBox"));
    a = document.getElementById("musicContainer");
    ee(a);
    sm = 0;
    b = document.createElement("img");
    b.id = "musicContainerWidth";
    b.src = "third-party/blockly/media/1x1.gif";
    a.appendChild(b); if (Km) { Gm(Km.length); for (a = 0; a < Km.length; a++) { b = Km[a]; for (var c = 0, e = 0; e < b.length; e += 2) { var f = b[e + 1];
                Im(a + 1, c, String(b[e]), f, "goal");
                c += f } } setTimeout(Mm, 0) } else Gm(Rl || 1) }

function Dm(a) { if (!Y.ke(a)) { a = document.getElementById("runButton"); var b = document.getElementById("resetButton");
        b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        b.style.display = "inline";
        document.getElementById("spinner").style.visibility = "visible";
        Nm() } }

function Em(a) { a && Y.ke(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", document.getElementById("spinner").style.visibility = "hidden", Pg(null), Cm()) }

function Om(a, b) {
    var c = function(a, b, c) { if (Z.kp) { for (var e = Infinity, f = 0, h; h = um[f]; f++) h.kp && h.Xd < e && (e = h.Xd); for (f = 0; h = um[f]; f++)
                if (e == h.Xd) { f = Z.Xd;
                    Z.Xd = e;
                    h.Xd = f; break } Z.kp = !1 } Lm(Z);
        Z.Fp = createjs.Sound.play(Z.Wr + b);
        Z.mm = 64 * a + wm;
        Z.Oc.push(b);
        Z.Oc.push(a);
        e = !1; if (10 > V) { h = Km[Z.Xd - 1]; var n = Z.Oc;
            f = n.length - 2; if (h[f] != n[f] || h[f + 1] != n[f + 1]) e = !0 } Im(Z.Xd, wm / 64, String(b), a, e ? "wrong" : "");
        Pm(c) };
    a.setProperty(b, "play", a.createNativeFunction(c));
    c = function(a, b) {
        Lm(Z);
        Z.mm = 64 * a + wm;
        1 < Z.Oc.length && -1 == Z.Oc[Z.Oc.length -
            2] ? Z.Oc[Z.Oc.length - 1] += a : (Z.Oc.push(-1), Z.Oc.push(a));
        var c = !1;
        if (10 > V) { var e = Km[Z.Xd - 1],
                f = Z.Oc,
                m = f.length - 2; if (e[m] != f[m] || e[m + 1] < f[m + 1]) c = !0 } Im(Z.Xd, wm / 64, "-1", a, c ? "wrong" : "");
        Pm(b)
    };
    a.setProperty(b, "rest", a.createNativeFunction(c));
    c = function(a) { Z.Wr = a };
    a.setProperty(b, "setInstrument", a.createNativeFunction(c))
}

function Nm() { if ("Interpreter" in window) { Cm();
        z.selected && z.selected.qg();
        Rl = 0; var a = tk();
        0 == Rl && Em();
        tm = new Interpreter(a, Om); for (a = 1; a <= Rl; a++) { var b = new Interpreter("");
            b.stateStack[0].scope = tm.global;
            b.appendCode("start" + a + "();\n");
            um.push(new Qm(a, b.stateStack)) } setTimeout(Rm, 100) } else setTimeout(Nm, 250) }

function Rm() { var a = 1E3 * (2.5 - 2 * Ql.getValue()) / 64;
    vm || (vm = Date.now() - wm * a); for (var b = !0, c = 0, e; e = um[c]; c++)
        if (!e.done && (b = !1, e.mm <= wm)) a: { var f = void 0;Z = e;tm.stateStack = e.stateStack;tm.stateStack = e.stateStack;do { try { f = tm.step() } catch (h) { alert(h), f = !1 } if (e.mm > wm) break a } while (f);Lm(e);e.ci && (Y.Aj(e.ci, !1), e.ci = null);e.done = !0 } b ? (Sm() && (Y.xx(), 10 > V && (Rl = 0, X.hv())), document.getElementById("spinner").style.visibility = "hidden", Pg(null), xm = !0) : (Mm(), wm++, qm = setTimeout(Rm, vm + wm * a - Date.now())) }

function Lm(a) { var b = a.Fp;
    b && (setTimeout(b.stop.bind(b), 100), a.Fp = null) }

function Mm() { var a = document.getElementById("musicBox"),
        b = document.getElementById("musicContainer"),
        c = document.getElementById("musicContainerWidth"),
        e = 10 > V ? 200 : 100;
    e = wm ? Math.round(wm / 64 * 256 + 10 + e) : a.scrollWidth + e; for (c.width = e; sm < Math.floor(e / 256);)
        for (sm++, c = 1; c <= rm; c++) { var f = Hm(c, rm),
                h = document.createElement("img");
            h.src = "music/black1x1.gif";
            h.className = "barLine";
            h.style.top = f + 18 + "px";
            h.style.left = 256 * sm + 10 - 5 + "px";
            b.appendChild(h) } a.scrollLeft = 4 * wm - 182 }

function Pm(a) { a && (Z.ci && Y.Aj(Z.ci, !1), Y.Aj(a, !0), Z.ci = a) }
var Km = void 0;

function Bm() {
    function a(a) { return b = b.concat(a).concat(a) } var b = [],
        c = [a([7, .25, 8, .25, 9, .25, 7, .25])],
        e = [a([9, .25, 10, .25, 11, .5])],
        f = [a([11, .125, 12, .125, 11, .125, 10, .125, 9, .25, 7, .25])],
        h = [a([7, .25, 4, .25, 7, .5])],
        k = [b],
        l = [b, [-1, 2].concat(b)];
    b = b.concat(b);
    Km = [void 0, [
            [7, .25, 8, .25, 9, .25, 7, .25]
        ], c, e, f, h, k, l, [b, [-1, 2].concat(b)],
        [b, [-1, 2].concat(b), [-1, 4].concat(b), [-1, 6].concat(b)], void 0
    ][V] }

function Sm() {
    if (!Km) return !0;
    if (Km.length != um.length) return console.log("Expected " + Km.length + " voices, found " + um.length), !1;
    for (var a = 0; a < Km.length; a++)
        if (um[a].Xd == a + 1 && !Da(Km[a], um[a].Oc)) return !1;
    if (6 == V && (a = tk(), -1 == a.indexOf("setInstrument") || -1 != a.indexOf("piano"))) return !1;
    var b = [void 0, void 0, 16, 23, 38, 47, 47, 53, 55, 71, void 0][V],
        c = 0,
        e = Qc(O);
    a = 0;
    for (var f; f = e[a]; a++) "music_instrument" == f.type || f.disabled || Eh(f) || c++;
    return b && c > b ? (console.log("Too many blocks.  Found: " + c + " Max: " + b), a = document.getElementById("helpUseFunctions"),
        X.yi(a, null, !1, !0, { width: "30%", left: "35%", top: "12em" }, X.Jp), X.Ip(), !1) : !0
}

function Am(a) { return a.replace(/"music_rest_whole"/g, '"music_rest"') }

function zm() {
    if (xm && Rl) {
        var a = "data:image/png;base64," + [void 0, "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhDAQXCQ8DSgv8AAACEklEQVRo3mP8z0B7wMQwasmoJaOWjFoyasmoJaOWjFpCR0samV3p4JN/IqNxMjIt+UsPS248oIMll3fRI04WvKeDJcfX0yN1TaaHJRd66JFP+n7SwZLnsfTI8dtW09gSRlYGhq/Vn2lrSdACVgaGR620tYQvqp6N4efcczS15DtDdRgzw5sptI74xS4MDAu20zp1zZVl+D+B1pZIb+Fl2LWF1jWjXgwDQz/Nq99KXYZ9p2ltiWwKA8NMmjck/PUY9tDcEvkAhte7aG0Jg6/gt4M0t8SEi+EC7Rt3dgxvaW/Jf4Zf9Gim/qeHJay0t4SRgY32ljxn4KW9JfcZNGluyeefDLI0t2T3Nx4tmlty+hOTO80t2c9gQPNS+PAD1nCaW3LiJUMArS15sZ3JVorWlvyTlMkkSiELBZZIdb3XobolV7afu8bMZRyCaHpJE1tUEws22/NCCkMuOYaI/yQBYn1yqmY3jPntEanhSqQlTRPfURB5xFlSOPU3A60tKUZvvf+j/gDOHIyRAXHqWzIZPay4jUltbRAE3Rh6FH6QloSJ8MlSdAH2Cnaq+4QHXUvwfxIBI+HGGQfaKIrjTlYGqkc8WlJy2k6qHcRYkoTM4Sncy056biQcok8cECGnsvs/GYCYUvhxoSoDAwMDk1bK0v9kAUai1kjcvPCAQVBOSY3cFvPoQoxRS0YtGbVk1JLhbgkATHAP6cDyYR8AAAAASUVORK5CYII=", "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAB8klEQVRo3u3aO0/CUBQA4FMjJsaBTg4uxcHEzZLowlLG3on6CwyDM/EXgLMD8AuAXyDbrYvt4uojTg4GBgc10dY4OZg6FHld0tflOJhzN3pP79f7OL20oASAX1aAEEIIIYQQTGTYj6pVlnGrv7TPNl8i6ldlgTdu8/eYGDnknttOgjAJ5ILbD8kiMyLPnNufiaOzINecX6U6IS3yzTkfpL2qdMix8/SVoevpkNfHRUcPGLNdQMyTNcZMDcDGy5MCM1kONU9KzNwHzDzZYCbbAsw82TEZA9Q8MUy2h7yE10su/qa1mwN8hL5IEEIIIYQQQgghhBBCyB8ivWpRUZRi24+JC9KUujH1wWuov42olhF1Wvae9LYb4w74fZyn32oX9cEUAMA/dPEn/sTFX10tYawKSxgu/w5AGzfknwoBliwybLu3AAB6fXSgK+SFZsnlyaA8CVbDdDCEVpzIJmKRxuwLifCk+XIUyCDe3DAsRmKMGMTTYRFSSWfEIMJ0hsjMC+f8eSCFNIXBr4xulJMjNS+QQjxVQDqjKiccMaPpJbl5RyEdwdCmah1nkHSHiEIqKdMh034i5HWtjL/9HrUQ9vi56653s25wkasrPz3nGecjNk9utDHRCSRKzA9nLdf9yOu6VQaZotAfMQghhBBC/jvyA6C+2c6ogwZuAAAAAElFTkSuQmCC",
                "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAB4ElEQVRo3u2aPVKDUBCAl4ytA7U6k1hZQio7SUorMuMBoicgOQG5AXKC4AGcxMoyuQFJaQWeAGbsXYvEwPuBBxkZR2e3y9t979tfMnlEQ2hfOkAQghCEIASRyonS4vXjSq54Oz0rU9xyK6iSYXPPHe4IKjxBfnNO4PxOvv58cV2iaA65+Qzkiu1gVqKwqPAEIQhBCEIQghCEIAQhCEEIQpA/DcmeHi41TesH2Y/+jmcQ0+Xu8M3ksS1IMMv9T9qBZNPwuJo0gGTDTfuFP5rRADI5mlGVrmwLYBqHOovXOCN+IXkHsBtAkmCZAAAMvP2C2LE2exn0Eq4zADBGnnia9Jo2GuQGPRsREXvCzqi4I8z1Rs/jjpNCJqzHO0Ne/BKnAKAGJOXuxOSQcZFhQCWkU3ccuuxHtzCXy77qOSYEYgkFRkTEeXFJX1XEUSNdYm/sEzPOEV5a6RUsFJBYjPXb64UDAADOnEGwIe4yiwqIL2wxC9rVKhbSK/a2p4LY1eMgSlzpVc1XG3OrWi98rehh4weke68w4FtLX1vKFna5OJQvipAdoK4su0J36cXsRmoG211uijUgGB0o3RphsJPllDglTnzq2wC67UVYV2LXBDAdPy4z0OiPGAQhCEEI8t8hX5wfXfFkGIkcAAAAAElFTkSuQmCC",
                "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAACU0lEQVRo3u2aTY7aQBCFnyMWkRLJZjkrs8rWzlwAcwLgBMAJ4AYWJwBOYOYEkBPYXCD2Ohs7J7AjJcomUmXhAf90N+OMbWmkVG2A6nZ/7q56JSijEfq3d2AIQxjy/0AGUu/w93v59B8fBooBXe7/84sATVq7hll32yAOPKdw1R4e5P6vnz4qBh7l/p/fAIBkNnZJbvBVAwq/DyLiwDOEIQxhCEMYwhCGMIQhDGEIQ97iT+ymdgkCwJhNjd4g2eGYAADOxq4vyHZ/a1hlq34g2STqPfDR5xoj6R6STOqL9gCZC/3DUeeQvRAPszUkOUyGmqbNn66OgzBlc3eBl1tR4ew22clbUb6wipnea0W9mMLZdl98CCovJTsabXQSrZrIwXPaiDGayNrQ9SB7yzZiTKQMLCs9c9NftlL8XNFOPxdvdTdy/rHUJ9+BcRFOIR56vqATbi75LjYzlUAuhXjKkC/HIANgONfCvVXKwQ6SIIEzUhCSp3MEAPbSqurkVFxgjFwiori5HCqWlmJko9TPTasH68o1FzZheEZd7YN7qSrIwW4waXVUlJWwLljZcemnJvtYSgAgIoqFopDXrkXZZcVNGGuoIGKi5zedWkXIvSYISRitZ4gnjOjXLHItADAXjU6KiMSUdp8hDuSnle/G91Nqar78dkFEr5SDxFxhqR0pHm3oZ6OrL6iLjaJA6nu7K8Z4f8sws8oI6dVWS6FF6THRqTwwTamFWVLxonoDU59aWaEs001rD7zitQWY011Mrc2b6tDH64qwNP5zDEMYwpBu7S/9DO5PRs/ScgAAAABJRU5ErkJggg=="
            ][Rl],
            b = document.getElementById("thumbnail").getContext("2d");
        b.globalCompositeOperation = "copy";
        var c = new Image;
        c.onload = function() { b.drawImage(c, 0, 0, 200, 200) };
        c.src = a;
        document.getElementById("galleryThumb").value = a;
        X.Dp()
    } else alert(W("Music_submitDisabled"))
}

function Qm(a, b) { this.Xd = a;
    this.stateStack = b;
    this.Oc = [];
    this.Wr = "piano";
    this.mm = 0;
    this.Fp = this.ci = null;
    this.kp = 10 > V;
    this.done = !1 };