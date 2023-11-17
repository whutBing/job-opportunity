const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const registerRoutes = require('../router')
const errorHandle = require('./error-handle')

const app = new Koa()

app.use(bodyParser())
registerRoutes(app)

app.on('error', errorHandle)

module.exports = app