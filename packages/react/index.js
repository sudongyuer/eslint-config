module.exports = {
  extends: [
    'plugin:react/recommended',
    '@sudongyuer/eslint-config-ts',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
