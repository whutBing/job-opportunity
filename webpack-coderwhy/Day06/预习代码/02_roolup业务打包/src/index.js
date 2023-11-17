import { sum } from './utils/math'
import { formatDate } from './utils/format'
import _ from 'lodash'

import { createApp } from 'vue'
import App from './vue/App.vue'

const foo = () => {
  console.log("foo function exec~")
  console.log(_.join(["abc", "cba"]))
  console.log("Hello World".includes("Hello"))
}

foo()

console.log(sum(20, 30))
console.log(formatDate())

// Vue App
const app = createApp(App)
app.mount(document.querySelector("#app"))

console.log("哈哈哈哈哈哈----")
