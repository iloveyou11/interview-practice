(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{445:function(t,s,l){"use strict";l.r(s);var a=l(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"https-握手过程中-客户端如何验证证书的合法性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#https-握手过程中-客户端如何验证证书的合法性"}},[t._v("#")]),t._v(" HTTPS 握手过程中，客户端如何验证证书的合法性")]),t._v(" "),l("ol",[l("li",[t._v("首先浏览器读取证书中的证书所有者、有效期等信息进行校验，校验证书的网站域名是否与证书颁发的域名一致，校验证书是否在有效期内")]),t._v(" "),l("li",[t._v("浏览器开始查找操作系统中已内置的受信任的证书发布机构CA，与服务器发来的证书中的颁发者CA比对，用于校验证书是否为合法机构颁发")]),t._v(" "),l("li",[t._v("如果找不到，浏览器就会报错，说明服务器发来的证书是不可信任的。")]),t._v(" "),l("li",[t._v("如果找到，那么浏览器就会从操作系统中取出颁发者CA 的公钥(多数浏览器开发商发布版本时，会事先在内部植入常用认证机关的公开密钥)，然后对服务器发来的证书里面的签名进行解密")]),t._v(" "),l("li",[t._v("浏览器使用相同的hash算法计算出服务器发来的证书的hash值，将这个计算的hash值与证书中签名做对比")]),t._v(" "),l("li",[t._v("对比结果一致，则证明服务器发来的证书合法，没有被冒充")])])])}),[],!1,null,null,null);s.default=e.exports}}]);