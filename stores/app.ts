import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  actions: {
  },
  id: 'app',
  persist: true,
  state: () => {
    return {
      /**
       * 是否暗色主题
       */
      isDarkTheme: false,
      /**
       * 是否使用系统的颜色模式
       */
      isUsingSystemDarkMode: true,
    }
  },
})
