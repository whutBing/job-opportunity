// let p = new MyPromise
// let p = new MyPromise((resolve, reject) => {
//   resolve("成功");
//   reject("失败");
// });

class MyPromise {
  constructor(executor) {
    this.init();
    executor(this.resolve, this.reject);
  }

  init() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.PromiseState = "pending";
    this.PromiseResult = null;
  }
  resolve(value) {
    // +
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "resolved";
    this.PromiseResult = value;
  }
  reject(reason) {
    // +
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "rejected";
    this.PromiseResult = reason;
  }

  then() {}
}

let p1 = new MyPromise((resolve, reject) => {
  resolve("成功");
  reject("失败");
});
console.log("p1", p1);

let p2 = new MyPromise((resolve, reject) => {
  reject("失败");
  resolve("成功");
});
console.log("p2", p2);
