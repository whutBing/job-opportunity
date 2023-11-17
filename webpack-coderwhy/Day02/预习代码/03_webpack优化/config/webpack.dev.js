const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: "development",
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
  }
}
