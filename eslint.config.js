import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

export default antfu({
  formatters: true,
}, perfectionistNatural, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
  },
}))
