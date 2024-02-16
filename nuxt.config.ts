import { REMOVE_PAGES_PATTERNS, removePagesMatching } from './scripts/routes'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { mode: 'out-in', name: 'page' },
  },
  colorMode: {
    classSuffix: '',
    dataValue: 'theme', // activate data-theme in <html> tag
    preference: 'system', // default theme 'system'
  },
  css: [
    '@/assets/styles/transition.scss',
  ],
  devtools: {
    enabled: true,
  },
  hooks: {
    'pages:extend': (pages) => {
      removePagesMatching(REMOVE_PAGES_PATTERNS, pages)
    },
  },
  i18n: {
    defaultLocale: 'zh',
    detectBrowserLanguage: {
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      useCookie: true,
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '简体中文',
      },
      {
        code: 'tw',
        iso: 'zh-TW',
        name: '繁體中文',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
      },
    ],
    strategy: 'prefix_except_default',
  },
  linkChecker: {
    enabled: false,
  },
  modules: [
    // UI & Style
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',

    // Animation
    '@formkit/auto-animate/nuxt',

    // Router
    // 'nuxt-typed-router',

    // State management
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // Composables
    '@vueuse/nuxt',
    '@nuxtjs/device',

    // I18n
    '@nuxtjs/i18n',

    // SEO
    '@nuxtjs/seo',

    // Utils
    'dayjs-nuxt',
    'nuxt-lodash',
  ],
  site: {
    url: import.meta.env.NUXT_SITE_URL,
  },
})
