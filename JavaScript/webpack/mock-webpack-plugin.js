class MockWebpackPlugin {
  apply(compiler) {
    compiler.hooks.testSyncHook.tap("MockWebpackPlugin", (name, age) => {
      console.log("同步事件", name, age);
    });

    compiler.hooks.testAsyncHook.tapAsync("MockWebpackPlugin", (name, age) => {
      setTimeout(() => {
        console.log("异步事件", name, age);
      }, 3000);
    });
  }
}

module.exports = MockWebpackPlugin;
