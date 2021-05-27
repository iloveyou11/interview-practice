(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{491:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"如何解决页面数据不更新问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决页面数据不更新问题"}},[t._v("#")]),t._v(" 如何解决页面数据不更新问题？")]),t._v(" "),a("p",[t._v("有两种情况：")]),t._v(" "),a("ul",[a("li",[t._v("浏览器缓存导致的")]),t._v(" "),a("li",[t._v("数据库更新了但是前端无感知")])]),t._v(" "),a("h4",{attrs:{id:"浏览器缓存导致的不刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存导致的不刷新"}},[t._v("#")]),t._v(" 浏览器缓存导致的不刷新")]),t._v(" "),a("p",[t._v("可以在给url动态加上一个生成随机数的参数。这样每次打开路径都不一样，就不会去加载缓存。\n浏览器会默认的缓存一些文件，如css、js、图片资源等，就是为了更快的响应页面。当然这是一种优化。缓存机制是根据资源的URL来判断的，如果URL对应在本地的缓存资源有的话，就加载本地的资源，没有再去请求。 如果不想让浏览器缓存这些资源的话，可以在引入的时候，添加随机数参数，使请求的URL发生变化\n数据库发生变化，怎么及时更新缓存？")]),t._v(" "),a("ol",[a("li",[t._v("修改js的文件名。我觉得这样很麻烦。造成版本系统的维护困难。不建议。除非是完全ftp。不过每次发布都修改文件名称。的确造成维护的时候很茫然，接手的人看到文件名称变化，会比较难维护")]),t._v(" "),a("li",[t._v("路径后面加时间戳或者随机数的方式。\n一般都是在html模版中使用一个时间戳或者随机数函数生成一个值。")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{passport_host}}js/common.js?t={{date("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('Y-m-d")}}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("今天和明天的值不同了，重新请求服务器。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{passport_host}}js/common.js?t={{time()}}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("使用时间戳，每刷新一次html，值都不同。随机数也是一样的，不推荐使用这种方式，因为这样的方式导致的问题是，每次刷新html，时间戳都是变化的，url就总是唯一的，于是浏览器总是去请求服务端获取js文件，不会使用浏览器本地的缓存。占用带宽,影响速度\n3. 路径后面加js的版本号。这样是业界比较成熟的做法。\n关键是这个版本号，怎么做版本？ 难道真的纳入版本系统里面去？不是的。我突然灵感来，想到一种程序员自己控制的办法。自己主动加时间，如果本次发布，修改了哪几个js文件。那么就在后面加上一个时间点：年月日。如果一天会发布多次对js文件的修改，那么程序员还要精确点。年月日时分秒即可。")]),t._v(" "),a("h4",{attrs:{id:"数据库更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库更新"}},[t._v("#")]),t._v(" 数据库更新")]),t._v(" "),a("p",[t._v("我知道有三种方式：")]),t._v(" "),a("ol",[a("li",[t._v("ajax短连接：客户端每隔一秒钟发一次请求，服务器收到请求后会立刻返回结果，不管有没有新数据。")]),t._v(" "),a("li",[t._v("ajax长连接：客户端发送一次请求，服务器端收到请求后查询有没有新数据，如果没有新数据就阻塞这个请求，直到有新数据或者超时为止。客户端每次收到请求返回结果后立刻再发一次请求。comet貌似就是这个原理。")]),t._v(" "),a("li",[t._v("WebSocket：这就不是一个HTTP协议了，而是一个tcp协议，而且Socket这个玩意顾名思义就是一个流了，可以双向操作。缺点是有些浏览器不支持。\n对比延迟： 假设网络延迟是m毫秒，那么ajax短连接的延迟在m到1000毫秒之间，另外两种基本只有m毫秒的延迟。 对比资源占用： 应该是1>2>3。但是1和2的比较要看情况，如果两次请求间隔时间很长的话应该是2>1>3。\nwebsocket实现数据库更新时前端页面实时刷新、\n如题，实现以上功能，我知道主要有两大种思路：")]),t._v(" "),a("li",[t._v("轮询：轮询的原理是隔一段时间向服务器发送一个请求，这里不累述。这里主要谈一下第二种思路。")]),t._v(" "),a("li",[t._v("websocket进行前后端通讯：websocket是html5的新协议，基于TCP，在一次握手后，建立http连接，实现客户端与服务端全双工通信。相比较轮询机制，节约资源，不需要频繁的请求。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);