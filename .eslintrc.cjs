module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // Можливо, варто додати prettier для форматування коду:
    'prettier', // Додаємо prettier останнім
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'], // Додаємо prettier
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Правила для TypeScript (за бажанням):
    '@typescript-eslint/explicit-function-return-type': 'warn', // Рекомендується для кращої читабельності коду
    '@typescript-eslint/no-explicit-any': 'off', // Вимикаємо 'any', краще використовувати конкретні типи
    '@typescript-eslint/no-unused-vars': 'warn', // Попередження про невикористані змінні
    'semi': ['warn', 'always'], // Крапка з комою в кінці кожного виразу
    'quotes': ['warn', 'single'], // Одинарні лапки для строк
    'no-console': 'warn', // Попередження про використання console.log
  },
};