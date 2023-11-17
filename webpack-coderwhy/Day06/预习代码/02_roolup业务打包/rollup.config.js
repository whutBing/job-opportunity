const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");
const terser = require("@rollup/plugin-terser");
const html = require("@rollup/plugin-html");

const vuePlugin = require("rollup-plugin-vue");
const replace = require("@rollup/plugin-replace");

const postcss = require("rollup-plugin-postcss");

const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");

const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  commonjs(),
  resolve(),
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
    preventAssignment: true,
  }),
  vuePlugin({
    target: "browser",
  }),
  postcss()
];

if (isProduction) {
  plugins.push(terser())
} else {
  const devPlugins = [
    serve({
      open: true,
      port: 8080,
      contentBase: ".",
    }),
    livereload()
  ]
  plugins.push(...devPlugins)
}

module.exports = {
  input: "./src/index.js",
  output: [
    {
      format: "iife",
      file: "dist/js/why.browser.js",
    },
  ],
  plugins: plugins
};
