/**
 * 用来检测构造函数的原型是否出现在某个对象的原型上
 * @param {*} obj
 * @param {*} constructor
 * @returns
 */
function myInstanceof(obj, constructor) {
  let p = obj;
  while (p.__proto__ !== null) {
    if (p.__proto__ === constructor.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
}
