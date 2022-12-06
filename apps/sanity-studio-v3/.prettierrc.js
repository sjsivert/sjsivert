module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 110,
  semi: true,
  arrowParens: 'always',
  singleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  useTabs: true,
  tabWidth: 4,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
