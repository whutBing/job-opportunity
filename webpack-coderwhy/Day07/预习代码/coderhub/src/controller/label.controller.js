const labelService = require("../service/label.service")

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body
    console.log(name)
    const result = await labelService.create(name)
    ctx.body = {
      code: 0,
      message: '创建标签成功~',
      data: result
    }
  }
}

module.exports = new LabelController()
