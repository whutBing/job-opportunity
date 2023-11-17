const path = require('path')

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: '[name].bundle.js',
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
}