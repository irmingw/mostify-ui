export default {
  title: "Mostify UI a Vue3 UI component library",
  description: "Mostify UI a Vue3 UI component library that provides exquisite UI components",
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Start', link: '/config/start', },
      { text: 'Components', link: '/bases/button' }
    ],

    sidebar: [
      {
        text: 'Settings',
        items: [
          { text: 'Get Start', link: '/config/start' },
          { text: 'Theme Setting', link: '/config/theme' },
        ]
      },
      {
        text: 'Bases',
        items: [
          { text: 'Button', link: '/bases/button' },
          { text: 'ButtonGroup', link: '/bases/button-group' },
          { text: 'Icon', link: '/bases/icon' },
          { text: 'Colors', link: '/bases/colors' },
          { text: 'Space', link: '/bases/space' },
        ]
      },
      {
        text: 'Forms',
        items: [
          { text: 'Input', link: '/form/input' },
          { text: 'Checkbox', link: '/form/checkbox' },
        ]
      },
      {
        text: 'Data',
        items: [
          { text: 'Avatar', link: '/data/avatar' },
          { text: 'Badge', link: '/navigation/badge' },
        ]
      },
      {
        text: 'Navigation',
        items: [
          { text: 'Breadcrumb', link: '/navigation/breadcrumb' },
        ]
      },
      {
        text: 'Feedback',
        items: [
          { text: 'Alert', link: '/feedback/alert' },
          { text: 'Dialog', link: '/feedback/dialog' },
        ]
      },
      {
        text: 'Others',
        items: [
          { text: 'Divider', link: '/other/divider' },
        ]
       }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/irming46/mostify-ui' }
    ],

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Irming'
    }
  }
}
