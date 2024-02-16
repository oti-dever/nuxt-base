/**
 * 返回 Meta 键的，Mac 上是 `⌘`，Windows 上是 `Ctrl`
 * @returns Meta 键
 */
export function useMetaKey() {
  const { isApple } = useDevice()
  return isApple ? '⌘' : 'Ctrl'
}
