const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function() {
  return {
    mode: "development",
    devtool: false,
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: '[name].bundle.js',
      clean: true,
      chunkFilename: 'chunk_[id]_[name].js',
      // publicPath: 'http://coderwhy.com/cdn/'
    },
    resolve: {
      extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
    },
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
    devServer: {
      static: ["public", "content"],
      compress: true,
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          pathRewrite: {
            "^/api": ""
          },
          // changeOrigin: true
        }
      },
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.ts$/,
          use: {
            loader: "babel-loader"
          }
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
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new ProvidePlugin({
        dayjs: 'dayjs'
      }),
      new MiniCssExtractPlugin({
        
      })
    ],
    performance: {
      hints: false
    }
  }
}
