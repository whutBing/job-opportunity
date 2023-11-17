import { sum } from './utils/math'
const { formatTime } = require('./utils/format')
import axios from 'axios'
import dayjs from 'dayjs'
import "./css/style.css"
// import { ba } from './utils/bar'
// import "core-js/stable"
// import "regenerator-runtime/runtime"

import React from 'react'
import ReactDom from 'react-dom/client'
import App from './react/App'

import parseLyric from './ts/parse-lyric'

const message = "Hello World"
console.log(message)


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
let baseURL = '/api'
console.log(process.env.NODE_ENV )
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://localhost:8000'
}
axios.defaults.baseURL = baseURL
axios.get("/users/list").then(res => {
  console.log(res)
})

// import导入
const btnEl = document.createElement('button')
btnEl.innerText = "哈哈哈"
btnEl.onclick = function() {
  import(
    /* webpackChunkName: 'bar' */
    /* webpackPrefetch: true */
    './bar').then(res => {
    console.log(res.default())
    console.log(res.bar())
  })

  import('./css/index.css')
}
document.body.append(btnEl)


// day.js
console.log(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))
