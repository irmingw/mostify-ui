// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
      ],
      link: [
        {
          href: "/logo.svg",
          rel: "shortcut icon",
          type: "image/x-icon",
        },
      ],

      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
      title:'Mostify UI a Vue3 Ui Library'
    },
    pageTransition: { name: 'layout', mode: 'out-in' },
  },

  imports: {
    autoImport: true,
    transform: {
      exclude: [/.*.nuxt\/dist\/server.*/],
    },
  },

  ssr: false,
  devtools: { enabled: true },
  plugins: ["~/plugins/mostify.ts"],
  devServer: {
    port: 3009,
    host: "0.0.0.0",
  },
  modules: [
    'nuxt-i18n-micro',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'zh', iso: 'zh-CN', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
  },
});