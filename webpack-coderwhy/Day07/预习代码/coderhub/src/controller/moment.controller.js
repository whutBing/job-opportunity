const momentService = require("../service/moment.service")

class MomentController {
  async create(ctx, next) {
    // 1.获取内容
    const { content } = ctx.request.body
    const { id } = ctx.user
    console.log(content, id)

    // 2.通过service保存数据
    const result = await momentService.create(content, id)

    // 2.创建动态成功
    if (result) {
      ctx.body = {
        code: 0,
        message: '创建动态成功'
      }
    }
  }

  async list(ctx, next) {
    // 1.获取参数
    const { offset = 0, size = 10 } = ctx.query
    console.log(offset, size)

    // 2.查询数据库
    const result = await momentService.queryMomentList(String(offset), String(size))

    // 3.返回结果
    ctx.body = {
      code: 0,
      data: result
    }
  }

  async detail(ctx, next) {
    // 1.获取momentid
    const { momentId } = ctx.params

    // 2.查询数据库
    const result = await momentService.queryMomentById(momentId)

    // 3.返回结果
    ctx.body = {
      code: 0,
      data: result[0]
    }
  }

  async update(ctx, next) {
    const { momentId } = ctx.params
    const { content } = ctx.request.body
    const result = await momentService.update(content, momentId)
    ctx.body = {
      code: 0,
      data: result
    }
  }

  async addLabels(ctx, next) {
    // 1.取出参数
    const { labels } = ctx
    const { momentId } = ctx.params

    // 2.添加所有的标签
    for (const label of labels) {
      const isExists = await momentService.hasLabel(momentId, label.id)
      if (!isExists) {
        await momentService.addLabel(momentId, label.id)
      }
    }

    // 3.添加labels成功
    ctx.body = {
      code: 0,
      messsage: '状态添加标签成功~'
    }
  }
}

module.exports = new MomentController()
