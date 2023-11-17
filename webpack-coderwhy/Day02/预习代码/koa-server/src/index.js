const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: "/users" })

userRouter.get("/list", (ctx, next) => {
  console.log(ctx.headers)
  ctx.body = ["abc", "cba", "nba"]
})
app.use(userRouter.routes())

app.listen(8000, () => {
  console.log('koa服务器启动成功~')
})
