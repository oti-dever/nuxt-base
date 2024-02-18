export default defineAppConfig({
  baseConfig: {
    hasPermission: _binding => true,
    name: 'best Nuxt 3 base layer',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /**
     * 基础层配置
     */
    baseConfig?: {
      /**
       * 权限过滤函数，用于实现 `v-premission` 指令，返回 `true` 表示有权限
       * @param binding `v-premission` 指令绑定的值
       * @returns 布尔值，表示是否有权限
       */
      hasPermission?: (binding: any) => boolean
      /** 项目名称 */
      name?: string
    }
  }
}
