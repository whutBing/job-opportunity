import { sum } from './utils/math'
import { formatDate } from './utils/format'
import _ from 'lodash'
// const { formatDate } = require('./utils/format')

const foo = () => {
  console.log("foo function exec~")
  console.log(_.join(["abc", "cba"]))
  console.log("Hello World".includes("Hello"))
}

export {
  foo,
  sum,
  formatDate
}
