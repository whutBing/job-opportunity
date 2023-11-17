const { spawn } = require('child_process')

const commandSpawn = (...args) => {
  return new Promise((resolve) => {
    const childProgress = spawn(...args)
    childProgress.stdout.pipe(process.stdout)
    childProgress.stderr.pipe(process.stderr)

    childProgress.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn
}
