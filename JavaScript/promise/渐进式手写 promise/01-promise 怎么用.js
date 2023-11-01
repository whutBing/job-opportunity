// let p = new Promise
let p = new Promise((resolve, reject) => {
  resolve("成功");
  reject("失败");
});

class MyPromise {
  constructor(executor) {
    this.init();
  }

  init() {
    this.resolve.bind(this);
    this.reject.bind(this);
    this.promiseState = "pending";
    this.promiseResult = null;
  }
  resolve(value) {
    this.promiseState = "resolved";
    this.promiseResult = value;
  }
  reject(reason) {
    this.promiseState = "rejected";
    this.promiseResult = reason;
  }

  then;

  catch;
}
