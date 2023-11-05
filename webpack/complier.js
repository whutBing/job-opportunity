const { SyncHook, AsyncParallelHook } = require("tapable");

class Compiler {
  constructor(options) {
    this.hooks = {
      testSyncHook: new SyncHook(["name", "age"]),
      testAsyncHook: new AsyncParallelHook(["name", "age"]),
    };

    let plugins = options.plugins;

    plugins.forEach((plugin) => {
      plugin.apply(this);
    });
  }

  run() {
    this.testSyncHook("ggg", 25);
    this.testAsyncHook("hhh", 24);
  }

  testSyncHook(name, age) {
    this.hooks.testSyncHook.call(name, age);
  }

  testAsyncHook(name, age) {
    this.hooks.testAsyncHook.callAsync(name, age);
  }
}

module.exports = Compiler;
