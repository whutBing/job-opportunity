const labelService = require("../service/label.service")

const verifyLabels = async (ctx, next) => {
  const { labels } = ctx.request.body
  console.log(labels)

  const newLabels = []
  for (const name of labels) {
    const labelResult = await labelService.getLabelByName(name)
    const label = { name }
    if (labelResult) {
      label.id = labelResult.id
    } else {
      const result = await labelService.create(name)
      label.id = result.insertId
    }
    newLabels.push(label)
  }

  ctx.labels = newLabels
  await next()
}

module.exports = {
  verifyLabels
}