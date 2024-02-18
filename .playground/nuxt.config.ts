export default defineNuxtConfig({
  extends: ['..'],
  tailwindcss: {
    config: {
      content: [
        './components/*.{html,js,ts,vue}',
        './layouts/*.{html,js,ts,vue}',
        './pages/*.{html,js,ts,vue}',
        './app.vue',
      ],
    },
  },
})
