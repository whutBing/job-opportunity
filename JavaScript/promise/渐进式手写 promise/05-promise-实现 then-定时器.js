// let p = new Promise
let p = new Promise((resolve, reject) => {
  resolve("成功");
  reject("失败");
});

class MyPromise {
  constructor(executor) {
    this.init();
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(e);
    }
  }

  init() {
    this.resolve.bind(this);
    this.reject.bind(this);
    this.promiseState = "pending";
    this.promiseResult = null;
    this.onFulfilledCbs = [];
    this.onRejectedCbs = [];
  }
  resolve(value) {
    if (this.promiseState !== "pending") return;
    this.promiseState = "resolved";
    this.promiseResult = value;
    // + 改变了执行时机
    while (this.onFulfilledCbs.length) {
      this.onFulfilledCbs.shift()(this.promiseResult);
    }
  }
  reject(reason) {
    if (this.promiseState !== "pending") return;
    this.promiseState = "rejected";
    this.promiseResult = reason;
    // +
    while (this.onRejectedCbs.length) {
      this.onRejectedCbs.shift()(this.promiseResult);
    }
  }
  // setTimeout 改变了执行 onFulfilled/rejected 的执行时机
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;
    onRejected =
      typeof onRejected === "function" ? onRejected : (reason) => reason;
    if (this.promiseState === "fulfilled") {
      onFulfilled(this.promiseResult);
    } else if (this.promiseState === "rejected") {
      onRejected(this.promiseResult);
    }
    // +  处理定时器的 resolve/rejected
    else if (this.promiseState === "pending") {
      this.onFulfilledCbs.push(onFulfilled.bind(this));
      this.onRejectedCbs.push(onRejected.bind(this));
    }
  }

  catch;
}
