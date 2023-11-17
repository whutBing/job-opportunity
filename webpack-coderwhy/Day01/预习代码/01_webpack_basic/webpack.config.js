const path = require('path')

module.exports = {
  mode: "development",
  devtool: false,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'bundle.js'
  },
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: [
    //           ["@babel/preset-env", { targets: "defaults" }]
    //         ]
    //       }
    //     }
    //   }
    // ]
  }
}
