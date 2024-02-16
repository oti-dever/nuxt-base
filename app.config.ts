export default defineAppConfig({
  baseConfig: {
    hasPermission: _binding => true,
    name: 'best Nuxt 3 base layer',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    baseConfig?: {
      hasPermission?: (binding: any) => boolean
      /** Project name */
      name?: string
    }
  }
}
