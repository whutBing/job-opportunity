const { SyncHook, SyncBailHook } = require('tapable')

class HYLearnTapable {
  constructor() {
    this.hooks = {
      // bail在某一个事件监听中, 有返回值, 那么后续监听的事件就不会执行了
      // 比如在某个事件发生错误了, 后续就不要执行了
      syncHook: new SyncBailHook(['name', 'age'])
    }

    this.hooks.syncHook.tap('event1', (name, age) => {
      console.log('event1', name, age)

      return "aaa"
    })
    this.hooks.syncHook.tap('event2', (name, age) => {
      console.log('event2', name, age)
    })
  }

  emit() {
    this.hooks.syncHook.call("why", 18)
    this.hooks.syncHook.call("kobe", 30)
  }
}

const lt = new HYLearnTapable()
lt.emit()