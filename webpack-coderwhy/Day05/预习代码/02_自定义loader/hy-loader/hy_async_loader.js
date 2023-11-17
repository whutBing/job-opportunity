module.exports = function(content) {
  const callback = this.async()
  setTimeout(() => {
    console.log(content)
    callback(null, content + "async")
  }, 2000);
}