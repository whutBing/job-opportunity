function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.species = "人类";
Person.prototype.say = function () {
  console.log("Hello");
};

// prototype 是什么
console.log("prototype到底是个什么？", typeof Person.prototype);

//prototype 的 constructor
console.log("Person.prototype.constructor", Person.prototype.constructor);

// 1.作用是什么？里边放一些比较共用的属性或方法，代码重用
let per1 = new Person("xiaoming", 20);
// new 过程发生了什么？
// 1.1 创建了一个空对象
// 1.2 空对象的__proto__指向了Fn.prototype
// 1.3 将 this绑定到空对象上
// 1.4 如果构造函数有对象或者函数两种类型的返回值，则这个返回值将取代第一步中的对象；否则，将空对象给返回
let per2 = new Person("xiaohong", 19);

console.log(per1.species); // 人类
console.log(per2.species); // 人类

per1.say(); // Hello
per2.say(); // Hello

// 2. __proto__
console.log(per1.__proto__ === Person.prototype);
