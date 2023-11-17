import { sum } from './utils/math'
const { formatTime } = require('./utils/format')

const message = "Hello World"
console.log(message)

const foo = () => {
  console.log('foo function')
}
foo()

// console.log(age)

// 计算结果
console.log(sum(20, 30))
console.log(formatTime())
