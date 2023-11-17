const menuService = require("../service/cms_menu.service");
const BaseController = require("./base.controller");

class MenuController extends BaseController {
  async create(ctx, next) {
    const menu = ctx.request.body;
    const result = await menuService.createData(menu);
    ctx.body = {
      code: 0,
      message: "创建菜单成功~",
      data: result,
    };
  }

  async list(ctx) {
    const result = await menuService.queryList();
    ctx.body = {
      code: 0,
      message: "创建菜单成功~",
      data: result,
    };
  }
}

module.exports = new MenuController();
