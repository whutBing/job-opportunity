const connection = require("../app/database")

class AuthService {
  async checkMoment(momentId, id) {
    const statement = 'SELECT * FROM moment WHERE id = ? AND user_id = ?;'
    const [result] = await connection.execute(statement, [momentId, id])
    return !!result.length
  }

  async checkResource(sourceType, momentId, id) {
    const statement = `SELECT * FROM ${sourceType} WHERE id = ? AND user_id = ?;`
    const [result] = await connection.execute(statement, [momentId, id])
    return !!result.length
  }
}

module.exports = new AuthService()
