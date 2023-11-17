const BaseController = require("./base.controller");
const roleService = require('../service/cms_role.service')

class RoleController extends BaseController {
  async create(ctx, next) {
    // 1.获取信息
    const role = ctx.request.body
    const roleInfo = { name: role.name, intro: role.intro }
    const menuList = role.menuList

    // 2.创建角色
    const result = await roleService.createData(roleInfo)

    // 3.获取insertId
    if (menuList) {
      const insertId = result.insertId
      await roleService.assignMenu(insertId, menuList)
    }

    // 4.返回结果
    ctx.body = {
      code: 0,
      message: "创建角色成功",
      data: result
    }
  }

  async remove(ctx, next) {
    const roleId = ctx.params.roleId
    const result = await roleService.removeDataById(roleId)
    ctx.body = {
      code: 0,
      message: "删除角色成功",
      data: result
    }
  }

  async update(ctx, next) {
    const role = ctx.request.body
    const roleId = ctx.params.roleId
    const menuList = role.menuList
    if (menuList) {
      delete role.menuList
    }
    console.log(role)
    const result = await roleService.updateData(roleId, role)

    await roleService.assignMenu(roleId, menuList)

    ctx.body = {
      code: 0,
      message: "更新角色成功",
      data: result
    }
  }

  async list(ctx, next) {
    const { offset = 0, size = 10 } = ctx.query
    const result = await roleService.queryList(Number(offset), Number(size))
    ctx.body = {
      code: 0,
      message: "获取角色列表",
      data: result
    }
  }

  async detail(ctx, next) {
    const roleId = ctx.params.roleId
    const result = await roleService.queryDetail(roleId)
    ctx.body = {
      code: 0,
      message: "获取角色列表",
      data: result[0]
    }
  }

  async assinPermission(ctx, next) {
    // 1.获取信息
    const { roleId, menuList } = ctx.request.body
    // 2.分配权限
    const result = await roleService.assignMenu(roleId, menuList)
    ctx.body = {
      code: 0,
      message: result
    }
  }

  async roleMenu(ctx, next) {
    const roleId = ctx.params.roleId
    const roleMenu = await roleService.getRoleMenu(roleId)
    ctx.body = {
      code: 0,
      message: "获取菜单成功~",
      data: roleMenu
    }
  }

  async roleMenuId(ctx, next) {
    const roleId = ctx.params.roleId
    const menuIds = await roleService.getRoleMenuIds(roleId)
    ctx.body = {
      code: 0,
      message: "获取菜单ids成功~",
      data: menuIds
    }
  }
}

module.exports = new RoleController()
