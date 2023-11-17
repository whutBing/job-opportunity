"use strict";
(self["webpackChunkbabel_core_demo"] = self["webpackChunkbabel_core_demo"] || []).push([[179],{

/***/ "./src/main.js":
/*!*********************************!*\
  !*** ./src/main.js + 1 modules ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./src/utils/foo.js
var foo = __webpack_require__("./src/utils/foo.js");
;// CONCATENATED MODULE: ./src/css/style.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.2.0/node_modules/axios/lib/axios.js + 39 modules
var axios = __webpack_require__("./node_modules/.pnpm/axios@1.2.0/node_modules/axios/lib/axios.js");
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/main.js






// import { bar } from './utils/bar'

// index.js作为入口
var message = "Hello Main";
console.log(message);
function bar() {
  console.log('bar function exec~');
}
bar();

// 使用axios
axios["default"].get('http://123.207.32.32:8000/home/multidata').then(function (res) {
  console.log(res);
});
var btn1 = document.createElement('button');
var btn2 = document.createElement('button');
btn1.textContent = '关于';
btn2.textContent = '分类';
document.body.append(btn1);
document.body.append(btn2);
btn1.onclick = function () {
  __webpack_require__.e(/*! import() | about */ 443).then(__webpack_require__.bind(__webpack_require__, /*! ./router/about */ "./src/router/about.js")).then(function (res) {
    res.about();
    res.default();
  });
};
btn2.onclick = function () {
  __webpack_require__.e(/*! import() | category */ 34).then(__webpack_require__.t.bind(__webpack_require__, /*! ./router/category */ "./src/router/category.js", 23));
};
(0,foo.foo)();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/startup prefetch */
/******/ !function() {
/******/ 	__webpack_require__.O(0, [179], function() {
/******/ 		__webpack_require__.E(443);
/******/ 		__webpack_require__.E(34);
/******/ 	}, 5);
/******/ }();
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [957,526], function() { return __webpack_exec__("./src/main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);