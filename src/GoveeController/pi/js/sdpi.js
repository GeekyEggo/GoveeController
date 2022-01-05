/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="%23d8d8d8"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg> */ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48px\" viewBox=\"0 0 24 24\" width=\"48px\" fill=\"%23d8d8d8\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* https://9elements.com/css-rule-order/#:~:text=So%20the%20order%20is%3A%20position,text%2D*%20%2C%20then%20word%2D*%20. */\r\n\r\n:root {\r\n    /* Box model */\r\n    --spacer: 4px;\r\n    --label-column-width: 103px;\r\n    \r\n    /* Background and typography */\r\n    --color-primary: #9a9a9a;\r\n    --color-primary-bg: #2d2d2d;\r\n    --color-secondary: #d8d8d8;\r\n    --color-secondary-bg: #3d3d3d;\r\n    --color-input-bg: #969696;\r\n    --font-size: 8pt;\r\n}\r\n\r\nhtml, body {\r\n    /* Box model */\r\n    margin: 0;\r\n    padding-top: 2px;\r\n\r\n    /* Background and typography */\r\n    background-color: var(--color-primary-bg);\r\n    color: var(--color-primary);\r\n    font-size: var(--font-size);\r\n    font-weight: normal;\r\n    font-family: Tahoma, Verdana, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\n/* Scrollbar */\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #999999;\r\n    outline: 1px solid slategrey;\r\n    border-radius: 8px;\r\n}\r\n\r\n/* Elements */\r\np {\r\n    margin: 0 0 var(--spacer) 0;\r\n}\r\np:last-child {\r\n    margin: 0;\r\n}\r\n\r\nul, ol {\r\n    margin: var(--spacer) 0;\r\n    padding-left: calc(var(--spacer) * 6);\r\n}\r\nli {\r\n    line-height: 1.5em;\r\n}\r\n\r\n\r\n/* Layout */\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n}\r\n.container > * > .row {\r\n    margin-bottom: calc(var(--spacer) * 2);\r\n}\r\n.row > * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.col-1 { width: calc(100% / 12); }\r\n.col-2 { width: calc((100% / 12) * 2); }\r\n.col-3 { width: calc((100% / 12) * 3); }\r\n.col-4 { width: calc((100% / 12) * 4); }\r\n.col-5 { width: calc((100% / 12) * 5); }\r\n.col-6 { width: calc((100% / 12) * 6); }\r\n.col-7 { width: calc((100% / 12) * 7); }\r\n.col-8 { width: calc((100% / 12) * 8); }\r\n.col-9 { width: calc((100% / 12) * 9); }\r\n.col-10 { width: calc((100% / 12) * 10); }\r\n.col-11 { width: calc((100% / 12) * 11); }\r\n.col-12 { width: 100%; }\r\n\r\n.offset-1 { margin-left: calc(100% / 12); }\r\n.offset-2 { width: calc((100% / 12) * 2); }\r\n.offset-3 { width: calc((100% / 12) * 3); }\r\n.offset-4 { width: calc((100% / 12) * 4); }\r\n.offset-5 { width: calc((100% / 12) * 5); }\r\n.offset-6 { width: calc((100% / 12) * 6); }\r\n.offset-7 { width: calc((100% / 12) * 7); }\r\n.offset-8 { width: calc((100% / 12) * 8); }\r\n.offset-9 { width: calc((100% / 12) * 9); }\r\n.offset-10 { width: calc((100% / 12) * 10); }\r\n.offset-11 { width: calc((100% / 12) * 11); }\r\n\r\n.f-stretch { flex-grow: 1; }\r\n\r\n.a-center-center {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* Layout (SDPI) */\r\n.col-label\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    \r\n    width: var(--label-column-width);\r\n    padding-right: 11px;\r\n    \r\n    text-align: right;\r\n}\r\n.col-content {\r\n    margin-left: var(--label-column-width);\r\n    width: 227px;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n.col-label + .col-content {\r\n    margin-left: 0;\r\n}\r\n\r\n\r\n/* Spacing */\r\n.p-0 { padding: 0; }\r\n.pt-0 { padding-top: 0; }\r\n.pr-0 { padding-right: 0; }\r\n.pb-0 { padding-bottom: 0; }\r\n.pl-0 { padding-left: 0; }\r\n\r\n.ps-2 {\r\n    padding-left: var(--spacer);\r\n    padding-right: var(--spacer);\r\n}\r\n\r\n.mr-2 { margin-right: calc(var(--spacer) * 2); }\r\n.mr-3 { margin-right: calc(var(--spacer) * 3); }\r\n\r\n.ml-2 { margin-left: calc(var(--spacer) * 2); }\r\n.ml-3 { margin-left: calc(var(--spacer) * 3); }\r\n\r\n/* Background and typography */\r\n.hidden {\r\n    display: none;\r\n    visibility: collapse;\r\n}\r\n\r\n:disabled {\r\n    cursor: default;\r\n    opacity: 0.5;\r\n}\r\n\r\n.refresh-icon,\r\n.refresh-icon:active {\r\n    height: 24px;\r\n    width: 24px;\r\n    \r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n}\r\n\r\n.text-right { text-align: right; }\r\n.text-center { text-align: center; }\r\n\r\n/* Form */\r\nbutton,\r\ninput,\r\nselect\r\n{\r\n    /* Box model */\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 0;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n\r\n    /* Background and typography */\r\n    color: var(--color-secondary);\r\n    font-size: var(--font-size);\r\n}\r\nbutton,\r\ninput:not([type='range']),\r\nselect {\r\n    background-color: var(--color-secondary-bg);\r\n}\r\ninput[type=\"text\"]\r\n{\r\n    padding: calc(var(--spacer) + 2px) var(--spacer);\r\n}\r\nselect\r\n{\r\n    /* Clipping */\r\n    text-overflow: ellipsis;\r\n\r\n    /* Box model */\r\n    padding: calc(var(--spacer) + 1px) 0;\r\n}\r\n\r\nbutton,\r\ninput[type=\"button\"],\r\ninput[type=\"submit\"] {\r\n    /* Box model */\r\n    border: solid 1px var(--color-primary);\r\n    border-radius: var(--spacer);\r\n    padding: calc(var(--spacer) + 1px) calc(var(--spacer) * 2);\r\n\r\n    /* Background and typography */\r\n    background-color: var(--color-secondary-bg);\r\n    color: var(--color-secondary);\r\n}\r\n\r\nbutton:hover:not(:disabled),\r\ninput[type=\"button\"]:hover:not(:disabled),\r\ninput[type=\"submit\"]:hover:not(:disabled) {\r\n    border: solid 1px var(--color-secondary);\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:active,\r\ninput[type=\"button\"]:active,\r\ninput[type=\"submit\"]:active {\r\n    border: default;\r\n    background-color: var(--color-primary-bg);\r\n}\r\n\r\ninput[type=\"range\"] {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n    height: 22px;\r\n    background-color: transparent;\r\n}\r\ninput[type=\"range\"]::-webkit-slider-runnable-track {\r\n    margin-top: 2px;\r\n    height: 5px;\r\n    padding: 0px !important;\r\n\r\n    border: solid 1px var(--color-secondary-bg);\r\n    background: var(--color-input-bg);\r\n    border-radius: 3px;\r\n}\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    top: -4px;\r\n    \r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 20px;\r\n    \r\n    cursor: pointer;\r\n    background-color: var(--color-secondary);\r\n}\r\ninput[type=\"range\"]:disabled::-webkit-slider-thumb {\r\n    cursor: default;\r\n}\r\ninput[type=\"range\"]::-webkit-slider-thumb::before {\r\n    position: absolute;\r\n    content: \"\";\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* https://9elements.com/css-rule-order/#:~:text=So%20the%20order%20is%3A%20position,text%2D*%20%2C%20then%20word%2D*%20. */\r\n\r\n:root {\r\n    /* Box model */\r\n    --spacer: 4px;\r\n    --label-column-width: 103px;\r\n    \r\n    /* Background and typography */\r\n    --color-primary: #9a9a9a;\r\n    --color-primary-bg: #2d2d2d;\r\n    --color-secondary: #d8d8d8;\r\n    --color-secondary-bg: #3d3d3d;\r\n    --color-input-bg: #969696;\r\n    --font-size: 8pt;\r\n}\r\n\r\nhtml, body {\r\n    /* Box model */\r\n    margin: 0;\r\n    padding-top: 2px;\r\n\r\n    /* Background and typography */\r\n    background-color: var(--color-primary-bg);\r\n    color: var(--color-primary);\r\n    font-size: var(--font-size);\r\n    font-weight: normal;\r\n    font-family: Tahoma, Verdana, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\n/* Scrollbar */\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #999999;\r\n    outline: 1px solid slategrey;\r\n    border-radius: 8px;\r\n}\r\n\r\n/* Elements */\r\np {\r\n    margin: 0 0 var(--spacer) 0;\r\n}\r\np:last-child {\r\n    margin: 0;\r\n}\r\n\r\nul, ol {\r\n    margin: var(--spacer) 0;\r\n    padding-left: calc(var(--spacer) * 6);\r\n}\r\nli {\r\n    line-height: 1.5em;\r\n}\r\n\r\n\r\n/* Layout */\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n}\r\n.container > * > .row {\r\n    margin-bottom: calc(var(--spacer) * 2);\r\n}\r\n.row > * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.col-1 { width: calc(100% / 12); }\r\n.col-2 { width: calc((100% / 12) * 2); }\r\n.col-3 { width: calc((100% / 12) * 3); }\r\n.col-4 { width: calc((100% / 12) * 4); }\r\n.col-5 { width: calc((100% / 12) * 5); }\r\n.col-6 { width: calc((100% / 12) * 6); }\r\n.col-7 { width: calc((100% / 12) * 7); }\r\n.col-8 { width: calc((100% / 12) * 8); }\r\n.col-9 { width: calc((100% / 12) * 9); }\r\n.col-10 { width: calc((100% / 12) * 10); }\r\n.col-11 { width: calc((100% / 12) * 11); }\r\n.col-12 { width: 100%; }\r\n\r\n.offset-1 { margin-left: calc(100% / 12); }\r\n.offset-2 { width: calc((100% / 12) * 2); }\r\n.offset-3 { width: calc((100% / 12) * 3); }\r\n.offset-4 { width: calc((100% / 12) * 4); }\r\n.offset-5 { width: calc((100% / 12) * 5); }\r\n.offset-6 { width: calc((100% / 12) * 6); }\r\n.offset-7 { width: calc((100% / 12) * 7); }\r\n.offset-8 { width: calc((100% / 12) * 8); }\r\n.offset-9 { width: calc((100% / 12) * 9); }\r\n.offset-10 { width: calc((100% / 12) * 10); }\r\n.offset-11 { width: calc((100% / 12) * 11); }\r\n\r\n.f-stretch { flex-grow: 1; }\r\n\r\n.a-center-center {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* Layout (SDPI) */\r\n.col-label\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    \r\n    width: var(--label-column-width);\r\n    padding-right: 11px;\r\n    \r\n    text-align: right;\r\n}\r\n.col-content {\r\n    margin-left: var(--label-column-width);\r\n    width: 227px;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n.col-label + .col-content {\r\n    margin-left: 0;\r\n}\r\n\r\n\r\n/* Spacing */\r\n.p-0 { padding: 0; }\r\n.pt-0 { padding-top: 0; }\r\n.pr-0 { padding-right: 0; }\r\n.pb-0 { padding-bottom: 0; }\r\n.pl-0 { padding-left: 0; }\r\n\r\n.ps-2 {\r\n    padding-left: var(--spacer);\r\n    padding-right: var(--spacer);\r\n}\r\n\r\n.mr-2 { margin-right: calc(var(--spacer) * 2); }\r\n.mr-3 { margin-right: calc(var(--spacer) * 3); }\r\n\r\n.ml-2 { margin-left: calc(var(--spacer) * 2); }\r\n.ml-3 { margin-left: calc(var(--spacer) * 3); }\r\n\r\n/* Background and typography */\r\n.hidden {\r\n    display: none;\r\n    visibility: collapse;\r\n}\r\n\r\n:disabled {\r\n    cursor: default;\r\n    opacity: 0.5;\r\n}\r\n\r\n.refresh-icon,\r\n.refresh-icon:active {\r\n    height: 24px;\r\n    width: 24px;\r\n    \r\n    background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48px\" viewBox=\"0 0 24 24\" width=\"48px\" fill=\"%23d8d8d8\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>');\r\n    background-size: cover;\r\n}\r\n\r\n.text-right { text-align: right; }\r\n.text-center { text-align: center; }\r\n\r\n/* Form */\r\nbutton,\r\ninput,\r\nselect\r\n{\r\n    /* Box model */\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 0;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n\r\n    /* Background and typography */\r\n    color: var(--color-secondary);\r\n    font-size: var(--font-size);\r\n}\r\nbutton,\r\ninput:not([type='range']),\r\nselect {\r\n    background-color: var(--color-secondary-bg);\r\n}\r\ninput[type=\"text\"]\r\n{\r\n    padding: calc(var(--spacer) + 2px) var(--spacer);\r\n}\r\nselect\r\n{\r\n    /* Clipping */\r\n    text-overflow: ellipsis;\r\n\r\n    /* Box model */\r\n    padding: calc(var(--spacer) + 1px) 0;\r\n}\r\n\r\nbutton,\r\ninput[type=\"button\"],\r\ninput[type=\"submit\"] {\r\n    /* Box model */\r\n    border: solid 1px var(--color-primary);\r\n    border-radius: var(--spacer);\r\n    padding: calc(var(--spacer) + 1px) calc(var(--spacer) * 2);\r\n\r\n    /* Background and typography */\r\n    background-color: var(--color-secondary-bg);\r\n    color: var(--color-secondary);\r\n}\r\n\r\nbutton:hover:not(:disabled),\r\ninput[type=\"button\"]:hover:not(:disabled),\r\ninput[type=\"submit\"]:hover:not(:disabled) {\r\n    border: solid 1px var(--color-secondary);\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:active,\r\ninput[type=\"button\"]:active,\r\ninput[type=\"submit\"]:active {\r\n    border: default;\r\n    background-color: var(--color-primary-bg);\r\n}\r\n\r\ninput[type=\"range\"] {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n    height: 22px;\r\n    background-color: transparent;\r\n}\r\ninput[type=\"range\"]::-webkit-slider-runnable-track {\r\n    margin-top: 2px;\r\n    height: 5px;\r\n    padding: 0px !important;\r\n\r\n    border: solid 1px var(--color-secondary-bg);\r\n    background: var(--color-input-bg);\r\n    border-radius: 3px;\r\n}\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    top: -4px;\r\n    \r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 20px;\r\n    \r\n    cursor: pointer;\r\n    background-color: var(--color-secondary);\r\n}\r\ninput[type=\"range\"]:disabled::-webkit-slider-thumb {\r\n    cursor: default;\r\n}\r\ninput[type=\"range\"]::-webkit-slider-thumb::before {\r\n    position: absolute;\r\n    content: \"\";\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/sdpi-button.ts":
/*!***************************************!*\
  !*** ./src/components/sdpi-button.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const element_1 = __webpack_require__(/*! ../core/element */ "./src/core/element.ts");
const sdpi_input_1 = __importDefault(__webpack_require__(/*! ./sdpi-input */ "./src/components/sdpi-input.ts"));
class SDPIButton extends sdpi_input_1.default {
    render(root) {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'button');
        (0, element_1.cloneAttributeOrDefault)(this, this.input, 'value');
        this.input.onclick = this.onclick;
        root.appendChild(this.input);
        super.render && super.render(root);
    }
}
exports["default"] = SDPIButton;
customElements.define('sdpi-button', SDPIButton);


/***/ }),

/***/ "./src/components/sdpi-color.ts":
/*!**************************************!*\
  !*** ./src/components/sdpi-color.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const sdpi_input_1 = __importDefault(__webpack_require__(/*! ./sdpi-input */ "./src/components/sdpi-input.ts"));
class SDPIColor extends sdpi_input_1.default {
    render(root) {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'color');
        root.appendChild(this.input);
        super.render(root);
    }
}
exports["default"] = SDPIColor;
customElements.define('sdpi-color', SDPIColor);


/***/ }),

/***/ "./src/components/sdpi-content.ts":
/*!****************************************!*\
  !*** ./src/components/sdpi-content.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const element_1 = __webpack_require__(/*! ../core/element */ "./src/core/element.ts");
const sdpi_element_1 = __importDefault(__webpack_require__(/*! ./sdpi-element */ "./src/components/sdpi-element.ts"));
class SDPIContent extends sdpi_element_1.default {
    constructor() {
        super(...arguments);
        this.container = document.createElement('div');
        this.text = document.createElement('p');
    }
    static get observedAttributes() {
        return super.observedAttributes.concat(['text']);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (attrName === 'text') {
            this.text.innerText = newValue || '';
        }
    }
    render(root) {
        (0, element_1.withAttribute)(this, 'text', value => this.text.innerText = value);
        this.container.appendChild(this.text);
        root.appendChild(this.container);
    }
}
exports["default"] = SDPIContent;
customElements.define('sdpi-content', SDPIContent);


/***/ }),

/***/ "./src/components/sdpi-element.ts":
/*!****************************************!*\
  !*** ./src/components/sdpi-element.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const element_1 = __webpack_require__(/*! ../core/element */ "./src/core/element.ts");
class SDPIElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.label = document.createElement('label');
    }
    static get observedAttributes() {
        return ['label'];
    }
    get disabled() {
        return this.getAttribute('disabled') != undefined;
    }
    ;
    set disabled(value) {
        if (value) {
            this.setAttribute('disabled', 'disabled');
        }
        else {
            this.removeAttribute('disabled');
        }
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'label') {
            this.label.innerText = newValue || '';
        }
    }
    connectedCallback() {
        const labelColumn = (0, element_1.createElement)('div', ['col-label'], [this.label]);
        (0, element_1.withAttribute)(this, 'label', value => this.label.innerText = `${value}: `);
        const contentColumn = (0, element_1.createElement)('div', ['col-content']);
        this.appendChild((0, element_1.createElement)('div', ['row'], [labelColumn, contentColumn]));
        this.render && this.render(contentColumn);
    }
}
exports["default"] = SDPIElement;


/***/ }),

/***/ "./src/components/sdpi-input.ts":
/*!**************************************!*\
  !*** ./src/components/sdpi-input.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const element_1 = __webpack_require__(/*! ../core/element */ "./src/core/element.ts");
const event_dispatcher_1 = __importDefault(__webpack_require__(/*! ../core/event-dispatcher */ "./src/core/event-dispatcher.ts"));
const store_1 = __importDefault(__webpack_require__(/*! ../stream-deck/store */ "./src/stream-deck/store.ts"));
const sdpi_element_1 = __importDefault(__webpack_require__(/*! ./sdpi-element */ "./src/components/sdpi-element.ts"));
class SDPIInput extends sdpi_element_1.default {
    constructor() {
        super(...arguments);
        this._change = new event_dispatcher_1.default();
    }
    static get observedInputAttributes() {
        return ['disabled'];
    }
    static get observedAttributes() {
        return super.observedAttributes.concat(this.observedInputAttributes);
    }
    get change() {
        return this._change;
    }
    get isDelayed() {
        return true;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value || (this.input && this.input.value != value)) {
            this._value = value;
            if (this.input) {
                this.input.value = value;
            }
            this._change.dispatch();
        }
    }
    get global() {
        return this.hasAttribute('global');
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        if (SDPIInput.observedAttributes.indexOf(attrName) > -1) {
            (0, element_1.setAttribute)(this.input, attrName, newValue);
        }
    }
    render(root) {
        super.render && super.render(root);
        if (this.input) {
            this.input.addEventListener('change', () => { var _a; return this.value = (_a = this.input) === null || _a === void 0 ? void 0 : _a.value; });
            const propertyName = this.getAttribute('property');
            if (propertyName) {
                this.input.id = `sdpi__${propertyName}`;
                this.label.htmlFor = this.input.id;
                store_1.default.use(this, propertyName, this.global, this.isDelayed ? 250 : undefined);
            }
        }
    }
}
exports["default"] = SDPIInput;


/***/ }),

/***/ "./src/components/sdpi-range.ts":
/*!**************************************!*\
  !*** ./src/components/sdpi-range.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const element_1 = __webpack_require__(/*! ../core/element */ "./src/core/element.ts");
const sdpi_input_1 = __importDefault(__webpack_require__(/*! ./sdpi-input */ "./src/components/sdpi-input.ts"));
class SDPIRange extends sdpi_input_1.default {
    static get observedInputAttributes() {
        return super.observedInputAttributes.concat(['min', 'max', 'step']);
    }
    get isDelayed() {
        return true;
    }
    render(root) {
        let components = [];
        (0, element_1.withAttribute)(this, 'mintext', value => {
            const minText = (0, element_1.createElement)('div', ['col', 'a-center-center', 'mr-2']);
            minText.innerText = value;
            components.push(minText);
        });
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'range');
        (0, element_1.cloneAttributeOrDefault)(this, this.input, 'min', '0');
        (0, element_1.cloneAttributeOrDefault)(this, this.input, 'max', '100');
        (0, element_1.cloneAttributeOrDefault)(this, this.input, 'step', '5');
        components.push((0, element_1.createElement)('div', ['col', 'f-stretch'], [this.input]));
        (0, element_1.withAttribute)(this, 'maxtext', value => {
            const maxText = (0, element_1.createElement)('div', ['col', 'a-center-center', 'ml-2']);
            maxText.innerText = value;
            components.push(maxText);
        });
        (0, element_1.withAttribute)(this, 'showvalue', _ => {
            const valueText = (0, element_1.createElement)('div', ['col', 'a-center-center', 'ml-2']);
            this.input.addEventListener('input', () => valueText.innerText = `${this.input.value}%`);
            this.change.subscribe(() => valueText.innerText = `${this.value}%`);
            components.push(valueText);
        });
        root.appendChild((0, element_1.createElement)('div', 'row', components));
        super.render(root);
    }
}
exports["default"] = SDPIRange;
customElements.define('sdpi-range', SDPIRange);


/***/ }),

/***/ "./src/components/sdpi-select.ts":
/*!***************************************!*\
  !*** ./src/components/sdpi-select.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const element_1 = __webpack_require__(/*! ../core/element */ "./src/core/element.ts");
const input_1 = __webpack_require__(/*! ../core/input */ "./src/core/input.ts");
const stream_deck_client_1 = __importDefault(__webpack_require__(/*! ../stream-deck/stream-deck-client */ "./src/stream-deck/stream-deck-client.ts"));
const sdpi_input_1 = __importDefault(__webpack_require__(/*! ./sdpi-input */ "./src/components/sdpi-input.ts"));
class SDPISelect extends sdpi_input_1.default {
    constructor() {
        super(...arguments);
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.input) {
            this.input.disabled = value;
        }
        if (this.refreshButton) {
            this.refreshButton.disabled = value;
        }
    }
    refresh() {
        if (this.refreshButton) {
            this.refreshButton.click();
        }
        else {
            const dataSourceEndpoint = this.getAttribute('datasource');
            if (dataSourceEndpoint) {
                this.loadOptions(dataSourceEndpoint);
            }
        }
    }
    render(root) {
        this.input = document.createElement('select');
        const refreshEndpoint = this.getAttribute('refresh');
        if (refreshEndpoint) {
            this.refreshButton = (0, element_1.createElement)('button', ['refresh-icon']);
            root.appendChild((0, element_1.createElement)('div', 'row', [
                (0, element_1.createElement)('div', ['col', 'f-stretch'], [this.input]),
                (0, element_1.createElement)('div', ['col', 'ml-2'], [this.refreshButton])
            ]));
            this.refreshButton.addEventListener('click', () => this.loadOptions(refreshEndpoint));
        }
        else {
            root.appendChild(this.input);
        }
        const dataSourceEndpoint = this.getAttribute('datasource');
        if (dataSourceEndpoint) {
            this.loadOptions(dataSourceEndpoint);
        }
        else {
            (0, element_1.observeChildList)(this, (added) => { var _a; return (_a = this.input) === null || _a === void 0 ? void 0 : _a.appendChild(added); }, 'OPTGROUP', 'OPTION');
        }
        super.render(root);
    }
    loadOptions(dataSourceEndpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.input) {
                return;
            }
            const request = stream_deck_client_1.default.get(dataSourceEndpoint);
            this.disabled = true;
            (0, input_1.setOnlyOption)(this.input, 'Loading...');
            const dataSource = yield request;
            if (dataSource.payload && dataSource.payload.data) {
                this.setOptions(dataSource.payload.data);
            }
            else {
                (0, input_1.setOnlyOption)(this.input, 'Failed to load');
            }
            this.disabled = false;
        });
    }
    setOptions(options) {
        if (!this.input || !options) {
            return;
        }
        const mapOptions = (item) => {
            var _a;
            return item.children && item.children instanceof Array
                ? (0, input_1.createOptionGroup)(item.label, (_a = item.children) === null || _a === void 0 ? void 0 : _a.map(mapOptions))
                : (0, input_1.createOption)(item.label, item.value);
        };
        (0, input_1.clearOptions)(this.input);
        options.map(mapOptions).forEach(option => { var _a; return (_a = this.input) === null || _a === void 0 ? void 0 : _a.options.add(option); });
        this.input.value = this.value || this.getAttribute('default');
    }
}
exports["default"] = SDPISelect;
customElements.define('sdpi-select', SDPISelect);


/***/ }),

/***/ "./src/components/sdpi-text.ts":
/*!*************************************!*\
  !*** ./src/components/sdpi-text.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const sdpi_input_1 = __importDefault(__webpack_require__(/*! ./sdpi-input */ "./src/components/sdpi-input.ts"));
class SDPIText extends sdpi_input_1.default {
    get isDelayed() {
        return true;
    }
    render(root) {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        root.appendChild(this.input);
        super.render(root);
    }
}
exports["default"] = SDPIText;
customElements.define('sdpi-text', SDPIText);


/***/ }),

/***/ "./src/core/element.ts":
/*!*****************************!*\
  !*** ./src/core/element.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withAttribute = exports.setAttribute = exports.observeChildList = exports.cloneAttributeOrDefault = exports.createElement = void 0;
function createElement(tagName, classNames, children) {
    const element = document.createElement(tagName);
    if (classNames) {
        if (typeof classNames === 'string') {
            element.classList.add(classNames);
        }
        else {
            classNames.forEach(className => element.classList.add(className));
        }
    }
    (children !== null && children !== void 0 ? children : []).forEach(child => element.appendChild(child));
    return element;
}
exports.createElement = createElement;
function cloneAttributeOrDefault(source, target, attrName, defaultValue) {
    const value = source.getAttribute(attrName);
    if (value) {
        target.setAttribute(attrName, value);
    }
    else if (defaultValue) {
        target.setAttribute(attrName, defaultValue);
    }
}
exports.cloneAttributeOrDefault = cloneAttributeOrDefault;
function observeChildList(target, addedCallback, ...filter) {
    new MutationObserver((mutations) => {
        mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
            if (filter.includes(node.nodeName)) {
                addedCallback(node);
            }
        }));
    }).observe(target, { childList: true });
}
exports.observeChildList = observeChildList;
function setAttribute(target, attrName, value) {
    if (target && attrName) {
        if (value) {
            target.setAttribute(attrName, value);
        }
        else {
            target.removeAttribute(attrName);
        }
    }
}
exports.setAttribute = setAttribute;
function withAttribute(element, attrName, success, failure) {
    const value = element.getAttribute(attrName);
    if (value) {
        success && success(value);
    }
    else {
        failure && failure();
    }
}
exports.withAttribute = withAttribute;


/***/ }),

/***/ "./src/core/event-dispatcher.ts":
/*!**************************************!*\
  !*** ./src/core/event-dispatcher.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class EventManager {
    constructor() {
        this.handlers = [];
    }
    dispatch(args) {
        for (const handler of this.handlers) {
            handler(args);
        }
    }
    subscribe(handler) {
        this.handlers.push(handler);
    }
    unsubscribe(handler) {
        this.handlers = this.handlers.filter(h => h !== handler);
    }
}
exports["default"] = EventManager;


/***/ }),

/***/ "./src/core/input.ts":
/*!***************************!*\
  !*** ./src/core/input.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setOnlyOption = exports.dispatchChange = exports.createOptionGroup = exports.createOption = exports.clearOptions = exports.anyChange = void 0;
function anyChange(input, listener) {
    input.addEventListener('change', listener);
    input.addEventListener('input', listener);
}
exports.anyChange = anyChange;
function clearOptions(input) {
    if (input.childNodes) {
        while (input.firstChild) {
            input.removeChild(input.firstChild);
        }
    }
}
exports.clearOptions = clearOptions;
function createOption(text, value) {
    const option = document.createElement('option');
    option.text = text;
    option.value = value;
    return option;
}
exports.createOption = createOption;
function createOptionGroup(label, children) {
    const optGroup = document.createElement('optgroup');
    optGroup.label = label;
    if (children) {
        children.forEach(child => optGroup.appendChild(child));
    }
    return optGroup;
}
exports.createOptionGroup = createOptionGroup;
function dispatchChange(input) {
    input.dispatchEvent(new Event('change'));
}
exports.dispatchChange = dispatchChange;
function setOnlyOption(input, label) {
    clearOptions(input);
    input.options.add(createOption(label, ''));
    input.value = '';
}
exports.setOnlyOption = setOnlyOption;


/***/ }),

/***/ "./src/core/promise-completion-source.ts":
/*!***********************************************!*\
  !*** ./src/core/promise-completion-source.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class PromiseCompletionSource {
    constructor() {
        this.reject = _ => { };
        this.resolve = _ => { };
        this._promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    get promise() {
        return this._promise;
    }
    setResult(value) {
        this.resolve(value);
    }
    setException(reason) {
        this.reject(reason);
    }
}
exports["default"] = PromiseCompletionSource;


/***/ }),

/***/ "./src/core/timeout.ts":
/*!*****************************!*\
  !*** ./src/core/timeout.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delay = void 0;
function delay(callback, timeout) {
    let handle;
    return (...args) => {
        clearTimeout(handle);
        handle = setTimeout(callback, timeout, args);
    };
}
exports.delay = delay;


/***/ }),

/***/ "./src/core/utils.ts":
/*!***************************!*\
  !*** ./src/core/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUUID = void 0;
function getUUID() {
    let chr4 = () => Math.random().toString(16).slice(-4);
    return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
}
exports.getUUID = getUUID;


/***/ }),

/***/ "./src/stream-deck/connect.ts":
/*!************************************!*\
  !*** ./src/stream-deck/connect.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const stream_deck_client_1 = __importDefault(__webpack_require__(/*! ./stream-deck-client */ "./src/stream-deck/stream-deck-client.ts"));
const stream_deck_connection_1 = __importDefault(__webpack_require__(/*! ./stream-deck-connection */ "./src/stream-deck/stream-deck-connection.ts"));
window.streamDeckClient = stream_deck_client_1.default;
const existing = window.connectElgatoStreamDeckSocket;
window.connectElgatoStreamDeckSocket = function (inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo) {
    if (existing) {
        existing(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo);
    }
    ;
    stream_deck_connection_1.default.connect(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo);
};


/***/ }),

/***/ "./src/stream-deck/store.ts":
/*!**********************************!*\
  !*** ./src/stream-deck/store.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const event_dispatcher_1 = __importDefault(__webpack_require__(/*! ../core/event-dispatcher */ "./src/core/event-dispatcher.ts"));
const timeout_1 = __webpack_require__(/*! ../core/timeout */ "./src/core/timeout.ts");
const stream_deck_client_1 = __importDefault(__webpack_require__(/*! ./stream-deck-client */ "./src/stream-deck/stream-deck-client.ts"));
const stream_deck_connection_1 = __importDefault(__webpack_require__(/*! ./stream-deck-connection */ "./src/stream-deck/stream-deck-connection.ts"));
class Store {
    constructor() {
        this._globalSettingsChange = new event_dispatcher_1.default();
        this._settingsChange = new event_dispatcher_1.default();
    }
    get globalSettingsChange() {
        return this._globalSettingsChange;
    }
    get settingsChange() {
        return this._settingsChange;
    }
    connect(actionInfo) {
        stream_deck_client_1.default.didReceiveGlobalSettings.subscribe((data) => {
            this.globalSettings = data.payload.settings;
            this._globalSettingsChange.dispatch(this.globalSettings);
        });
        stream_deck_client_1.default.didReceiveSettings.subscribe((data) => {
            this.dispatchSettings(data);
        });
        this.dispatchSettings(actionInfo);
        stream_deck_client_1.default.getGlobalSettings();
    }
    register(key, global, settingsChangeCallback) {
        const settingsChangeHandler = (data) => {
            if (data) {
                settingsChangeCallback(data[key]);
            }
        };
        if (global) {
            store.globalSettingsChange.subscribe(settingsChangeHandler);
        }
        else {
            store.settingsChange.subscribe(settingsChangeHandler);
        }
        return (value) => {
            store.set(key, value, global);
        };
    }
    set(key, value, global = false) {
        if (global) {
            this.globalSettings[key] = value;
            stream_deck_client_1.default.setGlobalSettings(this.globalSettings);
        }
        else {
            this.settings[key] = value;
            stream_deck_client_1.default.setSettings(this.settings);
        }
    }
    use(obj, key, global, timeout = 250) {
        const save = store.register(key, global, (value) => {
            if (obj.value != value) {
                obj.value = value || '';
            }
        });
        if (timeout) {
            obj.change.subscribe((0, timeout_1.delay)(() => save(obj.value), timeout));
        }
        else {
            obj.change.subscribe(() => save(obj.value));
        }
    }
    dispatchSettings(data) {
        this.settings = data.payload.settings;
        this._settingsChange.dispatch(this.settings);
    }
}
const store = new Store();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield stream_deck_connection_1.default.waitForConnection();
        const connectionInfo = yield stream_deck_connection_1.default.getConnectionInfo();
        store.connect(connectionInfo.actionInfo);
    });
})();
exports["default"] = store;


/***/ }),

/***/ "./src/stream-deck/stream-deck-client.ts":
/*!***********************************************!*\
  !*** ./src/stream-deck/stream-deck-client.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamDeckClient = void 0;
const event_dispatcher_1 = __importDefault(__webpack_require__(/*! ../core/event-dispatcher */ "./src/core/event-dispatcher.ts"));
const utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
const stream_deck_connection_1 = __importDefault(__webpack_require__(/*! ./stream-deck-connection */ "./src/stream-deck/stream-deck-connection.ts"));
var Message;
(function (Message) {
    Message["GET_SETTINGS"] = "getSettings";
    Message["GET_GLOBAL_SETTINGS"] = "getGlobalSettings";
    Message["LOG_MESSAGE"] = "logMessage";
    Message["OPEN_URL"] = "openUrl";
    Message["SET_SETTINGS"] = "setSettings";
    Message["SET_GLOBAL_SETTINGS"] = "setGlobalSettings";
    Message["SEND_TO_PLUGIN"] = "sendToPlugin";
    Message["DID_RECEIVE_GLOBAL_SETTINGS"] = "didReceiveGlobalSettings";
    Message["DID_RECEIVE_SETTINGS"] = "didReceiveSettings";
    Message["SEND_TO_PROPERTY_INSPECTOR"] = "sendToPropertyInspector";
})(Message || (Message = {}));
class StreamDeckClient {
    constructor() {
        this._didReceiveGlobalSettings = new event_dispatcher_1.default();
        this._didReceiveSettings = new event_dispatcher_1.default();
        stream_deck_connection_1.default.message.subscribe(this.onMessage.bind(this));
    }
    get didReceiveGlobalSettings() { return this._didReceiveGlobalSettings; }
    get didReceiveSettings() { return this._didReceiveSettings; }
    get(event, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                event: event,
                requestId: (0, utils_1.getUUID)()
            };
            return yield stream_deck_connection_1.default.get(Message.SEND_TO_PLUGIN, args => args.event == Message.SEND_TO_PROPERTY_INSPECTOR && args.payload && args.payload.requestId == request.requestId, Object.assign({ parameters: Object.assign({}, parameters) }, request));
        });
    }
    ;
    getGlobalSettings() {
        return stream_deck_connection_1.default.get(Message.GET_GLOBAL_SETTINGS, payload => payload.event == Message.DID_RECEIVE_GLOBAL_SETTINGS);
    }
    setGlobalSettings(value) {
        stream_deck_connection_1.default.send(Message.SET_GLOBAL_SETTINGS, value);
    }
    getSettings() {
        return stream_deck_connection_1.default.get(Message.GET_SETTINGS, payload => payload.event == Message.DID_RECEIVE_SETTINGS);
    }
    setSettings(value) {
        stream_deck_connection_1.default.send(Message.SET_SETTINGS, value);
    }
    onMessage(data) {
        switch (data.event) {
            case Message.DID_RECEIVE_GLOBAL_SETTINGS:
                this._didReceiveGlobalSettings.dispatch(data);
                break;
            case Message.DID_RECEIVE_SETTINGS:
                this._didReceiveSettings.dispatch(data);
                break;
        }
    }
}
exports.StreamDeckClient = StreamDeckClient;
const streamDeckClient = new StreamDeckClient();
exports["default"] = streamDeckClient;


/***/ }),

/***/ "./src/stream-deck/stream-deck-connection.ts":
/*!***************************************************!*\
  !*** ./src/stream-deck/stream-deck-connection.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const event_dispatcher_1 = __importDefault(__webpack_require__(/*! ../core/event-dispatcher */ "./src/core/event-dispatcher.ts"));
const promise_completion_source_1 = __importDefault(__webpack_require__(/*! ../core/promise-completion-source */ "./src/core/promise-completion-source.ts"));
class StreamDeckConnection {
    constructor() {
        this._connection = new promise_completion_source_1.default();
        this._connectionInfo = new promise_completion_source_1.default();
        this._message = new event_dispatcher_1.default();
    }
    get message() { return this._message; }
    connect(port, propertyInspectorUUID, registerEvent, info, actionInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._webSocket) {
                this._connectionInfo.setResult({
                    actionInfo: JSON.parse(actionInfo),
                    info: JSON.parse(info),
                    propertyInspectorUUID: propertyInspectorUUID,
                    registerEvent: registerEvent
                });
                this._webSocket = new WebSocket(`ws://localhost:${port}`);
                this._webSocket.addEventListener('message', (ev) => this._message.dispatch(JSON.parse(ev.data)));
                this._webSocket.addEventListener('open', this.onOpen.bind(this));
            }
        });
    }
    get(event, canCallback, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const resolver = new promise_completion_source_1.default();
            let listener;
            listener = (args) => {
                if (canCallback(args)) {
                    this.message.unsubscribe(listener);
                    resolver.setResult(args);
                }
            };
            this.message.subscribe(listener);
            yield this.send(event, payload);
            return resolver.promise;
        });
    }
    getConnectionInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connectionInfo.promise;
        });
    }
    send(event, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connectionInfo = yield this._connectionInfo.promise;
                const connection = yield this._connection.promise;
                connection.send(JSON.stringify({
                    event: event,
                    context: connectionInfo.propertyInspectorUUID,
                    payload: payload,
                    action: connectionInfo.actionInfo.action
                }));
            }
            catch (_a) {
                console.error(`Unable to send request '${event}' as there is no connection.`);
            }
        });
    }
    waitForConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._connection.promise;
        });
    }
    onOpen(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connectionInfo = yield this._connectionInfo.promise;
                if (this._webSocket) {
                    this._webSocket.send(JSON.stringify({
                        event: connectionInfo.registerEvent,
                        uuid: connectionInfo.propertyInspectorUUID
                    }));
                    this._connection.setResult(this._webSocket);
                }
            }
            catch (ex) {
                this._connection.setException(ex);
            }
        });
    }
}
const streamDeckConnection = new StreamDeckConnection();
exports["default"] = streamDeckConnection;


/***/ }),

/***/ "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48px\" viewBox=\"0 0 24 24\" width=\"48px\" fill=\"%23d8d8d8\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="%23d8d8d8"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg> ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48px\" viewBox=\"0 0 24 24\" width=\"48px\" fill=\"%23d8d8d8\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
__webpack_require__(/*! ./stream-deck/connect */ "./src/stream-deck/connect.ts");
__webpack_require__(/*! ./components/sdpi-range */ "./src/components/sdpi-range.ts");
__webpack_require__(/*! ./components/sdpi-select */ "./src/components/sdpi-select.ts");
__webpack_require__(/*! ./components/sdpi-color */ "./src/components/sdpi-color.ts");
__webpack_require__(/*! ./components/sdpi-text */ "./src/components/sdpi-text.ts");
__webpack_require__(/*! ./components/sdpi-button */ "./src/components/sdpi-button.ts");
__webpack_require__(/*! ./components/sdpi-content */ "./src/components/sdpi-content.ts");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckJBLHdFQUE0QjtBQUM1QixpRkFBK0I7QUFDL0IscUZBQWlDO0FBQ2pDLHVGQUFrQztBQUNsQyxxRkFBaUM7QUFDakMsbUZBQWdDO0FBQ2hDLHVGQUFrQztBQUNsQyx5RkFBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NkcGkvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NkcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zZHBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3NkcGktYnV0dG9uLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy9zZHBpLWNvbG9yLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvY29tcG9uZW50cy9zZHBpLWNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3NkcGktZWxlbWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvc2RwaS1pbnB1dC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvc2RwaS1yYW5nZS50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvbXBvbmVudHMvc2RwaS1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb21wb25lbnRzL3NkcGktdGV4dC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvZWxlbWVudC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvZXZlbnQtZGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL2NvcmUvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL3Byb21pc2UtY29tcGxldGlvbi1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL3RpbWVvdXQudHMiLCJ3ZWJwYWNrOi8vc2RwaS8uL3NyYy9jb3JlL3V0aWxzLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvc3RyZWFtLWRlY2svY29ubmVjdC50cyIsIndlYnBhY2s6Ly9zZHBpLy4vc3JjL3N0cmVhbS1kZWNrL3N0b3JlLnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvc3RyZWFtLWRlY2svc3RyZWFtLWRlY2stY2xpZW50LnRzIiwid2VicGFjazovL3NkcGkvLi9zcmMvc3RyZWFtLWRlY2svc3RyZWFtLWRlY2stY29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly9zZHBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2RwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NkcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZHBpL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NkcGkvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjQ4cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgd2lkdGg9XFxcIjQ4cHhcXFwiIGZpbGw9XFxcIiUyM2Q4ZDhkOFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIi8+PHBhdGggZD1cXFwiTTE3LjY1IDYuMzVDMTYuMiA0LjkgMTQuMjEgNCAxMiA0Yy00LjQyIDAtNy45OSAzLjU4LTcuOTkgOHMzLjU3IDggNy45OSA4YzMuNzMgMCA2Ljg0LTIuNTUgNy43My02aC0yLjA4Yy0uODIgMi4zMy0zLjA0IDQtNS42NSA0LTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTZjMS42NiAwIDMuMTQuNjkgNC4yMiAxLjc4TDEzIDExaDdWNGwtMi4zNSAyLjM1elxcXCIvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHBzOi8vOWVsZW1lbnRzLmNvbS9jc3MtcnVsZS1vcmRlci8jOn46dGV4dD1TbyUyMHRoZSUyMG9yZGVyJTIwaXMlM0ElMjBwb3NpdGlvbix0ZXh0JTJEKiUyMCUyQyUyMHRoZW4lMjB3b3JkJTJEKiUyMC4gKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC8qIEJveCBtb2RlbCAqL1xcclxcbiAgICAtLXNwYWNlcjogNHB4O1xcclxcbiAgICAtLWxhYmVsLWNvbHVtbi13aWR0aDogMTAzcHg7XFxyXFxuICAgIFxcclxcbiAgICAvKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzlhOWE5YTtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5LWJnOiAjMmQyZDJkO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogI2Q4ZDhkODtcXHJcXG4gICAgLS1jb2xvci1zZWNvbmRhcnktYmc6ICMzZDNkM2Q7XFxyXFxuICAgIC0tY29sb3ItaW5wdXQtYmc6ICM5Njk2OTY7XFxyXFxuICAgIC0tZm9udC1zaXplOiA4cHQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICAvKiBCb3ggbW9kZWwgKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcclxcblxcclxcbiAgICAvKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgVmVyZGFuYSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2Nyb2xsYmFyICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxufVxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbGVtZW50cyAqL1xcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZXIpIDA7XFxyXFxufVxcclxcbnA6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwsIG9sIHtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZXIpIDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1zcGFjZXIpICogNik7XFxyXFxufVxcclxcbmxpIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBMYXlvdXQgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG4uY29udGFpbmVyID4gKiA+IC5yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNlcikgKiAyKTtcXHJcXG59XFxyXFxuLnJvdyA+ICoge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sLTEgeyB3aWR0aDogY2FsYygxMDAlIC8gMTIpOyB9XFxyXFxuLmNvbC0yIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAyKTsgfVxcclxcbi5jb2wtMyB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogMyk7IH1cXHJcXG4uY29sLTQgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDQpOyB9XFxyXFxuLmNvbC01IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA1KTsgfVxcclxcbi5jb2wtNiB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogNik7IH1cXHJcXG4uY29sLTcgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDcpOyB9XFxyXFxuLmNvbC04IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA4KTsgfVxcclxcbi5jb2wtOSB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogOSk7IH1cXHJcXG4uY29sLTEwIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMCk7IH1cXHJcXG4uY29sLTExIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMSk7IH1cXHJcXG4uY29sLTEyIHsgd2lkdGg6IDEwMCU7IH1cXHJcXG5cXHJcXG4ub2Zmc2V0LTEgeyBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gMTIpOyB9XFxyXFxuLm9mZnNldC0yIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAyKTsgfVxcclxcbi5vZmZzZXQtMyB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogMyk7IH1cXHJcXG4ub2Zmc2V0LTQgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDQpOyB9XFxyXFxuLm9mZnNldC01IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA1KTsgfVxcclxcbi5vZmZzZXQtNiB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogNik7IH1cXHJcXG4ub2Zmc2V0LTcgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDcpOyB9XFxyXFxuLm9mZnNldC04IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA4KTsgfVxcclxcbi5vZmZzZXQtOSB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogOSk7IH1cXHJcXG4ub2Zmc2V0LTEwIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMCk7IH1cXHJcXG4ub2Zmc2V0LTExIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMSk7IH1cXHJcXG5cXHJcXG4uZi1zdHJldGNoIHsgZmxleC1ncm93OiAxOyB9XFxyXFxuXFxyXFxuLmEtY2VudGVyLWNlbnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXlvdXQgKFNEUEkpICovXFxyXFxuLmNvbC1sYWJlbFxcclxcbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOiB2YXIoLS1sYWJlbC1jb2x1bW4td2lkdGgpO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xcclxcbiAgICBcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi5jb2wtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1sYWJlbC1jb2x1bW4td2lkdGgpO1xcclxcbiAgICB3aWR0aDogMjI3cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuLmNvbC1sYWJlbCArIC5jb2wtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTcGFjaW5nICovXFxyXFxuLnAtMCB7IHBhZGRpbmc6IDA7IH1cXHJcXG4ucHQtMCB7IHBhZGRpbmctdG9wOiAwOyB9XFxyXFxuLnByLTAgeyBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxyXFxuLnBiLTAgeyBwYWRkaW5nLWJvdHRvbTogMDsgfVxcclxcbi5wbC0wIHsgcGFkZGluZy1sZWZ0OiAwOyB9XFxyXFxuXFxyXFxuLnBzLTIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNlcik7XFxyXFxufVxcclxcblxcclxcbi5tci0yIHsgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXNwYWNlcikgKiAyKTsgfVxcclxcbi5tci0zIHsgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXNwYWNlcikgKiAzKTsgfVxcclxcblxcclxcbi5tbC0yIHsgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tc3BhY2VyKSAqIDIpOyB9XFxyXFxuLm1sLTMgeyBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1zcGFjZXIpICogMyk7IH1cXHJcXG5cXHJcXG4vKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG46ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtaWNvbixcXHJcXG4ucmVmcmVzaC1pY29uOmFjdGl2ZSB7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1yaWdodCB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XFxyXFxuLnRleHQtY2VudGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxyXFxuXFxyXFxuLyogRm9ybSAqL1xcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5zZWxlY3RcXHJcXG57XFxyXFxuICAgIC8qIEJveCBtb2RlbCAqL1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAvKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXVxcclxcbntcXHJcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMnB4KSB2YXIoLS1zcGFjZXIpO1xcclxcbn1cXHJcXG5zZWxlY3RcXHJcXG57XFxyXFxuICAgIC8qIENsaXBwaW5nICovXFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcblxcclxcbiAgICAvKiBCb3ggbW9kZWwgKi9cXHJcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMXB4KSAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAvKiBCb3ggbW9kZWwgKi9cXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSArIDFweCkgY2FsYyh2YXIoLS1zcGFjZXIpICogMik7XFxyXFxuXFxyXFxuICAgIC8qIEJhY2tncm91bmQgYW5kIHR5cG9ncmFwaHkgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3Zlcjpub3QoOmRpc2FibGVkKSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTphY3RpdmUsXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06YWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyOiBkZWZhdWx0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci1zZWNvbmRhcnktYmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1pbnB1dC1iZyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtNHB4O1xcclxcbiAgICBcXHJcXG4gICAgd2lkdGg6IDEycHg7XFxyXFxuICAgIGhlaWdodDogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iOjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwySEFBMkg7O0FBRTNIO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwyQkFBMkI7O0lBRTNCLDhCQUE4QjtJQUM5Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCOztJQUVoQiw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHdJQUF3STtBQUM1STs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlEQUFpRDtBQUNyRDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUEsYUFBYTtBQUNiO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxTQUFTLHNCQUFzQixFQUFFO0FBQ2pDLFNBQVMsNEJBQTRCLEVBQUU7QUFDdkMsU0FBUyw0QkFBNEIsRUFBRTtBQUN2QyxTQUFTLDRCQUE0QixFQUFFO0FBQ3ZDLFNBQVMsNEJBQTRCLEVBQUU7QUFDdkMsU0FBUyw0QkFBNEIs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XCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHBzOi8vOWVsZW1lbnRzLmNvbS9jc3MtcnVsZS1vcmRlci8jOn46dGV4dD1TbyUyMHRoZSUyMG9yZGVyJTIwaXMlM0ElMjBwb3NpdGlvbix0ZXh0JTJEKiUyMCUyQyUyMHRoZW4lMjB3b3JkJTJEKiUyMC4gKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC8qIEJveCBtb2RlbCAqL1xcclxcbiAgICAtLXNwYWNlcjogNHB4O1xcclxcbiAgICAtLWxhYmVsLWNvbHVtbi13aWR0aDogMTAzcHg7XFxyXFxuICAgIFxcclxcbiAgICAvKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzlhOWE5YTtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5LWJnOiAjMmQyZDJkO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogI2Q4ZDhkODtcXHJcXG4gICAgLS1jb2xvci1zZWNvbmRhcnktYmc6ICMzZDNkM2Q7XFxyXFxuICAgIC0tY29sb3ItaW5wdXQtYmc6ICM5Njk2OTY7XFxyXFxuICAgIC0tZm9udC1zaXplOiA4cHQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICAvKiBCb3ggbW9kZWwgKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcclxcblxcclxcbiAgICAvKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgVmVyZGFuYSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2Nyb2xsYmFyICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxufVxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbGVtZW50cyAqL1xcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZXIpIDA7XFxyXFxufVxcclxcbnA6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwsIG9sIHtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZXIpIDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1zcGFjZXIpICogNik7XFxyXFxufVxcclxcbmxpIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBMYXlvdXQgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG4uY29udGFpbmVyID4gKiA+IC5yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNlcikgKiAyKTtcXHJcXG59XFxyXFxuLnJvdyA+ICoge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sLTEgeyB3aWR0aDogY2FsYygxMDAlIC8gMTIpOyB9XFxyXFxuLmNvbC0yIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAyKTsgfVxcclxcbi5jb2wtMyB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogMyk7IH1cXHJcXG4uY29sLTQgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDQpOyB9XFxyXFxuLmNvbC01IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA1KTsgfVxcclxcbi5jb2wtNiB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogNik7IH1cXHJcXG4uY29sLTcgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDcpOyB9XFxyXFxuLmNvbC04IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA4KTsgfVxcclxcbi5jb2wtOSB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogOSk7IH1cXHJcXG4uY29sLTEwIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMCk7IH1cXHJcXG4uY29sLTExIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMSk7IH1cXHJcXG4uY29sLTEyIHsgd2lkdGg6IDEwMCU7IH1cXHJcXG5cXHJcXG4ub2Zmc2V0LTEgeyBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC8gMTIpOyB9XFxyXFxuLm9mZnNldC0yIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAyKTsgfVxcclxcbi5vZmZzZXQtMyB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogMyk7IH1cXHJcXG4ub2Zmc2V0LTQgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDQpOyB9XFxyXFxuLm9mZnNldC01IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA1KTsgfVxcclxcbi5vZmZzZXQtNiB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogNik7IH1cXHJcXG4ub2Zmc2V0LTcgeyB3aWR0aDogY2FsYygoMTAwJSAvIDEyKSAqIDcpOyB9XFxyXFxuLm9mZnNldC04IHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiA4KTsgfVxcclxcbi5vZmZzZXQtOSB7IHdpZHRoOiBjYWxjKCgxMDAlIC8gMTIpICogOSk7IH1cXHJcXG4ub2Zmc2V0LTEwIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMCk7IH1cXHJcXG4ub2Zmc2V0LTExIHsgd2lkdGg6IGNhbGMoKDEwMCUgLyAxMikgKiAxMSk7IH1cXHJcXG5cXHJcXG4uZi1zdHJldGNoIHsgZmxleC1ncm93OiAxOyB9XFxyXFxuXFxyXFxuLmEtY2VudGVyLWNlbnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXlvdXQgKFNEUEkpICovXFxyXFxuLmNvbC1sYWJlbFxcclxcbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOiB2YXIoLS1sYWJlbC1jb2x1bW4td2lkdGgpO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xcclxcbiAgICBcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbi5jb2wtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1sYWJlbC1jb2x1bW4td2lkdGgpO1xcclxcbiAgICB3aWR0aDogMjI3cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuLmNvbC1sYWJlbCArIC5jb2wtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTcGFjaW5nICovXFxyXFxuLnAtMCB7IHBhZGRpbmc6IDA7IH1cXHJcXG4ucHQtMCB7IHBhZGRpbmctdG9wOiAwOyB9XFxyXFxuLnByLTAgeyBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxyXFxuLnBiLTAgeyBwYWRkaW5nLWJvdHRvbTogMDsgfVxcclxcbi5wbC0wIHsgcGFkZGluZy1sZWZ0OiAwOyB9XFxyXFxuXFxyXFxuLnBzLTIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNlcik7XFxyXFxufVxcclxcblxcclxcbi5tci0yIHsgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXNwYWNlcikgKiAyKTsgfVxcclxcbi5tci0zIHsgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXNwYWNlcikgKiAzKTsgfVxcclxcblxcclxcbi5tbC0yIHsgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tc3BhY2VyKSAqIDIpOyB9XFxyXFxuLm1sLTMgeyBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1zcGFjZXIpICogMyk7IH1cXHJcXG5cXHJcXG4vKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG46ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtaWNvbixcXHJcXG4ucmVmcmVzaC1pY29uOmFjdGl2ZSB7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjQ4cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgd2lkdGg9XFxcIjQ4cHhcXFwiIGZpbGw9XFxcIiUyM2Q4ZDhkOFxcXCI+PHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwVjB6XFxcIiBmaWxsPVxcXCJub25lXFxcIi8+PHBhdGggZD1cXFwiTTE3LjY1IDYuMzVDMTYuMiA0LjkgMTQuMjEgNCAxMiA0Yy00LjQyIDAtNy45OSAzLjU4LTcuOTkgOHMzLjU3IDggNy45OSA4YzMuNzMgMCA2Ljg0LTIuNTUgNy43My02aC0yLjA4Yy0uODIgMi4zMy0zLjA0IDQtNS42NSA0LTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTZjMS42NiAwIDMuMTQuNjkgNC4yMiAxLjc4TDEzIDExaDdWNGwtMi4zNSAyLjM1elxcXCIvPjwvc3ZnPicpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1yaWdodCB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XFxyXFxuLnRleHQtY2VudGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxyXFxuXFxyXFxuLyogRm9ybSAqL1xcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5zZWxlY3RcXHJcXG57XFxyXFxuICAgIC8qIEJveCBtb2RlbCAqL1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAvKiBCYWNrZ3JvdW5kIGFuZCB0eXBvZ3JhcGh5ICovXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXVxcclxcbntcXHJcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMnB4KSB2YXIoLS1zcGFjZXIpO1xcclxcbn1cXHJcXG5zZWxlY3RcXHJcXG57XFxyXFxuICAgIC8qIENsaXBwaW5nICovXFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcblxcclxcbiAgICAvKiBCb3ggbW9kZWwgKi9cXHJcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZXIpICsgMXB4KSAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAvKiBCb3ggbW9kZWwgKi9cXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2VyKSArIDFweCkgY2FsYyh2YXIoLS1zcGFjZXIpICogMik7XFxyXFxuXFxyXFxuICAgIC8qIEJhY2tncm91bmQgYW5kIHR5cG9ncmFwaHkgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3Zlcjpub3QoOmRpc2FibGVkKSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTphY3RpdmUsXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06YWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyOiBkZWZhdWx0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci1zZWNvbmRhcnktYmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1pbnB1dC1iZyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtNHB4O1xcclxcbiAgICBcXHJcXG4gICAgd2lkdGg6IDEycHg7XFxyXFxuICAgIGhlaWdodDogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iOjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2xvbmVBdHRyaWJ1dGVPckRlZmF1bHQgfSBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xyXG5pbXBvcnQgU0RQSUlucHV0IGZyb20gJy4vc2RwaS1pbnB1dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTRFBJQnV0dG9uIGV4dGVuZHMgU0RQSUlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGZvciBiZXNwb2tlIHJlbmRlcmluZyB0byB0aGUgc3BlY2lmaWVkIHJvb3QgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSByb290IFRoZSByb290IGVsZW1lbnQgdG8gYXBwZW5kIGl0ZW1zIHRvLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGNsb25lQXR0cmlidXRlT3JEZWZhdWx0KHRoaXMsIHRoaXMuaW5wdXQsICd2YWx1ZScpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQub25jbGljayA9IHRoaXMub25jbGljaztcclxuXHJcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcclxuICAgICAgICBzdXBlci5yZW5kZXIgJiYgc3VwZXIucmVuZGVyKHJvb3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NkcGktYnV0dG9uJywgU0RQSUJ1dHRvbik7XHJcbiIsImltcG9ydCBTRFBJSW5wdXQgZnJvbSAnLi9zZHBpLWlucHV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNEUElDb2xvciBleHRlbmRzIFNEUElJbnB1dDxIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBmb3IgYmVzcG9rZSByZW5kZXJpbmcgdG8gdGhlIHNwZWNpZmllZCByb290IGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdCBUaGUgcm9vdCBlbGVtZW50IHRvIGFwcGVuZCBpdGVtcyB0by5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcihyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XHJcblxyXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHJvb3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NkcGktY29sb3InLCBTRFBJQ29sb3IpO1xyXG4iLCJpbXBvcnQgeyBvYnNlcnZlQ2hpbGRMaXN0LCB3aXRoQXR0cmlidXRlIH0gZnJvbSAnLi4vY29yZS9lbGVtZW50JztcclxuaW1wb3J0IFNEUElFbGVtZW50IGZyb20gJy4vc2RwaS1lbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNEUElDb250ZW50IGV4dGVuZHMgU0RQSUVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIC8qIEdldHMgdGhlIG9ic2VydmVkIGF0dHJpYnV0ZXMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmVkQXR0cmlidXRlcy5jb25jYXQoWyd0ZXh0J10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gYW4gb2JzZXJ2ZWQgYXR0cmlidXRlIGhhcyBiZWVuIGFkZGVkLCByZW1vdmVkLCB1cGRhdGVkLCBvciByZXBsYWNlZC4gQWxzbyBjYWxsZWQgZm9yIGluaXRpYWwgdmFsdWVzIHdoZW4gYW4gZWxlbWVudCBpcyBjcmVhdGVkIGJ5IHRoZSBwYXJzZXIsIG9yIHVwZ3JhZGVkLiBOb3RlOiBvbmx5IGF0dHJpYnV0ZXMgbGlzdGVkIGluIHRoZSBvYnNlcnZlZEF0dHJpYnV0ZXMgcHJvcGVydHkgd2lsbCByZWNlaXZlIHRoaXMgY2FsbGJhY2suXHJcbiAgICAgKiBAcGFyYW0gYXR0ck5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lLlxyXG4gICAgICogQHBhcmFtIG9sZFZhbHVlIFRoZSBhdHRyaWJ1dGVzIG9sZCB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBuZXdWYWx1ZSBUaGUgYXR0cmlidXRlcyBuZXcgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ck5hbWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoYXR0ck5hbWUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnRleHQuaW5uZXJUZXh0ID0gbmV3VmFsdWUgfHwgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGZvciBiZXNwb2tlIHJlbmRlcmluZyB0byB0aGUgc3BlY2lmaWVkIHJvb3QgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSByb290IFRoZSByb290IGVsZW1lbnQgdG8gYXBwZW5kIGl0ZW1zIHRvLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgd2l0aEF0dHJpYnV0ZSh0aGlzLCAndGV4dCcsIHZhbHVlID0+IHRoaXMudGV4dC5pbm5lclRleHQgPSB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XHJcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2RwaS1jb250ZW50JywgU0RQSUNvbnRlbnQpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB3aXRoQXR0cmlidXRlIH0gZnJvbSAnLi4vY29yZS9lbGVtZW50JztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBlbGVtZW50cyB3aXRoaW4gdGhlIFN0cmVhbSBEZWNrIFByb3BlcnR5IEluc3BlY3Rvci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNEUElFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHJcbiAgICAvKiBHZXRzIHRoZSBvYnNlcnZlZCBhdHRyaWJ1dGVzLiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWydsYWJlbCddO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEdldHMgdGhlIGRpc2FibGVkIHN0YXRlIG9mIHRoaXMgaW5zdGFuY2UuICovXHJcbiAgICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhpcyBpbnN0YW5jZS4gKi87XHJcbiAgICBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGFuIG9ic2VydmVkIGF0dHJpYnV0ZSBoYXMgYmVlbiBhZGRlZCwgcmVtb3ZlZCwgdXBkYXRlZCwgb3IgcmVwbGFjZWQuIEFsc28gY2FsbGVkIGZvciBpbml0aWFsIHZhbHVlcyB3aGVuIGFuIGVsZW1lbnQgaXMgY3JlYXRlZCBieSB0aGUgcGFyc2VyLCBvciB1cGdyYWRlZC4gTm90ZTogb25seSBhdHRyaWJ1dGVzIGxpc3RlZCBpbiB0aGUgb2JzZXJ2ZWRBdHRyaWJ1dGVzIHByb3BlcnR5IHdpbGwgcmVjZWl2ZSB0aGlzIGNhbGxiYWNrLlxyXG4gICAgICogQHBhcmFtIGF0dHJOYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZS5cclxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSBUaGUgYXR0cmlidXRlcyBvbGQgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gbmV3VmFsdWUgVGhlIGF0dHJpYnV0ZXMgbmV3IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJOYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLCBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChhdHRyTmFtZSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gbmV3VmFsdWUgfHwgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCBlYWNoIHRpbWUgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGFwcGVuZGVkIGludG8gYSBkb2N1bWVudC1jb25uZWN0ZWQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTGFiZWwgYW5kIHByaW1hcnkgY29udGVudCBjb2x1bW5cclxuICAgICAgICBjb25zdCBsYWJlbENvbHVtbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29sLWxhYmVsJ10sIFt0aGlzLmxhYmVsXSk7XHJcbiAgICAgICAgd2l0aEF0dHJpYnV0ZSh0aGlzLCAnbGFiZWwnLCB2YWx1ZSA9PiB0aGlzLmxhYmVsLmlubmVyVGV4dCA9IGAke3ZhbHVlfTogYCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudENvbHVtbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29sLWNvbnRlbnQnXSk7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciByb3cuXHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ3JvdyddLCBbbGFiZWxDb2x1bW4sIGNvbnRlbnRDb2x1bW5dKSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgJiYgdGhpcy5yZW5kZXIoY29udGVudENvbHVtbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgZm9yIGJlc3Bva2UgcmVuZGVyaW5nIHRvIHRoZSBzcGVjaWZpZWQgcm9vdCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHJvb3QgVGhlIHJvb3QgZWxlbWVudCB0byBhcHBlbmQgaXRlbXMgdG8uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXI/KHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZDtcclxufSIsImltcG9ydCB7IHNldEF0dHJpYnV0ZSB9IGZyb20gJy4uL2NvcmUvZWxlbWVudCc7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIsIHsgSUV2ZW50U3Vic2NyaWJlciB9IGZyb20gJy4uL2NvcmUvZXZlbnQtZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IEhUTUxJbnB1dCB9IGZyb20gJy4uL2NvcmUvaW5wdXQnO1xyXG5pbXBvcnQgc3RvcmUsIHsgSVN0b3JlT2JqZWN0IH0gZnJvbSAnLi4vc3RyZWFtLWRlY2svc3RvcmUnO1xyXG5pbXBvcnQgU0RQSUVsZW1lbnQgZnJvbSAnLi9zZHBpLWVsZW1lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgYmFzZSBjb21wb25lbnQgdGhhdCByZXByZXNlbnRzIGFuIFNEUEkgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTRFBJSW5wdXQ8VCBleHRlbmRzIEhUTUxJbnB1dD4gZXh0ZW5kcyBTRFBJRWxlbWVudCBpbXBsZW1lbnRzIElTdG9yZU9iamVjdCB7XHJcbiAgICBwcm90ZWN0ZWQgaW5wdXQ/OiBUO1xyXG4gICAgcHJpdmF0ZSBfY2hhbmdlOiBFdmVudE1hbmFnZXI8dm9pZD4gPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XHJcbiAgICBwcml2YXRlIF92YWx1ZT86IGFueTtcclxuXHJcbiAgICAvKiBHZXRzIHRoZSBvYnNlcnZlZCBhdHRyaWJ1dGVzIHRoYXQgYXJlIG1hcHBlZCBkaXJlY3RseSB0byB0aGUgaW5wdXQuICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZElucHV0QXR0cmlidXRlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnZGlzYWJsZWQnXTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBHZXRzIHRoZSBvYnNlcnZlZCBhdHRyaWJ1dGVzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMuY29uY2F0KHRoaXMub2JzZXJ2ZWRJbnB1dEF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE9jY3VycyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiAqL1xyXG4gICAgcHVibGljIGdldCBjaGFuZ2UoKTogSUV2ZW50U3Vic2NyaWJlcjx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBHZXRzIHRoZSB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hldGhlciBzYXZpbmcgc2hvdWxkIGJlIGRlbGF5ZWQ7IHRoaXMgdHlwaWNhbGx5IGFwcGxpZXMgdG8gaW5wdXRzIHRoYXQgY2FuIGNoYW5nZSBmcmVxdWVudGx5LiAqL1xyXG4gICAgcHVibGljIGdldCBpc0RlbGF5ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogR2V0cyB0aGUgdmFsdWUgdGhhdCB0aGUgaW5wdXQgcmVwcmVzZW50cy4gKi9cclxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2V0IHRoZSB2YWx1ZSB0aGF0IHRoZSBpbnB1dCByZXByZXNlbnRzLCBhbmQgZGlzcGF0Y2hlcyBhIGNoYW5nZSBldmVudCAqL1xyXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9IHZhbHVlIHx8ICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQudmFsdWUgIT0gdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZS5kaXNwYXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBHZXRzIGEgdmFsdWUgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgcGVyc2lzdGVkIHZhbHVlIGlzIGEgZ2xvYmFsIHNldHRpbmcgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgZ2xvYmFsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnZ2xvYmFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiBhbiBvYnNlcnZlZCBhdHRyaWJ1dGUgaGFzIGJlZW4gYWRkZWQsIHJlbW92ZWQsIHVwZGF0ZWQsIG9yIHJlcGxhY2VkLiBBbHNvIGNhbGxlZCBmb3IgaW5pdGlhbCB2YWx1ZXMgd2hlbiBhbiBlbGVtZW50IGlzIGNyZWF0ZWQgYnkgdGhlIHBhcnNlciwgb3IgdXBncmFkZWQuIE5vdGU6IG9ubHkgYXR0cmlidXRlcyBsaXN0ZWQgaW4gdGhlIG9ic2VydmVkQXR0cmlidXRlcyBwcm9wZXJ0eSB3aWxsIHJlY2VpdmUgdGhpcyBjYWxsYmFjay5cclxuICAgICAqIEBwYXJhbSBhdHRyTmFtZSBUaGUgYXR0cmlidXRlIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWUgVGhlIGF0dHJpYnV0ZXMgb2xkIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG5ld1ZhbHVlIFRoZSBhdHRyaWJ1dGVzIG5ldyB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyTmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCwgbmV3VmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChTRFBJSW5wdXQub2JzZXJ2ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYXR0ck5hbWUpID4gLTEpIHtcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlKHRoaXMuaW5wdXQsIGF0dHJOYW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGZvciBiZXNwb2tlIHJlbmRlcmluZyB0byB0aGUgc3BlY2lmaWVkIHJvb3QgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSByb290IFRoZSByb290IGVsZW1lbnQgdG8gYXBwZW5kIGl0ZW1zIHRvLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyICYmIHN1cGVyLnJlbmRlcihyb290KTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgdGhlIHN0b3JlIHdoZW4gdGhlcmUgaXMgYW4gaWQsIGFuZCB0aGUgaW5wdXQgaGFzIGJlZW4gc2V0LlxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy52YWx1ZSA9IHRoaXMuaW5wdXQ/LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdwcm9wZXJ0eScpO1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmlkID0gYHNkcGlfXyR7cHJvcGVydHlOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLmh0bWxGb3IgPSB0aGlzLmlucHV0LmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0b3JlLnVzZSh0aGlzLCBwcm9wZXJ0eU5hbWUsIHRoaXMuZ2xvYmFsLCB0aGlzLmlzRGVsYXllZCA/IDI1MCA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY2xvbmVBdHRyaWJ1dGVPckRlZmF1bHQsIGNyZWF0ZUVsZW1lbnQsIHdpdGhBdHRyaWJ1dGUgfSBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xyXG5pbXBvcnQgU0RQSUlucHV0IGZyb20gJy4vc2RwaS1pbnB1dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTRFBJUmFuZ2UgZXh0ZW5kcyBTRFBJSW5wdXQ8SFRNTElucHV0RWxlbWVudD4ge1xyXG4gICAgLyogR2V0cyB0aGUgb2JzZXJ2ZWQgYXR0cmlidXRlcy4gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkSW5wdXRBdHRyaWJ1dGVzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZWRJbnB1dEF0dHJpYnV0ZXMuY29uY2F0KFsnbWluJywgJ21heCcsICdzdGVwJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEdldHMgdGhlIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHNhdmluZyBzaG91bGQgYmUgZGVsYXllZDsgdGhpcyB0eXBpY2FsbHkgYXBwbGllcyB0byBpbnB1dHMgdGhhdCBjYW4gY2hhbmdlIGZyZXF1ZW50bHkuICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzRGVsYXllZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBmb3IgYmVzcG9rZSByZW5kZXJpbmcgdG8gdGhlIHNwZWNpZmllZCByb290IGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdCBUaGUgcm9vdCBlbGVtZW50IHRvIGFwcGVuZCBpdGVtcyB0by5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcihyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE1pbiB2YWx1ZSB0ZXh0LlxyXG4gICAgICAgIGxldCBjb21wb25lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgd2l0aEF0dHJpYnV0ZSh0aGlzLCAnbWludGV4dCcsIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWluVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29sJywgJ2EtY2VudGVyLWNlbnRlcicsICdtci0yJ10pO1xyXG4gICAgICAgICAgICBtaW5UZXh0LmlubmVyVGV4dCA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKG1pblRleHQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUaGUgcmFuZ2UgaW5wdXQuXHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcclxuXHJcbiAgICAgICAgY2xvbmVBdHRyaWJ1dGVPckRlZmF1bHQodGhpcywgdGhpcy5pbnB1dCwgJ21pbicsICcwJyk7XHJcbiAgICAgICAgY2xvbmVBdHRyaWJ1dGVPckRlZmF1bHQodGhpcywgdGhpcy5pbnB1dCwgJ21heCcsICcxMDAnKTtcclxuICAgICAgICBjbG9uZUF0dHJpYnV0ZU9yRGVmYXVsdCh0aGlzLCB0aGlzLmlucHV0LCAnc3RlcCcsICc1Jyk7XHJcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29sJywgJ2Ytc3RyZXRjaCddLCBbdGhpcy5pbnB1dF0pKVxyXG5cclxuICAgICAgICAvLyBNYXggdmFsdWUgdGV4dC5cclxuICAgICAgICB3aXRoQXR0cmlidXRlKHRoaXMsICdtYXh0ZXh0JywgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydjb2wnLCAnYS1jZW50ZXItY2VudGVyJywgJ21sLTInXSk7XHJcbiAgICAgICAgICAgIG1heFRleHQuaW5uZXJUZXh0ID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobWF4VGV4dCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gQ3VycmVudCB2YWx1ZSB0ZXh0LlxyXG4gICAgICAgIHdpdGhBdHRyaWJ1dGUodGhpcywgJ3Nob3d2YWx1ZScsIF8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2NvbCcsICdhLWNlbnRlci1jZW50ZXInLCAnbWwtMiddKTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dCEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWx1ZVRleHQuaW5uZXJUZXh0ID0gYCR7dGhpcy5pbnB1dCEudmFsdWV9JWApO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdmFsdWVUZXh0LmlubmVyVGV4dCA9IGAke3RoaXMudmFsdWV9JWApO1xyXG5cclxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHZhbHVlVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgJ3JvdycsIGNvbXBvbmVudHMpKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIocm9vdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2RwaS1yYW5nZScsIFNEUElSYW5nZSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIG9ic2VydmVDaGlsZExpc3QgfSBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBjbGVhck9wdGlvbnMsIGNyZWF0ZU9wdGlvbiwgY3JlYXRlT3B0aW9uR3JvdXAsIHNldE9ubHlPcHRpb24gfSBmcm9tICcuLi9jb3JlL2lucHV0JztcclxuaW1wb3J0IHN0cmVhbURlY2tDbGllbnQgZnJvbSAnLi4vc3RyZWFtLWRlY2svc3RyZWFtLWRlY2stY2xpZW50JztcclxuaW1wb3J0IFNEUElJbnB1dCBmcm9tICcuL3NkcGktaW5wdXQnO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbiB7XHJcbiAgICBjaGlsZHJlbj86IE9wdGlvbltdO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHZhbHVlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTRFBJU2VsZWN0IGV4dGVuZHMgU0RQSUlucHV0PEhUTUxTZWxlY3RFbGVtZW50PiB7XHJcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoQnV0dG9uPzogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgLyogR2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhpcyBjb21wb25lbnQgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNldHMgdGhlIGlucHV0LCBhbmQgcmVmcmVzaCBidXR0b24sIHRvIGRpc2FibGVkICovXHJcbiAgICBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5kaXNhYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGEgcmVmcmVzaCBvZiB0aGUgZHJvcCBkb3duLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5yZWZyZXNoQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2VFbmRwb2ludCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhc291cmNlJyk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhU291cmNlRW5kcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE9wdGlvbnMoZGF0YVNvdXJjZUVuZHBvaW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBmb3IgYmVzcG9rZSByZW5kZXJpbmcgdG8gdGhlIHNwZWNpZmllZCByb290IGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdCBUaGUgcm9vdCBlbGVtZW50IHRvIGFwcGVuZCBpdGVtcyB0by5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcihyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBzaG93IGEgcmVmcmVzaCBidXR0b24uXHJcbiAgICAgICAgY29uc3QgcmVmcmVzaEVuZHBvaW50ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3JlZnJlc2gnKTtcclxuICAgICAgICBpZiAocmVmcmVzaEVuZHBvaW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsncmVmcmVzaC1pY29uJ10pO1xyXG4gICAgICAgICAgICByb290LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAnZGl2JyxcclxuICAgICAgICAgICAgICAgICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29sJywgJ2Ytc3RyZXRjaCddLCBbdGhpcy5pbnB1dF0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnY29sJywgJ21sLTInXSwgW3RoaXMucmVmcmVzaEJ1dHRvbl0pXHJcbiAgICAgICAgICAgICAgICBdKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmxvYWRPcHRpb25zKHJlZnJlc2hFbmRwb2ludCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaG93IHdlIHNob3VsZCBwb3B1bGF0ZSB0aGUgc2VsZWN0IGlucHV0LlxyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2VFbmRwb2ludCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhc291cmNlJyk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2VFbmRwb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRPcHRpb25zKGRhdGFTb3VyY2VFbmRwb2ludCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZUNoaWxkTGlzdCh0aGlzLCAoYWRkZWQ6IE5vZGUpID0+IHRoaXMuaW5wdXQ/LmFwcGVuZENoaWxkKGFkZGVkKSwgJ09QVEdST1VQJywgJ09QVElPTicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgdGhlIG9wdGlvbnMgZnJvbSB0aGUgc3BlY2lmaWVkIGRhdGEgc291cmNlLCBhbmQgcG9wdWxhdGVzIHRoZSBpbnB1dC5cclxuICAgICAqIEBwYXJhbSBkYXRhU291cmNlRW5kcG9pbnQgVGhlIG5hbWUgb2YgdGhlIGVuZHBvaW50IHRvIHJldHJpZXZlIHRoZSBvcHRpb25zIGZyb20uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgbG9hZE9wdGlvbnMoZGF0YVNvdXJjZUVuZHBvaW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTG9hZCB0aGUgb3B0aW9ucy5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gc3RyZWFtRGVja0NsaWVudC5nZXQ8T3B0aW9uW10+KGRhdGFTb3VyY2VFbmRwb2ludCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc2V0T25seU9wdGlvbih0aGlzLmlucHV0LCAnTG9hZGluZy4uLicpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIG9wdGlvbnMuXHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IHJlcXVlc3Q7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UucGF5bG9hZCAmJiBkYXRhU291cmNlLnBheWxvYWQuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoPE9wdGlvbltdPmRhdGFTb3VyY2UucGF5bG9hZC5kYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPbmx5T3B0aW9uKHRoaXMuaW5wdXQsICdGYWlsZWQgdG8gbG9hZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG9wdGlvbnMgb2YgdGhlIGlucHV0IHRvIHRoZSBzcGVjaWZpZWQgb3B0aW9ucy5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldE9wdGlvbnMob3B0aW9ucz86IE9wdGlvbltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlucHV0IHx8ICFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcE9wdGlvbnMgPSAoaXRlbTogT3B0aW9uKTogSFRNTE9wdEdyb3VwRWxlbWVudCB8IEhUTUxPcHRpb25FbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5XHJcbiAgICAgICAgICAgICAgICA/IGNyZWF0ZU9wdGlvbkdyb3VwKGl0ZW0ubGFiZWwsIGl0ZW0uY2hpbGRyZW4/Lm1hcChtYXBPcHRpb25zKSlcclxuICAgICAgICAgICAgICAgIDogY3JlYXRlT3B0aW9uKGl0ZW0ubGFiZWwsIGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJPcHRpb25zKHRoaXMuaW5wdXQpO1xyXG4gICAgICAgIG9wdGlvbnMubWFwKG1hcE9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHRoaXMuaW5wdXQ/Lm9wdGlvbnMuYWRkKG9wdGlvbikpO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy52YWx1ZSB8fCB0aGlzLmdldEF0dHJpYnV0ZSgnZGVmYXVsdCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NkcGktc2VsZWN0JywgU0RQSVNlbGVjdCk7XHJcbiIsImltcG9ydCBTRFBJSW5wdXQgZnJvbSAnLi9zZHBpLWlucHV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNEUElUZXh0IGV4dGVuZHMgU0RQSUlucHV0PEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICAgIC8qIEdldHMgdGhlIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHNhdmluZyBzaG91bGQgYmUgZGVsYXllZDsgdGhpcyB0eXBpY2FsbHkgYXBwbGllcyB0byBpbnB1dHMgdGhhdCBjYW4gY2hhbmdlIGZyZXF1ZW50bHkuICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzRGVsYXllZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBmb3IgYmVzcG9rZSByZW5kZXJpbmcgdG8gdGhlIHNwZWNpZmllZCByb290IGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdCBUaGUgcm9vdCBlbGVtZW50IHRvIGFwcGVuZCBpdGVtcyB0by5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcihyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHJcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcclxuICAgICAgICBzdXBlci5yZW5kZXIocm9vdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2RwaS10ZXh0JywgU0RQSVRleHQpO1xyXG4iLCIvKipcclxuICogQ3JlYXRlcyBhIG5ldyBlbGVtZW50LlxyXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgZWxlbWVudHMgdGFnIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgVGhlIG9wdGlvbmFsIGNsYXNzIG5hbWUgb2YgdGhlIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBUaGUgb3B0aW9uYWwgY2hpbGRyZW4gdG8gYXBwZW5kIHRvIHRoZSBlbGVtZW50LlxyXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHRhZ05hbWU6IEssIGNsYXNzTmFtZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSwgY2hpbGRyZW4/OiBIVE1MRWxlbWVudFtdKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWVzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIChjaGlsZHJlbiA/PyBbXSkuZm9yRWFjaChjaGlsZCA9PiBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsb25lcyB0aGUgYXR0cmlidXRlIHZhbHVlIGZyb20gdGhlIHNvdXJjZSB0byB0aGUgdGFyZ2V0OyBmYWxscyBiYWNrIHRvIGRlZmF1bHQgdmFsdWUgd2hlbiBzcGVjaWZpZWQsIGFuZCB0aGUgYXR0cmlidXRlIHdhcyBub3QgZm91bmQuXHJcbiAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudC5cclxuICogQHBhcmFtIGF0dHJOYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZS5cclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBUaGUgb3B0aW9uYWwgZGVmYXVsdCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUF0dHJpYnV0ZU9yRGVmYXVsdChzb3VyY2U6IEhUTUxFbGVtZW50LCB0YXJnZXQ6IEhUTUxFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gc291cmNlLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnNlcnZlcyB0aGUgY2hpbGQgbGlzdCBvZiB0aGUgdGFyZ2V0LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgbm9kZSB0byBvYnNlcnZlLlxyXG4gKiBAcGFyYW0gYWRkZWRDYWxsYmFjayBUaGUgY2FsbGJhY2sgaW52b2tlZCB3aGVuIG5vZGVzIHdlcmUgYWRkZWQuXHJcbiAqIEBwYXJhbSBmaWx0ZXIgVGhlIGZpbHRlciB0aGF0IGRlZmluZXMgdGhlIG5vZGUgbGlzdCB0byBpbnZva2UgdGhlIGFkZGVkIGNhbGxiYWNrIGZvci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ2hpbGRMaXN0KHRhcmdldDogTm9kZSwgYWRkZWRDYWxsYmFjazogKG5vZGU6IE5vZGUpID0+IHZvaWQsIC4uLmZpbHRlcjogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGFkZGVkQ2FsbGJhY2sobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9KS5vYnNlcnZlKHRhcmdldCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBhdHRyaWJ1dGUgd2hlbiB0aGUgdmFsdWUgaXMgZGVmaW5lZDsgb3RoZXJ3aXNlIHRoZSBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cclxuICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gdXBkYXRlLlxyXG4gKiBAcGFyYW0gYXR0ck5hbWUgVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS5cclxuICogQHBhcmFtIHZhbHVlIFRoZSBvcHRpb25hbCBhdHRyaWJ1dGUgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlKHRhcmdldD86IEhUTUxFbGVtZW50LCBhdHRyTmFtZT86IHN0cmluZywgdmFsdWU/OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAodGFyZ2V0ICYmIGF0dHJOYW1lKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnZva2VzIHRoZSBhY3Rpb24gd2hlbiB0aGUgZWxlbWVudCBjb250YWlucyB0aGUgYXR0cmlidXRlLlxyXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgYXR0cmlidXRlIGV4aXN0cy5cclxuICogQHBhcmFtIGF0dHJOYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZS5cclxuICogQHBhcmFtIHN1Y2Nlc3MgVGhlIGFjdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgYXR0cmlidXRlIHByZXNlbnQuXHJcbiAqIEBwYXJhbSBmYWlsdXJlIFRoZSBhY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIGF0dHJpYnV0ZSB3YXMgbm90IHByZXNlbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEF0dHJpYnV0ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgc3VjY2Vzcz86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLCBmYWlsdXJlPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3ModmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmYWlsdXJlICYmIGZhaWx1cmUoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogUHJvdmlkZXMgYW4gZXZlbnQgZGlzcGF0Y2hlciB3aGVyZWJ5IGhhbmRsZXJzIGNhbiBzdWJzY3JpYmUgdG8gZXZlbnRzIHRoYXQgYXJlIGxhdGVyIGRpc3BhdGNoZWQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE1hbmFnZXI8VD4gaW1wbGVtZW50cyBJRXZlbnREaXNwYXRjaGVyPFQ+LCBJRXZlbnRTdWJzY3JpYmVyPFQ+IHtcclxuICAgIHByaXZhdGUgaGFuZGxlcnM6IElFdmVudEhhbmRsZXI8VD5bXSA9IFtdO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIERpc3BhdGNoZXMgdGhlIGV2ZW50IGZvciBhbGwgaGFuZGxlcnMuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBlYWNoIGhhbmRsZXIgd2l0aC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3BhdGNoKGFyZ3M6IFQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBoYW5kbGVyIHRvIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjxUPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlcyB0aGUgaGFuZGxlciBmcm9tIHRoZSBldmVudC5cclxuICAgICAqIEBwYXJhbSB7SUV2ZW50SGFuZGxlcjxUPn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byByZW1vdmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bnN1YnNjcmliZShoYW5kbGVyOiBJRXZlbnRIYW5kbGVyPFQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFuIGV2ZW50IHN1YnNjcmliZXIgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTdWJzY3JpYmVyPFQ+IHtcclxuICAgIHN1YnNjcmliZShoYW5kbGVyOiBJRXZlbnRIYW5kbGVyPFQ+KTogdm9pZDtcclxuICAgIHVuc3Vic2NyaWJlKGhhbmRsZXI6IElFdmVudEhhbmRsZXI8VD4pOiB2b2lkXHJcbn1cclxuXHJcbi8qIEFuIGV2ZW50IGRpc3BhdGNoZXIgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnREaXNwYXRjaGVyPFQ+IHtcclxuICAgIGRpc3BhdGNoKGFyZ3M6IFQpOiB2b2lkO1xyXG59XHJcblxyXG4vKiBBbiBldmVudCBoYW5kbGVyICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICAoYXJnczogVCk6IHZvaWQ7XHJcbn1cclxuIiwiZXhwb3J0IHR5cGUgSFRNTElucHV0XHJcbiAgICA9IEhUTUxCdXR0b25FbGVtZW50XHJcbiAgICB8IEhUTUxJbnB1dEVsZW1lbnRcclxuICAgIHwgSFRNTFNlbGVjdEVsZW1lbnRcclxuICAgIHwgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGNoYW5nZSBhbmQgaW5wdXQgZXZlbnRzLlxyXG4gKiBAcGFyYW0gaW5wdXQgVGhlIGlucHV0IHRvIG1vbml0b3IuXHJcbiAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgZXZlbnQgbGlzdGVuZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYW55Q2hhbmdlKGlucHV0OiBIVE1MSW5wdXQsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KSB7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBsaXN0ZW5lcik7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGxpc3RlbmVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYWxsIG9wdGlvbnMgZnJvbSB0aGUgaW5wdXQuXHJcbiAqIEBwYXJhbSBpbnB1dCBUaGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJPcHRpb25zKGlucHV0OiBIVE1MU2VsZWN0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGlucHV0LmNoaWxkTm9kZXMpIHtcclxuICAgICAgICB3aGlsZSAoaW5wdXQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDaGlsZChpbnB1dC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG9wdGlvbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gdGV4dCBUaGUgb3B0aW9uIHRleHQuXHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgb3B0aW9uIHZhbHVlLlxyXG4gKiBAcmV0dXJucyBUaGUgb3B0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbih0ZXh0OiBzdHJpbmcsIHZhbHVlPzogYW55KTogSFRNTE9wdGlvbkVsZW1lbnQge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24udGV4dCA9IHRleHQ7XHJcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBvcHRpb24gZ3JvdXAgZWxlbWVudC5cclxuICogQHBhcmFtIGxhYmVsIFRoZSBvcHRpb24gZ3JvdXAgbGFiZWwuXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBUaGUgb3B0aW9uYWwgY2hpbGRyZW4uXHJcbiAqIEByZXR1cm5zIFRoZSBvcHRpb24gZ3JvdXAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3B0aW9uR3JvdXAobGFiZWw6IHN0cmluZywgY2hpbGRyZW4/OiBIVE1MT3B0R3JvdXBFbGVtZW50W10gfCBIVE1MT3B0aW9uRWxlbWVudFtdKTogSFRNTE9wdEdyb3VwRWxlbWVudCB7XHJcbiAgICBjb25zdCBvcHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XHJcbiAgICBvcHRHcm91cC5sYWJlbCA9IGxhYmVsO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gb3B0R3JvdXAuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3B0R3JvdXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwYXRjaGVzIHRoZSBjaGFuZ2UgZXZlbnQuXHJcbiAqIEBwYXJhbSBpbnB1dCBUaGUgaW5wdXQgdG8gZGlzcGF0Y2ggdGhlIGNoYW5nZSBldmVudCBvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaENoYW5nZShpbnB1dDogSFRNTElucHV0KSB7XHJcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhbGwgaXRlbXMgd2l0aGluIHRoZSBzZWxlY3QgZWxlbWVudCwgYW5kIGFwcGVuZHMgdGhlIHNvbGUgb3B0aW9uLlxyXG4gKiBAcGFyYW0gaW5wdXQgVGhlIHNlbGVjdCBpbnB1dCB0byBhbWVuZC5cclxuICogQHBhcmFtIGxhYmVsIFRoZSBsYWJlbCBvZiB0aGUgb25seSBvcHRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T25seU9wdGlvbihpbnB1dDogSFRNTFNlbGVjdEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcpIHtcclxuICAgIGNsZWFyT3B0aW9ucyhpbnB1dCk7XHJcblxyXG4gICAgaW5wdXQub3B0aW9ucy5hZGQoY3JlYXRlT3B0aW9uKGxhYmVsLCAnJykpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxufVxyXG4iLCIvKipcclxuICogUHJvdmlkZXMgYSBwcm9taXNlIGNvbXBsZXRpb24gc291cmNlIHdoZXJlYnkgYSBwcm9taXNlIGNhbiBiZSByZXNvbHZlZCBhdCBhIGxhdGVyIHN0YWdlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcHJvbWlzZTogUHJvbWlzZTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGEgcHJvbWlzZSBjb21wbGV0aW9uIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQgPSBfID0+IHsgfTtcclxuICAgIHByaXZhdGUgcmVzb2x2ZTogKHZhbHVlOiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQgPSBfID0+IHsgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJvbWlzZSgpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHJlc3VsdCBvZiB0aGUgaW5uZXIgcHJvbWlzZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRSZXN1bHQodmFsdWU6IFQgfCBQcm9taXNlTGlrZTxUPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWplY3RzIHRoZSBpbm5lciBwcm9taXNlLlxyXG4gICAgICogQHBhcmFtIHJlYXNvbiBUaGUgcmVhc29uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RXhjZXB0aW9uKHJlYXNvbj86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVqZWN0KHJlYXNvbik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEEgaGVscGVyIG1ldGhvZCBmb3IgdHJpZ2dlcmluZyBhbmQgZGVsYXlpbmcgYSB0aW1lb3V0LlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB0aW1lb3V0IGV4cGlyZXMuXHJcbiAqIEBwYXJhbSB0aW1lb3V0IFRoZSB0aW1lb3V0IGR1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KGNhbGxiYWNrOiAoKSA9PiB2b2lkLCB0aW1lb3V0OiBudW1iZXIpOiAoKSA9PiB2b2lkIHtcclxuICAgIGxldCBoYW5kbGU6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICBoYW5kbGUgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lb3V0LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdlbmVyYXRlcyBhIFwidW5pcXVlXCIgaWRlbnRpZmllci5cclxuICogQHJldHVybnMgVGhlIHVuaXF1ZSBpZGVudGlmaWVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVVSUQoKTogc3RyaW5nIHtcclxuICAgIGxldCBjaHI0ID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoLTQpO1xyXG4gICAgcmV0dXJuIGNocjQoKSArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArICctJyArIGNocjQoKSArIGNocjQoKSArIGNocjQoKTtcclxufSIsImltcG9ydCBzdHJlYW1EZWNrQ2xpZW50IGZyb20gJy4vc3RyZWFtLWRlY2stY2xpZW50JztcclxuaW1wb3J0IHN0cmVhbURlY2tDb25uZWN0aW9uIGZyb20gJy4vc3RyZWFtLWRlY2stY29ubmVjdGlvbic7XHJcblxyXG4vKiBUaGUgU3RyZWFtIERlY2sgY2xpZW50ICovXHJcbndpbmRvdy5zdHJlYW1EZWNrQ2xpZW50ID0gc3RyZWFtRGVja0NsaWVudDtcclxuXHJcbmNvbnN0IGV4aXN0aW5nID0gd2luZG93LmNvbm5lY3RFbGdhdG9TdHJlYW1EZWNrU29ja2V0O1xyXG5cclxuLyoqXHJcbiAqIENhbGxlZCBieSB0aGUgU3RyZWFtIERlY2sgdG8gZW5hYmxlIHJlZ2lzdHJhdGlvbiBvZiB0aGUgcHJvcGVydHkgaW5zcGVjdG9yLlxyXG4gKiBAcGFyYW0gaW5Qb3J0IFRoZSBwb3J0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIHRoZSBXZWJTb2NrZXQuXHJcbiAqIEBwYXJhbSBpblByb3BlcnR5SW5zcGVjdG9yVVVJRCBBIHVuaXF1ZSBpZGVudGlmaWVyIHN0cmluZyB0byByZWdpc3RlciBQcm9wZXJ0eSBJbnNwZWN0b3Igd2l0aCBTdHJlYW0gRGVjayBzb2Z0d2FyZS5cclxuICogQHBhcmFtIGluUmVnaXN0ZXJFdmVudCBUaGUgZXZlbnQgdHlwZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHJlZ2lzdGVyIHRoZSBwbHVnaW4gb25jZSB0aGUgV2ViU29ja2V0IGlzIG9wZW5lZC4gRm9yIFByb3BlcnR5IEluc3BlY3RvciB0aGlzIGlzIFwicmVnaXN0ZXJQcm9wZXJ0eUluc3BlY3RvclwiLlxyXG4gKiBAcGFyYW0gaW5JbmZvIEEganNvbiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYXBwbGljYXRpb24uXHJcbiAqIEBwYXJhbSBpbkFjdGlvbkluZm8gQSBqc29uIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhY3Rpb24uXHJcbiAqL1xyXG53aW5kb3cuY29ubmVjdEVsZ2F0b1N0cmVhbURlY2tTb2NrZXQgPSBmdW5jdGlvbiAoaW5Qb3J0OiBzdHJpbmcsIGluUHJvcGVydHlJbnNwZWN0b3JVVUlEOiBzdHJpbmcsIGluUmVnaXN0ZXJFdmVudDogc3RyaW5nLCBpbkluZm86IHN0cmluZywgaW5BY3Rpb25JbmZvOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIGV4aXN0aW5nKGluUG9ydCwgaW5Qcm9wZXJ0eUluc3BlY3RvclVVSUQsIGluUmVnaXN0ZXJFdmVudCwgaW5JbmZvLCBpbkFjdGlvbkluZm8pXHJcbiAgICB9O1xyXG5cclxuICAgIHN0cmVhbURlY2tDb25uZWN0aW9uLmNvbm5lY3QoaW5Qb3J0LCBpblByb3BlcnR5SW5zcGVjdG9yVVVJRCwgaW5SZWdpc3RlckV2ZW50LCBpbkluZm8sIGluQWN0aW9uSW5mbyk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEFjdGlvbkV2ZW50QXJnc1dpdGhQYXlsb2FkLCBBY3Rpb25QYXlsb2FkLCBTZXR0aW5nc1BheWxvYWQsIFN0cmVhbURlY2tFdmVudEFyZ3NXaXRoUGF5bG9hZFxyXG59IGZyb20gJ3N0cmVhbS1kZWNrJztcclxuXHJcbmltcG9ydCBFdmVudE1hbmFnZXIsIHsgSUV2ZW50U3Vic2NyaWJlciB9IGZyb20gJy4uL2NvcmUvZXZlbnQtZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi4vY29yZS90aW1lb3V0JztcclxuaW1wb3J0IHN0cmVhbURlY2tDbGllbnQgZnJvbSAnLi9zdHJlYW0tZGVjay1jbGllbnQnO1xyXG5pbXBvcnQgc3RyZWFtRGVja0Nvbm5lY3Rpb24gZnJvbSAnLi9zdHJlYW0tZGVjay1jb25uZWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JlT2JqZWN0IHtcclxuICAgIHZhbHVlPzogYW55O1xyXG4gICAgY2hhbmdlOiBJRXZlbnRTdWJzY3JpYmVyPHZvaWQ+O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBzdG9yZSBmb3IgbWFuYWdpbmcgc2V0dGluZ3Mgc3RvcmVkIHdpdGhpbiB0aGUgU3RyZWFtIERlY2suXHJcbiAqL1xyXG5jbGFzcyBTdG9yZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9nbG9iYWxTZXR0aW5nc0NoYW5nZTogRXZlbnRNYW5hZ2VyPGFueT4gPSBuZXcgRXZlbnRNYW5hZ2VyPGFueT4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NldHRpbmdzQ2hhbmdlOiBFdmVudE1hbmFnZXI8YW55PiA9IG5ldyBFdmVudE1hbmFnZXI8YW55PigpO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgZ2xvYmFsU2V0dGluZ3NDaGFuZ2UoKTogSUV2ZW50U3Vic2NyaWJlcjxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2xvYmFsU2V0dGluZ3NDaGFuZ2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNldHRpbmdzQ2hhbmdlKCk6IElFdmVudFN1YnNjcmliZXI8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzQ2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2xvYmFsU2V0dGluZ3M6IGFueTtcclxuICAgIHByaXZhdGUgc2V0dGluZ3M6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaGVzIHRoZSBTdHJlYW0gRGVjayBjbGllbnQgdG8gdGhlIHN0b3JlLlxyXG4gICAgICogQHBhcmFtIGNsaWVudCBUaGUgU3RyZWFtIERlY2sgY2xpZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29ubmVjdChhY3Rpb25JbmZvOiBBY3Rpb25FdmVudEFyZ3NXaXRoUGF5bG9hZDxBY3Rpb25QYXlsb2FkPik6IHZvaWQge1xyXG4gICAgICAgIHN0cmVhbURlY2tDbGllbnQuZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzLnN1YnNjcmliZSgoZGF0YTogU3RyZWFtRGVja0V2ZW50QXJnc1dpdGhQYXlsb2FkPFNldHRpbmdzUGF5bG9hZD4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXR0aW5ncyA9IGRhdGEucGF5bG9hZC5zZXR0aW5ncztcclxuICAgICAgICAgICAgdGhpcy5fZ2xvYmFsU2V0dGluZ3NDaGFuZ2UuZGlzcGF0Y2godGhpcy5nbG9iYWxTZXR0aW5ncyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3RyZWFtRGVja0NsaWVudC5kaWRSZWNlaXZlU2V0dGluZ3Muc3Vic2NyaWJlKChkYXRhOiBBY3Rpb25FdmVudEFyZ3NXaXRoUGF5bG9hZDxTZXR0aW5nc1BheWxvYWQ+KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hTZXR0aW5ncyhkYXRhKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoU2V0dGluZ3MoYWN0aW9uSW5mbyk7XHJcbiAgICAgICAgc3RyZWFtRGVja0NsaWVudC5nZXRHbG9iYWxTZXR0aW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIHRoZSB0aGUgZ2l2ZW4ga2V5IGFzIGEgc2V0dGluZyB0byBiZSBwZXJzaXN0ZWQgaW4gdGhlIFN0cmVhbSBEZWNrOyB3aGVuIHRoZSBzZXR0aW5ncyBjaGFuZ2UsIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkLiBUaGlzIHJldHVybnMgYSBmdW5jdGlvbiBjYXBhYmxlIG9mIHBlcnNpc3RpbmcgdGhlIHZhbHVlIGFnYWluc3QgdGhlIGtleS5cclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIHNldHRpbmdzIGtleS5cclxuICAgICAqIEBwYXJhbSBnbG9iYWwgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZXR0aW5nIGlzIGdsb2JhbC5cclxuICAgICAqIEBwYXJhbSBzZXR0aW5nc0NoYW5nZUNhbGxiYWNrIFRoZSBjYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIHNldHRpbmdzIGNoYW5nZS5cclxuICAgICAqIEByZXR1cm5zIEEgZGVsZWdhdGUgdGhhdCBhbGxvd3MgZm9yIHVwZGF0aW5nIHRoZSBzdG9yZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyKGtleTogc3RyaW5nLCBnbG9iYWw6IGJvb2xlYW4sIHNldHRpbmdzQ2hhbmdlQ2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogKHZhbHVlPzogYW55KSA9PiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5nc0NoYW5nZUhhbmRsZXIgPSAoZGF0YTogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0NoYW5nZUNhbGxiYWNrKGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzLlxyXG4gICAgICAgIGlmIChnbG9iYWwpIHtcclxuICAgICAgICAgICAgc3RvcmUuZ2xvYmFsU2V0dGluZ3NDaGFuZ2Uuc3Vic2NyaWJlKHNldHRpbmdzQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RvcmUuc2V0dGluZ3NDaGFuZ2Uuc3Vic2NyaWJlKHNldHRpbmdzQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXR1cm4gdGhlIHNldHRlciB0aGF0IGFsbG93cyBmb3IgdGhlIHZhbHVlIHRvIGJlIHNhdmVkIHRvIHRoZSBzdG9yZS5cclxuICAgICAgICByZXR1cm4gKHZhbHVlPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JlLnNldChrZXksIHZhbHVlLCBnbG9iYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIGZvciB0aGUgc3BlY2lmaWVkIGtleSBvbiB0aGUgYWN0aW9uIHNldHRpbmdzLlxyXG4gICAgICogQHBhcmFtIGtleSBUaGUgc2V0dGluZ3Mga2V5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzZXR0aW5ncyB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBnbG9iYWwgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZXR0aW5nIGlzIGEgZ2xvYmFsIHNldHRpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlPzogYW55LCBnbG9iYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChnbG9iYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXR0aW5nc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHN0cmVhbURlY2tDbGllbnQuc2V0R2xvYmFsU2V0dGluZ3ModGhpcy5nbG9iYWxTZXR0aW5ncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHN0cmVhbURlY2tDbGllbnQuc2V0U2V0dGluZ3ModGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgbW9uaXRvcnMgYW5kIG1hcHMgY2hhbmdlcyB0by9mcm9tIHRoZSB2YWx1ZSBwcm92aWRlciB0by9mcm9tIHRoZSB1bmRlcmx5aW5nIHN0b3JlLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgc291cmNlIG9iamVjdCB0aGF0IHByb3ZpZGVzIHZhbHVlIG1hcHBpbmcuXHJcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBzZXR0aW5ncyBrZXkuXHJcbiAgICAgKiBAcGFyYW0gZ2xvYmFsIERldGVybWluZXMgd2hldGhlciB0aGUgc2V0dGluZyBpcyBnbG9iYWwuXHJcbiAgICAgKiBAcGFyYW0gdGltZW91dCBUaGUgZGVsYXkgYmVmb3JlIHRoZSBjaGFuZ2VzIGFyZSBzYXZlZDsgd2hlbiB1bmRlZmluZWQgdGhlIHNhdmUgd2lsbCBvY2N1ciBvbiBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2Uob2JqOiBJU3RvcmVPYmplY3QsIGtleTogc3RyaW5nLCBnbG9iYWw6IGJvb2xlYW4sIHRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSAyNTApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzYXZlID0gc3RvcmUucmVnaXN0ZXIoa2V5LCBnbG9iYWwsICh2YWx1ZT86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqLnZhbHVlICE9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGltZW91dCkge1xyXG4gICAgICAgICAgICBvYmouY2hhbmdlLnN1YnNjcmliZShkZWxheSgoKSA9PiBzYXZlKG9iai52YWx1ZSksIHRpbWVvdXQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmouY2hhbmdlLnN1YnNjcmliZSgoKSA9PiBzYXZlKG9iai52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BhdGNoZXMgdGhlIHNldHRpbmdzIGNoYW5nZS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGNvbnRhaW5pbmcgdGhlIHNldHRpbmdzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRpc3BhdGNoU2V0dGluZ3MoZGF0YTogQWN0aW9uRXZlbnRBcmdzV2l0aFBheWxvYWQ8U2V0dGluZ3NQYXlsb2FkPikge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBkYXRhLnBheWxvYWQuc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3NDaGFuZ2UuZGlzcGF0Y2godGhpcy5zZXR0aW5ncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKCk7XHJcbihhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBhd2FpdCBzdHJlYW1EZWNrQ29ubmVjdGlvbi53YWl0Rm9yQ29ubmVjdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb25JbmZvID0gYXdhaXQgc3RyZWFtRGVja0Nvbm5lY3Rpb24uZ2V0Q29ubmVjdGlvbkluZm8oKTtcclxuICAgIHN0b3JlLmNvbm5lY3QoY29ubmVjdGlvbkluZm8uYWN0aW9uSW5mbyk7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiaW1wb3J0IHsgUHJvcGVydHlJbnNwZWN0b3JQYXlsb2FkIH0gZnJvbSAnc2hhcnAtZGVjayc7XHJcbmltcG9ydCB7XHJcbiAgICBBY3Rpb25FdmVudEFyZ3NXaXRoUGF5bG9hZCwgU2V0dGluZ3NQYXlsb2FkLCBTdHJlYW1EZWNrRXZlbnRBcmdzLCBTdHJlYW1EZWNrRXZlbnRBcmdzV2l0aFBheWxvYWRcclxufSBmcm9tICdzdHJlYW0tZGVjayc7XHJcblxyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyLCB7IElFdmVudFN1YnNjcmliZXIgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWRpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBnZXRVVUlEIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XHJcbmltcG9ydCBzdHJlYW1EZWNrQ29ubmVjdGlvbiBmcm9tICcuL3N0cmVhbS1kZWNrLWNvbm5lY3Rpb24nO1xyXG5cclxuZW51bSBNZXNzYWdlIHtcclxuICAgIC8vIFNlbnQuXHJcbiAgICBHRVRfU0VUVElOR1MgPSAnZ2V0U2V0dGluZ3MnLFxyXG4gICAgR0VUX0dMT0JBTF9TRVRUSU5HUyA9ICdnZXRHbG9iYWxTZXR0aW5ncycsXHJcbiAgICBMT0dfTUVTU0FHRSA9ICdsb2dNZXNzYWdlJyxcclxuICAgIE9QRU5fVVJMID0gJ29wZW5VcmwnLFxyXG4gICAgU0VUX1NFVFRJTkdTID0gJ3NldFNldHRpbmdzJyxcclxuICAgIFNFVF9HTE9CQUxfU0VUVElOR1MgPSAnc2V0R2xvYmFsU2V0dGluZ3MnLFxyXG4gICAgU0VORF9UT19QTFVHSU4gPSAnc2VuZFRvUGx1Z2luJyxcclxuXHJcbiAgICAvLyBSZWNlaXZlZC5cclxuICAgIERJRF9SRUNFSVZFX0dMT0JBTF9TRVRUSU5HUyA9ICdkaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3MnLFxyXG4gICAgRElEX1JFQ0VJVkVfU0VUVElOR1MgPSAnZGlkUmVjZWl2ZVNldHRpbmdzJyxcclxuICAgIFNFTkRfVE9fUFJPUEVSVFlfSU5TUEVDVE9SID0gJ3NlbmRUb1Byb3BlcnR5SW5zcGVjdG9yJ1xyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBTdHJlYW0gRGVjayBjbGllbnQgd3JhcHBlciBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyZWFtRGVja0NsaWVudCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kaWRSZWNlaXZlR2xvYmFsU2V0dGluZ3M6IEV2ZW50TWFuYWdlcjxTdHJlYW1EZWNrRXZlbnRBcmdzV2l0aFBheWxvYWQ8U2V0dGluZ3NQYXlsb2FkPj4gPSBuZXcgRXZlbnRNYW5hZ2VyPFN0cmVhbURlY2tFdmVudEFyZ3NXaXRoUGF5bG9hZDxTZXR0aW5nc1BheWxvYWQ+PigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGlkUmVjZWl2ZVNldHRpbmdzOiBFdmVudE1hbmFnZXI8QWN0aW9uRXZlbnRBcmdzV2l0aFBheWxvYWQ8U2V0dGluZ3NQYXlsb2FkPj4gPSBuZXcgRXZlbnRNYW5hZ2VyPEFjdGlvbkV2ZW50QXJnc1dpdGhQYXlsb2FkPFNldHRpbmdzUGF5bG9hZD4+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3RyZWFtIERlY2sgY2xpZW50IGNsYXNzLlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN0cmVhbURlY2tDb25uZWN0aW9uLm1lc3NhZ2Uuc3Vic2NyaWJlKHRoaXMub25NZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGlkUmVjZWl2ZUdsb2JhbFNldHRpbmdzKCk6IElFdmVudFN1YnNjcmliZXI8U3RyZWFtRGVja0V2ZW50QXJnc1dpdGhQYXlsb2FkPFNldHRpbmdzUGF5bG9hZD4+IHsgcmV0dXJuIHRoaXMuX2RpZFJlY2VpdmVHbG9iYWxTZXR0aW5nczsgfVxyXG4gICAgcHVibGljIGdldCBkaWRSZWNlaXZlU2V0dGluZ3MoKTogSUV2ZW50U3Vic2NyaWJlcjxBY3Rpb25FdmVudEFyZ3NXaXRoUGF5bG9hZDxTZXR0aW5nc1BheWxvYWQ+PiB7IHJldHVybiB0aGlzLl9kaWRSZWNlaXZlU2V0dGluZ3M7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgYGdldGAgcmVxdWVzdCB0byB0aGUgcGx1Z2luLCB1dGlsaXNpbmcgU2hhcnBEZWNrIGxpYnJhcmllcyBgUHJvcGVydHlJbnNwZWN0b3JNZXRob2RgIGF0dHJpYnV0ZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgb3IgbWV0aG9kLCBpLmUuIFVSSSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzIFRoZSBvcHRpb25hbCBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgcGFyYW1ldGVyc1xyXG4gICAgICogQHJldHVybnMge29iamVjdH0gQSBwcm9taXNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldDxUPihldmVudDogc3RyaW5nLCBwYXJhbWV0ZXJzPzogYW55KTogUHJvbWlzZTxTdHJlYW1EZWNrRXZlbnRBcmdzV2l0aFBheWxvYWQ8UHJvcGVydHlJbnNwZWN0b3JQYXlsb2FkPFQ+Pj4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcclxuICAgICAgICAgICAgcmVxdWVzdElkOiBnZXRVVUlEKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgc3RyZWFtRGVja0Nvbm5lY3Rpb24uZ2V0KFxyXG4gICAgICAgICAgICBNZXNzYWdlLlNFTkRfVE9fUExVR0lOLFxyXG4gICAgICAgICAgICBhcmdzID0+IGFyZ3MuZXZlbnQgPT0gTWVzc2FnZS5TRU5EX1RPX1BST1BFUlRZX0lOU1BFQ1RPUiAmJiBhcmdzLnBheWxvYWQgJiYgYXJncy5wYXlsb2FkLnJlcXVlc3RJZCA9PSByZXF1ZXN0LnJlcXVlc3RJZCxcclxuICAgICAgICAgICAgeyBwYXJhbWV0ZXJzOiB7IC4uLnBhcmFtZXRlcnMgfSwgLi4ucmVxdWVzdCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBnbG9iYWwgc2V0dGluZ3MuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZ2xvYmFsIHNldHRpbmdzIGFzIGEgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEdsb2JhbFNldHRpbmdzKCk6IFByb21pc2U8U3RyZWFtRGVja0V2ZW50QXJnc1dpdGhQYXlsb2FkPFNldHRpbmdzUGF5bG9hZD4+IHtcclxuICAgICAgICByZXR1cm4gc3RyZWFtRGVja0Nvbm5lY3Rpb24uZ2V0KE1lc3NhZ2UuR0VUX0dMT0JBTF9TRVRUSU5HUywgcGF5bG9hZCA9PiBwYXlsb2FkLmV2ZW50ID09IE1lc3NhZ2UuRElEX1JFQ0VJVkVfR0xPQkFMX1NFVFRJTkdTKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdsb2JhbCBzZXR0aW5ncy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZ2xvYmFsIHNldHRpbmdzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0R2xvYmFsU2V0dGluZ3ModmFsdWU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdHJlYW1EZWNrQ29ubmVjdGlvbi5zZW5kKE1lc3NhZ2UuU0VUX0dMT0JBTF9TRVRUSU5HUywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc2V0dGluZ3MuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2V0dGluZ3MgYXMgYSBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2V0dGluZ3MoKTogUHJvbWlzZTxBY3Rpb25FdmVudEFyZ3NXaXRoUGF5bG9hZDxTZXR0aW5nc1BheWxvYWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmVhbURlY2tDb25uZWN0aW9uLmdldChNZXNzYWdlLkdFVF9TRVRUSU5HUywgcGF5bG9hZCA9PiBwYXlsb2FkLmV2ZW50ID09IE1lc3NhZ2UuRElEX1JFQ0VJVkVfU0VUVElOR1MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc2V0dGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNldHRpbmdzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3ModmFsdWU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdHJlYW1EZWNrQ29ubmVjdGlvbi5zZW5kKE1lc3NhZ2UuU0VUX1NFVFRJTkdTLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHJlY2VpdmluZyBhIG1lc3NhZ2UgZnJvbSB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHJlY2VpdmVkIGZyb20gdGhlIFN0cmVhbSBEZWNrIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25NZXNzYWdlKGRhdGE6IFN0cmVhbURlY2tFdmVudEFyZ3MpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuZXZlbnQpIHtcclxuICAgICAgICAgICAgY2FzZSBNZXNzYWdlLkRJRF9SRUNFSVZFX0dMT0JBTF9TRVRUSU5HUzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpZFJlY2VpdmVHbG9iYWxTZXR0aW5ncy5kaXNwYXRjaCg8U3RyZWFtRGVja0V2ZW50QXJnc1dpdGhQYXlsb2FkPFNldHRpbmdzUGF5bG9hZD4+ZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTWVzc2FnZS5ESURfUkVDRUlWRV9TRVRUSU5HUzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpZFJlY2VpdmVTZXR0aW5ncy5kaXNwYXRjaCg8QWN0aW9uRXZlbnRBcmdzV2l0aFBheWxvYWQ8U2V0dGluZ3NQYXlsb2FkPj5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3RyZWFtRGVja0NsaWVudCA9IG5ldyBTdHJlYW1EZWNrQ2xpZW50KCk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0cmVhbURlY2tDbGllbnQ7XHJcbiIsImltcG9ydCB7XHJcbiAgICBBY3Rpb25FdmVudEFyZ3NXaXRoUGF5bG9hZCwgQWN0aW9uUGF5bG9hZCwgUmVnaXN0cmF0aW9uSW5mbywgU3RyZWFtRGVja0V2ZW50QXJnc1xyXG59IGZyb20gJ3N0cmVhbS1kZWNrJztcclxuXHJcbmltcG9ydCBFdmVudE1hbmFnZXIsIHsgSUV2ZW50U3Vic2NyaWJlciB9IGZyb20gJy4uL2NvcmUvZXZlbnQtZGlzcGF0Y2hlcic7XHJcbmltcG9ydCBQcm9taXNlQ29tcGxldGlvblNvdXJjZSBmcm9tICcuLi9jb3JlL3Byb21pc2UtY29tcGxldGlvbi1zb3VyY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29ubmVjdGlvbkluZm8ge1xyXG4gICAgYWN0aW9uSW5mbzogQWN0aW9uRXZlbnRBcmdzV2l0aFBheWxvYWQ8QWN0aW9uUGF5bG9hZD47XHJcbiAgICBpbmZvOiBSZWdpc3RyYXRpb25JbmZvO1xyXG4gICAgcHJvcGVydHlJbnNwZWN0b3JVVUlEOiBzdHJpbmc7XHJcbiAgICByZWdpc3RlckV2ZW50OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgcHJvcGVydHkgaW5zcGVjdG9yIGFuZCB0aGUgU3RyZWFtIERlY2suXHJcbiAqL1xyXG5jbGFzcyBTdHJlYW1EZWNrQ29ubmVjdGlvbiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25uZWN0aW9uOiBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxXZWJTb2NrZXQ+ID0gbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPFdlYlNvY2tldD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nvbm5lY3Rpb25JbmZvOiBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxJQ29ubmVjdGlvbkluZm8+ID0gbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPElDb25uZWN0aW9uSW5mbz4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21lc3NhZ2U6IEV2ZW50TWFuYWdlcjxTdHJlYW1EZWNrRXZlbnRBcmdzPiA9IG5ldyBFdmVudE1hbmFnZXIoKTtcclxuICAgIHByaXZhdGUgX3dlYlNvY2tldD86IFdlYlNvY2tldDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKTogSUV2ZW50U3Vic2NyaWJlcjxTdHJlYW1EZWNrRXZlbnRBcmdzPiB7IHJldHVybiB0aGlzLl9tZXNzYWdlOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25uZWN0cyB0byB0aGUgU3RyZWFtIERlY2suXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCBUaGUgcG9ydCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSB0aGUgV2ViU29ja2V0LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5SW5zcGVjdG9yVVVJRCBBIHVuaXF1ZSBpZGVudGlmaWVyIHN0cmluZyB0byByZWdpc3RlciBQcm9wZXJ0eSBJbnNwZWN0b3Igd2l0aCBTdHJlYW0gRGVjayBzb2Z0d2FyZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWdpc3RlckV2ZW50IFRoZSBldmVudCB0eXBlIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcmVnaXN0ZXIgdGhlIHBsdWdpbiBvbmNlIHRoZSBXZWJTb2NrZXQgaXMgb3BlbmVkLiBGb3IgUHJvcGVydHkgSW5zcGVjdG9yIHRoaXMgaXMgXCJyZWdpc3RlclByb3BlcnR5SW5zcGVjdG9yXCIuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5mbyBBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbkluZm8gQSBKU09OIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBjb25uZWN0KHBvcnQ6IHN0cmluZywgcHJvcGVydHlJbnNwZWN0b3JVVUlEOiBzdHJpbmcsIHJlZ2lzdGVyRXZlbnQ6IHN0cmluZywgaW5mbzogc3RyaW5nLCBhY3Rpb25JbmZvOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dlYlNvY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uSW5mby5zZXRSZXN1bHQoe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uSW5mbzogSlNPTi5wYXJzZShhY3Rpb25JbmZvKSxcclxuICAgICAgICAgICAgICAgIGluZm86IEpTT04ucGFyc2UoaW5mbyksXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUluc3BlY3RvclVVSUQ6IHByb3BlcnR5SW5zcGVjdG9yVVVJRCxcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRXZlbnQ6IHJlZ2lzdGVyRXZlbnRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWdpc3RlciB0aGUgd2ViIHNvY2tldC5cclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJTb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldjogTWVzc2FnZUV2ZW50KSA9PiB0aGlzLl9tZXNzYWdlLmRpc3BhdGNoKEpTT04ucGFyc2UoZXYuZGF0YSkpKTtcclxuICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIFN0cmVhbSBEZWNrLCBhbmQgYXdhaXRzIHRoZSBmaXJzdCBtZXNzYWdlIG1hdGNoaW5nIHRoZSBgd2FpdEZvcmAgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHtTdHJlYW1EZWNrRXZlbnRBcmdzfGFueX0gY2FuQ2FsbGJhY2sgVGhlIGRlbGVnYXRlIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBldmVudCBmdWxmaWxzIHRoZSBjYWxsYmFjayByZXF1aXJlbWVudHMuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmVhbURlY2tFdmVudEFyZ3N8YW55fSBwYXlsb2FkIFRoZSBvcHRpb25hbCBwYXlsb2FkLlxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gVGhlIHByb21pc2UgY29udGFpbmluZyB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0KGV2ZW50OiBzdHJpbmcsIGNhbkNhbGxiYWNrOiAocGF5bG9hZDogU3RyZWFtRGVja0V2ZW50QXJncyB8IGFueSkgPT4gYm9vbGVhbiwgcGF5bG9hZD86IFN0cmVhbURlY2tFdmVudEFyZ3MgfCBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc29sdmVyID0gbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPGFueT4oKTtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RydWN0IHRoZSB0ZW1wb3JhcnkgbGlzdGVuZXIgdGhhdCBpcyByZW1vdmVkIHdoZW4gdGhlIGNhbGxiYWNrIGNhbiBiZSBmdWxpbGxlZC5cclxuICAgICAgICBsZXQgbGlzdGVuZXI6IChhcmdzOiBTdHJlYW1EZWNrRXZlbnRBcmdzKSA9PiB2b2lkO1xyXG4gICAgICAgIGxpc3RlbmVyID0gKGFyZ3M6IFN0cmVhbURlY2tFdmVudEFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhbkNhbGxiYWNrKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UudW5zdWJzY3JpYmUobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIuc2V0UmVzdWx0KGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBd2FpdCBtZXNzYWdlLCBhbmQgc2VuZCB0aGUgcmVxdWVzdC5cclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3Vic2NyaWJlKGxpc3RlbmVyKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNlbmQoZXZlbnQsIHBheWxvYWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZXIucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvbm5lY3Rpb24gaW5mb3JtYXRpb24sIG9uY2UgaXQgaGFzIGJlZW4gc2V0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbm5lY3Rpb24gaW5mby5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldENvbm5lY3Rpb25JbmZvKCk6IFByb21pc2U8SUNvbm5lY3Rpb25JbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIFN0cmVhbSBEZWNrLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxyXG4gICAgICogQHBhcmFtIHthbnl9IHBheWxvYWQgVGhlIG9wdGlvbmFsIHBheWxvYWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZW5kKGV2ZW50OiBzdHJpbmcsIHBheWxvYWQ/OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uSW5mbyA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29ubmVjdGlvbkluZm8ucHJvcGVydHlJbnNwZWN0b3JVVUlELFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogY29ubmVjdGlvbkluZm8uYWN0aW9uSW5mby5hY3Rpb25cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gc2VuZCByZXF1ZXN0ICcke2V2ZW50fScgYXMgdGhlcmUgaXMgbm8gY29ubmVjdGlvbi5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXYWl0cyBmb3IgYW4gYWN0aXZlIGNvbm5lY3Rpb24gdG8gYmUgZXN0YWJsaXNoZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyB3YWl0Rm9yQ29ubmVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBvcGVuIGV2ZW50IG9mIHRoZSB3ZWIgc29ja2V0LlxyXG4gICAgICogQHBhcmFtIGV2IFRoZSBldmVudCBhcmd1bWVudHMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgb25PcGVuKGV2OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uSW5mbyA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnByb21pc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3dlYlNvY2tldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2ViU29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBjb25uZWN0aW9uSW5mby5yZWdpc3RlckV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IGNvbm5lY3Rpb25JbmZvLnByb3BlcnR5SW5zcGVjdG9yVVVJRFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24uc2V0UmVzdWx0KHRoaXMuX3dlYlNvY2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uLnNldEV4Y2VwdGlvbihleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHJlYW1EZWNrQ29ubmVjdGlvbiA9IG5ldyBTdHJlYW1EZWNrQ29ubmVjdGlvbigpO1xyXG5leHBvcnQgZGVmYXVsdCBzdHJlYW1EZWNrQ29ubmVjdGlvbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL3N0cmVhbS1kZWNrL2Nvbm5lY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZHBpLXJhbmdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2RwaS1zZWxlY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZHBpLWNvbG9yJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2RwaS10ZXh0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2RwaS1idXR0b24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZHBpLWNvbnRlbnQnO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9