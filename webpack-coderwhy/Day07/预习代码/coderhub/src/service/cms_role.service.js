const connection = require('../app/database');
const cms_menuService = require('./cms_menu.service');

class RoleService {
  async createData(data) {
    const statement = `INSERT INTO role SET ?;`;
    const [result] = await connection.query(statement, data)
    return result
  }

  async removeDataById(id) {
    const statement = `DELETE FROM role WHERE id = ?;`
    const [result] = await connection.query(statement, id)
    return result
  }

  async updateData(id, data) {
    const statement = `UPDATE role SET ? WHERE id = ?;`
    const [result] = await connection.query(statement, [data, id])
    return result
  }

  async queryList(offset, size) {
    const statement = `SELECT * FROM role LIMIT ?, ?;`
    const [result] = await connection.query(statement, [offset, size])
    return result
  }

  async queryDetail(id) {
    const statement = `SELECT * FROM role WHERE id = ?;`
    const [result] = await connection.query(statement, [id])
    return result
  }


  // 权限管理
  async deleteMenu(roleId) {
    const statement = `DELETE FROM role_menu WHERE roleId = ?;`
    const [result] = await connection.query(statement, [roleId])
    return result
  }

  async insertMenu(roleId, menuId) {
    const statement = `INSERT INTO role_menu (roleId, menuId) VALUES (?, ?);`
    const [result] = await connection.query(statement, [roleId, menuId])
    return result
  }

  async assignMenu(roleId, menuList) {
    // 1.删除之前的权限
    await this.deleteMenu(roleId)

    // 2.插入新的数据
    const promises = []
    for (const menuId of menuList) {
      promises.push(this.insertMenu(roleId, menuId)) 
    }
    await Promise.all(promises)

    return '分配权限成功~'
  }

  // 获取菜单
  async getRoleMenu(roleId) {
    // 1.获取完整的菜单
    const wholeMenu = await cms_menuService.queryList()

    // 2.获取当前角色的ids
    const roleInfo = await this.getRoleMenuIds(roleId)
    const menuIds = roleInfo.menuIds

    function filterMenu(menu) {
      const newMenu = []
      for (const item of menu) {
        if (item.children) {
          item.children = filterMenu(item.children)
        }
        if (menuIds.includes(item.id)) {
          newMenu.push(item)
        }
      }
      return newMenu
    }
    const roleMenu = filterMenu(wholeMenu)
    return roleMenu
  }

  async getRoleMenuIds(roleId) {
    const statement = `
      SELECT
        r.id id, r.name name, r.intro intro,
        JSON_ARRAYAGG(rm.menuId) menuIds
      FROM role r
      LEFT JOIN role_menu rm ON r.id = rm.roleId
      WHERE r.id = ?
      GROUP BY rm.roleId;
    `
    const [result] = await connection.query(statement, [ roleId ])
    return result[0]
  }
}

module.exports = new RoleService()
