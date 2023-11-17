const mysql2 = require('mysql2')

const connections = mysql2.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub_demo',
  user: 'root',
  password: 'Coderwhy888.'
})

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub_demo',
  user: 'root',
  password: 'Coderwhy888.'
})


connections.getConnection((err, conn) => {
  conn.connect(err => {
    if (err) {
      console.log('连接数据库失败:', err)
    } else {
      console.log('连接数据库成功!')
    }
  })
})

module.exports = connections.promise()
module.exports.connection = connection.promise()
