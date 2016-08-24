webpackJsonp([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	$('body').html('require jquery success!');
	var Test = __webpack_require__(1);

	console.log(Test);

	var dialog = __webpack_require__(2);

	console.log(dialog);

/***/ },
/* 1 */
/***/ function(module, exports) {

	var str ='I am test.js';

	module.exports = str;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var str = 'I am plugin.js';

	module.exports = str;

/***/ }
]);