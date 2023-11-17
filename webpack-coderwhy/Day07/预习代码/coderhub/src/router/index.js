const fs = require('fs')

const registerRoutes = function(app) {
  console.log(__dirname)
  fs.readdirSync(__dirname).forEach(file => {
    if (!file.endsWith('router.js')) return
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = registerRoutes