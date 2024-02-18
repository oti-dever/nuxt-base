import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore({
  actions: {
  },
  id: 'dark-mode',
  persist: true,
  state: () => {
    return {
      /**
       * 是否暗色主题
       */
      isDark: false,
      /**
       * 是否使用系统的颜色模式
       */
      isSystem: true,
    }
  },
})
