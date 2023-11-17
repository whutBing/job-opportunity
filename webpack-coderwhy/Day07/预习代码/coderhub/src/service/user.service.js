const connection = require('../app/database')
const conn = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user
    const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'
    const result = await conn.execute(statement, [name, password])
    return result
  }

  async getUserByName(name) {
    const statement = 'SELECT * FROM `user` WHERE name = ?;'
    const [result] = await conn.execute(statement, [name])
    return result
  }

  async saveAvatarUrl(avatarUrl, userId) {
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [ avatarUrl, userId ])
    return result
  }

  async getUserById(userId) {
    const statement = `
      SELECT
        u.id id, u.name name,
        JSON_OBJECT("id", role.id, "name", role.name, "intro", role.intro) role
      FROM user u
      LEFT JOIN role ON role.id = u.role_id
      WHERE u.id = ?;
    `
    const [result] = await connection.query(statement, [userId])
    return result
  }
}

module.exports = new UserService()
