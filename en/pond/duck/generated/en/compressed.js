// Automatically generated file.  Do not edit!
var d, g = this;

function aa(a) { return void 0 !== a }

function q(a) { return "string" == typeof a }

function r(a) { return "number" == typeof a }

function ba(a, b) { a = a.split("."); var c = g;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var e; a.length && (e = a.shift());) !a.length && aa(b) ? c[e] = b : c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} }

function ca() {}

function da(a) { a.Io = void 0;
    a.Id = function() { return a.Io ? a.Io : a.Io = new a } }

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
var pa = Date.now || function() { return +new Date };

function w(a, b) {
    function c() {} c.prototype = b.prototype;
    a.s = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.oC = function(a, c, h) { for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f]; return b.prototype[c].apply(a, e) } };
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

function Ga(a) { return /^[\s\xa0]*$/.test(a) }

function Ha(a) { return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") }
var Ia = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

function Ja(a) { if (!Ka.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(La, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ma, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Na, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ra, "&#0;")); return a }
var La = /&/g,
    Ma = /</g,
    Na = />/g,
    Oa = /"/g,
    Pa = /'/g,
    Ra = /\x00/g,
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

function cb(a, b, c) { if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
    a[b] = c }

function db(a) { var b = {},
        c; for (c in a) b[a[c]] = c; return b }
var eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function fb(a, b) { for (var c, e, f = 1; f < arguments.length; f++) { e = arguments[f]; for (c in e) a[c] = e[c]; for (var h = 0; h < eb.length; h++) c = eb[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]) } }

function gb(a) { var b = arguments.length; if (1 == b && u(arguments[0])) return gb.apply(null, arguments[0]); if (b % 2) throw Error("Uneven number of arguments"); for (var c = {}, e = 0; e < b; e += 2) c[arguments[e]] = arguments[e + 1]; return c }

function hb(a) { var b = arguments.length; if (1 == b && u(arguments[0])) return hb.apply(null, arguments[0]); for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0; return c };

function ib(a) { ib[" "](a); return a } ib[" "] = ca;

function jb(a, b) { var c = kb; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
var lb = ab("Opera"),
    A = ab("Trident") || ab("MSIE"),
    mb = ab("Edge"),
    B = ab("Gecko") && !(-1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge")) && !(ab("Trident") || ab("MSIE")) && !ab("Edge"),
    C = -1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge"),
    nb = C && ab("Mobile"),
    ob = ab("Macintosh"),
    pb = ab("Android"),
    qb = ab("iPhone") && !ab("iPod") && !ab("iPad"),
    rb = ab("iPad");

function sb() { var a = g.document; return a ? a.documentMode : void 0 }
var tb;
a: { var ub = "",
        vb = function() { var a = Ya; if (B) return /rv:([^\);]+)(\)|;)/.exec(a); if (mb) return /Edge\/([\d\.]+)/.exec(a); if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (C) return /WebKit\/(\S+)/.exec(a); if (lb) return /(?:Version)[ \/]?(\S+)/.exec(a) }();vb && (ub = vb ? vb[1] : ""); if (A) { var wb = sb(); if (null != wb && wb > parseFloat(ub)) { tb = String(wb); break a } } tb = ub }
var kb = {};

function xb(a) { return jb(a, function() { for (var b = 0, c = Ia(String(tb)).split("."), e = Ia(String(a)).split("."), f = Math.max(c.length, e.length), h = 0; 0 == b && h < f; h++) { var k = c[h] || "",
                l = e[h] || "";
            do { k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""]; if (0 == k[0].length && 0 == l[0].length) break;
                b = Va(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || Va(0 == k[2].length, 0 == l[2].length) || Va(k[2], l[2]);
                k = k[3];
                l = l[3] } while (0 == b) } return 0 <= b }) }
var yb;
var zb = g.document;
yb = zb && A ? sb() || ("CSS1Compat" == zb.compatMode ? parseInt(tb, 10) : 5) : void 0;
var Ab = !A || 9 <= Number(yb),
    Bb = !A || 9 <= Number(yb),
    Cb = A && !xb("9"),
    Db = "ontouchstart" in g || !!(g.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.navigator || !g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints),
    Eb = "PointerEvent" in g,
    Fb = "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
    Gb = function() {
        if (!g.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
        g.addEventListener("test",
            ca, b);
        g.removeEventListener("test", ca, b);
        return a
    }();

function Hb() { 0 != Ib && (Jb[ia(this)] = this);
    this.ei = this.ei;
    this.sf = this.sf }
var Ib = 0,
    Jb = {};
Hb.prototype.ei = !1;
Hb.prototype.A = function() { if (!this.ei && (this.ei = !0, this.Na(), 0 != Ib)) { var a = ia(this); if (0 != Ib && this.sf && 0 < this.sf.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Jb[a] } };

function Kb(a, b) { a.ei ? aa(void 0) ? b.call(void 0) : b() : (a.sf || (a.sf = []), a.sf.push(aa(void 0) ? na(b, void 0) : b)) } Hb.prototype.Na = function() { if (this.sf)
        for (; this.sf.length;) this.sf.shift()() };

function Lb(a) { a && "function" == typeof a.A && a.A() };

function Mb(a, b) { this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.rh = !1;
    this.rt = !0 } Mb.prototype.stopPropagation = function() { this.rh = !0 };
Mb.prototype.preventDefault = function() { this.defaultPrevented = !0;
    this.rt = !1 };

function Nb(a) { return C ? "webkit" + a : lb ? "o" + a.toLowerCase() : a.toLowerCase() }
var Ob = {
        lz: "click",
        EB: "rightclick",
        wz: "dblclick",
        Rh: "mousedown",
        Sh: "mouseup",
        $i: "mouseover",
        Zi: "mouseout",
        Ou: "mousemove",
        Mu: "mouseenter",
        Nu: "mouseleave",
        Qh: "mousecancel",
        JB: "selectionchange",
        KB: "selectstart",
        kC: "wheel",
        kA: "keypress",
        jA: "keydown",
        lA: "keyup",
        iz: "blur",
        aA: "focus",
        xz: "deactivate",
        bA: "focusin",
        cA: "focusout",
        Nh: "change",
        BB: "reset",
        IB: "select",
        SB: "submit",
        hA: "input",
        xB: "propertychange",
        Oz: "dragstart",
        Jz: "drag",
        Lz: "dragenter",
        Nz: "dragover",
        Mz: "dragleave",
        Tz: "drop",
        Kz: "dragend",
        $B: "touchstart",
        ZB: "touchmove",
        YB: "touchend",
        XB: "touchcancel",
        fz: "beforeunload",
        qz: "consolemessage",
        rz: "contextmenu",
        yz: "devicechange",
        zz: "devicemotion",
        Az: "deviceorientation",
        Dz: "DOMContentLoaded",
        Yz: "error",
        gA: "help",
        mA: "load",
        uA: "losecapture",
        hB: "orientationchange",
        zB: "readystatechange",
        CB: "resize",
        FB: "scroll",
        bC: "unload",
        jz: "canplay",
        kz: "canplaythrough",
        Vz: "durationchange",
        Wz: "emptied",
        Xz: "ended",
        pA: "loadeddata",
        qA: "loadedmetadata",
        lB: "pause",
        mB: "play",
        nB: "playing",
        yB: "ratechange",
        GB: "seeked",
        HB: "seeking",
        PB: "stalled",
        TB: "suspend",
        WB: "timeupdate",
        iC: "volumechange",
        jC: "waiting",
        OB: "sourceopen",
        NB: "sourceended",
        MB: "sourceclosed",
        Sy: "abort",
        dC: "update",
        gC: "updatestart",
        eC: "updateend",
        fA: "hashchange",
        iB: "pagehide",
        jB: "pageshow",
        wB: "popstate",
        uz: "copy",
        kB: "paste",
        vz: "cut",
        $y: "beforecopy",
        az: "beforecut",
        dz: "beforepaste",
        QA: "online",
        PA: "offline",
        wA: "message",
        pz: "connect",
        iA: "install",
        Ty: "activate",
        $z: "fetch",
        dA: "foreignfetch",
        xA: "messageerror",
        QB: "statechange",
        fC: "updatefound",
        sz: "controllerchange",
        Yy: Nb("AnimationStart"),
        Wy: Nb("AnimationEnd"),
        Xy: Nb("AnimationIteration"),
        aC: Nb("TransitionEnd"),
        pB: "pointerdown",
        vB: "pointerup",
        oB: "pointercancel",
        sB: "pointermove",
        uB: "pointerover",
        tB: "pointerout",
        qB: "pointerenter",
        rB: "pointerleave",
        eA: "gotpointercapture",
        vA: "lostpointercapture",
        yA: "MSGestureChange",
        zA: "MSGestureEnd",
        AA: "MSGestureHold",
        BA: "MSGestureStart",
        CA: "MSGestureTap",
        DA: "MSGotPointerCapture",
        EA: "MSInertiaStart",
        FA: "MSLostPointerCapture",
        GA: "MSPointerCancel",
        HA: "MSPointerDown",
        IA: "MSPointerEnter",
        JA: "MSPointerHover",
        KA: "MSPointerLeave",
        LA: "MSPointerMove",
        MA: "MSPointerOut",
        NA: "MSPointerOver",
        OA: "MSPointerUp",
        UB: "text",
        VB: A ? "textinput" : "textInput",
        nz: "compositionstart",
        oz: "compositionupdate",
        mz: "compositionend",
        bz: "beforeinput",
        Zz: "exit",
        nA: "loadabort",
        oA: "loadcommit",
        rA: "loadredirect",
        sA: "loadstart",
        tA: "loadstop",
        DB: "responsive",
        LB: "sizechanged",
        cC: "unresponsive",
        hC: "visibilitychange",
        RB: "storage",
        Iz: "DOMSubtreeModified",
        Ez: "DOMNodeInserted",
        Gz: "DOMNodeRemoved",
        Hz: "DOMNodeRemovedFromDocument",
        Fz: "DOMNodeInsertedIntoDocument",
        Bz: "DOMAttrModified",
        Cz: "DOMCharacterDataModified",
        ez: "beforeprint",
        Vy: "afterprint",
        cz: "beforeinstallprompt",
        Zy: "appinstalled"
    },
    Pb = {
        Rh: Eb ? "pointerdown" : Fb ? "MSPointerDown" : "mousedown",
        Sh: Eb ? "pointerup" : Fb ? "MSPointerUp" : "mouseup",
        Qh: Eb ? "pointercancel" : Fb ? "MSPointerCancel" : "mousecancel",
        Ou: Eb ? "pointermove" : Fb ? "MSPointerMove" : "mousemove",
        $i: Eb ? "pointerover" : Fb ? "MSPointerOver" : "mouseover",
        Zi: Eb ? "pointerout" : Fb ? "MSPointerOut" : "mouseout",
        Mu: Eb ? "pointerenter" : Fb ? "MSPointerEnter" : "mouseenter",
        Nu: Eb ? "pointerleave" : Fb ? "MSPointerLeave" : "mouseleave"
    };

function Qb(a, b) { Mb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.np = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.Ae = null;
    a && this.I(a, b) } w(Qb, Mb);
var Rb = [1, 4, 2],
    Sb = { 2: "touch", 3: "pen", 4: "mouse" };
Qb.prototype.I = function(a, b) {
    var c = this.type = a.type,
        e = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) { if (B) { a: { try { ib(b.nodeName); var f = !0; break a } catch (h) {} f = !1 } f || (b = null) } } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
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
    this.np = ob ? a.metaKey : a.ctrlKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = q(a.pointerType) ? a.pointerType : Sb[a.pointerType] || "";
    this.state = a.state;
    this.Ae = a;
    a.defaultPrevented && this.preventDefault()
};

function Tb(a) { return Ab ? 0 == a.Ae.button : "click" == a.type ? !0 : !!(a.Ae.button & Rb[0]) } Qb.prototype.stopPropagation = function() { Qb.s.stopPropagation.call(this);
    this.Ae.stopPropagation ? this.Ae.stopPropagation() : this.Ae.cancelBubble = !0 };
Qb.prototype.preventDefault = function() { Qb.s.preventDefault.call(this); var a = this.Ae; if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Cb) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
var Ub = "closure_listenable_" + (1E6 * Math.random() | 0);

function Vb(a) { return !(!a || !a[Ub]) }
var Wb = 0;

function Xb(a, b, c, e, f) { this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!e;
    this.bm = f;
    this.key = ++Wb;
    this.Ji = this.kl = !1 }

function Yb(a) { a.Ji = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.bm = null };

function Zb(a) { this.src = a;
    this.Gc = {};
    this.Mk = 0 } Zb.prototype.add = function(a, b, c, e, f) { var h = a.toString();
    a = this.Gc[h];
    a || (a = this.Gc[h] = [], this.Mk++); var k = $b(a, b, e, f); - 1 < k ? (b = a[k], c || (b.kl = !1)) : (b = new Xb(b, this.src, h, !!e, f), b.kl = c, a.push(b)); return b };
Zb.prototype.remove = function(a, b, c, e) { a = a.toString(); if (!(a in this.Gc)) return !1; var f = this.Gc[a];
    b = $b(f, b, c, e); return -1 < b ? (Yb(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.Gc[a], this.Mk--), !0) : !1 };

function ac(a, b) { var c = b.type;
    c in a.Gc && ya(a.Gc[c], b) && (Yb(b), 0 == a.Gc[c].length && (delete a.Gc[c], a.Mk--)) } Zb.prototype.removeAll = function(a) { a = a && a.toString(); var b = 0,
        c; for (c in this.Gc)
        if (!a || c == a) { for (var e = this.Gc[c], f = 0; f < e.length; f++) ++b, Yb(e[f]);
            delete this.Gc[c];
            this.Mk-- } return b };
Zb.prototype.Fj = function(a, b, c, e) { a = this.Gc[a.toString()]; var f = -1;
    a && (f = $b(a, b, c, e)); return -1 < f ? a[f] : null };

function $b(a, b, c, e) { for (var f = 0; f < a.length; ++f) { var h = a[f]; if (!h.Ji && h.listener == b && h.capture == !!c && h.bm == e) return f } return -1 };
var bc = "closure_lm_" + (1E6 * Math.random() | 0),
    cc = {},
    dc = 0;

function ec(a, b, c, e, f) { if (e && e.once) return fc(a, b, c, e, f); if (u(b)) { for (var h = 0; h < b.length; h++) ec(a, b[h], c, e, f); return null } c = gc(c); return Vb(a) ? a.ia(b, c, ha(e) ? !!e.capture : !!e, f) : hc(a, b, c, !1, e, f) }

function hc(a, b, c, e, f, h) { if (!b) throw Error("Invalid event type"); var k = ha(f) ? !!f.capture : !!f,
        l = ic(a);
    l || (a[bc] = l = new Zb(a));
    c = l.add(b, c, e, k, h); if (c.proxy) return c;
    e = jc();
    c.proxy = e;
    e.src = a;
    e.listener = c; if (a.addEventListener) Gb || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), e, f);
    else if (a.attachEvent) a.attachEvent(kc(b.toString()), e);
    else if (a.addListener && a.removeListener) a.addListener(e);
    else throw Error("addEventListener and attachEvent are unavailable.");
    dc++; return c }

function jc() { var a = lc,
        b = Bb ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c }; return b }

function fc(a, b, c, e, f) { if (u(b)) { for (var h = 0; h < b.length; h++) fc(a, b[h], c, e, f); return null } c = gc(c); return Vb(a) ? a.zs(b, c, ha(e) ? !!e.capture : !!e, f) : hc(a, b, c, !0, e, f) }

function mc(a, b, c, e, f) { if (u(b))
        for (var h = 0; h < b.length; h++) mc(a, b[h], c, e, f);
    else e = ha(e) ? !!e.capture : !!e, c = gc(c), Vb(a) ? a.sd(b, c, e, f) : a && (a = ic(a)) && (b = a.Fj(b, c, e, f)) && nc(b) }

function nc(a) { if (!r(a) && a && !a.Ji) { var b = a.src; if (Vb(b)) ac(b.jf, a);
        else { var c = a.type,
                e = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(kc(c), e) : b.addListener && b.removeListener && b.removeListener(e);
            dc--;
            (c = ic(b)) ? (ac(c, a), 0 == c.Mk && (c.src = null, b[bc] = null)) : Yb(a) } } }

function kc(a) { return a in cc ? cc[a] : cc[a] = "on" + a }

function oc(a, b, c, e) { var f = !0; if (a = ic(a))
        if (b = a.Gc[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) { var h = b[a];
                h && h.capture == c && !h.Ji && (h = pc(h, e), f = f && !1 !== h) }
    return f }

function pc(a, b) { var c = a.listener,
        e = a.bm || a.src;
    a.kl && nc(a); return c.call(e, b) }

function lc(a, b) {
    if (a.Ji) return !0;
    if (!Bb) {
        if (!b) a: { b = ["window", "event"]; for (var c = g, e = 0; e < b.length; e++)
                if (c = c[b[e]], null == c) { b = null; break a } b = c } e = b;
        b = new Qb(e, this);
        c = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: { var f = !1; if (0 == e.keyCode) try { e.keyCode = -1; break a } catch (k) { f = !0 }
                if (f || void 0 == e.returnValue) e.returnValue = !0 } e = [];
            for (f = b.currentTarget; f; f = f.parentNode) e.push(f);a = a.type;
            for (f = e.length - 1; !b.rh && 0 <= f; f--) { b.currentTarget = e[f]; var h = oc(e[f], a, !0, b);
                c = c && h }
            for (f = 0; !b.rh && f < e.length; f++) b.currentTarget =
                e[f],
            h = oc(e[f], a, !1, b),
            c = c && h
        }
        return c
    }
    return pc(a, new Qb(b, this))
}

function ic(a) { a = a[bc]; return a instanceof Zb ? a : null }
var qc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function gc(a) { if (v(a)) return a;
    a[qc] || (a[qc] = function(b) { return a.handleEvent(b) }); return a[qc] };
// Copyright 2016 Google Inc.  Apache License 2.0
x.Touch = {};
x.Touch.Kk = null;
x.Touch.te = {};
g.PointerEvent ? x.Touch.te = { mousedown: ["pointerdown"], mouseenter: ["pointerenter"], mouseleave: ["pointerleave"], mousemove: ["pointermove"], mouseout: ["pointerout"], mouseover: ["pointerover"], mouseup: ["pointerup", "pointercancel"], touchend: ["pointerup"], touchcancel: ["pointercancel"] } : Db && (x.Touch.te = { mousedown: ["touchstart"], mousemove: ["touchmove"], mouseup: ["touchend", "touchcancel"] });
x.pm = 0;
x.xx = function(a, b) { x.mg();
    a.changedTouches && 1 != a.changedTouches.length || (x.pm = setTimeout(function() { a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        b && rc(b, a) }, x.Iu)) };
x.mg = function() { x.pm && (clearTimeout(x.pm), x.pm = 0) };
x.Touch.df = function() { x.Touch.Kk = null };
x.Touch.Tp = function(a) { return !x.Touch.nx(a) || x.Touch.Iv(a) };
x.Touch.Zl = function(a) { return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 != a.changedTouches[0].identifier && null != a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse" };
x.Touch.Iv = function(a) { var b = x.Touch.Zl(a); return void 0 != x.Touch.Kk && null != x.Touch.Kk ? x.Touch.Kk == b : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (x.Touch.Kk = b, !0) : !1 };
x.Touch.ky = function(a) { if (Ea(a.type, "touch")) { var b = a.changedTouches[0];
        a.clientX = b.clientX;
        a.clientY = b.clientY } };
x.Touch.nx = function(a) { return Ea(a.type, "touch") || Ea(a.type, "mouse") || Ea(a.type, "pointer") };
x.Touch.lm = function(a) { return Ea(a.type, "touch") || Ea(a.type, "pointer") };
x.Touch.oy = function(a) { var b = []; if (a.changedTouches)
        for (var c = 0; c < a.changedTouches.length; c++) b[c] = { type: a.type, changedTouches: [a.changedTouches[c]], target: a.target, stopPropagation: function() { a.stopPropagation() }, preventDefault: function() { a.preventDefault() } };
    else b.push(a); return b };

function sc(a, b, c) { return Math.min(Math.max(a, b), c) }

function tc(a) { a %= 360; return 0 > 360 * a ? a + 360 : a }

function uc(a) { return a * Math.PI / 180 };

function D(a, b) { this.x = aa(a) ? a : 0;
    this.y = aa(b) ? b : 0 } d = D.prototype;
d.clone = function() { return new D(this.x, this.y) };

function vc(a, b) { return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1 }

function wc(a, b) { var c = a.x - b.x;
    a = a.y - b.y; return Math.sqrt(c * c + a * a) }

function xc(a, b) { return new D(a.x - b.x, a.y - b.y) }

function yc(a, b) { return new D(a.x + b.x, a.y + b.y) } d.ceil = function() { this.x = Math.ceil(this.x);
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
x.j.$l = "";
x.j.oc = !0;
x.j.Xn = 0;
x.j.Wk = "create";
x.j.au = x.j.Wk;
x.j.fn = "delete";
x.j.bu = x.j.fn;
x.j.Nh = "change";
x.j.gz = x.j.Nh;
x.j.aj = "move";
x.j.hz = x.j.aj;
x.j.Aq = "var_create";
x.j.Bq = "var_delete";
x.j.Cq = "var_rename";
x.j.un = "ui";
x.j.kq = "comment_create";
x.j.lq = "comment_delete";
x.j.jq = "comment_change";
x.j.mq = "comment_move";
x.j.Xi = [];
x.j.V = function(a) { x.j.isEnabled() && (x.j.Xi.length || setTimeout(x.j.vw, 0), x.j.Xi.push(a)) };
x.j.vw = function() { for (var a = x.j.filter(x.j.Xi, !0), b = x.j.Xi.length = 0, c; c = a[b]; b++) { var e = zc[c.Kc] || null; if (e) { var f = c;
            f.oc && (e.Gh.push(f), e.rk.length = 0, e.Gh.length > e.Lu && e.Gh.unshift()); for (var h = 0; c = e.Hc[h]; h++) c(f) } } };
x.j.filter = function(a, b) {
    a = Aa(a);
    b || a.reverse();
    for (var c = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.ui()) { var k = [h.type, h.fc, h.Kc].join(" "),
                l = e[k];
            l ? h.type == x.j.aj ? (l.oh = h.oh, l.nh = h.nh, l.pg = h.pg) : h.type == x.j.Nh && h.element == l.element && h.name == l.name ? l.newValue = h.newValue : h.type != x.j.un || "click" != h.element || "commentOpen" != l.element && "mutatorOpen" != l.element && "warningOpen" != l.element ? (e[k] = h, c.push(h)) : l.newValue = h.newValue : (e[k] = h, c.push(h)) } a = c.filter(function(a) { return !a.ui() });
    b || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == x.j.Nh && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
x.j.Kv = function() { for (var a = 0, b; b = x.j.Xi[a]; a++) b.oc = !1 };
x.j.disable = function() { x.j.Xn++ };
x.j.enable = function() { x.j.Xn-- };
x.j.isEnabled = function() { return 0 == x.j.Xn };
x.j.Ac = function() { return x.j.$l };
x.j.S = function(a) { x.j.$l = "boolean" == typeof a ? a ? x.i.Be() : "" : a };
x.j.Ur = function(a) { var b = [];
    a = Ac(a, !1); for (var c = 0, e; e = a[c]; c++) b[c] = e.id; return b };
x.j.la = function(a, b) {
    switch (a.type) {
        case x.j.Wk:
            var c = new Bc(null); break;
        case x.j.fn:
            c = new Cc(null); break;
        case x.j.Nh:
            c = new Dc(null, "", "", "", ""); break;
        case x.j.aj:
            c = new Ec(null); break;
        case x.j.Aq:
            c = new Fc(null); break;
        case x.j.Bq:
            c = new Gc(null); break;
        case x.j.Cq:
            c = new Hc(null, ""); break;
        case x.j.un:
            c = new Ic(null); break;
        case x.j.kq:
            c = new Jc(null); break;
        case x.j.jq:
            c = new Kc(null); break;
        case x.j.mq:
            c = new Lc(null); break;
        case x.j.lq:
            c = new Mc(null); break;
        default:
            throw "Unknown event type."; } c.la(a);
    c.Kc = b.id;
    return c
};
x.j.vC = function(a) { if (a.type == x.j.aj || a.type == x.j.Wk) { var b = zc[a.Kc] || null; if (a = Nc(b, a.fc))
            if (a.getParent() && !a.getParent().disabled) { b = Ac(a, !1);
                a = 0; for (var c; c = b[a]; a++) c.Pd(!1) } else if ((a.M || a.$) && !b.sb()) { do a.Pd(!0), a = Oc(a); while (a) } } };
// Copyright 2018 Google Inc.  Apache License 2.0
function Pc() { this.Kc = void 0;
    this.group = x.j.$l;
    this.oc = x.j.oc } Pc.prototype.Ca = function() { var a = { type: this.type };
    this.group && (a.group = this.group); return a };
Pc.prototype.la = function(a) { this.group = a.group };
Pc.prototype.ui = function() { return !1 };
Pc.prototype.run = function() {};

function Qc(a) { a = zc[a.Kc] || null; if (!a) throw Error("Workspace is null. Event must have been generated from real Blockly events."); return a };

function Rc(a) { Rc.s.constructor.call(this);
    this.Ig = a.ba();
    this.Kc = a.o.id } w(Rc, Pc);
Rc.prototype.Ca = function() { var a = Rc.s.Ca.call(this);
    a.varId = this.Ig; return a };
Rc.prototype.la = function(a) { Rc.s.Ca.call(this);
    this.Ig = a.varId };

function Fc(a) { a && (Fc.s.constructor.call(this, a), this.Kh = a.type, this.Jh = a.name) } w(Fc, Rc);
Fc.prototype.type = x.j.Aq;
Fc.prototype.Ca = function() { var a = Fc.s.Ca.call(this);
    a.varType = this.Kh;
    a.varName = this.Jh; return a };
Fc.prototype.la = function(a) { Fc.s.la.call(this, a);
    this.Kh = a.varType;
    this.Jh = a.varName };
Fc.prototype.run = function(a) { var b = Qc(this);
    a ? b.ed(this.Jh, this.Kh, this.Ig) : b.Tf(this.Ig) };

function Gc(a) { a && (Gc.s.constructor.call(this, a), this.Kh = a.type, this.Jh = a.name) } w(Gc, Rc);
Gc.prototype.type = x.j.Bq;
Gc.prototype.Ca = function() { var a = Gc.s.Ca.call(this);
    a.varType = this.Kh;
    a.varName = this.Jh; return a };
Gc.prototype.la = function(a) { Gc.s.la.call(this, a);
    this.Kh = a.varType;
    this.Jh = a.varName };
Gc.prototype.run = function(a) { var b = Qc(this);
    a ? b.Tf(this.Ig) : b.ed(this.Jh, this.Kh, this.Ig) };

function Hc(a, b) { a && (Hc.s.constructor.call(this, a), this.bp = a.name, this.Yo = b) } w(Hc, Rc);
Hc.prototype.type = x.j.Cq;
Hc.prototype.Ca = function() { var a = Hc.s.Ca.call(this);
    a.oldName = this.bp;
    a.newName = this.Yo; return a };
Hc.prototype.la = function(a) { Hc.s.la.call(this, a);
    this.bp = a.oldName;
    this.Yo = a.newName };
Hc.prototype.run = function(a) { var b = Qc(this);
    a ? b.vh(this.Ig, this.Yo) : b.vh(this.Ig, this.bp) };
// Copyright 2017 Google Inc.  Apache License 2.0
function Sc(a) { this.ua = {};
    this.o = a } d = Sc.prototype;
d.clear = function() { this.ua = Object(null) };
d.xp = function(a, b) { var c = this.Sc(b, a.type),
        e = Tc(this.o);
    x.j.S(!0); try { if (c && c.ba() != a.ba()) { var f = a.type;
            b != c.name && Uc(c, b, e); for (b = 0; b < e.length; b++) e[b].wk(a.ba(), c.ba());
            x.j.V(new Gc(a));
            this.ua[f].splice(this.Kj(f).indexOf(a), 1) } else Uc(a, b, e) } finally { x.j.S(!1) } };
d.vh = function(a, b) { var c = this.fe(a); if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.xp(c, b) };

function Uc(a, b, c) { x.j.V(new Hc(a, b));
    a.name = b; for (b = 0; b < c.length; b++) c[b].Zm(a) } d.ed = function(a, b, c) { var e = this.Sc(a, b); if (e) { if (c && e.ba() != c) throw Error('Variable "' + a + '" is already in use and its id is "' + e.ba() + '" which conflicts with the passed in id, "' + c + '".'); return e } if (c && this.fe(c)) throw Error('Variable id, "' + c + '", is already in use.');
    c = c || x.i.Be();
    b = b || "";
    e = new Vc(this.o, a, b, c);
    this.ua[b] ? this.ua[b].push(e) : this.ua[b] = [e]; return e };
d.Tf = function(a) { var b = this.fe(a); if (b) { var c = b.name,
            e = this.vo(a);
        a = 0; for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) { a = F(f, "NAME");
                c = x.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace("%2", a);
                x.alert(c); return } var h = this;
        1 < e.length ? (c = x.g.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", c), x.confirm(c, function(a) { a && h.Al(b, e) })) : h.Al(b, e) } else console.warn("Can't delete non-existent variable: " + a) };
d.Al = function(a, b) { var c = x.j.Ac();
    c || x.j.S(!0); try { for (var e = 0; e < b.length; e++) b[e].A(!0, !1); var f = this.ua[a.type];
        b = 0; for (var h; h = f[b]; b++)
            if (h.ba() == a.ba()) { f.splice(b, 1);
                x.j.V(new Gc(a)); break } } finally { c || x.j.S(!1) } };
d.Sc = function(a, b) { if (b = this.ua[b || ""])
        for (var c = 0, e; e = b[c]; c++)
            if (Wc(e.name, a)) return e; return null };
d.fe = function(a) { for (var b = Object.keys(this.ua), c = 0; c < b.length; c++)
        for (var e = b[c], f = 0, h; h = this.ua[e][f]; f++)
            if (h.ba() == a) return h; return null };
d.Kj = function(a) { return (a = this.ua[a || ""]) ? a.slice() : [] };
d.uo = function() { for (var a = Object.keys(this.ua), b = !1, c = 0; c < a.length; c++) "" == a[c] && (b = !0);
    b || a.push(""); return a };
d.kf = function() { for (var a = [], b = Object.keys(this.ua), c = 0; c < b.length; c++) a = a.concat(this.ua[b[c]]); return a };
d.vo = function(a) { for (var b = [], c = Tc(this.o), e = 0; e < c.length; e++) { var f = c[e].Wf(); if (f)
            for (var h = 0; h < f.length; h++) f[h].ba() == a && b.push(c[e]) } return b };

function Xc(a) { this.Yd = a.id;
    this.Kc = a.o.id;
    this.group = x.j.$l;
    this.oc = x.j.oc } w(Xc, Pc);
Xc.prototype.Ca = function() { var a = { type: this.type };
    this.group && (a.group = this.group);
    this.Yd && (a.commentId = this.Yd); return a };
Xc.prototype.la = function(a) { this.Yd = a.commentId;
    this.group = a.group };

function Kc(a, b, c) { a && (Kc.s.constructor.call(this, a), this.Ns = b, this.vm = c) } w(Kc, Xc);
d = Kc.prototype;
d.type = x.j.jq;
d.Ca = function() { var a = Kc.s.Ca.call(this);
    a.newContents = this.vm; return a };
d.la = function(a) { Kc.s.la.call(this, a);
    this.vm = a.newValue };
d.ui = function() { return this.Ns == this.vm };
d.run = function(a) { var b = Yc(Qc(this), this.Yd);
    b ? b.Od(a ? this.vm : this.Ns) : console.warn("Can't change non-existent comment: " + this.Yd) };

function Jc(a) { a && (Jc.s.constructor.call(this, a), this.xml = a.Jk()) } w(Jc, Xc);
Jc.prototype.type = x.j.kq;
Jc.prototype.Ca = function() { var a = Jc.s.Ca.call(this);
    a.xml = x.F.Gd(this.xml); return a };
Jc.prototype.la = function(a) { Jc.s.la.call(this, a);
    this.xml = x.F.Xc("<xml>" + a.xml + "</xml>").firstChild };
Jc.prototype.run = function(a) { var b = Qc(this);
    a ? (a = G("xml"), a.appendChild(this.xml), x.F.ae(a, b)) : (b = Yc(b, this.Yd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Yd) };

function Mc(a) { a && (Mc.s.constructor.call(this, a), this.xml = a.Jk()) } w(Mc, Xc);
Mc.prototype.type = x.j.lq;
Mc.prototype.Ca = function() { return Mc.s.Ca.call(this) };
Mc.prototype.la = function(a) { Mc.s.la.call(this, a) };
Mc.prototype.run = function(a) { var b = Qc(this);
    a ? (b = Yc(b, this.Yd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Yd) : (a = G("xml"), a.appendChild(this.xml), x.F.ae(a, b)) };

function Lc(a) { a && (Lc.s.constructor.call(this, a), this.Kn = a, this.ap = a.vd.clone(), this.mh = null) } w(Lc, Xc);
d = Lc.prototype;
d.vf = function() { if (!this.Kn) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.mh = this.Kn.vd.clone();
    this.Kn = null };
d.type = x.j.mq;
d.Ca = function() { var a = Lc.s.Ca.call(this);
    this.mh && (a.newCoordinate = Math.round(this.mh.x) + "," + Math.round(this.mh.y)); return a };
d.la = function(a) { Lc.s.la.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.mh = new D(parseFloat(a[0]), parseFloat(a[1]))) };
d.ui = function() { return vc(this.ap, this.mh) };
d.run = function(a) { var b = Yc(Qc(this), this.Yd); if (b) { a = a ? this.mh : this.ap; var c = b.vd.clone();
        b.moveBy(a.x - c.x, a.y - c.y) } else console.warn("Can't move non-existent comment: " + this.Yd) };

function Zc(a, b, c, e, f) { this.id = f && !Yc(a, f) ? f : x.i.Be();
    a.Ri.push(this);
    a.vl[this.id] && console.warn('Overriding an existing comment on this workspace, with id "' + this.id + '"');
    a.vl[this.id] = this;
    this.vd = new D(0, 0);
    this.Fa = c;
    this.ma = e;
    this.o = a;
    this.u = a.u;
    this.lk = this.uj = !0;
    this.dd = b;
    this.rs = !0;
    $c(this) } d = Zc.prototype;
d.A = function() { if (this.o) { x.j.isEnabled() && x.j.V(new Mc(this)); var a = this.o; if (!ya(a.Ri, this)) throw "Comment not present in workspace's list of top-most comments.";
        delete a.vl[this.id];
        this.o = null } };
d.ni = function() { return this.Fa };
d.hd = function() { return this.ma };
d.moveBy = function(a, b) { var c = new Lc(this);
    this.vd.translate(a, b);
    c.vf();
    x.j.V(c) };
d.lc = function() { return this.uj && !(this.o && this.o.options.readOnly) };
d.Jp = function(a) { this.uj = a };
d.Je = function() { return this.lk && !(this.o && this.o.options.readOnly) };
d.xh = function(a) { this.lk = a };
d.Rc = function() { return this.dd };
d.Od = function(a) { this.dd != a && (x.j.V(new Kc(this, this.dd, a)), this.dd = a) };
d.Jk = function(a) { a = ad(this, a);
    a.setAttribute("x", Math.round(this.vd.x));
    a.setAttribute("y", Math.round(this.vd.y));
    a.setAttribute("h", this.Fa);
    a.setAttribute("w", this.ma); return a };

function ad(a, b) { var c = G("comment");
    b || c.setAttribute("id", a.id);
    c.textContent = a.Rc(); return c }

function $c(a) { if (x.j.isEnabled()) { var b = x.j.Ac();
        b || x.j.S(!0); try { x.j.V(new Jc(a)) } finally { b || x.j.S(!1) } } }

function bd(a) { var b = a.getAttribute("h"),
        c = a.getAttribute("w"); return { id: a.getAttribute("id"), Zr: b ? parseInt(b, 10) : 100, Ut: c ? parseInt(c, 10) : 100, x: parseInt(a.getAttribute("x"), 10), y: parseInt(a.getAttribute("y"), 10), content: a.textContent } };
// Copyright 2012 Google Inc.  Apache License 2.0
function dd(a) { this.id = x.i.Be();
    zc[this.id] = this;
    this.options = a || {};
    this.u = !!this.options.u;
    this.He = !!this.options.He;
    this.Ea = this.options.Ea;
    this.Qi = [];
    this.Ri = [];
    this.vl = Object.create(null);
    this.Hc = [];
    this.Gh = [];
    this.rk = [];
    this.Bn = Object.create(null);
    this.ua = new Sc(this);
    this.Gi = null } d = dd.prototype;
d.R = !1;
d.Jo = !1;
d.Lu = 1024;
d.A = function() { this.Hc.length = 0;
    this.clear();
    delete zc[this.id] };

function ed(a, b) { if (!ya(a.Qi, b)) throw "Block not present in workspace's list of top-most blocks."; }

function fd(a, b) { var c = [].concat(a.Qi); if (b && 1 < c.length) { var e = Math.sin(uc(3));
        a.u && (e *= -1);
        c.sort(function(a, b) { a = a.oa();
            b = b.oa(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function gd(a, b) { var c = [].concat(a.Ri); if (b && 1 < c.length) { var e = Math.sin(uc(3));
        a.u && (e *= -1);
        c.sort(function(a, b) { a = a.oa();
            b = b.oa(); return a.y + e * a.x - (b.y + e * b.x) }) } return c }

function Tc(a) { var b = fd(a, !1); for (a = 0; a < b.length; a++) b.push.apply(b, b[a].Vf(!1)); return b }
d.clear = function() { this.Jo = !0; try { var a = x.j.Ac(); for (a || x.j.S(!0); this.Qi.length;) this.Qi[0].A(); for (; this.Ri.length;) this.Ri[this.Ri.length - 1].A();
        a || x.j.S(!1);
        this.ua.clear();
        this.Gi && this.Gi.clear() } finally { this.Jo = !1 } };
d.vh = function(a, b) { this.ua.vh(a, b) };
d.ed = function(a, b, c) { return this.ua.ed(a, b, c) };
d.vo = function(a) { return this.ua.vo(a) };
d.Tf = function(a) { this.ua.Tf(a) };
d.Al = function(a, b) { this.ua.Al(a, b) };
d.Sc = function(a, b) { return this.ua.Sc(a, b) };
d.fe = function(a) { return this.ua.fe(a) };
d.Kj = function(a) { return this.ua.Kj(a) };
d.uo = function() { return this.ua.uo() };
d.kf = function() { return this.ua.kf() };
d.hd = function() { return 0 };
d.rf = function(a, b) { return new hd(this, a, b) };

function id(a) { return isNaN(a.options.Ds) ? Infinity : a.options.Ds - Tc(a).length } d.eq = function(a) { var b = a ? this.rk : this.Gh,
        c = a ? this.Gh : this.rk,
        e = b.pop(); if (e) { for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group;) f.push(b.pop()); for (b = 0; e = f[b]; b++) c.push(e);
        f = x.j.filter(f, a);
        x.j.oc = !1; try { for (b = 0; e = f[b]; b++) e.run(a) } finally { x.j.oc = !0 } } };
d.In = function() { this.Gh.length = 0;
    this.rk.length = 0;
    x.j.Kv() };
d.Ad = function(a) { this.Hc.push(a); return a };
d.ug = function(a) { ya(this.Hc, a) };

function Nc(a, b) { return a.Bn[b] || null }

function Yc(a, b) { return a.vl[b] || null }
var zc = Object.create(null);
dd.prototype.clear = dd.prototype.clear;
dd.prototype.clearUndo = dd.prototype.In;
dd.prototype.addChangeListener = dd.prototype.Ad;
dd.prototype.removeChangeListener = dd.prototype.ug;
var jd = !A || 9 <= Number(yb),
    kd = !B && !A || A && 9 <= Number(yb) || B && xb("1.9.1"),
    ld = A && !xb("9");
var md = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };

function nd() { this.Zp = "";
    this.Zu = od } nd.prototype.dg = !0;
nd.prototype.Ge = function() { return this.Zp };
nd.prototype.toString = function() { return "Const{" + this.Zp + "}" };

function pd(a) { return a instanceof nd && a.constructor === nd && a.Zu === od ? a.Zp : "type_error:Const" }
var od = {};

function qd() { this.gt = "";
    this.av = rd } qd.prototype.dg = !0;
qd.prototype.Ge = function() { return this.gt };
qd.prototype.Fo = !0;
qd.prototype.mi = function() { return 1 };
var rd = {};

function sd() { this.qh = "";
    this.Vu = td } sd.prototype.dg = !0;
sd.prototype.Ge = function() { return this.qh };
sd.prototype.Fo = !0;
sd.prototype.mi = function() { return 1 };

function ud(a) { if (a instanceof sd && a.constructor === sd && a.Vu === td) return a.qh;
    ea(a); return "type_error:SafeUrl" }
var vd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function wd(a) { if (a instanceof sd) return a;
    a = a.dg ? a.Ge() : String(a);
    vd.test(a) || (a = "about:invalid#zClosurez"); return xd(a) }
var td = {};

function xd(a) { var b = new sd;
    b.qh = a; return b } xd("about:blank");

function yd() { this.tp = "";
    this.Uu = zd } yd.prototype.dg = !0;
var zd = {};
yd.prototype.Ge = function() { return this.tp };
yd.prototype.fm = function(a) { this.tp = a; return this };
var Ad = (new yd).fm("");

function Bd(a) { var b = "",
        c; for (c in a) { if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c); var e = a[c];
        null != e && (e = u(e) ? ua(e, Cd).join(" ") : Cd(e), b += c + ":" + e + ";") } return b ? (new yd).fm(b) : Ad }

function Cd(a) { if (a instanceof sd) a = 'url("' + ud(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    else if (a instanceof nd) a = pd(a);
    else { a = String(a); var b = a.replace(Dd, "$1").replace(Ed, "url"); if (b = Fd.test(b)) { for (var c = b = !0, e = 0; e < a.length; e++) { var f = a.charAt(e); "'" == f && c ? b = !b : '"' == f && b && (c = !c) } b = b && c } a = b ? Gd(a) : "zClosurez" } return a }
var Fd = /^[-,."'%_!# a-zA-Z0-9]+$/,
    Ed = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    Dd = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

function Gd(a) { return a.replace(Ed, function(a, c, e, f) { var b = "";
        e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) { b = c; return e });
        a = wd(e).Ge(); return c + b + a + b + f }) };

function Id() { this.qh = "";
    this.Tu = Jd;
    this.Gr = null } Id.prototype.Fo = !0;
Id.prototype.mi = function() { return this.Gr };
Id.prototype.dg = !0;
Id.prototype.Ge = function() { return this.qh };

function Kd(a) { if (a instanceof Id && a.constructor === Id && a.Tu === Jd) return a.qh;
    ea(a); return "type_error:SafeHtml" }

function Ld(a) { if (a instanceof Id) return a; var b = null;
    a.Fo && (b = a.mi()); return Md(Ja(a.dg ? a.Ge() : String(a)), b) }
var Nd = /^[a-zA-Z0-9-]+$/,
    Od = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
    Pd = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };

function Qd(a, b, c) {
    var e = String(a);
    if (!Nd.test(e)) throw Error("Invalid tag name <" + e + ">.");
    if (e.toUpperCase() in Pd) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
    a = String(a);
    e = null;
    var f = "<" + a,
        h = "";
    if (b)
        for (n in b) {
            if (!Nd.test(n)) throw Error('Invalid attribute name "' + n + '".');
            var k = b[n];
            if (null != k) {
                var l = a;
                var m = n;
                if (k instanceof nd) k = pd(k);
                else if ("style" == m.toLowerCase()) {
                    if (!ha(k)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k +
                        " given: " + k);
                    k instanceof yd || (k = Bd(k));
                    k instanceof yd && k.constructor === yd && k.Uu === zd ? k = k.tp : (ea(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(m)) throw Error('Attribute "' + m + '" requires goog.string.Const value, "' + k + '" given.');
                    if (m.toLowerCase() in Od)
                        if (k instanceof qd) k instanceof qd && k.constructor === qd && k.av === rd ? k = k.gt : (ea(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof sd) k = ud(k);
                    else if (q(k)) k = wd(k).Ge();
                    else throw Error('Attribute "' + m + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                        k + '" given.');
                }
                k.dg && (k = k.Ge());
                m = m + '="' + Ja(String(k)) + '"';
                h += " " + m
            }
        }
    var n = f + h;
    null != c ? u(c) || (c = [c]) : c = [];
    !0 === md[a.toLowerCase()] ? n += ">" : (c = Rd(c), n += ">" + Kd(c) + "</" + a + ">", e = c.mi());
    (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return Md(n, e)
}

function Rd(a) {
    function b(a) { u(a) ? sa(a, b) : (a = Ld(a), e += Kd(a), a = a.mi(), 0 == c ? c = a : 0 != a && c != a && (c = null)) } var c = 0,
        e = "";
    sa(arguments, b); return Md(e, c) }
var Jd = {};

function Md(a, b) { return (new Id).fm(a, b) } Id.prototype.fm = function(a, b) { this.qh = a;
    this.Gr = b; return this };
Md("<!DOCTYPE html>", 0);
var Sd = Md("", 0),
    Td = Md("<br>", 0);

function Ud(a, b) { a.innerHTML = Kd(b) };

function Vd(a, b) { this.width = a;
    this.height = b } d = Vd.prototype;
d.clone = function() { return new Vd(this.width, this.height) };
d.qv = function() { return this.width * this.height };
d.aspectRatio = function() { return this.width / this.height };
d.ts = function() { return !this.qv() };
d.ceil = function() { this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height); return this };
d.floor = function() { this.width = Math.floor(this.width);
    this.height = Math.floor(this.height); return this };
d.round = function() { this.width = Math.round(this.width);
    this.height = Math.round(this.height); return this };
d.scale = function(a, b) { b = r(b) ? b : a;
    this.width *= a;
    this.height *= b; return this };

function Wd(a) { return a ? new Xd(Yd(a)) : qa || (qa = new Xd) }

function Zd(a, b, c, e) { a = e || a;
    b = b && "*" != b ? String(b).toUpperCase() : ""; if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : "")); if (c && a.getElementsByClassName) { a = a.getElementsByClassName(c); if (b) { e = {}; for (var f = 0, h = 0, k; k = a[h]; h++) b == k.nodeName && (e[f++] = k);
            e.length = f; return e } return a } a = a.getElementsByTagName(b || "*"); if (c) { e = {}; for (h = f = 0; k = a[h]; h++) b = k.className, "function" == typeof b.split && xa(b.split(/\s+/), c) && (e[f++] = k);
        e.length = f; return e } return a }

function $d(a, b) { bb(b, function(b, e) { b && b.dg && (b = b.Ge()); "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : ae.hasOwnProperty(e) ? a.setAttribute(ae[e], b) : Ea(e, "aria-") || Ea(e, "data-") ? a.setAttribute(e, b) : a[e] = b }) }
var ae = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

function be() { var a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body; return new Vd(a.clientWidth, a.clientHeight) }

function ce(a) { var b = de(a);
    a = a.parentWindow || a.defaultView; return A && xb("10") && a.pageYOffset != b.scrollTop ? new D(b.scrollLeft, b.scrollTop) : new D(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop) }

function de(a) { return a.scrollingElement ? a.scrollingElement : C || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement }

function G(a, b, c) { return ee(document, arguments) }

function ee(a, b) { var c = String(b[0]),
        e = b[1]; if (!jd && e && (e.name || e.type)) { c = ["<", c];
        e.name && c.push(' name="', Ja(e.name), '"'); if (e.type) { c.push(' type="', Ja(e.type), '"'); var f = {};
            fb(f, e);
            delete f.type;
            e = f } c.push(">");
        c = c.join("") } c = a.createElement(c);
    e && (q(e) ? c.className = e : u(e) ? c.className = e.join(" ") : $d(c, e));
    2 < b.length && fe(a, c, b, 2); return c }

function fe(a, b, c, e) {
    function f(c) { c && b.appendChild(q(c) ? a.createTextNode(c) : c) } for (; e < c.length; e++) { var h = c[e];!fa(h) || ha(h) && 0 < h.nodeType ? f(h) : sa(ge(h) ? Aa(h) : h, f) } }

function he(a) { for (var b; b = a.firstChild;) a.removeChild(b) }

function ie(a, b) { b.parentNode && b.parentNode.insertBefore(a, b.nextSibling) }

function H(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null }

function je(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }

function Yd(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

function ke(a, b) { if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b) } else he(a), a.appendChild(Yd(a).createTextNode(String(b))) }
var le = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    me = { IMG: " ", BR: "\n" };

function ne(a) { return oe(a) && pe(a) }

function qe(a, b) { b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex")) }

function oe(a) { return A && !xb("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex") }

function pe(a) { a = a.tabIndex; return r(a) && 0 <= a && 32768 > a }

function re(a) { if (ld && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else { var b = [];
        se(a, b, !0);
        a = b.join("") } a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    ld || (a = a.replace(/ +/g, " ")); " " != a && (a = a.replace(/^\s*/, "")); return a }

function te(a) { var b = [];
    se(a, b, !1); return b.join("") }

function se(a, b, c) { if (!(a.nodeName in le))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in me) b.push(me[a.nodeName]);
    else
        for (a = a.firstChild; a;) se(a, b, c), a = a.nextSibling }

function ge(a) { if (a && "number" == typeof a.length) { if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item; if (v(a)) return "function" == typeof a.item } return !1 }

function Xd(a) { this.fd = a || g.document || document } d = Xd.prototype;
d.Yb = Wd;
d.G = function(a) { return q(a) ? this.fd.getElementById(a) : a };
d.getElementsByTagName = function(a, b) { return (b || this.fd).getElementsByTagName(String(a)) };
d.setProperties = $d;
d.T = function(a, b, c) { return ee(this.fd, arguments) };
d.createElement = function(a) { return this.fd.createElement(String(a)) };
d.createTextNode = function(a) { return this.fd.createTextNode(String(a)) };
d.er = function(a, b) { for (var c = this.fd, e = c.createElement("TABLE"), f = e.appendChild(c.createElement("TBODY")), h = 0; h < a; h++) { for (var k = c.createElement("TR"), l = 0; l < b; l++) k.appendChild(c.createElement("TD"));
        f.appendChild(k) } return e };
d.appendChild = function(a, b) { a.appendChild(b) };
d.append = function(a, b) { fe(Yd(a), a, arguments, 1) };
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
d.ot = he;
d.removeNode = H;
d.Vf = function(a) { return kd && void 0 != a.children ? a.children : ta(a.childNodes, function(a) { return 1 == a.nodeType }) };
d.contains = je;
d.qf = function(a) { var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!oe(a) || pe(a)) : ne(a)) && A ? (a = !v(a.getBoundingClientRect) || A && null == a.parentElement ? { height: a.offsetHeight, width: a.offsetWidth } : a.getBoundingClientRect(), a = null != a && 0 < a.height && 0 < a.width) : a = b; return a };

function ue(a, b, c, e, f, h) { this.m = a;
    this.dd = b;
    this.xt = c;
    c = ve;
    this.m.u && (c = -c);
    this.rv = uc(c);
    a.qe.appendChild(this.oj(b, !(!f || !h)));
    this.Bd = e;
    this.wg && we(this);
    f && h || (b = this.dd.getBBox(), f = b.width + 2 * xe, h = b.height + 2 * xe);
    this.yg(f, h);
    we(this);
    ye(this);
    this.wg = !0;
    a.options.readOnly || (x.O(this.hj, "mousedown", this, this.Av), this.Mb && x.O(this.Mb, "mousedown", this, this.zp)) }
var xe = 6,
    ve = 20,
    ze = null,
    Ae = null;
d = ue.prototype;
d.yp = null;

function Be() { ze && (x.Qa(ze), ze = null);
    Ae && (x.Qa(Ae), Ae = null) }

function Ce() { x.Touch.df();
    Be() } d.wg = !1;
d.Bd = null;
d.Ii = 0;
d.tk = 0;
d.ma = 0;
d.Fa = 0;
d.il = !0;
d.oj = function(a, b) {
    this.cd = x.i.B("g", {}, null);
    var c = { filter: "url(#" + this.m.options.Nr + ")" }; - 1 != Ya.indexOf("JavaFX") && (c = {});
    c = x.i.B("g", c, this.cd);
    this.Dn = x.i.B("path", {}, c);
    this.hj = x.i.B("rect", { "class": "blocklyDraggable", x: 0, y: 0, rx: xe, ry: xe }, c);
    b ? (this.Mb = x.i.B("g", { "class": this.m.u ? "blocklyResizeSW" : "blocklyResizeSE" }, this.cd), b = 2 * xe, x.i.B("polygon", { points: "0,x x,x x,0".replace(/x/g, b.toString()) }, this.Mb), x.i.B("line", { "class": "blocklyResizeLine", x1: b / 3, y1: b - 1, x2: b - 1, y2: b / 3 }, this.Mb), x.i.B("line", { "class": "blocklyResizeLine", x1: 2 * b / 3, y1: b - 1, x2: b - 1, y2: 2 * b / 3 }, this.Mb)) : this.Mb = null;
    this.cd.appendChild(a);
    return this.cd
};
d.ha = function() { return this.cd };

function De(a, b) { a.cd.dataset && (a.cd.dataset.fc = b) } d.Av = function(a) { var b = this.m.Ee(a);
    b && (b.Jc || (b.Jc = this), b.Uc = a) };
d.Oi = function() {};
d.lc = function() { return !1 };
d.zp = function(a) { Ee(this);
    Be();
    x.i.jg(a) || (this.m.Vm(a, new D(this.m.u ? -this.ma : this.ma, this.Fa)), ze = x.O(document, "mouseup", this, Ce), Ae = x.O(document, "mousemove", this, this.Ap), x.Qb());
    a.stopPropagation() };
d.Ap = function(a) { this.il = !1;
    a = Fe(this.m, a);
    this.yg(this.m.u ? -a.x : a.x, a.y);
    this.m.u && we(this) };

function Ee(a) { var b = a.cd.parentNode; return b.lastChild !== a.cd ? (b.appendChild(a.cd), !0) : !1 }

function we(a) { var b = a.Bd.x;
    b = a.m.u ? b - (a.Ii + a.ma) : b + a.Ii;
    a.moveTo(b, a.tk + a.Bd.y) } d.moveTo = function(a, b) { this.cd.setAttribute("transform", "translate(" + a + "," + b + ")") };
d.ah = function() { return { width: this.ma, height: this.Fa } };
d.yg = function(a, b) {
    var c = 2 * xe;
    a = Math.max(a, c + 45);
    b = Math.max(b, c + 20);
    this.ma = a;
    this.Fa = b;
    this.hj.setAttribute("width", a);
    this.hj.setAttribute("height", b);
    this.Mb && (this.m.u ? this.Mb.setAttribute("transform", "translate(" + 2 * xe + "," + (b - c) + ") scale(-1 1)") : this.Mb.setAttribute("transform", "translate(" + (a - c) + "," + (b - c) + ")"));
    if (this.wg) {
        if (this.il) {
            a = -this.ma / 4;
            b = -this.Fa - 25;
            c = this.m.ub();
            c.Aa /= this.m.scale;
            c.Cb /= this.m.scale;
            var e = this.Bd.x;
            this.m.u ? e - c.Cb - a - this.ma < I ? a = e - c.Cb - this.ma - I : e - c.Cb - a > c.Aa && (a =
                e - c.Cb - c.Aa) : e + a < c.Cb ? a = c.Cb - e : c.Cb + c.Aa < e + a + this.ma + 10 + I && (a = c.Cb + c.Aa - e - this.ma - I);
            this.Bd.y + b < c.Ve && (b = this.xt.getBBox().height);
            this.Ii = a;
            this.tk = b
        }
        we(this);
        ye(this)
    }
    this.yp && this.yp()
};

function ye(a) {
    var b = [],
        c = a.ma / 2,
        e = a.Fa / 2,
        f = -a.Ii,
        h = -a.tk;
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
            t = a.ah();
        m = (t.width + t.height) / 5;
        m = Math.min(m, t.width, t.height) / 4;
        t = 1 - 8 / k;
        f = c + t * f;
        h = e + t * h;
        t = c + m * p;
        var y = e + m * n;
        c -= m * p;
        e -= m * n;
        n = l + a.rv;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / 4;
        k = Math.cos(n) * k / 4;
        b.push("M" + t + "," + y);
        b.push("C" + (t + k) + "," +
            (y + l) + " " + f + "," + h + " " + f + "," + h);
        b.push("C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e)
    }
    b.push("z");
    a.Dn.setAttribute("d", b.join(" "))
}
d.Ha = function(a) { this.hj.setAttribute("fill", a);
    this.Dn.setAttribute("fill", a) };
d.A = function() { Be();
    H(this.cd);
    this.xt = this.dd = this.m = this.Mb = this.hj = this.Dn = this.cd = null };
d.tm = function(a, b) { a ? a.Ff(b.x, b.y) : this.moveTo(b.x, b.y);
    this.Ii = this.m.u ? this.Bd.x - b.x - this.ma : b.x - this.Bd.x;
    this.tk = b.y - this.Bd.y;
    ye(this) };
d.oa = function() { return new D(this.Bd.x + this.Ii, this.Bd.y + this.tk) };
d.ut = function(a) { this.il = a };

function Ge(a) { Ge.s.constructor.call(this);
    this.fc = a.id;
    this.Kc = a.o.id } w(Ge, Pc);
Ge.prototype.Ca = function() { var a = Ge.s.Ca.call(this);
    a.blockId = this.fc; return a };
Ge.prototype.la = function(a) { Ge.s.Ca.call(this);
    this.fc = a.blockId };

function Dc(a, b, c, e, f) { a && (Dc.s.constructor.call(this, a), this.element = b, this.name = c, this.oldValue = e, this.newValue = f) } w(Dc, Ge);
x.j.Mc = Dc;
d = Dc.prototype;
d.type = x.j.Nh;
d.Ca = function() { var a = Dc.s.Ca.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue; return a };
d.la = function(a) { Dc.s.la.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue };
d.ui = function() { return this.oldValue == this.newValue };
d.run = function(a) {
    var b = Nc(Qc(this), this.fc);
    if (b) switch (b.kd && b.kd.pa(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (b = He(b, this.name)) ? (Ie(b, a), b.setValue(a)) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            b.xf(a || null);
            break;
        case "collapsed":
            b.zg(a);
            break;
        case "disabled":
            b.Pd(a);
            break;
        case "inline":
            b.bc(a);
            break;
        case "mutation":
            var c = "";
            b.Ka && (c = (c = b.Ka()) && x.F.Gd(c));
            if (b.hb) { a = a || "<mutation></mutation>"; var e = x.F.Xc("<xml>" + a + "</xml>");
                b.hb(e.firstChild) } x.j.V(new Dc(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.fc)
};

function Bc(a) { a && (Bc.s.constructor.call(this, a), this.xml = a.o.R ? x.F.Cn(a) : x.F.Rf(a), this.cg = x.j.Ur(a)) } w(Bc, Ge);
x.j.Vk = Bc;
Bc.prototype.type = x.j.Wk;
Bc.prototype.Ca = function() { var a = Bc.s.Ca.call(this);
    a.xml = x.F.Gd(this.xml);
    a.ids = this.cg; return a };
Bc.prototype.la = function(a) { Bc.s.la.call(this, a);
    this.xml = x.F.Xc("<xml>" + a.xml + "</xml>").firstChild;
    this.cg = a.ids };
Bc.prototype.run = function(a) { var b = Qc(this); if (a) a = G("xml"), a.appendChild(this.xml), x.F.ae(a, b);
    else { a = 0; for (var c; c = this.cg[a]; a++) { var e = Nc(b, c);
            e ? e.A(!1, !1) : c == this.fc && console.warn("Can't uncreate non-existent block: " + c) } } };

function Cc(a) { if (a) { if (a.getParent()) throw "Connected blocks cannot be deleted.";
        Cc.s.constructor.call(this, a);
        this.Ix = a.o.R ? x.F.Cn(a) : x.F.Rf(a);
        this.cg = x.j.Ur(a) } } w(Cc, Ge);
x.j.du = Cc;
Cc.prototype.type = x.j.fn;
Cc.prototype.Ca = function() { var a = Cc.s.Ca.call(this);
    a.ids = this.cg; return a };
Cc.prototype.la = function(a) { Cc.s.la.call(this, a);
    this.cg = a.ids };
Cc.prototype.run = function(a) { var b = Qc(this); if (a) { a = 0; for (var c; c = this.cg[a]; a++) { var e = Nc(b, c);
            e ? e.A(!1, !1) : c == this.fc && console.warn("Can't delete non-existent block: " + c) } } else a = G("xml"), a.appendChild(this.Ix), x.F.ae(a, b) };

function Ec(a) { a && (Ec.s.constructor.call(this, a), a = Je(this), this.Ps = a.at, this.Os = a.os, this.$o = a.dr) } w(Ec, Ge);
x.j.Wi = Ec;
d = Ec.prototype;
d.type = x.j.aj;
d.Ca = function() { var a = Ec.s.Ca.call(this);
    this.oh && (a.newParentId = this.oh);
    this.nh && (a.newInputName = this.nh);
    this.pg && (a.newCoordinate = Math.round(this.pg.x) + "," + Math.round(this.pg.y)); return a };
d.la = function(a) { Ec.s.la.call(this, a);
    this.oh = a.newParentId;
    this.nh = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.pg = new D(parseFloat(a[0]), parseFloat(a[1]))) };
d.vf = function() { var a = Je(this);
    this.oh = a.at;
    this.nh = a.os;
    this.pg = a.dr };

function Je(a) { var b = Nc(zc[a.Kc] || null, a.fc);
    a = {}; var c = b.getParent(); if (c) { a.at = c.id;
        a: { for (var e = 0, f; f = c.X[e]; e++)
                if (f.connection && J(f.connection) == b) { b = f; break a } b = null } b && (a.os = b.name) } else a.dr = b.oa(); return a } d.ui = function() { return this.Ps == this.oh && this.Os == this.nh && vc(this.$o, this.pg) };
d.run = function(a) { var b = Qc(this),
        c = Nc(b, this.fc); if (c) { var e = a ? this.oh : this.Ps,
            f = a ? this.nh : this.Os;
        a = a ? this.pg : this.$o; var h = null; if (e && (h = Nc(b, e), !h)) { console.warn("Can't connect to non-existent block: " + e); return } c.getParent() && Ke(c); if (a) f = c.oa(), c.moveBy(a.x - f.x, a.y - f.y);
        else { c = c.M || c.$; if (f) { if (b = K(h, f)) var k = b.connection } else c.type == x.Lf && (k = h.L);
            k ? c.connect(k) : console.warn("Can't connect to non-existent input: " + f) } } else console.warn("Can't move non-existent block: " + this.fc) };

function Ic(a, b, c, e) { Ic.s.constructor.call(this);
    this.fc = a ? a.id : null;
    this.Kc = a ? a.o.id : null;
    this.element = b;
    this.oldValue = c;
    this.newValue = e;
    this.oc = !1 } w(Ic, Pc);
Ic.prototype.type = x.j.un;
Ic.prototype.Ca = function() { var a = Ic.s.Ca.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.fc && (a.blockId = this.fc); return a };
Ic.prototype.la = function(a) { Ic.s.la.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.fc = a.blockId };

function Le(a) { this.U = a } d = Le.prototype;
d.Wq = !0;
d.pn = 17;
d.bb = null;
d.gh = null;

function Me(a) { a.Dc || (a.Dc = x.i.B("g", { "class": "blocklyIconGroup" }, null), a.U.vb && x.i.pb(a.Dc, "blocklyIconGroupReadonly"), a.co(a.Dc), a.U.ha().appendChild(a.Dc), x.O(a.Dc, "mouseup", a, a.Eo), a.If()) } d.A = function() { H(this.Dc);
    this.Dc = null;
    this.pa(!1);
    this.U = null };
d.If = function() {};
d.Y = function() { return !!this.bb };
d.Eo = function(a) { this.U.o.sb() || this.U.vb || x.i.jg(a) || this.pa(!this.Y()) };
d.Hf = function() { this.Y() && this.bb.Ha(this.U.we) };

function Ne(a) { var b = a.U.oa(),
        c = x.i.Bc(a.Dc);
    b = new D(b.x + c.x + a.pn / 2, b.y + c.y + a.pn / 2);
    vc(a.gh, b) || (a.gh = b, a.Y() && (a = a.bb, a.Bd = b, a.wg && we(a))) };
// Copyright 2011 Google Inc.  Apache License 2.0
function Oe(a) { Oe.s.constructor.call(this, a);
    Me(this) } w(Oe, Le);
d = Oe.prototype;
d.ya = "";
d.ma = 160;
d.Fa = 80;
d.co = function(a) { x.i.B("circle", { "class": "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
    x.i.B("path", { "class": "blocklyIconSymbol", d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z" }, a);
    x.i.B("rect", { "class": "blocklyIconSymbol", x: "6.8", y: "10.78", height: "2", width: "2" }, a) };
d.pj = function() {
    this.gd = x.i.B("foreignObject", { x: xe, y: xe }, null);
    var a = document.createElementNS(x.Jf, "body");
    a.setAttribute("xmlns", x.Jf);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(x.Jf, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.U.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.xb = b;
    this.gd.appendChild(a);
    x.O(b, "mouseup", this, this.Ay, !0, !0);
    x.O(b, "wheel", this, function(a) { a.stopPropagation() });
    x.O(b, "change", this, function() {
        this.ya != b.value && (x.j.V(new x.j.Mc(this.U,
            "comment", null, this.ya, b.value)), this.ya = b.value)
    });
    setTimeout(function() { b.focus() }, 0);
    return this.gd
};
d.If = function() { this.Y() && (this.pa(!1), this.pa(!0));
    Le.prototype.If.call(this) };
d.Hm = function() { if (this.Y()) { var a = this.bb.ah(),
            b = 2 * xe;
        this.gd.setAttribute("width", a.width - b);
        this.gd.setAttribute("height", a.height - b);
        this.xb.style.width = a.width - b - 4 + "px";
        this.xb.style.height = a.height - b - 4 + "px" } };
d.pa = function(a) { if (a != this.Y())
        if (x.j.V(new Ic(this.U, "commentOpen", !a, a)), !Pe(this.U) && !this.xb || A) Qe.prototype.pa.call(this, a);
        else { var b = this.Ib(),
                c = this.ah();
            a ? (this.bb = new ue(this.U.o, this.pj(), this.U.Rd, this.gh, this.ma, this.Fa), De(this.bb, this.U.id), a = this.Hm.bind(this), this.bb.yp = a, this.Hf()) : (this.bb.A(), this.gd = this.xb = this.bb = null);
            this.Ob(b);
            this.yg(c.width, c.height) } };
d.Ay = function() { Ee(this.bb) && this.xb.focus() };
d.ah = function() { return this.Y() ? this.bb.ah() : { width: this.ma, height: this.Fa } };
d.yg = function(a, b) { this.xb ? this.bb.yg(a, b) : (this.ma = a, this.Fa = b) };
d.Ib = function() { return this.xb ? this.xb.value : this.ya };
d.Ob = function(a) { this.ya != a && (x.j.V(new x.j.Mc(this.U, "comment", null, this.ya, a)), this.ya = a);
    this.xb && (this.xb.value = a) };
d.A = function() { x.j.isEnabled() && this.Ob("");
    this.U.Ya = null;
    Le.prototype.A.call(this) };

function Re(a, b) { this.v = a;
    this.type = b;
    a.o.Ln && (this.Ed = a.o.Ln[b], this.zl = a.o.Ln[x.Th[b]], this.Do = !this.Ed) } d = Re.prototype;
d.Ia = null;
d.Wd = null;
d.Qe = null;
d.$c = 0;
d.Wa = 0;
d.eg = !1;
d.Ed = null;
d.zl = null;
d.Do = null;
d.wl = function(a) {
    var b = this,
        c = b.v,
        e = a.v;
    a.isConnected() && a.disconnect();
    if (b.isConnected()) {
        var f = J(b),
            h = b.Qe;
        b.Qe = null;
        if (f.jb) h = x.F.Rf(f), f.A(), f = null;
        else if (b.type == x.$a) { if (!f.M) throw "Orphan block does not have an output connection."; var k = Se(e, f);
            k && (f.M.connect(k), f = null) } else if (b.type == x.yb) { if (!f.$) throw "Orphan block does not have a previous connection."; for (k = e; k.L;) { var l = Oc(k); if (l && !l.jb) k = l;
                else { Te(f.$, k.L) && (k.L.connect(f.$), f = null); break } } }
        if (f && (b.disconnect(), x.j.oc)) {
            var m = x.j.Ac();
            setTimeout(function() { f.o && !f.getParent() && (x.j.S(m), f.M ? Ue(f.M, b) : f.$ && Ue(f.$, b), x.j.S(!1)) }, x.Uk)
        }
        b.Qe = h
    }
    var n;
    x.j.isEnabled() && (n = new x.j.Wi(e));
    Ve(b, a);
    e.yh(c);
    n && (n.vf(), x.j.V(n))
};
d.A = function() { if (this.isConnected()) throw "Disconnect connection before disposing of it.";
    this.eg && We(this.Ed, this);
    this.zl = this.Ed = null };

function Xe(a) { return a.type == x.$a || a.type == x.yb } d.isConnected = function() { return !!this.Ia };

function Ye(a, b) { if (!b) return 3; if (Xe(a)) var c = a.v,
        e = b.v;
    else e = a.v, c = b.v; return c && c == e ? 1 : b.type != x.Th[a.type] ? 2 : c && e && c.o !== e.o ? 5 : Te(a, b) ? c.jb && !e.jb ? 6 : 0 : 4 } d.gm = function(a) { if (0 != Ye(this, a)) return !1; if (a.type == x.Vh || a.type == x.Lf)
        if (a.isConnected() || this.isConnected()) return !1; return a.type == x.$a && a.isConnected() && !J(a).Je() && !J(a).jb || this.type == x.Lf && a.isConnected() && !this.v.L && !J(a).jb && J(a).L || -1 != x.Gl.indexOf(a) ? !1 : !0 };
d.connect = function(a) { if (this.Ia != a) { switch (Ye(this, a)) {
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
                throw "Connection checks failed. " + (this + " expected " + this.Wd + ", found " + a.Wd);
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!"; } Xe(this) ? this.wl(a) : a.wl(this) } };

function Ve(a, b) { a.Ia = b;
    b.Ia = a }

function Ze(a, b) { for (var c = !1, e = 0; e < a.X.length; e++) { var f = a.X[e].connection; if (f && f.type == x.$a && Te(b.M, f)) { if (c) return null;
            c = f } } return c }

function Se(a, b) { for (var c; c = Ze(a, b);)
        if (a = J(c), !a || a.jb) return c; return null } d.disconnect = function() { var a = this.Ia; if (Xe(this)) { var b = this.v; var c = a.v;
        a = this } else b = a.v, c = this.v;
    this.Yn(b, c);
    a.Cp() };
d.Yn = function(a, b) { var c;
    x.j.isEnabled() && (c = new x.j.Wi(b));
    this.Ia = this.Ia.Ia = null;
    b.yh(null);
    c && (c.vf(), x.j.V(c)) };
d.Cp = function() { var a = this.v,
        b = this.Qe; if (a.o && b && x.j.oc)
        if (a = x.F.gi(b, a.o), a.M) this.connect(a.M);
        else if (a.$) this.connect(a.$);
    else throw "Child block does not have output or previous statement."; };

function J(a) { return a.isConnected() ? a.Ia.v : null }

function Te(a, b) { if (!a.Wd || !b.Wd) return !0; for (var c = 0; c < a.Wd.length; c++)
        if (-1 != b.Wd.indexOf(a.Wd[c])) return !0; return !1 } d.Rs = function() { this.isConnected() && !Te(this, this.Ia) && Ke(Xe(this) ? J(this) : this.v) };
d.Ua = function(a) { a ? (u(a) || (a = [a]), this.Wd = a, this.Rs()) : this.Wd = null; return this };
d.Ms = function() { return [] };
d.toString = function() { var a = this.v; if (a)
        if (a.M == this) var b = "Output Connection of ";
        else if (a.$ == this) b = "Previous Connection of ";
    else if (a.L == this) b = "Next Connection of ";
    else if (b = wa(a.X, function(a) { return a.connection == this }, this)) b = 'Input "' + b.name + '" connection on ';
    else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
    else return "Orphan Connection"; return b + $e(a) };

function af() {} af.prototype = [];

function bf(a, b) { if (b.eg) throw "Connection already in database.";
    b.v.vb || (a.splice(cf(a, b), 0, b), b.eg = !0) }

function df(a, b) { if (!a.length) return -1; var c = cf(a, b); if (c >= a.length) return -1; for (var e = b.Wa, f = c; 0 <= f && a[f].Wa == e;) { if (a[f] == b) return f;
        f-- } for (; c < a.length && a[c].Wa == e;) { if (a[c] == b) return c;
        c++ } return -1 }

function cf(a, b) { if (!a.length) return 0; for (var c = 0, e = a.length; c < e;) { var f = Math.floor((c + e) / 2); if (a[f].Wa < b.Wa) c = f + 1;
        else if (a[f].Wa > b.Wa) e = f;
        else { c = f; break } } return c }

function We(a, b) { if (!b.eg) throw "Connection not in database."; var c = df(a, b); if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.eg = !1;
    a.splice(c, 1) }

function ef(a, b, c) {
    function e(a) { var b = h - f[a].$c,
            e = k - f[a].Wa;
        Math.sqrt(b * b + e * e) <= c && m.push(f[a]); return e < c } var f = a,
        h = b.$c,
        k = b.Wa;
    a = 0; for (var l = b = f.length - 2; a < l;) f[l].Wa < k ? a = l : b = l, l = Math.floor((a + b) / 2); var m = [];
    b = a = l; if (f.length) { for (; 0 <= a && e(a);) a--;
        do b++; while (b < f.length && e(b)) } return m };
x.tC = {};
x.qq = 5;
x.pu = 10;
x.bd = 20;
x.Uk = 250;
x.eu = 30;
x.Iu = 750;
x.Wu = 100;
x.ou = !0;
x.yu = .45;
x.zu = .65;
x.tc = { width: 96, height: 124, url: "sprites.png" };
x.sn = "http://www.w3.org/2000/svg";
x.Jf = "http://www.w3.org/1999/xhtml";
x.$a = 1;
x.Vh = 2;
x.yb = 3;
x.Lf = 4;
x.We = 5;
x.Vi = -1;
x.Sk = 0;
x.Lg = 1;
x.Rz = 0;
x.Sz = 1;
x.Pz = 1;
x.Qz = 2;
x.Th = [];
x.Th[x.$a] = x.Vh;
x.Th[x.Vh] = x.$a;
x.Th[x.yb] = x.Lf;
x.Th[x.Lf] = x.yb;
x.Nf = 0;
x.Pg = 1;
x.Mf = 2;
x.se = 3;
x.nq = null;
x.gn = 1;
x.oq = 2;
x.zq = "VARIABLE";
x.bv = "VARIABLE_DYNAMIC";
x.xq = "PROCEDURE";
x.yq = "RENAME_VARIABLE_ID";
x.pq = "DELETE_VARIABLE_ID";
x.Ja = {};
x.Ja.Zn = 0;
x.Ja.Dl = null;
x.Ja.lw = function(a) { var b = a.o,
        c = a.ha();
    b.Pf.play("delete");
    a = ff(b, c);
    c = c.cloneNode(!0);
    c.Ey = a.x;
    c.Fy = a.y;
    c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    L(b).appendChild(c);
    c.Iq = c.getBBox();
    x.Ja.Ir(c, b.u, new Date, b.scale) };
x.Ja.Ir = function(a, b, c, e) { var f = (new Date - c) / 150;
    1 < f ? H(a) : (a.setAttribute("transform", "translate(" + (a.Ey + (b ? -1 : 1) * a.Iq.width * e / 2 * f) + "," + (a.Fy + a.Iq.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(x.Ja.Ir, 10, a, b, c, e)) };
x.Ja.Rv = function(a) { var b = a.o,
        c = b.scale;
    b.Pf.play("click"); if (!(1 > c)) { var e = ff(b, a.ha());
        a.M ? (e.x += (a.u ? 3 : -3) * c, e.y += 13 * c) : a.$ && (e.x += (a.u ? -23 : 23) * c, e.y += 3 * c);
        a = x.i.B("circle", { cx: e.x, cy: e.y, r: 0, fill: "none", stroke: "#888", "stroke-width": 10 }, L(b));
        x.Ja.$q(a, new Date, c) } };
x.Ja.$q = function(a, b, c) { var e = (new Date - b) / 150;
    1 < e ? H(a) : (a.setAttribute("r", 25 * e * c), a.style.opacity = 1 - e, x.Ja.Zn = setTimeout(x.Ja.$q, 10, a, b, c)) };
x.Ja.kw = function(a) { a.o.Pf.play("disconnect"); if (!(1 > a.o.scale)) { var b = a.Hb().height;
        b = Math.atan(10 / b) / Math.PI * 180;
        a.u || (b *= -1);
        x.Ja.Hr(a.ha(), b, new Date) } };
x.Ja.Hr = function(a, b, c) { var e = (new Date - c) / 200;
    1 < e ? a.Ah = "" : (a.Ah = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")", x.Ja.Dl = a, x.Ja.Zn = setTimeout(x.Ja.Hr, 10, a, b, c));
    a.setAttribute("transform", a.Gf + a.Ah) };
x.Ja.$n = function() { if (x.Ja.Dl) { clearTimeout(x.Ja.Zn); var a = x.Ja.Dl;
        a.Ah = "";
        a.setAttribute("transform", a.Gf);
        x.Ja.Dl = null } };

function gf(a, b) { gf.s.constructor.call(this, a, b);
    this.xm = new D(0, 0) } w(gf, Re);

function hf(a, b) { var c = a.$c - b.$c;
    a = a.Wa - b.Wa; return Math.sqrt(c * c + a * a) }

function Ue(a, b) { if (!a.v.o.sb()) { var c = jf(a.v); if (!c.vb) { var e = !1; if (!c.Je()) { c = jf(b.v); if (!c.Je()) return;
                b = a;
                e = !0 } var f = x.selected == c;
            f || c.Zh(); var h = b.$c + x.bd - a.$c;
            a = b.Wa + x.bd - a.Wa;
            e && (a = -a);
            c.u && (h = -h);
            c.moveBy(h, a);
            f || c.uh() } } } d = gf.prototype;
d.moveTo = function(a, b) { this.eg && We(this.Ed, this);
    this.$c = a;
    this.Wa = b;
    this.Do || bf(this.Ed, this) };
d.moveBy = function(a, b) { this.moveTo(this.$c + a, this.Wa + b) };

function kf(a, b) { a.moveTo(b.x + a.xm.x, b.y + a.xm.y) }

function lf(a, b, c) { a.xm.x = b;
    a.xm.y = c }

function mf(a) { var b = a.Ia.$c - a.$c,
        c = a.Ia.Wa - a.Wa; if (0 != b || 0 != c) { a = J(a); var e = a.ha(); if (!e) throw "block is not rendered.";
        e = x.i.Bc(e);
        a.ha().setAttribute("transform", "translate(" + (e.x - b) + "," + (e.y - c) + ")");
        nf(a, -b, -c) } }
d.closest = function(a, b) { var c = this.zl; if (c.length) { var e = this.Wa,
            f = this.$c;
        this.$c = f + b.x;
        this.Wa = e + b.y; var h = cf(c, this);
        b = null; for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Wa - this.Wa) <= a;) l = c[m], this.gm(l, k) && (b = l, k = hf(l, this)), m--; for (; h < c.length && Math.abs(c[h].Wa - this.Wa) <= a;) l = c[h], this.gm(l, k) && (b = l, k = hf(l, this)), h++;
        this.$c = f;
        this.Wa = e;
        a = { connection: b, mt: k } } else a = { connection: null, mt: a }; return a };
d.ks = function() { var a = this.type == x.$a || this.type == x.Vh ? "m 0,0 " + of +" v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5"; var b = this.v.oa();
    Re.ls = x.i.B("path", { "class": "blocklyHighlightedConnectionPath", d: a, transform: "translate(" + (this.$c - b.x) + "," + (this.Wa - b.y) + ")" + (this.v.u ? " scale(-1 1)" : "") }, this.v.ha()) };

function pf(a) { qf(a, !1); var b = []; if (a.type != x.$a && a.type != x.yb) return b; if (a = J(a)) { if (a.isCollapsed()) { var c = [];
            a.M && c.push(a.M);
            a.L && c.push(a.L);
            a.$ && c.push(a.$) } else c = a.De(!0); for (var e = 0; e < c.length; e++) b.push.apply(b, pf(c[e]));
        b.length || (b[0] = a) } return b }

function rf() { H(Re.ls);
    delete Re.ls }

function qf(a, b) {
    (a.Do = b) && a.eg ? We(a.Ed, a) : b || a.eg || bf(a.Ed, a) } d.gm = function(a, b) { return hf(this, a) > b ? !1 : gf.s.gm.call(this, a) };
d.Yn = function(a, b) { gf.s.Yn.call(this, a, b);
    a.R && a.aa();
    b.R && (sf(b), b.aa()) };
d.Cp = function() { var a = this.v,
        b = this.Qe; if (a.o && b && x.j.oc) { gf.s.Cp.call(this);
        b = J(this); if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.Ec();
        b.aa(!1);
        a.R && a.aa() } };
d.Ms = function(a) { return ef(this.zl, this, a) };
d.wl = function(a) { gf.s.wl.call(this, a); var b = this.v;
    a = a.v;
    b.R && sf(b);
    a.R && sf(a);
    b.R && a.R && (this.type == x.yb || this.type == x.Lf ? a.aa() : b.aa()) };
d.Rs = function() { this.isConnected() && !Te(this, this.Ia) && (Ke(Xe(this) ? J(this) : this.v), this.v.qb()) };

function tf(a) { this.Fg = x.selected = a;
    this.m = a.o;
    a = this.Fg.De(!1); var b;
    a: { for (b = this.Fg.L; b;) { var c = J(b); if (!c) break a;
            b = c.L } b = null } b && b != this.Fg.L && a.push(b);
    this.An = a;
    this.zi = this.jc = null;
    this.up = 0;
    this.Kg = !1 } tf.prototype.A = function() { this.m = this.Fg = null;
    this.An.length = 0;
    this.zi = this.jc = null };
tf.prototype.update = function(a, b) { var c = this.jc,
        e = this.jc;
    this.zi = this.jc = null;
    this.up = x.bd; for (var f = 0; f < this.An.length; f++) { var h = this.An[f],
            k = h.closest(this.up, a);
        k.connection && (this.jc = k.connection, this.zi = h, this.up = k.mt) }(a = e != this.jc) && c && rf();
    c = !!this.jc && b != x.oq;
    this.Kg = (b = !!b && !this.Fg.getParent() && this.Fg.lc()) && !c;
    b && this.jc && (rf(), this.jc = null);!this.Kg && a && this.jc && this.jc && this.jc.ks() };

function uf(a, b) { this.ib = a;
    this.m = b;
    this.ii = new tf(this.ib);
    this.Vg = null;
    this.Kg = !1;
    this.Se = this.ib.oa();
    b = [];
    a = Ac(a, !1); for (var c = 0, e; e = a[c]; c++) { e = vf(e); for (var f = 0; f < e.length; f++) b.push({ location: e[f].gh, icon: e[f] }) } this.Fl = b } uf.prototype.A = function() { this.lb = this.m = this.ib = null;
    this.Fl.length = 0;
    this.ii && (this.ii.A(), this.ii = null) };

function wf(a, b, c) { c = a.Ei(c);
    a.ib.tm(yc(a.Se, c)); for (var e = 0; e < a.Fl.length; e++) { var f = a.Fl[e],
            h = f.icon;
        f = yc(f.location, c);
        h.gh = f;
        h.Y() && (h = h.bb, h.Bd = f, h.wg && we(h)) } a.Vg = xf(a.m, b);
    a.ii.update(c, a.Vg);
    a.Kg = a.ii.Kg;
    b = a.m.Yc;
    a.Kg ? (a.ib.Ak(!0), a.Vg == x.gn && b && yf(b, !0)) : (a.ib.Ak(!1), b && yf(b, !1)) }

function zf(a, b, c) { wf(a, b, c);
    a.Fl = [];
    x.Ja.$n();
    b = a.Ei(c);
    a.ib.Js(yc(a.Se, b));
    c = a.m.Yc;
    a.Kg ? (c && Af(c.close, 100, c), a.Aj(), a.ib.A(!1, !0)) : c && c.close();
    a.Kg || (nf(a.ib, b.x, b.y), a.ib.Ag(!1), b = a.ii, b.jc && (b.zi.connect(b.jc), b.Fg.R && (x.Ja.Rv((Xe(b.zi) ? b.jc : b.zi).v), Bf(jf(b.Fg))), b.jc && rf()), a.ib.aa(), a.Aj(), Cf(a.ib));
    a.m.Tb(!0);
    (b = a.m.ga) && x.i.Rb(b.Nc, a.ib.lc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    x.j.S(!1) } uf.prototype.Aj = function() { var a = new x.j.Wi(this.ib);
    a.$o = this.Se;
    a.vf();
    x.j.V(a) };
uf.prototype.Ei = function(a) { a = new D(a.x / this.m.scale, a.y / this.m.scale);
    this.m.ak && (a = a.scale(1 / this.m.options.Lb.scale)); return a };

function Df(a, b, c, e, f) { this.w = x.i.B("g", { "class": "blocklyComment" }, null);
    this.w.Gf = "";
    this.Ik = x.i.B("rect", { "class": "blocklyCommentRect", x: 0, y: 0, rx: 3, ry: 3 });
    this.w.appendChild(this.Ik);
    this.wg = !1;
    this.Ue = x.i.hg() && !!a.Ab;
    Df.s.constructor.call(this, a, b, c, e, f);
    this.aa() } w(Df, Zc);
d = Df.prototype;
d.A = function() { if (this.o) { if (x.selected == this) { this.Hh(); var a = this.o;
            a.Eb && a.Eb.cancel() } x.j.isEnabled() && x.j.V(new Mc(this));
        H(this.w);
        this.Dh = this.Eg = this.gd = this.xb = this.Ik = this.w = null;
        x.j.disable();
        Df.s.A.call(this);
        x.j.enable() } };
d.Ec = function() { this.o.options.readOnly || this.fo || (x.O(this.Eg, "mousedown", this, this.bt), x.O(this.Dh, "mousedown", this, this.bt));
    this.fo = !0;
    Ef(this);
    this.ha().parentNode || this.o.qe.appendChild(this.ha()) };
d.bt = function(a) { var b = this.o.Ee(a);
    b && (b.Jc || (b.Jc = this), b.Uc = a) };
d.Oi = function(a) { if (!this.o.options.readOnly) { var b = [];
        this.lc() && this.Je() && (b.push(x.ea.Ov(this)), b.push(x.ea.Nv(this)));
        x.ea.show(a, b, this.u) } };
d.select = function() { if (x.selected != this) { var a = null; if (x.selected) { a = x.selected.id;
            x.j.disable(); try { x.selected.Hh() } finally { x.j.enable() } } a = new Ic(null, "selected", a, this.id);
        a.Kc = this.o.id;
        x.j.V(a);
        x.selected = this;
        this.Zh() } };
d.Hh = function() { if (x.selected == this) { var a = new Ic(null, "selected", this.id, null);
        a.Kc = this.o.id;
        x.j.V(a);
        x.selected = null;
        this.uh();
        Ff(this) } };
d.Zh = function() { x.i.pb(this.w, "blocklySelected");
    this.Lp() };
d.uh = function() { x.i.Rb(this.w, "blocklySelected");
    Ff(this) };
d.oa = function() { var a = 0,
        b = 0,
        c = this.Ue ? this.o.Ab.Ac() : null,
        e = this.ha(); if (e) { do { var f = x.i.Bc(e);
            a += f.x;
            b += f.y;
            this.Ue && this.o.Ab.ye.firstChild == e && (f = this.o.Ab.Yl(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.qe && e != c) } return this.vd = new D(a, b) };
d.moveBy = function(a, b) { var c = new Lc(this),
        e = this.oa();
    this.translate(e.x + a, e.y + b);
    this.vd = new D(e.x + a, e.y + b);
    c.vf();
    x.j.V(c);
    Gf(this.o) };
d.translate = function(a, b) { this.vd = new D(a, b);
    this.ha().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.um = function() { if (this.Ue) { var a = this.oa();
        x.i.removeAttribute(this.ha(), "transform");
        this.o.Ab.Ff(a.x, a.y);
        Hf(this.o.Ab, this.ha()) } };
d.Js = function(a) { this.Ue && (this.translate(a.x, a.y), this.o.Ab.jj(this.o.Va)) };
d.tm = function(a, b) { a ? a.Ff(b.x, b.y) : (this.w.Gf = "translate(" + b.x + "," + b.y + ")", this.w.setAttribute("transform", this.w.Gf + this.w.Ah)) };
d.moveTo = function(a, b) { this.translate(a, b) };
d.no = function() { var a = this.oa(),
        b = this.Hb(); if (this.u) { var c = new D(a.x - b.width, a.y);
        a = new D(a.x, a.y + b.height) } else c = new D(a.x, a.y), a = new D(a.x + b.width, a.y + b.height); return { rd: c, Ud: a } };

function Ef(a) { a.Je() ? x.i.pb(a.w, "blocklyDraggable") : x.i.Rb(a.w, "blocklyDraggable") } d.xh = function(a) { Df.s.xh.call(this, a);
    Ef(this) };
d.Ag = function(a) { a ? (a = this.ha(), a.Gf = "", a.Ah = "", x.i.pb(this.w, "blocklyDragging")) : x.i.Rb(this.w, "blocklyDragging") };
d.ha = function() { return this.w };
d.Rc = function() { return this.xb ? this.xb.value : this.dd };
d.Od = function(a) { Df.s.Od.call(this, a);
    this.xb && (this.xb.value = a) };
d.Ak = function(a) { a ? x.i.pb(this.w, "blocklyDraggingDelete") : x.i.Rb(this.w, "blocklyDraggingDelete") };
d.ut = function() {};

function If(a, b, c) { x.j.disable(); try { var e = bd(a),
            f = new Df(b, e.content, e.Zr, e.Ut, e.id);
        b.R && (f.Ec(), f.aa(!1)); if (!isNaN(e.x) && !isNaN(e.y))
            if (b.u) { var h = c || b.hd();
                f.moveBy(h - e.x, e.y) } else f.moveBy(e.x, e.y) } finally { x.j.enable() } $c(f); return f }
d.Jk = function(a) { var b;
    this.o.u && (b = this.o.hd());
    a = ad(this, a); var c = this.oa();
    a.setAttribute("x", Math.round(this.o.u ? b - c.x : c.x));
    a.setAttribute("y", Math.round(c.y));
    a.setAttribute("h", this.ni());
    a.setAttribute("w", this.hd()); return a };

function Jf(a, b) { this.Fb = a;
    this.m = b;
    this.Vg = null;
    this.an = !1;
    this.Se = this.Fb.oa();
    this.Xg = x.i.hg() && b.Ab ? b.Ab : null } Jf.prototype.A = function() { this.Xg = this.m = this.Fb = null };

function Kf(a, b, c) { c = a.Ei(c);
    a.Fb.tm(a.Xg, yc(a.Se, c));
    a.Fb.lc() && (a.Vg = xf(a.m, b), a.an = a.Vg != x.nq, b = a.m.Yc, a.an ? (a.Fb.Ak(!0), a.Vg == x.gn && b && yf(b, !0)) : (a.Fb.Ak(!1), b && yf(b, !1))) }

function Lf(a, b, c) { Kf(a, b, c);
    b = a.Ei(c);
    b = yc(a.Se, b);
    a.Fb.moveTo(b.x, b.y);
    b = a.m.Yc;
    a.an ? (b && Af(b.close, 100, b), a.Aj(), a.Fb.A(!1, !0)) : b && b.close();
    a.an || (a.Xg && a.Xg.jj(a.m.qe), a.Fb.Ag && a.Fb.Ag(!1), a.Aj());
    a.m.Tb(!0);
    a.m.ga && x.i.Rb(a.m.ga.Nc, a.Fb.lc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    x.j.S(!1) } Jf.prototype.Aj = function() { if (this.Fb.rs) { var a = new Lc(this.Fb);
        a.ap = this.Se;
        a.vf();
        x.j.V(a) } };
Jf.prototype.Ei = function(a) { a = new D(a.x / this.m.scale, a.y / this.m.scale);
    this.m.ak && (a = a.scale(1 / this.m.options.Lb.scale)); return a };
Jf.prototype.um = function() { this.Fb.moveTo(0, 0);
    this.Xg.Ff(this.Se.x, this.Se.y);
    Hf(this.Xg, this.Fb.ha()) };

function Mf(a) { this.m = a;
    this.ty = a.ub();
    this.vy = new D(a.scrollX, a.scrollY) } Mf.prototype.A = function() { this.m = null };
Mf.prototype.Vm = function() { x.selected && x.selected.Hh();
    Nf(this.m) };

function Of(a, b) { var c = a.ty,
        e = yc(a.vy, b);
    b = Math.min(e.x, -c.Pc);
    e = Math.min(e.y, -c.vc);
    b = Math.max(b, c.Aa - c.Pc - c.Qc);
    e = Math.max(e, c.fb - c.vc - c.uc);
    b = -b - c.Pc;
    e = -e - c.vc;
    a.Pt(b, e) } Mf.prototype.Pt = function(a, b) { this.m.kb.set(a, b) };

function Pf(a) { Pf.s.constructor.call(this, a.Lj());
    this.$b = a.$b;
    this.ge = a.ge } w(Pf, Mf);
Pf.prototype.Pt = function(a, b) { this.ge ? this.$b.set(a) : this.$b.set(b) };
x.C = {};
x.C.visible = !1;
x.C.ai = !1;
x.C.Cu = 50;
x.C.Is = 0;
x.C.Dk = 0;
x.C.Po = 0;
x.C.Qo = 0;
x.C.P = null;
x.C.Am = null;
x.C.uq = 0;
x.C.vq = 10;
x.C.Ru = 10;
x.C.xu = 750;
x.C.hn = 5;
x.C.na = null;
x.C.T = function() { x.C.na || (x.C.na = G("DIV", "blocklyTooltipDiv"), document.body.appendChild(x.C.na)) };
x.C.Rg = function(a) { x.Oc(a, "mouseover", null, x.C.Xx);
    x.Oc(a, "mouseout", null, x.C.Wx);
    a.addEventListener("mousemove", x.C.Vx, !1) };
x.C.Xx = function(a) { if (!x.C.ai) { for (a = a.target; !q(a.qd) && !v(a.qd);) a = a.qd;
        x.C.P != a && (x.C.Pa(), x.C.Am = null, x.C.P = a);
        clearTimeout(x.C.Is) } };
x.C.Wx = function() { x.C.ai || (x.C.Is = setTimeout(function() { x.C.P = null;
        x.C.Am = null;
        x.C.Pa() }, 1), clearTimeout(x.C.Dk)) };
x.C.Vx = function(a) { if (x.C.P && x.C.P.qd && !x.K.Y() && !x.C.ai)
        if (x.C.visible) { var b = x.C.Po - a.pageX;
            a = x.C.Qo - a.pageY;
            Math.sqrt(b * b + a * a) > x.C.Ru && x.C.Pa() } else x.C.Am != x.C.P && (clearTimeout(x.C.Dk), x.C.Po = a.pageX, x.C.Qo = a.pageY, x.C.Dk = setTimeout(x.C.ly, x.C.xu)) };
x.C.Pa = function() { x.C.visible && (x.C.visible = !1, x.C.na && (x.C.na.style.display = "none"));
    x.C.Dk && clearTimeout(x.C.Dk) };
x.C.block = function() { x.C.Pa();
    x.C.ai = !0 };
x.C.Gy = function() { x.C.ai = !1 };
x.C.ly = function() {
    if (!x.C.ai && (x.C.Am = x.C.P, x.C.na)) {
        he(x.C.na);
        for (var a = x.C.P.qd; v(a);) a = a();
        a = x.i.Yt(a, x.C.Cu);
        a = a.split("\n");
        for (var b = 0; b < a.length; b++) { var c = document.createElement("div");
            c.appendChild(document.createTextNode(a[b]));
            x.C.na.appendChild(c) } a = x.C.P.u;
        b = be();
        x.C.na.style.direction = a ? "rtl" : "ltr";
        x.C.na.style.display = "block";
        x.C.visible = !0;
        c = x.C.Po;
        c = a ? c - (x.C.uq + x.C.na.offsetWidth) : c + x.C.uq;
        var e = x.C.Qo + x.C.vq;
        e + x.C.na.offsetHeight > b.height + window.scrollY && (e -= x.C.na.offsetHeight +
            2 * x.C.vq);
        a ? c = Math.max(x.C.hn - window.scrollX, c) : c + x.C.na.offsetWidth > b.width + window.scrollX - 2 * x.C.hn && (c = b.width - x.C.na.offsetWidth - 2 * x.C.hn);
        x.C.na.style.top = e + "px";
        x.C.na.style.left = c + "px"
    }
};

function Qf(a, b) { this.lb = this.cc = this.Bh = this.Ch = this.Jc = this.wc = this.Hs = null;
    this.Uv = b;
    this.Zj = this.jh = this.$j = this.eh = !1;
    this.Uc = a;
    this.J = this.Jg = this.$e = this.af = this.zm = this.ym = null;
    this.im = this.hs = !1;
    this.js = !x.ou } d = Qf.prototype;
d.A = function() { x.Touch.df();
    x.C.Gy();
    this.Uv.Eb = null;
    this.ym && x.Qa(this.ym);
    this.zm && x.Qa(this.zm);
    this.J = this.lb = this.cc = this.Bh = this.Ch = null;
    this.$e && (this.$e.A(), this.$e = null);
    this.Jg && (this.Jg.A(), this.Jg = null);
    this.af && (this.af.A(), this.af = null) };

function Rf(a, b) {
    a.wc = xc(new D(b.clientX, b.clientY), a.Hs);
    if (a.eh) var c = !1;
    else c = a.wc, a.eh = Math.sqrt(c.x * c.x + c.y * c.y) > (a.J ? x.pu : x.qq), c = a.eh;
    if (c) {
        if (a.Jc) { a.Zj = !0;
            a.af = new Jf(a.Jc, a.lb);
            c = a.af;
            x.j.Ac() || x.j.S(!0);
            c.m.Tb(!1);
            c.Fb.ut(!1);
            c.Xg && c.um();
            c.Fb.Ag && c.Fb.Ag(!0); var e = c.m.ga;
            e && x.i.pb(e.Nc, c.Fb.lc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            Kf(a.af, a.Uc, a.wc);
            c = !0 } else c = !1;
        if (!c) {
            if (a.cc)
                if (a.J ? (a.cc.disabled ? c = !1 : !Sf(a.J) || a.J.ss(a.wc) ? (a.lb = a.J.xa, Tf(a.lb), x.j.Ac() || x.j.S(!0), a.Bh =
                        null, a.cc = Uf(a.J, a.cc), a.cc.select(), c = !0) : c = !1, a.jh = c) : a.cc.Je() && (a.jh = !0), a.jh) { a.$e = new uf(a.cc, a.lb);
                    c = a.$e;
                    e = a.wc; var f = a.js;
                    x.j.Ac() || x.j.S(!0);
                    c.m.Tb(!1);
                    x.Ja.$n(); if (c.ib.getParent() || f && c.ib.L && J(c.ib.L)) Ke(c.ib, f), e = c.Ei(e), e = yc(c.Se, e), c.ib.translate(e.x, e.y), x.Ja.kw(c.ib);
                    c.ib.Ag(!0);
                    c.ib.um();
                    (e = c.m.ga) && x.i.pb(e.Nc, c.ib.lc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                    wf(a.$e, a.Uc, a.wc);
                    c = !0 } else c = !1;
            else c = !1;
            !c && (a.J ? Sf(a.J) : a.lb && a.lb.kb) && (a.Jg = a.J ? new Pf(a.J) : new Mf(a.lb), a.$j = !0, a.Jg.Vm())
        }
        x.mg()
    }
    a.Uc = b
}
d.wj = function(a) { x.i.km(a) ? this.cancel() : (this.hs = !0, x.Ja.$n(), Tf(this.lb), this.lb.ak && this.lb.resize(), Vf(this.lb), this.Uc = a, x.Qb(!!this.J), x.C.block(), this.cc && this.cc.select(), x.i.jg(a) ? rc(this, a) : (("touchstart" == a.type.toLowerCase() || "pointerdown" == a.type.toLowerCase() && "mouse" != a.pointerType) && x.xx(a, this), this.Hs = new D(a.clientX, a.clientY), this.js = a.altKey || a.ctrlKey || a.metaKey, this.Rg(a))) };
d.Rg = function(a) { this.ym = x.O(document, "mousemove", null, this.Qj.bind(this));
    this.zm = x.O(document, "mouseup", null, this.am.bind(this));
    a.preventDefault();
    a.stopPropagation() };
d.Qj = function(a) { Rf(this, a);
    this.$j ? Of(this.Jg, this.wc) : this.jh ? wf(this.$e, this.Uc, this.wc) : this.Zj && Kf(this.af, this.Uc, this.wc);
    a.preventDefault();
    a.stopPropagation() };
d.am = function(a) {
    Rf(this, a);
    x.mg();
    if (this.im) console.log("Trying to end a gesture recursively.");
    else {
        this.im = !0;
        if (this.Zj) Lf(this.af, a, this.wc);
        else if (this.jh) zf(this.$e, a, this.wc);
        else if (this.$j) { var b = this.Jg;
            Of(b, this.wc);
            Wf(b.m) } else this.Jc && !this.eh ? (this.Jc.Lp && this.Jc.Lp(), this.Jc.select && this.Jc.select()) : Xf(this) ? (this.Ch.Re(), Yf(this)) : !this.Bh || this.eh || Xf(this) ? this.Bh || this.Jc || this.Ch || this.eh || x.selected && x.selected.Hh() : (this.J && this.J.$h ? this.cc.disabled || (x.j.Ac() || x.j.S(!0),
            Cf(Uf(this.J, this.cc))) : x.j.V(new Ic(this.Bh, "click", void 0, void 0)), Yf(this), x.j.S(!1));
        a.preventDefault();
        a.stopPropagation();
        this.A()
    }
};
d.cancel = function() { if (!this.im) { x.mg(); if (this.Zj) Lf(this.af, this.Uc, this.wc);
        else if (this.jh) zf(this.$e, this.Uc, this.wc);
        else if (this.$j) { var a = this.Jg;
            Of(a, this.wc);
            Wf(a.m) } this.A() } };

function rc(a, b) { a.cc ? (Yf(a), x.Qb(a.J), a.cc.Oi(b)) : a.Jc ? a.Jc.Oi(b) : a.lb && !a.J && (x.Qb(), a.lb.Oi(b));
    b.preventDefault();
    b.stopPropagation();
    a.A() }

function Yf(a) { a.cc && !a.J && Bf(a.cc) }

function Zf(a, b) { a.Bh || a.Jc || (a.Bh = b, b.vb && b != jf(b) ? $f(a, jf(b)) : $f(a, b)) }

function $f(a, b) { b.jb ? $f(a, b.getParent()) : a.cc = b }

function Xf(a) { if (a.Ch) { var b = a.Ch;
        b = b.Mg && !!b.v && Pe(b.v) } else b = !1; return b && !a.eh && (!a.J || !a.J.$h) } d.sb = function() { return this.$j || this.jh || this.Zj };
x.i = {};
x.i.removeAttribute = function(a, b) { A && xb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b) };
x.i.pb = function(a, b) { var c = a.getAttribute("class") || ""; if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c && (c += " ");
    a.setAttribute("class", c + b); return !0 };
x.i.Rb = function(a, b) { var c = a.getAttribute("class"); if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c = c.split(/\s+/); for (var e = 0; e < c.length; e++) c[e] && c[e] != b || (c.splice(e, 1), e--);
    c.length ? a.setAttribute("class", c.join(" ")) : x.i.removeAttribute(a, "class"); return !0 };
x.i.ds = function(a, b) { return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ") };
x.i.Gx = function(a) { a.preventDefault();
    a.stopPropagation() };
x.i.km = function(a) { return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable };
x.i.Bc = function(a) { var b = new D(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10)); if (c = a.getAttribute("y")) b.y = parseInt(c, 10); if (c = (c = a.getAttribute("transform")) && c.match(x.i.Bc.fv)) b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && ((c = a.match(x.i.Bc.dv)) || (c = a.match(x.i.Bc.ev)), c && (b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3])))); return b };
x.i.Sl = function(a) { for (var b = 0, c = 0; a;) { var e = x.i.Bc(a);
        b += e.x;
        c += e.y; if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode } return new D(b, c) };
x.i.Bc.fv = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
x.i.Bc.ev = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
x.i.Bc.dv = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
x.i.B = function(a, b, c) { a = document.createElementNS(x.sn, a); for (var e in b) a.setAttribute(e, b[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a); return a };
x.i.jg = function(a) { return a.ctrlKey && ob ? !0 : 2 == a.button };
x.i.kk = function(a, b, c) { var e = b.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    c || (c = b.getScreenCTM().inverse()); return e.matrixTransform(c) };
x.i.Sp = function(a) { return a.length ? a.reduce(function(a, c) { return a.length < c.length ? a : c }).length : 0 };
x.i.Pv = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || x.i.Sp(a); for (var e = 0; e < b; e++) { for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c; return b };
x.i.Qv = function(a, b) { if (!a.length) return 0; if (1 == a.length) return a[0].length; var c = 0;
    b = b || x.i.Sp(a); for (var e = 0; e < b; e++) { for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c; " " == f && (c = e + 1) } for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c; return b };
x.i.By = function(a) { return x.i.cq(a, !0) };
x.i.pc = function(a) { if (!q(a)) return a;
    a = x.i.cq(a, !1); return a.length ? a[0] : "" };
x.i.Pq = function(a) { for (var b = x.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e;) { var f = e[1];
        f = f.toUpperCase(); "BKY_" != f.substr(0, 4) ? console.log("WARNING: Unsupported message table prefix in %{" + e[1] + "}.") : void 0 == b[f.substr(4)] && console.log("WARNING: No message string for %{" + e[1] + "}.");
        a = a.substring(e.index + f.length + 1);
        e = c.exec(a) } };
x.i.cq = function(a, b) {
    var c = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && c.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : b && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && c.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (c.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[a-zA-Z][a-zA-Z0-9_]*/.test(f) ? (l = f.toUpperCase(), (l = Ea(l, "BKY_") ?
            l.substring(4) : null) && l in x.g ? (f = x.g[l], q(f) ? Array.prototype.push.apply(c, x.i.cq(f, b)) : b ? c.push(String(f)) : c.push(f)) : c.push("%{" + f + "}")) : c.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && c.push(l);
    b = [];
    for (k = a.length = 0; k < c.length; ++k) "string" == typeof c[k] ? a.push(c[k]) : ((l = a.join("")) && b.push(l), a.length = 0, b.push(c[k]));
    (l = a.join("")) && b.push(l);
    a.length = 0;
    return b
};
x.i.Be = function() { for (var a = x.i.Be.zt.length, b = [], c = 0; 20 > c; c++) b[c] = x.i.Be.zt.charAt(Math.random() * a); return b.join("") };
x.i.Be.zt = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
x.i.Yt = function(a, b) { a = a.split("\n"); for (var c = 0; c < a.length; c++) a[c] = x.i.Qy(a[c], b); return a.join("\n") };
x.i.Qy = function(a, b) { if (a.length <= b) return a; for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++) c[e].length > b && (b = c[e].length);
    e = -Infinity; var f = 1;
    do { var h = e; var k = a;
        a = []; var l = c.length / f,
            m = 1; for (e = 0; e < c.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = x.i.Zt(c, a, b);
        e = x.i.hq(c, a, b);
        a = x.i.Ry(c, a);
        f++ } while (e > h); return k };
x.i.hq = function(a, b, c) { for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === b[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === b[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e); for (h = b = 0; h < e.length; h++) b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5), b -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? b += c / 3 : -1 != ",;)]}".indexOf(f[h]) && (b += c / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += .5); return b };
x.i.Zt = function(a, b, c) { for (var e = x.i.hq(a, b, c), f, h = 0; h < b.length - 1; h++)
        if (b[h] != b[h + 1]) { var k = [].concat(b);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1]; var l = x.i.hq(a, k, c);
            l > e && (e = l, f = k) } return f ? x.i.Zt(a, f, c) : b };
x.i.Ry = function(a, b) { for (var c = [], e = 0; e < a.length; e++) c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " "); return c.join("") };
x.i.hg = function() {
    if (void 0 !== x.i.hg.Fn) return x.i.hg.Fn;
    if (!g.getComputedStyle) return !1;
    var a = document.createElement("p"),
        b = "none",
        c = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
    document.body.insertBefore(a, null);
    for (var e in c)
        if (void 0 !== a.style[e]) { a.style[e] = "translate3d(1px,1px,1px)";
            b = g.getComputedStyle(a); if (!b) return document.body.removeChild(a), !1;
            b = b.getPropertyValue(c[e]) } document.body.removeChild(a);
    x.i.hg.Fn = "none" !== b;
    return x.i.hg.Fn
};
x.i.Xj = function(a, b) { var c = b.nextSibling;
    b = b.parentNode; if (!b) throw "Reference node has no parent.";
    c ? b.insertBefore(a, c) : b.appendChild(a) };
x.i.st = function(a) { if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document."); if ("complete" === document.readyState) a();
    else var b = setInterval(function() { "complete" === document.readyState && (clearInterval(b), a()) }, 10) };
x.i.zk = function(a, b) { a.style.transform = b;
    a.style["-webkit-transform"] = b };
x.i.xo = function() { var a = be(),
        b = ag(); return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x } };

function bg(a, b) { this.pi = a;
    this.Xp = b.spacing;
    this.xs = b.length;
    this.sx = (this.So = a.firstChild) && this.So.nextSibling;
    this.ny = b.snap } bg.prototype.xg = 1;
bg.prototype.A = function() { this.pi = null };
bg.prototype.update = function(a) { this.xg = a; var b = this.Xp * a || 100;
    this.pi.setAttribute("width", b);
    this.pi.setAttribute("height", b);
    b = Math.floor(this.Xp / 2) + .5; var c = b - this.xs / 2,
        e = b + this.xs / 2;
    b *= a;
    c *= a;
    e *= a;
    cg(this.So, a, c, e, b, b);
    cg(this.sx, a, b, b, c, e) };

function cg(a, b, c, e, f, h) { a && (a.setAttribute("stroke-width", b), a.setAttribute("x1", c), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h)) } bg.prototype.moveTo = function(a, b) { this.pi.setAttribute("x", a);
    this.pi.setAttribute("y", b);
    (A || mb) && this.update(this.xg) };

function dg(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        e = !1,
        f = !1,
        h = !1,
        k = !1,
        l = !1,
        m = !1;
    else c = eg(a.toolbox), e = !(!c || !c.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = e), h = a.collapse, void 0 === h && (h = e), k = a.comments, void 0 === k && (k = e), l = a.disable, void 0 === l && (l = e), m = a.sounds, void 0 === m && (m = !0);
    var n = !!a.rtl,
        p = a.horizontalLayout;
    void 0 === p && (p = !1);
    var t = a.toolboxPosition;
    t = "end" === t ? !1 : !0;
    t = p ? t ? x.Nf : x.Pg : t == n ? x.se : x.Mf;
    var y = a.scrollbars;
    void 0 === y && (y = e);
    var z = a.css;
    void 0 === z && (z = !0);
    var E = "https://blockly-demo.appspot.com/static/media/";
    a.media ? E = a.media : a.path && (E = a.path + "media/");
    var Fa = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
    this.u = n;
    this.Le = Fa;
    this.collapse = h;
    this.lj = k;
    this.disable = l;
    this.readOnly = b;
    this.Ds = a.maxBlocks || Infinity;
    this.le = E;
    this.bs = e;
    this.gs = y;
    this.$w = f;
    this.Zw = m;
    this.Yw = z;
    this.He = p;
    this.Ke = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.rC = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.IC = 0 < c.spacing && !!b.snap;
    this.Xr = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.Oy = void 0 === a.wheel ? !1 : !!a.wheel;
    b.Ft = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.ik = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.jk = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.jy = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.dc = b;
    this.Ea = t
}
dg.prototype.Lb = null;
dg.prototype.Bg = null;
dg.prototype.ub = null;

function eg(a) { a ? ("string" != typeof a && ("undefined" == typeof XSLTProcessor && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = x.F.Xc(a))) : a = null; return a };

function fg(a) { this.m = a;
    this.Yf = new gg(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.Hg = new gg(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.nj = x.i.B("rect", { height: I, width: I, "class": "blocklyScrollbarBackground" }, null);
    x.i.Xj(this.nj, a.qe) } fg.prototype.eb = null;
fg.prototype.A = function() { H(this.nj);
    this.eb = this.m = this.nj = null;
    this.Yf.A();
    this.Yf = null;
    this.Hg.A();
    this.Hg = null };
fg.prototype.resize = function() {
    var a = this.m.ub();
    if (a) {
        var b = !1,
            c = !1;
        this.eb && this.eb.Aa == a.Aa && this.eb.fb == a.fb && this.eb.zb == a.zb && this.eb.ob == a.ob ? (this.eb && this.eb.Qc == a.Qc && this.eb.Cb == a.Cb && this.eb.Pc == a.Pc || (b = !0), this.eb && this.eb.uc == a.uc && this.eb.Ve == a.Ve && this.eb.vc == a.vc || (c = !0)) : c = b = !0;
        b && this.Yf.resize(a);
        c && this.Hg.resize(a);
        this.eb && this.eb.Aa == a.Aa && this.eb.ob == a.ob || this.nj.setAttribute("x", this.Hg.Wc.x);
        this.eb && this.eb.fb == a.fb && this.eb.zb == a.zb || this.nj.setAttribute("y", this.Yf.Wc.y);
        this.eb = a
    }
};
fg.prototype.set = function(a, b) { var c = {};
    a *= this.Yf.nc;
    b *= this.Hg.nc; var e = this.Hg.Md,
        f = a / this.Yf.Md;
    c.x = isNaN(f) ? 0 : f;
    e = b / e;
    c.y = isNaN(e) ? 0 : e;
    this.m.Bg(c);
    hg(this.Yf, a);
    hg(this.Hg, b) };

function gg(a, b, c, e) {
    this.m = a;
    this.Di = c || !1;
    this.fh = b;
    this.eb = null;
    this.oj(e);
    this.Wc = new D(0, 0);
    a = I;
    b ? (this.pd.setAttribute("height", a), this.Me.setAttribute("height", a), this.Te.setAttribute("height", a - 5), this.Te.setAttribute("y", 2.5), this.fk = "width", this.dt = "x") : (this.pd.setAttribute("width", a), this.Me.setAttribute("width", a), this.Te.setAttribute("width", a - 5), this.Te.setAttribute("x", 2.5), this.fk = "height", this.dt = "y");
    this.Ws = x.O(this.pd, "mousedown", this, this.Sx);
    this.Xs = x.O(this.Te, "mousedown",
        this, this.Tx)
}
var ig, jg;
d = gg.prototype;
d.ip = new D(0, 0);
d.Ct = 0;
d.Md = 0;
d.Zf = 0;
d.Rj = 0;
d.dk = !0;
d.Sg = !0;
var I = 15;
Db && (I = 25);
gg.prototype.A = function() { kg();
    x.Qa(this.Ws);
    this.Ws = null;
    x.Qa(this.Xs);
    this.Xs = null;
    H(this.Me);
    this.m = this.Te = this.pd = this.w = this.Me = null };

function hg(a, b) { a.Rj = b;
    a.Te.setAttribute(a.dt, a.Rj) }

function lg(a, b) { a.Md = b;
    a.Me.setAttribute(a.fk, a.Md);
    a.pd.setAttribute(a.fk, a.Md) } fg.prototype.wh = function(a) { this.Yf.wh(a);
    this.Hg.wh(a) };

function mg(a, b, c) { a.Wc.x = b;
    a.Wc.y = c;
    x.i.zk(a.Me, "translate(" + (a.Wc.x + a.ip.x) + "px," + (a.Wc.y + a.ip.y) + "px)") } d = gg.prototype;
d.resize = function(a) {
    if (!a && (a = this.m.ub(), !a)) return;
    var b = this.eb;
    if (!a || !b || a.Aa != b.Aa || a.fb != b.fb || a.Cb != b.Cb || a.Ve != b.Ve || a.zb != b.zb || a.ob != b.ob || a.Qc != b.Qc || a.uc != b.uc || a.Pc != b.Pc || a.vc != b.vc) {
        this.eb = a;
        if (this.fh) {
            b = a.Aa - 1;
            this.Di && (b -= I);
            lg(this, Math.max(0, b));
            b = a.ob + .5;
            this.Di && this.m.u && (b += I);
            mg(this, b, a.zb + a.fb - I - .5);
            this.Di || this.pa(this.Md < a.Qc);
            this.nc = this.Md / a.Qc;
            if (-Infinity == this.nc || Infinity == this.nc || isNaN(this.nc)) this.nc = 0;
            this.Zf = Math.max(0, a.Aa * this.nc);
            this.Te.setAttribute(this.fk,
                this.Zf);
            hg(this, ng(this, (a.Cb - a.Pc) * this.nc))
        } else { b = a.fb - 1;
            this.Di && (b -= I);
            lg(this, Math.max(0, b));
            b = a.ob + .5;
            this.m.u || (b += a.Aa - I - 1);
            mg(this, b, a.zb + .5);
            this.Di || this.pa(this.Md < a.uc);
            this.nc = this.Md / a.uc; if (-Infinity == this.nc || Infinity == this.nc || isNaN(this.nc)) this.nc = 0;
            this.Zf = Math.max(0, a.fb * this.nc);
            this.Te.setAttribute(this.fk, this.Zf);
            hg(this, ng(this, (a.Ve - a.vc) * this.nc)) } og(this)
    }
};
d.oj = function(a) { var b = "blocklyScrollbar" + (this.fh ? "Horizontal" : "Vertical");
    a && (b += " " + a);
    this.Me = x.i.B("svg", { "class": b }, null);
    this.w = x.i.B("g", {}, this.Me);
    this.pd = x.i.B("rect", { "class": "blocklyScrollbarBackground" }, this.w);
    a = Math.floor((I - 5) / 2);
    this.Te = x.i.B("rect", { "class": "blocklyScrollbarHandle", rx: a, ry: a }, this.w);
    x.i.Xj(this.Me, L(this.m)) };
d.Y = function() { return this.dk };
d.wh = function(a) { var b = a != this.Sg;
    this.Sg = a;
    b && this.Nk() };
d.pa = function(a) { var b = a != this.Y(); if (this.Di) throw "Unable to toggle visibility of paired scrollbars.";
    this.dk = a;
    b && this.Nk() };
d.Nk = function() { this.Sg && this.Y() ? this.Me.setAttribute("display", "block") : this.Me.setAttribute("display", "none") };
d.Sx = function(a) { Vf(this.m);
    x.Touch.df();
    kg(); if (x.i.jg(a)) a.stopPropagation();
    else { var b = x.i.kk(a, L(this.m), pg(this.m));
        b = this.fh ? b.x : b.y; var c = x.i.Sl(this.Te);
        c = this.fh ? c.x : c.y; var e = this.Rj,
            f = .95 * this.Zf;
        b <= c ? e -= f : b >= c + this.Zf && (e += f);
        hg(this, ng(this, e));
        og(this);
        a.stopPropagation();
        a.preventDefault() } };
d.Tx = function(a) { Vf(this.m);
    kg();
    x.i.jg(a) ? a.stopPropagation() : (this.sy = this.Rj, Nf(this.m), this.Ct = this.fh ? a.clientX : a.clientY, ig = x.O(document, "mouseup", this, this.Yx), jg = x.O(document, "mousemove", this, this.Ux), a.stopPropagation(), a.preventDefault()) };
d.Ux = function(a) { hg(this, ng(this, this.sy + ((this.fh ? a.clientX : a.clientY) - this.Ct)));
    og(this) };
d.Yx = function() { Wf(this.m);
    x.Touch.df();
    kg() };

function kg() { x.Qb(!0);
    ig && (x.Qa(ig), ig = null);
    jg && (x.Qa(jg), jg = null) }

function ng(a, b) { return b = 0 >= b || isNaN(b) || a.Md < a.Zf ? 0 : Math.min(b, a.Md - a.Zf) }

function og(a) { var b = a.Rj / a.Md;
    isNaN(b) && (b = 0); var c = {};
    a.fh ? c.x = b : c.y = b;
    a.m.Bg(c) } d.set = function(a) { hg(this, ng(this, a * this.nc));
    og(this) };

function qg(a, b) { qg.s.constructor.call(this, a, b);
    this.jm = !1;
    this.Dd = {};
    this.Bt = this.pk = 0;
    this.hp = null } w(qg, Qf);
d = qg.prototype;
d.wj = function(a) { qg.s.wj.call(this, a);!this.im && x.Touch.lm(a) && rg(this, a) };
d.Rg = function(a) { this.hp = x.O(document, "mousedown", null, this.Rw.bind(this), !0);
    this.ym = x.O(document, "mousemove", null, this.Qj.bind(this), !0);
    this.zm = x.O(document, "mouseup", null, this.am.bind(this), !0);
    a.preventDefault();
    a.stopPropagation() };
d.Rw = function(a) {!this.sb() && x.Touch.lm(a) && (rg(this, a), this.jm && x.mg()) };
d.Qj = function(a) { if (this.sb()) x.Touch.Tp(a) && qg.s.Qj.call(this, a);
    else if (this.jm) { if (x.Touch.lm(a)) { this.Dd[x.Touch.Zl(a)] = sg(this, a); var b = Object.keys(this.Dd); if (2 == b.length) { b = wc(this.Dd[b[0]], this.Dd[b[1]]) / this.Bt; if (0 < this.pk && Infinity > this.pk) { var c = b - this.pk;
                    c = 0 < c ? 5 * c : 6 * c; var e = this.lb,
                        f = x.i.kk(a, L(e), pg(e));
                    e.zoom(f.x, f.y, c) } this.pk = b;
                a.preventDefault() } } x.mg() } else qg.s.Qj.call(this, a) };
d.am = function(a) { if (x.Touch.lm(a) && !this.sb()) { var b = x.Touch.Zl(a);
        this.Dd[b] && delete this.Dd[b];
        2 > Object.keys(this.Dd).length && (this.Dd = {}, this.pk = 0) }!this.jm || this.sb() ? x.Touch.Tp(a) && qg.s.am.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.A()) };
d.A = function() { qg.s.A.call(this);
    this.hp && x.Qa(this.hp) };

function rg(a, b) { a.Dd[x.Touch.Zl(b)] = sg(a, b); var c = Object.keys(a.Dd);
    2 == c.length && (a.Bt = wc(a.Dd[c[0]], a.Dd[c[1]]), a.jm = !0, b.preventDefault()) }

function sg(a, b) { return a.lb ? new D(b.pageX ? b.pageX : b.changedTouches[0].pageX, b.pageY ? b.pageY : b.changedTouches[0].pageY) : null };

function tg() { Hb.call(this);
    this.jf = new Zb(this);
    this.hv = this;
    this.kp = null } w(tg, Hb);
tg.prototype[Ub] = !0;
d = tg.prototype;
d.Wl = function() { return this.kp };
d.Pm = function(a) { this.kp = a };
d.addEventListener = function(a, b, c, e) { ec(this, a, b, c, e) };
d.removeEventListener = function(a, b, c, e) { mc(this, a, b, c, e) };
d.dispatchEvent = function(a) { var b, c = this.Wl(); if (c)
        for (b = []; c; c = c.Wl()) b.push(c);
    c = this.hv; var e = a.type || a; if (q(a)) a = new Mb(a, c);
    else if (a instanceof Mb) a.target = a.target || c;
    else { var f = a;
        a = new Mb(e, c);
        fb(a, f) } f = !0; if (b)
        for (var h = b.length - 1; !a.rh && 0 <= h; h--) { var k = a.currentTarget = b[h];
            f = ug(k, e, !0, a) && f } a.rh || (k = a.currentTarget = c, f = ug(k, e, !0, a) && f, a.rh || (f = ug(k, e, !1, a) && f)); if (b)
        for (h = 0; !a.rh && h < b.length; h++) k = a.currentTarget = b[h], f = ug(k, e, !1, a) && f; return f };
d.Na = function() { tg.s.Na.call(this);
    this.removeAllListeners();
    this.kp = null };
d.ia = function(a, b, c, e) { return this.jf.add(String(a), b, !1, c, e) };
d.zs = function(a, b, c, e) { return this.jf.add(String(a), b, !0, c, e) };
d.sd = function(a, b, c, e) { return this.jf.remove(String(a), b, c, e) };
d.removeAllListeners = function(a) { return this.jf ? this.jf.removeAll(a) : 0 };

function ug(a, b, c, e) { b = a.jf.Gc[String(b)]; if (!b) return !0;
    b = b.concat(); for (var f = !0, h = 0; h < b.length; ++h) { var k = b[h]; if (k && !k.Ji && k.capture == c) { var l = k.listener,
                m = k.bm || k.src;
            k.kl && ac(a.jf, k);
            f = !1 !== l.call(m, e) && f } } return f && 0 != e.rt } d.Fj = function(a, b, c, e) { return this.jf.Fj(String(a), b, c, e) };

function Af(a, b, c) { if (v(a)) c && (a = na(a, c));
    else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
    else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0) };

function vg(a, b, c, e) { this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e } d = vg.prototype;
d.hd = function() { return this.right - this.left };
d.ni = function() { return this.bottom - this.top };
d.clone = function() { return new vg(this.top, this.right, this.bottom, this.left) };
d.contains = function(a) { return this && a ? a instanceof vg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1 };
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

function wg(a, b, c, e) { this.left = a;
    this.top = b;
    this.width = c;
    this.height = e } d = wg.prototype;
d.clone = function() { return new wg(this.left, this.top, this.width, this.height) };
d.contains = function(a) { return a instanceof D ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height };
d.nf = function() { return new Vd(this.width, this.height) };
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

function xg(a) { this.m = a } d = xg.prototype;
d.Qg = 47;
d.Tk = 44;
d.Oh = 16;
d.jn = 20;
d.Yi = 20;
d.$k = 10;
d.qn = 0;
d.rn = 32;
d.wi = !1;
d.w = null;
d.Xm = null;
d.Ro = 0;
d.lg = 0;
d.Jb = 0;
d.Ef = 0;
d.T = function() {
    this.w = x.i.B("g", { "class": "blocklyTrash" }, null);
    var a = String(Math.random()).substring(2);
    var b = x.i.B("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.w);
    x.i.B("rect", { width: this.Qg, height: this.Tk, y: this.Oh }, b);
    x.i.B("image", { width: x.tc.width, x: -this.qn, height: x.tc.height, y: -this.rn, "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")" }, this.w).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.le + x.tc.url);
    b = x.i.B("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.w);
    x.i.B("rect", { width: this.Qg, height: this.Oh }, b);
    this.Xm = x.i.B("image", { width: x.tc.width, x: -this.qn, height: x.tc.height, y: -this.rn, "clip-path": "url(#blocklyTrashLidClipPath" + a + ")" }, this.w);
    this.Xm.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.le + x.tc.url);
    x.O(this.w, "mouseup", this, this.click);
    this.xn();
    return this.w
};
d.I = function(a) { this.gj = this.jn + a;
    yf(this, !1); return this.gj + this.Tk + this.Oh };
d.A = function() { this.w && (H(this.w), this.w = null);
    this.m = this.Xm = null;
    g.clearTimeout(this.Ro) };
d.position = function() { var a = this.m.ub();
    a && (this.m.u ? (this.Jb = this.Yi + I, a.Ea == x.Mf && (this.Jb += a.Kl, this.m.ga && (this.Jb += a.ob))) : (this.Jb = a.Aa + a.ob - this.Qg - this.Yi - I, a.Ea == x.se && (this.Jb -= a.Kl)), this.Ef = a.fb + a.zb - (this.Tk + this.Oh) - this.gj, a.Ea == x.Pg && (this.Ef -= a.Qr), this.w.setAttribute("transform", "translate(" + this.Jb + "," + this.Ef + ")")) };
d.ki = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(); return new wg(a.left + this.qn - this.$k, a.top + this.rn - this.$k, this.Qg + 2 * this.$k, this.Oh + this.Tk + 2 * this.$k) };

function yf(a, b) { a.wi != b && (g.clearTimeout(a.Ro), a.wi = b, a.xn()) }
d.xn = function() { this.lg += this.wi ? .2 : -.2;
    this.lg = sc(this.lg, 0, 1); var a = 45 * this.lg;
    this.Xm.setAttribute("transform", "rotate(" + (this.m.u ? -a : a) + "," + (this.m.u ? 4 : this.Qg - 4) + "," + (this.Oh - 2) + ")");
    this.w.style.opacity = .4 + .4 * this.lg;
    0 < this.lg && 1 > this.lg && (this.Ro = Af(this.xn, 20, this)) };
d.close = function() { yf(this, !1) };
d.click = function() { var a = this.m.uy - this.m.scrollX,
        b = this.m.wy - this.m.scrollY;
    Math.sqrt(a * a + b * b) > x.qq || console.log("TODO: Inspect trash.") };

function Vc(a, b, c, e) { this.o = a;
    this.name = b;
    this.type = c || "";
    this.ag = e || x.i.Be();
    x.j.V(new Fc(this)) } Vc.prototype.ba = function() { return this.ag };

function yg(a, b) { a = String(a.name).toLowerCase();
    b = String(b.name).toLowerCase(); return a < b ? -1 : a == b ? 0 : 1 };
x.H = {};
x.H.Sa = x.zq;
x.H.Gq = function(a) { var b = Tc(a);
    a = Object.create(null); for (var c = 0; c < b.length; c++) { var e = b[c].Wf(); if (e)
            for (var f = 0; f < e.length; f++) { var h = e[f];
                h.ba() && (a[h.ba()] = h) } } b = []; for (var k in a) b.push(a[k]); return b };
x.H.mC = function() { console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.") };
x.H.kv = function(a) { var b = Tc(a);
    a = {}; for (var c = 0; c < b.length; c++) { var e = b[c]; if (e.Aw) { e = e.Aw(); for (var f = 0; f < e.length; f++) a[e[f]] = e[f] } } b = []; for (var h in a) b.push(a[h]); return b };
x.H.Uf = function(a) { var b = [],
        c = G("button");
    c.setAttribute("text", x.g.NEW_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE");
    zg(a, function(a) { x.H.bi(a.xa) });
    b.push(c);
    a = x.H.io(a); return b = b.concat(a) };
x.H.io = function(a) {
    a = a.Kj("");
    a.sort(yg);
    var b = [];
    if (0 < a.length) {
        var c = a[0];
        if (x.D.variables_set) { var e = x.D.math_change ? 8 : 24;
            e = '<xml><block type="variables_set" gap="' + e + '">' + x.H.ji(c) + "</block></xml>";
            e = x.F.Xc(e).firstChild;
            b.push(e) } x.D.math_change && (e = x.D.variables_get ? 20 : 8, e = '<xml><block type="math_change" gap="' + e + '">' + x.H.ji(c) + '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>', e = x.F.Xc(e).firstChild, b.push(e));
        for (c = 0; e = a[c]; c++) x.D.variables_get &&
            (e = '<xml><block type="variables_get" gap="8">' + x.H.ji(e) + "</block></xml>", e = x.F.Xc(e).firstChild, b.push(e))
    }
    return b
};
x.H.xw = function(a) { a = a.kf(); var b = ""; if (a.length)
        for (var c = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !b;) { for (var h = !1, k = 0; k < a.length; k++)
                if (a[k].name.toLowerCase() == f) { h = !0; break } h ? (e++, 25 == e && (e = 0, c++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < c && (f += c)) : b = f } else b = "i"; return b };
x.H.bi = function(a, b, c) {
    function e(c) { x.H.jt(x.g.NEW_VARIABLE_TITLE, c, function(c) { if (c) { var h = x.H.Dx(c, a); if (h) { var k = c.toLowerCase(); if (h.type == f) var n = x.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
                    else n = x.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", k).replace("%2", h.type);
                    x.alert(n, function() { e(c) }) } else a.ed(c, f), b && b(c) } else b && b(null) }) } var f = c || "";
    e("") };
ba("Blockly.Variables.createVariableButtonHandler", x.H.bi);
x.H.ed = x.H.bi;
ba("Blockly.Variables.createVariable", x.H.ed);
x.H.xp = function(a, b) {
    function c(e) { var f = x.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
        x.H.jt(f, e, function(e) { if (e) { var f = x.H.Ex(e, b.type, a);
                f ? (f = x.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", e.toLowerCase()).replace("%2", f.type), x.alert(f, function() { c(e) })) : a.vh(b.ba(), e) } }) } c("") };
x.H.jt = function(a, b, c) { x.prompt(a, b, function(a) { a && (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), a == x.g.RENAME_VARIABLE || a == x.g.NEW_VARIABLE) && (a = null);
        c(a) }) };
x.H.Ex = function(a, b, c) { c = c.ua.kf();
    a = a.toLowerCase(); for (var e = 0, f; f = c[e]; e++)
        if (f.name.toLowerCase() == a && f.type != b) return f; return null };
x.H.Dx = function(a, b) { b = b.ua.kf();
    a = a.toLowerCase(); for (var c = 0, e; e = b[c]; c++)
        if (e.name.toLowerCase() == a) return e; return null };
x.H.ji = function(a) { var b = a.type; "" == b && (b = "''"); return '<field name="VAR" id="' + a.ba() + '" variabletype="' + Ja(b) + '">' + Ja(a.name) + "</field>" };
x.H.Sr = function(a) { a = "<xml>" + x.H.ji(a) + "</xml>"; return x.F.Xc(a).firstChild };
x.H.Vl = function(a, b, c, e) { var f = x.H.Sc(a, b, c, e);
    f || (f = x.H.Tv(a, b, c, e)); return f };
x.H.Sc = function(a, b, c, e) { var f = a.Gi; if (b) { var h = a.fe(b);!h && f && (h = f.fe(b)) } else if (c) { if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.Sc(c, e);!h && f && (h = f.Sc(c, e)) } return h };
x.H.Tv = function(a, b, c, e) { var f = a.Gi;
    c || (c = x.H.xw(a.je ? a.Fh : a)); return f ? f.ed(c, e, b) : a.ed(c, e, b) };
x.H.Tr = function(a, b) { a = a.kf(); var c = []; if (b.length != a.length)
        for (var e = 0; e < a.length; e++) { var f = a[e]; - 1 == b.indexOf(f) && c.push(f) }
    return c };
x.zd = {};
x.zd.Mx = function(a) { x.H.bi(a.xa, null, "String") };
x.zd.Lx = function(a) { x.H.bi(a.xa, null, "Number") };
x.zd.Kx = function(a) { x.H.bi(a.xa, null, "Colour") };
x.zd.Uf = function(a) {
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
    a.Zg.CREATE_VARIABLE_STRING = x.zd.Mx;
    a.Zg.CREATE_VARIABLE_NUMBER = x.zd.Lx;
    a.Zg.CREATE_VARIABLE_COLOUR =
        x.zd.Kx;
    a = x.zd.io(a);
    return b = b.concat(a)
};
x.zd.io = function(a) { a = a.kf();
    a.sort(yg); var b = []; if (0 < a.length) { if (x.D.variables_set_dynamic) { var c = '<xml><block type="variables_set_dynamic" gap="24">' + x.H.ji(a[0]) + "</block></xml>";
            c = x.F.Xc(c).firstChild;
            b.push(c) } if (x.D.variables_get_dynamic)
            for (var e = 0; c = a[e]; e++) c = '<xml><block type="variables_get_dynamic" gap="8">' + x.H.ji(c) + "</block></xml>", c = x.F.Xc(c).firstChild, b.push(c) } return b };

function Ag(a) { this.lp = a;
    this.ej = Object.create(null) } d = Ag.prototype;
d.Oo = null;
d.A = function() { this.ej = this.lp = null };
d.load = function(a, b) { if (a.length) { try { var c = new window.Audio } catch (l) { return } for (var e, f = 0; f < a.length; f++) { var h = a[f],
                k = h.match(/\.(\w+)$/); if (k && c.canPlayType("audio/" + k[1])) { e = new window.Audio(h); break } } e && e.play && (this.ej[b] = e) } };
d.preload = function() { for (var a in this.ej) { var b = this.ej[a];
        b.volume = .01;
        b.play();
        b.pause(); if (rb || qb) break } };
d.play = function(a, b) { var c = this.ej[a];
    c ? (a = new Date, null != this.Oo && a - this.Oo < x.Wu || (this.Oo = a, c = yb && 9 === yb || rb || pb ? c : c.cloneNode(), c.volume = void 0 === b ? 1 : b, c.play())) : this.lp && this.lp.Pf.play(a, b) };
d = Df.prototype;
d.Hb = function() { return { width: this.hd(), height: this.ni() } };
d.aa = function() {
    if (!this.wg) {
        var a = this.Hb();
        this.pj();
        this.w.appendChild(this.gd);
        this.Dh = x.i.B("rect", { "class": "blocklyCommentHandleTarget", x: 0, y: 0 });
        this.w.appendChild(this.Dh);
        this.Eg = x.i.B("rect", { "class": "blocklyCommentTarget", x: 0, y: 0, rx: 3, ry: 3 });
        this.w.appendChild(this.Eg);
        this.Mb = x.i.B("g", { "class": this.u ? "blocklyResizeSW" : "blocklyResizeSE" }, this.w);
        x.i.B("polygon", { points: "0,x x,x x,0".replace(/x/g, (8).toString()) }, this.Mb);
        x.i.B("line", {
            "class": "blocklyResizeLine",
            x1: 8 / 3,
            y1: 7,
            x2: 7,
            y2: 8 /
                3
        }, this.Mb);
        x.i.B("line", { "class": "blocklyResizeLine", x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 }, this.Mb);
        this.lc() && (this.Sf = x.i.B("g", { "class": "blocklyCommentDeleteIcon" }, this.w), this.Br = x.i.B("circle", { "class": "blocklyDeleteIconShape", r: "7", cx: "7.5", cy: "7.5" }, this.Sf), x.i.B("line", { x1: "5", y1: "10", x2: "10", y2: "5", stroke: "#fff", "stroke-width": "2" }, this.Sf), x.i.B("line", { x1: "5", y1: "5", x2: "10", y2: "10", stroke: "#fff", "stroke-width": "2" }, this.Sf));
        Bg(this, a.width, a.height);
        this.xb.value = this.dd;
        this.wg = !0;
        this.Mb && x.O(this.Mb,
            "mousedown", this, this.zp);
        this.lc() && (x.O(this.Sf, "mousedown", this, this.ew), x.O(this.Sf, "mouseout", this, this.fw), x.O(this.Sf, "mouseup", this, this.gw))
    }
};
d.pj = function() { this.gd = x.i.B("foreignObject", { x: 0, y: 10, "class": "blocklyCommentForeignObject" }, null); var a = document.createElementNS(x.Jf, "body");
    a.setAttribute("xmlns", x.Jf);
    a.className = "blocklyMinimalBody"; var b = document.createElementNS(x.Jf, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.xb = b;
    this.gd.appendChild(a);
    x.O(b, "wheel", this, function(a) { a.stopPropagation() });
    x.O(b, "change", this, function() { this.Od(b.value) }); return this.gd };
d.zp = function(a) { Cg(this);
    x.i.jg(a) || (this.o.Vm(a, new D(this.o.u ? -this.ma : this.ma, this.Fa)), this.Ci = x.O(document, "mouseup", this, this.hy), this.gp = x.O(document, "mousemove", this, this.Ap), x.Qb());
    a.stopPropagation() };
d.ew = function(a) { x.i.pb(this.Br, "blocklyDeleteIconHighlighted");
    a.stopPropagation() };
d.fw = function() { x.i.Rb(this.Br, "blocklyDeleteIconHighlighted") };
d.gw = function(a) { this.A(!0, !0);
    a.stopPropagation() };

function Cg(a) { a.Ci && (x.Qa(a.Ci), a.Ci = null);
    a.gp && (x.Qa(a.gp), a.gp = null) }
d.hy = function() { x.Touch.df();
    Cg(this) };
d.Ap = function(a) { this.il = !1;
    a = Fe(this.o, a);
    Bg(this, this.u ? -a.x : a.x, a.y) };

function Bg(a, b, c) {
    b = Math.max(b, 45);
    c = Math.max(c, 30);
    a.ma = b;
    a.Fa = c;
    a.Ik.setAttribute("width", b);
    a.Ik.setAttribute("height", c);
    a.Eg.setAttribute("width", b);
    a.Eg.setAttribute("height", c);
    a.Dh.setAttribute("width", b);
    a.Dh.setAttribute("height", 10);
    a.u && (a.Ik.setAttribute("transform", "scale(-1 1)"), a.Eg.setAttribute("transform", "scale(-1 1)"));
    a.Mb && (a.u ? (a.Mb.setAttribute("transform", "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"), a.Sf.setAttribute("transform", "translate(" + (-b + 8) + ",-8) scale(-1 1)")) :
        (a.Mb.setAttribute("transform", "translate(" + (b - 8) + "," + (c - 8) + ")"), a.Sf.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
    b = a.Hb();
    a.gd.setAttribute("width", b.width);
    a.gd.setAttribute("height", b.height - 10);
    a.u && a.gd.setAttribute("x", -b.width);
    a.xb.style.width = b.width - 4 + "px";
    a.xb.style.height = b.height - 4 - 10 + "px"
}
d.Lp = function() { var a = this;
    this.Bj = !0;
    setTimeout(function() { a.xb.focus();
        x.i.pb(a.w, "blocklyFocused");
        x.i.pb(a.Eg, "blocklyCommentTargetFocused");
        x.i.pb(a.Dh, "blocklyCommentHandleTargetFocused") }, 0) };

function Ff(a) { a.Bj = !1;
    setTimeout(function() { a.xb.blur();
        x.i.Rb(a.w, "blocklyFocused");
        x.i.Rb(a.Eg, "blocklyCommentTargetFocused");
        x.i.Rb(a.Dh, "blocklyCommentHandleTargetFocused") }, 0) };

function Dg(a) { this.mj = a;
    this.T() } d = Dg.prototype;
d.ab = null;
d.ye = null;
d.mj = null;
d.T = function() { this.ab || (this.ab = x.i.B("svg", { xmlns: x.sn, "xmlns:html": x.Jf, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyWsDragSurface blocklyOverflowVisible" }, null), this.mj.appendChild(this.ab)) };
d.Ff = function(a, b) { a = a.toFixed(0);
    b = b.toFixed(0);
    this.ab.style.display = "block";
    x.i.zk(this.ab, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.Yl = function() { return x.i.Bc(this.ab) };
d.jj = function(a) { if (!a) throw "Couldn't clear and hide the drag surface: missing new surface."; var b = this.ab.childNodes[0],
        c = this.ab.childNodes[1]; if (!(b && c && x.i.ds(b, "blocklyBlockCanvas") && x.i.ds(c, "blocklyBubbleCanvas"))) throw "Couldn't clear and hide the drag surface.  A node was missing.";
    null != this.me ? x.i.Xj(b, this.me) : a.insertBefore(b, a.firstChild);
    x.i.Xj(c, b);
    this.ab.style.display = "none";
    x.i.zk(this.ab, "");
    this.me = null };
x.F = {};
x.F.gq = function(a, b) { var c = G("xml");
    c.appendChild(x.F.My(x.H.Gq(a))); for (var e = gd(a, !0), f = 0, h; h = e[f]; f++) c.appendChild(h.Jk(b));
    a = fd(a, !0); for (f = 0; e = a[f]; f++) c.appendChild(x.F.Cn(e, b)); return c };
x.F.My = function(a) { for (var b = G("variables"), c = 0, e; e = a[c]; c++) { var f = G("variable", null, e.name);
        f.setAttribute("type", e.type);
        f.setAttribute("id", e.ba());
        b.appendChild(f) } return b };
x.F.Cn = function(a, b) { var c;
    a.o.u && (c = a.o.hd());
    b = x.F.Rf(a, b); var e = a.oa();
    b.setAttribute("x", Math.round(a.o.u ? c - e.x : e.x));
    b.setAttribute("y", Math.round(e.y)); return b };
x.F.sw = function(a) { null == a.getValue() && (a.hh(), a.getValue()); var b = a.Sc(); if (!b) throw Error("Tried to serialize a variable field with no variable."); var c = G("field", null, b.name);
    c.setAttribute("name", a.name);
    c.setAttribute("id", b.ba());
    c.setAttribute("variabletype", b.type); return c };
x.F.tw = function(a) { if (a.name && a.Mg) { if (a.sh()) return x.F.sw(a); var b = G("field", null, a.getValue());
        b.setAttribute("name", a.name); return b } return null };
x.F.mv = function(a, b) { for (var c = 0, e; e = a.X[c]; c++)
        for (var f = 0, h; h = e.Oa[f]; f++)(h = x.F.tw(h)) && b.appendChild(h) };
x.F.Rf = function(a, b) {
    var c = G(a.jb ? "shadow" : "block");
    c.setAttribute("type", a.type);
    b || c.setAttribute("id", a.id);
    if (a.Ka) { var e = a.Ka();
        e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e) } x.F.mv(a, c);
    if (e = a.Ol()) { e = G("comment", null, e); if ("object" == typeof a.Ya) { e.setAttribute("pinned", a.Ya.Y()); var f = a.Ya.ah();
            e.setAttribute("h", f.height);
            e.setAttribute("w", f.width) } c.appendChild(e) } a.data && (e = G("data", null, a.data), c.appendChild(e));
    f = 0;
    for (var h; h = a.X[f]; f++) {
        var k, l = !0;
        if (h.type != x.We) {
            var m =
                J(h.connection);
            h.type == x.$a ? k = G("value") : h.type == x.yb && (k = G("statement"));
            e = h.connection.Qe;
            !e || m && m.jb || k.appendChild(x.F.Uq(e));
            m && (k.appendChild(x.F.Rf(m, b)), l = !1);
            k.setAttribute("name", h.name);
            l || c.appendChild(k)
        }
    }
    a.kx != a.gg && c.setAttribute("inline", a.gg);
    a.isCollapsed() && c.setAttribute("collapsed", !0);
    a.disabled && c.setAttribute("disabled", !0);
    a.lc() || a.jb || c.setAttribute("deletable", !1);
    a.Je() || a.jb || c.setAttribute("movable", !1);
    Pe(a) || c.setAttribute("editable", !1);
    if (f = Oc(a)) k = G("next", null,
        x.F.Rf(f, b)), c.appendChild(k);
    e = a.L && a.L.Qe;
    !e || f && f.jb || k.appendChild(x.F.Uq(e));
    return c
};
x.F.Uq = function(a) { for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else { for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && H(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && H(c)) } return a };
x.F.Gd = function(a) { return (new XMLSerializer).serializeToString(a) };
x.F.wC = function(a) { a = x.F.Gd(a).split("<"); for (var b = "", c = 1; c < a.length; c++) { var e = a[c]; "/" == e[0] && (b = b.substring(2));
        a[c] = b + "<" + e; "/" != e[0] && "/>" != e.slice(-2) && (b += "  ") } a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>"); return a.replace(/^\n/, "") };
x.F.Xc = function(a) { return (new DOMParser).parseFromString(a, "text/xml").firstChild };
x.F.qC = function(a, b) { b.Tb(!1);
    b.clear();
    a = x.F.ae(a, b);
    b.Tb(!0); return a };
x.F.ae = function(a, b) {
    if (a instanceof dd) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.") }
    var e;
    b.u && (e = b.hd());
    c = [];
    Eg();
    var f = a.childNodes.length,
        h = x.j.Ac();
    h || x.j.S(!0);
    b.Tb && b.Tb(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l],
                n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !x.j.oc) {
                var p = x.F.gi(m, b);
                c.push(p.id);
                var t = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    y = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(t) || isNaN(y) || p.moveBy(b.u ? e - t : t, y);
                k = !1
            } else if ("shadow" == n) k = !1;
            else if ("comment" == n)
                if (b.R) If(m, b, e);
                else { var z = m,
                        E = b,
                        Fa = bd(z),
                        cd = new Zc(E, Fa.content, Fa.Zr, Fa.Ut, Fa.id),
                        Qa = parseInt(z.getAttribute("x"), 10),
                        Hd = parseInt(z.getAttribute("y"), 10);
                    isNaN(Qa) || isNaN(Hd) || cd.moveBy(Qa, Hd);
                    $c(cd) }
            else if ("variables" == n) { if (k) x.F.pw(m, b);
                else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                k = !1 }
        }
    } finally {
        h ||
            x.j.S(!1), Fg()
    }
    b.Tb && b.Tb(!0);
    return c
};
x.F.nC = function(a, b) { if (b.hasOwnProperty("scale")) { var c = M; try { M = 0; var e = Gg(b) } finally { M = c } } a = x.F.ae(a, b); if (e && e.height) { c = e.y + e.height; var f = e.x; var h = Infinity,
            k = Infinity; for (e = 0; e < a.length; e++) { var l = Nc(b, a[e]).oa();
            l.y < k && (k = l.y);
            l.x < h && (h = l.x) } c = c - k + 10;
        f -= h; var m;
        b.u && (m = b.hd()); for (e = 0; e < a.length; e++) Nc(b, a[e]).moveBy(b.u ? m - f : f, c) } return a };
x.F.gi = function(a, b) { if (a instanceof dd) { var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.") } x.j.disable();
    c = b.kf(); try { var e = x.F.ao(a, b),
            f = Ac(e, !1); if (b.R) { Hg(e, !0); for (var h = f.length - 1; 0 <= h; h--) f[h].Ec(); for (h = f.length - 1; 0 <= h; h--) f[h].aa(!1);
            setTimeout(function() { e.o && Hg(e, !1) }, 1);
            sf(e);
            Gf(b) } else
            for (h = f.length - 1; 0 <= h; h--) f[h].hh() } finally { x.j.enable() } if (x.j.isEnabled()) { a = x.H.Tr(b, c); for (h = 0; h < a.length; h++) x.j.V(new Fc(a[h]));
        x.j.V(new x.j.Vk(e)) } return e };
x.F.pw = function(a, b) { for (var c = 0, e; e = a.children[c]; c++) { var f = e.getAttribute("type"),
            h = e.getAttribute("id");
        e = e.textContent; if (null == f) throw Error("Variable with id, " + h + " is without a type");
        b.ed(e, f, h) } };
x.F.ao = function(a, b) {
    var c = null,
        e = a.getAttribute("type"),
        f = a.getAttribute("id");
    c = b.rf(e, f);
    var h = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++)
        if (3 != k.nodeType) {
            for (var l = h = null, m = 0, n; n = k.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? h = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !h && l && (h = l);
            m = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.hb && (c.hb(k), c.Ec && c.Ec());
                    break;
                case "comment":
                    c.xf(k.textContent);
                    var p = k.getAttribute("pinned");
                    p && !c.vb && setTimeout(function() {
                        c.Ya &&
                            c.Ya.pa && c.Ya.pa("true" == p)
                    }, 1);
                    h = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(h) && !isNaN(k) && c.Ya && c.Ya.pa && c.Ya.yg(h, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    x.F.ow(c, m, k);
                    break;
                case "value":
                case "statement":
                    k = K(c, m);
                    if (!k) { console.warn("Ignoring non-existent input " + m + " in block " + e); break } l && (k.connection.Qe = l);
                    h && (h = x.F.ao(h, b), h.M ? k.connection.connect(h.M) : h.$ && k.connection.connect(h.$));
                    break;
                case "next":
                    l && c.L && (c.L.Qe = l);
                    h && (h =
                        x.F.ao(h, b), c.L.connect(h.$));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(b = a.getAttribute("inline")) && c.bc("true" == b);
    (b = a.getAttribute("disabled")) && c.Pd("true" == b || "disabled" == b);
    (b = a.getAttribute("deletable")) && c.Jp("true" == b);
    (b = a.getAttribute("movable")) && c.xh("true" == b);
    (b = a.getAttribute("editable")) && c.Kp("true" == b);
    (b = a.getAttribute("collapsed")) && c.zg("true" == b);
    if ("shadow" == a.nodeName.toLowerCase()) { a = c.Vf(!1); for (f = 0; a[f]; f++);
        c.Pp(!0) }
    return c
};
x.F.nw = function(a, b, c, e) { var f = b.getAttribute("variabletype") || ""; "''" == f && (f = "");
    a = x.H.Vl(a, b.id, c, f); if (null != f && f !== a.type) throw Error("Serialized variable type with id '" + a.ba() + "' had type " + a.type + ", and does not match variable field that references it: " + x.F.Gd(b) + ".");
    e.setValue(a.ba()) };
x.F.ow = function(a, b, c) { var e = He(a, b);
    e ? (a = a.o, b = c.textContent, e.sh() ? x.F.nw(a, c, b, e) : e.setValue(b)) : console.warn("Ignoring non-existent field " + b + " in block " + a.type) };
x.F.hw = function(a) { for (var b = 0, c; c = a.childNodes[b]; b++)
        if ("next" == c.nodeName.toLowerCase()) { a.removeChild(c); break } };
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = x.F.Gd;
g.Blockly.Xml.domToWorkspace = x.F.ae;
g.Blockly.Xml.textToDom = x.F.Xc;
g.Blockly.Xml.workspaceToDom = x.F.gq;
// Copyright 2015 Google Inc.  Apache License 2.0
function Ig(a) { this.m = a } d = Ig.prototype;
d.Qg = 32;
d.rq = 110;
d.jn = 20;
d.Yi = 20;
d.w = null;
d.Jb = 0;
d.Ef = 0;
d.T = function() { this.w = x.i.B("g", { "class": "blocklyZoom" }, null); var a = String(Math.random()).substring(2);
    Jg(this, a);
    Kg(this, a);
    Lg(this, a); return this.w };
d.I = function(a) { this.gj = this.jn + a; return this.gj + this.rq };
d.A = function() { this.w && (H(this.w), this.w = null);
    this.m = null };
d.position = function() { var a = this.m.ub();
    a && (this.m.u ? (this.Jb = this.Yi + I, a.Ea == x.Mf && (this.Jb += a.Kl, this.m.ga && (this.Jb += a.ob))) : (this.Jb = a.Aa + a.ob - this.Qg - this.Yi - I, a.Ea == x.se && (this.Jb -= a.Kl)), this.Ef = a.fb + a.zb - this.rq - this.gj, a.Ea == x.Pg && (this.Ef -= a.Qr), this.w.setAttribute("transform", "translate(" + this.Jb + "," + this.Ef + ")")) };

function Jg(a, b) { var c = a.m,
        e = x.i.B("clipPath", { id: "blocklyZoomoutClipPath" + b }, a.w);
    x.i.B("rect", { width: 32, height: 32, y: 77 }, e);
    a = x.i.B("image", { width: x.tc.width, height: x.tc.height, x: -64, y: -15, "clip-path": "url(#blocklyZoomoutClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.le + x.tc.url);
    x.O(a, "mousedown", null, function(a) { Vf(c);
        Mg(c, -1);
        x.Touch.df();
        a.stopPropagation();
        a.preventDefault() }) }

function Kg(a, b) { var c = a.m,
        e = x.i.B("clipPath", { id: "blocklyZoominClipPath" + b }, a.w);
    x.i.B("rect", { width: 32, height: 32, y: 43 }, e);
    a = x.i.B("image", { width: x.tc.width, height: x.tc.height, x: -32, y: -49, "clip-path": "url(#blocklyZoominClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.le + x.tc.url);
    x.O(a, "mousedown", null, function(a) { Vf(c);
        Mg(c, 1);
        x.Touch.df();
        a.stopPropagation();
        a.preventDefault() }) }

function Lg(a, b) {
    var c = a.m,
        e = x.i.B("clipPath", { id: "blocklyZoomresetClipPath" + b }, a.w);
    x.i.B("rect", { width: 32, height: 32 }, e);
    a = x.i.B("image", { width: x.tc.width, height: x.tc.height, y: -92, "clip-path": "url(#blocklyZoomresetClipPath" + b + ")" }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.le + x.tc.url);
    x.O(a, "mousedown", null, function(a) {
        Vf(c);
        c.setScale(c.options.dc.Ft);
        if (c.kb) { var b = c.ub(),
                e = (b.Qc - b.Aa) / 2;
            c.J && (e -= c.J.ma / 2);
            c.kb.set(e, (b.uc - b.fb) / 2) } else console.warn("Tried to scroll a non-scrollable workspace.");
        x.Touch.df();
        a.stopPropagation();
        a.preventDefault()
    })
};
// Copyright 2014 Google Inc.  Apache License 2.0
function Ng(a, b, c) { Ng.s.constructor.call(this, a);
    this.ub = a.ub || Og;
    this.Bg = a.Bg || Pg; var e = [];
    e[x.$a] = new af;
    e[x.Vh] = new af;
    e[x.yb] = new af;
    e[x.Lf] = new af;
    this.Ln = e;
    b && (this.Ab = b);
    c && (this.Lh = c);
    this.$m = this.Lh && x.i.hg();
    this.Tj = [];
    this.Pf = new Ag(a.Lb);
    this.Kd = this.options.Yr ? new bg(a.Yr, a.Xr) : null;
    x.H && x.H.Uf && (this.Pi[x.zq] = x.H.Uf);
    x.zd && x.zd.Uf && (this.Pi[x.bv] = x.zd.Uf);
    x.ra && x.ra.Uf && (this.Pi[x.xq] = x.ra.Uf) } w(Ng, dd);
d = Ng.prototype;
d.Jm = null;
d.R = !0;
d.je = !1;
d.ak = !1;
d.Bp = !0;
d.scrollX = 0;
d.scrollY = 0;
d.uy = 0;
d.wy = 0;
d.Kr = null;
d.scale = 1;
d.Yc = null;
d.kb = null;
d.Eb = null;
d.Ab = null;
d.Lh = null;
d.$m = !1;
d.hm = !1;
d.Ho = null;
d.vs = null;
d.Zg = {};
d.Pi = {};
d.Yq = null;
d.Fh = null;
d.ps = null;
d.Yj = !0;

function pg(a) { if (a.Yj) { var b = L(a).getScreenCTM();
        b && (a.ps = b.inverse(), a.Yj = !1) } return a.ps }

function ff(a, b) { var c = 0,
        e = 0,
        f = 1; if (je(a.Va, b) || je(a.qe, b)) f = a.scale;
    do { var h = x.i.Bc(b); if (b == a.Va || b == a.qe) f = 1;
        c += h.x * f;
        e += h.y * f;
        b = b.parentNode } while (b && b != L(a)); return new D(c, e) }
d.T = function(a) {
    this.w = x.i.B("g", { "class": "blocklyWorkspace" }, null);
    a && (this.pd = x.i.B("rect", { height: "100%", width: "100%", "class": a }, this.w), "blocklyMainBackground" == a && this.Kd && (this.pd.style.fill = "url(#" + this.Kd.pi.id + ")"));
    this.Va = x.i.B("g", { "class": "blocklyBlockCanvas" }, this.w);
    this.qe = x.i.B("g", { "class": "blocklyBubbleCanvas" }, this.w);
    a = I;
    if (this.options.$w) { this.Yc = new xg(this); var b = this.Yc.T();
        this.w.insertBefore(b, this.Va);
        a = this.Yc.I(a) } this.options.dc && this.options.dc.controls && (this.Mh =
        new Ig(this), b = this.Mh.T(), this.w.appendChild(b), this.Mh.I(a));
    this.je || (x.O(this.w, "mousedown", this, this.tf, !1, !0), this.options.dc && this.options.dc.Oy && x.O(this.w, "wheel", this, this.$x));
    this.options.bs && (this.ga = new Qg(this));
    this.Kd && this.Kd.update(this.scale);
    Rg(this);
    return this.w
};
d.A = function() { this.R = !1;
    this.Eb && this.Eb.cancel();
    Ng.s.A.call(this);
    this.w && (H(this.w), this.w = null);
    this.qe = this.Va = null;
    this.ga && (this.ga.A(), this.ga = null);
    this.J && (this.J.A(), this.J = null);
    this.Yc && (this.Yc.A(), this.Yc = null);
    this.kb && (this.kb.A(), this.kb = null);
    this.Mh && (this.Mh.A(), this.Mh = null);
    this.Pf && (this.Pf.A(), this.Pf = null);
    this.Kd && (this.Kd.A(), this.Kd = null);
    this.Pi && (this.Pi = null);
    this.Zg && (this.Zg = null);
    this.options.Lb || H(L(this).parentNode);
    this.Jm && (x.Qa(this.Jm), this.Jm = null) };
d.rf = function(a, b) { return new N(this, a, b) };

function Sg(a, b) { var c = { vj: a.options.vj, Lb: a, u: a.u, Le: a.options.Le, He: a.He, Ea: a.options.Ea };
    a.J = null;
    a.J = a.He ? new Tg(c) : new Ug(c);
    a.J.$h = !1; return a.J.T(b) }

function Gf(a) { a.Bp && a.R && (a.kb && a.kb.resize(), a.Yj = !0) } d.resize = function() { this.ga && this.ga.position();
    this.J && this.J.position();
    this.Yc && this.Yc.position();
    this.Mh && this.Mh.position();
    this.kb && this.kb.resize();
    this.Yj = !0;
    Rg(this) };

function Tf(a) { var b = ce(document);
    vc(a.vs, b) || (a.vs = b, a.Yj = !0, Rg(a)) }

function L(a) { if (a.Kq) return a.Kq; for (var b = a.w; b;) { if ("svg" == b.tagName) return a.Kq = b;
        b = b.parentNode } return null }
d.translate = function(a, b) { if (this.$m && this.hm) this.Lh.Ff(a, b);
    else { var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
        this.Va.setAttribute("transform", c);
        this.qe.setAttribute("transform", c) } if (this.Ab) { c = this.Ab; var e = this.scale;
        c.xg = e;
        c.ye.setAttribute("transform", "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")") } };

function Wf(a) { if (a.$m) { a.hm = !1; var b = a.Lh.Yl();
        a.Lh.jj(a.w);
        b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
        a.Va.setAttribute("transform", b);
        a.qe.setAttribute("transform", b) } }

function Nf(a) { if (a.$m && !a.hm) { a.hm = !0; var b = a.Va.previousSibling,
            c = parseInt(L(a).getAttribute("width"), 10),
            e = parseInt(L(a).getAttribute("height"), 10),
            f = x.i.Bc(a.Va),
            h = a.Lh,
            k = a.Va,
            l = a.qe,
            m = a.scale;
        h.me = b;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.ab.setAttribute("width", c);
        h.ab.setAttribute("height", e);
        h.ab.appendChild(k);
        h.ab.appendChild(l);
        h.ab.style.display = "block";
        a.Lh.Ff(f.x, f.y) } }
d.hd = function() { var a = this.ub(); return a ? a.Aa / this.scale : 0 };
d.pa = function(a) { this.kb && this.kb.wh(a);
    (this.J || this.ga && this.ga.J) && (this.J ? this.J : this.ga ? this.ga.J : null).wh(a);
    L(this).style.display = a ? "block" : "none";
    this.ga && (this.ga.Nc.style.display = a ? "block" : "none");
    a ? (this.aa(), this.ga && this.ga.position()) : x.Qb(!0) };
d.aa = function() { for (var a = Tc(this), b = a.length - 1; 0 <= b; b--) a[b].aa(!1) };

function Vg(a) {
    var b = x.kj;
    if (a.R && !(b.getElementsByTagName("block").length >= id(a)))
        if (a.Eb && a.Eb.cancel(), "comment" == b.tagName.toLowerCase()) { x.j.disable(); try { var c = If(b, a),
                    e = parseInt(b.getAttribute("x"), 10),
                    f = parseInt(b.getAttribute("y"), 10);
                isNaN(e) || isNaN(f) || (a.u && (e = -e), c.moveBy(e + 50, f + 50)) } finally { x.j.enable() } c.select() } else {
            x.j.disable();
            try {
                var h = x.F.gi(b, a),
                    k = parseInt(b.getAttribute("x"), 10),
                    l = parseInt(b.getAttribute("y"), 10);
                if (!isNaN(k) && !isNaN(l)) {
                    a.u && (k = -k);
                    do {
                        b = !1;
                        var m = Tc(a);
                        c = 0;
                        for (var n; n = m[c]; c++) { var p = n.oa(); if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) { b = !0; break } }
                        if (!b) { var t = h.De(!1);
                            c = 0; for (var y; y = t[c]; c++)
                                if (y.closest(x.bd, new D(k, l)).connection) { b = !0; break } } b && (k = a.u ? k - x.bd : k + x.bd, l += 2 * x.bd)
                    } while (b);
                    h.moveBy(k, l)
                }
            } finally { x.j.enable() } x.j.isEnabled() && !h.jb && x.j.V(new x.j.Vk(h));
            h.select()
        }
}

function Wg(a) { if ((a = a.je ? a.Fh : a) && !a.Eb && a.ga && a.ga.J) { a = a.ga; var b = a.Sd.Fe();
        b && b.ue && a.J.show(b.ue) } } d.vh = function(a, b) { Ng.s.vh.call(this, a, b);
    Wg(this) };
d.Tf = function(a) { Ng.s.Tf.call(this, a);
    Wg(this) };
d.ed = function(a, b, c) { a = Ng.s.ed.call(this, a, b, c);
    Wg(this); return a };

function Rg(a) { a.Ar = a.Yc && a.w.parentNode ? a.Yc.ki() : null;
    a.zr = a.J ? a.J.ki() : a.ga ? a.ga.ki() : null }

function xf(a, b) { b = new D(b.clientX, b.clientY); return a.Ar && a.Ar.contains(b) ? x.gn : a.zr && a.zr.contains(b) ? x.oq : x.nq } d.tf = function(a) { var b = this.Ee(a);
    b && (b.lb || (b.lb = this), b.Uc = a, b.wj(a)) };
d.Vm = function(a, b) { a = x.i.kk(a, L(this), pg(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.Kr = xc(b, a) };

function Fe(a, b) { b = x.i.kk(b, L(a), pg(a));
    b.x /= a.scale;
    b.y /= a.scale; return yc(a.Kr, b) } d.sb = function() { return null != this.Eb && this.Eb.sb() };
d.$x = function(a) { this.Eb && this.Eb.cancel(); var b = -a.deltaY / 50,
        c = x.i.kk(a, L(this), pg(this));
    this.zoom(c.x, c.y, b);
    a.preventDefault() };

function Gg(a) { var b = fd(a, !1);
    a = gd(a, !1);
    b = b.concat(a); if (!b.length) return { x: 0, y: 0, width: 0, height: 0 };
    a = b[0].no(); for (var c = 1; c < b.length; c++) { var e = b[c].no();
        e.rd.x < a.rd.x && (a.rd.x = e.rd.x);
        e.Ud.x > a.Ud.x && (a.Ud.x = e.Ud.x);
        e.rd.y < a.rd.y && (a.rd.y = e.rd.y);
        e.Ud.y > a.Ud.y && (a.Ud.y = e.Ud.y) } return { x: a.rd.x, y: a.rd.y, width: a.Ud.x - a.rd.x, height: a.Ud.y - a.rd.y } }
d.Jv = function() { this.Tb(!1);
    x.j.S(!0); for (var a = fd(this, !0), b = 0, c = 0, e; e = a[c]; c++) { var f = e.oa();
        e.moveBy(-f.x, b - f.y);
        Xg(e);
        b = e.oa().y + e.Hb().height + 25 } x.j.S(!1);
    this.Tb(!0) };
d.Oi = function(a) {
    function b(a) { if (a.lc()) y = y.concat(Ac(a, !1));
        else { a = a.Vf(!1); for (var c = 0; c < a.length; c++) b(a[c]) } }

    function c() { x.j.S(h); var a = y.shift();
        a && (a.o ? (a.A(!1, !0), setTimeout(c, 10)) : c());
        x.j.S(!1) }
    if (!this.options.readOnly && !this.je) {
        var e = [],
            f = fd(this, !0),
            h = x.i.Be(),
            k = this,
            l = {};
        l.text = x.g.UNDO;
        l.enabled = 0 < this.Gh.length;
        l.gb = this.eq.bind(this, !1);
        e.push(l);
        l = {};
        l.text = x.g.REDO;
        l.enabled = 0 < this.rk.length;
        l.gb = this.eq.bind(this, !0);
        e.push(l);
        this.kb && (l = {}, l.text = x.g.CLEAN_UP, l.enabled = 1 < f.length,
            l.gb = this.Jv.bind(this), e.push(l));
        if (this.options.collapse) { for (var m = l = !1, n = 0; n < f.length; n++)
                for (var p = f[n]; p;) p.isCollapsed() ? l = !0 : m = !0, p = Oc(p); var t = function(a) { for (var b = 0, c = 0; c < f.length; c++)
                    for (var e = f[c]; e;) setTimeout(e.zg.bind(e, a), b), e = Oc(e), b += 10 };
            m = { enabled: m };
            m.text = x.g.COLLAPSE_ALL;
            m.gb = function() { t(!0) };
            e.push(m);
            l = { enabled: l };
            l.text = x.g.EXPAND_ALL;
            l.gb = function() { t(!1) };
            e.push(l) }
        var y = [];
        for (n = 0; n < f.length; n++) b(f[n]);
        l = {
            text: 1 == y.length ? x.g.DELETE_BLOCK : x.g.DELETE_X_BLOCKS.replace("%1",
                String(y.length)),
            enabled: 0 < y.length,
            gb: function() { k.Eb && k.Eb.cancel();
                2 > y.length ? c() : x.confirm(x.g.DELETE_ALL_BLOCKS.replace("%1", y.length), function(a) { a && c() }) }
        };
        e.push(l);
        this.Yq && this.Yq(e);
        x.ea.show(a, e, this.u)
    }
};
d.Rt = function(a) { if (a = eg(a)) { if (!this.options.Ke) throw "Existing toolbox is null.  Can't create new toolbox."; if (a.getElementsByTagName("category").length) { if (!this.ga) throw "Existing toolbox has no categories.  Can't change mode.";
            this.options.Ke = a;
            this.ga.Bm(a);
            Yg(this.ga) } else { if (!this.J) throw "Existing toolbox has categories.  Can't change mode.";
            this.options.Ke = a;
            this.J.show(a.childNodes) } } else if (this.options.Ke) throw "Can't nullify an existing toolbox."; };

function Vf(a) { if (a.options.Lb) Vf(a.options.Lb);
    else { x.ng = a;
        document.activeElement && document.activeElement.blur(); try { L(a).focus() } catch (b) { try { L(a).parentNode.setActive() } catch (c) { L(a).parentNode.focus() } } } }
d.zoom = function(a, b, c) { var e = this.options.dc.jy,
        f = this.ub(),
        h = L(this).createSVGPoint();
    h.x = a;
    h.y = b;
    h = h.matrixTransform(this.Va.getCTM().inverse());
    a = h.x;
    b = h.y;
    h = this.Va;
    e = Math.pow(e, c);
    c = this.scale * e;
    c > this.options.dc.ik ? e = this.options.dc.ik / this.scale : c < this.options.dc.jk && (e = this.options.dc.jk / this.scale);
    this.scale != c && (this.kb && (a = h.getCTM().translate(a * (1 - e), b * (1 - e)).scale(e), this.scrollX = a.e - f.ob, this.scrollY = a.f - f.zb), this.setScale(c)) };

function Mg(a, b) { var c = a.ub();
    a.zoom(c.Aa / 2, c.fb / 2, b) } d.setScale = function(a) { this.options.dc.ik && a > this.options.dc.ik ? a = this.options.dc.ik : this.options.dc.jk && a < this.options.dc.jk && (a = this.options.dc.jk);
    this.scale = a;
    this.Kd && this.Kd.update(this.scale);
    this.kb ? this.kb.resize() : this.translate(this.scrollX, this.scrollY);
    x.Qb(!1);
    this.J && this.J.vp() };

function Zg(a) { var b = 0,
        c = 0;
    a && (b = a.hd(), c = a.ni()); return { width: b, height: c } }

function $g(a) { var b = Gg(a),
        c = a.scale;
    a = b.width * c; var e = b.height * c,
        f = b.x * c;
    b = b.y * c; return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e } }

function Og() {
    var a = Zg(this.ga),
        b = Zg(this.J),
        c = x.Kt(L(this));
    if (this.ga)
        if (this.Ea == x.Nf || this.Ea == x.Pg) c.height -= a.height;
        else if (this.Ea == x.Mf || this.Ea == x.se) c.width -= a.width;
    if (this.kb) { var e = $g(this); var f = c.width,
            h = c.height,
            k = f / 2,
            l = h / 2,
            m = Math.min(e.left - k, e.right - f),
            n = Math.min(e.top - l, e.bottom - h);
        e = { left: m, top: n, height: Math.max(e.bottom + l, e.top + h) - n, width: Math.max(e.right + k, e.left + f) - m } } else e = $g(this);
    f = 0;
    this.ga && this.Ea == x.Mf && (f = a.width);
    h = 0;
    this.ga && this.Ea == x.Nf && (h = a.height);
    return {
        uc: e.height,
        Qc: e.width,
        vc: e.top,
        Pc: e.left,
        fb: c.height,
        Aa: c.width,
        Ve: -this.scrollY,
        Cb: -this.scrollX,
        zb: h,
        ob: f,
        KC: a.width,
        JC: a.height,
        Kl: b.width,
        Qr: b.height,
        Ea: this.Ea
    }
}

function Pg(a) { if (!this.kb) throw "Attempt to set top level workspace scroll without scrollbars."; var b = this.ub();
    r(a.x) && (this.scrollX = -b.Qc * a.x - b.Pc);
    r(a.y) && (this.scrollY = -b.uc * a.y - b.vc);
    a = this.scrollX + b.ob;
    b = this.scrollY + b.zb;
    this.translate(a, b);
    this.Kd && this.Kd.moveTo(a, b) } d.Tb = function(a) { var b = !this.Bp && a;
    this.Bp = a;
    b && Gf(this) };
d.clear = function() { this.Tb(!1);
    Ng.s.clear.call(this);
    this.Tb(!0) };

function zg(a, b) { a.Zg.CREATE_VARIABLE = b }

function ah(a, b) { return (a = a.Zg[b]) ? a : null }

function bh(a, b) { return (a = a.Pi[b]) ? a : null } d.Ee = function(a) { var b = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        c = this.Eb; return c ? b && c.hs ? (console.warn("tried to start the same gesture twice"), c.cancel(), null) : c : b ? this.Eb = new qg(a, this) : null };
Ng.prototype.setVisible = Ng.prototype.pa;

function ch(a) { ch.s.constructor.call(this, null);
    this.kt = a } w(ch, Le);
d = ch.prototype;
d.Ui = 0;
d.Rk = 0;
d.co = function(a) {
    x.i.B("rect", { "class": "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" }, a);
    x.i.B("path", { "class": "blocklyIconSymbol", d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z" }, a);
    x.i.B("circle", { "class": "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, a)
};
d.Eo = function(a) { Pe(this.U) && Le.prototype.Eo.call(this, a) };
d.pj = function() { this.Gk = x.i.B("svg", { x: xe, y: xe }, null); if (this.kt.length)
        for (var a = G("xml"), b = 0, c; c = this.kt[b]; b++) a.appendChild(G("block", { type: c }));
    else a = null;
    a = { Ke: a, Lb: this.U.o, le: this.U.o.options.le, u: this.U.u, Ea: this.U.u ? x.se : x.Mf, He: !1, ub: this.Bw.bind(this), Bg: null };
    this.m = new Ng(a);
    this.m.ak = !0;
    a = Sg(this.m, "g");
    b = this.m.T("blocklyMutatorBackground");
    b.insertBefore(a, this.m.Va);
    this.Gk.appendChild(b); return this.Gk };
d.If = function() { this.U.vb || (Pe(this.U) ? this.Dc && x.i.Rb(this.Dc, "blocklyIconGroupReadonly") : (this.pa(!1), this.Dc && x.i.pb(this.Dc, "blocklyIconGroupReadonly")));
    Le.prototype.If.call(this) };
d.Hm = function() { var a = 2 * xe,
        b = this.m.Va.getBBox(); var c = this.U.u ? -b.x : b.width + b.x;
    b = b.height + 3 * a; if (this.m.J) { var e = this.m.J.lf();
        b = Math.max(b, e.uc + 20) } c += 3 * a; if (Math.abs(this.Ui - c) > a || Math.abs(this.Rk - b) > a) this.Ui = c, this.Rk = b, this.bb.yg(c + a, b + a), this.Gk.setAttribute("width", this.Ui), this.Gk.setAttribute("height", this.Rk);
    this.U.u && this.m.Va.setAttribute("transform", "translate(" + this.Ui + ",0)");
    this.m.resize() };
d.pa = function(a) {
    if (a != this.Y())
        if (x.j.V(new Ic(this.U, "mutatorOpen", !a, a)), a) {
            this.bb = new ue(this.U.o, this.pj(), this.U.Rd, this.gh, null, null);
            De(this.bb, this.U.id);
            if (a = this.m.options.Ke) this.m.J.I(this.m), this.m.J.show(a.childNodes);
            this.wf = this.U.gf(this.m);
            a = Ac(this.wf, !1);
            for (var b = 0, c; c = a[b]; b++) c.aa();
            this.wf.xh(!1);
            this.wf.Jp(!1);
            this.m.J ? (a = 2 * this.m.J.qa, b = this.m.J.ma + a) : b = a = 16;
            this.U.u && (b = -b);
            this.wf.moveBy(b, a);
            if (this.U.Km) {
                var e = this;
                this.U.Km(this.wf);
                this.Sm = function() { e.U.Km(e.wf) };
                this.U.o.Ad(this.Sm)
            }
            this.Hm();
            this.m.Ad(this.Py.bind(this));
            this.Hf()
        } else this.Gk = null, this.m.A(), this.wf = this.m = null, this.bb.A(), this.bb = null, this.Rk = this.Ui = 0, this.Sm && (this.U.o.ug(this.Sm), this.Sm = null)
};
d.Py = function() { if (!this.m.sb())
        for (var a = fd(this.m, !1), b = 0, c; c = a[b]; b++) { var e = c.oa(),
                f = c.Hb();
            20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y) }
    if (this.wf.o == this.m) { x.j.S(!0);
        c = this.U;
        a = (a = c.Ka()) && x.F.Gd(a);
        b = c.R;
        c.R = !1;
        c.ef(this.wf);
        c.R = b;
        c.Ec();
        b = (b = c.Ka()) && x.F.Gd(b); if (a != b) { x.j.V(new x.j.Mc(c, "mutation", null, a, b)); var h = x.j.Ac();
            setTimeout(function() { x.j.S(h);
                c.qb();
                x.j.S(!1) }, x.Uk) } c.R && c.aa();
        this.m.sb() || this.Hm();
        x.j.S(!1) } };
d.Bw = function() { return { fb: this.Rk, Aa: this.Ui, zb: 0, ob: 0 } };
d.A = function() { this.U.kd = null;
    Le.prototype.A.call(this) };

function dh(a, b, c) { if (!a || !a.v.o) return !1;
    c = K(b, c).connection; var e = J(a); return e && e != b || c.Ia == a ? !1 : (c.isConnected() && c.disconnect(), c.connect(a), !0) }

function eh(a) { var b = null; if (a && a.options) { var c = a.options.Lb;
        a.je ? c && c.options && (b = c.options.Lb) : c && (b = c) } return b } g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = dh;
x.N = {};
x.N.cn = {};
x.N.register = function(a, b) { if (!q(a) || Ga(a)) throw Error('Error: Invalid extension name "' + a + '"'); if (x.N.cn[a]) throw Error('Error: Extension "' + a + '" is already registered.'); if (!v(b)) throw Error('Error: Extension "' + a + '" must be a function');
    x.N.cn[a] = b };
x.N.Em = function(a, b) { if (!ha(b)) throw Error('Error: Mixin "' + a + '" must be a object');
    x.N.register(a, function() { fh(this, b) }) };
x.N.wp = function(a, b, c, e) { var f = 'Error when registering mutator "' + a + '": ';
    x.N.Oq(f, b.hb, "domToMutation");
    x.N.Oq(f, b.Ka, "mutationToDom"); var h = x.N.Qq(b, f); if (c && !v(c)) throw Error('Extension "' + a + '" is not a function');
    x.N.register(a, function() { h && this.Cg(new ch(e));
        fh(this, b);
        c && c.apply(this) }) };
x.N.apply = function(a, b, c) { var e = x.N.cn[a]; if (!v(e)) throw Error('Error: Extension "' + a + '" not found.'); if (c) x.N.Hv(a, b);
    else var f = x.N.ro(b);
    e.apply(b); if (c) x.N.Fv('Error after applying mutator "' + a + '": ', b);
    else if (!x.N.Cx(f, b)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.'); };
x.N.Oq = function(a, b, c) { if (!b) throw Error(a + 'missing required property "' + c + '"'); if ("function" != typeof b) throw Error(a + '" required property "' + c + '" must be a function'); };
x.N.Hv = function(a, b) { if (x.N.ro(b).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + b.id); };
x.N.Qq = function(a, b) { var c = void 0 !== a.ef,
        e = void 0 !== a.gf; if (c && e) { if ("function" != typeof a.ef) throw Error(b + "compose must be a function."); if ("function" != typeof a.gf) throw Error(b + "decompose must be a function."); return !0 } if (c || e) throw Error(b + 'Must have both or neither of "compose" and "decompose"'); return !1 };
x.N.Fv = function(a, b) { if ("function" != typeof b.hb) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"'); if ("function" != typeof b.Ka) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    x.N.Qq(b, a) };
x.N.ro = function(a) { var b = [];
    void 0 !== a.hb && b.push(a.hb);
    void 0 !== a.Ka && b.push(a.Ka);
    void 0 !== a.ef && b.push(a.ef);
    void 0 !== a.gf && b.push(a.gf); return b };
x.N.Cx = function(a, b) { b = x.N.ro(b); if (b.length != a.length) return !1; for (var c = 0; c < b.length; c++)
        if (a[c] != b[c]) return !1; return !0 };
x.N.jl = function(a, b) { var c = []; "object" == typeof document && x.i.st(function() { for (var a in b) x.i.Pq(b[a]) }); return function() { this.type && -1 === c.indexOf(this.type) && (x.N.Gv(this, a, b), c.push(this.type));
        this.ka(function() { var e = F(this, a),
                f = b[e];
            null == f ? -1 === c.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = x.i.pc(f); return f }.bind(this)) } };
x.N.Gv = function(a, b, c) { var e = He(a, b); if (!v(e.lh)) { e = e.getOptions(); for (var f = 0; f < e.length; ++f) { var h = e[f][1];
            null == c[h] && console.warn("No tooltip mapping for value " + h + " of field " + b + " of block type " + a.type) } } };
x.N.En = function(a) { "object" == typeof document && x.i.st(function() { x.i.Pq(a) }); return function() { this.ka(function() { var b = He(this, "VAR"); return x.i.pc(a).replace("%1", b ? b.Ib() : "") }.bind(this)) } };
x.N.rw = function() { this.Dy = this.qd;
    this.ka(function() { var a = this.getParent(); return a && gh(a) && a.qd || this.Dy }.bind(this)) };
x.N.register("parent_tooltip_when_inline", x.N.rw);
var hh = {};

function ih(a, b) { var c = Yd(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" }

function jh(a, b) { return ih(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b] }

function ag() { var a = document,
        b = a.body;
    a = a.documentElement; return new D(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop) }

function kh(a) { try { var b = a.getBoundingClientRect() } catch (c) { return { left: 0, top: 0, right: 0, bottom: 0 } } A && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop); return b }

function lh(a) { var b = Yd(a),
        c = new D(0, 0); var e = b ? Yd(b) : document;
    e = !A || 9 <= Number(yb) || "CSS1Compat" == Wd(e).fd.compatMode ? e.documentElement : e.body; if (a == e) return c;
    a = kh(a);
    b = ce(Wd(b).fd);
    c.x = a.left + b.x;
    c.y = a.top + b.y; return c }

function mh(a) { "number" == typeof a && (a += "px"); return a }

function nh(a) { var b = oh; if ("none" != jh(a, "display")) return b(a); var c = a.style,
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

function oh(a) { var b = a.offsetWidth,
        c = a.offsetHeight,
        e = C && !b && !c; return aa(b) && !e || !a.getBoundingClientRect ? new Vd(b, c) : (a = kh(a), new Vd(a.right - a.left, a.bottom - a.top)) }

function ph(a, b) { a.style.display = b ? "" : "none" }
var qh = B ? "MozUserSelect" : C || mb ? "WebkitUserSelect" : null;

function rh(a, b, c) { c = c ? null : a.getElementsByTagName("*"); if (qh) { if (b = b ? "none" : "", a.style && (a.style[qh] = b), c) { a = 0; for (var e; e = c[a]; a++) e.style && (e.style[qh] = b) } } else if (A || lb)
        if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
            for (a = 0; e = c[a]; a++) e.setAttribute("unselectable", b) }
var sh = { thin: 2, medium: 4, thick: 6 };

function th(a, b) { if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0; var c = a.currentStyle ? a.currentStyle[b + "Width"] : null; if (c in sh) a = sh[c];
    else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
    else { b = a.style.left; var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = e;
        a = +c } return a };

function uh(a, b) { this.wa = new Vd(0, 25);
    this.setValue(a);
    this.Ih = b }
var vh = {};

function wh(a, b) { if (!q(a) || Ga(a)) throw Error('Invalid field type "' + a + '"'); if (!ha(b) || !v(b.la)) throw Error('Field "' + b + '" must have a fromJson function');
    vh[a] = b }
var xh = null,
    yh = 0;
d = uh.prototype;
d.name = void 0;
d.Es = 50;
d.ya = "";
d.v = null;
d.Ma = !0;
d.Ih = null;
d.Mg = !0;
d.Qp = function(a) { this.v = a };
d.I = function() { this.Za || (this.Za = x.i.B("g", {}, null), this.Ma || (this.Za.style.display = "none"), this.Cd = x.i.B("rect", { rx: 4, ry: 4, x: -5, y: 0, height: 16 }, this.Za), this.Ba = x.i.B("text", { "class": "blocklyText", y: this.wa.height - 12.5 }, this.Za), this.If(), this.v.ha().appendChild(this.Za), this.sm = x.O(this.Za, "mousedown", this, this.tf), this.Ne()) };
d.hh = function() {};
d.A = function() { this.sm && (x.Qa(this.sm), this.sm = null);
    this.v = null;
    H(this.Za);
    this.Ih = this.Cd = this.Ba = this.Za = null };
d.If = function() { var a = this.Za;
    this.Mg && a && (Pe(this.v) ? (x.i.pb(a, "blocklyEditableText"), x.i.Rb(a, "blocklyNonEditableText"), this.Za.style.cursor = this.Xk) : (x.i.pb(a, "blocklyNonEditableText"), x.i.Rb(a, "blocklyEditableText"), this.Za.style.cursor = "")) };
d.Y = function() { return this.Ma };
d.pa = function(a) { if (this.Ma != a) { this.Ma = a; var b = this.ha();
        b && (b.style.display = a ? "block" : "none", this.Ne()) } };

function zh(a, b) { a.Ih = b } d.Hn = function(a) { return a };

function Ie(a, b) { var c = a.Hn(b); if (null === c) return null;
    void 0 !== c && (b = c); if (c = a.Ih) { a = c.call(a, b); if (null === a) return null;
        void 0 !== a && (b = a) } return b } d.ha = function() { return this.Za };
d.Ne = function() { this.Ma ? (this.Ba.textContent = Ah(this), this.Qk()) : this.wa.width = 0 };
d.Qk = function() { var a = Bh(this.Ba);
    this.Cd && this.Cd.setAttribute("width", a + 10);
    this.wa.width = a };

function Bh(a) { var b = a.textContent + "\n" + a.className.baseVal,
        c; if (xh && (c = xh[b])) return c; try { c = A || mb ? a.getBBox().width : a.getComputedTextLength() } catch (e) { return 8 * a.textContent.length } xh && (xh[b] = c); return c }

function Eg() { yh++;
    xh || (xh = {}) }

function Fg() { yh--;
    yh || (xh = null) } d.nf = function() { this.wa.width || this.Ne(); return this.wa };

function Ch(a) { var b = a.Cd.getBBox(),
        c = b.height * a.v.o.scale;
    b = b.width * a.v.o.scale;
    a = lh(a.Cd); return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b } }

function Ah(a) { var b = a.ya; if (!b) return "\u00a0";
    b.length > a.Es && (b = b.substring(0, a.Es - 2) + "\u2026");
    b = b.replace(/\s/g, "\u00a0");
    a.v.u && (b += "\u200f"); return b } d.Ib = function() { return this.ya };
d.Ob = function(a) { null !== a && (a = String(a), a !== this.ya && (this.ya = a, this.Cj())) };
d.Cj = function() { this.wa.width = 0;
    this.v && this.v.R && (this.v.aa(), this.v.qb()) };
d.getValue = function() { return this.Ib() };
d.setValue = function(a) { if (null !== a) { var b = this.getValue();
        b != a && (this.v && x.j.isEnabled() && x.j.V(new x.j.Mc(this.v, "field", this.name, b, a)), this.Ob(a)) } };
d.tf = function(a) { this.v && this.v.o && (a = this.v.o.Ee(a)) && !a.Ch && (a.Ch = this) };
d.ka = function() {};
d.sh = function() { return !1 };

function Dh(a, b) { this.wa = new Vd(0, 17.5);
    this.Sq = b;
    this.setValue(a) } w(Dh, uh);
Dh.la = function(a) { var b = x.i.pc(a.text); return new Dh(b, a["class"]) };
d = Dh.prototype;
d.Mg = !1;
d.I = function() { this.Ba || (this.Ba = x.i.B("text", { "class": "blocklyText", y: this.wa.height - 5 }, null), this.Sq && x.i.pb(this.Ba, this.Sq), this.Ma || (this.Ba.style.display = "none"), this.v.ha().appendChild(this.Ba), this.Ba.qd = this.v, x.C.Rg(this.Ba), this.Ne()) };
d.A = function() { H(this.Ba);
    this.Ba = null };
d.ha = function() { return this.Ba };
d.ka = function(a) { this.Ba.qd = a };
wh("field_label", Dh);

function Eh(a, b, c, e) { if (a != x.We && !b) throw "Value inputs and statement inputs must have non-empty name.";
    this.type = a;
    this.name = b;
    this.v = c;
    this.connection = e;
    this.Oa = [] } d = Eh.prototype;
d.align = x.Vi;
d.Ma = !0;

function O(a, b, c) { Fh(a, a.Oa.length, b, c); return a }

function Fh(a, b, c, e) { if (0 > b || b > a.Oa.length) throw Error("index " + b + " out of bounds."); if (!c && !e) return b;
    q(c) && (c = new Dh(c));
    c.Qp(a.v);
    a.v.R && c.I();
    c.name = e;
    c.qp && (b = Fh(a, b, c.qp));
    a.Oa.splice(b, 0, c);++b;
    c.$p && (b = Fh(a, b, c.$p));
    a.v.R && (a.v.aa(), a.v.qb()); return b }

function Gh(a, b) { for (var c = 0, e; e = a.Oa[c]; c++)
        if (e.name === b) { e.A();
            a.Oa.splice(c, 1);
            a.v.R && (a.v.aa(), a.v.qb()); break } } d.Y = function() { return this.Ma };
d.pa = function(a) { var b = []; if (this.Ma == a) return b; for (var c = (this.Ma = a) ? "block" : "none", e = 0, f; f = this.Oa[e]; e++) f.pa(a); if (this.connection) { if (a) b = pf(this.connection);
        else if (e = this.connection, qf(e, !0), e.Ia)
            for (e = Ac(J(e), !1), f = 0; f < e.length; f++) { for (var h = e[f], k = h.De(!0), l = 0; l < k.length; l++) qf(k[l], !0);
                h = vf(h); for (l = 0; l < h.length; l++) h[l].pa(!1) }
        if (e = J(this.connection)) e.ha().style.display = c, a || (e.R = !1) } return b };
d.Ua = function(a) { if (!this.connection) throw "This input does not have a connection.";
    this.connection.Ua(a); return this };

function Hh(a, b) { a.align = b;
    a.v.R && a.v.aa(); return a } d.I = function() { if (this.v.o.R)
        for (var a = 0; a < this.Oa.length; a++) this.Oa[a].I() };
d.A = function() { for (var a = 0, b; b = this.Oa[a]; a++) b.A();
    this.connection && this.connection.A();
    this.v = null };

function Qe(a) { Qe.s.constructor.call(this, a);
    Me(this);
    this.ya = {} } w(Qe, Le);
d = Qe.prototype;
d.Wq = !1;
d.co = function(a) { x.i.B("path", { "class": "blocklyIconShape", d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z" }, a);
    x.i.B("path", { "class": "blocklyIconSymbol", d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z" }, a);
    x.i.B("rect", { "class": "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" }, a) };
d.pa = function(a) {
    if (a != this.Y())
        if (x.j.V(new Ic(this.U, "warningOpen", !a, a)), a) {
            var b = this.Ib();
            a = x.i.B("text", { "class": "blocklyText blocklyBubbleText", y: xe }, null);
            b = b.split("\n");
            for (var c = 0; c < b.length; c++) x.i.B("tspan", { dy: "1em", x: xe }, a).appendChild(document.createTextNode(b[c]));
            this.bb = new ue(this.U.o, a, this.U.Rd, this.gh, null, null);
            De(this.bb, this.U.id);
            if (this.U.u) { b = a.getBBox().width;
                c = 0; for (var e; e = a.childNodes[c]; c++) e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + xe) } this.Hf();
            a =
                this.bb.ah();
            this.bb.yg(a.width, a.height)
        } else this.bb.A(), this.bb = null
};
d.Ob = function(a, b) { this.ya[b] != a && (a ? this.ya[b] = a : delete this.ya[b], this.Y() && (this.pa(!1), this.pa(!0))) };
d.Ib = function() { var a = [],
        b; for (b in this.ya) a.push(this.ya[b]); return a.join("\n") };
d.A = function() { this.U.ud = null;
    Le.prototype.A.call(this) };

function hd(a, b, c) {
    "undefined" !== typeof Ih.prototype[b] && console.warn('FUTURE ERROR: Block prototypeName "' + b + '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.');
    this.id = c && !Nc(a, c) ? c : x.i.Be();
    a.Bn[this.id] = this;
    this.$ = this.L = this.M = null;
    this.X = [];
    this.gg = void 0;
    this.disabled = !1;
    this.qd = "";
    this.contextMenu = !0;
    this.rg = null;
    this.bf = [];
    this.Mr = this.lk = this.uj = !0;
    this.ve =
        this.jb = !1;
    this.Ya = null;
    this.vd = new D(0, 0);
    this.o = a;
    this.vb = a.je;
    this.u = a.u;
    if (b) { this.type = b;
        b = x.D[b]; for (var e in b) this[e] = b[e] } a.Qi.push(this);
    v(this.I) && this.I();
    this.kx = this.gg;
    if (x.j.isEnabled()) {
        (a = x.j.Ac()) || x.j.S(!0); try { x.j.V(new x.j.Vk(this)) } finally { a || x.j.S(!1) } }
    if (v(this.onchange)) { if ((a = this.onchange) && !v(a)) throw Error("onchange must be a function.");
        this.mk && this.o.ug(this.mk); if (this.onchange = a) this.mk = a.bind(this), this.o.Ad(this.mk) }
}
d = hd.prototype;
d.data = null;
d.we = "#000000";
d.A = function(a) { if (this.o) { this.mk && this.o.ug(this.mk);
        Ke(this, a);
        x.j.isEnabled() && x.j.V(new x.j.du(this));
        x.j.disable(); try { this.o && (ed(this.o, this), delete this.o.Bn[this.id], this.o = null);
            x.selected == this && (x.selected = null); for (var b = this.bf.length - 1; 0 <= b; b--) this.bf[b].A(!1);
            b = 0; for (var c; c = this.X[b]; b++) c.A();
            this.X.length = 0; var e = this.De(!0); for (b = 0; b < e.length; b++) { var f = e[b];
                f.isConnected() && f.disconnect();
                e[b].A() } } finally { x.j.enable() } } };
d.hh = function() { for (var a = 0, b; b = this.X[a]; a++)
        for (var c = 0, e; e = b.Oa[c]; c++) e.hh && e.hh() };

function Ke(a, b) { if (a.M) a.M.isConnected() && a.M.disconnect();
    else if (a.$) { var c = null;
        a.$.isConnected() && (c = a.$.Ia, a.$.disconnect()); var e = Oc(a);
        b && e && (a = a.L.Ia, a.disconnect(), c && Te(c, a) && c.connect(a)) } } d.De = function() { var a = [];
    this.M && a.push(this.M);
    this.$ && a.push(this.$);
    this.L && a.push(this.L); for (var b = 0, c; c = this.X[b]; b++) c.connection && a.push(c.connection); return a };
d.qb = function() { console.warn("Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead.") };
d.getParent = function() { return this.rg };

function Jh(a) { do { var b = a;
        a = a.getParent(); if (!a) return null } while (Oc(a) == b); return a }

function Oc(a) { return a.L && J(a.L) }

function jf(a) { var b = a;
    do a = b, b = a.rg; while (b); return a } d.Vf = function(a) { if (!a) return this.bf;
    a = []; for (var b = 0, c; c = this.X[b]; b++) c.connection && (c = J(c.connection)) && a.push(c);
    (b = Oc(this)) && a.push(b); return a };
d.yh = function(a) { if (a != this.rg) { if (this.rg) { ya(this.rg.bf, this); if (this.$ && this.$.isConnected()) throw "Still connected to previous block."; if (this.M && this.M.isConnected()) throw "Still connected to parent block.";
            this.rg = null } else ed(this.o, this);
        (this.rg = a) ? a.bf.push(this): this.o.Qi.push(this) } };

function Ac(a, b) { var c = [a];
    a = a.Vf(b); for (var e, f = 0; e = a[f]; f++) c.push.apply(c, Ac(e, b)); return c } d.lc = function() { return this.uj && !this.jb && !(this.o && this.o.options.readOnly) };
d.Jp = function(a) { this.uj = a };
d.Je = function() { return this.lk && !this.jb && !(this.o && this.o.options.readOnly) };
d.xh = function(a) { this.lk = a };
d.Pp = function(a) { this.jb = a };

function Pe(a) { return a.Mr && !(a.o && a.o.options.readOnly) } d.Kp = function(a) { this.Mr = a;
    a = 0; for (var b; b = this.X[a]; a++)
        for (var c = 0, e; e = b.Oa[c]; c++) e.If() };

function Hg(a, b) { if (!b && a.isCollapsed()) { if (a.M && qf(a.M, b), a.$ && qf(a.$, b), a.L) { qf(a.L, b); var c = J(a.L);
            c && Hg(c, b) } } else { a = a.De(!0); for (var e = 0; c = a[e]; e++) qf(c, b), Xe(c) && (c = J(c)) && Hg(c, b) } } d.ka = function(a) { this.qd = a };
d.Ha = function(a) { var b = q(a) ? x.i.pc(a) : a,
        c = Number(b); if (!isNaN(c) && 0 <= c && 360 >= c) this.we = x.ns(c);
    else if (q(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.we = b;
    else throw c = 'Invalid colour: "' + b + '"', a != b && (c += ' (from "' + a + '")'), c; };

function He(a, b) { for (var c = 0, e; e = a.X[c]; c++)
        for (var f = 0, h; h = e.Oa[f]; f++)
            if (h.name === b) return h; return null } d.wo = function() { for (var a = [], b = 0, c; c = this.X[b]; b++)
        for (var e = 0, f; f = c.Oa[e]; e++) f.sh() && a.push(f.getValue()); return a };
d.Wf = function() { for (var a = [], b = 0, c; c = this.X[b]; b++)
        for (var e = 0, f; f = c.Oa[e]; e++) f.sh() && (f = this.o.fe(f.getValue())) && a.push(f); return a };
d.Zm = function(a) { for (var b = 0, c; c = this.X[b]; b++)
        for (var e = 0, f; f = c.Oa[e]; e++) f.sh() && a.ba() == f.getValue() && f.Ob(a.name) };
d.wk = function(a, b) { for (var c = 0, e; e = this.X[c]; c++)
        for (var f = 0, h; h = e.Oa[f]; f++) h.sh() && a == h.getValue() && h.setValue(b) };

function F(a, b) { return (a = He(a, b)) ? a.getValue() : null }

function Kh(a, b, c) { He(a, c).setValue(b) }
d.nd = function(a, b) { a ? (void 0 === b && (b = null), this.$ || (this.$ = this.gk(x.Lf)), this.$.Ua(b)) : this.$ && (this.$.A(), this.$ = null) };
d.md = function(a, b) { a ? (void 0 === b && (b = null), this.L || (this.L = this.gk(x.yb)), this.L.Ua(b)) : this.L && (this.L.A(), this.L = null) };
d.Ic = function(a, b) { a ? (void 0 === b && (b = null), this.M || (this.M = this.gk(x.Vh)), this.M.Ua(b)) : this.M && (this.M.A(), this.M = null) };
d.bc = function(a) { this.gg != a && (x.j.V(new x.j.Mc(this, "inline", null, this.gg, a)), this.gg = a) };

function gh(a) { if (void 0 != a.gg) return a.gg; for (var b = 1; b < a.X.length; b++)
        if (a.X[b - 1].type == x.We && a.X[b].type == x.We) return !1; for (b = 1; b < a.X.length; b++)
        if (a.X[b - 1].type == x.$a && a.X[b].type == x.We) return !0; return !1 } d.Pd = function(a) { this.disabled != a && (x.j.V(new x.j.Mc(this, "disabled", null, this.disabled, a)), this.disabled = a) };

function Lh(a) { for (a = Jh(a); a;) { if (a.disabled) return !0;
        a = Jh(a) } return !1 } d.isCollapsed = function() { return this.ve };
d.zg = function(a) { this.ve != a && (x.j.V(new x.j.Mc(this, "collapsed", null, this.ve, a)), this.ve = a) };
d.toString = function(a, b) { var c = [],
        e = b || "?"; if (this.ve) c.push(K(this, "_TEMP_COLLAPSED_INPUT").Oa[0].ya);
    else
        for (var f = 0, h; h = this.X[f]; f++) { for (var k = 0, l; l = h.Oa[k]; k++) l instanceof P && !l.getValue() ? c.push(e) : c.push(l.Ib());
            h.connection && ((h = J(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e)) } c = Ia(c.join(" ")) || "???";
    a && (b = c, b.length > a && (b = b.substring(0, a - 3) + "..."), c = b); return c };

function Q(a, b) { return a.fj(x.$a, b) }

function Mh(a, b) { return a.fj(x.yb, b) }

function R(a, b) { return a.fj(x.We, b || "") }

function Nh(a, b) {
    var c = b.type ? 'Block "' + b.type + '": ' : "";
    if ("colour" in b)
        if (void 0 === b.colour) console.warn(c + "Undefined color value.");
        else { var e = b.colour; try { a.Ha(e) } catch (z) { console.warn(c + "Illegal color value: ", e) } } for (e = 0; void 0 !== b["message" + e];) {
        for (var f = a, h = b["args" + e] || [], k = b["lastDummyAlign" + e], l = x.i.By(b["message" + e]), m = [], n = 0, p = [], t = 0; t < l.length; t++) {
            var y = l[t];
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
        p.length && ("string" == typeof p[p.length - 1] || Ea(p[p.length - 1].type, "field_")) && (t = { type: "input_dummy" }, k && (t.align = k), p.push(t));
        k = { LEFT: x.Vi, RIGHT: x.Lg, CENTRE: x.Sk };
        h = [];
        for (t = 0; t < p.length; t++)
            if (m = p[t], "string" == typeof m) h.push([m, void 0]);
            else {
                l = y = null;
                do
                    if (n = !1, "string" == typeof m) y = new Dh(m);
                    else switch (m.type) {
                        case "input_value":
                            l =
                                Q(f, m.name);
                            break;
                        case "input_statement":
                            l = Mh(f, m.name);
                            break;
                        case "input_dummy":
                            l = R(f, m.name);
                            break;
                        default:
                            y = (y = vh[m.type]) ? y.la(m) : null, y || (m.alt ? (m = m.alt, n = !0) : console.warn("Blockly could not create a field of type " + m.type + ". You may need to register your custom field.  See github.com/google/blockly/issues/1584"))
                    }
                while (n);
                if (y) h.push([y, m.name]);
                else if (l) { m.check && l.Ua(m.check);
                    m.align && Hh(l, k[m.align]); for (m = 0; m < h.length; m++) O(l, h[m][0], h[m][1]);
                    h.length = 0 }
            } e++
    }
    void 0 !== b.inputsInline && a.bc(b.inputsInline);
    void 0 !== b.output && a.Ic(!0, b.output);
    void 0 !== b.previousStatement && a.nd(!0, b.previousStatement);
    void 0 !== b.nextStatement && a.md(!0, b.nextStatement);
    void 0 !== b.tooltip && (e = b.tooltip, e = x.i.pc(e), a.ka(e));
    void 0 !== b.enableContextMenu && (e = b.enableContextMenu, a.contextMenu = !!e);
    void 0 !== b.helpUrl && (e = b.helpUrl, e = x.i.pc(e), a.Ta = e);
    q(b.extensions) && (console.warn(c + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + b.type + "' block."), b.extensions = [b.extensions]);
    void 0 !==
        b.mutator && x.N.apply(b.mutator, a, !0);
    if (Array.isArray(b.extensions))
        for (b = b.extensions, e = 0; e < b.length; ++e) x.N.apply(b[e], a, !1)
}

function fh(a, b) { if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided"); var c = [],
        e; for (e in b) void 0 !== a[e] && c.push(e); if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c)); for (var f in b) a[f] = b[f] } d.fj = function(a, b) { var c = null; if (a == x.$a || a == x.yb) c = this.gk(a);
    a = new Eh(a, b, this, c);
    this.X.push(a); return a };

function Oh(a, b, c) { if (b != c) { for (var e = -1, f = c ? -1 : a.X.length, h = 0, k; k = a.X[h]; h++)
            if (k.name == b) { if (e = h, -1 != f) break } else if (c && k.name == c && (f = h, -1 != e)) break;
        a.Wo(e, f) } } d.Wo = function(a, b) { var c = this.X[a];
    this.X.splice(a, 1);
    a < b && b--;
    this.X.splice(b, 0, c) };
d.Ga = function(a) { for (var b = 0, c; c = this.X[b]; b++)
        if (c.name == a) { c.connection && c.connection.isConnected() && (c.connection.Qe = null, a = J(c.connection), a.jb ? a.A() : Ke(a));
            c.A();
            this.X.splice(b, 1); break } };

function K(a, b) { for (var c = 0, e; e = a.X[c]; c++)
        if (e.name == b) return e; return null }

function Ph(a, b) { return (a = K(a, b)) && a.connection && J(a.connection) } d.Ol = function() { return this.Ya || "" };
d.xf = function(a) { this.Ya != a && (x.j.V(new x.j.Mc(this, "comment", null, this.Ya, a || "")), this.Ya = a) };
d.Pe = function() {};
d.Cg = function() {};
d.oa = function() { return this.vd };
d.moveBy = function(a, b) { var c = new x.j.Wi(this);
    this.vd.translate(a, b);
    c.vf();
    x.j.V(c) };
d.gk = function(a) { return new Re(this, a) };

function $e(a) { var b = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (b += ' (id="' + a.id + '")'); return b };
x.i.Si = {};
x.i.Si.nf = function(a) { a = a.G(); var b = nh(a);
    b.height = a.scrollHeight; return b };
x.i.Si.Fq = function(a, b, c) { b.left += c.width;
    b.right += c.width;
    a.left += c.width;
    a.right += c.width };

function Qh(a) { Hb.call(this);
    this.ti = a;
    this.yi = {} } w(Qh, Hb);
var Rh = [];
d = Qh.prototype;
d.ia = function(a, b, c, e) { u(b) || (b && (Rh[0] = b.toString()), b = Rh); for (var f = 0; f < b.length; f++) { var h = ec(a, b[f], c || this.handleEvent, e || !1, this.ti || this); if (!h) break;
        this.yi[h.key] = h } return this };
d.zs = function(a, b, c, e) { return Sh(this, a, b, c, e) };

function Sh(a, b, c, e, f, h) { if (u(c))
        for (var k = 0; k < c.length; k++) Sh(a, b, c[k], e, f, h);
    else { b = fc(b, c, e || a.handleEvent, f, h || a.ti || a); if (!b) return a;
        a.yi[b.key] = b } return a }
d.sd = function(a, b, c, e, f) { if (u(b))
        for (var h = 0; h < b.length; h++) this.sd(a, b[h], c, e, f);
    else c = c || this.handleEvent, e = ha(e) ? !!e.capture : !!e, f = f || this.ti || this, c = gc(c), e = !!e, b = Vb(a) ? a.Fj(b, c, e, f) : a ? (a = ic(a)) ? a.Fj(b, c, e, f) : null : null, b && (nc(b), delete this.yi[b.key]); return this };
d.removeAll = function() { bb(this.yi, function(a, b) { this.yi.hasOwnProperty(b) && nc(a) }, this);
    this.yi = {} };
d.Na = function() { Qh.s.Na.call(this);
    this.removeAll() };
d.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

function Th() {} da(Th);
Th.prototype.Fx = 0;

function Uh(a) { tg.call(this);
    this.Wg = a || Wd();
    this.Ki = Vh;
    this.ag = null;
    this.za = !1;
    this.P = null;
    this.Xf = void 0;
    this.Xd = this.ic = this.Vc = this.Vo = null;
    this.Fi = this.Vt = !1 } w(Uh, tg);
Uh.prototype.ex = Th.Id();
var Vh = null;

function Wh(a, b) { switch (a) {
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
            return b ? "open" : "close" } throw Error("Invalid component state"); } d = Uh.prototype;
d.ba = function() { return this.ag || (this.ag = ":" + (this.ex.Fx++).toString(36)) };

function Xh(a, b) { if (a.Vc && a.Vc.Xd) { var c = a.Vc.Xd,
            e = a.ag;
        e in c && delete c[e];
        cb(a.Vc.Xd, b, a) } a.ag = b } d.G = function() { return this.P };

function Yh(a) { a.Xf || (a.Xf = new Qh(a)); return a.Xf } d.yh = function(a) { if (this == a) throw Error("Unable to set parent component"); if (a && this.Vc && this.ag && Zh(this.Vc, this.ag) && this.Vc != a) throw Error("Unable to set parent component");
    this.Vc = a;
    Uh.s.Pm.call(this, a) };
d.getParent = function() { return this.Vc };
d.Pm = function(a) { if (this.Vc && this.Vc != a) throw Error("Method not supported");
    Uh.s.Pm.call(this, a) };
d.Yb = function() { return this.Wg };
d.T = function() { this.P = this.Wg.createElement("DIV") };
d.aa = function(a) { this.Ne(a) };
d.Ne = function(a, b) { if (this.za) throw Error("Component already rendered");
    this.P || this.T();
    a ? a.insertBefore(this.P, b || null) : this.Wg.fd.body.appendChild(this.P);
    this.Vc && !this.Vc.za || this.rb() };
d.Fd = function(a) { if (this.za) throw Error("Component already rendered"); if (a && this.Vd(a)) { this.Vt = !0; var b = Yd(a);
        this.Wg && this.Wg.fd == b || (this.Wg = Wd(a));
        this.tj(a);
        this.rb() } else throw Error("Invalid element to decorate"); };
d.Vd = function() { return !0 };
d.tj = function(a) { this.P = a };
d.rb = function() { this.za = !0;
    $h(this, function(a) {!a.za && a.G() && a.rb() }) };
d.Hd = function() { $h(this, function(a) { a.za && a.Hd() });
    this.Xf && this.Xf.removeAll();
    this.za = !1 };
d.Na = function() { this.za && this.Hd();
    this.Xf && (this.Xf.A(), delete this.Xf);
    $h(this, function(a) { a.A() });!this.Vt && this.P && H(this.P);
    this.Vc = this.Vo = this.P = this.Xd = this.ic = null;
    Uh.s.Na.call(this) };
d.Xh = function(a, b) { this.Yh(a, ai(this), b) };
d.Yh = function(a, b, c) {
    if (a.za && (c || !this.za)) throw Error("Component already rendered");
    if (0 > b || b > ai(this)) throw Error("Child component index out of bounds");
    this.Xd && this.ic || (this.Xd = {}, this.ic = []);
    if (a.getParent() == this) { var e = a.ba();
        this.Xd[e] = a;
        ya(this.ic, a) } else cb(this.Xd, a.ba(), a);
    a.yh(this);
    Ca(this.ic, b, 0, a);
    a.za && this.za && a.getParent() == this ? (c = this.yc(), b = c.childNodes[b] || null, b != a.G() && c.insertBefore(a.G(), b)) : c ? (this.P || this.T(), b = S(this, b + 1), a.Ne(this.yc(), b ? b.P : null)) : this.za && !a.za &&
        a.P && a.P.parentNode && 1 == a.P.parentNode.nodeType && a.rb()
};
d.yc = function() { return this.P };

function bi(a) { null == a.Ki && (a.Ki = "rtl" == jh(a.za ? a.P : a.Wg.fd.body, "direction")); return a.Ki } d.Af = function(a) { if (this.za) throw Error("Component already rendered");
    this.Ki = a };

function ci(a) { return !!a.ic && 0 != a.ic.length }

function ai(a) { return a.ic ? a.ic.length : 0 }

function Zh(a, b) { a.Xd && b ? (a = a.Xd, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null; return b }

function S(a, b) { return a.ic ? a.ic[b] || null : null }

function $h(a, b, c) { a.ic && sa(a.ic, b, c) }

function di(a, b) { return a.ic && b ? ra(a.ic, b) : -1 } d.removeChild = function(a, b) { if (a) { var c = q(a) ? a : a.ba();
        a = Zh(this, c); if (c && a) { var e = this.Xd;
            c in e && delete e[c];
            ya(this.ic, a);
            b && (a.Hd(), a.P && H(a.P));
            a.yh(null) } } if (!a) throw Error("Child is not in parent component"); return a };
d.ot = function(a) { for (var b = []; ci(this);) b.push(this.removeChild(S(this, 0), a)); return b };
var ei;
hb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

function fi(a, b) { b ? a.setAttribute("role", b) : a.removeAttribute("role") }

function T(a, b, c) { u(c) && (c = c.join(" ")); var e = "aria-" + b; "" === c || void 0 == c ? (ei || (ei = { atomic: !1, autocomplete: "none", dropeffect: "none", haspopup: !1, live: "off", multiline: !1, multiselectable: !1, orientation: "vertical", readonly: !1, relevant: "additions text", required: !1, sort: "none", busy: !1, disabled: !1, hidden: !1, invalid: "false" }), c = ei, b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e)) : a.setAttribute(e, c) }

function gi(a, b) { a = a.getAttribute("aria-" + b); return null == a || void 0 == a ? "" : String(a) };

function hi(a, b, c, e, f, h) { if (C && !xb("525")) return !0; if (ob && f) return ii(a); if (f && !e) return !1; if (!B) { r(b) && (b = ji(b)); var k = 17 == b || 18 == b || ob && 91 == b; if ((!c || ob) && k || ob && 16 == b && (e || h)) return !1 } if ((C || mb) && e && c) switch (a) {
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
            return !(C || mb || B) } return B && (e || f || h) ? !1 : ii(a) }

function ii(a) { if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (C || mb) && 0 == a) return !0; switch (a) {
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

function ji(a) { if (B) a = ki(a);
    else if (ob && C) switch (a) {
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

function li(a, b) { tg.call(this);
    a && mi(this, a, b) } w(li, tg);
d = li.prototype;
d.P = null;
d.mm = null;
d.Ko = null;
d.nm = null;
d.Tc = -1;
d.kg = -1;
d.wn = !1;
var ni = { 3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45 },
    oi = { Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45 },
    pi = !C || xb("525"),
    qi = ob && B;
d = li.prototype;
d.Lw = function(a) { if (C || mb)
        if (17 == this.Tc && !a.ctrlKey || 18 == this.Tc && !a.altKey || ob && 91 == this.Tc && !a.metaKey) this.kg = this.Tc = -1; - 1 == this.Tc && (a.ctrlKey && 17 != a.keyCode ? this.Tc = 17 : a.altKey && 18 != a.keyCode ? this.Tc = 18 : a.metaKey && 91 != a.keyCode && (this.Tc = 91));
    pi && !hi(a.keyCode, this.Tc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.kg = ji(a.keyCode), qi && (this.wn = a.altKey)) };
d.Mw = function(a) { this.kg = this.Tc = -1;
    this.wn = a.altKey };
d.handleEvent = function(a) {
    var b = a.Ae,
        c = b.altKey;
    if (A && "keypress" == a.type) { var e = this.kg; var f = 13 != e && 27 != e ? b.keyCode : 0 } else(C || mb) && "keypress" == a.type ? (e = this.kg, f = 0 <= b.charCode && 63232 > b.charCode && ii(e) ? b.charCode : 0) : lb && !C ? (e = this.kg, f = ii(e) ? b.keyCode : 0) : (e = b.keyCode || this.kg, f = b.charCode || 0, qi && "keypress" == a.type && (c = this.wn), ob && 63 == f && 224 == e && (e = 191));
    var h = e = ji(e);
    e ? 63232 <= e && e in ni ? h = ni[e] : 25 == e && a.shiftKey && (h = 9) : b.keyIdentifier && b.keyIdentifier in oi && (h = oi[b.keyIdentifier]);
    B && pi && "keypress" ==
        a.type && !hi(h, this.Tc, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = h == this.Tc, this.Tc = h, b = new ri(h, f, a, b), b.altKey = c, this.dispatchEvent(b))
};
d.G = function() { return this.P };

function mi(a, b, c) { a.nm && a.detach();
    a.P = b;
    a.mm = ec(a.P, "keypress", a, c);
    a.Ko = ec(a.P, "keydown", a.Lw, c, a);
    a.nm = ec(a.P, "keyup", a.Mw, c, a) } d.detach = function() { this.mm && (nc(this.mm), nc(this.Ko), nc(this.nm), this.nm = this.Ko = this.mm = null);
    this.P = null;
    this.kg = this.Tc = -1 };
d.Na = function() { li.s.Na.call(this);
    this.detach() };

function ri(a, b, c, e) { Qb.call(this, e);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c } w(ri, Qb);

function si(a) { if (a.classList) return a.classList;
    a = a.className; return q(a) && a.match(/\S+/g) || [] }

function ti(a, b) { a.className = b }

function ui(a, b) { return a.classList ? a.classList.contains(b) : xa(si(a), b) }

function vi(a, b) { a.classList ? a.classList.add(b) : ui(a, b) || (a.className += 0 < a.className.length ? " " + b : b) }

function wi(a, b) { if (a.classList) sa(b, function(b) { vi(a, b) });
    else { var c = {};
        sa(si(a), function(a) { c[a] = !0 });
        sa(b, function(a) { c[a] = !0 });
        a.className = ""; for (var e in c) a.className += 0 < a.className.length ? " " + e : e } }

function xi(a, b) { a.classList ? a.classList.remove(b) : ui(a, b) && (a.className = ta(si(a), function(a) { return a != b }).join(" ")) }

function yi(a, b) { a.classList ? sa(b, function(b) { xi(a, b) }) : a.className = ta(si(a), function(a) { return !xa(b, a) }).join(" ") };

function zi(a, b) { if (!a) throw Error("Invalid class name " + a); if (!v(b)) throw Error("Invalid decorator function " + b);
    Ai[a] = b }
var Bi = {},
    Ai = {};

function Ci(a) { this.yn = a } da(Ci);
d = Ci.prototype;
d.Ej = function() { return this.yn };

function Di(a, b) { a && (a.tabIndex = b ? 0 : -1) } d.T = function(a) { return a.Yb().T("DIV", this.bh(a).join(" ")) };
d.yc = function(a) { return a };
d.Vd = function(a) { return "DIV" == a.tagName };
d.Fd = function(a, b) { b.id && Xh(a, b.id); var c = this.sa(),
        e = !1,
        f = si(b);
    f && sa(f, function(b) { b == c ? e = !0 : b && this.Rp(a, b, c) }, this);
    e || vi(b, c);
    Ei(this, a, this.yc(b)); return b };
d.Rp = function(a, b, c) { b == c + "-disabled" ? a.yf(!1) : b == c + "-horizontal" ? a.setOrientation(Fi) : b == c + "-vertical" && a.setOrientation(Gi) };

function Ei(a, b, c) { if (c)
        for (var e = c.firstChild, f; e && e.parentNode == c;) { f = e.nextSibling; if (1 == e.nodeType) { var h = a.po(e);
                h && (h.P = e, b.isEnabled() || h.yf(!1), b.Xh(h), h.Fd(e)) } else e.nodeValue && "" != Ia(e.nodeValue) || c.removeChild(e);
            e = f } } d.po = function(a) { a: { a = si(a); for (var b = 0, c = a.length; b < c; b++) { var e = a[b]; if (e = e in Ai ? Ai[e]() : null) { a = e; break a } } a = null } return a };
d.Wj = function(a) { a = a.G();
    rh(a, !0, B);
    A && (a.hideFocus = !0); var b = this.Ej();
    b && fi(a, b) };
d.Pb = function(a) { return a.G() };
d.sa = function() { return "goog-container" };
d.bh = function(a) { var b = this.sa(),
        c = [b, a.qg == Fi ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled"); return c };

function Hi() {}
var Ii;
da(Hi);
var Ji = { button: "pressed", checkbox: "checked", menuitem: "selected", menuitemcheckbox: "checked", menuitemradio: "checked", radio: "checked", tab: "selected", treeitem: "selected" };
d = Hi.prototype;
d.Ej = function() {};
d.T = function(a) { return a.Yb().T("DIV", this.bh(a).join(" "), a.Rc()) };
d.yc = function(a) { return a };
d.xj = function(a, b, c) { if (a = a.G ? a.G() : a) { var e = [b];
        A && !xb("7") && (e = Ki(si(a), b), e.push(b));
        (c ? wi : yi)(a, e) } };
d.Vd = function() { return !0 };
d.Fd = function(a, b) { b.id && Xh(a, b.id); var c = this.yc(b);
    c && c.firstChild ? a.Li(c.firstChild.nextSibling ? Aa(c.childNodes) : c.firstChild) : a.Li(null); var e = 0,
        f = this.sa(),
        h = this.sa(),
        k = !1,
        l = !1,
        m = !1,
        n = Aa(si(b));
    sa(n, function(a) { k || a != f ? l || a != h ? e |= this.Xl(a) : l = !0 : (k = !0, h == f && (l = !0));
        1 == this.Xl(a) && ne(c) && qe(c, !1) }, this);
    a.La = e;
    k || (n.push(f), h == f && (l = !0));
    l || n.push(h);
    (a = a.ce) && n.push.apply(n, a); if (A && !xb("7")) { var p = Ki(n);
        0 < p.length && (n.push.apply(n, p), m = !0) } k && l && !a && !m || ti(b, n.join(" ")); return b };
d.Wj = function(a) { bi(a) && this.Af(a.G(), !0);
    a.isEnabled() && this.zf(a, a.Y()) };

function Li(a, b, c) { if (a = c || a.Ej()) c = b.getAttribute("role") || null, a != c && fi(b, a) }

function Mi(a, b, c) { var e = b.Hq;
    null != e && a.Hp(c, e);
    b.Y() || T(c, "hidden", !b.Y());
    b.isEnabled() || Ni(c, 1, !b.isEnabled());
    b.Bb & 8 && Ni(c, 8, b.bk());
    b.Bb & 16 && Ni(c, 16, !!(b.La & 16));
    b.Bb & 64 && Ni(c, 64, b.wi()) } d.Hp = function(a, b) { T(a, "label", b) };
d.Mm = function(a, b) { rh(a, !b, !A && !lb) };
d.Af = function(a, b) { this.xj(a, this.sa() + "-rtl", b) };
d.qf = function(a) { var b; return a.Bb & 32 && (b = a.Pb()) ? ne(b) : !1 };
d.zf = function(a, b) { var c; if (a.Bb & 32 && (c = a.Pb())) { if (!b && a.La & 32) { try { c.blur() } catch (e) {} a.La & 32 && a.Mj(null) } ne(c) != b && qe(c, b) } };
d.pa = function(a, b) { ph(a, b);
    a && T(a, "hidden", !b) };
d.Qd = function(a, b, c) { var e = a.G(); if (e) { var f = this.Nl(b);
        f && this.xj(a, f, c);
        Ni(e, b, c) } };

function Ni(a, b, c) { Ii || (Ii = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = Ii[b]; var e = a.getAttribute("role") || null;
    e && (e = Ji[e] || b, b = "checked" == b || "selected" == b ? e : b);
    b && T(a, b, c) } d.Od = function(a, b) { var c = this.yc(a);
    c && (he(c), b && (q(b) ? ke(c, b) : (a = function(a) { if (a) { var b = Yd(c);
            c.appendChild(q(a) ? b.createTextNode(a) : a) } }, u(b) ? sa(b, a) : !fa(b) || "nodeType" in b ? a(b) : sa(Aa(b), a)))) };
d.Pb = function(a) { return a.G() };
d.sa = function() { return "goog-control" };
d.bh = function(a) { var b = this.sa(),
        c = [b],
        e = this.sa();
    e != b && c.push(e);
    b = a.getState(); for (e = []; b;) { var f = b & -b;
        e.push(this.Nl(f));
        b &= ~f } c.push.apply(c, e);
    (a = a.ce) && c.push.apply(c, a);
    A && !xb("7") && c.push.apply(c, Ki(c)); return c };

function Ki(a, b) { var c = [];
    b && (a = za(a, [b]));
    sa([], function(e) {!va(e, oa(xa, a)) || b && !xa(e, b) || c.push(e.join("_")) }); return c } d.Nl = function(a) { this.ql || Oi(this); return this.ql[a] };
d.Xl = function(a) { this.Ht || (this.ql || Oi(this), this.Ht = db(this.ql));
    a = parseInt(this.Ht[a], 10); return isNaN(a) ? 0 : a };

function Oi(a) { var b = a.sa();
    b.replace(/\xa0|\s/g, " ");
    a.ql = { 1: b + "-disabled", 2: b + "-hover", 4: b + "-active", 8: b + "-selected", 16: b + "-checked", 32: b + "-focused", 64: b + "-open" } };

function U(a, b, c) { Uh.call(this, c); if (!b) { b = this.constructor; for (var e; b;) { e = ia(b); if (e = Bi[e]) break;
            b = b.s ? b.s.constructor : null } b = e ? v(e.Id) ? e.Id() : new e : null } this.Z = b;
    this.Li(aa(a) ? a : null);
    this.Hq = null } w(U, Uh);
d = U.prototype;
d.dd = null;
d.La = 0;
d.Bb = 39;
d.zn = 255;
d.Bf = 0;
d.Ma = !0;
d.ce = null;
d.Oj = !0;
d.hl = !1;
d.ey = null;
d.Pb = function() { return this.Z.Pb(this) };
d.Tl = function() { return this.mc || (this.mc = new li) };
d.xj = function(a, b) { b ? a && (this.ce ? xa(this.ce, a) || this.ce.push(a) : this.ce = [a], this.Z.xj(this, a, !0)) : a && this.ce && ya(this.ce, a) && (0 == this.ce.length && (this.ce = null), this.Z.xj(this, a, !1)) };
d.T = function() { var a = this.Z.T(this);
    this.P = a;
    Li(this.Z, a, this.Gj());
    this.hl || this.Z.Mm(a, !1);
    this.Y() || this.Z.pa(a, !1) };
d.Gj = function() { return this.ey };
d.Hp = function(a) { this.Hq = a; var b = this.G();
    b && this.Z.Hp(b, a) };
d.yc = function() { return this.Z.yc(this.G()) };
d.Vd = function(a) { return this.Z.Vd(a) };
d.tj = function(a) { this.P = a = this.Z.Fd(this, a);
    Li(this.Z, a, this.Gj());
    this.hl || this.Z.Mm(a, !1);
    this.Ma = "none" != a.style.display };
d.rb = function() { U.s.rb.call(this);
    Mi(this.Z, this, this.P);
    this.Z.Wj(this); if (this.Bb & -2 && (this.Oj && Pi(this, !0), this.Bb & 32)) { var a = this.Pb(); if (a) { var b = this.Tl();
            mi(b, a);
            Yh(this).ia(b, "key", this.Ld).ia(a, "focus", this.Nj).ia(a, "blur", this.Mj) } } };

function Pi(a, b) { var c = a.Fi ? Pb : Ob,
        e = Yh(a),
        f = a.G();
    b ? (e.ia(f, c.$i, a.Pj).ia(f, c.Rh, a.pf).ia(f, [c.Sh, c.Qh], a.si).ia(f, c.Zi, a.Ao), a.Fi && e.ia(f, "gotpointercapture", a.Cm), a.ri != ca && e.ia(f, "contextmenu", a.ri), A && (xb(9) || e.ia(f, "dblclick", a.$r), a.Vj || (a.Vj = new Qi(a), Kb(a, oa(Lb, a.Vj))))) : (e.sd(f, c.$i, a.Pj).sd(f, c.Rh, a.pf).sd(f, [c.Sh, c.Qh], a.si).sd(f, c.Zi, a.Ao), a.Fi && e.sd(f, "gotpointercapture", a.Cm), a.ri != ca && e.sd(f, "contextmenu", a.ri), A && (xb(9) || e.sd(f, "dblclick", a.$r), Lb(a.Vj), a.Vj = null)) }
d.Hd = function() { U.s.Hd.call(this);
    this.mc && this.mc.detach();
    this.Y() && this.isEnabled() && this.Z.zf(this, !1) };
d.Na = function() { U.s.Na.call(this);
    this.mc && (this.mc.A(), delete this.mc);
    delete this.Z;
    this.Vj = this.ce = this.dd = null };
d.Rc = function() { return this.dd };
d.Od = function(a) { this.Z.Od(this.G(), a);
    this.Li(a) };
d.Li = function(a) { this.dd = a };
d.Ml = function() { var a = this.Rc(); if (!a) return "";
    a = q(a) ? a : u(a) ? ua(a, te).join("") : re(a); return Ha(a) };
d.Af = function(a) { U.s.Af.call(this, a); var b = this.G();
    b && this.Z.Af(b, a) };
d.Mm = function(a) { this.hl = a; var b = this.G();
    b && this.Z.Mm(b, a) };
d.Y = function() { return this.Ma };
d.pa = function(a, b) { return b || this.Ma != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.G()) && this.Z.pa(b, a), this.isEnabled() && this.Z.zf(this, a), this.Ma = a, !0) : !1 };
d.isEnabled = function() { return !(this.La & 1) };
d.yf = function(a) { var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Ri(this, 1, !a) || (a || (this.setActive(!1), this.Sb(!1)), this.Y() && this.Z.zf(this, a), this.Qd(1, !a, !0)) };
d.Sb = function(a) { Ri(this, 2, a) && this.Qd(2, a) };
d.qs = function() { return !!(this.La & 4) };
d.setActive = function(a) { Ri(this, 4, a) && this.Qd(4, a) };
d.bk = function() { return !!(this.La & 8) };
d.Mi = function(a) { Ri(this, 8, a) && this.Qd(8, a) };

function Si(a, b) { Ri(a, 16, b) && a.Qd(16, b) } d.wi = function() { return !!(this.La & 64) };

function Ti(a, b) { Ri(a, 64, b) && a.Qd(64, b) } d.getState = function() { return this.La };
d.Qd = function(a, b, c) { c || 1 != a ? this.Bb & a && b != !!(this.La & a) && (this.Z.Qd(this, a, b), this.La = b ? this.La | a : this.La & ~a) : this.yf(!b) };
d.rc = function(a, b) { if (this.za && this.La & a && !b) throw Error("Component already rendered");!b && this.La & a && this.Qd(a, !1);
    this.Bb = b ? this.Bb | a : this.Bb & ~a };

function Ui(a, b) { return !!(a.zn & b) && !!(a.Bb & b) }

function Ri(a, b, c) { return !!(a.Bb & b) && !!(a.La & b) != c && (!(a.Bf & b) || a.dispatchEvent(Wh(b, c))) && !a.ei }
d.Pj = function(a) {!Vi(a, this.G()) && this.dispatchEvent("enter") && this.isEnabled() && Ui(this, 2) && this.Sb(!0) };
d.Ao = function(a) {!Vi(a, this.G()) && this.dispatchEvent("leave") && (Ui(this, 4) && this.setActive(!1), Ui(this, 2) && this.Sb(!1)) };
d.Cm = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };
d.ri = ca;

function Vi(a, b) { return !!a.relatedTarget && je(b, a.relatedTarget) }
d.pf = function(a) { this.isEnabled() && (Ui(this, 2) && this.Sb(!0), !Tb(a) || C && ob && a.ctrlKey || (Ui(this, 4) && this.setActive(!0), this.Z && this.Z.qf(this) && this.Pb().focus()));
    this.hl || !Tb(a) || C && ob && a.ctrlKey || a.preventDefault() };
d.si = function(a) { this.isEnabled() && (Ui(this, 2) && this.Sb(!0), this.qs() && this.sg(a) && Ui(this, 4) && this.setActive(!1)) };
d.$r = function(a) { this.isEnabled() && this.sg(a) };
d.sg = function(a) { Ui(this, 16) && Si(this, !(this.La & 16));
    Ui(this, 8) && this.Mi(!0);
    Ui(this, 64) && Ti(this, !this.wi()); var b = new Mb("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.np = a.np); return this.dispatchEvent(b) };
d.Nj = function() { Ui(this, 32) && Ri(this, 32, !0) && this.Qd(32, !0) };
d.Mj = function() { Ui(this, 4) && this.setActive(!1);
    Ui(this, 32) && Ri(this, 32, !1) && this.Qd(32, !1) };
d.Ld = function(a) { return this.Y() && this.isEnabled() && this.dh(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.dh = function(a) { return 13 == a.keyCode && this.sg(a) };
if (!v(U)) throw Error("Invalid component class " + U);
if (!v(Hi)) throw Error("Invalid renderer class " + Hi);
var Wi = ia(U);
Bi[Wi] = Hi;
zi("goog-control", function() { return new U(null) });

function Qi(a) { Hb.call(this);
    this.xl = a;
    this.rl = !1;
    this.ti = new Qh(this);
    Kb(this, oa(Lb, this.ti));
    a = this.xl.P;
    this.ti.ia(a, "mousedown", this.Nw).ia(a, "mouseup", this.Ow).ia(a, "click", this.Gw) } w(Qi, Hb);
var Xi = !A || 9 <= Number(yb);
Qi.prototype.Nw = function() { this.rl = !1 };
Qi.prototype.Ow = function() { this.rl = !0 };

function Yi(a, b) { if (!Xi) return a.button = 0, a.type = b, a; var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null); return c } Qi.prototype.Gw = function(a) { if (this.rl) this.rl = !1;
    else { var b = a.Ae,
            c = b.button,
            e = b.type,
            f = Yi(b, "mousedown");
        this.xl.pf(new Qb(f, a.currentTarget));
        f = Yi(b, "mouseup");
        this.xl.si(new Qb(f, a.currentTarget));
        Xi || (b.button = c, b.type = e) } };
Qi.prototype.Na = function() { this.xl = null;
    Qi.s.Na.call(this) };

function Zi(a, b, c) { Uh.call(this, c);
    this.Z = b || Ci.Id();
    this.qg = a || Gi } w(Zi, Uh);
var Fi = "horizontal",
    Gi = "vertical";
d = Zi.prototype;
d.Lo = null;
d.mc = null;
d.Z = null;
d.qg = null;
d.Ma = !0;
d.Yg = !0;
d.$g = !0;
d.va = -1;
d.Kb = null;
d.Bi = !1;
d.ov = !1;
d.by = !0;
d.cf = null;
d.Pb = function() { return this.Lo || this.Z.Pb(this) };
d.Tl = function() { return this.mc || (this.mc = new li(this.Pb())) };
d.T = function() { this.P = this.Z.T(this) };
d.yc = function() { return this.Z.yc(this.G()) };
d.Vd = function(a) { return this.Z.Vd(a) };
d.tj = function(a) { this.P = this.Z.Fd(this, a); "none" == a.style.display && (this.Ma = !1) };
d.rb = function() { Zi.s.rb.call(this);
    $h(this, function(a) { a.za && $i(this, a) }, this); var a = this.G();
    this.Z.Wj(this);
    this.pa(this.Ma, !0); var b = this.Fi ? Pb : Ob;
    Yh(this).ia(this, "enter", this.yo).ia(this, "highlight", this.Kw).ia(this, "unhighlight", this.Xw).ia(this, "open", this.Pw).ia(this, "close", this.Hw).ia(a, b.Rh, this.pf).ia(Yd(a), [b.Sh, b.Qh], this.Iw).ia(a, [b.Rh, b.Sh, b.Qh, b.$i, b.Zi, "contextmenu"], this.Fw);
    this.Fi && Yh(this).ia(a, "gotpointercapture", this.Cm);
    this.qf() && aj(this, !0) };
d.Cm = function(a) { var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId) };

function aj(a, b) { var c = Yh(a),
        e = a.Pb();
    b ? c.ia(e, "focus", a.Nj).ia(e, "blur", a.Mj).ia(a.Tl(), "key", a.Ld) : c.sd(e, "focus", a.Nj).sd(e, "blur", a.Mj).sd(a.Tl(), "key", a.Ld) } d.Hd = function() { this.qc(-1);
    this.Kb && Ti(this.Kb, !1);
    this.Bi = !1;
    Zi.s.Hd.call(this) };
d.Na = function() { Zi.s.Na.call(this);
    this.mc && (this.mc.A(), this.mc = null);
    this.Z = this.Kb = this.cf = this.Lo = null };
d.yo = function() { return !0 };
d.Kw = function(a) { var b = di(this, a.target); if (-1 < b && b != this.va) { var c = S(this, this.va);
        c && c.Sb(!1);
        this.va = b;
        c = S(this, this.va);
        this.Bi && c.setActive(!0);
        this.by && this.Kb && c != this.Kb && (c.Bb & 64 ? Ti(c, !0) : Ti(this.Kb, !1)) } b = this.G();
    null != a.target.G() && T(b, "activedescendant", a.target.G().id) };
d.Xw = function(a) { a.target == S(this, this.va) && (this.va = -1);
    this.G().removeAttribute("aria-activedescendant") };
d.Pw = function(a) {
    (a = a.target) && a != this.Kb && a.getParent() == this && (this.Kb && Ti(this.Kb, !1), this.Kb = a) };
d.Hw = function(a) { a.target == this.Kb && (this.Kb = null); var b = this.G(),
        c = a.target.G();
    b && a.target.La & 2 && c && (a = "", c && (a = c.id), T(b, "activedescendant", a)) };
d.pf = function(a) { this.Yg && (this.Bi = !0); var b = this.Pb();
    b && ne(b) ? b.focus() : a.preventDefault() };
d.Iw = function() { this.Bi = !1 };
d.Fw = function(a) { var b = this.Fi ? Pb : Ob,
        c = bj(this, a.target); if (c) switch (a.type) {
        case b.Rh:
            c.pf(a); break;
        case b.Sh:
        case b.Qh:
            c.si(a); break;
        case b.$i:
            c.Pj(a); break;
        case b.Zi:
            c.Ao(a); break;
        case "contextmenu":
            c.ri(a) } };

function bj(a, b) { if (a.cf)
        for (var c = a.G(); b && b !== c;) { var e = b.id; if (e in a.cf) return a.cf[e];
            b = b.parentNode }
    return null } d.Nj = function() {};
d.Mj = function() { this.qc(-1);
    this.Bi = !1;
    this.Kb && Ti(this.Kb, !1) };
d.Ld = function(a) { return this.isEnabled() && this.Y() && (0 != ai(this) || this.Lo) && this.dh(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1 };
d.dh = function(a) {
    var b = S(this, this.va);
    if (b && "function" == typeof b.Ld && b.Ld(a) || this.Kb && this.Kb != b && "function" == typeof this.Kb.Ld && this.Kb.Ld(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.qf()) this.Pb().blur();
            else return !1;
            break;
        case 36:
            cj(this);
            break;
        case 35:
            dj(this);
            break;
        case 38:
            if (this.qg == Gi) ej(this);
            else return !1;
            break;
        case 37:
            if (this.qg == Fi) bi(this) ? fj(this) : ej(this);
            else return !1;
            break;
        case 40:
            if (this.qg == Gi) fj(this);
            else return !1;
            break;
        case 39:
            if (this.qg == Fi) bi(this) ? ej(this) : fj(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function $i(a, b) { var c = b.G();
    c = c.id || (c.id = b.ba());
    a.cf || (a.cf = {});
    a.cf[c] = b } d.Xh = function(a, b) { Zi.s.Xh.call(this, a, b) };
d.Yh = function(a, b, c) { a.Bf |= 2;
    a.Bf |= 64;!this.qf() && this.ov || a.rc(32, !1);
    a.za && 0 != a.Oj && Pi(a, !1);
    a.Oj = !1; var e = a.getParent() == this ? di(this, a) : -1;
    Zi.s.Yh.call(this, a, b, c);
    a.za && this.za && $i(this, a);
    a = e; - 1 == a && (a = ai(this));
    a == this.va ? this.va = Math.min(ai(this) - 1, b) : a > this.va && b <= this.va ? this.va++ : a < this.va && b > this.va && this.va-- };
d.removeChild = function(a, b) { if (a = q(a) ? Zh(this, a) : a) { var c = di(this, a); - 1 != c && (c == this.va ? (a.Sb(!1), this.va = -1) : c < this.va && this.va--); var e = a.G();
        e && e.id && this.cf && (c = this.cf, e = e.id, e in c && delete c[e]) } b = a = Zi.s.removeChild.call(this, a, b);
    b.za && 1 != b.Oj && Pi(b, !0);
    b.Oj = !0; return a };
d.setOrientation = function(a) { if (this.G()) throw Error("Component already rendered");
    this.qg = a };
d.Y = function() { return this.Ma };
d.pa = function(a, b) { if (b || this.Ma != a && this.dispatchEvent(a ? "show" : "hide")) { this.Ma = a; var c = this.G();
        c && (ph(c, a), this.qf() && Di(this.Pb(), this.Yg && this.Ma), b || this.dispatchEvent(this.Ma ? "aftershow" : "afterhide")); return !0 } return !1 };
d.isEnabled = function() { return this.Yg };
d.yf = function(a) { this.Yg != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Yg = !0, $h(this, function(a) { a.Wt ? delete a.Wt : a.yf(!0) })) : ($h(this, function(a) { a.isEnabled() ? a.yf(!1) : a.Wt = !0 }), this.Bi = this.Yg = !1), this.qf() && Di(this.Pb(), a && this.Ma)) };
d.qf = function() { return this.$g };
d.zf = function(a) { a != this.$g && this.za && aj(this, a);
    this.$g = a;
    this.Yg && this.Ma && Di(this.Pb(), a) };
d.qc = function(a) {
    (a = S(this, a)) ? a.Sb(!0): -1 < this.va && S(this, this.va).Sb(!1) };
d.Sb = function(a) { this.qc(di(this, a)) };

function cj(a) { gj(a, function(a, c) { return (a + 1) % c }, ai(a) - 1) }

function dj(a) { gj(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, 0) }

function fj(a) { gj(a, function(a, c) { return (a + 1) % c }, a.va) }

function ej(a) { gj(a, function(a, c) { a--; return 0 > a ? c - 1 : a }, a.va) }

function gj(a, b, c) { c = 0 > c ? di(a, a.Kb) : c; var e = ai(a);
    c = b.call(a, c, e); for (var f = 0; f <= e;) { var h = S(a, c); if (h && a.Nq(h)) { a.Mp(c); break } f++;
        c = b.call(a, c, e) } } d.Nq = function(a) { return a.Y() && a.isEnabled() && !!(a.Bb & 2) };
d.Mp = function(a) { this.qc(a) };

function hj() {} w(hj, Hi);
da(hj);
hj.prototype.sa = function() { return "goog-menuheader" };

function ij(a, b, c) { U.call(this, a, c || hj.Id(), b);
    this.rc(1, !1);
    this.rc(2, !1);
    this.rc(4, !1);
    this.rc(32, !1);
    this.La = 1 } w(ij, U);
zi("goog-menuheader", function() { return new ij(null) });

function jj() { this.Rq = [] } w(jj, Hi);
da(jj);

function kj(a, b) { var c = a.Rq[b]; if (!c) { switch (b) {
            case 0:
                c = a.sa() + "-highlight"; break;
            case 1:
                c = a.sa() + "-checkbox"; break;
            case 2:
                c = a.sa() + "-content" } a.Rq[b] = c } return c } d = jj.prototype;
d.Ej = function() { return "menuitem" };
d.T = function(a) { var b = a.Yb().T("DIV", this.bh(a).join(" "), lj(this, a.Rc(), a.Yb()));
    mj(this, a, b, !!(a.Bb & 8) || !!(a.Bb & 16)); return b };
d.yc = function(a) { return a && a.firstChild };
d.Fd = function(a, b) { if (aa(b.firstElementChild)) var c = b.firstElementChild;
    else
        for (c = b.firstChild; c && 1 != c.nodeType;) c = c.nextSibling; var e = kj(this, 2);
    c && ui(c, e) || b.appendChild(lj(this, b.childNodes, a.Yb()));
    ui(b, "goog-option") && (a.yk(!0), this.yk(a, b, !0)); return jj.s.Fd.call(this, a, b) };
d.Od = function(a, b) { var c = this.yc(a),
        e = nj(this, a) ? c.firstChild : null;
    jj.s.Od.call(this, a, b);
    e && !nj(this, a) && c.insertBefore(e, c.firstChild || null) };

function lj(a, b, c) { a = kj(a, 2); return c.T("DIV", a, b) }
d.wt = function(a, b, c) { a && b && mj(this, a, b, c) };
d.yk = function(a, b, c) { a && b && mj(this, a, b, c) };

function nj(a, b) { return (b = a.yc(b)) ? (b = b.firstChild, a = kj(a, 1), !!b && ha(b) && 1 == b.nodeType && ui(b, a)) : !1 }

function mj(a, b, c, e) { Li(a, c, b.Gj());
    Mi(a, b, c);
    e != nj(a, c) && (e ? vi(c, "goog-option") : xi(c, "goog-option"), c = a.yc(c), e ? (a = kj(a, 1), c.insertBefore(b.Yb().T("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild)) }
d.Nl = function(a) { switch (a) {
        case 2:
            return kj(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return jj.s.Nl.call(this, a) } };
d.Xl = function(a) { var b = kj(this, 0); switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return jj.s.Xl.call(this, a) } };
d.sa = function() { return "goog-menuitem" };

function oj(a, b, c, e) { U.call(this, a, e || jj.Id(), c);
    this.setValue(b) } w(oj, U);
d = oj.prototype;
d.getValue = function() { var a = this.Vo; return null != a ? a : this.Ml() };
d.setValue = function(a) { this.Vo = a };
d.rc = function(a, b) { oj.s.rc.call(this, a, b); switch (a) {
        case 8:
            this.La & 16 && !b && Si(this, !1);
            (a = this.G()) && this.Z.wt(this, a, b); break;
        case 16:
            (a = this.G()) && this.Z.yk(this, a, b) } };
d.wt = function(a) { this.rc(8, a) };
d.yk = function(a) { this.rc(16, a) };
d.Ml = function() { var a = this.Rc(); return u(a) ? (a = ua(a, function(a) { return ha(a) && 1 == a.nodeType && (ui(a, "goog-menuitem-accel") || ui(a, "goog-menuitem-mnemonic-separator")) ? "" : te(a) }).join(""), Ha(a)) : oj.s.Ml.call(this) };
d.si = function(a) { var b = this.getParent(); if (b) { var c = b.$s;
        b.$s = null; if (c && r(a.clientX) && vc(c, new D(a.clientX, a.clientY))) return } oj.s.si.call(this, a) };
d.dh = function(a) { return a.keyCode == this.Gs && this.sg(a) ? !0 : oj.s.dh.call(this, a) };
d.Dw = function() { return this.Gs };
zi("goog-menuitem", function() { return new oj(null) });
oj.prototype.Gj = function() { return this.Bb & 16 ? "menuitemcheckbox" : this.Bb & 8 ? "menuitemradio" : oj.s.Gj.call(this) };
oj.prototype.getParent = function() { return U.prototype.getParent.call(this) };
oj.prototype.Wl = function() { return U.prototype.Wl.call(this) };

function pj() {} w(pj, Hi);
da(pj);
pj.prototype.T = function(a) { return a.Yb().T("DIV", this.sa()) };
pj.prototype.Fd = function(a, b) { b.id && Xh(a, b.id); if ("HR" == b.tagName) { var c = b;
        b = this.T(a);
        c.parentNode && c.parentNode.insertBefore(b, c);
        H(c) } else vi(b, this.sa()); return b };
pj.prototype.Od = function() {};
pj.prototype.sa = function() { return "goog-menuseparator" };

function qj(a, b) { U.call(this, null, a || pj.Id(), b);
    this.rc(1, !1);
    this.rc(2, !1);
    this.rc(4, !1);
    this.rc(32, !1);
    this.La = 1 } w(qj, U);
qj.prototype.rb = function() { qj.s.rb.call(this); var a = this.G();
    fi(a, "separator") };
zi("goog-menuseparator", function() { return new qj });

function rj(a) { this.yn = a || "menu" } w(rj, Ci);
da(rj);
rj.prototype.Vd = function(a) { return "UL" == a.tagName || rj.s.Vd.call(this, a) };
rj.prototype.po = function(a) { return "HR" == a.tagName ? new qj : rj.s.po.call(this, a) };
rj.prototype.sa = function() { return "goog-menu" };
rj.prototype.Wj = function(a) { rj.s.Wj.call(this, a);
    a = a.G();
    T(a, "haspopup", "true") };
zi("goog-menuseparator", function() { return new qj });

function sj(a, b) { Zi.call(this, Gi, b || rj.Id(), a);
    this.zf(!1) } w(sj, Zi);
d = sj.prototype;
d.fl = !0;
d.pv = !1;
d.sa = function() { return this.Z.sa() };
d.removeItem = function(a) {
    (a = this.removeChild(a, !0)) && a.A() };
d.Vr = function(a) { return S(this, a) };
d.setPosition = function(a, b) { var c = this.Y();
    c || ph(this.G(), !0); var e = this.G(),
        f = a;
    a = lh(e);
    f instanceof D && (b = f.y, f = f.x); var h = e.offsetLeft + (f - a.x);
    h instanceof D ? (f = h.x, b = h.y) : (f = h, b = e.offsetTop + (Number(b) - a.y));
    e.style.left = mh(f);
    e.style.top = mh(b);
    c || ph(this.G(), !1) };
d.Wr = function() { return this.Y() ? lh(this.G()) : null };
d.pa = function(a, b, c) {
    (b = sj.s.pa.call(this, a, b)) && a && this.za && this.fl && this.Pb().focus();
    this.$s = a && c && r(c.clientX) ? new D(c.clientX, c.clientY) : null; return b };
d.yo = function(a) { this.fl && this.Pb().focus(); return sj.s.yo.call(this, a) };
d.Nq = function(a) { return (this.pv || a.isEnabled()) && a.Y() && !!(a.Bb & 2) };
d.tj = function(a) { var b = this.Z; var c = this.Yb();
    c = Zd(c.fd, "DIV", b.sa() + "-content", a); for (var e = c.length, f = 0; f < e; f++) Ei(b, this, c[f]);
    sj.s.tj.call(this, a) };
d.dh = function(a) { var b = sj.s.dh.call(this, a);
    b || $h(this, function(c) {!b && c.Dw && c.Gs == a.keyCode && (this.isEnabled() && this.Sb(c), b = c.Ld(a)) }, this); return b };
d.qc = function(a) {
    sj.s.qc.call(this, a);
    if (a = S(this, a)) {
        var b = a.G();
        a = this.G() || de(document);
        var c = a || de(document);
        var e = lh(b),
            f = lh(c);
        if (!A || 9 <= Number(yb)) { k = ih(c, "borderLeftWidth"); var h = ih(c, "borderRightWidth");
            l = ih(c, "borderTopWidth");
            m = ih(c, "borderBottomWidth");
            h = new vg(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k)) } else { var k = th(c, "borderLeft");
            h = th(c, "borderRight"); var l = th(c, "borderTop"),
                m = th(c, "borderBottom");
            h = new vg(l, h, m, k) } c == de(document) ? (k = e.x - c.scrollLeft, e = e.y - c.scrollTop,
            !A || 10 <= Number(yb) || (k += h.left, e += h.top)) : (k = e.x - f.x - h.left, e = e.y - f.y - h.top);
        b = oh(b);
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
x.ea = {};
x.ea.yl = null;
x.ea.Or = null;
x.ea.show = function(a, b, c) { x.K.show(x.ea, c, null); if (b.length) { var e = x.ea.Bm(b, c);
        ec(e, "action", x.ea.Pa);
        x.ea.Wc(e, a, c);
        setTimeout(function() { e.G().focus() }, 1);
        x.ea.yl = null } else x.ea.Pa() };
x.ea.Bm = function(a, b) { var c = new sj;
    c.Af(b); for (var e = 0, f; f = a[e]; e++) { var h = new oj(f.text);
        h.Af(b);
        c.Xh(h, !0);
        h.yf(f.enabled);
        f.enabled && (ec(h, "action", f.gb), h.ri = function() { this.dispatchEvent("action") }) } return c };
x.ea.Wc = function(a, b, c) { var e = x.i.xo();
    b = { top: b.clientY + e.top, bottom: b.clientY + e.top, left: b.clientX + e.left, right: b.clientX + e.left };
    x.ea.qj(a); var f = x.i.Si.nf(a);
    c && x.i.Si.Fq(e, b, f);
    x.K.op(e, b, f, c);
    a.G().focus() };
x.ea.qj = function(a) { a.aa(x.K.na); var b = a.G();
    x.i.pb(b, "blocklyContextMenu");
    x.O(b, "contextmenu", null, x.i.Gx);
    a.fl = !0;
    a.zf(!0) };
x.ea.Pa = function() { x.K.Sj(x.ea);
    x.ea.yl = null;
    x.ea.Or && x.Qa(x.ea.Or) };
x.ea.ll = function(a, b) { return function() { x.j.disable(); try { var c = x.F.gi(b, a.o),
                e = a.oa();
            e.x = a.u ? e.x - x.bd : e.x + x.bd;
            e.y += 2 * x.bd;
            c.moveBy(e.x, e.y) } finally { x.j.enable() } x.j.isEnabled() && !c.jb && x.j.V(new x.j.Vk(c));
        c.select() } };
x.ea.xv = function(a) { var b = Ac(a, !1).length,
        c = Oc(a);
    c && (b -= Ac(c, !1).length); return { text: 1 == b ? x.g.DELETE_BLOCK : x.g.DELETE_X_BLOCKS.replace("%1", String(b)), enabled: !0, gb: function() { x.j.S(!0);
            a.A(!0, !0);
            x.j.S(!1) } } };
x.ea.zv = function(a) { return { enabled: !(v(a.Ta) ? !a.Ta() : !a.Ta), text: x.g.HELP, gb: function() { var b = v(a.Ta) ? a.Ta() : a.Ta;
            b && window.open(b) } } };
x.ea.yv = function(a) { var b = !0;
    Ac(a, !1).length > id(a.o) && (b = !1); return { text: x.g.DUPLICATE_BLOCK, enabled: b, gb: function() { x.Lr(a) } } };
x.ea.wv = function(a) { var b = { enabled: !A };
    a.Ya ? (b.text = x.g.REMOVE_COMMENT, b.gb = function() { a.xf(null) }) : (b.text = x.g.ADD_COMMENT, b.gb = function() { a.xf("") }); return b };
x.ea.Nv = function(a) { return { text: x.g.AB, enabled: !0, gb: function() { x.j.S(!0);
            a.A(!0, !0);
            x.j.S(!1) } } };
x.ea.Ov = function(a) { return { text: x.g.Uz, enabled: !0, gb: function() { x.Lr(a) } } };
x.ea.LC = function(a, b) { var c = { enabled: !0 };
    c.text = x.g.Uy;
    c.gb = function() { var c = new Df(a, x.g.lC, 100, 100); if (!a.Ho)
            for (var f = a.w; f;) { if (-1 != (" " + (f.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) { a.Ho = f; break } f = f.parentNode } f = a.Ho.getBoundingClientRect();
        f = new D(b.clientX - f.left, b.clientY - f.top); var h = x.i.Sl(a.Va);
        f = xc(f, h).scale(1 / a.scale);
        c.moveBy(f.x, f.y);
        a.R && (c.Ec(), c.aa(!1), c.select()) }; return c };

function N(a, b, c) { this.w = x.i.B("g", {}, null);
    this.w.Gf = "";
    this.Hk = x.i.B("path", { "class": "blocklyPathDark", transform: "translate(1,1)" }, this.w);
    this.Rd = x.i.B("path", { "class": "blocklyPath" }, this.w);
    this.Dg = x.i.B("path", { "class": "blocklyPathLight" }, this.w);
    this.Rd.qd = this;
    this.R = !1;
    this.Ue = x.i.hg() && !!a.Ab;
    x.C.Rg(this.Rd);
    N.s.constructor.call(this, a, b, c);
    this.w.dataset && (this.w.dataset.id = this.id) } w(N, hd);
d = N.prototype;
d.height = 0;
d.width = 0;
d.Zc = null;
d.Ec = function() { for (var a = 0, b; b = this.X[a]; a++) b.I();
    b = vf(this); for (a = 0; a < b.length; a++) Me(b[a]);
    this.Hf();
    Ef(this);
    this.o.options.readOnly || this.fo || x.O(this.ha(), "mousedown", this, this.tf);
    this.fo = !0;
    this.ha().parentNode || this.o.Va.appendChild(this.ha()) };
d.select = function() { if (this.jb && this.getParent()) this.getParent().select();
    else if (x.selected != this) { var a = null; if (x.selected) { a = x.selected.id;
            x.j.disable(); try { x.selected.Hh() } finally { x.j.enable() } } a = new Ic(null, "selected", a, this.id);
        a.Kc = this.o.id;
        x.j.V(a);
        x.selected = this;
        this.Zh() } };
d.Hh = function() { if (x.selected == this) { var a = new Ic(null, "selected", this.id, null);
        a.Kc = this.o.id;
        x.j.V(a);
        x.selected = null;
        this.uh() } };
d.kd = null;
d.Ya = null;
d.ud = null;

function vf(a) { var b = [];
    a.kd && b.push(a.kd);
    a.Ya && b.push(a.Ya);
    a.ud && b.push(a.ud); return b } d.yh = function(a) { var b = this.rg; if (a != b) { Eg();
        N.s.yh.call(this, a);
        Fg(); var c = this.ha(); if (!this.o.Jo && c) { var e = this.oa();
            a ? (a.ha().appendChild(c), a = this.oa(), nf(this, a.x - e.x, a.y - e.y)) : b && x.selected != this && (this.o.Va.appendChild(c), this.translate(e.x, e.y)) } } };
d.oa = function() { var a = 0,
        b = 0,
        c = this.Ue ? this.o.Ab.Ac() : null,
        e = this.ha(); if (e) { do { var f = x.i.Bc(e);
            a += f.x;
            b += f.y;
            this.Ue && this.o.Ab.ye.firstChild == e && (f = this.o.Ab.Yl(), a += f.x, b += f.y);
            e = e.parentNode } while (e && e != this.o.Va && e != c) } return new D(a, b) };
d.moveBy = function(a, b) { var c = x.j.isEnabled(); if (c) var e = new x.j.Wi(this); var f = this.oa();
    this.translate(f.x + a, f.y + b);
    nf(this, a, b);
    c && (e.vf(), x.j.V(e));
    Gf(this.o) };
d.translate = function(a, b) { this.ha().setAttribute("transform", "translate(" + a + "," + b + ")") };
d.um = function() { if (this.Ue) { var a = this.oa();
        x.i.removeAttribute(this.ha(), "transform");
        this.o.Ab.Ff(a.x, a.y);
        Hf(this.o.Ab, this.ha()) } };
d.Js = function(a) { this.Ue && (this.translate(a.x, a.y), this.o.Ab.jj(this.o.Va)) };
d.tm = function(a) { this.Ue ? this.o.Ab.Ff(a.x, a.y) : (this.w.Gf = "translate(" + a.x + "," + a.y + ")", this.w.setAttribute("transform", this.w.Gf + this.w.Ah)) };

function Xg(a) { if (a.o && !a.o.sb() && !a.getParent() && !a.vb) { var b = a.o.Kd; if (b && b.ny) { var c = b.Xp,
                e = c / 2,
                f = a.oa();
            b = Math.round((f.x - e) / c) * c + e - f.x;
            c = Math.round((f.y - e) / c) * c + e - f.y;
            b = Math.round(b);
            c = Math.round(c);
            0 == b && 0 == c || a.moveBy(b, c) } } } d.no = function() { var a = this.oa(),
        b = this.M ? M : 0,
        c = this.Hb(); if (this.u) { var e = new D(a.x - (c.width - b), a.y);
        a = new D(a.x + b, a.y + c.height) } else e = new D(a.x - b, a.y), a = new D(a.x + c.width - b, a.y + c.height); return { rd: e, Ud: a } };
d.zg = function(a) { if (this.ve != a) { for (var b = [], c = 0, e; e = this.X[c]; c++) b.push.apply(b, e.pa(!a)); if (a) { e = vf(this); for (c = 0; c < e.length; c++) e[c].pa(!1);
            c = this.toString(x.eu);
            O(R(this, "_TEMP_COLLAPSED_INPUT"), c).I() } else this.Ga("_TEMP_COLLAPSED_INPUT"), this.Pe(null);
        N.s.zg.call(this, a);
        b.length || (b[0] = this); if (this.R)
            for (c = 0; a = b[c]; c++) a.aa() } };
d.bq = function(a, b) { for (var c = [], e = 0, f; f = this.X[e]; e++) { for (var h = 0, k; k = f.Oa[h]; h++) k instanceof tj && c.push(k);
        f.connection && (f = J(f.connection)) && c.push(f) } a = c.indexOf(a); - 1 == a && (a = b ? -1 : c.length);
    (c = c[b ? a + 1 : a - 1]) ? c instanceof uh ? c.Re() : c.bq(null, b): (c = this.getParent()) && c.bq(this, b) };
d.tf = function(a) { var b = this.o && this.o.Ee(a);
    b && (Zf(b, this), b.Uc = a) };
d.Oi = function(a) {
    if (!this.o.options.readOnly && this.contextMenu) {
        var b = this,
            c = [];
        if (this.lc() && this.Je() && !b.vb) {
            c.push(x.ea.yv(b));
            Pe(this) && !this.ve && this.o.options.lj && c.push(x.ea.wv(b));
            if (!this.ve)
                for (var e = 1; e < this.X.length; e++)
                    if (this.X[e - 1].type != x.yb && this.X[e].type != x.yb) { e = { enabled: !0 }; var f = gh(this);
                        e.text = f ? x.g.EXTERNAL_INPUTS : x.g.INLINE_INPUTS;
                        e.gb = function() { b.bc(!f) };
                        c.push(e); break } this.o.options.collapse && (this.ve ? (e = { enabled: !0 }, e.text = x.g.EXPAND_BLOCK, e.gb = function() { b.zg(!1) },
                c.push(e)) : (e = { enabled: !0 }, e.text = x.g.COLLAPSE_BLOCK, e.gb = function() { b.zg(!0) }, c.push(e)));
            this.o.options.disable && (e = { text: this.disabled ? x.g.ENABLE_BLOCK : x.g.DISABLE_BLOCK, enabled: !Lh(this), gb: function() { b.Pd(!b.disabled) } }, c.push(e));
            c.push(x.ea.xv(b))
        }
        c.push(x.ea.zv(b));
        this.ff && this.ff(c);
        x.ea.show(a, c, this.u);
        x.ea.yl = this
    }
};

function nf(a, b, c) { if (a.R) { for (var e = a.De(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
        e = vf(a); for (f = 0; f < e.length; f++) Ne(e[f]); for (f = 0; f < a.bf.length; f++) nf(a.bf[f], b, c) } }
d.Ag = function(a) { if (a) { var b = this.ha();
        b.Gf = "";
        b.Ah = "";
        x.Gl = x.Gl.concat(this.De(!0));
        x.i.pb(this.w, "blocklyDragging") } else x.Gl = [], x.i.Rb(this.w, "blocklyDragging"); for (b = 0; b < this.bf.length; b++) this.bf[b].Ag(a) };
d.xh = function(a) { N.s.xh.call(this, a);
    Ef(this) };
d.Kp = function(a) { N.s.Kp.call(this, a);
    a = vf(this); for (var b = 0; b < a.length; b++) a[b].If() };
d.Pp = function(a) { N.s.Pp.call(this, a);
    this.Hf() };
d.ha = function() { return this.w };
d.A = function(a, b) { if (this.o) { x.C.Pa();
        Eg(); var c = this.o; if (x.selected == this) { this.Hh(); var e = this.o;
            e.Eb && e.Eb.cancel() } x.ea.yl == this && x.ea.Pa();
        b && this.R && (Ke(this, a), x.Ja.lw(this));
        this.R = !1; if (this.Zc) { for (var f in this.Zc) clearTimeout(this.Zc[f]);
            this.Zc = null } x.j.disable(); try { var h = vf(this); for (b = 0; b < h.length; b++) h[b].A() } finally { x.j.enable() } N.s.A.call(this, a);
        H(this.w);
        Gf(c);
        this.Hk = this.Dg = this.Rd = this.w = null;
        Fg() } };
d.Hf = function() { if (!this.disabled) { var a = this.we,
            b = uj(a); if (this.jb) b = vj([255, 255, 255], b, .6), a = wj(b), this.Dg.style.display = "none", this.Hk.setAttribute("fill", a);
        else { this.Dg.style.display = ""; var c = wj(vj([255, 255, 255], b, .3));
            b = wj(vj([0, 0, 0], b, .2));
            this.Dg.setAttribute("stroke", c);
            this.Hk.setAttribute("fill", b) } this.Rd.setAttribute("fill", a);
        a = vf(this); for (c = 0; c < a.length; c++) a[c].Hf(); for (a = 0; c = this.X[a]; a++) { b = 0; for (var e; e = c.Oa[b]; b++) e.Cj() } } };

function sf(a) { a.disabled || Lh(a) ? x.i.pb(a.w, "blocklyDisabled") && a.Rd.setAttribute("fill", "url(#" + a.o.options.vj + ")") : x.i.Rb(a.w, "blocklyDisabled") && a.Hf();
    a = a.Vf(!1); for (var b = 0, c; c = a[b]; b++) sf(c) } d.Ol = function() { return this.Ya ? this.Ya.Ib().replace(/\s+$/, "").replace(/ +\n/g, "\n") : "" };
d.xf = function(a) { var b = !1;
    q(a) ? (this.Ya || (this.Ya = new Oe(this), b = !0), this.Ya.Ob(a)) : this.Ya && (this.Ya.A(), b = !0);
    b && this.R && (this.aa(), this.qb()) };
d.Pe = function(a, b) {
    this.Zc || (this.Zc = Object.create(null));
    var c = b || "";
    if (c) this.Zc[c] && (clearTimeout(this.Zc[c]), delete this.Zc[c]);
    else
        for (var e in this.Zc) clearTimeout(this.Zc[e]), delete this.Zc[e];
    if (this.o.sb()) { var f = this;
        this.Zc[c] = setTimeout(function() { f.o && (delete f.Zc[c], f.Pe(a, c)) }, 100) } else {
        this.vb && (a = null);
        b = Jh(this);
        for (e = null; b;) b.isCollapsed() && (e = b), b = Jh(b);
        e && e.Pe(a, "collapsed " + this.id + " " + c);
        b = !1;
        q(a) ? (this.ud || (this.ud = new Qe(this), b = !0), this.ud.Ob(a, c)) : this.ud && !c ? (this.ud.A(),
            b = !0) : this.ud && (b = this.ud.Ib(), this.ud.Ob("", c), (e = this.ud.Ib()) || this.ud.A(), b = b != e);
        b && this.R && (this.aa(), this.qb())
    }
};
d.Cg = function(a) { this.kd && this.kd !== a && this.kd.A();
    a && (a.U = this, this.kd = a, Me(a)) };
d.Pd = function(a) { this.disabled != a && (N.s.Pd.call(this, a), this.R && sf(this)) };
d.Sb = function(a) { this.R && (a ? (this.Rd.setAttribute("filter", "url(#" + this.o.options.Nr + ")"), this.Dg.style.display = "none") : (x.i.removeAttribute(this.Rd, "filter"), delete this.Dg.style.display)) };
d.Zh = function() { x.i.pb(this.w, "blocklySelected") };
d.uh = function() { x.i.Rb(this.w, "blocklySelected") };
d.Ak = function(a) { a ? x.i.pb(this.w, "blocklyDraggingDelete") : x.i.Rb(this.w, "blocklyDraggingDelete") };
d.Ha = function(a) { N.s.Ha.call(this, a);
    this.R && this.Hf() };

function Bf(a) { do { var b = a.ha();
        b.parentNode.appendChild(b);
        a = a.getParent() } while (a) } d.nd = function(a, b) { N.s.nd.call(this, a, b);
    this.R && (this.aa(), this.qb()) };
d.md = function(a, b) { N.s.md.call(this, a, b);
    this.R && (this.aa(), this.qb()) };
d.Ic = function(a, b) { N.s.Ic.call(this, a, b);
    this.R && (this.aa(), this.qb()) };
d.bc = function(a) { N.s.bc.call(this, a);
    this.R && (this.aa(), this.qb()) };
d.Ga = function(a, b) { N.s.Ga.call(this, a, b);
    this.R && (this.aa(), this.qb()) };
d.Wo = function(a, b) { N.s.Wo.call(this, a, b);
    this.R && (this.aa(), this.qb()) };
d.fj = function(a, b) { a = N.s.fj.call(this, a, b);
    this.R && (this.aa(), this.qb()); return a };
d.De = function(a) { var b = []; if (a || this.R)
        if (this.M && b.push(this.M), this.$ && b.push(this.$), this.L && b.push(this.L), a || !this.ve) { a = 0; for (var c; c = this.X[a]; a++) c.connection && b.push(c.connection) } return b };
d.gk = function(a) { return new gf(this, a) };
d.qb = function() { if (this.o && !this.o.sb()) { var a = jf(this); if (!a.vb)
            for (var b = this.De(!1), c = 0, e; e = b[c]; c++) { e.isConnected() && Xe(e) && J(e).qb(); for (var f = e.Ms(x.bd), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || jf(k.v) != a && (Xe(e) ? Ue(k, e) : Ue(e, k)) } } };

function Cf(a) { var b = x.j.Ac();
    setTimeout(function() { x.j.S(b);
        Xg(a);
        x.j.S(!1) }, x.Uk / 2);
    setTimeout(function() { x.j.S(b);
        a.qb();
        x.j.S(!1) }, x.Uk) };
var M = 8,
    xj = 7.5 * (1 - Math.SQRT1_2) + .5,
    yj = 8.5 * (1 - Math.SQRT1_2) - .5,
    of = "v 5 c 0,10 -" + M + ",-8 -" + M + ",7.5 s " + M + ",-2.5 " + M + ",7.5",
    zj = "v 6.5 m -" + .97 * M + ",3 q -" + .05 * M + ",10 " + .3 * M + ",9.5 m " + .67 * M + ",-1.9 v 1.4",
    Aj = "m " + xj + "," + xj,
    Bj = "a 8,8 0 0,0 " + (-yj - .5) + "," + (8 - yj),
    Cj = "a 8.5,8.5 0 0,0 " + (8 - yj) + "," + (yj + .5);
N.prototype.Hb = function() { var a = this.height,
        b = this.width,
        c = Oc(this);
    c ? (c = c.Hb(), a += c.height - 4, b = Math.max(b, c.width)) : this.L || this.M || (a += 2); return { height: a, width: b } };
N.prototype.aa = function(a) {
    Eg();
    this.R = !0;
    var b = 10;
    this.u && (b = -b);
    for (var c = vf(this), e = 0; e < c.length; e++) { var f = c[e]; if (f.Wq && f.U.isCollapsed()) f.Dc.setAttribute("display", "none");
        else { f.Dc.setAttribute("display", "block"); var h = f.pn;
            f.U.u && (b -= h);
            f.Dc.setAttribute("transform", "translate(" + b + ",5)");
            Ne(f);
            b = f.U.u ? b - 10 : b + (h + 10) } }
    var k = b += this.u ? 10 : -10,
        l = this.X;
    c = [];
    c.Nb = k + 20;
    if (this.$ || this.L) c.Nb = Math.max(c.Nb, 40);
    f = e = 0;
    for (var m = h = !1, n = !1, p = void 0, t = gh(this) && !this.isCollapsed(), y = 0, z; z = l[y]; y++)
        if (z.Y()) {
            if (t &&
                p && p != x.yb && z.type != x.yb) var E = c[c.length - 1];
            else p = z.type, E = [], E.type = t && z.type != x.yb ? -1 : z.type, E.height = 0, c.push(E);
            E.push(z);
            z.vg = 25;
            z.Zb = t && z.type == x.$a ? M + 12.5 : 0;
            if (z.connection && z.connection.isConnected()) { var Fa = J(z.connection).Hb();
                z.vg = Math.max(z.vg, Fa.height);
                z.Zb = Math.max(z.Zb, Fa.width) } t || y != l.length - 1 ? !t && z.type == x.$a && l[y + 1] && l[y + 1].type == x.yb && z.vg-- : z.vg--;
            E.height = Math.max(E.height, z.vg);
            z.ee = 0;
            1 == c.length && (z.ee += this.u ? -k : k);
            Fa = !1;
            for (var cd = 0, Qa; Qa = z.Oa[cd]; cd++) {
                0 != cd && (z.ee +=
                    10);
                var Hd = Qa.nf();
                Qa.Zb = Hd.width;
                Qa.Gm = Fa && Qa.Mg ? 10 : 0;
                z.ee += Qa.Zb + Qa.Gm;
                E.height = Math.max(E.height, Hd.height);
                Fa = Qa.Mg
            } - 1 != E.type && (E.type == x.yb ? (m = !0, f = Math.max(f, z.ee)) : (E.type == x.$a ? h = !0 : E.type == x.We && (n = !0), e = Math.max(e, z.ee)))
        } for (k = 0; E = c[k]; k++)
        if (E.Lt = !1, -1 == E.type)
            for (l = 0; z = E[l]; l++)
                if (z.type == x.$a) { E.height += 10;
                    E.Lt = !0; break } c.Wm = 20 + f;
    m && (c.Nb = Math.max(c.Nb, c.Wm + 30));
    h ? c.Nb = Math.max(c.Nb, e + 20 + M) : n && (c.Nb = Math.max(c.Nb, e + 20));
    c.ax = h;
    c.zC = m;
    c.yC = n;
    f = b;
    this.Dt = !1;
    this.height = 0;
    this.M ? this.Yp =
        this.Um = !0 : (this.Yp = this.Um = !1, this.$ && (b = J(this.$)) && Oc(b) == this && (this.Um = !0), Oc(this) && (this.Yp = !0));
    h = [];
    m = [];
    b = [];
    e = [];
    n = c.Nb;
    this.Um ? (h.push("m 0,0"), b.push("m 0.5,0.5"), this.Dt && (h.push("c 30,-15 70,-15 100,0"), b.push(this.u ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (h.push("m 0,8"), b.push(this.u ? Aj : "m 0.5,7.5"), h.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.$ && (h.push("H", 15), b.push("H", 15), h.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"),
        lf(this.$, this.u ? -30 : 30, 0));
    h.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    for (z = n = 0; E = c[z]; z++) {
        p = 10;
        0 == z && (p += this.u ? -f : f);
        b.push("M", c.Nb - .5 + "," + (n + .5));
        if (this.isCollapsed()) k = E[0], t = n, Dj(this, k.Oa, p, t), h.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), k = E.height - 20, h.push("v", k), this.u && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", k - .7)), this.width += 15;
        else if (-1 == E.type) {
            for (l = 0; k = E[l]; l++) t = n, E.Lt && (t += 5), p = Dj(this, k.Oa, p, t), k.type != x.We && (p += k.Zb + 10), k.type == x.$a && (m.push("M", p -
                10 + "," + (n + 5)), m.push("h", M - 2 - k.Zb), m.push( of ), m.push("v", k.vg + 1 - 20), m.push("h", k.Zb + 2 - M), m.push("z"), this.u ? (e.push("M", p - 10 - 2.5 + M - k.Zb + "," + (n + 5 + .5)), e.push(zj), e.push("v", k.vg - 20 + 2.5), e.push("h", k.Zb - M + 2)) : (e.push("M", p - 10 + .5 + "," + (n + 5 + .5)), e.push("v", k.vg + 1), e.push("h", M - 2 - k.Zb), e.push("M", p - k.Zb - 10 + .9 + "," + (n + 5 + 20 - .7)), e.push("l", .46 * M + ",-2.1")), t = this.u ? -p - M + 10 + k.Zb + 1 : p + M - 10 - k.Zb - 1, y = n + 5 + 1, lf(k.connection, t, y));
            p = Math.max(p, c.Nb);
            this.width = Math.max(this.width, p);
            h.push("H", p);
            b.push("H", p - .5);
            h.push("v", E.height);
            this.u && b.push("v", E.height - 1)
        } else E.type == x.$a ? (k = E[0], t = n, k.align != x.Vi && (l = c.Nb - k.ee - M - 20, k.align == x.Lg ? p += l : k.align == x.Sk && (p += l / 2)), Dj(this, k.Oa, p, t), h.push( of ), l = E.height - 20, h.push("v", l), this.u ? (b.push(zj), b.push("v", l + .5)) : (b.push("M", c.Nb - 5 + "," + (n + 20 - .7)), b.push("l", .46 * M + ",-2.1")), t = this.u ? -c.Nb - 1 : c.Nb + 1, lf(k.connection, t, n), k.connection.isConnected() && (this.width = Math.max(this.width, c.Nb + J(k.connection).Hb().width - M + 1))) : E.type == x.We ? (k = E[0], t = n, k.align != x.Vi && (l =
            c.Nb - k.ee - 20, c.ax && (l -= M), k.align == x.Lg ? p += l : k.align == x.Sk && (p += l / 2)), Dj(this, k.Oa, p, t), h.push("v", E.height), this.u && b.push("v", E.height - 1)) : E.type == x.yb && (k = E[0], 0 == z && (h.push("v", 10), this.u && b.push("v", 9), n += 10), t = n, k.align != x.Vi && (l = c.Wm - k.ee - 20, k.align == x.Lg ? p += l : k.align == x.Sk && (p += l / 2)), Dj(this, k.Oa, p, t), p = c.Wm + 30, h.push("H", p), h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), h.push("v", E.height - 16), h.push("a 8,8 0 0,0 8,8"), h.push("H", c.Nb), this.u ? (b.push("M", p - 30 + yj + "," + (n + yj)), b.push(Bj),
            b.push("v", E.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) : (b.push("M", p - 30 + yj + "," + (n + E.height - yj)), b.push(Cj)), b.push("H", c.Nb - .5), t = this.u ? -p : p + 1, lf(k.connection, t, n + 1), k.connection.isConnected() && (this.width = Math.max(this.width, c.Wm + J(k.connection).Hb().width)), z == c.length - 1 || c[z + 1].type == x.yb) && (h.push("v", 10), this.u && b.push("v", 9), n += 10);
        n += E.height
    }
    c.length || (n = 25, h.push("V", n), this.u && b.push("V", n - 1));
    c = n;
    this.height += c + 1;
    this.L && (h.push("H", 30 + (this.u ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), lf(this.L,
        this.u ? -30 : 30, c + 1), this.height += 4);
    this.Yp ? (h.push("H 0"), this.u || b.push("M", "0.5," + (c - .5))) : (h.push("H", 8), h.push("a", "8,8 0 0,1 -8,-8"), this.u || (b.push("M", xj + "," + (c - xj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
    this.M ? (lf(this.M, 0, 0), h.push("V", 20), h.push("c 0,-10 -" + M + ",8 -" + M + ",-7.5 s " + M + ",2.5 " + M + ",-7.5"), this.u ? (b.push("M", -.25 * M + ",8.4"), b.push("l", -.45 * M + ",-2.1")) : (b.push("V", 18.5), b.push("m", -.92 * M + ",-0.5 q " + -.19 * M + ",-5.5 0,-11"), b.push("m", .92 * M + ",1 V 0.5 H 1")), this.width += M) : this.u ||
        (this.Um ? b.push("V", .5) : b.push("V", 8));
    h.push("z");
    c = h.join(" ") + "\n" + m.join(" ");
    this.Rd.setAttribute("d", c);
    this.Hk.setAttribute("d", c);
    c = b.join(" ") + "\n" + e.join(" ");
    this.Dg.setAttribute("d", c);
    this.u && (this.Rd.setAttribute("transform", "scale(-1 1)"), this.Dg.setAttribute("transform", "scale(-1 1)"), this.Hk.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    c = this.oa();
    this.$ && kf(this.$, c);
    this.M && kf(this.M, c);
    for (b = 0; b < this.X.length; b++)
        if (e = this.X[b].connection) kf(e, c), e.isConnected() && mf(e);
    this.L && (kf(this.L, c), this.L.isConnected() && mf(this.L));
    !1 !== a && ((a = this.getParent()) ? a.aa(!0) : Gf(this.o));
    Fg()
};

function Dj(a, b, c, e) { e += 5;
    a.u && (c = -c); for (var f = 0, h; h = b[f]; f++) { var k = h.ha();
        k && (a.u ? (c -= h.Gm + h.Zb, k.setAttribute("transform", "translate(" + c + "," + e + ")"), h.Zb && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + h.Gm) + "," + e + ")"), h.Zb && (c += h.Gm + h.Zb + 10))) } return a.u ? -c : c };
x.g = {};

function tj(a, b) { tj.s.constructor.call(this, a, b) } w(tj, uh);
tj.la = function(a) { var b = x.i.pc(a.text);
    b = new tj(b, a["class"]); "boolean" === typeof a.spellcheck && (b.Tm = a.spellcheck); return b };
var Ej = null;
d = tj.prototype;
d.Xk = "text";
d.Tm = !0;
d.A = function() { x.K.Sj(this);
    tj.s.A.call(this) };
d.setValue = function(a) { if (null !== a) { if (this.v) { var b = Ie(this, a);
            null !== b && (a = b) } uh.prototype.setValue.call(this, a) } };
d.Ob = function(a) { null !== a && (a = String(a), a !== this.ya && (this.v && x.j.isEnabled() && x.j.V(new x.j.Mc(this.v, "field", this.name, this.ya, a)), uh.prototype.Ob.call(this, a))) };
d.Re = function(a) { this.m = this.v.o;
    a = a || !1; if (!a && (nb || pb || rb)) Fj(this);
    else { x.K.show(this, this.v.u, Gj(this)); var b = x.K.na,
            c = G("INPUT", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.Tm); var e = 11 * this.m.scale + "pt";
        b.style.fontSize = e;
        c.style.fontSize = e;
        Ej = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.ya;
        c.Qs = null;
        Hj(this);
        this.Im();
        a || (c.focus(), c.select());
        c.Ox = x.O(c, "keydown", this, this.Nx);
        c.Rx = x.O(c, "keyup", this, this.Ts);
        c.Qx = x.O(c, "keypress", this, this.Ts);
        c.Zs = this.Im.bind(this);
        this.m.Ad(c.Zs) } };

function Fj(a) { x.prompt(x.g.CHANGE_VALUE_TITLE, a.ya, function(b) { a.v && (b = Ie(a, b));
        a.setValue(b) }) } d.Nx = function(a) { var b = Ej;
    13 == a.keyCode ? x.K.Pa() : 27 == a.keyCode ? (b.value = b.defaultValue, x.K.Pa()) : 9 == a.keyCode && (x.K.Pa(), this.v.bq(this, !a.shiftKey), a.preventDefault()) };
d.Ts = function() { var a = Ej,
        b = a.value;
    b !== a.Qs ? (a.Qs = b, this.setValue(b), Hj(this)) : C && this.v.aa();
    this.Im();
    x.Eh(this.v.o) };

function Hj(a) { var b = !0,
        c = Ej;
    a.v && (b = Ie(a, c.value));
    null === b ? x.i.pb(c, "blocklyInvalidInput") : x.i.Rb(c, "blocklyInvalidInput") } d.Im = function() { var a = x.K.na,
        b = Ch(this);
    a.style.width = b.right - b.left + "px";
    a.style.height = b.bottom - b.top + "px";
    b = new D(this.v.u ? b.right - a.offsetWidth : b.left, b.top);
    b.y += 1;
    B && x.K.na.style.top && (--b.x, --b.y);
    C && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px" };

function Gj(a) { return function() { var b = Ej,
            c = Ej,
            e = c.value;
        a.v && (e = Ie(a, e), null === e ? e = c.defaultValue : a.ep && a.ep(e));
        a.Ob(e);
        a.v.R && a.v.aa();
        x.Qa(b.Ox);
        x.Qa(b.Rx);
        x.Qa(b.Qx);
        a.m.ug(b.Zs);
        Ej = null;
        x.j.S(!1);
        b = x.K.na.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = "" } } wh("field_input", tj);

function Ij(a, b) { this.aq = x.i.B("tspan", {}, null);
    this.aq.appendChild(document.createTextNode("\u00b0"));
    a = a && !isNaN(a) ? String(a) : "0";
    Ij.s.constructor.call(this, a, b) } w(Ij, tj);
Ij.la = function(a) { return new Ij(a.angle) };
d = Ij.prototype;
d.Ne = function() { this.Ma ? (this.Ba.textContent = Ah(this), this.v.u ? this.Ba.insertBefore(this.aq, this.Ba.firstChild) : this.Ba.appendChild(this.aq), this.Qk()) : this.wa.width = 0 };
d.di = function() { var a = this; return function() { Ij.s.di.call(a)();
        a.Dj = null;
        a.Tq && x.Qa(a.Tq);
        a.Ks && x.Qa(a.Ks);
        a.Ls && x.Qa(a.Ls) } };
d.Re = function() {
    Ij.s.Re.call(this, nb || pb || rb);
    var a = x.K.na;
    if (a.firstChild) {
        a = x.i.B("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:html": "http://www.w3.org/1999/xhtml", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", height: "100px", width: "100px" }, a);
        var b = x.i.B("circle", { cx: 50, cy: 50, r: 49, "class": "blocklyAngleCircle" }, a);
        this.Dj = x.i.B("path", { "class": "blocklyAngleGauge" }, a);
        this.ys = x.i.B("line", { x1: 50, y1: 50, "class": "blocklyAngleLine" }, a);
        for (var c = 0; 360 > c; c += 15) x.i.B("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ? 10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        this.Tq = x.Oc(a, "click", this, x.K.Pa);
        this.Ks = x.Oc(b, "mousemove", this, this.Ys);
        this.Ls = x.Oc(this.Dj, "mousemove", this, this.Ys);
        Jj(this)
    }
};
d.Ys = function(a) { var b = this.Dj.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = Ie(this, b), Ej.value = b, this.setValue(b), Hj(this), this.Im()) };
d.Ob = function(a) { Ij.s.Ob.call(this, a);
    this.Ba && (Jj(this), this.wa.width = 0) };

function Jj(a) { if (a.Dj) { var b = Number(a.Ib()) + 0;
        b = uc(b); var c = ["M ", 50, ",", 50],
            e = 50,
            f = 50; if (!isNaN(b)) { var h = uc(0),
                k = 49 * Math.cos(h),
                l = -49 * Math.sin(h);
            e += 49 * Math.cos(b);
            f -= 49 * Math.sin(b);
            c.push(" l ", k, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - h) / Math.PI) % 2), " ", Number(!1), " ", e, ",", f, " z") } a.Dj.setAttribute("d", c.join(""));
        a.ys.setAttribute("x2", e);
        a.ys.setAttribute("y2", f) } }
d.Hn = function(a) { if (null === a) return null;
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    a %= 360;
    0 > a && (a += 360);
    360 < a && (a -= 360); return String(a) };
wh("field_angle", Ij);

function Kj(a, b) { Kj.s.constructor.call(this, "", b);
    this.setValue(a) } w(Kj, uh);
Kj.la = function(a) { return new Kj(a.checked ? "TRUE" : "FALSE") };
d = Kj.prototype;
d.Xk = "default";
d.I = function() { this.Za || (Kj.s.I.call(this), this.ml = x.i.B("text", { "class": "blocklyText blocklyCheckbox", x: -3, y: 14 }, this.Za), this.ml.appendChild(document.createTextNode("\u2713")), this.ml.style.display = this.La ? "block" : "none") };
d.getValue = function() { return String(this.La).toUpperCase() };
d.setValue = function(a) { a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
    this.La !== a && (this.v && x.j.isEnabled() && x.j.V(new x.j.Mc(this.v, "field", this.name, this.La, a)), this.La = a, this.ml && (this.ml.style.display = a ? "block" : "none")) };
d.Re = function() { var a = !this.La;
    this.v && (a = Ie(this, a));
    null !== a && this.setValue(String(a).toUpperCase()) };
wh("field_checkbox", Kj);
var Lj = {
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

function Mj(a) { var b = {};
    a = String(a); var c = "#" == a.charAt(0) ? a : "#" + a; if (Nj.test(c)) return b.Bo = Oj(c), b.type = "hex", b;
    a: { var e = a.match(Pj); if (e) { c = Number(e[1]); var f = Number(e[2]);
            e = Number(e[3]); if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) { c = [c, f, e]; break a } } c = [] }
    if (c.length) return b.Bo = wj(c), b.type = "rgb", b; if (Lj && (c = Lj[a.toLowerCase()])) return b.Bo = c, b.type = "named", b; throw Error(a + " is not a valid color string"); }
var Qj = /#(.)(.)(.)/;

function Oj(a) { if (!Nj.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Qj, "#$1$1$2$2$3$3")); return a.toLowerCase() }

function uj(a) { a = Oj(a); return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)] }

function wj(a) { var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a); if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = Rj(b.toString(16));
    c = Rj(c.toString(16));
    a = Rj(a.toString(16)); return "#" + b + c + a }
var Nj = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Pj = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function Rj(a) { return 1 == a.length ? "0" + a : a }

function vj(a, b, c) { c = sc(c, 0, 1); return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])] };
var Sj = "StopIteration" in g ? g.StopIteration : { message: "StopIteration", stack: "" };

function Tj() {} Tj.prototype.next = function() { throw Sj; };
Tj.prototype.Dq = function() { return this };

function Uj(a) { if (a instanceof Tj) return a; if ("function" == typeof a.Dq) return a.Dq(); if (fa(a)) { var b = 0,
            c = new Tj;
        c.next = function() { for (;;) { if (b >= a.length) throw Sj; if (b in a) return a[b++];
                b++ } }; return c } throw Error("Not implemented"); }

function Vj(a) { try { return Uj(a).next() } catch (b) { if (b != Sj) throw b; return null } };

function Wj(a, b, c, e, f) { this.ld = !!b;
    this.node = null;
    this.Cf = 0;
    this.Gt = !1;
    this.cr = !c;
    a && this.setPosition(a, e);
    this.depth = void 0 != f ? f : this.Cf || 0;
    this.ld && (this.depth *= -1) } w(Wj, Tj);
Wj.prototype.setPosition = function(a, b, c) { if (this.node = a) this.Cf = r(b) ? b : 1 != this.node.nodeType ? 0 : this.ld ? -1 : 1;
    r(c) && (this.depth = c) };
Wj.prototype.clone = function() { return new Wj(this.node, this.ld, !this.cr, this.Cf, this.depth) };
Wj.prototype.next = function() { if (this.Gt) { if (!this.node || this.cr && 0 == this.depth) throw Sj; var a = this.node; var b = this.ld ? -1 : 1; if (this.Cf == b) { var c = this.ld ? a.lastChild : a.firstChild;
            c ? this.setPosition(c) : this.setPosition(a, -1 * b) } else(c = this.ld ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
        this.depth += this.Cf * (this.ld ? -1 : 1) } else this.Gt = !0;
    a = this.node; if (!this.node) throw Sj; return a };
Wj.prototype.splice = function(a) { var b = this.node,
        c = this.ld ? 1 : -1;
    this.Cf == c && (this.Cf = -1 * c, this.depth += this.Cf * (this.ld ? -1 : 1));
    this.ld = !this.ld;
    Wj.prototype.next.call(this);
    this.ld = !this.ld;
    c = fa(arguments[0]) ? arguments[0] : arguments; for (var e = c.length - 1; 0 <= e; e--) ie(c[e], b);
    H(b) };

function Xj(a, b, c, e) { Wj.call(this, a, b, c, null, e) } w(Xj, Wj);
Xj.prototype.next = function() { do Xj.s.next.call(this); while (-1 == this.Cf); return this.node };

function Yj() {} w(Yj, Hi);
da(Yj);
var Zj = 0;
d = Yj.prototype;
d.T = function(a) { var b = this.bh(a);
    a = a.Yb().T("DIV", b, ak(this, a.Rc(), a.nf(), a.Yb()));
    fi(a, "grid"); return a };

function ak(a, b, c, e) { for (var f = [], h = 0, k = 0; h < c.height; h++) { for (var l = [], m = 0; m < c.width; m++) { var n = b && b[k++];
            l.push(bk(a, n, e)) } f.push(ck(a, l, e)) } return a.er(f, e) } d.er = function(a, b) { a = b.T("TABLE", this.sa() + "-table", b.T("TBODY", this.sa() + "-body", a));
    a.cellSpacing = "0";
    a.cellPadding = "0"; return a };

function ck(a, b, c) { a = c.T("TR", a.sa() + "-row", b);
    fi(a, "row"); return a }

function bk(a, b, c) { a = c.T("TD", { "class": a.sa() + "-cell", id: a.sa() + "-cell-" + Zj++ }, b);
    fi(a, "gridcell");
    T(a, "selected", !1); if (!re(a) && !gi(a, "label")) { var e;
        b = new Xj(a); for (c = ""; !c && (e = Vj(b));) 1 == e.nodeType && (c = gi(e, "label") || e.title);
        (e = c) && T(a, "label", e) } return a } d.Vd = function() { return !1 };
d.Fd = function() { return null };
d.Od = function(a, b) { if (a) { var c = Zd(document, "TBODY", this.sa() + "-body", a)[0]; if (c) { var e = 0;
            sa(c.rows, function(a) { sa(a.cells, function(a) { he(a); if (b) { var c = b[e++];
                        c && a.appendChild(c) } }) }); if (e < b.length) { for (var f = [], h = Wd(a), k = c.rows[0].cells.length; e < b.length;) { var l = b[e++];
                    f.push(bk(this, l, h));
                    f.length == k && (l = ck(this, f, h), c.appendChild(l), f.length = 0) } if (0 < f.length) { for (; f.length < k;) f.push(bk(this, "", h));
                    l = ck(this, f, h);
                    c.appendChild(l) } } } rh(a, !0, B) } };

function dk(a, b, c) { for (b = b.G(); c && 1 == c.nodeType && c != b;) { if ("TD" == c.tagName && ui(c, a.sa() + "-cell")) return c.firstChild;
        c = c.parentNode } return null } d.sa = function() { return "goog-palette" };

function ek(a) { tg.call(this);
    this.xi = [];
    fk(this, a) } w(ek, tg);
d = ek.prototype;
d.wb = null;
d.Gp = null;
d.Vr = function(a) { return this.xi[a] || null };

function fk(a, b) { b && (sa(b, function(a) { this.xk(a, !1) }, a), Ba(a.xi, b)) } d.removeItem = function(a) { a && ya(this.xi, a) && a == this.wb && (this.wb = null, this.dispatchEvent("select")) };
d.Fe = function() { return this.wb };
d.od = function(a) { a != this.wb && (this.xk(this.wb, !1), this.wb = a, this.xk(a, !0));
    this.dispatchEvent("select") };
d.Ij = function() { var a = this.wb; return a ? ra(this.xi, a) : -1 };
d.Bk = function(a) { this.od(this.Vr(a)) };
d.clear = function() { var a = this.xi; if (!u(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.wb = null };
d.Na = function() { ek.s.Na.call(this);
    delete this.xi;
    this.wb = null };
d.xk = function(a, b) { a && ("function" == typeof this.Gp ? this.Gp(a, b) : "function" == typeof a.Mi && a.Mi(b)) };

function gk(a, b, c) { U.call(this, a, b || Yj.Id(), c);
    this.zn &= -89;
    this.sj = new hk;
    this.sj.Pm(this);
    this.Mo = -1 } w(gk, U);
d = gk.prototype;
d.wa = null;
d.va = -1;
d.ac = null;
d.Na = function() { gk.s.Na.call(this);
    this.ac && (this.ac.A(), this.ac = null);
    this.wa = null;
    this.sj.A() };
d.Li = function(a) { gk.s.Li.call(this, a);
    ik(this);
    this.ac ? (this.ac.clear(), fk(this.ac, a)) : (this.ac = new ek(a), a = na(this.xk, this), this.ac.Gp = a, Yh(this).ia(this.ac, "select", this.Qw));
    this.va = -1 };
d.Ml = function() { return "" };
d.Pj = function(a) { gk.s.Pj.call(this, a); var b = dk(this.Z, this, a.target);
    b && a.relatedTarget && je(b, a.relatedTarget) || b != jk(this) && kk(this, b) };
d.pf = function(a) { gk.s.pf.call(this, a);
    this.qs() && (a = dk(this.Z, this, a.target), a != jk(this) && kk(this, a)) };
d.sg = function(a) { var b = jk(this); return b ? (a && (this.Fe() ? "mouseup" != a.type || dk(this.Z, this, a.target) : 1) && this.od(b), gk.s.sg.call(this, a)) : !1 };
d.Ld = function(a) {
    var b = this.Rc();
    b = b ? b.length : 0;
    var c = this.wa.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.keyCode || 32 == a.keyCode) return this.sg(a);
    if (36 == a.keyCode) return this.qc(0), !0;
    if (35 == a.keyCode) return this.qc(b - 1), !0;
    var e = 0 > this.va ? this.Ij() : this.va;
    switch (a.keyCode) {
        case 37:
            if (-1 == e || 0 == e) e = b;
            this.qc(e - 1);
            a.preventDefault();
            return !0;
        case 39:
            return e == b - 1 && (e = -1), this.qc(e + 1), a.preventDefault(), !0;
        case 38:
            -1 == e && (e = b + c - 1);
            if (e >= c) return this.qc(e - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 ==
                e && (e = -c), e < b - c) return this.qc(e + c), a.preventDefault(), !0
    }
    return !1
};
d.Qw = function() {};
d.nf = function() { return this.wa };
d.Qm = function(a) { if (this.G()) throw Error("Component already rendered");
    this.wa = r(a) ? new Vd(a, void 0) : a;
    ik(this) };

function jk(a) { var b = a.Rc(); return b && b[a.va] } d.qc = function(a) { a != this.va && (lk(this, this.va, !1), this.Mo = this.va, this.va = a, lk(this, a, !0), this.dispatchEvent("a")) };

function kk(a, b) { var c = a.Rc();
    a.qc(c && b ? ra(c, b) : -1) } d.Ij = function() { return this.ac ? this.ac.Ij() : -1 };
d.Fe = function() { return this.ac ? this.ac.Fe() : null };
d.Bk = function(a) { this.ac && this.ac.Bk(a) };
d.od = function(a) { this.ac && this.ac.od(a) };

function lk(a, b, c) { if (a.G()) { var e = a.Rc(); if (e && 0 <= b && b < e.length) { var f = (f = jk(a)) ? f.parentNode : null;
            a.sj.G() != f && (a.sj.P = f);
            f = a.sj;
            f.Sb(c);!!(f.La & 2) == c && (f = a.Z, b = e[b]) && (b = b ? b.parentNode : null, e = f.sa() + "-cell-hover", c ? vi(b, e) : xi(b, e), c ? T(a.P, "activedescendant", b.id) : b.id == gi(a.P, "activedescendant") && a.P.removeAttribute("aria-activedescendant")) } } }
d.Sb = function(a) { a && -1 == this.va ? this.qc(-1 < this.Mo ? this.Mo : 0) : a || this.qc(-1);
    gk.s.Sb.call(this, a) };
d.xk = function(a, b) { if (this.G() && a) { a = a.parentNode; var c = this.Z.sa() + "-cell-selected";
        b ? vi(a, c) : xi(a, c);
        T(a, "selected", b) } };

function ik(a) { var b = a.Rc(); if (b)
        if (a.wa && a.wa.width) { if (b = Math.ceil(b.length / a.wa.width), !r(a.wa.height) || a.wa.height < b) a.wa.height = b } else b = Math.ceil(Math.sqrt(b.length)), a.wa = new Vd(b, b);
    else a.wa = new Vd(0, 0) }

function hk() { U.call(this, null);
    this.Bf |= 2 } w(hk, U);

function mk(a, b, c) { this.ul = a || [];
    gk.call(this, null, b || Yj.Id(), c);
    this.Nm(this.ul) } w(mk, gk);
d = mk.prototype;
d.wm = null;
d.om = null;
d.Nm = function(a) { this.ul = a;
    this.wm = this.om = null;
    this.Od(nk(this)) };
d.so = function() { var a = this.Fe(); if (a) { var b = a.style[Wa()]; if ("undefined" !== typeof b) a = b;
        else { b = a.style; var c = hh["background-color"]; if (!c) { var e = Wa();
                c = e;
                void 0 === a.style[e] && (e = (C ? "Webkit" : B ? "Moz" : A ? "ms" : lb ? "O" : null) + Xa(e), void 0 !== a.style[e] && (c = e));
                hh["background-color"] = c } a = b[c] || "" } return ok(a) } return null };
d.Op = function(a) { a = ok(a);
    this.wm || (this.wm = ua(this.ul, function(a) { return ok(a) }));
    this.Bk(a ? ra(this.wm, a) : -1) };

function nk(a) { return ua(a.ul, function(a, c) { var b = this.Yb().T("DIV", { "class": this.Z.sa() + "-colorswatch", style: "background-color:" + a });
        b.title = this.om && this.om[c] ? this.om[c] : "#" == a.charAt(0) ? "RGB (" + uj(a).join(", ") + ")" : a; return b }, a) }

function ok(a) { if (a) try { return Mj(a).Bo } catch (b) {}
    return null };

function pk(a, b) { Uh.call(this, a);
    this.Xa = b || null;
    Yh(this).ia(this, "action", this.Jx) } w(pk, Uh);
d = pk.prototype;
d.$g = !0;
d.Nm = function(a) { this.Xa ? this.Xa.Nm(a) : qk(this, a) };
d.Qm = function(a) { this.Xa || qk(this, []);
    this.Xa.Qm(a) };
d.nf = function() { return this.Xa ? this.Xa.nf() : null };
d.Ij = function() { return this.Xa ? this.Xa.Ij() : -1 };
d.Bk = function(a) { this.Xa && this.Xa.Bk(a) };
d.so = function() { return this.Xa ? this.Xa.so() : null };
d.Op = function(a) { this.Xa && this.Xa.Op(a) };
d.qf = function() { return this.$g };
d.zf = function(a) { this.$g = a;
    this.Xa && this.Xa.rc(32, a) };
d.Vd = function() { return !1 };
d.rb = function() { pk.s.rb.call(this);
    this.Xa && this.Xa.aa(this.G());
    this.G().unselectable = "on" };
d.Na = function() { pk.s.Na.call(this);
    this.Xa && (this.Xa.A(), this.Xa = null) };
d.focus = function() { this.Xa && this.Xa.G().focus() };
d.Jx = function(a) { a.stopPropagation();
    this.dispatchEvent("change") };

function qk(a, b) { b = new mk(b, null, a.Yb());
    b.Qm(5);
    b.rc(32, a.$g);
    a.Xh(b);
    a.Xa = b;
    a.za && a.Xa.aa(a.G()) }
var rk = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function sk(a, b) { sk.s.constructor.call(this, a, b);
    this.Ob("\u00a0\u00a0\u00a0") }
var tk;
w(sk, uh);
sk.la = function(a) { return new sk(a.colour) };
d = sk.prototype;
d.Mv = null;
d.Xq = 0;
d.I = function() { sk.s.I.call(this);
    this.Cd.style.fillOpacity = 1;
    this.setValue(this.getValue()) };
d.Xk = "default";
d.A = function() { x.K.Sj(this);
    sk.s.A.call(this) };
d.getValue = function() { return this.we };
d.setValue = function(a) { this.v && x.j.isEnabled() && this.we != a && x.j.V(new x.j.Mc(this.v, "field", this.name, this.we, a));
    this.we = a;
    this.Cd && (this.Cd.style.fill = a) };
d.Ib = function() { var a = this.we,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]); return a };
d.setColumns = function(a) { this.Xq = a; return this };
d.Re = function() { x.K.show(this, this.v.u, uk); var a = x.i.xo(),
        b = Ch(this),
        c = this.qj(),
        e = nh(c.G());
    x.K.op(a, b, e, this.v.u); var f = this;
    tk = ec(c, "change", function(a) { a = a.target.so() || "#000000";
        x.K.Pa();
        f.v && (a = Ie(f, a));
        null !== a && f.setValue(a) }) };
d.qj = function() { var a = new pk;
    a.Qm(this.Xq || 7);
    a.Nm(this.Mv || rk);
    a.aa(x.K.na);
    a.Op(this.getValue()); return a };

function uk() { tk && nc(tk);
    x.j.S(!1) } wh("field_colour", sk);

function P(a, b) {
    v(a) || vk(a);
    this.lh = a;
    this.$p = this.qp = null;
    a = this.lh;
    if (u(a)) {
        for (var c = !1, e = 0; e < a.length; e++) { var f = a[e][0]; "string" == typeof f ? a[e][0] = x.i.pc(f) : (null != f.alt && (a[e][0].alt = x.i.pc(f.alt)), c = !0) }
        if (!(c || 2 > a.length)) {
            f = [];
            for (e = 0; e < a.length; e++) f.push(a[e][0]);
            var h = x.i.Sp(f);
            e = x.i.Pv(f, h);
            c = x.i.Qv(f, h);
            if ((e || c) && !(h <= e + c)) {
                e && (this.qp = f[0].substring(0, e - 1));
                c && (this.$p = f[0].substr(1 - c));
                f = [];
                for (h = 0; h < a.length; h++) { var k = a[h][0],
                        l = a[h][1];
                    k = k.substring(e, k.length - c);
                    f[h] = [k, l] } this.lh =
                    f
            }
        }
    }
    a = this.getOptions()[0];
    P.s.constructor.call(this, a[1], b)
}
w(P, uh);
P.la = function(a) { return new P(a.options) };
var wk = pb ? "\u25bc" : "\u25be";
d = P.prototype;
d.Xk = "default";
d.Vb = "";
d.ie = null;
d.Ie = null;
d.I = function() { this.Za || (this.Of = x.i.B("tspan", {}, null), this.Of.appendChild(document.createTextNode(this.v.u ? wk + " " : " " + wk)), P.s.I.call(this)) };
d.Re = function() { x.K.show(this, this.v.u, null); var a = new sj;
    a.Af(this.v.u); for (var b = this.getOptions(), c = 0; c < b.length; c++) { var e = b[c][0],
            f = b[c][1]; if ("object" == typeof e) { var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h } e = new oj(e);
        e.Af(this.v.u);
        e.setValue(f);
        e.yk(!0);
        a.Xh(e, !0);
        Si(e, f == this.Vb) } xk(this, a);
    yk(a);
    zk(a);
    b = x.i.xo();
    c = Ch(this);
    this.v.u ? c.right += 25 : c.left -= 25;
    this.qj(a);
    f = x.i.Si.nf(a);
    300 < f.height && (f.height = 300);
    this.v.u && x.i.Si.Fq(b, c, f);
    x.K.op(b, c, f, this.v.u);
    a.G().focus() };

function xk(a, b) { ec(b, "action", function(b) {
        (b = b.target) && a.Us(b);
        x.K.Sj(a);
        x.j.S(!1) }) }

function yk(a) { Yh(a).ia(a.G(), "touchstart", function(a) { bj(this, a.target).pf(a) }) }

function zk(a) { Yh(a).ia(a.G(), "touchend", function(a) { bj(this, a.target).sg(a) }) } d.qj = function(a) { a.aa(x.K.na);
    x.i.pb(a.G(), "blocklyDropdownMenu");
    a.fl = !0;
    a.zf(!0) };
d.Us = function(a) { a = a.getValue();
    this.v && (a = Ie(this, a));
    null !== a && this.setValue(a) };
d.getOptions = function() { if (v(this.lh)) { var a = this.lh.call(this);
        vk(a); return a } return this.lh };
d.getValue = function() { return this.Vb };
d.setValue = function(a) { if (null !== a && a !== this.Vb) { this.v && x.j.isEnabled() && x.j.V(new x.j.Mc(this.v, "field", this.name, this.Vb, a));
        this.Vb = a; for (var b = this.getOptions(), c = 0; c < b.length; c++)
            if (b[c][1] == a) { a = b[c][0]; "object" == typeof a ? (this.Ie = a, this.ya = a.alt) : (this.Ie = null, this.ya = a);
                this.Cj(); return } this.ya = a;
        this.Cj() } };
d.Ne = function() {
    if (this.Ma) {
        this.v && this.Of && (this.Of.style.fill = this.v.we);
        he(this.Ba);
        H(this.ie);
        this.ie = null;
        if (this.Ie) {
            this.ie = x.i.B("image", { y: 5, height: this.Ie.height + "px", width: this.Ie.width + "px" }, this.Za);
            this.ie.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.Ie.src);
            this.Ba.appendChild(this.Of);
            var a = Bh(this.Of);
            this.wa.height = Number(this.Ie.height) + 19;
            this.wa.width = Number(this.Ie.width) + a;
            this.v.u ? (this.ie.setAttribute("x", a), this.Ba.setAttribute("x", -1)) : (this.Ba.setAttribute("text-anchor",
                "end"), this.Ba.setAttribute("x", this.wa.width + 1))
        } else a = document.createTextNode(Ah(this)), this.Ba.appendChild(a), this.v.u ? this.Ba.insertBefore(this.Of, this.Ba.firstChild) : this.Ba.appendChild(this.Of), this.Ba.setAttribute("text-anchor", "start"), this.Ba.setAttribute("x", 0), this.wa.height = 25, this.wa.width = Bh(this.Ba);
        this.Cd.setAttribute("height", this.wa.height - 9);
        this.Cd.setAttribute("width", this.wa.width + 10)
    } else this.wa.width = 0
};
d.Qk = function() { if (this.Ie && (A || mb)) { var a = Bh(this.Of);
        a = Number(this.Ie.width) + a + 10;
        this.Cd && this.Cd.setAttribute("width", a);
        this.wa.width = a } else uh.prototype.Qk.call(this) };
d.A = function() { x.K.Sj(this);
    P.s.A.call(this) };

function vk(a) {
    if (!u(a)) throw "FieldDropdown options must be an array.";
    for (var b = !1, c = 0; c < a.length; ++c) {
        var e = a[c];
        u(a) ? q(e[1]) ? q(e[0]) || q(e[0].src) || (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must have a string label or image description. Found" + e[0] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must be an array. Found: ",
            e))
    }
    if (b) throw "Found invalid FieldDropdown options.";
}
wh("field_dropdown", P);

function Ak(a, b, c, e, f) { this.v = null;
    this.Fa = Number(c);
    this.ma = Number(b);
    this.wa = new Vd(this.ma, this.Fa + 10);
    this.ya = e || "";
    this.setValue(a); "function" == typeof f && (this.Jn = f) } w(Ak, uh);
Ak.la = function(a) { var b = x.i.pc(a.src),
        c = Number(x.i.pc(a.width)),
        e = Number(x.i.pc(a.height));
    a = x.i.pc(a.alt); return new Ak(b, c, e, a) };
d = Ak.prototype;
d.Mg = !1;
d.I = function() { this.Za || (this.Za = x.i.B("g", {}, null), this.Ma || (this.Za.style.display = "none"), this.ie = x.i.B("image", { height: this.Fa + "px", width: this.ma + "px" }, this.Za), this.setValue(this.At), this.v.ha().appendChild(this.Za), this.ka(this.v), x.C.Rg(this.ie), this.Jn && (this.sm = x.O(this.Za, "mousedown", this, this.tf))) };
d.A = function() { H(this.Za);
    this.ie = this.Za = null };
d.ka = function(a) { this.ie.qd = a };
d.getValue = function() { return this.At };
d.setValue = function(a) { null !== a && (this.At = a, this.ie && this.ie.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a || "")) };
d.Ob = function(a) { null !== a && (this.ya = a) };
d.Ne = function() {};
d.Cj = function() {};
d.Qk = function() {};
d.Re = function() { this.Jn && this.Jn(this) };
wh("field_image", Ak);

function Bk(a, b, c, e, f) { a = a && !isNaN(a) ? String(a) : "0";
    Bk.s.constructor.call(this, a, f);
    a = parseFloat(e);
    this.pp = isNaN(a) ? 0 : a;
    b = parseFloat(b);
    this.Bx = isNaN(b) ? -Infinity : b;
    c = parseFloat(c);
    this.Ax = isNaN(c) ? Infinity : c;
    this.setValue(Ie(this, this.getValue())) } w(Bk, tj);
Bk.la = function(a) { return new Bk(a.value, a.min, a.max, a.precision) };
Bk.prototype.Hn = function(a) { if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0); if (isNaN(a)) return null;
    this.pp && isFinite(a) && (a = Math.round(a / this.pp) * this.pp);
    a = sc(a, this.Bx, this.Ax); return String(a) };
wh("field_number", Bk);

function Ck(a, b, c, e) { this.lh = Dk;
    this.wa = new Vd(0, 25);
    this.Ih = b;
    this.cw = a || "";
    a = e || ""; if (null == c || void 0 == c) c = null;
    else if (Array.isArray(c)) { b = !1; for (e = 0; e < c.length; e++) c[e] == a && (b = !0); if (!b) throw Error("Invalid default type '" + a + "' in the definition of a FieldVariable"); } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    this.bw = a;
    this.Ky = c;
    this.Vb = null } w(Ck, P);
Ck.la = function(a) { var b = x.i.pc(a.variable); return new Ck(b, null, a.variableTypes, a.defaultType) };
d = Ck.prototype;
d.I = function() { this.Za || (Ck.s.I.call(this), this.hh()) };
d.hh = function() { if (!this.re) { this.m = this.v.o; var a = x.H.Vl(this.m, null, this.cw, this.bw);
        x.j.disable(); try { this.setValue(a.ba()) } finally { x.j.enable() } } };
d.A = function() { Ck.s.A.call(this);
    this.ua = this.m = null };
d.Qp = function(a) { Ck.s.Qp.call(this, a) };
d.getValue = function() { return this.re ? this.re.ba() : null };
d.Ib = function() { return this.re ? this.re.name : "" };
d.Sc = function() { return this.re };
d.setValue = function(a) { var b = x.H.Sc(this.v.o, a); if (!b) throw Error("Variable id doesn't point to a real variable!  ID was " + a); var c = b.type,
        e;
    a: if (e = Ek(this)) { for (var f = 0; f < e.length; f++)
            if (c == e[f]) { e = !0; break a } e = !1 } else e = !0; if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
    this.v && x.j.isEnabled() && (c = this.re ? this.re.ba() : null, x.j.V(new x.j.Mc(this.v, "field", this.name, c, a)));
    this.re = b;
    this.Vb = a;
    this.Ob(b.name) };

function Ek(a) { var b = a.Ky; if (null === b && a.v) return a.v.o.uo();
    b = b || [""]; if (0 == b.length) throw a = a.Ib(), Error("'variableTypes' of field variable " + a + " was an empty list"); return b }

function Dk() { if (!this.re) throw Error("Tried to call dropdownCreate on a variable field with no variable selected."); var a = this.Ib(),
        b = null;
    this.v && (b = this.v.o); var c = []; if (b)
        for (var e = Ek(this), f = 0; f < e.length; f++) c = c.concat(b.Kj(e[f]));
    c.sort(yg);
    b = []; for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].ba()];
    b.push([x.g.RENAME_VARIABLE, x.yq]);
    x.g.DELETE_VARIABLE && b.push([x.g.DELETE_VARIABLE.replace("%1", a), x.pq]); return b }
d.Us = function(a) { a = a.getValue(); if (this.v && this.v.o) { var b = this.v.o; if (a == x.yq) { x.H.xp(b, this.re); return } if (a == x.pq) { b.Tf(this.re.ba()); return } } this.setValue(a) };
d.sh = function() { return !0 };
wh("field_variable", Ck);

function Ih() { this.qu = new RegExp(this.xd, "g") } d = Ih.prototype;
d.Zk = null;
d.Wh = null;
d.Xe = "  ";
d.gu = 60;
d.cl = [];

function Fk() { var a = x.h,
        b = Gk;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = x.oi()); var c = [];
    a.I(b);
    b = fd(b, !0); for (var e = 0, f; f = b[e]; e++) { var h = Hk(a, f);
        u(h) && (h = h[0]);
        h && (f.M && (h = a.tt(h)), c.push(h)) } c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n"); return c = c.replace(/[ \t]+\n/g, "\n") }

function Ik(a, b) { return b + a.replace(/(?!\n$)\n/g, "\n" + b) }

function Hk(a, b) { if (!b) return ""; if (b.disabled) return Hk(a, Oc(b)); var c = a[b.type].call(b, b); if (u(c)) return [a.Lm(b, c[0]), c[1]]; if (q(c)) { var e = b.id.replace(/\$/g, "$$$$");
        a.Wh && (c = a.Wh.replace(/%1/g, "'" + e + "'") + c); return a.Lm(b, c) } if (null === c) return "" }

function V(a, b, c) { var e = x.h;
    a = Ph(a, b); if (!a) return "";
    b = Hk(e, a); if ("" === b) return "";
    a = b[0];
    b = b[1]; if (!a) return ""; var f = !1,
        h = Math.floor(c),
        k = Math.floor(b); if (h <= k && (h != k || 0 != h && 99 != h))
        for (f = !0, h = 0; h < e.cl.length; h++)
            if (e.cl[h][0] == c && e.cl[h][1] == b) { f = !1; break } f && (a = "(" + a + ")"); return a }

function Jk(a, b) { var c = x.h;
    a = Ph(a, b);
    (a = Hk(c, a)) && (a = Ik(a, c.Xe)); return a }

function Kk(a, b) { var c = x.h;
    b = b.replace(/\$/g, "$$$$");
    c.Zk && (a = c.Zk.replace(/%1/g, "'" + b + "'") + a);
    c.Wh && (a += Ik(c.Wh.replace(/%1/g, "'" + b + "'"), c.Xe)); return a } d.nn = "";

function Lk(a) { var b = x.h;
    b.nn += a + "," } d.xd = "{leCUI8hutHZI4480Dc}";

function Mk(a, b) { var c = x.h; if (!c.Ug[a]) { var e = Nk(c.Ra, a, x.ra.Sa);
        c.lo[a] = e;
        b = b.join("\n").replace(c.qu, e); for (var f; f != b;) f = b, b = b.replace(/^(( {2})*) {2}/gm, "$1\x00");
        b = b.replace(/\0/g, c.Xe);
        c.Ug[a] = b } return c.lo[a] } d.I = function() {};
d.Lm = function(a, b) { return b };
d.finish = function(a) { return a };
d.tt = function(a) { return a };

function Ok() { var a = x.h.nn;
    this.St = "";
    this.qt = Object.create(null); if (a) { a = a.split(","); for (var b = 0; b < a.length; b++) this.qt[a[b]] = !0 } this.reset() } Ok.prototype.reset = function() { this.Ed = Object.create(null);
    this.yr = Object.create(null);
    this.ua = null };
Ok.prototype.getName = function(a, b) {
    if (b == x.H.Sa) { var c = a;
        this.ua ? c = (c = this.ua.fe(c)) ? c.name : null : (console.log("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"), c = null);
        c && (a = c) } c = a.toLowerCase() + "_" + b;
    var e = b == x.H.Sa || "DEVELOPER_VARIABLE" == b ? this.St : "";
    if (c in this.Ed) return e + this.Ed[c];
    a = Nk(this, a, b);
    this.Ed[c] =
        a.substr(e.length);
    return a
};

function Nk(a, b, c) { b ? (b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b)) : b = "unnamed"; for (var e = ""; a.yr[b + e] || b + e in a.qt;) e = e ? e + 1 : 2;
    b += e;
    a.yr[b] = !0; return (c == x.H.Sa || "DEVELOPER_VARIABLE" == c ? a.St : "") + b }

function Wc(a, b) { return a.toLowerCase() == b.toLowerCase() };
x.ra = {};
x.ra.Sa = x.xq;
x.ra.nv = function(a) { a = Tc(a); for (var b = [], c = [], e = 0; e < a.length; e++)
        if (a[e].mf) { var f = a[e].mf();
            f && (f[2] ? b.push(f) : c.push(f)) } c.sort(x.ra.ht);
    b.sort(x.ra.ht); return [c, b] };
x.ra.ht = function(a, b) { return a[0].toLowerCase().localeCompare(b[0].toLowerCase()) };
x.ra.uw = function(a, b) { if (b.vb) return a; for (; !x.ra.mx(a, b.o, b);) { var c = a.match(/^(.*?)(\d+)$/);
        a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2" } return a };
x.ra.mx = function(a, b, c) { return !x.ra.ox(a, b, c) };
x.ra.ox = function(a, b, c) { b = Tc(b); for (var e = 0; e < b.length; e++)
        if (b[e] != c && b[e].mf) { var f = b[e].mf(); if (Wc(f[0], a)) return !0 } return !1 };
x.ra.Fm = function(a) { a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""); var b = x.ra.uw(a, this.v),
        c = this.ya; if (c != a && c != b) { a = Tc(this.v.o); for (var e = 0; e < a.length; e++) a[e].vk && a[e].vk(c, b) } return b };
x.ra.Uf = function(a) {
    function b(a, b) { for (var e = 0; e < a.length; e++) { var f = a[e][0],
                h = a[e][1],
                k = G("block");
            k.setAttribute("type", b);
            k.setAttribute("gap", 16); var t = G("mutation");
            t.setAttribute("name", f);
            k.appendChild(t); for (f = 0; f < h.length; f++) { var y = G("arg");
                y.setAttribute("name", h[f]);
                t.appendChild(y) } c.push(k) } }
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
    a = x.ra.nv(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};
x.ra.zw = function(a, b) { var c = [];
    b = Tc(b); for (var e = 0; e < b.length; e++)
        if (b[e].Jd) { var f = b[e].Jd();
            f && Wc(f, a) && c.push(b[e]) } return c };
x.ra.Xo = function(a) { var b = x.j.oc,
        c = a.mf()[0],
        e = a.Ka(!0);
    a = x.ra.zw(c, a.o);
    c = 0; for (var f; f = a[c]; c++) { var h = f.Ka();
        h = h && x.F.Gd(h);
        f.hb(e); var k = f.Ka();
        k = k && x.F.Gd(k);
        h != k && (x.j.oc = !1, x.j.V(new x.j.Mc(f, "mutation", null, h, k)), x.j.oc = b) } };
x.ra.Pl = function(a, b) { b = fd(b, !1); for (var c = 0; c < b.length; c++)
        if (b[c].mf) { var e = b[c].mf(); if (e && Wc(e[0], a)) return b[c] } return null };

function Pk(a, b, c, e) { this.m = a;
    this.xa = b;
    this.ya = c.getAttribute("text");
    this.Wc = new D(0, 0);
    this.kh = e;
    this.Gn = null;
    a = c.getAttribute("callbackKey");
    this.kh && a ? console.warn("Labels should not have callbacks. Label text: " + this.ya) : this.kh || a && ah(b, a) ? this.Gn = ah(b, a) : console.warn("Buttons should have callbacks. Button text: " + this.ya);
    this.jr = c.getAttribute("web-class") || null } d = Pk.prototype;
d.width = 0;
d.height = 0;
d.Ci = null;
d.T = function() {
    var a = this.kh ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.jr && (a += " " + this.jr);
    this.w = x.i.B("g", { "class": a }, this.m.Va);
    if (!this.kh) var b = x.i.B("rect", { "class": "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 }, this.w);
    a = x.i.B("rect", { "class": this.kh ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground", rx: 4, ry: 4 }, this.w);
    var c = x.i.B("text", { "class": this.kh ? "blocklyFlyoutLabelText" : "blocklyText", x: 0, y: 0, "text-anchor": "middle" }, this.w);
    c.textContent = this.ya;
    this.width = Bh(c);
    this.height = 20;
    this.kh || (this.width += 10, b.setAttribute("width", this.width), b.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height", this.height);
    c.setAttribute("x", this.width / 2);
    c.setAttribute("y", this.height - 5);
    Qk(this);
    x.O(this.w, "mouseup", this, this.Zx);
    return this.w
};
d.show = function() { Qk(this);
    this.w.setAttribute("display", "block") };

function Qk(a) { a.w.setAttribute("transform", "translate(" + a.Wc.x + "," + a.Wc.y + ")") }
d.moveTo = function(a, b) { this.Wc.x = a;
    this.Wc.y = b;
    Qk(this) };
d.Wr = function() { return this.Wc };
d.A = function() { this.Ci && x.Qa(this.Ci);
    this.w && (H(this.w), this.w = null);
    this.xa = this.m = null };
d.Zx = function(a) {
    (a = this.xa.Ee(a)) && a.cancel();
    this.Gn && this.Gn(this) };

function Rk(a) { a.ub = this.lf.bind(this);
    a.Bg = this.Om.bind(this);
    this.m = new Ng(a);
    this.m.je = !0;
    this.u = !!a.u;
    this.Df = a.Ea;
    this.eo = [];
    this.rm = [];
    this.ij = [];
    this.Hc = [];
    this.mp = [] } d = Rk.prototype;
d.$h = !0;
d.dk = !1;
d.Sg = !0;
d.qa = 8;
d.yd = Rk.prototype.qa;
d.vu = 3 * Rk.prototype.yd;
d.wu = 3 * Rk.prototype.yd;
d.Og = 2;
d.ma = 0;
d.Fa = 0;
d.Jr = 70;
d.T = function(a) { this.w = x.i.B(a, { "class": "blocklyFlyout", style: "display: none" }, null);
    this.pd = x.i.B("path", { "class": "blocklyFlyoutBackground" }, this.w);
    this.w.appendChild(this.m.T()); return this.w };
d.I = function(a) { this.xa = a;
    this.m.Fh = a;
    this.$b = new gg(this.m, this.ge, !1, "blocklyFlyoutScrollbar");
    this.Pa();
    Array.prototype.push.apply(this.eo, x.O(this.w, "wheel", this, this.Xt));
    this.$h || (this.Il = this.ho.bind(this), this.xa.Ad(this.Il));
    Array.prototype.push.apply(this.eo, x.O(this.pd, "mousedown", this, this.tf));
    this.m.Ee = this.xa.Ee.bind(this.xa);
    this.m.ua = this.xa.ua;
    a = this.m;
    a.Gi = new Sc(a) };
d.A = function() { this.Pa();
    x.Qa(this.eo);
    this.Il && (this.xa.ug(this.Il), this.Il = null);
    this.$b && (this.$b.A(), this.$b = null);
    this.m && (this.m.Fh = null, this.m.A(), this.m = null);
    this.w && (H(this.w), this.w = null);
    this.xa = this.pd = null };
d.hd = function() { return this.ma };
d.ni = function() { return this.Fa };
d.Lj = function() { return this.m };
d.Y = function() { return this.dk };
d.pa = function(a) { var b = a != this.Y();
    this.dk = a;
    b && this.Nk() };
d.wh = function(a) { var b = a != this.Sg;
    this.Sg = a;
    b && this.Nk() };
d.Nk = function() { var a = this.Sg ? this.Y() : !1;
    this.w.style.display = a ? "block" : "none";
    this.$b.wh(a) };

function Sk(a, b, c, e, f) { a.w.setAttribute("width", b);
    a.w.setAttribute("height", c); "svg" == a.w.tagName ? x.i.zk(a.w, "translate(" + e + "px," + f + "px)") : a.w.setAttribute("transform", "translate(" + e + "," + f + ")");
    a.$b && (a.$b.ip = new D(e, f), a.$b.resize()) } d.Pa = function() { if (this.Y()) { this.pa(!1); for (var a = 0, b; b = this.Hc[a]; a++) x.Qa(b);
        this.Hc.length = 0;
        this.tg && (this.m.ug(this.tg), this.tg = null) } };
d.show = function(a) {
    this.m.Tb(!1);
    this.Pa();
    Tk(this);
    "string" == typeof a && (a = bh(this.m.Fh, a)(this.m.Fh));
    this.pa(!0);
    for (var b = [], c = [], e = this.mp.length = 0, f; f = a[e]; e++)
        if (f.tagName) {
            var h = f.tagName.toUpperCase(),
                k = this.ge ? this.vu : this.wu;
            if ("BLOCK" == h) h = x.F.gi(f, this.m), h.disabled && this.mp.push(h), b.push({ type: "block", block: h }), f = parseInt(f.getAttribute("gap"), 10), c.push(isNaN(f) ? k : f);
            else if ("SEP" == f.tagName.toUpperCase()) f = parseInt(f.getAttribute("gap"), 10), !isNaN(f) && 0 < c.length ? c[c.length - 1] = f : c.push(k);
            else if ("BUTTON" == h || "LABEL" == h) f = new Pk(this.m, this.xa, f, "LABEL" == h), b.push({ type: "button", button: f }), c.push(k)
        } this.ws(b, c);
    this.Hc.push(x.O(this.pd, "mouseover", this, function() { for (var a = fd(this.m, !1), b = 0, c; c = a[b]; b++) c.uh() }));
    this.ge ? this.Fa = 0 : this.ma = 0;
    this.m.Tb(!0);
    this.vp();
    this.ho();
    this.position();
    this.tg = this.vp.bind(this);
    this.m.Ad(this.tg)
};

function Tk(a) { for (var b = fd(a.m, !1), c = 0, e; e = b[c]; c++) e.o == a.m && e.A(!1, !1); for (c = 0; c < a.rm.length; c++)(b = a.rm[c]) && H(b); for (c = a.rm.length = 0; b = a.ij[c]; c++) b.A();
    a.ij.length = 0;
    a.m.Gi.clear() }

function Uk(a, b, c, e) { a.Hc.push(x.O(b, "mousedown", null, Vk(a, c)));
    a.Hc.push(x.O(e, "mousedown", null, Vk(a, c)));
    a.Hc.push(x.Oc(b, "mouseover", c, c.Zh));
    a.Hc.push(x.Oc(b, "mouseout", c, c.uh));
    a.Hc.push(x.Oc(e, "mouseover", c, c.Zh));
    a.Hc.push(x.Oc(e, "mouseout", c, c.uh)) }

function Vk(a, b) { return function(c) { var e = a.xa.Ee(c);
        e && (Zf(e, b), e.J || (e.J = a), e.lb || (e.lb = a.Lj()), e.Uc = c, e.wj(c)) } } d.tf = function(a) { var b = this.xa.Ee(a);
    b && (b.J || (b.J = this), b.lb || (b.lb = this.Lj()), b.Uc = a, b.wj(a)) };

function Uf(a, b) { var c = null;
    x.j.disable(); var e = a.xa.kf();
    a.xa.Tb(!1); try { var f = a.xa; if (!b.ha()) throw "oldBlock is not rendered."; var h = x.F.Rf(b);
        f.Tb(!1); var k = x.F.gi(h, f); if (!k.ha()) throw "block is not rendered."; var l = x.i.Sl(f.Va),
            m = x.i.Sl(a.m.Va),
            n = b.oa().scale(a.m.scale),
            p = xc(yc(m, n), l).scale(1 / f.scale);
        k.moveBy(p.x, p.y);
        c = k;
        x.Qb() } finally { x.j.enable() } b = x.H.Tr(a.xa, e); if (x.j.isEnabled())
        for (x.j.S(!0), x.j.V(new Bc(c)), e = 0; e < b.length; e++) x.j.V(new Fc(b[e]));
    a.$h ? a.Pa() : a.ho(); return c }

function Wk(a, b, c, e) { var f = b.T();
    b.moveTo(c, e);
    b.show();
    a.Hc.push(x.O(f, "mousedown", a, a.tf));
    a.ij.push(b) }

function Xk(a, b, c, e, f, h) { c = x.i.B("rect", { "fill-opacity": 0, x: c, y: e, height: f.height, width: f.width }, null);
    c.qd = b;
    x.C.Rg(c);
    a.m.Va.insertBefore(c, b.ha());
    b.Jl = c; return a.rm[h] = c }

function Yk(a, b, c) { var e = c.Hb();
    b.setAttribute("width", e.width);
    b.setAttribute("height", e.height); var f = c.Dt ? 15 : 0;
    f && c.moveBy(0, f);
    f = c.M ? M : 0;
    c = c.oa();
    b.setAttribute("y", c.y);
    b.setAttribute("x", a.u ? c.x - e.width + f : c.x - f) }
d.ho = function() { for (var a = id(this.xa), b = fd(this.m, !1), c = 0, e; e = b[c]; c++)
        if (-1 == this.mp.indexOf(e)) { var f = Ac(e, !1);
            e.Pd(f.length > a) } };
d.vp = function() { this.tg && this.m.ug(this.tg);
    this.nt();
    this.tg && this.m.Ad(this.tg) };

function Sf(a) { return a.$b ? a.$b.Y() : !1 };

function Tg(a) { a.ub = this.lf.bind(this);
    a.Bg = this.Om.bind(this);
    Tg.s.constructor.call(this, a);
    this.ge = !0 } w(Tg, Rk);
d = Tg.prototype;
d.lf = function() { if (!this.Y()) return null; try { var a = this.m.Va.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.Og,
        c = this.Og;
    this.Df == x.Pg && (b = 0); var e = this.Fa;
    this.Df == x.Nf && (e -= this.Og); return { fb: e, Aa: this.ma - 2 * this.Og, uc: (a.height + 2 * this.yd) * this.m.scale, Qc: (a.width + 2 * this.yd) * this.m.scale, Ve: -this.m.scrollY, Cb: -this.m.scrollX, vc: a.y, Pc: a.x, zb: b, ob: c } };
d.Om = function(a) { var b = this.lf();
    b && (r(a.x) && (this.m.scrollX = -b.Qc * a.x), this.m.translate(this.m.scrollX + b.ob, this.m.scrollY + b.zb)) };
d.position = function() { if (this.Y()) { var a = this.xa.ub(); if (a) { this.ma = a.Aa;
            this.Ip(a.Aa - 2 * this.qa, this.Fa - this.qa); var b = a.ob,
                c = a.zb;
            this.Df == x.Pg && (c += a.fb - this.Fa);
            Sk(this, this.ma, this.Fa, b, c) } } };
d.Ip = function(a, b) { var c = this.Df == x.Nf,
        e = ["M 0," + (c ? 0 : this.qa)];
    c ? (e.push("h", a + 2 * this.qa), e.push("v", b), e.push("a", this.qa, this.qa, 0, 0, 1, -this.qa, this.qa), e.push("h", -1 * a), e.push("a", this.qa, this.qa, 0, 0, 1, -this.qa, -this.qa)) : (e.push("a", this.qa, this.qa, 0, 0, 1, this.qa, -this.qa), e.push("h", a), e.push("a", this.qa, this.qa, 0, 0, 1, this.qa, this.qa), e.push("v", b), e.push("h", -a - 2 * this.qa));
    e.push("z");
    this.pd.setAttribute("d", e.join(" ")) };
d.Ep = function() { this.$b.set(this.u ? Infinity : 0) };
d.Xt = function(a) { var b = a.deltaX; if (b) { B && 1 === a.deltaMode && (b *= 10); var c = this.lf();
        b = c.Cb + b;
        b = Math.min(b, c.Qc - c.Aa);
        b = Math.max(b, 0);
        this.$b.set(b);
        x.K.Pa() } a.preventDefault();
    a.stopPropagation() };
d.ws = function(a, b) { this.m.scale = this.xa.scale; var c = this.yd,
        e = this.u ? c : c + M;
    this.u && (a = a.reverse()); for (var f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = Ac(h, !1), l = 0, m; m = k[l]; l++) m.vb = !0;
            h.aa();
            k = h.ha();
            l = h.Hb();
            m = h.M ? M : 0;
            m = this.u ? e + l.width : e + m;
            h.moveBy(m, c);
            m = Xk(this, h, m, c, l, f);
            e += l.width + b[f];
            Uk(this, k, h, m) } else "button" == h.type && (Wk(this, h.button, e, c), e += h.button.width + b[f]) };
d.ss = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.Jr; return a < 90 + b && a > 90 - b || a > -90 - b && a < -90 + b ? !0 : !1 };
d.ki = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(),
        b = a.top;
    a = a.height; if (this.Df == x.Nf) return new wg(-1E9, b - 1E9, 2E9, 1E9 + a); if (this.Df == x.Pg) return new wg(-1E9, b, 2E9, 1E9 + a) };
d.nt = function() { this.m.scale = this.xa.scale; for (var a = 0, b = fd(this.m, !1), c = 0, e; e = b[c]; c++) a = Math.max(a, e.Hb().height);
    a += 1.5 * this.yd;
    a *= this.m.scale;
    a += I; if (this.Fa != a) { for (c = 0; e = b[c]; c++) e.Jl && Yk(this, e.Jl, e);
        this.Fa = a;
        this.xa.resize() } };

function Ug(a) { a.ub = this.lf.bind(this);
    a.Bg = this.Om.bind(this);
    Ug.s.constructor.call(this, a);
    this.ge = !1 } w(Ug, Rk);
d = Ug.prototype;
d.lf = function() { if (!this.Y()) return null; try { var a = this.m.Va.getBBox() } catch (f) { a = { height: 0, y: 0, width: 0, x: 0 } } var b = this.Og,
        c = this.Fa - 2 * this.Og,
        e = this.ma;
    this.u || (e -= this.Og); return { fb: c, Aa: e, uc: a.height * this.m.scale + 2 * this.yd, Qc: a.width * this.m.scale + 2 * this.yd, Ve: -this.m.scrollY + a.y, Cb: -this.m.scrollX, vc: a.y, Pc: a.x, zb: b, ob: 0 } };
d.Om = function(a) { var b = this.lf();
    b && (r(a.y) && (this.m.scrollY = -b.uc * a.y), this.m.translate(this.m.scrollX + b.ob, this.m.scrollY + b.zb)) };
d.position = function() { if (this.Y()) { var a = this.xa.ub(); if (a) { this.Fa = a.fb;
            this.Ip(this.ma - this.qa, a.fb - 2 * this.qa); var b = a.zb,
                c = a.ob;
            this.Df == x.se && (this.qx = c += a.Aa - this.ma);
            Sk(this, this.ma, this.Fa, c, b) } } };
d.Ip = function(a, b) { var c = this.Df == x.se,
        e = a + this.qa;
    e = ["M " + (c ? e : 0) + ",0"];
    e.push("h", c ? -a : a);
    e.push("a", this.qa, this.qa, 0, 0, c ? 0 : 1, c ? -this.qa : this.qa, this.qa);
    e.push("v", Math.max(0, b));
    e.push("a", this.qa, this.qa, 0, 0, c ? 0 : 1, c ? this.qa : -this.qa, this.qa);
    e.push("h", c ? a : -a);
    e.push("z");
    this.pd.setAttribute("d", e.join(" ")) };
d.Ep = function() { this.$b.set(0) };
d.Xt = function(a) { var b = a.deltaY; if (b) { B && 1 === a.deltaMode && (b *= 10); var c = this.lf();
        b = c.Ve - c.vc + b;
        b = Math.min(b, c.uc - c.fb);
        b = Math.max(b, 0);
        this.$b.set(b);
        x.K.Pa() } a.preventDefault();
    a.stopPropagation() };
d.ws = function(a, b) { this.m.scale = this.xa.scale; for (var c = this.yd, e = this.u ? c : c + M, f = 0, h; h = a[f]; f++)
        if ("block" == h.type) { h = h.block; for (var k = Ac(h, !1), l = 0, m; m = k[l]; l++) m.vb = !0;
            h.aa();
            k = h.ha();
            l = h.Hb();
            h.moveBy(e, c);
            m = Xk(this, h, this.u ? e - l.width : e, c, l, f);
            Uk(this, k, h, m);
            c += l.height + b[f] } else "button" == h.type && (Wk(this, h.button, e, c), c += h.button.height + b[f]) };
d.ss = function(a) { a = Math.atan2(a.y, a.x) / Math.PI * 180; var b = this.Jr; return a < b && a > -b || a < -180 + b || a > 180 - b ? !0 : !1 };
d.ki = function() { if (!this.w) return null; var a = this.w.getBoundingClientRect(),
        b = a.left;
    a = a.width; if (this.Df == x.Mf) return new wg(b - 1E9, -1E9, 1E9 + a, 2E9); if (B && this.xa && this.xa.ak) { var c = this.xa.w.getBoundingClientRect().x;
        10 > Math.abs(c - b) && (b += this.qx * this.xa.options.Lb.scale) } return new wg(b, -1E9, 1E9 + a, 2E9) };
d.nt = function() { this.m.scale = this.xa.scale; for (var a = 0, b = fd(this.m, !1), c = 0, e; e = b[c]; c++) { var f = e.Hb().width;
        e.M && (f -= M);
        a = Math.max(a, f) } for (c = 0; e = this.ij[c]; c++) a = Math.max(a, e.width);
    a += 1.5 * this.yd + M;
    a *= this.m.scale;
    a += I; if (this.ma != a) { for (c = 0; e = b[c]; c++) this.u && (f = e.oa().x, e.moveBy(a / this.m.scale - this.yd - M - f, 0)), e.Jl && Yk(this, e.Jl, e); if (this.u)
            for (c = 0; e = this.ij[c]; c++) b = e.Wr().y, e.moveTo(a / this.m.scale - e.width - this.yd - M, b);
        this.ma = a;
        this.xa.resize() } };

function Zk(a) { tg.call(this);
    this.P = a;
    a = A ? "focusout" : "blur";
    this.tx = ec(this.P, A ? "focusin" : "focus", this, !A);
    this.ux = ec(this.P, a, this, !A) } w(Zk, tg);
Zk.prototype.handleEvent = function(a) { var b = new Qb(a.Ae);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b) };
Zk.prototype.Na = function() { Zk.s.Na.call(this);
    nc(this.tx);
    nc(this.ux);
    delete this.P };

function $k(a, b) { null != a && this.append.apply(this, arguments) } d = $k.prototype;
d.Db = "";
d.set = function(a) { this.Db = "" + a };
d.append = function(a, b, c) { this.Db += String(a); if (null != b)
        for (var e = 1; e < arguments.length; e++) this.Db += arguments[e]; return this };
d.clear = function() { this.Db = "" };
d.toString = function() { return this.Db };

function al(a, b, c) { Uh.call(this, c);
    this.cb = b || bl;
    a instanceof Id || (a = Ld(a), a = Md(Kd(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.mi()));
    this.Uj = a;
    this.zj = this.Fp = !1;
    this.Cy = null;
    this.jv = Sd;
    this.ck = !0;
    this.Bl = -1 } w(al, Uh);
var cl = {};
d = al.prototype;
d.Na = function() { al.s.Na.call(this);
    this.Gg && (this.Gg.removeNode(this), this.Gg = null);
    this.P = null };
d.em = function() { var a = this.G(); if (a) { var b = dl(this);
        b && !b.id && (b.id = this.ba() + ".label");
        fi(a, "treeitem");
        T(a, "selected", !1);
        T(a, "level", this.li());
        b && T(a, "labelledby", b.id);
        (b = this.Rl()) && fi(b, "presentation");
        (b = this.Ql()) && fi(b, "presentation"); if (b = el(this))
            if (fi(b, "group"), b.hasChildNodes())
                for (T(a, "expanded", !1), a = ai(this), b = 1; b <= a; b++) { var c = S(this, b - 1).G();
                    T(c, "setsize", a);
                    T(c, "posinset", b) } } };
d.T = function() { var a = this.Yb(); var b = this.Ym(); var c = a.fd;
    a = c.createElement("DIV");
    A ? (Ud(a, Rd(Td, b)), a.removeChild(a.firstChild)) : Ud(a, b); if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else
        for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.P = b };
d.rb = function() { al.s.rb.call(this);
    cl[this.ba()] = this;
    this.em() };
d.Hd = function() { al.s.Hd.call(this);
    delete cl[this.ba()] };
d.Yh = function(a, b) { var c = S(this, b - 1),
        e = S(this, b);
    al.s.Yh.call(this, a, b);
    a.me = c;
    a.ke = e;
    c ? c.ke = a : this.Pr = a;
    e ? e.me = a : this.us = a;
    (b = this.Cc()) && fl(a, b);
    gl(a, this.li() + 1); if (b = this.G())
        if (this.Ti(), T(b, "expanded", this.zc()), this.zc()) { b = el(this);
            a.G() || a.T(); var f = a.G(),
                h = e && e.G();
            b.insertBefore(f, h);
            this.za && a.rb();
            e || (c ? c.Ti() : (ph(b, !0), this.oe(this.zc()))) } };
d.add = function(a, b) { a.getParent() && a.getParent().removeChild(a);
    this.Yh(a, b ? di(this, b) : ai(this)); return a };
d.removeChild = function(a) {
    var b = this.Cc(),
        c = b ? b.Fe() : null;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), Af(this.ay, 10, this)) : this.select();
    al.s.removeChild.call(this, a);
    this.us == a && (this.us = a.me);
    this.Pr == a && (this.Pr = a.ke);
    a.me && (a.me.ke = a.ke);
    a.ke && (a.ke.me = a.me);
    c = !a.ke;
    a.Gg = null;
    a.Bl = -1;
    if (b && (b.removeNode(a), this.za)) {
        b = el(this);
        if (a.za) { var e = a.G();
            b.removeChild(e);
            a.Hd() } c && (c = S(this, ai(this) - 1)) && c.Ti();
        ci(this) || (b.style.display = "none", this.Ti(), this.Rl().className = this.Ll(), (c = this.G()) &&
            c.removeAttribute("aria-expanded"))
    }
    return a
};
d.remove = al.prototype.removeChild;
d.ay = function() { this.select() };
d.li = function() { var a = this.Bl;
    0 > a && (a = (a = this.getParent()) ? a.li() + 1 : 0, gl(this, a)); return a };

function gl(a, b) { if (b != a.Bl) { a.Bl = b; var c = hl(a); if (c) { var e = il(a) + "px";
            bi(a) ? c.style.paddingRight = e : c.style.paddingLeft = e } $h(a, function(a) { gl(a, b + 1) }) } } d.contains = function(a) { for (; a;) { if (a == this) return !0;
        a = a.getParent() } return !1 };
d.Vf = function() { var a = [];
    $h(this, function(b) { a.push(b) }); return a };
d.bk = function() { return this.Fp };
d.select = function() { var a = this.Cc();
    a && a.od(this) };

function jl(a, b) { if (a.Fp != b) { a.Fp = b;
        kl(a); var c = a.G();
        c && (T(c, "selected", b), b && (b = a.Cc().G(), T(b, "activedescendant", a.ba()))) } } d.zc = function() { return this.zj };
d.oe = function(a) { var b = a != this.zj; if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) { this.zj = a; var c = this.Cc(); var e = this.G(); if (ci(this)) { if (!a && c && this.contains(c.Fe()) && this.select(), e) { if (c = el(this))
                    if (ph(c, a), T(e, "expanded", a), a && this.za && !c.hasChildNodes()) { var f = [];
                        $h(this, function(a) { f.push(a.Ym()) });
                        Ud(c, Rd(f));
                        $h(this, function(a) { a.rb() }) } this.Ti() } } else(c = el(this)) && ph(c, !1);
        e && (this.Rl().className = this.Ll());
        b && this.dispatchEvent(a ? "expand" : "collapse") } };
d.toggle = function() { this.oe(!this.zc()) };
d.expand = function() { this.oe(!0) };
d.collapse = function() { this.oe(!1) };
d.Dp = function() { var a = this.getParent();
    a && (a.oe(!0), a.Dp()) };
d.Ym = function() { var a = this.Cc(),
        b = !a.Ck || a == this.getParent() && !a.Wp ? this.cb.ir : this.cb.gr;
    a = this.zc() && ci(this);
    b = { "class": b, style: ll(this) }; var c = [];
    a && $h(this, function(a) { c.push(a.Ym()) });
    a = Qd("div", b, c); return Qd("div", { "class": this.cb.ur, id: this.ba() }, [ml(this), a]) };

function il(a) { return Math.max(0, (a.li() - 1) * a.cb.Go) }

function ml(a) { var b = {};
    b["padding-" + (bi(a) ? "right" : "left")] = il(a) + "px";
    b = { "class": a.Hj(), style: b }; var c = a.qo(),
        e = Qd("span", { style: { display: "inline-block" }, "class": a.Ll() }),
        f = Qd("span", { "class": a.cb.vr, title: a.Cy || null }, a.Uj);
    a = Rd(f, Qd("span", {}, a.jv)); return Qd("div", b, [c, e, a]) } d.Hj = function() { return this.cb.Rn + (this.bk() ? " " + this.cb.xr : "") };
d.qo = function() { return Qd("span", { type: "expand", style: { display: "inline-block" }, "class": nl(this) }) };

function nl(a) { var b = a.Cc(),
        c = !b.Ck || b == a.getParent() && !b.Wp,
        e = a.cb,
        f = new $k;
    f.append(e.Tg, " ", e.Vv, " "); if (ci(a)) { var h = 0;
        b.Vp && a.ck && (h = a.zc() ? 2 : 1);
        c || (h = a.ke ? h + 8 : h + 4); switch (h) {
            case 1:
                f.append(e.Zv); break;
            case 2:
                f.append(e.Yv); break;
            case 4:
                f.append(e.nr); break;
            case 5:
                f.append(e.Xv); break;
            case 6:
                f.append(e.Wv); break;
            case 8:
                f.append(e.pr); break;
            case 9:
                f.append(e.aw); break;
            case 10:
                f.append(e.$v); break;
            default:
                f.append(e.mr) } } else c ? f.append(e.mr) : a.ke ? f.append(e.pr) : f.append(e.nr); return f.toString() }

function ll(a) { var b = a.zc() && ci(a); return Bd({ "background-position": ol(a), display: b ? null : "none" }) }

function ol(a) { return (a.ke ? (a.li() - 1) * a.cb.Go : "-100") + "px 0" } d.G = function() { var a = al.s.G.call(this);
    a || (this.P = a = this.Yb().G(this.ba())); return a };

function hl(a) { return (a = a.G()) ? a.firstChild : null } d.Ql = function() { var a = hl(this); return a ? a.firstChild : null };
d.Rl = function() { var a = hl(this); return a ? a.childNodes[1] : null };

function dl(a) { return (a = hl(a)) && a.lastChild ? a.lastChild.previousSibling : null }

function el(a) { return (a = a.G()) ? a.lastChild : null } d.Ob = function(a) { this.Uj = a = Ld(a); var b = dl(this);
    b && Ud(b, a);
    (a = this.Cc()) && pl(a, this) };
d.Ib = function() { var a = Kd(this.Uj); return -1 != a.indexOf("&") ? "document" in g ? Sa(a) : Ua(a) : a };

function kl(a) { var b = hl(a);
    b && (b.className = a.Hj()) } d.Ti = function() { var a = this.Ql();
    a && (a.className = nl(this)); if (a = el(this)) a.style.backgroundPosition = ol(this) };
d.Vs = function(a) { "expand" == a.target.getAttribute("type") && ci(this) ? this.ck && this.toggle() : (this.select(), kl(this)) };
d.cp = function(a) { a.preventDefault() };
d.Ss = function(a) { "expand" == a.target.getAttribute("type") && ci(this) || this.ck && this.toggle() };
d.fp = function(a) {
    var b = !0;
    switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            ci(this) && (this.zc() ? S(this, 0).select() : this.oe(!0));
            break;
        case 37:
            if (a.altKey) break;
            if (ci(this) && this.zc() && this.ck) this.oe(!1);
            else { var c = this.getParent(),
                    e = this.Cc();
                c && (e.zh || c != e) && c.select() }
            break;
        case 40:
            a: if (ci(this) && this.zc()) c = S(this, 0);
                else { for (c = this; c != this.Cc();) { e = c.ke; if (null != e) { c = e; break a } c = c.getParent() } c = null } c && c.select();
            break;
        case 38:
            c = this.me;
            null != c ? c = ql(c) : (c = this.getParent(), e = this.Cc(), c = !e.zh && c ==
                e || this == e ? null : c);
            c && c.select();
            break;
        default:
            b = !1
    }
    b && (a.preventDefault(), (e = this.Cc()) && e.Lk.clear());
    return b
};

function ql(a) { return a.zc() && ci(a) ? ql(S(a, ai(a) - 1)) : a }

function fl(a, b) { a.Gg != b && (a.Gg = b, pl(b, a), $h(a, function(a) { fl(a, b) })) }
var bl = {
    Go: 19,
    wr: "goog-tree-root goog-tree-item",
    rr: "goog-tree-hide-root",
    ur: "goog-tree-item",
    gr: "goog-tree-children",
    ir: "goog-tree-children-nolines",
    Rn: "goog-tree-row",
    vr: "goog-tree-item-label",
    Tg: "goog-tree-icon",
    Vv: "goog-tree-expand-icon",
    Zv: "goog-tree-expand-icon-plus",
    Yv: "goog-tree-expand-icon-minus",
    aw: "goog-tree-expand-icon-tplus",
    $v: "goog-tree-expand-icon-tminus",
    Xv: "goog-tree-expand-icon-lplus",
    Wv: "goog-tree-expand-icon-lminus",
    pr: "goog-tree-expand-icon-t",
    nr: "goog-tree-expand-icon-l",
    mr: "goog-tree-expand-icon-blank",
    Pn: "goog-tree-expanded-folder-icon",
    kr: "goog-tree-collapsed-folder-icon",
    Qn: "goog-tree-file-icon",
    qr: "goog-tree-expanded-folder-icon",
    lr: "goog-tree-collapsed-folder-icon",
    xr: "selected"
};

function rl(a, b, c) { al.call(this, a, b, c) } w(rl, al);
rl.prototype.Cc = function() { if (this.Gg) return this.Gg; var a = this.getParent(); return a && (a = a.Cc()) ? (fl(this, a), a) : null };
rl.prototype.Ll = function() { var a = this.zc(),
        b = this.qw; if (a && b) return b;
    b = this.bx; if (!a && b) return b;
    b = this.cb; if (ci(this)) { if (a && b.Pn) return b.Tg + " " + b.Pn; if (!a && b.kr) return b.Tg + " " + b.kr } else if (b.Qn) return b.Tg + " " + b.Qn; return "" };

function sl(a) { if (a.Jj && "function" == typeof a.Jj) return a.Jj(); if (q(a)) return a.split(""); if (fa(a)) { for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]); return b } b = [];
    c = 0; for (e in a) b[c++] = a[e]; return b };

function tl(a) { this.Vb = void 0;
    this.hc = {}; if (a) { if (a.Ul && "function" == typeof a.Ul) var b = a.Ul();
        else if (a.Jj && "function" == typeof a.Jj) b = void 0;
        else if (fa(a) || q(a)) { b = []; for (var c = a.length, e = 0; e < c; e++) b.push(e) } else
            for (e in b = [], c = 0, a) b[c++] = e;
        a = sl(a); for (c = 0; c < b.length; c++) this.set(b[c], a[c]) } } d = tl.prototype;
d.set = function(a, b) { ul(this, a, b, !1) };
d.add = function(a, b) { ul(this, a, b, !0) };

function ul(a, b, c, e) { for (var f = 0; f < b.length; f++) { var h = b.charAt(f);
        a.hc[h] || (a.hc[h] = new tl);
        a = a.hc[h] } if (e && void 0 !== a.Vb) throw Error('The collection already contains the key "' + b + '"');
    a.Vb = c } d.get = function(a) { a: { for (var b = this, c = 0; c < a.length; c++)
            if (b = b.hc[a.charAt(c)], !b) { a = void 0; break a } a = b } return a ? a.Vb : void 0 };
d.Jj = function() { var a = [];
    vl(this, a); return a };

function vl(a, b) { void 0 !== a.Vb && b.push(a.Vb); for (var c in a.hc) vl(a.hc[c], b) }
d.Ul = function(a) { var b = []; if (a) { for (var c = this, e = 0; e < a.length; e++) { var f = a.charAt(e); if (!c.hc[f]) return [];
            c = c.hc[f] } wl(c, a, b) } else wl(this, "", b); return b };

function wl(a, b, c) { void 0 !== a.Vb && c.push(b); for (var e in a.hc) wl(a.hc[e], b + e, c) } d.clear = function() { this.hc = {};
    this.Vb = void 0 };
d.remove = function(a) { for (var b = this, c = [], e = 0; e < a.length; e++) { var f = a.charAt(e); if (!b.hc[f]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, f]);
        b = b.hc[f] } a = b.Vb; for (delete b.Vb; 0 < c.length;)
        if (f = c.pop(), b = f[0], f = f[1], b.hc[f].ts()) delete b.hc[f];
        else break; return a };
d.clone = function() { return new tl(this) };
d.ts = function() { var a; if (a = void 0 === this.Vb) a: { for (var b in this.hc) { a = !1; break a } a = !0 }
    return a };

function xl() { this.ph = new tl;
    this.Db = "";
    this.qm = this.Uo = null;
    this.Ai = this.hk = 0 }

function yl(a, b) { var c = b.Ib(); if (c && !Ga(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.ph.get(c); if (e) { for (var f = ai(b), h = 0; h < f; h++) yl(a, S(b, h));
            ya(e, b);
            e.length || a.ph.remove(c) } } }

function zl(a, b) { var c = !1;
    (b = a.ph.Ul(b)) && b.length && (a.Ai = 0, a.hk = 0, c = a.ph.get(b[0]), c = Al(a, c)) && (a.Uo = b); return c }

function Al(a, b) { if (b) { if (a.Ai < b.length) { var c = b[a.Ai];
            a.qm = b } c && (c.Dp(), c.select()) } return !!c }
xl.prototype.clear = function() { this.Db = "" };

function Bl(a, b, c) { al.call(this, a, b, c);
    this.zj = !0;
    jl(this, !0);
    this.wb = this;
    this.Lk = new xl;
    this.jo = this.mc = null;
    this.Bj = !1;
    this.ww = null;
    this.Wp = this.zh = this.Vp = this.Ck = !0; if (A) try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {} } w(Bl, al);
d = Bl.prototype;
d.Cc = function() { return this };
d.li = function() { return 0 };
d.Dp = function() {};
d.Jw = function() { this.Bj = !0;
    vi(this.G(), "focused");
    this.wb && this.wb.select() };
d.Ew = function() { this.Bj = !1;
    xi(this.G(), "focused") };
d.hasFocus = function() { return this.Bj };
d.zc = function() { return !this.zh || Bl.s.zc.call(this) };
d.oe = function(a) { this.zh ? Bl.s.oe.call(this, a) : this.zj = a };
d.qo = function() { return Sd };
d.Rl = function() { var a = hl(this); return a ? a.firstChild : null };
d.Ql = function() { return null };
d.Ti = function() {};
d.Hj = function() { return Bl.s.Hj.call(this) + (this.zh ? "" : " " + this.cb.rr) };
d.Ll = function() { var a = this.zc(),
        b = this.qw; if (a && b) return b;
    b = this.bx; if (!a && b) return b;
    b = this.cb; return a && b.qr ? b.Tg + " " + b.qr : !a && b.lr ? b.Tg + " " + b.lr : "" };
d.od = function(a) { if (this.wb != a) { var b = !1;
        this.wb && (b = this.wb == this.ww, jl(this.wb, !1)); if (this.wb = a) jl(a, !0), b && a.select();
        this.dispatchEvent("change") } };
d.Fe = function() { return this.wb };

function Cl(a) { 0 != a.Ck && (a.Ck = !1, a.za && Dl(a)) }

function Dl(a) {
    function b(a) { var h = el(a); if (h) { var l = !e || c == a.getParent() && !f ? a.cb.ir : a.cb.gr;
            h.className = l; if (h = a.Ql()) h.className = nl(a) } $h(a, b) } var c = a,
        e = c.Ck,
        f = c.Wp;
    b(a) }

function El(a) { 0 != a.Vp && (a.Vp = !1, a.za && Dl(a)) }

function Fl(a) { if (0 != a.zh) { a.zh = !1; if (a.za) { var b = hl(a);
            b && (b.className = a.Hj()) } a.Fe() == a && S(a, 0) && a.od(S(a, 0)) } } d.em = function() { Bl.s.em.call(this); var a = this.G();
    fi(a, "tree");
    T(a, "labelledby", dl(this).id) };
d.rb = function() { Bl.s.rb.call(this); var a = this.G();
    a.className = this.cb.wr;
    a.setAttribute("hideFocus", "true");
    a = this.G();
    a.tabIndex = 0; var b = this.mc = new li(a),
        c = this.jo = new Zk(a);
    Yh(this).ia(c, "focusout", this.Ew).ia(c, "focusin", this.Jw).ia(b, "key", this.Ld).ia(a, "mousedown", this.zo).ia(a, "click", this.zo).ia(a, "dblclick", this.zo);
    this.em() };
d.Hd = function() { Bl.s.Hd.call(this);
    this.mc.A();
    this.mc = null;
    this.jo.A();
    this.jo = null };
d.zo = function(a) { var b = Gl(this, a); if (b) switch (a.type) {
        case "mousedown":
            b.Vs(a); break;
        case "click":
            b.cp(a); break;
        case "dblclick":
            b.Ss(a) } };
d.Ld = function(a) {
    var b = this.Lk;
    var c = !1;
    switch (a.keyCode) {
        case 40:
        case 38:
            if (a.ctrlKey) { c = 40 == a.keyCode ? 1 : -1; var e = b.Uo; if (e) { var f = null,
                        h = !1; if (b.qm) { var k = b.Ai + c;
                        0 <= k && k < b.qm.length ? (b.Ai = k, f = b.qm) : h = !0 } f || (k = b.hk + c, 0 <= k && k < e.length && (b.hk = k), e.length > b.hk && (f = b.ph.get(e[b.hk])), f && f.length && h && (b.Ai = -1 == c ? f.length - 1 : 0));
                    Al(b, f) && (b.Uo = e) } c = !0 } break;
        case 8:
            e = b.Db.length - 1;
            c = !0;
            0 < e ? (b.Db = b.Db.substring(0, e), zl(b, b.Db)) : 0 == e ? b.Db = "" : c = !1; break;
        case 27:
            b.Db = "", c = !0 }(b = c || this.wb && this.wb.fp(a)) || (b =
        this.Lk, c = !1, a.ctrlKey || a.altKey || (e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "\u0080" <= e && "\ufffd" >= e) && (" " != e || b.Db) && (b.Db += e, c = zl(b, b.Db))), b = c);
    b && a.preventDefault();
    return b
};

function Gl(a, b) { for (var c = b.target; null != c;) { if (b = cl[c.id]) return b; if (c == a.G()) break;
        c = c.parentNode } return null } d.createNode = function(a) { return new rl(a || Sd, this.cb, this.Yb()) };

function pl(a, b) { a = a.Lk; var c = b.Ib(); if (c && !Ga(null == c ? "" : String(c))) { c = c.toLowerCase(); var e = a.ph.get(c);
        e ? e.push(b) : a.ph.set(c, [b]) } } d.removeNode = function(a) { yl(this.Lk, a) };

function Qg(a) {
    this.m = a;
    this.u = a.options.u;
    this.ge = a.options.He;
    this.Ea = a.options.Ea;
    this.cb = { Go: 19, wr: "blocklyTreeRoot", rr: "blocklyHidden", ur: "", Rn: "blocklyTreeRow", vr: "blocklyTreeLabel", Tg: "blocklyTreeIcon", Pn: "blocklyTreeIconOpen", Qn: "blocklyTreeIconNone", xr: "blocklyTreeSelected" };
    this.Ot = { Rn: "blocklyTreeSeparator" };
    this.ge && (this.cb.cssTreeRow += a.u ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.Ot.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.u ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.cb.cssTreeIcon = "")
}
d = Qg.prototype;
d.width = 0;
d.height = 0;
d.ek = null;
d.I = function() {
    var a = this.m,
        b = L(this.m);
    this.Nc = G("DIV", "blocklyToolboxDiv");
    this.Nc.setAttribute("dir", a.u ? "RTL" : "LTR");
    b.parentNode.insertBefore(this.Nc, b);
    x.O(this.Nc, "mousedown", this, function(a) { x.i.jg(a) || a.target == this.Nc ? x.Qb(!1) : x.Qb(!0);
        x.Touch.df() }, !1, !0);
    b = { vj: a.options.vj, Lb: a, u: a.u, Le: a.options.Le, He: a.He, Ea: a.options.Ea };
    this.J = null;
    this.J = a.He ? new Tg(b) : new Ug(b);
    ie(this.J.T("svg"), L(this.m));
    this.J.I(a);
    this.cb.cleardotPath = a.options.le + "1x1.gif";
    this.cb.cssCollapsedFolderIcon = "blocklyTreeIconClosed" +
        (a.u ? "Rtl" : "Ltr");
    this.Sd = b = new Hl(this, this.cb);
    Fl(b);
    Cl(b);
    El(b);
    b.od(null);
    a = this.Bm(a.options.Ke);
    b.aa(this.Nc);
    a && b.od(a);
    Yg(this);
    this.position()
};
d.A = function() { this.J.A();
    this.Sd.A();
    H(this.Nc);
    this.ek = this.m = null };
d.hd = function() { return this.width };
d.ni = function() { return this.height };
d.position = function() { var a = this.Nc; if (a) { var b = L(this.m);
        b = x.Kt(b);
        this.ge ? (a.style.left = "0", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, this.Ea == x.Nf ? a.style.top = "0" : a.style.bottom = "0") : (this.Ea == x.se ? a.style.right = "0" : a.style.left = "0", a.style.height = b.height + "px", this.width = a.offsetWidth);
        this.J.position() } };
d.Bm = function(a) { this.Sd.ot();
    this.Sd.ue = [];
    this.fs = !1;
    a = Il(this, a, this.Sd, this.m.options.le); if (this.Sd.ue.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    Gf(this.m); return a };

function Il(a, b, c, e) {
    for (var f = null, h = null, k = 0, l; l = b.childNodes[k]; k++)
        if (l.tagName) switch (l.tagName.toUpperCase()) {
            case "CATEGORY":
                h = x.i.pc(l.getAttribute("name"));
                h = a.Sd.createNode(h);
                h.ue = [];
                c.add(h);
                var m = l.getAttribute("custom");
                m ? h.ue = m : (m = Il(a, l, h, e)) && (f = m);
                m = x.i.pc(l.getAttribute("colour"));
                q(m) ? (h.Co = /^#[0-9a-fA-F]{6}$/.test(m) ? m : x.ns(Number(m)), a.fs = !0) : h.Co = "";
                "true" == l.getAttribute("expanded") ? (h.ue.length && (f = h), h.oe(!0)) : h.oe(!1);
                h = l;
                break;
            case "SEP":
                h && ("CATEGORY" == h.tagName.toUpperCase() ?
                    c.add(new Jl(a.Ot)) : (l = parseFloat(l.getAttribute("gap")), !isNaN(l) && h && h.setAttribute("gap", l)));
                break;
            case "BLOCK":
            case "SHADOW":
            case "LABEL":
            case "BUTTON":
                c.ue.push(l), h = l
        }
    return f
}

function Yg(a, b) { b = (b || a.Sd).Vf(!1); for (var c = 0, e; e = b[c]; c++) { var f = hl(e); if (f) { var h = a.fs ? "8px solid " + (e.Co || "#ddd") : "none";
            a.m.u ? f.style.borderRight = h : f.style.borderLeft = h } Yg(a, e) } }
d.ki = function() { if (!this.Nc) return null; var a = this.Nc.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        e = a.width;
    a = a.height; return this.Ea == x.Mf ? new wg(-1E7, -1E7, 1E7 + b + e, 2E7) : this.Ea == x.se ? new wg(b, -1E7, 1E7 + e, 2E7) : this.Ea == x.Nf ? new wg(-1E7, -1E7, 2E7, 1E7 + c + a) : new wg(0, c, 2E7, 1E7 + e) };

function Hl(a, b) { this.ga = a;
    Bl.call(this, Sd, b) } w(Hl, Bl);
Hl.prototype.rb = function() { Hl.s.rb.call(this); if (Db) { var a = this.G();
        x.O(a, "touchend", this, this.Ww) } };
Hl.prototype.Ww = function(a) { var b = Gl(this, a);
    b && "touchend" === a.type && setTimeout(function() { b.cp(a) }, 1) };
Hl.prototype.createNode = function(a) { a = a ? Ld(a) : Sd; return new Kl(this.ga, a, this.cb, this.Yb()) };
Hl.prototype.od = function(a) { var b = this.ga; if (a != this.wb && a != b.Sd) { b.ek && (hl(b.ek).style.backgroundColor = ""); if (a) { var c = a.Co || "#57e";
            hl(a).style.backgroundColor = c;
            Yg(b, a) } c = this.Fe();
        Bl.prototype.od.call(this, a);
        a && a.ue && a.ue.length ? (b.J.show(a.ue), b.ek != a && b.J.Ep()) : b.J.Pa();
        c != a && c != this && (c = new Ic(null, "category", c && Kd(c.Uj), a && Kd(a.Uj)), c.Kc = b.m.id, x.j.V(c));
        a && (b.ek = a) } };

function Kl(a, b, c, e) { al.call(this, b, c, e);
    a && (b = function() { x.Eh(a.m) }, ec(a.Sd, "expand", b), ec(a.Sd, "collapse", b)) } w(Kl, rl);
d = Kl.prototype;
d.qo = function() { return Qd("span") };
d.cp = function() { ci(this) && this.ck ? (this.toggle(), this.select()) : this.bk() ? this.Cc().od(null) : this.select();
    kl(this) };
d.Vs = function() {};
d.Ss = function() {};
d.fp = function(a) { if (this.Gg.ga.ge) { var b = {};
        b[39] = this.Ki ? 38 : 40;
        b[37] = this.Ki ? 40 : 38;
        b[38] = 37;
        b[40] = 39;
        a.keyCode = b[a.keyCode] || a.keyCode } return Kl.s.fp.call(this, a) };

function Jl(a) { Kl.call(this, null, Sd, a) } w(Jl, Kl);
x.wd = {};
x.wd.uC = "";
x.wd.Jt = null;
x.wd.Fs = "";
x.wd.fg = function(a, b) { if (!x.wd.Jt) { var c = ".blocklyDraggable {}\n";
        a && (c += x.wd.iu.join("\n"), x.tu && (c += x.tu.CSS.join("\n")));
        x.wd.Fs = b.replace(/[\\\/]$/, "");
        c = c.replace(/<<<PATH>>>/g, x.wd.Fs);
        a = document.createElement("style");
        document.head.insertBefore(a, document.head.firstChild);
        a.appendChild(document.createTextNode(c));
        x.wd.Jt = a.sheet } };
x.wd.HC = function() { console.warn("Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context") };
x.wd.iu = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none", "}", ".blocklyNonSelectable {", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;",
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
x.K.na = null;
x.K.nk = null;
x.K.di = null;
x.K.T = function() { x.K.na || (x.K.na = G("DIV", "blocklyWidgetDiv"), document.body.appendChild(x.K.na)) };
x.K.show = function(a, b, c) { x.K.Pa();
    x.K.nk = a;
    x.K.di = c;
    x.K.na.style.top = ag().y + "px";
    x.K.na.style.direction = b ? "rtl" : "ltr";
    x.K.na.style.display = "block" };
x.K.Pa = function() { x.K.nk && (x.K.nk = null, x.K.na.style.display = "none", x.K.na.style.left = "", x.K.na.style.top = "", x.K.di && x.K.di(), x.K.di = null, he(x.K.na)) };
x.K.Y = function() { return !!x.K.nk };
x.K.Sj = function(a) { x.K.nk == a && x.K.Pa() };
x.K.position = function(a, b, c, e, f) { b < e.y && (b = e.y);
    f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
    x.K.et(a, b, c.height) };
x.K.et = function(a, b, c) { x.K.na.style.left = a + "px";
    x.K.na.style.top = b + "px";
    x.K.na.style.height = c + "px" };
x.K.op = function(a, b, c, e) { x.K.et(x.K.Bv(a, b, c, e), x.K.Cv(a, b, c), c.height) };
x.K.Bv = function(a, b, c, e) { if (e) return b = Math.max(b.right - c.width, a.left), Math.min(b, a.right - c.width);
    b = Math.min(b.left, a.right - c.width); return Math.max(b, a.left) };
x.K.Cv = function(a, b, c) { return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom };

function Ll(a) { this.mj = a;
    this.T() } d = Ll.prototype;
d.ab = null;
d.ye = null;
d.mj = null;
d.xg = 1;
d.Fk = null;
d.T = function() { this.ab || (this.ab = x.i.B("svg", { xmlns: x.sn, "xmlns:html": x.Jf, "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", "class": "blocklyBlockDragSurface" }, this.mj), this.ye = x.i.B("g", {}, this.ab)) };

function Hf(a, b) { a.ye.appendChild(b);
    a.ab.style.display = "block";
    a.Fk = new D(0, 0) }
d.Ff = function(a, b) { this.Fk = new D(a * this.xg, b * this.xg);
    a = this.Fk.x;
    b = this.Fk.y;
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.ab.style.display = "block";
    x.i.zk(this.ab, "translate3d(" + a + "px, " + b + "px, 0px)") };
d.Yl = function() { var a = x.i.Bc(this.ab); return new D(a.x / this.xg, a.y / this.xg) };
d.Ac = function() { return this.ye };
d.jj = function(a) { a ? a.appendChild(this.ye.firstChild) : this.ye.removeChild(this.ye.firstChild);
    this.ab.style.display = "none";
    this.Fk = null };
x.fg = function(a, b) { x.Ev();
    q(a) && (a = document.getElementById(a) || document.querySelector(a)); if (!je(document, a)) throw "Error: container is not in current document.";
    b = new dg(b || {}); var c = G("DIV", "injectionDiv");
    a.appendChild(c);
    a = x.oj(c, b); var e = new Ll(c);
    c = new Dg(c);
    b = x.Sv(a, b, e, c);
    x.jx(b);
    x.ng = b;
    x.Eh(b); return b };
x.oj = function(a, b) {
    a.setAttribute("dir", "LTR");
    Vh = b.u;
    x.wd.fg(b.Yw, b.le);
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
    b.Nr = f.id;
    f = x.i.B("pattern", { id: "blocklyDisabledPattern" + e, patternUnits: "userSpaceOnUse", width: 10, height: 10 }, c);
    x.i.B("rect", { width: 10, height: 10, fill: "#aaa" }, f);
    x.i.B("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    b.vj = f.id;
    f = b.Xr;
    c = x.i.B("pattern", { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" }, c);
    0 < f.length && 0 < f.spacing ? (x.i.B("line", { stroke: f.colour }, c), 1 < f.length && x.i.B("line", { stroke: f.colour }, c)) : x.i.B("line", {}, c);
    b.Yr = c;
    return a
};
x.Sv = function(a, b, c, e) {
    b.Lb = null;
    var f = new Ng(b, c, e);
    f.scale = b.dc.Ft;
    a.appendChild(f.T("blocklyMainBackground"));
    !b.bs && b.Ke && (c = Sg(f, "svg"), x.i.Xj(c, a));
    f.translate(0, 0);
    x.ng = f;
    b.readOnly || b.gs || f.Ad(function() {
        if (!f.sb()) {
            var a = f.ub(),
                c = a.Cb + a.ob,
                e = a.Ve + a.zb;
            if (a.vc < e || a.vc + a.uc > a.fb + e || a.Pc < (b.u ? a.Cb : c) || a.Pc + a.Qc > (b.u ? a.Aa : a.Aa + c))
                for (var m = fd(f, !1), n = 0, p; p = m[n]; n++) {
                    var t = p.oa(),
                        y = p.Hb(),
                        z = e + 25 - y.height - t.y;
                    0 < z && p.moveBy(0, z);
                    z = e + a.fb - 25 - t.y;
                    0 > z && p.moveBy(0, z);
                    z = 25 + c - t.x - (b.u ? 0 : y.width);
                    0 < z &&
                        p.moveBy(z, 0);
                    t = c + a.Aa - 25 - t.x + (b.u ? y.width : 0);
                    0 > t && p.moveBy(t, 0)
                }
        }
    });
    x.Eh(f);
    x.K.T();
    x.C.T();
    return f
};
x.jx = function(a) { var b = a.options,
        c = L(a);
    x.O(c.parentNode, "contextmenu", null, function(a) { x.i.km(a) || a.preventDefault() });
    c = x.O(window, "resize", null, function() { x.Qb(!0);
        x.Eh(a) });
    a.Jm = c;
    x.fg.vv();
    b.Ke && (a.ga ? a.ga.I(a) : a.J && (a.J.I(a), a.J.show(b.Ke.childNodes), a.J.Ep(), a.scrollX = a.J.ma, b.Ea == x.se && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.gs && (a.kb = new fg(a), a.kb.resize());
    b.Zw && x.fg.vx(b.le, a) };
x.fg.vv = function() { x.mw || (x.O(document, "keydown", null, x.Px), x.Oc(document, "touchend", null, x.mg), x.Oc(document, "touchcancel", null, x.mg), rb && x.O(window, "orientationchange", document, function() { x.Eh(x.oi()) }));
    x.mw = !0 };
x.fg.vx = function(a, b) {
    function c() { for (; f.length;) x.Qa(f.pop());
        e.preload() } var e = b.Pf;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete"); var f = [];
    f.push(x.O(document, "mousemove", null, c, !0));
    f.push(x.O(document, "touchstart", null, c, !0)) };
x.Rt = function(a) { console.warn("Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead.");
    x.oi().Rt(a) };
x.ng = null;
x.selected = null;
x.Gl = [];
x.kj = null;
x.tl = null;
x.pC = null;
x.ns = function(a) { var b = x.yu,
        c = 255 * x.zu,
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
                e = c, f = b, h = a } } return wj([Math.floor(e), Math.floor(f), Math.floor(h)]) };
x.Kt = function(a) { return { width: a.Lq, height: a.Jq } };
x.FC = function(a) { Gf(a) };
x.Eh = function(a) { for (; a.options.Lb;) a = a.options.Lb; var b = L(a),
        c = b.parentNode; if (c) { var e = c.offsetWidth;
        c = c.offsetHeight;
        b.Lq != e && (b.setAttribute("width", e + "px"), b.Lq = e);
        b.Jq != c && (b.setAttribute("height", c + "px"), b.Jq = c);
        a.resize() } };
x.Px = function(a) {
    if (!x.ng.options.readOnly && !x.i.km(a)) {
        var b = !1;
        if (27 == a.keyCode) x.Qb();
        else if (8 == a.keyCode || 46 == a.keyCode) { a.preventDefault(); if (x.ng.sb()) return;
            x.selected && x.selected.lc() && (b = !0) } else if (a.altKey || a.ctrlKey || a.metaKey) { if (x.ng.sb()) return;
            x.selected && x.selected.lc() && x.selected.Je() && (67 == a.keyCode ? (x.Qb(), x.On(x.selected)) : 88 != a.keyCode || x.selected.o.je || (x.On(x.selected), b = !0));
            86 == a.keyCode ? x.kj && (x.j.S(!0), a = x.tl, a.je && (a = a.Fh), Vg(a), x.j.S(!1)) : 90 == a.keyCode && (x.Qb(), x.ng.eq(a.shiftKey)) } b &&
            !x.selected.o.je && (x.j.S(!0), x.Qb(), x.selected.A(!0, !0), x.j.S(!1))
    }
};
x.On = function(a) { if (a.rs) var b = a.Jk();
    else { b = x.F.Rf(a);
        x.F.hw(b); var c = a.oa();
        b.setAttribute("x", a.u ? -c.x : c.x);
        b.setAttribute("y", c.y) } x.kj = b;
    x.tl = a.o };
x.Lr = function(a) { var b = x.kj,
        c = x.tl;
    x.On(a);
    Vg(a.o);
    x.kj = b;
    x.tl = c };
x.DC = function(a) { x.i.km(a) || a.preventDefault() };
x.Qb = function(a) { x.C.Pa();
    x.K.Pa();
    a || (a = x.oi(), a.ga && a.ga.J && a.ga.J.$h && a.ga.Sd.od(null)) };
x.Ad = function(a) { console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead."); return x.oi().Ad(a) };
x.oi = function() { return x.ng };
x.alert = function(a, b) { window.alert(a);
    b && b() };
x.confirm = function(a, b) { b(window.confirm(a)) };
x.prompt = function(a, b, c) { c(window.prompt(a, b)) };
x.px = function(a) { return function() { Nh(this, a) } };
x.ci = function(a) { for (var b = 0; b < a.length; b++) { var c = a[b]; if (c) { var e = c.type;
            null == e || "" === e ? console.warn("Block definition #" + b + " in JSON array is missing a type attribute. Skipping.") : (x.D[e] && console.warn("Block definition #" + b + ' in JSON array overwrites prior definition of "' + e + '".'), x.D[e] = { I: x.px(c) }) } else console.warn("Block definition #" + b + " in JSON array is " + c + ". Skipping.") } };
x.O = function(a, b, c, e, f, h) {
    function k(a) { var b = !f;
        a = x.Touch.oy(a); for (var h = 0, k; k = a[h]; h++)
            if (!b || x.Touch.Tp(k)) x.Touch.ky(k), c ? e.call(c, k) : e(k), l = !0 } var l = !1,
        m = []; if (g.PointerEvent && b in x.Touch.te)
        for (var n = 0, p; p = x.Touch.te[b][n]; n++) a.addEventListener(p, k, !1), m.push([a, p, k]);
    else if (a.addEventListener(b, k, !1), m.push([a, b, k]), b in x.Touch.te) { var t = function(a) { k(a); var b = !h;
            l && b && a.preventDefault() }; for (n = 0; p = x.Touch.te[b][n]; n++) a.addEventListener(p, t, !1), m.push([a, p, t]) } return m };
x.Oc = function(a, b, c, e) {
    function f(a) { c ? e.call(c, a) : e(a) } var h = [],
        k = g.window; if (k && k.PointerEvent && b in x.Touch.te) { k = 0; for (var l; l = x.Touch.te[b][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f]) } else if (a.addEventListener(b, f, !1), h.push([a, b, f]), b in x.Touch.te) { var m = function(a) { if (a.changedTouches && 1 == a.changedTouches.length) { var b = a.changedTouches[0];
                a.clientX = b.clientX;
                a.clientY = b.clientY } f(a);
            a.preventDefault() }; for (k = 0; l = x.Touch.te[b][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m]) } return h };
x.Qa = function(a) { for (; a.length;) { var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1) } };
x.ig = function(a) { return /^\s*-?\d+(\.\d+)?\s*$/.test(a) };
x.Ev = function() {
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
g.Blockly.getMainWorkspace = x.oi;
g.Blockly.addChangeListener = x.Ad;

function Ml(a, b) { var c = a.className;
    c = q(c) && c.match(/\S+/g) || []; for (var e = Da(arguments, 1), f = 0; f < e.length; f++) xa(c, e[f]) || c.push(e[f]);
    c = c.join(" ");
    a.className = c };
var Nl = {
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
    Ol = "ace ar fa he mzn ps".split(" "),
    Pl = window.BlocklyGamesLang,
    Ql = window.BlocklyGamesLanguages,
    Rl = !!window.location.pathname.match(/\.html$/),
    Gk = null,
    Sl, Tl = Number,
    Ul, Vl = window.location.search.match(/[?&]level=([^&]+)/);
Ul = Vl ? decodeURIComponent(Vl[1].replace(/\+/g, "%20")) : "NaN";
var Wl = Tl(Ul);
Sl = isNaN(Wl) ? 1 : sc(1, Wl, 10);

function Xl() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != Ol.indexOf(Pl) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", Pl);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < Ql.length; c++) { var e = Ql[c];
            b.push([Nl[e], e]) } b.sort(function(a, b) { return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0 });
        for (c = a.options.length = 0; c < b.length; c++) { var f = b[c];
            e = f[1];
            f = new Option(f[0], e);
            e == Pl && (f.selected = !0);
            a.options.add(f) } 1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!Yl(c), a && b && Ml(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Zl, 1)
}

function Yl(a) { var b = $l; try { var c = window.localStorage[b + a] } catch (e) {} return c }

function W(a) { var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null; return null === b ? "[Unknown message: " + a + "]" : b }

function am(a, b) { if (!a) throw TypeError("Element not found: " + a); "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0) }

function Zl() { if (!Rl) { window.GoogleAnalyticsObject = "GoogleAnalyticsFunction"; var a = function(b) {
            (a.q = a.q || []).push(arguments) };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date; var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview") } };
x.g.xC = {};
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
    xc: null,
    I: function() {
        Xl();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = W("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = W("Games_linkAlert"), BlocklyStorage.HASH_ERROR = W("Games_hashError"), BlocklyStorage.XML_ERROR = W("Games_xmlError"), BlocklyStorage.alert = X.It.bind(X, a), a && am(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Y.Dv, !0);
        x.D && (x.D.Pu = !1);
        x.h &&
            (x.h.Pu = !1)
    },
    BC: function(a, b) { if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else { var c = null; try { c = window.sessionStorage.As } catch (h) {} c && delete window.sessionStorage.As; var e = Yl(Sl),
                f = b && Yl(Sl - 1);
            f && "function" == typeof b && (f = b(f));
            (a = c || e || f || a) && Y.vt(a) } },
    vt: function(a) { Y.xc ? Y.xc.setValue(a, -1) : (a = x.F.Xc(a), Gk.clear(), x.F.ae(a, Gk), Gk.In()) },
    oo: function() {
        if (Y.xc) var a = Y.xc.getValue();
        else {
            a = x.F.gq(Gk, !0);
            if (1 == fd(Gk, !1).length &&
                a.querySelector) { var b = a.querySelector("block");
                b && (b.removeAttribute("x"), b.removeAttribute("y")) } a = x.F.Gd(a)
        }
        return a
    },
    Lj: function() { return Gk },
    GC: function() { window.localStorage && (window.localStorage[$l + Sl] = Y.oo()) },
    dm: function() { window.location = (Rl ? "index.html" : "./") + "?lang=" + Pl },
    Dv: function() {
        if (window.sessionStorage) { if (Y.xc) var a = Y.xc.getValue();
            else a = x.F.gq(Gk), a = x.F.Gd(a);
            window.sessionStorage.As = a } a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var b = window.location.search;
        b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    Zo: function() { 10 > Sl ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Pl + "&level=" + (Sl + 1) : Y.dm() },
    ks: function(a, b) {
        if (a) { var c = a.match(/^block_id_([^']+)$/);
            c && (a = c[1]) }
        var e = a;
        a = Gk;
        if (void 0 === b) {
            for (var f =
                    0; c = a.Tj[f]; f++) c.Sb(!1);
            a.Tj.length = 0
        }
        if (c = e ? Nc(a, e) : null)(b = void 0 === b || b) ? -1 == a.Tj.indexOf(c) && a.Tj.push(c) : ya(a.Tj, c), c.Sb(b)
    },
    AC: function(a, b) { a = document.getElementById(a);
        a.firstChild || (a = x.fg(a, { rtl: -1 != Ol.indexOf(Pl), readOnly: !0 }), "string" != typeof b && (b = b.join("")), x.F.ae(x.F.Xc(b), a)) },
    zy: function(a) { return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "") },
    ze: function(a) {
        if ("click" == a.type && "touchend" == Y.ze.sp && Y.ze.rp + 2E3 > Date.now() || Y.ze.sp == a.type && Y.ze.rp + 400 > Date.now()) return a.preventDefault(),
            a.stopPropagation(), !0;
        Y.ze.sp = a.type;
        Y.ze.rp = Date.now();
        return !1
    }
};
Y.ze.sp = null;
Y.ze.rp = 0;
Y.gx = function() { var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a) };
Y.hx = function() { var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a) };
window.BlocklyInterface = Y;
Y.setCode = Y.vt;
Y.getCode = Y.oo;
Y.getWorkspace = Y.Lj;
var X = {
    ih: !1,
    Dr: null,
    Cl: null,
    Rm: function(a, b, c, e, f, h) {
        function k() { X.ih && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden") }
        if (!a) throw TypeError("Content not found: " + a);
        X.ih && X.jd(!1);
        x.Qb(!0);
        X.ih = !0;
        X.Dr = b;
        X.Cl = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), X.Tn = x.Oc(e, "mousedown", null, X.iw));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (X.og(b, !1, .2), X.og(l, !0, .8), setTimeout(k, 175)) : k()
    },
    Er: 0,
    Fr: 0,
    iw: function(a) { X.Wn(); if (!x.i.jg(a)) { var b = document.getElementById("dialog");
            X.Er = b.offsetLeft - a.clientX;
            X.Fr = b.offsetTop - a.clientY;
            X.Vn = x.Oc(document, "mouseup", null, X.Wn);
            X.Un = x.Oc(document, "mousemove", null, X.jw);
            a.stopPropagation() } },
    jw: function(a) {
        var b = document.getElementById("dialog"),
            c = X.Er + a.clientX;
        a = X.Fr + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    Wn: function() { X.Vn && (x.Qa(X.Vn), X.Vn = null);
        X.Un && (x.Qa(X.Un), X.Un = null) },
    jd: function(a) {
        function b() { e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden" }
        if (X.ih) {
            X.Wn();
            X.Tn && (x.Qa(X.Tn), X.Tn = null);
            X.ih = !1;
            X.Cl && X.Cl();
            X.Cl = null;
            var c = !1 === a ?
                null : X.Dr;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            c && a ? (X.og(a, !1, .8), X.og(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    og: function(a, b, c) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top =
                h.y + "px";
            f.style.opacity = c
        }
        if (a) { var f = document.getElementById("dialogBorder"),
                h = X.yw(a);
            b ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible" }
    },
    yw: function(a) { var b = lh(a);
        b = { x: b.x, y: b.y };
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth); return b },
    It: function(a, b) {
        var c = document.getElementById("containerStorage");
        c.textContent = "";
        b = b.split("\n");
        for (var e = 0; e < b.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(b[e]));
            c.appendChild(f)
        }
        c = document.getElementById("dialogStorage");
        X.Rm(c, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, X.yy);
        X.qy()
    },
    gv: function() {
        if (!Yl(Sl))
            if (X.ih || Gk.sb()) setTimeout(X.gv, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", X.jd, !0);
                b.addEventListener("touchend", X.jd, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Y.dm, !0);
                b.addEventListener("touchend",
                    Y.dm, !0);
                X.Rm(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.Eq, !0) });
                document.body.addEventListener("keydown", X.Eq, !0)
            }
    },
    yt: function() {
        document.getElementById("galleryXml").value = Y.oo();
        var a = document.getElementById("galleryDialog");
        if (!X.yt.iy) {
            var b = document.getElementById("galleryCancel");
            b.addEventListener("click", X.jd, !0);
            b.addEventListener("touchend", X.jd, !0);
            b = document.getElementById("galleryOk");
            b.addEventListener("click", X.mo, !0);
            b.addEventListener("touchend", X.mo, !0);
            X.yt.iy = !0
        }
        b = document.getElementById("submitButton");
        X.Rm(a, b, !0, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.Rr, !0) });
        document.body.addEventListener("keydown", X.Rr, !0);
        setTimeout(function() { document.getElementById("galleryTitle").focus() }, 250)
    },
    sC: function() {
        var a = document.getElementById("dialogDone");
        if (Gk) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = Fk();
            c = Y.zy(c);
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
        c = 10 > Sl ? W("Games_nextLevel").replace("%1", String(Sl + 1)) : W("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", X.jd, !0);
        b.addEventListener("touchend", X.jd, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Y.Zo, !0);
        b.addEventListener("touchend", Y.Zo, !0);
        X.Rm(a, null, !1, !0, { width: "40%", left: "30%", top: "3em" }, function() { document.body.removeEventListener("keydown", X.Zq, !0) });
        document.body.addEventListener("keydown", X.Zq, !0);
        document.getElementById("dialogDoneText").textContent = c
    },
    Cr: function(a) {
        !X.ih || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (X.jd(!0), a.stopPropagation(),
            a.preventDefault())
    },
    qy: function() { document.body.addEventListener("keydown", X.Cr, !0) },
    yy: function() { document.body.removeEventListener("keydown", X.Cr, !0) },
    Zq: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.jd(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.Zo() },
    Eq: function(a) { if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.jd(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.dm() },
    Rr: function(a) { 27 == a.keyCode ? X.jd(!0) : 13 == a.keyCode && X.mo() },
    mo: function() {
        var a =
            document.getElementById("galleryTitle");
        if (a.value.trim()) { a = document.getElementById("galleryForm"); for (var b = [], c = 0, e; e = a.elements[c]; c++) e.name && (b[c] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)); var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function() { if (4 == f.readyState) { var a = 200 == f.status ? W("Games_submitted") : W("Games_httpRequestError") + "\nStatus: " + f.status;
                    X.It(null, a) } };
            f.send(b.join("&"));
            X.jd(!0) } else a.value =
            "", a.focus()
    }
};
window.BlocklyDialogs = X;
X.hideDialog = X.jd;

function bm(a, b, c, e) { var f = Z;
    this.name = a;
    this.Lv = b;
    this.Et = c;
    this.py = e || 0;
    this.Qf = f;
    this.ta = new D;
    this.reset();
    console.log(this + " loaded.") } d = bm.prototype;
d.xy = !1;
d.$d = !1;
d.kc = 0;
d.hf = 0;
d.facing = 0;
d.speed = 0;
d.xe = 0;
d.ta = null;
d.No = 0;
d.toString = function() { return "[" + this.name + "]" };
d.reset = function() { delete this.xy;
    delete this.$d;
    delete this.speed;
    delete this.xe;
    delete this.No;
    this.kc = this.py;
    this.ta.x = this.Et.x;
    this.ta.y = this.Et.y;
    this.facing = this.hf = tc(180 * Math.atan2(50 - this.ta.y, 50 - this.ta.x) / Math.PI); var a = this.Lv; if (v(a)) a = a();
    else if (!q(a)) throw "Avatar " + this.name + " has invalid code: " + a;
    this.lx = "Interpreter" in window ? new Interpreter(a, this.Qf.ix) : null };

function cm(a, b) { a.kc += b;
    100 <= a.kc && dm(a) }

function dm(a) { a.speed = 0;
    a.$d = !0;
    a.kc = 100;
    a.Qf.dl.unshift(a);
    a.Qf.Td.push({ type: "DIE", avatar: a });
    console.log(a + " sinks.") } d.stop = function() { this.xe = 0 };
var Z = { Lc: [], dl: [], Td: [], Ph: [], uu: 50, Yu: 100, Su: .5, Zd: null, $t: 1, tq: 3, iq: 5, fu: 5, dn: 3, ct: 0, Hl: 0, Mt: 0, $u: 3E5, bo: null };
Z.Xu = [new D(10, 90), new D(90, 10), new D(10, 10), new D(90, 90), new D(50, 99), new D(50, 1), new D(1, 50), new D(99, 50), new D(50, 49)];
Z.reset = function() { clearTimeout(Z.ct);
    Z.Td.length = 0;
    Z.Ph.length = 0;
    Z.dl.length = 0; for (var a = Z.Mt = 0, b; b = Z.Lc[a]; a++) b.reset() };
Z.iv = function(a, b, c, e) { c || (c = Z.Xu[Z.Lc.length]);
    a = new bm(a, b, c, e);
    Z.Lc.push(a) };
Z.start = function(a) { Z.bo = a;
    Z.Hl = Date.now() + Z.$u;
    console.log("Starting battle with " + Z.Lc.length + " avatars.");
    Z.update() };
Z.update = function() { Z.Iy();
    Z.Jy();
    Z.Hy();
    Z.Lc.length <= Z.dl.length + 1 && (Z.Hl = Math.min(Z.Hl, Date.now() + 1E3));
    Date.now() > Z.Hl ? Z.stop() : Z.ct = setTimeout(Z.update, 1E3 / Z.uu) };
Z.stop = function() { for (var a = [], b = 0, c; c = Z.Lc[b]; b++) c.$d || a.push(c);
    b = a.length; for (a.sort(function(a, b) { return a.kc - b.kc }); a.length;) Z.dl.unshift(a.pop());
    Z.bo && Z.bo(b) };
Z.Jy = function() { for (var a = Z.Ph.length - 1; 0 <= a; a--) { var b = Z.Ph[a];
        b.qk += Z.tq; var c = 0; if (b.Dm - b.qk < Z.tq / 2) { Z.Ph.splice(a, 1); for (var e = 0, f; f = Z.Lc[e]; e++)
                if (!f.$d) { var h = 10 * (1 - wc(f.ta, b.yj) / 4);
                    0 < h && (cm(f, h), c = Math.max(c, h)) } Z.Td.push({ type: "BOOM", damage: c, x: b.yj.x, y: b.yj.y }) } } };
Z.Hy = function() {
    for (var a = 0, b; b = Z.Lc[a]; a++)
        if (!b.$d && (b.speed < b.xe ? b.speed = Math.min(b.speed + Z.iq, b.xe) : b.speed > b.xe && (b.speed = Math.max(b.speed - Z.iq, b.xe)), 0 < b.speed)) {
            var c = Z.Vq(b),
                e = c[1],
                f = uc(b.hf),
                h = b.speed / 100 * Z.$t,
                k = Math.cos(f) * h;
            h *= Math.sin(f);
            b.ta.x += k;
            b.ta.y += h;
            0 > b.ta.x || 100 < b.ta.x || 0 > b.ta.y || 100 < b.ta.y ? (b.ta.x = sc(b.ta.x, 0, 100), b.ta.y = sc(b.ta.y, 0, 100), e = b.speed / 100 * Z.dn, cm(b, e), b.speed = 0, b.xe = 0, Z.Td.push({ type: "CRASH", avatar: b, damage: e })) : (c = Z.Vq(b), f = c[0], c = c[1], c < Z.fu && e > c && (b.ta.x -= k, b.ta.y -=
                h, e = Math.max(b.speed, f.speed) / 100 * Z.dn, cm(b, e), b.speed = 0, b.xe = 0, cm(f, e), f.speed = 0, f.xe = 0, Z.Td.push({ type: "CRASH", avatar: b, damage: e }), Z.Td.push({ type: "CRASH", avatar: f, damage: e })))
        }
};
Z.Iy = function() { for (var a = 0; a < Z.Yu; a++) { Z.Mt++; for (var b = 0, c; c = Z.Lc[b]; b++)
            if (!c.$d) { Z.Zd = c; try { c.lx.step() } catch (e) { console.log(c + " throws an error: " + e), dm(c) } Z.Zd = null } } };
Z.ix = function(a, b) {
    var c = function(a, b) { var c = a;
        a = Z.Zd; var e = void 0 === b || null === b ? 5 : b; if (!r(c) || isNaN(c) || !r(e) || isNaN(e)) throw TypeError;
        c = tc(c);
        e = sc(e, 0, 20);
        a.Qf.Td.push({ type: "SCAN", avatar: a, degree: c, resolution: e });
        b = tc(c - e / 2);
        c = tc(c + e / 2);
        b > c && (c += 360);
        e = a.ta.x; for (var f = a.ta.y, m = Infinity, n = 0, p; p = a.Qf.Lc[n]; n++)
            if (p != a && !p.$d) { var t = p.ta.x,
                    y = p.ta.y;
                p = Math.sqrt((y - f) * (y - f) + (t - e) * (t - e));
                p >= m || (t = Math.atan2(y - f, t - e), t = tc(180 * t / Math.PI), t < b && (t += 360), b <= t && t <= c && (m = p)) } return m };
    a.setProperty(b, "scan",
        a.createNativeFunction(c));
    c = function(a, b) { var c = b;
        b = Z.Zd; if (!r(a) || isNaN(a) || !r(c) || isNaN(c)) throw TypeError; var e = Date.now();
        b.No + 1E3 * b.Qf.Su > e ? a = !1 : (b.No = e, e = b.ta.clone(), a = tc(a), b.facing = a, c = sc(c, 0, 70), a = { uv: b, Ek: e, hf: a, Dm: c, yj: new D(e.x + c * Math.cos(uc(a)), e.y + c * Math.sin(uc(a))), qk: 0 }, b.Qf.Ph.push(a), b.Qf.Td.push({ type: "BANG", avatar: b, degree: a.hf }), a = !0); return a };
    a.setProperty(b, "cannon", a.createNativeFunction(c));
    c = function(a, b) {
        var c = Z.Zd;
        b = void 0 === b || null === b ? 50 : b;
        if (!r(a) || isNaN(a) || !r(b) ||
            isNaN(b)) throw TypeError;
        c.hf != tc(a) && (50 >= c.speed ? (c.hf = tc(a), c.facing = c.hf) : b = 0);
        0 == c.speed && 0 < b && (c.speed = .1);
        c.xe = sc(b, 0, 100)
    };
    a.setProperty(b, "drive", a.createNativeFunction(c));
    a.setProperty(b, "swim", a.createNativeFunction(c));
    a.setProperty(b, "stop", a.createNativeFunction(function() { Z.Zd.stop() }));
    a.setProperty(b, "damage", a.createNativeFunction(function() { return Z.Zd.kc }));
    a.setProperty(b, "health", a.createNativeFunction(function() { return 100 - Z.Zd.kc }));
    a.setProperty(b, "speed", a.createNativeFunction(function() { return Z.Zd.speed }));
    c = function() { return Z.Zd.ta.x };
    a.setProperty(b, "loc_x", a.createNativeFunction(c));
    a.setProperty(b, "getX", a.createNativeFunction(c));
    c = function() { return Z.Zd.ta.y };
    a.setProperty(b, "loc_y", a.createNativeFunction(c));
    a.setProperty(b, "getY", a.createNativeFunction(c));
    if (b = a.getProperty(b, "Math")) c = function(a) { return Math.sin(a / 180 * Math.PI) }, a.setProperty(b, "sin_deg", a.createNativeFunction(c)), c = function(a) { return Math.cos(a / 180 * Math.PI) }, a.setProperty(b, "cos_deg", a.createNativeFunction(c)), c = function(a) {
        return Math.tan(a /
            180 * Math.PI)
    }, a.setProperty(b, "tan_deg", a.createNativeFunction(c)), c = function(a) { return Math.asin(a) / Math.PI * 180 }, a.setProperty(b, "asin_deg", a.createNativeFunction(c)), c = function(a) { return Math.acos(a) / Math.PI * 180 }, a.setProperty(b, "acos_deg", a.createNativeFunction(c)), c = function(a) { return Math.atan(a) / Math.PI * 180 }, a.setProperty(b, "atan_deg", a.createNativeFunction(c))
};
Z.Vq = function(a) { for (var b = null, c = Infinity, e = 0, f; f = Z.Lc[e]; e++)
        if (!f.$d && a != f) { var h = Math.min(c, wc(a.ta, f.ta));
            h < c && (c = h, b = f) } return [b, c] };
var em, fm, gm, hm = {},
    im = [],
    jm = new Image;
jm.src = "pond/sprites.png";
var km = ["#ff8b00", "#c90015", "#166c0b", "#11162a"],
    lm = 0,
    mm = Object.create(null);

function nm() { em = document.getElementById("scratch").getContext("2d"); var a = document.getElementById("display").getContext("2d");
    fm = a;
    gm = a.canvas.width;
    a.globalCompositeOperation = "copy";
    om(["pond/whack.mp3", "pond/whack.ogg"], "whack");
    om(["pond/boom.mp3", "pond/boom.ogg"], "boom");
    om(["pond/splash.mp3", "pond/splash.ogg"], "splash"); if (!rb && !qb)
        for (var b in mm) a = mm[b], a.volume = .01, a.play(), a.pause() }

function pm() {
    clearTimeout(lm);
    im.length = 0;
    var a = document.getElementById("avatarStatRow");
    a.innerHTML = "";
    for (var b = [], c = [], e = 0, f; f = Z.Lc[e]; e++) {
        var h = km[e % km.length];
        f.Tt = e;
        var k = document.createElement("td");
        k.style.borderColor = h;
        var l = document.createElement("div");
        l.className = "avatarStatHealth";
        l.style.background = h;
        f.Ny = l;
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
    qm()
}
var rm = 0,
    sm = 0;

function tm() { qm(); var a = Date.now(),
        b = Math.max(1, 1E3 / 36 - (a - rm - sm));
    lm = setTimeout(tm, b);
    rm = a;
    sm = b }

function um(a) { return a / 100 * (gm - 35) + 17.5 }

function qm() {
    var a = em;
    a.beginPath();
    a.rect(0, 0, a.canvas.width, a.canvas.height);
    a.fillStyle = "#527dbf";
    a.fill();
    for (var b = [], c = 0, e; e = Z.Lc[c]; c++) e.$d && b.push(e);
    for (c = 0; e = Z.Lc[c]; c++) e.$d || b.push(e);
    for (c = 0; e = b[c]; c++) {
        a.save();
        var f = um(e.ta.x),
            h = um(100 - e.ta.y);
        a.translate(f, h);
        var k = e.Tt % km.length * 35;
        e.$d && (a.globalAlpha = .25);
        0 < e.speed && (a.save(), f = 50 < e.speed ? 0 : 25 < e.speed ? 35 : 70, a.rotate(-e.hf / 180 * Math.PI), a.drawImage(jm, 455, f, 35, 35, -45.5, -17.5, 35, 35), a.restore());
        a.drawImage(jm, 0, k, 35, 35, -17.5, -17.5,
            35, 35);
        f = e.facing / 180 * Math.PI;
        a.translate(12 * Math.cos(f), 12 * -Math.sin(f) - 2);
        f = (14 - Math.round(e.facing / 360 * 12)) % 12 + 1;
        e = e.facing % 30;
        15 <= e && (e -= 30);
        e /= 1.5;
        a.rotate(-e / 180 * Math.PI);
        a.drawImage(jm, 35 * f, k, 35, 35, -15.5, -15.5, 35, 35);
        a.restore()
    }
    for (c = 0; e = Z.Ph[c]; c++) {
        a.save();
        h = e.qk / e.Dm;
        k = (e.yj.y - e.Ek.y) * -h;
        f = e.Dm / 2;
        var l = .15 * e.Dm;
        f = l - Math.pow((e.qk - f) / Math.sqrt(l) * l / f, 2);
        h = um(e.Ek.x + (e.yj.x - e.Ek.x) * h);
        l = um(100 - e.Ek.y + k - f);
        k = um(100 - e.Ek.y + k);
        a.beginPath();
        a.arc(h, k, 5 * Math.max(0, 1 - f / 10), 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = "rgba(128, 128, 128, " + Math.max(0, 1 - f / 10) + ")";
        a.fill();
        a.beginPath();
        a.arc(h, l, 5, 0, 2 * Math.PI, !0);
        a.closePath();
        a.fillStyle = km[e.uv.Tt % km.length];
        a.fill()
    }
    for (c = 0; c < Z.Td.length; c++)
        if (f = Z.Td[c], e = f.avatar, "CRASH" == f.type) { if (k = hm[e.id], !k || k + 1E3 < pa()) vm("whack", f.damage / Z.dn), hm[e.id] = pa() } else "SCAN" == f.type ? (h = Math.max(f.resolution / 2, .5), k = -uc(f.degree + h), l = -uc(f.degree - h), a.beginPath(), f = um(e.ta.x), h = um(100 - e.ta.y), a.moveTo(f, h), a.lineTo(f + 200 * Math.cos(k), h + 200 * Math.sin(k)), a.arc(f, h,
            200, k, l), a.lineTo(f, h), e = a.createRadialGradient(f, h, 17.5, f, h, 200), e.addColorStop(0, "rgba(255, 255, 255, 0.3)"), e.addColorStop(1, "rgba(255, 255, 255, 0)"), a.fillStyle = e, a.fill()) : "BANG" != f.type && ("BOOM" == f.type ? (f.damage && vm("boom", f.damage / 10), im.push({ x: f.x, y: f.y, t: 0 })) : "DIE" == f.type && vm("splash"));
    Z.Td.length = 0;
    for (c = im.length - 1; 0 <= c; c--) e = im[c], f = um(e.x), h = um(100 - e.y), a.beginPath(), a.arc(f, h, e.t + 1, 0, 2 * Math.PI, !0), a.closePath(), a.lineWidth = 5, a.strokeStyle = "rgba(255, 255, 255, " + (1 - e.t / 10) + ")", a.stroke(),
        e.t += 2, 10 < e.t && im.splice(c, 1);
    fm.drawImage(a.canvas, 0, 0);
    for (c = 0; e = b[c]; c++) a = e.Ny, a.parentNode.title = e.name + ": " + Math.round(100 - e.kc) + "%", a.style.width = Math.max(0, a.parentNode.offsetWidth * (1 - e.kc / 100) - 2) + "px"
}

function om(a, b) { if (window.Audio && a.length) { for (var c, e = new window.Audio, f = 0; f < a.length; f++) { var h = a[f],
                k = h.match(/\.(\w+)$/); if (k && e.canPlayType("audio/" + k[1])) { c = new window.Audio(h); break } } c && c.play && (mm[b] = c) } }

function vm(a, b) { a = mm[a];
    a = yb && 9 === yb || rb || pb ? a : a.cloneNode();
    a.volume = void 0 === b ? 1 : b;
    a.play() };
var wm = !1;

function xm() { if (!wm) { var a = document.getElementById("docsButton"),
            b = document.getElementById("dialogDocs"),
            c = document.getElementById("frameDocs"),
            e = "pond/docs.html?lang=" + Pl + "&mode=" + Sl;
        c.src != e && (c.src = e);
        wm = !0;
        X.og(a, !1, .2);
        X.og(b, !0, .8);
        setTimeout(function() { b.style.visibility = "visible";
            document.getElementById("dialogBorder").style.visibility = "hidden" }, 175) } }

function ym() { if (wm) { var a = document.getElementById("docsButton"),
            b = document.getElementById("dialogDocs");
        wm = !1;
        X.og(b, !1, .8);
        X.og(a, !0, .2);
        setTimeout(function() { document.getElementById("dialogBorder").style.visibility = "hidden" }, 175);
        b.style.visibility = "hidden" } }

function zm(a) { if (!Y.ze(a)) { a = document.getElementById("runButton"); var b = document.getElementById("resetButton");
        b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        b.style.display = "inline";
        Am() } }

function Bm(a) { Y.ze(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", Z.reset(), pm()) }

function Am() { "Interpreter" in window ? (Z.reset(), pm(), Z.start(null), tm()) : setTimeout(Am, 250) };
x.D.zx = {};
x.ca = {};
x.ca.Math = {};
x.ca.Math.Yk = 230;
x.ci([{ type: "math_number", message0: "%1", args0: [{ type: "field_number", name: "NUM", value: 0 }], output: "Number", colour: "%{BKY_MATH_HUE}", helpUrl: "%{BKY_MATH_NUMBER_HELPURL}", tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}", extensions: ["parent_tooltip_when_inline"] }, {
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
x.ca.Math.tn = {
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
x.N.register("math_op_tooltip", x.N.jl("OP", x.ca.Math.tn));
x.ca.Math.Au = { Ka: function() { var a = document.createElement("mutation"),
            b = "DIVISIBLE_BY" == F(this, "PROPERTY");
        a.setAttribute("divisor_input", b); return a }, hb: function(a) { a = "true" == a.getAttribute("divisor_input");
        this.Ub(a) }, Ub: function(a) { var b = K(this, "DIVISOR");
        a ? b || Q(this, "DIVISOR").Ua("Number") : b && this.Ga("DIVISOR") } };
x.ca.Math.Bu = function() { zh(He(this, "PROPERTY"), function(a) { this.v.Ub("DIVISIBLE_BY" == a) }) };
x.N.wp("math_is_divisibleby_mutator", x.ca.Math.Au, x.ca.Math.Bu);
x.N.register("math_change_tooltip", x.N.En("%{BKY_MATH_CHANGE_TOOLTIP}"));
x.ca.Math.Eu = { Pk: function(a) { "MODE" == a ? this.M.Ua("Array") : this.M.Ua("Number") }, Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("op", F(this, "OP")); return a }, hb: function(a) { this.Pk(a.getAttribute("op")) } };
x.ca.Math.Du = function() { zh(He(this, "OP"), function(a) { this.Pk(a) }.bind(this)) };
x.N.wp("math_modes_of_list_mutator", x.ca.Math.Eu, x.ca.Math.Du);
// Copyright 2012 Google Inc.  Apache License 2.0
x.h = new Ih;
Lk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
x.h.Ng = 0;
x.h.cB = 1.1;
x.h.mb = 1.2;
x.h.Da = 2;
x.h.aB = 3;
x.h.XA = 3;
x.h.TA = 4.1;
x.h.eB = 4.2;
x.h.dj = 4.3;
x.h.bj = 4.4;
x.h.dB = 4.5;
x.h.fB = 4.6;
x.h.YA = 4.7;
x.h.RA = 4.8;
x.h.ZA = 5;
x.h.mn = 5.1;
x.h.bl = 5.2;
x.h.cj = 5.3;
x.h.Uh = 6.1;
x.h.Kf = 6.2;
x.h.VA = 7;
x.h.Qu = 8;
x.h.$A = 8;
x.h.bB = 8;
x.h.wq = 9;
x.h.SA = 10;
x.h.WA = 11;
x.h.UA = 12;
x.h.kn = 13;
x.h.ln = 14;
x.h.al = 15;
x.h.Ze = 16;
x.h.gB = 17;
x.h.ec = 18;
x.h.Wb = 99;
x.h.cl = [
    [x.h.Da, x.h.mb],
    [x.h.Da, x.h.Da],
    [x.h.mb, x.h.mb],
    [x.h.mb, x.h.Da],
    [x.h.bj, x.h.bj],
    [x.h.mn, x.h.mn],
    [x.h.Kf, x.h.Kf],
    [x.h.kn, x.h.kn],
    [x.h.ln, x.h.ln]
];
x.h.I = function(a) { x.h.Ug = Object.create(null);
    x.h.lo = Object.create(null);
    x.h.Ra ? x.h.Ra.reset() : x.h.Ra = new Ok;
    x.h.Ra.ua = a.ua; for (var b = [], c = x.H.kv(a), e = 0; e < c.length; e++) b.push(x.h.Ra.getName(c[e], "DEVELOPER_VARIABLE"));
    a = x.H.Gq(a); for (e = 0; e < a.length; e++) b.push(x.h.Ra.getName(a[e].ba(), x.H.Sa));
    b.length && (x.h.Ug.variables = "var " + b.join(", ") + ";") };
x.h.finish = function(a) { var b = [],
        c; for (c in x.h.Ug) b.push(x.h.Ug[c]);
    delete x.h.Ug;
    delete x.h.lo;
    x.h.Ra.reset(); return b.join("\n\n") + "\n\n\n" + a };
x.h.tt = function(a) { return a + ";\n" };
x.h.EC = function(a) { a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'"); return "'" + a + "'" };
x.h.Lm = function(a, b) { var c = ""; if (!a.M || !a.M.Ia) { var e = a.Ol();
        (e = x.i.Yt(e, x.h.gu - 3)) && (c = a.mf ? c + ("/**\n" + Ik(e + "\n", " * ") + " */\n") : c + Ik(e + "\n", "// ")); for (var f = 0; f < a.X.length; f++)
            if (a.X[f].type == x.$a) { var h = J(a.X[f].connection); if (h) { e = [];
                    h = Ac(h, !0); for (var k = 0; k < h.length; k++) { var l = h[k].Ol();
                        l && e.push(l) } e.length && e.push("");
                    (e = e.join("\n")) && (c += Ik(e, "// ")) } } } a = a.L && J(a.L);
    a = Hk(x.h, a); return c + b + a };
x.h.Ce = function(a, b, c, e, f) { c = c || 0;
    f = f || x.h.Wb;
    a.o.options.Le && c--; var h = a.o.options.Le ? "1" : "0";
    a = 0 < c ? V(a, b, x.h.Kf) || h : 0 > c ? V(a, b, x.h.Uh) || h : e ? V(a, b, x.h.dj) || h : V(a, b, f) || h; if (x.ig(a)) a = parseFloat(a) + c, e && (a = -a);
    else { if (0 < c) { a = a + " + " + c; var k = x.h.Kf } else 0 > c && (a = a + " - " + -c, k = x.h.Uh);
        e && (a = c ? "-(" + a + ")" : "-" + a, k = x.h.dj);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")") } return a };
x.h.zx = {};
x.h.math_number = function(a) { a = parseFloat(F(a, "NUM")); return [a, 0 <= a ? x.h.Ng : x.h.dj] };
x.h.math_arithmetic = function(a) { var b = { ADD: [" + ", x.h.Kf], MINUS: [" - ", x.h.Uh], MULTIPLY: [" * ", x.h.mn], DIVIDE: [" / ", x.h.bl], POWER: [null, x.h.ec] } [F(a, "OP")],
        c = b[0];
    b = b[1]; var e = V(a, "A", b) || "0";
    a = V(a, "B", b) || "0"; return c ? [e + c + a, b] : ["Math.pow(" + e + ", " + a + ")", x.h.Da] };
x.h.math_single = function(a) {
    var b = F(a, "OP");
    if ("NEG" == b) return a = V(a, "NUM", x.h.dj) || "0", "-" == a[0] && (a = " " + a), ["-" + a, x.h.dj];
    a = "SIN" == b || "COS" == b || "TAN" == b ? V(a, "NUM", x.h.bl) || "0" : V(a, "NUM", x.h.Wb) || "0";
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
    return [c, x.h.bl]
};
x.h.math_constant = function(a) { return { PI: ["Math.PI", x.h.mb], E: ["Math.E", x.h.mb], GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", x.h.bl], SQRT2: ["Math.SQRT2", x.h.mb], SQRT1_2: ["Math.SQRT1_2", x.h.mb], INFINITY: ["Infinity", x.h.Ng] } [F(a, "CONSTANT")] };
x.h.math_number_property = function(a) {
    var b = V(a, "NUMBER_TO_CHECK", x.h.cj) || "0",
        c = F(a, "PROPERTY");
    if ("PRIME" == c) {
        var e = Mk("mathIsPrime", ["function " + x.h.xd + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
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
            a = V(a, "DIVISOR", x.h.cj) || "0", e = b + " % " + a + " == 0" }
    return [e, x.h.wq]
};
x.h.math_change = function(a) { var b = V(a, "DELTA", x.h.Kf) || "0";
    a = x.h.Ra.getName(F(a, "VAR"), x.H.Sa); return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n" };
x.h.math_round = x.h.math_single;
x.h.math_trig = x.h.math_single;
x.h.math_on_list = function(a) {
    var b = F(a, "OP");
    switch (b) {
        case "SUM":
            a = V(a, "LIST", x.h.mb) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = V(a, "LIST", x.h.ec) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = V(a, "LIST", x.h.ec) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            b = Mk("mathMean", ["function " + x.h.xd + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = V(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MEDIAN":
            b =
                Mk("mathMedian", ["function " + x.h.xd + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = V(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MODE":
            b = Mk("mathModes",
                ["function " + x.h.xd + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);",
                    "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
                ]);
            a = V(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "STD_DEV":
            b = Mk("mathStandardDeviation", ["function " + x.h.xd + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"
            ]);
            a = V(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        case "RANDOM":
            b = Mk("mathRandomList", ["function " + x.h.xd + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = V(a, "LIST", x.h.Wb) || "[]";
            a = b + "(" + a + ")";
            break;
        default:
            throw "Unknown operator: " + b;
    }
    return [a, x.h.Da]
};
x.h.math_modulo = function(a) { var b = V(a, "DIVIDEND", x.h.cj) || "0";
    a = V(a, "DIVISOR", x.h.cj) || "0"; return [b + " % " + a, x.h.cj] };
x.h.math_constrain = function(a) { var b = V(a, "VALUE", x.h.ec) || "0",
        c = V(a, "LOW", x.h.ec) || "0";
    a = V(a, "HIGH", x.h.ec) || "Infinity"; return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", x.h.Da] };
x.h.math_random_int = function(a) { var b = V(a, "FROM", x.h.ec) || "0";
    a = V(a, "TO", x.h.ec) || "0"; return [Mk("mathRandomInt", ["function " + x.h.xd + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", x.h.Da] };
x.h.math_random_float = function() { return ["Math.random()", x.h.Da] };
x.D.To = {};
x.ca.Ku = {};
x.ca.Ku.Yk = 260;
x.ci([{ type: "lists_create_empty", message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}", output: "Array", colour: "%{BKY_LISTS_HUE}", tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}", helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}" }, { type: "lists_repeat", message0: "%{BKY_LISTS_REPEAT_TITLE}", args0: [{ type: "input_value", name: "ITEM" }, { type: "input_value", name: "NUM", check: "Number" }], output: "Array", colour: "%{BKY_LISTS_HUE}", tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}", helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}" }, {
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
    I: function() { this.Ta = x.g.LISTS_CREATE_WITH_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        this.Fc = 3;
        this.Ub();
        this.Ic(!0, "Array");
        this.Cg(new ch(["lists_create_with_item"]));
        this.ka(x.g.LISTS_CREATE_WITH_TOOLTIP) },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("items", this.Fc); return a },
    hb: function(a) { this.Fc = parseInt(a.getAttribute("items"), 10);
        this.Ub() },
    gf: function(a) {
        var b = a.rf("lists_create_with_container");
        b.Ec();
        for (var c = K(b, "STACK").connection, e = 0; e < this.Fc; e++) {
            var f =
                a.rf("lists_create_with_item");
            f.Ec();
            c.connect(f.$);
            c = f.L
        }
        return b
    },
    ef: function(a) { var b = Ph(a, "STACK"); for (a = []; b;) a.push(b.fq), b = b.L && J(b.L); for (b = 0; b < this.Fc; b++) { var c = K(this, "ADD" + b).connection.Ia;
            c && -1 == a.indexOf(c) && c.disconnect() } this.Fc = a.length;
        this.Ub(); for (b = 0; b < this.Fc; b++) dh(a[b], this, "ADD" + b) },
    Km: function(a) { a = Ph(a, "STACK"); for (var b = 0; a;) { var c = K(this, "ADD" + b);
            a.fq = c && c.connection.Ia;
            b++;
            a = a.L && J(a.L) } },
    Ub: function() {
        this.Fc && K(this, "EMPTY") ? this.Ga("EMPTY") : this.Fc || K(this, "EMPTY") ||
            O(R(this, "EMPTY"), x.g.LISTS_CREATE_EMPTY_TITLE);
        for (var a = 0; a < this.Fc; a++)
            if (!K(this, "ADD" + a)) { var b = Q(this, "ADD" + a);
                0 == a && O(b, x.g.LISTS_CREATE_WITH_INPUT_WITH) } for (; K(this, "ADD" + a);) this.Ga("ADD" + a), a++
    }
};
x.D.lists_create_with_container = { I: function() { this.Ha(x.g.LISTS_HUE);
        O(R(this), x.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        Mh(this, "STACK");
        this.ka(x.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = !1 } };
x.D.lists_create_with_item = { I: function() { this.Ha(x.g.LISTS_HUE);
        O(R(this), x.g.LISTS_CREATE_WITH_ITEM_TITLE);
        this.nd(!0);
        this.md(!0);
        this.ka(x.g.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1 } };
x.D.lists_indexOf = { I: function() { var a = [
            [x.g.LISTS_INDEX_OF_FIRST, "FIRST"],
            [x.g.LISTS_INDEX_OF_LAST, "LAST"]
        ];
        this.Ta = x.g.LISTS_INDEX_OF_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        this.Ic(!0, "Number");
        O(Q(this, "VALUE").Ua("Array"), x.g.LISTS_INDEX_OF_INPUT_IN_LIST);
        O(Q(this, "FIND"), new P(a), "END");
        this.bc(!0); var b = this;
        this.ka(function() { return x.g.LISTS_INDEX_OF_TOOLTIP.replace("%1", b.o.options.Le ? "0" : "-1") }) } };
x.D.lists_getIndex = {
    I: function() {
        var a = [
            [x.g.LISTS_GET_INDEX_GET, "GET"],
            [x.g.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
            [x.g.LISTS_GET_INDEX_REMOVE, "REMOVE"]
        ];
        this.vn = [
            [x.g.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [x.g.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [x.g.LISTS_GET_INDEX_FIRST, "FIRST"],
            [x.g.LISTS_GET_INDEX_LAST, "LAST"],
            [x.g.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.Ta = x.g.LISTS_GET_INDEX_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        a = new P(a, function(a) { this.v.Qt("REMOVE" == a) });
        O(Q(this, "VALUE").Ua("Array"), x.g.LISTS_GET_INDEX_INPUT_IN_LIST);
        O(O(R(this), a, "MODE"), "", "SPACE");
        R(this, "AT");
        x.g.LISTS_GET_INDEX_TAIL && O(R(this, "TAIL"), x.g.LISTS_GET_INDEX_TAIL);
        this.bc(!0);
        this.Ic(!0);
        this.td(!0);
        var b = this;
        this.ka(function() {
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
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + ("FROM_START" == e ? x.g.LISTS_INDEX_FROM_START_TOOLTIP : x.g.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1", b.o.options.Le ? "#1" : "#0");
            return f
        })
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("statement", !this.M);
        a.setAttribute("at", K(this, "AT").type == x.$a); return a },
    hb: function(a) {
        var b = "true" == a.getAttribute("statement");
        this.Qt(b);
        a = "false" != a.getAttribute("at");
        this.td(a)
    },
    Qt: function(a) { a != !this.M && (Ke(this, !0), a ? (this.Ic(!1), this.nd(!0), this.md(!0)) : (this.nd(!1), this.md(!1), this.Ic(!0))) },
    td: function(a) {
        this.Ga("AT");
        this.Ga("ORDINAL", !0);
        a ? (Q(this, "AT").Ua("Number"), x.g.ORDINAL_NUMBER_SUFFIX && O(R(this, "ORDINAL"), x.g.ORDINAL_NUMBER_SUFFIX)) : R(this, "AT");
        var b = new P(this.vn, function(b) { var c = "FROM_START" == b || "FROM_END" == b; if (c != a) { var f = this.v;
                f.td(c);
                Kh(f, b, "WHERE"); return null } });
        O(K(this, "AT"), b, "WHERE");
        x.g.LISTS_GET_INDEX_TAIL &&
            Oh(this, "TAIL", null)
    }
};
x.D.lists_setIndex = {
    I: function() {
        var a = [
            [x.g.LISTS_SET_INDEX_SET, "SET"],
            [x.g.LISTS_SET_INDEX_INSERT, "INSERT"]
        ];
        this.vn = [
            [x.g.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [x.g.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [x.g.LISTS_GET_INDEX_FIRST, "FIRST"],
            [x.g.LISTS_GET_INDEX_LAST, "LAST"],
            [x.g.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.Ta = x.g.LISTS_SET_INDEX_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        O(Q(this, "LIST").Ua("Array"), x.g.LISTS_SET_INDEX_INPUT_IN_LIST);
        O(O(R(this), new P(a), "MODE"), "", "SPACE");
        R(this, "AT");
        O(Q(this,
            "TO"), x.g.LISTS_SET_INDEX_INPUT_TO);
        this.bc(!0);
        this.nd(!0);
        this.md(!0);
        this.ka(x.g.LISTS_SET_INDEX_TOOLTIP);
        this.td(!0);
        var b = this;
        this.ka(function() {
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
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + x.g.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", b.o.options.Le ? "#1" : "#0");
            return f
        })
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("at", K(this, "AT").type == x.$a); return a },
    hb: function(a) {
        a =
            "false" != a.getAttribute("at");
        this.td(a)
    },
    td: function(a) { this.Ga("AT");
        this.Ga("ORDINAL", !0);
        a ? (Q(this, "AT").Ua("Number"), x.g.ORDINAL_NUMBER_SUFFIX && O(R(this, "ORDINAL"), x.g.ORDINAL_NUMBER_SUFFIX)) : R(this, "AT"); var b = new P(this.vn, function(b) { var c = "FROM_START" == b || "FROM_END" == b; if (c != a) { var f = this.v;
                f.td(c);
                Kh(f, b, "WHERE"); return null } });
        Oh(this, "AT", "TO");
        K(this, "ORDINAL") && Oh(this, "ORDINAL", "TO");
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
        this.Ta = x.g.LISTS_GET_SUBLIST_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        O(Q(this, "LIST").Ua("Array"), x.g.LISTS_GET_SUBLIST_INPUT_IN_LIST);
        R(this,
            "AT1");
        R(this, "AT2");
        x.g.LISTS_GET_SUBLIST_TAIL && O(R(this, "TAIL"), x.g.LISTS_GET_SUBLIST_TAIL);
        this.bc(!0);
        this.Ic(!0, "Array");
        this.td(1, !0);
        this.td(2, !0);
        this.ka(x.g.LISTS_GET_SUBLIST_TOOLTIP)
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("at1", K(this, "AT1").type == x.$a);
        a.setAttribute("at2", K(this, "AT2").type == x.$a); return a },
    hb: function(a) { var b = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.td(1, b);
        this.td(2, a) },
    td: function(a, b) {
        this.Ga("AT" + a);
        this.Ga("ORDINAL" +
            a, !0);
        b ? (Q(this, "AT" + a).Ua("Number"), x.g.ORDINAL_NUMBER_SUFFIX && O(R(this, "ORDINAL" + a), x.g.ORDINAL_NUMBER_SUFFIX)) : R(this, "AT" + a);
        var c = new P(this["WHERE_OPTIONS_" + a], function(c) { var e = "FROM_START" == c || "FROM_END" == c; if (e != b) { var h = this.v;
                h.td(a, e);
                Kh(h, c, "WHERE" + a); return null } });
        O(K(this, "AT" + a), c, "WHERE" + a);
        1 == a && (Oh(this, "AT1", "AT2"), K(this, "ORDINAL1") && Oh(this, "ORDINAL1", "AT2"));
        x.g.LISTS_GET_SUBLIST_TAIL && Oh(this, "TAIL", null)
    }
};
x.D.lists_sort = { I: function() { Nh(this, { message0: x.g.LISTS_SORT_TITLE, args0: [{ type: "field_dropdown", name: "TYPE", options: [
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
            b = new P([
                [x.g.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
                [x.g.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]
            ], function(b) { a.Pk(b) });
        this.Ta = x.g.LISTS_SPLIT_HELPURL;
        this.Ha(x.g.LISTS_HUE);
        O(Q(this, "INPUT").Ua("String"), b, "MODE");
        O(Q(this, "DELIM").Ua("String"), x.g.LISTS_SPLIT_WITH_DELIMITER);
        this.bc(!0);
        this.Ic(!0, "Array");
        this.ka(function() {
            var b = F(a, "MODE");
            if ("SPLIT" == b) return x.g.LISTS_SPLIT_TOOLTIP_SPLIT;
            if ("JOIN" == b) return x.g.LISTS_SPLIT_TOOLTIP_JOIN;
            throw "Unknown mode: " +
                b;
        })
    },
    Pk: function(a) { "SPLIT" == a ? (this.M.Ua("Array"), K(this, "INPUT").Ua("String")) : (this.M.Ua("String"), K(this, "INPUT").Ua("Array")) },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("mode", F(this, "MODE")); return a },
    hb: function(a) { this.Pk(a.getAttribute("mode")) }
};
x.D.wx = {};
x.ca.ad = {};
x.ca.ad.Yk = 210;
x.ci([{ type: "logic_boolean", message0: "%1", args0: [{ type: "field_dropdown", name: "BOOL", options: [
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
x.ci([{ type: "controls_if_if", message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}", nextStatement: null, enableContextMenu: !1, colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}" }, { type: "controls_if_elseif", message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}", previousStatement: null, nextStatement: null, enableContextMenu: !1, colour: "%{BKY_LOGIC_HUE}", tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}" }, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
}]);
x.ca.ad.tn = { EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}", NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}", LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}", LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}", GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}", GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}", AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}", OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}" };
x.N.register("logic_op_tooltip", x.N.jl("OP", x.ca.ad.tn));
x.ca.ad.ju = {
    Gb: 0,
    Xb: 0,
    Ka: function() { if (!this.Gb && !this.Xb) return null; var a = document.createElement("mutation");
        this.Gb && a.setAttribute("elseif", this.Gb);
        this.Xb && a.setAttribute("else", 1); return a },
    hb: function(a) { this.Gb = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.Xb = parseInt(a.getAttribute("else"), 10) || 0;
        this.Ub() },
    gf: function(a) {
        var b = a.rf("controls_if_if");
        b.Ec();
        for (var c = b.L, e = 1; e <= this.Gb; e++) { var f = a.rf("controls_if_elseif");
            f.Ec();
            c.connect(f.$);
            c = f.L } this.Xb && (a = a.rf("controls_if_else"),
            a.Ec(), c.connect(a.$));
        return b
    },
    ef: function(a) { var b = J(a.L);
        this.Xb = this.Gb = 0;
        a = [null]; for (var c = [null], e = null; b;) { switch (b.type) {
                case "controls_if_elseif":
                    this.Gb++;
                    a.push(b.fq);
                    c.push(b.pe); break;
                case "controls_if_else":
                    this.Xb++;
                    e = b.pe; break;
                default:
                    throw "Unknown block type."; } b = b.L && J(b.L) } this.Ub(); for (b = 1; b <= this.Gb; b++) dh(a[b], this, "IF" + b), dh(c[b], this, "DO" + b);
        dh(e, this, "ELSE") },
    Km: function(a) {
        a = J(a.L);
        for (var b = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var c = K(this, "IF" + b),
                        e = K(this,
                            "DO" + b);
                    a.fq = c && c.connection.Ia;
                    a.pe = e && e.connection.Ia;
                    b++;
                    break;
                case "controls_if_else":
                    e = K(this, "ELSE");
                    a.pe = e && e.connection.Ia;
                    break;
                default:
                    throw "Unknown block type.";
            }
            a = a.L && J(a.L)
        }
    },
    Ub: function() { K(this, "ELSE") && this.Ga("ELSE"); for (var a = 1; K(this, "IF" + a);) this.Ga("IF" + a), this.Ga("DO" + a), a++; for (a = 1; a <= this.Gb; a++) O(Q(this, "IF" + a).Ua("Boolean"), x.g.CONTROLS_IF_MSG_ELSEIF), O(Mh(this, "DO" + a), x.g.CONTROLS_IF_MSG_THEN);
        this.Xb && O(Mh(this, "ELSE"), x.g.CONTROLS_IF_MSG_ELSE) }
};
x.N.wp("controls_if_mutator", x.ca.ad.ju, null, ["controls_if_elseif", "controls_if_else"]);
x.ca.ad.ku = function() { this.ka(function() { if (this.Gb || this.Xb) { if (!this.Gb && this.Xb) return x.g.CONTROLS_IF_TOOLTIP_2; if (this.Gb && !this.Xb) return x.g.CONTROLS_IF_TOOLTIP_3; if (this.Gb && this.Xb) return x.g.CONTROLS_IF_TOOLTIP_4 } else return x.g.CONTROLS_IF_TOOLTIP_1; return "" }.bind(this)) };
x.N.register("controls_if_tooltip", x.ca.ad.ku);
x.ca.ad.Gu = { onchange: function(a) { this.Hi || (this.Hi = [null, null]); var b = Ph(this, "A"),
            c = Ph(this, "B");
        b && c && !Te(b.M, c.M) && (x.j.S(a.group), a = this.Hi[0], a !== b && (Ke(b), a && !a.jb && K(this, "A").connection.connect(a.M)), b = this.Hi[1], b !== c && (Ke(c), b && !b.jb && K(this, "B").connection.connect(b.M)), this.qb(), x.j.S(!1));
        this.Hi[0] = Ph(this, "A");
        this.Hi[1] = Ph(this, "B") } };
x.ca.ad.Fu = function() { fh(this, x.ca.ad.Gu) };
x.N.register("logic_compare", x.ca.ad.Fu);
x.ca.ad.Hu = { ft: null, onchange: function(a) { var b = Ph(this, "THEN"),
            c = Ph(this, "ELSE"),
            e = this.M.Ia; if ((b || c) && e)
            for (var f = 0; 2 > f; f++) { var h = 1 == f ? b : c;
                h && !Te(h.M, e) && (x.j.S(a.group), e === this.ft ? (Ke(this), e.v.qb()) : (Ke(h), h.qb()), x.j.S(!1)) } this.ft = e } };
x.N.Em("logic_ternary", x.ca.ad.Hu);
x.D.yx = {};
x.ca.Ye = {};
x.ca.Ye.Yk = 120;
x.ci([{ type: "controls_repeat_ext", message0: "%{BKY_CONTROLS_REPEAT_TITLE}", args0: [{ type: "input_value", name: "TIMES", check: "Number" }], message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1", args1: [{ type: "input_statement", name: "DO" }], previousStatement: null, nextStatement: null, colour: "%{BKY_LOOPS_HUE}", tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}", helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}" }, {
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
x.ca.Ye.cv = { WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}", UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}" };
x.N.register("controls_whileUntil_tooltip", x.N.jl("MODE", x.ca.Ye.cv));
x.ca.Ye.cu = { BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}", CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}" };
x.N.register("controls_flow_tooltip", x.N.jl("FLOW", x.ca.Ye.cu));
x.ca.Ye.mu = { ff: function(a) { if (!this.vb) { var b = He(this, "VAR").Sc(),
                c = b.name; if (!this.isCollapsed() && null != c) { var e = { enabled: !0 };
                e.text = x.g.VARIABLES_SET_CREATE_GET.replace("%1", c);
                b = x.H.Sr(b);
                b = G("block", null, b);
                b.setAttribute("type", "variables_get");
                e.gb = x.ea.ll(this, b);
                a.push(e) } } } };
x.N.Em("contextMenu_newGetVariableBlock", x.ca.Ye.mu);
x.N.register("controls_for_tooltip", x.N.En("%{BKY_CONTROLS_FOR_TOOLTIP}"));
x.N.register("controls_forEach_tooltip", x.N.En("%{BKY_CONTROLS_FOREACH_TOOLTIP}"));
x.ca.Ye.lu = { Ju: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"], onchange: function() { if (this.o.sb && !this.o.sb()) { var a = !1,
                b = this;
            do { if (-1 != this.Ju.indexOf(b.type)) { a = !0; break } b = Jh(b) } while (b);
            a ? (this.Pe(null), this.vb || this.Pd(!1)) : (this.Pe(x.g.CONTROLS_FLOW_STATEMENTS_WARNING), this.vb || Lh(this) || this.Pd(!0)) } } };
x.N.Em("controls_flow_in_loop_check", x.ca.Ye.lu);
x.D.gy = {};
x.D.procedures_defnoreturn = {
    I: function() { var a = new tj("", x.ra.Fm);
        a.Tm = !1;
        O(O(O(R(this), x.g.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
        this.Cg(new ch(["procedures_mutatorarg"]));
        (this.o.options.lj || this.o.options.Lb && this.o.options.Lb.options.lj) && x.g.PROCEDURES_DEFNORETURN_COMMENT && this.xf(x.g.PROCEDURES_DEFNORETURN_COMMENT);
        this.Ha(x.g.PROCEDURES_HUE);
        this.ka(x.g.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.Ta = x.g.PROCEDURES_DEFNORETURN_HELPURL;
        this.W = [];
        this.tb = [];
        this.Oe(!0);
        this.pe = null },
    Oe: function(a) {
        this.cm !==
            a && (a ? (O(Mh(this, "STACK"), x.g.PROCEDURES_DEFNORETURN_DO), K(this, "RETURN") && Oh(this, "STACK", "RETURN")) : this.Ga("STACK", !0), this.cm = a)
    },
    Ok: function() { for (var a = !1, b = {}, c = 0; c < this.W.length; c++) { if (b["arg_" + this.W[c].toLowerCase()]) { a = !0; break } b["arg_" + this.W[c].toLowerCase()] = !0 } a ? this.Pe(x.g.PROCEDURES_DEF_DUPLICATE_WARNING) : this.Pe(null);
        a = "";
        this.W.length && (a = x.g.PROCEDURES_BEFORE_PARAMS + " " + this.W.join(", "));
        x.j.disable(); try { Kh(this, a, "PARAMS") } finally { x.j.enable() } },
    Ka: function(a) {
        var b = document.createElement("mutation");
        a && b.setAttribute("name", F(this, "NAME"));
        for (var c = 0; c < this.tb.length; c++) { var e = document.createElement("arg"),
                f = this.tb[c];
            e.setAttribute("name", f.name);
            e.setAttribute("varId", f.ba());
            a && this.jp && e.setAttribute("paramId", this.jp[c]);
            b.appendChild(e) } this.cm || b.setAttribute("statements", "false");
        return b
    },
    hb: function(a) {
        this.W = [];
        this.tb = [];
        for (var b = 0, c; c = a.childNodes[b]; b++)
            if ("arg" == c.nodeName.toLowerCase()) {
                var e = c.getAttribute("name");
                c = c.getAttribute("varId");
                this.W.push(e);
                e = x.H.Vl(this.o,
                    c, e, "");
                this.tb.push(e)
            } this.Ok();
        x.ra.Xo(this);
        this.Oe("false" !== a.getAttribute("statements"))
    },
    gf: function(a) { var b = a.rf("procedures_mutatorcontainer");
        b.Ec();
        K(this, "RETURN") ? Kh(b, this.cm ? "TRUE" : "FALSE", "STATEMENTS") : K(b, "STATEMENT_INPUT").pa(!1); for (var c = K(b, "STACK").connection, e = 0; e < this.W.length; e++) { var f = a.rf("procedures_mutatorarg");
            f.Ec();
            Kh(f, this.W[e], "NAME");
            f.CC = e;
            c.connect(f.$);
            c = f.L } x.ra.Xo(this); return b },
    ef: function(a) {
        this.W = [];
        this.jp = [];
        this.tb = [];
        for (var b = Ph(a, "STACK"); b;) {
            var c =
                F(b, "NAME");
            this.W.push(c);
            c = this.o.Sc(c, "");
            this.tb.push(c);
            this.jp.push(b.id);
            b = b.L && J(b.L)
        }
        this.Ok();
        x.ra.Xo(this);
        a = F(a, "STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.cm != a))
            if (a) this.Oe(!0), dh(this.pe, this, "STACK"), this.pe = null;
            else { a = K(this, "STACK").connection; if (this.pe = a.Ia) a = J(a), Ke(a), a.qb();
                this.Oe(!1) }
    },
    mf: function() { return [F(this, "NAME"), this.W, !1] },
    wo: function() { return this.W },
    Wf: function() { return this.tb },
    wk: function(a, b) {
        var c = this.o.fe(a);
        if ("" == c.type) {
            c = c.name;
            b = this.o.fe(b);
            for (var e = !1, f = 0; f < this.tb.length; f++) this.tb[f].ba() == a && (this.W[f] = b.name, this.tb[f] = b, e = !0);
            e && this.El(c, b.name)
        }
    },
    Zm: function(a) { for (var b = a.name, c = !1, e = 0; e < this.tb.length; e++)
            if (this.tb[e].ba() == a.ba()) { var f = this.W[e];
                this.W[e] = b;
                c = !0 } c && this.El(f, b) },
    El: function(a, b) { this.Ok(); if (this.kd.Y())
            for (var c = Tc(this.kd.m), e = 0, f; f = c[e]; e++) "procedures_mutatorarg" == f.type && Wc(a, F(f, "NAME")) && Kh(f, b, "NAME") },
    ff: function(a) {
        if (!this.vb) {
            var b = { enabled: !0 },
                c = F(this, "NAME");
            b.text = x.g.PROCEDURES_CREATE_DO.replace("%1",
                c);
            var e = G("mutation");
            e.setAttribute("name", c);
            for (var f = 0; f < this.W.length; f++) c = G("arg"), c.setAttribute("name", this.W[f]), e.appendChild(c);
            c = G("block", null, e);
            c.setAttribute("type", this.Mq);
            b.gb = x.ea.ll(this, c);
            a.push(b);
            if (!this.isCollapsed())
                for (f = 0; f < this.tb.length; f++) b = { enabled: !0 }, e = this.tb[f], c = e.name, b.text = x.g.VARIABLES_SET_CREATE_GET.replace("%1", c), c = x.H.Sr(e), c = G("block", null, c), c.setAttribute("type", "variables_get"), b.gb = x.ea.ll(this, c), a.push(b)
        }
    },
    Mq: "procedures_callnoreturn"
};
x.D.procedures_defreturn = {
    I: function() {
        var a = new tj("", x.ra.Fm);
        a.Tm = !1;
        O(O(O(R(this), x.g.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
        O(Hh(Q(this, "RETURN"), x.Lg), x.g.PROCEDURES_DEFRETURN_RETURN);
        this.Cg(new ch(["procedures_mutatorarg"]));
        (this.o.options.lj || this.o.options.Lb && this.o.options.Lb.options.lj) && x.g.PROCEDURES_DEFRETURN_COMMENT && this.xf(x.g.PROCEDURES_DEFRETURN_COMMENT);
        this.Ha(x.g.PROCEDURES_HUE);
        this.ka(x.g.PROCEDURES_DEFRETURN_TOOLTIP);
        this.Ta = x.g.PROCEDURES_DEFRETURN_HELPURL;
        this.W = [];
        this.tb = [];
        this.Oe(!0);
        this.pe = null
    },
    Oe: x.D.procedures_defnoreturn.Oe,
    Ok: x.D.procedures_defnoreturn.Ok,
    Ka: x.D.procedures_defnoreturn.Ka,
    hb: x.D.procedures_defnoreturn.hb,
    gf: x.D.procedures_defnoreturn.gf,
    ef: x.D.procedures_defnoreturn.ef,
    mf: function() { return [F(this, "NAME"), this.W, !0] },
    wo: x.D.procedures_defnoreturn.wo,
    Wf: x.D.procedures_defnoreturn.Wf,
    wk: x.D.procedures_defnoreturn.wk,
    Zm: x.D.procedures_defnoreturn.Zm,
    El: x.D.procedures_defnoreturn.El,
    ff: x.D.procedures_defnoreturn.ff,
    Mq: "procedures_callreturn"
};
x.D.procedures_mutatorcontainer = { I: function() { O(R(this), x.g.PROCEDURES_MUTATORCONTAINER_TITLE);
        Mh(this, "STACK");
        O(O(R(this, "STATEMENT_INPUT"), x.g.PROCEDURES_ALLOW_STATEMENTS), new Kj("TRUE"), "STATEMENTS");
        this.Ha(x.g.PROCEDURES_HUE);
        this.ka(x.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1 } };
x.D.procedures_mutatorarg = {
    I: function() { var a = new tj("x", this.Ih);
        a.Hx = a.Re;
        a.Re = function() { this.rj = [];
            this.Hx() };
        O(O(R(this), x.g.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
        this.nd(!0);
        this.md(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.ka(x.g.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.ep = this.dw;
        a.rj = [];
        a.ep("x") },
    Ih: function(a) {
        var b = eh(this.v.o);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a) return null;
        var c = b.Sc(a, "");
        c && c.name != a && b.wk(c.ba(), a);
        c || (c = b.ed(a, "")) && this.rj && this.rj.push(c);
        return a
    },
    dw: function(a) { var b = eh(this.v.o); if (b)
            for (var c = 0; c < this.rj.length; c++) { var e = this.rj[c];
                e.name != a && b.Tf(e.ba()) } }
};
x.D.procedures_callnoreturn = {
    I: function() { O(R(this, "TOPROW"), this.id, "NAME");
        this.nd(!0);
        this.md(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.Ta = x.g.PROCEDURES_CALLNORETURN_HELPURL;
        this.W = [];
        this.tb = [];
        this.uf = {};
        this.ne = null },
    Jd: function() { return F(this, "NAME") },
    vk: function(a, b) { Wc(a, this.Jd()) && (Kh(this, b, "NAME"), this.ka((this.M ? x.g.PROCEDURES_CALLRETURN_TOOLTIP : x.g.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b))) },
    Np: function(a, b) {
        var c = x.ra.Pl(this.Jd(), this.o);
        c = c && c.kd && c.kd.Y();
        c || (this.uf = {}, this.ne =
            null);
        if (b) {
            a: { var e = this.W; if (fa(e) && fa(a) && e.length == a.length) { for (var f = e.length, h = 0; h < f; h++)
                        if (e[h] !== a[h]) { e = !1; break a } e = !0 } else e = !1 }
            if (e) this.ne = b;
            else {
                if (b.length != a.length) throw "Error: paramNames and paramIds must be the same length.";
                this.zg(!1);
                this.ne || (this.uf = {}, a.join("\n") == this.W.join("\n") ? this.ne = b : this.ne = []);
                e = this.R;
                this.R = !1;
                for (f = 0; f < this.W.length; f++)
                    if (h = K(this, "ARG" + f)) h = h.connection.Ia, this.uf[this.ne[f]] = h, c && h && -1 == b.indexOf(this.ne[f]) && (h.disconnect(), h.v.qb());
                this.W = [].concat(a);
                this.tb = [];
                for (f = 0; f < this.W.length; f++) a = x.H.Vl(this.o, null, this.W[f], ""), this.tb.push(a);
                this.Ub();
                if (this.ne = b)
                    for (f = 0; f < this.W.length; f++) b = this.ne[f], b in this.uf && (h = this.uf[b], dh(h, this, "ARG" + f) || delete this.uf[b]);
                (this.R = e) && this.aa()
            }
        }
    },
    Ub: function() {
        for (var a = 0; a < this.W.length; a++) { var b = He(this, "ARGNAME" + a); if (b) { x.j.disable(); try { b.setValue(this.W[a]) } finally { x.j.enable() } } else b = new Dh(this.W[a]), O(Hh(Q(this, "ARG" + a), x.Lg), b, "ARGNAME" + a).I() }
        for (; K(this, "ARG" + a);) this.Ga("ARG" +
            a), a++;
        if (a = K(this, "TOPROW")) this.W.length ? He(this, "WITH") || (O(a, x.g.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.I()) : He(this, "WITH") && Gh(a, "WITH")
    },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("name", this.Jd()); for (var b = 0; b < this.W.length; b++) { var c = document.createElement("arg");
            c.setAttribute("name", this.W[b]);
            a.appendChild(c) } return a },
    hb: function(a) {
        var b = a.getAttribute("name");
        this.vk(this.Jd(), b);
        b = [];
        for (var c = [], e = 0, f; f = a.childNodes[e]; e++) "arg" == f.nodeName.toLowerCase() &&
            (b.push(f.getAttribute("name")), c.push(f.getAttribute("paramId")));
        this.Np(b, c)
    },
    Wf: function() { return this.tb },
    onchange: function(a) {
        if (this.o && !this.o.je)
            if (a.type == x.j.au && -1 != a.cg.indexOf(this.id)) {
                var b = this.Jd();
                b = x.ra.Pl(b, this.o);
                !b || b.type == this.Sn && JSON.stringify(b.W) == JSON.stringify(this.W) || (b = null);
                if (!b) {
                    x.j.S(a.group);
                    a = G("xml");
                    b = G("block");
                    b.setAttribute("type", this.Sn);
                    var c = this.oa(),
                        e = c.y + 2 * x.bd;
                    b.setAttribute("x", c.x + x.bd * (this.u ? -1 : 1));
                    b.setAttribute("y", e);
                    c = this.Ka();
                    b.appendChild(c);
                    c = G("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(document.createTextNode(this.Jd()));
                    b.appendChild(c);
                    a.appendChild(b);
                    x.F.ae(a, this.o);
                    x.j.S(!1)
                }
            } else a.type == x.j.bu && (b = this.Jd(), b = x.ra.Pl(b, this.o), b || (x.j.S(a.group), this.A(!0, !1), x.j.S(!1)))
    },
    ff: function(a) {
        var b = { enabled: !0 };
        b.text = x.g.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.Jd(),
            e = this.o;
        b.gb = function() {
            var a = x.ra.Pl(c, e);
            if (a) {
                if (e.kb) {
                    var b = Nc(e, a.id);
                    if (b) {
                        var k = b.oa(),
                            l = b.Hb(),
                            m = e.scale;
                        b = (k.x + (e.u ? -1 : 1) * l.width / 2) * m;
                        k = (k.y + l.height /
                            2) * m;
                        l = e.ub();
                        b = b - l.Pc - l.Aa / 2;
                        k = k - l.vc - l.fb / 2;
                        x.Qb();
                        e.kb.set(b, k)
                    }
                } else console.warn("Tried to scroll a non-scrollable workspace.");
                a.select()
            }
        };
        a.push(b)
    },
    Sn: "procedures_defnoreturn"
};
x.D.procedures_callreturn = {
    I: function() { O(R(this, "TOPROW"), "", "NAME");
        this.Ic(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.Ta = x.g.PROCEDURES_CALLRETURN_HELPURL;
        this.W = [];
        this.uf = {};
        this.ne = null },
    Jd: x.D.procedures_callnoreturn.Jd,
    vk: x.D.procedures_callnoreturn.vk,
    Np: x.D.procedures_callnoreturn.Np,
    Ub: x.D.procedures_callnoreturn.Ub,
    Ka: x.D.procedures_callnoreturn.Ka,
    hb: x.D.procedures_callnoreturn.hb,
    Wf: x.D.procedures_callnoreturn.Wf,
    onchange: x.D.procedures_callnoreturn.onchange,
    ff: x.D.procedures_callnoreturn.ff,
    Sn: "procedures_defreturn"
};
x.D.procedures_ifreturn = {
    I: function() { O(Q(this, "CONDITION").Ua("Boolean"), x.g.CONTROLS_IF_MSG_IF);
        O(Q(this, "VALUE"), x.g.PROCEDURES_DEFRETURN_RETURN);
        this.bc(!0);
        this.nd(!0);
        this.md(!0);
        this.Ha(x.g.PROCEDURES_HUE);
        this.ka(x.g.PROCEDURES_IFRETURN_TOOLTIP);
        this.Ta = x.g.PROCEDURES_IFRETURN_HELPURL;
        this.$f = !0 },
    Ka: function() { var a = document.createElement("mutation");
        a.setAttribute("value", Number(this.$f)); return a },
    hb: function(a) {
        this.$f = 1 == a.getAttribute("value");
        this.$f || (this.Ga("VALUE"), O(R(this, "VALUE"),
            x.g.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.o.sb && !this.o.sb()) {
            var a = !1,
                b = this;
            do { if (-1 != this.su.indexOf(b.type)) { a = !0; break } b = Jh(b) } while (b);
            a ? ("procedures_defnoreturn" == b.type && this.$f ? (this.Ga("VALUE"), O(R(this, "VALUE"), x.g.PROCEDURES_DEFRETURN_RETURN), this.$f = !1) : "procedures_defreturn" != b.type || this.$f || (this.Ga("VALUE"), O(Q(this, "VALUE"), x.g.PROCEDURES_DEFRETURN_RETURN), this.$f = !0), this.Pe(null), this.vb || this.Pd(!1)) : (this.Pe(x.g.PROCEDURES_IFRETURN_WARNING), this.vb || Lh(this) ||
                this.Pd(!0))
        }
    },
    su: ["procedures_defnoreturn", "procedures_defreturn"]
};
x.D.Ly = {};
x.ca.H = {};
x.ca.H.Yk = 330;
x.ci([{ type: "variables_get", message0: "%1", args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" }], output: null, colour: "%{BKY_VARIABLES_HUE}", helpUrl: "%{BKY_VARIABLES_GET_HELPURL}", tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}", extensions: ["contextMenu_variableSetterGetter"] }, {
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
x.ca.H.nu = { ff: function(a) { if (!this.vb) { if ("variables_get" == this.type) var b = "variables_set",
                c = x.g.VARIABLES_GET_CREATE_SET;
            else b = "variables_get", c = x.g.VARIABLES_SET_CREATE_GET; var e = { enabled: 0 < id(this.o) },
                f = He(this, "VAR").Ib();
            e.text = c.replace("%1", f);
            c = G("field", null, f);
            c.setAttribute("name", "VAR");
            c = G("block", null, c);
            c.setAttribute("type", b);
            e.gb = x.ea.ll(this, c);
            a.push(e) } } };
x.N.Em("contextMenu_variableSetterGetter", x.ca.H.nu);
x.h.To = {};
x.h.lists_create_empty = function() { return ["[]", x.h.Ng] };
x.h.lists_create_with = function(a) { for (var b = Array(a.Fc), c = 0; c < a.Fc; c++) b[c] = V(a, "ADD" + c, x.h.ec) || "null"; return ["[" + b.join(", ") + "]", x.h.Ng] };
x.h.lists_repeat = function(a) { var b = Mk("listsRepeat", ["function " + x.h.xd + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
        c = V(a, "ITEM", x.h.ec) || "null";
    a = V(a, "NUM", x.h.ec) || "0"; return [b + "(" + c + ", " + a + ")", x.h.Da] };
x.h.lists_length = function(a) { return [(V(a, "VALUE", x.h.mb) || "[]") + ".length", x.h.mb] };
x.h.lists_isEmpty = function(a) { return ["!" + (V(a, "VALUE", x.h.mb) || "[]") + ".length", x.h.bj] };
x.h.lists_indexOf = function(a) { var b = "FIRST" == F(a, "END") ? "indexOf" : "lastIndexOf",
        c = V(a, "FIND", x.h.Wb) || "''";
    b = (V(a, "VALUE", x.h.mb) || "[]") + "." + b + "(" + c + ")"; return a.o.options.Le ? [b + " + 1", x.h.Kf] : [b, x.h.Da] };
x.h.lists_getIndex = function(a) {
    var b = F(a, "MODE") || "GET",
        c = F(a, "WHERE") || "FROM_START",
        e = V(a, "VALUE", "RANDOM" == c ? x.h.ec : x.h.mb) || "[]";
    switch (c) {
        case "FIRST":
            if ("GET" == b) return [e + "[0]", x.h.mb];
            if ("GET_REMOVE" == b) return [e + ".shift()", x.h.mb];
            if ("REMOVE" == b) return e + ".shift();\n";
            break;
        case "LAST":
            if ("GET" == b) return [e + ".slice(-1)[0]", x.h.mb];
            if ("GET_REMOVE" == b) return [e + ".pop()", x.h.mb];
            if ("REMOVE" == b) return e + ".pop();\n";
            break;
        case "FROM_START":
            a = x.h.Ce(a, "AT");
            if ("GET" == b) return [e + "[" + a + "]", x.h.mb];
            if ("GET_REMOVE" ==
                b) return [e + ".splice(" + a + ", 1)[0]", x.h.Da];
            if ("REMOVE" == b) return e + ".splice(" + a + ", 1);\n";
            break;
        case "FROM_END":
            a = x.h.Ce(a, "AT", 1, !0);
            if ("GET" == b) return [e + ".slice(" + a + ")[0]", x.h.Da];
            if ("GET_REMOVE" == b) return [e + ".splice(" + a + ", 1)[0]", x.h.Da];
            if ("REMOVE" == b) return e + ".splice(" + a + ", 1);";
            break;
        case "RANDOM":
            e = Mk("listsGetRandomItem", ["function " + x.h.xd + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];",
                "  }", "}"
            ]) + "(" + e + ", " + ("GET" != b) + ")";
            if ("GET" == b || "GET_REMOVE" == b) return [e, x.h.Da];
            if ("REMOVE" == b) return e + ";\n"
    }
    throw "Unhandled combination (lists_getIndex).";
};
x.h.lists_setIndex = function(a) {
    function b() { if (c.match(/^\w+$/)) return ""; var a = Nk(x.h.Ra, "tmpList", x.H.Sa),
            b = "var " + a + " = " + c + ";\n";
        c = a; return b }
    var c = V(a, "LIST", x.h.mb) || "[]",
        e = F(a, "MODE") || "GET",
        f = F(a, "WHERE") || "FROM_START",
        h = V(a, "TO", x.h.Ze) || "null";
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
                x.h.Ce(a, "AT");
            if ("SET" == e) return c + "[" + f + "] = " + h + ";\n";
            if ("INSERT" == e) return c + ".splice(" + f + ", 0, " + h + ");\n";
            break;
        case "FROM_END":
            f = x.h.Ce(a, "AT", 1, !1, x.h.Uh);
            a = b();
            if ("SET" == e) return a + (c + "[" + c + ".length - " + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (c + ".splice(" + c + ".length - " + f + ", 0, " + h + ");\n");
            break;
        case "RANDOM":
            a = b();
            f = Nk(x.h.Ra, "tmpX", x.H.Sa);
            a += "var " + f + " = Math.floor(Math.random() * " + c + ".length);\n";
            if ("SET" == e) return a + (c + "[" + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (c + ".splice(" + f +
                ", 0, " + h + ");\n")
    }
    throw "Unhandled combination (lists_setIndex).";
};
x.h.To.Cw = function(a, b, c) { return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c };
x.h.lists_getSublist = function(a) {
    var b = V(a, "LIST", x.h.mb) || "[]",
        c = F(a, "WHERE1"),
        e = F(a, "WHERE2");
    if ("FIRST" == c && "LAST" == e) b += ".slice(0)";
    else if (b.match(/^\w+$/) || "FROM_END" != c && "FROM_START" == e) {
        switch (c) {
            case "FROM_START":
                var f = x.h.Ce(a, "AT1"); break;
            case "FROM_END":
                f = x.h.Ce(a, "AT1", 1, !1, x.h.Uh);
                f = b + ".length - " + f; break;
            case "FIRST":
                f = "0"; break;
            default:
                throw "Unhandled option (lists_getSublist)."; }
        switch (e) {
            case "FROM_START":
                a = x.h.Ce(a, "AT2", 1);
                break;
            case "FROM_END":
                a = x.h.Ce(a, "AT2", 0, !1, x.h.Uh);
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
        f = x.h.Ce(a, "AT1");
        a = x.h.Ce(a, "AT2");
        var h = x.h.To.Cw,
            k = { FIRST: "First", LAST: "Last", FROM_START: "FromStart", FROM_END: "FromEnd" };
        b = Mk("subsequence" + k[c] + k[e], ["function " + x.h.xd + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") + ") {", "  var start = " + h("sequence", c, "at1") + ";", "  var end = " + h("sequence", e, "at2") + " + 1;",
            "  return sequence.slice(start, end);", "}"
        ]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + f : "") + ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") + ")"
    }
    return [b, x.h.Da]
};
x.h.lists_sort = function(a) {
    var b = V(a, "LIST", x.h.Da) || "[]",
        c = "1" === F(a, "DIRECTION") ? 1 : -1;
    a = F(a, "TYPE");
    var e = Mk("listsGetSortCompare", ["function " + x.h.xd + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return parseFloat(a) - parseFloat(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },", '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };",
        "  var compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"
    ]);
    return [b + ".slice().sort(" + e + '("' + a + '", ' + c + "))", x.h.Da]
};
x.h.lists_split = function(a) { var b = V(a, "INPUT", x.h.mb),
        c = V(a, "DELIM", x.h.Wb) || "''";
    a = F(a, "MODE"); if ("SPLIT" == a) b || (b = "''"), a = "split";
    else if ("JOIN" == a) b || (b = "[]"), a = "join";
    else throw "Unknown mode: " + a; return [b + "." + a + "(" + c + ")", x.h.Da] };
x.h.lists_reverse = function(a) { return [(V(a, "LIST", x.h.Da) || "[]") + ".slice().reverse()", x.h.Da] };
x.h.wx = {};
x.h.controls_if = function(a) { var b = 0,
        c = "";
    do { var e = V(a, "IF" + b, x.h.Wb) || "false"; var f = Jk(a, "DO" + b);
        c += (0 < b ? " else " : "") + "if (" + e + ") {\n" + f + "}";++b } while (K(a, "IF" + b));
    K(a, "ELSE") && (f = Jk(a, "ELSE"), c += " else {\n" + f + "}"); return c + "\n" };
x.h.controls_ifelse = x.h.controls_if;
x.h.logic_compare = function(a) { var b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" } [F(a, "OP")],
        c = "==" == b || "!=" == b ? x.h.wq : x.h.Qu,
        e = V(a, "A", c) || "0";
    a = V(a, "B", c) || "0"; return [e + " " + b + " " + a, c] };
x.h.logic_operation = function(a) { var b = "AND" == F(a, "OP") ? "&&" : "||",
        c = "&&" == b ? x.h.kn : x.h.ln,
        e = V(a, "A", c);
    a = V(a, "B", c); if (e || a) { var f = "&&" == b ? "true" : "false";
        e || (e = f);
        a || (a = f) } else a = e = "false"; return [e + " " + b + " " + a, c] };
x.h.logic_negate = function(a) { var b = x.h.bj; return ["!" + (V(a, "BOOL", b) || "true"), b] };
x.h.logic_boolean = function(a) { return ["TRUE" == F(a, "BOOL") ? "true" : "false", x.h.Ng] };
x.h.logic_null = function() { return ["null", x.h.Ng] };
x.h.logic_ternary = function(a) { var b = V(a, "IF", x.h.al) || "false",
        c = V(a, "THEN", x.h.al) || "null";
    a = V(a, "ELSE", x.h.al) || "null"; return [b + " ? " + c + " : " + a, x.h.al] };
x.h.yx = {};
x.h.controls_repeat_ext = function(a) { var b = He(a, "TIMES") ? String(Number(F(a, "TIMES"))) : V(a, "TIMES", x.h.Ze) || "0",
        c = Jk(a, "DO");
    c = Kk(c, a.id);
    a = ""; var e = Nk(x.h.Ra, "count", x.H.Sa),
        f = b;
    b.match(/^\w+$/) || x.ig(b) || (f = Nk(x.h.Ra, "repeat_end", x.H.Sa), a += "var " + f + " = " + b + ";\n"); return a + ("for (var " + e + " = 0; " + e + " < " + f + "; " + e + "++) {\n" + c + "}\n") };
x.h.controls_repeat = x.h.controls_repeat_ext;
x.h.controls_whileUntil = function(a) { var b = "UNTIL" == F(a, "MODE"),
        c = V(a, "BOOL", b ? x.h.bj : x.h.Wb) || "false",
        e = Jk(a, "DO");
    e = Kk(e, a.id);
    b && (c = "!" + c); return "while (" + c + ") {\n" + e + "}\n" };
x.h.controls_for = function(a) {
    var b = x.h.Ra.getName(F(a, "VAR"), x.H.Sa),
        c = V(a, "FROM", x.h.Ze) || "0",
        e = V(a, "TO", x.h.Ze) || "0",
        f = V(a, "BY", x.h.Ze) || "1",
        h = Jk(a, "DO");
    h = Kk(h, a.id);
    if (x.ig(c) && x.ig(e) && x.ig(f)) { var k = parseFloat(c) <= parseFloat(e);
        a = "for (" + b + " = " + c + "; " + b + (k ? " <= " : " >= ") + e + "; " + b;
        b = Math.abs(parseFloat(f));
        a = (1 == b ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + b)) + (") {\n" + h + "}\n") } else a = "", k = c, c.match(/^\w+$/) || x.ig(c) || (k = Nk(x.h.Ra, b + "_start", x.H.Sa), a += "var " + k + " = " + c + ";\n"), c = e, e.match(/^\w+$/) ||
        x.ig(e) || (c = Nk(x.h.Ra, b + "_end", x.H.Sa), a += "var " + c + " = " + e + ";\n"), e = Nk(x.h.Ra, b + "_inc", x.H.Sa), a += "var " + e + " = ", a = x.ig(f) ? a + (Math.abs(f) + ";\n") : a + ("Math.abs(" + f + ");\n"), a = a + ("if (" + k + " > " + c + ") {\n") + (x.h.Xe + e + " = -" + e + ";\n"), a += "}\n", a += "for (" + b + " = " + k + "; " + e + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + e + ") {\n" + h + "}\n";
    return a
};
x.h.controls_forEach = function(a) { var b = x.h.Ra.getName(F(a, "VAR"), x.H.Sa),
        c = V(a, "LIST", x.h.Ze) || "[]",
        e = Jk(a, "DO");
    e = Kk(e, a.id);
    a = ""; var f = c;
    c.match(/^\w+$/) || (f = Nk(x.h.Ra, b + "_list", x.H.Sa), a += "var " + f + " = " + c + ";\n");
    c = Nk(x.h.Ra, b + "_index", x.H.Sa);
    e = x.h.Xe + b + " = " + f + "[" + c + "];\n" + e; return a + ("for (var " + c + " in " + f + ") {\n" + e + "}\n") };
x.h.controls_flow_statements = function(a) { switch (F(a, "FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n" } throw "Unknown flow statement."; };
x.h.gy = {};
x.h.procedures_defreturn = function(a) { var b = x.h.Ra.getName(F(a, "NAME"), x.ra.Sa),
        c = Jk(a, "STACK"); if (x.h.Wh) { var e = a.id.replace(/\$/g, "$$$$");
        c = Ik(x.h.Wh.replace(/%1/g, "'" + e + "'"), x.h.Xe) + c } x.h.Zk && (c = x.h.Zk.replace(/%1/g, "'" + a.id + "'") + c);
    (e = V(a, "RETURN", x.h.Wb) || "") && (e = x.h.Xe + "return " + e + ";\n"); for (var f = [], h = 0; h < a.W.length; h++) f[h] = x.h.Ra.getName(a.W[h], x.H.Sa);
    c = "function " + b + "(" + f.join(", ") + ") {\n" + c + e + "}";
    c = x.h.Lm(a, c);
    x.h.Ug["%" + b] = c; return null };
x.h.procedures_defnoreturn = x.h.procedures_defreturn;
x.h.procedures_callreturn = function(a) { for (var b = x.h.Ra.getName(F(a, "NAME"), x.ra.Sa), c = [], e = 0; e < a.W.length; e++) c[e] = V(a, "ARG" + e, x.h.ec) || "null"; return [b + "(" + c.join(", ") + ")", x.h.Da] };
x.h.procedures_callnoreturn = function(a) { for (var b = x.h.Ra.getName(F(a, "NAME"), x.ra.Sa), c = [], e = 0; e < a.W.length; e++) c[e] = V(a, "ARG" + e, x.h.ec) || "null"; return b + "(" + c.join(", ") + ");\n" };
x.h.procedures_ifreturn = function(a) { var b = "if (" + (V(a, "CONDITION", x.h.Wb) || "false") + ") {\n";
    a.$f ? (a = V(a, "VALUE", x.h.Wb) || "null", b += x.h.Xe + "return " + a + ";\n") : b += x.h.Xe + "return;\n"; return b + "}\n" };
x.h.Ly = {};
x.h.variables_get = function(a) { return [x.h.Ra.getName(F(a, "VAR"), x.H.Sa), x.h.Ng] };
x.h.variables_set = function(a) { var b = V(a, "VALUE", x.h.Ze) || "0"; return x.h.Ra.getName(F(a, "VAR"), x.H.Sa) + " = " + b + ";\n" };
x.D.controls_if.I = function() {
    this.Ta = x.g.CONTROLS_IF_HELPURL;
    this.Ha(x.g.LOGIC_HUE);
    O(Q(this, "IF0").Ua("Boolean"), "if (");
    O(R(this), ") {");
    Mh(this, "DO0");
    O(R(this, "TAIL"), "}");
    this.bc(!0);
    this.nd(!0);
    this.md(!0);
    this.Cg(new ch(["controls_if_elseif", "controls_if_else"]));
    var a = this;
    this.ka(function() { if (a.Gb || a.Xb) { if (!a.Gb && a.Xb) return x.g.CONTROLS_IF_TOOLTIP_2; if (a.Gb && !a.Xb) return x.g.CONTROLS_IF_TOOLTIP_3; if (a.Gb && a.Xb) return x.g.CONTROLS_IF_TOOLTIP_4 } else return x.g.CONTROLS_IF_TOOLTIP_1; return "" });
    this.Xb = this.Gb = 0
};
x.D.controls_if.Ub = function() { K(this, "ELSE") && (this.Ga("ELSEMSG"), this.Ga("ELSE")); for (var a = 1; K(this, "IF" + a);) this.Ga("IF" + a), this.Ga("TAIL" + a), this.Ga("DO" + a), a++; for (a = 1; a <= this.Gb; a++) O(Q(this, "IF" + a).Ua("Boolean"), "} else if ("), O(R(this, "TAIL" + a), ") {"), Mh(this, "DO" + a);
    this.Xb && (O(R(this, "ELSEMSG"), "} else {"), Mh(this, "ELSE"));
    Oh(this, "TAIL", null) };
x.D.logic_compare.I = function() {
    this.Ta = x.g.LOGIC_COMPARE_HELPURL;
    this.Ha(x.g.LOGIC_HUE);
    this.Ic(!0, "Boolean");
    Q(this, "A");
    O(Q(this, "B"), new P([
        ["==", "EQ"],
        ["!=", "NEQ"],
        ["<", "LT"],
        ["<=", "LTE"],
        [">", "GT"],
        [">=", "GTE"]
    ]), "OP");
    this.bc(!0);
    var a = this;
    this.ka(function() { var b = F(a, "OP"); return { EQ: x.g.LOGIC_COMPARE_TOOLTIP_EQ, NEQ: x.g.LOGIC_COMPARE_TOOLTIP_NEQ, LT: x.g.LOGIC_COMPARE_TOOLTIP_LT, LTE: x.g.LOGIC_COMPARE_TOOLTIP_LTE, GT: x.g.LOGIC_COMPARE_TOOLTIP_GT, GTE: x.g.LOGIC_COMPARE_TOOLTIP_GTE } [b] });
    this.Hi = [null, null]
};
x.g.LOGIC_OPERATION_AND = "&&";
x.g.LOGIC_OPERATION_OR = "||";
x.g.LOGIC_NEGATE_TITLE = "! %1";
x.g.LOGIC_BOOLEAN_TRUE = "true";
x.g.LOGIC_BOOLEAN_FALSE = "false";
x.D.controls_whileUntil.I = function() { Nh(this, { message0: "while ( %1 ) { %2 %3 }", args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }, { type: "input_dummy" }, { type: "input_statement", name: "DO" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.LOOPS_HUE, tooltip: x.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE, helpUrl: x.g.CONTROLS_WHILEUNTIL_HELPURL }) };
x.D.controls_for.I = function() {
    Nh(this, { message0: "for (var %1 = %2;  %3 < %4;  %5 += 1) { %6 %7 }", args0: [{ type: "field_variable", name: "VAR", variable: null }, { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" }, { type: "field_label", name: "VAR1", text: "?" }, { type: "input_value", name: "TO", check: "Number", align: "RIGHT" }, { type: "field_label", name: "VAR2", text: "?" }, { type: "input_dummy" }, { type: "input_statement", name: "DO" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.LOOPS_HUE, helpUrl: x.g.CONTROLS_FOR_HELPURL });
    var a = this;
    this.ka(function() { return x.g.CONTROLS_FOR_TOOLTIP.replace("%1", F(a, "VAR")) })
};
x.D.controls_for.onchange = function() { var a = F(this, "VAR");
    Kh(this, a, "VAR1");
    Kh(this, a, "VAR2") };
x.h.controls_for = function(a) { var b = x.h.Ra.getName(F(a, "VAR"), x.H.Sa),
        c = V(a, "FROM", x.h.Ze) || "0",
        e = V(a, "TO", x.h.Ze) || "0",
        f = Jk(a, "DO");
    f = Kk(f, a.id); return "for (var " + b + " = " + c + "; " + b + " < " + e + "; " + b + " += 1) {\n" + f + "}\n" };
x.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break ;";
x.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue ;";
x.D.math_arithmetic.I = function() {
    Nh(this, { message0: "%1 %2 %3", args0: [{ type: "input_value", name: "A", check: "Number" }, { type: "field_dropdown", name: "OP", options: [
                ["+", "ADD"],
                ["-", "MINUS"],
                ["*", "MULTIPLY"],
                ["/", "DIVIDE"]
            ] }, { type: "input_value", name: "B", check: "Number" }], inputsInline: !0, output: "Number", colour: x.g.MATH_HUE, helpUrl: x.g.MATH_ARITHMETIC_HELPURL });
    var a = this;
    this.ka(function() {
        var b = F(a, "OP");
        return {
            ADD: x.g.MATH_ARITHMETIC_TOOLTIP_ADD,
            MINUS: x.g.MATH_ARITHMETIC_TOOLTIP_MINUS,
            MULTIPLY: x.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
            DIVIDE: x.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE
        } [b]
    })
};
x.D.math_change.I = function() { Nh(this, { message0: "%1 += %2;", args0: [{ type: "field_variable", name: "VAR", variable: "name" }, { type: "input_value", name: "DELTA", check: "Number" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.VARIABLES_HUE, helpUrl: x.g.MATH_CHANGE_HELPURL }); var a = this;
    this.ka(function() { return x.g.MATH_CHANGE_TOOLTIP.replace("%1", F(a, "VAR")) }) };
x.h.math_change = function(a) { var b = V(a, "DELTA", x.h.Kf) || "0"; return x.h.Ra.getName(F(a, "VAR"), x.H.Sa) + " += " + b + ";\n" };
x.D.math_random_int.I = function() { Nh(this, { message0: "%1(%2,%3)", args0: ["Math.randomInt", { type: "input_value", name: "FROM", check: "Number" }, { type: "input_value", name: "TO", check: "Number" }], inputsInline: !0, output: "Number", colour: x.g.MATH_HUE, tooltip: x.g.MATH_RANDOM_INT_TOOLTIP, helpUrl: x.g.MATH_RANDOM_INT_HELPURL }) };
x.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "Math.random  (  )";
x.g.LISTS_CREATE_EMPTY_TITLE = "[ ]";
x.g.LISTS_CREATE_WITH_INPUT_WITH = "[";
x.D.lists_create_with.Ub = function() { K(this, "TAIL") && this.Ga("TAIL");
    this.Fc && K(this, "EMPTY") ? this.Ga("EMPTY") : this.Fc || K(this, "EMPTY") || O(R(this, "EMPTY"), x.g.LISTS_CREATE_EMPTY_TITLE); for (var a = 0; a < this.Fc; a++)
        if (!K(this, "ADD" + a)) { var b = Q(this, "ADD" + a);
            0 == a ? O(b, x.g.LISTS_CREATE_WITH_INPUT_WITH) : O(b, ",") } for (; K(this, "ADD" + a);) this.Ga("ADD" + a), a++;
    this.Fc && O(R(this, "TAIL"), "]") };
x.D.lists_getIndex = { I: function() { Nh(this, { message0: "%1[%2]", args0: [{ type: "input_value", name: "VALUE", check: "Array" }, { type: "input_value", name: "AT", check: "Number" }], inputsInline: !0, output: null, colour: x.g.LISTS_HUE, tooltip: x.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM + x.g.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"), helpUrl: x.g.LISTS_GET_INDEX_HELPURL }) } };
x.D.lists_setIndex = { I: function() { Nh(this, { message0: "%1[%2] = %3;", args0: [{ type: "input_value", name: "LIST", check: "Array" }, { type: "input_value", name: "AT", check: "Number" }, { type: "input_value", name: "TO" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: x.g.LISTS_HUE, tooltip: x.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM + x.g.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"), helpUrl: x.g.LISTS_SET_INDEX_HELPURL }) } };
x.g.LISTS_LENGTH_TITLE = "%1 . length";
x.D.variables_get.I = function() { this.Ta = x.g.VARIABLES_GET_HELPURL;
    this.Ha(x.g.VARIABLES_HUE);
    O(R(this), new Ck("name"), "VAR");
    this.Ic(!0);
    this.ka(x.g.VARIABLES_GET_TOOLTIP) };
x.D.variables_set.I = function() { this.Ta = x.g.VARIABLES_SET_HELPURL;
    this.Ha(x.g.VARIABLES_HUE);
    O(O(O(Q(this, "VALUE"), "var"), new Ck("name"), "VAR"), "=");
    O(R(this), ";");
    this.bc(!0);
    this.nd(!0);
    this.md(!0);
    this.ka(x.g.VARIABLES_SET_TOOLTIP) };
x.D.procedures_defnoreturn.I = function() { var a = new tj("", x.ra.Fm);
    O(O(O(O(O(R(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    this.Oe(!0);
    O(R(this), "}");
    this.Cg(new ch(["procedures_mutatorarg"]));
    x.g.PROCEDURES_DEFNORETURN_COMMENT && this.xf(x.g.PROCEDURES_DEFNORETURN_COMMENT);
    this.Ha(x.g.PROCEDURES_HUE);
    this.ka(x.g.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Ta = x.g.PROCEDURES_DEFNORETURN_HELPURL;
    this.W = [];
    this.tb = [];
    this.Oe(!0);
    this.pe = null };
x.D.procedures_defreturn.I = function() { var a = new tj("", x.ra.Fm);
    O(O(O(O(O(R(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
    O(Hh(Q(this, "RETURN"), x.Lg), "return");
    O(R(this), "}");
    this.Cg(new ch(["procedures_mutatorarg"]));
    x.g.PROCEDURES_DEFRETURN_COMMENT && this.xf(x.g.PROCEDURES_DEFRETURN_COMMENT);
    this.Ha(x.g.PROCEDURES_HUE);
    this.ka(x.g.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Ta = x.g.PROCEDURES_DEFRETURN_HELPURL;
    this.W = [];
    this.tb = [];
    this.Oe(!0);
    this.pe = null };
x.g.PROCEDURES_BEFORE_PARAMS = "";
x.D.procedures_callnoreturn.I = function() { this.Ta = x.g.PROCEDURES_CALLNORETURN_HELPURL;
    this.Ha(x.g.PROCEDURES_HUE);
    O(O(R(this), "", "NAME"), "(");
    O(R(this, "TAIL"), ");");
    this.bc(!0);
    this.nd(!0);
    this.md(!0);
    this.ka(x.g.PROCEDURES_CALLNORETURN_TOOLTIP);
    this.W = [];
    this.uf = {} };
x.D.procedures_callnoreturn.Ub = function() { for (var a = 0; a < this.W.length; a++)
        if (!K(this, "ARG" + a)) { new Dh(this.W[a]); var b = Q(this, "ARG" + a);
            0 < a && O(b, ",");
            b.I() } for (; K(this, "ARG" + a);) this.Ga("ARG" + a), a++;
    Oh(this, "TAIL", null) };
x.D.procedures_callreturn.I = function() { this.Ta = x.g.PROCEDURES_CALLRETURN_HELPURL;
    this.Ha(x.g.PROCEDURES_HUE);
    O(O(R(this), "", "NAME"), "(");
    O(R(this, "TAIL"), ")");
    this.bc(!0);
    this.Ic(!0);
    this.ka(x.g.PROCEDURES_CALLRETURN_TOOLTIP);
    this.W = [];
    this.uf = {} };
x.D.procedures_callreturn.Ub = x.D.procedures_callnoreturn.Ub;
delete x.D.procedures_ifreturn;
x.D.pond_scan = { I: function() { Nh(this, { message0: "%1(%2)", args0: ["scan", { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] }], inputsInline: !0, output: "Number", colour: 290, tooltip: W("Pond_scanTooltip") }) } };
x.h.pond_scan = function(a) { return ["scan(" + (V(a, "DEGREE", x.h.Wb) || 0) + ")", x.h.Da] };
x.D.pond_cannon = { I: function() { Nh(this, { message0: "%1(%2, %3);", args0: ["cannon", { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] }, { type: "input_value", name: "RANGE", check: "Number" }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: 290, tooltip: W("Pond_cannonTooltip") }) } };
x.h.pond_cannon = function(a) { var b = V(a, "DEGREE", x.h.ec) || 0;
    a = V(a, "RANGE", x.h.ec) || 0; return "cannon(" + b + ", " + a + ");\n" };
x.D.pond_swim = { I: function() { Nh(this, { message0: "%1(%2);", args0: ["swim", { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] }], inputsInline: !0, previousStatement: null, nextStatement: null, colour: 290, tooltip: W("Pond_swimTooltip") }) } };
x.h.pond_swim = function(a) { return "swim(" + (V(a, "DEGREE", x.h.Wb) || 0) + ");\n" };
x.D.pond_stop = { I: function() { Nh(this, { message0: "%1(%2)", args0: ["stop", ""], previousStatement: null, nextStatement: null, colour: 290, tooltip: W("Pond_stopTooltip") }) } };
x.h.pond_stop = function() { return "stop();\n" };
x.D.pond_health = { I: function() { Nh(this, { message0: "%1(%2)", args0: ["health", ""], output: "Number", colour: 290, tooltip: W("Pond_healthTooltip") }) } };
x.h.pond_health = function() { return ["health()", x.h.Da] };
x.D.pond_speed = { I: function() { Nh(this, { message0: "%1(%2)", args0: ["speed", ""], output: "Number", colour: 290, tooltip: W("Pond_speedTooltip") }) } };
x.h.pond_speed = function() { return ["speed()", x.h.Da] };
x.D.pond_getX = { I: function() { Nh(this, { message0: "%1(%2)", args0: ["getX", ""], output: "Number", colour: 290, tooltip: W("Pond_locXTooltip") }) } };
x.h.pond_getX = function() { return ["getX()", x.h.Da] };
x.D.pond_getY = { I: function() { Nh(this, { message0: "%1(%2)", args0: ["getY", ""], output: "Number", colour: 290, tooltip: W("Pond_locYTooltip") }) } };
x.h.pond_getY = function() { return ["getY()", x.h.Da] };
x.D.pond_math_number = { I: function() { this.Ta = x.g.MATH_NUMBER_HELPURL;
        this.Ha(x.g.MATH_HUE);
        O(R(this, "DUMMY"), new Bk(0), "NUM");
        this.Ic(!0, "Number");
        this.ka(x.g.MATH_NUMBER_TOOLTIP) }, onchange: function() { if (this.o && this.M.Ia && this.M.Ia.Wd) { var a = K(this, "DUMMY"),
                b = He(this, "NUM"),
                c = b.getValue(); - 1 != this.M.Ia.Wd.indexOf("Angle") ? b.constructor != Ij && (x.j.disable(), Gh(a, "NUM"), b = new Ij(""), O(a, b, "NUM"), b.Ob(c), this.aa(), x.j.enable()) : b.constructor != Bk && (x.j.disable(), Gh(a, "NUM"), O(a, new Bk(c), "NUM"), x.j.enable()) } } };
x.D.pond_math_single = {
    I: function() {
        Nh(this, { message0: "%1 (%2)", args0: [{ type: "field_dropdown", name: "OP", options: [
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
        this.ka(function() {
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
    a = V(a, "NUM", x.h.Wb) || "0"; switch (b) {
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
var Cm = {},
    Dm = {};

function Em() { throw Error("Do not instantiate directly"); } Em.prototype.Mn = null;
Em.prototype.Rc = function() { return this.content };
Em.prototype.toString = function() { return this.content };
Em.prototype.Ym = function() { if (this.Nn === Dm) return Ld(this.toString()); if (this.Nn !== Cm) throw Error("Sanitized content was not of kind TEXT or HTML."); return Md(this.toString(), this.Mn || null) };

function Fm(a) { if (null != a) switch (a.Mn) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0 }
    return null }

function Gm() { Em.call(this) } w(Gm, Em);
Gm.prototype.Nn = Cm;

function Hm(a) { return null != a && a.Nn === Cm ? a : Im(String(String(a)).replace(Jm, Km), Fm(a)) }
var Im = function(a) {
        function b() {} b.prototype = a.prototype; return function(a, e) { var c = new b;
            c.content = String(a);
            void 0 !== e && (c.Mn = e); return c } }(Gm),
    Lm = { "\x00": "&#0;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", "-": "&#45;", "/": "&#47;", "=": "&#61;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };

function Km(a) { return Lm[a] }
var Jm = /[\x00\x22\x26\x27\x3c\x3e]/g;
var Mm;

function Nm() {
    var a = Pl,
        b = Rl;
    return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). \\nReturns the distance to the closest enemy in that \\ndirection. Returns Infinity if no enemy found. </span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and \\na range (0-70). </span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360). </span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop. </span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, \\n100 is healthy). </span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is \\nstopped, 100 is full speed). </span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the \\nleft edge, 100 is the right edge). </span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the \\nbottom edge, 100 is the top edge). </span></div><div style="display: none"><span id="Pond_rabbitName">Rabbit</span><span id="Pond_counterName">Counter</span><span id="Pond_rookName">Rook</span><span id="Pond_sniperName">Sniper</span><span id="Pond_myName">Player</span></div><h1>' + ('<span id="title">' +
        (b ? '<a href="index.html?lang=' + Hm(a) + '">' : '<a href="./?lang=' + Hm(a) + '">') + "Blockly Games</a> : " + Hm({ appName: "Pond" }.appName) + "</span>") + '</h1><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div><div id="tabarea"><div id="tabbar" class="goog-tab-bar goog-tab-bar-top"><div class="goog-tab goog-tab-selected">Blocks</div><div class="goog-tab">JavaScript</div></div><div class="goog-tab-bar-clear"></div><div id="blockly"></div><div id="editor"></div></div><xml id="toolbox" style="display: none;"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><field name="NUM">70</field></shadow></value></block><block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block><block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block><block type="pond_stop"></block><block type="pond_getX"></block><block type="pond_getY"></block><block type="pond_speed"></block><block type="pond_health"></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category><category name="Math"><block type="pond_math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="pond_math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_random_float"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category></xml>\n<div id="playerRabbit" style="display: none">\n/* rabbit */\n// rabbit runs around the field, randomly and never fires; use as a target.\n\n/* go - go to the point specified */\nfunction go (dest_x, dest_y) {\n  var course = plot_course(dest_x, dest_y);\n  while (distance(getX(), getY(), dest_x, dest_y) > 5) {\n    drive(course, 25);\n  }\n  while (speed() > 0) {\n    drive(course, 0);\n  }\n}\n\n/* distance forumula. */\nfunction distance(x1, y1, x2, y2) {\n  var x = x1 - x2;\n  var y = y1 - y2;\n  return Math.sqrt((x * x) + (y * y));\n}\n\n/* plot_course - figure out which heading to go. */\nfunction plot_course(xx, yy) {\n  var d;\n  var curx = getX();\n  var cury = getY();\n  var x = curx - xx;\n  var y = cury - yy;\n\n  if (x == 0) {\n    if (yy > cury) {\n      d = 90;\n    } else {\n      d = 270;\n    }\n  } else {\n    if (yy < cury) {\n      if (xx > curx) {\n        d = 360 + Math.atan_deg(y / x);\n      } else {\n        d = 180 + Math.atan_deg(y / x);\n      }\n    } else {\n      if (xx > curx) {\n        d = Math.atan_deg(y / x);\n      } else {\n        d = 180 + Math.atan_deg(y / x);\n      }\n    }\n  }\n  return d;\n}\n\nwhile (true) {\n  // Go somewhere in the field.\n  var x = Math.random() * 100;\n  var y = Math.random() * 100;\n  go(x, y);\n}\n</div>\n\n<div id="playerCounter" style="display: none">\n/* counter */\n/* scan in a counter-clockwise direction (increasing degrees) */\n/* moves when hit */\n\nvar range;\nvar last_dir = 0;\n\nvar res = 2;\nvar d = damage();\nvar angle = Math.random() * 360;\nwhile (true) {\n  while ((range = scan(angle, res)) != Infinity) {\n    if (range > 70) { /* out of range, head toward it */\n      drive(angle, 50);\n      var i = 1;\n      while (i++ < 50) /* use a counter to limit move time */\n        ;\n      drive (angle, 0);\n      if (d != damage()) {\n        d = damage();\n        run();\n      }\n      angle -= 3;\n    } else {\n      while (!cannon(angle, range))\n        ;\n      if (d != damage()) {\n        d = damage();\n        run();\n      }\n      angle -= 15;\n    }\n  }\n  if (d != damage()) {\n    d = damage();\n    run();\n  }\n  angle += res;\n  angle %= 360;\n}\n\n/* run moves around the center of the field */\nfunction run() {\n  var i = 0;\n  var x = getX();\n  var y = getY();\n\n  if (last_dir == 0) {\n    last_dir = 1;\n    if (y > 51) {\n      drive(270, 100);\n      while (y - 10 < getY() && i++ < 50)\n        ;\n      drive(270, 0);\n    } else {\n      drive(90, 100);\n      while (y + 10 > getY() && i++ < 50)\n        ;\n      drive(90, 0);\n    }\n  } else {\n    last_dir = 0;\n    if (x > 51) {\n      drive(180, 100);\n      while (x - 10 < getX() && i++ < 50)\n        ;\n      drive(180, 0);\n    } else {\n      drive(0, 100);\n      while (x + 10 > getX() && i++ < 50)\n        ;\n      drive(0, 0);\n    }\n  }\n}\n</div>\n\n<div id="playerRook" style="display: none">\n/* rook.r  -  scans the battlefield like a rook, i.e., only 0,90,180,270 */\n/* move horizontally only, but looks horz and vertically */\n\n/* move to center of board */\nif (getY() < 50) {\n  while (getY() < 40)        /* stop near center */\n    drive(90, 100);           /* start moving */\n} else {\n  while (getY() > 60)        /* stop near center */\n    drive(270, 100);          /* start moving */\n}\ndrive(0, 0);\nwhile (speed() > 0)\n  ;\n\n/* initialize starting parameters */\nvar d = damage();\nvar course = 0;\nvar boundary = 99;\ndrive(course, 30);\n\n/* main loop */\nwhile(true) {\n  /* look all directions */\n  look(0);\n  look(90);\n  look(180);\n  look(270);\n\n  /* if near end of battlefield, change directions */\n  if (course == 0) {\n    if (getX() > boundary || speed() == 0)\n      change();\n  }\n  else {\n    if (getX() < boundary || speed() == 0)\n      change();\n  }\n}\n\n/* look somewhere, and fire cannon repeatedly at in-range target */\nfunction look(deg) {\n  var range;\n  while ((range = scan(deg, 4)) <= 70)  {\n    drive(course, 0);\n    cannon(deg, range);\n    if (d + 20 != damage()) {\n      d = damage();\n      change();\n    }\n  }\n}\n\nfunction change() {\n  if (course == 0) {\n    boundary = 1;\n    course = 180;\n  } else {\n    boundary = 99;\n    course = 0;\n  }\n  drive(course, 30);\n}\n</div>\n\n<div id="playerSniper" style="display: none">\n/* sniper */\n/* strategy: since a scan of the entire battlefield can be done in 90 */\n/* degrees from a corner, sniper can scan the field quickly. */\n\n/* external variables, that can be used by any function */\nvar corner = 0;           /* current corner 0, 1, 2, or 2 */\nvar sc = 0;               /* current scan start */\n\nvar range;          /* range to target */\n\n/* initialize the corner info */\n/* x and y location of a corner, and starting scan degree */\nvar c1x = 2,  c1y = 2,  s1 = 0;\nvar c2x = 2,  c2y = 98, s2 = 270;\nvar c3x = 98, c3y = 98, s3 = 180;\nvar c4x = 98, c4y = 2,  s4 = 90;\nvar closest = Infinity;\nnew_corner();       /* start at a random corner */\nvar d = damage();       /* get current damage */\nvar dir = sc;           /* starting scan direction */\n\nwhile (true) {         /* loop is executed forever */\n  while (dir < sc + 90) {  /* scan through 90 degree range */\n    range = scan(dir, 2);   /* look at a direction */\n    if (range <= 70) {\n      while (range > 0) {    /* keep firing while in range */\n        closest = range;     /* set closest flag */\n        cannon(dir, range);   /* fire! */\n        range = scan(dir, 1); /* check target again */\n        if (d + 15 > damage())  /* sustained several hits, */\n          range = 0;            /* goto new corner */\n      }\n      dir -= 10;             /* back up scan, in case */\n    }\n\n    dir += 2;                /* increment scan */\n    if (d != damage()) {     /* check for damage incurred */\n      new_corner();          /* we\'re hit, move now */\n      d = damage();\n      dir = sc;\n    }\n  }\n\n  if (closest == Infinity) {       /* check for any targets in range */\n    new_corner();             /* nothing, move to new corner */\n    d = damage();\n    dir = sc;\n  } else {                     /* targets in range, resume */\n    dir = sc;\n  }\n  closest = Infinity;\n}\n\n/* new corner function to move to a different corner */\nfunction new_corner() {\n  var x, y;\n\n  var rand = Math.floor(Math.random() * 4);           /* pick a random corner */\n  if (rand == corner)       /* but make it different than the */\n    corner = (rand + 1) % 4;/* current corner */\n  else\n    corner = rand;\n  if (corner == 0) {       /* set new x,y and scan start */\n    x = c1x;\n    y = c1y;\n    sc = s1;\n  }\n  if (corner == 1) {\n    x = c2x;\n    y = c2y;\n    sc = s2;\n  }\n  if (corner == 2) {\n    x = c3x;\n    y = c3y;\n    sc = s3;\n  }\n  if (corner == 3) {\n    x = c4x;\n    y = c4y;\n    sc = s4;\n  }\n\n  /* find the heading we need to get to the desired corner */\n  var angle = plot_course(x,y);\n\n  /* start drive train, full speed */\n\n  /* keep traveling until we are within 15 meters */\n  /* speed is checked in case we run into wall, other robot */\n  /* not terribly great, since were are doing nothing while moving */\n\n  while (distance(getX(), getY(), x, y) > 15)\n    drive(angle, 100);\n\n  /* cut speed, and creep the rest of the way */\n\n  while (distance(getX(), getY(), x, y) > 1)\n    drive(angle, 20);\n\n  /* stop drive, should coast in the rest of the way */\n  drive(angle, 0);\n}  /* end of new_corner */\n\n/* classical pythagorean distance formula */\nfunction distance(x1, y1, x2, y2) {\n  var x = x1 - x2;\n  var y = y1 - y2;\n  return Math.sqrt((x * x) + (y * y));\n}\n\n/* plot course function, return degree heading to */\n/* reach destination x, y; uses atan() trig function */\nfunction plot_course(xx, yy) {\n  var d;\n  var x,y;\n  var curx, cury;\n\n  curx = getX();  /* get current location */\n  cury = getY();\n  x = curx - xx;\n  y = cury - yy;\n\n  /* atan only returns -90 to +90, so figure out how to use */\n  /* the atan() value */\n\n  if (x == 0) {      /* x is zero, we either move due north or south */\n    if (yy > cury)\n      d = 90;        /* north */\n    else\n      d = 270;       /* south */\n  } else {\n    if (yy < cury) {\n      if (xx > curx)\n        d = 360 + Math.atan_deg(y / x);  /* south-east, quadrant 4 */\n      else\n        d = 180 + Math.atan_deg(y / x);  /* south-west, quadrant 3 */\n    } else {\n      if (xx > curx)\n        d = Math.atan_deg(y / x);        /* north-east, quadrant 1 */\n      else\n        d = 180 + Math.atan_deg(y / x);  /* north-west, quadrant 2 */\n    }\n  }\n  return d;\n}\n</div>\n<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>'
};

function Om() {} w(Om, Hi);
da(Om);
d = Om.prototype;
d.sa = function() { return "goog-tab" };
d.Ej = function() { return "tab" };
d.T = function(a) { var b = Om.s.T.call(this, a);
    (a = a.to()) && this.ka(b, a); return b };
d.Fd = function(a, b) { b = Om.s.Fd.call(this, a, b); var c = this.to(b);
    c && (a.Nt = c);
    a.bk() && (c = a.getParent()) && v(c.Ni) && (a.Qd(8, !1), c.Ni(a)); return b };
d.to = function(a) { return a.title || "" };
d.ka = function(a, b) { a && (a.title = b || "") };

function Pm(a, b, c) { U.call(this, a, b || Om.Id(), c);
    this.rc(8, !0);
    this.Bf |= 9 } w(Pm, U);
Pm.prototype.to = function() { return this.Nt };
Pm.prototype.ka = function(a) { this.Z.ka(this.G(), a);
    this.Nt = a };
zi("goog-tab", function() { return new Pm(null) });

function Qm() { this.yn = "tablist" } w(Qm, Ci);
da(Qm);
Qm.prototype.sa = function() { return "goog-tab-bar" };
Qm.prototype.Rp = function(a, b, c) { this.Bs || (this.ol || Rm(this), this.Bs = db(this.ol)); var e = this.Bs[b];
    e ? (a.setOrientation(e == Sm || e == Tm ? Gi : Fi), a.Cs = e) : Qm.s.Rp.call(this, a, b, c) };
Qm.prototype.bh = function(a) { var b = Qm.s.bh.call(this, a);
    this.ol || Rm(this);
    b.push(this.ol[a.Cs]); return b };

function Rm(a) { var b = a.sa();
    a.ol = gb(Um, b + "-top", Vm, b + "-bottom", Sm, b + "-start", Tm, b + "-end") };

function Wm(a, b, c) { a = a || Um;
    this.setOrientation(a == Sm || a == Tm ? Gi : Fi);
    this.Cs = a;
    Zi.call(this, this.qg, b || Qm.Id(), c);
    Xm(this) } w(Wm, Zi);
var Um = "top",
    Vm = "bottom",
    Sm = "start",
    Tm = "end";
d = Wm.prototype;
d.tv = !0;
d.Nd = null;
d.rb = function() { Wm.s.rb.call(this);
    Xm(this) };
d.Na = function() { Wm.s.Na.call(this);
    this.Nd = null };
d.removeChild = function(a, b) { Ym(this, a); return Wm.s.removeChild.call(this, a, b) };
d.Mp = function(a) { Wm.s.Mp.call(this, a);
    this.tv && this.Ni(S(this, a)) };
d.Ni = function(a) { a ? a.Mi(!0) : this.Nd && this.Nd.Mi(!1) };

function Ym(a, b) { if (b && b == a.Nd) { for (var c = di(a, b), e = c - 1; b = S(a, e); e--)
            if (b.Y() && b.isEnabled()) { a.Ni(b); return } for (c += 1; b = S(a, c); c++)
            if (b.Y() && b.isEnabled()) { a.Ni(b); return } a.Ni(null) } } d.Uw = function(a) { this.Nd && this.Nd != a.target && this.Nd.Mi(!1);
    this.Nd = a.target };
d.Vw = function(a) { a.target == this.Nd && (this.Nd = null) };
d.Sw = function(a) { Ym(this, a.target) };
d.Tw = function(a) { Ym(this, a.target) };
d.Nj = function() { S(this, this.va) || this.Sb(this.Nd || S(this, 0)) };

function Xm(a) { Yh(a).ia(a, "select", a.Uw).ia(a, "unselect", a.Vw).ia(a, "disable", a.Sw).ia(a, "hide", a.Tw) } zi("goog-tab-bar", function() { return new Wm });
var $l = "pond-duck",
    Zm = !0,
    $m = !0;

function an(a) { for (var b = ["blockly", "editor"], c = 0, e; e = b[c]; c++) e = document.getElementById(e), e.style.visibility = c == a ? "visible" : "hidden";
    b = [".blocklyTooltipDiv", ".blocklyToolboxDiv"]; for (c = 0; e = b[c]; c++) e = document.querySelector(e), e.style.visibility = 0 == a ? "visible" : "hidden";
    document.getElementById("docsButton").disabled = !1;
    Sl = 0 == a ? 11 : 12;
    wm && (document.getElementById("frameDocs").src = "pond/docs.html?lang=" + Pl + "&mode=" + Sl);
    1 == a && Zm && (a = Fk(), $m = !0, Y.xc.setValue(a, -1), $m = !1) }

function bn() { if (!$m)
        if (Zm)
            if (!fd(Gk, !1).length || confirm(W("Games_breakLink"))) S(Mm, 0).yf(!1), Zm = !1;
            else { var a = Fk();
                $m = !0;
                Y.xc.setValue(a, -1);
                $m = !1 } else a = Y.xc.getValue(), a.trim() || (Gk.clear(), S(Mm, 0).yf(!0), Zm = !0) }
window.addEventListener("load", function() {
    function a() { var a = c.offsetTop;
        e.style.top = a - window.pageYOffset + "px";
        e.style.left = b ? "10px" : "420px";
        e.style.width = window.innerWidth - 440 + "px";
        a = Math.max(0, a + e.offsetHeight - window.pageYOffset) + "px"; for (var f = b ? "10px" : "420px", h = window.innerWidth - 440 + "px", l = 0, m; m = k[l]; l++) m.style.top = a, m.style.left = f, m.style.width = h } document.body.innerHTML = Nm();
    Y.I();
    nm();
    am("runButton", zm);
    am("resetButton", Bm);
    am("docsButton", xm);
    am("closeDocs", ym);
    setTimeout(Y.gx, 1);
    setTimeout(Y.hx,
        1);
    Mm = new Wm;
    Mm.Fd(document.getElementById("tabbar"));
    var b = -1 != Ol.indexOf(Pl),
        c = document.getElementById("visualization"),
        e = document.getElementById("tabarea"),
        f = document.getElementById("blockly"),
        h = document.getElementById("editor"),
        k = [f, h];
    window.addEventListener("scroll", function() { a(null);
        x.Eh(Gk) });
    window.addEventListener("resize", a);
    a(null);
    ec(Mm, "select", function(a) { a = a.target.getParent();
        an(di(a, a.Nd)) });
    Y.xc = window.ace.edit("editor");
    Y.xc.setTheme("ace/theme/chrome");
    Y.xc.setShowPrintMargin(!1);
    f = Y.xc.getSession();
    f.setMode("ace/mode/javascript");
    f.setTabSize(2);
    f.setUseSoftTabs(!0);
    f.on("change", bn);
    Y.xc.setValue("cannon(0, 70);", -1);
    f = document.getElementById("toolbox");
    Gk = x.fg("blockly", { media: "third-party/blockly/media/", rtl: !1, toolbox: f, trashcan: !0, zoom: { controls: !0, wheel: !0 } });
    Lk("scan,cannon,drive,swim,stop,speed,damage,health,loc_x,getX,loc_y,getY,");
    f = x.F.Xc('<xml>  <block type="pond_cannon" x="70" y="70">    <value name="DEGREE">      <shadow type="pond_math_number">        <field name="NUM">0</field>      </shadow>    </value>    <value name="RANGE">      <shadow type="pond_math_number">        <field name="NUM">70</field>      </shadow>    </value>  </block></xml>');
    Gk.clear();
    x.F.ae(f, Gk);
    Gk.In();
    f = [{ start: new D(20, 80), kc: 0, name: "Pond_myName", code: null }, { start: new D(80, 20), kc: 0, name: "Pond_rookName", code: "playerRook" }, { start: new D(20, 20), kc: 0, name: "Pond_counterName", code: "playerCounter" }, { start: new D(80, 80), kc: 0, name: "Pond_sniperName", code: "playerSniper" }];
    for (var l = 0; h = f[l]; l++) { var m = h.code ? document.getElementById(h.code).textContent : function() { return Zm ? Fk() : Y.xc.getValue() },
            n = W(h.name);
        Z.iv(n, m, h.start, h.kc) } Z.reset();
    pm();
    an(0);
    $m = !1
});