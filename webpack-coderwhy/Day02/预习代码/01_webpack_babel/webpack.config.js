const path = require('path')

module.exports = {
  mode: "development",
  devtool: false,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'bundle.js'
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
      }
    ]
  }
}
