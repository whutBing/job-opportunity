// let p = new Promise
let p = new Promise((resolve, reject) => {
  resolve("成功");
  reject("失败");
});

class MyPromise {
  constructor(executor) {
    this.init();
    // +
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
  }
  resolve(value) {
    // +
    if (this.promiseState !== "pending") return;
    this.promiseState = "resolved";
    this.promiseResult = value;
  }
  reject(reason) {
    // +
    if (this.promiseState !== "pending") return;
    this.promiseState = "rejected";
    this.promiseResult = reason;
  }

  then;

  catch;
}
