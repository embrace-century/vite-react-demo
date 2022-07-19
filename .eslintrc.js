module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:typescript-enum/recommended',
  ],
  plugins: ['react', 'react-hooks', 'react-hooks-addons', 'simple-import-sort', 'import', 'typescript-enum'],
  env: { es6: true },
  globals: { JSX: true, React: true },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: '.' },
      node: {
        paths: ['.'],
      },
    },
    'import/core-modules': ['windi.css'],
  },
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    camelcase: 'off',
    // 关闭最大参数的限制
    'max-params': 'off',
    // 没有用到的变量, 报警
    'no-unused-vars': 'warn',
    // typescript项目关闭这个选项
    // 'no-undef': 'off',
    'no-return-assign': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // 位数过多会丢精度
    '@typescript-eslint/no-loss-of-precision': 'warn',
    // 优先使用type 而不是interface
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    '@typescript-eslint/no-invalid-void-type': 1,

    // 函数组件不允许使用 this
    'react/no-this-in-sfc': 'warn',
    // 强制 react 多 prop 新起一行放置
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    // 强制 jsx 一行只放一个 prop
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    // 强制 prop 缩进
    'react/jsx-indent-props': [2, 2],
    // 强制 prop 排序
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true, // 回调函数后置
        shorthandFirst: true, // 缩写前置
        ignoreCase: false, // 不允许忽略大小写
        reservedFirst: true, // 内置属性(key, ref)前置
      },
    ],
    // 强制尖括号关闭符位置
    'react/jsx-closing-bracket-location': [
      2,
      {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned',
      },
    ],
    // 防止在组件内部创建不稳定的组件, 开启 allowAsProps 选项允许 render props 模式
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks-addons/no-unused-deps': 'warn',

    'tailwindcss/no-custom-classname': 'off',
  },
  overrides: [
    // 官方推荐ts文件不使用eslint的检查, 因为 no-undef 有bug, 参考: https://stackoverflow.com/questions/65054079/eslint-with-typescript-and-firebase-no-undef-error
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
