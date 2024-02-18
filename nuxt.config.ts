import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { REMOVE_PAGES_PATTERNS } from './scripts/constants'
import { hello } from './scripts/hello'
import { addonModules } from './scripts/modules'
import { removePagesMatching } from './scripts/routes'

const currentDir = dirname(fileURLToPath(import.meta.url))

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
    classPrefix: '',
    classSuffix: '',
    componentName: 'ColorScheme',
    dataValue: 'theme',
    fallback: 'light',
    globalName: '__NUXT_COLOR_MODE__',
    hid: 'nuxt-color-mode-script',
    preference: 'system',
    storageKey: 'nuxt-color-mode',
  },
  css: [
    join(currentDir, './assets/styles/transition.scss'),
  ],
  devtools: {
    enabled: true,
  },
  hooks: {
    'pages:extend': (pages) => {
      removePagesMatching(REMOVE_PAGES_PATTERNS, pages)
    },
    'ready': () => {
      hello()
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
    strategy: 'no_prefix',
  },
  modules: [
    // UI & Style
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',

    // Animation
    '@formkit/auto-animate/nuxt',

    // State management
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // Composables
    '@vueuse/nuxt',
    '@nuxtjs/device',

    // I18n
    '@nuxtjs/i18n',

    // Utils
    'nuxt-lodash',

    ...addonModules(),
  ],
  tailwindcss: {
  },
})
