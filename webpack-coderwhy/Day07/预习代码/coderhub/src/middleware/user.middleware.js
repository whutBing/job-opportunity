const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_ALREADY_EXISTS } = require("../constants/error-types")
const userService = require("../service/user.service")
const { md5password } = require("../utils/password-handle")

async function verifyUser(ctx, next) {
  // 1.取出用户名和密码
  const { name, password } = ctx.request.body

  // 2.判断是否有传入
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 3.查询用户是否存在
  const users = await userService.getUserByName(name)
  if (users.length) {
    return ctx.app.emit('error', NAME_ALREADY_EXISTS, ctx)
  }

  // 4.通过验证, 调用next
  await next()
}

async function handlePassword(ctx, next) {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)

  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}