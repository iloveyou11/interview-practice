(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{494:function(e,t,o){"use strict";o.r(t);var s=o(44),c=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"websocket的实现和应用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#websocket的实现和应用"}},[e._v("#")]),e._v(" WebSocket的实现和应用")]),e._v(" "),o("p",[e._v("我们知道，在网络中的两个应用程序（进程）需要全双工相互通信（全双工即双方可同时向对方发送消息），需要用到的就是socket，它能够提供端对端通信，对于程序员来讲，他只需要在某个应用程序的一端（暂且称之为客户端）创建一个socket实例并且提供它所要连接一端（暂且称之为服务端）的IP地址和端口，而另外一端（服务端）创建另一个socket并绑定本地端口进行监听，然后客户端进行连接服务端，服务端接受连接之后双方建立了一个端对端的TCP连接，在该连接上就可以双向通讯了，而且一旦建立这个连接之后，通信双方就没有客户端服务端之分了，提供的就是端对端通信了。我们可以采取这种方式构建一个桌面版的im程序，让不同主机上的用户发送消息。从本质上来说，socket并不是一个新的协议，它只是为了便于程序员进行网络编程而对tcp/ip协议族通信机制的一种封装。")]),e._v(" "),o("p",[e._v("websocket是html5规范中的一个部分，它借鉴了socket这种思想，为web应用程序客户端和服务端之间（注意是客户端服务端）提供了一种全双工通信机制。同时，它又是一种新的应用层协议，websocket协议是为了提供web应用程序和服务端全双工通信而专门制定的一种应用层协议，通常它表示为：ws://echo.websocket.org/?encoding=text HTTP/1.1，可以看到除了前面的协议名和http不同之外，它的表示地址就是传统的url地址。")]),e._v(" "),o("p",[e._v("可以看到，websocket并不是简单地将socket这一概念在浏览器环境中的移植，本文最后也会通过一个小的demo来进一步讲述socket和websocket在使用上的区别。")]),e._v(" "),o("p",[o("strong",[e._v("websocket的通信原理和机制：")])]),e._v(" "),o("p",[e._v("总结为websocket握手需要借助于http协议，建立连接后通信过程使用websocket协议。同时需要了解的是，该websocket连接还是基于我们刚才发起http连接的那个TCP连接。一旦建立连接之后，我们就可以进行数据传输了，websocket提供两种数据传输：文本数据和二进制数据。\n基于以上分析，我们可以看到，websocket能够提供低延迟，高性能的客户端与服务端的双向数据通信。它颠覆了之前web开发的请求处理响应模式，并且提供了一种真正意义上的客户端请求，服务器推送数据的模式，特别适合实时数据交互应用开发。")]),e._v(" "),o("p",[o("strong",[e._v("WebSocket使用场景")])]),e._v(" "),o("ol",[o("li",[e._v("社交聊天\n最著名的就是微信，QQ，这一类社交聊天的app。这一类聊天app的特点是低延迟，高即时。即时是这里面要求最高的，如果有一个紧急的事情，通过IM软件通知你，假设网络环境良好的情况下，这条message还无法立即送达到你的客户端上，紧急的事情都结束了，你才收到消息，那么这个软件肯定是失败的。")]),e._v(" "),o("li",[e._v("弹幕\n说到这里，大家一定里面想到了A站和B站了。确实，他们的弹幕一直是一种特色。而且弹幕对于一个视频来说，很可能弹幕才是精华。发弹幕需要实时显示，也需要和聊天一样，需要即时。")]),e._v(" "),o("li",[e._v("多玩家游戏")]),e._v(" "),o("li",[e._v("协同编辑\n现在很多开源项目都是分散在世界各地的开发者一起协同开发，此时就会用到版本控制系统，比如Git，SVN去合并冲突。但是如果有一份文档，支持多人实时在线协同编辑，那么此时就会用到比如WebSocket了，它可以保证各个编辑者都在编辑同一个文档，此时不需要用到Git，SVN这些版本控制，因为在协同编辑界面就会实时看到对方编辑了什么，谁在修改哪些段落和文字。")]),e._v(" "),o("li",[e._v("股票基金实时报价\n金融界瞬息万变——几乎是每毫秒都在变化。如果采用的网络架构无法满足实时性，那么就会给客户带来巨大的损失。几毫秒钱股票开始大跌，几秒以后才刷新数据，一秒钟的时间内，很可能用户就已经损失巨大财产了。")]),e._v(" "),o("li",[e._v("体育实况更新\n全世界的球迷，体育爱好者特别多，当然大家在关心自己喜欢的体育活动的时候，比赛实时的赛况是他们最最关心的事情。这类新闻中最好的体验就是利用Websocket达到实时的更新！")]),e._v(" "),o("li",[e._v("视频会议/聊天\n视频会议并不能代替和真人相见，但是他能让分布在全球天涯海角的人聚在电脑前一起开会。既能节省大家聚在一起路上花费的时间，讨论聚会地点的纠结，还能随时随地，只要有网络就可以开会。")]),e._v(" "),o("li",[e._v("基于位置的应用\n越来越多的开发者借用移动设备的GPS功能来实现他们基于位置的网络应用。如果你一直记录用户的位置(比如运行应用来记录运动轨迹)，你可以收集到更加细致化的数据。")]),e._v(" "),o("li",[e._v("在线教育\n在线教育近几年也发展迅速。优点很多，免去了场地的限制，能让名师的资源合理的分配给全国各地想要学习知识的同学手上，Websocket是个不错的选择，可以视频聊天、即时聊天以及其与别人合作一起在网上讨论问题…")]),e._v(" "),o("li",[e._v("智能家居\n这也是我一毕业加入的一个伟大的物联网智能家居的公司。考虑到家里的智能设备的状态必须需要实时的展现在手机app客户端上，毫无疑问选择了Websocket。")])])])}),[],!1,null,null,null);t.default=c.exports}}]);