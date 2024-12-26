// https://vitepress.dev/reference/site-config
export default {
  title: "Mostify UI 一个 Vue3 UI 组件库",
  description: "Mostify UI 一个 Vue3 UI 组件库，提供精美的 UI 组件",
  themeConfig: {
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
        text: '通用',
        items: [
          { text: 'Button 按钮', link: '/zh-cn/bases/button' },
          { text: 'ButtonGroup 按钮组', link: '/zh-cn/bases/button-group' },
          { text: 'Icon 图标', link: '/zh-cn/bases/icon' },
          { text: 'Colors 色彩', link: '/zh-cn/bases/colors' },
          { text: 'Space 间距', link: '/zh-cn/bases/space' },
        ]
      },
      {
        text: '表单',
        items: [
          { text: 'Input 输入框', link: '/zh-cn/form/input' },
          { text: 'InputNumber 数字输入', link: '/zh-cn/form/input-number' },
          { text: 'Textarea 文本域', link: '/zh-cn/form/textarea' },
          { text: 'Checkbox 多选框', link: '/zh-cn/form/checkbox' },
        ]
      },
      
      {
        text: '数据展示',
        items: [
          { text: 'Avatar头像', link: '/zh-cn/data/avatar' },
          { text: 'Badge徽章', link: '/zh-cn/navigation/badge' },
        ]
      },
      {
        text: '导航菜单',
        items: [
          { text: 'Breadcrumb 面包屑', link: '/zh-cn/navigation/breadcrumb' },
        ]
      },
      {
        text: '反馈',
        items: [
          { text: 'Alert 提示', link: '/zh-cn/feedback/alert' },
          { text: 'Dialog 对话框', link: '/zh-cn/feedback/dialog' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '分割线 Divider', link: '/zh-cn/other/divider' },
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
