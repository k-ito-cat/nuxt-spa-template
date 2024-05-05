module.exports = {
  root: true,
  env: { browser: true, node: true },
  extends: [
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
  ],
  plugins: ['vue', 'unused-imports'],
  rules: {
    'no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 0,
    'vue/valid-template-root': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/*'],
      },
    ],
    'vue/singleline-html-element-content-newline': ['off'],
  },
};
