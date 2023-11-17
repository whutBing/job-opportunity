const KoaRouter = require('@koa/router')
const { saveAvatarInfo } = require('../controller/file.controller')
const { handleAvatar } = require('../middleware/file.middleware')
const { verifyAuth } = require('../middleware/login.middleware')

const fileRouter = new KoaRouter({ prefix: "/file" })

fileRouter.post('/avatar', verifyAuth, handleAvatar, saveAvatarInfo)

module.exports = fileRouter
