(function(h,d,i){"use strict";var b=[/\.rakuten\.(?:co\.jp|ne\.jp|com|hk)\.?$/,/\.rakuten-it\.com\.?$/,/(?:^|\.)ptengine\.(?:jp|com|cn)\.?$/,/^webcache\.googleusercontent\.com\.?$/],c=h.phishingAlertTest,a=i.hostname,n=!1,o;for(o in b)if(b[o].test(a)){n=!0;break}if(!(n^c)&&/^https?:$/.test(i.protocol)){var e=d.body,j=d.documentElement||e,p=function(){var s=h.innerWidth||j.clientWidth,a=Math.max(j.clientHeight,j.scrollHeight,e.clientHeight,e.scrollHeight);return"width:"+s+"px;height:"+a+"px;"},f=function(a,b){a.style.cssText=
b.replace(/;/g,"!important;")},a="&u="+encodeURIComponent(i.href)+"&r="+encodeURIComponent(d.referrer)+"&t="+(new Date).getTime(),b="http://yesno.event.rakuten.co.jp/t.gif?p="+(c?"91":"1")+a,t="http://yesno.event.rakuten.co.jp/t.gif?p="+(c?"92":"2")+a,c=/MSIE [6789]/.test(navigator.userAgent),a=d.createElement("div");a.innerHTML='<img src="//r.r10s.jp/com/js/d/pa/alert.png" usemap="#phishing_alert" width="800" height="188"><map name="phishing_alert"><area shape="rect" coords="260,142,418,158" href="http://ichiba.faq.rakuten.co.jp/app/answers/detail/a_id/15818/"></map><img src="'+
b+'">';a.getElementsByTagName("area")[0].onclick=function(){var a=new Image;a.onload=a.onerror=function(){i.href="http://ichiba.faq.rakuten.co.jp/app/answers/detail/a_id/15818/"};a.src=t;return!1};f(a,"width:800px;margin:100px auto 0px;display:block;");var g=p(),b="z-index:2147483647;position:"+(c?"absolute":"fixed")+";left:0px;top:0px;",q="background:#000000;background-image:none;filter:alpha(opacity=80);opacity:0.8;"+b,r="background-image:none;text-align:center;"+b,l=d.createElement("div"),k=d.createElement("div"),
m=c?function(){var a="top:"+j.scrollTop+"px;";f(l,q+g+a);f(k,r+g+a)}:function(){f(l,q+g);f(k,r+g)};m();k.appendChild(a);e.appendChild(l);e.appendChild(k);h.onresize=function(){g=p();m()};if(c)h.onscroll=m}})(window,document,location);