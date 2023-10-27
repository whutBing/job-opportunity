// 定义一个返回 Promise 的异步函数
const asyncFunction = (value, delay, shouldReject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`Rejected: ${value}`);
      } else {
        resolve(`Resolved: ${value}`);
      }
    }, delay);
  });
};

// 调用 myPromiseSettled 函数
const promises = [
  asyncFunction("A", 1000, false),
  asyncFunction("B", 500, true),
  asyncFunction("C", 800, false),
];

// console.log("all", Promise.all(promises));
// console.log("allSettled", Promise.allSettled(promises));

Promise.allSettled(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
