const KoaRouter = require('@koa/router')
const { create, list, detail, update, addLabels } = require('../controller/moment.controller')
const { verifyLabels } = require('../middleware/label.middleware')
const {
  verifyAuth, verifyPermission, verifyPermission2
} = require('../middleware/login.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
momentRouter.post('/', verifyAuth, create)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission2, update)

// 给moment分配标签
momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission2, verifyLabels, addLabels)

module.exports = momentRouter
