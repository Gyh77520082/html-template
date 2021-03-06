if (typeof YAHOO == "undefined" || !YAHOO) {
	var YAHOO = {}
}
YAHOO.JP = YAHOO.JP || {};
YAHOO.JP.dsp = YAHOO.JP.dsp || {};
YAHOO.JP.dsp.rapid = YAHOO.JP.dsp.rapid || {};
YAHOO.JP.dsp.rapid.Beaconer = function(K) {
	function c() {
		var W = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
			X = "",
			V = 0;
		for (; V < 12; V++) {
			X += W.charAt(Math.floor(Math.random() * 62))
		}
		return X
	}

	function S(V) {
		return Object.prototype.toString.apply(V) === "[object Array]"
	}

	function j(V) {
		return (V && (typeof V === "object")) || false
	}
	var H = true;
	var f = (K.use_auto_pos === false ? false : true);
	var N = "%01",
		M = "%02",
		L = "%04",
		J = "%05",
		G = "%06",
		E = "%07",
		B = "%08";
	var p = K.sid || c(),
		n = "1.5.0",
		q = encodeURIComponent || escape,
		w = "http://",
		e = "https://";
	var a = function(V) {
		if (V.indexOf(w) !== 0 && V.indexOf(e) !== 0) {
			return ""
		}
		return V
	};

	function O(V, Y) {
		if (!V || !Y) {
			return V
		}
		var X = V;
		for (var W in Y) {
			if (Y.hasOwnProperty(W)) {
				X[W] = Y[W]
			}
		}
		return X
	}
	var m = 0,
		x = "";
	if (H && document && document.referrer) {
		x = document.referrer || "";
		x = q(a(x));
		m = x.length
	}
	K = K || {};
	var A = 2000;
	if (K.max_beacon_size) {
		var h = K.max_beacon_size;
		if (h > A && h <= 8000) {
			A = h
		}
	}
	var U = (K.beacon_server || "ybx.yahoo.co.jp") + "/",
		l = {},
		F = [],
		u = [],
		R = K.region || "",
		T = (K.https ? true : false),
		r = {
			aa: 1,
			eu: 1,
			la: 1
		},
		o = 10000,
		y = "UNDEF";
	var D = K.spaceid || "0";
	D = D.toString().replace(/\s+/g, "");
	D = D.replace(/^P#/ig, "");
	if (R !== "" && r[R]) {
		U = R + "." + U
	}
	U = (T ? e : w) + U;
	var P = function() {};

	function v(V) {
		if (!V) {
			return ""
		}
		if (V.substr(0, 7) === w) {
			return V.substr(7, V.length)
		}
		if (V.substr(0, 8) === e) {
			return V.substr(8, V.length)
		}
		return V
	}

	function i(X, V, W) {
		if (V && W !== null && W !== undefined) {
			W = W.toString();
			X[V] = W
		}
	}

	function t(X) {
		for (var W = 0, V = X.length; W < V; W++) {
			if (X.charCodeAt(W) < 32) {
				return true
			}
		}
		return false
	}

	function C(aa) {
		if (!aa) {
			return ""
		}
		var ab = [];
		for (var X in aa) {
			if (aa.hasOwnProperty(X)) {
				var W = X,
					V = aa[X];
				if (W === null || V === null || V === undefined) {
					continue
				}
				W = W.toString();
				V = V.toString();
				if (V && W.length <= 8 && V.length <= 300 && !t(W) && !t(V)) {
					var Z = "";
					try {
						Z = q(W + "\x03" + V)
					} catch (Y) {
						Z = "_ERR_ENCODE_"
					}
					ab[ab.length] = Z
				}
			}
		}
		return ab.join(L)
	}

	function k() {
		return (screen ? screen.width + "," + screen.height : "")
	}

	function g(V) {
		var W = new Image();
		W.onload = W.onerror = W.onabort = P;
		W.src = V;
		setTimeout(function() {
			W = null
		}, o)
	}

	function b() {
		l = {};
		if (H) {
			l = {
				A_sid: p,
				_w: v(window.location.href)
			};
			i(l, "A_pn", K.page_name);
			i(l, "A_id", K.page_id);
			i(l, "A_pt", K.page_type)
		}
	}
	b();
	if (K.keys) {
		l = O(l, K.keys)
	}

	function z(V) {
		b();
		l = O(l, V)
	}

	function Q(W) {
		var V = null;
		if (W && j(W)) {
			V = O(W, l)
		} else {
			V = l
		}
		var X = C(V);
		if (H) {
			return n + J + X
		}
		return X
	}

	function s(V) {
		if (H) {
			V += "&_R=" + x
		}
		return V + "&t=" + Math.floor(new Date().valueOf() / 1000)
	}

	function d(am) {
		if (!S(am)) {
			am = [am]
		}
		var X = "";
		var ah = U.length;
		var an = Q().length;
		for (var ai = 0, aj = am.length; ai < aj; ai++) {
			var W = am[ai];
			var al = W.mod;
			var ae = "";
			var af = null;
			var aa = false;
			if (j(al)) {
				aa = true;
				ae = al.name;
				af = al.params || {}
			} else {
				ae = al
			}
			if (ae === null || ae === undefined || ae === "") {
				ae = y
			}
			X += "m" + G + ae + (aa ? (E + C(af)) : "") + N + (f ? "l" : "L") + G;
			var V = W.links;
			for (var ag = 0, ad = V.length; ag < ad; ag++) {
				var ab = V[ag];
				var ak = false;
				var ac = "";
				if (j(ab)) {
					ak = true;
					ac = ab.name;
					ab.params = ab.params || {};
					if (f) {
						delete ab.params._p
					}
				} else {
					ac = ab
				}
				if (ac === null || ac === undefined || ac === "") {
					ac = y
				}
				if (ac.length > 300) {
					continue
				}
				ac = q(ac);
				var Z = ah + m + X.length + ac.length + an + 32;
				var Y = C(ab.params);
				if (ak) {
					Z += 3 + Y.length
				}
				if (Z < A) {
					X += (ag > 0 ? M : "") + ac + (ak ? (E + Y) : "")
				} else {
					F.push(X);
					if (f) {
						ab.params._p = (ag + 1)
					}
					Y = C(ab.params);
					X = ["m", G, ae, (aa ? (E + C(af)) : ""), N, (f ? "l" : "L"), G, ac, (ak ? E + Y : "")].join("")
				}
			}
			if (ai + 1 < aj) {
				X += B
			}
		}
		F.push(X)
	}
	if (K.link_data) {
		var I = K.link_data;
		u = S(I) ? I : [I];
		d(I)
	}
	return {
		MODULE_NAME: "sec",
		LINK_ATTR: "slk",
		POSITION: "_p",
		beacon: function(W) {
			if (S(W)) {
				for (var X = 0, V = W.length; X < V; X++) {
					g(s(W[X]))
				}
			} else {
				g(s(W))
			}
		},
		setPageParams: function(V) {
			z(V)
		},
		setLinkData: function(V) {
			F = [];
			d(V)
		},
		getClickBeacon: function(ag, ah, af) {
			var W = null,
				ac = false;
			if (af === null || af === undefined) {
				af = -1
			}
			if (j(ag)) {
				W = ag;
				ac = true
			} else {
				if (f && (af < 0) && u.length > 0 && ag && ah) {
					for (var ab = 0, ad = u.length; ab < ad; ab++) {
						var Z = u[ab];
						var X = "";
						if (j(Z.mod)) {
							X = Z.mod.name
						} else {
							X = Z.mod
						}
						if (ag !== X) {
							continue
						}
						var aj = Z.links;
						for (var aa = 0, ai = aj.length; aa < ai; aa++) {
							var Y = aj[aa],
								V = "";
							if (j(Y)) {
								V = Y.name
							} else {
								V = Y
							}
							if (ah === V) {
								af = (aa + 1);
								break
							}
						}
						break
					}
				}
			}
			if (!ac) {
				W = {
					sec: ag,
					slk: ah,
					_p: af,
					A_sr: k()
				}
			}
			var ae = [];
			ae.push("s=" + D);
			ae.push("_K=" + Q());
			ae.push("_C=" + C(W));
			return U + "c?" + ae.join("&")
		},
		doClickBeacon: function(W, V, X) {
			this.beacon(this.getClickBeacon(W, V, X))
		},
		getViewBeacon: function(ab, Z) {
			Z = Z || {};
			var Y = (ab ? "b" : "p");
			var W = [];
			W.push("s=" + D);
			W.push("_P=" + Q(Z));
			if (F.length > 0) {
				var aa = [];
				for (var X = 0, V = F.length; X < V; X++) {
					aa.push(U + Y + "?" + W.join("&") + "&_L=" + F[X])
				}
				return aa
			}
			return U + Y + "?" + W.join("&")
		},
		doViewBeacon: function(W, V) {
			this.beacon(this.getViewBeacon(W, V))
		},
		getEventBeacon: function(V, W) {
			W._E = V;
			return this.getViewBeacon(0, W)
		},
		doEventBeacon: function(V, W) {
			this.beacon(this.getEventBeacon(V, W))
		}
	}
};
