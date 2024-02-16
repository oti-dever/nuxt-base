import type { Directive, DirectiveBinding } from 'vue'

/**
 * `v-permission` 指令，用于在没有权限时删除元素
 */
export function permission(): Directive {
  return (el: HTMLElement, binding: DirectiveBinding) => {
    const { baseConfig } = useAppConfig()
    if (!baseConfig.hasPermission(binding.value))
      el.parentNode?.removeChild(el)
  }
}
