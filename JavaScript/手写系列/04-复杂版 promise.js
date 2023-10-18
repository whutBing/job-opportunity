class MyPromise {
  constructor(executor) {
    this.state = "pending"; // 记录Promise对象的状态
    this.success = null; // 记录成功的值 用then调用
    this.fail = null; // 记录失败的值 用catch调用

    // 记录成功、失败的回调函数数组（通过闭包存储了success、fail值）
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    const resolve = (success) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.success = success;
        // 调用记录的回调函数
        while (this.resolveCallbacks.length) {
          this.resolveCallbacks.shift()(success);
        }
      }
    };

    const reject = (fail) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.fail = fail;
        // 调用记录的回调函数
        while (this.rejectCallbacks.length) {
          this.rejectCallbacks.shift()(fail);
        }
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // 处理不传参数的情况 不传则使用默认值
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (success) => success;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (fail) => {
            throw fail;
          };

    let promiseNext = new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        // 通过微任务确保 promiseNext 初始化完成
        // 使用try catch 返回error时可以捕获抛出
        queueMicrotask(() => {
          try {
            let item = onFulfilled(this.success);
            resolvePromise(item, resolve, reject, promiseNext);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.state === "rejected") {
        queueMicrotask(() => {
          try {
            const item = onRejected(this.reason);
            // 传入 resolvePromise 集中处理
            resolvePromise(item, resolve, reject, promiseNext);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.state === "pending") {
        this.resolveCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              let item = onFulfilled(this.success);
              resolvePromise(item, resolve, reject, promiseNext);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.rejectCallbacks.push(() => {
          try {
            const item = onRejected(this.reason);
            // 传入 resolvePromise 集中处理
            resolvePromise(item, resolve, reject, promiseNext);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return promiseNext;
  }

  // resolve 静态方法
  static resolve(success) {
    if (success instanceof MyPromise) {
      return success;
    }

    return new MyPromise((resolve) => {
      resolve(success);
    });
  }

  // reject 静态方法
  static reject(fail) {
    if (fail instanceof MyPromise) {
      return fail;
    }
    return new MyPromise((resolve, reject) => {
      reject(fail);
    });
  }

  static finally(fn) {
    return this.then(
      (success) => {
        fn();
        return success;
      },
      (fail) => {
        fn();
        throw fail;
      }
    );
  }

  static catch(onRejected) {
    return this.then(null, onRejected);
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        resolve([]);
      } else {
        let result = [];
        let index = 0;
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(
            (data) => {
              result[i] = data;
              if (++index === promises.length) {
                resolve(result);
              }
            },
            (err) => {
              reject(err);
              return;
            }
          );
        }
      }
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        resolve();
      } else {
        let index = 0;
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(
            (data) => {
              resolve(data);
            },
            (err) => {
              reject(err);
              return;
            }
          );
        }
      }
    });
  }
}

const resolvePromise = (x, resolve, reject, promiseNext) => {
  //处理循环调用
  if (x === promiseNext) {
    const err = new TypeError(
      "Uncaught (in promsie) TypeError:detected for promise #<Promsie>"
    );
    console.error(err);
    return reject(err);
  }
  //判断 x 是否是 MyPromise 对象
  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
};

const p = new MyPromise((reslove, reject) => {
  reslove("p");
});

const q = new MyPromise((reslove, reject) => {
  reslove("q");
});

p.then((res) => {
  console.log(res);
  return q;
}).then((res) => {
  console.log(res);
});
// 输出：
// p
// q
