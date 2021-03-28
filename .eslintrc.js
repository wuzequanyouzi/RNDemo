module.exports = {
  'root': true,
  'extends': '@react-native-community',
  'plugins': [
    'react-hooks'
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    'prettier/prettier': [
      'off'
    ],
    'no-debugger': 'off',
    'no-await-in-loop': 'warn',
    'curly': [
      'warn',
      'all'
    ],
    'default-case': 'warn',
    'eqeqeq': [
      'warn',
      'always'
    ],
    'no-alert': 'warn',
    'no-caller': 'warn',
    'no-eval': 'warn',
    'no-extend-native': 'warn',
    'no-floating-decimal': 'warn',
    'no-implied-eval': 'warn',
    'no-labels': 'warn',
    'no-multi-str': 'warn',
    'no-new-wrappers': 'warn',
    'no-return-assign': 'warn',
    'no-sequences': 'warn',
    'no-throw-literal': 'warn',
    'no-with': 'warn',
    'radix': 'warn',
    'require-await': 'warn',
    'wrap-iife': 'warn',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-undef-init': 'warn',
    'no-use-before-define': 'warn',
    'array-bracket-newline': [
      'warn',
      'consistent'
    ],
    'array-bracket-spacing': [
      'warn',
      'never'
    ],
    'block-spacing': [
      'warn',
      'always'
    ],
    'brace-style': [
      'warn',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'camelcase': [
      'warn',
      {
        'properties': 'always'
      }
    ],
    'comma-dangle': [
      'warn',
      'never'
    ],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'func-call-spacing': 'warn',
    'function-paren-newline': [
      'warn',
      'consistent'
    ],
    'implicit-arrow-linebreak': 'warn',
    'indent': [
      'warn',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'line-comment-position': [
      'warn',
      {
        'position': 'above'
      }
    ],
    'multiline-ternary': [
      'warn',
      'always-multiline'
    ],
    'new-cap': 'warn',
    'new-parens': 'warn',
    'no-inline-comments': 1,
    'no-mixed-operators': 'warn',
    'no-multi-assign': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-array-constructor': 'warn',
    'no-whitespace-before-property': 'warn',
    'array-callback-return': 'warn',
    'object-curly-newline': [
      'warn',
      {
        'consistent': true
      }
    ],
    'operator-linebreak': [
      'warn',
      'before'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'always'
    ],
    'space-before-function-paren': [
      'warn',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'space-before-blocks': 'warn',
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        'words': true,
        'nonwords': false
      }
    ],
    'spaced-comment': [
      'warn',
      'always'
    ],
    'arrow-spacing': 'warn',
    'no-duplicate-imports': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-destructuring': 'off',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'template-curly-spacing': 'warn',
    'rest-spread-spacing': 'warn',
    'no-loop-func': 'warn',
    'one-var': [
      'warn',
      'never'
    ],
    'no-plusplus': 'off',
    'no-unneeded-ternary': 'warn',
    'no-else-return': 'warn',
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'no-console': [
      'warn',
      {
        'allow': [
          'warn'
        ]
      }
    ]
  }
};
