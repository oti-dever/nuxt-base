export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    getSSRProps(_binding, _vnode) {
      return {}
    },
    mounted(el) {
      el.focus()
    },
  })
})
