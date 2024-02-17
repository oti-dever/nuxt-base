import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersistedstate)

/**
 * Pinia 储存实例
 * @returns Pinia store
 */
export function useStore() {
  return store
}
