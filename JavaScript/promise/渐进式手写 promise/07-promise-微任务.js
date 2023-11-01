class MyPromise {
  constructor(executor) {
    this.init();
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  init() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.PromiseState = "pending";
    this.PromiseResult = null;
    this.onResolvedCbs = [];
    this.onRejectedCbs = [];
  }
  resolve(value) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "resolved";
    this.PromiseResult = value;
    while (this.onResolvedCbs.length) {
      this.onResolvedCbs.shift()(this.PromiseResult);
    }
  }
  reject(reason) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "rejected";
    this.PromiseResult = reason;
    while (this.onRejectedCbs.length) {
      this.onRejectedCbs.shift()(this.PromiseResult);
    }
  }

  then(onResolved, onRejected) {
    // 所谓的链式调用，无非是返回一个 promise 实例对象，这个实例不就有 then方法。。。
    // 问题是第 n个then里的回调要不要执行，执行时机如何（实在第 n 个promise里执行，还是 n+1个 promise里执行）？
    onResolved = typeof onResolved === "function" ? onResolved : (val) => val;
    onRejected = typeof onRejected === "function" ? onRejected : (val) => val;
    const thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (callback) => {
        setTimeout(() => {
          const res = callback(this.PromiseResult);
          if (res instanceof MyPromise) {
            res.then(resolve, reject);
          } else {
            resolve(res);
          }
        }, 0);
      };
      if (this.PromiseState === "resolved") {
        // onResolved(this.PromiseResult);
        resolvePromise(onResolved);
      } else if (this.PromiseState === "rejected") {
        // onRejected(this.PromiseResult);
        resolvePromise(onRejected);
      } else if (this.PromiseState === "pending") {
        this.onResolvedCbs.push(onResolved.bind(this));
        this.onRejectedCbs.push(onRejected.bind(this));
      }
    });
    return thenPromise;
  }
}

// // 马上输出 ”成功“
// const p1 = new MyPromise((resolve, reject) => {
//   resolve("成功");
// }).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// // 1秒后输出 ”失败“
// const p2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject("失败");
//   }, 1000);
// }).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// // 链式调用 输出 200
// const p3 = new MyPromise((resolve, reject) => {
//   resolve(100);
// })
//   .then(
//     (res) => 2 * res,
//     (err) => console.log(err)
//   )
//   .then(
//     (res) => console.log(res),
//     (err) => console.log(err)
//   );

const test4 = new MyPromise((resolve, reject) => {
  resolve(1);
}).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

console.log(2);
