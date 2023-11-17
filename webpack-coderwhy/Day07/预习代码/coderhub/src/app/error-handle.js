const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_ALREADY_EXISTS, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, UNAUTHORIZATION, OPERATION_IS_NOT_ALLOWED } = require("../constants/error-types")

function errorHandle(error, ctx) {
  let message = error
  let code = 0
  switch(error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或者密码必须传入~'
      break
    case NAME_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经存在, 请检测用户名~'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户名不存在, 请检查你的用户名~'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '密码错误, 请检查你的密码~'
      break
    case UNAUTHORIZATION:
      code = -1005
      message = 'token无效~'
      break
    case OPERATION_IS_NOT_ALLOWED:
      code = -2001
      message = '您没有权限进行此操作~~'
      break
  }

  ctx.body = {
    code,
    message
  }
}

module.exports = errorHandle
