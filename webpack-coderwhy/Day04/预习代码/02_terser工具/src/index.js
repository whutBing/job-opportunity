import './style.css'

const obj = {
  foo() {
    return "foo"
  }
}

function bar(num1, num2) {
  console.log(arguments[0], arguments[1])
}

if (false) {
  console.log("Hello World")
}

class Person {}
