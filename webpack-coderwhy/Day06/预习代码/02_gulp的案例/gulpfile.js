const { src, dest, series, parallel, watch } = require('gulp')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const less = require('gulp-less')
const inject = require('gulp-inject')

const browserSync = require('browser-sync')

const htmlTask = () => {
  return src('./src/**.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('./dist'))
}

const jsTask = () => {
  return src('./src/**/*.js', { base: "./src" })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser({ mangle: { toplevel: true } }))
    .pipe(dest('./dist'))
}

const lessTask = () => {
  return src('./src/**/*.less', { base: "./src" })
    .pipe(less())
    .pipe(dest('./dist'))
}

const injectHtml = () => {
  return src('./dist/*.html')
    .pipe(inject(src(["./dist/**/*.js", "./dist/**/*.css"]), { relative: true }))
    .pipe(dest('./dist'))
}

// 搭建本地服务
const bs = browserSync.create()
const serve = () => {
  watch("./src/*.html", series(htmlTask, injectHtml))
  watch("./src/**/*.js", series(jsTask, injectHtml))
  watch("./src/**/*.less", series(lessTask, injectHtml))

  bs.init({
    port: 8080,
    open: true,
    files: "./dist/*",
    server: {
      baseDir: "./dist"
    }
  })
}

const buildTask = series(parallel(htmlTask, jsTask, lessTask), injectHtml)
const serveTask = series(buildTask, serve)

module.exports = {
  buildTask,
  serveTask
}
