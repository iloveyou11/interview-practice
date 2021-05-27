(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{397:function(e,o,a){"use strict";a.r(o);var t=a(44),v=Object(t.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"浏览器存储方案有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器存储方案有哪些"}},[e._v("#")]),e._v(" 浏览器存储方案有哪些？")]),e._v(" "),a("p",[e._v("总的来说,现在市面上最常见的数据存储方案是以下三种：")]),e._v(" "),a("h4",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" Cookie")]),e._v(" "),a("p",[e._v("Cookie的又称是HTTP Cookie，最初是在客户端用于存储会话信息，从底层来看，它作为HTTP协议的一种扩展实现，Cookie数据会自动在web浏览器和web服务器之间传输，因此在服务器端脚本就可以读写存储的cookie的值，因此Cookie通常用于存储一些通用的数据，比如用户的登陆状态，首选项等。虽然随着时代的进步，HTML5所提供的web存储机制已经逐步替代了Cookie，但有些较为老的浏览器还是不兼容web存储机制，因此正处于这个老旧更替阶段的我们对于它还是要了解了解的。")]),e._v(" "),a("p",[e._v("优点：")]),e._v(" "),a("ul",[a("li",[e._v("首先由于操作Cookie的API很早就已经定义和实现了，因此相比于其他的数据存储方式，Cookie的兼容性非常的好，兼容现在市面上所有的主流浏览器，我们在使用它的时候完全不用担心兼容问题。")])]),e._v(" "),a("p",[e._v("缺点：")]),e._v(" "),a("ul",[a("li",[e._v("存储量小。虽不同浏览器的存储量不同，但基本上都是在4kb左右。")]),e._v(" "),a("li",[e._v("影响性能。由于Cookie会由浏览器作为请求头发送，因此当Cookie存储信息过多时，会影响特定域的资源获取的效率，增加文档传输的负载。")]),e._v(" "),a("li",[e._v("只能储存字符串。")]),e._v(" "),a("li",[e._v("安全问题。存储在Cookie的任何数据可以被他人访问，因此不能在Cookie中储存重要的信息。")]),e._v(" "),a("li",[e._v("由于第三方Cookie的滥用，所以很多老司机在浏览网页时会禁用Cookie，所以我们不得不测试用户是否支持Cookie，这也是很麻烦的一件事。")])]),e._v(" "),a("h4",{attrs:{id:"web存储-localstorage和seesionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web存储-localstorage和seesionstorage"}},[e._v("#")]),e._v(" web存储 (localStorage和seesionStorage)")]),e._v(" "),a("p",[e._v("localStorage对象在修订过的HTML5规范中作为持久保存客户端数据的方案取代了我们上面所提到的globalStorage。从功能上来讲，我们可以通过locaStorage在浏览器端存储键值对数据，它相比于cookie而言，提供了更为直观的API，且在安全上相对好一点。通过localStorage存储的数据时永久性的，除非我们使用removeItem来删除或者用户通过设置浏览器配置来删除，负责数据会一直保留在用户的电脑上，永不过期。而且虽然localStorage只能存储字符串，但它也可以存储字符串化的JSON数据，因此相比于cookie，localStorage能存储更复杂的数据。总的来说相较于cookie，")]),e._v(" "),a("p",[e._v("优点：")]),e._v(" "),a("ul",[a("li",[e._v("提供了简单明了的API来进行操作")]),e._v(" "),a("li",[e._v("更加安全")]),e._v(" "),a("li",[e._v("可储存的数据量更大")])]),e._v(" "),a("p",[e._v("sessionStorage是web存储机制的另一大对象，sessionStorage 属性允许我们去访问一个 session Storage 对象。它与 localStorage 相似，不同之处在于 localStorage里面存储的数据没有过期时间设置，而Session Storage只存储当前会话页的数据，且只有当用户关闭当前会话页或浏览器时，数据才会被清除。在兼容性和优点方面，sessionStorage和localStorage是差不多的。")]),e._v(" "),a("h4",{attrs:{id:"indexeddb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[e._v("#")]),e._v(" IndexedDB")]),e._v(" "),a("p",[e._v("虽然web存储机制对于存储较少量的数据非常便捷好用，但对于存储更大量的结构化数据来说，这种方法就不太满足开发者们的需求了。IndexedDB就是为了应对这个需求而产生的，它是由HTML5所提供的一种本地存储，用于在浏览器中储存较大数据结构的 Web API，并提供索引功能以实现高性能查找。它一般用于保存大量用户数据并要求数据之间有搜索需要的场景，当网络断开时，用户就可以做一些离线的操作。它较之SQL更为方便，不需要写一些特定的语法对数据进行操作，数据格式是JSON。、")]),e._v(" "),a("p",[e._v("优点：")]),e._v(" "),a("ul",[a("li",[e._v("拥有更大的储存空间")]),e._v(" "),a("li",[e._v("能够处理更为复杂和结构化的数据")]),e._v(" "),a("li",[e._v("拥有更多的交互控制")]),e._v(" "),a("li",[e._v("每个'database'中可以拥有多个'database'和'table'")])]),e._v(" "),a("p",[e._v("缺点：")]),e._v(" "),a("ul",[a("li",[e._v("存储空间限制：一个单独的数据库项目的大小没有限制。然而可能会限制每个 IndexedDB 数据库的大小。这个限制（以及用户界面对它进行断言的方式）在各个浏览器上也可能有所不同。")]),e._v(" "),a("li",[e._v("兼容性问题")]),e._v(" "),a("li",[e._v("indexedDB使用同源原则，这意味着它把存储空间绑定到了创建它的站点的源（典型情况下，就是站点的域或是子域），所以它不能被任何其他源访问。")])])])}),[],!1,null,null,null);o.default=v.exports}}]);