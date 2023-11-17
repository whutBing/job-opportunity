const { SyncHook, SyncBailHook, SyncLoopHook, SyncWaterfallHook } = require('tapable')
const { AsyncSeriesHook, AsyncParallelHook } = require('tapable')

let counter = 0

class HYLearnTapable {
  constructor() {
    this.hooks = {
      // series: 串行
      asyncHook: new AsyncParallelHook(['name', 'age'])
    }

    this.hooks.asyncHook.tapPromise("event1", (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("event1", name, age)
          resolve(111)
        }, 2000);
      })
    })

    this.hooks.asyncHook.tapPromise("event2", (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("event2", name, age)
          resolve(222)
        }, 2000);
      })
    })
  }

  emit() {
    this.hooks.asyncHook.promise("james", 25).then(res => {
      console.log("事件监听完成~", res)
    })
  }
}

const lt = new HYLearnTapable()
lt.emit()