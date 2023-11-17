const { SyncHook, SyncBailHook, SyncLoopHook } = require('tapable')

let counter = 0

class HYLearnTapable {
  constructor() {
    this.hooks = {
      // loop是函数有返回值时, 会重复执行
      syncHook: new SyncLoopHook(['name', 'age'])
    }

    this.hooks.syncHook.tap('event1', (name, age) => {
      if (counter++ < 5) {
        console.log('event1', name, age)
        return "aaa"
      }
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