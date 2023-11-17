const { NodeSSH } = require('node-ssh')

class AutoUploadWebpackPlugin {
  constructor(options) {
    this.ssh = new NodeSSH()
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync("AutoUploadWebpackPlugin", async (compilation, callback) => {
      console.log('内容已经上传到服务器~')
      // 1.获取输出的文件夹
      const outputPath = compilation.outputOptions.path
      console.log(outputPath)

      // 2.通过ssh连接服务器
      await this.connectServer()

      // 3.删除原有目录中的内容
      const serverDir = this.options.remotePath
      await this.ssh.execCommand(`rm -rf ${serverDir}/*`)

      // 4.上传文件到服务器中
      await this.uploadFiles(outputPath, serverDir)

      // 5.关闭ssh
      this.ssh.dispose()

      callback()
    })
  }

  async connectServer() {
    await this.ssh.connect({
      host: this.options.host,
      username: this.options.username,
      password: this.options.password
    })

    console.log('连接成功')
  }

  async uploadFiles(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true,
      concurrency: 10
    })
    if (status) {
      console.log('上传服务器成功')
    } else {
      console.log('上传服务器失败')
    }
  }
}

module.exports = AutoUploadWebpackPlugin
