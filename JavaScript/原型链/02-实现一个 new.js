function MyNew(Fn, ...args) {
  // 1.创建一个空对象
  const obj = {};
  // 2.将空对象的__proto__对象指向  构造函数的原型
  if (Fn.prototype !== null) {
    Object.setPrototypeOf(obj, Fn.prototype);
  }
  // 3.this绑定到这个对象上
  let result = this.apply(Fn, ...args);
  if (
    (typeof result === "function" || typeof result === "object") &&
    result !== null
  ) {
    // 4.1返回构造函数里的返回值
    return result;
  }
  // 4.2返回空对象
  return obj;
}
