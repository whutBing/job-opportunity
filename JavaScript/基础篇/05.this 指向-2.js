// 3. 对象内部调用
const obj = {
  a: 10,
  b: 20,
  add: function () {
    console.log("3. object this", this);
    return this.a + this.b;
  },
};
obj.add();
const add = obj.add;
add();

// 4.prototype  原型链中的方法的this仍然指向调用它的对象
const obj2 = {
  a: 10,
  b: 20,
};
const prototypeObj = {
  add: function () {
    console.log("4. prototype", this);
    return this.a + this.b;
  },
};
Object.setPrototypeOf(obj2, prototypeObj);
console.log(obj2.add()); // 30

// 5.  构造函数中的this与被创建的新对象绑定
function Fun() {
  this.a = 10;
}
const fun = new Fun();
console.log(fun.a); // 10
