import axios from 'axios'

const foo = () => {
  console.log('foo function')
}
foo()

axios.get("/api/users/list").then(res => {
  console.log('index result:', res)
})
