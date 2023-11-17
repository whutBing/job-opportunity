const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ProvidePlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const smp = new SpeedMeasurePlugin()

const commonConfig = function(isProd) {
  return {
    entry: './src/main.js',
    output: {
      clean: true,
      path: path.resolve(__dirname, '../build'),
      // placeholder
      filename: 'js/[name]-bundle.js',
      // 单独针对分包的文件进行命名
      chunkFilename: 'js/[name]_chunk.js',
      // publicPath: 'http://coderwhycdn.com/'
    },
    resolve: {
      extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.ts$/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            // 'style-loader', //开发阶段
            // MiniCssExtractPlugin.loader, // 生产阶段
            isProd? MiniCssExtractPlugin.loader: 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        cache: true,
        minify: isProd ? {
          removeComments: true,
          // collapseWhitespace: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          useShortDoctype: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: false,
          minifyCSS: true,
          minifyJS: {
            mangle: {
              toplevel: true
            }
          }
        }: false
      }),
      new ProvidePlugin({
        axios: ['axios', 'default'],
        // get: ['axios', 'get'],
        dayjs: 'dayjs'
      }),
      new BundleAnalyzerPlugin()
    ]
  }
}

module.exports = function(env) {
  const isProduction = env.production
  const mergeConfig = isProduction ? prodConfig: devConfig
  return smp.wrap(merge(commonConfig(isProduction), mergeConfig))
}