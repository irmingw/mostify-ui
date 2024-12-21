export default {
  title: "Mostify UI a Vue3 UI component library",
  description: "Mostify UI a Vue3 UI component library that provides exquisite UI components",
  themeConfig: {
    

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement',
    },

    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Get Start', link: '/en/config/start' },
      { text: 'Components', link: '/en/bases/button' }
    ],

    sidebar: [
      {
        text: 'Settings',
        items: [
          { text: 'Get Start', link: '/en/config/start' },
          { text: 'Theme Setting', link: '/en/config/theme' },
        ]
      },
      {
        text: 'Components',

        items: [
          {
            text: 'Bases',
            items: [
              { text: 'Button', link: '/en/bases/button' },
              { text: 'Icon', link: '/en/bases/icon' },
              { text: 'Colors', link: '/en/bases/colors' },
            ]
          },
          {
            text: 'Forms',
            items: [
              { text: 'Input', link: '/en/form/input' },
            ]
          },
          {
            text: 'Data',
            items: [
              { text: 'Button', link: '/' },
            ]
          },
          {
            text: 'Feedback',
            items: [
              { text: 'Dialog', link: '/en/feedback/dialog' },
            ]
          }
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
