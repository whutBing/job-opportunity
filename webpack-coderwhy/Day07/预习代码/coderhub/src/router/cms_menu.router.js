const KoaRouter = require('@koa/router')
const { create, list } = require('../controller/cms_menu.controller')
const { verifyAuth } = require('../middleware/login.middleware')

const menuRouter = new KoaRouter({ prefix: "/menu" })

menuRouter.post("/", verifyAuth, create)
menuRouter.get("/", verifyAuth, list)

module.exports = menuRouter
