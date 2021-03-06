(function() {
	if (typeof(YAHOO) != "undefined" && typeof(YAHOO.JP) != "undefined" && typeof(YAHOO.JP.shp) != "undefined") {
		YAHOO.JP.shp.ult = YAHOO.JP.shp.ult || {}
	}

	function v(D, C) {
		var i = new YAHOO.i13n.JP.simpleRapid();
		if (typeof(YAHOO) != "undefined" && typeof(YAHOO.JP) != "undefined" && typeof(YAHOO.JP.shp) != "undefined") {
			YAHOO.JP.shp.ins = i.setSpaceid(D.spaceid).setService(D.service).setStatus(D.status).setApptype(D.apptype).setOpttype(
				D.opttype).setActtype(D.acttype).setMetakeyword(D.metakwd).setPagetype(D.pagetype).setConttype(D.conttype).setCategorypath(
				D.cat_path).setContentsid(D.ctsid).setModule(D.modules).setViewableModule(D.viewable_modules).setViewableTime(
				1000).startViewable().setPageParam(C).initRapid();
			YAHOO.JP.shp.ult.sr = i;
			if (typeof($) !== "undefined") {
				$("a[data-beaconclick]").on("click", function() {
					var E = $(this).data("beaconclick").split(",");
					if (typeof(E[0]) !== "undefined" && typeof(E[1]) !== "undefined" && typeof(E[2]) !== "undefined") {
						YAHOO.JP.shp.ins.beaconClick(E[0], E[1], E[2])
					}
				})
			}
		}
	}
	YAHOO.JP.shp.ult.reInitRapidPageParams = function(i) {
		var C = new YAHOO.i13n.JP.simpleRapid();
		C.setPageParam(i).initRapid()
	};
	var w = {
		spaceid: "",
		service: "shopping",
		pagetype: "",
		conttype: "",
		status: "",
		cat_path: "",
		ctsid: "",
		apptype: "web",
		opttype: "",
		acttype: "",
		metakwd: "",
		strid: "",
		age: "",
		gender: "",
		modules: new Array(),
		viewable_modules: new Array()
	};
	var j = (typeof(YAHOO.JP.shp.data.status.login) != "undefined" && YAHOO.JP.shp.data.status.login === true);
	var l = (j) ? "n" : "g";
	var a = (j) ? "n" : "g";
	var z = (j) ? "n" : "g";
	var u = {
		premium: l,
		stmp_rnk: a,
		visit_tp: "New",
		yjcard: z
	};
	if (typeof(YAHOO) != "undefined" && typeof(YAHOO.JP) != "undefined" && typeof(YAHOO.JP.shp) != "undefined" && typeof(
			YAHOO.JP.shp.data) != "undefined") {
		if (typeof(YAHOO.JP.shp.data.demographic) != "undefined") {
			if (typeof(YAHOO.JP.shp.data.demographic.age) != "undefined") {
				u.age = YAHOO.JP.shp.data.demographic.age
			}
			if (typeof(YAHOO.JP.shp.data.demographic.gender) != "undefined") {
				w.gender = YAHOO.JP.shp.data.demographic.gender
			}
			if (typeof(YAHOO.JP.shp.data.demographic.premium) != "undefined") {
				u.premium = YAHOO.JP.shp.data.demographic.premium
			}
			if (typeof(YAHOO.JP.shp.data.demographic.starclub_rank) != "undefined") {
				u.stmp_rnk = YAHOO.JP.shp.data.demographic.starclub_rank
			}
		}
		if (typeof(YAHOO.JP.shp.data.status) != "undefined") {
			if (typeof(YAHOO.JP.shp.data.status.promotion_id) != "undefined") {
				if (YAHOO.JP.shp.data.status.promotion_id === "no_promo") {
					u.promoid = ""
				} else {
					if (YAHOO.JP.shp.data.status.promotion_id === null || YAHOO.JP.shp.data.status.promotion_id === "") {
						u.promoid = "unknown"
					} else {
						u.promoid = YAHOO.JP.shp.data.status.promotion_id
					}
				}
			} else {
				var r = ["topics.shopping.yahoo.co.jp", "contents.shopping.yahoo.co.jp", "shopping.yahoo.co.jp/fair/",
					"sales.shopping.yahoo.co.jp", "shopping.yahoo.co.jp/event/", "www.fukko-department.jp",
					"info.shinsai.yahoo.co.jp"
				];
				var g = "";
				var m = location.hostname + location.pathname;
				for (var p = 0, b = r.length; p < b; p++) {
					if (m.indexOf(r[p]) === 0) {
						g = "campaign";
						break
					}
				}
				if (g === "campaign") {
					var s = location.hostname.match(/^(.*?)\.yahoo\.co\.jp$/);
					var k = location.pathname.split("/").slice(1);
					if (!s) {
						u.promoid = location.hostname
					} else {
						if (k.length >= 1) {
							var c = (s[1] === "topics.shopping" && k[0] === "m" && k.length >= 2 && k[1].match(/^(fair|category)$/)) || (s[
								1] === "topics.shopping" && k.length >= 1 && k[0].match(/^fair$/));
							u.promoid = s[1];
							for (var p = 0, q = k.length; p < q; p++) {
								if (k[p] !== "") {
									var B = k[p].indexOf(".html");
									if (B == -1) {
										u.promoid += ":" + k[p]
									} else {
										if (c) {
											u.promoid += ":" + k[p].substring(0, B)
										}
									}
								}
								if ((s[1] === "contents.shopping" || s[1] === "shopping") && p >= 1) {
									break
								}
							}
						}
					}
				}
			}
			if (typeof(YAHOO.JP.shp.data.status.device) != "undefined") {
				if (YAHOO.JP.shp.data.status.device == 1) {
					w.opttype = "pc"
				} else {
					if (YAHOO.JP.shp.data.status.device == 3) {
						w.opttype = "smartphone"
					} else {
						if (YAHOO.JP.shp.data.status.device == 4) {
							w.opttype = "tablet"
						} else {
							w.opttype = "pc"
						}
					}
				}
			}
			if (typeof(YAHOO.JP.shp.data.status.app_type) != "undefined") {
				w.apptype = YAHOO.JP.shp.data.status.app_type
			}
			if (typeof(YAHOO.JP.shp.data.status.login) != "undefined") {
				if (YAHOO.JP.shp.data.status.login == true || YAHOO.JP.shp.data.status.login == "true") {
					w.status = "login"
				} else {
					w.status = "logout"
				}
			}
			if (typeof(YAHOO.JP.shp.data.status.visitor_type) != "undefined") {
				u.visit_tp = YAHOO.JP.shp.data.status.visitor_type
			}
		}
		if (typeof(YAHOO.JP.shp.data.page_detail) != "undefined") {
			if (typeof(YAHOO.JP.shp.data.page_detail.spaceid) != "undefined") {
				w.spaceid = YAHOO.JP.shp.data.page_detail.spaceid
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.page_type) != "undefined") {
				w.pagetype = YAHOO.JP.shp.data.page_detail.page_type
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.module_ids) != "undefined") {
				var d = YAHOO.JP.shp.data.page_detail.module_ids.split(",");
				var t = new Array();
				for (var A in d) {
					if (document.getElementById(d[A])) {
						t.push(d[A])
					}
				}
				w.modules = t
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.viewable_module_ids) != "undefined") {
				var f = YAHOO.JP.shp.data.page_detail.viewable_module_ids.split(",");
				var e = new Array();
				for (var A in f) {
					if (document.getElementById(f[A])) {
						e.push(f[A])
					}
				}
				w.viewable_modules = e
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.conttype) != "undefined") {
				w.conttype = YAHOO.JP.shp.data.page_detail.conttype
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.cat_path) != "undefined") {
				w.cat_path = YAHOO.JP.shp.data.page_detail.cat_path
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.ctsid) != "undefined") {
				w.ctsid = YAHOO.JP.shp.data.page_detail.ctsid
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.acttype) != "undefined") {
				w.acttype = YAHOO.JP.shp.data.page_detail.acttype
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.s_term) != "undefined") {
				u.s_term = YAHOO.JP.shp.data.page_detail.s_term
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.s_gender) != "undefined") {
				u.s_gender = YAHOO.JP.shp.data.page_detail.s_gender
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.s_age) != "undefined") {
				u.s_age = YAHOO.JP.shp.data.page_detail.s_age
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.ins) != "undefined") {
				u.ins = YAHOO.JP.shp.data.page_detail.ins
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.pg) != "undefined") {
				u.pg = YAHOO.JP.shp.data.page_detail.pg
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.keyword) != "undefined") {
				u.keyword = YAHOO.JP.shp.data.page_detail.keyword
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.storecat) != "undefined") {
				u.storecat = YAHOO.JP.shp.data.page_detail.storecat
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.class_) != "undefined") {
				u["class"] = YAHOO.JP.shp.data.page_detail.class_
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.query) != "undefined") {
				u.query = YAHOO.JP.shp.data.page_detail.query
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.n_sr) != "undefined") {
				u.n_sr = YAHOO.JP.shp.data.page_detail.n_sr
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.target) != "undefined") {
				u.target = YAHOO.JP.shp.data.page_detail.target
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.sort) != "undefined") {
				u.sort = YAHOO.JP.shp.data.page_detail.sort
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.vwtype) != "undefined") {
				u.vwtype = YAHOO.JP.shp.data.page_detail.vwtype
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.rcctxid) != "undefined") {
				u.rcctxid = YAHOO.JP.shp.data.page_detail.rcctxid
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.vtgrpid) != "undefined") {
				u.vtgrpid = YAHOO.JP.shp.data.page_detail.vtgrpid
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.yprdcd) != "undefined") {
				u.yprdcd = YAHOO.JP.shp.data.page_detail.yprdcd
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.vtestid) != "undefined") {
				u.vtestid = YAHOO.JP.shp.data.page_detail.vtestid
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.atcl_id) != "undefined") {
				u.atcl_id = YAHOO.JP.shp.data.page_detail.atcl_id
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.atcl_ttl) != "undefined") {
				u.atcl_ttl = YAHOO.JP.shp.data.page_detail.atcl_ttl
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.author) != "undefined") {
				u.author = YAHOO.JP.shp.data.page_detail.author
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.cat_tag1) != "undefined") {
				u.cat_tag1 = YAHOO.JP.shp.data.page_detail.cat_tag1
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.cat_tag2) != "undefined") {
				u.cat_tag2 = YAHOO.JP.shp.data.page_detail.cat_tag2
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.fre_tag) != "undefined") {
				u.fre_tag = YAHOO.JP.shp.data.page_detail.fre_tag
			}
			if (typeof(YAHOO.JP.shp.data.page_detail.yjcard) != "undefined") {
				u.yjcard = YAHOO.JP.shp.data.page_detail.yjcard
			}
		}
		if (typeof(YAHOO.JP.shp.data.rapid_util) != "undefined") {
			for (var A in YAHOO.JP.shp.data.rapid_util) {
				if (typeof(YAHOO.JP.shp.data.rapid_util[A] != "undefined")) {
					u[A] = YAHOO.JP.shp.data.rapid_util[A]
				} else {
					u[A] = ""
				}
			}
		}
		YAHOO.JP.shp.data.setStore = function(C) {
			var i = "";
			if (typeof(C.store_name) != "undefined") {
				i += '"' + C.store_name.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.store_id) != "undefined") {
				i += '"' + C.store_id.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.total_price) != "undefined") {
				i += '"' + C.total_price.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.sale_total_price) != "undefined") {
				i += '"' + C.sale_total_price.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.total_point) != "undefined") {
				i += '"' + C.total_point.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.coupon_type) != "undefined") {
				i += '"' + C.coupon_type.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.coupon_id) != "undefined") {
				i += '"' + C.coupon_id.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.store_rating) != "undefined") {
				i += '"' + C.store_rating.toString() + '"'
			} else {
				i += '""'
			}
			return i
		};
		if (typeof(YAHOO.JP.shp.data.store) != "undefined") {
			if (Object.prototype.toString.call(YAHOO.JP.shp.data.store) === "[object Array]") {
				for (var p = 0; p < YAHOO.JP.shp.data.store.length; p++) {
					var y = "store" + (p + 1).toString();
					var x = YAHOO.JP.shp.data.setStore(YAHOO.JP.shp.data.store[p]);
					if (typeof(x) != "undefined" && x != "") {
						u[y] = x
					}
				}
			} else {
				var y = "store1";
				var x = YAHOO.JP.shp.data.setStore(YAHOO.JP.shp.data.store);
				if (typeof(x) != "undefined" && x != "") {
					u[y] = x
				}
			}
		}
		YAHOO.JP.shp.data.setItem = function(C) {
			var i = "";
			if (typeof(C.name) != "undefined") {
				i += '"' + C.name.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.id) != "undefined") {
				i += '"' + C.id.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.store_id) != "undefined") {
				i += '"' + C.store_id.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.price) != "undefined") {
				i += '"' + C.price.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.num) != "undefined") {
				i += '"' + C.num.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.sum_price) != "undefined") {
				i += '"' + C.sum_price.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.point) != "undefined") {
				i += '"' + C.point.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.rate_point) != "undefined") {
				i += '"' + C.rate_point.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.coupon_type) != "undefined") {
				i += '"' + C.coupon_type.toString() + '",'
			} else {
				i += '"",'
			}
			if (typeof(C.coupon_id) != "undefined") {
				i += '"' + C.coupon_id.toString() + '"'
			} else {
				i += '""'
			}
			return i
		};
		if (typeof(YAHOO.JP.shp.data.item) != "undefined") {
			if (Object.prototype.toString.call(YAHOO.JP.shp.data.item) === "[object Array]") {
				for (var p = 0; p < YAHOO.JP.shp.data.item.length; p++) {
					var o = "item" + (p + 1).toString();
					var n = YAHOO.JP.shp.data.setItem(YAHOO.JP.shp.data.item[p]);
					if (typeof(n) != "undefined" && n != "") {
						u[o] = n
					}
				}
			} else {
				var o = "item1";
				var n = YAHOO.JP.shp.data.setItem(YAHOO.JP.shp.data.item);
				if (typeof(n) != "undefined" && n != "") {
					u[o] = n
				}
			}
		}
	}
	var h = document.getElementsByName("keywords");
	if (h.length > 0) {
		if (typeof(h.item(0).content) != "undefined") {
			w.metakwd = h.item(0).content
		}
	}
	v(w, u)
})();
