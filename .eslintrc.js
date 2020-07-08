require('@babel/register');

module.exports = {
  root: true,
  parser: 'babel-eslint',

  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.react.js'],
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
  extends: [
    'airbnb',
    'eslint:all',
    'plugin:unicorn/recommended',
    'plugin:cypress/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
    'prettier/react',
    'plugin:react/all',
    'plugin:testing-library/react',
  ],

  plugins: [
    'cypress',
    'prettier',
    'redux-saga',
    'react',
    'react-hooks',
    'promise',
    'sonarjs',
    'jsx-a11y',
    'unicorn',
    'testing-library',
    'react-hooks',
  ],

  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    jsdom: true,
    L: true,
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        // disabled rules
        'max-statements': 'off',
        'no-undef': 'off',
        'require-await': 'off'
      }
    },
  ],
  rules: {
    // disabled rules
    'max-lines-per-function': 'off',
    'no-magic-numbers': 'off', // only disable for tests?
    'no-ternary': 'off',
    'react/jsx-max-depth': 'off', // only disable for tests?
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-sort-props': 'off',
    'react/sort-prop-types': 'off',
    'sort-keys': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',

    // rules to consider
    'unicorn/prevent-abbreviations': 'off',
    'no-implicit-coercion': 'error',
    'react/function-component-definition': 'warn',
    'react/jsx-no-literals': 'off',
    'react/jsx-curly-newline': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-sort-default-props': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-multi-comp': 'warn',
    'react/no-set-state': 'warn',
    'react/prop-types': 'warn',
    'react/require-optimization': 'warn',

    // rules to implement
    'id-length': 'off',

    // todo
    // 'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // 'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/valid-params': 'warn',

    'init-declarations': 'warn',
    'max-statements': 'warn',
    'no-undefined': 'warn',
    'default-param-last': 'warn',
    'line-comment-position': 'warn',
    'no-inline-comments': 'warn',
    'multiline-comment-style': 'warn',
    'require-unicode-regexp': 'warn',
    'require-await': 'warn',
    'require-atomic-updates': 'warn',
    'no-import-assign': 'warn',
    'max-lines': 'warn',
    'no-negated-condition': 'warn',
    'no-invalid-this': 'warn',
    'prefer-named-capture-group': 'warn',
    'max-params': 'warn',
    'no-implicit-coercion': 'warn',
    'prefer-regex-literals': 'warn',
    'no-constructor-return': 'warn',
    'no-warning-comments': 'warn',
    'no-unmodified-loop-condition': 'warn',
    // 'no-duplicate-imports': ['error', { includeExports: true }],
    'no-duplicate-imports': 'warn',
    'no-promise-executor-return': 'warn',
    'consistent-return': 'warn',
    'import/extensions': 'warn',
    'react/boolean-prop-naming': 'warn',
    'react/button-has-type': 'warn',
    'react/display-name': 'warn',
    'testing-library/prefer-find-by': 'warn',
    'unicorn/better-regex': 'warn',
    'unicorn/catch-error-name': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/filename-case': 'warn',
    'unicorn/import-index': 'warn',
    'unicorn/new-for-builtins': 'warn',
    'unicorn/no-abusive-eslint-disable': 'warn',
    'unicorn/no-fn-reference-in-iterator': 'warn',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/prefer-add-event-listener': 'warn',
    'unicorn/prefer-includes': 'warn',
    'unicorn/prefer-node-append': 'warn',
    'unicorn/prefer-node-remove': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-optional-catch-binding': 'warn',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/prefer-set-has': 'warn',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/prefer-text-content': 'warn',
    'unicorn/throw-new-error': 'warn',

    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['noHref', 'invalidHref'] }],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/scope': 'warn',
    'unicorn/filename-case': 'off',
    'accessor-pairs': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error'],
    'block-scoped-var': ['error'],
    'block-spacing': ['error'],
    'brace-style': 'off',
    'capitalized-comments': 'off',
    'comma-style': ['error'],
    'computed-property-spacing': ['error', 'never'],
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'eol-last': 'off',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error'],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'generator-star-spacing': ['error', 'after'],
    'getter-return': 'warn',
    'guard-for-in': ['error'],
    'handle-callback-err': ['error'],
    'import/first': 'error',
    'import/no-amd': 'error',
    'key-spacing': ['error', { beforeColon: false }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'lines-between-class-members': 'off',
    'max-depth': ['error', 5],
    /*
     * 'max-len': ['warn', { code: 120, tabWidth: 2, ignoreUrls: true, comments: 140 }],
     * 'max-nested-callbacks': ['error', 4],
     */
    'max-statements-per-line': 'off',
    'new-parens': ['error'],
    'no-alert': ['error'],
    'no-array-constructor': 'warn',
    'no-await-in-loop': 'off',
    'no-buffer-constructor': ['error'],
    'no-caller': ['error'],
    'no-catch-shadow': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['warn', 'except-parens'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-div-regex': ['error'],
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-else-return': ['error'],
    'no-empty-character-class': 'warn',
    'no-empty-pattern': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-ex-assign': 'warn',
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-extra-parens': ['error'],
    'no-fallthrough': 'warn',
    'no-floating-decimal': ['error'],
    'no-func-assign': 'warn',
    'no-implied-eval': ['error'],
    'no-invalid-regexp': 'warn',
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': 'warn',
    'no-mixed-operators': ['warn', { groups: [['&', '|', '^', '~', '<<', '>>', '>>>'], ['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']], allowSamePrecedence: false }],
    'no-mixed-requires': ['error'],
    'no-multi-spaces': 'off',
    'no-multi-str': ['error'],
    'no-native-reassign': ['error'],
    'no-negated-in-lhs': 'warn',
    'no-nested-ternary': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-object': 'warn',
    'no-new-require': ['error'],
    'no-new-symbol': 'warn',
    'no-new-wrappers': ['error'],
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': ['error'],
    'no-path-concat': ['error'],
    'no-process-exit': 'off',
    'no-proto': ['error'],
    'no-prototype-builtins': ['warn'],
    'no-regex-spaces': 'warn',
    // 'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-restricted-modules': ['error'],
    'no-restricted-properties': ['error', { object: 'require', property: 'ensure' }, { object: 'System', property: 'import' }],
    'no-return-await': ['warn'],
    'no-script-url': ['error'],
    'no-self-assign': 'warn',
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-sparse-arrays': 'warn',
    'no-tabs': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-this-before-super': 'warn',
    'no-throw-literal': ['error'],
    'no-trailing-spaces': ['error'],
    'no-undef': 'error',
    'no-undef-init': ['error'],
    'no-unreachable': ['warn'],
    'no-unused-expressions': ['error'],


    // 'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true}],
    'no-unused-labels': 'warn',
    /*
     * 'no-unused-vars': ['warn', {args: 'none', ignoreRestSiblings: true}],
     * 'no-use-before-define': ['error', 'nofunc'],
     * 'no-use-before-define': ['warn', {functions: false, classes: false, variables: false}],
     */

    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-rename': ['warn', { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-void': ['error'],
    'no-whitespace-before-property': ['error'],
    'no-with': ['error'],
    'object-shorthand': ['error'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-rest-params': ['error'],
    /*
     * 'require-await': ['warn'],
     * 'require-yield': 'warn',
     */
    'rest-spread-spacing': ['error'],
    'sort-imports': 'off',
    'sort-vars': ['error'],
    'space-before-blocks': ['error'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': ['error', 'always'],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error'],
    'template-tag-spacing': ['error'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-jsdoc': 'off',
    'valid-typeof': 'warn',
    'vars-on-top': ['error'],
    'wrap-iife': ['error', 'inside'],
    complexity: ['error', 30],
    curly: ['error', 'multi-line', 'consistent'],
    eqeqeq: ['warn', 'smart'],
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: ['error'],
    strict: ['warn', 'never'],
    yoda: ['error', 'never'],


    camelcase: 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'import/imports-first': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'off',
    'import/prefer-default-export': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    // indent: ['warn', 2, {SwitchCase: 1, MemberExpression: 1, ignoredNodes: []}],
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      /*
       * NOTE: If this error triggers, either disable it or add
       * your custom components, labels and attributes via these options
       * See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
       */
      controlComponents: ['Input'],
    },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'linebreak-style': ['error', 'unix'],
    'max-len': 'off',
    'newline-per-chained-call': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'warn',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': ['off', { allow: ['_display', '_links'] }],
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'padded-blocks': ['error', 'never'],
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['warn', { allowAllCaps: true, ignore: [] }],
    'react/jsx-uses-react': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
    'react/destructuring-assignment': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-closing-tag-location': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': 'off',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'redux-saga/no-yield-in-race': 'error',
    'redux-saga/yield-effects': 'error',
    'require-yield': 'off',
    'space-in-parens': ['error', 'never'],
    'react/jsx-props-no-spreading': 'off',
    'prefer-destructuring': 'off',
    'react/jsx-fragments': ['warn', 'element'],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-indent': ['error', 2, { checkAttributes: true }],
    semi: 'error',
  },
};
