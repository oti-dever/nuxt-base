import type { NuxtPage } from 'nuxt/schema'

import { log } from './log'

/**
 * 删除匹配正则表达式的页面
 * @param patterns 需要删除的页面的正则表达式
 * @param pages 页面列表
 * @see https://nuxt.com/docs/guide/going-further/custom-routing#pages-hook
 */
export function removePagesMatching(patterns: RegExp[], pages: NuxtPage[]) {
  const pagesToRemove = []
  for (const page of pages) {
    for (const pattern of patterns) {
      if (page.file && pattern.test(page.file)) {
        pagesToRemove.push(page)
        break
      }
    }
    if (page.children)
      removePagesMatching(patterns, page.children)
  }
  for (const page of pagesToRemove) {
    pages.splice(pages.indexOf(page), 1)
    log(`移除页面: ${page.path} => ${page.file}`, 'Router')
  }
}
