import { sum } from './utils/math'
const { formatTime } = require('./utils/format')
import axios from 'axios'
// import "core-js/stable"
// import "regenerator-runtime/runtime"

import React from 'react'
import ReactDom from 'react-dom/client'
import App from './react/App'

import parseLyric from './ts/parse-lyric'

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

// 使用includes方法
console.log(message.includes("Hello"))

// 渲染React
const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(<App/>)

console.log(parseLyric("哈哈哈"))

// 网络请求
axios.get("/api/users/list").then(res => {
  console.log(res)
})
