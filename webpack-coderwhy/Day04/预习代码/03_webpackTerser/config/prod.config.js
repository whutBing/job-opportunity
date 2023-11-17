const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const glob = require('glob')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: false,
  // 优化配置
  optimization: {
    usedExports: true,
    // 设置生成的chunkId的算法
    // development: named
    // production: deterministic(确定性)
    // webpack4中使用: natural
    chunkIds: 'deterministic',
    // runtime的代码是否抽取到单独的包中(早Vue2脚手架中)
    runtimeChunk: {
      name: "runtime"
    },
    // 分包插件: SplitChunksPlugin
    splitChunks: {
      chunks: "all",
      // 当一个包大于指定的大小时, 继续进行拆包
      // maxSize: 20000,
      // // 将包拆分成不小于minSize的包
      // minSize: 10000,
      minSize: 10,

      // 自己对需要进行拆包的内容进行分包
      cacheGroups: {
        utils: {
          test: /utils/,
          filename: "js/[id]_utils.js"
        },
        vendors: {
          // /node_modules/
          // window上面 /\
          // mac上面 /
          test: /[\\/]node_modules[\\/]/,
          filename: "js/[id]_vendors.js"
        }
      }
    },
    // 代码优化: TerserPlugin => 让代码更加简单 => Terser
    // minimize: true,
    // minimizer: [
    //   // JS代码简化
    //   new TerserPlugin({
    //     extractComments: false,
    //     terserOptions: {
    //       compress: {
    //         unused: true,
    //         arguments: true
    //       },
    //       mangle: true,
    //       toplevel: true,
    //       keep_fnames: true
    //     }
    //   }),
    //   // CSS代码简化
    //   new CssMinimizerPlugin({
    //     parallel: true
    //   })
    // ]
  },
  plugins: [
    // 完成css的提取
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name]_chunk.css'
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, "../src")}/**/*`, { nodir: true }),
      safelist: function() {
        return {
          standard: []
        }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionWebpackPlugin({
      test: /\.(css|js)$/,
      minRatio: 1,
      algorithm: 'gzip'
    })
  ]
}