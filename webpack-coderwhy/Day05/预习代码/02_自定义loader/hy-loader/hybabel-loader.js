const babel = require('@babel/core')

module.exports = function(content) {
  // 1.异步处理结果
  const callback = this.async()

  // 2.获取传入的参数
  const options = this.getOptions()

  // 3.使用babel转换代码
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result.code)
    }
  })
}