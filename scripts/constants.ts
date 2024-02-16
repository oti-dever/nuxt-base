/**
 * 删除匹配正则表达式的页面
 */
export const REMOVE_PAGES_PATTERNS = [
  // 不匹配 TypeScript 文件
  /\.ts$/,
  // 不匹配 components/* 目录
  /components\//,
]
