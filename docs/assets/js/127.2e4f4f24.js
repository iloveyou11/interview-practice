(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{482:function(t,e,n){"use strict";n.r(e);var l=n(44),r=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"简述cdn的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简述cdn的原理"}},[t._v("#")]),t._v(" 简述CDN的原理")]),t._v(" "),n("p",[t._v('CDN的全称是Content Delivery Network，即内容分发网络。其目的是通过在现有的Internet中增加一层新的CACHE(缓存)层，将网站的内容发布到最接近用户的网络"边缘"的节点，使用户可以就近取得所需的内容，提高用户访问网站的响应速度。从技术上全面解决由于网络带宽小、用户访问量大、网点分布不均等原因，提高用户访问网站的响应速度。')]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img.alicdn.com/imgextra/i1/O1CN01n9wAkK1yx08wZYo4s_!!6000000006644-2-tps-1420-536.png",alt:"CDN"}})]),t._v(" "),n("p",[t._v("通过上图，我们可以了解到，使用了CDN缓存后的网站的访问过程变为：")]),t._v(" "),n("ol",[n("li",[t._v("用户向浏览器提供要访问的域名；")]),t._v(" "),n("li",[t._v("浏览器调用域名解析库对域名进行解析，由于CDN对域名解析过程进行了调整，所以解析函数库一般得到的是该域名对应的CNAME记录，为了得到实际IP地址，浏览器需要再次对获得的CNAME域名进行解析以得到实际的IP地址；在此过程中，使用的全局负载均衡DNS解析，如根据地理位置信息解析对应的IP地址，使得用户能就近访问。")]),t._v(" "),n("li",[t._v("此次解析得到CDN缓存服务器的IP地址，浏览器在得到实际的IP地址以后，向缓存服务器发出访问请求；")]),t._v(" "),n("li",[t._v("缓存服务器根据浏览器提供的要访问的域名，通过Cache内部专用DNS解析得到此域名的实际IP地址，再由缓存服务器向此实际IP地址提交访问请求；")]),t._v(" "),n("li",[t._v("缓存服务器从实际IP地址得得到内容以后，一方面在本地进行保存，以备以后使用，另一方面把获取的数据返回给客户端，完成数据服务过程；")]),t._v(" "),n("li",[t._v("客户端得到由缓存服务器返回的数据以后显示出来并完成整个浏览的数据请求过程。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);