(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{489:function(e,t,r){"use strict";r.r(t);var o=r(44),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"前端安全系列之二-如何防止csrf攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端安全系列之二-如何防止csrf攻击"}},[e._v("#")]),e._v(" 前端安全系列之二：如何防止CSRF攻击？")]),e._v(" "),r("p",[e._v("推荐阅读"),r("a",{attrs:{href:"https://juejin.cn/post/6844903689702866952",target:"_blank",rel:"noopener noreferrer"}},[e._v("《前端安全系列之二：如何防止CSRF攻击？》"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("CSRF(Cross Site Request Forgery)，即跨站请求伪造，是一种常见的Web攻击，它利用用户已登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。")]),e._v(" "),r("p",[e._v("防范 CSRF 攻击可以遵循以下几种规则：")]),e._v(" "),r("ul",[r("li",[e._v("Get 请求不对数据进行修改")]),e._v(" "),r("li",[e._v("不让第三方网站访问到用户 Cookie")]),e._v(" "),r("li",[e._v("阻止第三方网站请求接口")]),e._v(" "),r("li",[e._v("请求时附带验证信息，比如验证码或者 Token")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Referer Check\nHTTP Referer是header的一部分，当浏览器向web服务器发送请求时，一般会带上Referer信息告诉服务器是从哪个页面链接过来的，服务器籍此可以获得一些信息用于处理。可以通过检查请求的来源来防御CSRF攻击。正常请求的referer具有一定规律，如在提交表单的referer必定是在该页面发起的请求。所以通过检查http包头referer的值是不是这个页面，来判断是不是CSRF攻击。\n但在某些情况下如从https跳转到http，浏览器处于安全考虑，不会发送referer，服务器就无法进行check了。若与该网站同域的其他网站有XSS漏洞，那么攻击者可以在其他网站注入恶意脚本，受害者进入了此类同域的网址，也会遭受攻击。出于以上原因，无法完全依赖Referer Check作为防御CSRF的主要手段。但是可以通过Referer Check来监控CSRF攻击的发生。")])]),e._v(" "),r("li",[r("p",[e._v("Anti CSRF Token\n目前比较完善的解决方案是加入Anti-CSRF-Token。即发送请求时在HTTP 请求中以参数的形式加入一个随机产生的token，并在服务器建立一个拦截器来验证这个token。服务器读取浏览器当前域cookie中这个token值，会进行校验该请求当中的token和cookie当中的token值是否都存在且相等，才认为这是合法的请求。否则认为这次请求是违法的，拒绝该次服务。\n这种方法相比Referer检查要安全很多，token可以在用户登陆后产生并放于session或cookie中，然后在每次请求时服务器把token从session或cookie中拿出，与本次请求中的token 进行比对。由于token的存在，攻击者无法再构造出一个完整的URL实施CSRF攻击。但在处理多个页面共存问题时，当某个页面消耗掉token后，其他页面的表单保存的还是被消耗掉的那个token，其他页面的表单提交时会出现token错误。")])]),e._v(" "),r("li",[r("p",[e._v("验证码\n应用程序和用户进行交互过程中，特别是账户交易这种核心步骤，强制用户输入验证码，才能完成最终请求。在通常情况下，验证码够很好地遏制CSRF攻击。但增加验证码降低了用户的体验，网站不能给所有的操作都加上验证码。所以只能将验证码作为一种辅助手段，在关键业务点设置验证码。")])]),e._v(" "),r("li",[r("p",[e._v("SameSite\n可以对 Cookie 设置 SameSite 属性。该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);