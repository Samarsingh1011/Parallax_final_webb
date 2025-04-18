function ownKeys(t, e) {
    var r, a = Object.keys(t);
    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
    })), a.push.apply(a, r)), a
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(r), !0).forEach(function(e) {
            _defineProperty(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function() {
    "use strict";
    var e, t, r, a, n;
    (function() {
        var n, o = document.querySelectorAll(".masonry-grid");
        if (null !== o)
            for (var e = 0; e < o.length; e++) {
                var t = function(e) {
                    n = new Shuffle(o[e], {
                        itemSelector: ".masonry-grid-item",
                        sizer: ".masonry-grid-item"
                    }), imagesLoaded(o[e]).on("progress", function() {
                        n.layout()
                    });
                    var a = o[e].closest(".masonry-filterable");
                    if (null === a) return {
                        v: void 0
                    };
                    for (var t = a.querySelectorAll(".masonry-filters [data-group]"), r = 0; r < t.length; r++) t[r].addEventListener("click", function(e) {
                        var t = a.querySelector(".masonry-filters .active"),
                            r = this.dataset.group;
                        null !== t && t.classList.remove("active"), this.classList.add("active"), n.filter(r), e.preventDefault()
                    })
                }(e);
                if ("object" === _typeof(t)) return t.v
            }
    })(), null != (r = document.querySelector(".navbar-sticky")) && (e = r.classList, t = r.offsetHeight, e.contains("navbar-floating") && e.contains("navbar-dark") ? window.addEventListener("scroll", function(e) {
            500 < e.currentTarget.pageYOffset ? (r.classList.remove("navbar-dark"), r.classList.add("navbar-light", "navbar-stuck")) : (r.classList.remove("navbar-light", "navbar-stuck"), r.classList.add("navbar-dark"))
        }) : e.contains("navbar-floating") && e.contains("navbar-light") ? window.addEventListener("scroll", function(e) {
            500 < e.currentTarget.pageYOffset ? r.classList.add("navbar-stuck") : r.classList.remove("navbar-stuck")
        }) : window.addEventListener("scroll", function(e) {
            500 < e.currentTarget.pageYOffset ? (document.body.style.paddingTop = t + "px", r.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "", r.classList.remove("navbar-stuck"))
        })),
        function() {
            var e = document.querySelectorAll('[data-bs-toggle="search"]'),
                t = document.querySelector(".navbar-search");
            if (null !== t)
                for (var r = t.querySelector(".navbar-search-field"), a = 0; a < e.length; a++) e[a].addEventListener("click", function(e) {
                    t.classList.toggle("show"), r.focus(), e.preventDefault()
                })
        }(),
        function() {
            for (var r = document.querySelectorAll(".password-toggle"), e = 0; e < r.length; e++) ! function(e) {
                var t = r[e].querySelector(".form-control");
                r[e].querySelector(".password-toggle-btn").addEventListener("click", function(e) {
                    "checkbox" === e.target.type && (e.target.checked ? t.type = "text" : t.type = "password")
                }, !1)
            }(e)
        }(),
        function() {
            for (var t = document.querySelectorAll(".file-drop-area"), e = 0; e < t.length; e++) ! function(e) {
                var a = t[e].querySelector(".file-drop-input"),
                    n = t[e].querySelector(".file-drop-message"),
                    o = t[e].querySelector(".file-drop-icon");
                t[e].querySelector(".file-drop-btn").addEventListener("click", function() {
                    a.click()
                }), a.addEventListener("change", function() {
                    var e;
                    a.files && a.files[0] && ((e = new FileReader).onload = function(e) {
                        var t, e = e.target.result,
                            r = a.files[0].name;
                        n.innerHTML = r, e.startsWith("data:image") ? ((t = new Image).src = e, t.onload = function() {
                            o.className = "file-drop-preview img-thumbnail rounded", o.innerHTML = '<img src="' + t.src + '" alt="' + r + '">'
                        }) : e.startsWith("data:video") ? (o.innerHTML = "", o.className = "", o.className = "file-drop-icon ai-film") : (o.innerHTML = "", o.className = "", o.className = "file-drop-icon ai-file-text")
                    }, e.readAsDataURL(a.files[0]))
                })
            }(e)
        }(), window.addEventListener("load", function() {
            var e = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(e, function(t) {
                t.addEventListener("submit", function(e) {
                    !1 === t.checkValidity() && (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated")
                }, !1)
            })
        }, !1),
        function() {
            var e = document.querySelectorAll("[data-format]");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) {
                    var r = e[t].dataset.format,
                        a = e[t].dataset.blocks,
                        n = e[t].dataset.delimiter,
                        a = void 0 !== a ? a.split(" ").map(Number) : "",
                        n = void 0 !== n ? n : " ";
                    switch (r) {
                        case "card":
                            new Cleave(e[t], {
                                creditCard: !0
                            });
                            break;
                        case "cvc":
                            new Cleave(e[t], {
                                numeral: !0,
                                numeralIntegerScale: 3
                            });
                            break;
                        case "date":
                            new Cleave(e[t], {
                                date: !0,
                                datePattern: ["m", "y"]
                            });
                            break;
                        case "date-long":
                            new Cleave(e[t], {
                                date: !0,
                                delimiter: "-",
                                datePattern: ["Y", "m", "d"]
                            });
                            break;
                        case "time":
                            new Cleave(e[t], {
                                time: !0,
                                datePattern: ["h", "m"]
                            });
                            break;
                        case "custom":
                            new Cleave(e[t], {
                                delimiter: n,
                                blocks: a
                            });
                            break;
                        default:
                            console.error("Sorry, your format " + r + " is not available. You can add it to the theme object method - inputFormatter in src/js/theme.js or choose one from the list of available formats: card, cvc, date, date-long, time or custom.")
                    }
                }
        }(), new SmoothScroll("[data-scroll]", {
            speed: 800,
            speedAsDuration: !0,
            offset: 40,
            header: "[data-scroll-header]",
            updateURL: !1
        }), null != (n = document.querySelector(".btn-scroll-top")) && (a = parseInt(600, 10), window.addEventListener("scroll", function(e) {
            e.currentTarget.pageYOffset > a ? n.classList.add("show") : n.classList.remove("show")
        })), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
            return new bootstrap.Tooltip(e)
        }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e) {
            return new bootstrap.Popover(e)
        }), [].slice.call(document.querySelectorAll(".toast")).map(function(e) {
            return new bootstrap.Toast(e)
        }),
        function() {
            var e = document.querySelectorAll(".gallery");
            if (e.length)
                for (var t = 0; t < e.length; t++) lightGallery(e[t], {
                    selector: ".gallery-item",
                    download: !1,
                    videojs: !0,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "766df4"
                    }
                })
        }(),
        function() {
            var l = document.querySelectorAll(".subscription-form");
            if (null !== l) {
                for (var e = 0; e < l.length; e++) ! function(e) {
                    var t = l[e].querySelector('button[type="submit"]'),
                        r = t.innerHTML,
                        a = l[e].querySelector(".form-control"),
                        n = l[e].querySelector(".subscription-form-antispam"),
                        o = l[e].querySelector(".subscription-status");
                    l[e].addEventListener("submit", function(e) {
                        e && e.preventDefault(), "" === n.value && s(this, t, a, r, o)
                    })
                }(e);
                var s = function(e, t, r, a, n) {
                    t.innerHTML = "Sending...";
                    var o = e.action.replace("/post?", "/post-json?"),
                        e = "&" + r.name + "=" + encodeURIComponent(r.value),
                        l = document.createElement("script");
                    l.src = o + "&c=callback" + e, document.body.appendChild(l);
                    var s = "callback";
                    window[s] = function(e) {
                        delete window[s], document.body.removeChild(l), t.innerHTML = a, "success" == e.result ? (r.classList.remove("is-invalid"), r.classList.add("is-valid"), n.classList.remove("status-error"), n.classList.add("status-success"), n.innerHTML = e.msg, setTimeout(function() {
                            r.classList.remove("is-valid"), n.innerHTML = "", n.classList.remove("status-success")
                        }, 6e3)) : (r.classList.remove("is-valid"), r.classList.add("is-invalid"), n.classList.remove("status-success"), n.classList.add("status-error"), n.innerHTML = e.msg.substring(4), setTimeout(function() {
                            r.classList.remove("is-invalid"), n.innerHTML = "", n.classList.remove("status-error")
                        }, 6e3))
                    }
                }
            }
        }(),
        function() {
            for (var e = document.querySelectorAll("[data-label]"), t = 0; t < e.length; t++) e[t].addEventListener("change", function() {
                var e = this.dataset.label;
                try {
                    document.getElementById(e).textContent = this.value
                } catch (e) {
                    e.message = "Cannot set property 'textContent' of null", console.error("Make sure the [data-label] matches with the id of the target element you want to change text of!")
                }
            })
        }(),
        function(e, t, r) {
            for (var a = 0; a < e.length; a++) t.call(r, a, e[a])
        }(document.querySelectorAll(".tns-carousel-wrapper .tns-carousel-inner"), function(e, t) {
            var r = {
                container: t,
                controlsText: ['<i class="ai-arrow-left"></i>', '<i class="ai-arrow-right"></i>'],
                navPosition: "top",
                controlsPosition: "top",
                mouseDrag: !0,
                speed: 600,
                autoplayHoverPause: !0,
                autoplayButtonOutput: !1
            };
            null != t.dataset.carouselOptions && (n = JSON.parse(t.dataset.carouselOptions));
            var r = _objectSpread(_objectSpread({}, r), n),
                a = tns(r),
                n = t.closest(".tns-carousel-wrapper"),
                o = n.querySelectorAll(".tns-item"),
                l = n.querySelector(".tns-carousel-pager");
            if (null != l) {
                for (var s = l.querySelectorAll("[data-goto]"), c = 0; c < s.length; c++) s[c].addEventListener("click", function(e) {
                    a.goTo(this.dataset.goto - 1), e.preventDefault()
                });
                a.events.on("indexChanged", function() {
                    for (var e = a.getInfo(), t = 0; t < s.length; t++) s[t].classList.remove("active");
                    l.querySelector('[data-goto="' + e.displayIndex + '"]').classList.add("active")
                })
            }
            var i, d, u = n.querySelector(".tns-carousel-label");
            null != u && a.events.on("indexChanged", function() {
                var e = a.getInfo(),
                    e = o[e.index].dataset.carouselLabel;
                u.innerHTML = e
            }), null !== n.querySelector(".tns-carousel-progress") && (r = a.getInfo(), i = n.querySelector(".tns-current-slide"), t = n.querySelector(".tns-total-slides"), d = n.querySelector(".tns-carousel-progress .progress-bar"), i.innerHTML = r.displayIndex, t.innerHTML = r.slideCount, d.style.width = r.displayIndex / r.slideCount * 100 + "%", a.events.on("indexChanged", function() {
                var e = a.getInfo();
                i.innerHTML = e.displayIndex, d.style.width = e.displayIndex / e.slideCount * 100 + "%"
            }))
        }),
        function() {
            function o(e, t) {
                return e + t
            }
            var e = document.querySelectorAll("[data-line-chart]"),
                t = document.querySelectorAll("[data-bar-chart]"),
                l = document.querySelectorAll("[data-pie-chart]");
            if (0 !== e.length || 0 !== t.length || 0 !== l.length) {
                var s, r = document.head || document.getElementsByTagName("head")[0],
                    c = document.createElement("style");
                r.appendChild(c);
                for (var a = 0; a < e.length; a++) {
                    var n, i = JSON.parse(e[a].dataset.lineChart),
                        d = null != e[a].dataset.options ? JSON.parse(e[a].dataset.options) : "",
                        u = e[a].dataset.seriesColor;
                    if (e[a].classList.add("line-chart-" + a), null != u) {
                        n = JSON.parse(u);
                        for (var f = 0; f < n.colors.length; f++) s = "\n          .line-chart-".concat(a, " .ct-series:nth-child(").concat(f + 1, ") .ct-line,\n          .line-chart-").concat(a, " .ct-series:nth-child(").concat(f + 1, ") .ct-point {\n            stroke: ").concat(n.colors[f], " !important;\n          }\n        "), c.appendChild(document.createTextNode(s))
                    }
                    new Chartist.Line(e[a], i, d)
                }
                for (var v = 0; v < t.length; v++) {
                    var p, m = JSON.parse(t[v].dataset.barChart),
                        h = null != t[v].dataset.options ? JSON.parse(t[v].dataset.options) : "",
                        g = t[v].dataset.seriesColor;
                    if (t[v].classList.add("bar-chart-" + v), null != g) {
                        p = JSON.parse(g);
                        for (var y = 0; y < p.colors.length; y++) s = "\n        .bar-chart-".concat(v, " .ct-series:nth-child(").concat(y + 1, ") .ct-bar {\n            stroke: ").concat(p.colors[y], " !important;\n          }\n        "), c.appendChild(document.createTextNode(s))
                    }
                    new Chartist.Bar(t[v], m, h)
                }
                for (var b = 0; b < l.length; b++) ! function(e) {
                    var t, r = JSON.parse(l[e].dataset.pieChart),
                        a = l[e].dataset.seriesColor;
                    if (l[e].classList.add("cz-pie-chart-" + e), null != a) {
                        t = JSON.parse(a);
                        for (var n = 0; n < t.colors.length; n++) s = "\n        .cz-pie-chart-".concat(e, " .ct-series:nth-child(").concat(n + 1, ") .ct-slice-pie {\n            fill: ").concat(t.colors[n], " !important;\n          }\n        "), c.appendChild(document.createTextNode(s))
                    }
                    new Chartist.Pie(l[e], r, {
                        labelInterpolationFnc: function(e) {
                            return Math.round(e / r.series.reduce(o) * 100) + "%"
                        }
                    })
                }(b)
            }
        }(),
        function() {
            var d = document.querySelectorAll(".countdown");
            if (null != d)
                for (var e = 0; e < d.length; e++) {
                    var t = function(e) {
                        var t, r, a, n, o = d[e].dataset.countdown,
                            l = d[e].querySelector(".countdown-days .countdown-value"),
                            s = d[e].querySelector(".countdown-hours .countdown-value"),
                            c = d[e].querySelector(".countdown-minutes .countdown-value"),
                            i = d[e].querySelector(".countdown-seconds .countdown-value"),
                            o = new Date(o).getTime();
                        if (isNaN(o)) return {
                            v: void 0
                        };
                        setInterval(function() {
                            var e = (new Date).getTime(),
                                e = parseInt((o - e) / 1e3);
                            0 <= e && (t = parseInt(e / 86400), e %= 86400, r = parseInt(e / 3600), e %= 3600, a = parseInt(e / 60), e %= 60, n = parseInt(e), null != l && (l.innerHTML = parseInt(t, 10)), null != s && (s.innerHTML = r < 10 ? "0" + r : r), null != c && (c.innerHTML = a < 10 ? "0" + a : a), null != i && (i.innerHTML = n < 10 ? "0" + n : n))
                        }, 1e3)
                    }(e);
                    if ("object" === _typeof(t)) return t.v
                }
        }(),
        function() {
            var e = document.querySelectorAll(".date-picker");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) {
                    var r = void 0;
                    null != e[t].dataset.datepickerOptions && (r = JSON.parse(e[t].dataset.datepickerOptions));
                    var a = e[t].classList.contains("date-range") ? {
                            plugins: [new rangePlugin({
                                input: e[t].dataset.linkedInput
                            })]
                        } : "{}",
                        r = _objectSpread(_objectSpread(_objectSpread({}, {
                            disableMobile: "true"
                        }), a), r);
                    flatpickr(e[t], r)
                }
        }(),
        function() {
            for (var e = document.querySelectorAll('[data-bs-toggle="radioTab"]'), t = 0; t < e.length; t++) e[t].addEventListener("click", function() {
                var e = this.dataset.bsTarget;
                document.querySelector(this.dataset.bsParent).querySelectorAll(".radio-tab-pane").forEach(function(e) {
                    e.classList.remove("active")
                }), document.querySelector(e).classList.add("active")
            })
        }(),
        function() {
            for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t])
        }(),
        function() {
            var o = document.querySelectorAll(".pricing-wrap");
            if (null !== o)
                for (var e = 0; e < o.length; e++) ! function(e) {
                    function t() {
                        if (a.checked) {
                            r.parentNode.classList.add("price-switch-on");
                            for (var e = 0; e < n.length; e++) n[e].innerHTML = n[e].dataset.newPrice
                        } else {
                            r.parentNode.classList.remove("price-switch-on");
                            for (var t = 0; t < n.length; t++) n[t].innerHTML = n[t].dataset.currentPrice
                        }
                    }
                    var r = o[e].querySelector(".form-switch"),
                        a = r.querySelector('input[type="checkbox"]'),
                        n = o[e].querySelectorAll(".price");
                    t(), a.addEventListener("change", function() {
                        t()
                    })
                }(e)
        }(),
        function() {
            var o = document.querySelectorAll(".product-gallery");
            if (o.length)
                for (var e = 0; e < o.length; e++) ! function(r) {
                    for (var a = o[r].querySelectorAll(".product-gallery-thumblist-item"), n = o[r].querySelectorAll(".product-gallery-preview-item"), e = 0; e < a.length; e++) a[e].addEventListener("click", t);

                    function t(e) {
                        e.preventDefault();
                        for (var t = 0; t < a.length; t++) n[t].classList.remove("active"), a[t].classList.remove("active");
                        this.classList.add("active"), o[r].querySelector(this.getAttribute("href")).classList.add("active")
                    }
                }(e)
        }(),
        function() {
            var e = document.querySelectorAll(".btn-video");
            if (e.length)
                for (var t = 0; t < e.length; t++) lightGallery(e[t], {
                    selector: "this",
                    download: !1,
                    videojs: !0,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "766df4"
                    }
                })
        }(),
        function() {
            for (var n = document.querySelectorAll(".range-slider"), e = 0; e < n.length; e++) ! function(e) {
                var t = n[e].querySelector(".range-slider-ui"),
                    r = n[e].querySelector(".range-slider-value-min"),
                    a = n[e].querySelector(".range-slider-value-max"),
                    e = {
                        dataStartMin: parseInt(n[e].dataset.startMin, 10),
                        dataStartMax: parseInt(n[e].dataset.startMax, 10),
                        dataMin: parseInt(n[e].dataset.min, 10),
                        dataMax: parseInt(n[e].dataset.max, 10),
                        dataStep: parseInt(n[e].dataset.step, 10)
                    };
                noUiSlider.create(t, {
                    start: [e.dataStartMin, e.dataStartMax],
                    connect: !0,
                    step: e.dataStep,
                    pips: {
                        mode: "count",
                        values: 5
                    },
                    tooltips: !0,
                    range: {
                        min: e.dataMin,
                        max: e.dataMax
                    },
                    format: {
                        to: function(e) {
                            return "$" + parseInt(e, 10)
                        },
                        from: function(e) {
                            return Number(e)
                        }
                    }
                }), t.noUiSlider.on("update", function(e, t) {
                    e = (e = e[t]).replace(/\D/g, "");
                    t ? a.value = Math.round(e) : r.value = Math.round(e)
                }), r.addEventListener("change", function() {
                    t.noUiSlider.set([this.value, null])
                }), a.addEventListener("change", function() {
                    t.noUiSlider.set([null, this.value])
                })
            }(e)
        }(),
        function() {
            var e = document.querySelectorAll("[data-view]");
            if (0 < e.length)
                for (var t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {
                    var t = this.dataset.view;
                    r(t), "#" === this.getAttribute("href") && e.preventDefault()
                });
            var r = function(e) {
                for (var e = document.querySelector(e), t = e.parentNode.querySelectorAll(".view"), r = 0; r < t.length; r++) t[r].classList.remove("show");
                e.classList.add("show")
            }
        }(),
        function() {
            var e = document.querySelectorAll("[data-checkbox-toggle-class]");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) e[t].addEventListener("change", function() {
                    var e = document.querySelector(this.dataset.bsTarget),
                        t = this.dataset.checkboxToggleClass;
                    this.checked ? e.classList.add(t) : e.classList.remove(t)
                })
        }(),
        function() {
            var e = document.querySelectorAll("[data-master-checkbox-for]");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) e[t].addEventListener("change", function() {
                    var e = document.querySelector(this.dataset.masterCheckboxFor).querySelectorAll('input[type="checkbox"]');
                    if (this.checked)
                        for (var t = 0; t < e.length; t++) e[t].checked = !0, e[t].dataset.checkboxToggleClass && document.querySelector(e[t].dataset.bsTarget).classList.add(e[t].dataset.checkboxToggleClass);
                    else
                        for (var r = 0; r < e.length; r++) e[r].checked = !1, e[r].dataset.checkboxToggleClass && document.querySelector(e[r].dataset.bsTarget).classList.remove(e[r].dataset.checkboxToggleClass)
                })
        }()
}();
