(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{437:function(e,t,v){"use strict";v.r(t);var r=v(44),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"tcp-三次握手和四次挥手的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手和四次挥手的理解"}},[e._v("#")]),e._v(" TCP 三次握手和四次挥手的理解")]),e._v(" "),v("p",[e._v("非常形象的比喻图解：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/21079721/96951415-0828e780-151f-11eb-93a3-e2e8045d456d.png",alt:"TCP连接"}})]),e._v(" "),v("p",[e._v("四次挥手一定是存在的——由于TCP连接是全双工的，因此每个方向都必须单独进行关闭，所以即使没有最后一个包，也需要先回复断开连接的请求，然后再发送关闭请求。")]),e._v(" "),v("ul",[v("li",[e._v("第一次client => server 只能server判断出【client具备发送能力】")]),e._v(" "),v("li",[e._v("第二次 server => client client就可以判断出【server具备发送和接受能力】，此时client还需让server知道自己接收能力没问题于是就有了第三次")]),e._v(" "),v("li",[e._v("第三次 client => server 【双方均保证了自己的接收和发送能力没有问题】")])]),e._v(" "),v("p",[e._v("这里有几个参数需要了解一下：SYN、seq、ACK、FIN：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://camo.githubusercontent.com/e5d91961cdf9074b5a1d8f5e3607bb87cffada55407ff253cf56d4ce76b64ca2/687474703a2f2f71696e69752e63646e2e636c383032332e636f6d2f485454502f7463702d332d7761792d68616e647368616b652e6a7067",alt:"TCP参数"}})]),e._v(" "),v("p",[v("strong",[e._v("TCP 有6中标志位：")])]),e._v(" "),v("ul",[v("li",[e._v("SYN（synchronous 建立连接）")]),e._v(" "),v("li",[e._v("ACK（acknowledgement 确认）")]),e._v(" "),v("li",[e._v("PSH（push 传送）")]),e._v(" "),v("li",[e._v("FIN（finish 结束）")]),e._v(" "),v("li",[e._v("RST（reset 重置）")]),e._v(" "),v("li",[e._v("URG（urgent 紧急）")])]),e._v(" "),v("p",[v("strong",[e._v("另外数据包：")])]),e._v(" "),v("ul",[v("li",[e._v("Sequence number（顺序号码）")]),e._v(" "),v("li",[e._v("Acknowledge number（确认号码）")])]),e._v(" "),v("p",[v("strong",[e._v("非常通俗的解释：")])]),e._v(" "),v("ol",[v("li",[e._v("第一次握手中 SYN = 1，代表客户端 Client 要建立连接，同时随机产生 seq（Sequence number）= x 的数据包，然后传输到 Server；")]),e._v(" "),v("li",[e._v("Server 收到 Client 的信息，通过 SYN = 1 知道是要建立连接，然后向 Client 发送信息，ACK = 1 代表确认，ack（Acknowledge number）= x + 1，SYN = 1 代表建立连接，随机产生 seq = y 的数据包；")]),e._v(" "),v("li",[e._v("Clien 收到 Server 的信息，通过 SYN = 1 知道是要建立连接，然后检查 ack 是否正确，即第一次发送的 seq + 1，同时检查 ACK 是否为 1，若正确，Client 再发送 ack = y + 1，ACK = 1 到 Server，Server 收到确认 seq 值和 ACK = 1 后则连接建立成功。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);