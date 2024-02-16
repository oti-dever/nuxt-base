import { useHelloString } from './config'
import { log } from './log'

/**
 * 输出欢迎信息
 */
export function hello() {
  const helloString = useHelloString()
  log(helloString)
}
