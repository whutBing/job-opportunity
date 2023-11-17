const fileService = require("../service/file.service")
const userService = require("../service/user.service")
const { APP_HOST, APP_PORT } = require('../app/config.js')

class FileController {
  async saveAvatarInfo(ctx, next) {
    // 1.获取图片信息
    const { filename, mimetype, size } = ctx.request.file
    const { id } = ctx.user

    // 2.保存到数据库中
    const result = await fileService.saveAvatarInfo(filename, mimetype, size, id)

    // 3.将最新上传的头像设置到用户信息中
    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/avatar/${id}`
    const result2 = await userService.saveAvatarUrl(avatarUrl, id)

    ctx.body = {
      code: 0,
      message: '头像上传成功~',
      data: result
    }
  }
}

module.exports = new FileController()
