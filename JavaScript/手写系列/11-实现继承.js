// 1.构造函数继承
function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 2.原型链继承
function Parent() {
  this.name = "Parent";
}

Parent.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

function Child() {
  this.age = 5;
}

Child.prototype = Parent.prototype;
