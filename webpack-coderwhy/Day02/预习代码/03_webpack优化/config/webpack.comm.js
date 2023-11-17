const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { merge } = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const commonConfig = (isProduction) => {
  return {
    mode: "development",
    devtool: false,
    entry: './src/main.js',
    output: {
      path: path.resolve(process.cwd(), "./build"),
      filename: '[name].bundle.js',
      clean: true,
      chunkFilename: 'chunk_[id]_[name].js',
      // publicPath: 'http://coderwhy.com/cdn/'
    },
    resolve: {
      extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
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
            isProduction? MiniCssExtractPlugin.loader: 'style-loader',
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
      })
    ]
  }
}

module.exports = function(env) {
  const isProduction = env.production
  const config = isProduction ? prodConfig: devConfig
  return merge(commonConfig(isProduction), config)
}
