const { SyncHook, SyncBailHook, SyncLoopHook, SyncWaterfallHook } = require('tapable')
const { AsyncSeriesHook, AsyncParallelHook } = require('tapable')

let counter = 0

class HYLearnTapable {
  constructor() {
    this.hooks = {
      // series: 串行
      asyncHook: new AsyncParallelHook(['name', 'age'])
    }

    this.hooks.asyncHook.tapAsync("event1", (name, age, callback) => {
      setTimeout(() => {
        console.log("event1", name, age)
        callback()
      }, 2000);
    })

    this.hooks.asyncHook.tapAsync("event2", (name, age, callback) => {
      setTimeout(() => {
        console.log("event2", name, age)
        callback()
      }, 2000);
    })
  }

  emit() {
    this.hooks.asyncHook.callAsync("why", 18, () => {
      console.log("第一次事件执行完成~")
    })
  }
}

const lt = new HYLearnTapable()
lt.emit()