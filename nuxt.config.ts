export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "English",
      },
      {
        code: "th",
        file: "th.json",
        name: "Thai",
      },
    ],
    lazy: true,
    langDir: "locales/",
    defaultLocale: "en",
  },
});
