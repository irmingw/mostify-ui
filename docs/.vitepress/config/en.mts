const getUrl = (name = "") => `/${name}`;
export default {
  title: "Mostify UI a Vue3 UI component library",
  description:
    "Mostify UI a Vue3 UI component library that provides exquisite UI components",
  themeConfig: {
    nav: [
      { text: "Home", link: getUrl() },
      { text: "Started", link: getUrl("start") },
      { text: "Themes", link: getUrl("theme") },
      { text: "Components", link: getUrl('button') }
    ],

    sidebar: [
      {
        text: "Settings",
        items: [
          { text: "Quick Started", link: getUrl("start") },
          { text: "Architecture Design", link: getUrl("design") },
          { text: "Theme Setting", link: getUrl("theme") }
        ]
      },
      {
        text: "Bases",
        items: [
          { text: "Button", link: getUrl("button") },
          { text: "ButtonGroup", link: getUrl("button-group") },
          { text: "Icon", link: getUrl("icon") },
          { text: "Colors", link: getUrl("colors") },
          { text: "Space", link: getUrl("space") }
        ]
      },
      {
        text: "Forms",
        items: [
          { text: "Input", link: getUrl("input") },
          { text: "InputNumber", link: getUrl("input-number") },
          { text: "Textarea", link: getUrl("textarea") },
          { text: "Checkbox", link: getUrl("checkbox") }
        ]
      },
      {
        text: "Data",
        items: [
          { text: "Avatar", link: getUrl("avatar") },
          { text: "Badge", link: getUrl("badge") }
        ]
      },
      {
        text: "Navigation",
        items: [{ text: "Breadcrumb", link: getUrl("breadcrumb") }]
      },
      {
        text: "Feedback",
        items: [
          { text: "Alert", link: getUrl("alert") },
          { text: "Dialog", link: getUrl("dialog") },
          { text: "MessageBox", link: getUrl("messagebox") }
        ]
      },
      {
        text: "Others",
        items: [{ text: "Divider", link: getUrl("divider") }]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/irming46/mostify-ui" }
    ],

    docFooter: {
      prev: "Previous page",
      next: "Next page"
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Irming"
    }
  }
};
