## 在线体验
[在线地址](https://iloveyou11.github.io/interview-practice/)

## 部署流程
1. 运行`npm run build`构建项目，会发现项目下会生成`docs`文件夹，其中存放了所有的静态资源。
2. 在 `src/.vuepress/config.js` 中设置正确的 base。如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 base 默认即是 "/"。如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 base 设置为 `/<REPO>/`。
3. 在项目根目录下创建`deploy.sh`文件，这里我决定部署到`https://github.com/<USERNAME>/<REPO>`，文件内容如下：
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:iloveyou11/interview-practice.git master:gh-pages

cd -
```
4. 执行脚本`sh deploy.sh`，直到部署成功。
5. 这时可以直接通过`https://<USERNAME>.github.io/<REPO>`访问在线页面。

## 题目大纲

以下内容也可以直接阅读，为了阅读体验，推荐通过[在线地址](https://iloveyou11.github.io/interview-practice/)阅读~

- [js相关](#js%E7%9B%B8%E5%85%B3)
  - [Async/Await 如何通过同步的方式实现异步](#asyncawait-%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87%E5%90%8C%E6%AD%A5%E7%9A%84%E6%96%B9%E5%BC%8F%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5)
  - [JS 异步解决方案的发展历程以及优缺点](#js-%E5%BC%82%E6%AD%A5%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E7%A8%8B%E4%BB%A5%E5%8F%8A%E4%BC%98%E7%BC%BA%E7%82%B9)
    - [1）callback回调](#1callback%E5%9B%9E%E8%B0%83)
    - [2）Promise](#2promise)
    - [3）Generator](#3generator)
    - [4）Async/await](#4asyncawait)
  - [setTimeout、Promise、Async/Await 的区别](#settimeoutpromiseasyncawait-%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [如何模拟实现 Array.prototype.splice](#%E5%A6%82%E4%BD%95%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-arrayprototypesplice)
  - [实现一个map函数](#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AAmap%E5%87%BD%E6%95%B0)
  - [用setTimeout实现setInterval](#%E7%94%A8settimeout%E5%AE%9E%E7%8E%B0setinterval)
  - [监听一个变量的变化，需要怎么做](#%E7%9B%91%E5%90%AC%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%E7%9A%84%E5%8F%98%E5%8C%96%E9%9C%80%E8%A6%81%E6%80%8E%E4%B9%88%E5%81%9A)
  - [观察者模块 vs 发布订阅模式](#%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%9D%97-vs-%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F)
  - [模拟实现一个 localStorage](#%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA-localstorage)
  - [实现Promise.all()](#%E5%AE%9E%E7%8E%B0promiseall)
  - [实现Promise.race()](#%E5%AE%9E%E7%8E%B0promiserace)
  - [实现Promise.any()](#%E5%AE%9E%E7%8E%B0promiseany)
  - [实现Promise.finally()](#%E5%AE%9E%E7%8E%B0promisefinally)
  - [实现Promise.retry()](#%E5%AE%9E%E7%8E%B0promiseretry)
  - [实现Promise.allSettled()](#%E5%AE%9E%E7%8E%B0promiseallsettled)
  - [求多个数组的交集](#%E6%B1%82%E5%A4%9A%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86)
  - [es6及es6+能力集，最常用的有哪些？都解决了什么问题？](#es6%E5%8F%8Aes6%E8%83%BD%E5%8A%9B%E9%9B%86%E6%9C%80%E5%B8%B8%E7%94%A8%E7%9A%84%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%BD%E8%A7%A3%E5%86%B3%E4%BA%86%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98)
  - [实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF' 的多种思路](#%E5%AE%9E%E7%8E%B0%E9%A2%9C%E8%89%B2%E8%BD%AC%E6%8D%A2-rgb255-255-255---ffffff-%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%80%9D%E8%B7%AF)
  - [如何判断url中只包含qq.com](#%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%ADurl%E4%B8%AD%E5%8F%AA%E5%8C%85%E5%90%ABqqcom)
  - [什么是继承？如何实现继承？](#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%A7%E6%89%BF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF)
    - [（1）原型链继承](#1%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF)
    - [（2）构造函数继承](#2%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%A7%E6%89%BF)
    - [（3）组合式继承](#3%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF)
    - [（4）寄生组合式继承](#4%E5%AF%84%E7%94%9F%E7%BB%84%E5%90%88%E5%BC%8F%E7%BB%A7%E6%89%BF)
    - [（5）原型式继承](#5%E5%8E%9F%E5%9E%8B%E5%BC%8F%E7%BB%A7%E6%89%BF)
    - [（6）ES6 class继承](#6es6-class%E7%BB%A7%E6%89%BF)
  - [编写一个函数，输出以下结果](#%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E8%BE%93%E5%87%BA%E4%BB%A5%E4%B8%8B%E7%BB%93%E6%9E%9C)
  - [闭包的使用场景，使用闭包应该注意什么？](#%E9%97%AD%E5%8C%85%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8%E9%97%AD%E5%8C%85%E5%BA%94%E8%AF%A5%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88)
  - [babel是怎么解析代码的？](#babel%E6%98%AF%E6%80%8E%E4%B9%88%E8%A7%A3%E6%9E%90%E4%BB%A3%E7%A0%81%E7%9A%84)
  - [typeof 可以判断哪些类型？instanceof 做了什么？null为什么被typeof错误的判断为了'object'？](#typeof-%E5%8F%AF%E4%BB%A5%E5%88%A4%E6%96%AD%E5%93%AA%E4%BA%9B%E7%B1%BB%E5%9E%8Binstanceof-%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88null%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%ABtypeof%E9%94%99%E8%AF%AF%E7%9A%84%E5%88%A4%E6%96%AD%E4%B8%BA%E4%BA%86object)
  - [判断类型的四种方法](#%E5%88%A4%E6%96%AD%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%9B%9B%E7%A7%8D%E6%96%B9%E6%B3%95)
  - [IIFE打印结果](#iife%E6%89%93%E5%8D%B0%E7%BB%93%E6%9E%9C)
  - [关于async/await的执行问题](#%E5%85%B3%E4%BA%8Easyncawait%E7%9A%84%E6%89%A7%E8%A1%8C%E9%97%AE%E9%A2%98)
  - [['1', '2', '3'].map(parseInt) what & why ?](#1-2-3mapparseint-what--why-)
  - [箭头函数和普通函数的区别是什么？](#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E5%92%8C%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88)
  - [手写字符转base64](#%E6%89%8B%E5%86%99%E5%AD%97%E7%AC%A6%E8%BD%ACbase64)
  - [webpack打包vue太慢了怎么办？](#webpack%E6%89%93%E5%8C%85vue%E5%A4%AA%E6%85%A2%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E)
  - [js实现单向链表](#js%E5%AE%9E%E7%8E%B0%E5%8D%95%E5%90%91%E9%93%BE%E8%A1%A8)
- [css相关](#css%E7%9B%B8%E5%85%B3)
  - [怎么让一个 div 水平垂直居中](#%E6%80%8E%E4%B9%88%E8%AE%A9%E4%B8%80%E4%B8%AA-div-%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
  - [弹性盒子中 flex: 0 1 auto 表示什么意思](#%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AD%90%E4%B8%AD-flex-0-1-auto-%E8%A1%A8%E7%A4%BA%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D)
  - [求 left、right 的最终宽度（flex-shrink相关）](#%E6%B1%82-leftright-%E7%9A%84%E6%9C%80%E7%BB%88%E5%AE%BD%E5%BA%A6flex-shrink%E7%9B%B8%E5%85%B3)
  - [求 left、right 的最终宽度（flex-grow相关）](#%E6%B1%82-leftright-%E7%9A%84%E6%9C%80%E7%BB%88%E5%AE%BD%E5%BA%A6flex-grow%E7%9B%B8%E5%85%B3)
  - [如何用 css 或 js 实现多行文本溢出省略效果，考虑兼容性](#%E5%A6%82%E4%BD%95%E7%94%A8-css-%E6%88%96-js-%E5%AE%9E%E7%8E%B0%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E7%9C%81%E7%95%A5%E6%95%88%E6%9E%9C%E8%80%83%E8%99%91%E5%85%BC%E5%AE%B9%E6%80%A7)
  - [介绍下重绘和回流以及如何进行优化](#%E4%BB%8B%E7%BB%8D%E4%B8%8B%E9%87%8D%E7%BB%98%E5%92%8C%E5%9B%9E%E6%B5%81%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96)
  - [介绍BFC及其应用](#%E4%BB%8B%E7%BB%8Dbfc%E5%8F%8A%E5%85%B6%E5%BA%94%E7%94%A8)
  - [介绍下 BFC、IFC、GFC、FFC](#%E4%BB%8B%E7%BB%8D%E4%B8%8B-bfcifcgfcffc)
- [浏览器相关](#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3)
  - [浏览器和 Node 事件循环的区别](#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8C-node-%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [cookie 和 token 都存放在 header 中，为什么不会劫持 token？](#cookie-%E5%92%8C-token-%E9%83%BD%E5%AD%98%E6%94%BE%E5%9C%A8-header-%E4%B8%AD%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E4%BC%9A%E5%8A%AB%E6%8C%81-token)
  - [如何在H5和小程序中计算白屏时间和首屏时间](#%E5%A6%82%E4%BD%95%E5%9C%A8h5%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%AD%E8%AE%A1%E7%AE%97%E7%99%BD%E5%B1%8F%E6%97%B6%E9%97%B4%E5%92%8C%E9%A6%96%E5%B1%8F%E6%97%B6%E9%97%B4)
  - [memory cache 和 disk cache](#memory-cache-%E5%92%8C-disk-cache)
  - [为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？](#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%9A%E5%B8%B8%E5%9C%A8%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE%E5%9F%8B%E7%82%B9%E8%AF%B7%E6%B1%82%E7%9A%84%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8%E7%9A%84%E6%98%AF-1x1-%E5%83%8F%E7%B4%A0%E7%9A%84%E9%80%8F%E6%98%8E-gif-%E5%9B%BE%E7%89%87)
- [框架相关](#%E6%A1%86%E6%9E%B6%E7%9B%B8%E5%85%B3)
  - [React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？](#react-%E5%92%8C-vue-%E7%9A%84-diff-%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%E4%BB%8E-on%5E3-%E4%BC%98%E5%8C%96%E5%88%B0-on-%E9%82%A3%E4%B9%88-on%5E3-%E5%92%8C-on-%E6%98%AF%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97%E5%87%BA%E6%9D%A5%E7%9A%84)
  - [react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别](#react-router-%E9%87%8C%E7%9A%84-link-%E6%A0%87%E7%AD%BE%E5%92%8C-a-%E6%A0%87%E7%AD%BE%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [redux 为什么要把 reducer 设计成纯函数](#redux-%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%8A%8A-reducer-%E8%AE%BE%E8%AE%A1%E6%88%90%E7%BA%AF%E5%87%BD%E6%95%B0)
  - [Virtual DOM 真的比操作原生 DOM 快吗？](#virtual-dom-%E7%9C%9F%E7%9A%84%E6%AF%94%E6%93%8D%E4%BD%9C%E5%8E%9F%E7%94%9F-dom-%E5%BF%AB%E5%90%97)
  - [聊聊 Redux 和 Vuex 的设计思想](#%E8%81%8A%E8%81%8A-redux-%E5%92%8C-vuex-%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%80%9D%E6%83%B3)
  - [React 中 setState 什么时候是同步的，什么时候是异步的？](#react-%E4%B8%AD-setstate-%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%98%AF%E5%90%8C%E6%AD%A5%E7%9A%84%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84)
  - [vue 是如何对数组方法进行变异的？例如 push、pop、splice 等方法](#vue-%E6%98%AF%E5%A6%82%E4%BD%95%E5%AF%B9%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95%E8%BF%9B%E8%A1%8C%E5%8F%98%E5%BC%82%E7%9A%84%E4%BE%8B%E5%A6%82-pushpopsplice-%E7%AD%89%E6%96%B9%E6%B3%95)
- [node相关](#node%E7%9B%B8%E5%85%B3)
  - [npm模块的安装机制](#npm%E6%A8%A1%E5%9D%97%E7%9A%84%E5%AE%89%E8%A3%85%E6%9C%BA%E5%88%B6)
- [算法相关](#%E7%AE%97%E6%B3%95%E7%9B%B8%E5%85%B3)
  - [深度优先遍历DFS & 广度优先遍历BFS](#%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86dfs--%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86bfs)
    - [DFS](#dfs)
    - [BFS](#bfs)
  - [DFS和BFS实现深拷贝](#dfs%E5%92%8Cbfs%E5%AE%9E%E7%8E%B0%E6%B7%B1%E6%8B%B7%E8%B4%9D)
    - [DFS](#dfs-1)
    - [BFS](#bfs-1)
  - [求两个日期中间的有效日期](#%E6%B1%82%E4%B8%A4%E4%B8%AA%E6%97%A5%E6%9C%9F%E4%B8%AD%E9%97%B4%E7%9A%84%E6%9C%89%E6%95%88%E6%97%A5%E6%9C%9F)
  - [找出字符串中连续出现最多的字符和个数](#%E6%89%BE%E5%87%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E8%BF%9E%E7%BB%AD%E5%87%BA%E7%8E%B0%E6%9C%80%E5%A4%9A%E7%9A%84%E5%AD%97%E7%AC%A6%E5%92%8C%E4%B8%AA%E6%95%B0)
  - [写一个函数，将entry转化为指定json](#%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E5%B0%86entry%E8%BD%AC%E5%8C%96%E4%B8%BA%E6%8C%87%E5%AE%9Ajson)
  - [写一个函数，将指定json转化为entry](#%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E5%B0%86%E6%8C%87%E5%AE%9Ajson%E8%BD%AC%E5%8C%96%E4%B8%BAentry)
  - [将原始list转化为树形结构](#%E5%B0%86%E5%8E%9F%E5%A7%8Blist%E8%BD%AC%E5%8C%96%E4%B8%BA%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84)
  - [给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序](#%E7%BB%99%E5%AE%9A%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84-nums%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E5%B0%86%E6%89%80%E6%9C%89-0-%E7%A7%BB%E5%8A%A8%E5%88%B0%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%AB%E5%B0%BE%E5%90%8C%E6%97%B6%E4%BF%9D%E6%8C%81%E9%9D%9E%E9%9B%B6%E5%85%83%E7%B4%A0%E7%9A%84%E7%9B%B8%E5%AF%B9%E9%A1%BA%E5%BA%8F)
  - [用最精炼的代码实现数组非零最小值 index](#%E7%94%A8%E6%9C%80%E7%B2%BE%E7%82%BC%E7%9A%84%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0%E6%95%B0%E7%BB%84%E9%9D%9E%E9%9B%B6%E6%9C%80%E5%B0%8F%E5%80%BC-index)
  - [实现一个批量请求函数 multiRequest(urls, maxNum)](#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%89%B9%E9%87%8F%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0-multirequesturls-maxnum)
  - [用最简洁代码实现indexOf方法](#%E7%94%A8%E6%9C%80%E7%AE%80%E6%B4%81%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0indexof%E6%96%B9%E6%B3%95)
  - [将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式](#%E5%B0%8610000000000%E5%BD%A2%E5%BC%8F%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BB%A5%E6%AF%8F3%E4%BD%8D%E8%BF%9B%E8%A1%8C%E5%88%86%E9%9A%94%E5%B1%95%E7%A4%BA10000000000%E5%A4%9A%E7%A7%8D%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F)
  - [反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序](#%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%E6%AF%8F-k-%E4%B8%AA%E8%8A%82%E7%82%B9%E5%8F%8D%E8%BD%AC%E4%B8%80%E6%AC%A1%E4%B8%8D%E8%B6%B3-k-%E5%B0%B1%E4%BF%9D%E6%8C%81%E5%8E%9F%E6%9C%89%E9%A1%BA%E5%BA%8F)
  - [求多个数组之间的交集](#%E6%B1%82%E5%A4%9A%E4%B8%AA%E6%95%B0%E7%BB%84%E4%B9%8B%E9%97%B4%E7%9A%84%E4%BA%A4%E9%9B%86)
  - [如果希望每隔 1s 输出一个结果，应该如何改造？](#%E5%A6%82%E6%9E%9C%E5%B8%8C%E6%9C%9B%E6%AF%8F%E9%9A%94-1s-%E8%BE%93%E5%87%BA%E4%B8%80%E4%B8%AA%E7%BB%93%E6%9E%9C%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E6%94%B9%E9%80%A0)
  - [如何快速从巨大数组中随机获取指定个数的不重复元素](#%E5%A6%82%E4%BD%95%E5%BF%AB%E9%80%9F%E4%BB%8E%E5%B7%A8%E5%A4%A7%E6%95%B0%E7%BB%84%E4%B8%AD%E9%9A%8F%E6%9C%BA%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E4%B8%AA%E6%95%B0%E7%9A%84%E4%B8%8D%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0)
  - [判断正确的网址](#%E5%88%A4%E6%96%AD%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%BD%91%E5%9D%80)
  - [实现一个normalize函数，将指定字符串转化为特定结构的json](#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AAnormalize%E5%87%BD%E6%95%B0%E5%B0%86%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E5%8C%96%E4%B8%BA%E7%89%B9%E5%AE%9A%E7%BB%93%E6%9E%84%E7%9A%84json)
- [网络相关](#%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3)
  - [TCP 三次握手和四次挥手的理解](#tcp-%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%9A%84%E7%90%86%E8%A7%A3)
  - [介绍下HTTPS 中间人攻击](#%E4%BB%8B%E7%BB%8D%E4%B8%8Bhttps-%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)
  - [对称加密 & 非对称加密](#%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86--%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86)
  - [如何实现token加密](#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0token%E5%8A%A0%E5%AF%86)
- [安全相关](#%E5%AE%89%E5%85%A8%E7%9B%B8%E5%85%B3)
  - [前端加密的常见场景和方法](#%E5%89%8D%E7%AB%AF%E5%8A%A0%E5%AF%86%E7%9A%84%E5%B8%B8%E8%A7%81%E5%9C%BA%E6%99%AF%E5%92%8C%E6%96%B9%E6%B3%95)
  - [接口如何防刷](#%E6%8E%A5%E5%8F%A3%E5%A6%82%E4%BD%95%E9%98%B2%E5%88%B7)
  - [为什么HTTP1.1不能实现多路复用](#%E4%B8%BA%E4%BB%80%E4%B9%88http11%E4%B8%8D%E8%83%BD%E5%AE%9E%E7%8E%B0%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8)
  - [简单讲解一下 http2 的多路复用](#%E7%AE%80%E5%8D%95%E8%AE%B2%E8%A7%A3%E4%B8%80%E4%B8%8B-http2-%E7%9A%84%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8)
  - [Http 状态码 301 和 302 的应用场景分别是什么](#http-%E7%8A%B6%E6%80%81%E7%A0%81-301-%E5%92%8C-302-%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88)
  - [介绍下 http1.0、1.1、2.0 协议的区别？](#%E4%BB%8B%E7%BB%8D%E4%B8%8B-http101120-%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%8C%BA%E5%88%AB)
    - [http1.0](#http10)
    - [http1.1](#http11)
    - [http2.0](#http20)
  - [HTTPS 握手过程中，客户端如何验证证书的合法性](#https-%E6%8F%A1%E6%89%8B%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%A6%82%E4%BD%95%E9%AA%8C%E8%AF%81%E8%AF%81%E4%B9%A6%E7%9A%84%E5%90%88%E6%B3%95%E6%80%A7)

## js相关
### Async/Await 如何通过同步的方式实现异步

异步：js是单线程的，执行代码是一行一行的往下走（同步），但在实际应用中，会有大量的网络请求，它的响应时间是不确定的，这种情况下一直等待显然是不行的，因而 js 设计了异步，即 发起网络请求（诸如 IO 操作，定时器），由于需要等服务器响应，就先不理会，而是去做其他的事儿，等请求返回了结果的时候再说（即异步）。

Async/Await是实现异步非常优雅的方式，不会像callback那样产生回调地狱，不会像promise.then那样一直写.then……而是采用了同步代码的书写方式，完成了异步操作。例如我们在写`await A()`时，代码还会继续往下执行，当A()结果返回时，会拿到对应结果执行对应的操作。

async/await 是参照 Generator 封装的一套异步处理方案，可以理解为 Generator 的语法糖，而 Generator 又依赖于迭代器Iterator：

**（1）下面看看迭代器Iterator的原理和实现：**

当一个对象只有满足下述条件才会被认为是一个迭代器，它实现了一个 next() 的方法，该方法必须返回一个对象,对象有两个必要的属性：

- done（bool）
    - true：迭代器已经超过了可迭代次数。这种情况下,value 的值可以被省略
    - false：如果迭代器可以产生序列中的下一个值为false，等效于没有指定 done 这个属性
- value 迭代器返回的任何 JavaScript 值。done 为 true 时可省略

```js
const makeIterator = arr => {
  let nextIndex = 0;
  return {
    next: () =>
      nextIndex < arr.length
        ? { value: arr[nextIndex++], done: false }
        : { value: undefined, done: true },
  };
};
const it = makeIterator(['人月', '神话']);
console.log(it.next()); // { value: "人月", done: false }
console.log(it.next()); // { value: "神话", done: false }
console.log(it.next()); // {value: undefined, done: true }
```

**（2）下面看看生成器Generator的原理和实现：**

Generator：生成器对象是生成器函数（GeneratorFunction）返回的，它符合可迭代协议和迭代器协议，既是迭代器也是可迭代对象，可以调用 next 方法，但它不是函数，更不是构造函数。

一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的迭代器对象，当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现 yield 的位置为止（让执行处于暂停状），yield 后紧跟迭代器要返回的值。或者如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行），调用 next() （再启动）方法时，如果传入了参数，那么这个参数会作为上一条执行的 yield 语句的返回值。

用 Generator 实现异步操作：

```js
// 生成器函数
const gen = function* () {
  const res1 = yield new Promise((resolve)=>resolve(111))
  console.log(res1);
  const res2 = yield new Promise((resolve)=>resolve(222))
  console.log(res2);
};

const g = gen();

// 第1个yield暂停
const g1 = g.next();
console.log('g1:', g1); // g1: { value: Promise { 111 }, done: false }

g1.value
  .then(res1 => {
    console.log('res1:', res1); // res1: 111
    
    // 第2个yield暂停
    const g2 = g.next(res1);
    console.log('g2:', g2); // g2: { value: Promise { 222 }, done: false }

    g2.value
      .then(res2 => {
        console.log('res2:', res2); // res2: 222
        g.next(res2);
      })
      .catch(err2 => {
        console.log(err2);
      });
  })
  .catch(err1 => {
    console.log(err1);
  });
```

以上代码是 Generator 和 callback 结合实现的异步，可以看到，仍然需要手动执行 .then 层层添加回调，但由于 next() 方法返回对象 {value: xxx,done: true/false} 所以我们可以简化它，写一个自动执行器：

```js
const run= gen => {
  const g = gen();
  const next = data => {
    const res = g.next(data);
    // 深度递归，只要 `Generator` 函数还没执行到最后一步，`next` 函数就调用自身
    if (res.done) return res.value;
    res.value.then(function(data) {
      next(data);
    });
  }
  next();
}

run(function*() {
  const res1 = yield new Promise((resolve)=>resolve(111))
  console.log(res1); // 111
  const res2 = yield new Promise((resolve)=>resolve(222))
  console.log(res2); // 222
});
```

**（3）下面来看看Async await的原理和实现：**

首先对比一下Generator、async/await的写法，是不是很相似呢？

```js
// Generator
run(function*() {
  const res1 = yield new Promise((resolve)=>resolve(111));
  console.log(res1);
  const res2 = yield new Promise((resolve)=>resolve(222));
  console.log(res2);
});

// async/await
const readFile = async ()=>{
  const res1 = await new Promise((resolve)=>resolve(111));
  console.log(res1);
  const res2 = await new Promise((resolve)=>resolve(222));
  console.log(res2);
  return 'done';
}
```

可以看到，`async function` 其实是代替了 `function*`，`await` 代替了 `yield`，同时也无需自己手写一个自动执行器 run 了。

**async/await 有以下的特点：**

1. 当 `await` 后面跟的是 `Promise` 对象时，才会异步执行，其它类型的数据会同步执行
2. 执行 `const res = readFile();` 返回的仍然是个 `Promise` 对象，上面代码中的 `return 'done';` 会直接被下面 `then` 函数接收到

### JS 异步解决方案的发展历程以及优缺点

上面提到了Async/await的原理，那就一定要提提js关于异步解决方案的发展之路了。

#### 1）callback回调

```js
ajax('XXX1', () => {
    // callback 函数体
    ajax('XXX2', () => {
        // callback 函数体
        ajax('XXX3', () => {
            // callback 函数体
        })
    })
})
```

缺点：回调地狱，不能用 try catch 捕获错误，不能 return

**回调地狱的根本问题在于：**

- 缺乏顺序性： 回调地狱导致的调试困难，和大脑的思维方式不符
- 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身，即（控制反转）
- 嵌套函数过多的多话，很难处理错误

#### 2）Promise
Promise 实现了链式调用，也就是说每次 then 后返回的都是一个全新 Promise，如果我们在 then 中 return ，return 的结果会被 Promise.resolve() 包装。

```js
ajax('XXX1')
  .then(res => {
      // 操作逻辑
      return ajax('XXX2')
  }).then(res => {
      // 操作逻辑
      return ajax('XXX3')
  }).then(res => {
      // 操作逻辑
  })
```

- 优点：比一层层的回调函数写法优雅
- 缺点：无法取消 Promise ，错误需要通过回调函数来捕获

#### 3）Generator

可以控制函数的执行，可以配合 co 函数库使用

```js
function *fetch() {
    yield ajax('XXX1', () => {})
    yield ajax('XXX2', () => {})
    yield ajax('XXX3', () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()
```

#### 4）Async/await

- 优点：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题
- 缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

```js
async function test() {
  // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
  // 如果有依赖性的话，其实就是解决回调地狱的例子了
  await fetch('XXX1')
  await fetch('XXX2')
  await fetch('XXX3')
}
```

有一个小demo可以看一下：

```js
let a = 0
let b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1
```

输出如下：

```js
// 1 1
// 2 10
```

因为await是异步操作，所以会先执行同步代码，所有会得到以上的执行结果。

【扩展-async/await的执行顺序】

很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上await是一个让出线程的标志。await后面的函数会先执行一遍，然后就会跳出整个async函数来执行后面js栈的代码。等本轮事件循环执行完了之后又会跳回到async函数中等待await后面表达式的返回值，如果返回值为非promise则继续执行async函数后面的代码，否则将返回的promise放入promise队列（Promise的Job Queue）

先看下面的代码：

```js
function test111() {
  console.log("执行111");
  return "111 end"
}

function test222() {
  console.log("执行222");
  return "222 end"
}

async function test() {
  console.log("test start...");
  const v1 = await test111();
  console.log(v1);
  const v2 = await test222();
  console.log(v2);
  console.log(v1, v2);
}

test();

const promise = new Promise((resolve)=> { 
  console.log("promise start.."); 
  resolve("promise resolve");
});
promise.then(val=> console.log(val));

console.log("test end...")

// test start...
// 执行111
// promise start..
// test end...
// 111 end
// 执行222
// promise resolve
// 222 end
// 111 end 222 end

```

可以看到，代码执行顺序如下：

- 首先执行`test()`函数，打印"test start..."
- 当test函数执行到`const v1 = await test()`的时候，会先执行`test111`这个函数打印出“执行test111”的字符串，然后因为await会让出线程就会区执行后面的代码（即promise）
- 然后打印出“promise start..”接下来会把返回的这promise放入promise队列（Promise的Job Queue），继续执行打印“test end...”
- 等本轮事件循环执行结束后，又会跳回到async函数中（test函数），等待之前await 后面表达式的返回值，因为`test111`不是async函数，返回的是一个字符串“111 end”，test函数继续执行
- 执行到`const v2 = await test222()`中的`test222()`函数，和之前一样又会跳出test函数，执行后续代码，此时事件循环就到了promise的队列，执行promise.then((val)=> console.log(val));then后面的语句，之后和前面一样又跳回到test函数继续执行
- 再执行`console.log(v2);`打印v1，即打印"222 end"
- 最后再执行`console.log(v1, v2)`，打印"111 end 222 end"

我们将题目稍作改动，原有的test111、test222函数变为了async，返回值变为了一个Promise：

```js
async function test111() {
  console.log("执行111");
  return Promise.resolve("111 end");
}

async function test222() {
  console.log("执行222");
  return Promise.resolve("222 end");
}

async function test() {
  console.log("test start...");
  const v1 = await test111();
  console.log(v1);
  const v2 = await test222();
  console.log(v2);
  console.log(v1, v2);
}

test();

const promise = new Promise((resolve)=> { 
  console.log("promise start.."); 
  resolve("promise resolve");
});
promise.then(val=> console.log(val));

console.log("test end...")

// test start...
// 执行111
// promise start..
// test end...
// promise resolve
// 111 end
// 执行222
// 222 end
// 111 end 222 end
```

这里我们发现，打印`promise resolve`提到`111 end`之前了，其他执行顺序没发生变化。原因是因为现在函数加了async，返回的是一个Promise对象要要等它resolve，所以将当前Promise推入队列，所以会继续跳出test函数执行后续代码。之后就开始执行promise的任务队列了。

### setTimeout、Promise、Async/Await 的区别

三者在事件循环中有着明显的区别，事件循环中分为宏任务队列和微任务队列。

- setTimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行
- promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行
- async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行

举例说明一下：

1. setTimeout

```js
console.log('script start')
setTimeout(()=>{
    console.log('settimeout')	
})
console.log('script end')	

// script start
// script end
// settimeout
```

2. promise.then

```js
console.log('script start')
let promise1 = new Promise(function (resolve) {
    console.log('promise1')
    resolve()
    console.log('promise1 end')
}).then(function () {
    console.log('promise2')
})
setTimeout(function(){
    console.log('settimeout')
})
console.log('script end')

// script start
// promise1
// promise1 end
// script end
// promise2
// settimeout
```

3. async/await

```js
async function async1(){
  console.log('async1 start');
   await async2();
   console.log('async1 end')
}
async function async2(){
   console.log('async2')
}

console.log('script start');
async1();
console.log('script end')

// script start
// async1 start
// async2
// script end
// async1 end
```

### 如何模拟实现 Array.prototype.splice

```js
Array.prototype._splice = function (start, deleteCount, ...addList) {
  // 如果start为负数，那么就从倒数的元素算起
  if (start < 0) {
      if (Math.abs(start) > this.length) {
          start = 0
      } else {
          start += this.length
      }
  }

  // 如果没有传deleteCount，那么默认
  if (typeof deleteCount === 'undefined') {
      deleteCount = this.length - start
  }

  // 删除的元素列表
  const removeList =  this.slice(start, start + deleteCount)

  // 删除元素右侧的元素列表
  const right = this.slice(start + deleteCount)

  let addIndex = start
  addList.concat(right).forEach(item => {
      this[addIndex] = item
      addIndex++
  })
  this.length = addIndex

  // 返回删除列表
  return removeList
}
```

### 实现一个map函数

补充一下`JSON.stringify(value, replacer, space)`语法：

1. value: 必需， 要转换的 JavaScript 值（通常为对象或数组）。
2. replacer: 可选。用于转换结果的函数或数组。如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值，使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。
3. space: 可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t。

```js
const targetData = {
  a: 2,
  b: 4,
  c: 6,
  d: 7
};

const objMap = (obj, fn) => {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function !`);
  }
  
  // 方法1：依次计算fn后的值
  // const copy = Object.assign({}, obj)
  // for (let key in copy) {
  //   copy[key] = fn(key, copy[key])
  // }
  // return copy

  // 方法2：直接使用JSON.stringify(obj, fn)
  return JSON.parse(JSON.stringify(obj, fn));
};

const result = objMap(targetData, (key, value) => {
  if (value % 2 === 0) {
    return value / 2;
  }
  return value;
});

console.log(result);
// { a: 1, b: 2, c: 3, d: 7 }
```

### 用setTimeout实现setInterval

```js
function mySetInterval() {
  mySetInterval.timer = setTimeout(() => {
    arguments[0]() // arguments[0]是传入的函数，如() => {console.log('滴答滴答……')}，这里拿到这个函数直接执行
    mySetInterval(...arguments) // 递归
  }, arguments[1]) // arguments[1]是传入的时间，如5000
}

mySetInterval.clear = function () {
  clearTimeout(mySetInterval.timer)
}

mySetInterval(() => {
  console.log('滴答滴答……')
}, 1000)

setTimeout(() => {
  mySetInterval.clear() // 5s 后清理
}, 5000)
```

### 监听一个变量的变化，需要怎么做

**（1）方法1：ES5 的 Object.defineProperty**

基础版本实现：

```js
// 监视对象
function observe(obj) {
  // 遍历对象，使用 get/set 重新定义对象的每个属性值
   Object.keys(obj).map(key => {
       defineReactive(obj, key, obj[key])
   })
}

function defineReactive(obj, k, v) {
   // 递归子属性
   if (typeof(v) === 'object') observe(v)
   
   // 重定义 get/set
   Object.defineProperty(obj, k, {
       enumerable: true,
       configurable: true,
       get: function reactiveGetter() {
           console.log('get: ' + v)
           return v
       },
       // 重新设置值时，触发收集器的通知机制
       set: function reactiveSetter(newV) {
           console.log('set: ' + newV)
           v = newV
       },
   })
}

let data = {a: 1}
// 监视对象
observe(data)
data.a // get: 1
data.a = 2 // set: 2
```

但是以上方法存在几个缺陷：

- IE8 及更低版本 IE 是不支持的（如果不考虑IE8以下兼容可忽略）
- 无法检测到对象属性的新增或删除
- 如果修改数组的 length （ Object.defineProperty 不能监听数组的长度），以及数组的 push 等变异方法是无法触发 setter

而vue中使用了函数劫持的方式，重写了数组的方法，Vue 将 data 中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组 api 时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。实现方法如下所示：

```js
// 获得数组原型
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
// 重写以下函数
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(function (method) {
  // 缓存原生函数
  const original = arrayProto[method]
  // 重写函数
  def(arrayMethods, method, function mutator (...args) {
  // 先调用原生函数获得结果
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    // 调用以下几个函数时，监听新数据
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // 手动派发更新
    ob.dep.notify()
    return result
  })
})
```

**（2）ES6 的 Proxy**

使用proxy会带来几个问题：
- Proxy只会代理对象的第一层，那么又是怎样处理这个问题的呢？——我们可以判断当前 Reflect.get 的返回值是否为 Object ，如果是则再通过 reactive 方法做代理， 这样就实现了深度观测。
- 监测数组的时候可能触发多次get/set，那么如何防止触发多次呢（因为获取push和修改length的时候也会触发）——我们可以判断是否是 hasOwProperty

```js
const toProxy = new WeakMap(); // 存放被代理过的对象
const toRaw = new WeakMap(); // 存放已经代理过的对象

function reactive(target) {
  return createReactiveObject(target); // // 创建响应式对象
}

function isObject(target) {
  return typeof target === "object" && target !== null;
}

function hasOwn(target, key) {
  return target.hasOwnProperty(key);
}

// 创建响应式对象
function createReactiveObject(target) {
  // 如果不是对象，则直接返回
  if (!isObject(target)) {
    return target;
  }

  // toProxy用来存放被代理过的对象
  let observed = toProxy.get(target);

  // 判断是否被代理过，如果被代理过则直接返回
  if (observed) {
    return observed;
  }

  // 判断是否要重复代理
  if (toRaw.has(target)) {
    return target;
  }

  const handlers = {
    get(target, key, receiver) {
      let res = Reflect.get(target, key, receiver);
      track(target, 'get', key); // 依赖收集==
      return isObject(res) ? reactive(res) : res; // 如果是对象，则继续代理
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let hadKey = hasOwn(target, key);
      let result = Reflect.set(target, key, value, receiver);
      if (!hadKey) {
        trigger(target, 'add', key); // 触发添加
      } else if (oldValue !== value) {
        trigger(target, 'set', key); // 触发修改
      }
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      return result;
    }
  };

  // 开始代理
  observed = new Proxy(target, handlers);
  toProxy.set(target, observed);
  toRaw.set(observed, target); // 做映射表
  return observed;
}
```

### 观察者模块 vs 发布订阅模式

观察者模式中主体和观察者是互相感知的，发布-订阅模式是借助第三方来实现调度的，发布者和订阅者之间互不感知。

<img src="https://user-images.githubusercontent.com/18718461/53536375-228ba180-3b41-11e9-9737-d71f85040cfc.png" width="50%" />

有一种比喻：

- 发布-订阅模式就好像报社， 邮局和个人的关系，报纸的订阅和分发是由邮局来完成的。报社只负责将报纸发送给邮局。
- 观察者模式就好像 个体奶农和个人的关系。奶农负责统计有多少人订了产品，所以个人都会有一个相同拿牛奶的方法。奶农有新奶了就负责调用这个方法。

【发布-订阅模式】

```js
class PubSub {
  constructor() {
      this.subscribers = []; // 全部订阅者
  }
  
  // 订阅
  subscribe(topic, callback) {
      let callbacks =this.subscribers[topic];
      if(!callbacks) {
          this.subscribers[topic] = [callback];
      }else{
          callbacks.push(callback);
      }
  }
  
  // 发布
  publish(topic, ...args) {
      let callbacks =this.subscribers[topic] || [];
      callbacks.forEach(callback => callback(...args));
  }
}

// 创建事件调度中心，为订阅者和发布者提供调度服务
let pubSub =new PubSub();

// 订阅某个主题
pubSub.subscribe('topic1', console.log);
pubSub.subscribe('topic2', console.log);

// 发布某个主题
pubSub.publish('topic1','I published topic1');
pubSub.publish('topic2','I published topic2');
```

【观察者模式】

```js
class Subject {
  constructor() {
      this.observers = [];
  }

  add(observer) {
      this.observers.push(observer);
  }

  notify(...args) {
      this.observers.forEach(observer => observer.update(...args));
  }
}

class Observer {
  update(...args) {
      console.log(...args);
  }
}

// 创建观察者
let ob1 =new Observer();
let ob2 =new Observer();
// 创建目标
let sub =new Subject();
// 目标sub添加观察者
sub.add(ob1);
sub.add(ob2);
// 目标sub触发事件
sub.notify('I fired event');
```

虽然两种模式都存在订阅者和发布者（具体观察者可认为是订阅者、具体目标可认为是发布者），但是观察者模式是由有具体目标调度的，而发布/订阅模式是统一由调度中心调度的，所以观察者模式的订阅者与发布者之间是存在依赖的，而发布/订阅模式则不会。

### 模拟实现一个 localStorage

```js
const localStorageMock = (function() {
  let store = {}
  return {
    getItem: function(key) { return store[key] || null },
    setItem: function(key, value) { store[key] = value.toString() },
    removeItem: function(key) { delete store[key] },
    clear: function() { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage2', {
  value: localStorageMock
})

localStorage2.setItem('test', 'test')
console.log(localStorage2.getItem("test"))  //test
localStorage2.removeItem('test')
console.log(localStorage2.getItem("test"))  //null
localStorage2.setItem('test', 'test')
localStorage2.clear()
console.log(localStorage2.getItem("test"))  //null
```

以上结果只是基础的api实现，但是没有考虑持久化存储。如果需要持久化的话，就要考虑cookie、indexDB等。

### 实现Promise.all()
对于 Promise.all(arr) 来说，在参数数组中所有元素都变为决定态后，然后才返回新的 promise。

```js
const p1 = request(`http://some.url.1`)
const p2 = request(`http://some.url.2`)
Promise.all([p1, p2])
  .then((datas) => { // 此处 datas 为调用 p1, p2 后的结果的数组
    return request(`http://some.url.3?a=${datas[0]}&b=${datas[1]}`)
  })
  .then((data) => {
    console.log(msg)
  })
```

原理实现如下：

```js
function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    // 传入值类型判断
    if (!Array.isArray(promises)) {
      return reject(new TypeError("argument must be anarray"))
    }

    var countNum = 0;
    var promiseNum = promises.length;
    var resolvedvalue = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value => {
        countNum++;
        resolvedvalue[i] = value;
        if (countNum === promiseNum) {
          return resolve(resolvedvalue)
        }
      }, reason => {
        return reject(reason)
      })
    }
  })
}

var p1 = Promise.resolve(1),
  p2 = Promise.resolve(2),
  p3 = Promise.resolve(3);
promiseAll([p1, p2, p3]).then(function (value) {
  console.log(value) // [ 1, 2, 3 ]
})
```

**谈谈Promise.all的错误处理：**

有时候我们使用Promise.all()执行很多个网络请求，可能有一个请求出错，但我们并不希望其他的网络请求也返回reject，要错都错，这样显然是不合理的。如何做才能做到promise.all中即使一个promise程序reject，promise.all依然能把其他数据正确返回呢?

```js
var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 0)
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    try {
      console.log(XX.BBB);
    }
    catch (exp) {
      resolve("error");
    }
  }, 100)
});
var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 200)
});

Promise.all([p1, p2, p3]).then(function (results) {
  console.log("success")
  console.log(results);
}).catch(function (r) {
  console.log("err");
  console.log(r);
});

// 打印结果：
// success
// [ 1, 'error', 3 ]
```

### 实现Promise.race()

```js
Promise._race = promises => new Promise((resolve, reject) => {
	promises.forEach(promise => {
		promise.then(resolve, reject)
	})
})
```

### 实现Promise.any()

Promise.any()的特性：只要其中的一个 promise 成功，就返回那个已经成功的 promise。如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和 AggregateError 类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。

感觉Promise.any和Promise.race类似。

（1）传入的数组中至少有一个promise成功
```js
const promises = [
  Promise.reject('ERROR A'),
  Promise.reject('ERROR B'),
  Promise.resolve('result'),
]

Promise.any(promises).then((value) => {
  console.log('value: ', value)
}).catch((err) => {
  console.log('err: ', err)
})

// value:  result
```

（2）传入的数组中所有promise都失败

```js
const promises = [
  Promise.reject('ERROR A'),
  Promise.reject('ERROR B'),
  Promise.reject('ERROR C'),
]

Promise.any(promises).then((value) => {
  console.log('value：', value)
}).catch((err) => {
  console.log('err：', err)
  console.log(err.message)
  console.log(err.name)
  console.log(err.errors)
})

// err： AggregateError: All promises were rejected
// All promises were rejected
// AggregateError
// ["ERROR A", "ERROR B", "ERROR C"]
```

**Promise.any 应用场景:**

1. 从最快的服务器检索资源——来自世界各地的用户访问网站，如果你有多台服务器，则尽量使用响应速度最快的服务器，在这种情况下，可以使用 Promise.any() 方法从最快的服务器接收响应

```js
function getUser(endpoint) {
  return fetch(`https://superfire.${endpoint}.com/users`)
    .then(response => response.json());
}

const promises = [getUser("jp"), getUser("uk"), getUser("us"), getUser("au"), getUser("in")]

Promise.any(promises).then(value => {
  console.log(value)
}).catch(err => {
  console.log(err);
})
```

2. 显示第一张已加载的图片——我们有一个获取图片并返回 blob 的函数，我们使用 Promise.any() 来获取一些图片并显示第一张有效的图片（即最先 resolved 的那个 promise）

```js
function fetchAndDecode(url) {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
}

let coffee = fetchAndDecode('coffee.jpg');
let tea = fetchAndDecode('tea.jpg');

Promise.any([coffee, tea]).then(value => {
  let objectURL = URL.createObjectURL(value);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log(e.message);
});
```

**Promise.any()实现：**

Promise.any 只要传入的 promise 有一个是 fullfilled 则立即 resolve 出去，否则将所有 reject 结果收集起来并返回 AggregateError

```js
MyPromise.any = function(promises){
  return new Promise((resolve,reject)=>{
    promises = Array.isArray(promises) ? promises : []
    let len = promises.length
    // 用于收集所有 reject 
    let errs = []
    // 如果传入的是一个空数组，那么就直接返回 AggregateError
    if(len === 0) return reject(new AggregateError('All promises were rejected'))
    promises.forEach((promise)=>{
      promise.then(value=>{
        resolve(value)
      },err=>{
        len--
        errs.push(err)
        if(len === 0){
          reject(new AggregateError(errs))
        }
      })
    })
  })
}
```

### 实现Promise.finally()

```js
// 方法1
Promise.prototype.finally = function (cb) {
  let P = this.constructor
  return this.then(
    value => P.resolve(cb()).then(() => value),
    reason => P.resolve(cb()).then(() => { throw reason })
  )
}


// 方法2
window.Promise && !('finally' in Promise) && !function() {        
  Promise.prototype.finally = function(cb) {
    cb = typeof cb === 'function' ? cb : function() {}
      
    // 获取当前实例构造函数的引用
    let Fn = this.constructor  

    // 接受状态：返回数据
    let onFulfilled = function(data) {
      return Fn.resolve(cb()).then(function() {
        return data
      })
    }

    // 拒绝状态：抛出错误
    let onRejected = function(err) {
      return Fn.resolve(cb()).then(function() {
        throw err
      })
    }

    return this.then(onFulfilled, onRejected)
  }
}()
```

### 实现Promise.retry()

成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject

```js
Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        var ret = await promiseFn();
        resolve(ret);
        break;
      } catch (error) {
        // 如果出错了，但是还有机会，可以重试
        if (!times) reject(error);
      }
    }
  });
};

function getRandom() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => n > 0.9 ? resolve(n) : reject(n), 1000);
  });
}

Promise.retry(getRandom);
```

### 实现Promise.allSettled()

作用：方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。当有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，就可以使用它。相比之下，Promise.all() 更适合彼此相互依赖或者在其中任何一个reject时立即结束的情况。

```js
const promise1 = Promise.resolve('hello')
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'problem'))

Promise.allSettled([promise1, promise2])
  .then((values) => {
    console.log(values)
  })

// [
//   { status: 'fulfilled', value: 'hello' },
//   { status: 'rejected', reason: 'problem' }
// ]
```

自定义实现：

```js
/**
 * @param {*} arr 待处理的promise数组
 */
const allSet = arr => {
  return new Promise((resolve) => {
    let result = []
    let index = 0

    const addIndex = (key, value, status) => {
      let obj = {
        status,
        value
      }
      result[key] = obj
      index++
      // 当数组全部处理完时，直接返回即可
      if (index === arr.length) {
        resolve(result)
      }
    }


    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i]
      if (cur instanceof Promise) {
        // 记录该promise的状态
        cur.then(
          (value) => {
            addIndex(i, value, 'fulfilled')
          },
          (reason) => {
            addIndex(i, reason, 'rejected')
          }
        )
      } else {
        addIndex(i, cur, 'fulfilled')
      }
    }
  })
}


// 开始测试
const promise1 = Promise.resolve('success')
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'error'))
allSet([promise1, promise2])
  .then((values) => {
    console.log(values)
  })
// [
//   { status: 'fulfilled', value: 'hello' },
//   { status: 'rejected', value: 'problem' }
// ]
```


### 求多个数组的交集

```js
function intersect(...args) {
  if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }
  // 直接使用reduce函数解决即可
  return args.reduce((prev, cur) => {
    return prev.filter(item => cur.includes(item))
  })
}
```

### es6及es6+能力集，最常用的有哪些？都解决了什么问题？

ES6 的特性是使用最多的，包括类、模块化、箭头函数、函数参数默认值、模板字符串、解构赋值、延展操作符、Promise、let、const等，这些都是最基础的开发必备。

另外还有：

ES7 的 Array.prototype.includes()
ES8 的 async/await 、String padding、padStart()、padEnd() 、 Object.values()
ES9 的 Rest/Spread 属性、for await of、 Promise.finally()
ES10 的 Array.prototype.flat() 、 Array.prototype.flatMap() 、String的 trimStart() trimEnd()
ES11 的 Promise.allSettled 、空值处理及可选链
ES12 的逻辑赋值操作符、数字分隔符、 Promise.any()等

**（1）ES6**

- 类
- 模块化
- 箭头函数
- 函数参数默认值
- 模板字符串
- 解构赋值
- 扩展操作符
- 对象属性简写
- Promise
- let 与 const
- ……


**（2）ES7**

- Array.prototype.includes()
- 指数操作符 2**5 // 32

**（3）ES8**

- async/await
- Object.values()  // Object.values({a: 1, b: 2, c: 3})  // [1, 2, 3]
- Object.entries() // Object.values({a: 1, b: 2, c: 3})  // [["a", 1], ["b", 2], ["c", 3]]
- String padding: padStart()和padEnd()，填充字符串达到当前长度  // 'sister'.padStart(7, '0');'sister'.padEnd(7, '0')
- Object.getOwnPropertyDescriptors()
- 函数参数列表结尾允许逗号
- SharedArrayBuffer对象
- Atomics对象

**（4）ES9**

- 异步迭代（for await of）

```js
// await 可以和 for…of 循环一起使用，以串行的方式运行异步操作
async function getInfos(arr) {
  for await (let i of arr) {
    getData(i)
  }
}
```

- Promise.finally()

```js
// 无论 Promise 运行成功还是失败，都会运行 finally
function getInfos() {
  getData1()
  .then(getData2)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // ...
  });
}
```

- Rest/Spread 属性

```js
const values = [1, 2, 3]
console.log( Math.min(...values) ) // 1
```

- 新的正则表达式特性
  - 正则表达式反向断言（lookbehind）
  - 正则表达式dotAll模式
  - 正则表达式命名捕获组（Regular Expression Named Capture Groups）
  - 正则表达式 Unicode 转义
  - 非转义序列的模板字符串

**（5）ES10**

- 新增了Array的 flat() 方法和 flatMap() 方法

```js
[1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]
[1, 2, 3, 4].flatMap(a => [a**2]); // [1, 4, 9, 16]
```

- 新增了String的 trimStart() 方法和 trimEnd() 方法
- Object.fromEntries()，是 Object.entries() 的反转
- Symbol.prototype.description()
- Function.prototype.toString() 现在返回精确字符，包括空格和注释
- 简化 try {} catch {} ，修改 catch 绑定

**（6）ES11**

- Promise.allSettled()

```js
// 与 Promise.all 不同的是，它会返回所有的 promise 结果
const promise1 = Promise.resolve('hello')
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'problem'))

Promise.allSettled([promise1, promise2])
  .then((values) => {
    console.log(values)
  })

// [
//   { status: 'fulfilled', value: 'hello' },
//   { status: 'rejected', reason: 'problem' }
// ]
```

- 可选链（Optional chaining）

```js
const name = user?.info?.name;
const age = user?.info?.getAge?.();
```

- 空值合并运算符（Nullish coalescing Operator）

```js
const level = user.level ?? '暂无等级'; // 等价于 var level =  user.data.level || '暂无等级';
```

- import() 按需加载
- globalThis 目的就是提供一种标准化方式访问全局对象，有了 globalThis 后，你可以在任意上下文，任意时刻都能获取到全局对象
- BigInt 内置对象
- String.prototype.matchAll 返回一个包含所有匹配正则表达式及分组捕获结果的迭代器

**（7）ES12**

- String.prototype.replaceAll()
- Promise.any() 只要其中的一个 promise 成功就返回那个已经成功的 promise，如果可迭代对象中没有一个 promise 成功就返回一个失败的 promise
- WeakRef  使用WeakRefs的Class类创建对对象的弱引用(对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为)
- 逻辑赋值操作符（Logical Assignment Operators）
- 数字分隔符（Numeric separators） // const money = 1_000_000_000 // 1000000000
### 实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF' 的多种思路

分为以下三个步骤：

1. 从 rgb(255, 255, 255) 中提取出 r=255 、 g=255 、 b=255
2. 将 r 、 g 、 b 转换为十六进制，不足两位则补零
3. 组合 #

**1. 从 rgb(255, 255, 255) 中提取出 r=255 、 g=255 、 b=255**

方式一：利用 match

```js
function rgb2hex(sRGB) {
  const reg = /^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3}\s*),\s*(\d{1,3})\s*\)$/
  const rbg = sRGB.match(reg)
  return rbg
}

// 测试
console.log(rgb2hex('rgb(255, 255, 255)'))
// [
//   'rgb(255, 255, 255)',
//   'rgb',
//   '255',
//   '255',
//   '255',
//   index: 0,
//   input: 'rgb(255, 255, 255)',
//   groups: undefined
// ]
```

方式二：利用 match 方法2

```js
function rgb2hex(sRGB) {
  const rgb = sRGB.match(/\d+/g);
  return rgb
}

// 测试
console.log(rgb2hex('rgb(255, 255, 255)'))
// [ '255', '255', '255' ]
// [ '255', '255', '255' ]
```

方法三：利用replace+split

```js
function rgb2hex(sRGB) {
  const rgb = sRGB.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
  return rgb
}
// 测试
console.log(rgb2hex('rgb(255, 255, 255)'))
// [ '255', ' 255', ' 255' ]
```

**2. 将 r 、 g 、 b 转换为十六进制，不足两位则补零**

转换为十六进制，可采用：

```js
(+n).toString(16)
Number(n).toString(16) 
```

不足两位则补零：

```js
('0' + num).slice(-2)
num.padStart(2, '0')
(r < 16? '0':'') + num
num.length < 2 ? '0' + num : num
((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1)
```

**3. 组合 #**

```js
rgb.reduce((acc, cur) => acc + hex, '#').toUpperCase()
```

将以上的三个步骤进行组合即可。示例：

```js
function rgb2hex(sRGB) {
  let rgb = sRGB.match(/\d+/g)
  rgb = rgb.map(item => {
    item = (+item).toString(16)
    item= (+item < 16 ? '0' : '') + item
    return item
  })
  return rgb.reduce((acc, cur) => acc + cur, '#').toUpperCase()
}

console.log(rgb2hex('rgb(25, 55, 255)'))
```

### 如何判断url中只包含qq.com

例如：

```md
http://www.qq.com  // 通过
http://www.qq.com.cn  // 不通过
http://www.qq.com/a/b  // 通过
http://www.qq.com?a=1  // 通过
http://www.123qq.com?a=1  // 不通过
```

使用正则匹配：

```js
const reg=/\/\/w+\.qq\.com[^.]*$/

// 开始测试
const url1='http://www.qq.com'  // 通过
const url2='http://www.qq.com.cn'  // 不通过
const url3='http://www.qq.com/a/b'  // 通过
const url4='http://www.qq.com?a=1'  // 通过
const url5='http://www.123qq.com?a=1'  // 不通过

console.log(reg.test(url1))
console.log(reg.test(url2))
console.log(reg.test(url3))
console.log(reg.test(url4))
console.log(reg.test(url5))

// true
// false
// true
// true
// false
```

### 什么是继承？如何实现继承？

#### （1）原型链继承
将父类的实例作为子类的原型

```js
// 父类
function SuperType () {
  this.name = 'SuperType'; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类
function SubType () {
  this.subName = "SubType"; // 子类属性
};

SubType.prototype = new SuperType(); // 重写原型对象，代之以一个新类型的实例
// 这里实例化一个 SuperType 时， 实际上执行了两步
// 1，新创建的对象复制了父类构造函数内的所有属性及方法
// 2，并将原型 __proto__ 指向了父类的原型对象

SubType.prototype.saySubName = function () { // 子类原型方法
  return this.subName;
}
```

缺点：

- 可以在子类构造函数中，为子类实例增加实例属性。如果要新增原型属性和方法，则必须放在 SubType.prototype = new SuperType('SubType'); 这样的语句之后执行。
- 无法实现多继承
- 来自原型对象的所有属性被所有实例共享

#### （2）构造函数继承
在子类型的构造函数内部调用父类型构造函数

```js
// 父类
function SuperType (name) {
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类
function SubType () {
  // 调用 SuperType 构造函数
  SuperType.call(this, 'SuperType'); // 在子类构造函数中，向父类构造函数传参
  // 为了保证子父类的构造函数不会重写子类的属性，需要在调用父类构造函数后，定义子类的属性
  this.subName = "SubType"; // 子类属性
};
// 子类实例
let instance = new SubType(); // 运行子类构造函数，并在子类构造函数中运行父类构造函数，this绑定到子类
```

缺点：

- 实例并不是父类的实例，只是子类的实例
- 只能继承父类的实例属性和方法，不能继承原型属性/方法
- 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

#### （3）组合式继承
将原型链继承与构造函数继承组合在一起

```js
// 父类
function SuperType (name) {
  this.colors = ["red", "blue", "green"];
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类
function SubType (name, subName) {
  // 调用 SuperType 构造函数
  SuperType.call(this, name); // ----第二次调用 SuperType----
  this.subName = subName;
};

// ----第一次调用 SuperType----
SubType.prototype = new SuperType(); // 重写原型对象，代之以一个新类型的实例
SubType.prototype.constructor = SubType; // 组合继承需要修复构造函数指向
```

优点：弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法，不存在引用属性共享问题，可传参，可复用
缺点：调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

#### （4）寄生组合式继承

在组合继承中，调用了两次父类构造函数，这里通过通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点。

```js
// 父类
function SuperType (name) {
  this.colors = ["red", "blue", "green"];
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类
function SubType (name, subName) {
  // 调用 SuperType 构造函数
  SuperType.call(this, name); // ----第二次调用 SuperType，继承实例属性----
  this.subName = subName;
};

// ----第一次调用 SuperType，继承原型属性----
SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType; // 注意：增强对象
```

#### （5）原型式继承
将子类的原型设置为父类的原型

```js
// 父类
function SuperType (name) {
  this.colors = ["red", "blue", "green"];
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

/** 第一步 */
// 子类，通过 call 继承父类的实例属性和方法，不能继承原型属性/方法
function SubType (name, subName) {
  SuperType.call(this, name); // 调用 SuperType 的构造函数，并向其传参 
  this.subName = subName;
}

/** 第二步 */
// 解决 call 无法继承父类原型属性/方法的问题
// Object.create 方法接受传入一个作为新创建对象的原型的对象，创建一个拥有指定原型和若干个指定属性的对象
// 通过这种方法指定的任何属性都会覆盖原型对象上的同名属性
SubType.prototype = Object.create(SuperType.prototype, { 
  constructor: { // 注意指定 SubType.prototype.constructor = SubType
    value: SubType,
    enumerable: false,
    writable: true,
    configurable: true
  },
  run : { 
    value: function(){ // override
      SuperType.prototype.run.apply(this, arguments); 
      	// call super
      	// ...
    },
    enumerable: true,
    configurable: true, 
    writable: true
  }
}) 

/** 第三步 */
// 最后：解决 SubType.prototype.constructor === SuperType 的问题
// 这里，在上一步已经指定，这里不需要再操作
// SubType.prototype.constructor = SubType;
```

#### （6）ES6 class继承

```js
class People {
    constructor(name) {
        this.name = name
    }
    run() { }
}

// extends 相当于方法的继承
// 替换了上面的3行代码
class Man extends People {
    constructor(name) {
        // super 相当于属性的继承
        // 替换了 People.call(this, name)
        super(name)
        this.gender = '男'
    }
    fight() { }
}
```

extend核心代码如下：

```js
function _inherits(subType, superType) {
    // 创建对象，Object.create 创建父类原型的一个副本
    // 增强对象，弥补因重写原型而失去的默认的 constructor 属性
    // 指定对象，将新创建的对象赋值给子类的原型 subType.prototype
    subType.prototype = Object.create(superType && superType.prototype, {
        constructor: { // 重写 constructor
            value: subType,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superType) {
        Object.setPrototypeOf 
            ? Object.setPrototypeOf(subType, superType) 
            : subType.__proto__ = superType;
    }
}
```

### 编写一个函数，输出以下结果

预期结果：

```js
const f1 = foo(1, 2, 3)
const f2 = foo(1)(2, 3)
const f3 = foo(1)(2)(3)(4)
const f4 = foo(1)(2)(3)(4)(5, 6)

console.log(f1.getValue()) // 6
console.log(f2.getValue()) // 6
console.log(f3.getValue()) // 10
console.log(f4.getValue()) // 21
```

编写foo函数如下：

```js
function foo(...args) {
  const target = (...arg1s) => foo(...[...args, ...arg1s])
  target.getValue = () => args.reduce((p, n) => p + n, 0)
  return target
}
```

### 闭包的使用场景，使用闭包应该注意什么？

闭包很简单，就是能够访问另一个函数作用域变量的函数，更简单的说，闭包就是函数，只不过是声明在其它函数内部而已。

```js
function getOuter(){
  let count = 0
  function getCount(num){
    count += num
    console.log(count) //访问外部的数据
  }
  return getCount //外部函数返回
}
var myfunc = getOuter()
myfunc(1) // 1
myfunc(2) // 3
```

闭包的特点：

- 闭包可以访问当前函数以外的变量
- 即使外部函数已经返回，闭包仍能访问外部函数定义的变量与参数
- 闭包可以更新外部变量的值

所以，闭包可以：

- 避免全局变量的污染
- 能够读取函数内部的变量
- 可以在内存中维护一个变量

使用闭包应该注意什么：

- 代码难以维护： 闭包内部是可以访问上级作用域，改变上级作用域的私有变量，我们使用的使用一定要小心，不要随便改变上级作用域私有变量的值
- 使用闭包的注意点： 由于闭包会使得函数中的变量都保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄漏。解决方法是，在退出函数之前，将不使用的局部变量全部删除（引用设置为 null ，这样就解除了对这个变量的引用，其引用计数也会减少，从而确保其内存可以在适当的时机回收）
- 内存泄漏： 程序的运行需要内存。对于持续运行的服务进程，必须及时释放不再用到的内存，否则占用越来越高，轻则影响系统性能，重则导致进程崩溃。不再用到的内存，没有及时释放，就叫做内存泄漏
- this指向： 闭包的this指向的是window

闭包的使用场景详见：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/453

### babel是怎么解析代码的？

大致分为下面四步：

1. input => tokenizer => tokens，先对输入代码进行分词，根据最小有效语法单元，对字符串进行切割。
2. tokens => parser => AST，然后进行语法分析，会涉及到读取、暂存、回溯、暂存点销毁等操作。
3. AST => transformer => newAST，然后转换生成新的 AST。
4. newAST => codeGenerator => output，最后根据新生成的 AST 输出目标代码。

### typeof 可以判断哪些类型？instanceof 做了什么？null为什么被typeof错误的判断为了'object'？

1. 问题1：typeof
typeof 操作符唯一的目的就是检查数据类型，但我们使用 typeof 来判断引用类型变量时，无论是什么类型的变量，它都会返回 Object，为此，引入了instanceof。

![typeof](https://img.alicdn.com/imgextra/i3/O1CN01VuK2Fq1pL8r7m2GZM_!!6000000005343-2-tps-1482-724.png)

2. 问题2：instanceof

instanceof 与 typeof 相比，instanceof 方法要求开发者明确的确认对象为某特定类型。即 instanceof 用于判断引用类型属于哪个构造函数的方法，而且instanceof 可以用于判断多层继承关系。

instanceof 的内部实现机制是：通过判断对象的原型链上是否能找到对象的 prototype，来确定 instanceof 返回值。

```js
// instanceof 的内部实现 
function instance_of(L, R) {//L 表左表达式，R 表示右表达式，即L为变量，R为类型
  // 取 R 的显示原型
  var prototype = R.prototype
  // 取 L 的隐式原型
  L = L.__proto__
  // 判断对象（L）的类型是否严格等于类型（R）的显式原型
  while (true) { 
    if (L === null) {
      return false
    }
   
    // 这里重点：当 prototype 严格等于 L 时，返回 true
    if (prototype === L) {
      return true
    } 
 
    L = L.__proto__
  } 
}
```

还有一个方法——Object.prototype.toString，我们可以利用这个方法来对一个变量的类型来进行比较准确的判断,默认情况下(不覆盖 toString 方法前提下)，任何一个对象调用 Object 原生的 toString 方法都会返回 "[object type]"，其中 type 是对象的类型，如下所示：

```js
Object.prototype.toString.call("abc"); // "[object String]"
Object.prototype.toString.call(100); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call([1,2,3]); // "[object Array]"
Object.prototype.toString.call(/\w/); // "[object RegExp]"
```

3. 问题3：typeof null -> object

在 js 最初的实现中，js 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。

### 判断类型的四种方法

**1. typeof**

typeof 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 7 种：number、boolean、symbol、string、object、undefined、function 等。

```js
typeof '';// string 有效
typeof 1;// number 有效
typeof Symbol();// symbol 有效
typeof true;//boolean 有效
typeof undefined;//undefined 有效
typeof null;//object 无效
typeof[] ;//object 无效
typeof new Function();// function 有效
typeof new Date();//object 无效
typeof new RegExp();//object 无效
```
有些时候，typeof 操作符会返回一些令人迷惑但技术上却正确的值：

- 对于基本类型，除 null 以外，均可以返回正确的结果。对于 null ，返回 object 类型。
- 对于引用类型，除 function 以外，一律返回 object 类型。对于 function 返回  function 类型。

**2. intanceof**

instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 

```js
function instance_of(L, R) {//L 表左表达式，R 表示右表达式，即L为变量，R为类型
  let prototype = R.prototype
  L = L.__proto__
  while (true) { 
    if (L === null) {
      return false
    }
    if (prototype === L) {
      return true
    } 
    L = L.__proto__
  } 
}
```

instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。

**3. constructor**

undefined和null没有contructor属性

```js
console.log(bool.constructor === Boolean);// true
console.log(num.constructor === Number);// true
console.log(str.constructor === String);// true
console.log(arr.constructor === Array);// true
console.log(obj.constructor === Object);// true
console.log(fun.constructor === Function);// true

console.log(haoxl.constructor === Student);// false
console.log(haoxl.constructor === Person);// true
```

**4. toString**

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

```js
Object.prototype.toString.call('') ;  // [object String]
Object.prototype.toString.call(1) ;   // [object Number]
Object.prototype.toString.call(true) ;// [object Boolean]
Object.prototype.toString.call(Symbol());//[object Symbol]
Object.prototype.toString.call(undefined) ;// [object Undefined]
Object.prototype.toString.call(null) ;// [object Null]
Object.prototype.toString.call(newFunction()) ;// [object Function]
Object.prototype.toString.call(newDate()) ;// [object Date]
Object.prototype.toString.call([]) ;// [object Array]
Object.prototype.toString.call(newRegExp()) ;// [object RegExp]
Object.prototype.toString.call(newError()) ;// [object Error]
Object.prototype.toString.call(document) ;// [object HTMLDocument]
Object.prototype.toString.call(window) ;//[object global] window 是全局对象 global 的引用
```

### IIFE（立即调用表达式）打印结果

```js
var name = 'Tom';
(function() {
    // console.log(name) // undefined
    if (typeof name == 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
// Goodbye Jack
```

```JS
var name = 'Tom';
(function() {
    if (typeof name == 'undefined') {
        name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
// Hello Tom
```

### 关于async/await的执行问题

```js
function wait() {
	return new Promise(resolve =>
		setTimeout(resolve, 100)
	)
}

async function main() {
	console.time();
	const x = await wait(); // 每个都是都执行完才结,包括setTimeout的执行时间
	const y = await wait(); // 执行顺序 x->y->z 同步执行，x 与 setTimeout 属于同步执行
	const z = await wait();
	console.timeEnd(); // default: 312.419ms
	
	console.time();
	const x1 = wait(); // x1,y1,z1 同时异步执行， 包括setTimeout的执行时间
	const y1 = wait(); // x1 与 setTimeout 属于同步执行
	const z1 = wait();
	await x1;
	await y1;
	await z1;
	console.timeEnd(); // default: 103.175ms
	
	console.time();
	const x2 = wait(); // x2,y2,z2 同步执行，但是不包括setTimeout的执行时间
	const y2 = wait(); // x2 与 setTimeout 属于异步执行
	const z2 = wait();
	console.timeEnd(); // default: 0.034ms
}
main();
```

### ['1', '2', '3'].map(parseInt) what & why ?

真正的答案是[1, NaN, NaN]，为什么呢？

我们分析一下，执行`['1', '2', '3'].map(parseInt)`相当于执行：

```js
['1', '2', '3'].map((value,index)=>{
  // parseInt('1', 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
  // parseInt('2', 1) //基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN
  // parseInt('3', 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN
  return parseInt(value,index)
})
```
parseInt(string, radix)接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。map函数返回的是一个数组，所以最后结果为[1, NaN, NaN]



### 箭头函数和普通函数的区别是什么？

箭头函数是普通函数的简写，可以更优雅的定义一个函数，和普通函数相比，有以下几点差异：

1. 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
3. 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。
4. 不可以使用 new 命令，因为 a)没有自己的 this，无法调用 call，apply；b）没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 __proto__。

new 过程大致是这样的：

```js
function newFunc(father, ...rest) {
  var result = {};
  result.__proto__ = father.prototype;
  var result2 = father.apply(result, rest);
  if (
    (typeof result2 === 'object' || typeof result2 === 'function') &&
    result2 !== null
  ) {
    return result2;
  }
  return result;
}
```

### 手写字符转base64
**（1）字符转二进制**

```js
// 1. 将每个字符都转为二进制
// 2. 二进制不足8位的补齐0
// 3. 将所有的8位二进制数拼接起来即可
function charToBinary(text) {
  let code = "";
  for (let i of text) {
    // 字符编码
    let number = i.charCodeAt().toString(2);
    // 1 bytes = 8bit，将 number 不足8位的0补上
    for (let a = 0; a <= 8 - number.length; a++) {
       number = 0 + number;
    }
    code += number;
  }
  return code;
}

console.log(charToBinary('hello world'))
// 0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100
```

**（2）二进制转base64**

```js
// 将二进制数据每 6bit 位替换成一个 base64 字符
function binaryTobase64(code) {
  let base64Code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let res = '';
  // 1 bytes = 8bit，6bit 位替换成一个 base64 字符
  // 所以每 3 bytes 的数据，能成功替换成 4 个 base64 字符
    
  // 对不足 24 bit (也就是 3 bytes) 的情况进行特殊处理
  if (code.length % 24 === 8) {
    code += '0000';
    res += '=='
  }
  if (code.length % 24 === 16) {
    code += '00';
    res += '='
  }

  let encode = '';
  // code 按 6bit 一组，转换为
  for (let i = 0; i < code.length; i += 6) {
    let item = code.slice(i, i + 6);
    encode += base64Code[parseInt(item, 2)];
  }
  return encode + res;
}
```

**（3）字符转Base64**

```js
function base64encode(text) {
  let base64Code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let res = '';
  let i = 0;
  while (i < text.length) {
    let char1, char2, char3, enc1, enc2, enc3, enc4;
    
    // 三个字符一组，转二进制
    char1 = text.charCodeAt(i++); 
    char2 = text.charCodeAt(i++);
    char3 = text.charCodeAt(i++);

    enc1 = char1 >> 2; // 取第 1 字节的前 6 位
    
    // 三个一组处理
    if (isNaN(char2)) {
      // 只有 1 字节的时候
      enc2 = ((char1 & 3) << 4) | (0 >> 4);
      // 第65个字符用来代替补位的 = 号
      enc3 = enc4 = 64;
    } else if (isNaN(char3)) {
      // 只有 2 字节的时候
      enc2 = ((char1 & 3) << 4) | (char2 >> 4);
      enc3 = ((char2 & 15) << 2) | (0 >> 6);
      enc4 = 64;
    } else {
      enc2 = ((char1 & 3) << 4) | (char2 >> 4); // 取第 1 个字节的后 2 位(3 = 11 << 4 = 110000) + 第 2 个字节的前 4 位
      enc3 = ((char2 & 15) << 2) | (char3 >> 6); // 取第 2 个字节的后 4 位 (15 = 1111 << 2 = 111100) + 第 3 个字节的前 2 位
      enc4 = char3 & 63; // 取最后一个字节的最后 6 位 (63 = 111111)
    }
    
    // 转base64
    res += base64Code.charAt(enc1) + base64Code.charAt(enc2) + base64Code.charAt(enc3) + base64Code.charAt(enc4)
  }

  return res;
}
```

### webpack打包vue太慢了怎么办？

1. 使用`webpack-bundle-analyzer`对项目进行模块分析生成report，查看report后看看哪些模块体积过大，然后针对性优化，比如我项目中引用了常用的UI库element-ui和v-charts等
2. 配置webpack的externals ，官方文档的解释：防止将某些import的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖。所以，可以将体积大的库分离出来。
3. 然后在main.js中移除相关库的import
4. 在index.html模板文件中，添加相关库的cdn引用，如：
```html
<script src="https://unpkg.com/element-ui@2.10.0/lib/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"></script>
```
5. 确保下webpack，npm, node 及主要库版本要新，比如：4.x比3.x提升很多
6. loader范围缩小到src项目文件！一些不必要的loader能关就关了吧
7. eslint代码校验其实是一个很费时间的一个步奏。可以把eslint的范围缩小到src,且只检查*.js 和 *.vue，生产环境不开启lint，使用pre-commit或者husky在提交前校验。
8. happypack多进程进行
9. HardSourceWebpackPlugin会将模块编译后进行缓存，第一次之后速度会明显提升

### js实现单向链表
实现一个类LinkList，实现一些基本的方法：

- find 查找某个节点
- findPrev 查找上一个节点
- insert 插入一个节点
- delete 删除一个节点

```js
class LinkList {
  constructor() {
    this.head = null
  }

  find(value) {
    let curNode = this.head
    while (curNode.value !== value) {
      curNode = curNode.next
    }
    return curNode
  }

  findPrev(value) {
    let curNode = this.head
    while (curNode.next!==null && curNode.next.value !== value) {
      curNode = curNode.next
    }
    return curNode
  }

  insert(newValue, value) {
    const newNode = new Node(newValue)
    const curNode = this.find(value)
    newNode.next = curNode.next
    curNode.next = newNode
  }

  delete(value) {
    const preNode = this.findPrev(value)
    const curNode = preNode.next
    preNode.next = preNode.next.next
    return curNode
  }
}

class Node {
  constructor(value, next) {
    this.value = value
    this.next = null
  }
}
```
## css相关

### 怎么让一个 div 水平垂直居中

页面结构如下，让child元素在parent容器中垂直居中

```html
<div class="parent">
  <div class="child"></div>
</div>
```

**方法1：使用flex布局**

```css
div.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**方法2：父元素相对定位，子元素绝对定位（可以处理定宽高、不定宽高两种情况）**

```css
div.parent {
    position: relative; 
}
div.child {
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
}
/* 或者 */
div.child {
    width: 50px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    margin-top: -5px;
}
/* 或 */
div.child {
    width: 50px;
    height: 10px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```

**方法3：grid布局**

```css
div.parent {
    display: grid;
}
div.child {
    justify-self: center;
    align-self: center;
}
```

**方法4：table布局**

```css
div.parent {
  display: table;
}
div.child {
  display: table-cell
  vertical-align: middle;
  text-align: center;
}
```

**方法5：flex+margin**

```css
div.parent{
  display:flex;
}
div.child{
  margin:auto;
}
```

### 弹性盒子中 flex: 0 1 auto 表示什么意思
三个参数分别对应的是 flex-grow, flex-shrink 和 flex-basis，默认值为0 1 auto。

1. flex-grow: 0; // 增长比例，子项合计宽度小于容器宽度，需要根据每个子项设置的此属性比例对剩下的长度进行分配
2. flex-shrink: 1; // 回缩比例，子项合计宽度大于容器宽度，需要根据每个子项设置的此属性比例对多出的长度进行分配
3. flex-basis: auto; // 设置了宽度跟宽度走，没设置宽度跟内容实际宽度走

**举例说明：**

```md
① flex-grow 剩余空间索取
默认值为0，不索取
eg:父元素400，子元素A为100px，B为200px.则剩余空间为100
此时A的flex-grow 为1，B为2，
则A=100px+1001/3; B=200px+1002/3

② flex-shrink 子元素总宽度大于复制元素如何缩小
父400px,A 200px B 300px
AB总宽度超出父元素100px;
如果A不减少，则flex-shrink ：0,B减少；

② flex-basis
该属性用来设置元素的宽度，当然width也可以用来设置元素的宽度，如果设置了width和flex-basis，那么flex-basis会覆盖width值。
```

### 求 left、right 的最终宽度（flex-shrink相关）

```html
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  .left {
    flex: 1 2 500px;
    background: red;
  }
  .right {
    flex: 2 1 400px;
    background: blue;
  }
</style>
```

这是flex 的缩写： flex-grow、flex-shrink、flex-basis。

- flex-grow	一个数字，规定项目将相对于其他灵活的项目进行扩展的量。
- flex-shrink	一个数字，规定项目将相对于其他灵活的项目进行收缩的量。
- flex-basis	项目的长度。合法值："auto"、"inherit" 或一个后跟 "%"、"px"、"em" 或任何其他长度单位的数字。

```
子元素的 flex-shrink 的值分别为 2，1
溢出：500+400 - 600 = 300。
总权重为 2 * 500+ 1 * 400 = 1400

两个元素分别收缩：
300 * 2(flex-shrink) * 500(width) / 1400= 214.28
300 * 1(flex-shrink) * 400(width) / 1400= 85.72

三个元素的最终宽度分别为：
500 - 214.28 = 285.72
400 - 85.72 = 314.28
```

### 求 left、right 的最终宽度（flex-grow相关）
```html
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  .left {
    flex: 1 2 300px;
    background: red;
  }
  .right {
    flex: 2 1 200px;
    background: blue;
  }
</style>
```

```
剩余的空间：600 - (300 + 200) = 100。
子元素的 flex-grow 的值分别为 1，2， 剩余空间用3等分来分
100 / 3 = 33.3333333
所以 left = 300 + 1 * 33.33 = 333.33
right = 200 + 2 * 33.33 = 266.67
```

### 如何用 css 或 js 实现多行文本溢出省略效果，考虑兼容性
```css
/* 单行： */
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

/* 多行： */
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; //行数
overflow: hidden;

/* 兼容 */
p{
  position: relative; 
  line-height: 20px; 
  max-height: 40px;
  overflow: hidden;
}
p::after{
  content: "..."; 
  position: absolute; 
  bottom: 0; 
  right: 0; 
  padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}
```

### 介绍下重绘和回流以及如何进行优化

1. 浏览器渲染机制
- 浏览器采用流式布局模型（Flow Based Layout）
- 浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了渲染树（Render Tree）。
- 有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
- 由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一。

2. 回流
回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。

3. 重绘
由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如outline, visibility, color、background-color等，重绘的代价是高昂的，因为浏览器必须验证DOM树上其他节点元素的可见性。

**回流和重绘两者之间的关系：**
回流必定会发生重绘，重绘不一定会引发回流。

4. 优化策略

**（1）减少以下属性/方法的使用，避免强制触发回流和重绘**

现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即16.6ms）才会清空队列，但当你获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值。

主要包括以下属性或方法：

```
offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
width、height
getComputedStyle()
getBoundingClientRect()
```

所以，我们应该避免频繁的使用上述的属性，他们都会强制渲染刷新队列。

**（2）css相关**

- 使用 transform 替代 top
- 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变布局）
- 避免使用table布局，可能很小的一个小改动会造成整个 table 的重新布局。
- 尽可能在DOM树的最末端改变class，可以限制了回流的范围，使其影响尽可能少的节点。
- 避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点层级过多。
- 将动画效果应用到position属性为absolute或fixed的元素上，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 requestAnimationFrame，详见探讨 requestAnimationFrame。
- 避免使用CSS表达式，可能会引发回流。
- 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点，例如will-change、video、iframe等标签，浏览器会自动将该节点变为图层。
- CSS3 硬件加速（GPU加速），使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘 。但是对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。

**（3）js相关**
- 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
- 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

### 介绍BFC及其应用

BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。创建 BFC 的方式有：

**触发条件：**

- 根元素 html
- float 不为 none
- overflow 不为 visible
- display 值为 inline-block table-cell flex inline-flex
- position 值为 absolute fixed
- 弹性元素(flex布局)
- 网格元素(grid布局)

**BFC 主要的作用是：**

- 清除浮动
- 避免margin重叠

### 介绍下 BFC、IFC、GFC、FFC

**BFC（Block formatting contexts）：块级格式上下文**

页面上的一个隔离的渲染区域，那么它是如何产生的呢？可以触发BFC的元素有float、position、overflow、display：table-cell/ inline-block/table-caption等。

**IFC（Inline formatting contexts）：内联格式上下文**

IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个IFC下的多个line box高度会不同。

IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。那么IFC一般有什么用呢？

- 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。
- 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

**GFC（GrideLayout formatting contexts）：网格布局格式化上下文**

当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么GFC有什么用呢，和table又有什么区别呢？首先同样是一个二维的表格，但GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。

**FFC（Flex formatting contexts）：自适应格式上下文**

display值为flex或者inline-flex的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少safari和chrome还是OK的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。
## 浏览器相关
### 浏览器和 Node 事件循环的区别

**【浏览器】**

关于浏览器的事件循环机制，我总结了一篇较详细的博客：[博客地址](https://iloveyou11.github.io/2019/07/01/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6-01-JS%E6%B7%B1%E5%85%A5%EF%BC%88%E4%B8%8A%EF%BC%89/)

关于微任务和宏任务在浏览器的执行顺序是这样的：

- 执行一只task（宏任务）
- 执行完micro-task队列 （微任务）
- 如此循环往复下去

![浏览器事件循环机制](https://img.alicdn.com/imgextra/i1/O1CN01H2ACHF26VXJIZTwg2_!!6000000007667-2-tps-1718-1004.png)

- 宏任务一般包括：整体代码script，setTimeout，setInterval、setImmediate、I/O 操作、UI 渲染等。
- 微任务一般包括：new Promise().then(回调)、MutationObserver(html5新特性) 、process.nextTick等。

**【Node】**

Node的事件循环是libuv实现的。

> libuv库是多平台C库，提供对基于事件循环的异步I/O的支持。它支持epoll、kqueue、Windows的IOCP和Solaris的事件端口。它主要设计用于Node.js，但也可用于其他软件项目如Julia或pyuv等。 

Node事件循环机制如下：

![Node事件循环机制](https://user-images.githubusercontent.com/20101525/53734427-eba9e880-3ebe-11e9-8511-eb4948e336ae.png)

宏任务的执行顺序如下：

- timers定时器：本阶段执行已经安排的 setTimeout() 和 setInterval() 的回调函数。
- pending callbacks待定回调：执行延迟到下一个循环迭代的 I/O 回调。
- idle, prepare：仅系统内部使用。
- poll 轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，它们由计时器和 setImmediate() 排定的之外），其余情况 node 将在此处阻塞。
- check 检测：setImmediate() 回调函数在这里执行。
- close callbacks 关闭的回调函数：一些准备关闭的回调函数，如：socket.on('close', ...)。

微任务和宏任务在Node的执行顺序（Node10之前和Node11以后是不一样的）：

（1）Node10之前

- 执行完一个阶段的所有任务
- 执行完nextTick队列里面的内容
- 然后执行完微任务队列的内容

（2）Node11以后

- 和浏览器的行为统一了，都是每执行一个宏任务就执行完微任务队列。
### cookie 和 token 都存放在 header 中，为什么不会劫持 token？

```
cookie——服务员看你的身份证，给你一个编号，以后，进行任何操作，都出示编号后服务员去看查你是谁。
token——直接给服务员看自己身份证
```

1. 首先token不是防止XSS的，而是为了防止CSRF的
2. CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token

> cookie：登陆后后端生成一个sessionid放在cookie中返回给客户端，并且服务端一直记录着这个sessionid，客户端以后每次请求都会带上这个sessionid，服务端通过这个sessionid来验证身份之类的操作。所以别人拿到了cookie拿到了sessionid后，就可以完全替代你。

> token：登陆后后端返回一个token给客户端，客户端将这个token存储起来，然后每次客户端请求都需要开发者手动将token放在header中带过去，服务端每次只需要对这个token进行验证就能使用token中的信息来进行下一步操作了。

> xss：用户通过各种方式将恶意代码注入到其他用户的页面中。就可以通过脚本获取信息，发起请求，之类的操作。

> csrf：跨站请求攻击，简单地说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去运行。这利用了web中用户身份验证的一个漏洞：简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的。csrf并不能够拿到用户的任何信息，它只是欺骗用户浏览器，让其以用户的名义进行操作。

> csrf例子：假如一家银行用以运行转账操作的URL地址如下： http://www.examplebank.com/withdraw?account=AccoutName&amount=1000&for=PayeeName
那么，一个恶意攻击者可以在另一个网站上放置如下代码： `<img src="<http://www.examplebank.com/withdraw?account=Alice&amount=1000&for=Badman>">`
如果有账户名为Alice的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失1000资金。

上面的两种攻击方式，如果被xss攻击了，不管是token还是cookie，都能被拿到，所以对于xss攻击来说，cookie和token没有什么区别。但是对于csrf来说就有区别了。

**CSRF 跨站点请求伪造：**

- 如果用户登陆了A网站，拿到了cookie，又点击了恶意的网站B。
- B收到请求以后，返回一段攻击代码，并且发出一个请求给网站A。
- 浏览器会在用户不知情的情况下，根据B的请求，带着cookie访问A。
- 由于HTTP是无状态的，A网站不知道这个请求其实是恶意网站B发出的，就会根据cookie来处理请求，从而执行了攻击代码。
- 而浏览器不会自动携带 token，所以不会劫持 token。

### 如何在H5和小程序中计算白屏时间和首屏时间

**（1）白屏时间=页面开始展示的时间点-开始请求时间点**（从空白内容到开始有内容展示）

开始请求时间点可以通过`Performance Timing.navigation Start`，那么页面开始展示的时间点怎么获取呢？已经知道渲染过程是逐步完成的，而且页面解析是按照文档流从上至下解析的，因此一般认为开始解析body的时间点就是页面开始展示的时间，所以可以通过在head标签的末尾插入script来统计时间节点作为页面开始展示时间节点。但是这种方式需要打点，因此也有很多项目为了简化白屏时间的获取会选择忽略head解析时间直接用`Performance Timing.dom Loading` 来表示页面开始展示的时间，即使用`dom loading-navigation Start`来表示白屏时间。

**（2）首屏时间=首屏内容渲染结束时间点-开始请求时间点**（才空白内容到内容展示完全）

同样开始请求时间点可以通过Performance Timing.navigation Start获取。首屏内容渲染结束的时间点通常有以下几种方法获取：

（1）首屏模块标签标记法

适用于于首屏内容不需要通过拉取数据才能生存以及页面不考虑图片等资源加载的情况。通过在 HTML 文档中对应首屏内容的标签结束位置，使用内联的 JavaScript 代码记录当前时间戳作为首屏内容渲染结束的时间点。

（2）统计首屏内加载最慢的图片的时间

通常首屏内容加载最慢的就是图片资源，因此可以把首屏内加载最慢的图片加载完成的时间作为首屏时间。由于浏览器对每个页面的 TCP 连接数有限制，使得并不是所有图片都能立刻开始下载和显示。因此在 DOM树 构建完成后会通过遍历首屏内的所有图片标签，并且监听所有图片标签 onload 事件，最终遍历图片标签的加载时间获取最大值，将这个最大值作为首屏时间。

（3）自定义首屏内容计算法

由于统计首屏内图片完成加载的时间比较复杂。所以在项目中通常会通过自定义模块内容，来简化计算首屏时间。例如忽略图片等资源加载情况，只考虑页面主要 DOM；只考虑首屏的主要模块，而不是严格意义首屏线以上的所有内容。

可交互时间=用户可以正常进行事件输入时间点-开始请求时间点。

PerformanceTiming有一个domInteractive属性，代表了DOM结构结束解析的时间点，就是Document.ready State属性变为“interactive”

### memory cache 和 disk cache
请求时浏览器缓存 from memory cache 和 from disk cache 的依据是什么? 哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？

所谓用户行为对浏览器缓存的影响，指的就是用户在浏览器如何操作时，会触发怎样的缓存策略。主要有 3 种：

1. 打开网页，地址栏输入地址： 查找 disk cache 中是否有匹配。如有则使用；如没有则发送网络请求。
2. 普通刷新 (F5)：因为 TAB 并没有关闭，因此 memory cache 是可用的，会被优先使用(如果匹配的话)。其次才是 disk cache。
3. 强制刷新 (Ctrl + F5)：浏览器不使用缓存，因此发送的请求头部均带有 Cache-control: no-cache(为了兼容，还带了 Pragma: no-cache),服务器直接返回 200 和最新内容。

回答非常详细的一篇文章：[深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)

### 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？

- 能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
- 触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
- 避免跨域（img 天然支持跨域）
- 执行过程无阻塞
- 相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
- 利用空白gif或1x1 px的img是互联网广告或网站监测方面常用的手段，简单、安全、相比PNG/JPG体积小，1px 透明图，对网页内容的影响几乎没有影响，这种请求用在很多地方，比如浏览、点击、热点、心跳、ID颁发等等。

另外该脚本的位置一般放在页面最后以免阻塞页面渲染，并且一般情况下也不需要append到DOM中。通过它的onerror和onload事件来检测发送状态。

```html
<script type="text/javascript">
 var thisPage = location.href;
 var referringPage = (document.referrer) ? document.referrer : "none";
 var beacon = new Image();
 beacon.src = "http://www.example.com/logger/beacon.gif?page=" + encodeURI(thisPage)
 + "&ref=" + encodeURI(referringPage);
</script>
```

解答一些疑惑与问题：

**1. 为什么不能直接用GET/POST/HEAD请求接口进行上报？**

一般而言，打点域名都不是当前域名，所以所有的接口请求都会构成跨域。而跨域请求很容易出现由于配置不当被浏览器拦截并报错，这是不能接受的。所以，直接排除。

**2. 为什么不能用请求其他的文件资源（js/css/ttf）的方式进行上报？**

这和浏览器的特性有关。通常，创建资源节点后只有将对象注入到浏览器DOM树后，浏览器才会实际发送资源请求。反复操作DOM不仅会引发性能问题，而且载入js/css资源还会阻塞页面渲染，影响用户体验。

但是图片请求例外。构造图片打点不仅不用插入DOM，只要在js中new出Image对象就能发起请求，而且还没有阻塞问题，在没有js的浏览器环境中也能通过img标签正常打点，这是其他类型的资源请求所做不到的。所以，在所有通过请求文件资源进行打点的方案中，使用图片是最好的解决方案。

**3. 同样都是图片，上报时选用了1x1的透明GIF，而不是其他的PNG/JEPG/BMP文件？**

首先，1x1像素是最小的合法图片。而且，因为是通过图片打点，所以图片最好是透明的，这样一来不会影响页面本身展示效果，二者表示图片透明只要使用一个二进制位标记图片是透明色即可，不用存储色彩空间数据，可以节约体积。而在所有的图片类型中，GIF的体积是最小的（只需要43个字节）。

## 框架相关

### React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？

React 和 Vue 做的假设是：

- 检测VDOM的变化只发生在同一层
- 检测VDOM的变化依赖于用户指定的key

如果变化发生在不同层或者同样的元素用户指定了不同的key或者不同元素用户指定同样的key，React 和 Vue都不会检测到，就会发生莫名其妙的问题。

但是React 认为， 前端碰到上面的第一种情况概率很小，第二种情况又可以通过提示用户，让用户去解决，因此这个取舍是值得的。 没有牺牲空间复杂度，却换来了在大多数情况下时间上的巨大提升。

**（1）传统diff**

传统的diff是循环递归每一个节点。

<img src="https://upload-images.jianshu.io/upload_images/8901652-829ed2769504d3b5.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" width="80%" />

比如左侧树a节点依次进行如下对比，左侧树节点b、c、d、e亦是与右侧树每个节点对比，算法复杂度能达到O(n^2)，查找完差异后还需计算最小转换方式，这其中的原理我没仔细去看，最终达到的算法复杂度是O(n^3)。

**（2）react diff**

传统diff算法复杂度达到O(n^3 )这意味着1000个节点就要进行数10亿次的比较，这是非常消耗性能的。react大胆的将diff的复杂度从O(n^3)降到了O(n)，它是如何做到的呢？

- 由于web UI中跨级移动操作非常少、可以忽略不计，所以react实现的diff是同层级比较
- 拥有相同类型的两个组件产生的DOM结构也是相似的，不同类型的两个组件产生的DOM结构则不近相同
- 对于同一层级的一组子节点，通过分配唯一唯一id进行区分（key值）

![react diff](https://upload-images.jianshu.io/upload_images/8901652-abb72fd92fcacdef.png?imageMogr2/auto-orient/strip|imageView2/2/w/401/format/webp)

将所有的差异保存在了patches对象中，会有如下几种差异类型：

```md
插入：patches[0]:{type:'INSERT_MARKUP',node: newNode }
移动：patches[0]: {type: 'MOVE_EXISTING'}
删除：patches[0]: {type: 'REMOVE_NODE'}
文本内容改变：patches[0]: {type: 'TEXT_CONTENT',content: 'virtual DOM2'}
属性改变：patches[0]: {type: 'SET_MARKUP',props: {className:''}}
```

**（3）vue diff**

跟react一样，只进行同层级比较，忽略跨级操作。

算法详见[解析vue2.0的diff算法 ](https://github.com/aooy/blog/issues/2)

### react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别

从最终渲染的 DOM 来看，这两者都是链接，都是 <a> 标签，区别是：

<Link> 是 react-router 里实现路由跳转的链接，一般配合 <Route> 使用，react-router 接管了其默认的链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的 <Route> 对应的页面内容更新，而不会刷新整个页面。而 <a> 标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况）。

Link点击事件handleClick部分源码:

```js
if (_this.props.onClick) _this.props.onClick(event);

if (!event.defaultPrevented && // onClick prevented default
event.button === 0 && // ignore everything but left clicks
!_this.props.target && // let browser handle "target=_blank" etc.
!isModifiedEvent(event) // ignore clicks with modifier keys
) {
    event.preventDefault();

    var history = _this.context.router.history;
    var _this$props = _this.props,
        replace = _this$props.replace,
        to = _this$props.to;


    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }
```

Link做了3件事情：

1. 有onclick那就执行onclick
2. click的时候阻止a标签默认事件（这样子点击<a href="/abc">123</a>就不会跳转和刷新页面）
3. 再取得跳转href（即是to），用history（前端路由两种方式之一，history & hash）跳转，此时只是链接变了，并没有刷新页面

### redux 为什么要把 reducer 设计成纯函数

redux的设计思想就是不产生副作用，数据更改的状态可回溯，所以redux中处处都是纯函数。

redux有三大原则：

1. 单一数据流
整个应用state都被储存在一个store里面 构成一个Object tree
2. State是只读的
唯一改变state的方法就是触发action, action是一个用于描述已发生事件的普通对象
3. 使用纯函数来执行修改
为了描述action如何改变state tree， 你需要编写reducers

把reducer设计成纯函数，可以实现时间旅行，记录/回放或者热加载。

### Virtual DOM 真的比操作原生 DOM 快吗？

[尤雨溪回答](https://www.zhihu.com/question/31809713/answer/53544875)

这是一个性能 vs 可维护性的取舍。框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。针对任何一个 benchmark，我都可以写出比任何框架更快的手动优化，但是那有什么意义呢？在构建一个实际应用的时候，你难道为每一个地方都去做手动优化吗？出于可维护性的考虑，这显然不可能。框架给你的保证是，你在不需要手动优化的情况下，我依然可以给你提供过得去的性能。

主流的框架 + 合理的优化，足以应对绝大部分应用的性能需求。如果是对性能有极致需求的特殊情况，其实应该牺牲一些可维护性采取手动优化：比如 Atom 编辑器在文件渲染的实现上放弃了 React 而采用了自己实现的 tile-based rendering；又比如在移动端需要 DOM-pooling 的虚拟滚动，不需要考虑顺序变化，可以绕过框架的内置实现自己搞一个。

### 聊聊 Redux 和 Vuex 的设计思想

**共同点**

首先两者都是处理全局状态的工具库，大致实现思想都是：

```
全局state保存状态---->dispatch(action)------>reducer(vuex里的mutation)----> 生成newState;
整个状态为同步操作。
```

**区别**

最大的区别在于处理异步的不同，vuex里面多了一步commit操作，在action之后commit(mutation)之前处理异步，而redux里面则是通过中间件处理。

### React 中 setState 什么时候是同步的，什么时候是异步的？

在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state 。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。

**原因：**

在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。

**注意：**

这里所说的同步异步， 并不是真正的同步异步， 它还是同步执行的。这里的异步指的是多个state会合成到一起进行批量更新。

setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。


### vue 是如何对数组方法进行变异的？例如 push、pop、splice 等方法
在Vue现有阶段中，对响应式处理利用的是Object.defineProperty对数据进行拦截，而这个方法并不能监听到数组内部变化，数组长度变化，数组的截取变化等，所以我们需要对这些操作进行hack，让vue能监听到其中的变化。

```js
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsToPatch.forEach(function (method) {  
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    ob.dep.notify()
    return result
  })
})
```

## node相关
### npm模块的安装机制

**npm模块的安装步骤：**

```md
- 查询node_modules目录之中是否已经存在指定模块
  - 若存在，不再重新安装
  - 若不存在
    - npm 向 registry 查询模块压缩包的网址
    - 下载压缩包，存放在根目录下的.npm目录里
    - 解压压缩包到当前项目的node_modules目录
```

**实现过程：**

1. 执行`preinstall`钩子（如果有定义）
2. 首先需要做的是确定工程中的首层依赖，也就是 dependencies 和 devDependencies 属性中直接指定的模块。npm 会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点。
3. 获取模块（递归）
    - 获取模块版本信息。在下载一个模块之前，首先要确定其版本。此时如果版本描述文件（如package-lock.json）中有该模块信息直接拿即可，如果没有则从仓库获取。如 `packaeg.json` 中某个包的版本是 ^1.1.0，npm 就会去仓库中获取符合 1.x.x 形式的最新版本。
    - 获取模块代码。上一步会获取到模块的压缩包地址，npm 会用此地址检查本地缓存，缓存中有就直接拿，如果没有则从仓库下载。
    - 查找该模块依赖，如果有依赖则回到第1步，如果没有则停止。
4. 模块扁平化
    - 因为依赖树中可能存在相同的模块依赖（如A模块依赖axios、B模块也依赖axios），按照上面的安装方法就会造成模块冗余。
    - 这时候就需要加入模块扁平化的过程了。遍历所有节点，逐个将模块放在根节点下面，也就是 node-modules 的第一层。当发现有重复模块（模块名相同且 semver 兼容，每个 semver 都对应一段版本允许范围）时，则将其丢弃。
5. 安装模块
更新node_modules，依次执行模块中的生命周期函数（按照 `preinstall、install、postinstall` 的顺序）。
6. 执行工程的钩子函数
当前 npm 工程如果定义了钩子此时会被执行（按照 `install、postinstall、prepublish、prepare` 的顺序）。

【扩展】

1. package-lock.json有什么作用？
锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致。

2. dependencies中`"@types/node": "^8.0.33"`的`^`是什么意思？
向上标号^是定义了向后（新）兼容依赖，指如果 types/node的版本是超过8.0.33，并在大版本号（8）上相同，就允许下载最新版本的 types/node库包。原来package.json文件只能锁定大版本，也就是版本号的第一位，并不能锁定后面的小版本，你每次npm install都是拉取的该大版本下的最新的版本，为了稳定性考虑我们几乎是不敢随意升级依赖包的，这将导致多出来很多工作量，测试/适配等，所以package-lock.json文件出来了，当你每次安装一个依赖的时候就锁定在你安装的这个版本。

3. 什么是npm hooks？它有什么作用？

```md
prepublish: 在publish该包之前执行。(在包目录下执行npm install时也会执行)
postpublish: 在该包publish之后执行

preinstall: 在该包被install之前执行
postinstall: 在该包被install之后执行

preuninstall: 在该包被uninstall之前执行
postuninstall: 在该包被uninstall之后执行

preversion: 在修改该包的version之前执行
postversion: 在修改该包的version之后执行

pretest, posttest: 在该包内执行test时执行，其中pretest先于posttest
prestop, poststop: 在该包内执行stop时执行，其中prestop先于poststop
prestart,poststart: 在该包内执行start时执行，其中prestart先于poststart
prerestart, postrestart: 在该包内执行restart脚本时执行，其中prerestart先于postrestart。

注意: 如果没有在scripts里显示指定restart脚本，则会自动调用stop，然后再start
```

上面这些Hooks都是npm预定义好的，也就是说，当你执行`npm install`时，如果你在`scripts`里定义了`preinstall`和`postinstall`，那它们分别会在`npm install`之前/后自动执行。

## 算法相关
### 深度优先遍历DFS & 广度优先遍历BFS

#### DFS
深度优先遍历DFS与树的先序遍历比较类似。假设初始状态是图中所有顶点均未被访问，则从某个顶点v出发，首先访问该顶点然后依次从它的各个未被访问的邻接点出发深度优先搜索遍历图，直至图中所有和v有路径相通的顶点都被访问到。若此时尚有其他顶点未被访问到，则另选一个未被访问的顶点作起始点，重复上述过程，直至图中所有顶点都被访问到为止。

**方法：递归**

```js
// 方法1：采用递归
const deepTraversal1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node)
    let children = node.children || []
    for (let i = 0; i < children.length; i++) {
      deepTraversal1(children[i], nodeList)
    }
  }
  return nodeList
}
// 方法2：采用递归
const deepTraversal2 = node => {
  let nodeList = []
  if (node !== null) {
    nodeList.push(node)
    let children = node.children || []
    for (let i = 0; i < children.length; i++) {
      nodeList = nodeList.concat(deepTraversal2(children[i]))
    }
  }
  return nodeList
}
```

**方法：非递归（栈结构）**

![DFS](https://img.alicdn.com/imgextra/i3/O1CN01GBKimH1zTyeXfX3N6_!!6000000006716-2-tps-1320-420.png)

步骤演示：

1. A1进栈 stack=[A1]
2. 栈有元素？是。栈顶元素A1出栈。nodeList=[A1]。A1的孩子们逆序进栈 stack=[B2,B1]
3. 栈有元素？是。栈顶元素B1出栈。nodeList=[A1,B1]。B1的孩子们逆序进栈 stack=[B2,C2,C1]
4. 栈有元素？是。栈顶元素C1出栈。nodeList=[A1,B1,C1]。C1无孩子进栈 stack=[B2,C2]
5. 栈有元素？是。栈顶元素C2出栈。nodeList=[A1,B1,C1,C2]。C2无孩子进栈 stack=[B2]
6. 栈有元素？是。栈顶元素B2出栈。nodeList=[A1,B1,C1,C2,B2]。B2的孩子们逆序进栈 stack=[C4,C3]
7. 栈有元素？是。栈顶元素C3出栈。nodeList=[A1,B1,C1,C2,B2,C3]。C3无孩子进栈 stack=[C4]
8. 栈有元素？是。栈顶元素C4出栈。nodeList=[A1,B1,C1,C2,B2,C3,C4]。C4无孩子进栈 stack=[]
9. 栈有元素？否。返回nodeList即可。

```js
const deepTraversal3 = node => {
  let stack = []
  let nodeList = []
  if (node) {
    // 推入当前处理的node
    stack.push(node)
    while (stack.length) {
      let item = stack.pop()
      let children = item.children
      nodeList.push(item)
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return nodeList
}
```

开始测试：

```js
const tree = {
  id: "A1",
  children: [{
    id: "B1",
    children: [{
      id: "C1",
      children: []
    }, {
      id: "C2",
      children: []
    }]
  }, {
    id: "B2",
    children: [{
      id: "C3",
      children: []
    }, {
      id: "C4",
      children: []
    }]
  }]
}
console.log(deepTraversal1(tree))
console.log(deepTraversal2(tree))
console.log(deepTraversal3(tree))
// [
//   { id: 'A1', children: [ [Object], [Object] ] },
//   { id: 'B1', children: [ [Object], [Object] ] },
//   { id: 'C1', children: [] },
//   { id: 'C2', children: [] },
//   { id: 'B2', children: [ [Object], [Object] ] },
//   { id: 'C3', children: [] },
//   { id: 'C4', children: [] }
// ]
// [
//   { id: 'A1', children: [ [Object], [Object] ] },
//   { id: 'B1', children: [ [Object], [Object] ] },
//   { id: 'C1', children: [] },
//   { id: 'C2', children: [] },
//   { id: 'B2', children: [ [Object], [Object] ] },
//   { id: 'C3', children: [] },
//   { id: 'C4', children: [] }
// ]
// [
//   { id: 'A1', children: [ [Object], [Object] ] },
//   { id: 'B1', children: [ [Object], [Object] ] },
//   { id: 'C1', children: [] },
//   { id: 'C2', children: [] },
//   { id: 'B2', children: [ [Object], [Object] ] },
//   { id: 'C3', children: [] },
//   { id: 'C4', children: [] }
// ]
```

#### BFS
从图中某顶点v出发，在访问了v之后依次访问v的各个未曾访问过的邻接点，然后分别从这些邻接点出发依次访问它们的邻接点，并使得“先被访问的顶点的邻接点先于后被访问的顶点的邻接点被访问，直至图中所有已被访问的顶点的邻接点都被访问到。 如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新的起始点，重复上述过程，直至图中所有顶点都被访问到为止。

**方法：采用队列，先进先出**

![BFS](https://img.alicdn.com/imgextra/i3/O1CN01GBKimH1zTyeXfX3N6_!!6000000006716-2-tps-1320-420.png)

步骤演示：

1. A1进队列，queue=[A1]
2. 队列有元素？是。列首元素A1出队，A1全部孩子们顺序入队。nodeList=[A1]，queue=[B1,B2]
3. 队列有元素？是。列首元素B1出队，B1全部孩子们顺序入队。nodeList=[A1,B1]，queue=[B2,C1,C2]
4. 队列有元素？是。列首元素B2出队，B2全部孩子们顺序入队。nodeList=[A1,B1,B2]，queue=[C1,C2,C3,C4]
5. 队列有元素？是。列首元素C1出队，C1无孩子入队。nodeList=[A1,B1,B2,C1]，queue=[C2,C3,C4]
6. 队列有元素？是。列首元素C2出队，C2无孩子入队。nodeList=[A1,B1,B2,C1,C2]，queue=[C3,C4]
7. 队列有元素？是。列首元素C3出队，C3无孩子入队。nodeList=[A1,B1,B2,C1,C2,C3]，queue=[C4]
8. 队列有元素？是。列首元素C4出队，C4无孩子入队。nodeList=[A1,B1,B2,C1,C2,C3,C4]，queue=[]
9. 队列有元素？否。直接返回nodeList即可。

```js
const widthTraversal = node => {
  let nodeList = []
  let queue = []
  if (node) {
    queue.push(node)
    while (queue.length) {
      let item = queue.shift()
      let children = item.children
      nodeList.push(item)
      for (let i = 0; i < children.length; i++) {
        queue.push(children[i])
      }
    }
  }
  return nodeList
}
```

开始测试：

```js
console.log(widthTraversal(tree))
// [
//   { id: 'A1', children: [ [Object], [Object] ] },
//   { id: 'B1', children: [ [Object], [Object] ] },
//   { id: 'B2', children: [ [Object], [Object] ] },
//   { id: 'C1', children: [] },
//   { id: 'C2', children: [] },
//   { id: 'C3', children: [] },
//   { id: 'C4', children: [] }
// ]
```

### DFS和BFS实现深拷贝
工具函数：

```js
// 工具函数
let _toString = Object.prototype.toString
let map = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
}
let getType = (item) => {
  return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
  return map[type] && map[type] === getType(item)
}
```

#### DFS
```js
// DFS：我们平常写的深拷贝函数都是基于DFS的
const DFSdeepClone = (obj, visitedArr = []) => {
  let _obj = {}
  // obj是数组或对象
  if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) {
    let index = visitedArr.indexOf(obj)
    _obj = isTypeOf(obj, 'array') ? [] : {}
    if (~index) { // 判断环状数据
      _obj = visitedArr[index] // 如果之前有，则直接使用，不继续递归了
    } else {
      visitedArr.push(obj)
      for (let item in obj) {
        _obj[item] = DFSdeepClone(obj[item], visitedArr)
      }
    }
    // obj是函数
  } else if (isTypeOf(obj, 'function')) {
    _obj = eval('(' + obj.toString() + ')'); // 拷贝函数
  } else {
    // obj是值类型
    _obj = obj
  }
  return _obj
}
```

#### BFS
```js
// BFS 
const BFSdeepClone = (obj) => {
  let origin = [obj],
    copyObj = {},
    copy = [copyObj]

  // 去除环状数据
  let visitedQueue = [],
    visitedCopyQueue = []

  while (origin.length > 0) {
    let items = origin.shift(),
      _obj = copy.shift()
    visitedQueue.push(items)
    if (isTypeOf(items, 'object') || isTypeOf(items, 'array')) {
      for (let item in items) {
        let val = items[item]
        if (isTypeOf(val, 'object')) {
          let index = visitedQueue.indexOf(val)
          if (!~index) {
            _obj[item] = {}
            //下次while循环使用给空对象提供数据
            origin.push(val)
            // 推入引用对象
            copy.push(_obj[item])
          } else {
            _obj[item] = visitedCopyQueue[index]
            visitedQueue.push(_obj)
          }
        } else if (isTypeOf(val, 'array')) {
          // 数组类型在这里创建了一个空数组
          _obj[item] = []
          origin.push(val)
          copy.push(_obj[item])
        } else if (isTypeOf(val, 'function')) {
          _obj[item] = eval('(' + val.toString() + ')');
        } else {
          _obj[item] = val
        }
      }
      // 将已经处理过的对象数据推入数组 给环状数据使用
      visitedCopyQueue.push(_obj)
    } else if (isTypeOf(items, 'function')) {
      copyObj = eval('(' + items.toString() + ')');
    } else {
      copyObj = obj
    }
  }
  return copyObj
}
```

**开始测试：**

```js
let str = 'String'
var strCopy = DFSdeepClone(str)
var strCopy1 = BFSdeepClone(str)
console.log(strCopy, strCopy1) // String String 测试通过
// 输入 数字 -1980
// 预期输出数字 -1980
let num = -1980
var numCopy = DFSdeepClone(num)
var numCopy1 = BFSdeepClone(num)
console.log(numCopy, numCopy1) // -1980 -1980 测试通过
// 输入bool类型
// 预期输出bool类型
let bool = false
var boolCopy = DFSdeepClone(bool)
var boolCopy1 = BFSdeepClone(bool)
console.log(boolCopy, boolCopy1) //false false 测试通过
// 输入 null
// 预期输出 null
let nul = null
var nulCopy = DFSdeepClone(nul)
var nulCopy1 = BFSdeepClone(nul)
console.log(nulCopy, nulCopy1) //null null 测试通过

// 输入undefined
// 预期输出undefined
let und = undefined
var undCopy = DFSdeepClone(und)
var undCopy1 = BFSdeepClone(und)
console.log(undCopy, undCopy1) //undefined undefined 测试通过
//输入引用类型obj
let obj = {
  a: 1,
  b: () => console.log(1),
  c: {
    d: 3,
    e: 4
  },
  f: [1, 2],
  und: undefined,
  nul: null
}
var objCopy = DFSdeepClone(obj)
var objCopy1 = BFSdeepClone(obj)
console.log(objCopy === objCopy1) // 对象类型判断 false 测试通过
console.log(obj.c === objCopy.c) // 对象类型判断 false 测试通过
console.log(obj.c === objCopy1.c) // 对象类型判断 false 测试通过
console.log(obj.b === objCopy1.b) // 函数类型判断 false 测试通过
console.log(obj.b === objCopy.b) // 函数类型判断 false 测试通过
console.log(obj.f === objCopy.f) // 数组类型判断 false 测试通过
console.log(obj.f === objCopy1.f) // 数组类型判断 false 测试通过
console.log(obj.nul, obj.und) // 输出null，undefined 测试通过

// 输入环状数据
// 预期不爆栈且深度复制
let circleObj = {
  foo: {
    name: function () {
      console.log(1)
    },
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null //待会让它指向obj.foo
      }
    }
  }
}
circleObj.foo.bar.baz.aChild = circleObj.foo
var circleObjCopy = DFSdeepClone(circleObj)
var circleObjCopy1 = BFSdeepClone(circleObj)
console.log(circleObjCopy, circleObjCopy1) // 测试通过?
```

### 求两个日期中间的有效日期

```js
function rangeDay(day1, day2) {
  const result = [] // 结果数组
  const dayTimes = 24 * 60 * 60 * 1000 // 一天有多少ms
  const startTime = day1.getTime() // day1的时间戳
  const range = day2.getTime() - startTime // day1和day2相隔的毫秒数

  let total = 0 // total是代表多少天（dayTimes的整数倍）

  while (total <= range && range > 0) {
    result.push(new Date(startTime + total).toLocaleDateString()) // .toLocaleDateString()代表把时间格式2015-02-09T00:00:00.000Z转到2015-2-10
    total += dayTimes
  }

  return result
};

console.log(rangeDay(new Date("2015-02-08"), new Date("2015-03-03")))
```

### 找出字符串中连续出现最多的字符和个数
```js
const find = str => {
  const arr = str.match(/(\w)\1*/g)
  // [
  //   'aaa',      'bbbb',
  //   'cccccccc', 'dd',
  //   'o',        'i',
  //   'j',        'i',
  //   'j',        'd',
  //   'e',        'd',
  //   'e',        'ff',
  //   'e'
  // ]
  const maxLen = Math.max(...arr.map(s => s.length)) // 8
  const result = arr.filter(item => item.length === maxLen)[0] // cccccccc
  return { [result[0]]: result.length } // { c: 8 }
}
console.log(find('aaabbbbccccccccddoijijdedeffe')) // { c: 8 }
```
### 写一个函数，将entry转化为指定json

输入是：

```js
const entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}
```

输出是：

```js
const output = {
  a: {
   b: {
     c: {
       dd: 'abcdd'
     }
   },
   d: {
     xx: 'adxx'
   },
   e: 'ae'
  }
}
```

函数实现：

```js
const entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

function map(entry) {
  const obj = Object.create(null);
  for (const key in entry) {
    const keyArr = key.split('.');
    set(obj, keyArr, entry[key])
  }
  return obj;
}

function set(obj, keyArr, val) {
  let tmp;
  // 如果对象没有a.b.c中的a属性，则创建该属性
  if (!obj[keyArr[0]]) obj[keyArr[0]] = Object.create(null);
  tmp = obj[keyArr[0]];

  for (let i = 1; i < keyArr.length; i++) {
    if (!tmp[keyArr[i]]){
      tmp[keyArr[i]] = keyArr.length - 1 === i ? val : Object.create(null);
    }else{
      tmp = tmp[keyArr[i]];
    }
  }
}

console.log(map(entry));
// {
//   a: {
//    b: {
//      c: {
//        dd: 'abcdd'
//      }
//    },
//    d: {
//      xx: 'adxx'
//    },
//    e: 'ae'
//   }
// }
```

### 写一个函数，将指定json转化为entry

输入是：

```js
const output = {
  a: {
   b: {
     c: {
       dd: 'abcdd'
     }
   },
   d: {
     xx: 'adxx'
   },
   e: 'ae'
  }
}
```

输出是：

```js
const entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}
```

函数实现：

```js
function flatObj(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let keyName = `${parentKey}${key}`;
      if (typeof obj[key] === 'object')
        flatObj(obj[key], keyName+".", result)
      else
        result[keyName] = obj[key];
    }
  }
  return result;
}
```
### 将原始list转化为树形结构

```js
// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```

实现的函数如下：

```js
function convert(list) {
  const res = []
  const map = list.reduce((res, v) => (res[v.id] = v, res), {})
  for (const item of list) {
    if (item.parentId === 0) {
      res.push(item)
      continue
    }
    if (item.parentId in map) {
      const parent = map[item.parentId]
      parent.children = parent.children || []
      parent.children.push(item)
    }
  }
  return res
}
```

### 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序

```js
const arr=[1,3,4,0,6,7,0,2,5]

function zeroMove(array) {
  let len = array.length;
  let j = 0;
  for (let i = 0; i < len - j; i++) {
    if (array[i] === 0) {
      array.push(0); // 在数组尾端添加0
      array.splice(i, 1); // 移除这里的0元素
      i--; // 因为移除了这个元素，所有遍历时仍然是当前位置
      j++; // 减少遍历一个元素
    }
  }
  return array;
}
console.log(zeroMove(arr))
// [ 1, 3, 4, 6, 7, 2, 5, 0, 0 ]
```

### 用最精炼的代码实现数组非零最小值 index

```js
/**
 * @description 用最精炼的代码实现数组非零最小值 index
 * @param {array} arr 数组
 * @returns {number} index 索引
 */
function getIndex(arr) {
  let index = -1;
  const minVal = arr.reduce((cur, pre) => {
    // 如果cur、pre有值小于0，则返回两者较大值
    // 否则返回两者较小值
    // 这一步骤是为了取得非负非零的最小值minVal
    return (cur <= 0 || pre <= 0) ? Math.max(cur, pre) : cur > pre ? pre : cur;
  }, -1);
  // 找到minVal的index，并返回index
  index = arr.findIndex(item => item == minVal && minVal > 0)
  return index;
}
console.log(getIndex([10, 21, 0, -7, 35, 7, 9, 23, 18]))
// 5
```
### 实现一个批量请求函数 multiRequest(urls, maxNum)

**实现要求：**

- 要求最大并发数 maxNum
- 每当有一个请求返回，就留下一个空位，可以增加新的请求
- 所有请求完成后，结果按照 urls 里面的顺序依次打出

```js
/**
 * 
 * @param {*} urls 全部请求地址
 * @param {*} maxNum 最大并发请求数
 * @returns 
 */
function multiRequest(urls, maxNum) {
  const ret = [];
  let i = 0;
  let resolve;

  const promise = new Promise(r => resolve = r);

  const addTask = () => {
    if (i >= urls.length) {
      return resolve();
    }

    const task = request(urls[i++]).finally(() => {
      addTask();
    });
    ret.push(task);
  }

  while (i < maxNum) {
    addTask();
  }

  return promise.then(() => Promise.all(ret));
}

// 模拟请求
function request(url) {
  return new Promise((r) => {
    const time = Math.random() * 1000;
    setTimeout(() => r(url), time);
  });
}
```

### 用最简洁代码实现indexOf方法
```js
function indexOf(arr, target, start = 0) {
  // start小于0，代表从倒数start位开始寻找
  if (start < 0) start += arr.length;
  // start大于数组总长度，返回-1（没有元素）
  if (start >= arr.length) return -1;
  // 从start开始遍历数组，找数组中是否存在元素等于target
  for (let i = start; i < arr.length; ++i) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

### 将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式
```js
// 寻找字符空隙加 .
'10000000000'.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
// 寻找数字并在其后面加 . 
'10000000000'.replace(/(\d)(?=(\d{3})+\b)/g, '$1.')
```

### 反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序
```js
// 创建链表
function createLinkList(...args) {
  const res = {};
  let current = res;
  while (args.length) {
    current.value = args.shift();
    current.next = {};
    current = current.next;
  }
  return res;
}

// 反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序
function reverse(linklist, k) {
  const stack = [];
  let current = linklist;

  // 前面k个入栈
  while (current.next && stack.length + 1 <= k) {
    stack.push(current.value);
    current = current.next;
  }

  // 不足k不用反转
  if (stack.length < k) {
    return linklist;
  }

  // 出栈+拼接current节点再递归
  let temp = {};
  const ret = stack.reduceRight(
    (res, cur) => ((temp.value = cur), (temp = temp.next = {}), res),
    temp
  );
  current && current.next && Object.assign(temp, reverse(current, k));
  return ret;
}

// 按顺序打印链表
function print(link, arr = []) {
  while (link && link.value !== undefined) {
    arr.push(link.value)
    link = link.next
  }
  return arr
}

console.log(print(reverse(createLinkList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11), 3)));
// [ 3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11 ]
```

### 求多个数组之间的交集

```js
function intersect(...args) {
  if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }
  return args.reduce((result, arg) => {
    return result.filter(item => arg.includes(item))
  })
}
```

### 如果希望每隔 1s 输出一个结果，应该如何改造？

```js
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res) 
  })
}
test()

// 1
// 4
// 9
```

分析原因：forEach是不能阻塞的，默认是请求并行发起，所以是同时输出1、4、9。

开始改造：串行解决方案。

**（1）使用for循环**

```js
async function test() {
  for (let i = 0; i < list.length; i++) {
    let x = list[i]
    const res = await square(x)
    console.log(res)
  }
}
```

**（2）使用for of**

```js
async function test() {
  for (let x of list) {
    const res = await square(x)
    console.log(res)
  }
}

```

**（3）使用Promise链式调用**

```js
let promise = Promise.resolve()
function test(i = 0) {
  if (i === list.length) return
  promise = promise.then(async () => {
    const res = await square(i + 1)
    console.log(res)
  })
  test(i + 1)
}
test()
```
### 如何快速从巨大数组中随机获取指定个数的不重复元素

**注意力放在两点：**

1. 一是针对结果，也就是最终结果，我只要100个随机的不重复的结果。那就只随机一个数字然后剔除掉随机范围，1000，999，998······一直到900为止。
2. 二是针对随机数，毕竟是数组，index对应的就是0-999。我着重于随机出0-999内100个不同的随机数即可，随机一次，假设有十个重复，那就直接把90个没重复的剔除掉0-999范围，然后继续随机筛选，一直到有100个随机不同的数，也就是100个不同的index值，去1000个人员里面对应找出即可

**解法：**

1. 快速生成一个巨大数组 使用Array.from()
2. 通过Set特性，存放随机数，这里需要注意的是，没有就add，有就递归，总之要保证遍历的每一项都要找到一个唯一随机值，如果有就跳过就不能保证最后能获取到10k个值。

```js
const randomNumHandle = (len, randomNum) => {
  // 快速生成一个有len个元素的巨大数组
  let originArr = Array.from({length: len}, (v, i) => i);
  let resultSet = new Set()

  // 快速选取randomNum个元素
  for(let i = 0; i < randomNum; i++) {
    addNum(resultSet, originArr)
  }

  function addNum () {
    let luckDog = Math.floor(Math.random() * (len - 1))

    if(!resultSet.has(originArr[luckDog])) {
      resultSet.add(originArr[luckDog])
    } else {
      addNum()
    }
  }

  return Array.from(resultSet)
}

// 比如有个数组有100K个元素，从中不重复随机选取10K个元素
console.log(randomNumHandle(100000, 10000))
```

### 判断正确的网址

不用正则的话，可以采用以下的写法

```js
function isUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

function isUrl(url) {
  const a = document.createElement('a')
  a.href = url
  return [
    /^(http|https):$/.test(a.protocol),
    a.host,
    a.pathname !== url,
    a.pathname !== `/${url}`,
  ].find(x => !x) === undefined
}
```


### 实现一个normalize函数，将指定字符串转化为特定结构的json

字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。

```md
示例一: 'abc' --> {value: 'abc'}
示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
```

方法1：先转化为字符串数组，再遍历拼接成指定结构json

```js
let normalize = str => {
  let result = {}
  let c
  
  // 字符串转化为数组
  let arr = str.split(/[\[\]]/g).filter(Boolean)
  
  // 生成结构化数据
  arr.forEach((item, index) => {
    if(index != 0) {
      c.children = {}
      c.children.value = item
      c= c.children
    } else {
      result.value = item
      c= result
    }
  })
  
  return result
}
const str='[abc[bcd[def]]]'
console.log(normalize(str))
// {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
```

方法2：先转化为字符串数组，再通过reduce函数直接生成json

```js
const normalize = (str) => {
  var result = {}
  str.split(/[\[\]]/g).filter(Boolean).reduce((obj, item, index, a) => {
    obj.value = item
    if(index !== a.length -1) {
      return (obj.children = {})
    }
  }, result)
  return result
}

const str='[abc[bcd[def]]]'
console.log(normalize(str))

// {
//   value: 'abc',
//   children: { value: 'bcd', children: { value: 'def' } }
// }
```

## 网络相关
### TCP 三次握手和四次挥手的理解

非常形象的比喻图解：

![TCP连接](https://user-images.githubusercontent.com/21079721/96951415-0828e780-151f-11eb-93a3-e2e8045d456d.png)

四次挥手一定是存在的——由于TCP连接是全双工的，因此每个方向都必须单独进行关闭，所以即使没有最后一个包，也需要先回复断开连接的请求，然后再发送关闭请求。

- 第一次client => server 只能server判断出【client具备发送能力】
- 第二次 server => client client就可以判断出【server具备发送和接受能力】，此时client还需让server知道自己接收能力没问题于是就有了第三次
- 第三次 client => server 【双方均保证了自己的接收和发送能力没有问题】

这里有几个参数需要了解一下：SYN、seq、ACK、FIN：

![TCP参数](https://camo.githubusercontent.com/e5d91961cdf9074b5a1d8f5e3607bb87cffada55407ff253cf56d4ce76b64ca2/687474703a2f2f71696e69752e63646e2e636c383032332e636f6d2f485454502f7463702d332d7761792d68616e647368616b652e6a7067)

**TCP 有6中标志位：**

- SYN（synchronous 建立连接）
- ACK（acknowledgement 确认）
- PSH（push 传送）
- FIN（finish 结束）
- RST（reset 重置）
- URG（urgent 紧急）

**另外数据包：**

- Sequence number（顺序号码）
- Acknowledge number（确认号码）

**非常通俗的解释：**

1. 第一次握手中 SYN = 1，代表客户端 Client 要建立连接，同时随机产生 seq（Sequence number）= x 的数据包，然后传输到 Server；
2. Server 收到 Client 的信息，通过 SYN = 1 知道是要建立连接，然后向 Client 发送信息，ACK = 1 代表确认，ack（Acknowledge number）= x + 1，SYN = 1 代表建立连接，随机产生 seq = y 的数据包；
3. Clien 收到 Server 的信息，通过 SYN = 1 知道是要建立连接，然后检查 ack 是否正确，即第一次发送的 seq + 1，同时检查 ACK 是否为 1，若正确，Client 再发送 ack = y + 1，ACK = 1 到 Server，Server 收到确认 seq 值和 ACK = 1 后则连接建立成功。

### 介绍下HTTPS 中间人攻击

**中间人攻击过程如下：**

- 服务器向客户端发送公钥。
- 攻击者截获公钥，保留在自己手上。
- 然后攻击者自己生成一个【伪造的】公钥，发给客户端。
- 客户端收到伪造的公钥后，生成加密hash值发给服务器。
- 攻击者获得加密hash值，用自己的私钥解密获得真秘钥。
- 同时生成假的加密hash值，发给服务器。
- 服务器用私钥解密获得假秘钥。
- 服务器用加秘钥加密传输信息

**防范方法：**

服务端在发送浏览器的公钥中加入CA证书，浏览器可以验证CA证书的有效性

### 对称加密 & 非对称加密

1. 对称加密
对称加密指的就是加密和解密使用同一个秘钥，所以叫做对称加密。对称加密只有一个秘钥，作为私钥。常见的对称加密算法：DES，AES，3DES等等。

2. 非对称加密
非对称加密指的是：加密和解密使用不同的秘钥，一把作为公开的公钥，另一把作为私钥。公钥加密的信息，只有私钥才能解密。私钥加密的信息，只有公钥才能解密。常见的非对称加密算法：RSA，ECC。

对称加密算法相比非对称加密算法来说，加解密的效率要高得多。但是缺陷在于对于秘钥的管理上，以及在非安全信道中通讯时，密钥交换的安全性不能保障。所以在实际的网络环境中，会将两者混合使用.

**步骤：**
1. 服务端计算出一对秘钥`public key` / `private key`。将私钥保密，将公钥公开。
2. 客户端请求服务端时，拿到服务端的公钥`public key`。
3. 客户端通过AES计算出一个对称加密的秘钥 `foo key`。 然后使用`public key`将`foo key`进行加密。
4. 客户端将加密后的密文发送给服务端。服务端通过`private key`解密获得`foo key`。
5. 然后两边的通讯内容就通过对称密钥`foo key`以对称加密算法来加解密。

**安全性对比：**
1. 对称加密：加密解密用同一个密钥，被黑客拦截不安全
2. 非对称加密：公钥加密，私钥解密；公钥可以公开给别人进行加密，私钥永远在自己手里，非常安全，黑客拦截也没用，因为私钥未公开。著名的RSA加密算法用的就是非对称加密。

<img src="https://img.alicdn.com/imgextra/i3/O1CN01ia7PU11Nu7s1YYTRD_!!6000000001629-2-tps-1392-1342.png" width="60%" />

### 如何实现token加密

jwt举例

1. 需要一个secret（随机数）
2. 后端利用secret和加密算法(如：HMAC-SHA256)对payload(如账号密码)生成一个字符串(token)，返回前端
3. 前端每次request在header中带上token
4. 后端用同样的算法解密

## 安全相关
### 前端加密的常见场景和方法

首先，加密的目的，简而言之就是将明文转换为密文、甚至转换为其他的东西，用来隐藏明文内容本身，防止其他人直接获取到敏感明文信息、或者提高其他人获取到明文信息的难度。
通常我们提到加密会想到密码加密、HTTPS 等关键词，这里从场景和方法分别提一些我的个人见解。

**（1）场景-密码传输**
前端密码传输过程中如果不加密，在日志中就可以拿到用户的明文密码，对用户安全不太负责。这种加密其实相对比较简单，可以使用 PlanA-前端加密、后端解密后计算密码字符串的MD5/MD6存入数据库；也可以 PlanB-直接前端使用一种稳定算法加密成唯一值、后端直接将加密结果进行MD5/MD6，全程密码明文不出现在程序中。

**PlanA：**
使用 Base64 / Unicode+1 等方式加密成非明文，后端解开之后再存它的 MD5/MD6 。

**PlanB：**
直接使用 MD5/MD6 之类的方式取 Hash ，让后端存 Hash 的 Hash 。


**（2）场景-数据包加密**
应该大家有遇到过：打开一个正经网站，网站底下蹦出个不正经广告——比如X通的流量浮层，X信的插入式广告……但是这几年，我们会发现这种广告逐渐变少了，其原因就是大家都开始采用 HTTPS 了。

被人插入这种广告的方法其实很好理解：你的网页数据包被抓取->在数据包到达你手机之前被篡改->你得到了带网页广告的数据包->渲染到你手机屏幕。而 HTTPS 进行了包加密，就解决了这个问题。

【扩展：常用加密方法】

1. base64编码：Base64 适用于小段内容的编码，比如数字证书签名、Cookie的内容等；而且 Base64 也是一种通过查表的编码方法，不能用于加密，如果需要加密，请使用专业的加密算法。
2. Hash算法：一个哈希算法是一个多对一的映射关系，哈希算法是不可逆的。其适用于该场景：被保护数据仅仅用作比较验证且不需要还原成明文形式。比较常用的哈希算法是 MD5 和 SHA1。需要注意的是：在 Web 应用中，在浏览器中使用哈希加密的同时也要在服务端上进行哈希加密。现在，对于简单的哈希算法的攻击方法主要有：寻找碰撞法和穷举法。所以，为了保证数据的安全，可以在哈希算法的基础上进一步的加密，常见的方法有：加盐、慢哈希、密钥哈希、XOR 等。
3. 加盐：盐值其实就是我们添加的一串随机字符串，这样处理之后，相同的字符串每次都会被加密为完全不同的字符串。
4. 慢哈希函数
5. 密钥哈希
6. XOR
7. 加密（Encrypt）：不同于哈希，加密（Encrypt）是将目标文本转换成具有不同长度的、可逆的密文。也就是说加密算法是可逆的，而且其加密后生成的密文长度和明文本身的长度有关。

![加密](https://user-gold-cdn.xitu.io/2018/10/19/16689f82f30d3518?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

这里的加密操作包括对称加密（加密速度更快、适用于长文本）、非对称加密（适用于短文本，需要公钥（publickey）和私钥（privatekey））、数字签名。

### 接口如何防刷
刷是禁止不了的，只能提高刷的成本

**前端：**

- 限制按钮，表单提交次数，防抖
- 人机验证，验证码，短信验证码，滑动图片形式，12306形式

**后端：**

- 网关控制流量洪峰，对在一个时间段内出现流量异常，可以拒绝请求
- ip限制：源ip请求个数限制。对请求来源的ip请求个数做限制（一般是刷的频率太大，达到ddos水平了或者确认为恶意调用）
- UA（user_agent）校验
- http请求头信息校验（例如host，User-Agent，Referer）
- 用户唯一标示：对用户唯一身份uid进行限制和校验。例如基本的长度，组合方式，甚至有效性进行判断。或者uid具有一定的时效性
- api key，rsa加密认证，ca认证（后端与后端之间调用）
- 前后端协议采用二进制方式进行交互或者协议采用签名机制

### 为什么HTTP1.1不能实现多路复用

HTTP/1.1 不是二进制传输，而是通过文本进行传输。由于没有流的概念，在使用并行传输（多路复用）传递数据时，接收端在接收到响应后，并不能区分多个响应分别对应的请求，所以无法将多个响应的结果重新进行组装，也就实现不了多路复用。

### 简单讲解一下 http2 的多路复用

HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。

在HTTP2中，同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。单个连接上可以并行交错的请求和响应，之间互不干扰。

---

在 HTTP/1 中，每次请求都会建立一次HTTP连接，也就是我们常说的3次握手4次挥手，这个过程在一次请求过程中占用了相当长的时间，即使开启了 Keep-Alive ，解决了多次连接的问题，但是依然有两个效率上的问题：

第一个：串行的文件传输。当请求a文件时，b文件只能等待，等待a连接到服务器、服务器处理文件、服务器返回文件，这三个步骤。我们假设这三步用时都是1秒，那么a文件用时为3秒，b文件传输完成用时为6秒，依此类推。（注：此项计算有一个前提条件，就是浏览器和服务器是单通道传输）
第二个：连接数过多。我们假设Apache设置了最大并发数为300，因为浏览器限制，浏览器发起的最大请求数为6，也就是服务器能承载的最高并发为50，当第51个人访问时，就需要等待前面某个请求处理完成。

HTTP/2的多路复用就是为了解决上述的两个性能问题。

在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。
帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。
多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。

### Http 状态码 301 和 302 的应用场景分别是什么

> 301重定向是永久的重定向，搜索引擎在抓取新的内容的同时也将旧的网址替换为了重定向之后的网址。302重定向只是暂时的重定向，搜索引擎会抓取新的内容而保留旧的地址，因为服务器返回302，所以，搜索搜索引擎认为新的网址是暂时的。

- 301应用场景: 域名到期不想继续用这个，换了地址
- 302应用场景: 做活动时候，从首页跳到活动页面

**对SEO有哪些影响？**

- 301 redirect——301代表`永久性转移(Permanently Moved)`，301重定向是网页更改地址后对搜索引擎友好的最好方法，只要不是暂时搬移的情况,都建议使用301来做转址。如果我们把一个地址采用301跳转方式跳转的话，搜索引擎会把老地址的PageRank等信息带到新地址，同时在搜索引擎索引库中彻底废弃掉原先的老地址。旧网址的排名等完全清零
- 302 redirect——302代表`暂时性转移(Temporarily Moved)`，在前些年，不少Black Hat SEO曾广泛应用这项技术作弊，目前，各大主要搜索引擎均加强了打击力度，像Google前些年对Business.com以及近来对BMW德国网站的惩罚。即使网站客观上不是spam，也很容易被搜寻引擎容易误判为spam而遭到惩罚。

### 介绍下 http1.0、1.1、2.0 协议的区别？

#### http1.0

特性：

- 无状态：服务器不跟踪不记录请求过的状态，对于无状态的特性可以借助cookie/session机制来做身份认证和状态记录
- 无连接：浏览器每次请求都需要建立tcp连接，无连接导致的性能缺陷有两种：1）无用复用连接——每次发送请求，都需要进行一次tcp连接（即3次握手4次挥手），使得网络的利用率非常低；2）队头阻塞——http1.0规定在前一个请求响应到达之后下一个请求才能发送，如果前一个阻塞，后面的请求也给阻塞的

#### http1.1

特性：

- 长连接：新增Connection字段，可以设置keep-alive值保持连接不断开
- 管道化：基于上面长连接的基础，管道化可以不等第一个请求响应继续发送后面的请求，但响应的顺序还是按照请求的顺序返回
- 缓存处理：新增字段cache-control，当浏览器请求资源时，先看是否有缓存的资源，如果有缓存，直接取，不会再发请求，如果没有缓存，则发送请求
- 断点传输：在上传/下载资源时，如果资源过大，将其分割为多个部分，分别上传/下载，如果遇到网络故障，可以从已经上传/下载好的地方继续请求，不用从头开始，提高效率。在 Header 里两个参数实现的，客户端发请求时对应的是 Range 服务器端响应时对应的是 Content-Range。

#### http2.0

- 二进制分帧：将所有传输的信息分割为更小的消息和帧，并对它们采用二进制格式的编码
- 多路复用：基于二进制分帧，在同一域名下所有访问都是从同一个tcp连接中走，http消息被分解为独立的帧，乱序发送，服务端根据标识符和首部将消息重新组装起来
- 头部压缩：使得headers头部体积更小
- 服务器推送：服务器可以额外的向客户端推送资源，而无需客户端明确的请求

**【区别对比】**

1. http1.0 到http1.1的主要区别，就是从无连接到长连接
2. http2.0对比1.X版本主要区别就是多路复用

### HTTPS 握手过程中，客户端如何验证证书的合法性

1. 首先浏览器读取证书中的证书所有者、有效期等信息进行校验，校验证书的网站域名是否与证书颁发的域名一致，校验证书是否在有效期内
2. 浏览器开始查找操作系统中已内置的受信任的证书发布机构CA，与服务器发来的证书中的颁发者CA比对，用于校验证书是否为合法机构颁发
3. 如果找不到，浏览器就会报错，说明服务器发来的证书是不可信任的。
4. 如果找到，那么浏览器就会从操作系统中取出颁发者CA 的公钥(多数浏览器开发商发布版本时，会事先在内部植入常用认证机关的公开密钥)，然后对服务器发来的证书里面的签名进行解密
5. 浏览器使用相同的hash算法计算出服务器发来的证书的hash值，将这个计算的hash值与证书中签名做对比
6. 对比结果一致，则证明服务器发来的证书合法，没有被冒充