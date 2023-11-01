class MyPromise {
  constructor(executor) {
    this.initValue();
    this.initBind();
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  initValue() {
    this.promiseResult = null;
    this.promiseState = "pending";
    this.onFulfilledCallbacks = []; // 保存成功回调
    this.onRejectedCallbacks = []; // 保存失败回调
  }

  resolve(value) {
    // state是不可变的
    if (this.PromiseState !== "pending") return;
    this.promiseState = "resolved";
    this.promiseResult = value;
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult);
    }
  }

  reject(reason) {
    // state是不可变的
    if (this.PromiseState !== "pending") return;
    this.promiseResult = "rejected";
    this.promiseResult = reason;
    while (this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.PromiseResult);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    var thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (cb) => {
        try {
          const x = cb(this.promiseResult);
          if (x === thenPromise) {
            throw new Error("不能等于自身");
          }
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        } catch (error) {
          reject(error);
          throw new Error(error);
        }
      };
    });
    if (this.promiseState === "resolved") {
      onFulfilled(this.promiseResult);
    } else if (this.promiseState === "rejected") {
      onRejected(this.promiseResult);
    } else if (this.promiseState === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled.bind(this));
      this.onRejectedCallbacks.push(onRejected.bind(this));
    }
    return thenPromise;
  }
}

// const test1 = new MyPromise((resolve, reject) => {
//   resolve("成功");
// });
// console.log(test1); // MyPromise { PromiseState: 'fulfilled', PromiseResult: '成功' }

// const test2 = new MyPromise((resolve, reject) => {
//   reject("失败");
// });
// console.log(test2); // MyPromise { PromiseState: 'rejected', PromiseResult: '失败' }

// const test2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("成功"); // 1秒后输出 成功
//     // resolve('成功') // 1秒后输出 失败
//   }, 1000);
// }).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

const test3 = new MyPromise((resolve, reject) => {
  resolve(100); // 输出 状态：成功 值： 200
  // reject(100) // 输出 状态：成功 值：300
})
  .then(
    (res) => 2 * res,
    (err) => 3 * err
  )
  .then(
    (res) => console.log("成功", res),
    (err) => console.log("失败", err)
  );

const test4 = new MyPromise((resolve, reject) => {
  resolve(100); // 输出 状态：失败 值：200
  // reject(100) // 输出 状态：成功 值：300
  // 这里可没搞反哦。真的搞懂了，就知道了为啥这里是反的
})
  .then(
    (res) => new Promise((resolve, reject) => reject(2 * res)),
    (err) => new Promise((resolve, reject) => resolve(3 * err))
  )
  .then(
    (res) => console.log("成功", res),
    (err) => console.log("失败", err)
  );
