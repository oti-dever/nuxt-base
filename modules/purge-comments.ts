import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import MagicString from 'magic-string'

/**
 * 当前模块用于移除 Vue 文件中的 HTML 注释。
 */
export default defineNuxtModule({
  meta: {
    name: 'purge-comments',
  },
  setup(_options, nuxt) {
    addVitePlugin({
      enforce: 'pre',
      name: 'purge-comments',
      transform: (code, id) => {
        if (!id.endsWith('.vue') || !code.includes('<!--'))
          return

        const s = new MagicString(code)
        s.replace(/<!--.*?-->/g, '')

        if (s.hasChanged()) {
          return {
            code: s.toString(),
            map:
              nuxt.options.sourcemap
              && s.generateMap({ includeContent: true, source: id }),
          }
        }
      },
    })
  },
})
