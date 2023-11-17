import { sum, mul } from './utils/math'
import _ from 'lodash-es'
import { formatPrice } from './ts/format'
import "./css/style.css"
import "./css/theme.less"
import App from './vue/App.vue'
import { createApp } from 'vue'

import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactApp from './react/App'

console.log(sum(100, 200))
console.log(mul(100, 200))

console.log(_.join(["abc", "cba"]))

// 添加内容
const divEl = document.createElement('div')
divEl.textContent = "我是一段文字, 哈哈哈"
document.body.append(divEl)

// ts代码
console.log(formatPrice(100))

// Vue App
const app = createApp(App)
app.mount(document.querySelector("#app"))

// React App
const root = createRoot(document.querySelector("#root"))
root.render(<ReactApp/>)
