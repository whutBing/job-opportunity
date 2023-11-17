(()=>{"use strict";var e={386:(e,r,t)=>{t.d(r,{Z:()=>u});var n=t(401),o=t.n(n),a=t(99),c,s=t.n(a)()(o());s.push([e.id,"body {\n  background-color: orange;\n}\n\n.title {\n  font-size: 18px;\n  color: blue;\n}\n",""]);const u=s},99:e=>{e.exports=function(e){var r=[];return r.toString=function toString(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function i(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(c[u]=!0)}for(var _=0;_<e.length;_++){var p=[].concat(e[_]);n&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},401:e=>{e.exports=function(e){return e[1]}},906:e=>{var r=[];function getIndexByIdentifier(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function modulesToDom(e,t){for(var n={},o=[],a=0;a<e.length;a++){var c=e[a],s=t.base?c[0]+t.base:c[0],u=n[s]||0,_="".concat(s," ").concat(u);n[s]=u+1;var p=getIndexByIdentifier(_),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(l);else{var d=addElementStyle(l,t);t.byIndex=a,r.splice(a,0,{identifier:_,updater:d,references:1})}o.push(_)}return o}function addElementStyle(e,r){var t=r.domAPI(r),n;return t.update(e),function updater(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,t){var n=modulesToDom(e=e||[],t=t||{});return function update(e){e=e||[];for(var o=0;o<n.length;o++){var a,c=getIndexByIdentifier(n[o]);r[c].references--}for(var s=modulesToDom(e,t),u=0;u<n.length;u++){var _,p=getIndexByIdentifier(n[u]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}n=s}}},486:e=>{var r={};function getTarget(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}function insertBySelector(e,r){var t=getTarget(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}e.exports=insertBySelector},102:e=>{function insertStyleElement(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}e.exports=insertStyleElement},918:(e,r,t)=>{function setAttributesWithoutAttributes(e){var r=t.nc;r&&e.setAttribute("nonce",r)}e.exports=setAttributesWithoutAttributes},814:e=>{function apply(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}function removeStyleElement(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}function domAPI(e){var r=e.insertStyleElement(e);return{update:function update(t){apply(r,e,t)},remove:function remove(){removeStyleElement(r)}}}e.exports=domAPI},653:e=>{function styleTagTransform(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}e.exports=styleTagTransform}},r={};function __webpack_require__(t){var n=r[t];if(void 0!==n)return n.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,__webpack_require__),o.exports}__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.nc=void 0,(()=>{var e=__webpack_require__(906),r=__webpack_require__.n(e),t=__webpack_require__(814),n=__webpack_require__.n(t),o=__webpack_require__(486),a=__webpack_require__.n(o),c=__webpack_require__(918),s=__webpack_require__.n(c),u=__webpack_require__(102),_=__webpack_require__.n(u),p=__webpack_require__(653),l=__webpack_require__.n(p),d=__webpack_require__(386),f={};f.styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=_();var v=r()(d.Z,f);const m=d.Z&&d.Z.locals?d.Z.locals:void 0,obj__object_Object_=function(){return"foo"};function bar(e,r){console.log(arguments[0],arguments[1])}class Person{}})()})();