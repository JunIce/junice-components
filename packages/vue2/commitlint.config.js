/**
 *  https://commitlint.js.org/
 *  commit格式
 *  type: commit的类型，指定格式，必需
 *  scope: 说明commit的影响范围，可选
 *  subject: commit的简短描述,必需
 *  body: 对本次commit的详细描述,可多行，可省略
 *  footer: 用于不兼容变动或关闭issue, 可省略
 *  <type>(<scope>): <subject>
 *  # 空一行
 *  <body>
 *  # 空一行
 *  <footer>
 *  example:
 *    feat: add nav views
 *
 *    import nav components to keep flash.
 *
 *    Close issue #10001
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // commit 的type类别
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性 新需求
        'fix', // bug 修复
        'chore', // 依赖库更新 构建过程或辅助工具的变动
        'refactor', // 功能重构
        'perf', // Performance optimization 性能优化
        'style', // 格式方面的优化 不影响代码运行
        'revert', // 恢复
        'test' // 测试
      ]
    ],
    'type-empty': [2, 'never'], // type 不能为空
    'type-case': [2, 'always', 'lowerCase'], // type小写
    'scope-empty': [0],
    'scope-case': [0],
    'subject-empty': [2, 'never'], // subjec不能为空
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 80], // header最大长度80
    'body-leading-blank': [1, 'always'], // body开始于空白行
    'footer-leading-blank': [1, 'always'] // footer开始于空白行
  }
}
