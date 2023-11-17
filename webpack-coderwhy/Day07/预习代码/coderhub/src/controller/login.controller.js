const { PUBLIC_KEY, PRIVATE_KEY } = require('../app/config')
const jwt = require('jsonwebtoken')

class LoginController {
  login(ctx, next) {
    const { id, name } = ctx.user

    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: 30 * 24 * 60 * 60
    })

    ctx.body = {
      id,
      name,
      token
    }
  }

  auth(ctx, next) {
    ctx.body = `登录成功~`
  }
}

module.exports = new LoginController()
