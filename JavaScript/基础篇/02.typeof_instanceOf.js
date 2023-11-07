// 没法很好的区分三种对象类型
// 底层存储字节码，三位数都是一样的
console.log(typeof []);
console.log(typeof null);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof function () {});

// 可以精确的判断

// 基本数据类型放在栈中，引用类型放在堆中
