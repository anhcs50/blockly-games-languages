function f(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.w = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.u = function(a, c, Q) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
    }
};
var g = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0)
} : function(a, b) {
    if ("string" == typeof a) return "string" == typeof b && 1 == b.length ? a.indexOf(b, 0) : -1;
    for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b) return c;
    return -1
};

function h(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function k(a, b) {
    var c = a.className;
    c = "string" == typeof c && c.match(/\S+/g) || [];
    for (var d = h(arguments, 1), e = 0; e < d.length; e++) 0 <= g(c, d[e]) || c.push(d[e]);
    c = c.join(" ");
    a.className = c
};
var l = {},
    m = {
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
    n = "ace ar fa he mzn ps".split(" "),
    p = window.BlocklyGamesLang,
    q = window.BlocklyGamesLanguages,
    r = !!window.location.pathname.match(/\.html$/),
    t = Number,
    u, v = window.location.search.match(/[?&]level=([^&]+)/);
u = v ? decodeURIComponent(v[1].replace(/\+/g, "%20")) : "NaN";
t(u);

function w() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != n.indexOf(p) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", p);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < q.length; c++) {
            var d = q[c];
            b.push([m[d], d])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var e = b[c];
            d = e[1];
            e = new Option(e[0], d);
            d == p && (e.selected = !0);
            a.options.add(e)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (c =
        1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!x(l.s, c), a && b && k(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(y, 1)
}

function z() {
    var a = document.getElementById("languageMenu");
    a = encodeURIComponent(a.options[a.selectedIndex].value);
    var b = window.location.search;
    b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
    window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
}

function x(a, b) {
    try {
        var c = window.localStorage[a + b]
    } catch (d) {}
    return c
}

function A() {
    var a = "clearData",
        b = B;
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function y() {
    if (!r) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function(b) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
var C = {
    v: !0
};

function D() {
    throw Error("Do not instantiate directly");
}
D.prototype.i = null;
D.prototype.toString = function() {
    return this.content
};

function E(a) {
    if (null != a) switch (a.i) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function F() {
    D.call(this)
}
f(F, D);
F.prototype.o = C;

function G(a) {
    return null != a && a.o === C ? a : H(String(String(a)).replace(I, J), E(a))
}
var H = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return function(a, d) {
            var c = new b;
            c.content = String(a);
            void 0 !== d && (c.i = d);
            return c
        }
    }(F),
    K = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

function J(a) {
    return K[a]
}
var I = /[\x00\x22\x26\x27\x3c\x3e]/g;

function L() {
    var a = {
        lang: p,
        j: r,
        m: -1 != n.indexOf(p)
    };
    return '<div style="display: none"><span id="title">Blockly Games</span><span id="Index_clear">Delete all your solutions?</span></div><div id="header"><img id="banner" src="index/Logo.png" height="120" alt="Logo"><div id="subtitle">STEAM Games Challenges - Tranh tài STEAM với MISers! &nbsp;' + '</div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-80,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x=80 y=60><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' +
        (a.m ? 'transform="translate(100) scale(-1, 1)"' : "") + "/></svg>" + M({
            g: "puzzle",
            x: 10,
            y: 15,
            h: "Ghép hình"
        }, a) + M({
            g: "maze",
            x: 16,
            y: 45,
            h: "Mê cung lạc lối"
        }, a) + M({
            g: "bird",
            x: 26,
            y: 69,
            h: "Chim tìm mồi"
        }, a) + M({
            g: "turtle",
            x: 41,
            y: 80,
            h: "Rùa vẽ hình"
        }, a) + M({
            g: "movie",
            x: 55,
            y: 61,
            h: "Làm phim"
        }, a) + M({
            g: "music",
            x: 69,
            y: 43,
            h: "Nghệ sĩ"
        }, a) + M({
            g: "pond-tutor",
            x: 83,
            y: 55,
            h: "Cách đại chiến"
        }, a) + M({
            g: "pond-duck",
            x: 90,
            y: 85,
            h: "Đại chiến"
        }, a) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">Bạn muốn bắt đầu lại?<button class="secondary" id="clearData">Bấm vào đây</span></button></p>'
}

function M(a, b) {
    return '<svg height="150" width="160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (b.m ? 'x="' + G(100 - a.x) + '%"' : 'x="' + G(a.x) + '%"') + 'y="' + G(a.y) + '%"><path d="M 41.11,98.89 A 55 55 0 1 1 118.89,98.89" class="gaugeBack" id="back-' + G(a.g) + '" /><g class="icon" id="icon-' + G(a.g) + '"><circle cx=80 cy=60 r=50 class="iconBack" /><image xlink:href="index/' + G(a.g) + '.png" height="100" width="100" x=30 y=10 />' + (b.j ? '<a id="link-' + G(a.g) + '" xlink:href="' +
        G(a.g) + ".html?lang=" + G(b.lang) + '">' : '<a xlink:href="' + G(a.g) + "?lang=" + G(b.lang) + '">') + '<circle cx=80 cy=60 r=50 class="iconBorder" /><path d="M 21.11,98.89 A 55 55 0 1 1 21.11,98.89" class="gaugeFront" id="gauge-' + G(a.g) + '" /><text x="80" y="135">' + G(a.h) + "</text></a></g></svg>"
};
var N = "puzzle maze bird turtle movie music pond-tutor pond-duck".split(" ");
window.addEventListener("load", function() {
    function a(a, b) {
        return function() {
            O(a, 0, b)
        }
    }
    document.body.innerHTML = L();
    w();
    document.getElementById("languageMenu").addEventListener("change", z, !0);
    for (var b = !1, c = [], d = 0; d < N.length; d++) {
        c[d] = 0;
        for (var e = 1; 10 >= e; e++) x(N[d], e) && (b = !0, c[d]++)
    }
    b && (document.getElementById("clearDataPara").style.visibility = "visible", A());
    for (d = 0; d < c.length; d++) b = N[d], (e = c[d] / (0 == d ? 1 : 10) * 270) ? setTimeout(a(b, e), 1500) : (b = document.getElementById("gauge-" + b), b.parentNode.removeChild(b))
}, !1);

function O(a, b, c) {
    b += 4;
    P(a, Math.min(b, c));
    b < c && setTimeout(function() {
        O(a, b, c)
    }, 10)
}

function P(a, b) {
    var c = (b - 45) / 180 * Math.PI,
        d = 80 - 52.75 * Math.cos(c);
    c = 60 - 52.75 * Math.sin(c);
    b = 180 < b ? 1 : 0;
    document.getElementById("gauge-" + a).setAttribute("d", ["M 42.7,97.3 A", 52.75, 52.75, 0, b, 1, d, c].join(" "))
}

function B() {
    var a = confirm,
        b;
    (b = document.getElementById("Index_clear")) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    if (a(null === b ? "[Unknown message: Index_clear]" : b)) {
        for (a = 0; a < N.length; a++)
            for (b = 1; 10 >= b; b++) delete window.localStorage[N[a] + b];
        location.reload()
    }
};