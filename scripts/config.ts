import chalk from 'chalk'

/**
 * 欢迎语
 */
export const HelloString = `欢迎使用雾里红 Nuxt 3 模板，欢迎 Star/Fork `
  + `✨ ${chalk.underline.yellowBright('https://github.com/oti-dever/nuxt-base')} ✨`
/**
 * 日志前缀
 */
export const AsciiLogo = '🐏'

/**
 * 获取欢迎语
 * @returns string
 */
export function useHelloString(): string {
  return import.meta.env.BASE_HELLO_STRING || HelloString
}

/**
 * 获取 ASCII Logo
 */
export function useAsciiLogo(): string {
  return import.meta.env.BASE_ASCII_LOGO || AsciiLogo
}
