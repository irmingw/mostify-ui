// https://vitepress.dev/reference/site-config
const getUrl = (name = "") => `/zh-cn/${name}`;
export default {
  title: "Mostify UI 一个 Vue3 UI 组件库",
  description: "Mostify UI 一个 Vue3 UI 组件库，提供精美的 UI 组件",
  themeConfig: {
    nav: [
      { text: "首页", link: getUrl() },
      { text: "快手上手", link: getUrl("start") },
      { text: "主题配置", link: getUrl("theme") },
      { text: "组件文档", link: getUrl("button") }
    ],

    sidebar: [
      {
        text: "基础",
        items: [
          { text: "快手上手", link: getUrl("start") },
          { text: "架构设计", link: getUrl("design") },
          { text: "主题配置", link: getUrl("theme") }
        ]
      },
      {
        text: "通用",
        items: [
          { text: "Button 按钮", link: getUrl("button") },
          { text: "ButtonGroup 按钮组", link: getUrl("button-group") },
          { text: "Icon 图标", link: getUrl("icon") },
          { text: "Colors 色彩", link: getUrl("colors") },
          { text: "Space 间距", link: getUrl("space") }
        ]
      },
      {
        text: "表单",
        items: [
          { text: "Input 输入框", link: getUrl("input") },
          { text: "InputNumber 数字输入", link: getUrl("input-number") },
          { text: "Textarea 文本域", link: getUrl("textarea") },
          { text: "Checkbox 多选框", link: getUrl("checkbox") }
        ]
      },

      {
        text: "数据展示",
        items: [
          { text: "Avatar头像", link: getUrl("avatar") },
          { text: "Badge徽章", link: getUrl("badge") }
        ]
      },
      {
        text: "导航菜单",
        items: [{ text: "Breadcrumb 面包屑", link: getUrl("breadcrumb") }]
      },
      {
        text: "反馈",
        items: [
          { text: "Alert 提示", link: getUrl("alert") },
          { text: "Dialog 对话框", link: getUrl("dialog") },
          { text: "MessageBox 提示框", link: getUrl("messagebox") }
        ]
      },
      {
        text: "其他",
        items: [{ text: "分割线 Divider", link: getUrl("divider") }]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/irming46/mostify-ui" }
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页"
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Irming"
    }
  }
};
