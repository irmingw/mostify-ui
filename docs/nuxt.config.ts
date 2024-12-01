// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/mostify-ui/", // 替换为您的仓库名称
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        {
          href: "/logo.svg",
          rel: "shortcut icon",
          type: "image/x-icon"
        }
      ],
      noscript: [{ children: "JavaScript is required" }],
      title: "Mostify UI | a Vue3 Ui Library"
    },
    pageTransition: { name: "layout", mode: "out-in" }
  },

  imports: {
    autoImport: true,
    transform: {
      exclude: [/.*.nuxt\/dist\/server.*/]
    }
  },

  ssr: false,
  devtools: { enabled: true },
  plugins: ["~/plugins/mostify.ts"],

  devServer: {
    port: 3009,
    host: "0.0.0.0"
  },

  modules: ["nuxt-i18n-micro"],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "zh", iso: "zh-CN", dir: "ltr" }
    ],
    meta: true,
    lazy: true, // 启用延迟加载翻译
    translationDir: "locales/", // 指定存放翻译文件的目录
    defaultLocale: "en", // 默认语言设置
    loadLanguagesAsync: true
  },

  compatibilityDate: "2024-12-01"
});
