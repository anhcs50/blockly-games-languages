// Automatically generated file.  Do not edit!
var d, g = this;

function aa(a) { return void 0 !== a }

function q(a) { return "string" == typeof a }

function r(a) { return "number" == typeof a }

function ba(a, b) { a = a.split("."); var c = g;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var e; a.length && (e = a.shift());) !a.length && aa(b) ? c[e] = b : c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} }

function ca() {}

function da(a) { a.so = void 0;
    a.ze = function() { return a.so ? a.so : a.so = new a } }

function ea(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function t(a) { return "array" == ea(a) }

function fa(a) { var b = ea(a); return "array" == b || "object" == b && "number" == typeof a.length }

function u(a) { return "function" == ea(a) }

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
var pa = Date.now || function() { return +new Date };

function w(a, b) {
    function c() {} c.prototype = b.prototype;
    a.s = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.XB = function(a, c, h) { for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f]; return b.prototype[c].apply(a, e) } };
// Copyright 2013 Google Inc.  Apache License 2.0
var x = {};
x.D = Object(null);
var qa;
var ra = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) { if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1; for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c; return -1 },
    sa = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++) h in f && b.call(c, f[h], h, a) },
    ta = Array.prototype.filter ? function(a, b) { return Array.prototype.filter.call(a, b, void 0) } : function(a, b) {
        for (var c =
                a.length, e = [], f = 0, h = q(a) ? a.split("") : a, k = 0; k < c; k++)
            if (k in h) { var l = h[k];
                b.call(void 0, l, k, a) && (e[f++] = l) } return e
    },
    ua = Array.prototype.map ? function(a, b, c) { return Array.prototype.map.call(a, b, c) } : function(a, b, c) { for (var e = a.length, f = Array(e), h = q(a) ? a.split("") : a, k = 0; k < e; k++) k in h && (f[k] = b.call(c, h[k], k, a)); return f },
    va = Array.prototype.every ? function(a, b) { return Array.prototype.every.call(a, b, void 0) } : function(a, b) {
        for (var c = a.length, e = q(a) ? a.split("") : a, f = 0; f < c; f++)
            if (f in e && !b.call(void 0, e[f],
                    f, a)) return !1;
        return !0
    };

function wa(a, b, c) { a: { for (var e = a.length, f = q(a) ? a.split("") : a, h = 0; h < e; h++)
            if (h in f && b.call(c, f[h], h, a)) { b = h; break a } b = -1 } return 0 > b ? null : q(a) ? a.charAt(b) : a[b] }

function xa(a, b) { return 0 <= ra(a, b) }

function ya(a, b) { b = ra(a, b); var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1); return c }

function za(a) { return Array.prototype.concat.apply([], arguments) }

function Aa(a) { var b = a.length; if (0 < b) { for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e]; return c } return [] }

function Ba(a, b) { for (var c = 1; c < arguments.length; c++) { var e = arguments[c]; if (fa(e)) { var f = a.length || 0,
                h = e.length || 0;
            a.length = f + h; for (var k = 0; k < h; k++) a[f + k] = e[k] } else a.push(e) } }

function Ca(a, b, c, e) { Array.prototype.splice.apply(a, Da(arguments, 1)) }

function Da(a, b, c) { return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c) };

function Ea(a, b) { return 0 == a.lastIndexOf(b, 0) }

function Fa(a) { return /^[\s\xa0]*$/.test(a) }

function Ga(a) { return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") }
var Ia = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

function Ja(a) { if (!Ka.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(La, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ma, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Na, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Qa, "&#0;")); return a }
var La = /&/g,
    Ma = /</g,
    Na = />/g,
    Oa = /"/g,
    Pa = /'/g,
    Qa = /\x00/g,
    Ka = /[\x00&<>"']/;

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

function Va(a, b) { return a < b ? -1 : a > b ? 1 : 0 }

function Wa() { return "background-color".replace(/\-([a-z])/g, function(a, b) { return b.toUpperCase() }) }

function Xa(a) { var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s"; return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, f) { return b + f.toUpperCase() }) };
var Ya;
a: { var Za = g.navigator; if (Za) { var $a = Za.userAgent; if ($a) { Ya = $a; break a } } Ya = "" }

function ab(a) { return -1 != Ya.indexOf(a) };

function bb(a, b, c) { for (var e in a) b.call(c, a[e], e, a) }
var cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function db(a, b) { for (var c, e, f = 1; f < arguments.length; f++) { e = arguments[f]; for (c in e) a[c] = e[c]; for (var h = 0; h < cb.length; h++) c = cb[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]) } }

function eb(a) { var b = arguments.length; if (1 == b && t(arguments[0])) return eb.apply(null, arguments[0]); for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0; return c };

function fb(a) { fb[" "](a); return a } fb[" "] = ca;

function gb(a, b) { var c = hb; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
var ib = ab("Opera"),
    A = ab("Trident") || ab("MSIE"),
    jb = ab("Edge"),
    B = ab("Gecko") && !(-1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge")) && !(ab("Trident") || ab("MSIE")) && !ab("Edge"),
    C = -1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge"),
    kb = C && ab("Mobile"),
    lb = ab("Macintosh"),
    mb = ab("Android"),
    nb = ab("iPhone") && !ab("iPod") && !ab("iPad"),
    ob = ab("iPad");

function pb() { var a = g.document; return a ? a.documentMode : void 0 }
var qb;
a: { var rb = "",
        sb = function() { var a = Ya; if (B) return /rv:([^\);]+)(\)|;)/.exec(a); if (jb) return /Edge\/([\d\.]+)/.exec(a); if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (C) return /WebKit\/(\S+)/.exec(a); if (ib) return /(?:Version)[ \/]?(\S+)/.exec(a) }();sb && (rb = sb ? sb[1] : ""); if (A) { var tb = pb(); if (null != tb && tb > parseFloat(rb)) { qb = String(tb); break a } } qb = rb }
var hb = {};

function ub(a) { return gb(a, function() { for (var b = 0, c = Ia(String(qb)).split("."), e = Ia(String(a)).split("."), f = Math.max(c.length, e.length), h = 0; 0 == b && h < f; h++) { var k = c[h] || "",
                l = e[h] || "";
            do { k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""]; if (0 == k[0].length && 0 == l[0].length) break;
                b = Va(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || Va(0 == k[2].length, 0 == l[2].length) || Va(k[2], l[2]);
                k = k[3];
                l = l[3] } while (0 == b) } return 0 <= b }) }
var vb;
var wb = g.document;
vb = wb && A ? pb() || ("CSS1Compat" == wb.compatMode ? parseInt(qb, 10) : 5) : void 0;
var xb = !A || 9 <= Number(vb),
    yb = !A || 9 <= Number(vb),
    zb = A && !ub("9"),
    Ab = "ontouchstart" in g || !!(g.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.navigator || !g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints),
    Bb = "PointerEvent" in g,
    Cb = "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
    Db = function() {
        if (!g.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
        g.addEventListener("test",
            ca, b);
        g.removeEventListener("test", ca, b);
        return a
    }();

function Eb() { 0 != Fb && (Gb[ia(this)] = this);
    this.Xh = this.Xh;
    this.nf = this.nf }
var Fb = 0,
    Gb = {};
Eb.prototype.Xh = !1;
Eb.prototype.A = function() { if (!this.Xh && (this.Xh = !0, this.Za(), 0 != Fb)) { var a = ia(this); if (0 != Fb && this.nf && 0 < this.nf.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Gb[a] } };

function Hb(a, b) { a.Xh ? aa(void 0) ? b.call(void 0) : b() : (a.nf || (a.nf = []), a.nf.push(aa(void 0) ? na(b, void 0) : b)) } Eb.prototype.Za = function() { if (this.nf)
        for (; this.nf.length;) this.nf.shift()() };

function Ib(a) { a && "function" == typeof a.A && a.A() };

function Jb(a, b) { this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.kh = !1;
    this.ft = !0 } Jb.prototype.stopPropagation = function() { this.kh = !0 };
Jb.prototype.preventDefault = function() { this.defaultPrevented = !0;
    this.ft = !1 };

function Kb(a) { return C ? "webkit" + a : ib ? "o" + a.toLowerCase() : a.toLowerCase() }
var Lb = {
        Uy: "click",
        mB: "rightclick",
        dz: "dblclick",
        Kh: "mousedown",
        Lh: "mouseup",
        Ri: "mouseover",
        Qi: "mouseout",
        Bu: "mousemove",
        zu: "mouseenter",
        Au: "mouseleave",
        Jh: "mousecancel",
        rB: "selectionchange",
        sB: "selectstart",
        TB: "wheel",
        Tz: "keypress",
        Sz: "keydown",
        Uz: "keyup",
        Ry: "blur",
        Jz: "focus",
        ez: "deactivate",
        Kz: "focusin",
        Lz: "focusout",
        Gh: "change",
        jB: "reset",
        qB: "select",
        AB: "submit",
        Qz: "input",
        fB: "propertychange",
        wz: "dragstart",
        qz: "drag",
        sz: "dragenter",
        vz: "dragover",
        uz: "dragleave",
        Bz: "drop",
        rz: "dragend",
        IB: "touchstart",
        HB: "touchmove",
        GB: "touchend",
        FB: "touchcancel",
        Oy: "beforeunload",
        Zy: "consolemessage",
        $y: "contextmenu",
        fz: "devicechange",
        gz: "devicemotion",
        hz: "deviceorientation",
        kz: "DOMContentLoaded",
        Gz: "error",
        Pz: "help",
        Vz: "load",
        cA: "losecapture",
        QA: "orientationchange",
        hB: "readystatechange",
        kB: "resize",
        nB: "scroll",
        KB: "unload",
        Sy: "canplay",
        Ty: "canplaythrough",
        Dz: "durationchange",
        Ez: "emptied",
        Fz: "ended",
        Yz: "loadeddata",
        Zz: "loadedmetadata",
        UA: "pause",
        VA: "play",
        WA: "playing",
        gB: "ratechange",
        oB: "seeked",
        pB: "seeking",
        xB: "stalled",
        BB: "suspend",
        EB: "timeupdate",
        RB: "volumechange",
        SB: "waiting",
        wB: "sourceopen",
        vB: "sourceended",
        uB: "sourceclosed",
        Ay: "abort",
        MB: "update",
        PB: "updatestart",
        NB: "updateend",
        Oz: "hashchange",
        RA: "pagehide",
        SA: "pageshow",
        eB: "popstate",
        bz: "copy",
        TA: "paste",
        cz: "cut",
        Iy: "beforecopy",
        Jy: "beforecut",
        My: "beforepaste",
        yA: "online",
        xA: "offline",
        eA: "message",
        Yy: "connect",
        Rz: "install",
        By: "activate",
        Iz: "fetch",
        Mz: "foreignfetch",
        fA: "messageerror",
        yB: "statechange",
        OB: "updatefound",
        az: "controllerchange",
        Gy: Kb("AnimationStart"),
        Ey: Kb("AnimationEnd"),
        Fy: Kb("AnimationIteration"),
        JB: Kb("TransitionEnd"),
        YA: "pointerdown",
        dB: "pointerup",
        XA: "pointercancel",
        aB: "pointermove",
        cB: "pointerover",
        bB: "pointerout",
        ZA: "pointerenter",
        $A: "pointerleave",
        Nz: "gotpointercapture",
        dA: "lostpointercapture",
        gA: "MSGestureChange",
        hA: "MSGestureEnd",
        iA: "MSGestureHold",
        jA: "MSGestureStart",
        kA: "MSGestureTap",
        lA: "MSGotPointerCapture",
        mA: "MSInertiaStart",
        nA: "MSLostPointerCapture",
        oA: "MSPointerCancel",
        pA: "MSPointerDown",
        qA: "MSPointerEnter",
        rA: "MSPointerHover",
        sA: "MSPointerLeave",
        tA: "MSPointerMove",
        uA: "MSPointerOut",
        vA: "MSPointerOver",
        wA: "MSPointerUp",
        CB: "text",
        DB: A ? "textinput" : "textInput",
        Wy: "compositionstart",
        Xy: "compositionupdate",
        Vy: "compositionend",
        Ky: "beforeinput",
        Hz: "exit",
        Wz: "loadabort",
        Xz: "loadcommit",
        $z: "loadredirect",
        aA: "loadstart",
        bA: "loadstop",
        lB: "responsive",
        tB: "sizechanged",
        LB: "unresponsive",
        QB: "visibilitychange",
        zB: "storage",
        pz: "DOMSubtreeModified",
        lz: "DOMNodeInserted",
        nz: "DOMNodeRemoved",
        oz: "DOMNodeRemovedFromDocument",
        mz: "DOMNodeInsertedIntoDocument",
        iz: "DOMAttrModified",
        jz: "DOMCharacterDataModified",
        Ny: "beforeprint",
        Dy: "afterprint",
        Ly: "beforeinstallprompt",
        Hy: "appinstalled"
    },
    Mb = {
        Kh: Bb ? "pointerdown" : Cb ? "MSPointerDown" : "mousedown",
        Lh: Bb ? "pointerup" : Cb ? "MSPointerUp" : "mouseup",
        Jh: Bb ? "pointercancel" : Cb ? "MSPointerCancel" : "mousecancel",
        Bu: Bb ? "pointermove" : Cb ? "MSPointerMove" : "mousemove",
        Ri: Bb ? "pointerover" : Cb ? "MSPointerOver" : "mouseover",
        Qi: Bb ? "pointerout" : Cb ? "MSPointerOut" : "mouseout",
        zu: Bb ? "pointerenter" : Cb ? "MSPointerEnter" : "mouseenter",
        Au: Bb ? "pointerleave" : Cb ? "MSPointerLeave" : "mouseleave"
    };

function Nb(a, b) { Jb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.Xo = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.te = null;
    a && this.I(a, b) } w(Nb, Jb);
var Ob = [1, 4, 2],
    Pb = { 2: "touch", 3: "pen", 4: "mouse" };
Nb.prototype.I = function(a, b) {
    var c = this.type = a.type,
        e = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) { if (B) { a: { try { fb(b.nodeName); var f = !0; break a } catch (h) {} f = !1 } f || (b = null) } } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === e ? (this.offsetX = C || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = C || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Xo = lb ? a.metaKey : a.ctrlKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = q(a.pointerType) ? a.pointerType : Pb[a.pointerType] || "";
    this.state = a.state;
    this.te = a;
    a.defaultPrevented && this.preventDefault()
};

function Qb(a) { return xb ? 0 == a.te.button : "click" == a.type ? !0 : !!(a.te.button & Ob[0]) } Nb.prototype.stopPropagation = function() { Nb.s.stopPropagation.call(this);
    this.te.stopPropagation ? this.te.stopPropagation() : this.te.cancelBubble = !0 };
Nb.prototype.preventDefault = function() { Nb.s.preventDefault.call(this); var a = this.te; if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, zb) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
var Rb = "closure_listenable_" + (1E6 * Math.random() | 0);

function Sb(a) { return !(!a || !a[Rb]) }
var Tb = 0;

function Ub(a, b, c, e, f) { this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!e;
    this.Ql = f;
    this.key = ++Tb;
    this.Ci = this.Wk = !1 }

function Vb(a) { a.Ci = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ql = null };

function Wb(a) { this.src = a;
    this.Dc = {};
    this.Bk = 0 } Wb.prototype.add = function(a, b, c, e, f) { var h = a.toString();
    a = this.Dc[h];
    a || (a = this.Dc[h] = [], this.Bk++); var k = Xb(a, b, e, f); - 1 < k ? (b = a[k], c || (b.Wk = !1)) : (b = new Ub(b, this.src, h, !!e, f), b.Wk = c, a.push(b)); return b };
Wb.prototype.remove = function(a, b, c, e) { a = a.toString(); if (!(a in this.Dc)) return !1; var f = this.Dc[a];
    b = Xb(f, b, c, e); return -1 < b ? (Vb(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.Dc[a], this.Bk--), !0) : !1 };

function Yb(a, b) { var c = b.type;
    c in a.Dc && ya(a.Dc[c], b) && (Vb(b), 0 == a.Dc[c].length && (delete a.Dc[c], a.Bk--)) } Wb.prototype.removeAll = function(a) { a = a && a.toString(); var b = 0,
        c; for (c in this.Dc)
        if (!a || c == a) { for (var e = this.Dc[c], f = 0; f < e.length; f++) ++b, Vb(e[f]);
            delete this.Dc[c];
            this.Bk-- } return b };
Wb.prototype.xj = function(a, b, c, e) { a = this.Dc[a.toString()]; var f = -1;
    a && (f = Xb(a, b, c, e)); return -1 < f ? a[f] : null };

function Xb(a, b, c, e) { for (var f = 0; f < a.length; ++f) { var h = a[f]; if (!h.Ci && h.listener == b && h.capture == !!c && h.Ql == e) return f } return -1 };
var Zb = "closure_lm_" + (1E6 * Math.random() | 0),
    $b = {},
    ac = 0;

function bc(a, b, c, e, f) { if (e && e.once) return cc(a, b, c, e, f); if (t(b)) { for (var h = 0; h < b.length; h++) bc(a, b[h], c, e, f); return null } c = dc(c); return Sb(a) ? a.na(b, c, ha(e) ? !!e.capture : !!e, f) : ec(a, b, c, !1, e, f) }

function ec(a, b, c, e, f, h) { if (!b) throw Error("Invalid event type"); var k = ha(f) ? !!f.capture : !!f,
        l = fc(a);
    l || (a[Zb] = l = new Wb(a));
    c = l.add(b, c, e, k, h); if (c.proxy) return c;
    e = gc();
    c.proxy = e;
    e.src = a;
    e.listener = c; if (a.addEventListener) Db || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), e, f);
    else if (a.attachEvent) a.attachEvent(hc(b.toString()), e);
    else if (a.addListener && a.removeListener) a.addListener(e);
    else throw Error("addEventListener and attachEvent are unavailable.");
    ac++; return c }

function gc() { var a = ic,
        b = yb ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c }; return b }

function cc(a, b, c, e, f) { if (t(b)) { for (var h = 0; h < b.length; h++) cc(a, b[h], c, e, f); return null } c = dc(c); return Sb(a) ? a.rs(b, c, ha(e) ? !!e.capture : !!e, f) : ec(a, b, c, !0, e, f) }

function jc(a, b, c, e, f) { if (t(b))
        for (var h = 0; h < b.length; h++) jc(a, b[h], c, e, f);
    else e = ha(e) ? !!e.capture : !!e, c = dc(c), Sb(a) ? a.pd(b, c, e, f) : a && (a = fc(a)) && (b = a.xj(b, c, e, f)) && kc(b) }

function kc(a) { if (!r(a) && a && !a.Ci) { var b = a.src; if (Sb(b)) Yb(b.ef, a);
        else { var c = a.type,
                e = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(hc(c), e) : b.addListener && b.removeListener && b.removeListener(e);
            ac--;
            (c = fc(b)) ? (Yb(c, a), 0 == c.Bk && (c.src = null, b[Zb] = null)) : Vb(a) } } }

function hc(a) { return a in $b ? $b[a] : $b[a] = "on" + a }

function lc(a, b, c, e) { var f = !0; if (a = fc(a))
        if (b = a.Dc[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) { var h = b[a];
                h && h.capture == c && !h.Ci && (h = mc(h, e), f = f && !1 !== h) }
    return f }

function mc(a, b) { var c = a.listener,
        e = a.Ql || a.src;
    a.Wk && kc(a); return c.call(e, b) }

function ic(a, b) {
    if (a.Ci) return !0;
    if (!yb) {
        if (!b) a: { b = ["window", "event"]; for (var c = g, e = 0; e < b.length; e++)
                if (c = c[b[e]], null == c) { b = null; break a } b = c } e = b;
        b = new Nb(e, this);
        c = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: { var f = !1; if (0 == e.keyCode) try { e.keyCode = -1; break a } catch (k) { f = !0 }
                if (f || void 0 == e.returnValue) e.returnValue = !0 } e = [];
            for (f = b.currentTarget; f; f = f.parentNode) e.push(f);a = a.type;
            for (f = e.length - 1; !b.kh && 0 <= f; f--) { b.currentTarget = e[f]; var h = lc(e[f], a, !0, b);
                c = c && h }
            for (f = 0; !b.kh && f < e.length; f++) b.currentTarget =
                e[f],
            h = lc(e[f], a, !1, b),
            c = c && h
        }
        return c
    }
    return mc(a, new Nb(b, this))
}

function fc(a) { a = a[Zb]; return a instanceof Wb ? a : null }
var nc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function dc(a) { if (u(a)) return a;
    a[nc] || (a[nc] = function(b) { return a.handleEvent(b) }); return a[nc] };
// Copyright 2016 Google Inc.  Apache License 2.0
x.Touch = {};
x.Touch.zk = null;
x.Touch.le = {};
g.PointerEvent ? x.Touch.le = { mousedown: ["pointerdown"], mouseenter: ["pointerenter"], mouseleave: ["pointerleave"], mousemove: ["pointermove"], mouseout: ["pointerout"], mouseover: ["pointerover"], mouseup: ["pointerup", "pointercancel"], touchend: ["pointerup"], touchcancel: ["pointercancel"] } : Ab && (x.Touch.le = { mousedown: ["touchstart"], mousemove: ["touchmove"], mouseup: ["touchend", "touchcancel"] });
x.em = 0;
x.bx = function(a, b) { x.gg();
    a.changedTouches && 1 != a.changedTouches.length || (x.em = setTimeout(function() { a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        b && oc(b, a) }, x.vu)) };
x.gg = function() { x.em && (clearTimeout(x.em), x.em = 0) };
x.Touch.$e = function() { x.Touch.zk = null };
x.Touch.Ep = function(a) { return !x.Touch.Tw(a) || x.Touch.uv(a) };
x.Touch.Ml = function(a) { return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 != a.changedTouches[0].identifier && null != a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse" };
x.Touch.uv = function(a) { var b = x.Touch.Ml(a); return void 0 != x.Touch.zk && null != x.Touch.zk ? x.Touch.zk == b : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (x.Touch.zk = b, !0) : !1 };
x.Touch.Rx = function(a) { if (Ea(a.type, "touch")) { var b = a.changedTouches[0];
        a.clientX = b.clientX;
        a.clientY = b.clientY } };
x.Touch.Tw = function(a) { return Ea(a.type, "touch") || Ea(a.type, "mouse") || Ea(a.type, "pointer") };
x.Touch.am = function(a) { return Ea(a.type, "touch") || Ea(a.type, "pointer") };
x.Touch.Ux = function(a) { var b = []; if (a.changedTouches)
        for (var c = 0; c < a.changedTouches.length; c++) b[c] = { type: a.type, changedTouches: [a.changedTouches[c]], target: a.target, stopPropagation: function() { a.stopPropagation() }, preventDefault: function() { a.preventDefault() } };
    else b.push(a); return b };

function pc(a, b, c) { return Math.min(Math.max(a, b), c) }

function qc(a) { a %= 360; return 0 > 360 * a ? a + 360 : a }

function rc(a) { return a * Math.PI / 180 };

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
d.translate = function(a, b) { a instanceof D ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), r(b) && (this.y += b)); return this };
d.scale = function(a, b) { b = r(b) ? b : a;
    this.x *= a;
    this.y *= b; return this };
x.j = {};
x.j.Nl = "";
x.j.nc = !0;
x.j.Jn = 0;
x.j.Lk = "create";
x.j.Ot = x.j.Lk;
x.j.Sm = "delete";
x.j.Pt = x.j.Sm;
x.j.Gh = "change";
x.j.Py = x.j.Gh;
x.j.Si = "move";
x.j.Qy = x.j.Si;
x.j.nq = "var_create";
x.j.oq = "var_delete";
x.j.pq = "var_rename";
x.j.gn = "ui";
x.j.Yp = "comment_create";
x.j.Zp = "comment_delete";
x.j.Xp = "comment_change";
x.j.$p = "comment_move";
x.j.Oi = [];
x.j.U = function(a) { x.j.isEnabled() && (x.j.Oi.length || setTimeout(x.j.hw, 0), x.j.Oi.push(a)) };
x.j.hw = function() { for (var a = x.j.filter(x.j.Oi, !0), b = x.j.Oi.length = 0, c; c = a[b]; b++) { var e = wc[c.Ic] || null; if (e) { var f = c;
            f.nc && (e.zh.push(f), e.fk.length = 0, e.zh.length > e.yu && e.zh.unshift()); for (var h = 0; c = e.Ec[h]; h++) c(f) } } };
x.j.filter = function(a, b) {
    a = Aa(a);
    b || a.reverse();
    for (var c = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.mi()) { var k = [h.type, h.fc, h.Ic].join(" "),
                l = e[k];
            l ? h.type == x.j.Si ? (l.gh = h.gh, l.fh = h.fh, l.jg = h.jg) : h.type == x.j.Gh && h.element == l.element && h.name == l.name ? l.newValue = h.newValue : h.type != x.j.gn || "click" != h.element || "commentOpen" != l.element && "mutatorOpen" != l.element && "warningOpen" != l.element ? (e[k] = h, c.push(h)) : l.newValue = h.newValue : (e[k] = h, c.push(h)) } a = c.filter(function(a) { return !a.mi() });
    b || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == x.j.Gh && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
x.j.wv = function() { for (var a = 0, b; b = x.j.Oi[a]; a++) b.nc = !1 };
x.j.disable = function() { x.j.Jn++ };
x.j.enable = function() { x.j.Jn-- };
x.j.isEnabled = function() { return 0 == x.j.Jn };
x.j.xc = function() { return x.j.Nl };
x.j.R = function(a) { x.j.Nl = "boolean" == typeof a ? a ? x.i.ve() : "" : a };
x.j.Mr = function(a) { var b = [];
    a = xc(a, !1); for (var c = 0, e; e = a[c]; c++) b[c] = e.id; return b };
x.j.ha = function(a, b) {
    switch (a.type) {
        case x.j.Lk:
            var c = new yc(null); break;
        case x.j.Sm:
            c = new zc(null); break;
        case x.j.Gh:
            c = new Ac(null, "", "", "", ""); break;
        case x.j.Si:
            c = new Bc(null); break;
        case x.j.nq:
            c = new Cc(null); break;
        case x.j.oq:
            c = new Dc(null); break;
        case x.j.pq:
            c = new Ec(null, ""); break;
        case x.j.gn:
            c = new Fc(null); break;
        case x.j.Yp:
            c = new Gc(null); break;
        case x.j.Xp:
            c = new Hc(null); break;
        case x.j.$p:
            c = new Ic(null); break;
        case x.j.Zp:
            c = new Jc(null); break;
        default:
            throw "Unknown event type."; } c.ha(a);
    c.Ic = b.id;
    return c
};
x.j.cC = function(a) { if (a.type == x.j.Si || a.type == x.j.Lk) { var b = wc[a.Ic] || null; if (a = Kc(b, a.fc))
            if (a.getParent() && !a.getParent().disabled) { b = xc(a, !1);
                a = 0; for (var c; c = b[a]; a++) c.Jd(!1) } else if ((a.M || a.Z) && !b.sb()) { do a.Jd(!0), a = Lc(a); while (a) } } };
// Copyright 2018 Google Inc.  Apache License 2.0
function Mc() { this.Ic = void 0;
    this.group = x.j.Nl;
    this.nc = x.j.nc } Mc.prototype.Ca = function() { var a = { type: this.type };
    this.group && (a.group = this.group); return a };
Mc.prototype.ha = function(a) { this.group = a.group };
Mc.prototype.mi = function() { return !1 };
Mc.prototype.run = function() {};

function Nc(a) { a = wc[a.Ic] || null; if (!a) throw Error("Workspace is null. Event must have been generated from real Blockly events."); return a };

function Oc(a) { Oc.s.constructor.call(this);
    this.Cg = a.aa();
    this.Ic = a.o.id } w(Oc, Mc);
Oc.prototype.Ca = function() { var a = Oc.s.Ca.call(this);
    a.varId = this.Cg; return a };
Oc.prototype.ha = function(a) { Oc.s.Ca.call(this);
    this.Cg = a.varId };

function Cc(a) { a && (Cc.s.constructor.call(this, a), this.Dh = a.type, this.Ch = a.name) } w(Cc, Oc);
Cc.prototype.type = x.j.nq;
Cc.prototype.Ca = function() { var a = Cc.s.Ca.call(this);
    a.varType = this.Dh;
    a.varName = this.Ch; return a };
Cc.prototype.ha = function(a) { Cc.s.ha.call(this, a);
    this.Dh = a.varType;
    this.Ch = a.varName };
Cc.prototype.run = function(a) { var b = Nc(this);
    a ? b.ad(this.Ch, this.Dh, this.Cg) : b.Of(this.Cg) };

function Dc(a) { a && (Dc.s.constructor.call(this, a), this.Dh = a.type, this.Ch = a.name) } w(Dc, Oc);
Dc.prototype.type = x.j.oq;
Dc.prototype.Ca = function() { var a = Dc.s.Ca.call(this);
    a.varType = this.Dh;
    a.varName = this.Ch; return a };
Dc.prototype.ha = function(a) { Dc.s.ha.call(this, a);
    this.Dh = a.varType;
    this.Ch = a.varName };
Dc.prototype.run = function(a) { var b = Nc(this);
    a ? b.Of(this.Cg) : b.ad(this.Ch, this.Dh, this.Cg) };

function Ec(a, b) { a && (Ec.s.constructor.call(this, a), this.Mo = a.name, this.Io = b) } w(Ec, Oc);
Ec.prototype.type = x.j.pq;
Ec.prototype.Ca = function() { var a = Ec.s.Ca.call(this);
    a.oldName = this.Mo;
    a.newName = this.Io; return a };
Ec.prototype.ha = function(a) { Ec.s.ha.call(this, a);
    this.Mo = a.oldName;
    this.Io = a.newName };
Ec.prototype.run = function(a) { var b = Nc(this);
    a ? b.nh(this.Cg, this.Io) : b.nh(this.Cg, this.Mo) };
// Copyright 2017 Google Inc.  Apache License 2.0
function Pc(a) { this.ta = {};
    this.o = a } d = Pc.prototype;
d.clear = function() { this.ta = Object(null) };
d.hp = function(a, b) { var c = this.Qc(b, a.type),
        e = Qc(this.o);
    x.j.R(!0); try { if (c && c.aa() != a.aa()) { var f = a.type;
            b != c.name && Rc(c, b, e); for (b = 0; b < e.length; b++) e[b].ik(a.aa(), c.aa());
            x.j.U(new Dc(a));
            this.ta[f].splice(this.Bj(f).indexOf(a), 1) } else Rc(a, b, e) } finally { x.j.R(!1) } };
d.nh = function(a, b) { var c = this.Vd(a); if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.hp(c, b) };

function Rc(a, b, c) { x.j.U(new Ec(a, b));
    a.name = b; for (b = 0; b < c.length; b++) c[b].Nm(a) } d.ad = function(a, b, c) { var e = this.Qc(a, b); if (e) { if (c && e.aa() != c) throw Error('Variable "' + a + '" is already in use and its id is "' + e.aa() + '" which conflicts with the passed in id, "' + c + '".'); return e } if (c && this.Vd(c)) throw Error('Variable id, "' + c + '", is already in use.');
    c = c || x.i.ve();
    b = b || "";
    e = new Sc(this.o, a, b, c);
    this.ta[b] ? this.ta[b].push(e) : this.ta[b] = [e]; return e };
d.Of = function(a) { var b = this.Vd(a); if (b) { var c = b.name,
            e = this.co(a);
        a = 0; for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) { a = F(f, "NAME");
                c = x.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace("%2", a);
                x.alert(c); return } var h = this;
        1 < e.length ? (c = x.g.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", c), x.confirm(c, function(a) { a && h.il(b, e) })) : h.il(b, e) } else console.warn("Can't delete non-existent variable: " + a) };
d.il = function(a, b) { var c = x.j.xc();
    c || x.j.R(!0); try { for (var e = 0; e < b.length; e++) b[e].A(!0, !1); var f = this.ta[a.type];
        b = 0; for (var h; h = f[b]; b++)
            if (h.aa() == a.aa()) { f.splice(b, 1);
                x.j.U(new Dc(a)); break } } finally { c || x.j.R(!1) } };
d.Qc = function(a, b) { if (b = this.ta[b || ""])
        for (var c = 0, e; e = b[c]; c++)
            if (Uc(e.name, a)) return e; return null };
d.Vd = function(a) { for (var b = Object.keys(this.ta), c = 0; c < b.length; c++)
        for (var e = b[c], f = 0, h; h = this.ta[e][f]; f++)
            if (h.aa() == a) return h; return null };
d.Bj = function(a) { return (a = this.ta[a || ""]) ? a.slice() : [] };
d.bo = function() { for (var a = Object.keys(this.ta), b = !1, c = 0; c < a.length; c++) "" == a[c] && (b = !0);
    b || a.push(""); return a };
d.ff = function() { for (var a = [], b = Object.keys(this.ta), c = 0; c < b.length; c++) a = a.concat(this.ta[b[c]]); return a };
d.co = function(a) { for (var b = [], c = Qc(this.o), e = 0; e < c.length; e++) { var f = c[e].Rf(); if (f)
            for (var h = 0; h < f.length; h++) f[h].aa() == a && b.push(c[e]) } return b };

function Vc(a) { this.Pd = a.id;
    this.Ic = a.o.id;
    this.group = x.j.Nl;
    this.nc = x.j.nc } w(Vc, Mc);
Vc.prototype.Ca = function() { var a = { type: this.type };
    this.group && (a.group = this.group);
    this.Pd && (a.commentId = this.Pd); return a };
Vc.prototype.ha = function(a) { this.Pd = a.commentId;
    this.group = a.group };

function Hc(a, b, c) { a && (Hc.s.constructor.call(this, a), this.Es = b, this.km = c) } w(Hc, Vc);
d = Hc.prototype;
d.type = x.j.Xp;
d.Ca = function() { var a = Hc.s.Ca.call(this);
    a.newContents = this.km; return a };
d.ha = function(a) { Hc.s.ha.call(this, a);
    this.km = a.newValue };
d.mi = function() { return this.Es == this.km };
d.run = function(a) { var b = Wc(Nc(this), this.Pd);
    b ? b.Id(a ? this.km : this.Es) : console.warn("Can't change non-existent comment: " + this.Pd) };

function Gc(a) { a && (Gc.s.constructor.call(this, a), this.xml = a.yk()) } w(Gc, Vc);
Gc.prototype.type = x.j.Yp;
Gc.prototype.Ca = function() { var a = Gc.s.Ca.call(this);
    a.xml = x.F.Cd(this.xml); return a };
Gc.prototype.ha = function(a) { Gc.s.ha.call(this, a);
    this.xml = x.F.md("<xml>" + a.xml + "</xml>").firstChild };
Gc.prototype.run = function(a) { var b = Nc(this);
    a ? (a = G("xml"), a.appendChild(this.xml), x.F.qe(a, b)) : (b = Wc(b, this.Pd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Pd) };

function Jc(a) { a && (Jc.s.constructor.call(this, a), this.xml = a.yk()) } w(Jc, Vc);
Jc.prototype.type = x.j.Zp;
Jc.prototype.Ca = function() { return Jc.s.Ca.call(this) };
Jc.prototype.ha = function(a) { Jc.s.ha.call(this, a) };
Jc.prototype.run = function(a) { var b = Nc(this);
    a ? (b = Wc(b, this.Pd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Pd) : (a = G("xml"), a.appendChild(this.xml), x.F.qe(a, b)) };

function Ic(a) { a && (Ic.s.constructor.call(this, a), this.wn = a, this.Lo = a.sd.clone(), this.eh = null) } w(Ic, Vc);
d = Ic.prototype;
d.rf = function() { if (!this.wn) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.eh = this.wn.sd.clone();
    this.wn = null };
d.type = x.j.$p;
d.Ca = function() { var a = Ic.s.Ca.call(this);
    this.eh && (a.newCoordinate = Math.round(this.eh.x) + "," + Math.round(this.eh.y)); return a };
d.ha = function(a) { Ic.s.ha.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.eh = new D(parseFloat(a[0]), parseFloat(a[1]))) };
d.mi = function() { return sc(this.Lo, this.eh) };
d.run = function(a) { var b = Wc(Nc(this), this.Pd); if (b) { a = a ? this.eh : this.Lo; var c = b.sd.clone();
        b.moveBy(a.x - c.x, a.y - c.y) } else console.warn("Can't move non-existent comment: " + this.Pd) };

function Xc(a, b, c, e, f) { this.id = f && !Wc(a, f) ? f : x.i.ve();
    a.Ii.push(this);
    a.bl[this.id] && console.warn('Overriding an existing comment on this workspace, with id "' + this.id + '"');
    a.bl[this.id] = this;
    this.sd = new D(0, 0);
    this.Fa = c;
    this.ia = e;
    this.o = a;
    this.u = a.u;
    this.ak = this.mj = !0;
    this.$c = b;
    this.hs = !0;
    Yc(this) } d = Xc.prototype;
d.A = function() { if (this.o) { x.j.isEnabled() && x.j.U(new Jc(this)); var a = this.o; if (!ya(a.Ii, this)) throw "Comment not present in workspace's list of top-most comments.";
        delete a.bl[this.id];
        this.o = null } };
d.di = function() { return this.Fa };
d.dd = function() { return this.ia };
d.moveBy = function(a, b) { var c = new Ic(this);
    this.sd.translate(a, b);
    c.rf();
    x.j.U(c) };
d.kc = function() { return this.mj && !(this.o && this.o.options.readOnly) };
d.vp = function(a) { this.mj = a };
d.Ee = function() { return this.ak && !(this.o && this.o.options.readOnly) };
d.ph = function(a) { this.ak = a };
d.Pc = function() { return this.$c };
d.Id = function(a) { this.$c != a && (x.j.U(new Hc(this, this.$c, a)), this.$c = a) };
d.yk = function(a) { a = Zc(this, a);
    a.setAttribute("x", Math.round(this.sd.x));
    a.setAttribute("y", Math.round(this.sd.y));
    a.setAttribute("h", this.Fa);
    a.setAttribute("w", this.ia); return a };

function Zc(a, b) { var c = G("comment");
    b || c.setAttribute("id", a.id);
    c.textContent = a.Pc(); return c }

function Yc(a) { if (x.j.isEnabled()) { var b = x.j.xc();
        b || x.j.R(!0); try { x.j.U(new Gc(a)) } finally { b || x.j.R(!1) } } }

function $c(a) { var b = a.getAttribute("h"),
        c = a.getAttribute("w"); return { id: a.getAttribute("id"), Rr: b ? parseInt(b, 10) : 100, It: c ? parseInt(c, 10) : 100, x: parseInt(a.getAttribute("x"), 10), y: parseInt(a.getAttribute("y"), 10), content: a.textContent } };
// Copyright 2012 Google Inc.  Apache License 2.0
function ad(a) { this.id = x.i.ve();
    wc[this.id] = this;
    this.options = a || {};
    this.u = !!this.options.u;
    this.Ce = !!this.options.Ce;
    this.Ea = this.options.Ea;
    this.Hi = [];
    this.Ii = [];
    this.bl = Object.create(null);
    this.Ec = [];
    this.zh = [];
    this.fk = [];
    this.on = Object.create(null);
    this.ta = new Pc(this);
    this.zi = null } d = ad.prototype;
d.P = !1;
d.to = !1;
d.yu = 1024;
d.A = function() { this.Ec.length = 0;
    this.clear();
    delete wc[this.id] };

function bd(a, b) { if (!ya(a.Hi, b)) throw "Block not present in workspace's list of top-most blocks."; }

function cd(a, b) { var c = [].concat(a.Hi); if (b && 1 < c.length) { var e = Math.sin(rc(3));
        a.u && (e *= -1);
        c.sort(function(a, b) { a = a.la();
            b = b.la(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function dd(a, b) { var c = [].concat(a.Ii); if (b && 1 < c.length) { var e = Math.sin(rc(3));
        a.u && (e *= -1);
        c.sort(function(a, b) { a = a.la();
            b = b.la(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function Qc(a) { var b = cd(a, !1); for (a = 0; a < b.length; a++) b.push.apply(b, b[a].Qf(!1)); return b }
d.clear = function() { this.to = !0; try { var a = x.j.xc(); for (a || x.j.R(!0); this.Hi.length;) this.Hi[0].A(); for (; this.Ii.length;) this.Ii[this.Ii.length - 1].A();
        a || x.j.R(!1);
        this.ta.clear();
        this.zi && this.zi.clear() } finally { this.to = !1 } };
d.nh = function(a, b) { this.ta.nh(a, b) };
d.ad = function(a, b, c) { return this.ta.ad(a, b, c) };
d.co = function(a) { return this.ta.co(a) };
d.Of = function(a) { this.ta.Of(a) };
d.il = function(a, b) { this.ta.il(a, b) };
d.Qc = function(a, b) { return this.ta.Qc(a, b) };
d.Vd = function(a) { return this.ta.Vd(a) };
d.Bj = function(a) { return this.ta.Bj(a) };
d.bo = function() { return this.ta.bo() };
d.ff = function() { return this.ta.ff() };
d.dd = function() { return 0 };
d.mf = function(a, b) { return new ed(this, a, b) };

function fd(a) { return isNaN(a.options.us) ? Infinity : a.options.us - Qc(a).length } d.Rp = function(a) { var b = a ? this.fk : this.zh,
        c = a ? this.zh : this.fk,
        e = b.pop(); if (e) { for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group;) f.push(b.pop()); for (b = 0; e = f[b]; b++) c.push(e);
        f = x.j.filter(f, a);
        x.j.nc = !1; try { for (b = 0; e = f[b]; b++) e.run(a) } finally { x.j.nc = !0 } } };
d.Jq = function() { this.zh.length = 0;
    this.fk.length = 0;
    x.j.wv() };
d.xd = function(a) { this.Ec.push(a); return a };
d.ng = function(a) { ya(this.Ec, a) };

function Kc(a, b) { return a.on[b] || null }

function Wc(a, b) { return a.bl[b] || null }
var wc = Object.create(null);
ad.prototype.clear = ad.prototype.clear;
ad.prototype.clearUndo = ad.prototype.Jq;
ad.prototype.addChangeListener = ad.prototype.xd;
ad.prototype.removeChangeListener = ad.prototype.ng;
var gd = !A || 9 <= Number(vb),
    hd = !B && !A || A && 9 <= Number(vb) || B && ub("1.9.1"),
    id = A && !ub("9");
var jd = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };

function kd() { this.Lp = "";
    this.Mu = ld } kd.prototype.Xf = !0;
kd.prototype.Be = function() { return this.Lp };
kd.prototype.toString = function() { return "Const{" + this.Lp + "}" };

function md(a) { return a instanceof kd && a.constructor === kd && a.Mu === ld ? a.Lp : "type_error:Const" }
var ld = {};

function nd() { this.Ys = "";
    this.Ou = od } nd.prototype.Xf = !0;
nd.prototype.Be = function() { return this.Ys };
nd.prototype.po = !0;
nd.prototype.ci = function() { return 1 };
var od = {};

function pd() { this.jh = "";
    this.Iu = qd } pd.prototype.Xf = !0;
pd.prototype.Be = function() { return this.jh };
pd.prototype.po = !0;
pd.prototype.ci = function() { return 1 };

function rd(a) { if (a instanceof pd && a.constructor === pd && a.Iu === qd) return a.jh;
    ea(a); return "type_error:SafeUrl" }
var sd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function td(a) { if (a instanceof pd) return a;
    a = a.Xf ? a.Be() : String(a);
    sd.test(a) || (a = "about:invalid#zClosurez"); return ud(a) }
var qd = {};

function ud(a) { var b = new pd;
    b.jh = a; return b } ud("about:blank");

function vd() { this.cp = "";
    this.Hu = wd } vd.prototype.Xf = !0;
var wd = {};
vd.prototype.Be = function() { return this.cp };
vd.prototype.Ul = function(a) { this.cp = a; return this };
var xd = (new vd).Ul("");

function yd(a) { var b = "",
        c; for (c in a) { if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c); var e = a[c];
        null != e && (e = t(e) ? ua(e, Ad).join(" ") : Ad(e), b += c + ":" + e + ";") } return b ? (new vd).Ul(b) : xd }

function Ad(a) { if (a instanceof pd) a = 'url("' + rd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    else if (a instanceof kd) a = md(a);
    else { a = String(a); var b = a.replace(Bd, "$1").replace(Cd, "url"); if (b = Dd.test(b)) { for (var c = b = !0, e = 0; e < a.length; e++) { var f = a.charAt(e); "'" == f && c ? b = !b : '"' == f && b && (c = !c) } b = b && c } a = b ? Ed(a) : "zClosurez" } return a }
var Dd = /^[-,."'%_!# a-zA-Z0-9]+$/,
    Cd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    Bd = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

function Ed(a) { return a.replace(Cd, function(a, c, e, f) { var b = "";
        e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) { b = c; return e });
        a = td(e).Be(); return c + b + a + b + f }) };

function Fd() { this.jh = "";
    this.Gu = Gd;
    this.yr = null } Fd.prototype.po = !0;
Fd.prototype.ci = function() { return this.yr };
Fd.prototype.Xf = !0;
Fd.prototype.Be = function() { return this.jh };

function Hd(a) { if (a instanceof Fd && a.constructor === Fd && a.Gu === Gd) return a.jh;
    ea(a); return "type_error:SafeHtml" }

function Id(a) { if (a instanceof Fd) return a; var b = null;
    a.po && (b = a.ci()); return Jd(Ja(a.Xf ? a.Be() : String(a)), b) }
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
                    k instanceof vd && k.constructor === vd && k.Hu === wd ? k = k.cp : (ea(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(m)) throw Error('Attribute "' + m + '" requires goog.string.Const value, "' + k + '" given.');
                    if (m.toLowerCase() in Ld)
                        if (k instanceof nd) k instanceof nd && k.constructor === nd && k.Ou === od ? k = k.Ys : (ea(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof pd) k = rd(k);
                    else if (q(k)) k = td(k).Be();
                    else throw Error('Attribute "' + m + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                        k + '" given.');
                }
                k.Xf && (k = k.Be());
                m = m + '="' + Ja(String(k)) + '"';
                h += " " + m
            }
        }
    var n = f + h;
    null != c ? t(c) || (c = [c]) : c = [];
    !0 === jd[a.toLowerCase()] ? n += ">" : (c = Od(c), n += ">" + Hd(c) + "</" + a + ">", e = c.ci());
    (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return Jd(n, e)
}

function Od(a) {
    function b(a) { t(a) ? sa(a, b) : (a = Id(a), e += Hd(a), a = a.ci(), 0 == c ? c = a : 0 != a && c != a && (c = null)) } var c = 0,
        e = "";
    sa(arguments, b); return Jd(e, c) }
var Gd = {};

function Jd(a, b) { return (new Fd).Ul(a, b) } Fd.prototype.Ul = function(a, b) { this.jh = a;
    this.yr = b; return this };
Jd("<!DOCTYPE html>", 0);
var Pd = Jd("", 0),
    Qd = Jd("<br>", 0);

function Rd(a, b) { a.innerHTML = Hd(b) };

function Sd(a, b) { this.width = a;
    this.height = b } d = Sd.prototype;
d.clone = function() { return new Sd(this.width, this.height) };
d.cv = function() { return this.width * this.height };
d.aspectRatio = function() { return this.width / this.height };
d.ks = function() { return !this.cv() };
d.ceil = function() { this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height); return this };
d.floor = function() { this.width = Math.floor(this.width);
    this.height = Math.floor(this.height); return this };
d.round = function() { this.width = Math.round(this.width);
    this.height = Math.round(this.height); return this };
d.scale = function(a, b) { b = r(b) ? b : a;
    this.width *= a;
    this.height *= b; return this };

function Td(a) { return a ? new Ud(Vd(a)) : qa || (qa = new Ud) }

function Wd(a, b) { var c = document;
    b = b || c; if (b.querySelectorAll && b.querySelector) return b.querySelectorAll("TBODY" + (a ? "." + a : "")); if (a && b.getElementsByClassName) { b = b.getElementsByClassName(a);
        c = {}; for (var e = 0, f = 0, h; h = b[f]; f++) "TBODY" == h.nodeName && (c[e++] = h);
        c.length = e; return c } b = b.getElementsByTagName("TBODY"); if (a) { c = {}; for (f = e = 0; h = b[f]; f++) { var k = h.className; "function" == typeof k.split && xa(k.split(/\s+/), a) && (c[e++] = h) } c.length = e; return c } return b }

function Xd(a, b) { bb(b, function(b, e) { b && b.Xf && (b = b.Be()); "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : Yd.hasOwnProperty(e) ? a.setAttribute(Yd[e], b) : Ea(e, "aria-") || Ea(e, "data-") ? a.setAttribute(e, b) : a[e] = b }) }
var Yd = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

function Zd() { var a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body; return new Sd(a.clientWidth, a.clientHeight) }

function $d(a) { var b = ae(a);
    a = a.parentWindow || a.defaultView; return A && ub("10") && a.pageYOffset != b.scrollTop ? new D(b.scrollLeft, b.scrollTop) : new D(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop) }

function ae(a) { return a.scrollingElement ? a.scrollingElement : C || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement }

function G(a, b, c) { return be(document, arguments) }

function be(a, b) { var c = String(b[0]),
        e = b[1]; if (!gd && e && (e.name || e.type)) { c = ["<", c];
        e.name && c.push(' name="', Ja(e.name), '"'); if (e.type) { c.push(' type="', Ja(e.type), '"'); var f = {};
            db(f, e);
            delete f.type;
            e = f } c.push(">");
        c = c.join("") } c = a.createElement(c);
    e && (q(e) ? c.className = e : t(e) ? c.className = e.join(" ") : Xd(c, e));
    2 < b.length && ce(a, c, b, 2); return c }

function ce(a, b, c, e) {
    function f(c) { c && b.appendChild(q(c) ? a.createTextNode(c) : c) } for (; e < c.length; e++) { var h = c[e];!fa(h) || ha(h) && 0 < h.nodeType ? f(h) : sa(de(h) ? Aa(h) : h, f) } }

function ee(a) { for (var b; b = a.firstChild;) a.removeChild(b) }

function fe(a, b) { b.parentNode && b.parentNode.insertBefore(a, b.nextSibling) }

function H(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null }

function ge(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }

function Vd(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

function he(a, b) { if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b) } else ee(a), a.appendChild(Vd(a).createTextNode(String(b))) }
var ie = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    je = { IMG: " ", BR: "\n" };

function ke(a) { return A && !ub("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex") }

function le(a) { a = a.tabIndex; return r(a) && 0 <= a && 32768 > a }

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

function de(a) { if (a && "number" == typeof a.length) { if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item; if (u(a)) return "function" == typeof a.item } return !1 }

function Ud(a) { this.Sd = a || g.document || document } d = Ud.prototype;
d.vc = Td;
d.G = function(a) { return q(a) ? this.Sd.getElementById(a) : a };
d.getElementsByTagName = function(a, b) { return (b || this.Sd).getElementsByTagName(String(a)) };
d.setProperties = Xd;
d.W = function(a, b, c) { return be(this.Sd, arguments) };
d.createElement = function(a) { return this.Sd.createElement(String(a)) };
d.createTextNode = function(a) { return this.Sd.createTextNode(String(a)) };
d.Vq = function(a, b) { for (var c = this.Sd, e = c.createElement("TABLE"), f = e.appendChild(c.createElement("TBODY")), h = 0; h < a; h++) { for (var k = c.createElement("TR"), l = 0; l < b; l++) k.appendChild(c.createElement("TD"));
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
d.dt = ee;
d.removeNode = H;
d.Qf = function(a) { return hd && void 0 != a.children ? a.children : ta(a.childNodes, function(a) { return 1 == a.nodeType }) };
d.contains = ge;
d.lf = function(a) { var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!ke(a) || le(a)) : ke(a) && le(a)) && A ? (a = !u(a.getBoundingClientRect) || A && null == a.parentElement ? { height: a.offsetHeight, width: a.offsetWidth } : a.getBoundingClientRect(), a = null != a && 0 < a.height && 0 < a.width) : a = b; return a };

function pe(a, b, c, e, f, h) { this.m = a;
    this.$c = b;
    this.nt = c;
    c = qe;
    this.m.u && (c = -c);
    this.dv = rc(c);
    a.ie.appendChild(this.hj(b, !(!f || !h)));
    this.yd = e;
    this.pg && re(this);
    f && h || (b = this.$c.getBBox(), f = b.width + 2 * se, h = b.height + 2 * se);
    this.rg(f, h);
    re(this);
    te(this);
    this.pg = !0;
    a.options.readOnly || (x.O(this.aj, "mousedown", this, this.kv), this.Nb && x.O(this.Nb, "mousedown", this, this.jp)) }
var se = 6,
    qe = 20,
    ue = null,
    ve = null;
d = pe.prototype;
d.ip = null;

function we() { ue && (x.Pa(ue), ue = null);
    ve && (x.Pa(ve), ve = null) }

function xe() { x.Touch.$e();
    we() } d.pg = !1;
d.yd = null;
d.Bi = 0;
d.gk = 0;
d.ia = 0;
d.Fa = 0;
d.Uk = !0;
d.hj = function(a, b) {
    this.Zc = x.i.B("g", {}, null);
    var c = { filter: "url(#" + this.m.options.Fr + ")" }; - 1 != Ya.indexOf("JavaFX") && (c = {});
    c = x.i.B("g", c, this.Zc);
    this.qn = x.i.B("path", {}, c);
    this.aj = x.i.B("rect", { "class": "blocklyDraggable", x: 0, y: 0, rx: se, ry: se }, c);
    b ? (this.Nb = x.i.B("g", { "class": this.m.u ? "blocklyResizeSW" : "blocklyResizeSE" }, this.Zc), b = 2 * se, x.i.B("polygon", { points: "0,x x,x x,0".replace(/x/g, b.toString()) }, this.Nb), x.i.B("line", { "class": "blocklyResizeLine", x1: b / 3, y1: b - 1, x2: b - 1, y2: b / 3 }, this.Nb), x.i.B("line", { "class": "blocklyResizeLine", x1: 2 * b / 3, y1: b - 1, x2: b - 1, y2: 2 * b / 3 }, this.Nb)) : this.Nb = null;
    this.Zc.appendChild(a);
    return this.Zc
};
d.ga = function() { return this.Zc };

function ye(a, b) { a.Zc.dataset && (a.Zc.dataset.fc = b) } d.kv = function(a) { var b = this.m.ye(a);
    b && (b.Hc || (b.Hc = this), b.Sc = a) };
d.Ei = function() {};
d.kc = function() { return !1 };
d.jp = function(a) { ze(this);
    we();
    x.i.dg(a) || (this.m.Jm(a, new D(this.m.u ? -this.ia : this.ia, this.Fa)), ue = x.O(document, "mouseup", this, xe), ve = x.O(document, "mousemove", this, this.kp), x.Rb());
    a.stopPropagation() };
d.kp = function(a) { this.Uk = !1;
    a = Ae(this.m, a);
    this.rg(this.m.u ? -a.x : a.x, a.y);
    this.m.u && re(this) };

function ze(a) { var b = a.Zc.parentNode; return b.lastChild !== a.Zc ? (b.appendChild(a.Zc), !0) : !1 }

function re(a) { var b = a.yd.x;
    b = a.m.u ? b - (a.Bi + a.ia) : b + a.Bi;
    a.moveTo(b, a.gk + a.yd.y) } d.moveTo = function(a, b) { this.Zc.setAttribute("transform", "translate(" + a + "," + b + ")") };
d.Ug = function() { return { width: this.ia, height: this.Fa } };
d.rg = function(a, b) {
    var c = 2 * se;
    a = Math.max(a, c + 45);
    b = Math.max(b, c + 20);
    this.ia = a;
    this.Fa = b;
    this.aj.setAttribute("width", a);
    this.aj.setAttribute("height", b);
    this.Nb && (this.m.u ? this.Nb.setAttribute("transform", "translate(" + 2 * se + "," + (b - c) + ") scale(-1 1)") : this.Nb.setAttribute("transform", "translate(" + (a - c) + "," + (b - c) + ")"));
    if (this.pg) {
        if (this.Uk) {
            a = -this.ia / 4;
            b = -this.Fa - 25;
            c = this.m.ub();
            c.za /= this.m.scale;
            c.Cb /= this.m.scale;
            var e = this.yd.x;
            this.m.u ? e - c.Cb - a - this.ia < I ? a = e - c.Cb - this.ia - I : e - c.Cb - a > c.za && (a =
                e - c.Cb - c.za) : e + a < c.Cb ? a = c.Cb - e : c.Cb + c.za < e + a + this.ia + 10 + I && (a = c.Cb + c.za - e - this.ia - I);
            this.yd.y + b < c.Re && (b = this.nt.getBBox().height);
            this.Bi = a;
            this.gk = b
        }
        re(this);
        te(this)
    }
    this.ip && this.ip()
};

function te(a) {
    var b = [],
        c = a.ia / 2,
        e = a.Fa / 2,
        f = -a.Bi,
        h = -a.gk;
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
            v = a.Ug();
        m = (v.width + v.height) / 5;
        m = Math.min(m, v.width, v.height) / 4;
        v = 1 - 8 / k;
        f = c + v * f;
        h = e + v * h;
        v = c + m * p;
        var y = e + m * n;
        c -= m * p;
        e -= m * n;
        n = l + a.dv;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / 4;
        k = Math.cos(n) * k / 4;
        b.push("M" + v + "," + y);
        b.push("C" + (v + k) + "," +
            (y + l) + " " + f + "," + h + " " + f + "," + h);
        b.push("C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e)
    }
    b.push("z");
    a.qn.setAttribute("d", b.join(" "))
}
d.Ha = function(a) { this.aj.setAttribute("fill", a);
    this.qn.setAttribute("fill", a) };
d.A = function() { we();
    H(this.Zc);
    this.nt = this.$c = this.m = this.Nb = this.aj = this.qn = this.Zc = null };
d.im = function(a, b) { a ? a.zf(b.x, b.y) : this.moveTo(b.x, b.y);
    this.Bi = this.m.u ? this.yd.x - b.x - this.ia : b.x - this.yd.x;
    this.gk = b.y - this.yd.y;
    te(this) };
d.la = function() { return new D(this.yd.x + this.Bi, this.yd.y + this.gk) };
d.jt = function(a) { this.Uk = a };

function Be(a) { Be.s.constructor.call(this);
    this.fc = a.id;
    this.Ic = a.o.id } w(Be, Mc);
Be.prototype.Ca = function() { var a = Be.s.Ca.call(this);
    a.blockId = this.fc; return a };
Be.prototype.ha = function(a) { Be.s.Ca.call(this);
    this.fc = a.blockId };

function Ac(a, b, c, e, f) { a && (Ac.s.constructor.call(this, a), this.element = b, this.name = c, this.oldValue = e, this.newValue = f) } w(Ac, Be);
x.j.Kc = Ac;
d = Ac.prototype;
d.type = x.j.Gh;
d.Ca = function() { var a = Ac.s.Ca.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue; return a };
d.ha = function(a) { Ac.s.ha.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue };
d.mi = function() { return this.oldValue == this.newValue };
d.run = function(a) {
    var b = Kc(Nc(this), this.fc);
    if (b) switch (b.fd && b.fd.pa(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (b = Ce(b, this.name)) ? (De(b, a), b.setValue(a)) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            b.tf(a || null);
            break;
        case "collapsed":
            b.sg(a);
            break;
        case "disabled":
            b.Jd(a);
            break;
        case "inline":
            b.bc(a);
            break;
        case "mutation":
            var c = "";
            b.Ka && (c = (c = b.Ka()) && x.F.Cd(c));
            if (b.ib) { a = a || "<mutation></mutation>"; var e = x.F.md("<xml>" + a + "</xml>");
                b.ib(e.firstChild) } x.j.U(new Ac(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.fc)
};

function yc(a) { a && (yc.s.constructor.call(this, a), this.xml = a.o.P ? x.F.pn(a) : x.F.Lf(a), this.Wf = x.j.Mr(a)) } w(yc, Be);
x.j.Kk = yc;
yc.prototype.type = x.j.Lk;
yc.prototype.Ca = function() { var a = yc.s.Ca.call(this);
    a.xml = x.F.Cd(this.xml);
    a.ids = this.Wf; return a };
yc.prototype.ha = function(a) { yc.s.ha.call(this, a);
    this.xml = x.F.md("<xml>" + a.xml + "</xml>").firstChild;
    this.Wf = a.ids };
yc.prototype.run = function(a) { var b = Nc(this); if (a) a = G("xml"), a.appendChild(this.xml), x.F.qe(a, b);
    else { a = 0; for (var c; c = this.Wf[a]; a++) { var e = Kc(b, c);
            e ? e.A(!1, !1) : c == this.fc && console.warn("Can't uncreate non-existent block: " + c) } } };

function zc(a) { if (a) { if (a.getParent()) throw "Connected blocks cannot be deleted.";
        zc.s.constructor.call(this, a);
        this.px = a.o.P ? x.F.pn(a) : x.F.Lf(a);
        this.Wf = x.j.Mr(a) } } w(zc, Be);
x.j.Rt = zc;
zc.prototype.type = x.j.Sm;
zc.prototype.Ca = function() { var a = zc.s.Ca.call(this);
    a.ids = this.Wf; return a };
zc.prototype.ha = function(a) { zc.s.ha.call(this, a);
    this.Wf = a.ids };
zc.prototype.run = function(a) { var b = Nc(this); if (a) { a = 0; for (var c; c = this.Wf[a]; a++) { var e = Kc(b, c);
            e ? e.A(!1, !1) : c == this.fc && console.warn("Can't delete non-existent block: " + c) } } else a = G("xml"), a.appendChild(this.px), x.F.qe(a, b) };

function Bc(a) { a && (Bc.s.constructor.call(this, a), a = Ee(this), this.Gs = a.Ss, this.Fs = a.ds, this.Ko = a.Uq) } w(Bc, Be);
x.j.Ni = Bc;
d = Bc.prototype;
d.type = x.j.Si;
d.Ca = function() { var a = Bc.s.Ca.call(this);
    this.gh && (a.newParentId = this.gh);
    this.fh && (a.newInputName = this.fh);
    this.jg && (a.newCoordinate = Math.round(this.jg.x) + "," + Math.round(this.jg.y)); return a };
d.ha = function(a) { Bc.s.ha.call(this, a);
    this.gh = a.newParentId;
    this.fh = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.jg = new D(parseFloat(a[0]), parseFloat(a[1]))) };
d.rf = function() { var a = Ee(this);
    this.gh = a.Ss;
    this.fh = a.ds;
    this.jg = a.Uq };

function Ee(a) { var b = Kc(wc[a.Ic] || null, a.fc);
    a = {}; var c = b.getParent(); if (c) { a.Ss = c.id;
        a: { for (var e = 0, f; f = c.X[e]; e++)
                if (f.connection && J(f.connection) == b) { b = f; break a } b = null } b && (a.ds = b.name) } else a.Uq = b.la(); return a } d.mi = function() { return this.Gs == this.gh && this.Fs == this.fh && sc(this.Ko, this.jg) };
d.run = function(a) { var b = Nc(this),
        c = Kc(b, this.fc); if (c) { var e = a ? this.gh : this.Gs,
            f = a ? this.fh : this.Fs;
        a = a ? this.jg : this.Ko; var h = null; if (e && (h = Kc(b, e), !h)) { console.warn("Can't connect to non-existent block: " + e); return } c.getParent() && Fe(c); if (a) f = c.la(), c.moveBy(a.x - f.x, a.y - f.y);
        else { c = c.M || c.Z; if (f) { if (b = K(h, f)) var k = b.connection } else c.type == x.Ff && (k = h.L);
            k ? c.connect(k) : console.warn("Can't connect to non-existent input: " + f) } } else console.warn("Can't move non-existent block: " + this.fc) };

function Fc(a, b, c, e) { Fc.s.constructor.call(this);
    this.fc = a ? a.id : null;
    this.Ic = a ? a.o.id : null;
    this.element = b;
    this.oldValue = c;
    this.newValue = e;
    this.nc = !1 } w(Fc, Mc);
Fc.prototype.type = x.j.gn;
Fc.prototype.Ca = function() { var a = Fc.s.Ca.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.fc && (a.blockId = this.fc); return a };
Fc.prototype.ha = function(a) { Fc.s.ha.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.fc = a.blockId };

function Ge(a) { this.T = a } d = Ge.prototype;
d.Oq = !0;
d.$m = 17;
d.cb = null;
d.Yg = null;

function He(a) { a.Ac || (a.Ac = x.i.B("g", { "class": "blocklyIconGroup" }, null), a.T.vb && x.i.qb(a.Ac, "blocklyIconGroupReadonly"), a.Pn(a.Ac), a.T.ga().appendChild(a.Ac), x.O(a.Ac, "mouseup", a, a.oo), a.Cf()) } d.A = function() { H(this.Ac);
    this.Ac = null;
    this.pa(!1);
    this.T = null };
d.Cf = function() {};
d.Y = function() { return !!this.cb };
d.oo = function(a) { this.T.o.sb() || this.T.vb || x.i.dg(a) || this.pa(!this.Y()) };
d.Bf = function() { this.Y() && this.cb.Ha(this.T.oe) };

function Ie(a) { var b = a.T.la(),
        c = x.i.yc(a.Ac);
    b = new D(b.x + c.x + a.$m / 2, b.y + c.y + a.$m / 2);
    sc(a.Yg, b) || (a.Yg = b, a.Y() && (a = a.cb, a.yd = b, a.pg && re(a))) };
// Copyright 2011 Google Inc.  Apache License 2.0
function Je(a) { Je.s.constructor.call(this, a);
    He(this) } w(Je, Ge);
d = Je.prototype;
d.xa = "";
d.ia = 160;
d.Fa = 80;
d.Pn = function(a) { x.i.B("circle", { "class": "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
    x.i.B("path", { "class": "blocklyIconSymbol", d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z" }, a);
    x.i.B("rect", { "class": "blocklyIconSymbol", x: "6.8", y: "10.78", height: "2", width: "2" }, a) };
d.ij = function() {
    this.bd = x.i.B("foreignObject", { x: se, y: se }, null);
    var a = document.createElementNS(x.Df, "body");
    a.setAttribute("xmlns", x.Df);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(x.Df, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.T.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.xb = b;
    this.bd.appendChild(a);
    x.O(b, "mouseup", this, this.ey, !0, !0);
    x.O(b, "wheel", this, function(a) { a.stopPropagation() });
    x.O(b, "change", this, function() {
        this.xa != b.value && (x.j.U(new x.j.Kc(this.T,
            "comment", null, this.xa, b.value)), this.xa = b.value)
    });
    setTimeout(function() { b.focus() }, 0);
    return this.bd
};
d.Cf = function() { this.Y() && (this.pa(!1), this.pa(!0));
    Ge.prototype.Cf.call(this) };
d.wm = function() { if (this.Y()) { var a = this.cb.Ug(),
            b = 2 * se;
        this.bd.setAttribute("width", a.width - b);
        this.bd.setAttribute("height", a.height - b);
        this.xb.style.width = a.width - b - 4 + "px";
        this.xb.style.height = a.height - b - 4 + "px" } };
d.pa = function(a) { if (a != this.Y())
        if (x.j.U(new Fc(this.T, "commentOpen", !a, a)), !Ke(this.T) && !this.xb || A) Le.prototype.pa.call(this, a);
        else { var b = this.Jb(),
                c = this.Ug();
            a ? (this.cb = new pe(this.T.o, this.ij(), this.T.Kd, this.Yg, this.ia, this.Fa), ye(this.cb, this.T.id), a = this.wm.bind(this), this.cb.ip = a, this.Bf()) : (this.cb.A(), this.bd = this.xb = this.cb = null);
            this.Pb(b);
            this.rg(c.width, c.height) } };
d.ey = function() { ze(this.cb) && this.xb.focus() };
d.Ug = function() { return this.Y() ? this.cb.Ug() : { width: this.ia, height: this.Fa } };
d.rg = function(a, b) { this.xb ? this.cb.rg(a, b) : (this.ia = a, this.Fa = b) };
d.Jb = function() { return this.xb ? this.xb.value : this.xa };
d.Pb = function(a) { this.xa != a && (x.j.U(new x.j.Kc(this.T, "comment", null, this.xa, a)), this.xa = a);
    this.xb && (this.xb.value = a) };
d.A = function() { x.j.isEnabled() && this.Pb("");
    this.T.Ya = null;
    Ge.prototype.A.call(this) };

function Me(a, b) { this.v = a;
    this.type = b;
    a.o.xn && (this.Bd = a.o.xn[b], this.hl = a.o.xn[x.Mh[b]], this.no = !this.Bd) } d = Me.prototype;
d.Ia = null;
d.Od = null;
d.Me = null;
d.Wc = 0;
d.Wa = 0;
d.Yf = !1;
d.Bd = null;
d.hl = null;
d.no = null;
d.cl = function(a) {
    var b = this,
        c = b.v,
        e = a.v;
    a.isConnected() && a.disconnect();
    if (b.isConnected()) {
        var f = J(b),
            h = b.Me;
        b.Me = null;
        if (f.kb) h = x.F.Lf(f), f.A(), f = null;
        else if (b.type == x.ab) { if (!f.M) throw "Orphan block does not have an output connection."; var k = Ne(e, f);
            k && (f.M.connect(k), f = null) } else if (b.type == x.yb) { if (!f.Z) throw "Orphan block does not have a previous connection."; for (k = e; k.L;) { var l = Lc(k); if (l && !l.kb) k = l;
                else { Oe(f.Z, k.L) && (k.L.connect(f.Z), f = null); break } } }
        if (f && (b.disconnect(), x.j.nc)) {
            var m = x.j.xc();
            setTimeout(function() { f.o && !f.getParent() && (x.j.R(m), f.M ? Pe(f.M, b) : f.Z && Pe(f.Z, b), x.j.R(!1)) }, x.Jk)
        }
        b.Me = h
    }
    var n;
    x.j.isEnabled() && (n = new x.j.Ni(e));
    Qe(b, a);
    e.qh(c);
    n && (n.rf(), x.j.U(n))
};
d.A = function() { if (this.isConnected()) throw "Disconnect connection before disposing of it.";
    this.Yf && Re(this.Bd, this);
    this.hl = this.Bd = null };

function Se(a) { return a.type == x.ab || a.type == x.yb } d.isConnected = function() { return !!this.Ia };

function Te(a, b) { if (!b) return 3; if (Se(a)) var c = a.v,
        e = b.v;
    else e = a.v, c = b.v; return c && c == e ? 1 : b.type != x.Mh[a.type] ? 2 : c && e && c.o !== e.o ? 5 : Oe(a, b) ? c.kb && !e.kb ? 6 : 0 : 4 } d.Vl = function(a) { if (0 != Te(this, a)) return !1; if (a.type == x.Oh || a.type == x.Ff)
        if (a.isConnected() || this.isConnected()) return !1; return a.type == x.ab && a.isConnected() && !J(a).Ee() && !J(a).kb || this.type == x.Ff && a.isConnected() && !this.v.L && !J(a).kb && J(a).L || -1 != x.rl.indexOf(a) ? !1 : !0 };
d.connect = function(a) { if (this.Ia != a) { switch (Te(this, a)) {
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
                throw "Connection checks failed. " + (this + " expected " + this.Od + ", found " + a.Od);
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!"; } Se(this) ? this.cl(a) : a.cl(this) } };

function Qe(a, b) { a.Ia = b;
    b.Ia = a }

function Ue(a, b) { for (var c = !1, e = 0; e < a.X.length; e++) { var f = a.X[e].connection; if (f && f.type == x.ab && Oe(b.M, f)) { if (c) return null;
            c = f } } return c }

function Ne(a, b) { for (var c; c = Ue(a, b);)
        if (a = J(c), !a || a.kb) return c; return null } d.disconnect = function() { var a = this.Ia; if (Se(this)) { var b = this.v; var c = a.v;
        a = this } else b = a.v, c = this.v;
    this.Kn(b, c);
    a.mp() };
d.Kn = function(a, b) { var c;
    x.j.isEnabled() && (c = new x.j.Ni(b));
    this.Ia = this.Ia.Ia = null;
    b.qh(null);
    c && (c.rf(), x.j.U(c)) };
d.mp = function() { var a = this.v,
        b = this.Me; if (a.o && b && x.j.nc)
        if (a = x.F.Yh(b, a.o), a.M) this.connect(a.M);
        else if (a.Z) this.connect(a.Z);
    else throw "Child block does not have output or previous statement."; };

function J(a) { return a.isConnected() ? a.Ia.v : null }

function Oe(a, b) { if (!a.Od || !b.Od) return !0; for (var c = 0; c < a.Od.length; c++)
        if (-1 != b.Od.indexOf(a.Od[c])) return !0; return !1 } d.Is = function() { this.isConnected() && !Oe(this, this.Ia) && Fe(Se(this) ? J(this) : this.v) };
d.Ta = function(a) { a ? (t(a) || (a = [a]), this.Od = a, this.Is()) : this.Od = null; return this };
d.Ds = function() { return [] };
d.toString = function() { var a = this.v; if (a)
        if (a.M == this) var b = "Output Connection of ";
        else if (a.Z == this) b = "Previous Connection of ";
    else if (a.L == this) b = "Next Connection of ";
    else if (b = wa(a.X, function(a) { return a.connection == this }, this)) b = 'Input "' + b.name + '" connection on ';
    else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
    else return "Orphan Connection"; return b + Ve(a) };

function We() {} We.prototype = [];

function Xe(a, b) { if (b.Yf) throw "Connection already in database.";
    b.v.vb || (a.splice(Ye(a, b), 0, b), b.Yf = !0) }

function Ze(a, b) { if (!a.length) return -1; var c = Ye(a, b); if (c >= a.length) return -1; for (var e = b.Wa, f = c; 0 <= f && a[f].Wa == e;) { if (a[f] == b) return f;
        f-- } for (; c < a.length && a[c].Wa == e;) { if (a[c] == b) return c;
        c++ } return -1 }

function Ye(a, b) { if (!a.length) return 0; for (var c = 0, e = a.length; c < e;) { var f = Math.floor((c + e) / 2); if (a[f].Wa < b.Wa) c = f + 1;
        else if (a[f].Wa > b.Wa) e = f;
        else { c = f; break } } return c }

function Re(a, b) { if (!b.Yf) throw "Connection not in database."; var c = Ze(a, b); if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.Yf = !1;
    a.splice(c, 1) }

function $e(a, b, c) {
    function e(a) { var b = h - f[a].Wc,
            e = k - f[a].Wa;
        Math.sqrt(b * b + e * e) <= c && m.push(f[a]); return e < c } var f = a,
        h = b.Wc,
        k = b.Wa;
    a = 0; for (var l = b = f.length - 2; a < l;) f[l].Wa < k ? a = l : b = l, l = Math.floor((a + b) / 2); var m = [];
    b = a = l; if (f.length) { for (; 0 <= a && e(a);) a--;
        do b++; while (b < f.length && e(b)) } return m };
x.aC = {};
x.eq = 5;
x.bu = 10;
x.Yc = 20;
x.Jk = 250;
x.St = 30;
x.vu = 750;
x.Ju = 100;
x.au = !0;
x.ku = .45;
x.lu = .65;
x.qc = { width: 96, height: 124, url: "sprites.png" };
x.dn = "http://www.w3.org/2000/svg";
x.Df = "http://www.w3.org/1999/xhtml";
x.ab = 1;
x.Oh = 2;
x.yb = 3;
x.Ff = 4;
x.Se = 5;
x.Mi = -1;
x.Hk = 0;
x.Fg = 1;
x.zz = 0;
x.Az = 1;
x.xz = 1;
x.yz = 2;
x.Mh = [];
x.Mh[x.ab] = x.Oh;
x.Mh[x.Oh] = x.ab;
x.Mh[x.yb] = x.Ff;
x.Mh[x.Ff] = x.yb;
x.Hf = 0;
x.Jg = 1;
x.Gf = 2;
x.ke = 3;
x.aq = null;
x.Tm = 1;
x.bq = 2;
x.mq = "VARIABLE";
x.Pu = "VARIABLE_DYNAMIC";
x.kq = "PROCEDURE";
x.lq = "RENAME_VARIABLE_ID";
x.cq = "DELETE_VARIABLE_ID";
x.Ja = {};
x.Ja.Ln = 0;
x.Ja.ll = null;
x.Ja.Yv = function(a) { var b = a.o,
        c = a.ga();
    b.Jf.play("delete");
    a = af(b, c);
    c = c.cloneNode(!0);
    c.jy = a.x;
    c.ky = a.y;
    c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    L(b).appendChild(c);
    c.xq = c.getBBox();
    x.Ja.Ar(c, b.u, new Date, b.scale) };
x.Ja.Ar = function(a, b, c, e) { var f = (new Date - c) / 150;
    1 < f ? H(a) : (a.setAttribute("transform", "translate(" + (a.jy + (b ? -1 : 1) * a.xq.width * e / 2 * f) + "," + (a.ky + a.xq.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(x.Ja.Ar, 10, a, b, c, e)) };
x.Ja.Dv = function(a) { var b = a.o,
        c = b.scale;
    b.Jf.play("click"); if (!(1 > c)) { var e = af(b, a.ga());
        a.M ? (e.x += (a.u ? 3 : -3) * c, e.y += 13 * c) : a.Z && (e.x += (a.u ? -23 : 23) * c, e.y += 3 * c);
        a = x.i.B("circle", { cx: e.x, cy: e.y, r: 0, fill: "none", stroke: "#888", "stroke-width": 10 }, L(b));
        x.Ja.Sq(a, new Date, c) } };
x.Ja.Sq = function(a, b, c) { var e = (new Date - b) / 150;
    1 < e ? H(a) : (a.setAttribute("r", 25 * e * c), a.style.opacity = 1 - e, x.Ja.Ln = setTimeout(x.Ja.Sq, 10, a, b, c)) };
x.Ja.Xv = function(a) { a.o.Jf.play("disconnect"); if (!(1 > a.o.scale)) { var b = a.Ib().height;
        b = Math.atan(10 / b) / Math.PI * 180;
        a.u || (b *= -1);
        x.Ja.zr(a.ga(), b, new Date) } };
x.Ja.zr = function(a, b, c) { var e = (new Date - c) / 200;
    1 < e ? a.sh = "" : (a.sh = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")", x.Ja.ll = a, x.Ja.Ln = setTimeout(x.Ja.zr, 10, a, b, c));
    a.setAttribute("transform", a.Af + a.sh) };
x.Ja.Mn = function() { if (x.Ja.ll) { clearTimeout(x.Ja.Ln); var a = x.Ja.ll;
        a.sh = "";
        a.setAttribute("transform", a.Af);
        x.Ja.ll = null } };

function bf(a, b) { bf.s.constructor.call(this, a, b);
    this.mm = new D(0, 0) } w(bf, Me);

function cf(a, b) { var c = a.Wc - b.Wc;
    a = a.Wa - b.Wa; return Math.sqrt(c * c + a * a) }

function Pe(a, b) { if (!a.v.o.sb()) { var c = df(a.v); if (!c.vb) { var e = !1; if (!c.Ee()) { c = df(b.v); if (!c.Ee()) return;
                b = a;
                e = !0 } var f = x.selected == c;
            f || c.Rh(); var h = b.Wc + x.Yc - a.Wc;
            a = b.Wa + x.Yc - a.Wa;
            e && (a = -a);
            c.u && (h = -h);
            c.moveBy(h, a);
            f || c.mh() } } } d = bf.prototype;
d.moveTo = function(a, b) { this.Yf && Re(this.Bd, this);
    this.Wc = a;
    this.Wa = b;
    this.no || Xe(this.Bd, this) };
d.moveBy = function(a, b) { this.moveTo(this.Wc + a, this.Wa + b) };

function ef(a, b) { a.moveTo(b.x + a.mm.x, b.y + a.mm.y) }

function ff(a, b, c) { a.mm.x = b;
    a.mm.y = c }

function gf(a) { var b = a.Ia.Wc - a.Wc,
        c = a.Ia.Wa - a.Wa; if (0 != b || 0 != c) { a = J(a); var e = a.ga(); if (!e) throw "block is not rendered.";
        e = x.i.yc(e);
        a.ga().setAttribute("transform", "translate(" + (e.x - b) + "," + (e.y - c) + ")");
        hf(a, -b, -c) } }
d.closest = function(a, b) { var c = this.hl; if (c.length) { var e = this.Wa,
            f = this.Wc;
        this.Wc = f + b.x;
        this.Wa = e + b.y; var h = Ye(c, this);
        b = null; for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Wa - this.Wa) <= a;) l = c[m], this.Vl(l, k) && (b = l, k = cf(l, this)), m--; for (; h < c.length && Math.abs(c[h].Wa - this.Wa) <= a;) l = c[h], this.Vl(l, k) && (b = l, k = cf(l, this)), h++;
        this.Wc = f;
        this.Wa = e;
        a = { connection: b, bt: k } } else a = { connection: null, bt: a }; return a };
d.Zr = function() { var a = this.type == x.ab || this.type == x.Oh ? "m 0,0 " + jf + " v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5"; var b = this.v.la();
    Me.$r = x.i.B("path", { "class": "blocklyHighlightedConnectionPath", d: a, transform: "translate(" + (this.Wc - b.x) + "," + (this.Wa - b.y) + ")" + (this.v.u ? " scale(-1 1)" : "") }, this.v.ga()) };

function kf(a) { lf(a, !1); var b = []; if (a.type != x.ab && a.type != x.yb) return b; if (a = J(a)) { if (a.isCollapsed()) { var c = [];
            a.M && c.push(a.M);
            a.L && c.push(a.L);
            a.Z && c.push(a.Z) } else c = a.xe(!0); for (var e = 0; e < c.length; e++) b.push.apply(b, kf(c[e]));
        b.length || (b[0] = a) } return b }

function mf() { H(Me.$r);
    delete Me.$r }

function lf(a, b) {
    (a.no = b) && a.Yf ? Re(a.Bd, a) : b || a.Yf || Xe(a.Bd, a) } d.Vl = function(a, b) { return cf(this, a) > b ? !1 : bf.s.Vl.call(this, a) };
d.Kn = function(a, b) { bf.s.Kn.call(this, a, b);
    a.P && a.$();
    b.P && (nf(b), b.$()) };
d.mp = function() { var a = this.v,
        b = this.Me; if (a.o && b && x.j.nc) { bf.s.mp.call(this);
        b = J(this); if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.Bc();
        b.$(!1);
        a.P && a.$() } };
d.Ds = function(a) { return $e(this.hl, this, a) };
d.cl = function(a) { bf.s.cl.call(this, a); var b = this.v;
    a = a.v;
    b.P && nf(b);
    a.P && nf(a);
    b.P && a.P && (this.type == x.yb || this.type == x.Ff ? a.$() : b.$()) };
d.Is = function() { this.isConnected() && !Oe(this, this.Ia) && (Fe(Se(this) ? J(this) : this.v), this.v.rb()) };

function of (a) { this.zg = x.selected = a;
    this.m = a.o;
    a = this.zg.xe(!1); var b;
    a: { for (b = this.zg.L; b;) { var c = J(b); if (!c) break a;
            b = c.L } b = null } b && b != this.zg.L && a.push(b);
    this.nn = a;
    this.ri = this.jc = null;
    this.ep = 0;
    this.Eg = !1 } of .prototype.A = function() { this.m = this.zg = null;
    this.nn.length = 0;
    this.ri = this.jc = null }; of .prototype.update = function(a, b) { var c = this.jc,
        e = this.jc;
    this.ri = this.jc = null;
    this.ep = x.Yc; for (var f = 0; f < this.nn.length; f++) { var h = this.nn[f],
            k = h.closest(this.ep, a);
        k.connection && (this.jc = k.connection, this.ri = h, this.ep = k.bt) }(a = e != this.jc) && c && mf();
    c = !!this.jc && b != x.bq;
    this.Eg = (b = !!b && !this.zg.getParent() && this.zg.kc()) && !c;
    b && this.jc && (mf(), this.jc = null);!this.Eg && a && this.jc && this.jc && this.jc.Zr() };

function pf(a, b) { this.jb = a;
    this.m = b;
    this.Zh = new of (this.jb);
    this.Pg = null;
    this.Eg = !1;
    this.Oe = this.jb.la();
    b = [];
    a = xc(a, !1); for (var c = 0, e; e = a[c]; c++) { e = qf(e); for (var f = 0; f < e.length; f++) b.push({ location: e[f].Yg, icon: e[f] }) } this.ql = b } pf.prototype.A = function() { this.mb = this.m = this.jb = null;
    this.ql.length = 0;
    this.Zh && (this.Zh.A(), this.Zh = null) };

function rf(a, b, c) { c = a.xi(c);
    a.jb.im(vc(a.Oe, c)); for (var e = 0; e < a.ql.length; e++) { var f = a.ql[e],
            h = f.icon;
        f = vc(f.location, c);
        h.Yg = f;
        h.Y() && (h = h.cb, h.yd = f, h.pg && re(h)) } a.Pg = sf(a.m, b);
    a.Zh.update(c, a.Pg);
    a.Eg = a.Zh.Eg;
    b = a.m.Uc;
    a.Eg ? (a.jb.lk(!0), a.Pg == x.Tm && b && tf(b, !0)) : (a.jb.lk(!1), b && tf(b, !1)) }

function uf(a, b, c) { rf(a, b, c);
    a.ql = [];
    x.Ja.Mn();
    b = a.xi(c);
    a.jb.As(vc(a.Oe, b));
    c = a.m.Uc;
    a.Eg ? (c && vf(c.close, 100, c), a.sj(), a.jb.A(!1, !0)) : c && c.close();
    a.Eg || (hf(a.jb, b.x, b.y), a.jb.tg(!1), b = a.Zh, b.jc && (b.ri.connect(b.jc), b.zg.P && (x.Ja.Dv((Se(b.ri) ? b.jc : b.ri).v), wf(df(b.zg))), b.jc && mf()), a.jb.$(), a.sj(), xf(a.jb));
    a.m.Tb(!0);
    (b = a.m.ea) && x.i.Sb(b.Lc, a.jb.kc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    x.j.R(!1) } pf.prototype.sj = function() { var a = new x.j.Ni(this.jb);
    a.Ko = this.Oe;
    a.rf();
    x.j.U(a) };
pf.prototype.xi = function(a) { a = new D(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Rj && (a = a.scale(1 / this.m.options.Mb.scale)); return a };

function yf(a, b, c, e, f) { this.w = x.i.B("g", { "class": "blocklyComment" }, null);
    this.w.Af = "";
    this.xk = x.i.B("rect", { "class": "blocklyCommentRect", x: 0, y: 0, rx: 3, ry: 3 });
    this.w.appendChild(this.xk);
    this.pg = !1;
    this.Qe = x.i.ag() && !!a.Ab;
    yf.s.constructor.call(this, a, b, c, e, f);
    this.$() } w(yf, Xc);
d = yf.prototype;
d.A = function() { if (this.o) { if (x.selected == this) { this.Ah(); var a = this.o;
            a.Eb && a.Eb.cancel() } x.j.isEnabled() && x.j.U(new Jc(this));
        H(this.w);
        this.xh = this.xg = this.bd = this.xb = this.xk = this.w = null;
        x.j.disable();
        yf.s.A.call(this);
        x.j.enable() } };
d.Bc = function() { this.o.options.readOnly || this.Rn || (x.O(this.xg, "mousedown", this, this.Ts), x.O(this.xh, "mousedown", this, this.Ts));
    this.Rn = !0;
    zf(this);
    this.ga().parentNode || this.o.ie.appendChild(this.ga()) };
d.Ts = function(a) { var b = this.o.ye(a);
    b && (b.Hc || (b.Hc = this), b.Sc = a) };
d.Ei = function(a) { if (!this.o.options.readOnly) { var b = [];
        this.kc() && this.Ee() && (b.push(x.ca.zv(this)), b.push(x.ca.yv(this)));
        x.ca.show(a, b, this.u) } };
d.select = function() { if (x.selected != this) { var a = null; if (x.selected) { a = x.selected.id;
            x.j.disable(); try { x.selected.Ah() } finally { x.j.enable() } } a = new Fc(null, "selected", a, this.id);
        a.Ic = this.o.id;
        x.j.U(a);
        x.selected = this;
        this.Rh() } };
d.Ah = function() { if (x.selected == this) { var a = new Fc(null, "selected", this.id, null);
        a.Ic = this.o.id;
        x.j.U(a);
        x.selected = null;
        this.mh();
        Af(this) } };
d.Rh = function() { x.i.qb(this.w, "blocklySelected");
    this.xp() };
d.mh = function() { x.i.Sb(this.w, "blocklySelected");
    Af(this) };
d.la = function() { var a = 0,
        b = 0,
        c = this.Qe ? this.o.Ab.xc() : null,
        e = this.ga(); if (e) { do { var f = x.i.yc(e);
            a += f.x;
            b += f.y;
            this.Qe && this.o.Ab.re.firstChild == e && (f = this.o.Ab.Ll(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.ie && e != c) } return this.sd = new D(a, b) };
d.moveBy = function(a, b) { var c = new Ic(this),
        e = this.la();
    this.translate(e.x + a, e.y + b);
    this.sd = new D(e.x + a, e.y + b);
    c.rf();
    x.j.U(c);
    Bf(this.o) };
d.translate = function(a, b) { this.sd = new D(a, b);
    this.ga().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.jm = function() { if (this.Qe) { var a = this.la();
        x.i.removeAttribute(this.ga(), "transform");
        this.o.Ab.zf(a.x, a.y);
        Cf(this.o.Ab, this.ga()) } };
d.As = function(a) { this.Qe && (this.translate(a.x, a.y), this.o.Ab.cj(this.o.Ua)) };
d.im = function(a, b) { a ? a.zf(b.x, b.y) : (this.w.Af = "translate(" + b.x + "," + b.y + ")", this.w.setAttribute("transform", this.w.Af + this.w.sh)) };
d.moveTo = function(a, b) { this.translate(a, b) };
d.Xn = function() { var a = this.la(),
        b = this.Ib(); if (this.u) { var c = new D(a.x - b.width, a.y);
        a = new D(a.x, a.y + b.height) } else c = new D(a.x, a.y), a = new D(a.x + b.width, a.y + b.height); return { od: c, Nd: a } };

function zf(a) { a.Ee() ? x.i.qb(a.w, "blocklyDraggable") : x.i.Sb(a.w, "blocklyDraggable") } d.ph = function(a) { yf.s.ph.call(this, a);
    zf(this) };
d.tg = function(a) { a ? (a = this.ga(), a.Af = "", a.sh = "", x.i.qb(this.w, "blocklyDragging")) : x.i.Sb(this.w, "blocklyDragging") };
d.ga = function() { return this.w };
d.Pc = function() { return this.xb ? this.xb.value : this.$c };
d.Id = function(a) { yf.s.Id.call(this, a);
    this.xb && (this.xb.value = a) };
d.lk = function(a) { a ? x.i.qb(this.w, "blocklyDraggingDelete") : x.i.Sb(this.w, "blocklyDraggingDelete") };
d.jt = function() {};

function Df(a, b, c) { x.j.disable(); try { var e = $c(a),
            f = new yf(b, e.content, e.Rr, e.It, e.id);
        b.P && (f.Bc(), f.$(!1)); if (!isNaN(e.x) && !isNaN(e.y))
            if (b.u) { var h = c || b.dd();
                f.moveBy(h - e.x, e.y) } else f.moveBy(e.x, e.y) } finally { x.j.enable() } Yc(f); return f }
d.yk = function(a) { var b;
    this.o.u && (b = this.o.dd());
    a = Zc(this, a); var c = this.la();
    a.setAttribute("x", Math.round(this.o.u ? b - c.x : c.x));
    a.setAttribute("y", Math.round(c.y));
    a.setAttribute("h", this.di());
    a.setAttribute("w", this.dd()); return a };

function Ef(a, b) { this.Fb = a;
    this.m = b;
    this.Pg = null;
    this.Pm = !1;
    this.Oe = this.Fb.la();
    this.Qg = x.i.ag() && b.Ab ? b.Ab : null } Ef.prototype.A = function() { this.Qg = this.m = this.Fb = null };

function Ff(a, b, c) { c = a.xi(c);
    a.Fb.im(a.Qg, vc(a.Oe, c));
    a.Fb.kc() && (a.Pg = sf(a.m, b), a.Pm = a.Pg != x.aq, b = a.m.Uc, a.Pm ? (a.Fb.lk(!0), a.Pg == x.Tm && b && tf(b, !0)) : (a.Fb.lk(!1), b && tf(b, !1))) }

function Gf(a, b, c) { Ff(a, b, c);
    b = a.xi(c);
    b = vc(a.Oe, b);
    a.Fb.moveTo(b.x, b.y);
    b = a.m.Uc;
    a.Pm ? (b && vf(b.close, 100, b), a.sj(), a.Fb.A(!1, !0)) : b && b.close();
    a.Pm || (a.Qg && a.Qg.cj(a.m.ie), a.Fb.tg && a.Fb.tg(!1), a.sj());
    a.m.Tb(!0);
    a.m.ea && x.i.Sb(a.m.ea.Lc, a.Fb.kc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    x.j.R(!1) } Ef.prototype.sj = function() { if (this.Fb.hs) { var a = new Ic(this.Fb);
        a.Lo = this.Oe;
        a.rf();
        x.j.U(a) } };
Ef.prototype.xi = function(a) { a = new D(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Rj && (a = a.scale(1 / this.m.options.Mb.scale)); return a };
Ef.prototype.jm = function() { this.Fb.moveTo(0, 0);
    this.Qg.zf(this.Oe.x, this.Oe.y);
    Cf(this.Qg, this.Fb.ga()) };

function Hf(a) { this.m = a;
    this.Xx = a.ub();
    this.Zx = new D(a.scrollX, a.scrollY) } Hf.prototype.A = function() { this.m = null };
Hf.prototype.Jm = function() { x.selected && x.selected.Ah();
    If(this.m) };

function Jf(a, b) { var c = a.Xx,
        e = vc(a.Zx, b);
    b = Math.min(e.x, -c.Nc);
    e = Math.min(e.y, -c.tc);
    b = Math.max(b, c.za - c.Nc - c.Oc);
    e = Math.max(e, c.gb - c.tc - c.rc);
    b = -b - c.Nc;
    e = -e - c.tc;
    a.Dt(b, e) } Hf.prototype.Dt = function(a, b) { this.m.lb.set(a, b) };

function Kf(a) { Kf.s.constructor.call(this, a.Cj());
    this.Zb = a.Zb;
    this.Wd = a.Wd } w(Kf, Hf);
Kf.prototype.Dt = function(a, b) { this.Wd ? this.Zb.set(a) : this.Zb.set(b) };
x.C = {};
x.C.visible = !1;
x.C.Th = !1;
x.C.ou = 50;
x.C.zs = 0;
x.C.qk = 0;
x.C.zo = 0;
x.C.Ao = 0;
x.C.S = null;
x.C.pm = null;
x.C.hq = 0;
x.C.iq = 10;
x.C.Eu = 10;
x.C.ju = 750;
x.C.Um = 5;
x.C.ka = null;
x.C.W = function() { x.C.ka || (x.C.ka = G("DIV", "blocklyTooltipDiv"), document.body.appendChild(x.C.ka)) };
x.C.Lg = function(a) { x.Mc(a, "mouseover", null, x.C.Fx);
    x.Mc(a, "mouseout", null, x.C.Ex);
    a.addEventListener("mousemove", x.C.Dx, !1) };
x.C.Fx = function(a) { if (!x.C.Th) { for (a = a.target; !q(a.nd) && !u(a.nd);) a = a.nd;
        x.C.S != a && (x.C.Na(), x.C.pm = null, x.C.S = a);
        clearTimeout(x.C.zs) } };
x.C.Ex = function() { x.C.Th || (x.C.zs = setTimeout(function() { x.C.S = null;
        x.C.pm = null;
        x.C.Na() }, 1), clearTimeout(x.C.qk)) };
x.C.Dx = function(a) { if (x.C.S && x.C.S.nd && !x.K.Y() && !x.C.Th)
        if (x.C.visible) { var b = x.C.zo - a.pageX;
            a = x.C.Ao - a.pageY;
            Math.sqrt(b * b + a * a) > x.C.Eu && x.C.Na() } else x.C.pm != x.C.S && (clearTimeout(x.C.qk), x.C.zo = a.pageX, x.C.Ao = a.pageY, x.C.qk = setTimeout(x.C.Sx, x.C.ju)) };
x.C.Na = function() { x.C.visible && (x.C.visible = !1, x.C.ka && (x.C.ka.style.display = "none"));
    x.C.qk && clearTimeout(x.C.qk) };
x.C.block = function() { x.C.Na();
    x.C.Th = !0 };
x.C.ly = function() { x.C.Th = !1 };
x.C.Sx = function() {
    if (!x.C.Th && (x.C.pm = x.C.S, x.C.ka)) {
        ee(x.C.ka);
        for (var a = x.C.S.nd; u(a);) a = a();
        a = x.i.Lt(a, x.C.ou);
        a = a.split("\n");
        for (var b = 0; b < a.length; b++) { var c = document.createElement("div");
            c.appendChild(document.createTextNode(a[b]));
            x.C.ka.appendChild(c) } a = x.C.S.u;
        b = Zd();
        x.C.ka.style.direction = a ? "rtl" : "ltr";
        x.C.ka.style.display = "block";
        x.C.visible = !0;
        c = x.C.zo;
        c = a ? c - (x.C.hq + x.C.ka.offsetWidth) : c + x.C.hq;
        var e = x.C.Ao + x.C.iq;
        e + x.C.ka.offsetHeight > b.height + window.scrollY && (e -= x.C.ka.offsetHeight +
            2 * x.C.iq);
        a ? c = Math.max(x.C.Um - window.scrollX, c) : c + x.C.ka.offsetWidth > b.width + window.scrollX - 2 * x.C.Um && (c = b.width - x.C.ka.offsetWidth - 2 * x.C.Um);
        x.C.ka.style.top = e + "px";
        x.C.ka.style.left = c + "px"
    }
};

function Lf(a, b) { this.mb = this.cc = this.uh = this.vh = this.Hc = this.uc = this.ys = null;
    this.Gv = b;
    this.Pj = this.ah = this.Qj = this.Wg = !1;
    this.Sc = a;
    this.J = this.Dg = this.We = this.Xe = this.om = this.nm = null;
    this.Xl = this.Xr = !1;
    this.Yr = !x.au } d = Lf.prototype;
d.A = function() { x.Touch.$e();
    x.C.ly();
    this.Gv.Eb = null;
    this.nm && x.Pa(this.nm);
    this.om && x.Pa(this.om);
    this.J = this.mb = this.cc = this.uh = this.vh = null;
    this.We && (this.We.A(), this.We = null);
    this.Dg && (this.Dg.A(), this.Dg = null);
    this.Xe && (this.Xe.A(), this.Xe = null) };

function Mf(a, b) {
    a.uc = uc(new D(b.clientX, b.clientY), a.ys);
    if (a.Wg) var c = !1;
    else c = a.uc, a.Wg = Math.sqrt(c.x * c.x + c.y * c.y) > (a.J ? x.bu : x.eq), c = a.Wg;
    if (c) {
        if (a.Hc) { a.Pj = !0;
            a.Xe = new Ef(a.Hc, a.mb);
            c = a.Xe;
            x.j.xc() || x.j.R(!0);
            c.m.Tb(!1);
            c.Fb.jt(!1);
            c.Qg && c.jm();
            c.Fb.tg && c.Fb.tg(!0); var e = c.m.ea;
            e && x.i.qb(e.Lc, c.Fb.kc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            Ff(a.Xe, a.Sc, a.uc);
            c = !0 } else c = !1;
        if (!c) {
            if (a.cc)
                if (a.J ? (a.cc.disabled ? c = !1 : !Nf(a.J) || a.J.js(a.uc) ? (a.mb = a.J.va, Of(a.mb), x.j.xc() || x.j.R(!0), a.uh =
                        null, a.cc = Pf(a.J, a.cc), a.cc.select(), c = !0) : c = !1, a.ah = c) : a.cc.Ee() && (a.ah = !0), a.ah) { a.We = new pf(a.cc, a.mb);
                    c = a.We;
                    e = a.uc; var f = a.Yr;
                    x.j.xc() || x.j.R(!0);
                    c.m.Tb(!1);
                    x.Ja.Mn(); if (c.jb.getParent() || f && c.jb.L && J(c.jb.L)) Fe(c.jb, f), e = c.xi(e), e = vc(c.Oe, e), c.jb.translate(e.x, e.y), x.Ja.Xv(c.jb);
                    c.jb.tg(!0);
                    c.jb.jm();
                    (e = c.m.ea) && x.i.qb(e.Lc, c.jb.kc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                    rf(a.We, a.Sc, a.uc);
                    c = !0 } else c = !1;
            else c = !1;
            !c && (a.J ? Nf(a.J) : a.mb && a.mb.lb) && (a.Dg = a.J ? new Kf(a.J) : new Hf(a.mb), a.Qj = !0, a.Dg.Jm())
        }
        x.gg()
    }
    a.Sc = b
}
d.oj = function(a) { x.i.$l(a) ? this.cancel() : (this.Xr = !0, x.Ja.Mn(), Of(this.mb), this.mb.Rj && this.mb.resize(), Qf(this.mb), this.Sc = a, x.Rb(!!this.J), x.C.block(), this.cc && this.cc.select(), x.i.dg(a) ? oc(this, a) : (("touchstart" == a.type.toLowerCase() || "pointerdown" == a.type.toLowerCase() && "mouse" != a.pointerType) && x.bx(a, this), this.ys = new D(a.clientX, a.clientY), this.Yr = a.altKey || a.ctrlKey || a.metaKey, this.Lg(a))) };
d.Lg = function(a) { this.nm = x.O(document, "mousemove", null, this.Gj.bind(this));
    this.om = x.O(document, "mouseup", null, this.Pl.bind(this));
    a.preventDefault();
    a.stopPropagation() };
d.Gj = function(a) { Mf(this, a);
    this.Qj ? Jf(this.Dg, this.uc) : this.ah ? rf(this.We, this.Sc, this.uc) : this.Pj && Ff(this.Xe, this.Sc, this.uc);
    a.preventDefault();
    a.stopPropagation() };
d.Pl = function(a) {
    Mf(this, a);
    x.gg();
    if (this.Xl) console.log("Trying to end a gesture recursively.");
    else {
        this.Xl = !0;
        if (this.Pj) Gf(this.Xe, a, this.uc);
        else if (this.ah) uf(this.We, a, this.uc);
        else if (this.Qj) { var b = this.Dg;
            Jf(b, this.uc);
            Rf(b.m) } else this.Hc && !this.Wg ? (this.Hc.xp && this.Hc.xp(), this.Hc.select && this.Hc.select()) : Sf(this) ? (this.vh.Ne(), Tf(this)) : !this.uh || this.Wg || Sf(this) ? this.uh || this.Hc || this.vh || this.Wg || x.selected && x.selected.Ah() : (this.J && this.J.Sh ? this.cc.disabled || (x.j.xc() || x.j.R(!0),
            xf(Pf(this.J, this.cc))) : x.j.U(new Fc(this.uh, "click", void 0, void 0)), Tf(this), x.j.R(!1));
        a.preventDefault();
        a.stopPropagation();
        this.A()
    }
};
d.cancel = function() { if (!this.Xl) { x.gg(); if (this.Pj) Gf(this.Xe, this.Sc, this.uc);
        else if (this.ah) uf(this.We, this.Sc, this.uc);
        else if (this.Qj) { var a = this.Dg;
            Jf(a, this.uc);
            Rf(a.m) } this.A() } };

function oc(a, b) { a.cc ? (Tf(a), x.Rb(a.J), a.cc.Ei(b)) : a.Hc ? a.Hc.Ei(b) : a.mb && !a.J && (x.Rb(), a.mb.Ei(b));
    b.preventDefault();
    b.stopPropagation();
    a.A() }

function Tf(a) { a.cc && !a.J && wf(a.cc) }

function Uf(a, b) { a.uh || a.Hc || (a.uh = b, b.vb && b != df(b) ? Vf(a, df(b)) : Vf(a, b)) }

function Vf(a, b) { b.kb ? Vf(a, b.getParent()) : a.cc = b }

function Sf(a) { if (a.vh) { var b = a.vh;
        b = b.Gg && !!b.v && Ke(b.v) } else b = !1; return b && !a.Wg && (!a.J || !a.J.Sh) } d.sb = function() { return this.Qj || this.ah || this.Pj };
x.i = {};
x.i.removeAttribute = function(a, b) { A && ub("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b) };
x.i.qb = function(a, b) { var c = a.getAttribute("class") || ""; if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c && (c += " ");
    a.setAttribute("class", c + b); return !0 };
x.i.Sb = function(a, b) { var c = a.getAttribute("class"); if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c = c.split(/\s+/); for (var e = 0; e < c.length; e++) c[e] && c[e] != b || (c.splice(e, 1), e--);
    c.length ? a.setAttribute("class", c.join(" ")) : x.i.removeAttribute(a, "class"); return !0 };
x.i.Ur = function(a, b) { return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ") };
x.i.nx = function(a) { a.preventDefault();
    a.stopPropagation() };
x.i.$l = function(a) { return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable };
x.i.yc = function(a) { var b = new D(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10)); if (c = a.getAttribute("y")) b.y = parseInt(c, 10); if (c = (c = a.getAttribute("transform")) && c.match(x.i.yc.Tu)) b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && ((c = a.match(x.i.yc.Ru)) || (c = a.match(x.i.yc.Su)), c && (b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3])))); return b };
x.i.Fl = function(a) { for (var b = 0, c = 0; a;) { var e = x.i.yc(a);
        b += e.x;
        c += e.y; if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode } return new D(b, c) };
x.i.yc.Tu = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
x.i.yc.Su = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
x.i.yc.Ru = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
x.i.B = function(a, b, c) { a = document.createElementNS(x.dn, a); for (var e in b) a.setAttribute(e, b[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a); return a };
x.i.dg = function(a) { return a.ctrlKey && lb ? !0 : 2 == a.button };
x.i.$j = function(a, b, c) { var e = b.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    c || (c = b.getScreenCTM().inverse()); return e.matrixTransform(c) };
x.i.Dp = function(a) { return a.length ? a.reduce(function(a, c) { return a.length < c.length ? a : c }).length : 0 };
x.i.Av = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || x.i.Dp(a); for (var e = 0; e < b; e++) { for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c; return b };
x.i.Bv = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || x.i.Dp(a); for (var e = 0; e < b; e++) { for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c; return b };
x.i.gy = function(a) { return x.i.Qp(a, !0) };
x.i.oc = function(a) { if (!q(a)) return a;
    a = x.i.Qp(a, !1); return a.length ? a[0] : "" };
x.i.Eq = function(a) { for (var b = x.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e;) { var f = e[1];
        f = f.toUpperCase(); "BKY_" != f.substr(0, 4) ? console.log("WARNING: Unsupported message table prefix in %{" + e[1] + "}.") : void 0 == b[f.substr(4)] && console.log("WARNING: No message string for %{" + e[1] + "}.");
        a = a.substring(e.index + f.length + 1);
        e = c.exec(a) } };
x.i.Qp = function(a, b) {
    var c = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && c.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : b && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && c.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (c.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[a-zA-Z][a-zA-Z0-9_]*/.test(f) ? (l = f.toUpperCase(), (l = Ea(l, "BKY_") ?
            l.substring(4) : null) && l in x.g ? (f = x.g[l], q(f) ? Array.prototype.push.apply(c, x.i.Qp(f, b)) : b ? c.push(String(f)) : c.push(f)) : c.push("%{" + f + "}")) : c.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && c.push(l);
    b = [];
    for (k = a.length = 0; k < c.length; ++k) "string" == typeof c[k] ? a.push(c[k]) : ((l = a.join("")) && b.push(l), a.length = 0, b.push(c[k]));
    (l = a.join("")) && b.push(l);
    a.length = 0;
    return b
};
x.i.ve = function() { for (var a = x.i.ve.qt.length, b = [], c = 0; 20 > c; c++) b[c] = x.i.ve.qt.charAt(Math.random() * a); return b.join("") };
x.i.ve.qt = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
x.i.Lt = function(a, b) { a = a.split("\n"); for (var c = 0; c < a.length; c++) a[c] = x.i.yy(a[c], b); return a.join("\n") };
x.i.yy = function(a, b) { if (a.length <= b) return a; for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++) c[e].length > b && (b = c[e].length);
    e = -Infinity; var f = 1;
    do { var h = e; var k = a;
        a = []; var l = c.length / f,
            m = 1; for (e = 0; e < c.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = x.i.Mt(c, a, b);
        e = x.i.Vp(c, a, b);
        a = x.i.zy(c, a);
        f++ } while (e > h); return k };
x.i.Vp = function(a, b, c) { for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === b[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === b[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e); for (h = b = 0; h < e.length; h++) b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5), b -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? b += c / 3 : -1 != ",;)]}".indexOf(f[h]) && (b += c / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += .5); return b };
x.i.Mt = function(a, b, c) { for (var e = x.i.Vp(a, b, c), f, h = 0; h < b.length - 1; h++)
        if (b[h] != b[h + 1]) { var k = [].concat(b);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1]; var l = x.i.Vp(a, k, c);
            l > e && (e = l, f = k) } return f ? x.i.Mt(a, f, c) : b };
x.i.zy = function(a, b) { for (var c = [], e = 0; e < a.length; e++) c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " "); return c.join("") };
x.i.ag = function() {
    if (void 0 !== x.i.ag.sn) return x.i.ag.sn;
    if (!g.getComputedStyle) return !1;
    var a = document.createElement("p"),
        b = "none",
        c = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
    document.body.insertBefore(a, null);
    for (var e in c)
        if (void 0 !== a.style[e]) { a.style[e] = "translate3d(1px,1px,1px)";
            b = g.getComputedStyle(a); if (!b) return document.body.removeChild(a), !1;
            b = b.getPropertyValue(c[e]) } document.body.removeChild(a);
    x.i.ag.sn = "none" !== b;
    return x.i.ag.sn
};
x.i.Nj = function(a, b) { var c = b.nextSibling;
    b = b.parentNode; if (!b) throw "Reference node has no parent.";
    c ? b.insertBefore(a, c) : b.appendChild(a) };
x.i.gt = function(a) { if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document."); if ("complete" === document.readyState) a();
    else var b = setInterval(function() { "complete" === document.readyState && (clearInterval(b), a()) }, 10) };
x.i.kk = function(a, b) { a.style.transform = b;
    a.style["-webkit-transform"] = b };
x.i.fo = function() { var a = Zd(),
        b = Wf(); return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x } };

function Xf(a, b) { this.gi = a;
    this.Hp = b.spacing;
    this.ps = b.length;
    this.Xw = (this.Co = a.firstChild) && this.Co.nextSibling;
    this.Tx = b.snap } Xf.prototype.qg = 1;
Xf.prototype.A = function() { this.gi = null };
Xf.prototype.update = function(a) { this.qg = a; var b = this.Hp * a || 100;
    this.gi.setAttribute("width", b);
    this.gi.setAttribute("height", b);
    b = Math.floor(this.Hp / 2) + .5; var c = b - this.ps / 2,
        e = b + this.ps / 2;
    b *= a;
    c *= a;
    e *= a;
    Yf(this.Co, a, c, e, b, b);
    Yf(this.Xw, a, b, b, c, e) };

function Yf(a, b, c, e, f, h) { a && (a.setAttribute("stroke-width", b), a.setAttribute("x1", c), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h)) } Xf.prototype.moveTo = function(a, b) { this.gi.setAttribute("x", a);
    this.gi.setAttribute("y", b);
    (A || jb) && this.update(this.qg) };

function Zf(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        e = !1,
        f = !1,
        h = !1,
        k = !1,
        l = !1,
        m = !1;
    else c = $f(a.toolbox), e = !(!c || !c.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = e), h = a.collapse, void 0 === h && (h = e), k = a.comments, void 0 === k && (k = e), l = a.disable, void 0 === l && (l = e), m = a.sounds, void 0 === m && (m = !0);
    var n = !!a.rtl,
        p = a.horizontalLayout;
    void 0 === p && (p = !1);
    var v = a.toolboxPosition;
    v = "end" === v ? !1 : !0;
    v = p ? v ? x.Hf : x.Jg : v == n ? x.ke : x.Gf;
    var y = a.scrollbars;
    void 0 === y && (y = e);
    var z = a.css;
    void 0 === z && (z = !0);
    var E = "https://blockly-demo.appspot.com/static/media/";
    a.media ? E = a.media : a.path && (E = a.path + "media/");
    var Ha = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
    this.u = n;
    this.Ge = Ha;
    this.collapse = h;
    this.ej = k;
    this.disable = l;
    this.readOnly = b;
    this.us = a.maxBlocks || Infinity;
    this.$d = E;
    this.Tr = e;
    this.Wr = y;
    this.Iw = f;
    this.Hw = m;
    this.Gw = z;
    this.Ce = p;
    this.Fe = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.$B = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.nC = 0 < c.spacing && !!b.snap;
    this.Pr = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.wy = void 0 === a.wheel ? !1 : !!a.wheel;
    b.wt = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Yj = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Zj = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.Qx = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.dc = b;
    this.Ea = v
}
Zf.prototype.Mb = null;
Zf.prototype.ug = null;
Zf.prototype.ub = null;

function $f(a) { a ? ("string" != typeof a && ("undefined" == typeof XSLTProcessor && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = x.F.md(a))) : a = null; return a };

function ag(a) { this.m = a;
    this.Tf = new bg(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.Bg = new bg(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.gj = x.i.B("rect", { height: I, width: I, "class": "blocklyScrollbarBackground" }, null);
    x.i.Nj(this.gj, a.ie) } ag.prototype.fb = null;
ag.prototype.A = function() { H(this.gj);
    this.fb = this.m = this.gj = null;
    this.Tf.A();
    this.Tf = null;
    this.Bg.A();
    this.Bg = null };
ag.prototype.resize = function() {
    var a = this.m.ub();
    if (a) {
        var b = !1,
            c = !1;
        this.fb && this.fb.za == a.za && this.fb.gb == a.gb && this.fb.zb == a.zb && this.fb.pb == a.pb ? (this.fb && this.fb.Oc == a.Oc && this.fb.Cb == a.Cb && this.fb.Nc == a.Nc || (b = !0), this.fb && this.fb.rc == a.rc && this.fb.Re == a.Re && this.fb.tc == a.tc || (c = !0)) : c = b = !0;
        b && this.Tf.resize(a);
        c && this.Bg.resize(a);
        this.fb && this.fb.za == a.za && this.fb.pb == a.pb || this.gj.setAttribute("x", this.Bg.Tc.x);
        this.fb && this.fb.gb == a.gb && this.fb.zb == a.zb || this.gj.setAttribute("y", this.Tf.Tc.y);
        this.fb = a
    }
};
ag.prototype.set = function(a, b) { var c = {};
    a *= this.Tf.mc;
    b *= this.Bg.mc; var e = this.Bg.Hd,
        f = a / this.Tf.Hd;
    c.x = isNaN(f) ? 0 : f;
    e = b / e;
    c.y = isNaN(e) ? 0 : e;
    this.m.ug(c);
    cg(this.Tf, a);
    cg(this.Bg, b) };

function bg(a, b, c, e) {
    this.m = a;
    this.wi = c || !1;
    this.Xg = b;
    this.fb = null;
    this.hj(e);
    this.Tc = new D(0, 0);
    a = I;
    b ? (this.ld.setAttribute("height", a), this.He.setAttribute("height", a), this.Pe.setAttribute("height", a - 5), this.Pe.setAttribute("y", 2.5), this.Vj = "width", this.Vs = "x") : (this.ld.setAttribute("width", a), this.He.setAttribute("width", a), this.Pe.setAttribute("width", a - 5), this.Pe.setAttribute("x", 2.5), this.Vj = "height", this.Vs = "y");
    this.Ns = x.O(this.ld, "mousedown", this, this.Ax);
    this.Os = x.O(this.Pe, "mousedown",
        this, this.Bx)
}
var dg, eg;
d = bg.prototype;
d.So = new D(0, 0);
d.tt = 0;
d.Hd = 0;
d.Uf = 0;
d.Hj = 0;
d.Tj = !0;
d.Mg = !0;
var I = 15;
Ab && (I = 25);
bg.prototype.A = function() { fg();
    x.Pa(this.Ns);
    this.Ns = null;
    x.Pa(this.Os);
    this.Os = null;
    H(this.He);
    this.m = this.Pe = this.ld = this.w = this.He = null };

function cg(a, b) { a.Hj = b;
    a.Pe.setAttribute(a.Vs, a.Hj) }

function gg(a, b) { a.Hd = b;
    a.He.setAttribute(a.Vj, a.Hd);
    a.ld.setAttribute(a.Vj, a.Hd) } ag.prototype.oh = function(a) { this.Tf.oh(a);
    this.Bg.oh(a) };

function hg(a, b, c) { a.Tc.x = b;
    a.Tc.y = c;
    x.i.kk(a.He, "translate(" + (a.Tc.x + a.So.x) + "px," + (a.Tc.y + a.So.y) + "px)") } d = bg.prototype;
d.resize = function(a) {
    if (!a && (a = this.m.ub(), !a)) return;
    var b = this.fb;
    if (!a || !b || a.za != b.za || a.gb != b.gb || a.Cb != b.Cb || a.Re != b.Re || a.zb != b.zb || a.pb != b.pb || a.Oc != b.Oc || a.rc != b.rc || a.Nc != b.Nc || a.tc != b.tc) {
        this.fb = a;
        if (this.Xg) {
            b = a.za - 1;
            this.wi && (b -= I);
            gg(this, Math.max(0, b));
            b = a.pb + .5;
            this.wi && this.m.u && (b += I);
            hg(this, b, a.zb + a.gb - I - .5);
            this.wi || this.pa(this.Hd < a.Oc);
            this.mc = this.Hd / a.Oc;
            if (-Infinity == this.mc || Infinity == this.mc || isNaN(this.mc)) this.mc = 0;
            this.Uf = Math.max(0, a.za * this.mc);
            this.Pe.setAttribute(this.Vj,
                this.Uf);
            cg(this, ig(this, (a.Cb - a.Nc) * this.mc))
        } else { b = a.gb - 1;
            this.wi && (b -= I);
            gg(this, Math.max(0, b));
            b = a.pb + .5;
            this.m.u || (b += a.za - I - 1);
            hg(this, b, a.zb + .5);
            this.wi || this.pa(this.Hd < a.rc);
            this.mc = this.Hd / a.rc; if (-Infinity == this.mc || Infinity == this.mc || isNaN(this.mc)) this.mc = 0;
            this.Uf = Math.max(0, a.gb * this.mc);
            this.Pe.setAttribute(this.Vj, this.Uf);
            cg(this, ig(this, (a.Re - a.tc) * this.mc)) } jg(this)
    }
};
d.hj = function(a) { var b = "blocklyScrollbar" + (this.Xg ? "Horizontal" : "Vertical");
    a && (b += " " + a);
    this.He = x.i.B("svg", { "class": b }, null);
    this.w = x.i.B("g", {}, this.He);
    this.ld = x.i.B("rect", { "class": "blocklyScrollbarBackground" }, this.w);
    a = Math.floor((I - 5) / 2);
    this.Pe = x.i.B("rect", { "class": "blocklyScrollbarHandle", rx: a, ry: a }, this.w);
    x.i.Nj(this.He, L(this.m)) };
d.Y = function() { return this.Tj };
d.oh = function(a) { var b = a != this.Mg;
    this.Mg = a;
    b && this.Ck() };
d.pa = function(a) { var b = a != this.Y(); if (this.wi) throw "Unable to toggle visibility of paired scrollbars.";
    this.Tj = a;
    b && this.Ck() };
d.Ck = function() { this.Mg && this.Y() ? this.He.setAttribute("display", "block") : this.He.setAttribute("display", "none") };
d.Ax = function(a) { Qf(this.m);
    x.Touch.$e();
    fg(); if (x.i.dg(a)) a.stopPropagation();
    else { var b = x.i.$j(a, L(this.m), kg(this.m));
        b = this.Xg ? b.x : b.y; var c = x.i.Fl(this.Pe);
        c = this.Xg ? c.x : c.y; var e = this.Hj,
            f = .95 * this.Uf;
        b <= c ? e -= f : b >= c + this.Uf && (e += f);
        cg(this, ig(this, e));
        jg(this);
        a.stopPropagation();
        a.preventDefault() } };
d.Bx = function(a) { Qf(this.m);
    fg();
    x.i.dg(a) ? a.stopPropagation() : (this.Wx = this.Hj, If(this.m), this.tt = this.Xg ? a.clientX : a.clientY, dg = x.O(document, "mouseup", this, this.Gx), eg = x.O(document, "mousemove", this, this.Cx), a.stopPropagation(), a.preventDefault()) };
d.Cx = function(a) { cg(this, ig(this, this.Wx + ((this.Xg ? a.clientX : a.clientY) - this.tt)));
    jg(this) };
d.Gx = function() { Rf(this.m);
    x.Touch.$e();
    fg() };

function fg() { x.Rb(!0);
    dg && (x.Pa(dg), dg = null);
    eg && (x.Pa(eg), eg = null) }

function ig(a, b) { return b = 0 >= b || isNaN(b) || a.Hd < a.Uf ? 0 : Math.min(b, a.Hd - a.Uf) }

function jg(a) { var b = a.Hj / a.Hd;
    isNaN(b) && (b = 0); var c = {};
    a.Xg ? c.x = b : c.y = b;
    a.m.ug(c) } d.set = function(a) { cg(this, ig(this, a * this.mc));
    jg(this) };

function lg(a, b) { lg.s.constructor.call(this, a, b);
    this.Yl = !1;
    this.Ad = {};
    this.st = this.dk = 0;
    this.Ro = null } w(lg, Lf);
d = lg.prototype;
d.oj = function(a) { lg.s.oj.call(this, a);!this.Xl && x.Touch.am(a) && mg(this, a) };
d.Lg = function(a) { this.Ro = x.O(document, "mousedown", null, this.Dw.bind(this), !0);
    this.nm = x.O(document, "mousemove", null, this.Gj.bind(this), !0);
    this.om = x.O(document, "mouseup", null, this.Pl.bind(this), !0);
    a.preventDefault();
    a.stopPropagation() };
d.Dw = function(a) {!this.sb() && x.Touch.am(a) && (mg(this, a), this.Yl && x.gg()) };
d.Gj = function(a) { if (this.sb()) x.Touch.Ep(a) && lg.s.Gj.call(this, a);
    else if (this.Yl) { if (x.Touch.am(a)) { this.Ad[x.Touch.Ml(a)] = ng(this, a); var b = Object.keys(this.Ad); if (2 == b.length) { b = tc(this.Ad[b[0]], this.Ad[b[1]]) / this.st; if (0 < this.dk && Infinity > this.dk) { var c = b - this.dk;
                    c = 0 < c ? 5 * c : 6 * c; var e = this.mb,
                        f = x.i.$j(a, L(e), kg(e));
                    e.zoom(f.x, f.y, c) } this.dk = b;
                a.preventDefault() } } x.gg() } else lg.s.Gj.call(this, a) };
d.Pl = function(a) { if (x.Touch.am(a) && !this.sb()) { var b = x.Touch.Ml(a);
        this.Ad[b] && delete this.Ad[b];
        2 > Object.keys(this.Ad).length && (this.Ad = {}, this.dk = 0) }!this.Yl || this.sb() ? x.Touch.Ep(a) && lg.s.Pl.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.A()) };
d.A = function() { lg.s.A.call(this);
    this.Ro && x.Pa(this.Ro) };

function mg(a, b) { a.Ad[x.Touch.Ml(b)] = ng(a, b); var c = Object.keys(a.Ad);
    2 == c.length && (a.st = tc(a.Ad[c[0]], a.Ad[c[1]]), a.Yl = !0, b.preventDefault()) }

function ng(a, b) { return a.mb ? new D(b.pageX ? b.pageX : b.changedTouches[0].pageX, b.pageY ? b.pageY : b.changedTouches[0].pageY) : null };

function og() { Eb.call(this);
    this.ef = new Wb(this);
    this.Vu = this;
    this.Uo = null } w(og, Eb);
og.prototype[Rb] = !0;
d = og.prototype;
d.Jl = function() { return this.Uo };
d.Em = function(a) { this.Uo = a };
d.addEventListener = function(a, b, c, e) { bc(this, a, b, c, e) };
d.removeEventListener = function(a, b, c, e) { jc(this, a, b, c, e) };
d.dispatchEvent = function(a) { var b, c = this.Jl(); if (c)
        for (b = []; c; c = c.Jl()) b.push(c);
    c = this.Vu; var e = a.type || a; if (q(a)) a = new Jb(a, c);
    else if (a instanceof Jb) a.target = a.target || c;
    else { var f = a;
        a = new Jb(e, c);
        db(a, f) } f = !0; if (b)
        for (var h = b.length - 1; !a.kh && 0 <= h; h--) { var k = a.currentTarget = b[h];
            f = pg(k, e, !0, a) && f } a.kh || (k = a.currentTarget = c, f = pg(k, e, !0, a) && f, a.kh || (f = pg(k, e, !1, a) && f)); if (b)
        for (h = 0; !a.kh && h < b.length; h++) k = a.currentTarget = b[h], f = pg(k, e, !1, a) && f; return f };
d.Za = function() { og.s.Za.call(this);
    this.removeAllListeners();
    this.Uo = null };
d.na = function(a, b, c, e) { return this.ef.add(String(a), b, !1, c, e) };
d.rs = function(a, b, c, e) { return this.ef.add(String(a), b, !0, c, e) };
d.pd = function(a, b, c, e) { return this.ef.remove(String(a), b, c, e) };
d.removeAllListeners = function(a) { return this.ef ? this.ef.removeAll(a) : 0 };

function pg(a, b, c, e) { b = a.ef.Dc[String(b)]; if (!b) return !0;
    b = b.concat(); for (var f = !0, h = 0; h < b.length; ++h) { var k = b[h]; if (k && !k.Ci && k.capture == c) { var l = k.listener,
                m = k.Ql || k.src;
            k.Wk && Yb(a.ef, k);
            f = !1 !== l.call(m, e) && f } } return f && 0 != e.ft } d.xj = function(a, b, c, e) { return this.ef.xj(String(a), b, c, e) };

function vf(a, b, c) { if (u(a)) c && (a = na(a, c));
    else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
    else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0) };

function qg(a, b, c, e) { this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e } d = qg.prototype;
d.dd = function() { return this.right - this.left };
d.di = function() { return this.bottom - this.top };
d.clone = function() { return new qg(this.top, this.right, this.bottom, this.left) };
d.contains = function(a) { return this && a ? a instanceof qg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1 };
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
d.translate = function(a, b) { a instanceof D ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, r(b) && (this.top += b, this.bottom += b)); return this };
d.scale = function(a, b) { b = r(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b; return this };

function rg(a, b, c, e) { this.left = a;
    this.top = b;
    this.width = c;
    this.height = e } d = rg.prototype;
d.clone = function() { return new rg(this.left, this.top, this.width, this.height) };
d.contains = function(a) { return a instanceof D ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height };
d.jf = function() { return new Sd(this.width, this.height) };
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
d.translate = function(a, b) { a instanceof D ? (this.left += a.x, this.top += a.y) : (this.left += a, r(b) && (this.top += b)); return this };
d.scale = function(a, b) { b = r(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b; return this };

function sg(a) { this.m = a } d = sg.prototype;
d.Kg = 47;
d.Ik = 44;
d.Hh = 16;
d.Vm = 20;
d.Pi = 20;
d.Pk = 10;
d.an = 0;
d.cn = 32;
d.ni = !1;
d.w = null;
d.Lm = null;
d.Bo = 0;
d.fg = 0;
d.Kb = 0;
d.yf = 0;
d.W = function() {
    this.w = x.i.B("g", { "class": "blocklyTrash" }, null);
    var a = String(Math.random()).substring(2);
    var b = x.i.B("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.w);
    x.i.B("rect", { width: this.Kg, height: this.Ik, y: this.Hh }, b);
    x.i.B("image", { width: x.qc.width, x: -this.an, height: x.qc.height, y: -this.cn, "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")" }, this.w).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.$d + x.qc.url);
    b = x.i.B("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.w);
    x.i.B("rect", { width: this.Kg, height: this.Hh }, b);
    this.Lm = x.i.B("image", { width: x.qc.width, x: -this.an, height: x.qc.height, y: -this.cn, "clip-path": "url(#blocklyTrashLidClipPath" + a + ")" }, this.w);
    this.Lm.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.$d + x.qc.url);
    x.O(this.w, "mouseup", this, this.click);
    this.ln();
    return this.w
};
d.I = function(a) { this.$i = this.Vm + a;
    tf(this, !1); return this.$i + this.Ik + this.Hh };
d.A = function() { this.w && (H(this.w), this.w = null);
    this.m = this.Lm = null;
    g.clearTimeout(this.Bo) };
d.position = function() { var a = this.m.ub();
    a && (this.m.u ? (this.Kb = this.Pi + I, a.Ea == x.Gf && (this.Kb += a.wl, this.m.ea && (this.Kb += a.pb))) : (this.Kb = a.za + a.pb - this.Kg - this.Pi - I, a.Ea == x.ke && (this.Kb -= a.wl)), this.yf = a.gb + a.zb - (this.Ik + this.Hh) - this.$i, a.Ea == x.Jg && (this.yf -= a.Ir), this.w.setAttribute("transform", "translate(" + this.Kb + "," + this.yf + ")")) };
d.ai = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(); return new rg(a.left + this.an - this.Pk, a.top + this.cn - this.Pk, this.Kg + 2 * this.Pk, this.Hh + this.Ik + 2 * this.Pk) };

function tf(a, b) { a.ni != b && (g.clearTimeout(a.Bo), a.ni = b, a.ln()) }
d.ln = function() { this.fg += this.ni ? .2 : -.2;
    this.fg = pc(this.fg, 0, 1); var a = 45 * this.fg;
    this.Lm.setAttribute("transform", "rotate(" + (this.m.u ? -a : a) + "," + (this.m.u ? 4 : this.Kg - 4) + "," + (this.Hh - 2) + ")");
    this.w.style.opacity = .4 + .4 * this.fg;
    0 < this.fg && 1 > this.fg && (this.Bo = vf(this.ln, 20, this)) };
d.close = function() { tf(this, !1) };
d.click = function() { var a = this.m.Yx - this.m.scrollX,
        b = this.m.$x - this.m.scrollY;
    Math.sqrt(a * a + b * b) > x.eq || console.log("TODO: Inspect trash.") };

function Sc(a, b, c, e) { this.o = a;
    this.name = b;
    this.type = c || "";
    this.li = e || x.i.ve();
    x.j.U(new Cc(this)) } Sc.prototype.aa = function() { return this.li };

function tg(a, b) { a = String(a.name).toLowerCase();
    b = String(b.name).toLowerCase(); return a < b ? -1 : a == b ? 0 : 1 };
x.H = {};
x.H.Ra = x.mq;
x.H.uq = function(a) { var b = Qc(a);
    a = Object.create(null); for (var c = 0; c < b.length; c++) { var e = b[c].Rf(); if (e)
            for (var f = 0; f < e.length; f++) { var h = e[f];
                h.aa() && (a[h.aa()] = h) } } b = []; for (var k in a) b.push(a[k]); return b };
x.H.VB = function() { console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.") };
x.H.Yu = function(a) { var b = Qc(a);
    a = {}; for (var c = 0; c < b.length; c++) { var e = b[c]; if (e.mw) { e = e.mw(); for (var f = 0; f < e.length; f++) a[e[f]] = e[f] } } b = []; for (var h in a) b.push(a[h]); return b };
x.H.Pf = function(a) { var b = [],
        c = G("button");
    c.setAttribute("text", x.g.NEW_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE");
    ug(a, function(a) { x.H.Uh(a.va) });
    b.push(c);
    a = x.H.Tn(a); return b = b.concat(a) };
x.H.Tn = function(a) {
    a = a.Bj("");
    a.sort(tg);
    var b = [];
    if (0 < a.length) {
        var c = a[0];
        if (x.D.variables_set) { var e = x.D.math_change ? 8 : 24;
            e = '<xml><block type="variables_set" gap="' + e + '">' + x.H.$h(c) + "</block></xml>";
            e = x.F.md(e).firstChild;
            b.push(e) } x.D.math_change && (e = x.D.variables_get ? 20 : 8, e = '<xml><block type="math_change" gap="' + e + '">' + x.H.$h(c) + '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>', e = x.F.md(e).firstChild, b.push(e));
        for (c = 0; e = a[c]; c++) x.D.variables_get &&
            (e = '<xml><block type="variables_get" gap="8">' + x.H.$h(e) + "</block></xml>", e = x.F.md(e).firstChild, b.push(e))
    }
    return b
};
x.H.jw = function(a) { a = a.ff(); var b = ""; if (a.length)
        for (var c = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !b;) { for (var h = !1, k = 0; k < a.length; k++)
                if (a[k].name.toLowerCase() == f) { h = !0; break } h ? (e++, 25 == e && (e = 0, c++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < c && (f += c)) : b = f } else b = "i"; return b };
x.H.Uh = function(a, b, c) {
    function e(c) { x.H.$s(x.g.NEW_VARIABLE_TITLE, c, function(c) { if (c) { var h = x.H.kx(c, a); if (h) { var k = c.toLowerCase(); if (h.type == f) var n = x.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
                    else n = x.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", k).replace("%2", h.type);
                    x.alert(n, function() { e(c) }) } else a.ad(c, f), b && b(c) } else b && b(null) }) } var f = c || "";
    e("") };
ba("Blockly.Variables.createVariableButtonHandler", x.H.Uh);
x.H.ad = x.H.Uh;
ba("Blockly.Variables.createVariable", x.H.ad);
x.H.hp = function(a, b) {
    function c(e) { var f = x.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
        x.H.$s(f, e, function(e) { if (e) { var f = x.H.lx(e, b.type, a);
                f ? (f = x.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", e.toLowerCase()).replace("%2", f.type), x.alert(f, function() { c(e) })) : a.nh(b.aa(), e) } }) } c("") };
x.H.$s = function(a, b, c) { x.prompt(a, b, function(a) { a && (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), a == x.g.RENAME_VARIABLE || a == x.g.NEW_VARIABLE) && (a = null);
        c(a) }) };
x.H.lx = function(a, b, c) { c = c.ta.ff();
    a = a.toLowerCase(); for (var e = 0, f; f = c[e]; e++)
        if (f.name.toLowerCase() == a && f.type != b) return f; return null };
x.H.kx = function(a, b) { b = b.ta.ff();
    a = a.toLowerCase(); for (var c = 0, e; e = b[c]; c++)
        if (e.name.toLowerCase() == a) return e; return null };
x.H.$h = function(a) { var b = a.type; "" == b && (b = "''"); return '<field name="VAR" id="' + a.aa() + '" variabletype="' + Ja(b) + '">' + Ja(a.name) + "</field>" };
x.H.Kr = function(a) { a = "<xml>" + x.H.$h(a) + "</xml>"; return x.F.md(a).firstChild };
x.H.Il = function(a, b, c, e) { var f = x.H.Qc(a, b, c, e);
    f || (f = x.H.Fv(a, b, c, e)); return f };
x.H.Qc = function(a, b, c, e) { var f = a.zi; if (b) { var h = a.Vd(b);!h && f && (h = f.Vd(b)) } else if (c) { if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.Qc(c, e);!h && f && (h = f.Qc(c, e)) } return h };
x.H.Fv = function(a, b, c, e) { var f = a.zi;
    c || (c = x.H.jw(a.Yd ? a.yh : a)); return f ? f.ad(c, e, b) : a.ad(c, e, b) };
x.H.Lr = function(a, b) { a = a.ff(); var c = []; if (b.length != a.length)
        for (var e = 0; e < a.length; e++) { var f = a[e]; - 1 == b.indexOf(f) && c.push(f) }
    return c };
x.wd = {};
x.wd.ux = function(a) { x.H.Uh(a.va, null, "String") };
x.wd.tx = function(a) { x.H.Uh(a.va, null, "Number") };
x.wd.sx = function(a) { x.H.Uh(a.va, null, "Colour") };
x.wd.Pf = function(a) {
    var b = [],
        c = G("button");
    c.setAttribute("text", x.g.NEW_STRING_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
    b.push(c);
    c = G("button");
    c.setAttribute("text", x.g.NEW_NUMBER_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
    b.push(c);
    c = G("button");
    c.setAttribute("text", x.g.NEW_COLOUR_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
    b.push(c);
    a.Sg.CREATE_VARIABLE_STRING = x.wd.ux;
    a.Sg.CREATE_VARIABLE_NUMBER = x.wd.tx;
    a.Sg.CREATE_VARIABLE_COLOUR =
        x.wd.sx;
    a = x.wd.Tn(a);
    return b = b.concat(a)
};
x.wd.Tn = function(a) { a = a.ff();
    a.sort(tg); var b = []; if (0 < a.length) { if (x.D.variables_set_dynamic) { var c = '<xml><block type="variables_set_dynamic" gap="24">' + x.H.$h(a[0]) + "</block></xml>";
            c = x.F.md(c).firstChild;
            b.push(c) } if (x.D.variables_get_dynamic)
            for (var e = 0; c = a[e]; e++) c = '<xml><block type="variables_get_dynamic" gap="8">' + x.H.$h(c) + "</block></xml>", c = x.F.md(c).firstChild, b.push(c) } return b };

function vg(a) { this.Vo = a;
    this.Xi = Object.create(null) } d = vg.prototype;
d.yo = null;
d.A = function() { this.Xi = this.Vo = null };
d.load = function(a, b) { if (a.length) { try { var c = new window.Audio } catch (l) { return } for (var e, f = 0; f < a.length; f++) { var h = a[f],
                k = h.match(/\.(\w+)$/); if (k && c.canPlayType("audio/" + k[1])) { e = new window.Audio(h); break } } e && e.play && (this.Xi[b] = e) } };
d.preload = function() { for (var a in this.Xi) { var b = this.Xi[a];
        b.volume = .01;
        b.play();
        b.pause(); if (ob || nb) break } };
d.play = function(a, b) { var c = this.Xi[a];
    c ? (a = new Date, null != this.yo && a - this.yo < x.Ju || (this.yo = a, c = vb && 9 === vb || ob || mb ? c : c.cloneNode(), c.volume = void 0 === b ? 1 : b, c.play())) : this.Vo && this.Vo.Jf.play(a, b) };
d = yf.prototype;
d.Ib = function() { return { width: this.dd(), height: this.di() } };
d.$ = function() {
    if (!this.pg) {
        var a = this.Ib();
        this.ij();
        this.w.appendChild(this.bd);
        this.xh = x.i.B("rect", { "class": "blocklyCommentHandleTarget", x: 0, y: 0 });
        this.w.appendChild(this.xh);
        this.xg = x.i.B("rect", { "class": "blocklyCommentTarget", x: 0, y: 0, rx: 3, ry: 3 });
        this.w.appendChild(this.xg);
        this.Nb = x.i.B("g", { "class": this.u ? "blocklyResizeSW" : "blocklyResizeSE" }, this.w);
        x.i.B("polygon", { points: "0,x x,x x,0".replace(/x/g, (8).toString()) }, this.Nb);
        x.i.B("line", { "class": "blocklyResizeLine", x1: 8 / 3, y1: 7, x2: 7, y2: 8 / 3 },
            this.Nb);
        x.i.B("line", { "class": "blocklyResizeLine", x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 }, this.Nb);
        this.kc() && (this.Nf = x.i.B("g", { "class": "blocklyCommentDeleteIcon" }, this.w), this.rr = x.i.B("circle", { "class": "blocklyDeleteIconShape", r: "7", cx: "7.5", cy: "7.5" }, this.Nf), x.i.B("line", { x1: "5", y1: "10", x2: "10", y2: "5", stroke: "#fff", "stroke-width": "2" }, this.Nf), x.i.B("line", { x1: "5", y1: "5", x2: "10", y2: "10", stroke: "#fff", "stroke-width": "2" }, this.Nf));
        wg(this, a.width, a.height);
        this.xb.value = this.$c;
        this.pg = !0;
        this.Nb && x.O(this.Nb,
            "mousedown", this, this.jp);
        this.kc() && (x.O(this.Nf, "mousedown", this, this.Rv), x.O(this.Nf, "mouseout", this, this.Sv), x.O(this.Nf, "mouseup", this, this.Tv))
    }
};
d.ij = function() { this.bd = x.i.B("foreignObject", { x: 0, y: 10, "class": "blocklyCommentForeignObject" }, null); var a = document.createElementNS(x.Df, "body");
    a.setAttribute("xmlns", x.Df);
    a.className = "blocklyMinimalBody"; var b = document.createElementNS(x.Df, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.xb = b;
    this.bd.appendChild(a);
    x.O(b, "wheel", this, function(a) { a.stopPropagation() });
    x.O(b, "change", this, function() { this.Id(b.value) }); return this.bd };
d.jp = function(a) { xg(this);
    x.i.dg(a) || (this.o.Jm(a, new D(this.o.u ? -this.ia : this.ia, this.Fa)), this.ui = x.O(document, "mouseup", this, this.Nx), this.Qo = x.O(document, "mousemove", this, this.kp), x.Rb());
    a.stopPropagation() };
d.Rv = function(a) { x.i.qb(this.rr, "blocklyDeleteIconHighlighted");
    a.stopPropagation() };
d.Sv = function() { x.i.Sb(this.rr, "blocklyDeleteIconHighlighted") };
d.Tv = function(a) { this.A(!0, !0);
    a.stopPropagation() };

function xg(a) { a.ui && (x.Pa(a.ui), a.ui = null);
    a.Qo && (x.Pa(a.Qo), a.Qo = null) }
d.Nx = function() { x.Touch.$e();
    xg(this) };
d.kp = function(a) { this.Uk = !1;
    a = Ae(this.o, a);
    wg(this, this.u ? -a.x : a.x, a.y) };

function wg(a, b, c) {
    b = Math.max(b, 45);
    c = Math.max(c, 30);
    a.ia = b;
    a.Fa = c;
    a.xk.setAttribute("width", b);
    a.xk.setAttribute("height", c);
    a.xg.setAttribute("width", b);
    a.xg.setAttribute("height", c);
    a.xh.setAttribute("width", b);
    a.xh.setAttribute("height", 10);
    a.u && (a.xk.setAttribute("transform", "scale(-1 1)"), a.xg.setAttribute("transform", "scale(-1 1)"));
    a.Nb && (a.u ? (a.Nb.setAttribute("transform", "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"), a.Nf.setAttribute("transform", "translate(" + (-b + 8) + ",-8) scale(-1 1)")) :
        (a.Nb.setAttribute("transform", "translate(" + (b - 8) + "," + (c - 8) + ")"), a.Nf.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
    b = a.Ib();
    a.bd.setAttribute("width", b.width);
    a.bd.setAttribute("height", b.height - 10);
    a.u && a.bd.setAttribute("x", -b.width);
    a.xb.style.width = b.width - 4 + "px";
    a.xb.style.height = b.height - 4 - 10 + "px"
}
d.xp = function() { var a = this;
    this.tj = !0;
    setTimeout(function() { a.xb.focus();
        x.i.qb(a.w, "blocklyFocused");
        x.i.qb(a.xg, "blocklyCommentTargetFocused");
        x.i.qb(a.xh, "blocklyCommentHandleTargetFocused") }, 0) };

function Af(a) { a.tj = !1;
    setTimeout(function() { a.xb.blur();
        x.i.Sb(a.w, "blocklyFocused");
        x.i.Sb(a.xg, "blocklyCommentTargetFocused");
        x.i.Sb(a.xh, "blocklyCommentHandleTargetFocused") }, 0) };

function yg(a) { this.fj = a;
    this.W() } d = yg.prototype;
d.bb = null;
d.re = null;
d.fj = null;
d.W = function() { this.bb || (this.bb = x.i.B("svg", { xmlns: x.dn, "xmlns:html": x.Df, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyWsDragSurface blocklyOverflowVisible" }, null), this.fj.appendChild(this.bb)) };
d.zf = function(a, b) { a = a.toFixed(0);
    b = b.toFixed(0);
    this.bb.style.display = "block";
    x.i.kk(this.bb, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.Ll = function() { return x.i.yc(this.bb) };
d.cj = function(a) { if (!a) throw "Couldn't clear and hide the drag surface: missing new surface."; var b = this.bb.childNodes[0],
        c = this.bb.childNodes[1]; if (!(b && c && x.i.Ur(b, "blocklyBlockCanvas") && x.i.Ur(c, "blocklyBubbleCanvas"))) throw "Couldn't clear and hide the drag surface.  A node was missing.";
    null != this.ae ? x.i.Nj(b, this.ae) : a.insertBefore(b, a.firstChild);
    x.i.Nj(c, b);
    this.bb.style.display = "none";
    x.i.kk(this.bb, "");
    this.ae = null };
x.F = {};
x.F.Tp = function(a, b) { var c = G("xml");
    c.appendChild(x.F.ty(x.H.uq(a))); for (var e = dd(a, !0), f = 0, h; h = e[f]; f++) c.appendChild(h.yk(b));
    a = cd(a, !0); for (f = 0; e = a[f]; f++) c.appendChild(x.F.pn(e, b)); return c };
x.F.ty = function(a) { for (var b = G("variables"), c = 0, e; e = a[c]; c++) { var f = G("variable", null, e.name);
        f.setAttribute("type", e.type);
        f.setAttribute("id", e.aa());
        b.appendChild(f) } return b };
x.F.pn = function(a, b) { var c;
    a.o.u && (c = a.o.dd());
    b = x.F.Lf(a, b); var e = a.la();
    b.setAttribute("x", Math.round(a.o.u ? c - e.x : e.x));
    b.setAttribute("y", Math.round(e.y)); return b };
x.F.ew = function(a) { null == a.getValue() && (a.Zg(), a.getValue()); var b = a.Qc(); if (!b) throw Error("Tried to serialize a variable field with no variable."); var c = G("field", null, b.name);
    c.setAttribute("name", a.name);
    c.setAttribute("id", b.aa());
    c.setAttribute("variabletype", b.type); return c };
x.F.fw = function(a) { if (a.name && a.Gg) { if (a.lh()) return x.F.ew(a); var b = G("field", null, a.getValue());
        b.setAttribute("name", a.name); return b } return null };
x.F.Zu = function(a, b) { for (var c = 0, e; e = a.X[c]; c++)
        for (var f = 0, h; h = e.La[f]; f++)(h = x.F.fw(h)) && b.appendChild(h) };
x.F.Lf = function(a, b) {
    var c = G(a.kb ? "shadow" : "block");
    c.setAttribute("type", a.type);
    b || c.setAttribute("id", a.id);
    if (a.Ka) { var e = a.Ka();
        e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e) } x.F.Zu(a, c);
    if (e = a.Bl()) { e = G("comment", null, e); if ("object" == typeof a.Ya) { e.setAttribute("pinned", a.Ya.Y()); var f = a.Ya.Ug();
            e.setAttribute("h", f.height);
            e.setAttribute("w", f.width) } c.appendChild(e) } a.data && (e = G("data", null, a.data), c.appendChild(e));
    f = 0;
    for (var h; h = a.X[f]; f++) {
        var k, l = !0;
        if (h.type != x.Se) {
            var m =
                J(h.connection);
            h.type == x.ab ? k = G("value") : h.type == x.yb && (k = G("statement"));
            e = h.connection.Me;
            !e || m && m.kb || k.appendChild(x.F.Lq(e));
            m && (k.appendChild(x.F.Lf(m, b)), l = !1);
            k.setAttribute("name", h.name);
            l || c.appendChild(k)
        }
    }
    a.Qw != a.$f && c.setAttribute("inline", a.$f);
    a.isCollapsed() && c.setAttribute("collapsed", !0);
    a.disabled && c.setAttribute("disabled", !0);
    a.kc() || a.kb || c.setAttribute("deletable", !1);
    a.Ee() || a.kb || c.setAttribute("movable", !1);
    Ke(a) || c.setAttribute("editable", !1);
    if (f = Lc(a)) k = G("next", null,
        x.F.Lf(f, b)), c.appendChild(k);
    e = a.L && a.L.Me;
    !e || f && f.kb || k.appendChild(x.F.Lq(e));
    return c
};
x.F.Lq = function(a) { for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else { for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && H(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && H(c)) } return a };
x.F.Cd = function(a) { return (new XMLSerializer).serializeToString(a) };
x.F.dC = function(a) { a = x.F.Cd(a).split("<"); for (var b = "", c = 1; c < a.length; c++) { var e = a[c]; "/" == e[0] && (b = b.substring(2));
        a[c] = b + "<" + e; "/" != e[0] && "/>" != e.slice(-2) && (b += "  ") } a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>"); return a.replace(/^\n/, "") };
x.F.md = function(a) { return (new DOMParser).parseFromString(a, "text/xml").firstChild };
x.F.ZB = function(a, b) { b.Tb(!1);
    b.clear();
    a = x.F.qe(a, b);
    b.Tb(!0); return a };
x.F.qe = function(a, b) {
    if (a instanceof ad) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.") }
    var e;
    b.u && (e = b.dd());
    c = [];
    zg();
    var f = a.childNodes.length,
        h = x.j.xc();
    h || x.j.R(!0);
    b.Tb && b.Tb(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l],
                n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !x.j.nc) {
                var p = x.F.Yh(m, b);
                c.push(p.id);
                var v = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    y = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(v) || isNaN(y) || p.moveBy(b.u ? e - v : v, y);
                k = !1
            } else if ("shadow" == n) k = !1;
            else if ("comment" == n)
                if (b.P) Df(m, b, e);
                else { var z = m,
                        E = b,
                        Ha = $c(z),
                        Tc = new Xc(E, Ha.content, Ha.Rr, Ha.It, Ha.id),
                        Ra = parseInt(z.getAttribute("x"), 10),
                        zd = parseInt(z.getAttribute("y"), 10);
                    isNaN(Ra) || isNaN(zd) || Tc.moveBy(Ra, zd);
                    Yc(Tc) }
            else if ("variables" == n) { if (k) x.F.bw(m, b);
                else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                k = !1 }
        }
    } finally {
        h ||
            x.j.R(!1), Ag()
    }
    b.Tb && b.Tb(!0);
    return c
};
x.F.WB = function(a, b) { if (b.hasOwnProperty("scale")) { var c = M; try { M = 0; var e = Bg(b) } finally { M = c } } a = x.F.qe(a, b); if (e && e.height) { c = e.y + e.height; var f = e.x; var h = Infinity,
            k = Infinity; for (e = 0; e < a.length; e++) { var l = Kc(b, a[e]).la();
            l.y < k && (k = l.y);
            l.x < h && (h = l.x) } c = c - k + 10;
        f -= h; var m;
        b.u && (m = b.dd()); for (e = 0; e < a.length; e++) Kc(b, a[e]).moveBy(b.u ? m - f : f, c) } return a };
x.F.Yh = function(a, b) { if (a instanceof ad) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.") } x.j.disable();
    c = b.ff(); try { var e = x.F.Nn(a, b),
            f = xc(e, !1); if (b.P) { Cg(e, !0); for (var h = f.length - 1; 0 <= h; h--) f[h].Bc(); for (h = f.length - 1; 0 <= h; h--) f[h].$(!1);
            setTimeout(function() { e.o && Cg(e, !1) }, 1);
            nf(e);
            Bf(b) } else
            for (h = f.length - 1; 0 <= h; h--) f[h].Zg() } finally { x.j.enable() } if (x.j.isEnabled()) { a = x.H.Lr(b, c); for (h = 0; h < a.length; h++) x.j.U(new Cc(a[h]));
        x.j.U(new x.j.Kk(e)) } return e };
x.F.bw = function(a, b) { for (var c = 0, e; e = a.children[c]; c++) { var f = e.getAttribute("type"),
            h = e.getAttribute("id");
        e = e.textContent; if (null == f) throw Error("Variable with id, " + h + " is without a type");
        b.ad(e, f, h) } };
x.F.Nn = function(a, b) {
    var c = null,
        e = a.getAttribute("type"),
        f = a.getAttribute("id");
    c = b.mf(e, f);
    var h = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++)
        if (3 != k.nodeType) {
            for (var l = h = null, m = 0, n; n = k.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? h = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !h && l && (h = l);
            m = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.ib && (c.ib(k), c.Bc && c.Bc());
                    break;
                case "comment":
                    c.tf(k.textContent);
                    var p = k.getAttribute("pinned");
                    p && !c.vb && setTimeout(function() {
                        c.Ya &&
                            c.Ya.pa && c.Ya.pa("true" == p)
                    }, 1);
                    h = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(h) && !isNaN(k) && c.Ya && c.Ya.pa && c.Ya.rg(h, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    x.F.aw(c, m, k);
                    break;
                case "value":
                case "statement":
                    k = K(c, m);
                    if (!k) { console.warn("Ignoring non-existent input " + m + " in block " + e); break } l && (k.connection.Me = l);
                    h && (h = x.F.Nn(h, b), h.M ? k.connection.connect(h.M) : h.Z && k.connection.connect(h.Z));
                    break;
                case "next":
                    l && c.L && (c.L.Me = l);
                    h && (h =
                        x.F.Nn(h, b), c.L.connect(h.Z));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(b = a.getAttribute("inline")) && c.bc("true" == b);
    (b = a.getAttribute("disabled")) && c.Jd("true" == b || "disabled" == b);
    (b = a.getAttribute("deletable")) && c.vp("true" == b);
    (b = a.getAttribute("movable")) && c.ph("true" == b);
    (b = a.getAttribute("editable")) && c.wp("true" == b);
    (b = a.getAttribute("collapsed")) && c.sg("true" == b);
    if ("shadow" == a.nodeName.toLowerCase()) { a = c.Qf(!1); for (f = 0; a[f]; f++);
        c.Bp(!0) }
    return c
};
x.F.$v = function(a, b, c, e) { var f = b.getAttribute("variabletype") || ""; "''" == f && (f = "");
    a = x.H.Il(a, b.id, c, f); if (null != f && f !== a.type) throw Error("Serialized variable type with id '" + a.aa() + "' had type " + a.type + ", and does not match variable field that references it: " + x.F.Cd(b) + ".");
    e.setValue(a.aa()) };
x.F.aw = function(a, b, c) { var e = Ce(a, b);
    e ? (a = a.o, b = c.textContent, e.lh() ? x.F.$v(a, c, b, e) : e.setValue(b)) : console.warn("Ignoring non-existent field " + b + " in block " + a.type) };
x.F.Uv = function(a) { for (var b = 0, c; c = a.childNodes[b]; b++)
        if ("next" == c.nodeName.toLowerCase()) { a.removeChild(c); break } };
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = x.F.Cd;
g.Blockly.Xml.domToWorkspace = x.F.qe;
g.Blockly.Xml.textToDom = x.F.md;
g.Blockly.Xml.workspaceToDom = x.F.Tp;
// Copyright 2015 Google Inc.  Apache License 2.0
function Dg(a) { this.m = a } d = Dg.prototype;
d.Kg = 32;
d.fq = 110;
d.Vm = 20;
d.Pi = 20;
d.w = null;
d.Kb = 0;
d.yf = 0;
d.W = function() { this.w = x.i.B("g", { "class": "blocklyZoom" }, null); var a = String(Math.random()).substring(2);
    Eg(this, a);
    Fg(this, a);
    Gg(this, a); return this.w };
d.I = function(a) { this.$i = this.Vm + a; return this.$i + this.fq };
d.A = function() { this.w && (H(this.w), this.w = null);
    this.m = null };
d.position = function() { var a = this.m.ub();
    a && (this.m.u ? (this.Kb = this.Pi + I, a.Ea == x.Gf && (this.Kb += a.wl, this.m.ea && (this.Kb += a.pb))) : (this.Kb = a.za + a.pb - this.Kg - this.Pi - I, a.Ea == x.ke && (this.Kb -= a.wl)), this.yf = a.gb + a.zb - this.fq - this.$i, a.Ea == x.Jg && (this.yf -= a.Ir), this.w.setAttribute("transform", "translate(" + this.Kb + "," + this.yf + ")")) };

function Eg(a, b) { var c = a.m,
        e = x.i.B("clipPath", { id: "blocklyZoomoutClipPath" + b }, a.w);
    x.i.B("rect", { width: 32, height: 32, y: 77 }, e);
    a = x.i.B("image", { width: x.qc.width, height: x.qc.height, x: -64, y: -15, "clip-path": "url(#blocklyZoomoutClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.$d + x.qc.url);
    x.O(a, "mousedown", null, function(a) { Qf(c);
        Hg(c, -1);
        x.Touch.$e();
        a.stopPropagation();
        a.preventDefault() }) }

function Fg(a, b) { var c = a.m,
        e = x.i.B("clipPath", { id: "blocklyZoominClipPath" + b }, a.w);
    x.i.B("rect", { width: 32, height: 32, y: 43 }, e);
    a = x.i.B("image", { width: x.qc.width, height: x.qc.height, x: -32, y: -49, "clip-path": "url(#blocklyZoominClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.$d + x.qc.url);
    x.O(a, "mousedown", null, function(a) { Qf(c);
        Hg(c, 1);
        x.Touch.$e();
        a.stopPropagation();
        a.preventDefault() }) }

function Gg(a, b) {
    var c = a.m,
        e = x.i.B("clipPath", { id: "blocklyZoomresetClipPath" + b }, a.w);
    x.i.B("rect", { width: 32, height: 32 }, e);
    a = x.i.B("image", { width: x.qc.width, height: x.qc.height, y: -92, "clip-path": "url(#blocklyZoomresetClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.$d + x.qc.url);
    x.O(a, "mousedown", null, function(a) {
        Qf(c);
        c.setScale(c.options.dc.wt);
        if (c.lb) { var b = c.ub(),
                e = (b.Oc - b.za) / 2;
            c.J && (e -= c.J.ia / 2);
            c.lb.set(e, (b.rc - b.gb) / 2) } else console.warn("Tried to scroll a non-scrollable workspace.");
        x.Touch.$e();
        a.stopPropagation();
        a.preventDefault()
    })
};
// Copyright 2014 Google Inc.  Apache License 2.0
function Ig(a, b, c) { Ig.s.constructor.call(this, a);
    this.ub = a.ub || Jg;
    this.ug = a.ug || Kg; var e = [];
    e[x.ab] = new We;
    e[x.Oh] = new We;
    e[x.yb] = new We;
    e[x.Ff] = new We;
    this.xn = e;
    b && (this.Ab = b);
    c && (this.Eh = c);
    this.Om = this.Eh && x.i.ag();
    this.Jj = [];
    this.Jf = new vg(a.Mb);
    this.Fd = this.options.Qr ? new Xf(a.Qr, a.Pr) : null;
    x.H && x.H.Pf && (this.Gi[x.mq] = x.H.Pf);
    x.wd && x.wd.Pf && (this.Gi[x.Pu] = x.wd.Pf);
    x.ra && x.ra.Pf && (this.Gi[x.kq] = x.ra.Pf) } w(Ig, ad);
d = Ig.prototype;
d.ym = null;
d.P = !0;
d.Yd = !1;
d.Rj = !1;
d.lp = !0;
d.scrollX = 0;
d.scrollY = 0;
d.Yx = 0;
d.$x = 0;
d.Cr = null;
d.scale = 1;
d.Uc = null;
d.lb = null;
d.Eb = null;
d.Ab = null;
d.Eh = null;
d.Om = !1;
d.Wl = !1;
d.ro = null;
d.ns = null;
d.Sg = {};
d.Gi = {};
d.Qq = null;
d.yh = null;
d.fs = null;
d.Oj = !0;

function kg(a) { if (a.Oj) { var b = L(a).getScreenCTM();
        b && (a.fs = b.inverse(), a.Oj = !1) } return a.fs }

function af(a, b) { var c = 0,
        e = 0,
        f = 1; if (ge(a.Ua, b) || ge(a.ie, b)) f = a.scale;
    do { var h = x.i.yc(b); if (b == a.Ua || b == a.ie) f = 1;
        c += h.x * f;
        e += h.y * f;
        b = b.parentNode } while (b && b != L(a)); return new D(c, e) }
d.W = function(a) {
    this.w = x.i.B("g", { "class": "blocklyWorkspace" }, null);
    a && (this.ld = x.i.B("rect", { height: "100%", width: "100%", "class": a }, this.w), "blocklyMainBackground" == a && this.Fd && (this.ld.style.fill = "url(#" + this.Fd.gi.id + ")"));
    this.Ua = x.i.B("g", { "class": "blocklyBlockCanvas" }, this.w);
    this.ie = x.i.B("g", { "class": "blocklyBubbleCanvas" }, this.w);
    a = I;
    if (this.options.Iw) { this.Uc = new sg(this); var b = this.Uc.W();
        this.w.insertBefore(b, this.Ua);
        a = this.Uc.I(a) } this.options.dc && this.options.dc.controls && (this.Fh =
        new Dg(this), b = this.Fh.W(), this.w.appendChild(b), this.Fh.I(a));
    this.Yd || (x.O(this.w, "mousedown", this, this.pf, !1, !0), this.options.dc && this.options.dc.wy && x.O(this.w, "wheel", this, this.Ix));
    this.options.Tr && (this.ea = new Lg(this));
    this.Fd && this.Fd.update(this.scale);
    Mg(this);
    return this.w
};
d.A = function() { this.P = !1;
    this.Eb && this.Eb.cancel();
    Ig.s.A.call(this);
    this.w && (H(this.w), this.w = null);
    this.ie = this.Ua = null;
    this.ea && (this.ea.A(), this.ea = null);
    this.J && (this.J.A(), this.J = null);
    this.Uc && (this.Uc.A(), this.Uc = null);
    this.lb && (this.lb.A(), this.lb = null);
    this.Fh && (this.Fh.A(), this.Fh = null);
    this.Jf && (this.Jf.A(), this.Jf = null);
    this.Fd && (this.Fd.A(), this.Fd = null);
    this.Gi && (this.Gi = null);
    this.Sg && (this.Sg = null);
    this.options.Mb || H(L(this).parentNode);
    this.ym && (x.Pa(this.ym), this.ym = null) };
d.mf = function(a, b) { return new N(this, a, b) };

function Ng(a, b) { var c = { nj: a.options.nj, Mb: a, u: a.u, Ge: a.options.Ge, Ce: a.Ce, Ea: a.options.Ea };
    a.J = null;
    a.J = a.Ce ? new Og(c) : new Pg(c);
    a.J.Sh = !1; return a.J.W(b) }

function Bf(a) { a.lp && a.P && (a.lb && a.lb.resize(), a.Oj = !0) } d.resize = function() { this.ea && this.ea.position();
    this.J && this.J.position();
    this.Uc && this.Uc.position();
    this.Fh && this.Fh.position();
    this.lb && this.lb.resize();
    this.Oj = !0;
    Mg(this) };

function Of(a) { var b = $d(document);
    sc(a.ns, b) || (a.ns = b, a.Oj = !0, Mg(a)) }

function L(a) { if (a.zq) return a.zq; for (var b = a.w; b;) { if ("svg" == b.tagName) return a.zq = b;
        b = b.parentNode } return null }
d.translate = function(a, b) { if (this.Om && this.Wl) this.Eh.zf(a, b);
    else { var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
        this.Ua.setAttribute("transform", c);
        this.ie.setAttribute("transform", c) } if (this.Ab) { c = this.Ab; var e = this.scale;
        c.qg = e;
        c.re.setAttribute("transform", "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")") } };

function Rf(a) { if (a.Om) { a.Wl = !1; var b = a.Eh.Ll();
        a.Eh.cj(a.w);
        b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
        a.Ua.setAttribute("transform", b);
        a.ie.setAttribute("transform", b) } }

function If(a) { if (a.Om && !a.Wl) { a.Wl = !0; var b = a.Ua.previousSibling,
            c = parseInt(L(a).getAttribute("width"), 10),
            e = parseInt(L(a).getAttribute("height"), 10),
            f = x.i.yc(a.Ua),
            h = a.Eh,
            k = a.Ua,
            l = a.ie,
            m = a.scale;
        h.ae = b;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.bb.setAttribute("width", c);
        h.bb.setAttribute("height", e);
        h.bb.appendChild(k);
        h.bb.appendChild(l);
        h.bb.style.display = "block";
        a.Eh.zf(f.x, f.y) } }
d.dd = function() { var a = this.ub(); return a ? a.za / this.scale : 0 };
d.pa = function(a) { this.lb && this.lb.oh(a);
    (this.J || this.ea && this.ea.J) && (this.J ? this.J : this.ea ? this.ea.J : null).oh(a);
    L(this).style.display = a ? "block" : "none";
    this.ea && (this.ea.Lc.style.display = a ? "block" : "none");
    a ? (this.$(), this.ea && this.ea.position()) : x.Rb(!0) };
d.$ = function() { for (var a = Qc(this), b = a.length - 1; 0 <= b; b--) a[b].$(!1) };

function Qg(a) {
    var b = x.dj;
    if (a.P && !(b.getElementsByTagName("block").length >= fd(a)))
        if (a.Eb && a.Eb.cancel(), "comment" == b.tagName.toLowerCase()) { x.j.disable(); try { var c = Df(b, a),
                    e = parseInt(b.getAttribute("x"), 10),
                    f = parseInt(b.getAttribute("y"), 10);
                isNaN(e) || isNaN(f) || (a.u && (e = -e), c.moveBy(e + 50, f + 50)) } finally { x.j.enable() } c.select() } else {
            x.j.disable();
            try {
                var h = x.F.Yh(b, a),
                    k = parseInt(b.getAttribute("x"), 10),
                    l = parseInt(b.getAttribute("y"), 10);
                if (!isNaN(k) && !isNaN(l)) {
                    a.u && (k = -k);
                    do {
                        b = !1;
                        var m = Qc(a);
                        c = 0;
                        for (var n; n = m[c]; c++) { var p = n.la(); if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) { b = !0; break } }
                        if (!b) { var v = h.xe(!1);
                            c = 0; for (var y; y = v[c]; c++)
                                if (y.closest(x.Yc, new D(k, l)).connection) { b = !0; break } } b && (k = a.u ? k - x.Yc : k + x.Yc, l += 2 * x.Yc)
                    } while (b);
                    h.moveBy(k, l)
                }
            } finally { x.j.enable() } x.j.isEnabled() && !h.kb && x.j.U(new x.j.Kk(h));
            h.select()
        }
}

function Rg(a) { if ((a = a.Yd ? a.yh : a) && !a.Eb && a.ea && a.ea.J) { a = a.ea; var b = a.Ld.Ae();
        b && b.me && a.J.show(b.me) } } d.nh = function(a, b) { Ig.s.nh.call(this, a, b);
    Rg(this) };
d.Of = function(a) { Ig.s.Of.call(this, a);
    Rg(this) };
d.ad = function(a, b, c) { a = Ig.s.ad.call(this, a, b, c);
    Rg(this); return a };

function Mg(a) { a.qr = a.Uc && a.w.parentNode ? a.Uc.ai() : null;
    a.pr = a.J ? a.J.ai() : a.ea ? a.ea.ai() : null }

function sf(a, b) { b = new D(b.clientX, b.clientY); return a.qr && a.qr.contains(b) ? x.Tm : a.pr && a.pr.contains(b) ? x.bq : x.aq } d.pf = function(a) { var b = this.ye(a);
    b && (b.mb || (b.mb = this), b.Sc = a, b.oj(a)) };
d.Jm = function(a, b) { a = x.i.$j(a, L(this), kg(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.Cr = uc(b, a) };

function Ae(a, b) { b = x.i.$j(b, L(a), kg(a));
    b.x /= a.scale;
    b.y /= a.scale; return vc(a.Cr, b) } d.sb = function() { return null != this.Eb && this.Eb.sb() };
d.Ix = function(a) { this.Eb && this.Eb.cancel(); var b = -a.deltaY / 50,
        c = x.i.$j(a, L(this), kg(this));
    this.zoom(c.x, c.y, b);
    a.preventDefault() };

function Bg(a) { var b = cd(a, !1);
    a = dd(a, !1);
    b = b.concat(a); if (!b.length) return { x: 0, y: 0, width: 0, height: 0 };
    a = b[0].Xn(); for (var c = 1; c < b.length; c++) { var e = b[c].Xn();
        e.od.x < a.od.x && (a.od.x = e.od.x);
        e.Nd.x > a.Nd.x && (a.Nd.x = e.Nd.x);
        e.od.y < a.od.y && (a.od.y = e.od.y);
        e.Nd.y > a.Nd.y && (a.Nd.y = e.Nd.y) } return { x: a.od.x, y: a.od.y, width: a.Nd.x - a.od.x, height: a.Nd.y - a.od.y } }
d.vv = function() { this.Tb(!1);
    x.j.R(!0); for (var a = cd(this, !0), b = 0, c = 0, e; e = a[c]; c++) { var f = e.la();
        e.moveBy(-f.x, b - f.y);
        Sg(e);
        b = e.la().y + e.Ib().height + 25 } x.j.R(!1);
    this.Tb(!0) };
d.Ei = function(a) {
    function b(a) { if (a.kc()) y = y.concat(xc(a, !1));
        else { a = a.Qf(!1); for (var c = 0; c < a.length; c++) b(a[c]) } }

    function c() { x.j.R(h); var a = y.shift();
        a && (a.o ? (a.A(!1, !0), setTimeout(c, 10)) : c());
        x.j.R(!1) }
    if (!this.options.readOnly && !this.Yd) {
        var e = [],
            f = cd(this, !0),
            h = x.i.ve(),
            k = this,
            l = {};
        l.text = x.g.UNDO;
        l.enabled = 0 < this.zh.length;
        l.hb = this.Rp.bind(this, !1);
        e.push(l);
        l = {};
        l.text = x.g.REDO;
        l.enabled = 0 < this.fk.length;
        l.hb = this.Rp.bind(this, !0);
        e.push(l);
        this.lb && (l = {}, l.text = x.g.CLEAN_UP, l.enabled = 1 < f.length,
            l.hb = this.vv.bind(this), e.push(l));
        if (this.options.collapse) { for (var m = l = !1, n = 0; n < f.length; n++)
                for (var p = f[n]; p;) p.isCollapsed() ? l = !0 : m = !0, p = Lc(p); var v = function(a) { for (var b = 0, c = 0; c < f.length; c++)
                    for (var e = f[c]; e;) setTimeout(e.sg.bind(e, a), b), e = Lc(e), b += 10 };
            m = { enabled: m };
            m.text = x.g.COLLAPSE_ALL;
            m.hb = function() { v(!0) };
            e.push(m);
            l = { enabled: l };
            l.text = x.g.EXPAND_ALL;
            l.hb = function() { v(!1) };
            e.push(l) }
        var y = [];
        for (n = 0; n < f.length; n++) b(f[n]);
        l = {
            text: 1 == y.length ? x.g.DELETE_BLOCK : x.g.DELETE_X_BLOCKS.replace("%1",
                String(y.length)),
            enabled: 0 < y.length,
            hb: function() { k.Eb && k.Eb.cancel();
                2 > y.length ? c() : x.confirm(x.g.DELETE_ALL_BLOCKS.replace("%1", y.length), function(a) { a && c() }) }
        };
        e.push(l);
        this.Qq && this.Qq(e);
        x.ca.show(a, e, this.u)
    }
};
d.Ft = function(a) { if (a = $f(a)) { if (!this.options.Fe) throw "Existing toolbox is null.  Can't create new toolbox."; if (a.getElementsByTagName("category").length) { if (!this.ea) throw "Existing toolbox has no categories.  Can't change mode.";
            this.options.Fe = a;
            this.ea.qm(a);
            Tg(this.ea) } else { if (!this.J) throw "Existing toolbox has categories.  Can't change mode.";
            this.options.Fe = a;
            this.J.show(a.childNodes) } } else if (this.options.Fe) throw "Can't nullify an existing toolbox."; };

function Qf(a) { if (a.options.Mb) Qf(a.options.Mb);
    else { x.hg = a;
        document.activeElement && document.activeElement.blur(); try { L(a).focus() } catch (b) { try { L(a).parentNode.setActive() } catch (c) { L(a).parentNode.focus() } } } }
d.zoom = function(a, b, c) { var e = this.options.dc.Qx,
        f = this.ub(),
        h = L(this).createSVGPoint();
    h.x = a;
    h.y = b;
    h = h.matrixTransform(this.Ua.getCTM().inverse());
    a = h.x;
    b = h.y;
    h = this.Ua;
    e = Math.pow(e, c);
    c = this.scale * e;
    c > this.options.dc.Yj ? e = this.options.dc.Yj / this.scale : c < this.options.dc.Zj && (e = this.options.dc.Zj / this.scale);
    this.scale != c && (this.lb && (a = h.getCTM().translate(a * (1 - e), b * (1 - e)).scale(e), this.scrollX = a.e - f.pb, this.scrollY = a.f - f.zb), this.setScale(c)) };

function Hg(a, b) { var c = a.ub();
    a.zoom(c.za / 2, c.gb / 2, b) } d.setScale = function(a) { this.options.dc.Yj && a > this.options.dc.Yj ? a = this.options.dc.Yj : this.options.dc.Zj && a < this.options.dc.Zj && (a = this.options.dc.Zj);
    this.scale = a;
    this.Fd && this.Fd.update(this.scale);
    this.lb ? this.lb.resize() : this.translate(this.scrollX, this.scrollY);
    x.Rb(!1);
    this.J && this.J.fp() };

function Ug(a) { var b = 0,
        c = 0;
    a && (b = a.dd(), c = a.di()); return { width: b, height: c } }

function Vg(a) { var b = Bg(a),
        c = a.scale;
    a = b.width * c; var e = b.height * c,
        f = b.x * c;
    b = b.y * c; return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e } }

function Jg() {
    var a = Ug(this.ea),
        b = Ug(this.J),
        c = x.At(L(this));
    if (this.ea)
        if (this.Ea == x.Hf || this.Ea == x.Jg) c.height -= a.height;
        else if (this.Ea == x.Gf || this.Ea == x.ke) c.width -= a.width;
    if (this.lb) { var e = Vg(this); var f = c.width,
            h = c.height,
            k = f / 2,
            l = h / 2,
            m = Math.min(e.left - k, e.right - f),
            n = Math.min(e.top - l, e.bottom - h);
        e = { left: m, top: n, height: Math.max(e.bottom + l, e.top + h) - n, width: Math.max(e.right + k, e.left + f) - m } } else e = Vg(this);
    f = 0;
    this.ea && this.Ea == x.Gf && (f = a.width);
    h = 0;
    this.ea && this.Ea == x.Hf && (h = a.height);
    return {
        rc: e.height,
        Oc: e.width,
        tc: e.top,
        Nc: e.left,
        gb: c.height,
        za: c.width,
        Re: -this.scrollY,
        Cb: -this.scrollX,
        zb: h,
        pb: f,
        pC: a.width,
        oC: a.height,
        wl: b.width,
        Ir: b.height,
        Ea: this.Ea
    }
}

function Kg(a) { if (!this.lb) throw "Attempt to set top level workspace scroll without scrollbars."; var b = this.ub();
    r(a.x) && (this.scrollX = -b.Oc * a.x - b.Nc);
    r(a.y) && (this.scrollY = -b.rc * a.y - b.tc);
    a = this.scrollX + b.pb;
    b = this.scrollY + b.zb;
    this.translate(a, b);
    this.Fd && this.Fd.moveTo(a, b) } d.Tb = function(a) { var b = !this.lp && a;
    this.lp = a;
    b && Bf(this) };
d.clear = function() { this.Tb(!1);
    Ig.s.clear.call(this);
    this.Tb(!0) };

function ug(a, b) { a.Sg.CREATE_VARIABLE = b }

function Wg(a, b) { return (a = a.Sg[b]) ? a : null }

function Xg(a, b) { return (a = a.Gi[b]) ? a : null } d.ye = function(a) { var b = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        c = this.Eb; return c ? b && c.Xr ? (console.warn("tried to start the same gesture twice"), c.cancel(), null) : c : b ? this.Eb = new lg(a, this) : null };
Ig.prototype.setVisible = Ig.prototype.pa;

function Yg(a) { Yg.s.constructor.call(this, null);
    this.at = a } w(Yg, Ge);
d = Yg.prototype;
d.Li = 0;
d.Gk = 0;
d.Pn = function(a) {
    x.i.B("rect", { "class": "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" }, a);
    x.i.B("path", { "class": "blocklyIconSymbol", d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z" }, a);
    x.i.B("circle", { "class": "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, a)
};
d.oo = function(a) { Ke(this.T) && Ge.prototype.oo.call(this, a) };
d.ij = function() { this.vk = x.i.B("svg", { x: se, y: se }, null); if (this.at.length)
        for (var a = G("xml"), b = 0, c; c = this.at[b]; b++) a.appendChild(G("block", { type: c }));
    else a = null;
    a = { Fe: a, Mb: this.T.o, $d: this.T.o.options.$d, u: this.T.u, Ea: this.T.u ? x.ke : x.Gf, Ce: !1, ub: this.nw.bind(this), ug: null };
    this.m = new Ig(a);
    this.m.Rj = !0;
    a = Ng(this.m, "g");
    b = this.m.W("blocklyMutatorBackground");
    b.insertBefore(a, this.m.Ua);
    this.vk.appendChild(b); return this.vk };
d.Cf = function() { this.T.vb || (Ke(this.T) ? this.Ac && x.i.Sb(this.Ac, "blocklyIconGroupReadonly") : (this.pa(!1), this.Ac && x.i.qb(this.Ac, "blocklyIconGroupReadonly")));
    Ge.prototype.Cf.call(this) };
d.wm = function() { var a = 2 * se,
        b = this.m.Ua.getBBox(); var c = this.T.u ? -b.x : b.width + b.x;
    b = b.height + 3 * a; if (this.m.J) { var e = this.m.J.gf();
        b = Math.max(b, e.rc + 20) } c += 3 * a; if (Math.abs(this.Li - c) > a || Math.abs(this.Gk - b) > a) this.Li = c, this.Gk = b, this.cb.rg(c + a, b + a), this.vk.setAttribute("width", this.Li), this.vk.setAttribute("height", this.Gk);
    this.T.u && this.m.Ua.setAttribute("transform", "translate(" + this.Li + ",0)");
    this.m.resize() };
d.pa = function(a) {
    if (a != this.Y())
        if (x.j.U(new Fc(this.T, "mutatorOpen", !a, a)), a) {
            this.cb = new pe(this.T.o, this.ij(), this.T.Kd, this.Yg, null, null);
            ye(this.cb, this.T.id);
            if (a = this.m.options.Fe) this.m.J.I(this.m), this.m.J.show(a.childNodes);
            this.sf = this.T.cf(this.m);
            a = xc(this.sf, !1);
            for (var b = 0, c; c = a[b]; b++) c.$();
            this.sf.ph(!1);
            this.sf.vp(!1);
            this.m.J ? (a = 2 * this.m.J.qa, b = this.m.J.ia + a) : b = a = 16;
            this.T.u && (b = -b);
            this.sf.moveBy(b, a);
            if (this.T.zm) {
                var e = this;
                this.T.zm(this.sf);
                this.Gm = function() { e.T.zm(e.sf) };
                this.T.o.xd(this.Gm)
            }
            this.wm();
            this.m.xd(this.xy.bind(this));
            this.Bf()
        } else this.vk = null, this.m.A(), this.sf = this.m = null, this.cb.A(), this.cb = null, this.Gk = this.Li = 0, this.Gm && (this.T.o.ng(this.Gm), this.Gm = null)
};
d.xy = function() { if (!this.m.sb())
        for (var a = cd(this.m, !1), b = 0, c; c = a[b]; b++) { var e = c.la(),
                f = c.Ib();
            20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y) }
    if (this.sf.o == this.m) { x.j.R(!0);
        c = this.T;
        a = (a = c.Ka()) && x.F.Cd(a);
        b = c.P;
        c.P = !1;
        c.af(this.sf);
        c.P = b;
        c.Bc();
        b = (b = c.Ka()) && x.F.Cd(b); if (a != b) { x.j.U(new x.j.Kc(c, "mutation", null, a, b)); var h = x.j.xc();
            setTimeout(function() { x.j.R(h);
                c.rb();
                x.j.R(!1) }, x.Jk) } c.P && c.$();
        this.m.sb() || this.wm();
        x.j.R(!1) } };
d.nw = function() { return { gb: this.Gk, za: this.Li, zb: 0, pb: 0 } };
d.A = function() { this.T.fd = null;
    Ge.prototype.A.call(this) };

function Zg(a, b, c) { if (!a || !a.v.o) return !1;
    c = K(b, c).connection; var e = J(a); return e && e != b || c.Ia == a ? !1 : (c.isConnected() && c.disconnect(), c.connect(a), !0) }

function $g(a) { var b = null; if (a && a.options) { var c = a.options.Mb;
        a.Yd ? c && c.options && (b = c.options.Mb) : c && (b = c) } return b } g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = Zg;
x.N = {};
x.N.Qm = {};
x.N.register = function(a, b) { if (!q(a) || Fa(a)) throw Error('Error: Invalid extension name "' + a + '"'); if (x.N.Qm[a]) throw Error('Error: Extension "' + a + '" is already registered.'); if (!u(b)) throw Error('Error: Extension "' + a + '" must be a function');
    x.N.Qm[a] = b };
x.N.tm = function(a, b) { if (!ha(b)) throw Error('Error: Mixin "' + a + '" must be a object');
    x.N.register(a, function() { ah(this, b) }) };
x.N.gp = function(a, b, c, e) { var f = 'Error when registering mutator "' + a + '": ';
    x.N.Dq(f, b.ib, "domToMutation");
    x.N.Dq(f, b.Ka, "mutationToDom"); var h = x.N.Fq(b, f); if (c && !u(c)) throw Error('Extension "' + a + '" is not a function');
    x.N.register(a, function() { h && this.vg(new Yg(e));
        ah(this, b);
        c && c.apply(this) }) };
x.N.apply = function(a, b, c) { var e = x.N.Qm[a]; if (!u(e)) throw Error('Error: Extension "' + a + '" not found.'); if (c) x.N.tv(a, b);
    else var f = x.N.$n(b);
    e.apply(b); if (c) x.N.qv('Error after applying mutator "' + a + '": ', b);
    else if (!x.N.jx(f, b)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.'); };
x.N.Dq = function(a, b, c) { if (!b) throw Error(a + 'missing required property "' + c + '"'); if ("function" != typeof b) throw Error(a + '" required property "' + c + '" must be a function'); };
x.N.tv = function(a, b) { if (x.N.$n(b).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + b.id); };
x.N.Fq = function(a, b) { var c = void 0 !== a.af,
        e = void 0 !== a.cf; if (c && e) { if ("function" != typeof a.af) throw Error(b + "compose must be a function."); if ("function" != typeof a.cf) throw Error(b + "decompose must be a function."); return !0 } if (c || e) throw Error(b + 'Must have both or neither of "compose" and "decompose"'); return !1 };
x.N.qv = function(a, b) { if ("function" != typeof b.ib) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"'); if ("function" != typeof b.Ka) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    x.N.Fq(b, a) };
x.N.$n = function(a) { var b = [];
    void 0 !== a.ib && b.push(a.ib);
    void 0 !== a.Ka && b.push(a.Ka);
    void 0 !== a.af && b.push(a.af);
    void 0 !== a.cf && b.push(a.cf); return b };
x.N.jx = function(a, b) { b = x.N.$n(b); if (b.length != a.length) return !1; for (var c = 0; c < b.length; c++)
        if (a[c] != b[c]) return !1; return !0 };
x.N.Vk = function(a, b) { var c = []; "object" == typeof document && x.i.gt(function() { for (var a in b) x.i.Eq(b[a]) }); return function() { this.type && -1 === c.indexOf(this.type) && (x.N.rv(this, a, b), c.push(this.type));
        this.oa(function() { var e = F(this, a),
                f = b[e];
            null == f ? -1 === c.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = x.i.oc(f); return f }.bind(this)) } };
x.N.rv = function(a, b, c) { var e = Ce(a, b); if (!u(e.dh)) { e = e.getOptions(); for (var f = 0; f < e.length; ++f) { var h = e[f][1];
            null == c[h] && console.warn("No tooltip mapping for value " + h + " of field " + b + " of block type " + a.type) } } };
x.N.rn = function(a) { "object" == typeof document && x.i.gt(function() { x.i.Eq(a) }); return function() { this.oa(function() { var b = Ce(this, "VAR"); return x.i.oc(a).replace("%1", b ? b.Jb() : "") }.bind(this)) } };
x.N.dw = function() { this.iy = this.nd;
    this.oa(function() { var a = this.getParent(); return a && bh(a) && a.nd || this.iy }.bind(this)) };
x.N.register("parent_tooltip_when_inline", x.N.dw);
var ch = {};

function dh(a, b) { var c = Vd(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" }

function eh(a, b) { return dh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b] }

function Wf() { var a = document,
        b = a.body;
    a = a.documentElement; return new D(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop) }

function fh(a) { try { var b = a.getBoundingClientRect() } catch (c) { return { left: 0, top: 0, right: 0, bottom: 0 } } A && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop); return b }

function gh(a) { var b = Vd(a),
        c = new D(0, 0); var e = b ? Vd(b) : document;
    e = !A || 9 <= Number(vb) || "CSS1Compat" == Td(e).Sd.compatMode ? e.documentElement : e.body; if (a == e) return c;
    a = fh(a);
    b = $d(Td(b).Sd);
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
        e = C && !b && !c; return aa(b) && !e || !a.getBoundingClientRect ? new Sd(b, c) : (a = fh(a), new Sd(a.right - a.left, a.bottom - a.top)) }

function kh(a, b) { a.style.display = b ? "" : "none" }
var lh = B ? "MozUserSelect" : C || jb ? "WebkitUserSelect" : null;

function mh(a, b, c) { c = c ? null : a.getElementsByTagName("*"); if (lh) { if (b = b ? "none" : "", a.style && (a.style[lh] = b), c) { a = 0; for (var e; e = c[a]; a++) e.style && (e.style[lh] = b) } } else if (A || ib)
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

function ph(a, b) { this.ua = new Sd(0, 25);
    this.setValue(a);
    this.Bh = b }
var qh = {};

function rh(a, b) { if (!q(a) || Fa(a)) throw Error('Invalid field type "' + a + '"'); if (!ha(b) || !u(b.ha)) throw Error('Field "' + b + '" must have a fromJson function');
    qh[a] = b }
var sh = null,
    th = 0;
d = ph.prototype;
d.name = void 0;
d.vs = 50;
d.xa = "";
d.v = null;
d.Va = !0;
d.Bh = null;
d.Gg = !0;
d.Cp = function(a) { this.v = a };
d.I = function() { this.$a || (this.$a = x.i.B("g", {}, null), this.Va || (this.$a.style.display = "none"), this.zd = x.i.B("rect", { rx: 4, ry: 4, x: -5, y: 0, height: 16 }, this.$a), this.Ba = x.i.B("text", { "class": "blocklyText", y: this.ua.height - 12.5 }, this.$a), this.Cf(), this.v.ga().appendChild(this.$a), this.hm = x.O(this.$a, "mousedown", this, this.pf), this.Je()) };
d.Zg = function() {};
d.A = function() { this.hm && (x.Pa(this.hm), this.hm = null);
    this.v = null;
    H(this.$a);
    this.Bh = this.zd = this.Ba = this.$a = null };
d.Cf = function() { var a = this.$a;
    this.Gg && a && (Ke(this.v) ? (x.i.qb(a, "blocklyEditableText"), x.i.Sb(a, "blocklyNonEditableText"), this.$a.style.cursor = this.Mk) : (x.i.qb(a, "blocklyNonEditableText"), x.i.Sb(a, "blocklyEditableText"), this.$a.style.cursor = "")) };
d.Y = function() { return this.Va };
d.pa = function(a) { if (this.Va != a) { this.Va = a; var b = this.ga();
        b && (b.style.display = a ? "block" : "none", this.Je()) } };

function uh(a, b) { a.Bh = b } d.un = function(a) { return a };

function De(a, b) { var c = a.un(b); if (null === c) return null;
    void 0 !== c && (b = c); if (c = a.Bh) { a = c.call(a, b); if (null === a) return null;
        void 0 !== a && (b = a) } return b } d.ga = function() { return this.$a };
d.Je = function() { this.Va ? (this.Ba.textContent = vh(this), this.Fk()) : this.ua.width = 0 };
d.Fk = function() { var a = wh(this.Ba);
    this.zd && this.zd.setAttribute("width", a + 10);
    this.ua.width = a };

function wh(a) { var b = a.textContent + "\n" + a.className.baseVal,
        c; if (sh && (c = sh[b])) return c; try { c = A || jb ? a.getBBox().width : a.getComputedTextLength() } catch (e) { return 8 * a.textContent.length } sh && (sh[b] = c); return c }

function zg() { th++;
    sh || (sh = {}) }

function Ag() { th--;
    th || (sh = null) } d.jf = function() { this.ua.width || this.Je(); return this.ua };

function xh(a) { var b = a.zd.getBBox(),
        c = b.height * a.v.o.scale;
    b = b.width * a.v.o.scale;
    a = gh(a.zd); return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b } }

function vh(a) { var b = a.xa; if (!b) return "\u00a0";
    b.length > a.vs && (b = b.substring(0, a.vs - 2) + "\u2026");
    b = b.replace(/\s/g, "\u00a0");
    a.v.u && (b += "\u200f"); return b } d.Jb = function() { return this.xa };
d.Pb = function(a) { null !== a && (a = String(a), a !== this.xa && (this.xa = a, this.uj())) };
d.uj = function() { this.ua.width = 0;
    this.v && this.v.P && (this.v.$(), this.v.rb()) };
d.getValue = function() { return this.Jb() };
d.setValue = function(a) { if (null !== a) { var b = this.getValue();
        b != a && (this.v && x.j.isEnabled() && x.j.U(new x.j.Kc(this.v, "field", this.name, b, a)), this.Pb(a)) } };
d.pf = function(a) { this.v && this.v.o && (a = this.v.o.ye(a)) && !a.vh && (a.vh = this) };
d.oa = function() {};
d.lh = function() { return !1 };

function yh(a, b) { this.ua = new Sd(0, 17.5);
    this.Iq = b;
    this.setValue(a) } w(yh, ph);
yh.ha = function(a) { var b = x.i.oc(a.text); return new yh(b, a["class"]) };
d = yh.prototype;
d.Gg = !1;
d.I = function() { this.Ba || (this.Ba = x.i.B("text", { "class": "blocklyText", y: this.ua.height - 5 }, null), this.Iq && x.i.qb(this.Ba, this.Iq), this.Va || (this.Ba.style.display = "none"), this.v.ga().appendChild(this.Ba), this.Ba.nd = this.v, x.C.Lg(this.Ba), this.Je()) };
d.A = function() { H(this.Ba);
    this.Ba = null };
d.ga = function() { return this.Ba };
d.oa = function(a) { this.Ba.nd = a };
rh("field_label", yh);

function zh(a, b, c, e) { if (a != x.Se && !b) throw "Value inputs and statement inputs must have non-empty name.";
    this.type = a;
    this.name = b;
    this.v = c;
    this.connection = e;
    this.La = [] } d = zh.prototype;
d.align = x.Mi;
d.Va = !0;

function O(a, b, c) { Ah(a, a.La.length, b, c); return a }

function Ah(a, b, c, e) { if (0 > b || b > a.La.length) throw Error("index " + b + " out of bounds."); if (!c && !e) return b;
    q(c) && (c = new yh(c));
    c.Cp(a.v);
    a.v.P && c.I();
    c.name = e;
    c.$o && (b = Ah(a, b, c.$o));
    a.La.splice(b, 0, c);++b;
    c.Mp && (b = Ah(a, b, c.Mp));
    a.v.P && (a.v.$(), a.v.rb()); return b }

function Bh(a, b) { for (var c = 0, e; e = a.La[c]; c++)
        if (e.name === b) { e.A();
            a.La.splice(c, 1);
            a.v.P && (a.v.$(), a.v.rb()); break } } d.Y = function() { return this.Va };
d.pa = function(a) { var b = []; if (this.Va == a) return b; for (var c = (this.Va = a) ? "block" : "none", e = 0, f; f = this.La[e]; e++) f.pa(a); if (this.connection) { if (a) b = kf(this.connection);
        else if (e = this.connection, lf(e, !0), e.Ia)
            for (e = xc(J(e), !1), f = 0; f < e.length; f++) { for (var h = e[f], k = h.xe(!0), l = 0; l < k.length; l++) lf(k[l], !0);
                h = qf(h); for (l = 0; l < h.length; l++) h[l].pa(!1) }
        if (e = J(this.connection)) e.ga().style.display = c, a || (e.P = !1) } return b };
d.Ta = function(a) { if (!this.connection) throw "This input does not have a connection.";
    this.connection.Ta(a); return this };

function Ch(a, b) { a.align = b;
    a.v.P && a.v.$(); return a } d.I = function() { if (this.v.o.P)
        for (var a = 0; a < this.La.length; a++) this.La[a].I() };
d.A = function() { for (var a = 0, b; b = this.La[a]; a++) b.A();
    this.connection && this.connection.A();
    this.v = null };

function Le(a) { Le.s.constructor.call(this, a);
    He(this);
    this.xa = {} } w(Le, Ge);
d = Le.prototype;
d.Oq = !1;
d.Pn = function(a) { x.i.B("path", { "class": "blocklyIconShape", d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z" }, a);
    x.i.B("path", { "class": "blocklyIconSymbol", d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z" }, a);
    x.i.B("rect", { "class": "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" }, a) };
d.pa = function(a) {
    if (a != this.Y())
        if (x.j.U(new Fc(this.T, "warningOpen", !a, a)), a) {
            var b = this.Jb();
            a = x.i.B("text", { "class": "blocklyText blocklyBubbleText", y: se }, null);
            b = b.split("\n");
            for (var c = 0; c < b.length; c++) x.i.B("tspan", { dy: "1em", x: se }, a).appendChild(document.createTextNode(b[c]));
            this.cb = new pe(this.T.o, a, this.T.Kd, this.Yg, null, null);
            ye(this.cb, this.T.id);
            if (this.T.u) { b = a.getBBox().width;
                c = 0; for (var e; e = a.childNodes[c]; c++) e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + se) } this.Bf();
            a =
                this.cb.Ug();
            this.cb.rg(a.width, a.height)
        } else this.cb.A(), this.cb = null
};
d.Pb = function(a, b) { this.xa[b] != a && (a ? this.xa[b] = a : delete this.xa[b], this.Y() && (this.pa(!1), this.pa(!0))) };
d.Jb = function() { var a = [],
        b; for (b in this.xa) a.push(this.xa[b]); return a.join("\n") };
d.A = function() { this.T.rd = null;
    Ge.prototype.A.call(this) };

function ed(a, b, c) {
    "undefined" !== typeof Dh.prototype[b] && console.warn('FUTURE ERROR: Block prototypeName "' + b + '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.');
    this.id = c && !Kc(a, c) ? c : x.i.ve();
    a.on[this.id] = this;
    this.Z = this.L = this.M = null;
    this.X = [];
    this.$f = void 0;
    this.disabled = !1;
    this.nd = "";
    this.contextMenu = !0;
    this.kg = null;
    this.Ye = [];
    this.Er = this.ak = this.mj = !0;
    this.ne =
        this.kb = !1;
    this.Ya = null;
    this.sd = new D(0, 0);
    this.o = a;
    this.vb = a.Yd;
    this.u = a.u;
    if (b) { this.type = b;
        b = x.D[b]; for (var e in b) this[e] = b[e] } a.Hi.push(this);
    u(this.I) && this.I();
    this.Qw = this.$f;
    if (x.j.isEnabled()) {
        (a = x.j.xc()) || x.j.R(!0); try { x.j.U(new x.j.Kk(this)) } finally { a || x.j.R(!1) } }
    if (u(this.onchange)) { if ((a = this.onchange) && !u(a)) throw Error("onchange must be a function.");
        this.bk && this.o.ng(this.bk); if (this.onchange = a) this.bk = a.bind(this), this.o.xd(this.bk) }
}
d = ed.prototype;
d.data = null;
d.oe = "#000000";
d.A = function(a) { if (this.o) { this.bk && this.o.ng(this.bk);
        Fe(this, a);
        x.j.isEnabled() && x.j.U(new x.j.Rt(this));
        x.j.disable(); try { this.o && (bd(this.o, this), delete this.o.on[this.id], this.o = null);
            x.selected == this && (x.selected = null); for (var b = this.Ye.length - 1; 0 <= b; b--) this.Ye[b].A(!1);
            b = 0; for (var c; c = this.X[b]; b++) c.A();
            this.X.length = 0; var e = this.xe(!0); for (b = 0; b < e.length; b++) { var f = e[b];
                f.isConnected() && f.disconnect();
                e[b].A() } } finally { x.j.enable() } } };
d.Zg = function() { for (var a = 0, b; b = this.X[a]; a++)
        for (var c = 0, e; e = b.La[c]; c++) e.Zg && e.Zg() };

function Fe(a, b) { if (a.M) a.M.isConnected() && a.M.disconnect();
    else if (a.Z) { var c = null;
        a.Z.isConnected() && (c = a.Z.Ia, a.Z.disconnect()); var e = Lc(a);
        b && e && (a = a.L.Ia, a.disconnect(), c && Oe(c, a) && c.connect(a)) } } d.xe = function() { var a = [];
    this.M && a.push(this.M);
    this.Z && a.push(this.Z);
    this.L && a.push(this.L); for (var b = 0, c; c = this.X[b]; b++) c.connection && a.push(c.connection); return a };
d.rb = function() { console.warn("Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead.") };
d.getParent = function() { return this.kg };

function Eh(a) { do { var b = a;
        a = a.getParent(); if (!a) return null } while (Lc(a) == b); return a }

function Lc(a) { return a.L && J(a.L) }

function df(a) { var b = a;
    do a = b, b = a.kg; while (b); return a } d.Qf = function(a) { if (!a) return this.Ye;
    a = []; for (var b = 0, c; c = this.X[b]; b++) c.connection && (c = J(c.connection)) && a.push(c);
    (b = Lc(this)) && a.push(b); return a };
d.qh = function(a) { if (a != this.kg) { if (this.kg) { ya(this.kg.Ye, this); if (this.Z && this.Z.isConnected()) throw "Still connected to previous block."; if (this.M && this.M.isConnected()) throw "Still connected to parent block.";
            this.kg = null } else bd(this.o, this);
        (this.kg = a) ? a.Ye.push(this): this.o.Hi.push(this) } };

function xc(a, b) { var c = [a];
    a = a.Qf(b); for (var e, f = 0; e = a[f]; f++) c.push.apply(c, xc(e, b)); return c } d.kc = function() { return this.mj && !this.kb && !(this.o && this.o.options.readOnly) };
d.vp = function(a) { this.mj = a };
d.Ee = function() { return this.ak && !this.kb && !(this.o && this.o.options.readOnly) };
d.ph = function(a) { this.ak = a };
d.Bp = function(a) { this.kb = a };

function Ke(a) { return a.Er && !(a.o && a.o.options.readOnly) } d.wp = function(a) { this.Er = a;
    a = 0; for (var b; b = this.X[a]; a++)
        for (var c = 0, e; e = b.La[c]; c++) e.Cf() };

function Cg(a, b) { if (!b && a.isCollapsed()) { if (a.M && lf(a.M, b), a.Z && lf(a.Z, b), a.L) { lf(a.L, b); var c = J(a.L);
            c && Cg(c, b) } } else { a = a.xe(!0); for (var e = 0; c = a[e]; e++) lf(c, b), Se(c) && (c = J(c)) && Cg(c, b) } } d.oa = function(a) { this.nd = a };
d.Ha = function(a) { var b = q(a) ? x.i.oc(a) : a,
        c = Number(b); if (!isNaN(c) && 0 <= c && 360 >= c) this.oe = x.bs(c);
    else if (q(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.oe = b;
    else throw c = 'Invalid colour: "' + b + '"', a != b && (c += ' (from "' + a + '")'), c; };

function Ce(a, b) { for (var c = 0, e; e = a.X[c]; c++)
        for (var f = 0, h; h = e.La[f]; f++)
            if (h.name === b) return h; return null } d.eo = function() { for (var a = [], b = 0, c; c = this.X[b]; b++)
        for (var e = 0, f; f = c.La[e]; e++) f.lh() && a.push(f.getValue()); return a };
d.Rf = function() { for (var a = [], b = 0, c; c = this.X[b]; b++)
        for (var e = 0, f; f = c.La[e]; e++) f.lh() && (f = this.o.Vd(f.getValue())) && a.push(f); return a };
d.Nm = function(a) { for (var b = 0, c; c = this.X[b]; b++)
        for (var e = 0, f; f = c.La[e]; e++) f.lh() && a.aa() == f.getValue() && f.Pb(a.name) };
d.ik = function(a, b) { for (var c = 0, e; e = this.X[c]; c++)
        for (var f = 0, h; h = e.La[f]; f++) h.lh() && a == h.getValue() && h.setValue(b) };

function F(a, b) { return (a = Ce(a, b)) ? a.getValue() : null }

function Fh(a, b, c) { Ce(a, c).setValue(b) }
d.jd = function(a, b) { a ? (void 0 === b && (b = null), this.Z || (this.Z = this.Wj(x.Ff)), this.Z.Ta(b)) : this.Z && (this.Z.A(), this.Z = null) };
d.hd = function(a, b) { a ? (void 0 === b && (b = null), this.L || (this.L = this.Wj(x.yb)), this.L.Ta(b)) : this.L && (this.L.A(), this.L = null) };
d.Fc = function(a, b) { a ? (void 0 === b && (b = null), this.M || (this.M = this.Wj(x.Oh)), this.M.Ta(b)) : this.M && (this.M.A(), this.M = null) };
d.bc = function(a) { this.$f != a && (x.j.U(new x.j.Kc(this, "inline", null, this.$f, a)), this.$f = a) };

function bh(a) { if (void 0 != a.$f) return a.$f; for (var b = 1; b < a.X.length; b++)
        if (a.X[b - 1].type == x.Se && a.X[b].type == x.Se) return !1; for (b = 1; b < a.X.length; b++)
        if (a.X[b - 1].type == x.ab && a.X[b].type == x.Se) return !0; return !1 } d.Jd = function(a) { this.disabled != a && (x.j.U(new x.j.Kc(this, "disabled", null, this.disabled, a)), this.disabled = a) };

function Gh(a) { for (a = Eh(a); a;) { if (a.disabled) return !0;
        a = Eh(a) } return !1 } d.isCollapsed = function() { return this.ne };
d.sg = function(a) { this.ne != a && (x.j.U(new x.j.Kc(this, "collapsed", null, this.ne, a)), this.ne = a) };
d.toString = function(a, b) { var c = [],
        e = b || "?"; if (this.ne) c.push(K(this, "_TEMP_COLLAPSED_INPUT").La[0].xa);
    else
        for (var f = 0, h; h = this.X[f]; f++) { for (var k = 0, l; l = h.La[k]; k++) l instanceof Hh && !l.getValue() ? c.push(e) : c.push(l.Jb());
            h.connection && ((h = J(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e)) } c = Ia(c.join(" ")) || "???";
    a && (b = c, b.length > a && (b = b.substring(0, a - 3) + "..."), c = b); return c };

function P(a, b) { return a.Zi(x.ab, b) }

function Ih(a, b) { return a.Zi(x.yb, b) }

function Q(a, b) { return a.Zi(x.Se, b || "") }

function Jh(a, b) {
    var c = b.type ? 'Block "' + b.type + '": ' : "";
    if ("colour" in b)
        if (void 0 === b.colour) console.warn(c + "Undefined color value.");
        else { var e = b.colour; try { a.Ha(e) } catch (z) { console.warn(c + "Illegal color value: ", e) } } for (e = 0; void 0 !== b["message" + e];) {
        for (var f = a, h = b["args" + e] || [], k = b["lastDummyAlign" + e], l = x.i.gy(b["message" + e]), m = [], n = 0, p = [], v = 0; v < l.length; v++) {
            var y = l[v];
            if ("number" == typeof y) {
                if (0 >= y || y > h.length) throw Error('Block "' + f.type + '": Message index %' + y + " out of range.");
                if (m[y]) throw Error('Block "' +
                    f.type + '": Message index %' + y + " duplicated.");
                m[y] = !0;
                n++;
                p.push(h[y - 1])
            } else(y = y.trim()) && p.push(y)
        }
        if (n != h.length) throw Error('Block "' + f.type + '": Message does not reference all ' + h.length + " arg(s).");
        p.length && ("string" == typeof p[p.length - 1] || Ea(p[p.length - 1].type, "field_")) && (v = { type: "input_dummy" }, k && (v.align = k), p.push(v));
        k = { LEFT: x.Mi, RIGHT: x.Fg, CENTRE: x.Hk };
        h = [];
        for (v = 0; v < p.length; v++)
            if (m = p[v], "string" == typeof m) h.push([m, void 0]);
            else {
                l = y = null;
                do
                    if (n = !1, "string" == typeof m) y = new yh(m);
                    else switch (m.type) {
                        case "input_value":
                            l =
                                P(f, m.name);
                            break;
                        case "input_statement":
                            l = Ih(f, m.name);
                            break;
                        case "input_dummy":
                            l = Q(f, m.name);
                            break;
                        default:
                            y = (y = qh[m.type]) ? y.ha(m) : null, y || (m.alt ? (m = m.alt, n = !0) : console.warn("Blockly could not create a field of type " + m.type + ". You may need to register your custom field.  See github.com/google/blockly/issues/1584"))
                    }
                while (n);
                if (y) h.push([y, m.name]);
                else if (l) { m.check && l.Ta(m.check);
                    m.align && Ch(l, k[m.align]); for (m = 0; m < h.length; m++) O(l, h[m][0], h[m][1]);
                    h.length = 0 }
            } e++
    }
    void 0 !== b.inputsInline && a.bc(b.inputsInline);
    void 0 !== b.output && a.Fc(!0, b.output);
    void 0 !== b.previousStatement && a.jd(!0, b.previousStatement);
    void 0 !== b.nextStatement && a.hd(!0, b.nextStatement);
    void 0 !== b.tooltip && (e = b.tooltip, e = x.i.oc(e), a.oa(e));
    void 0 !== b.enableContextMenu && (e = b.enableContextMenu, a.contextMenu = !!e);
    void 0 !== b.helpUrl && (e = b.helpUrl, e = x.i.oc(e), a.Sa = e);
    q(b.extensions) && (console.warn(c + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + b.type + "' block."), b.extensions = [b.extensions]);
    void 0 !==
        b.mutator && x.N.apply(b.mutator, a, !0);
    if (Array.isArray(b.extensions))
        for (b = b.extensions, e = 0; e < b.length; ++e) x.N.apply(b[e], a, !1)
}

function ah(a, b) { if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided"); var c = [],
        e; for (e in b) void 0 !== a[e] && c.push(e); if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c)); for (var f in b) a[f] = b[f] } d.Zi = function(a, b) { var c = null; if (a == x.ab || a == x.yb) c = this.Wj(a);
    a = new zh(a, b, this, c);
    this.X.push(a); return a };

function Kh(a, b, c) { if (b != c) { for (var e = -1, f = c ? -1 : a.X.length, h = 0, k; k = a.X[h]; h++)
            if (k.name == b) { if (e = h, -1 != f) break } else if (c && k.name == c && (f = h, -1 != e)) break;
        a.Go(e, f) } } d.Go = function(a, b) { var c = this.X[a];
    this.X.splice(a, 1);
    a < b && b--;
    this.X.splice(b, 0, c) };
d.Ga = function(a) { for (var b = 0, c; c = this.X[b]; b++)
        if (c.name == a) { c.connection && c.connection.isConnected() && (c.connection.Me = null, a = J(c.connection), a.kb ? a.A() : Fe(a));
            c.A();
            this.X.splice(b, 1); break } };

function K(a, b) { for (var c = 0, e; e = a.X[c]; c++)
        if (e.name == b) return e; return null }

function Lh(a, b) { return (a = K(a, b)) && a.connection && J(a.connection) } d.Bl = function() { return this.Ya || "" };
d.tf = function(a) { this.Ya != a && (x.j.U(new x.j.Kc(this, "comment", null, this.Ya, a || "")), this.Ya = a) };
d.Le = function() {};
d.vg = function() {};
d.la = function() { return this.sd };
d.moveBy = function(a, b) { var c = new x.j.Ni(this);
    this.sd.translate(a, b);
    c.rf();
    x.j.U(c) };
d.Wj = function(a) { return new Me(this, a) };

function Ve(a) { var b = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (b += ' (id="' + a.id + '")'); return b };
x.i.Ji = {};
x.i.Ji.jf = function(a) { a = a.G(); var b = ih(a);
    b.height = a.scrollHeight; return b };
x.i.Ji.tq = function(a, b, c) { b.left += c.width;
    b.right += c.width;
    a.left += c.width;
    a.right += c.width };

function Mh(a) { Eb.call(this);
    this.ki = a;
    this.pi = {} } w(Mh, Eb);
var Nh = [];
d = Mh.prototype;
d.na = function(a, b, c, e) { t(b) || (b && (Nh[0] = b.toString()), b = Nh); for (var f = 0; f < b.length; f++) { var h = bc(a, b[f], c || this.handleEvent, e || !1, this.ki || this); if (!h) break;
        this.pi[h.key] = h } return this };
d.rs = function(a, b, c, e) { return Oh(this, a, b, c, e) };

function Oh(a, b, c, e, f, h) { if (t(c))
        for (var k = 0; k < c.length; k++) Oh(a, b, c[k], e, f, h);
    else { b = cc(b, c, e || a.handleEvent, f, h || a.ki || a); if (!b) return a;
        a.pi[b.key] = b } return a }
d.pd = function(a, b, c, e, f) { if (t(b))
        for (var h = 0; h < b.length; h++) this.pd(a, b[h], c, e, f);
    else c = c || this.handleEvent, e = ha(e) ? !!e.capture : !!e, f = f || this.ki || this, c = dc(c), e = !!e, b = Sb(a) ? a.xj(b, c, e, f) : a ? (a = fc(a)) ? a.xj(b, c, e, f) : null : null, b && (kc(b), delete this.pi[b.key]); return this };
d.removeAll = function() { bb(this.pi, function(a, b) { this.pi.hasOwnProperty(b) && kc(a) }, this);
    this.pi = {} };
d.Za = function() { Mh.s.Za.call(this);
    this.removeAll() };
d.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

function Ph() {} da(Ph);
Ph.prototype.mx = 0;

function Qh(a) { og.call(this);
    this.ol = a || Td();
    this.Di = Rh;
    this.li = null;
    this.Aa = !1;
    this.S = null;
    this.Sf = void 0;
    this.Mf = this.ic = this.Ie = this.Fo = null;
    this.yi = this.vy = !1 } w(Qh, og);
Qh.prototype.Lw = Ph.ze();
var Rh = null;

function Sh(a, b) { switch (a) {
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
            return b ? "open" : "close" } throw Error("Invalid component state"); } d = Qh.prototype;
d.aa = function() { return this.li || (this.li = ":" + (this.Lw.mx++).toString(36)) };
d.G = function() { return this.S };

function Th(a) { a.Sf || (a.Sf = new Mh(a)); return a.Sf }
d.qh = function(a) { if (this == a) throw Error("Unable to set parent component"); if (a && this.Ie && this.li && Uh(this.Ie, this.li) && this.Ie != a) throw Error("Unable to set parent component");
    this.Ie = a;
    Qh.s.Em.call(this, a) };
d.getParent = function() { return this.Ie };
d.Em = function(a) { if (this.Ie && this.Ie != a) throw Error("Method not supported");
    Qh.s.Em.call(this, a) };
d.vc = function() { return this.ol };
d.W = function() { this.S = this.ol.createElement("DIV") };
d.$ = function(a) { this.Je(a) };
d.Je = function(a, b) { if (this.Aa) throw Error("Component already rendered");
    this.S || this.W();
    a ? a.insertBefore(this.S, b || null) : this.ol.Sd.body.appendChild(this.S);
    this.Ie && !this.Ie.Aa || this.Hb() };
d.Hb = function() { this.Aa = !0;
    Vh(this, function(a) {!a.Aa && a.G() && a.Hb() }) };
d.Dd = function() { Vh(this, function(a) { a.Aa && a.Dd() });
    this.Sf && this.Sf.removeAll();
    this.Aa = !1 };
d.Za = function() { this.Aa && this.Dd();
    this.Sf && (this.Sf.A(), delete this.Sf);
    Vh(this, function(a) { a.A() });!this.vy && this.S && H(this.S);
    this.Ie = this.Fo = this.S = this.Mf = this.ic = null;
    Qh.s.Za.call(this) };
d.Yi = function(a, b) { this.Qh(a, Wh(this), b) };
d.Qh = function(a, b, c) {
    if (a.Aa && (c || !this.Aa)) throw Error("Component already rendered");
    if (0 > b || b > Wh(this)) throw Error("Child component index out of bounds");
    this.Mf && this.ic || (this.Mf = {}, this.ic = []);
    if (a.getParent() == this) { var e = a.aa();
        this.Mf[e] = a;
        ya(this.ic, a) } else { e = this.Mf; var f = a.aa(); if (null !== e && f in e) throw Error('The object already contains the key "' + f + '"');
        e[f] = a } a.qh(this);
    Ca(this.ic, b, 0, a);
    a.Aa && this.Aa && a.getParent() == this ? (c = this.cd(), b = c.childNodes[b] || null, b != a.G() && c.insertBefore(a.G(),
        b)) : c ? (this.S || this.W(), b = R(this, b + 1), a.Je(this.cd(), b ? b.S : null)) : this.Aa && !a.Aa && a.S && a.S.parentNode && 1 == a.S.parentNode.nodeType && a.Hb()
};
d.cd = function() { return this.S };

function Xh(a) { null == a.Di && (a.Di = "rtl" == eh(a.Aa ? a.S : a.ol.Sd.body, "direction")); return a.Di } d.vf = function(a) { if (this.Aa) throw Error("Component already rendered");
    this.Di = a };

function Yh(a) { return !!a.ic && 0 != a.ic.length }

function Wh(a) { return a.ic ? a.ic.length : 0 }

function Uh(a, b) { a.Mf && b ? (a = a.Mf, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null; return b }

function R(a, b) { return a.ic ? a.ic[b] || null : null }

function Vh(a, b, c) { a.ic && sa(a.ic, b, c) }

function Zh(a, b) { return a.ic && b ? ra(a.ic, b) : -1 } d.removeChild = function(a, b) { if (a) { var c = q(a) ? a : a.aa();
        a = Uh(this, c); if (c && a) { var e = this.Mf;
            c in e && delete e[c];
            ya(this.ic, a);
            b && (a.Dd(), a.S && H(a.S));
            a.qh(null) } } if (!a) throw Error("Child is not in parent component"); return a };
d.dt = function(a) { for (var b = []; Yh(this);) b.push(this.removeChild(R(this, 0), a)); return b };
var $h;
eb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

function ai(a, b) { b ? a.setAttribute("role", b) : a.removeAttribute("role") }

function S(a, b, c) { t(c) && (c = c.join(" ")); var e = "aria-" + b; "" === c || void 0 == c ? ($h || ($h = { atomic: !1, autocomplete: "none", dropeffect: "none", haspopup: !1, live: "off", multiline: !1, multiselectable: !1, orientation: "vertical", readonly: !1, relevant: "additions text", required: !1, sort: "none", busy: !1, disabled: !1, hidden: !1, invalid: "false" }), c = $h, b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e)) : a.setAttribute(e, c) }

function bi(a, b) { a = a.getAttribute("aria-" + b); return null == a || void 0 == a ? "" : String(a) };

function ci(a, b, c, e, f, h) { if (C && !ub("525")) return !0; if (lb && f) return di(a); if (f && !e) return !1; if (!B) { r(b) && (b = ei(b)); var k = 17 == b || 18 == b || lb && 91 == b; if ((!c || lb) && k || lb && 16 == b && (e || h)) return !1 } if ((C || jb) && e && c) switch (a) {
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
            return B ? h || f ? !1 : !(c && e) : !0;
        case 27:
            return !(C || jb || B) } return B && (e || f || h) ? !1 : di(a) }

function di(a) { if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (C || jb) && 0 == a) return !0; switch (a) {
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

function ei(a) { if (B) a = fi(a);
    else if (lb && C) switch (a) {
        case 93:
            a = 91 }
    return a }

function fi(a) { switch (a) {
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

function gi(a, b) { og.call(this);
    a && hi(this, a, b) } w(gi, og);
d = gi.prototype;
d.S = null;
d.bm = null;
d.uo = null;
d.cm = null;
d.Rc = -1;
d.eg = -1;
d.kn = !1;
var ii = { 3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45 },
    ji = { Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45 },
    ki = !C || ub("525"),
    li = lb && B;
d = gi.prototype;
d.xw = function(a) { if (C || jb)
        if (17 == this.Rc && !a.ctrlKey || 18 == this.Rc && !a.altKey || lb && 91 == this.Rc && !a.metaKey) this.eg = this.Rc = -1; - 1 == this.Rc && (a.ctrlKey && 17 != a.keyCode ? this.Rc = 17 : a.altKey && 18 != a.keyCode ? this.Rc = 18 : a.metaKey && 91 != a.keyCode && (this.Rc = 91));
    ki && !ci(a.keyCode, this.Rc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.eg = ei(a.keyCode), li && (this.kn = a.altKey)) };
d.yw = function(a) { this.eg = this.Rc = -1;
    this.kn = a.altKey };
d.handleEvent = function(a) {
    var b = a.te,
        c = b.altKey;
    if (A && "keypress" == a.type) { var e = this.eg; var f = 13 != e && 27 != e ? b.keyCode : 0 } else(C || jb) && "keypress" == a.type ? (e = this.eg, f = 0 <= b.charCode && 63232 > b.charCode && di(e) ? b.charCode : 0) : ib && !C ? (e = this.eg, f = di(e) ? b.keyCode : 0) : (e = b.keyCode || this.eg, f = b.charCode || 0, li && "keypress" == a.type && (c = this.kn), lb && 63 == f && 224 == e && (e = 191));
    var h = e = ei(e);
    e ? 63232 <= e && e in ii ? h = ii[e] : 25 == e && a.shiftKey && (h = 9) : b.keyIdentifier && b.keyIdentifier in ji && (h = ji[b.keyIdentifier]);
    B && ki && "keypress" ==
        a.type && !ci(h, this.Rc, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = h == this.Rc, this.Rc = h, b = new mi(h, f, a, b), b.altKey = c, this.dispatchEvent(b))
};
d.G = function() { return this.S };

function hi(a, b, c) { a.cm && a.detach();
    a.S = b;
    a.bm = bc(a.S, "keypress", a, c);
    a.uo = bc(a.S, "keydown", a.xw, c, a);
    a.cm = bc(a.S, "keyup", a.yw, c, a) } d.detach = function() { this.bm && (kc(this.bm), kc(this.uo), kc(this.cm), this.cm = this.uo = this.bm = null);
    this.S = null;
    this.eg = this.Rc = -1 };
d.Za = function() { gi.s.Za.call(this);
    this.detach() };

function mi(a, b, c, e) { Nb.call(this, e);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c } w(mi, Nb);

function ni(a) { if (a.classList) return a.classList;
    a = a.className; return q(a) && a.match(/\S+/g) || [] }

function oi(a, b) { return a.classList ? a.classList.contains(b) : xa(ni(a), b) }

function pi(a, b) { a.classList ? a.classList.add(b) : oi(a, b) || (a.className += 0 < a.className.length ? " " + b : b) }

function qi(a, b) { if (a.classList) sa(b, function(b) { pi(a, b) });
    else { var c = {};
        sa(ni(a), function(a) { c[a] = !0 });
        sa(b, function(a) { c[a] = !0 });
        a.className = ""; for (var e in c) a.className += 0 < a.className.length ? " " + e : e } }

function ri(a, b) { a.classList ? a.classList.remove(b) : oi(a, b) && (a.className = ta(ni(a), function(a) { return a != b }).join(" ")) }

function si(a, b) { a.classList ? sa(b, function(b) { ri(a, b) }) : a.className = ta(ni(a), function(a) { return !xa(b, a) }).join(" ") };

function ti(a, b) { if (!a) throw Error("Invalid class name " + a); if (!u(b)) throw Error("Invalid decorator function " + b); }
var ui = {};

function vi(a) { this.wq = a } da(vi);
d = vi.prototype;
d.xl = function() { return this.wq };

function wi(a, b) { a && (a.tabIndex = b ? 0 : -1) } d.W = function(a) { return a.vc().W("DIV", this.wj(a).join(" ")) };
d.cd = function(a) { return a };
d.Mj = function(a) { a = a.G();
    mh(a, !0, B);
    A && (a.hideFocus = !0); var b = this.xl();
    b && ai(a, b) };
d.Qb = function(a) { return a.G() };
d.Ma = function() { return "goog-container" };
d.wj = function(a) { var b = this.Ma(),
        c = [b, a.ih == xi ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled"); return c };

function yi() {}
var zi;
da(yi);
var Ai = { button: "pressed", checkbox: "checked", menuitem: "selected", menuitemcheckbox: "checked", menuitemradio: "checked", radio: "checked", tab: "selected", treeitem: "selected" };
d = yi.prototype;
d.xl = function() {};
d.W = function(a) { return a.vc().W("DIV", this.wj(a).join(" "), a.Pc()) };
d.cd = function(a) { return a };
d.pj = function(a, b, c) { if (a = a.G ? a.G() : a) { var e = [b];
        A && !ub("7") && (e = Bi(ni(a), b), e.push(b));
        (c ? qi : si)(a, e) } };
d.Mj = function(a) { Xh(a) && this.vf(a.G(), !0);
    a.isEnabled() && this.uf(a, a.Y()) };

function Ci(a, b, c) { if (a = c || a.xl()) c = b.getAttribute("role") || null, a != c && ai(b, a) }

function Di(a, b, c) { var e = b.vq;
    null != e && a.sp(c, e);
    b.Y() || S(c, "hidden", !b.Y());
    b.isEnabled() || Ei(c, 1, !b.isEnabled());
    b.Bb & 8 && Ei(c, 8, b.Zl());
    b.Bb & 16 && Ei(c, 16, !!(b.Oa & 16));
    b.Bb & 64 && Ei(c, 64, b.ni()) } d.sp = function(a, b) { S(a, "label", b) };
d.rp = function(a, b) { mh(a, !b, !A && !ib) };
d.vf = function(a, b) { this.pj(a, this.Ma() + "-rtl", b) };
d.lf = function(a) { var b; return a.Bb & 32 && (b = a.Qb()) ? ke(b) && le(b) : !1 };
d.uf = function(a, b) { var c; if (a.Bb & 32 && (c = a.Qb())) { if (!b && a.Oa & 32) { try { c.blur() } catch (e) {} a.Oa & 32 && a.Dj(null) }(ke(c) && le(c)) != b && (a = c, b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))) } };
d.pa = function(a, b) { kh(a, b);
    a && S(a, "hidden", !b) };
d.fe = function(a, b, c) { var e = a.G(); if (e) { var f = this.Al(b);
        f && this.pj(a, f, c);
        Ei(e, b, c) } };

function Ei(a, b, c) { zi || (zi = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = zi[b]; var e = a.getAttribute("role") || null;
    e && (e = Ai[e] || b, b = "checked" == b || "selected" == b ? e : b);
    b && S(a, b, c) } d.Id = function(a, b) { var c = this.cd(a);
    c && (ee(c), b && (q(b) ? he(c, b) : (a = function(a) { if (a) { var b = Vd(c);
            c.appendChild(q(a) ? b.createTextNode(a) : a) } }, t(b) ? sa(b, a) : !fa(b) || "nodeType" in b ? a(b) : sa(Aa(b), a)))) };
d.Qb = function(a) { return a.G() };
d.Ma = function() { return "goog-control" };
d.wj = function(a) { var b = this.Ma(),
        c = [b],
        e = this.Ma();
    e != b && c.push(e);
    b = a.getState(); for (e = []; b;) { var f = b & -b;
        e.push(this.Al(f));
        b &= ~f } c.push.apply(c, e);
    (a = a.ue) && c.push.apply(c, a);
    A && !ub("7") && c.push.apply(c, Bi(c)); return c };

function Bi(a, b) { var c = [];
    b && (a = za(a, [b]));
    sa([], function(e) {!va(e, oa(xa, a)) || b && !xa(e, b) || c.push(e.join("_")) }); return c }
d.Al = function(a) { if (!this.Gq) { var b = this.Ma();
        b.replace(/\xa0|\s/g, " ");
        this.Gq = { 1: b + "-disabled", 2: b + "-hover", 4: b + "-active", 8: b + "-selected", 16: b + "-checked", 32: b + "-focused", 64: b + "-open" } } return this.Gq[a] };

function T(a, b, c) { Qh.call(this, c); if (!b) { b = this.constructor; for (var e; b;) { e = ia(b); if (e = ui[e]) break;
            b = b.s ? b.s.constructor : null } b = e ? u(e.ze) ? e.ze() : new e : null } this.ma = b;
    this.Cm(aa(a) ? a : null);
    this.vq = null } w(T, Qh);
d = T.prototype;
d.$c = null;
d.Oa = 0;
d.Bb = 39;
d.mn = 255;
d.wh = 0;
d.Va = !0;
d.ue = null;
d.Ej = !0;
d.jn = !1;
d.Lx = null;
d.Qb = function() { return this.ma.Qb(this) };
d.Gl = function() { return this.lc || (this.lc = new gi) };
d.pj = function(a, b) { b ? a && (this.ue ? xa(this.ue, a) || this.ue.push(a) : this.ue = [a], this.ma.pj(this, a, !0)) : a && this.ue && ya(this.ue, a) && (0 == this.ue.length && (this.ue = null), this.ma.pj(this, a, !1)) };
d.W = function() { var a = this.ma.W(this);
    this.S = a;
    Ci(this.ma, a, this.Kl());
    this.jn || this.ma.rp(a, !1);
    this.Y() || this.ma.pa(a, !1) };
d.Kl = function() { return this.Lx };
d.sp = function(a) { this.vq = a; var b = this.G();
    b && this.ma.sp(b, a) };
d.cd = function() { return this.ma.cd(this.G()) };
d.Hb = function() { T.s.Hb.call(this);
    Di(this.ma, this, this.S);
    this.ma.Mj(this); if (this.Bb & -2 && (this.Ej && Fi(this, !0), this.Bb & 32)) { var a = this.Qb(); if (a) { var b = this.Gl();
            hi(b, a);
            Th(this).na(b, "key", this.Gd).na(a, "focus", this.Ol).na(a, "blur", this.Dj) } } };

function Fi(a, b) { var c = a.yi ? Mb : Lb,
        e = Th(a),
        f = a.G();
    b ? (e.na(f, c.Ri, a.Fj).na(f, c.Kh, a.kf).na(f, [c.Lh, c.Jh], a.ji).na(f, c.Qi, a.jo), a.yi && e.na(f, "gotpointercapture", a.rm), a.ii != ca && e.na(f, "contextmenu", a.ii), A && (ub(9) || e.na(f, "dblclick", a.Sr), a.Lj || (a.Lj = new Gi(a), Hb(a, oa(Ib, a.Lj))))) : (e.pd(f, c.Ri, a.Fj).pd(f, c.Kh, a.kf).pd(f, [c.Lh, c.Jh], a.ji).pd(f, c.Qi, a.jo), a.yi && e.pd(f, "gotpointercapture", a.rm), a.ii != ca && e.pd(f, "contextmenu", a.ii), A && (ub(9) || e.pd(f, "dblclick", a.Sr), Ib(a.Lj), a.Lj = null)) }
d.Dd = function() { T.s.Dd.call(this);
    this.lc && this.lc.detach();
    this.Y() && this.isEnabled() && this.ma.uf(this, !1) };
d.Za = function() { T.s.Za.call(this);
    this.lc && (this.lc.A(), delete this.lc);
    delete this.ma;
    this.Lj = this.ue = this.$c = null };
d.Pc = function() { return this.$c };
d.Id = function(a) { this.ma.Id(this.G(), a);
    this.Cm(a) };
d.Cm = function(a) { this.$c = a };
d.zl = function() { var a = this.Pc(); if (!a) return "";
    a = q(a) ? a : t(a) ? ua(a, oe).join("") : me(a); return Ga(a) };
d.vf = function(a) { T.s.vf.call(this, a); var b = this.G();
    b && this.ma.vf(b, a) };
d.rp = function(a) { this.jn = a; var b = this.G();
    b && this.ma.rp(b, a) };
d.Y = function() { return this.Va };
d.pa = function(a, b) { return b || this.Va != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.G()) && this.ma.pa(b, a), this.isEnabled() && this.ma.uf(this, a), this.Va = a, !0) : !1 };
d.isEnabled = function() { return !(this.Oa & 1) };
d.mk = function(a) { var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Hi(this, 1, !a) || (a || (this.setActive(!1), this.ac(!1)), this.Y() && this.ma.uf(this, a), this.fe(1, !a, !0)) };
d.ac = function(a) { Hi(this, 2, a) && this.fe(2, a) };
d.gs = function() { return !!(this.Oa & 4) };
d.setActive = function(a) { Hi(this, 4, a) && this.fe(4, a) };
d.Zl = function() { return !!(this.Oa & 8) };
d.zp = function(a) { Hi(this, 8, a) && this.fe(8, a) };

function Ii(a, b) { Hi(a, 16, b) && a.fe(16, b) } d.ni = function() { return !!(this.Oa & 64) };

function Ji(a, b) { Hi(a, 64, b) && a.fe(64, b) } d.getState = function() { return this.Oa };
d.fe = function(a, b, c) { c || 1 != a ? this.Bb & a && b != !!(this.Oa & a) && (this.ma.fe(this, a, b), this.Oa = b ? this.Oa | a : this.Oa & ~a) : this.mk(!b) };
d.Gc = function(a, b) { if (this.Aa && this.Oa & a && !b) throw Error("Component already rendered");!b && this.Oa & a && this.fe(a, !1);
    this.Bb = b ? this.Bb | a : this.Bb & ~a };

function Ki(a, b) { return !!(a.mn & b) && !!(a.Bb & b) }

function Hi(a, b, c) { return !!(a.Bb & b) && !!(a.Oa & b) != c && (!(a.wh & b) || a.dispatchEvent(Sh(b, c))) && !a.Xh }
d.Fj = function(a) {!Li(a, this.G()) && this.dispatchEvent("enter") && this.isEnabled() && Ki(this, 2) && this.ac(!0) };
d.jo = function(a) {!Li(a, this.G()) && this.dispatchEvent("leave") && (Ki(this, 4) && this.setActive(!1), Ki(this, 2) && this.ac(!1)) };
d.rm = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };
d.ii = ca;

function Li(a, b) { return !!a.relatedTarget && ge(b, a.relatedTarget) }
d.kf = function(a) { this.isEnabled() && (Ki(this, 2) && this.ac(!0), !Qb(a) || C && lb && a.ctrlKey || (Ki(this, 4) && this.setActive(!0), this.ma && this.ma.lf(this) && this.Qb().focus()));
    this.jn || !Qb(a) || C && lb && a.ctrlKey || a.preventDefault() };
d.ji = function(a) { this.isEnabled() && (Ki(this, 2) && this.ac(!0), this.gs() && this.lg(a) && Ki(this, 4) && this.setActive(!1)) };
d.Sr = function(a) { this.isEnabled() && this.lg(a) };
d.lg = function(a) { Ki(this, 16) && Ii(this, !(this.Oa & 16));
    Ki(this, 8) && this.zp(!0);
    Ki(this, 64) && Ji(this, !this.ni()); var b = new Jb("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Xo = a.Xo); return this.dispatchEvent(b) };
d.Ol = function() { Ki(this, 32) && Hi(this, 32, !0) && this.fe(32, !0) };
d.Dj = function() { Ki(this, 4) && this.setActive(!1);
    Ki(this, 32) && Hi(this, 32, !1) && this.fe(32, !1) };
d.Gd = function(a) { return this.Y() && this.isEnabled() && this.Vg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.Vg = function(a) { return 13 == a.keyCode && this.lg(a) };
if (!u(T)) throw Error("Invalid component class " + T);
if (!u(yi)) throw Error("Invalid renderer class " + yi);
var Mi = ia(T);
ui[Mi] = yi;
ti("goog-control", function() { return new T(null) });

function Gi(a) { Eb.call(this);
    this.dl = a;
    this.Zk = !1;
    this.ki = new Mh(this);
    Hb(this, oa(Ib, this.ki));
    a = this.dl.S;
    this.ki.na(a, "mousedown", this.zw).na(a, "mouseup", this.Aw).na(a, "click", this.sw) } w(Gi, Eb);
var Ni = !A || 9 <= Number(vb);
Gi.prototype.zw = function() { this.Zk = !1 };
Gi.prototype.Aw = function() { this.Zk = !0 };

function Oi(a, b) { if (!Ni) return a.button = 0, a.type = b, a; var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null); return c } Gi.prototype.sw = function(a) { if (this.Zk) this.Zk = !1;
    else { var b = a.te,
            c = b.button,
            e = b.type,
            f = Oi(b, "mousedown");
        this.dl.kf(new Nb(f, a.currentTarget));
        f = Oi(b, "mouseup");
        this.dl.ji(new Nb(f, a.currentTarget));
        Ni || (b.button = c, b.type = e) } };
Gi.prototype.Za = function() { this.dl = null;
    Gi.s.Za.call(this) };

function Pi(a, b, c) { Qh.call(this, c);
    this.ma = b || vi.ze();
    this.ih = a || Qi } w(Pi, Qh);
var xi = "horizontal",
    Qi = "vertical";
d = Pi.prototype;
d.vo = null;
d.lc = null;
d.ma = null;
d.ih = null;
d.Va = !0;
d.Rg = !0;
d.Tg = !0;
d.wa = -1;
d.Lb = null;
d.ti = !1;
d.av = !1;
d.Kx = !0;
d.Ze = null;
d.Qb = function() { return this.vo || this.ma.Qb(this) };
d.Gl = function() { return this.lc || (this.lc = new gi(this.Qb())) };
d.W = function() { this.S = this.ma.W(this) };
d.cd = function() { return this.ma.cd(this.G()) };
d.Hb = function() { Pi.s.Hb.call(this);
    Vh(this, function(a) { a.Aa && Ri(this, a) }, this); var a = this.G();
    this.ma.Mj(this);
    this.pa(this.Va, !0); var b = this.yi ? Mb : Lb;
    Th(this).na(this, "enter", this.ho).na(this, "highlight", this.ww).na(this, "unhighlight", this.Fw).na(this, "open", this.Bw).na(this, "close", this.tw).na(a, b.Kh, this.kf).na(Vd(a), [b.Lh, b.Jh], this.uw).na(a, [b.Kh, b.Lh, b.Jh, b.Ri, b.Qi, "contextmenu"], this.rw);
    this.yi && Th(this).na(a, "gotpointercapture", this.rm);
    this.lf() && Si(this, !0) };
d.rm = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };

function Si(a, b) { var c = Th(a),
        e = a.Qb();
    b ? c.na(e, "focus", a.Ol).na(e, "blur", a.Dj).na(a.Gl(), "key", a.Gd) : c.pd(e, "focus", a.Ol).pd(e, "blur", a.Dj).pd(a.Gl(), "key", a.Gd) } d.Dd = function() { this.pc(-1);
    this.Lb && Ji(this.Lb, !1);
    this.ti = !1;
    Pi.s.Dd.call(this) };
d.Za = function() { Pi.s.Za.call(this);
    this.lc && (this.lc.A(), this.lc = null);
    this.ma = this.Lb = this.Ze = this.vo = null };
d.ho = function() { return !0 };
d.ww = function(a) { var b = Zh(this, a.target); if (-1 < b && b != this.wa) { var c = R(this, this.wa);
        c && c.ac(!1);
        this.wa = b;
        c = R(this, this.wa);
        this.ti && c.setActive(!0);
        this.Kx && this.Lb && c != this.Lb && (c.Bb & 64 ? Ji(c, !0) : Ji(this.Lb, !1)) } b = this.G();
    null != a.target.G() && S(b, "activedescendant", a.target.G().id) };
d.Fw = function(a) { a.target == R(this, this.wa) && (this.wa = -1);
    this.G().removeAttribute("aria-activedescendant") };
d.Bw = function(a) {
    (a = a.target) && a != this.Lb && a.getParent() == this && (this.Lb && Ji(this.Lb, !1), this.Lb = a) };
d.tw = function(a) { a.target == this.Lb && (this.Lb = null); var b = this.G(),
        c = a.target.G();
    b && a.target.Oa & 2 && c && (a = "", c && (a = c.id), S(b, "activedescendant", a)) };
d.kf = function(a) { this.Rg && (this.ti = !0); var b = this.Qb();
    b && ke(b) && le(b) ? b.focus() : a.preventDefault() };
d.uw = function() { this.ti = !1 };
d.rw = function(a) { var b = this.yi ? Mb : Lb,
        c = Ti(this, a.target); if (c) switch (a.type) {
        case b.Kh:
            c.kf(a); break;
        case b.Lh:
        case b.Jh:
            c.ji(a); break;
        case b.Ri:
            c.Fj(a); break;
        case b.Qi:
            c.jo(a); break;
        case "contextmenu":
            c.ii(a) } };

function Ti(a, b) { if (a.Ze)
        for (var c = a.G(); b && b !== c;) { var e = b.id; if (e in a.Ze) return a.Ze[e];
            b = b.parentNode }
    return null } d.Ol = function() {};
d.Dj = function() { this.pc(-1);
    this.ti = !1;
    this.Lb && Ji(this.Lb, !1) };
d.Gd = function(a) { return this.isEnabled() && this.Y() && (0 != Wh(this) || this.vo) && this.Vg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.Vg = function(a) {
    var b = R(this, this.wa);
    if (b && "function" == typeof b.Gd && b.Gd(a) || this.Lb && this.Lb != b && "function" == typeof this.Lb.Gd && this.Lb.Gd(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.lf()) this.Qb().blur();
            else return !1;
            break;
        case 36:
            Ui(this);
            break;
        case 35:
            Vi(this);
            break;
        case 38:
            if (this.ih == Qi) Wi(this);
            else return !1;
            break;
        case 37:
            if (this.ih == xi) Xh(this) ? Xi(this) : Wi(this);
            else return !1;
            break;
        case 40:
            if (this.ih == Qi) Xi(this);
            else return !1;
            break;
        case 39:
            if (this.ih == xi) Xh(this) ? Wi(this) : Xi(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function Ri(a, b) { var c = b.G();
    c = c.id || (c.id = b.aa());
    a.Ze || (a.Ze = {});
    a.Ze[c] = b } d.Yi = function(a, b) { Pi.s.Yi.call(this, a, b) };
d.Qh = function(a, b, c) { a.wh |= 2;
    a.wh |= 64;!this.lf() && this.av || a.Gc(32, !1);
    a.Aa && 0 != a.Ej && Fi(a, !1);
    a.Ej = !1; var e = a.getParent() == this ? Zh(this, a) : -1;
    Pi.s.Qh.call(this, a, b, c);
    a.Aa && this.Aa && Ri(this, a);
    a = e; - 1 == a && (a = Wh(this));
    a == this.wa ? this.wa = Math.min(Wh(this) - 1, b) : a > this.wa && b <= this.wa ? this.wa++ : a < this.wa && b > this.wa && this.wa-- };
d.removeChild = function(a, b) { if (a = q(a) ? Uh(this, a) : a) { var c = Zh(this, a); - 1 != c && (c == this.wa ? (a.ac(!1), this.wa = -1) : c < this.wa && this.wa--); var e = a.G();
        e && e.id && this.Ze && (c = this.Ze, e = e.id, e in c && delete c[e]) } b = a = Pi.s.removeChild.call(this, a, b);
    b.Aa && 1 != b.Ej && Fi(b, !0);
    b.Ej = !0; return a };
d.setOrientation = function(a) { if (this.G()) throw Error("Component already rendered");
    this.ih = a };
d.Y = function() { return this.Va };
d.pa = function(a, b) { if (b || this.Va != a && this.dispatchEvent(a ? "show" : "hide")) { this.Va = a; var c = this.G();
        c && (kh(c, a), this.lf() && wi(this.Qb(), this.Rg && this.Va), b || this.dispatchEvent(this.Va ? "aftershow" : "afterhide")); return !0 } return !1 };
d.isEnabled = function() { return this.Rg };
d.mk = function(a) { this.Rg != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Rg = !0, Vh(this, function(a) { a.Jt ? delete a.Jt : a.mk(!0) })) : (Vh(this, function(a) { a.isEnabled() ? a.mk(!1) : a.Jt = !0 }), this.ti = this.Rg = !1), this.lf() && wi(this.Qb(), a && this.Va)) };
d.lf = function() { return this.Tg };
d.uf = function(a) { a != this.Tg && this.Aa && Si(this, a);
    this.Tg = a;
    this.Rg && this.Va && wi(this.Qb(), a) };
d.pc = function(a) {
    (a = R(this, a)) ? a.ac(!0): -1 < this.wa && R(this, this.wa).ac(!1) };
d.ac = function(a) { this.pc(Zh(this, a)) };

function Ui(a) { Yi(a, function(a, c) { return (a + 1) % c }, Wh(a) - 1) }

function Vi(a) { Yi(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, 0) }

function Xi(a) { Yi(a, function(a, c) { return (a + 1) % c }, a.wa) }

function Wi(a) { Yi(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, a.wa) }

function Yi(a, b, c) { c = 0 > c ? Zh(a, a.Lb) : c; var e = Wh(a);
    c = b.call(a, c, e); for (var f = 0; f <= e;) { var h = R(a, c); if (h && a.Cq(h)) { a.pc(c); break } f++;
        c = b.call(a, c, e) } } d.Cq = function(a) { return a.Y() && a.isEnabled() && !!(a.Bb & 2) };

function Zi() {} w(Zi, yi);
da(Zi);
Zi.prototype.Ma = function() { return "goog-menuheader" };

function $i(a, b, c) { T.call(this, a, c || Zi.ze(), b);
    this.Gc(1, !1);
    this.Gc(2, !1);
    this.Gc(4, !1);
    this.Gc(32, !1);
    this.Oa = 1 } w($i, T);
ti("goog-menuheader", function() { return new $i(null) });

function aj() { this.Hq = [] } w(aj, yi);
da(aj);

function bj(a, b) { var c = a.Hq[b]; if (!c) { switch (b) {
            case 0:
                c = a.Ma() + "-highlight"; break;
            case 1:
                c = a.Ma() + "-checkbox"; break;
            case 2:
                c = a.Ma() + "-content" } a.Hq[b] = c } return c } d = aj.prototype;
d.xl = function() { return "menuitem" };
d.W = function(a) { var b = a.vc().W("DIV", this.wj(a).join(" "), cj(this, a.Pc(), a.vc()));
    dj(this, a, b, !!(a.Bb & 8) || !!(a.Bb & 16)); return b };
d.cd = function(a) { return a && a.firstChild };
d.Id = function(a, b) { var c = this.cd(a),
        e = ej(this, a) ? c.firstChild : null;
    aj.s.Id.call(this, a, b);
    e && !ej(this, a) && c.insertBefore(e, c.firstChild || null) };

function cj(a, b, c) { a = bj(a, 2); return c.W("DIV", a, b) } d.mt = function(a, b, c) { a && b && dj(this, a, b, c) };
d.up = function(a, b, c) { a && b && dj(this, a, b, c) };

function ej(a, b) { return (b = a.cd(b)) ? (b = b.firstChild, a = bj(a, 1), !!b && ha(b) && 1 == b.nodeType && oi(b, a)) : !1 }

function dj(a, b, c, e) { Ci(a, c, b.Kl());
    Di(a, b, c);
    e != ej(a, c) && (e ? pi(c, "goog-option") : ri(c, "goog-option"), c = a.cd(c), e ? (a = bj(a, 1), c.insertBefore(b.vc().W("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild)) } d.Al = function(a) { switch (a) {
        case 2:
            return bj(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return aj.s.Al.call(this, a) } };
d.Ma = function() { return "goog-menuitem" };

function fj(a, b, c, e) { T.call(this, a, e || aj.ze(), c);
    this.setValue(b) } w(fj, T);
d = fj.prototype;
d.getValue = function() { var a = this.Fo; return null != a ? a : this.zl() };
d.setValue = function(a) { this.Fo = a };
d.Gc = function(a, b) { fj.s.Gc.call(this, a, b); switch (a) {
        case 8:
            this.Oa & 16 && !b && Ii(this, !1);
            (a = this.G()) && this.ma.mt(this, a, b); break;
        case 16:
            (a = this.G()) && this.ma.up(this, a, b) } };
d.mt = function(a) { this.Gc(8, a) };
d.up = function(a) { this.Gc(16, a) };
d.zl = function() { var a = this.Pc(); return t(a) ? (a = ua(a, function(a) { return ha(a) && 1 == a.nodeType && (oi(a, "goog-menuitem-accel") || oi(a, "goog-menuitem-mnemonic-separator")) ? "" : oe(a) }).join(""), Ga(a)) : fj.s.zl.call(this) };
d.ji = function(a) { var b = this.getParent(); if (b) { var c = b.Rs;
        b.Rs = null; if (c && r(a.clientX) && sc(c, new D(a.clientX, a.clientY))) return } fj.s.ji.call(this, a) };
d.Vg = function(a) { return a.keyCode == this.xs && this.lg(a) ? !0 : fj.s.Vg.call(this, a) };
d.pw = function() { return this.xs };
ti("goog-menuitem", function() { return new fj(null) });
fj.prototype.Kl = function() { return this.Bb & 16 ? "menuitemcheckbox" : this.Bb & 8 ? "menuitemradio" : fj.s.Kl.call(this) };
fj.prototype.getParent = function() { return T.prototype.getParent.call(this) };
fj.prototype.Jl = function() { return T.prototype.Jl.call(this) };

function gj() {} w(gj, yi);
da(gj);
gj.prototype.W = function(a) { return a.vc().W("DIV", this.Ma()) };
gj.prototype.Id = function() {};
gj.prototype.Ma = function() { return "goog-menuseparator" };

function hj(a, b) { T.call(this, null, a || gj.ze(), b);
    this.Gc(1, !1);
    this.Gc(2, !1);
    this.Gc(4, !1);
    this.Gc(32, !1);
    this.Oa = 1 } w(hj, T);
hj.prototype.Hb = function() { hj.s.Hb.call(this); var a = this.G();
    ai(a, "separator") };
ti("goog-menuseparator", function() { return new hj });

function ij(a) { this.wq = a || "menu" } w(ij, vi);
da(ij);
ij.prototype.Ma = function() { return "goog-menu" };
ij.prototype.Mj = function(a) { ij.s.Mj.call(this, a);
    a = a.G();
    S(a, "haspopup", "true") };
ti("goog-menuseparator", function() { return new hj });

function jj(a, b) { Pi.call(this, Qi, b || ij.ze(), a);
    this.uf(!1) } w(jj, Pi);
d = jj.prototype;
d.Tk = !0;
d.bv = !1;
d.Ma = function() { return this.ma.Ma() };
d.removeItem = function(a) {
    (a = this.removeChild(a, !0)) && a.A() };
d.Nr = function(a) { return R(this, a) };
d.setPosition = function(a, b) { var c = this.Y();
    c || kh(this.G(), !0); var e = this.G(),
        f = a;
    a = gh(e);
    f instanceof D && (b = f.y, f = f.x); var h = e.offsetLeft + (f - a.x);
    h instanceof D ? (f = h.x, b = h.y) : (f = h, b = e.offsetTop + (Number(b) - a.y));
    e.style.left = hh(f);
    e.style.top = hh(b);
    c || kh(this.G(), !1) };
d.Or = function() { return this.Y() ? gh(this.G()) : null };
d.pa = function(a, b, c) {
    (b = jj.s.pa.call(this, a, b)) && a && this.Aa && this.Tk && this.Qb().focus();
    this.Rs = a && c && r(c.clientX) ? new D(c.clientX, c.clientY) : null; return b };
d.ho = function(a) { this.Tk && this.Qb().focus(); return jj.s.ho.call(this, a) };
d.Cq = function(a) { return (this.bv || a.isEnabled()) && a.Y() && !!(a.Bb & 2) };
d.Vg = function(a) { var b = jj.s.Vg.call(this, a);
    b || Vh(this, function(c) {!b && c.pw && c.xs == a.keyCode && (this.isEnabled() && this.ac(c), b = c.Gd(a)) }, this); return b };
d.pc = function(a) {
    jj.s.pc.call(this, a);
    if (a = R(this, a)) {
        var b = a.G();
        a = this.G() || ae(document);
        var c = a || ae(document);
        var e = gh(b),
            f = gh(c);
        if (!A || 9 <= Number(vb)) { k = dh(c, "borderLeftWidth"); var h = dh(c, "borderRightWidth");
            l = dh(c, "borderTopWidth");
            m = dh(c, "borderBottomWidth");
            h = new qg(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k)) } else { var k = oh(c, "borderLeft");
            h = oh(c, "borderRight"); var l = oh(c, "borderTop"),
                m = oh(c, "borderBottom");
            h = new qg(l, h, m, k) } c == ae(document) ? (k = e.x - c.scrollLeft, e = e.y - c.scrollTop,
            !A || 10 <= Number(vb) || (k += h.left, e += h.top)) : (k = e.x - f.x - h.left, e = e.y - f.y - h.top);
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
x.ca = {};
x.ca.fl = null;
x.ca.Gr = null;
x.ca.show = function(a, b, c) { x.K.show(x.ca, c, null); if (b.length) { var e = x.ca.qm(b, c);
        bc(e, "action", x.ca.Na);
        x.ca.Tc(e, a, c);
        setTimeout(function() { e.G().focus() }, 1);
        x.ca.fl = null } else x.ca.Na() };
x.ca.qm = function(a, b) { var c = new jj;
    c.vf(b); for (var e = 0, f; f = a[e]; e++) { var h = new fj(f.text);
        h.vf(b);
        c.Yi(h, !0);
        h.mk(f.enabled);
        f.enabled && (bc(h, "action", f.hb), h.ii = function() { this.dispatchEvent("action") }) } return c };
x.ca.Tc = function(a, b, c) { var e = x.i.fo();
    b = { top: b.clientY + e.top, bottom: b.clientY + e.top, left: b.clientX + e.left, right: b.clientX + e.left };
    x.ca.jj(a); var f = x.i.Ji.jf(a);
    c && x.i.Ji.tq(e, b, f);
    x.K.Yo(e, b, f, c);
    a.G().focus() };
x.ca.jj = function(a) { a.$(x.K.ka); var b = a.G();
    x.i.qb(b, "blocklyContextMenu");
    x.O(b, "contextmenu", null, x.i.nx);
    a.Tk = !0;
    a.uf(!0) };
x.ca.Na = function() { x.K.Ij(x.ca);
    x.ca.fl = null;
    x.ca.Gr && x.Pa(x.ca.Gr) };
x.ca.Xk = function(a, b) { return function() { x.j.disable(); try { var c = x.F.Yh(b, a.o),
                e = a.la();
            e.x = a.u ? e.x - x.Yc : e.x + x.Yc;
            e.y += 2 * x.Yc;
            c.moveBy(e.x, e.y) } finally { x.j.enable() } x.j.isEnabled() && !c.kb && x.j.U(new x.j.Kk(c));
        c.select() } };
x.ca.hv = function(a) { var b = xc(a, !1).length,
        c = Lc(a);
    c && (b -= xc(c, !1).length); return { text: 1 == b ? x.g.DELETE_BLOCK : x.g.DELETE_X_BLOCKS.replace("%1", String(b)), enabled: !0, hb: function() { x.j.R(!0);
            a.A(!0, !0);
            x.j.R(!1) } } };
x.ca.jv = function(a) { return { enabled: !(u(a.Sa) ? !a.Sa() : !a.Sa), text: x.g.HELP, hb: function() { var b = u(a.Sa) ? a.Sa() : a.Sa;
            b && window.open(b) } } };
x.ca.iv = function(a) { var b = !0;
    xc(a, !1).length > fd(a.o) && (b = !1); return { text: x.g.DUPLICATE_BLOCK, enabled: b, hb: function() { x.Dr(a) } } };
x.ca.gv = function(a) { var b = { enabled: !A };
    a.Ya ? (b.text = x.g.REMOVE_COMMENT, b.hb = function() { a.tf(null) }) : (b.text = x.g.ADD_COMMENT, b.hb = function() { a.tf("") }); return b };
x.ca.yv = function(a) { return { text: x.g.iB, enabled: !0, hb: function() { x.j.R(!0);
            a.A(!0, !0);
            x.j.R(!1) } } };
x.ca.zv = function(a) { return { text: x.g.Cz, enabled: !0, hb: function() { x.Dr(a) } } };
x.ca.qC = function(a, b) { var c = { enabled: !0 };
    c.text = x.g.Cy;
    c.hb = function() { var c = new yf(a, x.g.UB, 100, 100); if (!a.ro)
            for (var f = a.w; f;) { if (-1 != (" " + (f.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) { a.ro = f; break } f = f.parentNode } f = a.ro.getBoundingClientRect();
        f = new D(b.clientX - f.left, b.clientY - f.top); var h = x.i.Fl(a.Ua);
        f = uc(f, h).scale(1 / a.scale);
        c.moveBy(f.x, f.y);
        a.P && (c.Bc(), c.$(!1), c.select()) }; return c };

function N(a, b, c) { this.w = x.i.B("g", {}, null);
    this.w.Af = "";
    this.wk = x.i.B("path", { "class": "blocklyPathDark", transform: "translate(1,1)" }, this.w);
    this.Kd = x.i.B("path", { "class": "blocklyPath" }, this.w);
    this.wg = x.i.B("path", { "class": "blocklyPathLight" }, this.w);
    this.Kd.nd = this;
    this.P = !1;
    this.Qe = x.i.ag() && !!a.Ab;
    x.C.Lg(this.Kd);
    N.s.constructor.call(this, a, b, c);
    this.w.dataset && (this.w.dataset.id = this.id) } w(N, ed);
d = N.prototype;
d.height = 0;
d.width = 0;
d.Vc = null;
d.Bc = function() { for (var a = 0, b; b = this.X[a]; a++) b.I();
    b = qf(this); for (a = 0; a < b.length; a++) He(b[a]);
    this.Bf();
    zf(this);
    this.o.options.readOnly || this.Rn || x.O(this.ga(), "mousedown", this, this.pf);
    this.Rn = !0;
    this.ga().parentNode || this.o.Ua.appendChild(this.ga()) };
d.select = function() { if (this.kb && this.getParent()) this.getParent().select();
    else if (x.selected != this) { var a = null; if (x.selected) { a = x.selected.id;
            x.j.disable(); try { x.selected.Ah() } finally { x.j.enable() } } a = new Fc(null, "selected", a, this.id);
        a.Ic = this.o.id;
        x.j.U(a);
        x.selected = this;
        this.Rh() } };
d.Ah = function() { if (x.selected == this) { var a = new Fc(null, "selected", this.id, null);
        a.Ic = this.o.id;
        x.j.U(a);
        x.selected = null;
        this.mh() } };
d.fd = null;
d.Ya = null;
d.rd = null;

function qf(a) { var b = [];
    a.fd && b.push(a.fd);
    a.Ya && b.push(a.Ya);
    a.rd && b.push(a.rd); return b } d.qh = function(a) { var b = this.kg; if (a != b) { zg();
        N.s.qh.call(this, a);
        Ag(); var c = this.ga(); if (!this.o.to && c) { var e = this.la();
            a ? (a.ga().appendChild(c), a = this.la(), hf(this, a.x - e.x, a.y - e.y)) : b && x.selected != this && (this.o.Ua.appendChild(c), this.translate(e.x, e.y)) } } };
d.la = function() { var a = 0,
        b = 0,
        c = this.Qe ? this.o.Ab.xc() : null,
        e = this.ga(); if (e) { do { var f = x.i.yc(e);
            a += f.x;
            b += f.y;
            this.Qe && this.o.Ab.re.firstChild == e && (f = this.o.Ab.Ll(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.Ua && e != c) } return new D(a, b) };
d.moveBy = function(a, b) { var c = x.j.isEnabled(); if (c) var e = new x.j.Ni(this); var f = this.la();
    this.translate(f.x + a, f.y + b);
    hf(this, a, b);
    c && (e.rf(), x.j.U(e));
    Bf(this.o) };
d.translate = function(a, b) { this.ga().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.jm = function() { if (this.Qe) { var a = this.la();
        x.i.removeAttribute(this.ga(), "transform");
        this.o.Ab.zf(a.x, a.y);
        Cf(this.o.Ab, this.ga()) } };
d.As = function(a) { this.Qe && (this.translate(a.x, a.y), this.o.Ab.cj(this.o.Ua)) };
d.im = function(a) { this.Qe ? this.o.Ab.zf(a.x, a.y) : (this.w.Af = "translate(" + a.x + "," + a.y + ")", this.w.setAttribute("transform", this.w.Af + this.w.sh)) };

function Sg(a) { if (a.o && !a.o.sb() && !a.getParent() && !a.vb) { var b = a.o.Fd; if (b && b.Tx) { var c = b.Hp,
                e = c / 2,
                f = a.la();
            b = Math.round((f.x - e) / c) * c + e - f.x;
            c = Math.round((f.y - e) / c) * c + e - f.y;
            b = Math.round(b);
            c = Math.round(c);
            0 == b && 0 == c || a.moveBy(b, c) } } } d.Xn = function() { var a = this.la(),
        b = this.M ? M : 0,
        c = this.Ib(); if (this.u) { var e = new D(a.x - (c.width - b), a.y);
        a = new D(a.x + b, a.y + c.height) } else e = new D(a.x - b, a.y), a = new D(a.x + c.width - b, a.y + c.height); return { od: e, Nd: a } };
d.sg = function(a) { if (this.ne != a) { for (var b = [], c = 0, e; e = this.X[c]; c++) b.push.apply(b, e.pa(!a)); if (a) { e = qf(this); for (c = 0; c < e.length; c++) e[c].pa(!1);
            c = this.toString(x.St);
            O(Q(this, "_TEMP_COLLAPSED_INPUT"), c).I() } else this.Ga("_TEMP_COLLAPSED_INPUT"), this.Le(null);
        N.s.sg.call(this, a);
        b.length || (b[0] = this); if (this.P)
            for (c = 0; a = b[c]; c++) a.$() } };
d.Op = function(a, b) { for (var c = [], e = 0, f; f = this.X[e]; e++) { for (var h = 0, k; k = f.La[h]; h++) k instanceof kj && c.push(k);
        f.connection && (f = J(f.connection)) && c.push(f) } a = c.indexOf(a); - 1 == a && (a = b ? -1 : c.length);
    (c = c[b ? a + 1 : a - 1]) ? c instanceof ph ? c.Ne() : c.Op(null, b): (c = this.getParent()) && c.Op(this, b) };
d.pf = function(a) { var b = this.o && this.o.ye(a);
    b && (Uf(b, this), b.Sc = a) };
d.Ei = function(a) {
    if (!this.o.options.readOnly && this.contextMenu) {
        var b = this,
            c = [];
        if (this.kc() && this.Ee() && !b.vb) {
            c.push(x.ca.iv(b));
            Ke(this) && !this.ne && this.o.options.ej && c.push(x.ca.gv(b));
            if (!this.ne)
                for (var e = 1; e < this.X.length; e++)
                    if (this.X[e - 1].type != x.yb && this.X[e].type != x.yb) { e = { enabled: !0 }; var f = bh(this);
                        e.text = f ? x.g.EXTERNAL_INPUTS : x.g.INLINE_INPUTS;
                        e.hb = function() { b.bc(!f) };
                        c.push(e); break } this.o.options.collapse && (this.ne ? (e = { enabled: !0 }, e.text = x.g.EXPAND_BLOCK, e.hb = function() { b.sg(!1) },
                c.push(e)) : (e = { enabled: !0 }, e.text = x.g.COLLAPSE_BLOCK, e.hb = function() { b.sg(!0) }, c.push(e)));
            this.o.options.disable && (e = { text: this.disabled ? x.g.ENABLE_BLOCK : x.g.DISABLE_BLOCK, enabled: !Gh(this), hb: function() { b.Jd(!b.disabled) } }, c.push(e));
            c.push(x.ca.hv(b))
        }
        c.push(x.ca.jv(b));
        this.bf && this.bf(c);
        x.ca.show(a, c, this.u);
        x.ca.fl = this
    }
};

function hf(a, b, c) { if (a.P) { for (var e = a.xe(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
        e = qf(a); for (f = 0; f < e.length; f++) Ie(e[f]); for (f = 0; f < a.Ye.length; f++) hf(a.Ye[f], b, c) } }
d.tg = function(a) { if (a) { var b = this.ga();
        b.Af = "";
        b.sh = "";
        x.rl = x.rl.concat(this.xe(!0));
        x.i.qb(this.w, "blocklyDragging") } else x.rl = [], x.i.Sb(this.w, "blocklyDragging"); for (b = 0; b < this.Ye.length; b++) this.Ye[b].tg(a) };
d.ph = function(a) { N.s.ph.call(this, a);
    zf(this) };
d.wp = function(a) { N.s.wp.call(this, a);
    a = qf(this); for (var b = 0; b < a.length; b++) a[b].Cf() };
d.Bp = function(a) { N.s.Bp.call(this, a);
    this.Bf() };
d.ga = function() { return this.w };
d.A = function(a, b) { if (this.o) { x.C.Na();
        zg(); var c = this.o; if (x.selected == this) { this.Ah(); var e = this.o;
            e.Eb && e.Eb.cancel() } x.ca.fl == this && x.ca.Na();
        b && this.P && (Fe(this, a), x.Ja.Yv(this));
        this.P = !1; if (this.Vc) { for (var f in this.Vc) clearTimeout(this.Vc[f]);
            this.Vc = null } x.j.disable(); try { var h = qf(this); for (b = 0; b < h.length; b++) h[b].A() } finally { x.j.enable() } N.s.A.call(this, a);
        H(this.w);
        Bf(c);
        this.wk = this.wg = this.Kd = this.w = null;
        Ag() } };
d.Bf = function() { if (!this.disabled) { var a = this.oe,
            b = lj(a); if (this.kb) b = mj([255, 255, 255], b, .6), a = nj(b), this.wg.style.display = "none", this.wk.setAttribute("fill", a);
        else { this.wg.style.display = ""; var c = nj(mj([255, 255, 255], b, .3));
            b = nj(mj([0, 0, 0], b, .2));
            this.wg.setAttribute("stroke", c);
            this.wk.setAttribute("fill", b) } this.Kd.setAttribute("fill", a);
        a = qf(this); for (c = 0; c < a.length; c++) a[c].Bf(); for (a = 0; c = this.X[a]; a++) { b = 0; for (var e; e = c.La[b]; b++) e.uj() } } };

function nf(a) { a.disabled || Gh(a) ? x.i.qb(a.w, "blocklyDisabled") && a.Kd.setAttribute("fill", "url(#" + a.o.options.nj + ")") : x.i.Sb(a.w, "blocklyDisabled") && a.Bf();
    a = a.Qf(!1); for (var b = 0, c; c = a[b]; b++) nf(c) } d.Bl = function() { return this.Ya ? this.Ya.Jb().replace(/\s+$/, "").replace(/ +\n/g, "\n") : "" };
d.tf = function(a) { var b = !1;
    q(a) ? (this.Ya || (this.Ya = new Je(this), b = !0), this.Ya.Pb(a)) : this.Ya && (this.Ya.A(), b = !0);
    b && this.P && (this.$(), this.rb()) };
d.Le = function(a, b) {
    this.Vc || (this.Vc = Object.create(null));
    var c = b || "";
    if (c) this.Vc[c] && (clearTimeout(this.Vc[c]), delete this.Vc[c]);
    else
        for (var e in this.Vc) clearTimeout(this.Vc[e]), delete this.Vc[e];
    if (this.o.sb()) { var f = this;
        this.Vc[c] = setTimeout(function() { f.o && (delete f.Vc[c], f.Le(a, c)) }, 100) } else {
        this.vb && (a = null);
        b = Eh(this);
        for (e = null; b;) b.isCollapsed() && (e = b), b = Eh(b);
        e && e.Le(a, "collapsed " + this.id + " " + c);
        b = !1;
        q(a) ? (this.rd || (this.rd = new Le(this), b = !0), this.rd.Pb(a, c)) : this.rd && !c ? (this.rd.A(),
            b = !0) : this.rd && (b = this.rd.Jb(), this.rd.Pb("", c), (e = this.rd.Jb()) || this.rd.A(), b = b != e);
        b && this.P && (this.$(), this.rb())
    }
};
d.vg = function(a) { this.fd && this.fd !== a && this.fd.A();
    a && (a.T = this, this.fd = a, He(a)) };
d.Jd = function(a) { this.disabled != a && (N.s.Jd.call(this, a), this.P && nf(this)) };
d.ac = function(a) { this.P && (a ? (this.Kd.setAttribute("filter", "url(#" + this.o.options.Fr + ")"), this.wg.style.display = "none") : (x.i.removeAttribute(this.Kd, "filter"), delete this.wg.style.display)) };
d.Rh = function() { x.i.qb(this.w, "blocklySelected") };
d.mh = function() { x.i.Sb(this.w, "blocklySelected") };
d.lk = function(a) { a ? x.i.qb(this.w, "blocklyDraggingDelete") : x.i.Sb(this.w, "blocklyDraggingDelete") };
d.Ha = function(a) { N.s.Ha.call(this, a);
    this.P && this.Bf() };

function wf(a) { do { var b = a.ga();
        b.parentNode.appendChild(b);
        a = a.getParent() } while (a) } d.jd = function(a, b) { N.s.jd.call(this, a, b);
    this.P && (this.$(), this.rb()) };
d.hd = function(a, b) { N.s.hd.call(this, a, b);
    this.P && (this.$(), this.rb()) };
d.Fc = function(a, b) { N.s.Fc.call(this, a, b);
    this.P && (this.$(), this.rb()) };
d.bc = function(a) { N.s.bc.call(this, a);
    this.P && (this.$(), this.rb()) };
d.Ga = function(a, b) { N.s.Ga.call(this, a, b);
    this.P && (this.$(), this.rb()) };
d.Go = function(a, b) { N.s.Go.call(this, a, b);
    this.P && (this.$(), this.rb()) };
d.Zi = function(a, b) { a = N.s.Zi.call(this, a, b);
    this.P && (this.$(), this.rb()); return a };
d.xe = function(a) { var b = []; if (a || this.P)
        if (this.M && b.push(this.M), this.Z && b.push(this.Z), this.L && b.push(this.L), a || !this.ne) { a = 0; for (var c; c = this.X[a]; a++) c.connection && b.push(c.connection) } return b };
d.Wj = function(a) { return new bf(this, a) };
d.rb = function() { if (this.o && !this.o.sb()) { var a = df(this); if (!a.vb)
            for (var b = this.xe(!1), c = 0, e; e = b[c]; c++) { e.isConnected() && Se(e) && J(e).rb(); for (var f = e.Ds(x.Yc), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || df(k.v) != a && (Se(e) ? Pe(k, e) : Pe(e, k)) } } };

function xf(a) { var b = x.j.xc();
    setTimeout(function() { x.j.R(b);
        Sg(a);
        x.j.R(!1) }, x.Jk / 2);
    setTimeout(function() { x.j.R(b);
        a.rb();
        x.j.R(!1) }, x.Jk) };
var M = 8,
    oj = 7.5 * (1 - Math.SQRT1_2) + .5,
    pj = 8.5 * (1 - Math.SQRT1_2) - .5,
    jf = "v 5 c 0,10 -" + M + ",-8 -" + M + ",7.5 s " + M + ",-2.5 " + M + ",7.5",
    qj = "v 6.5 m -" + .97 * M + ",3 q -" + .05 * M + ",10 " + .3 * M + ",9.5 m " + .67 * M + ",-1.9 v 1.4",
    rj = "m " + oj + "," + oj,
    sj = "a 8,8 0 0,0 " + (-pj - .5) + "," + (8 - pj),
    tj = "a 8.5,8.5 0 0,0 " + (8 - pj) + "," + (pj + .5);
N.prototype.Ib = function() { var a = this.height,
        b = this.width,
        c = Lc(this);
    c ? (c = c.Ib(), a += c.height - 4, b = Math.max(b, c.width)) : this.L || this.M || (a += 2); return { height: a, width: b } };
N.prototype.$ = function(a) {
    zg();
    this.P = !0;
    var b = 10;
    this.u && (b = -b);
    for (var c = qf(this), e = 0; e < c.length; e++) { var f = c[e]; if (f.Oq && f.T.isCollapsed()) f.Ac.setAttribute("display", "none");
        else { f.Ac.setAttribute("display", "block"); var h = f.$m;
            f.T.u && (b -= h);
            f.Ac.setAttribute("transform", "translate(" + b + ",5)");
            Ie(f);
            b = f.T.u ? b - 10 : b + (h + 10) } }
    var k = b += this.u ? 10 : -10,
        l = this.X;
    c = [];
    c.Ob = k + 20;
    if (this.Z || this.L) c.Ob = Math.max(c.Ob, 40);
    f = e = 0;
    for (var m = h = !1, n = !1, p = void 0, v = bh(this) && !this.isCollapsed(), y = 0, z; z = l[y]; y++)
        if (z.Y()) {
            if (v &&
                p && p != x.yb && z.type != x.yb) var E = c[c.length - 1];
            else p = z.type, E = [], E.type = v && z.type != x.yb ? -1 : z.type, E.height = 0, c.push(E);
            E.push(z);
            z.og = 25;
            z.Yb = v && z.type == x.ab ? M + 12.5 : 0;
            if (z.connection && z.connection.isConnected()) { var Ha = J(z.connection).Ib();
                z.og = Math.max(z.og, Ha.height);
                z.Yb = Math.max(z.Yb, Ha.width) } v || y != l.length - 1 ? !v && z.type == x.ab && l[y + 1] && l[y + 1].type == x.yb && z.og-- : z.og--;
            E.height = Math.max(E.height, z.og);
            z.Ud = 0;
            1 == c.length && (z.Ud += this.u ? -k : k);
            Ha = !1;
            for (var Tc = 0, Ra; Ra = z.La[Tc]; Tc++) {
                0 != Tc && (z.Ud +=
                    10);
                var zd = Ra.jf();
                Ra.Yb = zd.width;
                Ra.vm = Ha && Ra.Gg ? 10 : 0;
                z.Ud += Ra.Yb + Ra.vm;
                E.height = Math.max(E.height, zd.height);
                Ha = Ra.Gg
            } - 1 != E.type && (E.type == x.yb ? (m = !0, f = Math.max(f, z.Ud)) : (E.type == x.ab ? h = !0 : E.type == x.Se && (n = !0), e = Math.max(e, z.Ud)))
        } for (k = 0; E = c[k]; k++)
        if (E.Bt = !1, -1 == E.type)
            for (l = 0; z = E[l]; l++)
                if (z.type == x.ab) { E.height += 10;
                    E.Bt = !0; break } c.Km = 20 + f;
    m && (c.Ob = Math.max(c.Ob, c.Km + 30));
    h ? c.Ob = Math.max(c.Ob, e + 20 + M) : n && (c.Ob = Math.max(c.Ob, e + 20));
    c.Jw = h;
    c.gC = m;
    c.fC = n;
    f = b;
    this.ut = !1;
    this.height = 0;
    this.M ? this.Ip =
        this.Im = !0 : (this.Ip = this.Im = !1, this.Z && (b = J(this.Z)) && Lc(b) == this && (this.Im = !0), Lc(this) && (this.Ip = !0));
    h = [];
    m = [];
    b = [];
    e = [];
    n = c.Ob;
    this.Im ? (h.push("m 0,0"), b.push("m 0.5,0.5"), this.ut && (h.push("c 30,-15 70,-15 100,0"), b.push(this.u ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (h.push("m 0,8"), b.push(this.u ? rj : "m 0.5,7.5"), h.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.Z && (h.push("H", 15), b.push("H", 15), h.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"),
        ff(this.Z, this.u ? -30 : 30, 0));
    h.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    for (z = n = 0; E = c[z]; z++) {
        p = 10;
        0 == z && (p += this.u ? -f : f);
        b.push("M", c.Ob - .5 + "," + (n + .5));
        if (this.isCollapsed()) k = E[0], v = n, uj(this, k.La, p, v), h.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), k = E.height - 20, h.push("v", k), this.u && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", k - .7)), this.width += 15;
        else if (-1 == E.type) {
            for (l = 0; k = E[l]; l++) v = n, E.Bt && (v += 5), p = uj(this, k.La, p, v), k.type != x.Se && (p += k.Yb + 10), k.type == x.ab && (m.push("M", p -
                10 + "," + (n + 5)), m.push("h", M - 2 - k.Yb), m.push(jf), m.push("v", k.og + 1 - 20), m.push("h", k.Yb + 2 - M), m.push("z"), this.u ? (e.push("M", p - 10 - 2.5 + M - k.Yb + "," + (n + 5 + .5)), e.push(qj), e.push("v", k.og - 20 + 2.5), e.push("h", k.Yb - M + 2)) : (e.push("M", p - 10 + .5 + "," + (n + 5 + .5)), e.push("v", k.og + 1), e.push("h", M - 2 - k.Yb), e.push("M", p - k.Yb - 10 + .9 + "," + (n + 5 + 20 - .7)), e.push("l", .46 * M + ",-2.1")), v = this.u ? -p - M + 10 + k.Yb + 1 : p + M - 10 - k.Yb - 1, y = n + 5 + 1, ff(k.connection, v, y));
            p = Math.max(p, c.Ob);
            this.width = Math.max(this.width, p);
            h.push("H", p);
            b.push("H", p - .5);
            h.push("v", E.height);
            this.u && b.push("v", E.height - 1)
        } else E.type == x.ab ? (k = E[0], v = n, k.align != x.Mi && (l = c.Ob - k.Ud - M - 20, k.align == x.Fg ? p += l : k.align == x.Hk && (p += l / 2)), uj(this, k.La, p, v), h.push(jf), l = E.height - 20, h.push("v", l), this.u ? (b.push(qj), b.push("v", l + .5)) : (b.push("M", c.Ob - 5 + "," + (n + 20 - .7)), b.push("l", .46 * M + ",-2.1")), v = this.u ? -c.Ob - 1 : c.Ob + 1, ff(k.connection, v, n), k.connection.isConnected() && (this.width = Math.max(this.width, c.Ob + J(k.connection).Ib().width - M + 1))) : E.type == x.Se ? (k = E[0], v = n, k.align != x.Mi && (l =
            c.Ob - k.Ud - 20, c.Jw && (l -= M), k.align == x.Fg ? p += l : k.align == x.Hk && (p += l / 2)), uj(this, k.La, p, v), h.push("v", E.height), this.u && b.push("v", E.height - 1)) : E.type == x.yb && (k = E[0], 0 == z && (h.push("v", 10), this.u && b.push("v", 9), n += 10), v = n, k.align != x.Mi && (l = c.Km - k.Ud - 20, k.align == x.Fg ? p += l : k.align == x.Hk && (p += l / 2)), uj(this, k.La, p, v), p = c.Km + 30, h.push("H", p), h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), h.push("v", E.height - 16), h.push("a 8,8 0 0,0 8,8"), h.push("H", c.Ob), this.u ? (b.push("M", p - 30 + pj + "," + (n + pj)), b.push(sj),
            b.push("v", E.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) : (b.push("M", p - 30 + pj + "," + (n + E.height - pj)), b.push(tj)), b.push("H", c.Ob - .5), v = this.u ? -p : p + 1, ff(k.connection, v, n + 1), k.connection.isConnected() && (this.width = Math.max(this.width, c.Km + J(k.connection).Ib().width)), z == c.length - 1 || c[z + 1].type == x.yb) && (h.push("v", 10), this.u && b.push("v", 9), n += 10);
        n += E.height
    }
    c.length || (n = 25, h.push("V", n), this.u && b.push("V", n - 1));
    c = n;
    this.height += c + 1;
    this.L && (h.push("H", 30 + (this.u ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), ff(this.L,
        this.u ? -30 : 30, c + 1), this.height += 4);
    this.Ip ? (h.push("H 0"), this.u || b.push("M", "0.5," + (c - .5))) : (h.push("H", 8), h.push("a", "8,8 0 0,1 -8,-8"), this.u || (b.push("M", oj + "," + (c - oj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
    this.M ? (ff(this.M, 0, 0), h.push("V", 20), h.push("c 0,-10 -" + M + ",8 -" + M + ",-7.5 s " + M + ",2.5 " + M + ",-7.5"), this.u ? (b.push("M", -.25 * M + ",8.4"), b.push("l", -.45 * M + ",-2.1")) : (b.push("V", 18.5), b.push("m", -.92 * M + ",-0.5 q " + -.19 * M + ",-5.5 0,-11"), b.push("m", .92 * M + ",1 V 0.5 H 1")), this.width += M) : this.u ||
        (this.Im ? b.push("V", .5) : b.push("V", 8));
    h.push("z");
    c = h.join(" ") + "\n" + m.join(" ");
    this.Kd.setAttribute("d", c);
    this.wk.setAttribute("d", c);
    c = b.join(" ") + "\n" + e.join(" ");
    this.wg.setAttribute("d", c);
    this.u && (this.Kd.setAttribute("transform", "scale(-1 1)"), this.wg.setAttribute("transform", "scale(-1 1)"), this.wk.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    c = this.la();
    this.Z && ef(this.Z, c);
    this.M && ef(this.M, c);
    for (b = 0; b < this.X.length; b++)
        if (e = this.X[b].connection) ef(e, c), e.isConnected() && gf(e);
    this.L && (ef(this.L, c), this.L.isConnected() && gf(this.L));
    !1 !== a && ((a = this.getParent()) ? a.$(!0) : Bf(this.o));
    Ag()
};

function uj(a, b, c, e) { e += 5;
    a.u && (c = -c); for (var f = 0, h; h = b[f]; f++) { var k = h.ga();
        k && (a.u ? (c -= h.vm + h.Yb, k.setAttribute("transform", "translate(" + c + "," + e + ")"), h.Yb && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + h.vm) + "," + e + ")"), h.Yb && (c += h.vm + h.Yb + 10))) } return a.u ? -c : c };
x.g = {};

function kj(a, b) { kj.s.constructor.call(this, a, b) } w(kj, ph);
kj.ha = function(a) { var b = x.i.oc(a.text);
    b = new kj(b, a["class"]); "boolean" === typeof a.spellcheck && (b.Hm = a.spellcheck); return b };
var vj = null;
d = kj.prototype;
d.Mk = "text";
d.Hm = !0;
d.A = function() { x.K.Ij(this);
    kj.s.A.call(this) };
d.setValue = function(a) { if (null !== a) { if (this.v) { var b = De(this, a);
            null !== b && (a = b) } ph.prototype.setValue.call(this, a) } };
d.Pb = function(a) { null !== a && (a = String(a), a !== this.xa && (this.v && x.j.isEnabled() && x.j.U(new x.j.Kc(this.v, "field", this.name, this.xa, a)), ph.prototype.Pb.call(this, a))) };
d.Ne = function(a) { this.m = this.v.o;
    a = a || !1; if (!a && (kb || mb || ob)) wj(this);
    else { x.K.show(this, this.v.u, xj(this)); var b = x.K.ka,
            c = G("INPUT", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.Hm); var e = 11 * this.m.scale + "pt";
        b.style.fontSize = e;
        c.style.fontSize = e;
        vj = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.xa;
        c.Hs = null;
        yj(this);
        this.xm();
        a || (c.focus(), c.select());
        c.wx = x.O(c, "keydown", this, this.vx);
        c.zx = x.O(c, "keyup", this, this.Ks);
        c.yx = x.O(c, "keypress", this, this.Ks);
        c.Qs = this.xm.bind(this);
        this.m.xd(c.Qs) } };

function wj(a) { x.prompt(x.g.CHANGE_VALUE_TITLE, a.xa, function(b) { a.v && (b = De(a, b));
        a.setValue(b) }) } d.vx = function(a) { var b = vj;
    13 == a.keyCode ? x.K.Na() : 27 == a.keyCode ? (b.value = b.defaultValue, x.K.Na()) : 9 == a.keyCode && (x.K.Na(), this.v.Op(this, !a.shiftKey), a.preventDefault()) };
d.Ks = function() { var a = vj,
        b = a.value;
    b !== a.Hs ? (a.Hs = b, this.setValue(b), yj(this)) : C && this.v.$();
    this.xm();
    x.yg(this.v.o) };

function yj(a) { var b = !0,
        c = vj;
    a.v && (b = De(a, c.value));
    null === b ? x.i.qb(c, "blocklyInvalidInput") : x.i.Sb(c, "blocklyInvalidInput") } d.xm = function() { var a = x.K.ka,
        b = xh(this);
    a.style.width = b.right - b.left + "px";
    a.style.height = b.bottom - b.top + "px";
    b = new D(this.v.u ? b.right - a.offsetWidth : b.left, b.top);
    b.y += 1;
    B && x.K.ka.style.top && (--b.x, --b.y);
    C && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px" };

function xj(a) { return function() { var b = vj,
            c = vj,
            e = c.value;
        a.v && (e = De(a, e), null === e ? e = c.defaultValue : a.Oo && a.Oo(e));
        a.Pb(e);
        a.v.P && a.v.$();
        x.Pa(b.wx);
        x.Pa(b.zx);
        x.Pa(b.yx);
        a.m.ng(b.Qs);
        vj = null;
        x.j.R(!1);
        b = x.K.ka.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = "" } } rh("field_input", kj);

function zj(a, b) { this.Np = x.i.B("tspan", {}, null);
    this.Np.appendChild(document.createTextNode("\u00b0"));
    a = a && !isNaN(a) ? String(a) : "0";
    zj.s.constructor.call(this, a, b) } w(zj, kj);
zj.ha = function(a) { return new zj(a.angle) };
d = zj.prototype;
d.Je = function() { this.Va ? (this.Ba.textContent = vh(this), this.v.u ? this.Ba.insertBefore(this.Np, this.Ba.firstChild) : this.Ba.appendChild(this.Np), this.Fk()) : this.ua.width = 0 };
d.Wh = function() { var a = this; return function() { zj.s.Wh.call(a)();
        a.vj = null;
        a.Kq && x.Pa(a.Kq);
        a.Bs && x.Pa(a.Bs);
        a.Cs && x.Pa(a.Cs) } };
d.Ne = function() {
    zj.s.Ne.call(this, kb || mb || ob);
    var a = x.K.ka;
    if (a.firstChild) {
        a = x.i.B("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:html": "http://www.w3.org/1999/xhtml", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", height: "100px", width: "100px" }, a);
        var b = x.i.B("circle", { cx: 50, cy: 50, r: 49, "class": "blocklyAngleCircle" }, a);
        this.vj = x.i.B("path", { "class": "blocklyAngleGauge" }, a);
        this.qs = x.i.B("line", { x1: 50, y1: 50, "class": "blocklyAngleLine" }, a);
        for (var c = 0; 360 > c; c += 15) x.i.B("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ? 10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        this.Kq = x.Mc(a, "click", this, x.K.Na);
        this.Bs = x.Mc(b, "mousemove", this, this.Ps);
        this.Cs = x.Mc(this.vj, "mousemove", this, this.Ps);
        Aj(this)
    }
};
d.Ps = function(a) { var b = this.vj.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = De(this, b), vj.value = b, this.setValue(b), yj(this), this.xm()) };
d.Pb = function(a) { zj.s.Pb.call(this, a);
    this.Ba && (Aj(this), this.ua.width = 0) };

function Aj(a) { if (a.vj) { var b = Number(a.Jb()) + 0;
        b = rc(b); var c = ["M ", 50, ",", 50],
            e = 50,
            f = 50; if (!isNaN(b)) { var h = rc(0),
                k = 49 * Math.cos(h),
                l = -49 * Math.sin(h);
            e += 49 * Math.cos(b);
            f -= 49 * Math.sin(b);
            c.push(" l ", k, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - h) / Math.PI) % 2), " ", Number(!1), " ", e, ",", f, " z") } a.vj.setAttribute("d", c.join(""));
        a.qs.setAttribute("x2", e);
        a.qs.setAttribute("y2", f) } }
d.un = function(a) { if (null === a) return null;
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    a %= 360;
    0 > a && (a += 360);
    360 < a && (a -= 360); return String(a) };
rh("field_angle", zj);

function Bj(a, b) { Bj.s.constructor.call(this, "", b);
    this.setValue(a) } w(Bj, ph);
Bj.ha = function(a) { return new Bj(a.checked ? "TRUE" : "FALSE") };
d = Bj.prototype;
d.Mk = "default";
d.I = function() { this.$a || (Bj.s.I.call(this), this.Yk = x.i.B("text", { "class": "blocklyText blocklyCheckbox", x: -3, y: 14 }, this.$a), this.Yk.appendChild(document.createTextNode("\u2713")), this.Yk.style.display = this.Oa ? "block" : "none") };
d.getValue = function() { return String(this.Oa).toUpperCase() };
d.setValue = function(a) { a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
    this.Oa !== a && (this.v && x.j.isEnabled() && x.j.U(new x.j.Kc(this.v, "field", this.name, this.Oa, a)), this.Oa = a, this.Yk && (this.Yk.style.display = a ? "block" : "none")) };
d.Ne = function() { var a = !this.Oa;
    this.v && (a = De(this, a));
    null !== a && this.setValue(String(a).toUpperCase()) };
rh("field_checkbox", Bj);
var Cj = {
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

function Dj(a) { var b = {};
    a = String(a); var c = "#" == a.charAt(0) ? a : "#" + a; if (Ej.test(c)) return b.lo = Fj(c), b.type = "hex", b;
    a: { var e = a.match(Gj); if (e) { c = Number(e[1]); var f = Number(e[2]);
            e = Number(e[3]); if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) { c = [c, f, e]; break a } } c = [] }
    if (c.length) return b.lo = nj(c), b.type = "rgb", b; if (Cj && (c = Cj[a.toLowerCase()])) return b.lo = c, b.type = "named", b; throw Error(a + " is not a valid color string"); }
var Hj = /#(.)(.)(.)/;

function Fj(a) { if (!Ej.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Hj, "#$1$1$2$2$3$3")); return a.toLowerCase() }

function lj(a) { a = Fj(a); return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)] }

function nj(a) { var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a); if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = Ij(b.toString(16));
    c = Ij(c.toString(16));
    a = Ij(a.toString(16)); return "#" + b + c + a }
var Ej = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Gj = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function Ij(a) { return 1 == a.length ? "0" + a : a }

function mj(a, b, c) { c = pc(c, 0, 1); return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])] };
var Jj = "StopIteration" in g ? g.StopIteration : { message: "StopIteration", stack: "" };

function Kj() {} Kj.prototype.next = function() { throw Jj; };
Kj.prototype.qq = function() { return this };

function Lj(a) { if (a instanceof Kj) return a; if ("function" == typeof a.qq) return a.qq(); if (fa(a)) { var b = 0,
            c = new Kj;
        c.next = function() { for (;;) { if (b >= a.length) throw Jj; if (b in a) return a[b++];
                b++ } }; return c } throw Error("Not implemented"); }

function Mj(a) { try { return Lj(a).next() } catch (b) { if (b != Jj) throw b; return null } };

function Nj(a, b, c, e, f) { this.gd = !!b;
    this.node = null;
    this.wf = 0;
    this.xt = !1;
    this.Tq = !c;
    a && this.setPosition(a, e);
    this.depth = void 0 != f ? f : this.wf || 0;
    this.gd && (this.depth *= -1) } w(Nj, Kj);
Nj.prototype.setPosition = function(a, b, c) { if (this.node = a) this.wf = r(b) ? b : 1 != this.node.nodeType ? 0 : this.gd ? -1 : 1;
    r(c) && (this.depth = c) };
Nj.prototype.clone = function() { return new Nj(this.node, this.gd, !this.Tq, this.wf, this.depth) };
Nj.prototype.next = function() { if (this.xt) { if (!this.node || this.Tq && 0 == this.depth) throw Jj; var a = this.node; var b = this.gd ? -1 : 1; if (this.wf == b) { var c = this.gd ? a.lastChild : a.firstChild;
            c ? this.setPosition(c) : this.setPosition(a, -1 * b) } else(c = this.gd ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
        this.depth += this.wf * (this.gd ? -1 : 1) } else this.xt = !0;
    a = this.node; if (!this.node) throw Jj; return a };
Nj.prototype.splice = function(a) { var b = this.node,
        c = this.gd ? 1 : -1;
    this.wf == c && (this.wf = -1 * c, this.depth += this.wf * (this.gd ? -1 : 1));
    this.gd = !this.gd;
    Nj.prototype.next.call(this);
    this.gd = !this.gd;
    c = fa(arguments[0]) ? arguments[0] : arguments; for (var e = c.length - 1; 0 <= e; e--) fe(c[e], b);
    H(b) };

function Oj(a, b, c, e) { Nj.call(this, a, b, c, null, e) } w(Oj, Nj);
Oj.prototype.next = function() { do Oj.s.next.call(this); while (-1 == this.wf); return this.node };

function Pj() {} w(Pj, yi);
da(Pj);
var Qj = 0;
Pj.prototype.W = function(a) { var b = this.wj(a);
    a = a.vc().W("DIV", b, Rj(this, a.Pc(), a.jf(), a.vc()));
    ai(a, "grid"); return a };

function Rj(a, b, c, e) { for (var f = [], h = 0, k = 0; h < c.height; h++) { for (var l = [], m = 0; m < c.width; m++) { var n = b && b[k++];
            l.push(Sj(a, n, e)) } f.push(Tj(a, l, e)) } return a.Vq(f, e) } Pj.prototype.Vq = function(a, b) { a = b.W("TABLE", this.Ma() + "-table", b.W("TBODY", this.Ma() + "-body", a));
    a.cellSpacing = "0";
    a.cellPadding = "0"; return a };

function Tj(a, b, c) { a = c.W("TR", a.Ma() + "-row", b);
    ai(a, "row"); return a }

function Sj(a, b, c) { a = c.W("TD", { "class": a.Ma() + "-cell", id: a.Ma() + "-cell-" + Qj++ }, b);
    ai(a, "gridcell");
    S(a, "selected", !1); if (!me(a) && !bi(a, "label")) { var e;
        b = new Oj(a); for (c = ""; !c && (e = Mj(b));) 1 == e.nodeType && (c = bi(e, "label") || e.title);
        (e = c) && S(a, "label", e) } return a }
Pj.prototype.Id = function(a, b) { if (a) { var c = Wd(this.Ma() + "-body", a)[0]; if (c) { var e = 0;
            sa(c.rows, function(a) { sa(a.cells, function(a) { ee(a); if (b) { var c = b[e++];
                        c && a.appendChild(c) } }) }); if (e < b.length) { for (var f = [], h = Td(a), k = c.rows[0].cells.length; e < b.length;) { var l = b[e++];
                    f.push(Sj(this, l, h));
                    f.length == k && (l = Tj(this, f, h), c.appendChild(l), f.length = 0) } if (0 < f.length) { for (; f.length < k;) f.push(Sj(this, "", h));
                    l = Tj(this, f, h);
                    c.appendChild(l) } } } mh(a, !0, B) } };

function Uj(a, b, c) { for (b = b.G(); c && 1 == c.nodeType && c != b;) { if ("TD" == c.tagName && oi(c, a.Ma() + "-cell")) return c.firstChild;
        c = c.parentNode } return null } Pj.prototype.Ma = function() { return "goog-palette" };

function Vj(a) { og.call(this);
    this.oi = [];
    Wj(this, a) } w(Vj, og);
d = Vj.prototype;
d.wb = null;
d.qp = null;
d.Nr = function(a) { return this.oi[a] || null };

function Wj(a, b) { b && (sa(b, function(a) { this.jk(a, !1) }, a), Ba(a.oi, b)) } d.removeItem = function(a) { a && ya(this.oi, a) && a == this.wb && (this.wb = null, this.dispatchEvent("select")) };
d.Ae = function() { return this.wb };
d.kd = function(a) { a != this.wb && (this.jk(this.wb, !1), this.wb = a, this.jk(a, !0));
    this.dispatchEvent("select") };
d.zj = function() { var a = this.wb; return a ? ra(this.oi, a) : -1 };
d.nk = function(a) { this.kd(this.Nr(a)) };
d.clear = function() { var a = this.oi; if (!t(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.wb = null };
d.Za = function() { Vj.s.Za.call(this);
    delete this.oi;
    this.wb = null };
d.jk = function(a, b) { a && ("function" == typeof this.qp ? this.qp(a, b) : "function" == typeof a.zp && a.zp(b)) };

function Xj(a, b, c) { T.call(this, a, b || Pj.ze(), c);
    this.mn &= -89;
    this.lj = new Yj;
    this.lj.Em(this);
    this.wo = -1 } w(Xj, T);
d = Xj.prototype;
d.ua = null;
d.wa = -1;
d.$b = null;
d.Za = function() { Xj.s.Za.call(this);
    this.$b && (this.$b.A(), this.$b = null);
    this.ua = null;
    this.lj.A() };
d.Cm = function(a) { Xj.s.Cm.call(this, a);
    Zj(this);
    this.$b ? (this.$b.clear(), Wj(this.$b, a)) : (this.$b = new Vj(a), a = na(this.jk, this), this.$b.qp = a, Th(this).na(this.$b, "select", this.Cw));
    this.wa = -1 };
d.zl = function() { return "" };
d.Fj = function(a) { Xj.s.Fj.call(this, a); var b = Uj(this.ma, this, a.target);
    b && a.relatedTarget && ge(b, a.relatedTarget) || b != ak(this) && bk(this, b) };
d.kf = function(a) { Xj.s.kf.call(this, a);
    this.gs() && (a = Uj(this.ma, this, a.target), a != ak(this) && bk(this, a)) };
d.lg = function(a) { var b = ak(this); return b ? (a && (this.Ae() ? "mouseup" != a.type || Uj(this.ma, this, a.target) : 1) && this.kd(b), Xj.s.lg.call(this, a)) : !1 };
d.Gd = function(a) {
    var b = this.Pc();
    b = b ? b.length : 0;
    var c = this.ua.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.keyCode || 32 == a.keyCode) return this.lg(a);
    if (36 == a.keyCode) return this.pc(0), !0;
    if (35 == a.keyCode) return this.pc(b - 1), !0;
    var e = 0 > this.wa ? this.zj() : this.wa;
    switch (a.keyCode) {
        case 37:
            if (-1 == e || 0 == e) e = b;
            this.pc(e - 1);
            a.preventDefault();
            return !0;
        case 39:
            return e == b - 1 && (e = -1), this.pc(e + 1), a.preventDefault(), !0;
        case 38:
            -1 == e && (e = b + c - 1);
            if (e >= c) return this.pc(e - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 ==
                e && (e = -c), e < b - c) return this.pc(e + c), a.preventDefault(), !0
    }
    return !1
};
d.Cw = function() {};
d.jf = function() { return this.ua };
d.Fm = function(a) { if (this.G()) throw Error("Component already rendered");
    this.ua = r(a) ? new Sd(a, void 0) : a;
    Zj(this) };

function ak(a) { var b = a.Pc(); return b && b[a.wa] } d.pc = function(a) { a != this.wa && (ck(this, this.wa, !1), this.wo = this.wa, this.wa = a, ck(this, a, !0), this.dispatchEvent("a")) };

function bk(a, b) { var c = a.Pc();
    a.pc(c && b ? ra(c, b) : -1) } d.zj = function() { return this.$b ? this.$b.zj() : -1 };
d.Ae = function() { return this.$b ? this.$b.Ae() : null };
d.nk = function(a) { this.$b && this.$b.nk(a) };
d.kd = function(a) { this.$b && this.$b.kd(a) };

function ck(a, b, c) { if (a.G()) { var e = a.Pc(); if (e && 0 <= b && b < e.length) { var f = (f = ak(a)) ? f.parentNode : null;
            a.lj.G() != f && (a.lj.S = f);
            f = a.lj;
            f.ac(c);!!(f.Oa & 2) == c && (f = a.ma, b = e[b]) && (b = b ? b.parentNode : null, e = f.Ma() + "-cell-hover", c ? pi(b, e) : ri(b, e), c ? S(a.S, "activedescendant", b.id) : b.id == bi(a.S, "activedescendant") && a.S.removeAttribute("aria-activedescendant")) } } }
d.ac = function(a) { a && -1 == this.wa ? this.pc(-1 < this.wo ? this.wo : 0) : a || this.pc(-1);
    Xj.s.ac.call(this, a) };
d.jk = function(a, b) { if (this.G() && a) { a = a.parentNode; var c = this.ma.Ma() + "-cell-selected";
        b ? pi(a, c) : ri(a, c);
        S(a, "selected", b) } };

function Zj(a) { var b = a.Pc(); if (b)
        if (a.ua && a.ua.width) { if (b = Math.ceil(b.length / a.ua.width), !r(a.ua.height) || a.ua.height < b) a.ua.height = b } else b = Math.ceil(Math.sqrt(b.length)), a.ua = new Sd(b, b);
    else a.ua = new Sd(0, 0) }

function Yj() { T.call(this, null);
    this.wh |= 2 } w(Yj, T);

function dk(a, b, c) { this.al = a || [];
    Xj.call(this, null, b || Pj.ze(), c);
    this.Bm(this.al) } w(dk, Xj);
d = dk.prototype;
d.lm = null;
d.dm = null;
d.Bm = function(a) { this.al = a;
    this.lm = this.dm = null;
    this.Id(ek(this)) };
d.ao = function() { var a = this.Ae(); if (a) { var b = a.style[Wa()]; if ("undefined" !== typeof b) a = b;
        else { b = a.style; var c = ch["background-color"]; if (!c) { var e = Wa();
                c = e;
                void 0 === a.style[e] && (e = (C ? "Webkit" : B ? "Moz" : A ? "ms" : ib ? "O" : null) + Xa(e), void 0 !== a.style[e] && (c = e));
                ch["background-color"] = c } a = b[c] || "" } return fk(a) } return null };
d.Ap = function(a) { a = fk(a);
    this.lm || (this.lm = ua(this.al, function(a) { return fk(a) }));
    this.nk(a ? ra(this.lm, a) : -1) };

function ek(a) { return ua(a.al, function(a, c) { var b = this.vc().W("DIV", { "class": this.ma.Ma() + "-colorswatch", style: "background-color:" + a });
        b.title = this.dm && this.dm[c] ? this.dm[c] : "#" == a.charAt(0) ? "RGB (" + lj(a).join(", ") + ")" : a; return b }, a) }

function fk(a) { if (a) try { return Dj(a).lo } catch (b) {}
    return null };

function gk(a, b) { Qh.call(this, a);
    this.Xa = b || null;
    Th(this).na(this, "action", this.qx) } w(gk, Qh);
d = gk.prototype;
d.Tg = !0;
d.Bm = function(a) { this.Xa ? this.Xa.Bm(a) : hk(this, a) };
d.Fm = function(a) { this.Xa || hk(this, []);
    this.Xa.Fm(a) };
d.jf = function() { return this.Xa ? this.Xa.jf() : null };
d.zj = function() { return this.Xa ? this.Xa.zj() : -1 };
d.nk = function(a) { this.Xa && this.Xa.nk(a) };
d.ao = function() { return this.Xa ? this.Xa.ao() : null };
d.Ap = function(a) { this.Xa && this.Xa.Ap(a) };
d.lf = function() { return this.Tg };
d.uf = function(a) { this.Tg = a;
    this.Xa && this.Xa.Gc(32, a) };
d.Hb = function() { gk.s.Hb.call(this);
    this.Xa && this.Xa.$(this.G());
    this.G().unselectable = "on" };
d.Za = function() { gk.s.Za.call(this);
    this.Xa && (this.Xa.A(), this.Xa = null) };
d.focus = function() { this.Xa && this.Xa.G().focus() };
d.qx = function(a) { a.stopPropagation();
    this.dispatchEvent("change") };

function hk(a, b) { b = new dk(b, null, a.vc());
    b.Fm(5);
    b.Gc(32, a.Tg);
    a.Yi(b);
    a.Xa = b;
    a.Aa && a.Xa.$(a.G()) }
var ik = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function jk(a, b) { jk.s.constructor.call(this, a, b);
    this.Pb("\u00a0\u00a0\u00a0") }
var kk;
w(jk, ph);
jk.ha = function(a) { return new jk(a.colour) };
d = jk.prototype;
d.xv = null;
d.Pq = 0;
d.I = function() { jk.s.I.call(this);
    this.zd.style.fillOpacity = 1;
    this.setValue(this.getValue()) };
d.Mk = "default";
d.A = function() { x.K.Ij(this);
    jk.s.A.call(this) };
d.getValue = function() { return this.oe };
d.setValue = function(a) { this.v && x.j.isEnabled() && this.oe != a && x.j.U(new x.j.Kc(this.v, "field", this.name, this.oe, a));
    this.oe = a;
    this.zd && (this.zd.style.fill = a) };
d.Jb = function() { var a = this.oe,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]); return a };
d.setColumns = function(a) { this.Pq = a; return this };
d.Ne = function() { x.K.show(this, this.v.u, lk); var a = x.i.fo(),
        b = xh(this),
        c = this.jj(),
        e = ih(c.G());
    x.K.Yo(a, b, e, this.v.u); var f = this;
    kk = bc(c, "change", function(a) { a = a.target.ao() || "#000000";
        x.K.Na();
        f.v && (a = De(f, a));
        null !== a && f.setValue(a) }) };
d.jj = function() { var a = new gk;
    a.Fm(this.Pq || 7);
    a.Bm(this.xv || ik);
    a.$(x.K.ka);
    a.Ap(this.getValue()); return a };

function lk() { kk && kc(kk);
    x.j.R(!1) } rh("field_colour", jk);

function Hh(a, b) {
    u(a) || mk(a);
    this.dh = a;
    this.Mp = this.$o = null;
    a = this.dh;
    if (t(a)) {
        for (var c = !1, e = 0; e < a.length; e++) { var f = a[e][0]; "string" == typeof f ? a[e][0] = x.i.oc(f) : (null != f.alt && (a[e][0].alt = x.i.oc(f.alt)), c = !0) }
        if (!(c || 2 > a.length)) {
            f = [];
            for (e = 0; e < a.length; e++) f.push(a[e][0]);
            var h = x.i.Dp(f);
            e = x.i.Av(f, h);
            c = x.i.Bv(f, h);
            if ((e || c) && !(h <= e + c)) {
                e && (this.$o = f[0].substring(0, e - 1));
                c && (this.Mp = f[0].substr(1 - c));
                f = [];
                for (h = 0; h < a.length; h++) { var k = a[h][0],
                        l = a[h][1];
                    k = k.substring(e, k.length - c);
                    f[h] = [k, l] } this.dh =
                    f
            }
        }
    }
    a = this.getOptions()[0];
    Hh.s.constructor.call(this, a[1], b)
}
w(Hh, ph);
Hh.ha = function(a) { return new Hh(a.options) };
var nk = mb ? "\u25bc" : "\u25be";
d = Hh.prototype;
d.Mk = "default";
d.Vb = "";
d.Xd = null;
d.De = null;
d.I = function() { this.$a || (this.If = x.i.B("tspan", {}, null), this.If.appendChild(document.createTextNode(this.v.u ? nk + " " : " " + nk)), Hh.s.I.call(this)) };
d.Ne = function() { x.K.show(this, this.v.u, null); var a = new jj;
    a.vf(this.v.u); for (var b = this.getOptions(), c = 0; c < b.length; c++) { var e = b[c][0],
            f = b[c][1]; if ("object" == typeof e) { var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h } e = new fj(e);
        e.vf(this.v.u);
        e.setValue(f);
        e.up(!0);
        a.Yi(e, !0);
        Ii(e, f == this.Vb) } ok(this, a);
    pk(a);
    qk(a);
    b = x.i.fo();
    c = xh(this);
    this.v.u ? c.right += 25 : c.left -= 25;
    this.jj(a);
    f = x.i.Ji.jf(a);
    300 < f.height && (f.height = 300);
    this.v.u && x.i.Ji.tq(b, c, f);
    x.K.Yo(b, c, f, this.v.u);
    a.G().focus() };

function ok(a, b) { bc(b, "action", function(b) {
        (b = b.target) && a.Ls(b);
        x.K.Ij(a);
        x.j.R(!1) }) }

function pk(a) { Th(a).na(a.G(), "touchstart", function(a) { Ti(this, a.target).kf(a) }) }

function qk(a) { Th(a).na(a.G(), "touchend", function(a) { Ti(this, a.target).lg(a) }) } d.jj = function(a) { a.$(x.K.ka);
    x.i.qb(a.G(), "blocklyDropdownMenu");
    a.Tk = !0;
    a.uf(!0) };
d.Ls = function(a) { a = a.getValue();
    this.v && (a = De(this, a));
    null !== a && this.setValue(a) };
d.getOptions = function() { if (u(this.dh)) { var a = this.dh.call(this);
        mk(a); return a } return this.dh };
d.getValue = function() { return this.Vb };
d.setValue = function(a) { if (null !== a && a !== this.Vb) { this.v && x.j.isEnabled() && x.j.U(new x.j.Kc(this.v, "field", this.name, this.Vb, a));
        this.Vb = a; for (var b = this.getOptions(), c = 0; c < b.length; c++)
            if (b[c][1] == a) { a = b[c][0]; "object" == typeof a ? (this.De = a, this.xa = a.alt) : (this.De = null, this.xa = a);
                this.uj(); return } this.xa = a;
        this.uj() } };
d.Je = function() {
    if (this.Va) {
        this.v && this.If && (this.If.style.fill = this.v.oe);
        ee(this.Ba);
        H(this.Xd);
        this.Xd = null;
        if (this.De) {
            this.Xd = x.i.B("image", { y: 5, height: this.De.height + "px", width: this.De.width + "px" }, this.$a);
            this.Xd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.De.src);
            this.Ba.appendChild(this.If);
            var a = wh(this.If);
            this.ua.height = Number(this.De.height) + 19;
            this.ua.width = Number(this.De.width) + a;
            this.v.u ? (this.Xd.setAttribute("x", a), this.Ba.setAttribute("x", -1)) : (this.Ba.setAttribute("text-anchor",
                "end"), this.Ba.setAttribute("x", this.ua.width + 1))
        } else a = document.createTextNode(vh(this)), this.Ba.appendChild(a), this.v.u ? this.Ba.insertBefore(this.If, this.Ba.firstChild) : this.Ba.appendChild(this.If), this.Ba.setAttribute("text-anchor", "start"), this.Ba.setAttribute("x", 0), this.ua.height = 25, this.ua.width = wh(this.Ba);
        this.zd.setAttribute("height", this.ua.height - 9);
        this.zd.setAttribute("width", this.ua.width + 10)
    } else this.ua.width = 0
};
d.Fk = function() { if (this.De && (A || jb)) { var a = wh(this.If);
        a = Number(this.De.width) + a + 10;
        this.zd && this.zd.setAttribute("width", a);
        this.ua.width = a } else ph.prototype.Fk.call(this) };
d.A = function() { x.K.Ij(this);
    Hh.s.A.call(this) };

function mk(a) {
    if (!t(a)) throw "FieldDropdown options must be an array.";
    for (var b = !1, c = 0; c < a.length; ++c) {
        var e = a[c];
        t(a) ? q(e[1]) ? q(e[0]) || q(e[0].src) || (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must have a string label or image description. Found" + e[0] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must be an array. Found: ",
            e))
    }
    if (b) throw "Found invalid FieldDropdown options.";
}
rh("field_dropdown", Hh);

function rk(a, b, c, e, f) { this.v = null;
    this.Fa = Number(c);
    this.ia = Number(b);
    this.ua = new Sd(this.ia, this.Fa + 10);
    this.xa = e || "";
    this.setValue(a); "function" == typeof f && (this.vn = f) } w(rk, ph);
rk.ha = function(a) { var b = x.i.oc(a.src),
        c = Number(x.i.oc(a.width)),
        e = Number(x.i.oc(a.height));
    a = x.i.oc(a.alt); return new rk(b, c, e, a) };
d = rk.prototype;
d.Gg = !1;
d.I = function() { this.$a || (this.$a = x.i.B("g", {}, null), this.Va || (this.$a.style.display = "none"), this.Xd = x.i.B("image", { height: this.Fa + "px", width: this.ia + "px" }, this.$a), this.setValue(this.rt), this.v.ga().appendChild(this.$a), this.oa(this.v), x.C.Lg(this.Xd), this.vn && (this.hm = x.O(this.$a, "mousedown", this, this.pf))) };
d.A = function() { H(this.$a);
    this.Xd = this.$a = null };
d.oa = function(a) { this.Xd.nd = a };
d.getValue = function() { return this.rt };
d.setValue = function(a) { null !== a && (this.rt = a, this.Xd && this.Xd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a || "")) };
d.Pb = function(a) { null !== a && (this.xa = a) };
d.Je = function() {};
d.uj = function() {};
d.Fk = function() {};
d.Ne = function() { this.vn && this.vn(this) };
rh("field_image", rk);

function sk(a, b, c, e, f) { a = a && !isNaN(a) ? String(a) : "0";
    sk.s.constructor.call(this, a, f);
    a = parseFloat(e);
    this.Zo = isNaN(a) ? 0 : a;
    b = parseFloat(b);
    this.ix = isNaN(b) ? -Infinity : b;
    c = parseFloat(c);
    this.hx = isNaN(c) ? Infinity : c;
    this.setValue(De(this, this.getValue())) } w(sk, kj);
sk.ha = function(a) { return new sk(a.value, a.min, a.max, a.precision) };
sk.prototype.un = function(a) { if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    this.Zo && isFinite(a) && (a = Math.round(a / this.Zo) * this.Zo);
    a = pc(a, this.ix, this.hx); return String(a) };
rh("field_number", sk);

function tk(a, b, c, e) { this.dh = uk;
    this.ua = new Sd(0, 25);
    this.Bh = b;
    this.Pv = a || "";
    a = e || ""; if (null == c || void 0 == c) c = null;
    else if (Array.isArray(c)) { b = !1; for (e = 0; e < c.length; e++) c[e] == a && (b = !0); if (!b) throw Error("Invalid default type '" + a + "' in the definition of a FieldVariable"); } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    this.Ov = a;
    this.qy = c;
    this.Vb = null } w(tk, Hh);
tk.ha = function(a) { var b = x.i.oc(a.variable); return new tk(b, null, a.variableTypes, a.defaultType) };
d = tk.prototype;
d.I = function() { this.$a || (tk.s.I.call(this), this.Zg()) };
d.Zg = function() { if (!this.je) { this.m = this.v.o; var a = x.H.Il(this.m, null, this.Pv, this.Ov);
        x.j.disable(); try { this.setValue(a.aa()) } finally { x.j.enable() } } };
d.A = function() { tk.s.A.call(this);
    this.ta = this.m = null };
d.Cp = function(a) { tk.s.Cp.call(this, a) };
d.getValue = function() { return this.je ? this.je.aa() : null };
d.Jb = function() { return this.je ? this.je.name : "" };
d.Qc = function() { return this.je };
d.setValue = function(a) { var b = x.H.Qc(this.v.o, a); if (!b) throw Error("Variable id doesn't point to a real variable!  ID was " + a); var c = b.type,
        e;
    a: if (e = vk(this)) { for (var f = 0; f < e.length; f++)
            if (c == e[f]) { e = !0; break a } e = !1 } else e = !0; if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
    this.v && x.j.isEnabled() && (c = this.je ? this.je.aa() : null, x.j.U(new x.j.Kc(this.v, "field", this.name, c, a)));
    this.je = b;
    this.Vb = a;
    this.Pb(b.name) };

function vk(a) { var b = a.qy; if (null === b && a.v) return a.v.o.bo();
    b = b || [""]; if (0 == b.length) throw a = a.Jb(), Error("'variableTypes' of field variable " + a + " was an empty list"); return b }

function uk() { if (!this.je) throw Error("Tried to call dropdownCreate on a variable field with no variable selected."); var a = this.Jb(),
        b = null;
    this.v && (b = this.v.o); var c = []; if (b)
        for (var e = vk(this), f = 0; f < e.length; f++) c = c.concat(b.Bj(e[f]));
    c.sort(tg);
    b = []; for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].aa()];
    b.push([x.g.RENAME_VARIABLE, x.lq]);
    x.g.DELETE_VARIABLE && b.push([x.g.DELETE_VARIABLE.replace("%1", a), x.cq]); return b }
d.Ls = function(a) { a = a.getValue(); if (this.v && this.v.o) { var b = this.v.o; if (a == x.lq) { x.H.hp(b, this.je); return } if (a == x.cq) { b.Of(this.je.aa()); return } } this.setValue(a) };
d.lh = function() { return !0 };
rh("field_variable", tk);

function Dh() { this.cu = new RegExp(this.ud, "g") } d = Dh.prototype;
d.Ok = null;
d.Ph = null;
d.Te = "  ";
d.Ut = 60;
d.Sk = [];

function wk() { var a = x.h,
        b = xk;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = x.ei()); var c = [];
    a.I(b);
    b = cd(b, !0); for (var e = 0, f; f = b[e]; e++) { var h = yk(a, f);
        t(h) && (h = h[0]);
        h && (f.M && (h = a.ht(h)), c.push(h)) } c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n"); return c = c.replace(/[ \t]+\n/g, "\n") }

function zk(a, b) { return b + a.replace(/(?!\n$)\n/g, "\n" + b) }

function yk(a, b) { if (!b) return ""; if (b.disabled) return yk(a, Lc(b)); var c = a[b.type].call(b, b); if (t(c)) return [a.Am(b, c[0]), c[1]]; if (q(c)) { var e = b.id.replace(/\$/g, "$$$$");
        a.Ph && (c = a.Ph.replace(/%1/g, "'" + e + "'") + c); return a.Am(b, c) } if (null === c) return "" }

function U(a, b, c) { var e = x.h;
    a = Lh(a, b); if (!a) return "";
    b = yk(e, a); if ("" === b) return "";
    a = b[0];
    b = b[1]; if (!a) return ""; var f = !1,
        h = Math.floor(c),
        k = Math.floor(b); if (h <= k && (h != k || 0 != h && 99 != h))
        for (f = !0, h = 0; h < e.Sk.length; h++)
            if (e.Sk[h][0] == c && e.Sk[h][1] == b) { f = !1; break } f && (a = "(" + a + ")"); return a }

function Ak(a, b) { var c = x.h;
    a = Lh(a, b);
    (a = yk(c, a)) && (a = zk(a, c.Te)); return a }

function Bk(a, b) { var c = x.h;
    b = b.replace(/\$/g, "$$$$");
    c.Ok && (a = c.Ok.replace(/%1/g, "'" + b + "'") + a);
    c.Ph && (a += zk(c.Ph.replace(/%1/g, "'" + b + "'"), c.Te)); return a } d.Zm = "";

function Ck(a) { var b = x.h;
    b.Zm += a + "," } d.ud = "{leCUI8hutHZI4480Dc}";

function Dk(a, b) { var c = x.h; if (!c.Og[a]) { var e = Ek(c.Qa, a, x.ra.Ra);
        c.Vn[a] = e;
        b = b.join("\n").replace(c.cu, e); for (var f; f != b;) f = b, b = b.replace(/^(( {2})*) {2}/gm, "$1\x00");
        b = b.replace(/\0/g, c.Te);
        c.Og[a] = b } return c.Vn[a] } d.I = function() {};
d.Am = function(a, b) { return b };
d.finish = function(a) { return a };
d.ht = function(a) { return a };

function Fk() { var a = x.h.Zm;
    this.Gt = "";
    this.et = Object.create(null); if (a) { a = a.split(","); for (var b = 0; b < a.length; b++) this.et[a[b]] = !0 } this.reset() } Fk.prototype.reset = function() { this.Bd = Object.create(null);
    this.nr = Object.create(null);
    this.ta = null };
Fk.prototype.getName = function(a, b) {
    if (b == x.H.Ra) { var c = a;
        this.ta ? c = (c = this.ta.Vd(c)) ? c.name : null : (console.log("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"), c = null);
        c && (a = c) } c = a.toLowerCase() + "_" + b;
    var e = b == x.H.Ra || "DEVELOPER_VARIABLE" == b ? this.Gt : "";
    if (c in this.Bd) return e + this.Bd[c];
    a = Ek(this, a, b);
    this.Bd[c] =
        a.substr(e.length);
    return a
};

function Ek(a, b, c) { b ? (b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b)) : b = "unnamed"; for (var e = ""; a.nr[b + e] || b + e in a.et;) e = e ? e + 1 : 2;
    b += e;
    a.nr[b] = !0; return (c == x.H.Ra || "DEVELOPER_VARIABLE" == c ? a.Gt : "") + b }

function Uc(a, b) { return a.toLowerCase() == b.toLowerCase() };
x.ra = {};
x.ra.Ra = x.kq;
x.ra.$u = function(a) { a = Qc(a); for (var b = [], c = [], e = 0; e < a.length; e++)
        if (a[e].hf) { var f = a[e].hf();
            f && (f[2] ? b.push(f) : c.push(f)) } c.sort(x.ra.Zs);
    b.sort(x.ra.Zs); return [c, b] };
x.ra.Zs = function(a, b) { return a[0].toLowerCase().localeCompare(b[0].toLowerCase()) };
x.ra.gw = function(a, b) { if (b.vb) return a; for (; !x.ra.Sw(a, b.o, b);) { var c = a.match(/^(.*?)(\d+)$/);
        a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2" } return a };
x.ra.Sw = function(a, b, c) { return !x.ra.Uw(a, b, c) };
x.ra.Uw = function(a, b, c) { b = Qc(b); for (var e = 0; e < b.length; e++)
        if (b[e] != c && b[e].hf) { var f = b[e].hf(); if (Uc(f[0], a)) return !0 } return !1 };
x.ra.um = function(a) { a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""); var b = x.ra.gw(a, this.v),
        c = this.xa; if (c != a && c != b) { a = Qc(this.v.o); for (var e = 0; e < a.length; e++) a[e].hk && a[e].hk(c, b) } return b };
x.ra.Pf = function(a) {
    function b(a, b) { for (var e = 0; e < a.length; e++) { var f = a[e][0],
                h = a[e][1],
                k = G("block");
            k.setAttribute("type", b);
            k.setAttribute("gap", 16); var v = G("mutation");
            v.setAttribute("name", f);
            k.appendChild(v); for (f = 0; f < h.length; f++) { var y = G("arg");
                y.setAttribute("name", h[f]);
                v.appendChild(y) } c.push(k) } }
    var c = [];
    if (x.D.procedures_defnoreturn) {
        var e = G("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap", 16);
        var f = G("field", null, x.g.PROCEDURES_DEFNORETURN_PROCEDURE);
        f.setAttribute("name",
            "NAME");
        e.appendChild(f);
        c.push(e)
    }
    x.D.procedures_defreturn && (e = G("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = G("field", null, x.g.PROCEDURES_DEFRETURN_PROCEDURE), f.setAttribute("name", "NAME"), e.appendChild(f), c.push(e));
    x.D.procedures_ifreturn && (e = G("block"), e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), c.push(e));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = x.ra.$u(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};
x.ra.lw = function(a, b) { var c = [];
    b = Qc(b); for (var e = 0; e < b.length; e++)
        if (b[e].Ed) { var f = b[e].Ed();
            f && Uc(f, a) && c.push(b[e]) } return c };
x.ra.Ho = function(a) { var b = x.j.nc,
        c = a.hf()[0],
        e = a.Ka(!0);
    a = x.ra.lw(c, a.o);
    c = 0; for (var f; f = a[c]; c++) { var h = f.Ka();
        h = h && x.F.Cd(h);
        f.ib(e); var k = f.Ka();
        k = k && x.F.Cd(k);
        h != k && (x.j.nc = !1, x.j.U(new x.j.Kc(f, "mutation", null, h, k)), x.j.nc = b) } };
x.ra.Cl = function(a, b) { b = cd(b, !1); for (var c = 0; c < b.length; c++)
        if (b[c].hf) { var e = b[c].hf(); if (e && Uc(e[0], a)) return b[c] } return null };

function Gk(a, b, c, e) { this.m = a;
    this.va = b;
    this.xa = c.getAttribute("text");
    this.Tc = new D(0, 0);
    this.bh = e;
    this.tn = null;
    a = c.getAttribute("callbackKey");
    this.bh && a ? console.warn("Labels should not have callbacks. Label text: " + this.xa) : this.bh || a && Wg(b, a) ? this.tn = Wg(b, a) : console.warn("Buttons should have callbacks. Button text: " + this.xa);
    this.Yq = c.getAttribute("web-class") || null } d = Gk.prototype;
d.width = 0;
d.height = 0;
d.ui = null;
d.W = function() {
    var a = this.bh ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.Yq && (a += " " + this.Yq);
    this.w = x.i.B("g", { "class": a }, this.m.Ua);
    if (!this.bh) var b = x.i.B("rect", { "class": "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 }, this.w);
    a = x.i.B("rect", { "class": this.bh ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground", rx: 4, ry: 4 }, this.w);
    var c = x.i.B("text", { "class": this.bh ? "blocklyFlyoutLabelText" : "blocklyText", x: 0, y: 0, "text-anchor": "middle" }, this.w);
    c.textContent = this.xa;
    this.width = wh(c);
    this.height = 20;
    this.bh || (this.width += 10, b.setAttribute("width", this.width), b.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height", this.height);
    c.setAttribute("x", this.width / 2);
    c.setAttribute("y", this.height - 5);
    Hk(this);
    x.O(this.w, "mouseup", this, this.Hx);
    return this.w
};
d.show = function() { Hk(this);
    this.w.setAttribute("display", "block") };

function Hk(a) { a.w.setAttribute("transform", "translate(" + a.Tc.x + "," + a.Tc.y + ")") }
d.moveTo = function(a, b) { this.Tc.x = a;
    this.Tc.y = b;
    Hk(this) };
d.Or = function() { return this.Tc };
d.A = function() { this.ui && x.Pa(this.ui);
    this.w && (H(this.w), this.w = null);
    this.va = this.m = null };
d.Hx = function(a) {
    (a = this.va.ye(a)) && a.cancel();
    this.tn && this.tn(this) };

function Ik(a) { a.ub = this.gf.bind(this);
    a.ug = this.Dm.bind(this);
    this.m = new Ig(a);
    this.m.Yd = !0;
    this.u = !!a.u;
    this.xf = a.Ea;
    this.Qn = [];
    this.gm = [];
    this.bj = [];
    this.Ec = [];
    this.Wo = [] } d = Ik.prototype;
d.Sh = !0;
d.Tj = !1;
d.Mg = !0;
d.qa = 8;
d.vd = Ik.prototype.qa;
d.gu = 3 * Ik.prototype.vd;
d.iu = 3 * Ik.prototype.vd;
d.Ig = 2;
d.ia = 0;
d.Fa = 0;
d.Br = 70;
d.W = function(a) { this.w = x.i.B(a, { "class": "blocklyFlyout", style: "display: none" }, null);
    this.ld = x.i.B("path", { "class": "blocklyFlyoutBackground" }, this.w);
    this.w.appendChild(this.m.W()); return this.w };
d.I = function(a) { this.va = a;
    this.m.yh = a;
    this.Zb = new bg(this.m, this.Wd, !1, "blocklyFlyoutScrollbar");
    this.Na();
    Array.prototype.push.apply(this.Qn, x.O(this.w, "wheel", this, this.Kt));
    this.Sh || (this.ul = this.Sn.bind(this), this.va.xd(this.ul));
    Array.prototype.push.apply(this.Qn, x.O(this.ld, "mousedown", this, this.pf));
    this.m.ye = this.va.ye.bind(this.va);
    this.m.ta = this.va.ta;
    a = this.m;
    a.zi = new Pc(a) };
d.A = function() { this.Na();
    x.Pa(this.Qn);
    this.ul && (this.va.ng(this.ul), this.ul = null);
    this.Zb && (this.Zb.A(), this.Zb = null);
    this.m && (this.m.yh = null, this.m.A(), this.m = null);
    this.w && (H(this.w), this.w = null);
    this.va = this.ld = null };
d.dd = function() { return this.ia };
d.di = function() { return this.Fa };
d.Cj = function() { return this.m };
d.Y = function() { return this.Tj };
d.pa = function(a) { var b = a != this.Y();
    this.Tj = a;
    b && this.Ck() };
d.oh = function(a) { var b = a != this.Mg;
    this.Mg = a;
    b && this.Ck() };
d.Ck = function() { var a = this.Mg ? this.Y() : !1;
    this.w.style.display = a ? "block" : "none";
    this.Zb.oh(a) };

function Jk(a, b, c, e, f) { a.w.setAttribute("width", b);
    a.w.setAttribute("height", c); "svg" == a.w.tagName ? x.i.kk(a.w, "translate(" + e + "px," + f + "px)") : a.w.setAttribute("transform", "translate(" + e + "," + f + ")");
    a.Zb && (a.Zb.So = new D(e, f), a.Zb.resize()) } d.Na = function() { if (this.Y()) { this.pa(!1); for (var a = 0, b; b = this.Ec[a]; a++) x.Pa(b);
        this.Ec.length = 0;
        this.mg && (this.m.ng(this.mg), this.mg = null) } };
d.show = function(a) {
    this.m.Tb(!1);
    this.Na();
    Kk(this);
    "string" == typeof a && (a = Xg(this.m.yh, a)(this.m.yh));
    this.pa(!0);
    for (var b = [], c = [], e = this.Wo.length = 0, f; f = a[e]; e++)
        if (f.tagName) {
            var h = f.tagName.toUpperCase(),
                k = this.Wd ? this.gu : this.iu;
            if ("BLOCK" == h) h = x.F.Yh(f, this.m), h.disabled && this.Wo.push(h), b.push({ type: "block", block: h }), f = parseInt(f.getAttribute("gap"), 10), c.push(isNaN(f) ? k : f);
            else if ("SEP" == f.tagName.toUpperCase()) f = parseInt(f.getAttribute("gap"), 10), !isNaN(f) && 0 < c.length ? c[c.length - 1] = f : c.push(k);
            else if ("BUTTON" == h || "LABEL" == h) f = new Gk(this.m, this.va, f, "LABEL" == h), b.push({ type: "button", button: f }), c.push(k)
        } this.os(b, c);
    this.Ec.push(x.O(this.ld, "mouseover", this, function() { for (var a = cd(this.m, !1), b = 0, c; c = a[b]; b++) c.mh() }));
    this.Wd ? this.Fa = 0 : this.ia = 0;
    this.m.Tb(!0);
    this.fp();
    this.Sn();
    this.position();
    this.mg = this.fp.bind(this);
    this.m.xd(this.mg)
};

function Kk(a) { for (var b = cd(a.m, !1), c = 0, e; e = b[c]; c++) e.o == a.m && e.A(!1, !1); for (c = 0; c < a.gm.length; c++)(b = a.gm[c]) && H(b); for (c = a.gm.length = 0; b = a.bj[c]; c++) b.A();
    a.bj.length = 0;
    a.m.zi.clear() }

function Lk(a, b, c, e) { a.Ec.push(x.O(b, "mousedown", null, Mk(a, c)));
    a.Ec.push(x.O(e, "mousedown", null, Mk(a, c)));
    a.Ec.push(x.Mc(b, "mouseover", c, c.Rh));
    a.Ec.push(x.Mc(b, "mouseout", c, c.mh));
    a.Ec.push(x.Mc(e, "mouseover", c, c.Rh));
    a.Ec.push(x.Mc(e, "mouseout", c, c.mh)) }

function Mk(a, b) { return function(c) { var e = a.va.ye(c);
        e && (Uf(e, b), e.J || (e.J = a), e.mb || (e.mb = a.Cj()), e.Sc = c, e.oj(c)) } } d.pf = function(a) { var b = this.va.ye(a);
    b && (b.J || (b.J = this), b.mb || (b.mb = this.Cj()), b.Sc = a, b.oj(a)) };

function Pf(a, b) { var c = null;
    x.j.disable(); var e = a.va.ff();
    a.va.Tb(!1); try { var f = a.va; if (!b.ga()) throw "oldBlock is not rendered."; var h = x.F.Lf(b);
        f.Tb(!1); var k = x.F.Yh(h, f); if (!k.ga()) throw "block is not rendered."; var l = x.i.Fl(f.Ua),
            m = x.i.Fl(a.m.Ua),
            n = b.la().scale(a.m.scale),
            p = uc(vc(m, n), l).scale(1 / f.scale);
        k.moveBy(p.x, p.y);
        c = k;
        x.Rb() } finally { x.j.enable() } b = x.H.Lr(a.va, e); if (x.j.isEnabled())
        for (x.j.R(!0), x.j.U(new yc(c)), e = 0; e < b.length; e++) x.j.U(new Cc(b[e]));
    a.Sh ? a.Na() : a.Sn(); return c }

function Nk(a, b, c, e) { var f = b.W();
    b.moveTo(c, e);
    b.show();
    a.Ec.push(x.O(f, "mousedown", a, a.pf));
    a.bj.push(b) }

function Ok(a, b, c, e, f, h) { c = x.i.B("rect", { "fill-opacity": 0, x: c, y: e, height: f.height, width: f.width }, null);
    c.nd = b;
    x.C.Lg(c);
    a.m.Ua.insertBefore(c, b.ga());
    b.vl = c; return a.gm[h] = c }

function Pk(a, b, c) { var e = c.Ib();
    b.setAttribute("width", e.width);
    b.setAttribute("height", e.height); var f = c.ut ? 15 : 0;
    f && c.moveBy(0, f);
    f = c.M ? M : 0;
    c = c.la();
    b.setAttribute("y", c.y);
    b.setAttribute("x", a.u ? c.x - e.width + f : c.x - f) }
d.Sn = function() { for (var a = fd(this.va), b = cd(this.m, !1), c = 0, e; e = b[c]; c++)
        if (-1 == this.Wo.indexOf(e)) { var f = xc(e, !1);
            e.Jd(f.length > a) } };
d.fp = function() { this.mg && this.m.ng(this.mg);
    this.ct();
    this.mg && this.m.xd(this.mg) };

function Nf(a) { return a.Zb ? a.Zb.Y() : !1 };

function Og(a) { a.ub = this.gf.bind(this);
    a.ug = this.Dm.bind(this);
    Og.s.constructor.call(this, a);
    this.Wd = !0 } w(Og, Ik);
d = Og.prototype;
d.gf = function() { if (!this.Y()) return null; try { var a = this.m.Ua.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.Ig,
        c = this.Ig;
    this.xf == x.Jg && (b = 0); var e = this.Fa;
    this.xf == x.Hf && (e -= this.Ig); return { gb: e, za: this.ia - 2 * this.Ig, rc: (a.height + 2 * this.vd) * this.m.scale, Oc: (a.width + 2 * this.vd) * this.m.scale, Re: -this.m.scrollY, Cb: -this.m.scrollX, tc: a.y, Nc: a.x, zb: b, pb: c } };
d.Dm = function(a) { var b = this.gf();
    b && (r(a.x) && (this.m.scrollX = -b.Oc * a.x), this.m.translate(this.m.scrollX + b.pb, this.m.scrollY + b.zb)) };
d.position = function() { if (this.Y()) { var a = this.va.ub(); if (a) { this.ia = a.za;
            this.tp(a.za - 2 * this.qa, this.Fa - this.qa); var b = a.pb,
                c = a.zb;
            this.xf == x.Jg && (c += a.gb - this.Fa);
            Jk(this, this.ia, this.Fa, b, c) } } };
d.tp = function(a, b) { var c = this.xf == x.Hf,
        e = ["M 0," + (c ? 0 : this.qa)];
    c ? (e.push("h", a + 2 * this.qa), e.push("v", b), e.push("a", this.qa, this.qa, 0, 0, 1, -this.qa, this.qa), e.push("h", -1 * a), e.push("a", this.qa, this.qa, 0, 0, 1, -this.qa, -this.qa)) : (e.push("a", this.qa, this.qa, 0, 0, 1, this.qa, -this.qa), e.push("h", a), e.push("a", this.qa, this.qa, 0, 0, 1, this.qa, this.qa), e.push("v", b), e.push("h", -a - 2 * this.qa));
    e.push("z");
    this.ld.setAttribute("d", e.join(" ")) };
d.op = function() { this.Zb.set(this.u ? Infinity : 0) };
d.Kt = function(a) { var b = a.deltaX; if (b) { B && 1 === a.deltaMode && (b *= 10); var c = this.gf();
        b = c.Cb + b;
        b = Math.min(b, c.Oc - c.za);
        b = Math.max(b, 0);
        this.Zb.set(b);
        x.K.Na() } a.preventDefault();
    a.stopPropagation() };
d.os = function(a, b) { this.m.scale = this.va.scale; var c = this.vd,
        e = this.u ? c : c + M;
    this.u && (a = a.reverse()); for (var f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = xc(h, !1), l = 0, m; m = k[l]; l++) m.vb = !0;
            h.$();
            k = h.ga();
            l = h.Ib();
            m = h.M ? M : 0;
            m = this.u ? e + l.width : e + m;
            h.moveBy(m, c);
            m = Ok(this, h, m, c, l, f);
            e += l.width + b[f];
            Lk(this, k, h, m) } else "button" == h.type && (Nk(this, h.button, e, c), e += h.button.width + b[f]) };
d.js = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.Br; return a < 90 + b && a > 90 - b || a > -90 - b && a < -90 + b ? !0 : !1 };
d.ai = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(),
        b = a.top;
    a = a.height; if (this.xf == x.Hf) return new rg(-1E9, b - 1E9, 2E9, 1E9 + a); if (this.xf == x.Jg) return new rg(-1E9, b, 2E9, 1E9 + a) };
d.ct = function() { this.m.scale = this.va.scale; for (var a = 0, b = cd(this.m, !1), c = 0, e; e = b[c]; c++) a = Math.max(a, e.Ib().height);
    a += 1.5 * this.vd;
    a *= this.m.scale;
    a += I; if (this.Fa != a) { for (c = 0; e = b[c]; c++) e.vl && Pk(this, e.vl, e);
        this.Fa = a;
        this.va.resize() } };

function Pg(a) { a.ub = this.gf.bind(this);
    a.ug = this.Dm.bind(this);
    Pg.s.constructor.call(this, a);
    this.Wd = !1 } w(Pg, Ik);
d = Pg.prototype;
d.gf = function() { if (!this.Y()) return null; try { var a = this.m.Ua.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.Ig,
        c = this.Fa - 2 * this.Ig,
        e = this.ia;
    this.u || (e -= this.Ig); return { gb: c, za: e, rc: a.height * this.m.scale + 2 * this.vd, Oc: a.width * this.m.scale + 2 * this.vd, Re: -this.m.scrollY + a.y, Cb: -this.m.scrollX, tc: a.y, Nc: a.x, zb: b, pb: 0 } };
d.Dm = function(a) { var b = this.gf();
    b && (r(a.y) && (this.m.scrollY = -b.rc * a.y), this.m.translate(this.m.scrollX + b.pb, this.m.scrollY + b.zb)) };
d.position = function() { if (this.Y()) { var a = this.va.ub(); if (a) { this.Fa = a.gb;
            this.tp(this.ia - this.qa, a.gb - 2 * this.qa); var b = a.zb,
                c = a.pb;
            this.xf == x.ke && (this.Ww = c += a.za - this.ia);
            Jk(this, this.ia, this.Fa, c, b) } } };
d.tp = function(a, b) { var c = this.xf == x.ke,
        e = a + this.qa;
    e = ["M " + (c ? e : 0) + ",0"];
    e.push("h", c ? -a : a);
    e.push("a", this.qa, this.qa, 0, 0, c ? 0 : 1, c ? -this.qa : this.qa, this.qa);
    e.push("v", Math.max(0, b));
    e.push("a", this.qa, this.qa, 0, 0, c ? 0 : 1, c ? this.qa : -this.qa, this.qa);
    e.push("h", c ? a : -a);
    e.push("z");
    this.ld.setAttribute("d", e.join(" ")) };
d.op = function() { this.Zb.set(0) };
d.Kt = function(a) { var b = a.deltaY; if (b) { B && 1 === a.deltaMode && (b *= 10); var c = this.gf();
        b = c.Re - c.tc + b;
        b = Math.min(b, c.rc - c.gb);
        b = Math.max(b, 0);
        this.Zb.set(b);
        x.K.Na() } a.preventDefault();
    a.stopPropagation() };
d.os = function(a, b) { this.m.scale = this.va.scale; for (var c = this.vd, e = this.u ? c : c + M, f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = xc(h, !1), l = 0, m; m = k[l]; l++) m.vb = !0;
            h.$();
            k = h.ga();
            l = h.Ib();
            h.moveBy(e, c);
            m = Ok(this, h, this.u ? e - l.width : e, c, l, f);
            Lk(this, k, h, m);
            c += l.height + b[f] } else "button" == h.type && (Nk(this, h.button, e, c), c += h.button.height + b[f]) };
d.js = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.Br; return a < b && a > -b || a < -180 + b || a > 180 - b ? !0 : !1 };
d.ai = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(),
        b = a.left;
    a = a.width; if (this.xf == x.Gf) return new rg(b - 1E9, -1E9, 1E9 + a, 2E9); if (B && this.va && this.va.Rj) { var c = this.va.w.getBoundingClientRect().x;
        10 > Math.abs(c - b) && (b += this.Ww * this.va.options.Mb.scale) } return new rg(b, -1E9, 1E9 + a, 2E9) };
d.ct = function() { this.m.scale = this.va.scale; for (var a = 0, b = cd(this.m, !1), c = 0, e; e = b[c]; c++) { var f = e.Ib().width;
        e.M && (f -= M);
        a = Math.max(a, f) } for (c = 0; e = this.bj[c]; c++) a = Math.max(a, e.width);
    a += 1.5 * this.vd + M;
    a *= this.m.scale;
    a += I; if (this.ia != a) { for (c = 0; e = b[c]; c++) this.u && (f = e.la().x, e.moveBy(a / this.m.scale - this.vd - M - f, 0)), e.vl && Pk(this, e.vl, e); if (this.u)
            for (c = 0; e = this.bj[c]; c++) b = e.Or().y, e.moveTo(a / this.m.scale - e.width - this.vd - M, b);
        this.ia = a;
        this.va.resize() } };

function Qk(a) { og.call(this);
    this.S = a;
    a = A ? "focusout" : "blur";
    this.Yw = bc(this.S, A ? "focusin" : "focus", this, !A);
    this.Zw = bc(this.S, a, this, !A) } w(Qk, og);
Qk.prototype.handleEvent = function(a) { var b = new Nb(a.te);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b) };
Qk.prototype.Za = function() { Qk.s.Za.call(this);
    kc(this.Yw);
    kc(this.Zw);
    delete this.S };

function Rk(a, b) { null != a && this.append.apply(this, arguments) } d = Rk.prototype;
d.Db = "";
d.set = function(a) { this.Db = "" + a };
d.append = function(a, b, c) { this.Db += String(a); if (null != b)
        for (var e = 1; e < arguments.length; e++) this.Db += arguments[e]; return this };
d.clear = function() { this.Db = "" };
d.toString = function() { return this.Db };

function Sk(a, b, c) { Qh.call(this, c);
    this.eb = b || Tk;
    a instanceof Fd || (a = Id(a), a = Jd(Hd(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.ci()));
    this.Kj = a;
    this.rj = this.pp = !1;
    this.hy = null;
    this.Xu = Pd;
    this.Sj = !0;
    this.jl = -1 } w(Sk, Qh);
var Uk = {};
d = Sk.prototype;
d.Za = function() { Sk.s.Za.call(this);
    this.Ag && (this.Ag.removeNode(this), this.Ag = null);
    this.S = null };
d.Tl = function() { var a = this.G(); if (a) { var b = Vk(this);
        b && !b.id && (b.id = this.aa() + ".label");
        ai(a, "treeitem");
        S(a, "selected", !1);
        S(a, "level", this.bi());
        b && S(a, "labelledby", b.id);
        (b = this.El()) && ai(b, "presentation");
        (b = this.Dl()) && ai(b, "presentation"); if (b = Wk(this))
            if (ai(b, "group"), b.hasChildNodes())
                for (S(a, "expanded", !1), a = Wh(this), b = 1; b <= a; b++) { var c = R(this, b - 1).G();
                    S(c, "setsize", a);
                    S(c, "posinset", b) } } };
d.W = function() { var a = this.vc(); var b = this.Mm(); var c = a.Sd;
    a = c.createElement("DIV");
    A ? (Rd(a, Od(Qd, b)), a.removeChild(a.firstChild)) : Rd(a, b); if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else
        for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.S = b };
d.Hb = function() { Sk.s.Hb.call(this);
    Uk[this.aa()] = this;
    this.Tl() };
d.Dd = function() { Sk.s.Dd.call(this);
    delete Uk[this.aa()] };
d.Qh = function(a, b) { var c = R(this, b - 1),
        e = R(this, b);
    Sk.s.Qh.call(this, a, b);
    a.ae = c;
    a.Zd = e;
    c ? c.Zd = a : this.Hr = a;
    e ? e.ae = a : this.ls = a;
    (b = this.zc()) && Xk(a, b);
    Yk(a, this.bi() + 1); if (b = this.G())
        if (this.Ki(), S(b, "expanded", this.wc()), this.wc()) { b = Wk(this);
            a.G() || a.W(); var f = a.G(),
                h = e && e.G();
            b.insertBefore(f, h);
            this.Aa && a.Hb();
            e || (c ? c.Ki() : (kh(b, !0), this.ee(this.wc()))) } };
d.add = function(a, b) { a.getParent() && a.getParent().removeChild(a);
    this.Qh(a, b ? Zh(this, b) : Wh(this)); return a };
d.removeChild = function(a) {
    var b = this.zc(),
        c = b ? b.Ae() : null;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), vf(this.Jx, 10, this)) : this.select();
    Sk.s.removeChild.call(this, a);
    this.ls == a && (this.ls = a.ae);
    this.Hr == a && (this.Hr = a.Zd);
    a.ae && (a.ae.Zd = a.Zd);
    a.Zd && (a.Zd.ae = a.ae);
    c = !a.Zd;
    a.Ag = null;
    a.jl = -1;
    if (b && (b.removeNode(a), this.Aa)) {
        b = Wk(this);
        if (a.Aa) { var e = a.G();
            b.removeChild(e);
            a.Dd() } c && (c = R(this, Wh(this) - 1)) && c.Ki();
        Yh(this) || (b.style.display = "none", this.Ki(), this.El().className = this.yl(), (c = this.G()) &&
            c.removeAttribute("aria-expanded"))
    }
    return a
};
d.remove = Sk.prototype.removeChild;
d.Jx = function() { this.select() };
d.bi = function() { var a = this.jl;
    0 > a && (a = (a = this.getParent()) ? a.bi() + 1 : 0, Yk(this, a)); return a };

function Yk(a, b) { if (b != a.jl) { a.jl = b; var c = Zk(a); if (c) { var e = $k(a) + "px";
            Xh(a) ? c.style.paddingRight = e : c.style.paddingLeft = e } Vh(a, function(a) { Yk(a, b + 1) }) } } d.contains = function(a) { for (; a;) { if (a == this) return !0;
        a = a.getParent() } return !1 };
d.Qf = function() { var a = [];
    Vh(this, function(b) { a.push(b) }); return a };
d.Zl = function() { return this.pp };
d.select = function() { var a = this.zc();
    a && a.kd(this) };

function al(a, b) { if (a.pp != b) { a.pp = b;
        bl(a); var c = a.G();
        c && (S(c, "selected", b), b && (b = a.zc().G(), S(b, "activedescendant", a.aa()))) } } d.wc = function() { return this.rj };
d.ee = function(a) { var b = a != this.rj; if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) { this.rj = a; var c = this.zc(); var e = this.G(); if (Yh(this)) { if (!a && c && this.contains(c.Ae()) && this.select(), e) { if (c = Wk(this))
                    if (kh(c, a), S(e, "expanded", a), a && this.Aa && !c.hasChildNodes()) { var f = [];
                        Vh(this, function(a) { f.push(a.Mm()) });
                        Rd(c, Od(f));
                        Vh(this, function(a) { a.Hb() }) } this.Ki() } } else(c = Wk(this)) && kh(c, !1);
        e && (this.El().className = this.yl());
        b && this.dispatchEvent(a ? "expand" : "collapse") } };
d.toggle = function() { this.ee(!this.wc()) };
d.expand = function() { this.ee(!0) };
d.collapse = function() { this.ee(!1) };
d.np = function() { var a = this.getParent();
    a && (a.ee(!0), a.np()) };
d.Mm = function() { var a = this.zc(),
        b = !a.pk || a == this.getParent() && !a.Gp ? this.eb.Xq : this.eb.Wq;
    a = this.wc() && Yh(this);
    b = { "class": b, style: cl(this) }; var c = [];
    a && Vh(this, function(a) { c.push(a.Mm()) });
    a = Nd("div", b, c); return Nd("div", { "class": this.eb.jr, id: this.aa() }, [dl(this), a]) };

function $k(a) { return Math.max(0, (a.bi() - 1) * a.eb.qo) }

function dl(a) { var b = {};
    b["padding-" + (Xh(a) ? "right" : "left")] = $k(a) + "px";
    b = { "class": a.yj(), style: b }; var c = a.Zn(),
        e = Nd("span", { style: { display: "inline-block" }, "class": a.yl() }),
        f = Nd("span", { "class": a.eb.kr, title: a.hy || null }, a.Kj);
    a = Od(f, Nd("span", {}, a.Xu)); return Nd("div", b, [c, e, a]) } d.yj = function() { return this.eb.Dn + (this.Zl() ? " " + this.eb.mr : "") };
d.Zn = function() { return Nd("span", { type: "expand", style: { display: "inline-block" }, "class": el(this) }) };

function el(a) { var b = a.zc(),
        c = !b.pk || b == a.getParent() && !b.Gp,
        e = a.eb,
        f = new Rk;
    f.append(e.Ng, " ", e.Hv, " "); if (Yh(a)) { var h = 0;
        b.Fp && a.Sj && (h = a.wc() ? 2 : 1);
        c || (h = a.Zd ? h + 8 : h + 4); switch (h) {
            case 1:
                f.append(e.Lv); break;
            case 2:
                f.append(e.Kv); break;
            case 4:
                f.append(e.dr); break;
            case 5:
                f.append(e.Jv); break;
            case 6:
                f.append(e.Iv); break;
            case 8:
                f.append(e.er); break;
            case 9:
                f.append(e.Nv); break;
            case 10:
                f.append(e.Mv); break;
            default:
                f.append(e.cr) } } else c ? f.append(e.cr) : a.Zd ? f.append(e.er) : f.append(e.dr); return f.toString() }

function cl(a) { var b = a.wc() && Yh(a); return yd({ "background-position": fl(a), display: b ? null : "none" }) }

function fl(a) { return (a.Zd ? (a.bi() - 1) * a.eb.qo : "-100") + "px 0" } d.G = function() { var a = Sk.s.G.call(this);
    a || (this.S = a = this.vc().G(this.aa())); return a };

function Zk(a) { return (a = a.G()) ? a.firstChild : null } d.Dl = function() { var a = Zk(this); return a ? a.firstChild : null };
d.El = function() { var a = Zk(this); return a ? a.childNodes[1] : null };

function Vk(a) { return (a = Zk(a)) && a.lastChild ? a.lastChild.previousSibling : null }

function Wk(a) { return (a = a.G()) ? a.lastChild : null } d.Pb = function(a) { this.Kj = a = Id(a); var b = Vk(this);
    b && Rd(b, a);
    (a = this.zc()) && gl(a, this) };
d.Jb = function() { var a = Hd(this.Kj); return -1 != a.indexOf("&") ? "document" in g ? Sa(a) : Ua(a) : a };

function bl(a) { var b = Zk(a);
    b && (b.className = a.yj()) } d.Ki = function() { var a = this.Dl();
    a && (a.className = el(this)); if (a = Wk(this)) a.style.backgroundPosition = fl(this) };
d.Ms = function(a) { "expand" == a.target.getAttribute("type") && Yh(this) ? this.Sj && this.toggle() : (this.select(), bl(this)) };
d.No = function(a) { a.preventDefault() };
d.Js = function(a) { "expand" == a.target.getAttribute("type") && Yh(this) || this.Sj && this.toggle() };
d.Po = function(a) {
    var b = !0;
    switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            Yh(this) && (this.wc() ? R(this, 0).select() : this.ee(!0));
            break;
        case 37:
            if (a.altKey) break;
            if (Yh(this) && this.wc() && this.Sj) this.ee(!1);
            else { var c = this.getParent(),
                    e = this.zc();
                c && (e.rh || c != e) && c.select() }
            break;
        case 40:
            a: if (Yh(this) && this.wc()) c = R(this, 0);
                else { for (c = this; c != this.zc();) { e = c.Zd; if (null != e) { c = e; break a } c = c.getParent() } c = null } c && c.select();
            break;
        case 38:
            c = this.ae;
            null != c ? c = hl(c) : (c = this.getParent(), e = this.zc(), c = !e.rh && c ==
                e || this == e ? null : c);
            c && c.select();
            break;
        default:
            b = !1
    }
    b && (a.preventDefault(), (e = this.zc()) && e.Ak.clear());
    return b
};

function hl(a) { return a.wc() && Yh(a) ? hl(R(a, Wh(a) - 1)) : a }

function Xk(a, b) { a.Ag != b && (a.Ag = b, gl(b, a), Vh(a, function(a) { Xk(a, b) })) }
var Tk = {
    qo: 19,
    lr: "goog-tree-root goog-tree-item",
    ir: "goog-tree-hide-root",
    jr: "goog-tree-item",
    Wq: "goog-tree-children",
    Xq: "goog-tree-children-nolines",
    Dn: "goog-tree-row",
    kr: "goog-tree-item-label",
    Ng: "goog-tree-icon",
    Hv: "goog-tree-expand-icon",
    Lv: "goog-tree-expand-icon-plus",
    Kv: "goog-tree-expand-icon-minus",
    Nv: "goog-tree-expand-icon-tplus",
    Mv: "goog-tree-expand-icon-tminus",
    Jv: "goog-tree-expand-icon-lplus",
    Iv: "goog-tree-expand-icon-lminus",
    er: "goog-tree-expand-icon-t",
    dr: "goog-tree-expand-icon-l",
    cr: "goog-tree-expand-icon-blank",
    Bn: "goog-tree-expanded-folder-icon",
    Zq: "goog-tree-collapsed-folder-icon",
    Cn: "goog-tree-file-icon",
    gr: "goog-tree-expanded-folder-icon",
    $q: "goog-tree-collapsed-folder-icon",
    mr: "selected"
};

function il(a, b, c) { Sk.call(this, a, b, c) } w(il, Sk);
il.prototype.zc = function() { if (this.Ag) return this.Ag; var a = this.getParent(); return a && (a = a.zc()) ? (Xk(this, a), a) : null };
il.prototype.yl = function() { var a = this.wc(),
        b = this.cw; if (a && b) return b;
    b = this.Kw; if (!a && b) return b;
    b = this.eb; if (Yh(this)) { if (a && b.Bn) return b.Ng + " " + b.Bn; if (!a && b.Zq) return b.Ng + " " + b.Zq } else if (b.Cn) return b.Ng + " " + b.Cn; return "" };

function jl(a) { if (a.Aj && "function" == typeof a.Aj) return a.Aj(); if (q(a)) return a.split(""); if (fa(a)) { for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]); return b } b = [];
    c = 0; for (e in a) b[c++] = a[e]; return b };

function kl(a) { this.Vb = void 0;
    this.hc = {}; if (a) { if (a.Hl && "function" == typeof a.Hl) var b = a.Hl();
        else if (a.Aj && "function" == typeof a.Aj) b = void 0;
        else if (fa(a) || q(a)) { b = []; for (var c = a.length, e = 0; e < c; e++) b.push(e) } else
            for (e in b = [], c = 0, a) b[c++] = e;
        a = jl(a); for (c = 0; c < b.length; c++) this.set(b[c], a[c]) } } d = kl.prototype;
d.set = function(a, b) { ll(this, a, b, !1) };
d.add = function(a, b) { ll(this, a, b, !0) };

function ll(a, b, c, e) { for (var f = 0; f < b.length; f++) { var h = b.charAt(f);
        a.hc[h] || (a.hc[h] = new kl);
        a = a.hc[h] } if (e && void 0 !== a.Vb) throw Error('The collection already contains the key "' + b + '"');
    a.Vb = c } d.get = function(a) { a: { for (var b = this, c = 0; c < a.length; c++)
            if (b = b.hc[a.charAt(c)], !b) { a = void 0; break a } a = b } return a ? a.Vb : void 0 };
d.Aj = function() { var a = [];
    ml(this, a); return a };

function ml(a, b) { void 0 !== a.Vb && b.push(a.Vb); for (var c in a.hc) ml(a.hc[c], b) }
d.Hl = function(a) { var b = []; if (a) { for (var c = this, e = 0; e < a.length; e++) { var f = a.charAt(e); if (!c.hc[f]) return [];
            c = c.hc[f] } nl(c, a, b) } else nl(this, "", b); return b };

function nl(a, b, c) { void 0 !== a.Vb && c.push(b); for (var e in a.hc) nl(a.hc[e], b + e, c) } d.clear = function() { this.hc = {};
    this.Vb = void 0 };
d.remove = function(a) { for (var b = this, c = [], e = 0; e < a.length; e++) { var f = a.charAt(e); if (!b.hc[f]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, f]);
        b = b.hc[f] } a = b.Vb; for (delete b.Vb; 0 < c.length;)
        if (f = c.pop(), b = f[0], f = f[1], b.hc[f].ks()) delete b.hc[f];
        else break; return a };
d.clone = function() { return new kl(this) };
d.ks = function() { var a; if (a = void 0 === this.Vb) a: { for (var b in this.hc) { a = !1; break a } a = !0 }
    return a };

function ol() { this.hh = new kl;
    this.Db = "";
    this.fm = this.Eo = null;
    this.si = this.Xj = 0 }

function pl(a, b) { var c = b.Jb(); if (c && !Fa(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.hh.get(c); if (e) { for (var f = Wh(b), h = 0; h < f; h++) pl(a, R(b, h));
            ya(e, b);
            e.length || a.hh.remove(c) } } }

function ql(a, b) { var c = !1;
    (b = a.hh.Hl(b)) && b.length && (a.si = 0, a.Xj = 0, c = a.hh.get(b[0]), c = rl(a, c)) && (a.Eo = b); return c }

function rl(a, b) { if (b) { if (a.si < b.length) { var c = b[a.si];
            a.fm = b } c && (c.np(), c.select()) } return !!c }
ol.prototype.clear = function() { this.Db = "" };

function sl(a, b, c) { Sk.call(this, a, b, c);
    this.rj = !0;
    al(this, !0);
    this.wb = this;
    this.Ak = new ol;
    this.Un = this.lc = null;
    this.tj = !1;
    this.iw = null;
    this.Gp = this.rh = this.Fp = this.pk = !0; if (A) try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {} } w(sl, Sk);
d = sl.prototype;
d.zc = function() { return this };
d.bi = function() { return 0 };
d.np = function() {};
d.vw = function() { this.tj = !0;
    pi(this.G(), "focused");
    this.wb && this.wb.select() };
d.qw = function() { this.tj = !1;
    ri(this.G(), "focused") };
d.hasFocus = function() { return this.tj };
d.wc = function() { return !this.rh || sl.s.wc.call(this) };
d.ee = function(a) { this.rh ? sl.s.ee.call(this, a) : this.rj = a };
d.Zn = function() { return Pd };
d.El = function() { var a = Zk(this); return a ? a.firstChild : null };
d.Dl = function() { return null };
d.Ki = function() {};
d.yj = function() { return sl.s.yj.call(this) + (this.rh ? "" : " " + this.eb.ir) };
d.yl = function() { var a = this.wc(),
        b = this.cw; if (a && b) return b;
    b = this.Kw; if (!a && b) return b;
    b = this.eb; return a && b.gr ? b.Ng + " " + b.gr : !a && b.$q ? b.Ng + " " + b.$q : "" };
d.kd = function(a) { if (this.wb != a) { var b = !1;
        this.wb && (b = this.wb == this.iw, al(this.wb, !1)); if (this.wb = a) al(a, !0), b && a.select();
        this.dispatchEvent("change") } };
d.Ae = function() { return this.wb };

function tl(a) { 0 != a.pk && (a.pk = !1, a.Aa && ul(a)) }

function ul(a) {
    function b(a) { var h = Wk(a); if (h) { var l = !e || c == a.getParent() && !f ? a.eb.Xq : a.eb.Wq;
            h.className = l; if (h = a.Dl()) h.className = el(a) } Vh(a, b) } var c = a,
        e = c.pk,
        f = c.Gp;
    b(a) }

function vl(a) { 0 != a.Fp && (a.Fp = !1, a.Aa && ul(a)) }

function wl(a) { if (0 != a.rh) { a.rh = !1; if (a.Aa) { var b = Zk(a);
            b && (b.className = a.yj()) } a.Ae() == a && R(a, 0) && a.kd(R(a, 0)) } } d.Tl = function() { sl.s.Tl.call(this); var a = this.G();
    ai(a, "tree");
    S(a, "labelledby", Vk(this).id) };
d.Hb = function() { sl.s.Hb.call(this); var a = this.G();
    a.className = this.eb.lr;
    a.setAttribute("hideFocus", "true");
    a = this.G();
    a.tabIndex = 0; var b = this.lc = new gi(a),
        c = this.Un = new Qk(a);
    Th(this).na(c, "focusout", this.qw).na(c, "focusin", this.vw).na(b, "key", this.Gd).na(a, "mousedown", this.io).na(a, "click", this.io).na(a, "dblclick", this.io);
    this.Tl() };
d.Dd = function() { sl.s.Dd.call(this);
    this.lc.A();
    this.lc = null;
    this.Un.A();
    this.Un = null };
d.io = function(a) { var b = xl(this, a); if (b) switch (a.type) {
        case "mousedown":
            b.Ms(a); break;
        case "click":
            b.No(a); break;
        case "dblclick":
            b.Js(a) } };
d.Gd = function(a) {
    var b = this.Ak;
    var c = !1;
    switch (a.keyCode) {
        case 40:
        case 38:
            if (a.ctrlKey) { c = 40 == a.keyCode ? 1 : -1; var e = b.Eo; if (e) { var f = null,
                        h = !1; if (b.fm) { var k = b.si + c;
                        0 <= k && k < b.fm.length ? (b.si = k, f = b.fm) : h = !0 } f || (k = b.Xj + c, 0 <= k && k < e.length && (b.Xj = k), e.length > b.Xj && (f = b.hh.get(e[b.Xj])), f && f.length && h && (b.si = -1 == c ? f.length - 1 : 0));
                    rl(b, f) && (b.Eo = e) } c = !0 } break;
        case 8:
            e = b.Db.length - 1;
            c = !0;
            0 < e ? (b.Db = b.Db.substring(0, e), ql(b, b.Db)) : 0 == e ? b.Db = "" : c = !1; break;
        case 27:
            b.Db = "", c = !0 }(b = c || this.wb && this.wb.Po(a)) || (b =
        this.Ak, c = !1, a.ctrlKey || a.altKey || (e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "\u0080" <= e && "\ufffd" >= e) && (" " != e || b.Db) && (b.Db += e, c = ql(b, b.Db))), b = c);
    b && a.preventDefault();
    return b
};

function xl(a, b) { for (var c = b.target; null != c;) { if (b = Uk[c.id]) return b; if (c == a.G()) break;
        c = c.parentNode } return null } d.createNode = function(a) { return new il(a || Pd, this.eb, this.vc()) };

function gl(a, b) { a = a.Ak; var c = b.Jb(); if (c && !Fa(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.hh.get(c);
        e ? e.push(b) : a.hh.set(c, [b]) } } d.removeNode = function(a) { pl(this.Ak, a) };

function Lg(a) {
    this.m = a;
    this.u = a.options.u;
    this.Wd = a.options.Ce;
    this.Ea = a.options.Ea;
    this.eb = { qo: 19, lr: "blocklyTreeRoot", ir: "blocklyHidden", jr: "", Dn: "blocklyTreeRow", kr: "blocklyTreeLabel", Ng: "blocklyTreeIcon", Bn: "blocklyTreeIconOpen", Cn: "blocklyTreeIconNone", mr: "blocklyTreeSelected" };
    this.Ct = { Dn: "blocklyTreeSeparator" };
    this.Wd && (this.eb.cssTreeRow += a.u ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.Ct.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.u ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.eb.cssTreeIcon = "")
}
d = Lg.prototype;
d.width = 0;
d.height = 0;
d.Uj = null;
d.I = function() {
    var a = this.m,
        b = L(this.m);
    this.Lc = G("DIV", "blocklyToolboxDiv");
    this.Lc.setAttribute("dir", a.u ? "RTL" : "LTR");
    b.parentNode.insertBefore(this.Lc, b);
    x.O(this.Lc, "mousedown", this, function(a) { x.i.dg(a) || a.target == this.Lc ? x.Rb(!1) : x.Rb(!0);
        x.Touch.$e() }, !1, !0);
    b = { nj: a.options.nj, Mb: a, u: a.u, Ge: a.options.Ge, Ce: a.Ce, Ea: a.options.Ea };
    this.J = null;
    this.J = a.Ce ? new Og(b) : new Pg(b);
    fe(this.J.W("svg"), L(this.m));
    this.J.I(a);
    this.eb.cleardotPath = a.options.$d + "1x1.gif";
    this.eb.cssCollapsedFolderIcon = "blocklyTreeIconClosed" +
        (a.u ? "Rtl" : "Ltr");
    this.Ld = b = new yl(this, this.eb);
    wl(b);
    tl(b);
    vl(b);
    b.kd(null);
    a = this.qm(a.options.Fe);
    b.$(this.Lc);
    a && b.kd(a);
    Tg(this);
    this.position()
};
d.A = function() { this.J.A();
    this.Ld.A();
    H(this.Lc);
    this.Uj = this.m = null };
d.dd = function() { return this.width };
d.di = function() { return this.height };
d.position = function() { var a = this.Lc; if (a) { var b = L(this.m);
        b = x.At(b);
        this.Wd ? (a.style.left = "0", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, this.Ea == x.Hf ? a.style.top = "0" : a.style.bottom = "0") : (this.Ea == x.ke ? a.style.right = "0" : a.style.left = "0", a.style.height = b.height + "px", this.width = a.offsetWidth);
        this.J.position() } };
d.qm = function(a) { this.Ld.dt();
    this.Ld.me = [];
    this.Vr = !1;
    a = zl(this, a, this.Ld, this.m.options.$d); if (this.Ld.me.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    Bf(this.m); return a };

function zl(a, b, c, e) {
    for (var f = null, h = null, k = 0, l; l = b.childNodes[k]; k++)
        if (l.tagName) switch (l.tagName.toUpperCase()) {
            case "CATEGORY":
                h = x.i.oc(l.getAttribute("name"));
                h = a.Ld.createNode(h);
                h.me = [];
                c.add(h);
                var m = l.getAttribute("custom");
                m ? h.me = m : (m = zl(a, l, h, e)) && (f = m);
                m = x.i.oc(l.getAttribute("colour"));
                q(m) ? (h.mo = /^#[0-9a-fA-F]{6}$/.test(m) ? m : x.bs(Number(m)), a.Vr = !0) : h.mo = "";
                "true" == l.getAttribute("expanded") ? (h.me.length && (f = h), h.ee(!0)) : h.ee(!1);
                h = l;
                break;
            case "SEP":
                h && ("CATEGORY" == h.tagName.toUpperCase() ?
                    c.add(new Al(a.Ct)) : (l = parseFloat(l.getAttribute("gap")), !isNaN(l) && h && h.setAttribute("gap", l)));
                break;
            case "BLOCK":
            case "SHADOW":
            case "LABEL":
            case "BUTTON":
                c.me.push(l), h = l
        }
    return f
}

function Tg(a, b) { b = (b || a.Ld).Qf(!1); for (var c = 0, e; e = b[c]; c++) { var f = Zk(e); if (f) { var h = a.Vr ? "8px solid " + (e.mo || "#ddd") : "none";
            a.m.u ? f.style.borderRight = h : f.style.borderLeft = h } Tg(a, e) } }
d.ai = function() { if (!this.Lc) return null; var a = this.Lc.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        e = a.width;
    a = a.height; return this.Ea == x.Gf ? new rg(-1E7, -1E7, 1E7 + b + e, 2E7) : this.Ea == x.ke ? new rg(b, -1E7, 1E7 + e, 2E7) : this.Ea == x.Hf ? new rg(-1E7, -1E7, 2E7, 1E7 + c + a) : new rg(0, c, 2E7, 1E7 + e) };

function yl(a, b) { this.ea = a;
    sl.call(this, Pd, b) } w(yl, sl);
yl.prototype.Hb = function() { yl.s.Hb.call(this); if (Ab) { var a = this.G();
        x.O(a, "touchend", this, this.Ew) } };
yl.prototype.Ew = function(a) { var b = xl(this, a);
    b && "touchend" === a.type && setTimeout(function() { b.No(a) }, 1) };
yl.prototype.createNode = function(a) { a = a ? Id(a) : Pd; return new Bl(this.ea, a, this.eb, this.vc()) };
yl.prototype.kd = function(a) { var b = this.ea; if (a != this.wb && a != b.Ld) { b.Uj && (Zk(b.Uj).style.backgroundColor = ""); if (a) { var c = a.mo || "#57e";
            Zk(a).style.backgroundColor = c;
            Tg(b, a) } c = this.Ae();
        sl.prototype.kd.call(this, a);
        a && a.me && a.me.length ? (b.J.show(a.me), b.Uj != a && b.J.op()) : b.J.Na();
        c != a && c != this && (c = new Fc(null, "category", c && Hd(c.Kj), a && Hd(a.Kj)), c.Ic = b.m.id, x.j.U(c));
        a && (b.Uj = a) } };

function Bl(a, b, c, e) { Sk.call(this, b, c, e);
    a && (b = function() { x.yg(a.m) }, bc(a.Ld, "expand", b), bc(a.Ld, "collapse", b)) } w(Bl, il);
d = Bl.prototype;
d.Zn = function() { return Nd("span") };
d.No = function() { Yh(this) && this.Sj ? (this.toggle(), this.select()) : this.Zl() ? this.zc().kd(null) : this.select();
    bl(this) };
d.Ms = function() {};
d.Js = function() {};
d.Po = function(a) { if (this.Ag.ea.Wd) { var b = {};
        b[39] = this.Di ? 38 : 40;
        b[37] = this.Di ? 40 : 38;
        b[38] = 37;
        b[40] = 39;
        a.keyCode = b[a.keyCode] || a.keyCode } return Bl.s.Po.call(this, a) };

function Al(a) { Bl.call(this, null, Pd, a) } w(Al, Bl);
x.td = {};
x.td.bC = "";
x.td.zt = null;
x.td.ws = "";
x.td.Zf = function(a, b) { if (!x.td.zt) { var c = ".blocklyDraggable {}\n";
        a && (c += x.td.Vt.join("\n"), x.eu && (c += x.eu.CSS.join("\n")));
        x.td.ws = b.replace(/[\\\/]$/, "");
        c = c.replace(/<<<PATH>>>/g, x.td.ws);
        a = document.createElement("style");
        document.head.insertBefore(a, document.head.firstChild);
        a.appendChild(document.createTextNode(c));
        x.td.zt = a.sheet } };
x.td.mC = function() { console.warn("Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context") };
x.td.Vt = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none", "}", ".blocklyNonSelectable {", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;",
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
x.K = {};
x.K.ka = null;
x.K.ck = null;
x.K.Wh = null;
x.K.W = function() { x.K.ka || (x.K.ka = G("DIV", "blocklyWidgetDiv"), document.body.appendChild(x.K.ka)) };
x.K.show = function(a, b, c) { x.K.Na();
    x.K.ck = a;
    x.K.Wh = c;
    x.K.ka.style.top = Wf().y + "px";
    x.K.ka.style.direction = b ? "rtl" : "ltr";
    x.K.ka.style.display = "block" };
x.K.Na = function() { x.K.ck && (x.K.ck = null, x.K.ka.style.display = "none", x.K.ka.style.left = "", x.K.ka.style.top = "", x.K.Wh && x.K.Wh(), x.K.Wh = null, ee(x.K.ka)) };
x.K.Y = function() { return !!x.K.ck };
x.K.Ij = function(a) { x.K.ck == a && x.K.Na() };
x.K.position = function(a, b, c, e, f) { b < e.y && (b = e.y);
    f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
    x.K.Ws(a, b, c.height) };
x.K.Ws = function(a, b, c) { x.K.ka.style.left = a + "px";
    x.K.ka.style.top = b + "px";
    x.K.ka.style.height = c + "px" };
x.K.Yo = function(a, b, c, e) { x.K.Ws(x.K.mv(a, b, c, e), x.K.nv(a, b, c), c.height) };
x.K.mv = function(a, b, c, e) { if (e) return b = Math.max(b.right - c.width, a.left), Math.min(b, a.right - c.width);
    b = Math.min(b.left, a.right - c.width); return Math.max(b, a.left) };
x.K.nv = function(a, b, c) { return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom };

function Cl(a) { this.fj = a;
    this.W() } d = Cl.prototype;
d.bb = null;
d.re = null;
d.fj = null;
d.qg = 1;
d.tk = null;
d.W = function() { this.bb || (this.bb = x.i.B("svg", { xmlns: x.dn, "xmlns:html": x.Df, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyBlockDragSurface" }, this.fj), this.re = x.i.B("g", {}, this.bb)) };

function Cf(a, b) { a.re.appendChild(b);
    a.bb.style.display = "block";
    a.tk = new D(0, 0) }
d.zf = function(a, b) { this.tk = new D(a * this.qg, b * this.qg);
    a = this.tk.x;
    b = this.tk.y;
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.bb.style.display = "block";
    x.i.kk(this.bb, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.Ll = function() { var a = x.i.yc(this.bb); return new D(a.x / this.qg, a.y / this.qg) };
d.xc = function() { return this.re };
d.cj = function(a) { a ? a.appendChild(this.re.firstChild) : this.re.removeChild(this.re.firstChild);
    this.bb.style.display = "none";
    this.tk = null };
x.Zf = function(a, b) { x.pv();
    q(a) && (a = document.getElementById(a) || document.querySelector(a)); if (!ge(document, a)) throw "Error: container is not in current document.";
    b = new Zf(b || {}); var c = G("DIV", "injectionDiv");
    a.appendChild(c);
    a = x.hj(c, b); var e = new Cl(c);
    c = new yg(c);
    b = x.Ev(a, b, e, c);
    x.Pw(b);
    x.hg = b;
    x.yg(b); return b };
x.hj = function(a, b) {
    a.setAttribute("dir", "LTR");
    Rh = b.u;
    x.td.Zf(b.Gw, b.$d);
    a = x.i.B("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:html": "http://www.w3.org/1999/xhtml", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklySvg" }, a);
    var c = x.i.B("defs", {}, a),
        e = String(Math.random()).substring(2),
        f = x.i.B("filter", { id: "blocklyEmbossFilter" + e }, c);
    x.i.B("feGaussianBlur", { "in": "SourceAlpha", stdDeviation: 1, result: "blur" }, f);
    var h = x.i.B("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, f);
    x.i.B("fePointLight", { x: -5E3, y: -1E4, z: 2E4 }, h);
    x.i.B("feComposite", { "in": "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" }, f);
    x.i.B("feComposite", { "in": "SourceGraphic", in2: "specOut", operator: "arithmetic", k1: 0, k2: 1, k3: 1, k4: 0 }, f);
    b.Fr = f.id;
    f = x.i.B("pattern", { id: "blocklyDisabledPattern" + e, patternUnits: "userSpaceOnUse", width: 10, height: 10 }, c);
    x.i.B("rect", { width: 10, height: 10, fill: "#aaa" }, f);
    x.i.B("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    b.nj = f.id;
    f = b.Pr;
    c = x.i.B("pattern", { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" }, c);
    0 < f.length && 0 < f.spacing ? (x.i.B("line", { stroke: f.colour }, c), 1 < f.length && x.i.B("line", { stroke: f.colour }, c)) : x.i.B("line", {}, c);
    b.Qr = c;
    return a
};
x.Ev = function(a, b, c, e) {
    b.Mb = null;
    var f = new Ig(b, c, e);
    f.scale = b.dc.wt;
    a.appendChild(f.W("blocklyMainBackground"));
    !b.Tr && b.Fe && (c = Ng(f, "svg"), x.i.Nj(c, a));
    f.translate(0, 0);
    x.hg = f;
    b.readOnly || b.Wr || f.xd(function() {
        if (!f.sb()) {
            var a = f.ub(),
                c = a.Cb + a.pb,
                e = a.Re + a.zb;
            if (a.tc < e || a.tc + a.rc > a.gb + e || a.Nc < (b.u ? a.Cb : c) || a.Nc + a.Oc > (b.u ? a.za : a.za + c))
                for (var m = cd(f, !1), n = 0, p; p = m[n]; n++) {
                    var v = p.la(),
                        y = p.Ib(),
                        z = e + 25 - y.height - v.y;
                    0 < z && p.moveBy(0, z);
                    z = e + a.gb - 25 - v.y;
                    0 > z && p.moveBy(0, z);
                    z = 25 + c - v.x - (b.u ? 0 : y.width);
                    0 < z &&
                        p.moveBy(z, 0);
                    v = c + a.za - 25 - v.x + (b.u ? y.width : 0);
                    0 > v && p.moveBy(v, 0)
                }
        }
    });
    x.yg(f);
    x.K.W();
    x.C.W();
    return f
};
x.Pw = function(a) { var b = a.options,
        c = L(a);
    x.O(c.parentNode, "contextmenu", null, function(a) { x.i.$l(a) || a.preventDefault() });
    c = x.O(window, "resize", null, function() { x.Rb(!0);
        x.yg(a) });
    a.ym = c;
    x.Zf.fv();
    b.Fe && (a.ea ? a.ea.I(a) : a.J && (a.J.I(a), a.J.show(b.Fe.childNodes), a.J.op(), a.scrollX = a.J.ia, b.Ea == x.ke && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.Wr && (a.lb = new ag(a), a.lb.resize());
    b.Hw && x.Zf.$w(b.$d, a) };
x.Zf.fv = function() { x.Zv || (x.O(document, "keydown", null, x.xx), x.Mc(document, "touchend", null, x.gg), x.Mc(document, "touchcancel", null, x.gg), ob && x.O(window, "orientationchange", document, function() { x.yg(x.ei()) }));
    x.Zv = !0 };
x.Zf.$w = function(a, b) {
    function c() { for (; f.length;) x.Pa(f.pop());
        e.preload() } var e = b.Jf;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete"); var f = [];
    f.push(x.O(document, "mousemove", null, c, !0));
    f.push(x.O(document, "touchstart", null, c, !0)) };
x.Ft = function(a) { console.warn("Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead.");
    x.ei().Ft(a) };
x.hg = null;
x.selected = null;
x.rl = [];
x.dj = null;
x.$k = null;
x.YB = null;
x.bs = function(a) { var b = x.ku,
        c = 255 * x.lu,
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
                e = c, f = b, h = a } } return nj([Math.floor(e), Math.floor(f), Math.floor(h)]) };
x.At = function(a) { return { width: a.Aq, height: a.yq } };
x.lC = function(a) { Bf(a) };
x.yg = function(a) { for (; a.options.Mb;) a = a.options.Mb; var b = L(a),
        c = b.parentNode; if (c) { var e = c.offsetWidth;
        c = c.offsetHeight;
        b.Aq != e && (b.setAttribute("width", e + "px"), b.Aq = e);
        b.yq != c && (b.setAttribute("height", c + "px"), b.yq = c);
        a.resize() } };
x.xx = function(a) {
    if (!x.hg.options.readOnly && !x.i.$l(a)) {
        var b = !1;
        if (27 == a.keyCode) x.Rb();
        else if (8 == a.keyCode || 46 == a.keyCode) { a.preventDefault(); if (x.hg.sb()) return;
            x.selected && x.selected.kc() && (b = !0) } else if (a.altKey || a.ctrlKey || a.metaKey) { if (x.hg.sb()) return;
            x.selected && x.selected.kc() && x.selected.Ee() && (67 == a.keyCode ? (x.Rb(), x.An(x.selected)) : 88 != a.keyCode || x.selected.o.Yd || (x.An(x.selected), b = !0));
            86 == a.keyCode ? x.dj && (x.j.R(!0), a = x.$k, a.Yd && (a = a.yh), Qg(a), x.j.R(!1)) : 90 == a.keyCode && (x.Rb(), x.hg.Rp(a.shiftKey)) } b &&
            !x.selected.o.Yd && (x.j.R(!0), x.Rb(), x.selected.A(!0, !0), x.j.R(!1))
    }
};
x.An = function(a) { if (a.hs) var b = a.yk();
    else { b = x.F.Lf(a);
        x.F.Uv(b); var c = a.la();
        b.setAttribute("x", a.u ? -c.x : c.x);
        b.setAttribute("y", c.y) } x.dj = b;
    x.$k = a.o };
x.Dr = function(a) { var b = x.dj,
        c = x.$k;
    x.An(a);
    Qg(a.o);
    x.dj = b;
    x.$k = c };
x.jC = function(a) { x.i.$l(a) || a.preventDefault() };
x.Rb = function(a) { x.C.Na();
    x.K.Na();
    a || (a = x.ei(), a.ea && a.ea.J && a.ea.J.Sh && a.ea.Ld.kd(null)) };
x.xd = function(a) { console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."); return x.ei().xd(a) };
x.ei = function() { return x.hg };
x.alert = function(a, b) { window.alert(a);
    b && b() };
x.confirm = function(a, b) { b(window.confirm(a)) };
x.prompt = function(a, b, c) { c(window.prompt(a, b)) };
x.Vw = function(a) { return function() { Jh(this, a) } };
x.Vh = function(a) { for (var b = 0; b < a.length; b++) { var c = a[b]; if (c) { var e = c.type;
            null == e || "" === e ? console.warn("Block definition #" + b + " in JSON array is missing a type attribute. Skipping.") : (x.D[e] && console.warn("Block definition #" + b + ' in JSON array overwrites prior definition of "' + e + '".'), x.D[e] = { I: x.Vw(c) }) } else console.warn("Block definition #" + b + " in JSON array is " + c + ". Skipping.") } };
x.O = function(a, b, c, e, f, h) {
    function k(a) { var b = !f;
        a = x.Touch.Ux(a); for (var h = 0, k; k = a[h]; h++)
            if (!b || x.Touch.Ep(k)) x.Touch.Rx(k), c ? e.call(c, k) : e(k), l = !0 } var l = !1,
        m = []; if (g.PointerEvent && b in x.Touch.le)
        for (var n = 0, p; p = x.Touch.le[b][n]; n++) a.addEventListener(p, k, !1), m.push([a, p, k]);
    else if (a.addEventListener(b, k, !1), m.push([a, b, k]), b in x.Touch.le) { var v = function(a) { k(a); var b = !h;
            l && b && a.preventDefault() }; for (n = 0; p = x.Touch.le[b][n]; n++) a.addEventListener(p, v, !1), m.push([a, p, v]) } return m };
x.Mc = function(a, b, c, e) {
    function f(a) { c ? e.call(c, a) : e(a) } var h = [],
        k = g.window; if (k && k.PointerEvent && b in x.Touch.le) { k = 0; for (var l; l = x.Touch.le[b][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f]) } else if (a.addEventListener(b, f, !1), h.push([a, b, f]), b in x.Touch.le) { var m = function(a) { if (a.changedTouches && 1 == a.changedTouches.length) { var b = a.changedTouches[0];
                a.clientX = b.clientX;
                a.clientY = b.clientY } f(a);
            a.preventDefault() }; for (k = 0; l = x.Touch.le[b][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m]) } return h };
x.Pa = function(a) { for (; a.length;) { var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1) } };
x.cg = function(a) { return /^\s*-?\d+(\.\d+)?\s*$/.test(a) };
x.pv = function() {
    x.gc("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    x.gc("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    x.gc("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    x.gc("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    x.gc("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    x.gc("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    x.gc("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    x.gc("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    x.gc("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    x.gc("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    x.gc("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    x.gc("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    x.gc("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    x.gc("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    x.gc("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    x.gc("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
x.gc = function(a, b, c) { for (var e = "Blockly", f = x, h = 0; h < b.length; ++h) e += "." + b[h], f && (f = f[b[h]]);
    f && f !== c && (a = (void 0 === c ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a)) };
g.console || (g.console = { log: function() {}, warn: function() {} });
g.Blockly || (g.Blockly = {});
g.Blockly.getMainWorkspace = x.ei;
g.Blockly.addChangeListener = x.xd;

function Dl(a, b) { var c = a.className;
    c = q(c) && c.match(/\S+/g) || []; for (var e = Da(arguments, 1), f = 0; f < e.length; f++) xa(c, e[f]) || c.push(e[f]);
    c = c.join(" ");
    a.className = c };
var El = {
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
    Fl = "ace ar fa he mzn ps".split(" "),
    Gl = window.BlocklyGamesLang,
    Hl = window.BlocklyGamesLanguages,
    Il = !!window.location.pathname.match(/\.html$/),
    xk = null,
    V, Jl = Number,
    Kl, Ll = window.location.search.match(/[?&]level=([^&]+)/);
Kl = Ll ? decodeURIComponent(Ll[1].replace(/\+/g, "%20")) : "NaN";
var Ml = Jl(Kl);
V = isNaN(Ml) ? 1 : pc(1, Ml, 10);

function Nl() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != Fl.indexOf(Gl) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", Gl);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < Hl.length; c++) { var e = Hl[c];
            b.push([El[e], e]) } b.sort(function(a, b) { return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0 });
        for (c = a.options.length = 0; c < b.length; c++) { var f = b[c];
            e = f[1];
            f = new Option(f[0], e);
            e == Gl && (f.selected = !0);
            a.options.add(f) } 1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!Ol(c), a && b && Dl(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Pl, 1)
}

function Ol(a) { var b = Ql; try { var c = window.localStorage[b + a] } catch (e) {} return c }

function W(a) { var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null; return null === b ? "[Unknown message: " + a + "]" : b }

function Rl(a, b) { if (!a) throw TypeError("Element not found: " + a); "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0) }

function Pl() { if (!Il) { window.GoogleAnalyticsObject = "GoogleAnalyticsFunction"; var a = function(b) {
            (a.q = a.q || []).push(arguments) };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date; var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview") } };
x.g.eC = {};
x.g.ADD_COMMENT = "Add Comment";
x.g.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
x.g.CHANGE_VALUE_TITLE = "Change value:";
x.g.CLEAN_UP = "Clean up Blocks";
x.g.COLLAPSE_ALL = "Collapse Blocks";
x.g.COLLAPSE_BLOCK = "Collapse Block";
x.g.COLOUR_BLEND_COLOUR1 = "colour 1";
x.g.COLOUR_BLEND_COLOUR2 = "colour 2";
x.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
x.g.COLOUR_BLEND_RATIO = "ratio";
x.g.COLOUR_BLEND_TITLE = "blend";
x.g.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).";
x.g.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
x.g.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
x.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
x.g.COLOUR_RANDOM_TITLE = "random colour";
x.g.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
x.g.COLOUR_RGB_BLUE = "blue";
x.g.COLOUR_RGB_GREEN = "green";
x.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
x.g.COLOUR_RGB_RED = "red";
x.g.COLOUR_RGB_TITLE = "colour with";
x.g.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
x.g.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
x.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
x.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
x.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
x.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
x.g.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
x.g.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
x.g.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
x.g.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
x.g.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
x.g.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
x.g.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
x.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
x.g.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
x.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
x.g.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
x.g.CONTROLS_IF_MSG_ELSE = "else";
x.g.CONTROLS_IF_MSG_ELSEIF = "else if";
x.g.CONTROLS_IF_MSG_IF = "if";
x.g.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
x.g.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
x.g.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
x.g.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
x.g.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
x.g.CONTROLS_REPEAT_INPUT_DO = "do";
x.g.CONTROLS_REPEAT_TITLE = "repeat %1 times";
x.g.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
x.g.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
x.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
x.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
x.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
x.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
x.g.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
x.g.DELETE_BLOCK = "Delete Block";
x.g.DELETE_VARIABLE = "Delete the '%1' variable";
x.g.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
x.g.DELETE_X_BLOCKS = "Delete %1 Blocks";
x.g.DISABLE_BLOCK = "Disable Block";
x.g.DUPLICATE_BLOCK = "Duplicate";
x.g.DUPLICATE_COMMENT = "Duplicate Comment";
x.g.ENABLE_BLOCK = "Enable Block";
x.g.EXPAND_ALL = "Expand Blocks";
x.g.EXPAND_BLOCK = "Expand Block";
x.g.EXTERNAL_INPUTS = "External Inputs";
x.g.HELP = "Help";
x.g.INLINE_INPUTS = "Inline Inputs";
x.g.IOS_CANCEL = "Cancel";
x.g.IOS_ERROR = "Error";
x.g.IOS_OK = "OK";
x.g.IOS_PROCEDURES_ADD_INPUT = "+ Add Input";
x.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Allow statements";
x.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = "This function has duplicate inputs.";
x.g.IOS_PROCEDURES_INPUTS = "INPUTS";
x.g.IOS_VARIABLES_ADD_BUTTON = "Add";
x.g.IOS_VARIABLES_ADD_VARIABLE = "+ Add Variable";
x.g.IOS_VARIABLES_DELETE_BUTTON = "Delete";
x.g.IOS_VARIABLES_EMPTY_NAME_ERROR = "You can't use an empty variable name.";
x.g.IOS_VARIABLES_RENAME_BUTTON = "Rename";
x.g.IOS_VARIABLES_VARIABLE_NAME = "Variable name";
x.g.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
x.g.LISTS_CREATE_EMPTY_TITLE = "create empty list";
x.g.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
x.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
x.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
x.g.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
x.g.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
x.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
x.g.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
x.g.LISTS_GET_INDEX_FIRST = "first";
x.g.LISTS_GET_INDEX_FROM_END = "# from end";
x.g.LISTS_GET_INDEX_FROM_START = "#";
x.g.LISTS_GET_INDEX_GET = "get";
x.g.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
x.g.LISTS_GET_INDEX_LAST = "last";
x.g.LISTS_GET_INDEX_RANDOM = "random";
x.g.LISTS_GET_INDEX_REMOVE = "remove";
x.g.LISTS_GET_INDEX_TAIL = "";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
x.g.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
x.g.LISTS_GET_SUBLIST_END_FROM_START = "to #";
x.g.LISTS_GET_SUBLIST_END_LAST = "to last";
x.g.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
x.g.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
x.g.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
x.g.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
x.g.LISTS_GET_SUBLIST_TAIL = "";
x.g.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
x.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
x.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
x.g.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
x.g.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
x.g.LISTS_INDEX_OF_LAST = "find last occurrence of item";
x.g.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
x.g.LISTS_INLIST = "in list";
x.g.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
x.g.LISTS_ISEMPTY_TITLE = "%1 is empty";
x.g.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
x.g.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
x.g.LISTS_LENGTH_TITLE = "length of %1";
x.g.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
x.g.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
x.g.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
x.g.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
x.g.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
x.g.LISTS_REVERSE_MESSAGE0 = "reverse %1";
x.g.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
x.g.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
x.g.LISTS_SET_INDEX_INPUT_TO = "as";
x.g.LISTS_SET_INDEX_INSERT = "insert at";
x.g.LISTS_SET_INDEX_SET = "set";
x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.";
x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
x.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
x.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.";
x.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
x.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
x.g.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
x.g.LISTS_SORT_ORDER_ASCENDING = "ascending";
x.g.LISTS_SORT_ORDER_DESCENDING = "descending";
x.g.LISTS_SORT_TITLE = "sort %1 %2 %3";
x.g.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
x.g.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
x.g.LISTS_SORT_TYPE_NUMERIC = "numeric";
x.g.LISTS_SORT_TYPE_TEXT = "alphabetic";
x.g.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
x.g.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
x.g.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
x.g.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
x.g.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
x.g.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
x.g.LOGIC_BOOLEAN_FALSE = "false";
x.g.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
x.g.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
x.g.LOGIC_BOOLEAN_TRUE = "true";
x.g.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
x.g.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
x.g.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
x.g.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
x.g.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
x.g.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
x.g.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
x.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
x.g.LOGIC_NEGATE_TITLE = "not %1";
x.g.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
x.g.LOGIC_NULL = "null";
x.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
x.g.LOGIC_NULL_TOOLTIP = "Returns null.";
x.g.LOGIC_OPERATION_AND = "and";
x.g.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
x.g.LOGIC_OPERATION_OR = "or";
x.g.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
x.g.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
x.g.LOGIC_TERNARY_CONDITION = "test";
x.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
x.g.LOGIC_TERNARY_IF_FALSE = "if false";
x.g.LOGIC_TERNARY_IF_TRUE = "if true";
x.g.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
x.g.MATH_ADDITION_SYMBOL = "+";
x.g.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
x.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
x.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
x.g.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
x.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
x.g.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
x.g.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
x.g.MATH_CHANGE_TITLE = "change %1 by %2";
x.g.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
x.g.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
x.g.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
x.g.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
x.g.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
x.g.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
x.g.MATH_DIVISION_SYMBOL = "\u00f7";
x.g.MATH_IS_DIVISIBLE_BY = "is divisible by";
x.g.MATH_IS_EVEN = "is even";
x.g.MATH_IS_NEGATIVE = "is negative";
x.g.MATH_IS_ODD = "is odd";
x.g.MATH_IS_POSITIVE = "is positive";
x.g.MATH_IS_PRIME = "is prime";
x.g.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
x.g.MATH_IS_WHOLE = "is whole";
x.g.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
x.g.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
x.g.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
x.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
x.g.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
x.g.MATH_NUMBER_TOOLTIP = "A number.";
x.g.MATH_ONLIST_HELPURL = "";
x.g.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
x.g.MATH_ONLIST_OPERATOR_MAX = "max of list";
x.g.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
x.g.MATH_ONLIST_OPERATOR_MIN = "min of list";
x.g.MATH_ONLIST_OPERATOR_MODE = "modes of list";
x.g.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
x.g.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
x.g.MATH_ONLIST_OPERATOR_SUM = "sum of list";
x.g.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
x.g.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
x.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
x.g.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
x.g.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
x.g.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
x.g.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
x.g.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
x.g.MATH_POWER_SYMBOL = "^";
x.g.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
x.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
x.g.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
x.g.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
x.g.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
x.g.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
x.g.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
x.g.MATH_ROUND_OPERATOR_ROUND = "round";
x.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
x.g.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
x.g.MATH_ROUND_TOOLTIP = "Round a number up or down.";
x.g.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
x.g.MATH_SINGLE_OP_ABSOLUTE = "absolute";
x.g.MATH_SINGLE_OP_ROOT = "square root";
x.g.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
x.g.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
x.g.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
x.g.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
x.g.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
x.g.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
x.g.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
x.g.MATH_SUBTRACTION_SYMBOL = "-";
x.g.MATH_TRIG_ACOS = "acos";
x.g.MATH_TRIG_ASIN = "asin";
x.g.MATH_TRIG_ATAN = "atan";
x.g.MATH_TRIG_COS = "cos";
x.g.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
x.g.MATH_TRIG_SIN = "sin";
x.g.MATH_TRIG_TAN = "tan";
x.g.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
x.g.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
x.g.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
x.g.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
x.g.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
x.g.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
x.g.NEW_COLOUR_VARIABLE = "Create colour variable...";
x.g.NEW_NUMBER_VARIABLE = "Create number variable...";
x.g.NEW_STRING_VARIABLE = "Create string variable...";
x.g.NEW_VARIABLE = "Create variable...";
x.g.NEW_VARIABLE_TITLE = "New variable name:";
x.g.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
x.g.ORDINAL_NUMBER_SUFFIX = "";
x.g.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
x.g.PROCEDURES_BEFORE_PARAMS = "with:";
x.g.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
x.g.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
x.g.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
x.g.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
x.g.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
x.g.PROCEDURES_CREATE_DO = "Create '%1'";
x.g.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
x.g.PROCEDURES_DEFNORETURN_DO = "";
x.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
x.g.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
x.g.PROCEDURES_DEFNORETURN_TITLE = "to";
x.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
x.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
x.g.PROCEDURES_DEFRETURN_RETURN = "return";
x.g.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
x.g.PROCEDURES_DEF_DUPLICATE_WARNING = "Warning: This function has duplicate parameters.";
x.g.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
x.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
x.g.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
x.g.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
x.g.PROCEDURES_MUTATORARG_TITLE = "input name:";
x.g.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
x.g.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
x.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
x.g.REDO = "Redo";
x.g.REMOVE_COMMENT = "Remove Comment";
x.g.RENAME_VARIABLE = "Rename variable...";
x.g.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
x.g.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
x.g.TEXT_APPEND_TITLE = "to %1 append text %2";
x.g.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
x.g.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
x.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
x.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
x.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
x.g.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
x.g.TEXT_CHARAT_FIRST = "get first letter";
x.g.TEXT_CHARAT_FROM_END = "get letter # from end";
x.g.TEXT_CHARAT_FROM_START = "get letter #";
x.g.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
x.g.TEXT_CHARAT_LAST = "get last letter";
x.g.TEXT_CHARAT_RANDOM = "get random letter";
x.g.TEXT_CHARAT_TAIL = "";
x.g.TEXT_CHARAT_TITLE = "in text %1 %2";
x.g.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
x.g.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
x.g.TEXT_COUNT_MESSAGE0 = "count %1 in %2";
x.g.TEXT_COUNT_TOOLTIP = "Count how many times some text occurs within some other text.";
x.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
x.g.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
x.g.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
x.g.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
x.g.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
x.g.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
x.g.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
x.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
x.g.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
x.g.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
x.g.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
x.g.TEXT_GET_SUBSTRING_TAIL = "";
x.g.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
x.g.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
x.g.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
x.g.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
x.g.TEXT_INDEXOF_TITLE = "in text %1 %2 %3";
x.g.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
x.g.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
x.g.TEXT_ISEMPTY_TITLE = "%1 is empty";
x.g.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
x.g.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
x.g.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
x.g.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
x.g.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
x.g.TEXT_LENGTH_TITLE = "length of %1";
x.g.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
x.g.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
x.g.TEXT_PRINT_TITLE = "print %1";
x.g.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
x.g.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
x.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
x.g.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
x.g.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
x.g.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
x.g.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
x.g.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3";
x.g.TEXT_REPLACE_TOOLTIP = "Replace all occurances of some text within some other text.";
x.g.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Text#reversing-text";
x.g.TEXT_REVERSE_MESSAGE0 = "reverse %1";
x.g.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.";
x.g.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
x.g.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
x.g.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
x.g.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
x.g.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
x.g.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
x.g.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";
x.g.TODAY = "Today";
x.g.UNDO = "Undo";
x.g.VARIABLES_DEFAULT_NAME = "item";
x.g.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
x.g.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
x.g.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
x.g.VARIABLES_SET = "set %1 to %2";
x.g.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
x.g.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
x.g.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
x.g.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
x.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
x.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
x.g.PROCEDURES_DEFRETURN_TITLE = x.g.PROCEDURES_DEFNORETURN_TITLE;
x.g.CONTROLS_IF_IF_TITLE_IF = x.g.CONTROLS_IF_MSG_IF;
x.g.CONTROLS_WHILEUNTIL_INPUT_DO = x.g.CONTROLS_REPEAT_INPUT_DO;
x.g.CONTROLS_IF_MSG_THEN = x.g.CONTROLS_REPEAT_INPUT_DO;
x.g.CONTROLS_IF_ELSE_TITLE_ELSE = x.g.CONTROLS_IF_MSG_ELSE;
x.g.PROCEDURES_DEFRETURN_PROCEDURE = x.g.PROCEDURES_DEFNORETURN_PROCEDURE;
x.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = x.g.LISTS_INLIST;
x.g.LISTS_GET_INDEX_INPUT_IN_LIST = x.g.LISTS_INLIST;
x.g.MATH_CHANGE_TITLE_ITEM = x.g.VARIABLES_DEFAULT_NAME;
x.g.PROCEDURES_DEFRETURN_DO = x.g.PROCEDURES_DEFNORETURN_DO;
x.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = x.g.CONTROLS_IF_MSG_ELSEIF;
x.g.LISTS_GET_INDEX_HELPURL = x.g.LISTS_INDEX_OF_HELPURL;
x.g.CONTROLS_FOREACH_INPUT_DO = x.g.CONTROLS_REPEAT_INPUT_DO;
x.g.LISTS_SET_INDEX_INPUT_IN_LIST = x.g.LISTS_INLIST;
x.g.CONTROLS_FOR_INPUT_DO = x.g.CONTROLS_REPEAT_INPUT_DO;
x.g.LISTS_CREATE_WITH_ITEM_TITLE = x.g.VARIABLES_DEFAULT_NAME;
x.g.TEXT_APPEND_VARIABLE = x.g.VARIABLES_DEFAULT_NAME;
x.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = x.g.VARIABLES_DEFAULT_NAME;
x.g.LISTS_INDEX_OF_INPUT_IN_LIST = x.g.LISTS_INLIST;
x.g.PROCEDURES_DEFRETURN_COMMENT = x.g.PROCEDURES_DEFNORETURN_COMMENT;
x.g.MATH_HUE = "230";
x.g.LOOPS_HUE = "120";
x.g.LISTS_HUE = "260";
x.g.LOGIC_HUE = "210";
x.g.VARIABLES_HUE = "330";
x.g.TEXTS_HUE = "160";
x.g.PROCEDURES_HUE = "290";
x.g.COLOUR_HUE = "20";
x.g.VARIABLES_DYNAMIC_HUE = "310";
var Y = {
    Td: null,
    I: function() {
        Nl();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = W("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = W("Games_linkAlert"), BlocklyStorage.HASH_ERROR = W("Games_hashError"), BlocklyStorage.XML_ERROR = W("Games_xmlError"), BlocklyStorage.alert = X.yt.bind(X, a), a && Rl(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Y.ov, !0);
        x.D && (x.D.Cu = !1);
        x.h &&
            (x.h.Cu = !1)
    },
    ss: function(a, b) { if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else { var c = null; try { c = window.sessionStorage.ts } catch (h) {} c && delete window.sessionStorage.ts; var e = Ol(V),
                f = b && Ol(V - 1);
            f && "function" == typeof b && (f = b(f));
            (a = c || e || f || a) && Y.kt(a) } },
    kt: function(a) { Y.Td ? Y.Td.setValue(a, -1) : (a = x.F.md(a), xk.clear(), x.F.qe(a, xk), xk.Jq()) },
    Yn: function() {
        if (Y.Td) var a = Y.Td.getValue();
        else {
            a = x.F.Tp(xk, !0);
            if (1 == cd(xk, !1).length &&
                a.querySelector) { var b = a.querySelector("block");
                b && (b.removeAttribute("x"), b.removeAttribute("y")) } a = x.F.Cd(a)
        }
        return a
    },
    Cj: function() { return xk },
    Px: function() { window.localStorage && (window.localStorage[Ql + V] = Y.Yn()) },
    Sl: function() { window.location = (Il ? "index.html" : "./") + "?lang=" + Gl },
    ov: function() {
        if (window.sessionStorage) { if (Y.Td) var a = Y.Td.getValue();
            else a = x.F.Tp(xk), a = x.F.Cd(a);
            window.sessionStorage.ts = a } a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var b = window.location.search;
        b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    Jo: function() { 10 > V ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Gl + "&level=" + (V + 1) : Y.Sl() },
    Zr: function(a, b) {
        if (a) { var c = a.match(/^block_id_([^']+)$/);
            c && (a = c[1]) }
        var e = a;
        a = xk;
        if (void 0 === b) {
            for (var f = 0; c =
                a.Jj[f]; f++) c.ac(!1);
            a.Jj.length = 0
        }
        if (c = e ? Kc(a, e) : null)(b = void 0 === b || b) ? -1 == a.Jj.indexOf(c) && a.Jj.push(c) : ya(a.Jj, c), c.ac(b)
    },
    hC: function(a, b) { a = document.getElementById(a);
        a.firstChild || (a = x.Zf(a, { rtl: -1 != Fl.indexOf(Gl), readOnly: !0 }), "string" != typeof b && (b = b.join("")), x.F.qe(x.F.md(b), a)) },
    by: function(a) { return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "") },
    se: function(a) {
        if ("click" == a.type && "touchend" == Y.se.bp && Y.se.ap + 2E3 > Date.now() || Y.se.bp == a.type && Y.se.ap + 400 > Date.now()) return a.preventDefault(),
            a.stopPropagation(), !0;
        Y.se.bp = a.type;
        Y.se.ap = Date.now();
        return !1
    }
};
Y.se.bp = null;
Y.se.ap = 0;
Y.Mw = function() { var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a) };
Y.Nw = function() { var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a) };
window.BlocklyInterface = Y;
Y.setCode = Y.kt;
Y.getCode = Y.Yn;
Y.getWorkspace = Y.Cj;
var X = {
    $g: !1,
    vr: null,
    kl: null,
    Fi: function(a, b, c, e, f, h) {
        function k() { X.$g && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden") }
        if (!a) throw TypeError("Content not found: " + a);
        X.$g && X.ed(!1);
        x.Rb(!0);
        X.$g = !0;
        X.vr = b;
        X.kl = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), X.Fn = x.Mc(e, "mousedown", null, X.Vv));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (X.ig(b, !1, .2), X.ig(l, !0, .8), setTimeout(k, 175)) : k()
    },
    wr: 0,
    xr: 0,
    Vv: function(a) { X.In(); if (!x.i.dg(a)) { var b = document.getElementById("dialog");
            X.wr = b.offsetLeft - a.clientX;
            X.xr = b.offsetTop - a.clientY;
            X.Hn = x.Mc(document, "mouseup", null, X.In);
            X.Gn = x.Mc(document, "mousemove", null, X.Wv);
            a.stopPropagation() } },
    Wv: function(a) {
        var b = document.getElementById("dialog"),
            c = X.wr + a.clientX;
        a = X.xr + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    In: function() { X.Hn && (x.Pa(X.Hn), X.Hn = null);
        X.Gn && (x.Pa(X.Gn), X.Gn = null) },
    ed: function(a) {
        function b() { e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden" }
        if (X.$g) {
            X.In();
            X.Fn && (x.Pa(X.Fn), X.Fn = null);
            X.$g = !1;
            X.kl && X.kl();
            X.kl = null;
            var c = !1 === a ?
                null : X.vr;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            c && a ? (X.ig(a, !1, .8), X.ig(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    ig: function(a, b, c) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top =
                h.y + "px";
            f.style.opacity = c
        }
        if (a) { var f = document.getElementById("dialogBorder"),
                h = X.kw(a);
            b ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible" }
    },
    kw: function(a) { var b = gh(a);
        b = { x: b.x, y: b.y };
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth); return b },
    yt: function(a, b) {
        var c = document.getElementById("containerStorage");
        c.textContent = "";
        b = b.split("\n");
        for (var e = 0; e < b.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(b[e]));
            c.appendChild(f)
        }
        c = document.getElementById("dialogStorage");
        X.Fi(c, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, X.Kp);
        X.Jp()
    },
    Uu: function() {
        if (!Ol(V))
            if (X.$g || xk.sb()) setTimeout(X.Uu, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", X.ed, !0);
                b.addEventListener("touchend", X.ed, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Y.Sl, !0);
                b.addEventListener("touchend",
                    Y.Sl, !0);
                X.Fi(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.rq, !0) });
                document.body.addEventListener("keydown", X.rq, !0)
            }
    },
    ot: function() {
        document.getElementById("galleryXml").value = Y.Yn();
        var a = document.getElementById("galleryDialog");
        if (!X.ot.Ox) {
            var b = document.getElementById("galleryCancel");
            b.addEventListener("click", X.ed, !0);
            b.addEventListener("touchend", X.ed, !0);
            b = document.getElementById("galleryOk");
            b.addEventListener("click", X.Wn, !0);
            b.addEventListener("touchend", X.Wn, !0);
            X.ot.Ox = !0
        }
        b = document.getElementById("submitButton");
        X.Fi(a, b, !0, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.Jr, !0) });
        document.body.addEventListener("keydown", X.Jr, !0);
        setTimeout(function() { document.getElementById("galleryTitle").focus() }, 250)
    },
    Cv: function() {
        var a = document.getElementById("dialogDone");
        if (xk) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = wk();
            c = Y.by(c);
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
            c = 1 == e ? W("Games_linesOfCode1") : W("Games_linesOfCode2").replace("%1", String(e));
            b.appendChild(document.createTextNode(c))
        }
        c = 10 > V ? W("Games_nextLevel").replace("%1", String(V + 1)) : W("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", X.ed, !0);
        b.addEventListener("touchend", X.ed, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Y.Jo, !0);
        b.addEventListener("touchend", Y.Jo, !0);
        X.Fi(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.Rq, !0) });
        document.body.addEventListener("keydown", X.Rq, !0);
        document.getElementById("dialogDoneText").textContent = c
    },
    ur: function(a) {
        !X.$g || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (X.ed(!0), a.stopPropagation(),
            a.preventDefault())
    },
    Jp: function() { document.body.addEventListener("keydown", X.ur, !0) },
    Kp: function() { document.body.removeEventListener("keydown", X.ur, !0) },
    Rq: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.ed(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.Jo() },
    rq: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.ed(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.Sl() },
    Jr: function(a) { 27 == a.keyCode ? X.ed(!0) : 13 == a.keyCode && X.Wn() },
    Wn: function() {
        var a =
            document.getElementById("galleryTitle");
        if (a.value.trim()) { a = document.getElementById("galleryForm"); for (var b = [], c = 0, e; e = a.elements[c]; c++) e.name && (b[c] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)); var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function() { if (4 == f.readyState) { var a = 200 == f.status ? W("Games_submitted") : W("Games_httpRequestError") + "\nStatus: " + f.status;
                    X.yt(null, a) } };
            f.send(b.join("&"));
            X.ed(!0) } else a.value =
            "", a.focus()
    }
};
window.BlocklyDialogs = X;
X.hideDialog = X.ed;

function Sl(a, b, c, e) { var f = Z;
    this.name = a;
    this.Nq = b;
    this.vt = c;
    this.Vx = e || 0;
    this.Kf = f;
    this.sa = new D;
    this.reset();
    console.log(this + " loaded.") } d = Sl.prototype;
d.ay = !1;
d.Rd = !1;
d.ya = 0;
d.df = 0;
d.facing = 0;
d.speed = 0;
d.pe = 0;
d.sa = null;
d.xo = 0;
d.toString = function() { return "[" + this.name + "]" };
d.reset = function() { delete this.ay;
    delete this.Rd;
    delete this.speed;
    delete this.pe;
    delete this.xo;
    this.ya = this.Vx;
    this.sa.x = this.vt.x;
    this.sa.y = this.vt.y;
    this.facing = this.df = qc(180 * Math.atan2(50 - this.sa.y, 50 - this.sa.x) / Math.PI); var a = this.Nq; if (u(a)) a = a();
    else if (!q(a)) throw "Avatar " + this.name + " has invalid code: " + a;
    this.Rw = "Interpreter" in window ? new Interpreter(a, this.Kf.Ow) : null };

function Tl(a, b) { a.ya += b;
    100 <= a.ya && Ul(a) }

function Ul(a) { a.speed = 0;
    a.Rd = !0;
    a.ya = 100;
    a.Kf.Wi.unshift(a);
    a.Kf.Md.push({ type: "DIE", avatar: a });
    console.log(a + " sinks.") } d.stop = function() { this.pe = 0 };
var Z = { Jc: [], Wi: [], Md: [], Ih: [], fu: 50, Lu: 100, Fu: .5, Qd: null, Nt: 1, gq: 3, Wp: 5, Tt: 5, Rm: 3, Us: 0, tl: 0, Pp: 0, Nu: 3E5, On: null };
Z.Ku = [new D(10, 90), new D(90, 10), new D(10, 10), new D(90, 90), new D(50, 99), new D(50, 1), new D(1, 50), new D(99, 50), new D(50, 49)];
Z.reset = function() { clearTimeout(Z.Us);
    Z.Md.length = 0;
    Z.Ih.length = 0;
    Z.Wi.length = 0; for (var a = Z.Pp = 0, b; b = Z.Jc[a]; a++) b.reset() };
Z.Wu = function(a, b, c, e) { c || (c = Z.Ku[Z.Jc.length]);
    a = new Sl(a, b, c, e);
    Z.Jc.push(a) };
Z.start = function(a) { Z.On = a;
    Z.tl = Date.now() + Z.Nu;
    console.log("Starting battle with " + Z.Jc.length + " avatars.");
    Z.update() };
Z.update = function() { Z.oy();
    Z.py();
    Z.ny();
    Z.Jc.length <= Z.Wi.length + 1 && (Z.tl = Math.min(Z.tl, Date.now() + 1E3));
    Date.now() > Z.tl ? Z.stop() : Z.Us = setTimeout(Z.update, 1E3 / Z.fu) };
Z.stop = function() { for (var a = [], b = 0, c; c = Z.Jc[b]; b++) c.Rd || a.push(c);
    b = a.length; for (a.sort(function(a, b) { return a.ya - b.ya }); a.length;) Z.Wi.unshift(a.pop());
    Z.On && Z.On(b) };
Z.py = function() { for (var a = Z.Ih.length - 1; 0 <= a; a--) { var b = Z.Ih[a];
        b.ek += Z.gq; var c = 0; if (b.sm - b.ek < Z.gq / 2) { Z.Ih.splice(a, 1); for (var e = 0, f; f = Z.Jc[e]; e++)
                if (!f.Rd) { var h = 10 * (1 - tc(f.sa, b.qj) / 4);
                    0 < h && (Tl(f, h), c = Math.max(c, h)) } Z.Md.push({ type: "BOOM", damage: c, x: b.qj.x, y: b.qj.y }) } } };
Z.ny = function() {
    for (var a = 0, b; b = Z.Jc[a]; a++)
        if (!b.Rd && (b.speed < b.pe ? b.speed = Math.min(b.speed + Z.Wp, b.pe) : b.speed > b.pe && (b.speed = Math.max(b.speed - Z.Wp, b.pe)), 0 < b.speed)) {
            var c = Z.Mq(b),
                e = c[1],
                f = rc(b.df),
                h = b.speed / 100 * Z.Nt,
                k = Math.cos(f) * h;
            h *= Math.sin(f);
            b.sa.x += k;
            b.sa.y += h;
            0 > b.sa.x || 100 < b.sa.x || 0 > b.sa.y || 100 < b.sa.y ? (b.sa.x = pc(b.sa.x, 0, 100), b.sa.y = pc(b.sa.y, 0, 100), e = b.speed / 100 * Z.Rm, Tl(b, e), b.speed = 0, b.pe = 0, Z.Md.push({ type: "CRASH", avatar: b, damage: e })) : (c = Z.Mq(b), f = c[0], c = c[1], c < Z.Tt && e > c && (b.sa.x -= k, b.sa.y -=
                h, e = Math.max(b.speed, f.speed) / 100 * Z.Rm, Tl(b, e), b.speed = 0, b.pe = 0, Tl(f, e), f.speed = 0, f.pe = 0, Z.Md.push({ type: "CRASH", avatar: b, damage: e }), Z.Md.push({ type: "CRASH", avatar: f, damage: e })))
        }
};
Z.oy = function() { for (var a = 0; a < Z.Lu; a++) { Z.Pp++; for (var b = 0, c; c = Z.Jc[b]; b++)
            if (!c.Rd) { Z.Qd = c; try { c.Rw.step() } catch (e) { console.log(c + " throws an error: " + e), Ul(c) } Z.Qd = null } } };
Z.Ow = function(a, b) {
    var c = function(a, b) { var c = a;
        a = Z.Qd; var e = void 0 === b || null === b ? 5 : b; if (!r(c) || isNaN(c) || !r(e) || isNaN(e)) throw TypeError;
        c = qc(c);
        e = pc(e, 0, 20);
        a.Kf.Md.push({ type: "SCAN", avatar: a, degree: c, resolution: e });
        b = qc(c - e / 2);
        c = qc(c + e / 2);
        b > c && (c += 360);
        e = a.sa.x; for (var f = a.sa.y, m = Infinity, n = 0, p; p = a.Kf.Jc[n]; n++)
            if (p != a && !p.Rd) { var v = p.sa.x,
                    y = p.sa.y;
                p = Math.sqrt((y - f) * (y - f) + (v - e) * (v - e));
                p >= m || (v = Math.atan2(y - f, v - e), v = qc(180 * v / Math.PI), v < b && (v += 360), b <= v && v <= c && (m = p)) } return m };
    a.setProperty(b, "scan",
        a.createNativeFunction(c));
    c = function(a, b) { var c = b;
        b = Z.Qd; if (!r(a) || isNaN(a) || !r(c) || isNaN(c)) throw TypeError; var e = Date.now();
        b.xo + 1E3 * b.Kf.Fu > e ? a = !1 : (b.xo = e, e = b.sa.clone(), a = qc(a), b.facing = a, c = pc(c, 0, 70), a = { ev: b, rk: e, df: a, sm: c, qj: new D(e.x + c * Math.cos(rc(a)), e.y + c * Math.sin(rc(a))), ek: 0 }, b.Kf.Ih.push(a), b.Kf.Md.push({ type: "BANG", avatar: b, degree: a.df }), a = !0); return a };
    a.setProperty(b, "cannon", a.createNativeFunction(c));
    c = function(a, b) {
        var c = Z.Qd;
        b = void 0 === b || null === b ? 50 : b;
        if (!r(a) || isNaN(a) || !r(b) ||
            isNaN(b)) throw TypeError;
        c.df != qc(a) && (50 >= c.speed ? (c.df = qc(a), c.facing = c.df) : b = 0);
        0 == c.speed && 0 < b && (c.speed = .1);
        c.pe = pc(b, 0, 100)
    };
    a.setProperty(b, "drive", a.createNativeFunction(c));
    a.setProperty(b, "swim", a.createNativeFunction(c));
    a.setProperty(b, "stop", a.createNativeFunction(function() { Z.Qd.stop() }));
    a.setProperty(b, "damage", a.createNativeFunction(function() { return Z.Qd.ya }));
    a.setProperty(b, "health", a.createNativeFunction(function() { return 100 - Z.Qd.ya }));
    a.setProperty(b, "speed", a.createNativeFunction(function() { return Z.Qd.speed }));
    c = function() { return Z.Qd.sa.x };
    a.setProperty(b, "loc_x", a.createNativeFunction(c));
    a.setProperty(b, "getX", a.createNativeFunction(c));
    c = function() { return Z.Qd.sa.y };
    a.setProperty(b, "loc_y", a.createNativeFunction(c));
    a.setProperty(b, "getY", a.createNativeFunction(c));
    if (b = a.getProperty(b, "Math")) c = function(a) { return Math.sin(a / 180 * Math.PI) }, a.setProperty(b, "sin_deg", a.createNativeFunction(c)), c = function(a) { return Math.cos(a / 180 * Math.PI) }, a.setProperty(b, "cos_deg", a.createNativeFunction(c)), c = function(a) {
        return Math.tan(a /
            180 * Math.PI)
    }, a.setProperty(b, "tan_deg", a.createNativeFunction(c)), c = function(a) { return Math.asin(a) / Math.PI * 180 }, a.setProperty(b, "asin_deg", a.createNativeFunction(c)), c = function(a) { return Math.acos(a) / Math.PI * 180 }, a.setProperty(b, "acos_deg", a.createNativeFunction(c)), c = function(a) { return Math.atan(a) / Math.PI * 180 }, a.setProperty(b, "atan_deg", a.createNativeFunction(c))
};
Z.Mq = function(a) { for (var b = null, c = Infinity, e = 0, f; f = Z.Jc[e]; e++)
        if (!f.Rd && a != f) { var h = Math.min(c, tc(a.sa, f.sa));
            h < c && (c = h, b = f) } return [b, c] };
var Vl, Wl, Xl, Yl = {},
    Zl = [],
    $l = new Image;
$l.src = "pond/sprites.png";
var am = ["#ff8b00", "#c90015", "#166c0b", "#11162a"],
    bm = 0,
    cm = Object.create(null);

function dm() { Vl = document.getElementById("scratch").getContext("2d"); var a = document.getElementById("display").getContext("2d");
    Wl = a;
    Xl = a.canvas.width;
    a.globalCompositeOperation = "copy";
    em(["pond/whack.mp3", "pond/whack.ogg"], "whack");
    em(["pond/boom.mp3", "pond/boom.ogg"], "boom");
    em(["pond/splash.mp3", "pond/splash.ogg"], "splash"); if (!ob && !nb)
        for (var b in cm) a = cm[b], a.volume = .01, a.play(), a.pause() }

function fm() {
    clearTimeout(bm);
    Zl.length = 0;
    var a = document.getElementById("avatarStatRow");
    a.innerHTML = "";
    for (var b = [], c = [], e = 0, f; f = Z.Jc[e]; e++) {
        var h = am[e % am.length];
        f.Ht = e;
        var k = document.createElement("td");
        k.style.borderColor = h;
        var l = document.createElement("div");
        l.className = "avatarStatHealth";
        l.style.background = h;
        f.uy = l;
        c[e] = l;
        k.appendChild(l);
        l = document.createElement("div");
        l.className = "avatarStatName";
        f = document.createTextNode(f.name);
        l.appendChild(f);
        b[e] = l;
        k.appendChild(l);
        l = document.createElement("div");
        f = document.createTextNode("\u00a0");
        l.appendChild(f);
        k.appendChild(l);
        a.appendChild(k)
    }
    for (e = 0; l = b[e]; e++) l.style.width = l.parentNode.offsetWidth - 2 + "px";
    for (e = 0; l = c[e]; e++) l.style.height = l.parentNode.offsetHeight - 2 + "px";
    gm()
}
var hm = 0,
    im = 0;

function jm() { gm(); var a = Date.now(),
        b = Math.max(1, 1E3 / 36 - (a - hm - im));
    bm = setTimeout(jm, b);
    hm = a;
    im = b }

function km(a) { return a / 100 * (Xl - 35) + 17.5 }

function gm() {
    var a = Vl;
    a.beginPath();
    a.rect(0, 0, a.canvas.width, a.canvas.height);
    a.fillStyle = "#527dbf";
    a.fill();
    for (var b = [], c = 0, e; e = Z.Jc[c]; c++) e.Rd && b.push(e);
    for (c = 0; e = Z.Jc[c]; c++) e.Rd || b.push(e);
    for (c = 0; e = b[c]; c++) {
        a.save();
        var f = km(e.sa.x),
            h = km(100 - e.sa.y);
        a.translate(f, h);
        var k = e.Ht % am.length * 35;
        e.Rd && (a.globalAlpha = .25);
        0 < e.speed && (a.save(), f = 50 < e.speed ? 0 : 25 < e.speed ? 35 : 70, a.rotate(-e.df / 180 * Math.PI), a.drawImage($l, 455, f, 35, 35, -45.5, -17.5, 35, 35), a.restore());
        a.drawImage($l, 0, k, 35, 35, -17.5, -17.5,
            35, 35);
        f = e.facing / 180 * Math.PI;
        a.translate(12 * Math.cos(f), 12 * -Math.sin(f) - 2);
        f = (14 - Math.round(e.facing / 360 * 12)) % 12 + 1;
        e = e.facing % 30;
        15 <= e && (e -= 30);
        e /= 1.5;
        a.rotate(-e / 180 * Math.PI);
        a.drawImage($l, 35 * f, k, 35, 35, -15.5, -15.5, 35, 35);
        a.restore()
    }
    for (c = 0; e = Z.Ih[c]; c++) {
        a.save();
        h = e.ek / e.sm;
        k = (e.qj.y - e.rk.y) * -h;
        f = e.sm / 2;
        var l = .15 * e.sm;
        f = l - Math.pow((e.ek - f) / Math.sqrt(l) * l / f, 2);
        h = km(e.rk.x + (e.qj.x - e.rk.x) * h);
        l = km(100 - e.rk.y + k - f);
        k = km(100 - e.rk.y + k);
        a.beginPath();
        a.arc(h, k, 5 * Math.max(0, 1 - f / 10), 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = "rgba(128, 128, 128, " + Math.max(0, 1 - f / 10) + ")";
        a.fill();
        a.beginPath();
        a.arc(h, l, 5, 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = am[e.ev.Ht % am.length];
        a.fill()
    }
    for (c = 0; c < Z.Md.length; c++)
        if (f = Z.Md[c], e = f.avatar, "CRASH" == f.type) { if (k = Yl[e.id], !k || k + 1E3 < pa()) lm("whack", f.damage / Z.Rm), Yl[e.id] = pa() } else "SCAN" == f.type ? (h = Math.max(f.resolution / 2, .5), k = -rc(f.degree + h), l = -rc(f.degree - h), a.beginPath(), f = km(e.sa.x), h = km(100 - e.sa.y), a.moveTo(f, h), a.lineTo(f + 200 * Math.cos(k), h + 200 * Math.sin(k)), a.arc(f, h,
            200, k, l), a.lineTo(f, h), e = a.createRadialGradient(f, h, 17.5, f, h, 200), e.addColorStop(0, "rgba(255, 255, 255, 0.3)"), e.addColorStop(1, "rgba(255, 255, 255, 0)"), a.fillStyle = e, a.fill()) : "BANG" != f.type && ("BOOM" == f.type ? (f.damage && lm("boom", f.damage / 10), Zl.push({ x: f.x, y: f.y, t: 0 })) : "DIE" == f.type && lm("splash"));
    Z.Md.length = 0;
    for (c = Zl.length - 1; 0 <= c; c--) e = Zl[c], f = km(e.x), h = km(100 - e.y), a.beginPath(), a.arc(f, h, e.t + 1, 0, 2 * Math.PI, !0), a.closePath(), a.lineWidth = 5, a.strokeStyle = "rgba(255, 255, 255, " + (1 - e.t / 10) + ")", a.stroke(),
        e.t += 2, 10 < e.t && Zl.splice(c, 1);
    Wl.drawImage(a.canvas, 0, 0);
    for (c = 0; e = b[c]; c++) a = e.uy, a.parentNode.title = e.name + ": " + Math.round(100 - e.ya) + "%", a.style.width = Math.max(0, a.parentNode.offsetWidth * (1 - e.ya / 100) - 2) + "px"
}

function em(a, b) { if (window.Audio && a.length) { for (var c, e = new window.Audio, f = 0; f < a.length; f++) { var h = a[f],
                k = h.match(/\.(\w+)$/); if (k && e.canPlayType("audio/" + k[1])) { c = new window.Audio(h); break } } c && c.play && (cm[b] = c) } }

function lm(a, b) { a = cm[a];
    a = vb && 9 === vb || ob || mb ? a : a.cloneNode();
    a.volume = void 0 === b ? 1 : b;
    a.play() };
var mm = null,
    nm = !1;

function om() { if (!nm) { var a = document.getElementById("docsButton"),
            b = document.getElementById("dialogDocs"),
            c = document.getElementById("frameDocs"),
            e = "pond/docs.html?lang=" + Gl + "&mode=" + V;
        c.src != e && (c.src = e);
        nm = !0;
        X.ig(a, !1, .2);
        X.ig(b, !0, .8);
        setTimeout(function() { b.style.visibility = "visible";
            document.getElementById("dialogBorder").style.visibility = "hidden" }, 175) } }

function pm() { if (nm) { var a = document.getElementById("docsButton"),
            b = document.getElementById("dialogDocs");
        nm = !1;
        X.ig(b, !1, .8);
        X.ig(a, !0, .2);
        setTimeout(function() { document.getElementById("dialogBorder").style.visibility = "hidden" }, 175);
        b.style.visibility = "hidden" } }

function qm(a) { if (!Y.se(a)) { a = document.getElementById("runButton"); var b = document.getElementById("resetButton");
        b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        b.style.display = "inline";
        rm() } }

function sm(a) { Y.se(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", Z.reset(), fm()) }

function rm() { "Interpreter" in window ? (Z.reset(), fm(), Z.start(mm), jm()) : setTimeout(rm, 250) }

function tm() { var a = document.getElementById("help"),
        b = document.getElementById("helpButton");
    X.Fi(a, b, !0, !0, { width: "50%", left: "25%", top: "5em" }, X.Kp);
    X.Jp() };
x.D.gx = {};
x.ba = {};
x.ba.Math = {};
x.ba.Math.Nk = 230;
x.Vh([{ type: "math_number", message0: "%1", args0: [{ type: "field_number", name: "NUM", value: 0 }], output: "Number", colour: "%{BKY_MATH_HUE}", helpUrl: "%{BKY_MATH_NUMBER_HELPURL}", tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}", extensions: ["parent_tooltip_when_inline"] }, {
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
x.ba.Math.fn = {
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
x.N.register("math_op_tooltip", x.N.Vk("OP", x.ba.Math.fn));
x.ba.Math.mu = { Ka: function() { var a = document.createElement("mutation"),
            b = "DIVISIBLE_BY" == F(this, "PROPERTY");
        a.setAttribute("divisor_input", b); return a }, ib: function(a) { a = "true" == a.getAttribute("divisor_input");
        this.Ub(a) }, Ub: function(a) { var b = K(this, "DIVISOR");
        a ? b || P(this, "DIVISOR").Ta("Number") : b && this.Ga("DIVISOR") } };
x.ba.Math.nu = function() { uh(Ce(this, "PROPERTY"), function(a) { this.v.Ub("DIVISIBLE_BY" == a) }) };
x.N.gp("math_is_divisibleby_mutator", x.ba.Math.mu, x.ba.Math.nu);
x.N.register("math_change_tooltip", x.N.rn("%{BKY_MATH_CHANGE_TOOLTIP}"));
x.ba.Math.qu = { Ek: function(a) { "MODE" == a ? this.M.Ta("Array") : this.M.Ta("Number") }, Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("op", F(this, "OP")); return a }, ib: function(a) { this.Ek(a.getAttribute("op")) } };
x.ba.Math.pu = function() { uh(Ce(this, "OP"), function(a) { this.Ek(a) }.bind(this)) };
x.N.gp("math_modes_of_list_mutator", x.ba.Math.qu, x.ba.Math.pu);
// Copyright 2012 Google Inc.  Apache License 2.0
x.h = new Dh;
Ck("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
x.h.Hg = 0;
x.h.LA = 1.1;
x.h.ob = 1.2;
x.h.Da = 2;
x.h.JA = 3;
x.h.FA = 3;
x.h.BA = 4.1;
x.h.NA = 4.2;
x.h.Vi = 4.3;
x.h.Ti = 4.4;
x.h.MA = 4.5;
x.h.OA = 4.6;
x.h.GA = 4.7;
x.h.zA = 4.8;
x.h.HA = 5;
x.h.Ym = 5.1;
x.h.Rk = 5.2;
x.h.Ui = 5.3;
x.h.Nh = 6.1;
x.h.Ef = 6.2;
x.h.DA = 7;
x.h.Du = 8;
x.h.IA = 8;
x.h.KA = 8;
x.h.jq = 9;
x.h.AA = 10;
x.h.EA = 11;
x.h.CA = 12;
x.h.Wm = 13;
x.h.Xm = 14;
x.h.Qk = 15;
x.h.Ve = 16;
x.h.PA = 17;
x.h.ec = 18;
x.h.Wb = 99;
x.h.Sk = [
    [x.h.Da, x.h.ob],
    [x.h.Da, x.h.Da],
    [x.h.ob, x.h.ob],
    [x.h.ob, x.h.Da],
    [x.h.Ti, x.h.Ti],
    [x.h.Ym, x.h.Ym],
    [x.h.Ef, x.h.Ef],
    [x.h.Wm, x.h.Wm],
    [x.h.Xm, x.h.Xm]
];
x.h.I = function(a) { x.h.Og = Object.create(null);
    x.h.Vn = Object.create(null);
    x.h.Qa ? x.h.Qa.reset() : x.h.Qa = new Fk;
    x.h.Qa.ta = a.ta; for (var b = [], c = x.H.Yu(a), e = 0; e < c.length; e++) b.push(x.h.Qa.getName(c[e], "DEVELOPER_VARIABLE"));
    a = x.H.uq(a); for (e = 0; e < a.length; e++) b.push(x.h.Qa.getName(a[e].aa(), x.H.Ra));
    b.length && (x.h.Og.variables = "var " + b.join(", ") + ";") };
x.h.finish = function(a) { var b = [],
        c; for (c in x.h.Og) b.push(x.h.Og[c]);
    delete x.h.Og;
    delete x.h.Vn;
    x.h.Qa.reset(); return b.join("\n\n") + "\n\n\n" + a };
x.h.ht = function(a) { return a + ";\n" };
x.h.kC = function(a) { a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'"); return "'" + a + "'" };
x.h.Am = function(a, b) { var c = ""; if (!a.M || !a.M.Ia) { var e = a.Bl();
        (e = x.i.Lt(e, x.h.Ut - 3)) && (c = a.hf ? c + ("/**\n" + zk(e + "\n", " * ") + " */\n") : c + zk(e + "\n", "// ")); for (var f = 0; f < a.X.length; f++)
            if (a.X[f].type == x.ab) { var h = J(a.X[f].connection); if (h) { e = [];
                    h = xc(h, !0); for (var k = 0; k < h.length; k++) { var l = h[k].Bl();
                        l && e.push(l) } e.length && e.push("");
                    (e = e.join("\n")) && (c += zk(e, "// ")) } } } a = a.L && J(a.L);
    a = yk(x.h, a); return c + b + a };
x.h.we = function(a, b, c, e, f) { c = c || 0;
    f = f || x.h.Wb;
    a.o.options.Ge && c--; var h = a.o.options.Ge ? "1" : "0";
    a = 0 < c ? U(a, b, x.h.Ef) || h : 0 > c ? U(a, b, x.h.Nh) || h : e ? U(a, b, x.h.Vi) || h : U(a, b, f) || h; if (x.cg(a)) a = parseFloat(a) + c, e && (a = -a);
    else { if (0 < c) { a = a + " + " + c; var k = x.h.Ef } else 0 > c && (a = a + " - " + -c, k = x.h.Nh);
        e && (a = c ? "-(" + a + ")" : "-" + a, k = x.h.Vi);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")") } return a };
x.h.gx = {};
x.h.math_number = function(a) { a = parseFloat(F(a, "NUM")); return [a, 0 <= a ? x.h.Hg : x.h.Vi] };
x.h.math_arithmetic = function(a) { var b = { ADD: [" + ", x.h.Ef], MINUS: [" - ", x.h.Nh], MULTIPLY: [" * ", x.h.Ym], DIVIDE: [" / ", x.h.Rk], POWER: [null, x.h.ec] } [F(a, "OP")],
        c = b[0];
    b = b[1]; var e = U(a, "A", b) || "0";
    a = U(a, "B", b) || "0"; return c ? [e + c + a, b] : ["Math.pow(" + e + ", " + a + ")", x.h.Da] };
x.h.math_single = function(a) {
    var b = F(a, "OP");
    if ("NEG" == b) return a = U(a, "NUM", x.h.Vi) || "0", "-" == a[0] && (a = " " + a), ["-" + a, x.h.Vi];
    a = "SIN" == b || "COS" == b || "TAN" == b ? U(a, "NUM", x.h.Rk) || "0" : U(a, "NUM", x.h.Wb) || "0";
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
    if (c) return [c, x.h.Da];
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
    return [c, x.h.Rk]
};
x.h.math_constant = function(a) { return { PI: ["Math.PI", x.h.ob], E: ["Math.E", x.h.ob], GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", x.h.Rk], SQRT2: ["Math.SQRT2", x.h.ob], SQRT1_2: ["Math.SQRT1_2", x.h.ob], INFINITY: ["Infinity", x.h.Hg] } [F(a, "CONSTANT")] };
x.h.math_number_property = function(a) {
    var b = U(a, "NUMBER_TO_CHECK", x.h.Ui) || "0",
        c = F(a, "PROPERTY");
    if ("PRIME" == c) {
        var e = Dk("mathIsPrime", ["function " + x.h.ud + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
            "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"
        ]) + "(" + b + ")";
        return [e, x.h.Da]
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
            a = U(a, "DIVISOR", x.h.Ui) || "0", e = b + " % " + a + " == 0" }
    return [e, x.h.jq]
};
x.h.math_change = function(a) { var b = U(a, "DELTA", x.h.Ef) || "0";
    a = x.h.Qa.getName(F(a, "VAR"), x.H.Ra); return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n" };
x.h.math_round = x.h.math_single;
x.h.math_trig = x.h.math_single;
x.h.math_on_list = function(a) {
    var b = F(a, "OP");
    switch (b) {
        case "SUM":
            a = U(a, "LIST", x.h.ob) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = U(a, "LIST", x.h.ec) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = U(a, "LIST", x.h.ec) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            b = Dk("mathMean", ["function " + x.h.ud + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = U(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MEDIAN":
            b =
                Dk("mathMedian", ["function " + x.h.ud + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = U(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MODE":
            b = Dk("mathModes",
                ["function " + x.h.ud + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);",
                    "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
                ]);
            a = U(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "STD_DEV":
            b = Dk("mathStandardDeviation", ["function " + x.h.ud + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"
            ]);
            a = U(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "RANDOM":
            b = Dk("mathRandomList", ["function " + x.h.ud + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = U(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        default:
            throw "Unknown operator: " + b;
    }
    return [a, x.h.Da]
};
x.h.math_modulo = function(a) { var b = U(a, "DIVIDEND", x.h.Ui) || "0";
    a = U(a, "DIVISOR", x.h.Ui) || "0"; return [b + " % " + a, x.h.Ui] };
x.h.math_constrain = function(a) { var b = U(a, "VALUE", x.h.ec) || "0",
        c = U(a, "LOW", x.h.ec) || "0";
    a = U(a, "HIGH", x.h.ec) || "Infinity"; return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", x.h.Da] };
x.h.math_random_int = function(a) { var b = U(a, "FROM", x.h.ec) || "0";
    a = U(a, "TO", x.h.ec) || "0"; return [Dk("mathRandomInt", ["function " + x.h.ud + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", x.h.Da] };
x.h.math_random_float = function() { return ["Math.random()", x.h.Da] };
x.D.Do = {};
x.ba.xu = {};
x.ba.xu.Nk = 260;
x.Vh([{ type: "lists_create_empty", message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}", output: "Array", colour: "%{BKY_LISTS_HUE}", tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}", helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}" }, { type: "lists_repeat", message0: "%{BKY_LISTS_REPEAT_TITLE}", args0: [{ type: "input_value", name: "ITEM" }, { type: "input_value", name: "NUM", check: "Number" }], output: "Array", colour: "%{BKY_LISTS_HUE}", tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}", helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}" }, {
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
x.D.lists_create_with = {
    I: function() { this.Sa = x.g.LISTS_CREATE_WITH_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        this.Cc = 3;
        this.Ub();
        this.Fc(!0, "Array");
        this.vg(new Yg(["lists_create_with_item"]));
        this.oa(x.g.LISTS_CREATE_WITH_TOOLTIP) },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("items", this.Cc); return a },
    ib: function(a) { this.Cc = parseInt(a.getAttribute("items"), 10);
        this.Ub() },
    cf: function(a) {
        var b = a.mf("lists_create_with_container");
        b.Bc();
        for (var c = K(b, "STACK").connection, e = 0; e < this.Cc; e++) {
            var f =
                a.mf("lists_create_with_item");
            f.Bc();
            c.connect(f.Z);
            c = f.L
        }
        return b
    },
    af: function(a) { var b = Lh(a, "STACK"); for (a = []; b;) a.push(b.Sp), b = b.L && J(b.L); for (b = 0; b < this.Cc; b++) { var c = K(this, "ADD" + b).connection.Ia;
            c && -1 == a.indexOf(c) && c.disconnect() } this.Cc = a.length;
        this.Ub(); for (b = 0; b < this.Cc; b++) Zg(a[b], this, "ADD" + b) },
    zm: function(a) { a = Lh(a, "STACK"); for (var b = 0; a;) { var c = K(this, "ADD" + b);
            a.Sp = c && c.connection.Ia;
            b++;
            a = a.L && J(a.L) } },
    Ub: function() {
        this.Cc && K(this, "EMPTY") ? this.Ga("EMPTY") : this.Cc || K(this, "EMPTY") ||
            O(Q(this, "EMPTY"), x.g.LISTS_CREATE_EMPTY_TITLE);
        for (var a = 0; a < this.Cc; a++)
            if (!K(this, "ADD" + a)) { var b = P(this, "ADD" + a);
                0 == a && O(b, x.g.LISTS_CREATE_WITH_INPUT_WITH) } for (; K(this, "ADD" + a);) this.Ga("ADD" + a), a++
    }
};
x.D.lists_create_with_container = { I: function() { this.Ha(x.g.LISTS_HUE);
        O(Q(this), x.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        Ih(this, "STACK");
        this.oa(x.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = !1 } };
x.D.lists_create_with_item = { I: function() { this.Ha(x.g.LISTS_HUE);
        O(Q(this), x.g.LISTS_CREATE_WITH_ITEM_TITLE);
        this.jd(!0);
        this.hd(!0);
        this.oa(x.g.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1 } };
x.D.lists_indexOf = { I: function() { var a = [
            [x.g.LISTS_INDEX_OF_FIRST, "FIRST"],
            [x.g.LISTS_INDEX_OF_LAST, "LAST"]
        ];
        this.Sa = x.g.LISTS_INDEX_OF_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        this.Fc(!0, "Number");
        O(P(this, "VALUE").Ta("Array"), x.g.LISTS_INDEX_OF_INPUT_IN_LIST);
        O(P(this, "FIND"), new Hh(a), "END");
        this.bc(!0); var b = this;
        this.oa(function() { return x.g.LISTS_INDEX_OF_TOOLTIP.replace("%1", b.o.options.Ge ? "0" : "-1") }) } };
x.D.lists_getIndex = {
    I: function() {
        var a = [
            [x.g.LISTS_GET_INDEX_GET, "GET"],
            [x.g.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
            [x.g.LISTS_GET_INDEX_REMOVE, "REMOVE"]
        ];
        this.hn = [
            [x.g.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [x.g.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [x.g.LISTS_GET_INDEX_FIRST, "FIRST"],
            [x.g.LISTS_GET_INDEX_LAST, "LAST"],
            [x.g.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.Sa = x.g.LISTS_GET_INDEX_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        a = new Hh(a, function(a) { this.v.Et("REMOVE" == a) });
        O(P(this, "VALUE").Ta("Array"), x.g.LISTS_GET_INDEX_INPUT_IN_LIST);
        O(O(Q(this), a, "MODE"), "", "SPACE");
        Q(this, "AT");
        x.g.LISTS_GET_INDEX_TAIL && O(Q(this, "TAIL"), x.g.LISTS_GET_INDEX_TAIL);
        this.bc(!0);
        this.Fc(!0);
        this.qd(!0);
        var b = this;
        this.oa(function() {
            var a = F(b, "MODE"),
                e = F(b, "WHERE"),
                f = "";
            switch (a + " " + e) {
                case "GET FROM_START":
                case "GET FROM_END":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                    break;
                case "GET FIRST":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                    break;
                case "GET LAST":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                    break;
                case "GET RANDOM":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                    break;
                case "GET_REMOVE FROM_START":
                case "GET_REMOVE FROM_END":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                    break;
                case "GET_REMOVE FIRST":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                    break;
                case "GET_REMOVE LAST":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                    break;
                case "GET_REMOVE RANDOM":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                    break;
                case "REMOVE FROM_START":
                case "REMOVE FROM_END":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                    break;
                case "REMOVE FIRST":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                    break;
                case "REMOVE LAST":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                    break;
                case "REMOVE RANDOM":
                    f = x.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + ("FROM_START" == e ? x.g.LISTS_INDEX_FROM_START_TOOLTIP : x.g.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1", b.o.options.Ge ? "#1" : "#0");
            return f
        })
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("statement", !this.M);
        a.setAttribute("at", K(this, "AT").type == x.ab); return a },
    ib: function(a) {
        var b = "true" == a.getAttribute("statement");
        this.Et(b);
        a = "false" != a.getAttribute("at");
        this.qd(a)
    },
    Et: function(a) { a != !this.M && (Fe(this, !0), a ? (this.Fc(!1), this.jd(!0), this.hd(!0)) : (this.jd(!1), this.hd(!1), this.Fc(!0))) },
    qd: function(a) {
        this.Ga("AT");
        this.Ga("ORDINAL", !0);
        a ? (P(this, "AT").Ta("Number"), x.g.ORDINAL_NUMBER_SUFFIX && O(Q(this, "ORDINAL"), x.g.ORDINAL_NUMBER_SUFFIX)) : Q(this, "AT");
        var b = new Hh(this.hn, function(b) { var c = "FROM_START" == b || "FROM_END" == b; if (c != a) { var f = this.v;
                f.qd(c);
                Fh(f, b, "WHERE"); return null } });
        O(K(this, "AT"), b, "WHERE");
        x.g.LISTS_GET_INDEX_TAIL &&
            Kh(this, "TAIL", null)
    }
};
x.D.lists_setIndex = {
    I: function() {
        var a = [
            [x.g.LISTS_SET_INDEX_SET, "SET"],
            [x.g.LISTS_SET_INDEX_INSERT, "INSERT"]
        ];
        this.hn = [
            [x.g.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [x.g.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [x.g.LISTS_GET_INDEX_FIRST, "FIRST"],
            [x.g.LISTS_GET_INDEX_LAST, "LAST"],
            [x.g.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.Sa = x.g.LISTS_SET_INDEX_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        O(P(this, "LIST").Ta("Array"), x.g.LISTS_SET_INDEX_INPUT_IN_LIST);
        O(O(Q(this), new Hh(a), "MODE"), "", "SPACE");
        Q(this, "AT");
        O(P(this,
            "TO"), x.g.LISTS_SET_INDEX_INPUT_TO);
        this.bc(!0);
        this.jd(!0);
        this.hd(!0);
        this.oa(x.g.LISTS_SET_INDEX_TOOLTIP);
        this.qd(!0);
        var b = this;
        this.oa(function() {
            var a = F(b, "MODE"),
                e = F(b, "WHERE"),
                f = "";
            switch (a + " " + e) {
                case "SET FROM_START":
                case "SET FROM_END":
                    f = x.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                    break;
                case "SET FIRST":
                    f = x.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                    break;
                case "SET LAST":
                    f = x.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                    break;
                case "SET RANDOM":
                    f = x.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                    break;
                case "INSERT FROM_START":
                case "INSERT FROM_END":
                    f =
                        x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                    break;
                case "INSERT FIRST":
                    f = x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                    break;
                case "INSERT LAST":
                    f = x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                    break;
                case "INSERT RANDOM":
                    f = x.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + x.g.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", b.o.options.Ge ? "#1" : "#0");
            return f
        })
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("at", K(this, "AT").type == x.ab); return a },
    ib: function(a) {
        a =
            "false" != a.getAttribute("at");
        this.qd(a)
    },
    qd: function(a) { this.Ga("AT");
        this.Ga("ORDINAL", !0);
        a ? (P(this, "AT").Ta("Number"), x.g.ORDINAL_NUMBER_SUFFIX && O(Q(this, "ORDINAL"), x.g.ORDINAL_NUMBER_SUFFIX)) : Q(this, "AT"); var b = new Hh(this.hn, function(b) { var c = "FROM_START" == b || "FROM_END" == b; if (c != a) { var f = this.v;
                f.qd(c);
                Fh(f, b, "WHERE"); return null } });
        Kh(this, "AT", "TO");
        K(this, "ORDINAL") && Kh(this, "ORDINAL", "TO");
        O(K(this, "AT"), b, "WHERE") }
};
x.D.lists_getSublist = {
    I: function() {
        this.WHERE_OPTIONS_1 = [
            [x.g.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
            [x.g.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
            [x.g.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]
        ];
        this.WHERE_OPTIONS_2 = [
            [x.g.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
            [x.g.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
            [x.g.LISTS_GET_SUBLIST_END_LAST, "LAST"]
        ];
        this.Sa = x.g.LISTS_GET_SUBLIST_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        O(P(this, "LIST").Ta("Array"), x.g.LISTS_GET_SUBLIST_INPUT_IN_LIST);
        Q(this,
            "AT1");
        Q(this, "AT2");
        x.g.LISTS_GET_SUBLIST_TAIL && O(Q(this, "TAIL"), x.g.LISTS_GET_SUBLIST_TAIL);
        this.bc(!0);
        this.Fc(!0, "Array");
        this.qd(1, !0);
        this.qd(2, !0);
        this.oa(x.g.LISTS_GET_SUBLIST_TOOLTIP)
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("at1", K(this, "AT1").type == x.ab);
        a.setAttribute("at2", K(this, "AT2").type == x.ab); return a },
    ib: function(a) { var b = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.qd(1, b);
        this.qd(2, a) },
    qd: function(a, b) {
        this.Ga("AT" + a);
        this.Ga("ORDINAL" +
            a, !0);
        b ? (P(this, "AT" + a).Ta("Number"), x.g.ORDINAL_NUMBER_SUFFIX && O(Q(this, "ORDINAL" + a), x.g.ORDINAL_NUMBER_SUFFIX)) : Q(this, "AT" + a);
        var c = new Hh(this["WHERE_OPTIONS_" + a], function(c) { var e = "FROM_START" == c || "FROM_END" == c; if (e != b) { var h = this.v;
                h.qd(a, e);
                Fh(h, c, "WHERE" + a); return null } });
        O(K(this, "AT" + a), c, "WHERE" + a);
        1 == a && (Kh(this, "AT1", "AT2"), K(this, "ORDINAL1") && Kh(this, "ORDINAL1", "AT2"));
        x.g.LISTS_GET_SUBLIST_TAIL && Kh(this, "TAIL", null)
    }
};
x.D.lists_sort = { I: function() { Jh(this, { message0: x.g.LISTS_SORT_TITLE, args0: [{ type: "field_dropdown", name: "TYPE", options: [
                    [x.g.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
                    [x.g.LISTS_SORT_TYPE_TEXT, "TEXT"],
                    [x.g.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]
                ] }, { type: "field_dropdown", name: "DIRECTION", options: [
                    [x.g.LISTS_SORT_ORDER_ASCENDING, "1"],
                    [x.g.LISTS_SORT_ORDER_DESCENDING, "-1"]
                ] }, { type: "input_value", name: "LIST", check: "Array" }], output: "Array", colour: x.g.LISTS_HUE, tooltip: x.g.LISTS_SORT_TOOLTIP, helpUrl: x.g.LISTS_SORT_HELPURL }) } };
x.D.lists_split = {
    I: function() {
        var a = this,
            b = new Hh([
                [x.g.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
                [x.g.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]
            ], function(b) { a.Ek(b) });
        this.Sa = x.g.LISTS_SPLIT_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        O(P(this, "INPUT").Ta("String"), b, "MODE");
        O(P(this, "DELIM").Ta("String"), x.g.LISTS_SPLIT_WITH_DELIMITER);
        this.bc(!0);
        this.Fc(!0, "Array");
        this.oa(function() {
            var b = F(a, "MODE");
            if ("SPLIT" == b) return x.g.LISTS_SPLIT_TOOLTIP_SPLIT;
            if ("JOIN" == b) return x.g.LISTS_SPLIT_TOOLTIP_JOIN;
            throw "Unknown mode: " +
                b;
        })
    },
    Ek: function(a) { "SPLIT" == a ? (this.M.Ta("Array"), K(this, "INPUT").Ta("String")) : (this.M.Ta("String"), K(this, "INPUT").Ta("Array")) },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("mode", F(this, "MODE")); return a },
    ib: function(a) { this.Ek(a.getAttribute("mode")) }
};
x.D.ax = {};
x.ba.Xc = {};
x.ba.Xc.Nk = 210;
x.Vh([{ type: "logic_boolean", message0: "%1", args0: [{ type: "field_dropdown", name: "BOOL", options: [
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
x.Vh([{ type: "controls_if_if", message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}", nextStatement: null, enableContextMenu: !1, colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}" }, { type: "controls_if_elseif", message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}", previousStatement: null, nextStatement: null, enableContextMenu: !1, colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}" }, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
}]);
x.ba.Xc.fn = { EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}", NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}", LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}", LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}", GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}", GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}", AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}", OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}" };
x.N.register("logic_op_tooltip", x.N.Vk("OP", x.ba.Xc.fn));
x.ba.Xc.Wt = {
    Gb: 0,
    Xb: 0,
    Ka: function() { if (!this.Gb && !this.Xb) return null; var a = document.createElement("mutation");
        this.Gb && a.setAttribute("elseif", this.Gb);
        this.Xb && a.setAttribute("else", 1); return a },
    ib: function(a) { this.Gb = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.Xb = parseInt(a.getAttribute("else"), 10) || 0;
        this.Ub() },
    cf: function(a) {
        var b = a.mf("controls_if_if");
        b.Bc();
        for (var c = b.L, e = 1; e <= this.Gb; e++) { var f = a.mf("controls_if_elseif");
            f.Bc();
            c.connect(f.Z);
            c = f.L } this.Xb && (a = a.mf("controls_if_else"),
            a.Bc(), c.connect(a.Z));
        return b
    },
    af: function(a) { var b = J(a.L);
        this.Xb = this.Gb = 0;
        a = [null]; for (var c = [null], e = null; b;) { switch (b.type) {
                case "controls_if_elseif":
                    this.Gb++;
                    a.push(b.Sp);
                    c.push(b.ge); break;
                case "controls_if_else":
                    this.Xb++;
                    e = b.ge; break;
                default:
                    throw "Unknown block type."; } b = b.L && J(b.L) } this.Ub(); for (b = 1; b <= this.Gb; b++) Zg(a[b], this, "IF" + b), Zg(c[b], this, "DO" + b);
        Zg(e, this, "ELSE") },
    zm: function(a) {
        a = J(a.L);
        for (var b = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var c = K(this, "IF" + b),
                        e = K(this,
                            "DO" + b);
                    a.Sp = c && c.connection.Ia;
                    a.ge = e && e.connection.Ia;
                    b++;
                    break;
                case "controls_if_else":
                    e = K(this, "ELSE");
                    a.ge = e && e.connection.Ia;
                    break;
                default:
                    throw "Unknown block type.";
            }
            a = a.L && J(a.L)
        }
    },
    Ub: function() { K(this, "ELSE") && this.Ga("ELSE"); for (var a = 1; K(this, "IF" + a);) this.Ga("IF" + a), this.Ga("DO" + a), a++; for (a = 1; a <= this.Gb; a++) O(P(this, "IF" + a).Ta("Boolean"), x.g.CONTROLS_IF_MSG_ELSEIF), O(Ih(this, "DO" + a), x.g.CONTROLS_IF_MSG_THEN);
        this.Xb && O(Ih(this, "ELSE"), x.g.CONTROLS_IF_MSG_ELSE) }
};
x.N.gp("controls_if_mutator", x.ba.Xc.Wt, null, ["controls_if_elseif", "controls_if_else"]);
x.ba.Xc.Xt = function() { this.oa(function() { if (this.Gb || this.Xb) { if (!this.Gb && this.Xb) return x.g.CONTROLS_IF_TOOLTIP_2; if (this.Gb && !this.Xb) return x.g.CONTROLS_IF_TOOLTIP_3; if (this.Gb && this.Xb) return x.g.CONTROLS_IF_TOOLTIP_4 } else return x.g.CONTROLS_IF_TOOLTIP_1; return "" }.bind(this)) };
x.N.register("controls_if_tooltip", x.ba.Xc.Xt);
x.ba.Xc.tu = { onchange: function(a) { this.Ai || (this.Ai = [null, null]); var b = Lh(this, "A"),
            c = Lh(this, "B");
        b && c && !Oe(b.M, c.M) && (x.j.R(a.group), a = this.Ai[0], a !== b && (Fe(b), a && !a.kb && K(this, "A").connection.connect(a.M)), b = this.Ai[1], b !== c && (Fe(c), b && !b.kb && K(this, "B").connection.connect(b.M)), this.rb(), x.j.R(!1));
        this.Ai[0] = Lh(this, "A");
        this.Ai[1] = Lh(this, "B") } };
x.ba.Xc.su = function() { ah(this, x.ba.Xc.tu) };
x.N.register("logic_compare", x.ba.Xc.su);
x.ba.Xc.uu = { Xs: null, onchange: function(a) { var b = Lh(this, "THEN"),
            c = Lh(this, "ELSE"),
            e = this.M.Ia; if ((b || c) && e)
            for (var f = 0; 2 > f; f++) { var h = 1 == f ? b : c;
                h && !Oe(h.M, e) && (x.j.R(a.group), e === this.Xs ? (Fe(this), e.v.rb()) : (Fe(h), h.rb()), x.j.R(!1)) } this.Xs = e } };
x.N.tm("logic_ternary", x.ba.Xc.uu);
x.D.ex = {};
x.ba.Ue = {};
x.ba.Ue.Nk = 120;
x.Vh([{ type: "controls_repeat_ext", message0: "%{BKY_CONTROLS_REPEAT_TITLE}", args0: [{ type: "input_value", name: "TIMES", check: "Number" }], message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1", args1: [{ type: "input_statement", name: "DO" }], previousStatement: null, nextStatement: null, colour: "%{BKY_LOOPS_HUE}", tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}", helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}" }, {
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
x.ba.Ue.Qu = { WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}", UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}" };
x.N.register("controls_whileUntil_tooltip", x.N.Vk("MODE", x.ba.Ue.Qu));
x.ba.Ue.Qt = { BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}", CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}" };
x.N.register("controls_flow_tooltip", x.N.Vk("FLOW", x.ba.Ue.Qt));
x.ba.Ue.Zt = { bf: function(a) { if (!this.vb) { var b = Ce(this, "VAR").Qc(),
                c = b.name; if (!this.isCollapsed() && null != c) { var e = { enabled: !0 };
                e.text = x.g.VARIABLES_SET_CREATE_GET.replace("%1", c);
                b = x.H.Kr(b);
                b = G("block", null, b);
                b.setAttribute("type", "variables_get");
                e.hb = x.ca.Xk(this, b);
                a.push(e) } } } };
x.N.tm("contextMenu_newGetVariableBlock", x.ba.Ue.Zt);
x.N.register("controls_for_tooltip", x.N.rn("%{BKY_CONTROLS_FOR_TOOLTIP}"));
x.N.register("controls_forEach_tooltip", x.N.rn("%{BKY_CONTROLS_FOREACH_TOOLTIP}"));
x.ba.Ue.Yt = { wu: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"], onchange: function() { if (this.o.sb && !this.o.sb()) { var a = !1,
                b = this;
            do { if (-1 != this.wu.indexOf(b.type)) { a = !0; break } b = Eh(b) } while (b);
            a ? (this.Le(null), this.vb || this.Jd(!1)) : (this.Le(x.g.CONTROLS_FLOW_STATEMENTS_WARNING), this.vb || Gh(this) || this.Jd(!0)) } } };
x.N.tm("controls_flow_in_loop_check", x.ba.Ue.Yt);
x.D.Mx = {};
x.D.procedures_defnoreturn = {
    I: function() { var a = new kj("", x.ra.um);
        a.Hm = !1;
        O(O(O(Q(this), x.g.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
        this.vg(new Yg(["procedures_mutatorarg"]));
        (this.o.options.ej || this.o.options.Mb && this.o.options.Mb.options.ej) && x.g.PROCEDURES_DEFNORETURN_COMMENT && this.tf(x.g.PROCEDURES_DEFNORETURN_COMMENT);
        this.Ha(x.g.PROCEDURES_HUE);
        this.oa(x.g.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.Sa = x.g.PROCEDURES_DEFNORETURN_HELPURL;
        this.V = [];
        this.tb = [];
        this.Ke(!0);
        this.ge = null },
    Ke: function(a) {
        this.Rl !==
            a && (a ? (O(Ih(this, "STACK"), x.g.PROCEDURES_DEFNORETURN_DO), K(this, "RETURN") && Kh(this, "STACK", "RETURN")) : this.Ga("STACK", !0), this.Rl = a)
    },
    Dk: function() { for (var a = !1, b = {}, c = 0; c < this.V.length; c++) { if (b["arg_" + this.V[c].toLowerCase()]) { a = !0; break } b["arg_" + this.V[c].toLowerCase()] = !0 } a ? this.Le(x.g.PROCEDURES_DEF_DUPLICATE_WARNING) : this.Le(null);
        a = "";
        this.V.length && (a = x.g.PROCEDURES_BEFORE_PARAMS + " " + this.V.join(", "));
        x.j.disable(); try { Fh(this, a, "PARAMS") } finally { x.j.enable() } },
    Ka: function(a) {
        var b = document.createElement("mutation");
        a && b.setAttribute("name", F(this, "NAME"));
        for (var c = 0; c < this.tb.length; c++) { var e = document.createElement("arg"),
                f = this.tb[c];
            e.setAttribute("name", f.name);
            e.setAttribute("varId", f.aa());
            a && this.To && e.setAttribute("paramId", this.To[c]);
            b.appendChild(e) } this.Rl || b.setAttribute("statements", "false");
        return b
    },
    ib: function(a) {
        this.V = [];
        this.tb = [];
        for (var b = 0, c; c = a.childNodes[b]; b++)
            if ("arg" == c.nodeName.toLowerCase()) {
                var e = c.getAttribute("name");
                c = c.getAttribute("varId");
                this.V.push(e);
                e = x.H.Il(this.o,
                    c, e, "");
                this.tb.push(e)
            } this.Dk();
        x.ra.Ho(this);
        this.Ke("false" !== a.getAttribute("statements"))
    },
    cf: function(a) { var b = a.mf("procedures_mutatorcontainer");
        b.Bc();
        K(this, "RETURN") ? Fh(b, this.Rl ? "TRUE" : "FALSE", "STATEMENTS") : K(b, "STATEMENT_INPUT").pa(!1); for (var c = K(b, "STACK").connection, e = 0; e < this.V.length; e++) { var f = a.mf("procedures_mutatorarg");
            f.Bc();
            Fh(f, this.V[e], "NAME");
            f.iC = e;
            c.connect(f.Z);
            c = f.L } x.ra.Ho(this); return b },
    af: function(a) {
        this.V = [];
        this.To = [];
        this.tb = [];
        for (var b = Lh(a, "STACK"); b;) {
            var c =
                F(b, "NAME");
            this.V.push(c);
            c = this.o.Qc(c, "");
            this.tb.push(c);
            this.To.push(b.id);
            b = b.L && J(b.L)
        }
        this.Dk();
        x.ra.Ho(this);
        a = F(a, "STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.Rl != a))
            if (a) this.Ke(!0), Zg(this.ge, this, "STACK"), this.ge = null;
            else { a = K(this, "STACK").connection; if (this.ge = a.Ia) a = J(a), Fe(a), a.rb();
                this.Ke(!1) }
    },
    hf: function() { return [F(this, "NAME"), this.V, !1] },
    eo: function() { return this.V },
    Rf: function() { return this.tb },
    ik: function(a, b) {
        var c = this.o.Vd(a);
        if ("" == c.type) {
            c = c.name;
            b = this.o.Vd(b);
            for (var e = !1, f = 0; f < this.tb.length; f++) this.tb[f].aa() == a && (this.V[f] = b.name, this.tb[f] = b, e = !0);
            e && this.ml(c, b.name)
        }
    },
    Nm: function(a) { for (var b = a.name, c = !1, e = 0; e < this.tb.length; e++)
            if (this.tb[e].aa() == a.aa()) { var f = this.V[e];
                this.V[e] = b;
                c = !0 } c && this.ml(f, b) },
    ml: function(a, b) { this.Dk(); if (this.fd.Y())
            for (var c = Qc(this.fd.m), e = 0, f; f = c[e]; e++) "procedures_mutatorarg" == f.type && Uc(a, F(f, "NAME")) && Fh(f, b, "NAME") },
    bf: function(a) {
        if (!this.vb) {
            var b = { enabled: !0 },
                c = F(this, "NAME");
            b.text = x.g.PROCEDURES_CREATE_DO.replace("%1",
                c);
            var e = G("mutation");
            e.setAttribute("name", c);
            for (var f = 0; f < this.V.length; f++) c = G("arg"), c.setAttribute("name", this.V[f]), e.appendChild(c);
            c = G("block", null, e);
            c.setAttribute("type", this.Bq);
            b.hb = x.ca.Xk(this, c);
            a.push(b);
            if (!this.isCollapsed())
                for (f = 0; f < this.tb.length; f++) b = { enabled: !0 }, e = this.tb[f], c = e.name, b.text = x.g.VARIABLES_SET_CREATE_GET.replace("%1", c), c = x.H.Kr(e), c = G("block", null, c), c.setAttribute("type", "variables_get"), b.hb = x.ca.Xk(this, c), a.push(b)
        }
    },
    Bq: "procedures_callnoreturn"
};
x.D.procedures_defreturn = {
    I: function() {
        var a = new kj("", x.ra.um);
        a.Hm = !1;
        O(O(O(Q(this), x.g.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
        O(Ch(P(this, "RETURN"), x.Fg), x.g.PROCEDURES_DEFRETURN_RETURN);
        this.vg(new Yg(["procedures_mutatorarg"]));
        (this.o.options.ej || this.o.options.Mb && this.o.options.Mb.options.ej) && x.g.PROCEDURES_DEFRETURN_COMMENT && this.tf(x.g.PROCEDURES_DEFRETURN_COMMENT);
        this.Ha(x.g.PROCEDURES_HUE);
        this.oa(x.g.PROCEDURES_DEFRETURN_TOOLTIP);
        this.Sa = x.g.PROCEDURES_DEFRETURN_HELPURL;
        this.V = [];
        this.tb = [];
        this.Ke(!0);
        this.ge = null
    },
    Ke: x.D.procedures_defnoreturn.Ke,
    Dk: x.D.procedures_defnoreturn.Dk,
    Ka: x.D.procedures_defnoreturn.Ka,
    ib: x.D.procedures_defnoreturn.ib,
    cf: x.D.procedures_defnoreturn.cf,
    af: x.D.procedures_defnoreturn.af,
    hf: function() { return [F(this, "NAME"), this.V, !0] },
    eo: x.D.procedures_defnoreturn.eo,
    Rf: x.D.procedures_defnoreturn.Rf,
    ik: x.D.procedures_defnoreturn.ik,
    Nm: x.D.procedures_defnoreturn.Nm,
    ml: x.D.procedures_defnoreturn.ml,
    bf: x.D.procedures_defnoreturn.bf,
    Bq: "procedures_callreturn"
};
x.D.procedures_mutatorcontainer = { I: function() { O(Q(this), x.g.PROCEDURES_MUTATORCONTAINER_TITLE);
        Ih(this, "STACK");
        O(O(Q(this, "STATEMENT_INPUT"), x.g.PROCEDURES_ALLOW_STATEMENTS), new Bj("TRUE"), "STATEMENTS");
        this.Ha(x.g.PROCEDURES_HUE);
        this.oa(x.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1 } };
x.D.procedures_mutatorarg = {
    I: function() { var a = new kj("x", this.Bh);
        a.ox = a.Ne;
        a.Ne = function() { this.kj = [];
            this.ox() };
        O(O(Q(this), x.g.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
        this.jd(!0);
        this.hd(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.oa(x.g.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.Oo = this.Qv;
        a.kj = [];
        a.Oo("x") },
    Bh: function(a) {
        var b = $g(this.v.o);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a) return null;
        var c = b.Qc(a, "");
        c && c.name != a && b.ik(c.aa(), a);
        c || (c = b.ad(a, "")) && this.kj && this.kj.push(c);
        return a
    },
    Qv: function(a) { var b = $g(this.v.o); if (b)
            for (var c = 0; c < this.kj.length; c++) { var e = this.kj[c];
                e.name != a && b.Of(e.aa()) } }
};
x.D.procedures_callnoreturn = {
    I: function() { O(Q(this, "TOPROW"), this.id, "NAME");
        this.jd(!0);
        this.hd(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.Sa = x.g.PROCEDURES_CALLNORETURN_HELPURL;
        this.V = [];
        this.tb = [];
        this.qf = {};
        this.ce = null },
    Ed: function() { return F(this, "NAME") },
    hk: function(a, b) { Uc(a, this.Ed()) && (Fh(this, b, "NAME"), this.oa((this.M ? x.g.PROCEDURES_CALLRETURN_TOOLTIP : x.g.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b))) },
    yp: function(a, b) {
        var c = x.ra.Cl(this.Ed(), this.o);
        c = c && c.fd && c.fd.Y();
        c || (this.qf = {}, this.ce =
            null);
        if (b) {
            a: { var e = this.V; if (fa(e) && fa(a) && e.length == a.length) { for (var f = e.length, h = 0; h < f; h++)
                        if (e[h] !== a[h]) { e = !1; break a } e = !0 } else e = !1 }
            if (e) this.ce = b;
            else {
                if (b.length != a.length) throw "Error: paramNames and paramIds must be the same length.";
                this.sg(!1);
                this.ce || (this.qf = {}, a.join("\n") == this.V.join("\n") ? this.ce = b : this.ce = []);
                e = this.P;
                this.P = !1;
                for (f = 0; f < this.V.length; f++)
                    if (h = K(this, "ARG" + f)) h = h.connection.Ia, this.qf[this.ce[f]] = h, c && h && -1 == b.indexOf(this.ce[f]) && (h.disconnect(), h.v.rb());
                this.V = [].concat(a);
                this.tb = [];
                for (f = 0; f < this.V.length; f++) a = x.H.Il(this.o, null, this.V[f], ""), this.tb.push(a);
                this.Ub();
                if (this.ce = b)
                    for (f = 0; f < this.V.length; f++) b = this.ce[f], b in this.qf && (h = this.qf[b], Zg(h, this, "ARG" + f) || delete this.qf[b]);
                (this.P = e) && this.$()
            }
        }
    },
    Ub: function() {
        for (var a = 0; a < this.V.length; a++) { var b = Ce(this, "ARGNAME" + a); if (b) { x.j.disable(); try { b.setValue(this.V[a]) } finally { x.j.enable() } } else b = new yh(this.V[a]), O(Ch(P(this, "ARG" + a), x.Fg), b, "ARGNAME" + a).I() }
        for (; K(this, "ARG" + a);) this.Ga("ARG" +
            a), a++;
        if (a = K(this, "TOPROW")) this.V.length ? Ce(this, "WITH") || (O(a, x.g.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.I()) : Ce(this, "WITH") && Bh(a, "WITH")
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("name", this.Ed()); for (var b = 0; b < this.V.length; b++) { var c = document.createElement("arg");
            c.setAttribute("name", this.V[b]);
            a.appendChild(c) } return a },
    ib: function(a) {
        var b = a.getAttribute("name");
        this.hk(this.Ed(), b);
        b = [];
        for (var c = [], e = 0, f; f = a.childNodes[e]; e++) "arg" == f.nodeName.toLowerCase() &&
            (b.push(f.getAttribute("name")), c.push(f.getAttribute("paramId")));
        this.yp(b, c)
    },
    Rf: function() { return this.tb },
    onchange: function(a) {
        if (this.o && !this.o.Yd)
            if (a.type == x.j.Ot && -1 != a.Wf.indexOf(this.id)) {
                var b = this.Ed();
                b = x.ra.Cl(b, this.o);
                !b || b.type == this.En && JSON.stringify(b.V) == JSON.stringify(this.V) || (b = null);
                if (!b) {
                    x.j.R(a.group);
                    a = G("xml");
                    b = G("block");
                    b.setAttribute("type", this.En);
                    var c = this.la(),
                        e = c.y + 2 * x.Yc;
                    b.setAttribute("x", c.x + x.Yc * (this.u ? -1 : 1));
                    b.setAttribute("y", e);
                    c = this.Ka();
                    b.appendChild(c);
                    c = G("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(document.createTextNode(this.Ed()));
                    b.appendChild(c);
                    a.appendChild(b);
                    x.F.qe(a, this.o);
                    x.j.R(!1)
                }
            } else a.type == x.j.Pt && (b = this.Ed(), b = x.ra.Cl(b, this.o), b || (x.j.R(a.group), this.A(!0, !1), x.j.R(!1)))
    },
    bf: function(a) {
        var b = { enabled: !0 };
        b.text = x.g.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.Ed(),
            e = this.o;
        b.hb = function() {
            var a = x.ra.Cl(c, e);
            if (a) {
                if (e.lb) {
                    var b = Kc(e, a.id);
                    if (b) {
                        var k = b.la(),
                            l = b.Ib(),
                            m = e.scale;
                        b = (k.x + (e.u ? -1 : 1) * l.width / 2) * m;
                        k = (k.y + l.height /
                            2) * m;
                        l = e.ub();
                        b = b - l.Nc - l.za / 2;
                        k = k - l.tc - l.gb / 2;
                        x.Rb();
                        e.lb.set(b, k)
                    }
                } else console.warn("Tried to scroll a non-scrollable workspace.");
                a.select()
            }
        };
        a.push(b)
    },
    En: "procedures_defnoreturn"
};
x.D.procedures_callreturn = {
    I: function() { O(Q(this, "TOPROW"), "", "NAME");
        this.Fc(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.Sa = x.g.PROCEDURES_CALLRETURN_HELPURL;
        this.V = [];
        this.qf = {};
        this.ce = null },
    Ed: x.D.procedures_callnoreturn.Ed,
    hk: x.D.procedures_callnoreturn.hk,
    yp: x.D.procedures_callnoreturn.yp,
    Ub: x.D.procedures_callnoreturn.Ub,
    Ka: x.D.procedures_callnoreturn.Ka,
    ib: x.D.procedures_callnoreturn.ib,
    Rf: x.D.procedures_callnoreturn.Rf,
    onchange: x.D.procedures_callnoreturn.onchange,
    bf: x.D.procedures_callnoreturn.bf,
    En: "procedures_defreturn"
};
x.D.procedures_ifreturn = {
    I: function() { O(P(this, "CONDITION").Ta("Boolean"), x.g.CONTROLS_IF_MSG_IF);
        O(P(this, "VALUE"), x.g.PROCEDURES_DEFRETURN_RETURN);
        this.bc(!0);
        this.jd(!0);
        this.hd(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.oa(x.g.PROCEDURES_IFRETURN_TOOLTIP);
        this.Sa = x.g.PROCEDURES_IFRETURN_HELPURL;
        this.Vf = !0 },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("value", Number(this.Vf)); return a },
    ib: function(a) {
        this.Vf = 1 == a.getAttribute("value");
        this.Vf || (this.Ga("VALUE"), O(Q(this, "VALUE"),
            x.g.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.o.sb && !this.o.sb()) {
            var a = !1,
                b = this;
            do { if (-1 != this.du.indexOf(b.type)) { a = !0; break } b = Eh(b) } while (b);
            a ? ("procedures_defnoreturn" == b.type && this.Vf ? (this.Ga("VALUE"), O(Q(this, "VALUE"), x.g.PROCEDURES_DEFRETURN_RETURN), this.Vf = !1) : "procedures_defreturn" != b.type || this.Vf || (this.Ga("VALUE"), O(P(this, "VALUE"), x.g.PROCEDURES_DEFRETURN_RETURN), this.Vf = !0), this.Le(null), this.vb || this.Jd(!1)) : (this.Le(x.g.PROCEDURES_IFRETURN_WARNING), this.vb || Gh(this) ||
                this.Jd(!0))
        }
    },
    du: ["procedures_defnoreturn", "procedures_defreturn"]
};
x.D.sy = {};
x.ba.H = {};
x.ba.H.Nk = 330;
x.Vh([{ type: "variables_get", message0: "%1", args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" }], output: null, colour: "%{BKY_VARIABLES_HUE}", helpUrl: "%{BKY_VARIABLES_GET_HELPURL}", tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}", extensions: ["contextMenu_variableSetterGetter"] }, {
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
x.ba.H.$t = { bf: function(a) { if (!this.vb) { if ("variables_get" == this.type) var b = "variables_set",
                c = x.g.VARIABLES_GET_CREATE_SET;
            else b = "variables_get", c = x.g.VARIABLES_SET_CREATE_GET; var e = { enabled: 0 < fd(this.o) },
                f = Ce(this, "VAR").Jb();
            e.text = c.replace("%1", f);
            c = G("field", null, f);
            c.setAttribute("name", "VAR");
            c = G("block", null, c);
            c.setAttribute("type", b);
            e.hb = x.ca.Xk(this, c);
            a.push(e) } } };
x.N.tm("contextMenu_variableSetterGetter", x.ba.H.$t);
x.h.Do = {};
x.h.lists_create_empty = function() { return ["[]", x.h.Hg] };
x.h.lists_create_with = function(a) { for (var b = Array(a.Cc), c = 0; c < a.Cc; c++) b[c] = U(a, "ADD" + c, x.h.ec) || "null"; return ["[" + b.join(", ") + "]", x.h.Hg] };
x.h.lists_repeat = function(a) { var b = Dk("listsRepeat", ["function " + x.h.ud + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
        c = U(a, "ITEM", x.h.ec) || "null";
    a = U(a, "NUM", x.h.ec) || "0"; return [b + "(" + c + ", " + a + ")", x.h.Da] };
x.h.lists_length = function(a) { return [(U(a, "VALUE", x.h.ob) || "[]") + ".length", x.h.ob] };
x.h.lists_isEmpty = function(a) { return ["!" + (U(a, "VALUE", x.h.ob) || "[]") + ".length", x.h.Ti] };
x.h.lists_indexOf = function(a) { var b = "FIRST" == F(a, "END") ? "indexOf" : "lastIndexOf",
        c = U(a, "FIND", x.h.Wb) || "''";
    b = (U(a, "VALUE", x.h.ob) || "[]") + "." + b + "(" + c + ")"; return a.o.options.Ge ? [b + " + 1", x.h.Ef] : [b, x.h.Da] };
x.h.lists_getIndex = function(a) {
    var b = F(a, "MODE") || "GET",
        c = F(a, "WHERE") || "FROM_START",
        e = U(a, "VALUE", "RANDOM" == c ? x.h.ec : x.h.ob) || "[]";
    switch (c) {
        case "FIRST":
            if ("GET" == b) return [e + "[0]", x.h.ob];
            if ("GET_REMOVE" == b) return [e + ".shift()", x.h.ob];
            if ("REMOVE" == b) return e + ".shift();\n";
            break;
        case "LAST":
            if ("GET" == b) return [e + ".slice(-1)[0]", x.h.ob];
            if ("GET_REMOVE" == b) return [e + ".pop()", x.h.ob];
            if ("REMOVE" == b) return e + ".pop();\n";
            break;
        case "FROM_START":
            a = x.h.we(a, "AT");
            if ("GET" == b) return [e + "[" + a + "]", x.h.ob];
            if ("GET_REMOVE" ==
                b) return [e + ".splice(" + a + ", 1)[0]", x.h.Da];
            if ("REMOVE" == b) return e + ".splice(" + a + ", 1);\n";
            break;
        case "FROM_END":
            a = x.h.we(a, "AT", 1, !0);
            if ("GET" == b) return [e + ".slice(" + a + ")[0]", x.h.Da];
            if ("GET_REMOVE" == b) return [e + ".splice(" + a + ", 1)[0]", x.h.Da];
            if ("REMOVE" == b) return e + ".splice(" + a + ", 1);";
            break;
        case "RANDOM":
            e = Dk("listsGetRandomItem", ["function " + x.h.ud + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];",
                "  }", "}"
            ]) + "(" + e + ", " + ("GET" != b) + ")";
            if ("GET" == b || "GET_REMOVE" == b) return [e, x.h.Da];
            if ("REMOVE" == b) return e + ";\n"
    }
    throw "Unhandled combination (lists_getIndex).";
};
x.h.lists_setIndex = function(a) {
    function b() { if (c.match(/^\w+$/)) return ""; var a = Ek(x.h.Qa, "tmpList", x.H.Ra),
            b = "var " + a + " = " + c + ";\n";
        c = a; return b }
    var c = U(a, "LIST", x.h.ob) || "[]",
        e = F(a, "MODE") || "GET",
        f = F(a, "WHERE") || "FROM_START",
        h = U(a, "TO", x.h.Ve) || "null";
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
                x.h.we(a, "AT");
            if ("SET" == e) return c + "[" + f + "] = " + h + ";\n";
            if ("INSERT" == e) return c + ".splice(" + f + ", 0, " + h + ");\n";
            break;
        case "FROM_END":
            f = x.h.we(a, "AT", 1, !1, x.h.Nh);
            a = b();
            if ("SET" == e) return a + (c + "[" + c + ".length - " + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (c + ".splice(" + c + ".length - " + f + ", 0, " + h + ");\n");
            break;
        case "RANDOM":
            a = b();
            f = Ek(x.h.Qa, "tmpX", x.H.Ra);
            a += "var " + f + " = Math.floor(Math.random() * " + c + ".length);\n";
            if ("SET" == e) return a + (c + "[" + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (c + ".splice(" + f +
                ", 0, " + h + ");\n")
    }
    throw "Unhandled combination (lists_setIndex).";
};
x.h.Do.ow = function(a, b, c) { return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c };
x.h.lists_getSublist = function(a) {
    var b = U(a, "LIST", x.h.ob) || "[]",
        c = F(a, "WHERE1"),
        e = F(a, "WHERE2");
    if ("FIRST" == c && "LAST" == e) b += ".slice(0)";
    else if (b.match(/^\w+$/) || "FROM_END" != c && "FROM_START" == e) {
        switch (c) {
            case "FROM_START":
                var f = x.h.we(a, "AT1"); break;
            case "FROM_END":
                f = x.h.we(a, "AT1", 1, !1, x.h.Nh);
                f = b + ".length - " + f; break;
            case "FIRST":
                f = "0"; break;
            default:
                throw "Unhandled option (lists_getSublist)."; }
        switch (e) {
            case "FROM_START":
                a = x.h.we(a, "AT2", 1);
                break;
            case "FROM_END":
                a = x.h.we(a, "AT2", 0, !1, x.h.Nh);
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
        f = x.h.we(a, "AT1");
        a = x.h.we(a, "AT2");
        var h = x.h.Do.ow,
            k = { FIRST: "First", LAST: "Last", FROM_START: "FromStart", FROM_END: "FromEnd" };
        b = Dk("subsequence" + k[c] + k[e], ["function " + x.h.ud + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") + ") {", "  var start = " + h("sequence", c, "at1") + ";", "  var end = " + h("sequence", e, "at2") + " + 1;",
            "  return sequence.slice(start, end);", "}"
        ]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + f : "") + ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") + ")"
    }
    return [b, x.h.Da]
};
x.h.lists_sort = function(a) {
    var b = U(a, "LIST", x.h.Da) || "[]",
        c = "1" === F(a, "DIRECTION") ? 1 : -1;
    a = F(a, "TYPE");
    var e = Dk("listsGetSortCompare", ["function " + x.h.ud + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return parseFloat(a) - parseFloat(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },", '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };",
        "  var compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"
    ]);
    return [b + ".slice().sort(" + e + '("' + a + '", ' + c + "))", x.h.Da]
};
x.h.lists_split = function(a) { var b = U(a, "INPUT", x.h.ob),
        c = U(a, "DELIM", x.h.Wb) || "''";
    a = F(a, "MODE"); if ("SPLIT" == a) b || (b = "''"), a = "split";
    else if ("JOIN" == a) b || (b = "[]"), a = "join";
    else throw "Unknown mode: " + a; return [b + "." + a + "(" + c + ")", x.h.Da] };
x.h.lists_reverse = function(a) { return [(U(a, "LIST", x.h.Da) || "[]") + ".slice().reverse()", x.h.Da] };
x.h.ax = {};
x.h.controls_if = function(a) { var b = 0,
        c = "";
    do { var e = U(a, "IF" + b, x.h.Wb) || "false"; var f = Ak(a, "DO" + b);
        c += (0 < b ? " else " : "") + "if (" + e + ") {\n" + f + "}";++b } while (K(a, "IF" + b));
    K(a, "ELSE") && (f = Ak(a, "ELSE"), c += " else {\n" + f + "}"); return c + "\n" };
x.h.controls_ifelse = x.h.controls_if;
x.h.logic_compare = function(a) { var b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" } [F(a, "OP")],
        c = "==" == b || "!=" == b ? x.h.jq : x.h.Du,
        e = U(a, "A", c) || "0";
    a = U(a, "B", c) || "0"; return [e + " " + b + " " + a, c] };
x.h.logic_operation = function(a) { var b = "AND" == F(a, "OP") ? "&&" : "||",
        c = "&&" == b ? x.h.Wm : x.h.Xm,
        e = U(a, "A", c);
    a = U(a, "B", c); if (e || a) { var f = "&&" == b ? "true" : "false";
        e || (e = f);
        a || (a = f) } else a = e = "false"; return [e + " " + b + " " + a, c] };
x.h.logic_negate = function(a) { var b = x.h.Ti; return ["!" + (U(a, "BOOL", b) || "true"), b] };
x.h.logic_boolean = function(a) { return ["TRUE" == F(a, "BOOL") ? "true" : "false", x.h.Hg] };
x.h.logic_null = function() { return ["null", x.h.Hg] };
x.h.logic_ternary = function(a) { var b = U(a, "IF", x.h.Qk) || "false",
        c = U(a, "THEN", x.h.Qk) || "null";
    a = U(a, "ELSE", x.h.Qk) || "null"; return [b + " ? " + c + " : " + a, x.h.Qk] };
x.h.ex = {};
x.h.controls_repeat_ext = function(a) { var b = Ce(a, "TIMES") ? String(Number(F(a, "TIMES"))) : U(a, "TIMES", x.h.Ve) || "0",
        c = Ak(a, "DO");
    c = Bk(c, a.id);
    a = ""; var e = Ek(x.h.Qa, "count", x.H.Ra),
        f = b;
    b.match(/^\w+$/) || x.cg(b) || (f = Ek(x.h.Qa, "repeat_end", x.H.Ra), a += "var " + f + " = " + b + ";\n"); return a + ("for (var " + e + " = 0; " + e + " < " + f + "; " + e + "++) {\n" + c + "}\n") };
x.h.controls_repeat = x.h.controls_repeat_ext;
x.h.controls_whileUntil = function(a) { var b = "UNTIL" == F(a, "MODE"),
        c = U(a, "BOOL", b ? x.h.Ti : x.h.Wb) || "false",
        e = Ak(a, "DO");
    e = Bk(e, a.id);
    b && (c = "!" + c); return "while (" + c + ") {\n" + e + "}\n" };
x.h.controls_for = function(a) {
    var b = x.h.Qa.getName(F(a, "VAR"), x.H.Ra),
        c = U(a, "FROM", x.h.Ve) || "0",
        e = U(a, "TO", x.h.Ve) || "0",
        f = U(a, "BY", x.h.Ve) || "1",
        h = Ak(a, "DO");
    h = Bk(h, a.id);
    if (x.cg(c) && x.cg(e) && x.cg(f)) { var k = parseFloat(c) <= parseFloat(e);
        a = "for (" + b + " = " + c + "; " + b + (k ? " <= " : " >= ") + e + "; " + b;
        b = Math.abs(parseFloat(f));
        a = (1 == b ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + b)) + (") {\n" + h + "}\n") } else a = "", k = c, c.match(/^\w+$/) || x.cg(c) || (k = Ek(x.h.Qa, b + "_start", x.H.Ra), a += "var " + k + " = " + c + ";\n"), c = e, e.match(/^\w+$/) ||
        x.cg(e) || (c = Ek(x.h.Qa, b + "_end", x.H.Ra), a += "var " + c + " = " + e + ";\n"), e = Ek(x.h.Qa, b + "_inc", x.H.Ra), a += "var " + e + " = ", a = x.cg(f) ? a + (Math.abs(f) + ";\n") : a + ("Math.abs(" + f + ");\n"), a = a + ("if (" + k + " > " + c + ") {\n") + (x.h.Te + e + " = -" + e + ";\n"), a += "}\n", a += "for (" + b + " = " + k + "; " + e + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + e + ") {\n" + h + "}\n";
    return a
};
x.h.controls_forEach = function(a) { var b = x.h.Qa.getName(F(a, "VAR"), x.H.Ra),
        c = U(a, "LIST", x.h.Ve) || "[]",
        e = Ak(a, "DO");
    e = Bk(e, a.id);
    a = ""; var f = c;
    c.match(/^\w+$/) || (f = Ek(x.h.Qa, b + "_list", x.H.Ra), a += "var " + f + " = " + c + ";\n");
    c = Ek(x.h.Qa, b + "_index", x.H.Ra);
    e = x.h.Te + b + " = " + f + "[" + c + "];\n" + e; return a + ("for (var " + c + " in " + f + ") {\n" + e + "}\n") };
x.h.controls_flow_statements = function(a) { switch (F(a, "FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n" } throw "Unknown flow statement."; };
x.h.Mx = {};
x.h.procedures_defreturn = function(a) { var b = x.h.Qa.getName(F(a, "NAME"), x.ra.Ra),
        c = Ak(a, "STACK"); if (x.h.Ph) { var e = a.id.replace(/\$/g, "$$$$");
        c = zk(x.h.Ph.replace(/%1/g, "'" + e + "'"), x.h.Te) + c } x.h.Ok && (c = x.h.Ok.replace(/%1/g, "'" + a.id + "'") + c);
    (e = U(a, "RETURN", x.h.Wb) || "") && (e = x.h.Te + "return " + e + ";\n"); for (var f = [], h = 0; h < a.V.length; h++) f[h] = x.h.Qa.getName(a.V[h], x.H.Ra);
    c = "function " + b + "(" + f.join(", ") + ") {\n" + c + e + "}";
    c = x.h.Am(a, c);
    x.h.Og["%" + b] = c; return null };
x.h.procedures_defnoreturn = x.h.procedures_defreturn;
x.h.procedures_callreturn = function(a) { for (var b = x.h.Qa.getName(F(a, "NAME"), x.ra.Ra), c = [], e = 0; e < a.V.length; e++) c[e] = U(a, "ARG" + e, x.h.ec) || "null"; return [b + "(" + c.join(", ") + ")", x.h.Da] };
x.h.procedures_callnoreturn = function(a) { for (var b = x.h.Qa.getName(F(a, "NAME"), x.ra.Ra), c = [], e = 0; e < a.V.length; e++) c[e] = U(a, "ARG" + e, x.h.ec) || "null"; return b + "(" + c.join(", ") + ");\n" };
x.h.procedures_ifreturn = function(a) { var b = "if (" + (U(a, "CONDITION", x.h.Wb) || "false") + ") {\n";
    a.Vf ? (a = U(a, "VALUE", x.h.Wb) || "null", b += x.h.Te + "return " + a + ";\n") : b += x.h.Te + "return;\n"; return b + "}\n" };
x.h.sy = {};
x.h.variables_get = function(a) { return [x.h.Qa.getName(F(a, "VAR"), x.H.Ra), x.h.Hg] };
x.h.variables_set = function(a) { var b = U(a, "VALUE", x.h.Ve) || "0"; return x.h.Qa.getName(F(a, "VAR"), x.H.Ra) + " = " + b + ";\n" };
x.D.controls_if.I = function() {
    this.Sa = x.g.CONTROLS_IF_HELPURL;
    this.Ha(x.g.LOGIC_HUE);
    O(P(this, "IF0").Ta("Boolean"), "if (");
    O(Q(this), ") {");
    Ih(this, "DO0");
    O(Q(this, "TAIL"), "}");
    this.bc(!0);
    this.jd(!0);
    this.hd(!0);
    this.vg(new Yg(["controls_if_elseif", "controls_if_else"]));
    var a = this;
    this.oa(function() { if (a.Gb || a.Xb) { if (!a.Gb && a.Xb) return x.g.CONTROLS_IF_TOOLTIP_2; if (a.Gb && !a.Xb) return x.g.CONTROLS_IF_TOOLTIP_3; if (a.Gb && a.Xb) return x.g.CONTROLS_IF_TOOLTIP_4 } else return x.g.CONTROLS_IF_TOOLTIP_1; return "" });
    this.Xb = this.Gb = 0
};
x.D.controls_if.Ub = function() { K(this, "ELSE") && (this.Ga("ELSEMSG"), this.Ga("ELSE")); for (var a = 1; K(this, "IF" + a);) this.Ga("IF" + a), this.Ga("TAIL" + a), this.Ga("DO" + a), a++; for (a = 1; a <= this.Gb; a++) O(P(this, "IF" + a).Ta("Boolean"), "} else if ("), O(Q(this, "TAIL" + a), ") {"), Ih(this, "DO" + a);
    this.Xb && (O(Q(this, "ELSEMSG"), "} else {"), Ih(this, "ELSE"));
    Kh(this, "TAIL", null) };
x.D.logic_compare.I = function() {
    this.Sa = x.g.LOGIC_COMPARE_HELPURL;
    this.Ha(x.g.LOGIC_HUE);
    this.Fc(!0, "Boolean");
    P(this, "A");
    O(P(this, "B"), new Hh([
        ["==", "EQ"],
        ["!=", "NEQ"],
        ["<", "LT"],
        ["<=", "LTE"],
        [">", "GT"],
        [">=", "GTE"]
    ]), "OP");
    this.bc(!0);
    var a = this;
    this.oa(function() { var b = F(a, "OP"); return { EQ: x.g.LOGIC_COMPARE_TOOLTIP_EQ, NEQ: x.g.LOGIC_COMPARE_TOOLTIP_NEQ, LT: x.g.LOGIC_COMPARE_TOOLTIP_LT, LTE: x.g.LOGIC_COMPARE_TOOLTIP_LTE, GT: x.g.LOGIC_COMPARE_TOOLTIP_GT, GTE: x.g.LOGIC_COMPARE_TOOLTIP_GTE } [b] });
    this.Ai = [null, null]
};
x.g.LOGIC_OPERATION_AND = "&&";
x.g.LOGIC_OPERATION_OR = "||";
x.g.LOGIC_NEGATE_TITLE = "! %1";
x.g.LOGIC_BOOLEAN_TRUE = "true";
x.g.LOGIC_BOOLEAN_FALSE = "false";
x.D.controls_whileUntil.I = function() { Jh(this, { message0: "while ( %1 ) { %2 %3 }", args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }, { type: "input_dummy" }, { type: "input_statement", name: "DO" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.LOOPS_HUE, tooltip: x.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE, helpUrl: x.g.CONTROLS_WHILEUNTIL_HELPURL }) };
x.D.controls_for.I = function() {
    Jh(this, { message0: "for (var %1 = %2;  %3 < %4;  %5 += 1) { %6 %7 }", args0: [{ type: "field_variable", name: "VAR", variable: null }, { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" }, { type: "field_label", name: "VAR1", text: "?" }, { type: "input_value", name: "TO", check: "Number", align: "RIGHT" }, { type: "field_label", name: "VAR2", text: "?" }, { type: "input_dummy" }, { type: "input_statement", name: "DO" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.LOOPS_HUE, helpUrl: x.g.CONTROLS_FOR_HELPURL });
    var a = this;
    this.oa(function() { return x.g.CONTROLS_FOR_TOOLTIP.replace("%1", F(a, "VAR")) })
};
x.D.controls_for.onchange = function() { var a = F(this, "VAR");
    Fh(this, a, "VAR1");
    Fh(this, a, "VAR2") };
x.h.controls_for = function(a) { var b = x.h.Qa.getName(F(a, "VAR"), x.H.Ra),
        c = U(a, "FROM", x.h.Ve) || "0",
        e = U(a, "TO", x.h.Ve) || "0",
        f = Ak(a, "DO");
    f = Bk(f, a.id); return "for (var " + b + " = " + c + "; " + b + " < " + e + "; " + b + " += 1) {\n" + f + "}\n" };
x.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break ;";
x.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue ;";
x.D.math_arithmetic.I = function() {
    Jh(this, { message0: "%1 %2 %3", args0: [{ type: "input_value", name: "A", check: "Number" }, { type: "field_dropdown", name: "OP", options: [
                ["+", "ADD"],
                ["-", "MINUS"],
                ["*", "MULTIPLY"],
                ["/", "DIVIDE"]
            ] }, { type: "input_value", name: "B", check: "Number" }], inputsInline: !0, output: "Number", colour: x.g.MATH_HUE, helpUrl: x.g.MATH_ARITHMETIC_HELPURL });
    var a = this;
    this.oa(function() {
        var b = F(a, "OP");
        return {
            ADD: x.g.MATH_ARITHMETIC_TOOLTIP_ADD,
            MINUS: x.g.MATH_ARITHMETIC_TOOLTIP_MINUS,
            MULTIPLY: x.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
            DIVIDE: x.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE
        } [b]
    })
};
x.D.math_change.I = function() { Jh(this, { message0: "%1 += %2;", args0: [{ type: "field_variable", name: "VAR", variable: "name" }, { type: "input_value", name: "DELTA", check: "Number" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.VARIABLES_HUE, helpUrl: x.g.MATH_CHANGE_HELPURL }); var a = this;
    this.oa(function() { return x.g.MATH_CHANGE_TOOLTIP.replace("%1", F(a, "VAR")) }) };
x.h.math_change = function(a) { var b = U(a, "DELTA", x.h.Ef) || "0"; return x.h.Qa.getName(F(a, "VAR"), x.H.Ra) + " += " + b + ";\n" };
x.D.math_random_int.I = function() { Jh(this, { message0: "%1(%2,%3)", args0: ["Math.randomInt", { type: "input_value", name: "FROM", check: "Number" }, { type: "input_value", name: "TO", check: "Number" }], inputsInline: !0, output: "Number", colour: x.g.MATH_HUE, tooltip: x.g.MATH_RANDOM_INT_TOOLTIP, helpUrl: x.g.MATH_RANDOM_INT_HELPURL }) };
x.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "Math.random  (  )";
x.g.LISTS_CREATE_EMPTY_TITLE = "[ ]";
x.g.LISTS_CREATE_WITH_INPUT_WITH = "[";
x.D.lists_create_with.Ub = function() { K(this, "TAIL") && this.Ga("TAIL");
    this.Cc && K(this, "EMPTY") ? this.Ga("EMPTY") : this.Cc || K(this, "EMPTY") || O(Q(this, "EMPTY"), x.g.LISTS_CREATE_EMPTY_TITLE); for (var a = 0; a < this.Cc; a++)
        if (!K(this, "ADD" + a)) { var b = P(this, "ADD" + a);
            0 == a ? O(b, x.g.LISTS_CREATE_WITH_INPUT_WITH) : O(b, ",") } for (; K(this, "ADD" + a);) this.Ga("ADD" + a), a++;
    this.Cc && O(Q(this, "TAIL"), "]") };
x.D.lists_getIndex = { I: function() { Jh(this, { message0: "%1[%2]", args0: [{ type: "input_value", name: "VALUE", check: "Array" }, { type: "input_value", name: "AT", check: "Number" }], inputsInline: !0, output: null, colour: x.g.LISTS_HUE, tooltip: x.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM + x.g.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"), helpUrl: x.g.LISTS_GET_INDEX_HELPURL }) } };
x.D.lists_setIndex = { I: function() { Jh(this, { message0: "%1[%2] = %3;", args0: [{ type: "input_value", name: "LIST", check: "Array" }, { type: "input_value", name: "AT", check: "Number" }, { type: "input_value", name: "TO" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.LISTS_HUE, tooltip: x.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM + x.g.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"), helpUrl: x.g.LISTS_SET_INDEX_HELPURL }) } };
x.g.LISTS_LENGTH_TITLE = "%1 . length";
x.D.variables_get.I = function() { this.Sa = x.g.VARIABLES_GET_HELPURL;
    this.Ha(x.g.VARIABLES_HUE);
    O(Q(this), new tk("name"), "VAR");
    this.Fc(!0);
    this.oa(x.g.VARIABLES_GET_TOOLTIP) };
x.D.variables_set.I = function() { this.Sa = x.g.VARIABLES_SET_HELPURL;
    this.Ha(x.g.VARIABLES_HUE);
    O(O(O(P(this, "VALUE"), "var"), new tk("name"), "VAR"), "=");
    O(Q(this), ";");
    this.bc(!0);
    this.jd(!0);
    this.hd(!0);
    this.oa(x.g.VARIABLES_SET_TOOLTIP) };
x.D.procedures_defnoreturn.I = function() { var a = new kj("", x.ra.um);
    O(O(O(O(O(Q(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    this.Ke(!0);
    O(Q(this), "}");
    this.vg(new Yg(["procedures_mutatorarg"]));
    x.g.PROCEDURES_DEFNORETURN_COMMENT && this.tf(x.g.PROCEDURES_DEFNORETURN_COMMENT);
    this.Ha(x.g.PROCEDURES_HUE);
    this.oa(x.g.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Sa = x.g.PROCEDURES_DEFNORETURN_HELPURL;
    this.V = [];
    this.tb = [];
    this.Ke(!0);
    this.ge = null };
x.D.procedures_defreturn.I = function() { var a = new kj("", x.ra.um);
    O(O(O(O(O(Q(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    O(Ch(P(this, "RETURN"), x.Fg), "return");
    O(Q(this), "}");
    this.vg(new Yg(["procedures_mutatorarg"]));
    x.g.PROCEDURES_DEFRETURN_COMMENT && this.tf(x.g.PROCEDURES_DEFRETURN_COMMENT);
    this.Ha(x.g.PROCEDURES_HUE);
    this.oa(x.g.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Sa = x.g.PROCEDURES_DEFRETURN_HELPURL;
    this.V = [];
    this.tb = [];
    this.Ke(!0);
    this.ge = null };
x.g.PROCEDURES_BEFORE_PARAMS = "";
x.D.procedures_callnoreturn.I = function() { this.Sa = x.g.PROCEDURES_CALLNORETURN_HELPURL;
    this.Ha(x.g.PROCEDURES_HUE);
    O(O(Q(this), "", "NAME"), "(");
    O(Q(this, "TAIL"), ");");
    this.bc(!0);
    this.jd(!0);
    this.hd(!0);
    this.oa(x.g.PROCEDURES_CALLNORETURN_TOOLTIP);
    this.V = [];
    this.qf = {} };
x.D.procedures_callnoreturn.Ub = function() { for (var a = 0; a < this.V.length; a++)
        if (!K(this, "ARG" + a)) { new yh(this.V[a]); var b = P(this, "ARG" + a);
            0 < a && O(b, ",");
            b.I() } for (; K(this, "ARG" + a);) this.Ga("ARG" + a), a++;
    Kh(this, "TAIL", null) };
x.D.procedures_callreturn.I = function() { this.Sa = x.g.PROCEDURES_CALLRETURN_HELPURL;
    this.Ha(x.g.PROCEDURES_HUE);
    O(O(Q(this), "", "NAME"), "(");
    O(Q(this, "TAIL"), ")");
    this.bc(!0);
    this.Fc(!0);
    this.oa(x.g.PROCEDURES_CALLRETURN_TOOLTIP);
    this.V = [];
    this.qf = {} };
x.D.procedures_callreturn.Ub = x.D.procedures_callnoreturn.Ub;
delete x.D.procedures_ifreturn;
x.D.pond_scan = { I: function() { Jh(this, { message0: "%1(%2)", args0: ["scan", { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] }], inputsInline: !0, output: "Number", colour: 290, tooltip: W("Pond_scanTooltip") }) } };
x.h.pond_scan = function(a) { return ["scan(" + (U(a, "DEGREE", x.h.Wb) || 0) + ")", x.h.Da] };
x.D.pond_cannon = { I: function() { Jh(this, { message0: "%1(%2, %3);", args0: ["cannon", { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] }, { type: "input_value", name: "RANGE", check: "Number" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: 290, tooltip: W("Pond_cannonTooltip") }) } };
x.h.pond_cannon = function(a) { var b = U(a, "DEGREE", x.h.ec) || 0;
    a = U(a, "RANGE", x.h.ec) || 0; return "cannon(" + b + ", " + a + ");\n" };
x.D.pond_swim = { I: function() { Jh(this, { message0: "%1(%2);", args0: ["swim", { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: 290, tooltip: W("Pond_swimTooltip") }) } };
x.h.pond_swim = function(a) { return "swim(" + (U(a, "DEGREE", x.h.Wb) || 0) + ");\n" };
x.D.pond_stop = { I: function() { Jh(this, { message0: "%1(%2)", args0: ["stop", ""], previousStatement: null, nextStatement: null, colour: 290, tooltip: W("Pond_stopTooltip") }) } };
x.h.pond_stop = function() { return "stop();\n" };
x.D.pond_health = { I: function() { Jh(this, { message0: "%1(%2)", args0: ["health", ""], output: "Number", colour: 290, tooltip: W("Pond_healthTooltip") }) } };
x.h.pond_health = function() { return ["health()", x.h.Da] };
x.D.pond_speed = { I: function() { Jh(this, { message0: "%1(%2)", args0: ["speed", ""], output: "Number", colour: 290, tooltip: W("Pond_speedTooltip") }) } };
x.h.pond_speed = function() { return ["speed()", x.h.Da] };
x.D.pond_getX = { I: function() { Jh(this, { message0: "%1(%2)", args0: ["getX", ""], output: "Number", colour: 290, tooltip: W("Pond_locXTooltip") }) } };
x.h.pond_getX = function() { return ["getX()", x.h.Da] };
x.D.pond_getY = { I: function() { Jh(this, { message0: "%1(%2)", args0: ["getY", ""], output: "Number", colour: 290, tooltip: W("Pond_locYTooltip") }) } };
x.h.pond_getY = function() { return ["getY()", x.h.Da] };
x.D.pond_math_number = { I: function() { this.Sa = x.g.MATH_NUMBER_HELPURL;
        this.Ha(x.g.MATH_HUE);
        O(Q(this, "DUMMY"), new sk(0), "NUM");
        this.Fc(!0, "Number");
        this.oa(x.g.MATH_NUMBER_TOOLTIP) }, onchange: function() { if (this.o && this.M.Ia && this.M.Ia.Od) { var a = K(this, "DUMMY"),
                b = Ce(this, "NUM"),
                c = b.getValue(); - 1 != this.M.Ia.Od.indexOf("Angle") ? b.constructor != zj && (x.j.disable(), Bh(a, "NUM"), b = new zj(""), O(a, b, "NUM"), b.Pb(c), this.$(), x.j.enable()) : b.constructor != sk && (x.j.disable(), Bh(a, "NUM"), O(a, new sk(c), "NUM"), x.j.enable()) } } };
x.D.pond_math_single = {
    I: function() {
        Jh(this, { message0: "%1 (%2)", args0: [{ type: "field_dropdown", name: "OP", options: [
                    ["Math.sqrt", "ROOT"],
                    ["Math.abs", "ABS"],
                    ["Math.sin_deg", "SIN"],
                    ["Math.cos_deg", "COS"],
                    ["Math.tan_deg", "TAN"],
                    ["Math.asin_deg", "ASIN"],
                    ["Math.acos_deg", "ACOS"],
                    ["Math.atan_deg", "ATAN"]
                ] }, { type: "input_value", name: "NUM", check: "Number" }], inputsInline: !0, output: "Number", colour: x.g.MATH_HUE, helpUrl: x.g.MATH_SINGLE_HELPURL });
        var a = this;
        this.oa(function() {
            var b = F(a, "OP");
            return {
                ROOT: x.g.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: x.g.MATH_SINGLE_TOOLTIP_ABS,
                SIN: x.g.MATH_TRIG_TOOLTIP_SIN,
                COS: x.g.MATH_TRIG_TOOLTIP_COS,
                TAN: x.g.MATH_TRIG_TOOLTIP_TAN,
                ASIN: x.g.MATH_TRIG_TOOLTIP_ASIN,
                ACOS: x.g.MATH_TRIG_TOOLTIP_ACOS,
                ATAN: x.g.MATH_TRIG_TOOLTIP_ATAN
            } [b]
        })
    }
};
x.h.pond_math_single = function(a) { var b = F(a, "OP");
    a = U(a, "NUM", x.h.Wb) || "0"; switch (b) {
        case "ABS":
            b = "Math.abs(" + a + ")"; break;
        case "ROOT":
            b = "Math.sqrt(" + a + ")"; break;
        case "SIN":
            b = "Math.sin_deg(" + a + ")"; break;
        case "COS":
            b = "Math.cos_deg(" + a + ")"; break;
        case "TAN":
            b = "Math.tan_deg(" + a + ")"; break;
        case "ASIN":
            b = "Math.asin_deg(" + a + ")"; break;
        case "ACOS":
            b = "Math.acos_deg(" + a + ")"; break;
        case "ATAN":
            b = "Math.atan_deg(" + a + ")"; break;
        default:
            throw "Unknown math operator: " + b; } return [b, x.h.Da] };
x.h.pond_math_number = x.h.math_number;
x.D.pond_loc_x = x.D.pond_getX;
x.h.pond_loc_x = x.h.pond_getX;
x.D.pond_loc_y = x.D.pond_getY;
x.h.pond_loc_y = x.h.pond_getY;
x.D.pond_controls_if = x.D.controls_if;
x.h.pond_controls_if = x.h.controls_if;
x.D.pond_loops_while = x.D.controls_whileUntil;
x.h.pond_loops_while = x.h.controls_whileUntil;
x.D.pond_math_arithmetic = x.D.math_arithmetic;
x.h.pond_math_arithmetic = x.h.math_arithmetic;
x.D.pond_math_change = x.D.math_change;
x.h.pond_math_change = x.h.math_change;
var um = {},
    vm = {};

function wm() { throw Error("Do not instantiate directly"); } wm.prototype.yn = null;
wm.prototype.Pc = function() { return this.content };
wm.prototype.toString = function() { return this.content };
wm.prototype.Mm = function() { if (this.zn === vm) return Id(this.toString()); if (this.zn !== um) throw Error("Sanitized content was not of kind TEXT or HTML."); return Jd(this.toString(), this.yn || null) };

function xm(a) { if (null != a) switch (a.yn) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0 }
    return null }

function ym() { wm.call(this) } w(ym, wm);
ym.prototype.zn = um;

function zm(a) { return null != a && a.zn === um ? a : Am(String(String(a)).replace(Bm, Cm), xm(a)) }
var Am = function(a) {
        function b() {} b.prototype = a.prototype; return function(a, e) { var c = new b;
            c.content = String(a);
            void 0 !== e && (c.yn = e); return c } }(ym),
    Dm = { "\x00": "&#0;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", "-": "&#45;", "/": "&#47;", "=": "&#61;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };

function Cm(a) { return Dm[a] }
var Bm = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Em() { return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>' };

function Fm() {
    for (var a = '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). \\nReturns the distance to the closest enemy in that \\ndirection. Returns Infinity if no enemy found. </span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and \\na range (0-70). </span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360). </span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop. </span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, \\n100 is healthy). </span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is \\nstopped, 100 is full speed). </span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the \\nleft edge, 100 is the right edge). </span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the \\nbottom edge, 100 is the top edge). </span></div><div style="display: none"><span id="Pond_playerName">Player</span><span id="Pond_targetName">Target</span><span id="Pond_pendulumName">Pendulum</span><span id="Pond_scaredName">Scared</span></div><table width="100%"><tr><td><h1>' +
            ('<span id="title">' + (Il ? '<a href="index.html?lang=' + zm(Gl) + '">' : '<a href="./?lang=' + zm(Gl) + '">') + "Blockly Games</a> : " + zm({ appName: "Pond Tutor" }.appName) + "</span>"), b = " &nbsp; ", c = 1; 11 > c; c++) b += " " + (c == V ? '<span class="level_number level_done" id="level' + zm(c) + '">' + zm(c) + "</span>" : 10 == c ? '<a class="level_number" id="level' + zm(c) + '" href="?lang=' + zm(Gl) + "&level=" + zm(c) + zm("") + '">' + zm(c) + "</a>" : '<a class="level_dot" id="level' + zm(c) + '" href="?lang=' + zm(Gl) + "&level=" + zm(c) + zm("") + '"></a>');
    a = a + b + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
    switch (V) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            a += '<xml id="toolbox" style="display: none;"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><field name="NUM">70</field></shadow></value></block>' + (5 <= V ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block>' : "") + (7 <= V ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block>' :
                "") + (9 <= V ? '<block type="pond_stop"></block>' : "") + (9 <= V ? '<block type="pond_getX"></block><block type="pond_getY"></block>' : "") + "</category>" + (3 <= V ? '<category name="Logic">' + (9 <= V ? '<block type="controls_if"></block><block type="logic_compare"></block>' : "") + '<block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category>' : "") + '<category name="Math"><block type="pond_math_number"></block></category></xml><div id="blockly"></div>';
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            a +=
                '<div id="editor"></div>'
    }
    return a += '\n<div id="playerTarget" style="display: none">\n</div>\n\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (getX() > 25) {\n      swim(180, 25);\n    } else {\n      west = false;\n      swim(0, 0);\n    }\n  } else {\n    if (getX() < 75) {\n      swim(0, 25);\n    } else {\n      west = true;\n      swim(0, 0);\n    }\n  }\n}\n</div>\n\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    swim(45, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    stop();\n  }\n}\n</div>\n<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + Em() + "</div>") + (5 == V || 6 == V ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. Use \'scan\' to tell the cannon how far to shoot.</div>' + Em() + "</div>" : "") + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + (1 == V || 2 == V ? "Use the 'cannon' command to hit the target. The first parameter is the angle, the second parameter is the range. Find the right combination." +
            (1 == V ? '<br><br><img src="pond/docs/cannon.png" height=41 width=213>' : 2 == V ? "<pre>cannon(0, 70);</pre>" : "") : 3 == V || 4 == V ? "This target needs to be hit many times. Use a 'while (true)' loop to do something indefinitely." + (3 == V ? '<br><br><img src="pond/docs/whiletrue.png" height=90 width=164>' : 4 == V ? "<pre>while (true) {\n  ...\n}</pre>" : "") : 5 == V || 6 == V ? "This opponent moves back and forth, making it hard to hit. The 'scan' expression returns the exact range to the opponent in the specified direction." + (5 == V ?
                '<br><br><img src="pond/docs/scan.png" height=36 width=134><br><br>' : 6 == V ? "<pre>scan(0)</pre>" : "") + "This range is exactly what the 'cannon' command needs to fire accurately." : 7 == V || 8 == V ? "This opponent is too far away to use the cannon (which has a limit of 70 meters). Instead, use the 'swim' command to start swimming towards the opponent and crash into it." + (7 == V ? '<br><br><img src="pond/docs/swim.png" height=41 width=131>' : 8 == V ? "<pre>swim(0);</pre>" : "") : 9 == V ? "This opponent is also too far away to use the cannon. But you are too weak to survive a collision. Swim towards the opponent while your horizontal location is less than than 50. Then 'stop' and use the cannon." +
            (9 == V ? '<br><br><img src="pond/docs/loc_x_50.png" height=37 width=191><br><br><img src="pond/docs/stop.png" height=30 width=63>' : 10 == V ? "<pre>getX() &lt; 50</pre><pre>stop();</pre>" : "") : 10 == V ? "This opponent will move away when it is hit. Swim towards it if it is out of range (70 meters)." : "") + "</div>" + Em() + "</div>"
};
var Ql = "pond-tutor";
window.addEventListener("load", function() {
    document.body.innerHTML = Fm();
    Y.I();
    dm();
    Rl("runButton", qm);
    Rl("resetButton", sm);
    Rl("docsButton", om);
    Rl("closeDocs", pm);
    setTimeout(Y.Mw, 1);
    setTimeout(Y.Nw, 1);
    Rl("helpButton", tm);
    2 > location.hash.length && !Ol(V) && setTimeout(tm, 1E3);
    var a = -1 != Fl.indexOf(Gl),
        b = document.getElementById("blockly"),
        c = document.getElementById("editor"),
        e = document.getElementById("visualization");
    if (b) {
        var f = function() {
            b.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
            b.style.left =
                a ? "10px" : "420px";
            b.style.width = window.innerWidth - 440 + "px"
        };
        window.addEventListener("scroll", function() { f(null);
            x.yg(xk) });
        window.addEventListener("resize", f);
        f(null);
        var h = document.getElementById("toolbox");
        xk = x.Zf("blockly", { media: "third-party/blockly/media/", rtl: !1, toolbox: h, trashcan: !0 });
        Ck("scan,cannon,drive,swim,stop,speed,damage,health,loc_x,getX,loc_y,getY,");
        Y.ss(7 == V ? '<xml>  <block type="pond_swim" x="70" y="70">    <value name="DEGREE">      <shadow type="pond_math_number">        <field name="NUM">0</field>      </shadow>    </value>  </block></xml>' :
            '<xml>  <block type="pond_cannon" x="70" y="70">    <value name="DEGREE">      <shadow type="pond_math_number">        <field name="NUM">0</field>      </shadow>    </value>    <value name="RANGE">      <shadow type="pond_math_number">        <field name="NUM">70</field>      </shadow>    </value>  </block></xml>')
    }
    if (c) {
        h = document.getElementById("containerCode");
        h.parentNode.removeChild(h);
        h = 8 == V ? "swim(0);" : "cannon(0, 70);";
        Y.Td = window.ace.edit("editor");
        Y.Td.setTheme("ace/theme/chrome");
        Y.Td.setShowPrintMargin(!1);
        var k = Y.Td.getSession();
        k.setMode("ace/mode/javascript");
        k.setTabSize(2);
        k.setUseSoftTabs(!0);
        Y.ss(h + "\n");
        f = function() { c.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
            c.style.left = a ? "10px" : "420px";
            c.style.width = window.innerWidth - 440 + "px" };
        window.addEventListener("scroll", function() { f(null);
            x.yg(xk) });
        window.addEventListener("resize", f)
    }
    f(null);
    for (k = 0; h = Gm[k]; k++) {
        var l = h.code ? document.getElementById(h.code).textContent : b ? function() { return wk() } : function() { return Y.Td.getValue() },
            m =
            W(h.name);
        Z.Wu(m, l, h.start, h.ya)
    }
    Z.reset();
    fm()
});
var Gm = [void 0, [{ start: new D(50, 30), ya: 0, name: "Pond_playerName", code: null }, { start: new D(50, 70), ya: 99, name: "Pond_targetName", code: "playerTarget" }],
    [{ start: new D(70, 50), ya: 0, name: "Pond_playerName", code: null }, { start: new D(20, 50), ya: 99, name: "Pond_targetName", code: "playerTarget" }],
    [{ start: new D(20, 20), ya: 0, name: "Pond_playerName", code: null }, { start: new D(62.4264, 62.4264), ya: 0, name: "Pond_targetName", code: "playerTarget" }],
    [{ start: new D(50, 80), ya: 0, name: "Pond_playerName", code: null }, {
        start: new D(50, 20),
        ya: 0,
        name: "Pond_targetName",
        code: "playerTarget"
    }],
    [{ start: new D(90, 50), ya: 0, name: "Pond_playerName", code: null }, { start: new D(50, 50), ya: 0, name: "Pond_pendulumName", code: "playerPendulum" }],
    [{ start: new D(10, 50), ya: 0, name: "Pond_playerName", code: null }, { start: new D(50, 50), ya: 0, name: "Pond_pendulumName", code: "playerPendulum" }],
    [{ start: new D(20, 80), ya: 0, name: "Pond_playerName", code: null }, { start: new D(80, 20), ya: 99, name: "Pond_targetName", code: "playerTarget" }],
    [{ start: new D(50, 90), ya: 0, name: "Pond_playerName", code: null },
        { start: new D(50, 10), ya: 99, name: "Pond_pendulumName", code: "playerPendulum" }
    ],
    [{ start: new D(5, 50), ya: 99, name: "Pond_playerName", code: null }, { start: new D(95, 50), ya: 0, name: "Pond_targetName", code: "playerTarget" }],
    [{ start: new D(10, 10), ya: 50, name: "Pond_playerName", code: null }, { start: new D(40, 40), ya: 0, name: "Pond_scaredName", code: "playerScared" }]
][V];
mm = function(a) { clearTimeout(bm);
    0 != a && 1 == a && "function" == typeof Z.Wi[0].Nq && ((5 == V || 6 == V) && 2E5 < Z.Pp ? (a = document.getElementById("helpUseScan"), X.Fi(a, null, !1, !0, { width: "30%", left: "35%", top: "12em" }, X.Kp), X.Jp()) : (Y.Px(), X.Cv())) };