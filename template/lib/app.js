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

	// require src
	var req = __webpack_require__(1);
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
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Application.coffee": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {global.Application = {
	  loadScene: function(name) {
	    return console.log("Application.loadScene " + name);
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2U4ODdmMTFkNDZkNDMyYzZlNDUiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYyBeXFwuXFwvLipcXC4oanN8Y29mZmVlKSQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9BcHBsaWNhdGlvbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBLHFEQUFNLENBQUMsV0FBUCxHQUFxQjtHQUFBLFdBQVcsU0FBQyxJQUFEO1lBQzlCLE9BQU8sQ0FBQyxHQUFSLENBQVksMkJBQXlCLElBQXJDO0dBRDhCLENBQVgiLCJmaWxlIjoiLi4vbGliL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgM2U4ODdmMTFkNDZkNDMyYzZlNDVcbiAqKi8iLCIvLyByZXF1aXJlIHNyY1xudmFyIHJlcSA9IHJlcXVpcmUuY29udGV4dChcIi4uL3NyY1wiLCB0cnVlLCAvXlxcLlxcLy4qXFwuKGpzfGNvZmZlZSkkLyk7XG5yZXEua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgcmVxKG0pO1xufSk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGNjLmdhbWUub25TdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIEFwcGxpY2F0aW9uLmxvYWRTY2VuZSgnbG9naW4nKTtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21ibyk7XG4gICAgICAgIC8vIC8vbG9hZCByZXNvdXJjZXNcbiAgICAgICAgLy8gY2MuTG9hZGVyU2NlbmUucHJlbG9hZChbXCJyZXMvSGVsbG9Xb3JsZC5wbmdcIl0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHZhciBNeVNjZW5lID0gY2MuU2NlbmUuZXh0ZW5kKHtcbiAgICAgICAgLy8gICAgICAgICBvbkVudGVyOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHNpemUgPSBjYy5kaXJlY3Rvci5nZXRXaW5TaXplKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBjYy5TcHJpdGUuY3JlYXRlKFwicmVzL0hlbGxvV29ybGQucG5nXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzcHJpdGUuc2V0UG9zaXRpb24oc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNwcml0ZS5zZXRTY2FsZSgwLjgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKHNwcml0ZSwgMCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBsYWJlbCA9IGNjLkxhYmVsVFRGLmNyZWF0ZShcIkhlbGxvIFdvcmxkXCIsIFwiQXJpYWxcIiwgNDApO1xuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbC5zZXRQb3NpdGlvbihzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChsYWJlbCwgMSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShuZXcgTXlTY2VuZSgpKTtcbiAgICAgICAgLy8gfSwgdGhpcyk7XG4gICAgfTtcbiAgICBjYy5nYW1lLnJ1bihcImdhbWVDYW52YXNcIik7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2VudHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL0FwcGxpY2F0aW9uLmNvZmZlZVwiOiAyXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL3NyYyBeXFwuXFwvLipcXC4oanN8Y29mZmVlKSRcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJnbG9iYWwuQXBwbGljYXRpb24gPSBsb2FkU2NlbmU6IChuYW1lKSAtPlxuICBjb25zb2xlLmxvZyBcIkFwcGxpY2F0aW9uLmxvYWRTY2VuZSAje25hbWV9XCJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3NyYy9BcHBsaWNhdGlvbi5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9