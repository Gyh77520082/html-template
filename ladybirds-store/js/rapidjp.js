/*jshint smarttabs:true, curly:true, forin:true*/
"undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.EventTypes = function() {
	function e(e, t, n) {
		this.yqlid = e, this.eventName = t, this.spaceidPrefix = n
	}
	var t = "richview",
		n = "contentmodification";
	e.prototype = {
		getYQLID: function() {
			return this.yqlid
		},
		getEventName: function() {
			return this.eventName
		}
	};
	var i = {
		pageview: new e("pv", "pageview", ""),
		simple: new e("lv", "event", "P"),
		linkview: new e("lv", "linkview", "P"),
		richview: new e(t, t, "R"),
		contentmodification: new e(t, n, "R"),
		dwell: new e("lv", "dwell", "D")
	};
	return {
		getEventByName: function(e) {
			return i[e]
		}
	}
}(), YAHOO.i13n.Rapid = function(e) {
	function t() {}

	function n(e) {
		this.map = {}, this.count = 0, e && this.absorb(e)
	}

	function r() {
		this.map = {}, this.count = 0
	}

	function o(e, t) {
		if (!e) return null;
		null === t && (t = !1);
		var n = new r,
			i = G.getAttribute(e, G.data_action_outcome);
		i && n.set("outcm", i);
		var o = G.getAttribute(e, "data-ylk");
		if (null === o || 0 === o.length) return n;
		for (var a = o.split(G.ylk_pair_delim), l = 0, c = a.length; c > l; l++) {
			var s = a[l].split(G.ylk_kv_delim);
			if (2 === s.length) {
				var u = s[0],
					d = s[1];
				null !== u && "" !== u && null !== d && (d.length > G.MAX_VALUE_LENGTH && (d = d.substring(0, G.MAX_VALUE_LENGTH)),
					u.length <= 8 && d.length <= G.MAX_VALUE_LENGTH && ("_p" !== u || t) && n.set(u, d))
			}
		}
		return n
	}

	function a(e, t, n) {
		return t > e ? t : e > n ? n : e
	}

	function l(t, n) {
		q.set("A_sid", YAHOO.i13n.A_SID || G.rand()), q.set("_w", G.rmProto(n).substring(0, G.MAX_VALUE_LENGTH)), t ? q.absorb(
			t) : e.keys && q.absorb(e.keys)
	}

	function c(e) {
		var t = YAHOO.i13n,
			n = YAHOO.i13n.TEST_ID || e.test_id,
			i = e.location || document.location.href;
		l(e.keys, i), n && (n = G.norm("" + n));
		var r = 300,
			o = 700,
			c = 1e4,
			u = e.override || {},
			d = {
				override: u,
				version: "3.25.1",
				rapidjp_version: "1.0.0",
				keys: q,
				referrer: e.referrer,
				getReferrer: function() {
					return G.norm(G.clref("undefined" != typeof this.referrer ? this.referrer : document.referrer))
				},
				spaceid: G.norm(u.spaceid || YAHOO.i13n.SPACEID || e.spaceid),
				yrid: G.norm(e.yrid || ""),
				oo: e.oo ? "1" : "0",
				nol: e.nol ? "1" : "0",
				yql_enabled: e.yql_enabled !== !1,
				ywa: t.ywa ? s(e.ywa, t.ywa) : e.ywa,
				ywa_dpid: null,
				ywa_cf_override: t.YWA_CF_MAP || {},
				ywa_action_map: t.YWA_ACTION_MAP || {},
				ywa_outcome_map: t.YWA_OUTCOME_MAP || {},
				fing: 1 == e.use_fing,
				USE_RAPID: e.use_rapid !== !1,
				linktrack_attribut: e.lt_attr || "text",
				tracked_mods: e.tracked_mods || [],
				tracked_mods_viewability: e.tracked_mods_viewability || [],
				viewability: e.viewability || !1,
				viewability_time: e.viewability_time || 300,
				viewability_px: e.viewability_px || 50,
				lt_attr: e.lt_attr || "text",
				client_only: e.client_only,
				text_link_len: e.text_link_len || -1,
				test_id: n,
				yql_host: e.yql_host || "logql.yahoo.co.jp",
				yql_path: e.yql_path || "/v1/public/yql",
				click_timeout: e.click_timeout || c,
				compr_timeout: e.compr_timeout || o,
				compr_on: e.compr_on !== !1,
				compr_type: e.compr_type || "deflate",
				webworker_file: YAHOO.i13n.WEBWORKER_FILE || e.webworker_file || "rapidworker-1.2.js",
				nofollow_classname: e.nofollow_class || "rapidnofollow",
				no_click_listen: e.rapid_noclick_resp || "rapid-noclick-resp",
				nonanchor_track_class: e.nonanchor_track_class || "rapid-nonanchor-lt",
				anc_pos_attr: "data-rapid_p",
				anc_v9y_attr: "data-v9y",
				deb: e.debug === !0,
				ldbg: e.ldbg > 0 ? !0 : i.indexOf("yhldebug=1") > 0,
				addmod_timeout: e.addmodules_timeout || 300,
				ult_token_capture: "boolean" == typeof e.ult_token_capture ? e.ult_token_capture : !1,
				track_type: e.track_type || "data-tracktype",
				dwell_on: e.dwell_on === !0,
				async_all_clicks: e.async_all_clicks === !0,
				click_postmsg: e.click_postmsg || {},
				apv: e.apv !== !1,
				apv_time: e.apv_time || 500,
				apv_px: e.apv_px || 500,
				apv_always_send: e.apv_always_send === !0,
				ex: e.ex === !0,
				persist_asid: e.persist_asid === !0,
				track_right_click: e.track_right_click === !0,
				gen_bcookie: e.gen_bcookie === !0,
				skip_attr: e.skip_attr || "data-rapid-skip",
				parse_dom: e.parse_dom === !0,
				pageview_on_init: e.pageview_on_init !== !1,
				perf_navigationtime: e.perf_navigationtime || 0,
				perf_resourcetime: e.perf_resourcetime || 0,
				sample: e.sample || {},
				use_http: e.use_http > 0 ? !0 : i.indexOf("yhlhttp=1") > 0,
				loc: i
			};
		d.ywa_action_map[YAHOO.i13n.EventTypes.getEventByName("richview").getEventName()] = 100, !d.ywa || d.ywa.project_id &&
			0 != d.ywa.project_id && G.isNumeric(d.ywa.project_id) || (p("Invalid YWA project id: null or not numeric."), d.ywa =
				null);
		var v = 1 * d.compr_timeout;
		return G.isNum(v) ? d.compr_timeout = a(v, r, o) : d.compr_timeout = o, d.click_timeout != c && f(
				"Click timeout set to " + d.click_timeout + "ms (default 10000ms)"), e.apv_callback && "function" == typeof e.apv_callback ?
			d.apv_callback = e.apv_callback : d.apv_callback = null, d
	}

	function s(e, t) {
		var n = {};
		if (e && G.isObj(e))
			for (var i in e) G.hasOwn(e, i) && (n[i] = e[i]);
		if (t && G.isObj(t))
			for (var i in t) G.hasOwn(t, i) && (n[i] = t[i]);
		return n
	}

	function u() {
		q.set("A_sid", G.rand())
	}

	function d() {
		return "Rapid-" + z.version + "(" + (new Date).getTime() + "):"
	}

	function f(e) {
		console.warn("RAPID WARNING: " + e)
	}

	function p(e) {
		console.error("RAPID ERROR: " + e)
	}

	function v(e) {
		z.ldbg && console.log(d() + e)
	}

	function m() {
		var e = document.cookie;
		if (this.cookieMap = {}, /[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(e))
			for (var t = e.split(/;\s/g), n = null, i = null, r = null, o = 0, a = t.length; a > o; o++) {
				if (r = t[o].match(/([^=]+)=/i), r instanceof Array) try {
					n = G.dec(r[1]), i = G.dec(t[o].substring(r[1].length + 1))
				} catch (l) {
					p(l)
				} else n = G.dec(t[o]), i = n;
				("B" === n || "BX" === n || "TT" === n || z.ywa && n === "fpc" + z.ywa.project_id || "fpc" === n || "ywandp" ===
					n || 0 === n.indexOf("ywadp") || "D" === n) && (this.cookieMap[n] = i)
			}
	}

	function h() {
		if (z.ult_token_capture && YAHOO.i13n.__handled_ult_tokens__ !== !0) {
			YAHOO.i13n.__handled_ult_tokens__ = !0;
			var e = z.loc;
			if (e.match(/;_yl[a-z]{1}=/)) z.ldbg && v("Found ULT Token on URL."), J.sendGeoT(e);
			else {
				var t = new m,
					n = t.getCookieByName("D");
				n && (G.clearCookie("D", "/", ".yahoo.co.jp"), J.sendGeoT(n))
			}
		}
	}

	function _() {
		return Math.floor((new Date).valueOf() / 1e3)
	}

	function g(e, t, n) {
		var i = new Date,
			r = "";
		i.setTime(i.getTime() + 1e3 * n), r = "; expires=" + i.toGMTString();
		var o = e + "=" + t + r + "; path=/";
		document.cookie = o
	}

	function w() {
		return "" + Math.floor(4294967295 * Math.random())
	}

	function y(e) {
		var t, n = [];
		for (t in e) e[t] && n.push(t + ":" + e[t]);
		return encodeURIComponent(n.join(";"))
	}

	function b(e, t) {
		e = e || "";
		var n = decodeURIComponent(e).split(";"),
			r = {};
		for (i = 0, excl = n.length; i < excl; i++) {
			var o = n[i].split(":");
			r[o[0]] = o[1]
		}
		return t ? r[t] : r
	}

	function A() {
		function e(e) {
			var t = "cf";
			return t += 10 > e && "0" !== ("" + e).charAt(0) ? "0" + e : e
		}

		function t() {
			"undefined" != typeof window.ITTs && G.isArr(window.ITTs) && 0 !== window.ITTs.length || (window.ITTs = [{}]),
				window.ITTs[0].setFPCookies || (window.ITTs[0].setFPCookies = function() {
					var e = "fpc",
						t = new m,
						n = b(t.getCookieByName(e));
					n[z.ywa.project_id] = window.ITTs[0].FPCV, g(e, y(n), 31536e3);
					var i = t.getCookieByName(e + z.ywa.project_id);
					i && G.clearCookie(e + z.ywa.project_id)
				})
		}

		function i(e, t) {
			z.ldbg && v(e);
			var n = new Image,
				i = null;
			n.onload = n.onabort = n.onerror = function() {
				t && "function" == typeof t && (clearTimeout(i), t.call(null))
			}, n.src = e, t && "function" == typeof t && (i = setTimeout(function() {
				t.call(null)
			}, z.click_timeout)), setTimeout(function() {
				n = null
			}, 1e7)
		}

		function r(e, t) {
			for (var n in e)
				if (G.hasOwn(e, n)) {
					var i = z.ywa_cf_override[n];
					i && (t[i] = e[n])
				}
		}

		function o(n, i, o, a, l, c, s) {
			function u(e, t) {
				var n = t ? "%3B" : ";";
				return e + (o ? n + e : "")
			}
			var d = new m,
				f = d.getYWAFPC();
			d.getYWADPID(), a = a || {}, "c" !== n && t();
			var v = [G.curProto(), z.ywa.host || "logql.yahoo.co.jp", "/fpc.pl?"],
				h = z.ywa.project_id,
				g = z.ywa.document_group,
				w = {};
			z.test_id && (w[14] = z.test_id);
			var y = {};
			G.aug(y, C().getAll()), G.aug(y, c);
			var b = ["_cb=" + G.rand(), ".ys=" + z.spaceid, "a=" + h, "b=" + G.enc(z.ywa.document_name || document.title), "d=" +
				G.enc(new Date), "f=" + G.enc(z.loc), "j=" + G.sr("x"), "k=" + G.cold(), "t=" + _(), "l=true"
			];
			if (G.hasOwn(y, "A_apv") && b.push("apv=" + G.enc(y.A_apv)), s)
				for (var A in s) G.hasOwn(s, A) && b.push(A + "=" + G.enc(s[A]));
			if (g && "" !== g && b.push("c=" + G.enc(g)), z.ywa_dpid && b.push("dpid=" + z.ywa_dpid), "c" === n) {
				a.x = 12;
				var k = "12";
				o && (k = G.enc(k + ";" + o)), b.splice(0, 0, "x=" + k)
			} else "e" === n && b.push("x=" + i + (o ? ";" + o : ""));
			f && b.push("fpc=" + G.enc(f));
			var E = z.ywa.member_id;
			E && b.push("m=" + E), "" !== z.getReferrer() && b.push("e=" + G.enc(z.getReferrer())), r(y, w), "e" === n && l &&
				r(l, w);
			var T = z.ywa.cf;
			G.aug(w, T, function(e) {
				return !G.isResCF(e)
			});
			for (var O in w) G.hasOwn(w, O) && b.push(e(O) + "=" + u(G.enc(w[O]), 1));
			if (("e" === n || "c" === n) && b.push("ca=1"), "p" !== n && b.push("resp=img"), "c" === n)
				for (var S in a)
					if (G.hasOwn(a, S) && "x" !== S) {
						var L = a[S];
						L && L.length > G.MAX_VALUE_LENGTH && (L = L.substring(0, G.MAX_VALUE_LENGTH));
						try {
							L = G.enc(u(L)), L = L.replace(/'/g, "%27")
						} catch (M) {
							p(M)
						}
						b.push(e(S) + "=" + L)
					} return v.join("") + b.join("&")
		}

		function a() {
			return "rapid_if_" + G.rand()
		}

		function l(e) {
			var t = "display:none;";
			!G.isIE || 6 !== G.ieV && 7 !== G.ieV && 8 !== G.ieV ? G.sa(e, "style", t) : e.style.setAttribute("cssText", t, 0)
		}

		function c(e) {
			var t = null;
			if (G.isIE && G.ieV <= 8) {
				var n = "";
				G.isSecure() && 6 == G.ieV && (n = 'src="https://logql.yahoo.co.jp/b.html"'), t = document.createElement(
					"<iframe " + n + ' name="' + e + '"></iframe>')
			} else t = document.createElement("iframe");
			return t.name = e, t
		}

		function s() {
			setTimeout(function() {
				var e = c("");
				G.addEvent(e, "load", function() {
					G.rmBodyEl(e)
				}), G.appBodyEl(e)
			}, 1)
		}

		function u(e, t) {
			var n = null,
				i = a(),
				r = a(),
				o = "application/x-www-form-urlencoded;charset=UTF-8",
				n = c(i),
				u = null,
				f = null,
				p = null,
				m = "load",
				h = function() {
					var e = "";
					z.ldbg && (!G.isIE || G.ieV >= 10) && (u = n.contentDocument || n.contentWindow.document, e = u.body.innerHTML),
						G.rmEvent(n, m, h), setTimeout(function() {
							G.rmBodyEl(n)
						}, 0), z.ldbg && v("iframe resp: " + e), G.isIE && G.ieV <= 7 && s()
				};
			l(n), G.addEvent(n, m, h), G.appBodyEl(n), u = n.contentDocument || n.contentWindow.document, u.open(), u.close(),
				f = u.createElement("form"), l(f), f.id = r, f.method = "POST", f.action = d(t), f.target = i, G.isIE && G.ieV <=
				7 ? f.setAttribute("enctype", o) : (f.setAttribute("enctype", o), f.setAttribute("encoding", o)), p = u.createElement(
					"input"), p.name = "q", p.value = e, G.isIE && G.ieV >= 10 && (p.type = "submit"), f.appendChild(p), u.body.appendChild(
					f), u.charset = "UTF-8", f.submit()
		}

		function d(e) {
			var t = z.deb,
				n = G.rand(),
				i = [G.getProto(), z.yql_host, z.yql_path, "?yhlVer=2&yhlClient=rapid&yhlS=", z.spaceid, t === !0 ?
					"&yhlEnv=staging" : "", t === !0 || z.ldbg ? "&debug=true&diagnostics=true" : "", G.isIE && G.ieV ? "&yhlUA=ie" +
					G.ieV : "", G.isIE && 8 == G.ieV ? "&format=json" : "", "&yhlCT=2", "&yhlBTMS=", (new Date).valueOf(),
					"&yhlClientVer=", z.version, "&yhlRnd=", n, "&yhlCompressed=", e || 0, z.gen_bcookie ? "&yhlBcookie=1" : ""
				].join("");
			return z.ldbg && v(i), i
		}

		function h(e, t) {
			var n = G.getXHR(),
				i = d(t);
			n.open("POST", i, !0), n.withCredentials = !0, n.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded; charset=UTF-8"), z.ldbg && (n.onreadystatechange = function() {
				4 === n.readyState && v(n.status + ":xhr response: " + n.responseText)
			}), n.send(e)
		}

		function w(e, t, n) {
			var i = {};
			return G.isObj(e) ? (G.aug(i, e, n), i) : i
		}

		function A(e, t, n) {
			n = n || {};
			var i = {
				m: G.norm(e.moduleName),
				l: []
			};
			e.moduleYLK && (i.ylk = e.moduleYLK.getAll());
			for (var r = e.links, r = e.links, o = function(e) {
					var n = "_p" === e;
					return t && n ? !0 : "sec" !== e && !n
				}, a = 0, l = r.length; l > a; a++) !z.viewability || r[a].viewable ? i.l.push(w(r[a].data, t, o)) : z.ldbg && v(
				"Skipping not viewable link: " + r[a].data.slk);
			return i
		}

		function k(e, t, n) {
			var i = [],
				r = null;
			for (var o in e)
				if (G.hasOwn(e, o) && (r = e[o])) {
					var a = A(r, t, n);
					a.l.length > 0 ? i.push(a) : z.ldbg && v('Not capturing 0 links mod: "' + r.moduleName + '"')
				} return i
		}

		function E(e, t) {
			return e ? "pv" : t && t.event ? t.event.type.getYQLID() : "lv"
		}

		function T(e, t, n, i, r) {
			return [{
				t: E(t, r),
				s: z.spaceid,
				pp: C(t, i).getAll(),
				_ts: _(),
				lv: k(e, n, r)
			}]
		}

		function C(e, t) {
			var i = n.makeFromPP(z.keys);
			return i.absorb(t), e && i.set("A_", 1), i
		}

		function O(e, t, n) {
			var i = "select * from x where a = '" + e + "'";
			return (t ? "q=" : "") + (n ? G.enc(i) : i)
		}

		function S(e) {
			var t = {
				bp: j(),
				r: e.call(0),
				yrid: z.yrid,
				optout: z.oo,
				nol: z.nol
			};
			return G.toJSON(t)
		}

		function L(e, t, n) {
			var i = {};
			n.event && G.aug(i, n.event.data), n.pp && G.aug(i, n.pp);
			var r = S(function() {
				return T([e], t, !0, i, n)
			});
			P(r, t)
		}

		function M(e, t, n, i) {
			var r = S(function() {
				return T(e, t, !0, n, i)
			});
			P(r)
		}

		function x(e) {
			return e.identifier
		}

		function P(e) {
			function t(e, t) {
				0 === t && (e = e.replace(/'/g, "\\'")), i && v("body: " + e), G.hasCORS() ? (r = O(e, !0, !0), h(r, t)) : (r = O(
					e, 0, 0), u(r, t))
			}

			function n() {
				l || (l = !0, t(e, 0), i && v("sent in failSend"))
			}
			var i = z.ldbg,
				r = "",
				o = K[z.compr_type];
			if (z.compr_on && G.hasWorkers() && o > 1 && e.length > 2048) {
				i && v("Looking for worker:" + z.webworker_file + ", compr timeout:" + z.compr_timeout);
				try {
					var a = new Worker(z.webworker_file),
						l = !1,
						c = null,
						s = 0;
					a.onerror = function(e) {
						clearTimeout(c), n(), f(e.message), a.terminate()
					}, a.onmessage = function(r) {
						clearTimeout(c);
						var u = G.tms();
						("Decompress fail" === r.data || "Compress fail" === r.data || 0 == r.data.indexOf("error:")) && (i && v(r.data),
							n()), l || (l = !0, t(r.data, o)), i && v("Ratio (" + r.data.length + "/" + e.length + "): " + (100 * r.data.length /
							e.length).toFixed(2) + "% -> C_T: " + (u - s) + " ms (" + u + "-" + s + ")"), a.terminate()
					}, i && v("posting to worker: " + e), s = G.tms(), a.postMessage({
						type: o,
						json: e
					}), c = setTimeout(function() {
						n(), a.terminate()
					}, z.compr_timeout)
				} catch (d) {
					i && v("compression worker exception " + d), t(e, 0)
				}
			} else t(e, 0)
		}

		function N(e, t, n) {
			return G.getProto() + R + "/" + e + ["?s=" + (n ? n : z.spaceid), "t=" + G.rand() + "," + Math.random(), "_I=" + z.yrid,
				"_AO=" + z.oo, "_NOL=" + z.nol, "_R=" + G.enc(z.getReferrer()), ("c" === e ? "_K=" : "_P=") + D(t)
			].join("&")
		}

		function D(e) {
			var t = new n(j(!1));
			return t.absorb(z.keys.getAll()), t.set("_ts", _()), e && (e instanceof n ? t.absorb(e.getAll()) : p(
				"Internal error in buildGeoPP: not PP type")), z.version + "%05" + t.ser()
		}

		function I(e) {
			var t = [N("c") + "&_C=" + G.ser(e.data)];
			return t.join("&")
		}

		function V(e, t) {
			var n = e[t];
			return n && G.isNum(n) && n >= 0 ? n : null
		}

		function H(e) {
			var t = G.getAttribute(e, G.DATA_ACTION),
				n = G.getAttribute(e, G.data_action_outcome);
			return null !== t ? V(z.ywa_action_map, t) : null !== n ? V(z.ywa_outcome_map, n) : null
		}
		var R = YAHOO.i13n.beacon_server || "logql.yahoo.co.jp",
			j = function(e) {
				var t = {
						_pl: 1,
						A_v: z.version,
						A_jpv: z.rapidjp_version
					},
					n = z.getReferrer();
				n && e !== !1 && (t._R = n.substring(0, G.MAX_VALUE_LENGTH)), z.test_id && (t.test = z.test_id), z.ex && (t._ex =
					1), t._bt || (t._bt = "rapid");
				var i = window.location.protocol || "";
				return i = i.replace(/:$/, ""), t.A_pr = i, t
			},
			Y = function() {
				var e = null,
					t = [],
					n = 0,
					i = z.addmod_timeout;
				return function(r, o, a, l) {
					clearTimeout(e);
					var c = +new Date - n;
					if (t = G.uniqConcat(t, r, x), c > i) n = +new Date, M(t, o, a, l), t = [];
					else {
						var s = i - c;
						e = setTimeout(function() {
							z.ldbg && v("queueing send in addMods"), M(t, o, a, l), t = []
						}, s)
					}
				}
			}();
		return {
			sendGeoT: function(e) {
				var t = [G.curProto(), R, "/t?", e].join("");
				i(t)
			},
			sendGeoPV: function() {
				i(N("b"))
			},
			sendRapidNoDelay: function(e, t, r, o, a) {
				if (!z.yql_enabled || a) {
					var l = null;
					r && (l = new n(r)), i(N(t ? "b" : "p", l))
				} else M(e, t, r, o)
			},
			sendRapid: function(e, t, n, i) {
				Y(e, t, n, i)
			},
			sendRefreshedContent: L,
			sendYWAEvent: function(e, t) {
				var n = null,
					r = null,
					a = e.name;
				z.ywa_action_map && a && (n = V(z.ywa_action_map, a)), null !== n && (z.ywa_outcome_map && e.outcome && (r = V(z.ywa_outcome_map,
					e.outcome)), i(o("e", n, r, null, e.data), t))
			},
			sendULTEvent: function(e, t) {
				var r = {};
				e && e.data && (r = e.data);
				var o = N("p", new n(r), t || 0);
				e.type && (o += "&_V=" + e.type.spaceidPrefix), i(o)
			},
			sendEvents: function(e, t) {
				z.USE_RAPID && this.sendULTEvent(e), z.ywa && this.sendYWAEvent(e, t)
			},
			sendClick: function(e, t) {
				var n = null,
					a = "",
					l = "",
					c = null,
					s = !1,
					u = null;
				if (z.USE_RAPID && (a = I(e)), z.ywa) {
					var d = e.data,
						f = e.targetElement,
						p = {
							18: d.sec,
							19: d.slk,
							20: d._p
						};
					"A_cl" in d && (p[130] = d.A_cl), "A_lv" in d && (p[131] = d.A_lv), c = f ? H(f) : V(z.ywa_outcome_map, e.outcome),
						z.ywa_cf_override && r(d, p), l = o("c", 0, c, p)
				}
				if (z.async_all_clicks || !e.synch) return a && i(a, t), void(l && (a ? i(l) : i(l, t)));
				if (G.prevDef(e.event), n = function() {
						if (!s) {
							if (s = !0, t) return void t.call();
							var n = e.targetElement.href;
							if (z.click_postmsg.origin) {
								var i = z.click_postmsg.window || top,
									r = z.click_postmsg.payload || {};
								r.href = n, i.postMessage(G.toJSON(r), z.click_postmsg.origin)
							} else if (G.isIE && G.ieV >= 11 || G.isEdge) "complete" !== document.readyState && history.pushState("",
								document.title), e.hasTargetTop ? top.document.location = n : document.location = n;
							else {
								var o = document.createElement("a");
								if (o.href = e.targetElement.href, o.style.display = "none", e.targetElement.target && (o.target = e.targetElement
										.target), G.appBodyEl(o), o.dispatchEvent) {
									var a = document.createEvent("MouseEvents");
									a.initEvent("click", !0, !1), o.dispatchEvent(a)
								} else o.click()
							}
						}
					}, z.USE_RAPID)
					if (z.ywa) {
						var v = new Image,
							m = new Image,
							h = 0;
						v.onload = v.onerror = v.onabort = m.onload = m.onerror = m.onabort = function() {
							2 === ++h && (clearTimeout(u), n())
						}, v.src = a, m.src = l, u = setTimeout(n, z.click_timeout), setTimeout(function() {
							v = null, m = null
						}, 1e7)
					} else i(a, n);
				else z.ywa && i(l, n)
			},
			sendYWAPV: function(e) {
				function t() {
					i[0].removeChild(a)
				}
				var n = o("p", 0, 0, 0, 0, e),
					i = document.getElementsByTagName("head"),
					r = "true";
				if (0 !== i.length) {
					var a = G.make("script", {
						defer: r,
						async: r,
						type: "text/javascript",
						src: n
					});
					G.isIE ? a.onreadystatechange = function() {
						var e = this.readyState;
						("loaded" === e || "complete" === e) && (a.onload = a.onreadystatechange = null, t())
					} : G.isWebkit ? a.addEventListener("load", t) : a.onload = t, i[0].appendChild(a)
				}
			},
			sendInternalSearch: function(e, t) {
				e = e || "", G.isNum(t) || (t = 0);
				var n = {
						isk: e,
						isr: t
					},
					r = o("e", "INTERNAL_SEARCH", null, null, null, null, n);
				i(r)
			},
			sendYWAECommerce: function(e, t) {
				var n = {},
					r = {
						PRODUCT_VIEW: 1,
						ADD_TO_CART: 1,
						CANCELLED_SALE: 1,
						PENDING_SALE: 1,
						SALE: 1
					},
					a = {
						amount: "xa",
						orderId: "oc",
						tax: "xt",
						shipping: "xs",
						discount: "xd",
						sku: "p",
						units: "q",
						amounts: "r"
					};
				if (!(e in r)) return void p("invalid YWA ecommerce action: " + e);
				for (var l in t)
					if (G.hasOwn(t, l) && l in a) {
						var c = a[l];
						n[c] = t[l]
					}
				"SALE" === e && (e = 1);
				var s = o("e", e, null, null, null, null, n);
				i(s)
			}
		}
	}

	function k(e, t, n, i, r, a, l) {
		var c = "",
			s = null,
			u = G.getCompStyle(i),
			d = l ? "hidden" !== u.getPropertyValue("visibility") && "none" !== u.getPropertyValue("display") && G.isAboveFoldArea(
				i) : !0,
			f = {
				viewable: d,
				data: {
					sec: t,
					_p: n
				}
			};
		return l && G.aug(f.data, {
			A_lv: 1
		}), a ? (f.data.slk = r || "section", s = o(i)) : (i.setAttribute(z.anc_pos_attr, n), l && i.setAttribute(z.anc_v9y_attr,
			d ? "1" : "0"), c = G.getLT(i, e), c && "" !== c ? s = o(i) : c = "_ELINK_", f.data.slk = "_"), null !== s && G.aug(
			f.data, s.getAll()), f
	}

	function E() {
		var e = {};
		return {
			addModule: function(t, n) {
				e[G.norm(t)] = n
			},
			addModules: function(e, t) {
				var n = G.isArr(e),
					i = [];
				n || G.isStr(e) && (e = new Array(e), n = !0);
				for (var r in e)
					if (G.hasOwn(e, r)) {
						var o = n ? e[r] : r,
							a = G.trim(e[r]);
						if (this.exists(o)) p('addModules() called with prev processed id:"' + o + '"');
						else {
							var l = D(a, o, t);
							l && (this.addModule(o, l), i.push(l))
						}
					} return i
			},
			getModules: function() {
				return e
			},
			getModulesWithViewability: function() {
				var t = {};
				for (var n in e) {
					var i = e[n];
					i.useViewability && (t[n] = i)
				}
				return t
			},
			reevaluateModuleViewability: function() {
				var e = this.getModulesWithViewability();
				for (var t in e) {
					var n = e[t];
					n.reevaluateViewableLinks()
				}
			},
			refreshModule: function(t, n, i, r) {
				var o = e[G.norm(t)];
				o ? o.refreshModule(t, n, i, r) : p("refreshModule called on unknown section: " + o)
			},
			removeModule: function(t) {
				var n = e[G.norm(t)];
				n && (n.removeHandlers(), delete e[t])
			},
			destroy: function() {
				for (var t in e) G.hasOwn(e, t) && this.removeModule(t);
				e = {}
			},
			exists: function(t) {
				return e[G.norm(t)]
			}
		}
	}

	function T(e, t) {
		return G.hasClass(e, "rapid_track_href") ? "href" : G.hasClass(e, "rapid_track_text") ? "text" : G.hasClass(e,
			"rapid_track_title") ? "title" : G.hasClass(e, "rapid_track_id") ? "id" : t
	}

	function C(e) {
		return "input" === e.nodeName.toLowerCase() && "submit" === G.getAttribute(e, "type")
	}

	function O(e, t) {
		var n = M(e, t);
		ee = n, n && (Z && Z.set_state("stop"), J.sendClick(n))
	}

	function S(e, t, n) {
		var i = G.getAttribute,
			r = t.target ? t.target.toLowerCase() : "_self";
		return "_self" !== r && "_top" !== r && "_parent" !== r && window.name !== r || 2 === e.which || 4 === e.button || e
			.altKey || e.ctrlKey || e.shiftKey || e.metaKey || "on" === i(t, "data-nofollow") || i(t, "href") && "javascript:" ===
			i(t, "href").substr(0, 11).toLowerCase() || G.hasClass(t, z.nofollow_classname) || G.hasClass(n, z.nofollow_classname)
	}

	function L(e, t, n, i) {
		n = n || {};
		var r = null;
		return e ? (r = YAHOO.i13n.EventTypes.getEventByName(e), n._E = r.getEventName(), t = n._E) : n._E = t || "_", i &&
			(n.outcm = i), {
				type: r,
				name: t,
				data: n,
				outcome: i
			}
	}

	function M(e, t) {
		e = e || event;
		for (var n = G.getTarget(e), i = "button", r = "input", a = "", l = !1, c = null; n && (a = n.nodeName.toLowerCase()) &&
			"a" !== a && a !== i && !C(n) && !G.hasClass(n, z.nonanchor_track_class);) n = n.parentNode;
		if (!n || G.hasClass(n, z.no_click_listen)) return 0;
		if (G.hasClass(n, z.nonanchor_track_class)) {
			c = {
				pos: 0,
				sec: t.moduleName,
				slk: "_"
			};
			var s = o(n, 1);
			s && G.aug(c, s.getAll())
		} else {
			var u = G.getAttribute(n, z.anc_pos_attr);
			if (c = t.getLinkAtPos(u), !c) return 0;
			c = c.data, a === r || a === i || S(e, n, t.moduleElement) || (l = !0)
		}
		if (!c.tar) {
			var d = G.getAttribute(n, "href");
			d && (c.tar = G.extDomain(d)), d && c.tar || (c.tar = G.extDomain(z.loc))
		}
		c.tar_uri || (n.pathname ? c.tar_uri = n.pathname.substring(0, G.MAX_VALUE_LENGTH) : c.tar_uri = "");
		var f = t.moduleYLK;
		if (f) {
			var p = f.getAll();
			G.aug(c, p, function(e) {
				return !(e in c)
			})
		}
		return c.A_xy = G.xy(e), c.A_sr = G.sr(), "contextmenu" == e.type && (c.A_cl = 3, l = !1), {
			data: c,
			event: e,
			moduleElement: t.moduleElement,
			targetElement: n,
			synch: l,
			hasTargetTop: n && n.target && "_top" === n.target.toLowerCase()
		}
	}

	function x(e, t, n, i, r) {
		var o = {};
		return G.aug(o, i), o.sec = e, o.slk = t, o._p = n, {
			data: o,
			outcome: r,
			event: null,
			moduleElement: null,
			targetElement: null,
			synch: !1,
			hasTargetTop: !1
		}
	}

	function P(e, t, n) {
		t || (t = document);
		for (var i = e.split(","), r = [], o = 0, a = i.length; a > o; o++)
			for (var l = t.getElementsByTagName(i[o]), c = 0, s = l.length; s > c; c++) {
				var u = l[c];
				(!n || n.call(0, u)) && r.push(u)
			}
		var d = r[0];
		return d ? (d.sourceIndex ? r.sort(function(e, t) {
			return e.sourceIndex - t.sourceIndex
		}) : d.compareDocumentPosition && r.sort(function(e, t) {
			return 3 - (6 & e.compareDocumentPosition(t))
		}), r) : []
	}

	function N(e, t, n, i) {
		t || (t = document);
		var r = e.split(",");
		n = n || [];
		var o = t.childNodes;
		if ("true" !== G.getAttribute(t, z.skip_attr))
			for (var a = 0, l = o.length; l > a; a++) {
				var c = o[a];
				G.isTagOfInterest(c, r) && (!i || i.call(0, c)) && n.push(c), "true" !== G.getAttribute(c, z.skip_attr) ? N(e, c,
					n, i) : "true" === G.getAttribute(c, z.skip_attr) && n.push(c)
			}
		var s = n[0];
		return s ? (s.sourceIndex ? n.sort(function(e, t) {
			return e.sourceIndex - t.sourceIndex
		}) : s.compareDocumentPosition && n.sort(function(e, t) {
			return 3 - (6 & e.compareDocumentPosition(t))
		}), n) : []
	}

	function D(e, t, n) {
		function i(t, i) {
			var r = [];
			i = i || 1;
			for (var a = 0, c = t.length; c > a; a++)
				if ("div" === t[a].tagName.toLowerCase()) {
					var d = t[a],
						f = o(d),
						v = k(p, e, 1, d, f.map.slk || s.map.slk, !0, n);
					u.push(v), r.push(v)
				} else {
					var m = t[a],
						v = k(p, e, i++, m, 0, 0, n);
					u.push(v), r.push(v)
				} if ("true" === G.getAttribute(l, z.skip_attr)) {
				var v = k(p, e, 1, d, s.map.slk, !0);
				u.push(v), r.push(v)
			}
			return r
		}

		function r(t) {
			for (var n = [], i = 0, r = t.length; r > i; i++) {
				var o = t[i],
					a = G.getAttribute(o, z.anc_pos_attr),
					l = k(p, e, a, o, 0, 0, !0);
				n.push(l)
			}
			return n
		}

		function a(e) {
			return !G.getAttribute(e, z.anc_pos_attr)
		}
		var l = document.getElementById(t),
			c = "a,button,input";
		if (!l) return f("Specified module not in DOM: " + t), null;
		var s = o(l),
			u = [],
			d = z.parse_dom ? N(c, l) : P(c, l),
			p = T(l, z.lt_attr),
			m = d.length,
			h = G.getAttribute(l, z.track_type);
		i(d);
		var _ = {
				useViewability: n,
				moduleYLK: s,
				links: u,
				moduleName: e,
				trackType: h,
				moduleElement: l,
				refreshModule: function(e, t, r, o) {
					o.isRefreshed = !0;
					var l = z.parse_dom ? N(c, G.$(e), null, a) : P(c, G.$(e), a);
					if (t === !0 || l.length > 0) {
						var s = i(l, m + 1);
						m += l.length;
						var u = l.length;
						if (n) {
							u = 0;
							for (var d = 0, f = s.length; f > d; d++) s[d].viewable && u++
						}
						if ((t === !0 || u > 0) && (z.USE_RAPID || o.event)) {
							var p = {};
							G.aug(p, this), r ? p.links = s : p.links = [], (t === !0 || r) && J.sendRefreshedContent(p, t, o)
						}
					} else G.ldbg && v("refreshModule(" + e + ") - no new links.");
					t === !0 && (z.ywa && J.sendYWAPV(o.pp), z.apv && $ && $.reInit())
				},
				reevaluateViewableLinks: function() {
					var t = u.length,
						n = P("a", this.moduleElement, function(t) {
							return function(n) {
								if (!G.getAttribute(n, z.anc_pos_attr)) {
									t++, n.setAttribute(z.anc_pos_attr, t);
									var i = k(p, e, t, n, 0, 0, !1);
									u.push(i)
								}
								var r = G.getAttribute(n, z.anc_v9y_attr);
								return "1" !== r && G.isAboveFoldArea(n) ? (n.setAttribute(z.anc_v9y_attr, "1"), !0) : !1
							}
						}(t));
					if (0 !== n.length && z.USE_RAPID) {
						var i = r(n),
							o = {};
						G.aug(o, this), o.links = i, J.sendRefreshedContent(o, !1, {})
					}
				},
				removeHandlers: function() {
					G.rmEvent(l, "click", g), z.track_right_click && G.rmEvent(l, "contextmenu", g)
				},
				getLinkAtPos: function(e) {
					return e > u.length ? null : u[e - 1]
				},
				identifier: t
			},
			g = function(e) {
				O(e, _)
			};
		return G.addEvent(l, "click", g), z.track_right_click && G.addEvent(l, "contextmenu", g), _
	}

	function I(e, t, i) {
		if (z.ldbg && v("beaconPageview called, pp=" + G.fData(e)), t && !z.persist_asid && u(), (z.USE_RAPID || z.apv_always_send &&
				G.hasOwn(e, "A_apv")) && J.sendRapidNoDelay([], !0, e, null, i), z.ywa) {
			var r = n.makeFromPP(z.keys);
			r.absorb(e), J.sendYWAPV(r.getAll())
		}
		z.apv && null != $ && $.reInit()
	}

	function V(e, t, n, i) {
		z.ldbg && v('beaconEvent: event="' + e + '" data=' + G.fData(t) + " outcome=" + n);
		var r = L(0, e, t, n);
		J.sendEvents(r, i)
	}

	function H() {
		var e = null,
			t = (new Date).getTime(),
			n = t,
			i = G.getScrollY(),
			r = G.getScrollX(),
			o = -1,
			a = -1,
			l = !1,
			c = function() {
				var e = G.getScrollY(),
					t = G.getScrollX(),
					c = -1 === o ? e - i : e - o,
					s = -1 === a ? t - r : t - a;
				(Math.abs(c) > z.viewability_px || Math.abs(s) > z.viewability_px || l) && (F.reevaluateModuleViewability(), o = e,
					a = t, n = (new Date).getTime(), l = !1)
			},
			s = function() {
				null != e && clearTimeout(e);
				var o = (new Date).getTime();
				o - t < z.viewability_time && (i = G.getScrollY(), r = G.getScrollX(), n = o), e = setTimeout(function() {
					c()
				}, z.viewability_time)
			};
		F.refreshViewability = function() {
			l = !0, s()
		}, G.addEvent(window, "scroll", s), this.reInit = function() {
			i = G.getScrollY(), r = G.getScrollX(), o = -1, a = -1, t = n = (new Date).getTime()
		}, this.destroy = function() {
			G.rmEvent(window, "scroll", s)
		}
	}

	function R() {
		var e = null,
			t = lastApvTime = (new Date).getTime(),
			n = G.getScrollY(),
			i = -1,
			r = function() {
				var e = G.getScrollY(),
					t = -1 === i ? e - n : e - i,
					r = t > 0 ? 0 : 1;
				if (Math.abs(t) > z.apv_px) {
					var o = {
						A_apv: 1,
						A_apx: e,
						A_asd: r
					};
					I(o, !1, !0), i = e, lastApvTime = (new Date).getTime(), z.apv_callback && z.apv_callback.call(this, {
						pixel_pos: e,
						scroll_dir: r
					})
				}
			},
			o = function() {
				null != e && clearTimeout(e);
				var i = (new Date).getTime();
				i - t < z.apv_time && (n = G.getScrollY(), lastApvTime = i), e = setTimeout(function() {
					r()
				}, z.apv_time)
			};
		G.addEvent(window, "scroll", o), this.reInit = function() {
			n = G.getScrollY(), i = -1, t = lastApvTime = (new Date).getTime()
		}, this.destroy = function() {
			G.rmEvent(window, "scroll", o)
		}
	}

	function j() {
		var e, t, n = {
				focus: {
					state: "start",
					etrg: "show",
					etag: "dwell,start",
					jse: "window.focus"
				},
				pageshow: {
					state: "start",
					etrg: "show",
					etag: "dwell,start",
					jse: "window.pageshow"
				},
				"visibilitychange-visible": {
					state: "start",
					etrg: "show",
					etag: "dwell,start",
					jse: "document.visibilitychange"
				},
				blur: {
					state: "stop",
					etrg: "hide",
					etag: "dwell,stop",
					jse: "window.blur"
				},
				pagehide: {
					state: "stop",
					etrg: "hide",
					etag: "dwell,stop",
					jse: "window.pagehide"
				},
				"visibilitychange-hidden": {
					state: "stop",
					etrg: "hide",
					etag: "dwell,stop",
					jse: "document.visibilitychange"
				},
				beforeunload: {
					state: "stop",
					etrg: "close",
					etag: "dwell,stop",
					jse: "window.beforeunload"
				}
			},
			i = "start";
		"undefined" != typeof document.hidden ? (e = "hidden", t = "visibilitychange") : "undefined" != typeof document.mozHidden ?
			(e = "mozHidden", t = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e = "msHidden", t =
				"msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", t =
				"webkitvisibilitychange");
		var r = function(r) {
			var o = "",
				a = r.type;
			if (r.type == t && (a = document[e] ? "visibilitychange-hidden" : "visibilitychange-visible"), G.hasOwn(n, a) && (
					o = n[a].state), 0 != o.length) {
				if (i == o) return void(z.ldbg && console.log("dwell: -- state already " + i + " (event=" + a + ")"));
				i = o;
				var l = n[a];
				z.ldbg && console.log("dwell: change state to " + i + " (event=" + a + ")");
				var c = {
					etrg: l.etrg,
					outcm: "window",
					usergenf: 1,
					etag: l.etag,
					A_jse: l.jse
				};
				V("dwell", c, "")
			}
		};
		for (var o in n) n.hasOwnProperty(o) && G.addEvent(window, o, r);
		G.addEvent(window, t, r), this.set_state = function(e) {
			i = e
		}, this.destroy = function() {
			for (var e in n) n.hasOwnProperty(e) && G.rmEvent(window, e, r);
			G.rmEvent(window, t, r)
		}
	}

	function Y(e) {
		var t = 10;
		if (window.performance && window.performance.timing) {
			var n = e.perf_navigationtime || z.perf_navigationtime || 0,
				i = e.perf_resourcetime || z.perf_resourcetime || 0;
			if (!(1 > n && 1 > i)) {
				var r = G.hasOwn(z.sample, "perf_navigationtime") ? z.sample.perf_navigationtime : 100,
					o = G.hasOwn(z.sample, "perf_resourcetime") ? z.sample.perf_resourcetime : 100,
					a = G.samplingSuccess(r),
					l = G.samplingSuccess(o);
				if (a || l) {
					if (0 === window.performance.timing.loadEventStart) {
						if (te += t, te > 200) return;
						return void setTimeout(function() {
							Y(e)
						}, t)
					}
					var c = U(n, i, a, l),
						s = L(0, "pageperf", c, "");
					J.sendEvents(s)
				}
			}
		}
	}

	function U(e, t, n, i) {
		var r = {},
			o = window.performance.timing;
		if (n && e > 0 && (W(o.responseStart, o.connectEnd, r, "A_pfb"), W(o.responseEnd, o.responseStart, r, "A_pbp"), W(o.responseEnd,
				o.requestStart, r, "A_psr"), W(o.loadEventStart, o.navigationStart, r, "A_pol"), W(o.domInteractive, o.navigationStart,
				r, "A_pdi")), n && e > 1 && (W(o.redirectEnd, o.redirectStart, r, "A_prd"), W(o.domainLookupEnd, o.domainLookupStart,
				r, "A_pdl"), W(o.connectEnd, o.secureConnectionStart, r, "A_psh"), W(o.connectEnd, o.connectStart, r, "A_psc"), W(
				o.loadEventStart, o.responseEnd, r, "A_pfe")), i && t > 0 && "undefined" != typeof window.performance.getEntries) {
			for (var a = [], l = window.performance.getEntries(), c = 0; c < l.length; c++) {
				var s = {},
					u = l[c].name.replace(/^.+\//, "");
				s.name = u, s.dur = Math.floor(l[c].duration), t > 1 && (s.st = Math.floor(l[c].startTime)), a.push(s)
			}
			r.A_res = G.sfy(a)
		}
		return r
	}

	function W(e, t, n, i) {
		if (e && t) {
			var r = e - t;
			n[i] = r
		}
	}

	function X() {
		h(), z.ldbg && v("tracked_mods: " + G.fData(z.tracked_mods));
		var e = F.addModules(z.tracked_mods, !1),
			t = F.addModules(z.tracked_mods_viewability, z.viewability);
		z.USE_RAPID && z.pageview_on_init && J.sendRapidNoDelay(e.concat(t), 1 == z.client_only), z.ywa && z.pageview_on_init &&
			J.sendYWAPV(), G.executeOnLoad(function() {
				Q = new H, z.apv && ($ = new R), z.dwell_on && (Z = new j), Y({})
			})
	}

	function B(e) {
		var t = navigator.userAgent,
			n = Object.prototype,
			i = t.match(/MSIE\s[^;]*/) || t.match(/Trident\/[^;]*/) ? 1 : 0,
			r = t.indexOf(" Edge/") > -1,
			o = /KHTML/.test(t) ? 1 : 0,
			a = null !== t.match(/(iPhone|iPad|iPod)/gi),
			l = (t.indexOf("Android") > -1, a && null !== t.match(/AppleWebKit/)),
			c = null !== t.match(/AppleWebKit/) && null === t.match(/Chrome/),
			s = new RegExp(/\ufeff|\uffef|[\u0000-\u001f]|[\ue000-\uf8ff]/g),
			u = new RegExp(/[\u007f-\u00a0]|\s{2,}/g),
			d = "http://",
			v = "https://",
			h = "class",
			_ = " ",
			g = -1,
			w = 300,
			y = -1,
			b = "https:" === window.location.protocol;
		return i && (document.documentMode ? y = document.documentMode : (y = 5, document.compatMode && "CSS1Compat" ==
			document.compatMode && (y = 7))), {
			$: function(e) {
				return document.getElementById(e)
			},
			ca: "%01",
			cb: "%02",
			cc: "%03",
			cd: "%04",
			ce: "%05",
			cf: "%06",
			cg: "%07",
			ch: "%08",
			ylk_kv_delim: e.ylk_kv_delim || ":",
			ylk_pair_delim: e.ylk_pair_delim || ";",
			DATA_ACTION: "data-action",
			data_action_outcome: "data-action-outcome",
			isIE: i,
			isEdge: r,
			isIOSSafari: l,
			isSafari: c,
			isWebkit: o,
			ieV: y,
			MAX_VALUE_LENGTH: w,
			hasOwn: function(e, t) {
				return n.hasOwnProperty.call(e, t)
			},
			enc: encodeURIComponent,
			dec: decodeURIComponent,
			curProto: function() {
				return b ? v : d
			},
			getProto: function() {
				return z.use_http ? d : v
			},
			isSecure: function() {
				return b
			},
			isScrollHorizontalVisible: function() {
				return document.documentElement.scrollWidth > document.documentElement.clientWidth
			},
			isScrollVerticalVisible: function() {
				return document.documentElement.scrollHeight > document.documentElement.clientHeight
			},
			getCompStyle: function(e, t) {
				return void 0 !== window.getComputedStyle ? window.getComputedStyle(e, t) : (this.el = e, this.getPropertyValue =
					function(t) {
						var n = /(\-([a-z]){1})/g;
						return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
							return arguments[2].toUpperCase()
						})), e.currentStyle[t] ? e.currentStyle[t] : 0
					}, this)
			},
			getBorder: function(e, t) {
				if (!e || !t) return 0;
				var n = parseInt(this.getCompStyle(e, null).getPropertyValue(t), 10);
				return isNaN(n) && (n = 0), n
			},
			getElementHeight: function(e) {
				if (!e) return 0;
				var t = e.offsetHeight || 0;
				return t ? t - this.getBorder(e, "border-top-width") - this.getBorder(e, "border-bottom-width") : 0
			},
			getElementWidth: function(e) {
				if (!e) return 0;
				var t = e.offsetWidth || 0;
				return t ? t - this.getBorder(e, "border-left-width") - this.getBorder(e, "border-right-width") : 0
			},
			getPositionTop: function(e) {
				for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
				return t
			},
			getScrollbarWidthHeight: function() {
				var e = this.make("div");
				e.style.overflow = "scroll", e.style.visibility = "hidden", e.style.position = "absolute", e.style.width =
					"100px", e.style.height = "100px", document.body.appendChild(e);
				var t = {
					width: e.offsetWidth - e.clientWidth,
					height: e.offsetHeight - e.clientHeight
				};
				return this.rmBodyEl(e), t
			},
			isAboveFold: function(e) {
				if (i && 7 >= y) return !0;
				var t = e.getBoundingClientRect(),
					n = this.getElementHeight(e),
					r = .5 * n;
				if (t.top + r < 0) return !1;
				var o = window.innerHeight || document.documentElement.clientHeight;
				if (this.isScrollHorizontalVisible()) {
					var a = this.getScrollbarWidthHeight();
					o -= a.height
				}
				return t.bottom - r <= o ? !0 : void 0
			},
			isAboveFoldArea: function(e) {
				if (i && 7 >= y) return !0;
				var t, n, r = e.getBoundingClientRect(),
					o = this.getScrollbarWidthHeight(),
					a = window.innerHeight || document.documentElement.clientHeight,
					l = window.innerWidth || document.documentElement.clientWidth;
				if ("undefined" == typeof r.height || "undefined" == typeof r.width ? (t = Math.abs(r.bottom - r.top), n = Math.abs(
						r.right - r.left)) : (t = r.height, n = r.width), this.isScrollHorizontalVisible() && (a -= o.height), this.isScrollVerticalVisible() &&
					(l -= o.width), r.right <= 0 || r.bottom <= 0 || r.left >= l || r.top >= a) return !1;
				var c = {};
				return c.top = r.top < 0 ? 0 : r.top, c.left = r.left < 0 ? 0 : r.left, c.bottom = r.bottom > a ? a : r.bottom,
					c.right = r.right > l ? l : r.right, c.width = c.right - c.left, c.height = c.bottom - c.top, n * t / 2 <= c.width *
					c.height ? !0 : !1
			},
			strip: function(e) {
				for (var t = {
						"/": "P",
						";": "1",
						"?": "P",
						"&": "1",
						"#": "P"
					}, n = {
						url: e,
						clean: "",
						cookie: "",
						keys: []
					}, i = 0; - 1 !== e.indexOf("_yl", i);) {
					var r = e.indexOf("_yl", i);
					if (r > i && (n.clean += e.slice(i, r - 1)), i = r + 3, t[e.charAt(r - 1)] && "=" === e.charAt(r + 4)) {
						n.ult = 1;
						var o = "_yl" + e.charAt(r + 3),
							a = "";
						for (r += 5; r < e.length && !t[e.charAt(r)]; r++) a += e.charAt(r);
						n.keys.push(o), n[o] = a, "_ylv" !== o && (n.cookie += "&" + o + "=" + a), t[e.charAt(r)] && "P" === t[e.charAt(
							r)] && (n.clean += e.charAt(r)), i = r + 1
					} else n.clean += e.slice(r - 1, i)
				}
				return n.ult && (n.cookie = n.cookie.substr(1), n.clean += e.substr(i), "0" === n._ylv), n
			},
			prevDef: function(e) {
				e.preventDefault ? e.preventDefault() : e.returnValue = !1
			},
			appBodyEl: function(e) {
				document.body.appendChild(e)
			},
			rmBodyEl: function(e) {
				document.body.removeChild(e)
			},
			sa: function(e, t, n) {
				e.setAttribute(t, n)
			},
			getScrollY: function() {
				var e = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode ||
					document.body).scrollTop;
				return e
			},
			getScrollX: function() {
				var e = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode ||
					document.body).scrollLeft;
				return e
			},
			make: function(e, t) {
				var n = document.createElement(e);
				if (t && this.isObj(t))
					for (var i in t) this.sa(n, i, t[i]);
				return n
			},
			getXHR: function() {
				function e() {
					for (var e = !1, n = t.length, i = 0; n > i; i++) {
						try {
							e = t[i]()
						} catch (r) {
							continue
						}
						break
					}
					return e
				}
				var t = [function() {
					return new XMLHttpRequest
				}, function() {
					return new ActiveXObject("Msxml2.XMLHTTP")
				}, function() {
					return new ActiveXObject("Msxml3.XMLHTTP")
				}, function() {
					return new ActiveXObject("Microsoft.XMLHTTP")
				}];
				return e()
			},
			hasLS: function() {
				try {
					return "localStorage" in window && null !== window.localStorage
				} catch (e) {
					return !1
				}
			},
			hasCORS: function() {
				return i && 10 > y ? !1 : "withCredentials" in new XMLHttpRequest ? !0 : "undefined" != typeof XDomainRequest ?
					!0 : !1
			},
			hasWorkers: function() {
				return !!window.Worker
			},
			clearCookie: function(e, t, n) {
				t = t ? t : "/", n = n ? n : "", document.cookie = e + "= ; path=" + t +
					"; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=" + n + ";"
			},
			uniqConcat: function(e, t, n) {
				function i(e) {
					for (var t = 0, i = e.length; i > t; t++) {
						var a = e[t];
						if (a) {
							var l = n(a);
							o[l] || (o[l] = 1, r.push(a))
						}
					}
				}
				var r = [],
					o = {};
				return i(e), i(t), r
			},
			trim: function(e) {
				return e ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
			},
			extDomain: function(e) {
				var t = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
				return t && t[1]
			},
			getAttribute: function(e, t) {
				var n = "";
				return document.documentElement.hasAttribute || t !== h || (t = "className"), e && e.getAttribute && (n = e.getAttribute(
					t, 2)), n
			},
			isDate: function(e) {
				return "[object Date]" === n.toString.call(e)
			},
			isArr: function(e) {
				return "[object Array]" === n.toString.apply(e)
			},
			isStr: function(e) {
				return "string" == typeof e
			},
			isNum: function(e) {
				return "number" == typeof e && isFinite(e)
			},
			isNumeric: function(e) {
				return e - 0 == e && (e + "").replace(/^\s+|\s+$/g, "").length > 0
			},
			isObj: function(e) {
				return e && "object" == typeof e
			},
			rTN: function(e) {
				try {
					if (e && 3 === e.nodeType) return e.parentNode
				} catch (t) {
					p(t)
				}
				return e
			},
			getTarget: function(e) {
				var t = e.target || e.srcElement;
				return this.rTN(t)
			},
			addEvent: function(e, t, n) {
				e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
			},
			rmEvent: function(e, t, n) {
				e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
			},
			aug: function(e, t, n) {
				if (t)
					for (var i in t)
						if (this.hasOwn(t, i)) {
							if (n && !n.call(null, i)) continue;
							e[i] = t[i]
						}
			},
			rmProto: function(e) {
				return e ? e.substr(0, 7) === d ? e.substr(7, e.length) : e.substr(0, 8) === v ? e.substr(8, e.length) : e : ""
			},
			norm: function(e) {
				return null === e ? "" : (e = "" + e, this.trim(e.replace(u, " ").replace(s, "")))
			},
			_hasClass: function(e, t) {
				var n, i = !1;
				return e && t && (n = this.getAttribute(e, h) || "", i = t.exec ? t.test(n) : t && (_ + n + _).indexOf(_ + t + _) >
					-1), i
			},
			hasClass: function(e, t) {
				if (this.isArr(t)) {
					for (var n = 0, i = t.length; i > n; n++)
						if (this._hasClass(e, t[n])) return !0;
					return !1
				}
				return this.isStr(t) ? this._hasClass(e, t) : !1
			},
			quote: function(e) {
				var t = /["\\\x00-\x1f\x7f-\x9f]/g,
					n = {
						"\b": "\\b",
						"	": "\\t",
						"\n": "\\n",
						"\f": "\\f",
						"\r": "\\r",
						'"': '\\"',
						"\\": "\\\\"
					},
					i = '"',
					r = '"';
				if (e.match(t)) {
					var o = e.replace(t, function(e) {
						var t = n[e];
						return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (e % 16).toString(
							16))
					});
					return i + o + i
				}
				return r + e + r
			},
			/* @license
			               Copyright 2013 jQuery Foundation and other contributors

			               Permission is hereby granted, free of charge, to any person obtaining a copy
			               of this software and associated documentation files (the "Software"), to deal
			               in the Software without restriction, including without limitation the rights
			               to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			               copies of the Software, and to permit persons to whom the Software is
			               furnished to do so, subject to the following conditions:

			               The above copyright notice and this permission notice shall be included in
			               all copies or substantial portions of the Software.

			               THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			               IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			               FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			               AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			               LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			               OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			               THE SOFTWARE.
			            */
			sfy: function(e) {
				if (!e && "" !== e) return {};
				var t, n = typeof e;
				if ("undefined" === n) return "undefined";
				if ("number" === n || "boolean" === n) return "" + e;
				if ("string" === n) return this.quote(e);
				if ("function" == typeof e.toJSON) return this.sfy(e.toJSON());
				if (this.isDate(e)) {
					var i = e.getUTCMonth() + 1,
						r = e.getUTCDate(),
						o = e.getUTCFullYear(),
						a = e.getUTCHours(),
						l = e.getUTCMinutes(),
						c = e.getUTCSeconds(),
						s = e.getUTCMilliseconds();
					return 10 > i && (i = "0" + i), 10 > r && (r = "0" + r), 10 > a && (a = "0" + a), 10 > l && (l = "0" + l), 10 >
						c && (c = "0" + c), 100 > s && (s = "0" + s), 10 > s && (s = "0" + s), '"' + o + "-" + i + "-" + r + "T" + a +
						":" + l + ":" + c + "." + s + 'Z"'
				}
				if (t = [], this.isArr(e)) {
					for (var u = 0, d = e.length; d > u; u++) t.push(this.sfy(e[u]));
					return "[" + t.join(",") + "]"
				}
				if ("object" === n) {
					for (var f in e)
						if (this.hasOwn(e, f)) {
							var p = typeof f,
								v = null;
							if ("string" === p) v = this.quote(f);
							else {
								if ("number" !== p) continue;
								v = '"' + f + '"'
							}
							if (p = typeof e[f], "function" !== p && "undefined" !== p) {
								var m = "";
								m = null === e[f] ? '""' : 0 === e[f] ? 0 : this.sfy(e[f]), t.push(v + ":" + m)
							}
						} return "{" + t.join(",") + "}"
				}
			},
			toJSON: function() {
				var e = null,
					t = function() {
						var e = decodeURIComponent("%E3%81%82");
						return JSON.stringify(e) === '"' + e + '"'
					};
				return function(n) {
					return e || (e = "object" == typeof JSON && JSON.stringify && 6 !== y && 7 !== y && 8 !== y && t() ? JSON.stringify :
						this.sfy), e.call(this, n)
				}
			}(),
			executeOnLoad: function(e) {
				var t = !1,
					n = function(n) {
						(document.addEventListener || n && "load" === n.type || "complete" === document.readyState) && (t = !0, i(), e
							.call(this))
					},
					i = function() {
						document.addEventListener ? (document.removeEventListener("DOMContentLoaded", n, !1), window.removeEventListener(
							"load", n, !1)) : (document.detachEvent("onreadystatechange", n), window.detachEvent("onload", n))
					};
				if ("complete" === document.readyState) setTimeout(n);
				else if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener(
					"load", n, !1);
				else {
					document.attachEvent("onreadystatechange", n), window.attachEvent("onload", n);
					var r = !1;
					try {
						r = null == window.frameElement && document.documentElement
					} catch (o) {}
					r && r.doScroll && ! function a() {
						if (!t) {
							try {
								r.doScroll("left")
							} catch (n) {
								return setTimeout(a, 50)
							}
							i(), e.call(this)
						}
					}()
				}
			},
			getLinkContent: function(e) {
				for (var t, n = 0, i = "";
					(t = e.childNodes[n]) && t; n++) 1 === t.nodeType && ("img" === t.nodeName.toLowerCase() && (i += (this.getAttribute(
					t, "alt") || "") + " "), i += this.getLinkContent(t));
				return i
			},
			fData: function(e) {
				return this.isStr(e) ? e : this.toJSON(e)
			},
			getLT: function(e, t) {
				if (!e) return "_";
				var n = "";
				return t = t.toLowerCase(), n = "input" === e.nodeName.toLowerCase() ? this.getAttribute(e, "value") : "text" ===
					t ? o ? e.textContent : e.innerText ? e.innerText : e.textContent : "href" === t ? this.rmProto(this.getAttribute(
						e, "href")) : this.getAttribute(e, t) || "", n = this.norm(n), "" === n && (n = this.norm(this.getLinkContent(
						e))), n && n.length > G.MAX_VALUE_LENGTH && (n = n.substring(0, G.MAX_VALUE_LENGTH)), "" === n ? "_" : n
			},
			clref: function(e) {
				if (0 !== e.indexOf(d) && 0 !== e.indexOf(v)) return "";
				var t = this.strip(e);
				return t.clean || t.url
			},
			cold: function() {
				return screen ? screen.colorDepth || screen.pixelDepth : "unknown"
			},
			sr: function(e) {
				return screen ? screen.width + (e ? e : ",") + screen.height : ""
			},
			xy: function(e) {
				function t() {
					var e = document.documentElement,
						t = document.body;
					return e && (e.scrollTop || e.scrollLeft) ? [e.scrollTop, e.scrollLeft] : t ? [t.scrollTop, t.scrollLeft] : [0,
						0
					]
				}
				var n = null,
					r = e.pageX,
					o = e.pageY;
				return i && (n = t()), r || 0 === r || (r = e.clientX || 0, i && (r += n[1])), o || 0 === o || (o = e.clientY ||
					0, i && (o += n[0])), r + "," + o
			},
			hasCC: function(e) {
				for (var t = 0, n = e.length; n > t; t++) {
					var i = e.charCodeAt(t);
					if (32 > i || "=" === i) return !0
				}
				return !1
			},
			isValidPair: function(e, t) {
				return e.length > 8 || t.length > G.MAX_VALUE_LENGTH ? (f("Invalid key/value pair (" + e + "=" + t +
					") Size must be < 8/300 respectively."), !1) : !0
			},
			ser: function(e, t) {
				if (!e) return "";
				void 0 === typeof t && (t = !0);
				var n = [],
					i = "";
				for (var r in e)
					if (this.hasOwn(e, r)) {
						var o = r,
							a = e[r];
						if (null === o || null === a) continue;
						if (o += "", a += "", a && a.length > G.MAX_VALUE_LENGTH && (a = a.substring(0, G.MAX_VALUE_LENGTH)), !this.isValidPair(
								o, a)) continue;
						if (!this.hasCC(o) && !this.hasCC(a)) {
							i = "", a = this.trim(a), "" !== a && " " !== a || !t || (a = "_");
							try {
								i = this.enc(o + "" + a), i = i.replace(/'/g, "%27")
							} catch (l) {
								i = "_ERR_ENCODE_", p(l)
							}
							n.push(i)
						}
					} return n.join(this.cd)
			},
			rand: function() {
				for (var e = 0, t = "", n = ""; e++ < 16;) {
					var i = Math.floor(62 * Math.random());
					n = 10 > i ? i : String.fromCharCode(36 > i ? i + 55 : i + 61), t += n
				}
				var r = G.tms();
				return t + r.toString(36)
			},
			tms: function() {
				return +new Date
			},
			cookEn: function() {
				var e = navigator.cookieEnabled ? 1 : 0,
					t = "rapidtc";
				return "undefined" != typeof navigator.cookieEnabled || e || (document.cookie = t + "=1", e = -1 != document.cookie
					.indexOf("testcookie") ? !0 : !1, document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"), e
			},
			isResCF: function(e) {
				var t = {
					14: 1,
					15: 1,
					18: 1,
					19: 1,
					20: 1
				};
				return t[e]
			},
			isTagOfInterest: function(e, t) {
				for (var n = 0, i = t.length; i > n; n++)
					if (e.tagName && e.tagName.toLowerCase() == t[n].toLowerCase()) return !0;
				return !1
			},
			samplingSuccess: function(e) {
				var t = function(e) {
						for (var t = 33554467, n = t, i = 0, r = e.length; r > i; i++) n += (n << 1) + (n << 4) + (n << 7) + (n << 8) +
							(n << 24), n ^= e.charCodeAt(i);
						return 0 > n && (n &= 2147483647, n += 2147483648), n
					},
					n = function(e) {
						var n = 1e3;
						e *= 10;
						var i = new m,
							r = "" + i.getCookieByName("B");
						return r ? (0 > g && (g = t(r) % n), e > g) : !1
					};
				return n(e)
			}
		}
	}("undefined" == typeof console || "undefined" == typeof console.log) && (console = {
		log: function() {}
	}), "undefined" == typeof console.error && (console.error = console.log), "undefined" == typeof console.warn && (
			console.warn = console.log), t.prototype = {
			ser: function() {
				return G.ser(this.map)
			},
			set: function(e, t) {
				var n = t ? G.norm(t) : t;
				(void 0 === n || null === n) && (n = ""), null !== n && G.isStr(n) && (n = n.replace(/\\/g, "\\\\")), n.length >
					G.MAX_VALUE_LENGTH && (n = n.substring(0, G.MAX_VALUE_LENGTH)), G.isValidPair(e, n) && (this.map[G.norm(e)] = n,
						this.count++)
			},
			get: function(e) {
				return this.map[e]
			},
			getAll: function() {
				return this.map
			},
			absorb: function(e) {
				if (e && G.isObj(e))
					for (var t in e) G.hasOwn(e, t) && this.set(t, e[t])
			},
			absorb_filter: function(e, t) {
				if (e && G.isObj(e))
					for (var n in e)(!t || t.call(null, n)) && G.hasOwn(e, n) && this.set(n, e[n])
			},
			getSize: function() {
				return this.count
			}
		}, n.prototype = new t, n.prototype.constructor = t, r.prototype = new t, r.prototype.constructor = t, n.makeFromPP =
		function(e) {
			var t = new n;
			return e && t.absorb(e.getAll()), t
		};
	var q = new n,
		G = B(e),
		F = new E,
		K = {
			none: 0,
			gzip: 1,
			lzw: 2,
			deflate: 3
		};
	m.prototype = {
		getYWAFPC: function() {
			if (!z.ywa) return null;
			var e = this.cookieMap["fpc" + z.ywa.project_id],
				t = this.cookieMap.fpc,
				n = b(t),
				i = null;
			if (t && (i = n[z.ywa.project_id]), e && (G.clearCookie("fpc" + z.ywa.project_id), !i)) {
				n[z.ywa.project_id] = e;
				var r = y(n);
				g("fpc", r, 31536e4), i = e
			}
			return i ? i : null
		},
		getCookieByName: function(e) {
			return this.cookieMap[e]
		},
		getYWADPID: function() {
			if (z.ywa) {
				var e, t = "ywandp",
					n = "ywadp" + z.ywa.project_id,
					i = b(this.cookieMap[t]),
					r = i[z.ywa.project_id];
				if (void 0 === r || null === r || "" === r) {
					e = this.cookieMap[n], e ? i[z.ywa.project_id] = e : i[z.ywa.project_id] = w(), r = i[z.ywa.project_id];
					var o = y(i);
					g(t, o, 31536e4), this.cookieMap[t] = o
				}
				z.ywa_dpid = r
			}
		}
	};
	var z = c(e),
		J = A(),
		$ = null,
		Q = null,
		Z = null,
		ee = null,
		te = (function() {
			var e = {};
			return {
				subscribe: function(t, n) {
					var i = e[t];
					i || (i = [], e[t] = i), i.push(n)
				},
				unsubscribe: function(t, n) {
					var i = e[t];
					if (i)
						for (var r = 0; r < i.length; r++)
							if (i[r] === n) return void i.splice(r, 1)
				},
				fire: function(t) {
					var n = e[t];
					if (n)
						for (var i = 0, r = n.length; r > i; i++) n[i].call(null)
				}
			}
		}(), 0);
	return setTimeout(function() {
		X()
	}, 0), {
		init: function() {},
		beaconEvent: function(e, t, n, i) {
			V(e, t, n, i)
		},
		beaconClick: function(e, t, n, i, r, o) {
			z.ldbg && v("beaconClick: sec=" + e + " slk=" + t + " callback=" + o), !i && r && (i = {}), r && (i.outcm = r), J
				.sendClick(x(e, t, n, i, r), o)
		},
		addModules: function(e, t, n) {
			z.ldbg && v("addModules() called: mods=" + G.fData(e) + " isPage: " + t), n = n || {};
			var i = {
				A_am: 1
			};
			n.pp && G.aug(i, n.pp), n.useViewability = n.useViewability || !1, n.clickonly = n.clickonly || !1;
			var r = !1;
			switch (t || (t = !1), t) {
				case 1:
				case "1":
				case !0:
					t = !0;
					break;
				case 2:
				case "2":
					r = !0, t = !1, n.event = L("contentmodification", "", {});
					break;
				case 0:
				case "0":
				case !1:
				default:
					t = !1
			}
			if (!z.yql_enabled) return void(t ? I(i, !1) : n.event && this.beaconRichView(i, n.event.outcome));
			n && n.event && t && (p("Cannot track event type and pageview at same time."), n.event = null);
			var o = F.addModules(e, n.useViewability);
			(0 !== o.length || n.event) && (n.clickonly && (o = []), (z.USE_RAPID || n.event) && (t || n.event || n.pp ? (n.event &&
				n.event.data && G.aug(i, n.event.data), J.sendRapidNoDelay(o, t, i, n)) : o.length > 0 && J.sendRapid(o, t, i,
				n)), t === !0 && (z.ywa && J.sendYWAPV(i), z.apv && $ && $.reInit()))
		},
		addModulesWithViewability: function(e, t, n) {
			n = n || {}, n.useViewability = z.viewability, this.addModules(e, t, n)
		},
		refreshModule: function(e, t, n, i) {
			z.ldbg && v("refreshModule called: mod=" + e + " isPV: " + t + " sendLinks: " + n + " options: " + G.fData(i));
			var r = !1;
			switch (i = i || {}, t || (t = !1), t) {
				case 1:
				case "1":
				case !0:
					t = !0;
					break;
				case 2:
				case "2":
					r = !0, t = !1, i.event = L("contentmodification", "", {});
					break;
				case 0:
				case "0":
				case !1:
				default:
					t = !1
			}
			if (!z.yql_enabled) {
				var o = i.pp || {};
				return void(t ? I(o, !1) : i.event && this.beaconRichView(o, i.event.outcome))
			}
			var a = n === !1 ? !1 : !0;
			t && i && i.event && (i.event = null), F.refreshModule(e, t, a, i)
		},
		refreshViewability: function() {
			F.refreshViewability()
		},
		removeModule: function(e) {
			F.removeModule(e)
		},
		isModuleTracked: function(e) {
			return z.ldbg && v("isTracked called: " + e), F && void 0 !== F.exists(e)
		},
		destroy: function() {
			v("destroy called"), F.destroy(), $ && ($.destroy(), $ = null), Q && (Q.destroy(), Q = null), Z && (Z.destroy(),
				Z = null)
		},
		reInit: function(e) {
			return z.ldbg && v("reInit called with: " + G.fData(e)), e = e || {}, e.spaceid ? (q = new n, z = c(e), void(G =
				B(e))) : void p("Invalid spid in reInit config: " + G.fData(e))
		},
		setRapidAttribute: function(e) {
			if (e.keys && z.keys.absorb(e.keys), e.ywa && G.isObj(e.ywa))
				for (var t in e.ywa) G.hasOwn(e.ywa, t) && (z.ywa[t] = e.ywa[t]);
			e.spaceid && (z.spaceid = e.spaceid), e.referrer && (z.referrer = e.referrer.substring(0, G.MAX_VALUE_LENGTH)), e
				.A_sid && (z.keys.set("A_sid", e.A_sid), z.persist_asid = !0), e.location && (z.loc = e.location, z.keys.set(
					"_w", G.rmProto(e.location).substring(0, G.MAX_VALUE_LENGTH))), G.hasOwn(e, "apv") && (e.apv ? $ ? $.reInit() :
					$ = new R : $ && ($.destroy(), $ = null))
		},
		clearRapidAttribute: function(e) {
			for (var t in e)
				if ("keys" === e[t]) {
					var i = z.keys.get("_w"),
						r = z.keys.get("A_sid");
					z.keys = new n, z.keys.set("_w", i), z.keys.set("A_sid", r)
				} else "referrer" === e[t] ? z.referrer = "" : "A_sid" === e[t] ? (z.keys.set("A_sid", ""), z.persist_asid = !0) :
					"location" === e[t] && (z.loc = "", z.keys.set("_w", ""))
		},
		beaconPageview: function(e) {
			I(e, !0)
		},
		beaconECommerce: function(e, t) {
			z.ywa && J.sendYWAECommerce(e, t)
		},
		beaconInternalSearch: function(e, t) {
			z.ywa && J.sendInternalSearch(e, t)
		},
		getCurrentSID: function() {
			return q.get("A_sid")
		},
		notifyHistoryPushStateCalled: function() {},
		beaconLinkViews: function(e, t, n, i) {
			z.ldbg && v("beaconLinkViews() called"), n = n || {};
			var o = {};
			n.pp && G.aug(o, n.pp);
			var a = !1,
				l = !1;
			switch (t) {
				case 1:
				case "1":
				case !0:
					l = !0;
					break;
				case 2:
				case "2":
					a = !0, l = !1, n.event = L("contentmodification", "", {});
					break;
				case 0:
				case "0":
				case !1:
				default:
					l = !1
			}
			if (!z.yql_enabled) return void(l ? I(o, !1) : n.event && this.beaconRichView(o, n.event.outcome));
			if (n && n.event && l && (p("Cannot track event type and pageview at same time."), n.event = null), 0 !== e.length ||
				n.event) {
				for (var c = [], s = 0; s < e.length; s++) {
					var u = e[s],
						d = new r;
					d.absorb_filter(u, function(e) {
						return "sec" != e && "_links" != e
					});
					for (var f = [], m = 1, h = 0; h < u._links.length; h++) {
						var _ = u._links[h],
							g = {
								viewable: !0,
								data: {
									sec: u.sec,
									_p: m++,
									A_lv: 2
								}
							};
						G.aug(g.data, _), f.push(g)
					}
					var w = {
						moduleName: u.sec,
						moduleYLK: d,
						links: f,
						identifier: u.sec
					};
					c.push(w)
				}(z.USE_RAPID || n.event) && ((l || n.event || n.pp) && n.event && n.event.data && G.aug(o, n.event.data), J.sendRapidNoDelay(
					c, l, o, n)), i && i.call()
			}
		},
		beaconPerformanceData: function(e) {
			Y(e)
		}
	}
};
/*jslint devel: false, nomen: true, plusplus: true, forin:true, sloppy: true, sub: true */
/*global YAHOO,document,window,navigator,console */
"undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, "undefined" != typeof YAHOO.i13n.A_SID &&
	YAHOO.i13n.A_SID || (YAHOO.i13n.A_SID = function() {
		for (var e, t = 0, i = "", n = "", r = +new Date; t++ < 16;) e = Math.floor(62 * Math.random()), n = 10 > e ? e :
			String.fromCharCode(36 > e ? e + 55 : e + 61), i += n;
		return i + r.toString(36)
	}.apply()), YAHOO.i13n.JP = YAHOO.i13n.JP || {}, YAHOO.i13n.JP.simpleRapid = function(e) {
		function t(e) {
			return "string" == typeof e ? e.replace(/\^/g, "") : e
		}

		function i() {
			var e, t = navigator.userAgent;
			return e = t.match(/windows\sphone/i) ? "windowsphone" : t.match(/windows/i) ? "windows" : t.match(/iphone|ipad/i) ?
				"ios" : t.match(/mac|ppc/i) ? "mac" : t.match(/android/i) ? "android" : "other"
		}

		function n(e, i) {
			e = t(e), i = t(i), "" !== e && "" !== i && (p[e] = i)
		}

		function r(e) {
			e = t(e), "" !== e && delete p[e]
		}

		function o(e, i) {
			var n, r;
			e = t(e);
			for (r in i) n = t(i[r]), r = t(r), "" !== r && "" !== n && (p[e][r] = n)
		}

		function s(e, i) {
			e = t(e), i = t(i), "" !== e && "" !== i && delete p[e][i]
		}

		function u(e, t) {
			var i;
			for (i in e)
				if (e[i] === t) return i;
			return -1
		}

		function c(e, i) {
			var n, r;
			if (i instanceof Array)
				for (r = 0; r < i.length; r++) e = t(e), n = t(i[r]), "" !== e && "" !== n && -1 === u(p[e], n) && p[e].push(n)
		}

		function a(e, i) {
			e = t(e), i = t(i), "" !== e && "" !== i && -1 !== u(p[e], i) && p[e].splice(u(p[e], i), 1)
		}
		e = e || {};
		var d, f, p, h = window,
			y = document,
			l = y.location.toString().indexOf("yhldebug=1") > 0;
		p = {
				tracked_mods: [],
				keys: {
					cl: h.screen.colorDepth,
					dspsize: h.screen.width + "x" + h.screen.height,
					enc: (y.characterSet || y.charset).toLowerCase(),
					os: i(),
					_sr: (h.innerWidth || y.documentElement.clientWidth) + "x" + (h.innerHeight || y.documentElement.clientHeight),
					_libn: "simplerapid",
					_libv: "1.0.0"
				},
				viewability: !1,
				tracked_mods_viewability: [],
				apv: !1,
				click_timeout: 1e4,
				compr_on: "string" == typeof YAHOO.i13n.WEBWORKER_FILE || "string" == typeof e.webworker_file
			}, "undefined" != typeof p.keys._do || isNaN(h.orientation) || (p.keys._do = Math.abs(h.orientation) / 90 % 2),
			"undefined" != typeof p.keys.dpr || isNaN(h.devicePixelRatio) || (p.keys.dpr = h.devicePixelRatio);
		for (d in e)
			if ("keys" === d)
				for (f in e.keys) p.keys[f] = e.keys[f];
			else p[d] = e[d];
		return {
			setClickTimeout: function(e) {
				return n("click_timeout", e), this
			},
			setModule: function(e) {
				return c("tracked_mods", e), this
			},
			setSpaceid: function(e) {
				return n("spaceid", e), this
			},
			startViewable: function() {
				return n("viewability", !0), this
			},
			stopViewable: function() {
				return n("viewability", !1), this
			},
			setViewableModule: function(e) {
				return c("tracked_mods_viewability", e), this
			},
			setViewableTime: function(e) {
				return n("viewability_time", e), this
			},
			setWebWorkerFilePath: function(e) {
				return n("webworker_file", e), n("compr_on", !0), this
			},
			setRapidConf: function(e) {
				var t;
				for (t in e) n(t, e[t]);
				return this
			},
			setActtype: function(e) {
				return o("keys", {
					acttype: e
				}), this
			},
			setApptype: function(e) {
				return o("keys", {
					apptype: e
				}), this
			},
			setAuthid: function(e) {
				return o("keys", {
					auth_out: e
				}), this
			},
			setCategorypath: function(e) {
				return o("keys", {
					cat_path: e
				}), this
			},
			setContentsid: function(e) {
				return o("keys", {
					ctsid: e
				}), this
			},
			setConttype: function(e) {
				return o("keys", {
					conttype: e
				}), this
			},
			setDevice: function(e) {
				return o("keys", {
					device: e
				}), this
			},
			setMetakeyword: function(e) {
				return o("keys", {
					metakwd: e
				}), this
			},
			setNonepv: function(e) {
				return o("keys", {
					nonepv: e
				}), this
			},
			setOpttype: function(e) {
				return o("keys", {
					opttype: e
				}), this
			},
			setPartner: function(e) {
				return o("keys", {
					prtnr: e
				}), this
			},
			setPagetype: function(e) {
				return o("keys", {
					pagetype: e
				}), this
			},
			setQuery: function(e) {
				return o("keys", {
					query: e
				}), this
			},
			setService: function(e) {
				return o("keys", {
					service: e
				}), this
			},
			setServiceid: function(e) {
				return o("keys", {
					srvid: e
				}), this
			},
			setStatus: function(e) {
				return o("keys", {
					status: e
				}), this
			},
			setPageParam: function(e) {
				return o("keys", e), this
			},
			deleteRapidConf: function(e) {
				return r(e), this
			},
			deleteModule: function(e) {
				return a("tracked_mods", e), this
			},
			deleteViewableModule: function(e) {
				return a("tracked_mods_viewability", e), this
			},
			deletePageParam: function(e) {
				return s("keys", e), this
			},
			initRapid: function() {
				return l && console.log(p), "undefined" != typeof YAHOO.i13n.Rapid && YAHOO.i13n.Rapid ? (YAHOO.i13n.JP.rapid_conf =
					p, new YAHOO.i13n.Rapid(p)) : void 0
			}
		}
	};
