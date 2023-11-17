const fs = require('fs')
const userService = require('../service/user.service')
const fileService = require('../service/file.service')
const { AVATAR_PATH } = require('../constants/file-path')

class UserController {
  async create(ctx, next) {
    // 1.获取传递过来的参数
    const user = ctx.request.body
    console.log(user)

    // 2.将user存储到数据库中
    const result = await userService.create(user)
    
    ctx.body = {
      code: 0,
      message: '创建用户成功'
    }
  }

  async showAvatar(ctx, next) {
    // 1.获取用户id
    const { userId } = ctx.params

    // 2.查询用户头像
    const avatarInfo = await fileService.queryAvatarByUserId(userId)

    // 3.返回头像
    if (avatarInfo) {
      const { filename, mimetype } = avatarInfo
      ctx.type = mimetype
      ctx.body = fs.createReadStream(`${AVATAR_PATH}/${filename}`)
    } else {
      ctx.body = {
        code: -3001,
        message: '未找到相关的资源'
      }
    }
  }

  async detail(ctx, next) {
    const userId = ctx.params.userId
    const result = await userService.getUserById(userId)
    ctx.body = {
      code: 0,
      message: "获取用户信息~",
      data: result
    }
  }
}

module.exports = new UserController()
