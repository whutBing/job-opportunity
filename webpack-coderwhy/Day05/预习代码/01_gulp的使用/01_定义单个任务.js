const gulp = require('gulp')

// 定义任务
const foo = (cb) => {
  console.log('foo function~')
  cb()
}

// 早期定义任务
gulp.task('bar', (cb) => {
  console.log("bar function~")
  cb()
})

module.exports = {
  foo
}

module.exports.default = (cb) => {
  console.log("default function~")
  cb()
}
