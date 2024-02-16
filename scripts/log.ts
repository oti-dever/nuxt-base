import chalk from 'chalk'

import { useAsciiLogo } from './config'

/**
 * 内部日志函数
 */
function _log_format(message: string, scope?: string): string {
  const asciiLogo = useAsciiLogo()
  if (scope)
    scope = chalk.bold(` [${scope}] `)
  return `${asciiLogo}${scope || ' '}${message}`
}

/**
 * 输出日志
 * @param message 日志信息
 * @param scope 作用域信息
 */
export function log(message: string, scope?: string) {
  console.log(chalk.green(_log_format(message, scope)))
}

/**
 * 输出警告日志
 * @param message 日志信息
 * @param scope 作用域信息
 */
export function warn(message: string, scope?: string) {
  console.warn(chalk.yellow(_log_format(message, scope)))
}

/**
 * 输出错误日志
 * @param message 日志信息
 * @param scope 作用域信息
 */
export function error(message: string, scope?: string) {
  console.error(chalk.red(_log_format(message, scope)))
}
