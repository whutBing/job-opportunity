const path = require('path')
const { promisify } = require('util')
const { VUE_REPO } = require('../config/repo-config')
const compileEjs = require('../utils/compile_ejs')
const download = promisify(require('download-git-repo'))
const { commandSpawn } = require('../utils/termimal')
const writeFile = require('../utils/write_file')

const createProjectAction = async (project) => {
  try {
    // 1.clone项目
    await download(VUE_REPO, project, { clone: true })

    // 2.执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd': 'npm'
    await commandSpawn(command, ["install"], { cwd: `./${project}` })

    // 3.运行npm run serve
    await commandSpawn(command, ["run", "dev"], { cwd: `./${project}` })
  } catch (error) {
    console.log(error)
  }
}

const addComponentAction = async (cpnname, dest) => {
  // 1.编译ejs模板
  const compileResult = await compileEjs("component.vue.ejs", { name: cpnname })
  
  // 2.写入文件操作
  const targetPath = path.resolve(dest, `./${cpnname}.vue`)
  await writeFile(targetPath, compileResult)
}

module.exports = {
  createProjectAction,
  addComponentAction
}