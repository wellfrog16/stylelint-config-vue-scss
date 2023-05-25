module.exports = {
    extends: [
        "stylelint-config-standard",
        'stylelint-config-standard-scss',
        "stylelint-config-html/vue",
        'stylelint-config-recommended-vue/scss',
        "stylelint-config-recess-order",
    ],
    rules: {
        indentation: 4, // 4个空格
        'no-eol-whitespace': [true, { ignore: ['empty-lines'] }],
        'selector-class-pattern': '^[a-z]+[a-z\\d-_]*[a-z\\d]$', // class名字规则
        'selector-id-pattern': '^[a-zA-Z\\d]+$', // id名字规则
        'max-nesting-depth': 3, // 最大嵌套深度
        'max-empty-lines': null, // 如果设置数字，vue文件自动修复有问题
        'string-quotes': 'single', // 单引号
        'function-url-quotes': 'always', // 单引号
        'property-no-unknown': [true, { ignoreProperties: ['return'] }], // 自定义函数用，忽略return
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
        'selector-list-comma-newline-after': 'always-multi-line', // 不允许多行
        'no-descending-specificity': null, // 选择器顺序，此功能bug太多
        "value-keyword-case": ["lower", { "ignoreFunctions": ["v-bind"] }], // 忽略 vue3 绑定样式
        "font-family-no-missing-generic-family-keyword": [true, { "ignoreFontFamilies": ["iconfont"] }], // 忽略 iconfont 的字体模式
        // ---
        'scss/at-extend-no-missing-placeholder': null,
    },
};
