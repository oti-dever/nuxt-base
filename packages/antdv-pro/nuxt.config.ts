import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  css: [
    join(currentDir, './assets/styles/reset.scss'),
  ],
  extends: ['../..'],
  modules: [
    '@ant-design-vue/nuxt',
  ],
  tailwindcss: {
    config: {
      content: [
        './components/*.{html,js,ts,vue}',
        './layouts/*.{html,js,ts,vue}',
        './pages/*.{html,js,ts,vue}',
        './app.vue',
      ],
      corePlugins: {
        // 避免样式与 UI 库冲突
        preflight: false,
      },
    },
  },
})
