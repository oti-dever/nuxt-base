import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

export default antfu({
  formatters: true,
  ignores: [
    'base',
  ],
  markdown: false,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
}, perfectionistNatural, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
  },
}))
