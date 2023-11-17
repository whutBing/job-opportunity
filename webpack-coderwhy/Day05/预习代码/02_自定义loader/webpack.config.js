const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  resolveLoader: {
    modules: ["node_modules", "./hy-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // {
          //   loader: "hy_loader01.js",
          //   options: {
          //     name: "why",
          //     age: 18
          //   }
          // },
          // "hy_loader02.js",
          // "hy_loader03.js",
          // "hy_async_loader",
          {
            loader: "hybabel-loader",
            options: {
              // presets: [
              //   "@babel/preset-env"
              // ]
              plugins: [
                "@babel/plugin-transform-arrow-functions"
              ]
            }
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     "hy_loader01.js"
      //   ]
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //     "hy_loader02.js"
      //   ],
      //   enforce: "pre"
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //     "hy_loader03.js"
      //   ]
      // }
      {
        test: /\.md$/,
        use: [
          // "html-loader",
          "hymd_loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}