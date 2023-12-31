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
    // +
    this.onResolvedCbs = [];
    this.onRejectedCbs = [];
  }
  resolve(value) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "resolved";
    this.PromiseResult = value;
    // +
    while (this.onResolvedCbs.length) {
      this.onResolvedCbs.shift()(this.PromiseResult);
    }
  }
  reject(reason) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "rejected";
    this.PromiseResult = reason;
    // +
    while (this.onRejectedCbs.length) {
      this.onRejectedCbs.shift()(this.PromiseResult);
    }
  }

  then(onResolved, onRejected) {
    onResolved = typeof onResolved === "function" ? onResolved : (val) => val;
    onRejected = typeof onRejected === "function" ? onRejected : (val) => val;
    if (this.PromiseState === "resolved") {
      onResolved(this.PromiseResult);
    } else if (this.PromiseState === "rejected") {
      onRejected(this.PromiseResult);
    } else if (this.PromiseState === "pending") {
      // +
      this.onResolvedCbs.push(onResolved.bind(this));
      this.onRejectedCbs.push(onRejected.bind(this));
    }
  }
}

// // 马上输出 ”成功“
// const p1 = new MyPromise((resolve, reject) => {
//   resolve("成功");
// }).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// 1秒后输出 ”失败“
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("失败");
  }, 1000);
}).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

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
