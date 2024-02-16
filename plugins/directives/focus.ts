import type { Directive, DirectiveBinding } from 'vue'

/**
 * `v-focus` 指令，用于在元素插入到 DOM 时自动聚焦
 */
export function focus(): Directive {
  return {
    mounted(el: HTMLElement, _binding: DirectiveBinding) {
      // 如果元素不可获得焦点，寻找第一个可获得焦点的子元素
      if (el && el.tabIndex === -1) {
        const focusable = el.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable)
          focusable.focus()
        return
      }
      el.focus()
    },
  }
}
