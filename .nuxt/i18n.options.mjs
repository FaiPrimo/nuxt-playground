
// @ts-nocheck


export const localeCodes =  [
  "en",
  "th"
]

export const localeLoaders = {
  "en": [{ key: "../src/locales/en.json", load: () => import("../src/locales/en.json" /* webpackChunkName: "locale__Users_primo_Desktop_Workspaces_playground_nuxt_playground_src_locales_en_json" */), cache: true }],
  "th": [{ key: "../src/locales/th.json", load: () => import("../src/locales/th.json" /* webpackChunkName: "locale__Users_primo_Desktop_Workspaces_playground_nuxt_playground_src_locales_th_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "name": "English",
      "files": [
        "/Users/primo/Desktop/Workspaces/playground/nuxt-playground/src/locales/en.json"
      ]
    },
    {
      "code": "th",
      "name": "Thai",
      "files": [
        "/Users/primo/Desktop/Workspaces/playground/nuxt-playground/src/locales/th.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": true,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "English",
    "files": [
      {
        "path": "/Users/primo/Desktop/Workspaces/playground/nuxt-playground/src/locales/en.json"
      }
    ]
  },
  {
    "code": "th",
    "name": "Thai",
    "files": [
      {
        "path": "/Users/primo/Desktop/Workspaces/playground/nuxt-playground/src/locales/th.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
