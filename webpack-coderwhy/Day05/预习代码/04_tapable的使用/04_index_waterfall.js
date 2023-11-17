const { SyncHook, SyncBailHook, SyncLoopHook, SyncWaterfallHook } = require('tapable')

let counter = 0

class HYLearnTapable {
  constructor() {
    this.hooks = {
      // WaterFall是函数有返回值时, 会作为下一个hook的第一个参数
      syncHook: new SyncWaterfallHook(['name', 'age'])
    }

    this.hooks.syncHook.tap('event1', (name, age) => {
      return "123"
    })
    this.hooks.syncHook.tap('event2', (name, age) => {
      console.log('event2', name, age)
    })
  }

  emit() {
    this.hooks.syncHook.call("why", 18)
    // this.hooks.syncHook.call("kobe", 30)
  }
}

const lt = new HYLearnTapable()
lt.emit()