module.exports = {
  name: 'brain-mobile',
  build: {
    css: {
      preprocessor: 'less'
    },
    site: {
      publicPath: '/brain-mobile/'
    }
  },
  site: {
    title: 'brain-mobile',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍'
          },
          {
            path: 'quickstart',
            title: '快速上手'
          }
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮'
          },
          {
            path: 'nav-bar',
            title: 'NavBar 导航'
          },
          {
            path: 'icon',
            title: 'Icon 图标'
          },
          {
            path: 'area',
            title: 'Area 选择'
          },
          {
            path: 'cell',
            title: 'Cell 单元格'
          }
        ]
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'address-card',
            title: 'address-card 地址卡片'
          },
          {
            path: 'address-edit',
            title: 'address-edit 地址编辑'
          },
          {
            path: 'gift-card',
            title: 'gift-card 赠品卡片'
          },
          {
            path: 'gift-popup',
            title: 'gift-popup 赠品弹框'
          }
        ]
      }
    ]
  }
};
