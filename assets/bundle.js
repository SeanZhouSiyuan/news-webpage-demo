/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var navbarHeight = document.getElementById('header').clientHeight;
    document.getElementById('headline').style.marginTop = navbarHeight + 'px';
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = new Vue({
    el: '#vue-app',
    data: {
        brand: '公司名称',
        sections: [{ name: '主页', isActive: true }, { name: '国内' }, { name: '国际' }, { name: '评论' }, { name: '科技' }, { name: '财经' }, { name: '图辑' }, { name: '音频' }, { name: '视频' }],
        headline: {
            title: '头条新闻标题',
            desc: '头条新闻介绍',
            img: 'sample.jpg',
            imgDesc: '头条图片介绍'
        },
        topStories: [{
            title: '最新消息标题',
            img: 'sample.jpg',
            imgDesc: '最新消息图片介绍'
        }, {
            title: '最新消息标题',
            img: 'sample.jpg',
            imgDesc: '最新消息图片介绍'
        }, { title: '最新消息标题' }, { title: '最新消息标题' }],
        trending: [{
            title: '热门新闻标题',
            img: 'sample.jpg',
            imgDesc: '热门新闻图片介绍'
        }, {
            title: '热门新闻标题',
            img: 'sample.jpg',
            imgDesc: '热门新闻图片介绍'
        }, { title: '热门新闻标题' }, { title: '热门新闻标题' }],
        featured: [{
            title: '专题新闻标题',
            desc: '专题新闻介绍',
            img: 'sample.jpg',
            imgDesc: '图片介绍'
        }, {
            title: '专题新闻标题',
            desc: '专题新闻介绍',
            img: 'sample.jpg',
            imgDesc: '图片介绍'
        }],
        otherStories: [{ title: 'Title 1', desc: 'Description 1' }, { title: 'Title 1', desc: 'Description 1' }, { title: 'Title 1', desc: 'Description 1' }, { title: 'Title 1', desc: 'Description 1' }, { title: 'Title 1', desc: 'Description 1' }, { title: 'Title 1', desc: 'Description 1' }, { title: 'Title 1', desc: 'Description 1' }, { title: 'Title 1', desc: 'Description 1' }],
        china: [{
            title: '国内新闻标题',
            img: 'sample.jpg',
            imgDesc: '国内新闻图片介绍'
        }, {
            title: '国内新闻标题',
            img: 'sample.jpg',
            imgDesc: '国内新闻图片介绍'
        }, {
            title: '国内新闻标题',
            img: 'sample.jpg',
            imgDesc: '国内新闻图片介绍'
        }, {
            title: '国内新闻标题',
            img: 'sample.jpg',
            imgDesc: '国内新闻图片介绍'
        }],
        world: [{
            title: '国际新闻标题',
            img: 'sample.jpg',
            imgDesc: '国际新闻图片介绍'
        }, {
            title: '国际新闻标题',
            img: 'sample.jpg',
            imgDesc: '国际新闻图片介绍'
        }, {
            title: '国际新闻标题',
            img: 'sample.jpg',
            imgDesc: '国际新闻图片介绍'
        }, {
            title: '国际新闻标题',
            img: 'sample.jpg',
            imgDesc: '国际新闻图片介绍'
        }],
        remarks: [{
            title: '评论标题',
            desc: '评论观点概述',
            img: 'sample.jpg',
            imgDesc: '评论图片介绍'
        }, {
            title: '评论标题',
            desc: '评论观点概述',
            img: 'sample.jpg',
            imgDesc: '评论图片介绍'
        }, {
            title: '评论标题',
            desc: '评论观点概述',
            img: 'sample.jpg',
            imgDesc: '评论图片介绍'
        }, {
            title: '评论标题',
            desc: '评论观点概述',
            img: 'sample.jpg',
            imgDesc: '评论图片介绍'
        }],
        navLinks: [{ title: '关于我们' }, { title: '隐私政策' }, { title: '联系我们' }, { title: '服务协议' }, { title: '版权声明' }, { title: '加入我们' }]
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
__webpack_require__(0);

/***/ })
/******/ ]);