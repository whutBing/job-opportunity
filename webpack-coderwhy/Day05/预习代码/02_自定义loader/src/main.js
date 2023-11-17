import code from "./doc.md"
import "highlight.js/styles/default.css"
import "./style.css"

const message = "Hello World"

const foo = () => {
  console.log("foo function")
}
foo()

console.log("哈哈哈哈")

document.body.innerHTML = code
