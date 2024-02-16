import type { Plugin, ResolvedConfig } from 'vite'

import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'

import { log } from '../scripts/log'

/**
 * 生成和输出构建信息
 */
export function viteBuildInfo(): Plugin {
  let config: ResolvedConfig
  return {
    buildEnd() {
      if (config.isProduction)
        log('构建完成...')
    },
    buildStart() {
      if (config.isProduction)
        log('开始构建...')
    },
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    name: 'vite:buildInfo',
  }
}

export default defineNuxtModule({
  meta: {
    name: 'vite-build-info',
  },
  setup(_options, _nuxt) {
    addVitePlugin(viteBuildInfo())
  },
})
