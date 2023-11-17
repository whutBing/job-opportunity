const { series, parallel } = require("gulp")

const task1 = (cb) => {
  console.log("task1 function~")
  cb()
}

const task2 = (cb) => {
  console.log("task2 function~")
  cb()
}

const task3 = (cb) => {
  console.log("task3 function~")
  cb()
}

// 多个任务串行执行
const seriesTask = series(task1, task2, task3)
// 多个任务并行执行
const parallelTask = parallel(task1, task2, task3)

module.exports = {
  seriesTask,
  parallelTask
}
