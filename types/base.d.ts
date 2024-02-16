type SystemThemeType = 'dark' | 'light'

interface ImportMetaEnv {
  /**
   * ASCII Logo
   */
  readonly BASE_ASCII_LOGO: string
  /**
   * 欢迎字符串
   */
  readonly BASE_HELLO_STRING: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
