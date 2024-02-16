import type { Directive } from 'vue'

import { focus } from './directives/focus'
import { permission } from './directives/permission'

/**
 * 注册指令
 */
const RegisterDirectives: Record<string, () => Directive> = {
  focus,
  permission,
}

export default defineNuxtPlugin(async (nuxtApp) => {
  // nuxtApp.vueApp.directive('focus', vFocus())
  Object.keys(RegisterDirectives).forEach((key) => {
    nuxtApp.vueApp.directive(key, RegisterDirectives[key]())
  })
})
