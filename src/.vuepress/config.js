const path = require('path');

module.exports = {
  base: '/interview-practice/docs/',
  title: '前端面试刷题',
  description: '每日半小时，巩固基础，助力面试',
  dest: path.resolve(__dirname, '../../docs'),
  themeConfig: {
    nav: [
      {text: 'github', link: 'https://github.com/iloveyou11/learning-one-question-per-day'},
      {text: '个人博客', link: 'https://github.com/iloveyou11/learning-blog'}
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'js系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/js/1',
          '/js/2',
          '/js/3',
          '/js/4',
          '/js/5',
          '/js/6',
          '/js/7',
          '/js/8',
          '/js/9',
          '/js/10',
          '/js/11',
          '/js/12',
          '/js/13',
          '/js/14',
          '/js/15',
          '/js/16',
          '/js/17',
          '/js/18',
          '/js/19',
          '/js/20',
          '/js/21',
          '/js/22',
          '/js/23',
          '/js/24',
          '/js/25',
          '/js/26',
          '/js/27',
          '/js/28',
          '/js/29',
          '/js/30',
          '/js/31',
          '/js/32',
        ]
      },
      {
        title: 'css系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/css/1',
          '/css/2',
          '/css/3',
          '/css/4',
          '/css/5',
          '/css/6',
          '/css/7',
          '/css/8',
        ]
      },
      {
        title: '浏览器系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/browser/1',
          '/browser/2',
          '/browser/3',
          '/browser/4',
          '/browser/5',
        ]
      },
      {
        title: '框架系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/framework/1',
          '/framework/2',
          '/framework/3',
          '/framework/4',
          '/framework/5',
          '/framework/6',
          '/framework/7',
        ]
      },
      {
        title: 'node系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/node/1',
        ]
      },
      {
        title: '算法系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/algorithm/1',
          '/algorithm/2',
          '/algorithm/3',
          '/algorithm/4',
          '/algorithm/5',
          '/algorithm/6',
          '/algorithm/7',
          '/algorithm/8',
          '/algorithm/9',
          '/algorithm/10',
          '/algorithm/11',
          '/algorithm/12',
          '/algorithm/13',
          '/algorithm/14',
          '/algorithm/15',
          '/algorithm/16',
          '/algorithm/17',
          '/algorithm/18',
        ]
      },
      {
        title: '网络系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/network/1',
          '/network/2',
          '/network/3',
          '/network/4',
        ]
      },
      {
        title: '安全系列',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/safe/1',
          '/safe/2',
          '/safe/3',
          '/safe/4',
          '/safe/5',
          '/safe/6',
          '/safe/7',
        ]
      },
    ]
  }
};