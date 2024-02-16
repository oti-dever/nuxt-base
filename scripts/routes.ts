import type { NuxtPage } from 'nuxt/schema'

/**
 * 删除匹配正则表达式的页面
 */
export const REMOVE_PAGES_PATTERNS = [
  // 不匹配 TypeScript 文件
  /\.ts$/,
  // 不匹配 components/* 目录
  /components\//,
]

if (!import.meta.env.DEV)
  REMOVE_PAGES_PATTERNS.push(/demo\//)

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
    console.log(`[removePagesMatching] Removed page: ${page.path} => ${page.file}`)
  }
}
