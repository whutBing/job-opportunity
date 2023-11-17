const KoaRouter = require('@koa/router')
const { login, auth } = require('../controller/login.controller')
const { verifyLogin, verifyAuth } = require('../middleware/login.middleware')

const loginRouter = new KoaRouter("/")

loginRouter.post('/login', verifyLogin, login)
loginRouter.get('/auth/test', verifyAuth, auth)

module.exports = loginRouter
