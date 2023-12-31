const connection = require("../app/database");

class LabelService {
  async create(name) {
    const statement = `INSERT INTO label (name) VALUES (?);`;
    const [result] = await connection.execute(statement, [name])
    return result
  }

  async getLabelByName(name) {
    const statement = `SELECT * FROM label where name = ?`;
    const [result] = await connection.execute(statement, [name])
    return result[0]
  }
}

module.exports = new LabelService()
