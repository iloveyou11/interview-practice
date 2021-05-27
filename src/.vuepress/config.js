const path = require('path');

module.exports = {
  base: '/interview-practice/',
  title: '前端面试刷题',
  description: '每日半小时，巩固基础，助力面试',
  dest: path.resolve(__dirname, '../../docs'),
  themeConfig: {
    nav: [
      { text: 'github', link: 'https://github.com/iloveyou11/interview-practice' },
      { text: '个人博客', link: 'https://github.com/iloveyou11/learning-blog' }
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        "title": "js系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          // 基础
          "/js/35", // 描述new一个对象的过程
          "/js/36", // 常用DOM/BOM操作
          "/js/38", // js中的隐式转换（掌握）
          "/js/39", // ES6都掌握了吗？
          "/js/17", // es6及es6+能力集最常用哪些？
          "/js/24", // typeof和instanceof
          "/js/25", // 判断类型的四种方法
          "/js/29", // 箭头函数和普通函数的区别是什么？
          "/js/22", // 闭包的使用场景？
          "/js/26", // IIFE（立即调用表达式）打印结果
          "/js/41", // call/apply/bind的用法和区别
          "/js/42", // undefined 和 null 区别？
          "/js/43", // 你真的理解事件冒泡和事件捕获吗？
          "/js/33", // object和map有什么区别？
          "/js/16", // 求多个数组的交集
          "/js/20", // 什么是继承？如何实现继承？
          "/js/21", // 编写一个函数，输出以下结果
          "/js/46", // 防抖和节流的作用和实现
          
          // 进阶
          "/js/44", // js执行机制与事件循环
          "/js/1", // Async/Await如何同步方式实现异步
          "/js/2", // JS异步解决方案发展以及优缺点
          "/js/3", // setTimeout/Promise/Async区别
          "/js/27", // 关于async/await的执行问题
          "/js/40", // 浅拷贝和深拷贝区别，描述或者手写深拷贝
          "/js/47", // 如何使用class模拟私有变量
          "/js/6", // 用setTimeout实现setInterval
          "/js/7", // 监听一个变量的变化，需要怎么做
          "/js/8", // 观察者模块 vs 发布订阅模式
          "/js/9", // 模拟实现一个 localStorage
          "/js/37", // 实现Promise
          "/js/10", // 实现Promise.all()
          "/js/11", // 实现Promise.race()
          "/js/12", // 实现Promise.any()
          "/js/13", // 实现Promise.finally()
          "/js/14", // 实现Promise.retry()
          "/js/15", // 实现Promise.allSettled()
          "/js/18", // 实现rgb(255, 255, 255)到#FFFFFF
          "/js/23", // babel是怎么解析代码的？
          "/js/28", // ['1', '2', '3'].map(parseInt)
          "/js/30", // 手写字符转base64
          "/js/5", // 实现一个map函数
          "/js/32", // js实现单向链表
          "/js/4", // 如何模拟实现 Array.prototype.splice
          "/js/45", // 前端错误监控与错误上报
          "/js/34", // 如何排查内存泄漏带来的页面卡顿
          "/js/48", // 1000-div问题
          "/js/49", // 2万小球问题
     
        ]
      },
      {
        "title": "html/css系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          // html
          "/htmlcss/22", // 对html语义化的理解

          // css
          "/htmlcss/21", // 懒加载和预加载了解吗？
          "/htmlcss/23", // 简述一下src与href的区别？
          "/htmlcss/14", // 选择器和伪类
          "/htmlcss/15", // position的几种属性
          "/htmlcss/9", // 清除浮动的方式有哪些？
          "/htmlcss/16", // 回流和重绘
          "/htmlcss/6", // 介绍下回流和重绘以及如何进行优化
          "/htmlcss/25", // css获取宽高的方式
          "/htmlcss/10", // 自适应布局
          "/htmlcss/11", // 水平居中与垂直居中
          "/htmlcss/5", // 如何实现文本溢出省略效果
          "/htmlcss/13", // 盒模型与BFC
          "/htmlcss/7", // 介绍BFC及其应用
          "/htmlcss/12", // flex布局 & 常用属性
          "/htmlcss/2", // flex: 0 1 auto 是什么意思？
          "/htmlcss/3", // flex-shrink相关计算题
          "/htmlcss/4", // flex-grow相关计算题
          "/htmlcss/17", // 移动web开发踩坑
          "/htmlcss/18", // 移动端适配方案
          "/htmlcss/19", // 移动端300ms点击延迟和点击穿透
          "/htmlcss/20", // 1像素边框
        ]
      },
      {
        "title": "浏览器系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "/browser/7", // 描述输入url到页面出现的流程
          "/browser/1", // 浏览器和 Node 事件循环的区别
          "/browser/8", // 常用的跨域解决方案有哪些？
          "/browser/6", // 浏览器存储方案有哪些？
          "/browser/2", // 浏览器为什么不会劫持 token？
          "/browser/10", // Cookie、Session、Token、JWT？
          "/browser/9", // 前端保存登录状态信息该如何保存
          "/browser/4", // memory cache 和 disk cache
          "/browser/3", // 如何计算白屏时间和首屏时间
          "/browser/5", // 发送数据埋点为何使用1x1透明gif图？
          "/browser/11", // 前端如何进行seo优化？
          "/browser/12", // 前后端分离的项目如何seo？
        ]
      },
      {
        "title": "前端工程系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "/workflow/1", // webpack核心原理
          "/workflow/2", // webpack和gulp有什么不同？
          "/workflow/3", // loader和plugin有什么不同？
          "/workflow/4", // webpack打包vue太慢了怎么办？
        ]
      },
      {
        "title": "框架系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "/framework/1", // react或vue中diff时间复杂度
          "/framework/2", // react-router里Link和a有什么区别
          "/framework/3", // reducer为什么设计成纯函数？
          "/framework/4", // Virtual DOM真的比操作DOM快吗？
          "/framework/5", // 聊聊 Redux 和 Vuex 的设计思想
          "/framework/6", // React中setState同步还是异步？
          "/framework/8", // react api原理知道吗？
          "/framework/9", // react hooks原理知道吗？
          "/framework/12", // dom diff怎么实现的知道吗？
          "/framework/7", // vue是如何对数组方法进行变异的？
          "/framework/11", // vue中MVVM模式怎么实现的知道吗？
          "/framework/10", // jquery原理知道多少？

        ]
      },
      {
        "title": "node系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "/node/1", // npm模块的安装机制
          "/node/3", // node环境和浏览器环境的区别
          "/node/2", // monorepo和multirepo相关
        ]
      },
      {
        "title": "算法系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "/algorithm/1", // DFS & BFS如何实现？
          "/algorithm/2", // 如何使用DFS和BFS实现深拷贝？
          "/algorithm/14", // 求多个数组之间的交集
          "/algorithm/20", // 数组去重的常用方法
          "/algorithm/21", // 数组扁平化的多种实现方式
          "/algorithm/3", // 求两个日期中间的有效日期
          "/algorithm/4", // 求字符串连续出现最多的字符和个数
          "/algorithm/5", // 写一个函数，将entry转化为指定json
          "/algorithm/6", // 写一个函数，将指定json转化为entry
          "/algorithm/7", // 将原始list转化为树形结构
          "/algorithm/8", // 如何将数组全部0移至末尾？
          "/algorithm/9", // 求数组非零最小值 index
          "/algorithm/10", // 实现一个批量请求函数 multiRequest
          "/algorithm/11", // 用最简洁代码实现indexOf方法
          "/algorithm/12", // 将'1000'变为'1.000'形式
          "/algorithm/13", // 反转链表，每 k 个节点反转一次
          "/algorithm/15", // 如果每隔 1s 输出应该如何改造？
          "/algorithm/16", // 从数组随机获取指定个数非重元素
          "/algorithm/17", // 判断正确的网址
          "/algorithm/18", // 将指定字符串转化为特定结构的json
          "/algorithm/19", // 经典排序算法实现
          "/algorithm/22", // 如何判断url中只包含qq.com
          "/algorithm/23", // 【题库】剑指offer刷题
          "/algorithm/24", // 【题库】动态规划DP刷题
        ]
      },
      {
        "title": "网络系列",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "/network/6", // 前端必须了解的http基础
          "/network/11", // 常见的状态码及含义
          "/network/25", // 每个协议和HTTP协议的关系
          "/network/24", // 页面出现空白，怎么排查定位问题？
          "/network/1", // TCP 三次握手和四次挥手的理解
          "/network/9", // 为什么HTTP1.1不能实现多路复用
          "/network/10", // 简单讲解一下 http2 的多路复用
          "/network/12", // http1.0、1.1、2.0 协议的区别？
          "/network/3", // 对称加密 & 非对称加密
          "/network/7", // 前端加密的常见场景和方法
          "/network/4", // 如何实现token加密？
          "/network/5", // 如何取消重复请求？
          "/network/8", // 接口如何防刷？
          "/network/13", // HTTPS中客户端如何验证证书合法性
          "/network/14", // 简述CDN的原理
          "/network/15", // 本地缓存
          "/network/16", // 如何解决页面数据不更新问题？
          "/network/17", // 强缓存和协商缓存
          "/network/18", // 前端性能优化方案有哪些？
          "/network/19", // 如何防止XSS攻击？
          "/network/20", // 如何防止CSRF攻击？
          "/network/21", // 什么是负载均衡？常见实现方案？
          "/network/22", // 数据推送方案有哪些？
          "/network/23", // WebSocket的实现和应用
          "/network/2", // 介绍下HTTPS 中间人攻击
          "/network/26", // 如何劫持https的请求？
        ]
      }
    ]
  }
};