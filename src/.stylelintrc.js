const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-less',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': selectorOrdering, // to fine-tune configuration use selectorOrderFactory
    'order/properties-order': propertyOrdering,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
  },
};
