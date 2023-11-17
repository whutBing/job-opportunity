const KoaRouter = require('@koa/router')
const userRouter = new KoaRouter({ prefix: '/users' })

const {
  verifyUser, handlePassword
} = require('../middleware/user.middleware')
const {
  verifyAuth
} = require('../middleware/login.middleware')
const {
  create,
  showAvatar,
  detail
} = require('../controller/user.controller')

userRouter.post('/', verifyUser, handlePassword, create)
userRouter.get('/avatar/:userId', showAvatar)
userRouter.get("/:userId", verifyAuth, detail)

module.exports = userRouter
