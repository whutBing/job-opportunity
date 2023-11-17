const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')

module.exports = {
  input: "./src/index.js",
  output: [
    {
      format: "umd",
      name: "whyUtils",
      file: "dist/why.umd.js",
      globals: {
        lodash: "_"
      }
    }
  ],
  external: ["lodash"],
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled"
    }),
    commonjs(),
    resolve(),
    terser()
  ]
}
