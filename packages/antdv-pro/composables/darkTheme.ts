/**
 * 暗色模式钩子
 */
export function useDarkTheme() {
  // 响应式获取系统偏好
  const colorMode = useColorMode()

  // 响应式获取用户偏好设置
  const darkModeStore = useDarkModeStore()
  const { isDark, isSystem } = storeToRefs(darkModeStore)

  /**
   * 当前的颜色模式
   */
  const darkTheme = computed<SystemThemeType>(() => {
    if (isSystem.value) {
      if (['dark', 'light'].includes(colorMode.value))
        return colorMode.value as SystemThemeType
      else
        return 'light'
    }
    else {
      return isDark.value ? 'dark' : 'light'
    }
  })

  /**
   * 切换颜色模式：浅色、深色、跟随系统
   */
  function toggleTheme() {
    if (isSystem.value) {
      isDark.value = false
      isSystem.value = false
    }
    else {
      if (isDark.value) {
        isDark.value = false
        isSystem.value = true
      }
      else {
        isDark.value = true
      }
    }
  }
  /**
   * 当前的颜色模式图标
   */
  const darkThemeIconName = computed(() => {
    if (isSystem.value)
      return 'ic:baseline-brightness-medium'
    else
      return isDark.value ? 'ic:baseline-dark-mode' : 'ic:baseline-light-mode'
  })

  return {
    darkTheme,
    darkThemeIconName,
    toggleTheme,
  }
}
