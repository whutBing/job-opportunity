Function.prototype.myBind = function (ctx, ...args) {
  if (typeof this !== "function") {
    return new TypeError("....");
  }

  const self = this;
  const tempFn = function () {};
  const fn = function (...args1) {
    let b = this instanceof tempFn;
    // 第一种方式调用，this: gloabl    ctx:{name: 'Alice'}
    return self.apply(b ? this : ctx, [...args, ...args1]);
  };
  if (this.prototype) {
    tempFn.prototype = this.prototype;
  }
  fn.prototype = new tempFn();
  return fn;
};

// 调用方式一：
// function greet(name) {
//   console.log(`Hello, ${name}! I'm ${this.name}.`);
// }

// const person = { name: "Alice" };

// const boundGreet = greet.myBind(person, "Bob");

// boundGreet(); // 输出 "Hello, Bob! I'm Alice."

// 调用方式二： 通过 new构造
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " is barking!");
};

const boundConstructor = Dog.myBind(null, "Max"); // 绑定了上下文为 null，参数为 "Max"
const dog = new boundConstructor();

dog.bark(); // 输出：Max is barking!
