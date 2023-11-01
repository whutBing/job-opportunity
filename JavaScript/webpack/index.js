const Compiler = require("./complier");
const MockWebpackPlugin = require("./mock-webpack-plugin");

const complier = new Compiler({
  plugins: [new MockWebpackPlugin()],
});

complier.run();

const { SyncWaterfallHook } = require("tapable");

const myHook = new SyncWaterfallHook(["arg1", "arg2", "arg3"]);

myHook.tap("myHook1", (arg1, arg2, arg3) => {
  console.log("myHook1:", arg1, arg2, arg3);

  return "cool";
});

myHook.tap("myHook2", (arg1, arg2, arg3) => {
  console.log("myHook2:", arg1, arg2, arg3);
});

myHook.tap("myHook3", (arg1, arg2, arg3) => {
  console.log("myHook3:", arg1, arg2, arg3);
});

myHook.call("Y", "L", "G");

//打印结果为：
// myHook1 Y L G
// myHook2 cool L G
// myHook3 cool L G
