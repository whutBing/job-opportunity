function formatTime() {
  return dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}

module.exports = {
  formatTime
}
