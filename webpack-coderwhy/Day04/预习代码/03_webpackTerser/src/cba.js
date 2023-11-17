import { add } from './utils/math'
import "./utils/format"
import "./css/style.css"

console.log(add(20, 30))

const message = "Hello World"
console.log(message)

const obj = {
  foo() {
    return "foo"
  }
}

console.log(obj.foo())

function bar(num1, num2) {
  console.log('bar exec~', arguments[0], arguments[1])
}
// bar(10, 20)

if (false) {
  console.log("哈哈哈哈")
}

// class Person {}
// const p = new Person()
// console.log(p)
