const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "production",
  externals: {
    axios: "axios"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      // 拆分包的最小体积
      // 如果一个包拆分出来达不到minSize, 那么这个包就不会拆分(会被合并到其他包中)
      minSize: 100,
      // 将大于maxSize的包, 拆分成不小于minSize的包()
      // maxSize: 10000,
      cacheGroups: {
        venders: {
          test: /[\\/]node_modules[\\/]/,
          filename: "[id]_[chunkhash:6]_vender.js"
        },
        foo: {
          test: /utils/,
          filename: "[id]_[chunkhash:6]_util.js"
        }
      }
    },
    chunkIds: 'deterministic',
    runtimeChunk: {
      name: "runtime"
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}