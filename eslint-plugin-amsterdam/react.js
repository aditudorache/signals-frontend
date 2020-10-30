module.exports = {
  extends: ['plugin:react/all'],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  env: { browser: true, },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect', },
    // 'import/resolver': { node: { extensions: ['.js', '.tsx'], moduleDirectory: ['node_modules', './src'] } },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'consistent-return': 'off', // clashes with useEffect,
        'react/prop-types': 'off',
      },
    }
  ],
  rules: {
    // base overrides
    'function-paren-newline': 'off',

    // proposed rules
    // 'react/boolean-prop-naming': 'off',
    // 'react/display-name': 'off',
    // 'react/jsx-key': 'off',
    // 'react/require-optimization': 'off',

    // to check
    // 'react/jsx-indent': ['error', 2],
    // 'indent': ['warn', 2, {SwitchCase: 1, ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute']}]
    // 'indent': [2, 4, {'SwitchCase': 1, 'VariableDeclarator': 1}],
    // 'react/prop-types': [2, { ignore: ['children'] }],

    // disabled rules
    'react/jsx-filename-extension': 'off', // This will allow to fine tune tooling like a shared lint configuration
    'react/jsx-indent-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-multi-comp': 'off',
    'react/no-set-state': 'off',
    'react/require-default-props': 'off',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',

    // jsx-a11y
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': ['error', { aspects: ['noHref', 'invalidHref'], }],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true, }],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-quotes': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/label-has-associated-control': ['error', { controlComponents: ['Input'], }],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',

    // react-hooks
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    // rules
    'react/button-has-type': 'error',
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true, }],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function', }],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-indent': ['error', 2, { checkAttributes: true, }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [], }],
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-typos': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'error',
    'react/no-did-mount-set-state': 'error',
  },
};
