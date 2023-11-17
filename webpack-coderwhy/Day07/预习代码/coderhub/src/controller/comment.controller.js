const commentService = require("../service/comment.service")

class CommentController {
  async create(ctx, next) {
    const { id } = ctx.user
    const { content, momentId } = ctx.request.body

    // 存储到数据库
    const result = await commentService.create(id, content, momentId)

    ctx.body = {
      code: 0,
      data: result
    }
  }

  async reply(ctx, next) {
    const { id } = ctx.user
    const { content, momentId, commentId } = ctx.request.body
    const result = await commentService.reply(id, content, momentId, commentId)
    ctx.body = {
      code: 0,
      data: result
    }
  }
}

module.exports = new CommentController()
