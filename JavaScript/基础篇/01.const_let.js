// var 变量提升
console.log(val); // undefined
var val = 1;
console.log(val);

// es6出现了块的概念，需要先声明后使用，不能重复声明
{
  console.log(val); // 报错
  let val = 2;
  // let val = 3;      // 报错
}

// const
// 一旦声明就必须初始化，不能被改变，块作用域
//const a  // 报错
const b = 3;
b = 5; // 报错
