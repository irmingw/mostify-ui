// https://vitepress.dev/reference/site-config
export default {
  title: "Mostify UI 一个 Vue3 UI 组件库",
  description: "Mostify UI 一个 Vue3 UI 组件库，提供精美的 UI 组件",
  themeConfig: {

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement',
    },
    nav: [
      { text: '首页', link: '/zh-cn/' },
      { text: '快手上手', link: '/zh-cn/config/start' },
      { text: '组件文档', link: '/zh-cn/bases/button' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '快手上手', link: '/zh-cn/config/start' },
          { text: '主题配置', link: '/zh-cn/config/theme' },
        ]
      },
      {
        text: '组件文档',
        items: [
          {
            text: '通用',
            items: [
              { text: '按钮', link: '/zh-cn/bases/button' },
              { text: '按钮组', link: '/zh-cn/bases/button-group' },
              { text: '图标', link: '/zh-cn/bases/icon' },
              { text: '色彩', link: '/zh-cn/bases/colors' },
              { text: '间距', link: '/zh-cn/bases/space' },
            ]
          },
          {
            text: '表单',
            items: [
              { text: '输入框', link: '/zh-cn/form/input' },
            ]
          },
          {
            text: '数据展示',
            items: [
            ]
          },
          {
            text: '反馈',
            items: [
              { text: '对话框', link: '/zh-cn/feedback/dialog' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/irming46/mostify-ui' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Irming'
    }
  }
}
