const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login.middleware')
const {
  create,
  remove,
  update,
  list,
  detail,
  assinPermission,
  roleMenu,
  roleMenuId
} = require("../controller/cms_role.controller")

const roleRouter = new KoaRouter({ prefix: "/role" })

// role的基本增删改查
roleRouter.post("/", verifyAuth, create)
roleRouter.delete("/:roleId", verifyAuth, remove)
roleRouter.patch("/:roleId", verifyAuth, update)
roleRouter.get("/", verifyAuth, list)
roleRouter.get("/:roleId", verifyAuth, detail)

roleRouter.post("/assign", verifyAuth, assinPermission)
roleRouter.get("/:roleId/menu", verifyAuth, roleMenu)
roleRouter.get("/:roleId/menuIds", verifyAuth, roleMenuId)

module.exports = roleRouter

