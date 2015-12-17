/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	
	console.log(__webpack_require__(2));
	
	// require src
	var req = __webpack_require__(3);
	req.keys().forEach(function (m) {
	  req(m);
	});
	
	window.onload = function(){
	    cc.game.onStart = function(){
	        Application.loadScene('login');
	        // return;
	        // console.log(combo);
	        // //load resources
	        // cc.LoaderScene.preload(["res/HelloWorld.png"], function () {
	        //     var MyScene = cc.Scene.extend({
	        //         onEnter:function () {
	        //             this._super();
	        //             var size = cc.director.getWinSize();
	        //             var sprite = cc.Sprite.create("res/HelloWorld.png");
	        //             sprite.setPosition(size.width / 2, size.height / 2);
	        //             sprite.setScale(0.8);
	        //             this.addChild(sprite, 0);
	        //
	        //             var label = cc.LabelTTF.create("Hello World", "Arial", 40);
	        //             label.setPosition(size.width / 2, size.height / 2);
	        //             this.addChild(label, 1);
	        //         }
	        //     });
	        //     cc.director.runScene(new MyScene());
	        // }, this);
	    };
	    cc.game.run("gameCanvas");
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {global.Application = {
	  loadScene: function(name) {
	    return console.log("Application.loadScene ");
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"test": 1
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmIzYThiYTAzNWIxNjM3NzEwMDUiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vQXBwbGljYXRpb24uY29mZmVlIiwid2VicGFjazovLy8uLi9zcmMvbG9naW4uY29tYm8iLCJ3ZWJwYWNrOi8vLy4uL3NyYyBeXFwuXFwvLipcXC4oanN8Y29mZmVlKSQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBOzs7Ozs7O0FDbkNBLHFEQUFNLENBQUMsV0FBUCxHQUFxQjtHQUFBLFdBQVcsU0FBQyxJQUFEO1lBRTlCLE9BQU8sQ0FBQyxHQUFSLENBQVksd0JBQVo7R0FGOEIsQ0FBWDs7Ozs7Ozs7O0FDQXJCO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vbGliL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmIzYThiYTAzNWIxNjM3NzEwMDVcbiAqKi8iLCJyZXF1aXJlKCcuL0FwcGxpY2F0aW9uLmNvZmZlZScpO1xuXG5jb25zb2xlLmxvZyhyZXF1aXJlKCcuLi9zcmMvbG9naW4uY29tYm8nKSk7XG5cbi8vIHJlcXVpcmUgc3JjXG52YXIgcmVxID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vc3JjXCIsIHRydWUsIC9eXFwuXFwvLipcXC4oanN8Y29mZmVlKSQvKTtcbnJlcS5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICByZXEobSk7XG59KTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgY2MuZ2FtZS5vblN0YXJ0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgQXBwbGljYXRpb24ubG9hZFNjZW5lKCdsb2dpbicpO1xuICAgICAgICAvLyByZXR1cm47XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbWJvKTtcbiAgICAgICAgLy8gLy9sb2FkIHJlc291cmNlc1xuICAgICAgICAvLyBjYy5Mb2FkZXJTY2VuZS5wcmVsb2FkKFtcInJlcy9IZWxsb1dvcmxkLnBuZ1wiXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdmFyIE15U2NlbmUgPSBjYy5TY2VuZS5leHRlbmQoe1xuICAgICAgICAvLyAgICAgICAgIG9uRW50ZXI6ZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgc2l6ZSA9IGNjLmRpcmVjdG9yLmdldFdpblNpemUoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHNwcml0ZSA9IGNjLlNwcml0ZS5jcmVhdGUoXCJyZXMvSGVsbG9Xb3JsZC5wbmdcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNwcml0ZS5zZXRQb3NpdGlvbihzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3ByaXRlLnNldFNjYWxlKDAuOCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ByaXRlLCAwKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIGxhYmVsID0gY2MuTGFiZWxUVEYuY3JlYXRlKFwiSGVsbG8gV29ybGRcIiwgXCJBcmlhbFwiLCA0MCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsLnNldFBvc2l0aW9uKHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKGxhYmVsLCAxKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLnJ1blNjZW5lKG5ldyBNeVNjZW5lKCkpO1xuICAgICAgICAvLyB9LCB0aGlzKTtcbiAgICB9O1xuICAgIGNjLmdhbWUucnVuKFwiZ2FtZUNhbnZhc1wiKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZW50cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJnbG9iYWwuQXBwbGljYXRpb24gPSBsb2FkU2NlbmU6IChuYW1lKSAtPlxuICAjIGNvbnNvbGUubG9nKHJlcXVpcmUobmFtZSkpXG4gIGNvbnNvbGUubG9nIFwiQXBwbGljYXRpb24ubG9hZFNjZW5lICN7fVwiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0FwcGxpY2F0aW9uLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlc3RcIjogMVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL3NyYy9sb2dpbi5jb21ib1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vc3JjIF5cXC5cXC8uKlxcLihqc3xjb2ZmZWUpJFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=