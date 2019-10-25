const ERROR = 2
const WARN = 1
const OFF = 0

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    exmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  rules: {
    semi: [ERROR, 'never'], // always never
    quotes: [ERROR, 'single']
  },
}