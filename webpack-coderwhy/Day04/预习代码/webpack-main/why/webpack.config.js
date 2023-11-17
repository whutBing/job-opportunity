const path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./build")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader"
			}
		]
	},
	plugins: []
};
