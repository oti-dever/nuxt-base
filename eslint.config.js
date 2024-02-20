import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

export default antfu(
  {
    // enable formatter
    formatters: true,
    // ignore base/ self
    ignores: [
      'base',
      '.base',
    ],
    markdown: false,
    typescript: {
    },
  },
  // sorting various data
  perfectionistNatural,
  // tailwindcss
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
  ...compat.config({
    overrides: [{
      extends: ['plugin:markdownlint/recommended'],
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      rules: {
        // no-multiple-blanks
        'markdownlint/md012': 'warn',
        // line-length
        'markdownlint/md013': 'off',
        // blanks-around-fences
        'markdownlint/md031': ['warn', {
          list_items: false,
        }],
        // no-inline-html
        'markdownlint/md033': ['warn', {
          allowed_elements: [
            'Catalog',
          ],
        }],
      },
    }],
  }),
  {
    languageOptions: {
      parserOptions: {
        project: [
          'tsconfig.json',
          'packages/*/tsconfig.json',
        ],
      },
    },
  },
  {
    rules: {
      'perfectionist/sort-vue-attributes': 'off',
    },
  },
)
