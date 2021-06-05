module.exports = {
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
      ],
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
      plugins: [
        'simple-import-sort',
        'typescript-sort-keys',
        'sort-keys-fix',
        'sort-destructure-keys',
        '@typescript-eslint',
      ],
      rules: {
        'react/jsx-sort-props': [
          'warn',
          {
            callbacksLast: false,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
            shorthandFirst: true,
          },
        ],
        'react/prop-types': 'off',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',
        'sort-destructure-keys/sort-destructure-keys': 'warn',
        'sort-keys-fix/sort-keys-fix': 'warn',
        'typescript-sort-keys/interface': 'warn',
        'typescript-sort-keys/string-enum': 'warn',
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        operations: ['./apps/graphql/**/*.graphql'],
        schema: './apps/schema/schema.graphql',
      },
      plugins: ['@graphql-eslint'],
      rules: {
        // "@graphql-eslint/no-unreachable-types": ["error"]
      },
    },
  ],
  root: true,
};
